// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSlackWorkspaceConfigurationRequest, DeleteSlackWorkspaceConfigurationResult } from "../models/models_0";
import {
  de_DeleteSlackWorkspaceConfigurationCommand,
  se_DeleteSlackWorkspaceConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSlackWorkspaceConfigurationCommand}.
 */
export interface DeleteSlackWorkspaceConfigurationCommandInput extends DeleteSlackWorkspaceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlackWorkspaceConfigurationCommand}.
 */
export interface DeleteSlackWorkspaceConfigurationCommandOutput
  extends DeleteSlackWorkspaceConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't
 *       delete your Slack workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, DeleteSlackWorkspaceConfigurationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, DeleteSlackWorkspaceConfigurationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupportAppClient(config);
 * const input = { // DeleteSlackWorkspaceConfigurationRequest
 *   teamId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSlackWorkspaceConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSlackWorkspaceConfigurationCommandInput - {@link DeleteSlackWorkspaceConfigurationCommandInput}
 * @returns {@link DeleteSlackWorkspaceConfigurationCommandOutput}
 * @see {@link DeleteSlackWorkspaceConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSlackWorkspaceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has a conflict. For example, you might receive this error if you try the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>Add, update, or delete a Slack channel configuration before you add a Slack workspace
 *           to your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Add a Slack channel configuration that already exists in your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack channel configuration for a live chat channel.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack workspace from your Amazon Web Services account that has an active live chat
 *           channel.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from an Amazon Web Services account
 *           that doesn't belong to an organization.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from a member account,
 *           but the management account hasn't registered that workspace yet for the
 *           organization.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource is missing or doesn't exist, such as an account alias, Slack
 *       channel configuration, or Slack workspace configuration.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your request input doesn't meet the constraints that the Amazon Web Services Support App specifies.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 * @public
 */
export class DeleteSlackWorkspaceConfigurationCommand extends $Command
  .classBuilder<
    DeleteSlackWorkspaceConfigurationCommandInput,
    DeleteSlackWorkspaceConfigurationCommandOutput,
    SupportAppClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportAppClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SupportApp", "DeleteSlackWorkspaceConfiguration", {})
  .n("SupportAppClient", "DeleteSlackWorkspaceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSlackWorkspaceConfigurationCommand)
  .de(de_DeleteSlackWorkspaceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSlackWorkspaceConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSlackWorkspaceConfigurationCommandInput;
      output: DeleteSlackWorkspaceConfigurationCommandOutput;
    };
  };
}
