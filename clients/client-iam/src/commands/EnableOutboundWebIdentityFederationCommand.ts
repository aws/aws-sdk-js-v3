// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { EnableOutboundWebIdentityFederationResponse } from "../models/models_0";
import { EnableOutboundWebIdentityFederation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableOutboundWebIdentityFederationCommand}.
 */
export interface EnableOutboundWebIdentityFederationCommandInput {}
/**
 * @public
 *
 * The output of {@link EnableOutboundWebIdentityFederationCommand}.
 */
export interface EnableOutboundWebIdentityFederationCommandOutput extends EnableOutboundWebIdentityFederationResponse, __MetadataBearer {}

/**
 * <p>Enables the outbound identity federation feature for your Amazon Web Services account. When enabled, IAM principals in your account
 *             can use the <code>GetWebIdentityToken</code> API to obtain JSON Web Tokens (JWTs) for secure authentication with external services.
 *             This operation also generates a unique issuer URL for your Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, EnableOutboundWebIdentityFederationCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, EnableOutboundWebIdentityFederationCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new EnableOutboundWebIdentityFederationCommand(input);
 * const response = await client.send(command);
 * // { // EnableOutboundWebIdentityFederationResponse
 * //   IssuerIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableOutboundWebIdentityFederationCommandInput - {@link EnableOutboundWebIdentityFederationCommandInput}
 * @returns {@link EnableOutboundWebIdentityFederationCommandOutput}
 * @see {@link EnableOutboundWebIdentityFederationCommandInput} for command's `input` shape.
 * @see {@link EnableOutboundWebIdentityFederationCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link FeatureEnabledException} (client fault)
 *  <p>The request failed because outbound identity federation is already enabled for your Amazon Web Services account. You
 *       cannot enable the feature multiple times. To fetch the current configuration (including the unique issuer URL), use the <code>GetOutboundWebIdentityFederationInfo</code> operation.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class EnableOutboundWebIdentityFederationCommand extends $Command
  .classBuilder<
    EnableOutboundWebIdentityFederationCommandInput,
    EnableOutboundWebIdentityFederationCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "EnableOutboundWebIdentityFederation", {})
  .n("IAMClient", "EnableOutboundWebIdentityFederationCommand")
  .sc(EnableOutboundWebIdentityFederation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: EnableOutboundWebIdentityFederationResponse;
    };
    sdk: {
      input: EnableOutboundWebIdentityFederationCommandInput;
      output: EnableOutboundWebIdentityFederationCommandOutput;
    };
  };
}
