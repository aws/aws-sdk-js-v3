// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOpenIDConnectProviderTagsRequest, ListOpenIDConnectProviderTagsResponse } from "../models/models_0";
import { ListOpenIDConnectProviderTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListOpenIDConnectProviderTagsCommandOutput extends ListOpenIDConnectProviderTagsResponse, __MetadataBearer {}

/**
 * Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see [About web identity federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html).
 *
 * For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
 *
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
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class ListOpenIDConnectProviderTagsCommand extends command<ListOpenIDConnectProviderTagsCommandInput, ListOpenIDConnectProviderTagsCommandOutput>(
  _ep0,
  _mw0,
  "ListOpenIDConnectProviderTags",
  ListOpenIDConnectProviderTags$
) {
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
