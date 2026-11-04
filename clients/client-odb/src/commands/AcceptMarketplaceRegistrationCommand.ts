// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptMarketplaceRegistrationInput, AcceptMarketplaceRegistrationOutput } from "../models/models_0";
import { AcceptMarketplaceRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptMarketplaceRegistrationCommand}.
 */
export interface AcceptMarketplaceRegistrationCommandInput extends AcceptMarketplaceRegistrationInput {}
/**
 * @public
 *
 * The output of {@link AcceptMarketplaceRegistrationCommand}.
 */
export interface AcceptMarketplaceRegistrationCommandOutput extends AcceptMarketplaceRegistrationOutput, __MetadataBearer {}

/**
 * Registers the Amazon Web Services Marketplace token for your Amazon Web Services account to activate your Oracle Database@Amazon Web Services subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, AcceptMarketplaceRegistrationCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, AcceptMarketplaceRegistrationCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // AcceptMarketplaceRegistrationInput
 *   marketplaceRegistrationToken: "STRING_VALUE", // required
 * };
 * const command = new AcceptMarketplaceRegistrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptMarketplaceRegistrationCommandInput - {@link AcceptMarketplaceRegistrationCommandInput}
 * @returns {@link AcceptMarketplaceRegistrationCommandOutput}
 * @see {@link AcceptMarketplaceRegistrationCommandInput} for command's `input` shape.
 * @see {@link AcceptMarketplaceRegistrationCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class AcceptMarketplaceRegistrationCommand extends command<AcceptMarketplaceRegistrationCommandInput, AcceptMarketplaceRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "AcceptMarketplaceRegistration",
  AcceptMarketplaceRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptMarketplaceRegistrationInput;
      output: {};
    };
    sdk: {
      input: AcceptMarketplaceRegistrationCommandInput;
      output: AcceptMarketplaceRegistrationCommandOutput;
    };
  };
}
