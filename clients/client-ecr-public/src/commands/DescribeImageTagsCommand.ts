// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageTagsRequest, DescribeImageTagsResponse } from "../models/models_0";
import { de_DescribeImageTagsCommand, se_DescribeImageTagsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageTagsCommand}.
 */
export interface DescribeImageTagsCommandInput extends DescribeImageTagsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageTagsCommand}.
 */
export interface DescribeImageTagsCommandOutput extends DescribeImageTagsResponse, __MetadataBearer {}

/**
 * <p>Returns the image tag details for a repository in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeImageTagsCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeImageTagsCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // DescribeImageTagsRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeImageTagsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageTagsResponse
 * //   imageTagDetails: [ // ImageTagDetailList
 * //     { // ImageTagDetail
 * //       imageTag: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       imageDetail: { // ReferencedImageDetail
 * //         imageDigest: "STRING_VALUE",
 * //         imageSizeInBytes: Number("long"),
 * //         imagePushedAt: new Date("TIMESTAMP"),
 * //         imageManifestMediaType: "STRING_VALUE",
 * //         artifactMediaType: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImageTagsCommandInput - {@link DescribeImageTagsCommandInput}
 * @returns {@link DescribeImageTagsCommandOutput}
 * @see {@link DescribeImageTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageTagsCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 *
 * @public
 */
export class DescribeImageTagsCommand extends $Command
  .classBuilder<
    DescribeImageTagsCommandInput,
    DescribeImageTagsCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SpencerFrontendService", "DescribeImageTags", {})
  .n("ECRPUBLICClient", "DescribeImageTagsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageTagsCommand)
  .de(de_DescribeImageTagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageTagsRequest;
      output: DescribeImageTagsResponse;
    };
    sdk: {
      input: DescribeImageTagsCommandInput;
      output: DescribeImageTagsCommandOutput;
    };
  };
}
