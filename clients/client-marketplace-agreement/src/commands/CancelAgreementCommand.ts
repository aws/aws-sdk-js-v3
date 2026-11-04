// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelAgreementInput, CancelAgreementOutput } from "../models/models_0";
import { CancelAgreement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelAgreementCommand}.
 */
export interface CancelAgreementCommandInput extends CancelAgreementInput {}
/**
 * @public
 *
 * The output of {@link CancelAgreementCommand}.
 */
export interface CancelAgreementCommandOutput extends CancelAgreementOutput, __MetadataBearer {}

/**
 * Allows an acceptor to cancel an active agreement. Not all agreements are eligible for cancellation. Use the error response to determine why a cancellation request was rejected.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, CancelAgreementCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, CancelAgreementCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // CancelAgreementInput
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new CancelAgreementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAgreementCommandInput - {@link CancelAgreementCommandInput}
 * @returns {@link CancelAgreementCommandOutput}
 * @see {@link CancelAgreementCommandInput} for command's `input` shape.
 * @see {@link CancelAgreementCommandOutput} for command's `response` shape.
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
export class CancelAgreementCommand extends command<CancelAgreementCommandInput, CancelAgreementCommandOutput>(
  _ep0,
  _mw0,
  "CancelAgreement",
  CancelAgreement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAgreementInput;
      output: {};
    };
    sdk: {
      input: CancelAgreementCommandInput;
      output: CancelAgreementCommandOutput;
    };
  };
}
