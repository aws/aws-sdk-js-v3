// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeApplicationProviderRequest, DescribeApplicationProviderResponse } from "../models/models_0";
import { de_DescribeApplicationProviderCommand, se_DescribeApplicationProviderCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationProviderCommand}.
 */
export interface DescribeApplicationProviderCommandInput extends DescribeApplicationProviderRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationProviderCommand}.
 */
export interface DescribeApplicationProviderCommandOutput
  extends DescribeApplicationProviderResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves details about a provider that can be used to connect an Amazon Web Services managed
 *             application or customer managed application to IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeApplicationProviderCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeApplicationProviderCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeApplicationProviderRequest
 *   ApplicationProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationProviderCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationProviderResponse
 * //   ApplicationProviderArn: "STRING_VALUE", // required
 * //   FederationProtocol: "SAML" || "OAUTH",
 * //   DisplayData: { // DisplayData
 * //     DisplayName: "STRING_VALUE",
 * //     IconUrl: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * //   ResourceServerConfig: { // ResourceServerConfig
 * //     Scopes: { // ResourceServerScopes
 * //       "<keys>": { // ResourceServerScopeDetails
 * //         LongDescription: "STRING_VALUE",
 * //         DetailedTitle: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeApplicationProviderCommandInput - {@link DescribeApplicationProviderCommandInput}
 * @returns {@link DescribeApplicationProviderCommandOutput}
 * @see {@link DescribeApplicationProviderCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationProviderCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationProviderCommand extends $Command
  .classBuilder<
    DescribeApplicationProviderCommandInput,
    DescribeApplicationProviderCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "DescribeApplicationProvider", {})
  .n("SSOAdminClient", "DescribeApplicationProviderCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicationProviderCommand)
  .de(de_DescribeApplicationProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationProviderRequest;
      output: DescribeApplicationProviderResponse;
    };
    sdk: {
      input: DescribeApplicationProviderCommandInput;
      output: DescribeApplicationProviderCommandOutput;
    };
  };
}
