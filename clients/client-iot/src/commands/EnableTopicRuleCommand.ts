// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableTopicRuleRequest } from "../models/models_1";
import { EnableTopicRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableTopicRuleCommand}.
 */
export interface EnableTopicRuleCommandInput extends EnableTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link EnableTopicRuleCommand}.
 */
export interface EnableTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * Enables the rule.
 *
 * Requires permission to access the [EnableTopicRule](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, EnableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, EnableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // EnableTopicRuleRequest
 *   ruleName: "STRING_VALUE", // required
 * };
 * const command = new EnableTopicRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableTopicRuleCommandInput - {@link EnableTopicRuleCommandInput}
 * @returns {@link EnableTopicRuleCommandOutput}
 * @see {@link EnableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link EnableTopicRuleCommandOutput} for command's `response` shape.
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
export class EnableTopicRuleCommand extends command<EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput>(
  _ep0,
  _mw0,
  "EnableTopicRule",
  EnableTopicRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableTopicRuleRequest;
      output: {};
    };
    sdk: {
      input: EnableTopicRuleCommandInput;
      output: EnableTopicRuleCommandOutput;
    };
  };
}
