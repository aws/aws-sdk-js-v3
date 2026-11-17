// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgreementContactsInput, GetAgreementContactsOutput } from "../models/models_0";
import { GetAgreementContacts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgreementContactsCommand}.
 */
export interface GetAgreementContactsCommandInput extends GetAgreementContactsInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementContactsCommand}.
 */
export interface GetAgreementContactsCommandOutput extends GetAgreementContactsOutput, __MetadataBearer {}

/**
 * <p>Obtains details about the acceptor's contact information for an active agreement that you participate in as the proposer, acceptor, or manufacturer.</p> <note> <p>If the acceptor's contact information isn't available, the operation succeeds but doesn't return <code>acceptorContact</code>. This happens when the acceptor didn't provide it, the information was removed, or the agreement isn't active.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementContactsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementContactsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementContactsInput
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new GetAgreementContactsCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementContactsOutput
 * //   acceptorContact: { // AcceptorContact
 * //     firstName: "STRING_VALUE", // required
 * //     lastName: "STRING_VALUE", // required
 * //     emailAddress: "STRING_VALUE", // required
 * //     companyName: "STRING_VALUE", // required
 * //     countryCode: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgreementContactsCommandInput - {@link GetAgreementContactsCommandInput}
 * @returns {@link GetAgreementContactsCommandOutput}
 * @see {@link GetAgreementContactsCommandInput} for command's `input` shape.
 * @see {@link GetAgreementContactsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
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
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @example Get the contacts captured on an agreement
 * ```javascript
 * //
 * const input = {
 *   agreementId: "agmt-xxxxxxx"
 * };
 * const command = new GetAgreementContactsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   acceptorContact: {
 *     companyName: "Example Corp",
 *     countryCode: "US",
 *     emailAddress: "xxx@example.com",
 *     firstName: "xx",
 *     lastName: "xx"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAgreementContactsCommand extends command<GetAgreementContactsCommandInput, GetAgreementContactsCommandOutput>(
  _ep0,
  _mw0,
  "GetAgreementContacts",
  GetAgreementContacts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementContactsInput;
      output: GetAgreementContactsOutput;
    };
    sdk: {
      input: GetAgreementContactsCommandInput;
      output: GetAgreementContactsCommandOutput;
    };
  };
}
