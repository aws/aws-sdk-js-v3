// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopExecutionInput, StopExecutionInputFilterSensitiveLog, StopExecutionOutput } from "../models/models_0";
import { de_StopExecutionCommand, se_StopExecutionCommand } from "../protocols/Aws_json1_0";
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StopExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StopExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "StopExecution", {})
  .n("SFNClient", "StopExecutionCommand")
  .f(StopExecutionInputFilterSensitiveLog, void 0)
  .ser(se_StopExecutionCommand)
  .de(de_StopExecutionCommand)
  .build() {}
