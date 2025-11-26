// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteRepositoryCreationTemplateRequest,
  DeleteRepositoryCreationTemplateResponse,
} from "../models/models_0";
import { DeleteRepositoryCreationTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRepositoryCreationTemplateCommand}.
 */
export interface DeleteRepositoryCreationTemplateCommandInput extends DeleteRepositoryCreationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRepositoryCreationTemplateCommand}.
 */
export interface DeleteRepositoryCreationTemplateCommandOutput
  extends DeleteRepositoryCreationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a repository creation template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryCreationTemplateCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryCreationTemplateCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // DeleteRepositoryCreationTemplateRequest
 *   prefix: "STRING_VALUE", // required
 * };
 * const command = new DeleteRepositoryCreationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRepositoryCreationTemplateResponse
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
 * @param DeleteRepositoryCreationTemplateCommandInput - {@link DeleteRepositoryCreationTemplateCommandInput}
 * @returns {@link DeleteRepositoryCreationTemplateCommandOutput}
 * @see {@link DeleteRepositoryCreationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCreationTemplateCommandOutput} for command's `response` shape.
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
export class DeleteRepositoryCreationTemplateCommand extends $Command
  .classBuilder<
    DeleteRepositoryCreationTemplateCommandInput,
    DeleteRepositoryCreationTemplateCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DeleteRepositoryCreationTemplate", {})
  .n("ECRClient", "DeleteRepositoryCreationTemplateCommand")
  .sc(DeleteRepositoryCreationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRepositoryCreationTemplateRequest;
      output: DeleteRepositoryCreationTemplateResponse;
    };
    sdk: {
      input: DeleteRepositoryCreationTemplateCommandInput;
      output: DeleteRepositoryCreationTemplateCommandOutput;
    };
  };
}
