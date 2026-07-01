// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateMpaTeamInput, DisassociateMpaTeamOutput } from "../models/models_0";
import { DisassociateMpaTeam$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateMpaTeamCommand}.
 */
export interface DisassociateMpaTeamCommandInput extends DisassociateMpaTeamInput {}
/**
 * @public
 *
 * The output of {@link DisassociateMpaTeamCommand}.
 */
export interface DisassociateMpaTeamCommandOutput extends DisassociateMpaTeamOutput, __MetadataBearer {}

/**
 * <p>Removes the association between a Multi-Party Approval (MPA) team and a protected operation.</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_AssociateMpaTeam.html">AssociateMpaTeam</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetMpaTeamAssociation.html">GetMpaTeamAssociation</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, DisassociateMpaTeamCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, DisassociateMpaTeamCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // DisassociateMpaTeamInput
 *   Action: "STRING_VALUE", // required
 *   RequesterComment: "STRING_VALUE",
 * };
 * const command = new DisassociateMpaTeamCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateMpaTeamOutput
 * //   MpaTeamAssociation: { // MpaTeamAssociation
 * //     Action: "STRING_VALUE", // required
 * //     MpaTeamArn: "STRING_VALUE", // required
 * //     AssociationState: "STRING_VALUE", // required
 * //     MpaStatus: { // MpaStatus
 * //       MpaSessionArn: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       InitiationDate: new Date("TIMESTAMP"), // required
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateMpaTeamCommandInput - {@link DisassociateMpaTeamCommandInput}
 * @returns {@link DisassociateMpaTeamCommandOutput}
 * @see {@link DisassociateMpaTeamCommandInput} for command's `input` shape.
 * @see {@link DisassociateMpaTeamCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p> <p>The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to resource not found.</p> <p>The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p> <p>You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p> <p>The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p> <p>You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p> <p>One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 *
 * @public
 */
export class DisassociateMpaTeamCommand extends command<DisassociateMpaTeamCommandInput, DisassociateMpaTeamCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateMpaTeam",
  DisassociateMpaTeam$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMpaTeamInput;
      output: DisassociateMpaTeamOutput;
    };
    sdk: {
      input: DisassociateMpaTeamCommandInput;
      output: DisassociateMpaTeamCommandOutput;
    };
  };
}
