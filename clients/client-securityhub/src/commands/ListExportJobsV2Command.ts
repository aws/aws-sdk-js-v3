// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExportJobsV2Request, ListExportJobsV2Response } from "../models/models_3";
import { ListExportJobsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExportJobsV2Command}.
 */
export interface ListExportJobsV2CommandInput extends ListExportJobsV2Request {}
/**
 * @public
 *
 * The output of {@link ListExportJobsV2Command}.
 */
export interface ListExportJobsV2CommandOutput extends ListExportJobsV2Response, __MetadataBearer {}

/**
 * <p>Returns the findings export jobs in your account as a paginated list of <code>ExportSummary</code> objects. You can filter the results by job <code>Status</code> or <code>DataType</code>.</p>
 *          <p>To page through the results, use the <code>MaxResults</code> and <code>NextToken</code> parameters. If the response includes a <code>NextToken</code> value, pass it in a subsequent request to retrieve the next page of results.</p>
 *          <p>Each <code>ExportSummary</code> reports the output <code>Format</code> of the job but not its full <code>OutputConfiguration</code>. To retrieve the filters and selected fields that a job was started with, call <code>GetExportJobV2</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListExportJobsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListExportJobsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListExportJobsV2Request
 *   Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 *   DataType: "FINDINGS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExportJobsV2Command(input);
 * const response = await client.send(command);
 * // { // ListExportJobsV2Response
 * //   Items: [ // ExportSummaryList // required
 * //     { // ExportSummary
 * //       ExportJobId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE",
 * //       Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED", // required
 * //       DataType: "FINDINGS", // required
 * //       OutputConfiguration: { // ExportOutputSummary Union: only one key present
 * //         Findings: { // FindingsOutputSummary
 * //           Format: "CSV" || "OCSF_JSON", // required
 * //         },
 * //       },
 * //       Scopes: { // ExportScopes
 * //         AwsOrganizations: [ // AwsOrganizationScopeList
 * //           { // AwsOrganizationScope
 * //             OrganizationId: "STRING_VALUE",
 * //             OrganizationalUnitId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Destination: { // ExportDestination Union: only one key present
 * //         S3: { // S3ExportDestination
 * //           BucketArn: "STRING_VALUE", // required
 * //           KmsKeyArn: "STRING_VALUE", // required
 * //           ObjectPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       FailureCode: "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "INTERNAL_ERROR",
 * //       FailureMessage: "STRING_VALUE",
 * //       StartedAt: new Date("TIMESTAMP"), // required
 * //       EndedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportJobsV2CommandInput - {@link ListExportJobsV2CommandInput}
 * @returns {@link ListExportJobsV2CommandOutput}
 * @see {@link ListExportJobsV2CommandInput} for command's `input` shape.
 * @see {@link ListExportJobsV2CommandOutput} for command's `response` shape.
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
 * @example Example – Listing successful findings export jobs
 * ```javascript
 * // The following example lists the findings export jobs in the account that have succeeded, returning up to 10 results per page.
 * const input = {
 *   DataType: "FINDINGS",
 *   MaxResults: 10,
 *   Status: "SUCCEEDED"
 * };
 * const command = new ListExportJobsV2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       DataType: "FINDINGS",
 *       Destination: {
 *         S3: {
 *           BucketArn: "arn:aws:s3:::amzn-s3-demo-bucket",
 *           KmsKeyArn: "arn:aws:kms:aa-example-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *           ObjectPrefix: "security-hub-exports/2026-Q1"
 *         }
 *       },
 *       EndedAt: "2026-03-27T18:09:52Z",
 *       ExportJobId: "a1b2c3d4e5f6",
 *       Name: "quarterly-critical-findings",
 *       OutputConfiguration: {
 *         Findings: {
 *           Format: "CSV"
 *         }
 *       },
 *       StartedAt: "2026-03-27T18:04:11Z",
 *       Status: "SUCCEEDED"
 *     }
 *   ],
 *   NextToken: "U2VjdXJpdHlIdWJFeGFtcGxlUGFnaW5hdGlvblRva2Vu"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListExportJobsV2Command extends command<ListExportJobsV2CommandInput, ListExportJobsV2CommandOutput>(
  _ep0,
  _mw0,
  "ListExportJobsV2",
  ListExportJobsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportJobsV2Request;
      output: ListExportJobsV2Response;
    };
    sdk: {
      input: ListExportJobsV2CommandInput;
      output: ListExportJobsV2CommandOutput;
    };
  };
}
