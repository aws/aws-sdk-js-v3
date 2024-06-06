// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SignalResourceInput } from "../models/models_1";
import { de_SignalResourceCommand, se_SignalResourceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SignalResourceCommand}.
 */
export interface SignalResourceCommandInput extends SignalResourceInput {}
/**
 * @public
 *
 * The output of {@link SignalResourceCommand}.
 */
export interface SignalResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends a signal to the specified resource with a success or failure status. You can use the
 *    <code>SignalResource</code> operation in conjunction with a creation policy or update policy. CloudFormation doesn't
 *    proceed with a stack creation or update until resources receive the required number of signals or the timeout period
 *    is exceeded. The <code>SignalResource</code> operation is useful in cases where you want to send signals from
 *    anywhere other than an Amazon EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SignalResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SignalResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // SignalResourceInput
 *   StackName: "STRING_VALUE", // required
 *   LogicalResourceId: "STRING_VALUE", // required
 *   UniqueId: "STRING_VALUE", // required
 *   Status: "SUCCESS" || "FAILURE", // required
 * };
 * const command = new SignalResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SignalResourceCommandInput - {@link SignalResourceCommandInput}
 * @returns {@link SignalResourceCommandOutput}
 * @see {@link SignalResourceCommandInput} for command's `input` shape.
 * @see {@link SignalResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class SignalResourceCommand extends $Command
  .classBuilder<
    SignalResourceCommandInput,
    SignalResourceCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "SignalResource", {})
  .n("CloudFormationClient", "SignalResourceCommand")
  .f(void 0, void 0)
  .ser(se_SignalResourceCommand)
  .de(de_SignalResourceCommand)
  .build() {}
