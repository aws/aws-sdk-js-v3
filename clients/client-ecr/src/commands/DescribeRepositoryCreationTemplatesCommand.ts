// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeRepositoryCreationTemplatesRequest,
  DescribeRepositoryCreationTemplatesResponse,
} from "../models/models_0";
import {
  de_DescribeRepositoryCreationTemplatesCommand,
  se_DescribeRepositoryCreationTemplatesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRepositoryCreationTemplatesCommand}.
 */
export interface DescribeRepositoryCreationTemplatesCommandInput extends DescribeRepositoryCreationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRepositoryCreationTemplatesCommand}.
 */
export interface DescribeRepositoryCreationTemplatesCommandOutput
  extends DescribeRepositoryCreationTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Returns details about the repository creation templates in a registry. The
 *                 <code>prefixes</code> request parameter can be used to return the details for a
 *             specific repository creation template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeRepositoryCreationTemplatesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeRepositoryCreationTemplatesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // DescribeRepositoryCreationTemplatesRequest
 *   prefixes: [ // PrefixList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeRepositoryCreationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRepositoryCreationTemplatesResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryCreationTemplates: [ // RepositoryCreationTemplateList
 * //     { // RepositoryCreationTemplate
 * //       prefix: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       encryptionConfiguration: { // EncryptionConfigurationForRepositoryCreationTemplate
 * //         encryptionType: "AES256" || "KMS" || "KMS_DSSE", // required
 * //         kmsKey: "STRING_VALUE",
 * //       },
 * //       resourceTags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       imageTagMutability: "MUTABLE" || "IMMUTABLE",
 * //       repositoryPolicy: "STRING_VALUE",
 * //       lifecyclePolicy: "STRING_VALUE",
 * //       appliedFor: [ // RCTAppliedForList
 * //         "REPLICATION" || "PULL_THROUGH_CACHE",
 * //       ],
 * //       customRoleArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRepositoryCreationTemplatesCommandInput - {@link DescribeRepositoryCreationTemplatesCommandInput}
 * @returns {@link DescribeRepositoryCreationTemplatesCommandOutput}
 * @see {@link DescribeRepositoryCreationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoryCreationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
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
export class DescribeRepositoryCreationTemplatesCommand extends $Command
  .classBuilder<
    DescribeRepositoryCreationTemplatesCommandInput,
    DescribeRepositoryCreationTemplatesCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "DescribeRepositoryCreationTemplates", {})
  .n("ECRClient", "DescribeRepositoryCreationTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRepositoryCreationTemplatesCommand)
  .de(de_DescribeRepositoryCreationTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRepositoryCreationTemplatesRequest;
      output: DescribeRepositoryCreationTemplatesResponse;
    };
    sdk: {
      input: DescribeRepositoryCreationTemplatesCommandInput;
      output: DescribeRepositoryCreationTemplatesCommandOutput;
    };
  };
}
