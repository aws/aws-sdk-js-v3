// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListOpenIDConnectProvidersRequest, ListOpenIDConnectProvidersResponse } from "../models/models_0";
import { de_ListOpenIDConnectProvidersCommand, se_ListOpenIDConnectProvidersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOpenIDConnectProvidersCommand}.
 */
export interface ListOpenIDConnectProvidersCommandInput extends ListOpenIDConnectProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListOpenIDConnectProvidersCommand}.
 */
export interface ListOpenIDConnectProvidersCommandOutput extends ListOpenIDConnectProvidersResponse, __MetadataBearer {}

/**
 * <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects
 *             defined in the Amazon Web Services account.</p>
 *          <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOpenIDConnectProvidersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOpenIDConnectProvidersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new ListOpenIDConnectProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListOpenIDConnectProvidersResponse
 * //   OpenIDConnectProviderList: [ // OpenIDConnectProviderListType
 * //     { // OpenIDConnectProviderListEntry
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOpenIDConnectProvidersCommandInput - {@link ListOpenIDConnectProvidersCommandInput}
 * @returns {@link ListOpenIDConnectProvidersCommandOutput}
 * @see {@link ListOpenIDConnectProvidersCommandInput} for command's `input` shape.
 * @see {@link ListOpenIDConnectProvidersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export class ListOpenIDConnectProvidersCommand extends $Command
  .classBuilder<
    ListOpenIDConnectProvidersCommandInput,
    ListOpenIDConnectProvidersCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListOpenIDConnectProviders", {})
  .n("IAMClient", "ListOpenIDConnectProvidersCommand")
  .f(void 0, void 0)
  .ser(se_ListOpenIDConnectProvidersCommand)
  .de(de_ListOpenIDConnectProvidersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListOpenIDConnectProvidersResponse;
    };
    sdk: {
      input: ListOpenIDConnectProvidersCommandInput;
      output: ListOpenIDConnectProvidersCommandOutput;
    };
  };
}
