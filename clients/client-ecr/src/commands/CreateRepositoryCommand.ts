// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRepositoryRequest, CreateRepositoryResponse } from "../models/models_0";
import { de_CreateRepositoryCommand, se_CreateRepositoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandInput extends CreateRepositoryRequest {}
/**
 * @public
 *
 * The output of {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandOutput extends CreateRepositoryResponse, __MetadataBearer {}

/**
 * <p>Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreateRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreateRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // CreateRepositoryRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   imageTagMutability: "MUTABLE" || "IMMUTABLE" || "IMMUTABLE_WITH_EXCLUSION" || "MUTABLE_WITH_EXCLUSION",
 *   imageTagMutabilityExclusionFilters: [ // ImageTagMutabilityExclusionFilters
 *     { // ImageTagMutabilityExclusionFilter
 *       filterType: "WILDCARD", // required
 *       filter: "STRING_VALUE", // required
 *     },
 *   ],
 *   imageScanningConfiguration: { // ImageScanningConfiguration
 *     scanOnPush: true || false,
 *   },
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     encryptionType: "AES256" || "KMS" || "KMS_DSSE", // required
 *     kmsKey: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateRepositoryResponse
 * //   repository: { // Repository
 * //     repositoryArn: "STRING_VALUE",
 * //     registryId: "STRING_VALUE",
 * //     repositoryName: "STRING_VALUE",
 * //     repositoryUri: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     imageTagMutability: "MUTABLE" || "IMMUTABLE" || "IMMUTABLE_WITH_EXCLUSION" || "MUTABLE_WITH_EXCLUSION",
 * //     imageTagMutabilityExclusionFilters: [ // ImageTagMutabilityExclusionFilters
 * //       { // ImageTagMutabilityExclusionFilter
 * //         filterType: "WILDCARD", // required
 * //         filter: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     imageScanningConfiguration: { // ImageScanningConfiguration
 * //       scanOnPush: true || false,
 * //     },
 * //     encryptionConfiguration: { // EncryptionConfiguration
 * //       encryptionType: "AES256" || "KMS" || "KMS_DSSE", // required
 * //       kmsKey: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRepositoryCommandInput - {@link CreateRepositoryCommandInput}
 * @returns {@link CreateRepositoryCommandOutput}
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidTagParameterException} (client fault)
 *  <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>The operation failed due to a KMS exception.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link RepositoryAlreadyExistsException} (client fault)
 *  <p>The specified repository already exists in the specified registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @example To create a new repository
 * ```javascript
 * // This example creates a repository called nginx-web-app inside the project-a namespace in the default registry for an account.
 * const input = {
 *   repositoryName: "project-a/nginx-web-app"
 * };
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   repository: {
 *     registryId: "012345678901",
 *     repositoryArn: "arn:aws:ecr:us-west-2:012345678901:repository/project-a/nginx-web-app",
 *     repositoryName: "project-a/nginx-web-app"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRepositoryCommand extends $Command
  .classBuilder<
    CreateRepositoryCommandInput,
    CreateRepositoryCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "CreateRepository", {})
  .n("ECRClient", "CreateRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_CreateRepositoryCommand)
  .de(de_CreateRepositoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRepositoryRequest;
      output: CreateRepositoryResponse;
    };
    sdk: {
      input: CreateRepositoryCommandInput;
      output: CreateRepositoryCommandOutput;
    };
  };
}
