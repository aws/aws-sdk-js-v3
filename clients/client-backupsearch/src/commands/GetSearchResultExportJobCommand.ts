// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSearchResultExportJobInput, GetSearchResultExportJobOutput } from "../models/models_0";
import { de_GetSearchResultExportJobCommand, se_GetSearchResultExportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation retrieves the metadata of an export job.</p> <p>An export job is an operation that transmits the results of a search job to a specified S3 bucket in a .csv file.</p> <p>An export job allows you to retain results of a search beyond the search job's scheduled retention of 7 days.</p>
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
 *  <p>The resource was not found for this request.</p> <p>Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link BackupSearchServiceException}
 * <p>Base exception class for all service exceptions from BackupSearch service.</p>
 *
 *
 * @public
 */
export class GetSearchResultExportJobCommand extends $Command
  .classBuilder<
    GetSearchResultExportJobCommandInput,
    GetSearchResultExportJobCommandOutput,
    BackupSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoBackupSearchService", "GetSearchResultExportJob", {})
  .n("BackupSearchClient", "GetSearchResultExportJobCommand")
  .f(void 0, void 0)
  .ser(se_GetSearchResultExportJobCommand)
  .de(de_GetSearchResultExportJobCommand)
  .build() {
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
