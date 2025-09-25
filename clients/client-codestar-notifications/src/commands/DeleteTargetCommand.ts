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
import { DeleteTargetRequest, DeleteTargetResult } from "../models/models_0";
import { DeleteTarget } from "../schemas/schemas_3_NotificationRule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTargetCommand}.
 */
export interface DeleteTargetCommandInput extends DeleteTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTargetCommand}.
 */
export interface DeleteTargetCommandOutput extends DeleteTargetResult, __MetadataBearer {}

/**
 * <p>Deletes a specified target for notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteTargetCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DeleteTargetCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // import type { CodestarNotificationsClientConfig } from "@aws-sdk/client-codestar-notifications";
 * const config = {}; // type is CodestarNotificationsClientConfig
 * const client = new CodestarNotificationsClient(config);
 * const input = { // DeleteTargetRequest
 *   TargetAddress: "STRING_VALUE", // required
 *   ForceUnsubscribeAll: true || false,
 * };
 * const command = new DeleteTargetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTargetCommandInput - {@link DeleteTargetCommandInput}
 * @returns {@link DeleteTargetCommandOutput}
 * @see {@link DeleteTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetCommandOutput} for command's `response` shape.
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
export class DeleteTargetCommand extends $Command
  .classBuilder<
    DeleteTargetCommandInput,
    DeleteTargetCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStarNotifications_20191015", "DeleteTarget", {})
  .n("CodestarNotificationsClient", "DeleteTargetCommand")
  .sc(DeleteTarget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTargetRequest;
      output: {};
    };
    sdk: {
      input: DeleteTargetCommandInput;
      output: DeleteTargetCommandOutput;
    };
  };
}
