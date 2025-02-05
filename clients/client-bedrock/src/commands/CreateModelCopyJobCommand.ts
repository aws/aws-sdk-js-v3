// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateModelCopyJobRequest, CreateModelCopyJobResponse } from "../models/models_0";
import { de_CreateModelCopyJobCommand, se_CreateModelCopyJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCopyJobCommand}.
 */
export interface CreateModelCopyJobCommandInput extends CreateModelCopyJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCopyJobCommand}.
 */
export interface CreateModelCopyJobCommandOutput extends CreateModelCopyJobResponse, __MetadataBearer {}

/**
 * <p>Copies a model to another region so that it can be used there. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/copy-model.html">Copy models to be used in other regions</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateModelCopyJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateModelCopyJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockClient(config);
 * const input = { // CreateModelCopyJobRequest
 *   sourceModelArn: "STRING_VALUE", // required
 *   targetModelName: "STRING_VALUE", // required
 *   modelKmsKeyId: "STRING_VALUE",
 *   targetModelTags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateModelCopyJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelCopyJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelCopyJobCommandInput - {@link CreateModelCopyJobCommandInput}
 * @returns {@link CreateModelCopyJobCommandOutput}
 * @see {@link CreateModelCopyJobCommandInput} for command's `input` shape.
 * @see {@link CreateModelCopyJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per resource).
 *          The maximum number of tags includes both existing tags and those included in your current request. </p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class CreateModelCopyJobCommand extends $Command
  .classBuilder<
    CreateModelCopyJobCommandInput,
    CreateModelCopyJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "CreateModelCopyJob", {})
  .n("BedrockClient", "CreateModelCopyJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelCopyJobCommand)
  .de(de_CreateModelCopyJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelCopyJobRequest;
      output: CreateModelCopyJobResponse;
    };
    sdk: {
      input: CreateModelCopyJobCommandInput;
      output: CreateModelCopyJobCommandOutput;
    };
  };
}
