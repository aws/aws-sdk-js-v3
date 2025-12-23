// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { GetOutboundWebIdentityFederationInfoResponse } from "../models/models_0";
import { GetOutboundWebIdentityFederationInfo$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOutboundWebIdentityFederationInfoCommand}.
 */
export interface GetOutboundWebIdentityFederationInfoCommandInput {}
/**
 * @public
 *
 * The output of {@link GetOutboundWebIdentityFederationInfoCommand}.
 */
export interface GetOutboundWebIdentityFederationInfoCommandOutput extends GetOutboundWebIdentityFederationInfoResponse, __MetadataBearer {}

/**
 * <p>Retrieves the configuration information for the outbound identity federation feature in your Amazon Web Services account. The response includes the unique issuer URL for your
 *             Amazon Web Services account and the current enabled/disabled status of the feature. Use this operation to obtain the issuer URL that you need to configure trust relationships with external services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOutboundWebIdentityFederationInfoCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOutboundWebIdentityFederationInfoCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GetOutboundWebIdentityFederationInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetOutboundWebIdentityFederationInfoResponse
 * //   IssuerIdentifier: "STRING_VALUE",
 * //   JwtVendingEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param GetOutboundWebIdentityFederationInfoCommandInput - {@link GetOutboundWebIdentityFederationInfoCommandInput}
 * @returns {@link GetOutboundWebIdentityFederationInfoCommandOutput}
 * @see {@link GetOutboundWebIdentityFederationInfoCommandInput} for command's `input` shape.
 * @see {@link GetOutboundWebIdentityFederationInfoCommandOutput} for command's `response` shape.
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
export class GetOutboundWebIdentityFederationInfoCommand extends $Command
  .classBuilder<
    GetOutboundWebIdentityFederationInfoCommandInput,
    GetOutboundWebIdentityFederationInfoCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetOutboundWebIdentityFederationInfo", {})
  .n("IAMClient", "GetOutboundWebIdentityFederationInfoCommand")
  .sc(GetOutboundWebIdentityFederationInfo$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetOutboundWebIdentityFederationInfoResponse;
    };
    sdk: {
      input: GetOutboundWebIdentityFederationInfoCommandInput;
      output: GetOutboundWebIdentityFederationInfoCommandOutput;
    };
  };
}
