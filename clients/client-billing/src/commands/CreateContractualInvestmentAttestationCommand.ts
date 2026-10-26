// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateContractualInvestmentAttestationRequest,
  CreateContractualInvestmentAttestationResponse,
} from "../models/models_0";
import { CreateContractualInvestmentAttestation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContractualInvestmentAttestationCommand}.
 */
export interface CreateContractualInvestmentAttestationCommandInput extends CreateContractualInvestmentAttestationRequest {}
/**
 * @public
 *
 * The output of {@link CreateContractualInvestmentAttestationCommand}.
 */
export interface CreateContractualInvestmentAttestationCommandOutput extends CreateContractualInvestmentAttestationResponse, __MetadataBearer {}

/**
 * <p>Creates an attestation that claims an investment award for a completed milestone or outcome within a private pricing contract. Supply a <code>clientToken</code> to make the request idempotent so a safe retry does not create a duplicate attestation. This operation starts an asynchronous review and returns an <code>attestationId</code> while the attestation is pending.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, CreateContractualInvestmentAttestationCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, CreateContractualInvestmentAttestationCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // CreateContractualInvestmentAttestationRequest
 *   contractArn: "STRING_VALUE", // required
 *   investmentSummaryId: "STRING_VALUE", // required
 *   investmentId: "STRING_VALUE", // required
 *   contractDocumentId: "STRING_VALUE", // required
 *   approverDetails: { // ApproverDetails
 *     name: "STRING_VALUE", // required
 *     title: "STRING_VALUE", // required
 *     email: "STRING_VALUE", // required
 *   },
 *   investmentDisbursedAt: new Date("TIMESTAMP"),
 *   attestationDetails: { // AttestationDetails
 *     attestationValue: { // AttestationValue Union: only one key present
 *       attestationAmount: { // Amount
 *         currencyCode: "STRING_VALUE", // required
 *         currencyAmount: "STRING_VALUE", // required
 *       },
 *       attestationQuantities: [ // AttestationQuantities
 *         { // AttestationQuantity
 *           attestationVolume: "STRING_VALUE", // required
 *           attestationUnit: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     investmentDistributions: [ // InvestmentDistributions
 *       { // InvestmentDistribution
 *         accountId: "STRING_VALUE", // required
 *         investmentAmount: {
 *           currencyCode: "STRING_VALUE", // required
 *           currencyAmount: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *   },
 *   additionalRecipients: [ // AdditionalRecipients
 *     { // AdditionalRecipient
 *       email: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateContractualInvestmentAttestationCommand(input);
 * const response = await client.send(command);
 * // { // CreateContractualInvestmentAttestationResponse
 * //   attestationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateContractualInvestmentAttestationCommandInput - {@link CreateContractualInvestmentAttestationCommandInput}
 * @returns {@link CreateContractualInvestmentAttestationCommandOutput}
 * @see {@link CreateContractualInvestmentAttestationCommandInput} for command's `input` shape.
 * @see {@link CreateContractualInvestmentAttestationCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
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
 * @example Invoke CreateContractualInvestmentAttestation with a direct amount
 * ```javascript
 * //
 * const input = {
 *   additionalRecipients: [
 *     {
 *       email: "recipient@example.com"
 *     }
 *   ],
 *   approverDetails: {
 *     email: "first-name.last-name@example.com",
 *     name: "First-Name Last-Name",
 *     title: "Title"
 *   },
 *   attestationDetails: {
 *     attestationValue: {
 *       attestationAmount: {
 *         currencyAmount: "1.00",
 *         currencyCode: "USD"
 *       }
 *     },
 *     investmentDistributions: [
 *       {
 *         accountId: "123456789012",
 *         investmentAmount: {
 *           currencyAmount: "1.00",
 *           currencyCode: "USD"
 *         }
 *       }
 *     ]
 *   },
 *   clientToken: "c0ffee00-1234-4abc-9def-0123456789ab",
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   contractDocumentId: "CC OTH XXXXXXXX XXXX TR",
 *   investmentDisbursedAt: 1199923200,
 *   investmentId: "Investment-Id",
 *   investmentSummaryId: "Example-Investment-Summary-Id"
 * };
 * const command = new CreateContractualInvestmentAttestationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attestationId: "a1b2c3d4-5678-90ab-cdef-111122223333"
 * }
 * *\/
 * ```
 *
 * @example Invoke CreateContractualInvestmentAttestation with a flat rate multiplier
 * ```javascript
 * //
 * const input = {
 *   approverDetails: {
 *     email: "first-name.last-name@example.com",
 *     name: "First-Name Last-Name",
 *     title: "Title"
 *   },
 *   attestationDetails: {
 *     attestationValue: {
 *       attestationQuantities: [
 *         {
 *           attestationUnit: "Example attestation unit",
 *           attestationVolume: "3"
 *         }
 *       ]
 *     },
 *     investmentDistributions: [
 *       {
 *         accountId: "123456789012",
 *         investmentAmount: {
 *           currencyAmount: "1500.00",
 *           currencyCode: "USD"
 *         }
 *       }
 *     ]
 *   },
 *   clientToken: "c0ffee00-1234-4abc-9def-0123456789ac",
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   contractDocumentId: "CC OTH XXXXXXXX XXXX TR",
 *   investmentDisbursedAt: 1199923200,
 *   investmentId: "Investment-Id",
 *   investmentSummaryId: "Example-Investment-Summary-Id"
 * };
 * const command = new CreateContractualInvestmentAttestationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attestationId: "b2c3d4e5-6789-01bc-def0-222233334444"
 * }
 * *\/
 * ```
 *
 * @example Invoke CreateContractualInvestmentAttestation with a percentage multiplier
 * ```javascript
 * //
 * const input = {
 *   approverDetails: {
 *     email: "first-name.last-name@example.com",
 *     name: "First-Name Last-Name",
 *     title: "Title"
 *   },
 *   attestationDetails: {
 *     attestationValue: {
 *       attestationQuantities: [
 *         {
 *           attestationUnit: "Example attestation unit",
 *           attestationVolume: "1000"
 *         }
 *       ]
 *     },
 *     investmentDistributions: [
 *       {
 *         accountId: "123456789012",
 *         investmentAmount: {
 *           currencyAmount: "150.00",
 *           currencyCode: "USD"
 *         }
 *       }
 *     ]
 *   },
 *   clientToken: "c0ffee00-1234-4abc-9def-0123456789ad",
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   contractDocumentId: "CC OTH XXXXXXXX XXXX TR",
 *   investmentDisbursedAt: 1199923200,
 *   investmentId: "Investment-Id",
 *   investmentSummaryId: "Example-Investment-Summary-Id"
 * };
 * const command = new CreateContractualInvestmentAttestationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attestationId: "c3d4e5f6-7890-12cd-ef01-333344445555"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateContractualInvestmentAttestationCommand extends command<CreateContractualInvestmentAttestationCommandInput, CreateContractualInvestmentAttestationCommandOutput>(
  _ep0,
  _mw0,
  "CreateContractualInvestmentAttestation",
  CreateContractualInvestmentAttestation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContractualInvestmentAttestationRequest;
      output: CreateContractualInvestmentAttestationResponse;
    };
    sdk: {
      input: CreateContractualInvestmentAttestationCommandInput;
      output: CreateContractualInvestmentAttestationCommandOutput;
    };
  };
}
