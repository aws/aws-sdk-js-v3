// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelAgreementRequestInput, CancelAgreementRequestOutput } from "../models/models_0";
import { CancelAgreementRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelAgreementRequestCommand}.
 */
export interface CancelAgreementRequestCommandInput extends CancelAgreementRequestInput {}
/**
 * @public
 *
 * The output of {@link CancelAgreementRequestCommand}.
 */
export interface CancelAgreementRequestCommandOutput extends CancelAgreementRequestOutput, __MetadataBearer {}

/**
 * <p>Allows buyers (acceptors) to cancel an agreement request that is in <code>PENDING_APPROVAL</code> status, or in <code>APPROVED</code> status when no agreement has been created from it. Once cancelled, the agreement request transitions to <code>CANCELLED</code> status and its open agreement approvals are cancelled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, CancelAgreementRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, CancelAgreementRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // CancelAgreementRequestInput
 *   agreementRequestId: "STRING_VALUE", // required
 * };
 * const command = new CancelAgreementRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAgreementRequestCommandInput - {@link CancelAgreementRequestCommandInput}
 * @returns {@link CancelAgreementRequestCommandOutput}
 * @see {@link CancelAgreementRequestCommandInput} for command's `input` shape.
 * @see {@link CancelAgreementRequestCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Request was denied due to a resource conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @example Cancel an agreement request
 * ```javascript
 * //
 * const input = {
 *   agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78"
 * };
 * const command = new CancelAgreementRequestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelAgreementRequestCommand extends command<CancelAgreementRequestCommandInput, CancelAgreementRequestCommandOutput>(
  _ep0,
  _mw0,
  "CancelAgreementRequest",
  CancelAgreementRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAgreementRequestInput;
      output: {};
    };
    sdk: {
      input: CancelAgreementRequestCommandInput;
      output: CancelAgreementRequestCommandOutput;
    };
  };
}
