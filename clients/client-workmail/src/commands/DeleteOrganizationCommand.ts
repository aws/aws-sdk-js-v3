// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOrganizationRequest, DeleteOrganizationResponse } from "../models/models_0";
import { de_DeleteOrganizationCommand, se_DeleteOrganizationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOrganizationCommand}.
 */
export interface DeleteOrganizationCommandInput extends DeleteOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOrganizationCommand}.
 */
export interface DeleteOrganizationCommandOutput extends DeleteOrganizationResponse, __MetadataBearer {}

/**
 * <p>Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteOrganizationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteOrganizationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // DeleteOrganizationRequest
 *   ClientToken: "STRING_VALUE",
 *   OrganizationId: "STRING_VALUE", // required
 *   DeleteDirectory: true || false, // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeleteOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOrganizationResponse
 * //   OrganizationId: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteOrganizationCommandInput - {@link DeleteOrganizationCommandInput}
 * @returns {@link DeleteOrganizationCommandOutput}
 * @see {@link DeleteOrganizationCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 * @public
 */
export class DeleteOrganizationCommand extends $Command
  .classBuilder<
    DeleteOrganizationCommandInput,
    DeleteOrganizationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "DeleteOrganization", {})
  .n("WorkMailClient", "DeleteOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOrganizationCommand)
  .de(de_DeleteOrganizationCommand)
  .build() {}
