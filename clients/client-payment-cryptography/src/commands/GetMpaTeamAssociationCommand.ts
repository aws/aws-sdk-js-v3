// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMpaTeamAssociationInput, GetMpaTeamAssociationOutput } from "../models/models_0";
import { GetMpaTeamAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMpaTeamAssociationCommand}.
 */
export interface GetMpaTeamAssociationCommandInput extends GetMpaTeamAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetMpaTeamAssociationCommand}.
 */
export interface GetMpaTeamAssociationCommandOutput extends GetMpaTeamAssociationOutput, __MetadataBearer {}

/**
 * Returns the Multi-Party Approval (MPA) team association for a protected operation.
 *
 * **Cross-account use:** This operation can't be used across different Amazon Web Services accounts.
 *
 * **Related operations:**
 *
 * - [AssociateMpaTeam](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_AssociateMpaTeam.html)
 * - [DisassociateMpaTeam](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DisassociateMpaTeam.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetMpaTeamAssociationCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetMpaTeamAssociationCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetMpaTeamAssociationInput
 *   Action: "STRING_VALUE", // required
 * };
 * const command = new GetMpaTeamAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetMpaTeamAssociationOutput
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
 * @param GetMpaTeamAssociationCommandInput - {@link GetMpaTeamAssociationCommandInput}
 * @returns {@link GetMpaTeamAssociationCommandOutput}
 * @see {@link GetMpaTeamAssociationCommandInput} for command's `input` shape.
 * @see {@link GetMpaTeamAssociationCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This request can cause an inconsistent state for the resource.
 *
 * The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied due to resource not found.
 *
 * The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request would cause a service quota to be exceeded.
 *
 * You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied due to an invalid request error.
 *
 * One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.
 *
 * @throws {@link PaymentCryptographyServiceException}
 *
 * Base exception class for all service exceptions from PaymentCryptography service.
 *
 * @public
 */
export class GetMpaTeamAssociationCommand extends command<GetMpaTeamAssociationCommandInput, GetMpaTeamAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetMpaTeamAssociation",
  GetMpaTeamAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMpaTeamAssociationInput;
      output: GetMpaTeamAssociationOutput;
    };
    sdk: {
      input: GetMpaTeamAssociationCommandInput;
      output: GetMpaTeamAssociationCommandOutput;
    };
  };
}
