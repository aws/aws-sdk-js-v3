// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachPolicyRequest } from "../models/models_1";
import { DetachPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetachPolicyCommand}.
 */
export interface DetachPolicyCommandInput extends DetachPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DetachPolicyCommand}.
 */
export interface DetachPolicyCommandOutput extends __MetadataBearer {}

/**
 * Detaches a policy from the specified target.
 *
 * > **Note:** Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.
 *
 * Requires permission to access the [DetachPolicy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DetachPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   target: "STRING_VALUE", // required
 * };
 * const command = new DetachPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachPolicyCommandInput - {@link DetachPolicyCommandInput}
 * @returns {@link DetachPolicyCommandOutput}
 * @see {@link DetachPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPolicyCommandOutput} for command's `response` shape.
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
export class DetachPolicyCommand extends command<DetachPolicyCommandInput, DetachPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DetachPolicy",
  DetachPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachPolicyRequest;
      output: {};
    };
    sdk: {
      input: DetachPolicyCommandInput;
      output: DetachPolicyCommandOutput;
    };
  };
}
