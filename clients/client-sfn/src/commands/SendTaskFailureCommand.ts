// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SendTaskFailureInput,
  SendTaskFailureInputFilterSensitiveLog,
  SendTaskFailureOutput,
} from "../models/models_0";
import { de_SendTaskFailureCommand, se_SendTaskFailureCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendTaskFailureCommand}.
 */
export interface SendTaskFailureCommandInput extends SendTaskFailureInput {}
/**
 * @public
 *
 * The output of {@link SendTaskFailureCommand}.
 */
export interface SendTaskFailureCommandOutput extends SendTaskFailureOutput, __MetadataBearer {}

/**
 * <p>Used by activity workers, Task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern, and optionally Task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> pattern to report that the task identified by the <code>taskToken</code> failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskFailureCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskFailureCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // SendTaskFailureInput
 *   taskToken: "STRING_VALUE", // required
 *   error: "STRING_VALUE",
 *   cause: "STRING_VALUE",
 * };
 * const command = new SendTaskFailureCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendTaskFailureCommandInput - {@link SendTaskFailureCommandInput}
 * @returns {@link SendTaskFailureCommandOutput}
 * @see {@link SendTaskFailureCommandInput} for command's `input` shape.
 * @see {@link SendTaskFailureCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
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
export class SendTaskFailureCommand extends $Command
  .classBuilder<
    SendTaskFailureCommandInput,
    SendTaskFailureCommandOutput,
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
  .s("AWSStepFunctions", "SendTaskFailure", {})
  .n("SFNClient", "SendTaskFailureCommand")
  .f(SendTaskFailureInputFilterSensitiveLog, void 0)
  .ser(se_SendTaskFailureCommand)
  .de(de_SendTaskFailureCommand)
  .build() {}
