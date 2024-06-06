// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterAdminInput } from "../models/models_0";
import { de_RegisterAdminCommand, se_RegisterAdminCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterAdminCommand}.
 */
export interface RegisterAdminCommandInput extends RegisterAdminInput {}
/**
 * @public
 *
 * The output of {@link RegisterAdminCommand}.
 */
export interface RegisterAdminCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds a user or group to the list of administrators of the private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, RegisterAdminCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, RegisterAdminCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // RegisterAdminInput
 *   spaceId: "STRING_VALUE", // required
 *   adminId: "STRING_VALUE", // required
 * };
 * const command = new RegisterAdminCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterAdminCommandInput - {@link RegisterAdminCommandInput}
 * @returns {@link RegisterAdminCommandOutput}
 * @see {@link RegisterAdminCommandInput} for command's `input` shape.
 * @see {@link RegisterAdminCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 * @public
 */
export class RegisterAdminCommand extends $Command
  .classBuilder<
    RegisterAdminCommandInput,
    RegisterAdminCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RepostSpace", "RegisterAdmin", {})
  .n("RepostspaceClient", "RegisterAdminCommand")
  .f(void 0, void 0)
  .ser(se_RegisterAdminCommand)
  .de(de_RegisterAdminCommand)
  .build() {}
