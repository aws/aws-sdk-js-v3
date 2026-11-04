// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableTopicRuleRequest } from "../models/models_1";
import { DisableTopicRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableTopicRuleCommand}.
 */
export interface DisableTopicRuleCommandInput extends DisableTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link DisableTopicRuleCommand}.
 */
export interface DisableTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * Disables the rule.
 *
 * Requires permission to access the [DisableTopicRule](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DisableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DisableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DisableTopicRuleRequest
 *   ruleName: "STRING_VALUE", // required
 * };
 * const command = new DisableTopicRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableTopicRuleCommandInput - {@link DisableTopicRuleCommandInput}
 * @returns {@link DisableTopicRuleCommandOutput}
 * @see {@link DisableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DisableTopicRuleCommandOutput} for command's `response` shape.
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
export class DisableTopicRuleCommand extends command<DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput>(
  _ep0,
  _mw0,
  "DisableTopicRule",
  DisableTopicRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableTopicRuleRequest;
      output: {};
    };
    sdk: {
      input: DisableTopicRuleCommandInput;
      output: DisableTopicRuleCommandOutput;
    };
  };
}
