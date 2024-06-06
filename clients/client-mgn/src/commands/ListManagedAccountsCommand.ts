// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListManagedAccountsRequest, ListManagedAccountsResponse } from "../models/models_0";
import { de_ListManagedAccountsCommand, se_ListManagedAccountsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedAccountsCommand}.
 */
export interface ListManagedAccountsCommandInput extends ListManagedAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedAccountsCommand}.
 */
export interface ListManagedAccountsCommandOutput extends ListManagedAccountsResponse, __MetadataBearer {}

/**
 * <p>List Managed Accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListManagedAccountsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListManagedAccountsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListManagedAccountsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedAccountsResponse
 * //   items: [ // ManagedAccounts // required
 * //     { // ManagedAccount
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedAccountsCommandInput - {@link ListManagedAccountsCommandInput}
 * @returns {@link ListManagedAccountsCommandOutput}
 * @see {@link ListManagedAccountsCommandInput} for command's `input` shape.
 * @see {@link ListManagedAccountsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class ListManagedAccountsCommand extends $Command
  .classBuilder<
    ListManagedAccountsCommandInput,
    ListManagedAccountsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "ListManagedAccounts", {})
  .n("MgnClient", "ListManagedAccountsCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedAccountsCommand)
  .de(de_ListManagedAccountsCommand)
  .build() {}
