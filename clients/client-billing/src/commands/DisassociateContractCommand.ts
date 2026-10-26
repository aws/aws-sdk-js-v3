// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateContractRequest, DisassociateContractResponse } from "../models/models_0";
import { DisassociateContract$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateContractCommand}.
 */
export interface DisassociateContractCommandInput extends DisassociateContractRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateContractCommand}.
 */
export interface DisassociateContractCommandOutput extends DisassociateContractResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a private pricing contract and your Amazon Web Services account. The account must have been associated with the contract previously. This operation is idempotent, so retrying is safe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, DisassociateContractCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, DisassociateContractCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // DisassociateContractRequest
 *   contractArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateContractCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateContractCommandInput - {@link DisassociateContractCommandInput}
 * @returns {@link DisassociateContractCommandOutput}
 * @see {@link DisassociateContractCommandInput} for command's `input` shape.
 * @see {@link DisassociateContractCommandOutput} for command's `response` shape.
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
 * @example Invoke DisassociateContract
 * ```javascript
 * //
 * const input = {
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333"
 * };
 * const command = new DisassociateContractCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateContractCommand extends command<DisassociateContractCommandInput, DisassociateContractCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateContract",
  DisassociateContract$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateContractRequest;
      output: {};
    };
    sdk: {
      input: DisassociateContractCommandInput;
      output: DisassociateContractCommandOutput;
    };
  };
}
