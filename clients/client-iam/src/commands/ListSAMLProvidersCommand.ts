// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSAMLProvidersRequest, ListSAMLProvidersResponse } from "../models/models_0";
import { de_ListSAMLProvidersCommand, se_ListSAMLProvidersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSAMLProvidersCommand}.
 */
export interface ListSAMLProvidersCommandInput extends ListSAMLProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListSAMLProvidersCommand}.
 */
export interface ListSAMLProvidersCommandOutput extends ListSAMLProvidersResponse, __MetadataBearer {}

/**
 * <p>Lists the SAML provider resource objects defined in IAM in the account.
 *             IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p>
 *          <important>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSAMLProvidersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSAMLProvidersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new ListSAMLProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListSAMLProvidersResponse
 * //   SAMLProviderList: [ // SAMLProviderListType
 * //     { // SAMLProviderListEntry
 * //       Arn: "STRING_VALUE",
 * //       ValidUntil: new Date("TIMESTAMP"),
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSAMLProvidersCommandInput - {@link ListSAMLProvidersCommandInput}
 * @returns {@link ListSAMLProvidersCommandOutput}
 * @see {@link ListSAMLProvidersCommandInput} for command's `input` shape.
 * @see {@link ListSAMLProvidersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class ListSAMLProvidersCommand extends $Command
  .classBuilder<
    ListSAMLProvidersCommandInput,
    ListSAMLProvidersCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListSAMLProviders", {})
  .n("IAMClient", "ListSAMLProvidersCommand")
  .f(void 0, void 0)
  .ser(se_ListSAMLProvidersCommand)
  .de(de_ListSAMLProvidersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListSAMLProvidersResponse;
    };
    sdk: {
      input: ListSAMLProvidersCommandInput;
      output: ListSAMLProvidersCommandOutput;
    };
  };
}
