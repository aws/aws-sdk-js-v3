// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopExecutionInput, StopExecutionOutput } from "../models/models_0";
import { StopExecution } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopExecutionCommand}.
 */
export interface StopExecutionCommandInput extends StopExecutionInput {}
/**
 * @public
 *
 * The output of {@link StopExecutionCommand}.
 */
export interface StopExecutionCommandOutput extends StopExecutionOutput, __MetadataBearer {}

/**
 * <p>Stops an execution.</p>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 *          <p>For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role.</p>
 *          <p>A caller can stop an execution without using any KMS permissions in the execution role if the caller provides a null value for both <code>error</code> and <code>cause</code> fields because no data needs to be encrypted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StopExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StopExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // StopExecutionInput
 *   executionArn: "STRING_VALUE", // required
 *   error: "STRING_VALUE",
 *   cause: "STRING_VALUE",
 * };
 * const command = new StopExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopExecutionOutput
 * //   stopDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StopExecutionCommandInput - {@link StopExecutionCommandInput}
 * @returns {@link StopExecutionCommandOutput}
 * @see {@link StopExecutionCommandInput} for command's `input` shape.
 * @see {@link StopExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *  <p>The specified execution does not exist.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *  <p>The KMS key is not in valid state, for example: Disabled or Deleted.</p>
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *  <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class StopExecutionCommand extends $Command
  .classBuilder<
    StopExecutionCommandInput,
    StopExecutionCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "StopExecution", {})
  .n("SFNClient", "StopExecutionCommand")
  .sc(StopExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopExecutionInput;
      output: StopExecutionOutput;
    };
    sdk: {
      input: StopExecutionCommandInput;
      output: StopExecutionCommandOutput;
    };
  };
}
