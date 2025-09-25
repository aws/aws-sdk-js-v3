// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopSearchJobInput, StopSearchJobOutput } from "../models/models_0";
import { StopSearchJob } from "../schemas/schemas_1_Search";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopSearchJobCommand}.
 */
export interface StopSearchJobCommandInput extends StopSearchJobInput {}
/**
 * @public
 *
 * The output of {@link StopSearchJobCommand}.
 */
export interface StopSearchJobCommandOutput extends StopSearchJobOutput, __MetadataBearer {}

/**
 * <p>This operations ends a search job.</p> <p>Only a search job with a status of <code>RUNNING</code> can be stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, StopSearchJobCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, StopSearchJobCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // StopSearchJobInput
 *   SearchJobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopSearchJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSearchJobCommandInput - {@link StopSearchJobCommandInput}
 * @returns {@link StopSearchJobCommandOutput}
 * @see {@link StopSearchJobCommandInput} for command's `input` shape.
 * @see {@link StopSearchJobCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful operation is detected. This generally occurs when the previous operation did not have time to propagate to the host serving the current request.</p> <p>A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
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
export class StopSearchJobCommand extends $Command
  .classBuilder<
    StopSearchJobCommandInput,
    StopSearchJobCommandOutput,
    BackupSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoBackupSearchService", "StopSearchJob", {})
  .n("BackupSearchClient", "StopSearchJobCommand")
  .sc(StopSearchJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSearchJobInput;
      output: {};
    };
    sdk: {
      input: StopSearchJobCommandInput;
      output: StopSearchJobCommandOutput;
    };
  };
}
