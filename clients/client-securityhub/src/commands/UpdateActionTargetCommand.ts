// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateActionTargetRequest, UpdateActionTargetResponse } from "../models/models_2";
import { de_UpdateActionTargetCommand, se_UpdateActionTargetCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateActionTargetCommand}.
 */
export interface UpdateActionTargetCommandInput extends UpdateActionTargetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateActionTargetCommand}.
 */
export interface UpdateActionTargetCommandOutput extends UpdateActionTargetResponse, __MetadataBearer {}

/**
 * <p>Updates the name and description of a custom action target in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateActionTargetRequest
 *   ActionTargetArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateActionTargetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateActionTargetCommandInput - {@link UpdateActionTargetCommandInput}
 * @returns {@link UpdateActionTargetCommandOutput}
 * @see {@link UpdateActionTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To update the name and description of a custom action target
 * ```javascript
 * // The following example updates the name and description of a custom action target in Security Hub. You can create custom actions to automatically respond to Security Hub findings using Amazon EventBridge.
 * const input = {
 *   "ActionTargetArn": "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation",
 *   "Description": "Sends specified findings to customer service chat",
 *   "Name": "Chat custom action"
 * };
 * const command = new UpdateActionTargetCommand(input);
 * await client.send(command);
 * // example id: to-update-the-name-and-description-of-a-custom-action-target-1678814873015
 * ```
 *
 */
export class UpdateActionTargetCommand extends $Command
  .classBuilder<
    UpdateActionTargetCommandInput,
    UpdateActionTargetCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "UpdateActionTarget", {})
  .n("SecurityHubClient", "UpdateActionTargetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateActionTargetCommand)
  .de(de_UpdateActionTargetCommand)
  .build() {}
