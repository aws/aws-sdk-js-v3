// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DisableOutboundWebIdentityFederation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableOutboundWebIdentityFederationCommand}.
 */
export interface DisableOutboundWebIdentityFederationCommandInput {}
/**
 * @public
 *
 * The output of {@link DisableOutboundWebIdentityFederationCommand}.
 */
export interface DisableOutboundWebIdentityFederationCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the outbound identity federation feature for your Amazon Web Services account. When disabled, IAM principals in the account cannot
 *             use the <code>GetWebIdentityToken</code> API to obtain JSON Web Tokens (JWTs) for authentication with external services. This operation
 *             does not affect tokens that were issued before the feature was disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DisableOutboundWebIdentityFederationCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DisableOutboundWebIdentityFederationCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new DisableOutboundWebIdentityFederationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOutboundWebIdentityFederationCommandInput - {@link DisableOutboundWebIdentityFederationCommandInput}
 * @returns {@link DisableOutboundWebIdentityFederationCommandOutput}
 * @see {@link DisableOutboundWebIdentityFederationCommandInput} for command's `input` shape.
 * @see {@link DisableOutboundWebIdentityFederationCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link FeatureDisabledException} (client fault)
 *  <p>The request failed because outbound identity federation is already disabled for your Amazon Web Services account. You cannot disable the feature multiple times</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class DisableOutboundWebIdentityFederationCommand extends $Command
  .classBuilder<
    DisableOutboundWebIdentityFederationCommandInput,
    DisableOutboundWebIdentityFederationCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DisableOutboundWebIdentityFederation", {})
  .n("IAMClient", "DisableOutboundWebIdentityFederationCommand")
  .sc(DisableOutboundWebIdentityFederation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableOutboundWebIdentityFederationCommandInput;
      output: DisableOutboundWebIdentityFederationCommandOutput;
    };
  };
}
