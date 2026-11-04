// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTopicRuleDestinationRequest, UpdateTopicRuleDestinationResponse } from "../models/models_2";
import { UpdateTopicRuleDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTopicRuleDestinationCommand}.
 */
export interface UpdateTopicRuleDestinationCommandInput extends UpdateTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTopicRuleDestinationCommand}.
 */
export interface UpdateTopicRuleDestinationCommandOutput extends UpdateTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.
 *
 * Requires permission to access the [UpdateTopicRuleDestination](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateTopicRuleDestinationRequest
 *   arn: "STRING_VALUE", // required
 *   status: "ENABLED" || "IN_PROGRESS" || "DISABLED" || "ERROR" || "DELETING", // required
 * };
 * const command = new UpdateTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTopicRuleDestinationCommandInput - {@link UpdateTopicRuleDestinationCommandInput}
 * @returns {@link UpdateTopicRuleDestinationCommandOutput}
 * @see {@link UpdateTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateTopicRuleDestinationCommandOutput} for command's `response` shape.
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
export class UpdateTopicRuleDestinationCommand extends command<UpdateTopicRuleDestinationCommandInput, UpdateTopicRuleDestinationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTopicRuleDestination",
  UpdateTopicRuleDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTopicRuleDestinationRequest;
      output: {};
    };
    sdk: {
      input: UpdateTopicRuleDestinationCommandInput;
      output: UpdateTopicRuleDestinationCommandOutput;
    };
  };
}
