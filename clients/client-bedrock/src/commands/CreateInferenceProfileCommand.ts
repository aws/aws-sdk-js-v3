// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateInferenceProfileRequest,
  CreateInferenceProfileRequestFilterSensitiveLog,
  CreateInferenceProfileResponse,
} from "../models/models_0";
import { de_CreateInferenceProfileCommand, se_CreateInferenceProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInferenceProfileCommand}.
 */
export interface CreateInferenceProfileCommandInput extends CreateInferenceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateInferenceProfileCommand}.
 */
export interface CreateInferenceProfileCommandOutput extends CreateInferenceProfileResponse, __MetadataBearer {}

/**
 * <p>Creates an application inference profile to track metrics and costs when invoking a model. To create an application inference profile for a foundation model in one region, specify the ARN of the model in that region. To create an application inference profile for a foundation model across multiple regions, specify the ARN of the system-defined inference profile that contains the regions that you want to route requests to. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">Increase throughput and resilience with cross-region inference in Amazon Bedrock</a>. in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateInferenceProfileCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateInferenceProfileCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateInferenceProfileRequest
 *   inferenceProfileName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 *   modelSource: { // InferenceProfileModelSource Union: only one key present
 *     copyFrom: "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInferenceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateInferenceProfileResponse
 * //   inferenceProfileArn: "STRING_VALUE", // required
 * //   status: "ACTIVE",
 * // };
 *
 * ```
 *
 * @param CreateInferenceProfileCommandInput - {@link CreateInferenceProfileCommandInput}
 * @returns {@link CreateInferenceProfileCommandOutput}
 * @see {@link CreateInferenceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceProfileCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class CreateInferenceProfileCommand extends $Command
  .classBuilder<
    CreateInferenceProfileCommandInput,
    CreateInferenceProfileCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "CreateInferenceProfile", {})
  .n("BedrockClient", "CreateInferenceProfileCommand")
  .f(CreateInferenceProfileRequestFilterSensitiveLog, void 0)
  .ser(se_CreateInferenceProfileCommand)
  .de(de_CreateInferenceProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInferenceProfileRequest;
      output: CreateInferenceProfileResponse;
    };
    sdk: {
      input: CreateInferenceProfileCommandInput;
      output: CreateInferenceProfileCommandOutput;
    };
  };
}
