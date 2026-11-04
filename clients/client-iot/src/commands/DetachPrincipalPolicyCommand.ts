// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachPrincipalPolicyRequest } from "../models/models_1";
import { DetachPrincipalPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes the specified policy from the specified certificate.
 *
 * **Note:** This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use DetachPolicy instead.
 *
 * Requires permission to access the [DetachPrincipalPolicy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @deprecated deprecated.
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DetachPrincipalPolicyCommand extends command<DetachPrincipalPolicyCommandInput, DetachPrincipalPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DetachPrincipalPolicy",
  DetachPrincipalPolicy$
) {
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
