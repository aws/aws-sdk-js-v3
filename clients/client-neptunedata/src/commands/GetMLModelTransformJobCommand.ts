// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMLModelTransformJobInput, GetMLModelTransformJobOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetMLModelTransformJobCommand, se_GetMLModelTransformJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMLModelTransformJobCommand}.
 */
export interface GetMLModelTransformJobCommandInput extends GetMLModelTransformJobInput {}
/**
 * @public
 *
 * The output of {@link GetMLModelTransformJobCommand}.
 */
export interface GetMLModelTransformJobCommandOutput extends GetMLModelTransformJobOutput, __MetadataBearer {}

/**
 * <p>Gets information about a specified model transform job. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-model-transform.html">Use
 *       a trained model to generate new model artifacts</a>.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlmodeltransformjobstatus">neptune-db:GetMLModelTransformJobStatus</a>
 *       IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetMLModelTransformJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetMLModelTransformJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetMLModelTransformJobInput
 *   id: "STRING_VALUE", // required
 *   neptuneIamRoleArn: "STRING_VALUE",
 * };
 * const command = new GetMLModelTransformJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMLModelTransformJobOutput
 * //   status: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   baseProcessingJob: { // MlResourceDefinition
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   remoteModelTransformJob: {
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   models: [ // Models
 * //     { // MlConfigDefinition
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMLModelTransformJobCommandInput - {@link GetMLModelTransformJobCommandInput}
 * @returns {@link GetMLModelTransformJobCommandOutput}
 * @see {@link GetMLModelTransformJobCommandInput} for command's `input` shape.
 * @see {@link GetMLModelTransformJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *  <p>Raised when a specified machine-learning resource could not be found.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 * @public
 */
export class GetMLModelTransformJobCommand extends $Command
  .classBuilder<
    GetMLModelTransformJobCommandInput,
    GetMLModelTransformJobCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "GetMLModelTransformJob", {})
  .n("NeptunedataClient", "GetMLModelTransformJobCommand")
  .f(void 0, void 0)
  .ser(se_GetMLModelTransformJobCommand)
  .de(de_GetMLModelTransformJobCommand)
  .build() {}
