// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TransferCreditRequest, TransferCreditResponse } from "../models/models_0";
import { TransferCredit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TransferCreditCommand}.
 */
export interface TransferCreditCommandInput extends TransferCreditRequest {}
/**
 * @public
 *
 * The output of {@link TransferCreditCommand}.
 */
export interface TransferCreditCommandOutput extends TransferCreditResponse, __MetadataBearer {}

/**
 * <p>Moves a credit to another account in the same consolidated billing family. The credit keeps its ID, balance, end date, and applicable products. Only the account that owns the credit changes.</p> <p>The transfer removes the credit's sharing settings. The new owner or the payer can set them again. Any amount reserved for a bill that isn't finalized moves with the credit and still applies to that bill.</p> <p>You must be the payer of both accounts. You can't transfer a credit that has ended, has no available balance, or is the original credit of a split. A transfer creates no credit, so it doesn't count toward the split limit, and the payer can transfer the credit back. This operation is idempotent and supports a dry run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, TransferCreditCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, TransferCreditCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // TransferCreditRequest
 *   creditId: "STRING_VALUE", // required
 *   destinationAccountId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   dryRun: true || false,
 * };
 * const command = new TransferCreditCommand(input);
 * const response = await client.send(command);
 * // { // TransferCreditResponse
 * //   sourceCreditId: "STRING_VALUE", // required
 * //   newCreditId: "STRING_VALUE",
 * //   destinationAccountId: "STRING_VALUE", // required
 * //   amount: "STRING_VALUE", // required
 * //   dryRun: true || false, // required
 * // };
 *
 * ```
 *
 * @param TransferCreditCommandInput - {@link TransferCreditCommandInput}
 * @returns {@link TransferCreditCommandOutput}
 * @see {@link TransferCreditCommandInput} for command's `input` shape.
 * @see {@link TransferCreditCommandOutput} for command's `response` shape.
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
export class TransferCreditCommand extends command<TransferCreditCommandInput, TransferCreditCommandOutput>(
  _ep0,
  _mw0,
  "TransferCredit",
  TransferCredit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransferCreditRequest;
      output: TransferCreditResponse;
    };
    sdk: {
      input: TransferCreditCommandInput;
      output: TransferCreditCommandOutput;
    };
  };
}
