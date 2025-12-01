// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AcknowledgeJobInput, AcknowledgeJobOutput } from "../models/models_0";
import { AcknowledgeJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcknowledgeJobCommand}.
 */
export interface AcknowledgeJobCommandInput extends AcknowledgeJobInput {}
/**
 * @public
 *
 * The output of {@link AcknowledgeJobCommand}.
 */
export interface AcknowledgeJobCommandOutput extends AcknowledgeJobOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specified job and whether that job has been received by
 *             the job worker. Used for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // AcknowledgeJobInput
 *   jobId: "STRING_VALUE", // required
 *   nonce: "STRING_VALUE", // required
 * };
 * const command = new AcknowledgeJobCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeJobOutput
 * //   status: "Created" || "Queued" || "Dispatched" || "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param AcknowledgeJobCommandInput - {@link AcknowledgeJobCommandInput}
 * @returns {@link AcknowledgeJobCommandOutput}
 * @see {@link AcknowledgeJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
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
export class AcknowledgeJobCommand extends $Command
  .classBuilder<
    AcknowledgeJobCommandInput,
    AcknowledgeJobCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "AcknowledgeJob", {})
  .n("CodePipelineClient", "AcknowledgeJobCommand")
  .sc(AcknowledgeJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcknowledgeJobInput;
      output: AcknowledgeJobOutput;
    };
    sdk: {
      input: AcknowledgeJobCommandInput;
      output: AcknowledgeJobCommandOutput;
    };
  };
}
