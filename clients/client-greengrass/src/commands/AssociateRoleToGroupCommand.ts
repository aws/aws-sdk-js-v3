// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { AssociateRoleToGroupRequest, AssociateRoleToGroupResponse } from "../models/models_0";
import { de_AssociateRoleToGroupCommand, se_AssociateRoleToGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateRoleToGroupCommand}.
 */
export interface AssociateRoleToGroupCommandInput extends AssociateRoleToGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateRoleToGroupCommand}.
 */
export interface AssociateRoleToGroupCommandOutput extends AssociateRoleToGroupResponse, __MetadataBearer {}

/**
 * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, AssociateRoleToGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, AssociateRoleToGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // AssociateRoleToGroupRequest
 *   GroupId: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateRoleToGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociateRoleToGroupResponse
 * //   AssociatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateRoleToGroupCommandInput - {@link AssociateRoleToGroupCommandInput}
 * @returns {@link AssociateRoleToGroupCommandOutput}
 * @see {@link AssociateRoleToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateRoleToGroupCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class AssociateRoleToGroupCommand extends $Command
  .classBuilder<
    AssociateRoleToGroupCommandInput,
    AssociateRoleToGroupCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "AssociateRoleToGroup", {})
  .n("GreengrassClient", "AssociateRoleToGroupCommand")
  .f(void 0, void 0)
  .ser(se_AssociateRoleToGroupCommand)
  .de(de_AssociateRoleToGroupCommand)
  .build() {}
