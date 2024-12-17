// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSearchResultExportJobInput, StartSearchResultExportJobOutput } from "../models/models_0";
import { de_StartSearchResultExportJobCommand, se_StartSearchResultExportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSearchResultExportJobCommand}.
 */
export interface StartSearchResultExportJobCommandInput extends StartSearchResultExportJobInput {}
/**
 * @public
 *
 * The output of {@link StartSearchResultExportJobCommand}.
 */
export interface StartSearchResultExportJobCommandOutput extends StartSearchResultExportJobOutput, __MetadataBearer {}

/**
 * <p>This operations starts a job to export the results
 *       of search job to a designated S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, StartSearchResultExportJobCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, StartSearchResultExportJobCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * const client = new BackupSearchClient(config);
 * const input = { // StartSearchResultExportJobInput
 *   SearchJobIdentifier: "STRING_VALUE", // required
 *   ExportSpecification: { // ExportSpecification Union: only one key present
 *     s3ExportSpecification: { // S3ExportSpecification
 *       DestinationBucket: "STRING_VALUE", // required
 *       DestinationPrefix: "STRING_VALUE",
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new StartSearchResultExportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartSearchResultExportJobOutput
 * //   ExportJobArn: "STRING_VALUE",
 * //   ExportJobIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartSearchResultExportJobCommandInput - {@link StartSearchResultExportJobCommandInput}
 * @returns {@link StartSearchResultExportJobCommandOutput}
 * @see {@link StartSearchResultExportJobCommandInput} for command's `input` shape.
 * @see {@link StartSearchResultExportJobCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful
 *             operation is detected. This generally occurs when the previous
 *             operation did not have time to propagate to the host serving the
 *             current request.</p>
 *          <p>A retry (with appropriate backoff logic) is the recommended
 *             response to this exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found for this request.</p>
 *          <p>Confirm the resource information, such as the ARN or type is correct
 *             and exists, then retry the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request denied due to exceeding the quota limits permitted.</p>
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
 * @public
 */
export class StartSearchResultExportJobCommand extends $Command
  .classBuilder<
    StartSearchResultExportJobCommandInput,
    StartSearchResultExportJobCommandOutput,
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
  .s("CryoBackupSearchService", "StartSearchResultExportJob", {})
  .n("BackupSearchClient", "StartSearchResultExportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartSearchResultExportJobCommand)
  .de(de_StartSearchResultExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSearchResultExportJobInput;
      output: StartSearchResultExportJobOutput;
    };
    sdk: {
      input: StartSearchResultExportJobCommandInput;
      output: StartSearchResultExportJobCommandOutput;
    };
  };
}
