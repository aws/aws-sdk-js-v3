// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RedeemCreditsRequest, RedeemCreditsResponse } from "../models/models_0";
import { RedeemCredits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RedeemCreditsCommand}.
 */
export interface RedeemCreditsCommandInput extends RedeemCreditsRequest {}
/**
 * @public
 *
 * The output of {@link RedeemCreditsCommand}.
 */
export interface RedeemCreditsCommandOutput extends RedeemCreditsResponse, __MetadataBearer {}

/**
 * Redeems an Amazon Web Services promotional credit code on behalf of the calling account. On success, a new credit is added to the account's credit ledger with the amount, validity period, and applicable products defined by the promotion. The credit is then automatically applied to subsequent bills according to the standard credit application order.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, RedeemCreditsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, RedeemCreditsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // RedeemCreditsRequest
 *   promoCode: "STRING_VALUE", // required
 * };
 * const command = new RedeemCreditsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RedeemCreditsCommandInput - {@link RedeemCreditsCommandInput}
 * @returns {@link RedeemCreditsCommandOutput}
 * @see {@link RedeemCreditsCommandInput} for command's `input` shape.
 * @see {@link RedeemCreditsCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BillingServiceException}
 *
 * Base exception class for all service exceptions from Billing service.
 *
 * @public
 */
export class RedeemCreditsCommand extends command<RedeemCreditsCommandInput, RedeemCreditsCommandOutput>(
  _ep0,
  _mw0,
  "RedeemCredits",
  RedeemCredits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RedeemCreditsRequest;
      output: {};
    };
    sdk: {
      input: RedeemCreditsCommandInput;
      output: RedeemCreditsCommandOutput;
    };
  };
}
