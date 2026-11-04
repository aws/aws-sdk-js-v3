// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMLModelTrainingJobInput, GetMLModelTrainingJobOutput } from "../models/models_0";
import { GetMLModelTrainingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMLModelTrainingJobCommand}.
 */
export interface GetMLModelTrainingJobCommandInput extends GetMLModelTrainingJobInput {}
/**
 * @public
 *
 * The output of {@link GetMLModelTrainingJobCommand}.
 */
export interface GetMLModelTrainingJobCommandOutput extends GetMLModelTrainingJobOutput, __MetadataBearer {}

/**
 * Retrieves information about a Neptune ML model training job. See [Model training using the `modeltraining` command](https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-api-modeltraining.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:GetMLModelTrainingJobStatus](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlmodeltrainingjobstatus) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetMLModelTrainingJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetMLModelTrainingJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // GetMLModelTrainingJobInput
 *   id: "STRING_VALUE", // required
 *   neptuneIamRoleArn: "STRING_VALUE",
 * };
 * const command = new GetMLModelTrainingJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMLModelTrainingJobOutput
 * //   status: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   processingJob: { // MlResourceDefinition
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   hpoJob: {
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   modelTransformJob: {
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   mlModels: [ // MlModels
 * //     { // MlConfigDefinition
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMLModelTrainingJobCommandInput - {@link GetMLModelTrainingJobCommandInput}
 * @returns {@link GetMLModelTrainingJobCommandOutput}
 * @see {@link GetMLModelTrainingJobCommandInput} for command's `input` shape.
 * @see {@link GetMLModelTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Raised when an argument in a request is not supported.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *
 * Raised when a specified machine-learning resource could not be found.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Raised when the number of requests being processed exceeds the limit.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * Raised when a request attempts to initiate an operation that is not supported.
 *
 * @throws {@link NeptunedataServiceException}
 *
 * Base exception class for all service exceptions from Neptunedata service.
 *
 * @public
 */
export class GetMLModelTrainingJobCommand extends command<GetMLModelTrainingJobCommandInput, GetMLModelTrainingJobCommandOutput>(
  _ep0,
  _mw0,
  "GetMLModelTrainingJob",
  GetMLModelTrainingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMLModelTrainingJobInput;
      output: GetMLModelTrainingJobOutput;
    };
    sdk: {
      input: GetMLModelTrainingJobCommandInput;
      output: GetMLModelTrainingJobCommandOutput;
    };
  };
}
