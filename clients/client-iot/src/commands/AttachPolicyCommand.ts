// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachPolicyRequest } from "../models/models_0";
import { AttachPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachPolicyCommand}.
 */
export interface AttachPolicyCommandInput extends AttachPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AttachPolicyCommand}.
 */
export interface AttachPolicyCommandOutput extends __MetadataBearer {}

/**
 * Attaches the specified policy to the specified principal (certificate or other credential).
 *
 * Requires permission to access the [AttachPolicy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // AttachPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   target: "STRING_VALUE", // required
 * };
 * const command = new AttachPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachPolicyCommandInput - {@link AttachPolicyCommandInput}
 * @returns {@link AttachPolicyCommandOutput}
 * @see {@link AttachPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPolicyCommandOutput} for command's `response` shape.
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
export class AttachPolicyCommand extends command<AttachPolicyCommandInput, AttachPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AttachPolicy",
  AttachPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachPolicyCommandInput;
      output: AttachPolicyCommandOutput;
    };
  };
}
