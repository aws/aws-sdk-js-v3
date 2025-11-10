// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCodeRepositoryInput, CreateCodeRepositoryOutput } from "../models/models_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateCodeRepository } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCodeRepositoryCommand}.
 */
export interface CreateCodeRepositoryCommandInput extends CreateCodeRepositoryInput {}
/**
 * @public
 *
 * The output of {@link CreateCodeRepositoryCommand}.
 */
export interface CreateCodeRepositoryCommandOutput extends CreateCodeRepositoryOutput, __MetadataBearer {}

/**
 * <p>Creates a Git repository as a resource in your SageMaker AI account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker AI account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateCodeRepositoryInput
 *   CodeRepositoryName: "STRING_VALUE", // required
 *   GitConfig: { // GitConfig
 *     RepositoryUrl: "STRING_VALUE", // required
 *     Branch: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeRepositoryOutput
 * //   CodeRepositoryArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCodeRepositoryCommandInput - {@link CreateCodeRepositoryCommandInput}
 * @returns {@link CreateCodeRepositoryCommandOutput}
 * @see {@link CreateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateCodeRepositoryCommand extends $Command
  .classBuilder<
    CreateCodeRepositoryCommandInput,
    CreateCodeRepositoryCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateCodeRepository", {})
  .n("SageMakerClient", "CreateCodeRepositoryCommand")
  .sc(CreateCodeRepository)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeRepositoryInput;
      output: CreateCodeRepositoryOutput;
    };
    sdk: {
      input: CreateCodeRepositoryCommandInput;
      output: CreateCodeRepositoryCommandOutput;
    };
  };
}
