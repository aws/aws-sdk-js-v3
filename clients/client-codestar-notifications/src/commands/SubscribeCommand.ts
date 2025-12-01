// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SubscribeRequest, SubscribeResult } from "../models/models_0";
import { Subscribe } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubscribeCommand}.
 */
export interface SubscribeCommandInput extends SubscribeRequest {}
/**
 * @public
 *
 * The output of {@link SubscribeCommand}.
 */
export interface SubscribeCommandOutput extends SubscribeResult, __MetadataBearer {}

/**
 * <p>Creates an association between a notification rule and an Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client so that the
 *             associated target can receive notifications when the events described in the rule are
 *             triggered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, SubscribeCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, SubscribeCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // SubscribeRequest
 *   Arn: "STRING_VALUE", // required
 *   Target: { // Target
 *     TargetType: "STRING_VALUE",
 *     TargetAddress: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new SubscribeCommand(input);
 * const response = await client.send(command);
 * // { // SubscribeResult
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubscribeCommandInput - {@link SubscribeCommandInput}
 * @returns {@link SubscribeCommandOutput}
 * @see {@link SubscribeCommandInput} for command's `input` shape.
 * @see {@link SubscribeCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link ConfigurationException} (client fault)
 *  <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 *
 * @public
 */
export class SubscribeCommand extends $Command
  .classBuilder<
    SubscribeCommandInput,
    SubscribeCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStarNotifications_20191015", "Subscribe", {})
  .n("CodestarNotificationsClient", "SubscribeCommand")
  .sc(Subscribe)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubscribeRequest;
      output: SubscribeResult;
    };
    sdk: {
      input: SubscribeCommandInput;
      output: SubscribeCommandOutput;
    };
  };
}
