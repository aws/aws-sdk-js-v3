// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { AttachPrincipalPolicyRequest } from "../models/models_0";
import { AttachPrincipalPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachPrincipalPolicyCommand}.
 */
export interface AttachPrincipalPolicyCommandInput extends AttachPrincipalPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AttachPrincipalPolicyCommand}.
 */
export interface AttachPrincipalPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches the specified policy to the specified principal (certificate or other
 *          credential).</p>
 *          <p>
 *             <b>Note:</b> This action is deprecated and works as
 *          expected for backward compatibility, but we won't add enhancements. Use <a>AttachPolicy</a> instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p>
 *
 * @deprecated deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachPrincipalPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachPrincipalPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // AttachPrincipalPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
 * };
 * const command = new AttachPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachPrincipalPolicyCommandInput - {@link AttachPrincipalPolicyCommandInput}
 * @returns {@link AttachPrincipalPolicyCommandOutput}
 * @see {@link AttachPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
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
export class AttachPrincipalPolicyCommand extends $Command
  .classBuilder<
    AttachPrincipalPolicyCommandInput,
    AttachPrincipalPolicyCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "AttachPrincipalPolicy", {})
  .n("IoTClient", "AttachPrincipalPolicyCommand")
  .sc(AttachPrincipalPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachPrincipalPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachPrincipalPolicyCommandInput;
      output: AttachPrincipalPolicyCommandOutput;
    };
  };
}
