// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartExportJobV2Request, StartExportJobV2Response } from "../models/models_3";
import { StartExportJobV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartExportJobV2Command}.
 */
export interface StartExportJobV2CommandInput extends StartExportJobV2Request {}
/**
 * @public
 *
 * The output of {@link StartExportJobV2Command}.
 */
export interface StartExportJobV2CommandOutput extends StartExportJobV2Response, __MetadataBearer {}

/**
 * <p>Starts an ad hoc export job that writes Security Hub findings to an Amazon Simple Storage Service (Amazon S3) bucket that you own. Because the export runs asynchronously, this operation returns only the <code>ExportJobId</code> of the new job; it doesn't wait for the export to finish. Use <code>GetExportJobV2</code> to poll the job, and <code>ListExportJobsV2</code> to view the export jobs in your account.</p>
 *          <p>Security Hub allows only one export job in the <code>RUNNING</code> state per account at a time. If an export job is already running, this operation returns a <code>ServiceQuotaExceededException</code>. Wait for the running job to finish, or cancel it with <code>CancelExportJobV2</code>, before you start a new one.</p>
 *          <p>Specify the destination bucket and Amazon Web Services Key Management Service (Amazon Web Services KMS) key in the <code>Destination</code> parameter, and the output format (<code>CSV</code> or <code>OCSF_JSON</code>), optional filters, and field selection in the <code>OutputConfiguration</code> parameter. Before you call this operation, you must grant Security Hub permission to write to your bucket and use your Amazon Web Services KMS key by adding the bucket policy and key policy statements shown in the Examples section.</p>
 *          <p>Two identities use your Amazon Web Services KMS key, and each needs its own permission. Security Hub uses the key when it writes the export objects to your bucket. The IAM principal that calls <code>StartExportJobV2</code> must also have <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permissions on the key. The Examples section shows both grants.</p>
 *          <p>A delegated administrator can use the optional <code>Scopes</code> parameter to export findings for specific organizations or organizational units (OUs).</p>
 *          <p>To make the request idempotent, provide a <code>ClientToken</code>. If you retry a <code>StartExportJobV2</code> request with the same <code>ClientToken</code> and the same request parameters, Security Hub returns the <code>ExportJobId</code> of the original job instead of starting a new one. If you reuse a <code>ClientToken</code> with different request parameters, this operation returns a <code>ConflictException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, StartExportJobV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, StartExportJobV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // StartExportJobV2Request
 *   Name: "STRING_VALUE",
 *   Destination: { // ExportDestination Union: only one key present
 *     S3: { // S3ExportDestination
 *       BucketArn: "STRING_VALUE", // required
 *       KmsKeyArn: "STRING_VALUE", // required
 *       ObjectPrefix: "STRING_VALUE",
 *     },
 *   },
 *   OutputConfiguration: { // ExportOutput Union: only one key present
 *     Findings: { // FindingsOutput
 *       Format: "CSV" || "OCSF_JSON", // required
 *       Filters: { // OcsfFindingFilters
 *         CompositeFilters: [ // CompositeFilterList
 *           { // CompositeFilter
 *             StringFilters: [ // OcsfStringFilterList
 *               { // OcsfStringFilter
 *                 FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.traits.category" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.name" || "resources.owner.account.uid" || "resources.owner.org.uid" || "resources.owner.account.name" || "resources.provider" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "cloud.account.name" || "vendor_attributes.severity",
 *                 Filter: { // StringFilter
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             DateFilters: [ // OcsfDateFilterList
 *               { // OcsfDateFilter
 *                 FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt",
 *                 Filter: { // DateFilter
 *                   Start: "STRING_VALUE",
 *                   End: "STRING_VALUE",
 *                   DateRange: { // DateRange
 *                     Value: Number("int"),
 *                     Unit: "DAYS",
 *                     Comparison: "WITHIN" || "OLDER_THAN",
 *                   },
 *                 },
 *               },
 *             ],
 *             BooleanFilters: [ // OcsfBooleanFilterList
 *               { // OcsfBooleanFilter
 *                 FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 *                 Filter: { // BooleanFilter
 *                   Value: true || false,
 *                 },
 *               },
 *             ],
 *             NumberFilters: [ // OcsfNumberFilterList
 *               { // OcsfNumberFilter
 *                 FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count" || "vulnerabilities.cve.cvss.base_score" || "vendor_attributes.severity_id",
 *                 Filter: { // NumberFilter
 *                   Gte: Number("double"),
 *                   Lte: Number("double"),
 *                   Eq: Number("double"),
 *                   Gt: Number("double"),
 *                   Lt: Number("double"),
 *                 },
 *               },
 *             ],
 *             MapFilters: [ // OcsfMapFilterList
 *               { // OcsfMapFilter
 *                 FieldName: "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags",
 *                 Filter: { // MapFilter
 *                   Key: "STRING_VALUE",
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *                 },
 *               },
 *             ],
 *             IpFilters: [ // OcsfIpFilterList
 *               { // OcsfIpFilter
 *                 FieldName: "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 *                 Filter: { // IpFilter
 *                   Cidr: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: [
 *               {
 *                 StringFilters: [
 *                   {
 *                     FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.traits.category" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.name" || "resources.owner.account.uid" || "resources.owner.org.uid" || "resources.owner.account.name" || "resources.provider" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "cloud.account.name" || "vendor_attributes.severity",
 *                     Filter: {
 *                       Value: "STRING_VALUE",
 *                       Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                     },
 *                   },
 *                 ],
 *                 DateFilters: [
 *                   {
 *                     FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt",
 *                     Filter: {
 *                       Start: "STRING_VALUE",
 *                       End: "STRING_VALUE",
 *                       DateRange: {
 *                         Value: Number("int"),
 *                         Unit: "DAYS",
 *                         Comparison: "WITHIN" || "OLDER_THAN",
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 BooleanFilters: [
 *                   {
 *                     FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 *                     Filter: {
 *                       Value: true || false,
 *                     },
 *                   },
 *                 ],
 *                 NumberFilters: [
 *                   {
 *                     FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count" || "vulnerabilities.cve.cvss.base_score" || "vendor_attributes.severity_id",
 *                     Filter: {
 *                       Gte: Number("double"),
 *                       Lte: Number("double"),
 *                       Eq: Number("double"),
 *                       Gt: Number("double"),
 *                       Lt: Number("double"),
 *                     },
 *                   },
 *                 ],
 *                 MapFilters: [
 *                   {
 *                     FieldName: "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags",
 *                     Filter: {
 *                       Key: "STRING_VALUE",
 *                       Value: "STRING_VALUE",
 *                       Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *                     },
 *                   },
 *                 ],
 *                 IpFilters: [
 *                   {
 *                     FieldName: "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 *                     Filter: {
 *                       Cidr: "STRING_VALUE",
 *                     },
 *                   },
 *                 ],
 *                 NestedCompositeFilters: "<CompositeFilterList>",
 *                 Operator: "AND" || "OR",
 *               },
 *             ],
 *             Operator: "AND" || "OR",
 *           },
 *         ],
 *         CompositeOperator: "AND" || "OR",
 *       },
 *       SelectedFields: [ // FindingsSelectedFieldList
 *         "metadata.uid" || "activity_name" || "cloud.account.name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.traits.category" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.feature.uid" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.name" || "resources.owner.account.uid" || "resources.owner.org.uid" || "resources.owner.account.name" || "resources.provider" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.cvss.vendor_name" || "vulnerabilities.cve.cvss.version" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "vendor_attributes.severity" || "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count" || "vulnerabilities.cve.cvss.base_score" || "vendor_attributes.severity_id" || "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt" || "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available" || "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags" || "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 *       ],
 *     },
 *   },
 *   Scopes: { // ExportScopes
 *     AwsOrganizations: [ // AwsOrganizationScopeList
 *       { // AwsOrganizationScope
 *         OrganizationId: "STRING_VALUE",
 *         OrganizationalUnitId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartExportJobV2Command(input);
 * const response = await client.send(command);
 * // { // StartExportJobV2Response
 * //   ExportJobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartExportJobV2CommandInput - {@link StartExportJobV2CommandInput}
 * @returns {@link StartExportJobV2CommandOutput}
 * @see {@link StartExportJobV2CommandInput} for command's `input` shape.
 * @see {@link StartExportJobV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link OrganizationalUnitNotFoundException} (client fault)
 *  <p>The request failed because one or more organizational units specified in the request don't exist within the caller's organization.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>The request failed because one or more organizations specified in the request don't exist or don't belong to the caller's organization.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed the service quota limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example Example – Starting a CSV export of critical findings
 * ```javascript
 * // The following example starts an export that writes selected fields of new, critical findings to an Amazon S3 bucket in CSV format.
 * const input = {
 *   ClientToken: "b3d1f9a2-1c4e-4b9a-9f2e-EXAMPLE11111",
 *   Destination: {
 *     S3: {
 *       BucketArn: "arn:aws:s3:::amzn-s3-demo-bucket",
 *       KmsKeyArn: "arn:aws:kms:aa-example-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       ObjectPrefix: "security-hub-exports/2026-Q1"
 *     }
 *   },
 *   Name: "quarterly-critical-findings",
 *   OutputConfiguration: {
 *     Findings: {
 *       Filters: {
 *         CompositeFilters: [
 *           {
 *             Operator: "AND",
 *             StringFilters: [
 *               {
 *                 FieldName: "severity",
 *                 Filter: {
 *                   Comparison: "EQUALS",
 *                   Value: "Critical"
 *                 }
 *               },
 *               {
 *                 FieldName: "status",
 *                 Filter: {
 *                   Comparison: "EQUALS",
 *                   Value: "New"
 *                 }
 *               }
 *             ]
 *           }
 *         ],
 *         CompositeOperator: "AND"
 *       },
 *       Format: "CSV",
 *       SelectedFields: [
 *         "finding_info.title",
 *         "severity",
 *         "status",
 *         "cloud.account.uid",
 *         "resources.uid"
 *       ]
 *     }
 *   }
 * };
 * const command = new StartExportJobV2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ExportJobId: "a1b2c3d4e5f6"
 * }
 * *\/
 * ```
 *
 * @example Example – Starting an OCSF JSON export scoped to an organizational unit
 * ```javascript
 * // The following example, run by a delegated administrator, starts an export of the last 30 days of findings for a specific organizational unit (OU) in OCSF JSON format.
 * const input = {
 *   Destination: {
 *     S3: {
 *       BucketArn: "arn:aws:s3:::amzn-s3-demo-bucket",
 *       KmsKeyArn: "arn:aws:kms:aa-example-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 *     }
 *   },
 *   OutputConfiguration: {
 *     Findings: {
 *       Filters: {
 *         CompositeFilters: [
 *           {
 *             DateFilters: [
 *               {
 *                 FieldName: "finding_info.last_seen_time_dt",
 *                 Filter: {
 *                   DateRange: {
 *                     Comparison: "WITHIN",
 *                     Unit: "DAYS",
 *                     Value: 30
 *                   }
 *                 }
 *               }
 *             ],
 *             Operator: "AND"
 *           }
 *         ],
 *         CompositeOperator: "AND"
 *       },
 *       Format: "OCSF_JSON"
 *     }
 *   },
 *   Scopes: {
 *     AwsOrganizations: [
 *       {
 *         OrganizationalUnitId: "ou-1234-a1b2c3d4"
 *       }
 *     ]
 *   }
 * };
 * const command = new StartExportJobV2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ExportJobId: "f6e5d4c3b2a1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartExportJobV2Command extends command<StartExportJobV2CommandInput, StartExportJobV2CommandOutput>(
  _ep0,
  _mw0,
  "StartExportJobV2",
  StartExportJobV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExportJobV2Request;
      output: StartExportJobV2Response;
    };
    sdk: {
      input: StartExportJobV2CommandInput;
      output: StartExportJobV2CommandOutput;
    };
  };
}
