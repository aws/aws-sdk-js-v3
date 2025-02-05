// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SendTaskSuccessInput,
  SendTaskSuccessInputFilterSensitiveLog,
  SendTaskSuccessOutput,
} from "../models/models_0";
import { de_SendTaskSuccessCommand, se_SendTaskSuccessCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendTaskSuccessCommand}.
 */
export interface SendTaskSuccessCommandInput extends SendTaskSuccessInput {}
/**
 * @public
 *
 * The output of {@link SendTaskSuccessCommand}.
 */
export interface SendTaskSuccessCommandOutput extends SendTaskSuccessOutput, __MetadataBearer {}

/**
 * <p>Used by activity workers, Task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern, and optionally Task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> pattern to report that the task identified by the <code>taskToken</code> completed
 *       successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskSuccessCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskSuccessCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SFNClient(config);
 * const input = { // SendTaskSuccessInput
 *   taskToken: "STRING_VALUE", // required
 *   output: "STRING_VALUE", // required
 * };
 * const command = new SendTaskSuccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendTaskSuccessCommandInput - {@link SendTaskSuccessCommandInput}
 * @returns {@link SendTaskSuccessCommandOutput}
 * @see {@link SendTaskSuccessCommandInput} for command's `input` shape.
 * @see {@link SendTaskSuccessCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidOutput} (client fault)
 *  <p>The provided JSON output data is not valid.</p>
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
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
 * @throws {@link TaskDoesNotExist} (client fault)
 *  <p>The activity does not exist.</p>
 *
 * @throws {@link TaskTimedOut} (client fault)
 *  <p>The task token has either expired or the task associated with the token has already been closed.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class SendTaskSuccessCommand extends $Command
  .classBuilder<
    SendTaskSuccessCommandInput,
    SendTaskSuccessCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "SendTaskSuccess", {})
  .n("SFNClient", "SendTaskSuccessCommand")
  .f(SendTaskSuccessInputFilterSensitiveLog, void 0)
  .ser(se_SendTaskSuccessCommand)
  .de(de_SendTaskSuccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendTaskSuccessInput;
      output: {};
    };
    sdk: {
      input: SendTaskSuccessCommandInput;
      output: SendTaskSuccessCommandOutput;
    };
  };
}
