// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListFoundationModelAgreementOffersRequest,
  ListFoundationModelAgreementOffersResponse,
} from "../models/models_1";
import { ListFoundationModelAgreementOffers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFoundationModelAgreementOffersCommand}.
 */
export interface ListFoundationModelAgreementOffersCommandInput extends ListFoundationModelAgreementOffersRequest {}
/**
 * @public
 *
 * The output of {@link ListFoundationModelAgreementOffersCommand}.
 */
export interface ListFoundationModelAgreementOffersCommandOutput extends ListFoundationModelAgreementOffersResponse, __MetadataBearer {}

/**
 * Get the offers associated with the specified model.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListFoundationModelAgreementOffersCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListFoundationModelAgreementOffersCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListFoundationModelAgreementOffersRequest
 *   modelId: "STRING_VALUE", // required
 *   offerType: "ALL" || "PUBLIC",
 * };
 * const command = new ListFoundationModelAgreementOffersCommand(input);
 * const response = await client.send(command);
 * // { // ListFoundationModelAgreementOffersResponse
 * //   modelId: "STRING_VALUE", // required
 * //   offers: [ // Offers // required
 * //     { // Offer
 * //       offerId: "STRING_VALUE",
 * //       offerToken: "STRING_VALUE", // required
 * //       termDetails: { // TermDetails
 * //         usageBasedPricingTerm: { // PricingTerm
 * //           rateCard: [ // RateCard // required
 * //             { // DimensionalPriceRate
 * //               dimension: "STRING_VALUE",
 * //               price: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //               unit: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         legalTerm: { // LegalTerm
 * //           url: "STRING_VALUE",
 * //         },
 * //         supportTerm: { // SupportTerm
 * //           refundPolicyDescription: "STRING_VALUE",
 * //         },
 * //         validityTerm: { // ValidityTerm
 * //           agreementDuration: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFoundationModelAgreementOffersCommandInput - {@link ListFoundationModelAgreementOffersCommandInput}
 * @returns {@link ListFoundationModelAgreementOffersCommandOutput}
 * @see {@link ListFoundationModelAgreementOffersCommandInput} for command's `input` shape.
 * @see {@link ListFoundationModelAgreementOffersCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class ListFoundationModelAgreementOffersCommand extends command<ListFoundationModelAgreementOffersCommandInput, ListFoundationModelAgreementOffersCommandOutput>(
  _ep0,
  _mw0,
  "ListFoundationModelAgreementOffers",
  ListFoundationModelAgreementOffers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFoundationModelAgreementOffersRequest;
      output: ListFoundationModelAgreementOffersResponse;
    };
    sdk: {
      input: ListFoundationModelAgreementOffersCommandInput;
      output: ListFoundationModelAgreementOffersCommandOutput;
    };
  };
}
