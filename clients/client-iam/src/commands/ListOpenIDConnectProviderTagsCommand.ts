// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListOpenIDConnectProviderTagsRequest, ListOpenIDConnectProviderTagsResponse } from "../models/models_0";
import {
  de_ListOpenIDConnectProviderTagsCommand,
  se_ListOpenIDConnectProviderTagsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOpenIDConnectProviderTagsCommand}.
 */
export interface ListOpenIDConnectProviderTagsCommandInput extends ListOpenIDConnectProviderTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListOpenIDConnectProviderTagsCommand}.
 */
export interface ListOpenIDConnectProviderTagsCommandOutput
  extends ListOpenIDConnectProviderTagsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible
 *       identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOpenIDConnectProviderTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOpenIDConnectProviderTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListOpenIDConnectProviderTagsRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListOpenIDConnectProviderTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListOpenIDConnectProviderTagsResponse
 * //   Tags: [ // tagListType // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOpenIDConnectProviderTagsCommandInput - {@link ListOpenIDConnectProviderTagsCommandInput}
 * @returns {@link ListOpenIDConnectProviderTagsCommandOutput}
 * @see {@link ListOpenIDConnectProviderTagsCommandInput} for command's `input` shape.
 * @see {@link ListOpenIDConnectProviderTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
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
export class ListOpenIDConnectProviderTagsCommand extends $Command
  .classBuilder<
    ListOpenIDConnectProviderTagsCommandInput,
    ListOpenIDConnectProviderTagsCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListOpenIDConnectProviderTags", {})
  .n("IAMClient", "ListOpenIDConnectProviderTagsCommand")
  .f(void 0, void 0)
  .ser(se_ListOpenIDConnectProviderTagsCommand)
  .de(de_ListOpenIDConnectProviderTagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOpenIDConnectProviderTagsRequest;
      output: ListOpenIDConnectProviderTagsResponse;
    };
    sdk: {
      input: ListOpenIDConnectProviderTagsCommandInput;
      output: ListOpenIDConnectProviderTagsCommandOutput;
    };
  };
}
