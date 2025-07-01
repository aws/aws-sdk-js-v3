// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptMarketplaceRegistrationInput, AcceptMarketplaceRegistrationOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import {
  de_AcceptMarketplaceRegistrationCommand,
  se_AcceptMarketplaceRegistrationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface AcceptMarketplaceRegistrationCommandOutput
  extends AcceptMarketplaceRegistrationOutput,
    __MetadataBearer {}

/**
 * <p>Registers the Amazon Web Services Marketplace token for your Amazon Web Services account to activate your Oracle Database@Amazon Web Services subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, AcceptMarketplaceRegistrationCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, AcceptMarketplaceRegistrationCommand } = require("@aws-sdk/client-odb"); // CommonJS import
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
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class AcceptMarketplaceRegistrationCommand extends $Command
  .classBuilder<
    AcceptMarketplaceRegistrationCommandInput,
    AcceptMarketplaceRegistrationCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Odb", "AcceptMarketplaceRegistration", {})
  .n("OdbClient", "AcceptMarketplaceRegistrationCommand")
  .f(void 0, void 0)
  .ser(se_AcceptMarketplaceRegistrationCommand)
  .de(de_AcceptMarketplaceRegistrationCommand)
  .build() {
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
