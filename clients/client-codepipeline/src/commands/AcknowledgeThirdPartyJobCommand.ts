// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput } from "../models/models_0";
import { AcknowledgeThirdPartyJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcknowledgeThirdPartyJobCommand}.
 */
export interface AcknowledgeThirdPartyJobCommandInput extends AcknowledgeThirdPartyJobInput {}
/**
 * @public
 *
 * The output of {@link AcknowledgeThirdPartyJobCommand}.
 */
export interface AcknowledgeThirdPartyJobCommandOutput extends AcknowledgeThirdPartyJobOutput, __MetadataBearer {}

/**
 * <p>Confirms a job worker has received the specified job. Used for partner actions
 *             only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeThirdPartyJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeThirdPartyJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // AcknowledgeThirdPartyJobInput
 *   jobId: "STRING_VALUE", // required
 *   nonce: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new AcknowledgeThirdPartyJobCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeThirdPartyJobOutput
 * //   status: "Created" || "Queued" || "Dispatched" || "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param AcknowledgeThirdPartyJobCommandInput - {@link AcknowledgeThirdPartyJobCommandInput}
 * @returns {@link AcknowledgeThirdPartyJobCommandOutput}
 * @see {@link AcknowledgeThirdPartyJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeThirdPartyJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The client token was specified in an invalid format</p>
 *
 * @throws {@link InvalidNonceException} (client fault)
 *  <p>The nonce was specified in an invalid format.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The job was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class AcknowledgeThirdPartyJobCommand extends $Command
  .classBuilder<
    AcknowledgeThirdPartyJobCommandInput,
    AcknowledgeThirdPartyJobCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "AcknowledgeThirdPartyJob", {})
  .n("CodePipelineClient", "AcknowledgeThirdPartyJobCommand")
  .sc(AcknowledgeThirdPartyJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcknowledgeThirdPartyJobInput;
      output: AcknowledgeThirdPartyJobOutput;
    };
    sdk: {
      input: AcknowledgeThirdPartyJobCommandInput;
      output: AcknowledgeThirdPartyJobCommandOutput;
    };
  };
}
