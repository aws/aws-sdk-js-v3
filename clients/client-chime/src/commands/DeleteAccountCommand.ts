// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccountRequest, DeleteAccountResponse } from "../models/models_0";
import { de_DeleteAccountCommand, se_DeleteAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountCommand}.
 */
export interface DeleteAccountCommandInput extends DeleteAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountCommand}.
 */
export interface DeleteAccountCommandOutput extends DeleteAccountResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting
 *                 <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action
 *             to dodo.</p>
 *          <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the
 *             claimed domains for your Amazon Chime account before deletion. As soon as you release
 *             the domain, all users under that account are suspended.</p>
 *          <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore
 *             deleted account from your <code>Disabled</code> accounts list, you must contact AWS
 *             Support.</p>
 *          <p>After 90 days, deleted accounts are permanently removed from your
 * <code>Disabled</code> accounts list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DeleteAccountRequest
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountCommandInput - {@link DeleteAccountCommandInput}
 * @returns {@link DeleteAccountCommandOutput}
 * @see {@link DeleteAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class DeleteAccountCommand extends $Command
  .classBuilder<
    DeleteAccountCommandInput,
    DeleteAccountCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "DeleteAccount", {})
  .n("ChimeClient", "DeleteAccountCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccountCommand)
  .de(de_DeleteAccountCommand)
  .build() {}
