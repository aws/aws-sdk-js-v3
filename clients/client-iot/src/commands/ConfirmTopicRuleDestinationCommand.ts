// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfirmTopicRuleDestinationRequest, ConfirmTopicRuleDestinationResponse } from "../models/models_0";
import { ConfirmTopicRuleDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConfirmTopicRuleDestinationCommand}.
 */
export interface ConfirmTopicRuleDestinationCommandInput extends ConfirmTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmTopicRuleDestinationCommand}.
 */
export interface ConfirmTopicRuleDestinationCommandOutput extends ConfirmTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling `ConfirmTopicRuleDestination` to confirm that you own or have access to the endpoint.
 *
 * Requires permission to access the [ConfirmTopicRuleDestination](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ConfirmTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ConfirmTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ConfirmTopicRuleDestinationRequest
 *   confirmationToken: "STRING_VALUE", // required
 * };
 * const command = new ConfirmTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ConfirmTopicRuleDestinationCommandInput - {@link ConfirmTopicRuleDestinationCommandInput}
 * @returns {@link ConfirmTopicRuleDestinationCommandOutput}
 * @see {@link ConfirmTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link ConfirmTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *
 * A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
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
export class ConfirmTopicRuleDestinationCommand extends command<ConfirmTopicRuleDestinationCommandInput, ConfirmTopicRuleDestinationCommandOutput>(
  _ep0,
  _mw0,
  "ConfirmTopicRuleDestination",
  ConfirmTopicRuleDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmTopicRuleDestinationRequest;
      output: {};
    };
    sdk: {
      input: ConfirmTopicRuleDestinationCommandInput;
      output: ConfirmTopicRuleDestinationCommandOutput;
    };
  };
}
