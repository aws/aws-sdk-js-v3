// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCustomModelRequest, GetCustomModelResponse } from "../models/models_0";
import { de_GetCustomModelCommand, se_GetCustomModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCustomModelCommand}.
 */
export interface GetCustomModelCommandInput extends GetCustomModelRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomModelCommand}.
 */
export interface GetCustomModelCommandOutput extends GetCustomModelResponse, __MetadataBearer {}

/**
 * <p>Get the properties associated with a Amazon Bedrock custom model that you have created.For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetCustomModelCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetCustomModelCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetCustomModelRequest
 *   modelIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCustomModelCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomModelResponse
 * //   modelArn: "STRING_VALUE", // required
 * //   modelName: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE",
 * //   jobArn: "STRING_VALUE", // required
 * //   baseModelArn: "STRING_VALUE", // required
 * //   customizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING",
 * //   modelKmsKeyArn: "STRING_VALUE",
 * //   hyperParameters: { // ModelCustomizationHyperParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   trainingDataConfig: { // TrainingDataConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   validationDataConfig: { // ValidationDataConfig
 * //     validators: [ // Validators // required
 * //       { // Validator
 * //         s3Uri: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   outputDataConfig: { // OutputDataConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   trainingMetrics: { // TrainingMetrics
 * //     trainingLoss: Number("float"),
 * //   },
 * //   validationMetrics: [ // ValidationMetrics
 * //     { // ValidatorMetric
 * //       validationLoss: Number("float"),
 * //     },
 * //   ],
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetCustomModelCommandInput - {@link GetCustomModelCommandInput}
 * @returns {@link GetCustomModelCommandOutput}
 * @see {@link GetCustomModelCommandInput} for command's `input` shape.
 * @see {@link GetCustomModelCommandOutput} for command's `response` shape.
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
export class GetCustomModelCommand extends $Command
  .classBuilder<
    GetCustomModelCommandInput,
    GetCustomModelCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "GetCustomModel", {})
  .n("BedrockClient", "GetCustomModelCommand")
  .f(void 0, void 0)
  .ser(se_GetCustomModelCommand)
  .de(de_GetCustomModelCommand)
  .build() {}
