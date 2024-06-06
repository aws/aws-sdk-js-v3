// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { EnableDelegatedAdminAccountRequest, EnableDelegatedAdminAccountResponse } from "../models/models_0";
import {
  de_EnableDelegatedAdminAccountCommand,
  se_EnableDelegatedAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableDelegatedAdminAccountCommand}.
 */
export interface EnableDelegatedAdminAccountCommandInput extends EnableDelegatedAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link EnableDelegatedAdminAccountCommand}.
 */
export interface EnableDelegatedAdminAccountCommandOutput
  extends EnableDelegatedAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Enables the Amazon Inspector delegated administrator for your Organizations organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, EnableDelegatedAdminAccountCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, EnableDelegatedAdminAccountCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // EnableDelegatedAdminAccountRequest
 *   delegatedAdminAccountId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new EnableDelegatedAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // EnableDelegatedAdminAccountResponse
 * //   delegatedAdminAccountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param EnableDelegatedAdminAccountCommandInput - {@link EnableDelegatedAdminAccountCommandInput}
 * @returns {@link EnableDelegatedAdminAccountCommandOutput}
 * @see {@link EnableDelegatedAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableDelegatedAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class EnableDelegatedAdminAccountCommand extends $Command
  .classBuilder<
    EnableDelegatedAdminAccountCommandInput,
    EnableDelegatedAdminAccountCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "EnableDelegatedAdminAccount", {})
  .n("Inspector2Client", "EnableDelegatedAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_EnableDelegatedAdminAccountCommand)
  .de(de_EnableDelegatedAdminAccountCommand)
  .build() {}
