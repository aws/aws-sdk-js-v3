// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { ListSAMLProviderTagsRequest, ListSAMLProviderTagsResponse } from "../models/models_0";
import { ListSAMLProviderTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSAMLProviderTagsCommand}.
 */
export interface ListSAMLProviderTagsCommandInput extends ListSAMLProviderTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListSAMLProviderTagsCommand}.
 */
export interface ListSAMLProviderTagsCommandOutput extends ListSAMLProviderTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified Security Assertion Markup Language
 *       (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSAMLProviderTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSAMLProviderTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListSAMLProviderTagsRequest
 *   SAMLProviderArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListSAMLProviderTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListSAMLProviderTagsResponse
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
 * @param ListSAMLProviderTagsCommandInput - {@link ListSAMLProviderTagsCommandInput}
 * @returns {@link ListSAMLProviderTagsCommandOutput}
 * @see {@link ListSAMLProviderTagsCommandInput} for command's `input` shape.
 * @see {@link ListSAMLProviderTagsCommandOutput} for command's `response` shape.
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
export class ListSAMLProviderTagsCommand extends $Command
  .classBuilder<
    ListSAMLProviderTagsCommandInput,
    ListSAMLProviderTagsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListSAMLProviderTags", {})
  .n("IAMClient", "ListSAMLProviderTagsCommand")
  .sc(ListSAMLProviderTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSAMLProviderTagsRequest;
      output: ListSAMLProviderTagsResponse;
    };
    sdk: {
      input: ListSAMLProviderTagsCommandInput;
      output: ListSAMLProviderTagsCommandOutput;
    };
  };
}
