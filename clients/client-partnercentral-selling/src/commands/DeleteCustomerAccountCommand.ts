// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCustomerAccountRequest, DeleteCustomerAccountResponse } from "../models/models_0";
import { DeleteCustomerAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomerAccountCommand}.
 */
export interface DeleteCustomerAccountCommandInput extends DeleteCustomerAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomerAccountCommand}.
 */
export interface DeleteCustomerAccountCommandOutput extends DeleteCustomerAccountResponse, __MetadataBearer {}

/**
 * <p>Use <code>DeleteCustomerAccount</code> to delete a customer account. This operation is idempotent. Deleting a customer account that was already deleted succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, DeleteCustomerAccountCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, DeleteCustomerAccountCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // DeleteCustomerAccountRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomerAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomerAccountCommandInput - {@link DeleteCustomerAccountCommandInput}
 * @returns {@link DeleteCustomerAccountCommandOutput}
 * @see {@link DeleteCustomerAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomerAccountCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class DeleteCustomerAccountCommand extends command<DeleteCustomerAccountCommandInput, DeleteCustomerAccountCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomerAccount",
  DeleteCustomerAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomerAccountRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomerAccountCommandInput;
      output: DeleteCustomerAccountCommandOutput;
    };
  };
}
