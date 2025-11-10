// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnsubscribeRequest, UnsubscribeResult } from "../models/models_0";
import { Unsubscribe } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnsubscribeCommand}.
 */
export interface UnsubscribeCommandInput extends UnsubscribeRequest {}
/**
 * @public
 *
 * The output of {@link UnsubscribeCommand}.
 */
export interface UnsubscribeCommandOutput extends UnsubscribeResult, __MetadataBearer {}

/**
 * <p>Removes an association between a notification rule and an Amazon Q Developer in chat applications topic so that
 *             subscribers to that topic stop receiving notifications when the events described in the
 *             rule are triggered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UnsubscribeCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UnsubscribeCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // UnsubscribeRequest
 *   Arn: "STRING_VALUE", // required
 *   TargetAddress: "STRING_VALUE", // required
 * };
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * // { // UnsubscribeResult
 * //   Arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UnsubscribeCommandInput - {@link UnsubscribeCommandInput}
 * @returns {@link UnsubscribeCommandOutput}
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
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
export class UnsubscribeCommand extends $Command
  .classBuilder<
    UnsubscribeCommandInput,
    UnsubscribeCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStarNotifications_20191015", "Unsubscribe", {})
  .n("CodestarNotificationsClient", "UnsubscribeCommand")
  .sc(Unsubscribe)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnsubscribeRequest;
      output: UnsubscribeResult;
    };
    sdk: {
      input: UnsubscribeCommandInput;
      output: UnsubscribeCommandOutput;
    };
  };
}
