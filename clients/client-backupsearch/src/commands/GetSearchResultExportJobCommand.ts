// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSearchResultExportJobInput, GetSearchResultExportJobOutput } from "../models/models_0";
import { GetSearchResultExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSearchResultExportJobCommand}.
 */
export interface GetSearchResultExportJobCommandInput extends GetSearchResultExportJobInput {}
/**
 * @public
 *
 * The output of {@link GetSearchResultExportJobCommand}.
 */
export interface GetSearchResultExportJobCommandOutput extends GetSearchResultExportJobOutput, __MetadataBearer {}

/**
 * This operation retrieves the metadata of an export job.
 *
 * An export job is an operation that transmits the results of a search job to a specified S3 bucket in a .csv file.
 *
 * An export job allows you to retain results of a search beyond the search job's scheduled retention of 7 days.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, GetSearchResultExportJobCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, GetSearchResultExportJobCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // GetSearchResultExportJobInput
 *   ExportJobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetSearchResultExportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetSearchResultExportJobOutput
 * //   ExportJobIdentifier: "STRING_VALUE", // required
 * //   ExportJobArn: "STRING_VALUE",
 * //   Status: "RUNNING" || "FAILED" || "COMPLETED",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   CompletionTime: new Date("TIMESTAMP"),
 * //   StatusMessage: "STRING_VALUE",
 * //   ExportSpecification: { // ExportSpecification Union: only one key present
 * //     s3ExportSpecification: { // S3ExportSpecification
 * //       DestinationBucket: "STRING_VALUE", // required
 * //       DestinationPrefix: "STRING_VALUE",
 * //     },
 * //   },
 * //   SearchJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSearchResultExportJobCommandInput - {@link GetSearchResultExportJobCommandInput}
 * @returns {@link GetSearchResultExportJobCommandOutput}
 * @see {@link GetSearchResultExportJobCommandInput} for command's `input` shape.
 * @see {@link GetSearchResultExportJobCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found for this request.
 *
 * Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link BackupSearchServiceException}
 *
 * Base exception class for all service exceptions from BackupSearch service.
 *
 * @public
 */
export class GetSearchResultExportJobCommand extends command<GetSearchResultExportJobCommandInput, GetSearchResultExportJobCommandOutput>(
  _ep0,
  _mw0,
  "GetSearchResultExportJob",
  GetSearchResultExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSearchResultExportJobInput;
      output: GetSearchResultExportJobOutput;
    };
    sdk: {
      input: GetSearchResultExportJobCommandInput;
      output: GetSearchResultExportJobCommandOutput;
    };
  };
}
