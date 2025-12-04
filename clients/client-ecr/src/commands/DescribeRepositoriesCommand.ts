// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRepositoriesRequest, DescribeRepositoriesResponse } from "../models/models_0";
import { DescribeRepositories } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandInput extends DescribeRepositoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandOutput extends DescribeRepositoriesResponse, __MetadataBearer {}

/**
 * <p>Describes image repositories in a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeRepositoriesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeRepositoriesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // DescribeRepositoriesRequest
 *   registryId: "STRING_VALUE",
 *   repositoryNames: [ // RepositoryNameList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRepositoriesResponse
 * //   repositories: [ // RepositoryList
 * //     { // Repository
 * //       repositoryArn: "STRING_VALUE",
 * //       registryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       repositoryUri: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       imageTagMutability: "MUTABLE" || "IMMUTABLE" || "IMMUTABLE_WITH_EXCLUSION" || "MUTABLE_WITH_EXCLUSION",
 * //       imageTagMutabilityExclusionFilters: [ // ImageTagMutabilityExclusionFilters
 * //         { // ImageTagMutabilityExclusionFilter
 * //           filterType: "WILDCARD", // required
 * //           filter: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       imageScanningConfiguration: { // ImageScanningConfiguration
 * //         scanOnPush: true || false,
 * //       },
 * //       encryptionConfiguration: { // EncryptionConfiguration
 * //         encryptionType: "AES256" || "KMS" || "KMS_DSSE", // required
 * //         kmsKey: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRepositoriesCommandInput - {@link DescribeRepositoriesCommandInput}
 * @returns {@link DescribeRepositoriesCommandOutput}
 * @see {@link DescribeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @example To describe all repositories in the current account
 * ```javascript
 * // The following example obtains a list and description of all repositories in the default registry to which the current user has access.
 * const input = { /* empty *\/ };
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   repositories: [
 *     {
 *       registryId: "012345678910",
 *       repositoryArn: "arn:aws:ecr:us-west-2:012345678910:repository/ubuntu",
 *       repositoryName: "ubuntu"
 *     },
 *     {
 *       registryId: "012345678910",
 *       repositoryArn: "arn:aws:ecr:us-west-2:012345678910:repository/test",
 *       repositoryName: "test"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeRepositoriesCommand extends $Command
  .classBuilder<
    DescribeRepositoriesCommandInput,
    DescribeRepositoriesCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DescribeRepositories", {})
  .n("ECRClient", "DescribeRepositoriesCommand")
  .sc(DescribeRepositories)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRepositoriesRequest;
      output: DescribeRepositoriesResponse;
    };
    sdk: {
      input: DescribeRepositoriesCommandInput;
      output: DescribeRepositoriesCommandOutput;
    };
  };
}
