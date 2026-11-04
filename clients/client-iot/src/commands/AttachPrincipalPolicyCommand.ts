// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachPrincipalPolicyRequest } from "../models/models_0";
import { AttachPrincipalPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Attaches the specified policy to the specified principal (certificate or other credential).
 *
 * **Note:** This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use AttachPolicy instead.
 *
 * Requires permission to access the [AttachPrincipalPolicy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @deprecated deprecated.
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
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
export class AttachPrincipalPolicyCommand extends command<AttachPrincipalPolicyCommandInput, AttachPrincipalPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AttachPrincipalPolicy",
  AttachPrincipalPolicy$
) {
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
