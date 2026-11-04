// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptAgreementRequestInput, AcceptAgreementRequestOutput } from "../models/models_0";
import { AcceptAgreementRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptAgreementRequestCommand}.
 */
export interface AcceptAgreementRequestCommandInput extends AcceptAgreementRequestInput {}
/**
 * @public
 *
 * The output of {@link AcceptAgreementRequestCommand}.
 */
export interface AcceptAgreementRequestCommandOutput extends AcceptAgreementRequestOutput, __MetadataBearer {}

/**
 * Accepts an agreement request to finalize the agreement. The acceptor can optionally provide purchase orders to associate with the agreement charges.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, AcceptAgreementRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, AcceptAgreementRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // AcceptAgreementRequestInput
 *   agreementRequestId: "STRING_VALUE", // required
 *   purchaseOrders: [ // PurchaseOrders
 *     { // PurchaseOrder
 *       chargeId: "STRING_VALUE", // required
 *       chargeRevision: Number("long"),
 *       agreementId: "STRING_VALUE",
 *       purchaseOrderReference: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AcceptAgreementRequestCommand(input);
 * const response = await client.send(command);
 * // { // AcceptAgreementRequestOutput
 * //   agreementId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptAgreementRequestCommandInput - {@link AcceptAgreementRequestCommandInput}
 * @returns {@link AcceptAgreementRequestCommandOutput}
 * @see {@link AcceptAgreementRequestCommandInput} for command's `input` shape.
 * @see {@link AcceptAgreementRequestCommandOutput} for command's `response` shape.
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
export class AcceptAgreementRequestCommand extends command<AcceptAgreementRequestCommandInput, AcceptAgreementRequestCommandOutput>(
  _ep0,
  _mw0,
  "AcceptAgreementRequest",
  AcceptAgreementRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptAgreementRequestInput;
      output: AcceptAgreementRequestOutput;
    };
    sdk: {
      input: AcceptAgreementRequestCommandInput;
      output: AcceptAgreementRequestCommandOutput;
    };
  };
}
