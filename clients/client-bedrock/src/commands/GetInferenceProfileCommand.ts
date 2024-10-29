// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetInferenceProfileRequest,
  GetInferenceProfileResponse,
  GetInferenceProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetInferenceProfileCommand, se_GetInferenceProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInferenceProfileCommand}.
 */
export interface GetInferenceProfileCommandInput extends GetInferenceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetInferenceProfileCommand}.
 */
export interface GetInferenceProfileCommandOutput extends GetInferenceProfileResponse, __MetadataBearer {}

/**
 * <p>Gets information about an inference profile. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">Increase throughput and resilience with cross-region inference in Amazon Bedrock</a>. in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetInferenceProfileCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetInferenceProfileCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetInferenceProfileRequest
 *   inferenceProfileIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetInferenceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetInferenceProfileResponse
 * //   inferenceProfileName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   inferenceProfileArn: "STRING_VALUE", // required
 * //   models: [ // InferenceProfileModels // required
 * //     { // InferenceProfileModel
 * //       modelArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   inferenceProfileId: "STRING_VALUE", // required
 * //   status: "ACTIVE", // required
 * //   type: "SYSTEM_DEFINED" || "APPLICATION", // required
 * // };
 *
 * ```
 *
 * @param GetInferenceProfileCommandInput - {@link GetInferenceProfileCommandInput}
 * @returns {@link GetInferenceProfileCommandOutput}
 * @see {@link GetInferenceProfileCommandInput} for command's `input` shape.
 * @see {@link GetInferenceProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class GetInferenceProfileCommand extends $Command
  .classBuilder<
    GetInferenceProfileCommandInput,
    GetInferenceProfileCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {})
  .n("BedrockClient", "GetInferenceProfileCommand")
  .f(void 0, GetInferenceProfileResponseFilterSensitiveLog)
  .ser(se_GetInferenceProfileCommand)
  .de(de_GetInferenceProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInferenceProfileRequest;
      output: GetInferenceProfileResponse;
    };
    sdk: {
      input: GetInferenceProfileCommandInput;
      output: GetInferenceProfileCommandOutput;
    };
  };
}
