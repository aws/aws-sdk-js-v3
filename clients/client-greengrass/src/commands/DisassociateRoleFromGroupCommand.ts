// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DisassociateRoleFromGroupRequest, DisassociateRoleFromGroupResponse } from "../models/models_0";
import { de_DisassociateRoleFromGroupCommand, se_DisassociateRoleFromGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateRoleFromGroupCommand}.
 */
export interface DisassociateRoleFromGroupCommandInput extends DisassociateRoleFromGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateRoleFromGroupCommand}.
 */
export interface DisassociateRoleFromGroupCommandOutput extends DisassociateRoleFromGroupResponse, __MetadataBearer {}

/**
 * Disassociates the role from a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DisassociateRoleFromGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DisassociateRoleFromGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // DisassociateRoleFromGroupRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateRoleFromGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateRoleFromGroupResponse
 * //   DisassociatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateRoleFromGroupCommandInput - {@link DisassociateRoleFromGroupCommandInput}
 * @returns {@link DisassociateRoleFromGroupCommandOutput}
 * @see {@link DisassociateRoleFromGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateRoleFromGroupCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DisassociateRoleFromGroupCommand extends $Command
  .classBuilder<
    DisassociateRoleFromGroupCommandInput,
    DisassociateRoleFromGroupCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "DisassociateRoleFromGroup", {})
  .n("GreengrassClient", "DisassociateRoleFromGroupCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateRoleFromGroupCommand)
  .de(de_DisassociateRoleFromGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateRoleFromGroupRequest;
      output: DisassociateRoleFromGroupResponse;
    };
    sdk: {
      input: DisassociateRoleFromGroupCommandInput;
      output: DisassociateRoleFromGroupCommandOutput;
    };
  };
}
