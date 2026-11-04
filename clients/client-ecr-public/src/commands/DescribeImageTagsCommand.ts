// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeImageTagsRequest, DescribeImageTagsResponse } from "../models/models_0";
import { DescribeImageTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the image tag details for a repository in a public registry.
 *
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
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository can't be found. Check the spelling of the specified repository and ensure that you're performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *
 * The action isn't supported in this Region.
 *
 * @throws {@link ECRPUBLICServiceException}
 *
 * Base exception class for all service exceptions from ECRPUBLIC service.
 *
 * @public
 */
export class DescribeImageTagsCommand extends command<DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeImageTags",
  DescribeImageTags$
) {
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
