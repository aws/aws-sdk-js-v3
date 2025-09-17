// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListInstanceProfileTagsRequest, ListInstanceProfileTagsResponse } from "../models/models_0";
import { de_ListInstanceProfileTagsCommand, se_ListInstanceProfileTagsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceProfileTagsCommand}.
 */
export interface ListInstanceProfileTagsCommandInput extends ListInstanceProfileTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceProfileTagsCommand}.
 */
export interface ListInstanceProfileTagsCommandOutput extends ListInstanceProfileTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key.
 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfileTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfileTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListInstanceProfileTagsRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListInstanceProfileTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceProfileTagsResponse
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
 * @param ListInstanceProfileTagsCommandInput - {@link ListInstanceProfileTagsCommandInput}
 * @returns {@link ListInstanceProfileTagsCommandOutput}
 * @see {@link ListInstanceProfileTagsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfileTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
export class ListInstanceProfileTagsCommand extends $Command
  .classBuilder<
    ListInstanceProfileTagsCommandInput,
    ListInstanceProfileTagsCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListInstanceProfileTags", {})
  .n("IAMClient", "ListInstanceProfileTagsCommand")
  .f(void 0, void 0)
  .ser(se_ListInstanceProfileTagsCommand)
  .de(de_ListInstanceProfileTagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstanceProfileTagsRequest;
      output: ListInstanceProfileTagsResponse;
    };
    sdk: {
      input: ListInstanceProfileTagsCommandInput;
      output: ListInstanceProfileTagsCommandOutput;
    };
  };
}
