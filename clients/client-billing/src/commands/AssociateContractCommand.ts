// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateContractRequest, AssociateContractResponse } from "../models/models_0";
import { AssociateContract$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateContractCommand}.
 */
export interface AssociateContractCommandInput extends AssociateContractRequest {}
/**
 * @public
 *
 * The output of {@link AssociateContractCommand}.
 */
export interface AssociateContractCommandOutput extends AssociateContractResponse, __MetadataBearer {}

/**
 * <p>Private Pricing contracts let eligible payer accounts manage private pricing agreements with Amazon Web Services. This operation associates a private pricing contract with the caller's Amazon Web Services account. The caller must be a payer (management) account listed on the contract. This operation is idempotent, so retrying a request that already succeeded is safe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, AssociateContractCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, AssociateContractCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // AssociateContractRequest
 *   contractArn: "STRING_VALUE", // required
 *   contractDocumentId: "STRING_VALUE", // required
 * };
 * const command = new AssociateContractCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateContractCommandInput - {@link AssociateContractCommandInput}
 * @returns {@link AssociateContractCommandOutput}
 * @see {@link AssociateContractCommandInput} for command's `input` shape.
 * @see {@link AssociateContractCommandOutput} for command's `response` shape.
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
 * @example Invoke AssociateContract
 * ```javascript
 * //
 * const input = {
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   contractDocumentId: "CC OTH XXXXXXXX XXXX TR"
 * };
 * const command = new AssociateContractCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateContractCommand extends command<AssociateContractCommandInput, AssociateContractCommandOutput>(
  _ep0,
  _mw0,
  "AssociateContract",
  AssociateContract$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateContractRequest;
      output: {};
    };
    sdk: {
      input: AssociateContractCommandInput;
      output: AssociateContractCommandOutput;
    };
  };
}
