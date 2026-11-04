// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTopicRuleDestinationRequest } from "../models/models_0";
import type { DeleteTopicRuleDestinationResponse } from "../models/models_1";
import { DeleteTopicRuleDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTopicRuleDestinationCommand}.
 */
export interface DeleteTopicRuleDestinationCommandInput extends DeleteTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTopicRuleDestinationCommand}.
 */
export interface DeleteTopicRuleDestinationCommandOutput extends DeleteTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * Deletes a topic rule destination.
 *
 * Requires permission to access the [DeleteTopicRuleDestination](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteTopicRuleDestinationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTopicRuleDestinationCommandInput - {@link DeleteTopicRuleDestinationCommandInput}
 * @returns {@link DeleteTopicRuleDestinationCommandOutput}
 * @see {@link DeleteTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRuleDestinationCommandOutput} for command's `response` shape.
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
export class DeleteTopicRuleDestinationCommand extends command<DeleteTopicRuleDestinationCommandInput, DeleteTopicRuleDestinationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTopicRuleDestination",
  DeleteTopicRuleDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTopicRuleDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteTopicRuleDestinationCommandInput;
      output: DeleteTopicRuleDestinationCommandOutput;
    };
  };
}
