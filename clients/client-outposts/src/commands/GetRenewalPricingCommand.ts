// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRenewalPricingInput, GetRenewalPricingOutput } from "../models/models_0";
import { GetRenewalPricing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRenewalPricingCommand}.
 */
export interface GetRenewalPricingCommandInput extends GetRenewalPricingInput {}
/**
 * @public
 *
 * The output of {@link GetRenewalPricingCommand}.
 */
export interface GetRenewalPricingCommandOutput extends GetRenewalPricingOutput, __MetadataBearer {}

/**
 * <p>Gets all available renewal pricing options for the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetRenewalPricingCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetRenewalPricingCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetRenewalPricingInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetRenewalPricingCommand(input);
 * const response = await client.send(command);
 * // { // GetRenewalPricingOutput
 * //   PricingResult: "PRICED" || "UNABLE_TO_PRICE",
 * //   PricingOptions: [ // PricingOptionList
 * //     { // PricingOption
 * //       PricingType: "SUBSCRIPTION",
 * //       SubscriptionPricingDetails: { // SubscriptionPricingDetails
 * //         PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //         PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //         UpfrontPrice: Number("float"),
 * //         MonthlyRecurringPrice: Number("float"),
 * //         Currency: "USD",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRenewalPricingCommandInput - {@link GetRenewalPricingCommandInput}
 * @returns {@link GetRenewalPricingCommandOutput}
 * @see {@link GetRenewalPricingCommandInput} for command's `input` shape.
 * @see {@link GetRenewalPricingCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class GetRenewalPricingCommand extends command<GetRenewalPricingCommandInput, GetRenewalPricingCommandOutput>(
  _ep0,
  _mw0,
  "GetRenewalPricing",
  GetRenewalPricing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRenewalPricingInput;
      output: GetRenewalPricingOutput;
    };
    sdk: {
      input: GetRenewalPricingCommandInput;
      output: GetRenewalPricingCommandOutput;
    };
  };
}
