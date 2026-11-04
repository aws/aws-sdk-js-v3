// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeImagesRequest, DescribeImagesResponse } from "../models/models_0";
import { DescribeImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandInput extends DescribeImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandOutput extends DescribeImagesResponse, __MetadataBearer {}

/**
 * Returns metadata that's related to the images in a repository in a public registry.
 *
 * > **Note:** Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the `docker images` command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by DescribeImages.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeImagesCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeImagesCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // DescribeImagesRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageIds: [ // ImageIdentifierList
 *     { // ImageIdentifier
 *       imageDigest: "STRING_VALUE",
 *       imageTag: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImagesResponse
 * //   imageDetails: [ // ImageDetailList
 * //     { // ImageDetail
 * //       registryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       imageDigest: "STRING_VALUE",
 * //       imageTags: [ // ImageTagList
 * //         "STRING_VALUE",
 * //       ],
 * //       imageSizeInBytes: Number("long"),
 * //       imagePushedAt: new Date("TIMESTAMP"),
 * //       imageManifestMediaType: "STRING_VALUE",
 * //       artifactMediaType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImagesCommandInput - {@link DescribeImagesCommandInput}
 * @returns {@link DescribeImagesCommandOutput}
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *
 * The image requested doesn't exist in the specified repository.
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
export class DescribeImagesCommand extends command<DescribeImagesCommandInput, DescribeImagesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeImages",
  DescribeImages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImagesRequest;
      output: DescribeImagesResponse;
    };
    sdk: {
      input: DescribeImagesCommandInput;
      output: DescribeImagesCommandOutput;
    };
  };
}
