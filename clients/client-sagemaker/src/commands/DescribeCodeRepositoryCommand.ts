// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeCodeRepositoryInput, DescribeCodeRepositoryOutput } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeCodeRepository$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCodeRepositoryCommand}.
 */
export interface DescribeCodeRepositoryCommandInput extends DescribeCodeRepositoryInput {}
/**
 * @public
 *
 * The output of {@link DescribeCodeRepositoryCommand}.
 */
export interface DescribeCodeRepositoryCommandOutput extends DescribeCodeRepositoryOutput, __MetadataBearer {}

/**
 * <p>Gets details about the specified Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeCodeRepositoryInput
 *   CodeRepositoryName: "STRING_VALUE", // required
 * };
 * const command = new DescribeCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCodeRepositoryOutput
 * //   CodeRepositoryName: "STRING_VALUE", // required
 * //   CodeRepositoryArn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   GitConfig: { // GitConfig
 * //     RepositoryUrl: "STRING_VALUE", // required
 * //     Branch: "STRING_VALUE",
 * //     SecretArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCodeRepositoryCommandInput - {@link DescribeCodeRepositoryCommandInput}
 * @returns {@link DescribeCodeRepositoryCommandOutput}
 * @see {@link DescribeCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeCodeRepositoryCommand extends $Command
  .classBuilder<
    DescribeCodeRepositoryCommandInput,
    DescribeCodeRepositoryCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeCodeRepository", {})
  .n("SageMakerClient", "DescribeCodeRepositoryCommand")
  .sc(DescribeCodeRepository$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCodeRepositoryInput;
      output: DescribeCodeRepositoryOutput;
    };
    sdk: {
      input: DescribeCodeRepositoryCommandInput;
      output: DescribeCodeRepositoryCommandOutput;
    };
  };
}
