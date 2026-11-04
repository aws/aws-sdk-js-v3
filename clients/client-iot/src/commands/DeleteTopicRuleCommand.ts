// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTopicRuleRequest } from "../models/models_0";
import { DeleteTopicRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTopicRuleCommand}.
 */
export interface DeleteTopicRuleCommandInput extends DeleteTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTopicRuleCommand}.
 */
export interface DeleteTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * Deletes the rule.
 *
 * Requires permission to access the [DeleteTopicRule](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteTopicRuleRequest
 *   ruleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTopicRuleCommandInput - {@link DeleteTopicRuleCommandInput}
 * @returns {@link DeleteTopicRuleCommandOutput}
 * @see {@link DeleteTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRuleCommandOutput} for command's `response` shape.
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
export class DeleteTopicRuleCommand extends command<DeleteTopicRuleCommandInput, DeleteTopicRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTopicRule",
  DeleteTopicRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTopicRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteTopicRuleCommandInput;
      output: DeleteTopicRuleCommandOutput;
    };
  };
}
