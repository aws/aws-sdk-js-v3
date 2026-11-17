// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SplitCreditRequest, SplitCreditResponse } from "../models/models_0";
import { SplitCredit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SplitCreditCommand}.
 */
export interface SplitCreditCommandInput extends SplitCreditRequest {}
/**
 * @public
 *
 * The output of {@link SplitCreditCommand}.
 */
export interface SplitCreditCommandOutput extends SplitCreditResponse, __MetadataBearer {}

/**
 * <p>Splits the available balance of a credit into 2 to 99 new credits in the same account, and cancels the original credit. The new credits keep the original credit's end date and applicable products.</p> <p>The available balance is the remaining balance minus any amount reserved for a bill that isn't finalized. The portions must add up to exactly the available balance. Each portion must be at least 100.00 in the currency of the credit. For example, if the credit is in USD, each portion must be at least USD $100.00. A reserved amount stays on the original credit and still applies to that bill.</p> <p>A credit and every credit split from it count toward a limit of 100 credits. After a split, you can't split or transfer the original credit. You can split or transfer its new credits, and you can split a credit after you transfer it.</p> <p>You must own the credit or be the payer of the account that owns it. You can't undo a split. This operation is idempotent and supports a dry run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, SplitCreditCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, SplitCreditCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // SplitCreditRequest
 *   creditId: "STRING_VALUE", // required
 *   portions: [ // SplitPortions // required
 *     { // SplitPortion
 *       amount: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   dryRun: true || false,
 * };
 * const command = new SplitCreditCommand(input);
 * const response = await client.send(command);
 * // { // SplitCreditResponse
 * //   parentCreditId: "STRING_VALUE", // required
 * //   childCredits: [ // ChildCredits // required
 * //     { // ChildCredit
 * //       creditId: "STRING_VALUE",
 * //       amount: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   dryRun: true || false, // required
 * // };
 *
 * ```
 *
 * @param SplitCreditCommandInput - {@link SplitCreditCommandInput}
 * @returns {@link SplitCreditCommandOutput}
 * @see {@link SplitCreditCommandInput} for command's `input` shape.
 * @see {@link SplitCreditCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> You've reached the limit of resources you can create, or exceeded the size of an individual resource. </p>
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
 * @public
 */
export class SplitCreditCommand extends command<SplitCreditCommandInput, SplitCreditCommandOutput>(
  _ep0,
  _mw0,
  "SplitCredit",
  SplitCredit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SplitCreditRequest;
      output: SplitCreditResponse;
    };
    sdk: {
      input: SplitCreditCommandInput;
      output: SplitCreditCommandOutput;
    };
  };
}
