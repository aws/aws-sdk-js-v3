// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListAcmeAccountsRequest, ListAcmeAccountsResponse } from "../models/models_0";
import { ListAcmeAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAcmeAccountsCommand}.
 */
export interface ListAcmeAccountsCommandInput extends ListAcmeAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListAcmeAccountsCommand}.
 */
export interface ListAcmeAccountsCommandOutput extends ListAcmeAccountsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when clients use external account binding credentials to register.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListAcmeAccountsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListAcmeAccountsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ListAcmeAccountsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AcmeEndpointArn: "STRING_VALUE", // required
 * };
 * const command = new ListAcmeAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAcmeAccountsResponse
 * //   AcmeAccounts: [ // AcmeAccountList
 * //     { // AcmeAccountSummary
 * //       AccountUrl: "STRING_VALUE",
 * //       PublicKeyThumbprint: "STRING_VALUE",
 * //       Status: "VALID" || "DEACTIVATED" || "REVOKED",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       AcmeExternalAccountBindingArn: "STRING_VALUE",
 * //       Contacts: [ // ContactList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcmeAccountsCommandInput - {@link ListAcmeAccountsCommandInput}
 * @returns {@link ListAcmeAccountsCommandOutput}
 * @see {@link ListAcmeAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAcmeAccountsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class ListAcmeAccountsCommand extends command<ListAcmeAccountsCommandInput, ListAcmeAccountsCommandOutput>(
  _ep1,
  _mw0,
  "ListAcmeAccounts",
  ListAcmeAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAcmeAccountsRequest;
      output: ListAcmeAccountsResponse;
    };
    sdk: {
      input: ListAcmeAccountsCommandInput;
      output: ListAcmeAccountsCommandOutput;
    };
  };
}
