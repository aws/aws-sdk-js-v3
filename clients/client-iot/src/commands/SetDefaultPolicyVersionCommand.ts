// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetDefaultPolicyVersionRequest } from "../models/models_2";
import { de_SetDefaultPolicyVersionCommand, se_SetDefaultPolicyVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultPolicyVersionCommand}.
 */
export interface SetDefaultPolicyVersionCommandInput extends SetDefaultPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultPolicyVersionCommand}.
 */
export interface SetDefaultPolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the specified version of the specified policy as the policy's default
 *          (operative) version. This action affects all certificates to which the policy is attached.
 *          To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a>
 *          action.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetDefaultPolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetDefaultPolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // SetDefaultPolicyVersionRequest
 *   policyName: "STRING_VALUE", // required
 *   policyVersionId: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetDefaultPolicyVersionCommandInput - {@link SetDefaultPolicyVersionCommandInput}
 * @returns {@link SetDefaultPolicyVersionCommandOutput}
 * @see {@link SetDefaultPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPolicyVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SetDefaultPolicyVersionCommand extends $Command
  .classBuilder<
    SetDefaultPolicyVersionCommandInput,
    SetDefaultPolicyVersionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "SetDefaultPolicyVersion", {})
  .n("IoTClient", "SetDefaultPolicyVersionCommand")
  .f(void 0, void 0)
  .ser(se_SetDefaultPolicyVersionCommand)
  .de(de_SetDefaultPolicyVersionCommand)
  .build() {}
