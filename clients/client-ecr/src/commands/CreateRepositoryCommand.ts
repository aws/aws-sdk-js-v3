// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRepositoryRequest, CreateRepositoryResponse } from "../models/models_0";
import { CreateRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a repository. For more information, see [Amazon ECR repositories](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html) in the *Amazon Elastic Container Registry User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreateRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreateRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
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
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link InvalidTagParameterException} (client fault)
 *
 * An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @throws {@link KmsException} (client fault)
 *
 * The operation failed due to a KMS exception.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR service quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
 *
 * @throws {@link RepositoryAlreadyExistsException} (client fault)
 *
 * The specified repository already exists in the specified registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a repository is 50.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
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
export class CreateRepositoryCommand extends command<CreateRepositoryCommandInput, CreateRepositoryCommandOutput>(
  _ep0,
  _mw0,
  "CreateRepository",
  CreateRepository$
) {
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
