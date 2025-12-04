// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateRepositoryCreationTemplateRequest,
  UpdateRepositoryCreationTemplateResponse,
} from "../models/models_0";
import { UpdateRepositoryCreationTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRepositoryCreationTemplateCommand}.
 */
export interface UpdateRepositoryCreationTemplateCommandInput extends UpdateRepositoryCreationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRepositoryCreationTemplateCommand}.
 */
export interface UpdateRepositoryCreationTemplateCommandOutput
  extends UpdateRepositoryCreationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing repository creation template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, UpdateRepositoryCreationTemplateCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, UpdateRepositoryCreationTemplateCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // UpdateRepositoryCreationTemplateRequest
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
 *   imageTagMutability: "MUTABLE" || "IMMUTABLE" || "IMMUTABLE_WITH_EXCLUSION" || "MUTABLE_WITH_EXCLUSION",
 *   imageTagMutabilityExclusionFilters: [ // ImageTagMutabilityExclusionFilters
 *     { // ImageTagMutabilityExclusionFilter
 *       filterType: "WILDCARD", // required
 *       filter: "STRING_VALUE", // required
 *     },
 *   ],
 *   repositoryPolicy: "STRING_VALUE",
 *   lifecyclePolicy: "STRING_VALUE",
 *   appliedFor: [ // RCTAppliedForList
 *     "REPLICATION" || "PULL_THROUGH_CACHE",
 *   ],
 *   customRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateRepositoryCreationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRepositoryCreationTemplateResponse
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
 * //     imageTagMutability: "MUTABLE" || "IMMUTABLE" || "IMMUTABLE_WITH_EXCLUSION" || "MUTABLE_WITH_EXCLUSION",
 * //     imageTagMutabilityExclusionFilters: [ // ImageTagMutabilityExclusionFilters
 * //       { // ImageTagMutabilityExclusionFilter
 * //         filterType: "WILDCARD", // required
 * //         filter: "STRING_VALUE", // required
 * //       },
 * //     ],
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
 * @param UpdateRepositoryCreationTemplateCommandInput - {@link UpdateRepositoryCreationTemplateCommandInput}
 * @returns {@link UpdateRepositoryCreationTemplateCommandOutput}
 * @see {@link UpdateRepositoryCreationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryCreationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link TemplateNotFoundException} (client fault)
 *  <p>The specified repository creation template can't be found. Verify the registry ID and
 *             prefix and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class UpdateRepositoryCreationTemplateCommand extends $Command
  .classBuilder<
    UpdateRepositoryCreationTemplateCommandInput,
    UpdateRepositoryCreationTemplateCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "UpdateRepositoryCreationTemplate", {})
  .n("ECRClient", "UpdateRepositoryCreationTemplateCommand")
  .sc(UpdateRepositoryCreationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRepositoryCreationTemplateRequest;
      output: UpdateRepositoryCreationTemplateResponse;
    };
    sdk: {
      input: UpdateRepositoryCreationTemplateCommandInput;
      output: UpdateRepositoryCreationTemplateCommandOutput;
    };
  };
}
