// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetExportJobV2Request } from "../models/models_2";
import type { GetExportJobV2Response } from "../models/models_3";
import { GetExportJobV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetExportJobV2Command}.
 */
export interface GetExportJobV2CommandInput extends GetExportJobV2Request {}
/**
 * @public
 *
 * The output of {@link GetExportJobV2Command}.
 */
export interface GetExportJobV2CommandOutput extends GetExportJobV2Response, __MetadataBearer {}

/**
 * <p>Returns the details of a single findings export job, including its current <code>Status</code>, the <code>Destination</code> it writes to, the <code>OutputConfiguration</code> it was started with, and its <code>StartedAt</code> and <code>EndedAt</code> timestamps. Use this operation to poll an export job that you started with <code>StartExportJobV2</code> until it reaches a terminal state (<code>SUCCEEDED</code>, <code>FAILED</code>, or <code>CANCELLED</code>).</p>
 *          <p>If the job failed, the response includes a <code>FailureCode</code> and <code>FailureMessage</code> that describe the reason. Input values such as <code>Scopes</code> and <code>Filters</code> are echoed back as they were submitted, with relative date ranges returned unresolved. If no export job matches the <code>ExportJobId</code> that you provide, this operation returns a <code>ResourceNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetExportJobV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetExportJobV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetExportJobV2Request
 *   ExportJobId: "STRING_VALUE", // required
 * };
 * const command = new GetExportJobV2Command(input);
 * const response = await client.send(command);
 * // { // GetExportJobV2Response
 * //   ExportJobId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE",
 * //   Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED", // required
 * //   DataType: "FINDINGS", // required
 * //   OutputConfiguration: { // ExportOutput Union: only one key present
 * //     Findings: { // FindingsOutput
 * //       Format: "CSV" || "OCSF_JSON", // required
 * //       Filters: { // OcsfFindingFilters
 * //         CompositeFilters: [ // CompositeFilterList
 * //           { // CompositeFilter
 * //             StringFilters: [ // OcsfStringFilterList
 * //               { // OcsfStringFilter
 * //                 FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.traits.category" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.name" || "resources.owner.account.uid" || "resources.owner.org.uid" || "resources.owner.account.name" || "resources.provider" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "cloud.account.name" || "vendor_attributes.severity",
 * //                 Filter: { // StringFilter
 * //                   Value: "STRING_VALUE",
 * //                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 * //                 },
 * //               },
 * //             ],
 * //             DateFilters: [ // OcsfDateFilterList
 * //               { // OcsfDateFilter
 * //                 FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt",
 * //                 Filter: { // DateFilter
 * //                   Start: "STRING_VALUE",
 * //                   End: "STRING_VALUE",
 * //                   DateRange: { // DateRange
 * //                     Value: Number("int"),
 * //                     Unit: "DAYS",
 * //                     Comparison: "WITHIN" || "OLDER_THAN",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             BooleanFilters: [ // OcsfBooleanFilterList
 * //               { // OcsfBooleanFilter
 * //                 FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 * //                 Filter: { // BooleanFilter
 * //                   Value: true || false,
 * //                 },
 * //               },
 * //             ],
 * //             NumberFilters: [ // OcsfNumberFilterList
 * //               { // OcsfNumberFilter
 * //                 FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count" || "vulnerabilities.cve.cvss.base_score" || "vendor_attributes.severity_id",
 * //                 Filter: { // NumberFilter
 * //                   Gte: Number("double"),
 * //                   Lte: Number("double"),
 * //                   Eq: Number("double"),
 * //                   Gt: Number("double"),
 * //                   Lt: Number("double"),
 * //                 },
 * //               },
 * //             ],
 * //             MapFilters: [ // OcsfMapFilterList
 * //               { // OcsfMapFilter
 * //                 FieldName: "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags",
 * //                 Filter: { // MapFilter
 * //                   Key: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                   Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //                 },
 * //               },
 * //             ],
 * //             IpFilters: [ // OcsfIpFilterList
 * //               { // OcsfIpFilter
 * //                 FieldName: "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 * //                 Filter: { // IpFilter
 * //                   Cidr: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             NestedCompositeFilters: [
 * //               {
 * //                 StringFilters: [
 * //                   {
 * //                     FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.traits.category" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.name" || "resources.owner.account.uid" || "resources.owner.org.uid" || "resources.owner.account.name" || "resources.provider" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "cloud.account.name" || "vendor_attributes.severity",
 * //                     Filter: {
 * //                       Value: "STRING_VALUE",
 * //                       Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 * //                     },
 * //                   },
 * //                 ],
 * //                 DateFilters: [
 * //                   {
 * //                     FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt",
 * //                     Filter: {
 * //                       Start: "STRING_VALUE",
 * //                       End: "STRING_VALUE",
 * //                       DateRange: {
 * //                         Value: Number("int"),
 * //                         Unit: "DAYS",
 * //                         Comparison: "WITHIN" || "OLDER_THAN",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //                 BooleanFilters: [
 * //                   {
 * //                     FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 * //                     Filter: {
 * //                       Value: true || false,
 * //                     },
 * //                   },
 * //                 ],
 * //                 NumberFilters: [
 * //                   {
 * //                     FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count" || "vulnerabilities.cve.cvss.base_score" || "vendor_attributes.severity_id",
 * //                     Filter: {
 * //                       Gte: Number("double"),
 * //                       Lte: Number("double"),
 * //                       Eq: Number("double"),
 * //                       Gt: Number("double"),
 * //                       Lt: Number("double"),
 * //                     },
 * //                   },
 * //                 ],
 * //                 MapFilters: [
 * //                   {
 * //                     FieldName: "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags",
 * //                     Filter: {
 * //                       Key: "STRING_VALUE",
 * //                       Value: "STRING_VALUE",
 * //                       Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //                     },
 * //                   },
 * //                 ],
 * //                 IpFilters: [
 * //                   {
 * //                     FieldName: "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 * //                     Filter: {
 * //                       Cidr: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 NestedCompositeFilters: "<CompositeFilterList>",
 * //                 Operator: "AND" || "OR",
 * //               },
 * //             ],
 * //             Operator: "AND" || "OR",
 * //           },
 * //         ],
 * //         CompositeOperator: "AND" || "OR",
 * //       },
 * //       SelectedFields: [ // FindingsSelectedFieldList
 * //         "metadata.uid" || "activity_name" || "cloud.account.name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.traits.category" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.feature.uid" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.name" || "resources.owner.account.uid" || "resources.owner.org.uid" || "resources.owner.account.name" || "resources.provider" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.cvss.vendor_name" || "vulnerabilities.cve.cvss.version" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "vendor_attributes.severity" || "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count" || "vulnerabilities.cve.cvss.base_score" || "vendor_attributes.severity_id" || "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt" || "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available" || "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags" || "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 * //       ],
 * //     },
 * //   },
 * //   Scopes: { // ExportScopes
 * //     AwsOrganizations: [ // AwsOrganizationScopeList
 * //       { // AwsOrganizationScope
 * //         OrganizationId: "STRING_VALUE",
 * //         OrganizationalUnitId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Destination: { // ExportDestination Union: only one key present
 * //     S3: { // S3ExportDestination
 * //       BucketArn: "STRING_VALUE", // required
 * //       KmsKeyArn: "STRING_VALUE", // required
 * //       ObjectPrefix: "STRING_VALUE",
 * //     },
 * //   },
 * //   FailureCode: "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "INTERNAL_ERROR",
 * //   FailureMessage: "STRING_VALUE",
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetExportJobV2CommandInput - {@link GetExportJobV2CommandInput}
 * @returns {@link GetExportJobV2CommandOutput}
 * @see {@link GetExportJobV2CommandInput} for command's `input` shape.
 * @see {@link GetExportJobV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
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
 * @example Example – Getting the details of a failed export job
 * ```javascript
 * // The following example retrieves an export job that failed because Security Hub couldn't write to the destination. The FailureCode and FailureMessage explain the cause.
 * const input = {
 *   ExportJobId: "f6e5d4c3b2a1"
 * };
 * const command = new GetExportJobV2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DataType: "FINDINGS",
 *   Destination: {
 *     S3: {
 *       BucketArn: "arn:aws:s3:::amzn-s3-demo-bucket",
 *       KmsKeyArn: "arn:aws:kms:aa-example-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 *     }
 *   },
 *   EndedAt: "2026-03-27T18:05:03Z",
 *   ExportJobId: "f6e5d4c3b2a1",
 *   FailureCode: "ACCESS_DENIED",
 *   FailureMessage: "Security Hub could not write to the destination bucket. Verify the bucket policy and KMS key policy.",
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
 *   },
 *   StartedAt: "2026-03-27T18:04:11Z",
 *   Status: "FAILED"
 * }
 * *\/
 * ```
 *
 * @example Example – Getting the details of a completed export job
 * ```javascript
 * // The following example retrieves an export job that has finished successfully. The output is available in the destination bucket.
 * const input = {
 *   ExportJobId: "a1b2c3d4e5f6"
 * };
 * const command = new GetExportJobV2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DataType: "FINDINGS",
 *   Destination: {
 *     S3: {
 *       BucketArn: "arn:aws:s3:::amzn-s3-demo-bucket",
 *       KmsKeyArn: "arn:aws:kms:aa-example-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       ObjectPrefix: "security-hub-exports/2026-Q1"
 *     }
 *   },
 *   EndedAt: "2026-03-27T18:09:52Z",
 *   ExportJobId: "a1b2c3d4e5f6",
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
 *   },
 *   StartedAt: "2026-03-27T18:04:11Z",
 *   Status: "SUCCEEDED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetExportJobV2Command extends command<GetExportJobV2CommandInput, GetExportJobV2CommandOutput>(
  _ep0,
  _mw0,
  "GetExportJobV2",
  GetExportJobV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportJobV2Request;
      output: GetExportJobV2Response;
    };
    sdk: {
      input: GetExportJobV2CommandInput;
      output: GetExportJobV2CommandOutput;
    };
  };
}
