// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrustedTokenIssuersRequest, ListTrustedTokenIssuersResponse } from "../models/models_0";
import { de_ListTrustedTokenIssuersCommand, se_ListTrustedTokenIssuersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrustedTokenIssuersCommand}.
 */
export interface ListTrustedTokenIssuersCommandInput extends ListTrustedTokenIssuersRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustedTokenIssuersCommand}.
 */
export interface ListTrustedTokenIssuersCommandOutput extends ListTrustedTokenIssuersResponse, __MetadataBearer {}

/**
 * <p>Lists all the trusted token issuers configured in an instance of IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListTrustedTokenIssuersCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListTrustedTokenIssuersCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListTrustedTokenIssuersRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrustedTokenIssuersCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustedTokenIssuersResponse
 * //   TrustedTokenIssuers: [ // TrustedTokenIssuerList
 * //     { // TrustedTokenIssuerMetadata
 * //       TrustedTokenIssuerArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       TrustedTokenIssuerType: "OIDC_JWT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustedTokenIssuersCommandInput - {@link ListTrustedTokenIssuersCommandInput}
 * @returns {@link ListTrustedTokenIssuersCommandOutput}
 * @see {@link ListTrustedTokenIssuersCommandInput} for command's `input` shape.
 * @see {@link ListTrustedTokenIssuersCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
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
export class ListTrustedTokenIssuersCommand extends $Command
  .classBuilder<
    ListTrustedTokenIssuersCommandInput,
    ListTrustedTokenIssuersCommandOutput,
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
  .s("SWBExternalService", "ListTrustedTokenIssuers", {})
  .n("SSOAdminClient", "ListTrustedTokenIssuersCommand")
  .f(void 0, void 0)
  .ser(se_ListTrustedTokenIssuersCommand)
  .de(de_ListTrustedTokenIssuersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrustedTokenIssuersRequest;
      output: ListTrustedTokenIssuersResponse;
    };
    sdk: {
      input: ListTrustedTokenIssuersCommandInput;
      output: ListTrustedTokenIssuersCommandOutput;
    };
  };
}
