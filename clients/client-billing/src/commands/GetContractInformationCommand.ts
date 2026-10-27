// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContractInformationRequest, GetContractInformationResponse } from "../models/models_0";
import { GetContractInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContractInformationCommand}.
 */
export interface GetContractInformationCommandInput extends GetContractInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetContractInformationCommand}.
 */
export interface GetContractInformationCommandOutput extends GetContractInformationResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific private pricing contract, including its term (duration), eligible payer accounts, investment accounts, and legal entities. This operation is read-only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetContractInformationCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetContractInformationCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // GetContractInformationRequest
 *   contractArn: "STRING_VALUE", // required
 * };
 * const command = new GetContractInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetContractInformationResponse
 * //   contract: { // ContractDetails Union: only one key present
 * //     privatePricingAddendum: { // PrivatePricingAddendum
 * //       contractArn: "STRING_VALUE", // required
 * //       contractTerm: { // Interval
 * //         startDateInclusive: new Date("TIMESTAMP"), // required
 * //         endDateInclusive: new Date("TIMESTAMP"), // required
 * //       },
 * //       eligiblePayerAccounts: [ // AccountList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       investmentAccounts: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       legalEntities: [ // LegalEntities // required
 * //         { // LegalEntity
 * //           legalEntityName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       contractRestrictions: [ // ContractRestrictions
 * //         "ATTESTATION_SELF_SERVICE_BLOCKED",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContractInformationCommandInput - {@link GetContractInformationCommandInput}
 * @returns {@link GetContractInformationCommandOutput}
 * @see {@link GetContractInformationCommandInput} for command's `input` shape.
 * @see {@link GetContractInformationCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @example Invoke GetContractInformation
 * ```javascript
 * //
 * const input = {
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333"
 * };
 * const command = new GetContractInformationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   contract: {
 *     privatePricingAddendum: {
 *       contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *       contractTerm: {
 *         endDateInclusive: 1222222222,
 *         startDateInclusive: 1111111111
 *       },
 *       eligiblePayerAccounts: [
 *         "123456789012",
 *         "210987654321"
 *       ],
 *       investmentAccounts: [
 *         "123456789012"
 *       ],
 *       legalEntities: [
 *         {
 *           legalEntityName: "Example Legal Entity Name"
 *         }
 *       ]
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetContractInformationCommand extends command<GetContractInformationCommandInput, GetContractInformationCommandOutput>(
  _ep0,
  _mw0,
  "GetContractInformation",
  GetContractInformation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContractInformationRequest;
      output: GetContractInformationResponse;
    };
    sdk: {
      input: GetContractInformationCommandInput;
      output: GetContractInformationCommandOutput;
    };
  };
}
