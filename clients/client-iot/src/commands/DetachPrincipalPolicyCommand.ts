// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachPrincipalPolicyRequest } from "../models/models_1";
import { de_DetachPrincipalPolicyCommand, se_DetachPrincipalPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachPrincipalPolicyCommand}.
 */
export interface DetachPrincipalPolicyCommandInput extends DetachPrincipalPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DetachPrincipalPolicyCommand}.
 */
export interface DetachPrincipalPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified policy from the specified certificate.</p>
 *          <p>
 *             <b>Note:</b> This action is deprecated and works as
 *          expected for backward compatibility, but we won't add enhancements. Use <a>DetachPolicy</a> instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p>
 *
 * @deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachPrincipalPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachPrincipalPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DetachPrincipalPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
 * };
 * const command = new DetachPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachPrincipalPolicyCommandInput - {@link DetachPrincipalPolicyCommandInput}
 * @returns {@link DetachPrincipalPolicyCommandOutput}
 * @see {@link DetachPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DetachPrincipalPolicyCommand extends $Command
  .classBuilder<
    DetachPrincipalPolicyCommandInput,
    DetachPrincipalPolicyCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DetachPrincipalPolicy", {})
  .n("IoTClient", "DetachPrincipalPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DetachPrincipalPolicyCommand)
  .de(de_DetachPrincipalPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachPrincipalPolicyRequest;
      output: {};
    };
    sdk: {
      input: DetachPrincipalPolicyCommandInput;
      output: DetachPrincipalPolicyCommandOutput;
    };
  };
}
