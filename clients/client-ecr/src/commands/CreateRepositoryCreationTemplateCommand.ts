// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRepositoryCreationTemplateRequest, CreateRepositoryCreationTemplateResponse } from "../models/models_0";
import {
  de_CreateRepositoryCreationTemplateCommand,
  se_CreateRepositoryCreationTemplateCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRepositoryCreationTemplateCommand}.
 */
export interface CreateRepositoryCreationTemplateCommandInput extends CreateRepositoryCreationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateRepositoryCreationTemplateCommand}.
 */
export interface CreateRepositoryCreationTemplateCommandOutput
  extends CreateRepositoryCreationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Creates a repository creation template. This template is used to define the settings
 *             for repositories created by Amazon ECR on your behalf. For example, repositories created
 *             through pull through cache actions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-creation-templates.html">Private
 *                 repository creation templates</a> in the
 *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreateRepositoryCreationTemplateCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreateRepositoryCreationTemplateCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // CreateRepositoryCreationTemplateRequest
 *   prefix: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfigurationForRepositoryCreationTemplate
 *     encryptionType: "AES256" || "KMS" || "KMS_DSSE", // required
 *     kmsKey: "STRING_VALUE",
 *   },
 *   resourceTags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   imageTagMutability: "MUTABLE" || "IMMUTABLE",
 *   repositoryPolicy: "STRING_VALUE",
 *   lifecyclePolicy: "STRING_VALUE",
 *   appliedFor: [ // RCTAppliedForList // required
 *     "REPLICATION" || "PULL_THROUGH_CACHE",
 *   ],
 *   customRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateRepositoryCreationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateRepositoryCreationTemplateResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryCreationTemplate: { // RepositoryCreationTemplate
 * //     prefix: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     encryptionConfiguration: { // EncryptionConfigurationForRepositoryCreationTemplate
 * //       encryptionType: "AES256" || "KMS" || "KMS_DSSE", // required
 * //       kmsKey: "STRING_VALUE",
 * //     },
 * //     resourceTags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     imageTagMutability: "MUTABLE" || "IMMUTABLE",
 * //     repositoryPolicy: "STRING_VALUE",
 * //     lifecyclePolicy: "STRING_VALUE",
 * //     appliedFor: [ // RCTAppliedForList
 * //       "REPLICATION" || "PULL_THROUGH_CACHE",
 * //     ],
 * //     customRoleArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRepositoryCreationTemplateCommandInput - {@link CreateRepositoryCreationTemplateCommandInput}
 * @returns {@link CreateRepositoryCreationTemplateCommandOutput}
 * @see {@link CreateRepositoryCreationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCreationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link TemplateAlreadyExistsException} (client fault)
 *  <p>The repository creation template already exists. Specify a unique prefix and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 * @example Create a new repository creation template
 * ```javascript
 * // This example creates a repository creation template.
 * const input = {
 *   "appliedFor": [
 *     "REPLICATION",
 *     "PULL_THROUGH_CACHE"
 *   ],
 *   "description": "Repos for testing images",
 *   "encryptionConfiguration": {
 *     "encryptionType": "AES256"
 *   },
 *   "imageTagMutability": "MUTABLE",
 *   "lifecyclePolicy": "{\r\n    \"rules\": [\r\n        {\r\n            \"rulePriority\": 1,\r\n            \"description\": \"Expire images older than 14 days\",\r\n            \"selection\": {\r\n                \"tagStatus\": \"untagged\",\r\n                \"countType\": \"sinceImagePushed\",\r\n                \"countUnit\": \"days\",\r\n                \"countNumber\": 14\r\n            },\r\n            \"action\": {\r\n                \"type\": \"expire\"\r\n            }\r\n        }\r\n    ]\r\n}",
 *   "prefix": "eng/test",
 *   "repositoryPolicy": "{\r\n  \"Version\": \"2012-10-17\",\r\n  \"Statement\": [\r\n    {\r\n      \"Sid\": \"LambdaECRPullPolicy\",\r\n      \"Effect\": \"Allow\",\r\n      \"Principal\": {\r\n        \"Service\": \"lambda.amazonaws.com\"\r\n      },\r\n      \"Action\": \"ecr:BatchGetImage\"\r\n    }\r\n  ]\r\n}",
 *   "resourceTags": [
 *     {
 *       "Key": "environment",
 *       "Value": "test"
 *     }
 *   ]
 * };
 * const command = new CreateRepositoryCreationTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "registryId": "012345678901",
 *   "repositoryCreationTemplate": {
 *     "appliedFor": [
 *       "REPLICATION",
 *       "PULL_THROUGH_CACHE"
 *     ],
 *     "createdAt": "2023-12-16T17:29:02-07:00",
 *     "description": "Repos for testing images",
 *     "encryptionConfiguration": {
 *       "encryptionType": "AES256"
 *     },
 *     "imageTagMutability": "MUTABLE",
 *     "lifecyclePolicy": "{\r\n    \"rules\": [\r\n        {\r\n            \"rulePriority\": 1,\r\n            \"description\": \"Expire images older than 14 days\",\r\n            \"selection\": {\r\n                \"tagStatus\": \"untagged\",\r\n                \"countType\": \"sinceImagePushed\",\r\n                \"countUnit\": \"days\",\r\n                \"countNumber\": 14\r\n            },\r\n            \"action\": {\r\n                \"type\": \"expire\"\r\n            }\r\n        }\r\n    ]\r\n}",
 *     "prefix": "eng/test",
 *     "repositoryPolicy": "{\n  \"Version\" : \"2012-10-17\",\n  \"Statement\" : [ {\n    \"Sid\" : \"LambdaECRPullPolicy\",\n    \"Effect\" : \"Allow\",\n    \"Principal\" : {\n      \"Service\" : \"lambda.amazonaws.com\"\n    },\n    \"Action\" : \"ecr:BatchGetImage\"\n  } ]\n}",
 *     "resourceTags": [
 *       {
 *         "Key": "environment",
 *         "Value": "test"
 *       }
 *     ],
 *     "updatedAt": "2023-12-16T17:29:02-07:00"
 *   }
 * }
 * *\/
 * // example id: create-a-new-repository-creation-template-1713296923053
 * ```
 *
 */
export class CreateRepositoryCreationTemplateCommand extends $Command
  .classBuilder<
    CreateRepositoryCreationTemplateCommandInput,
    CreateRepositoryCreationTemplateCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "CreateRepositoryCreationTemplate", {})
  .n("ECRClient", "CreateRepositoryCreationTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateRepositoryCreationTemplateCommand)
  .de(de_CreateRepositoryCreationTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRepositoryCreationTemplateRequest;
      output: CreateRepositoryCreationTemplateResponse;
    };
    sdk: {
      input: CreateRepositoryCreationTemplateCommandInput;
      output: CreateRepositoryCreationTemplateCommandOutput;
    };
  };
}
