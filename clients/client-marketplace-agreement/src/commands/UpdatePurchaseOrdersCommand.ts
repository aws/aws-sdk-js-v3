// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePurchaseOrdersInput, UpdatePurchaseOrdersOutput } from "../models/models_0";
import { UpdatePurchaseOrders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePurchaseOrdersCommand}.
 */
export interface UpdatePurchaseOrdersCommandInput extends UpdatePurchaseOrdersInput {}
/**
 * @public
 *
 * The output of {@link UpdatePurchaseOrdersCommand}.
 */
export interface UpdatePurchaseOrdersCommandOutput extends UpdatePurchaseOrdersOutput, __MetadataBearer {}

/**
 * Allows acceptors to associate purchase orders with agreement charges after an agreement is created.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, UpdatePurchaseOrdersCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, UpdatePurchaseOrdersCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // UpdatePurchaseOrdersInput
 *   purchaseOrders: [ // PurchaseOrders // required
 *     { // PurchaseOrder
 *       chargeId: "STRING_VALUE", // required
 *       chargeRevision: Number("long"),
 *       agreementId: "STRING_VALUE",
 *       purchaseOrderReference: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdatePurchaseOrdersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePurchaseOrdersCommandInput - {@link UpdatePurchaseOrdersCommandInput}
 * @returns {@link UpdatePurchaseOrdersCommandOutput}
 * @see {@link UpdatePurchaseOrdersCommandInput} for command's `input` shape.
 * @see {@link UpdatePurchaseOrdersCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Request was denied due to a resource conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link MarketplaceAgreementServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceAgreement service.
 *
 * @public
 */
export class UpdatePurchaseOrdersCommand extends command<UpdatePurchaseOrdersCommandInput, UpdatePurchaseOrdersCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePurchaseOrders",
  UpdatePurchaseOrders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePurchaseOrdersInput;
      output: {};
    };
    sdk: {
      input: UpdatePurchaseOrdersCommandInput;
      output: UpdatePurchaseOrdersCommandOutput;
    };
  };
}
