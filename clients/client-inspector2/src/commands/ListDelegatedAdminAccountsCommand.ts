// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListDelegatedAdminAccountsRequest, ListDelegatedAdminAccountsResponse } from "../models/models_1";
import { de_ListDelegatedAdminAccountsCommand, se_ListDelegatedAdminAccountsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDelegatedAdminAccountsCommand}.
 */
export interface ListDelegatedAdminAccountsCommandInput extends ListDelegatedAdminAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListDelegatedAdminAccountsCommand}.
 */
export interface ListDelegatedAdminAccountsCommandOutput extends ListDelegatedAdminAccountsResponse, __MetadataBearer {}

/**
 * <p>Lists information about the Amazon Inspector delegated administrator of your
 *          organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListDelegatedAdminAccountsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListDelegatedAdminAccountsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListDelegatedAdminAccountsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDelegatedAdminAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListDelegatedAdminAccountsResponse
 * //   delegatedAdminAccounts: [ // DelegatedAdminAccountList
 * //     { // DelegatedAdminAccount
 * //       accountId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDelegatedAdminAccountsCommandInput - {@link ListDelegatedAdminAccountsCommandInput}
 * @returns {@link ListDelegatedAdminAccountsCommandOutput}
 * @see {@link ListDelegatedAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListDelegatedAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
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
export class ListDelegatedAdminAccountsCommand extends $Command
  .classBuilder<
    ListDelegatedAdminAccountsCommandInput,
    ListDelegatedAdminAccountsCommandOutput,
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
  .s("Inspector2", "ListDelegatedAdminAccounts", {})
  .n("Inspector2Client", "ListDelegatedAdminAccountsCommand")
  .f(void 0, void 0)
  .ser(se_ListDelegatedAdminAccountsCommand)
  .de(de_ListDelegatedAdminAccountsCommand)
  .build() {}
