// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMLModelTrainingJobInput, StartMLModelTrainingJobOutput } from "../models/models_0";
import { StartMLModelTrainingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMLModelTrainingJobCommand}.
 */
export interface StartMLModelTrainingJobCommandInput extends StartMLModelTrainingJobInput {}
/**
 * @public
 *
 * The output of {@link StartMLModelTrainingJobCommand}.
 */
export interface StartMLModelTrainingJobCommandOutput extends StartMLModelTrainingJobOutput, __MetadataBearer {}

/**
 * Creates a new Neptune ML model training job. See [Model training using the `modeltraining` command](https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-api-modeltraining.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:StartMLModelTrainingJob](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmlmodeltrainingjob) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, StartMLModelTrainingJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, StartMLModelTrainingJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // StartMLModelTrainingJobInput
 *   id: "STRING_VALUE",
 *   previousModelTrainingJobId: "STRING_VALUE",
 *   dataProcessingJobId: "STRING_VALUE", // required
 *   trainModelS3Location: "STRING_VALUE", // required
 *   sagemakerIamRoleArn: "STRING_VALUE",
 *   neptuneIamRoleArn: "STRING_VALUE",
 *   baseProcessingInstanceType: "STRING_VALUE",
 *   trainingInstanceType: "STRING_VALUE",
 *   trainingInstanceVolumeSizeInGB: Number("int"),
 *   trainingTimeOutInSeconds: Number("int"),
 *   maxHPONumberOfTrainingJobs: Number("int"),
 *   maxHPOParallelTrainingJobs: Number("int"),
 *   subnets: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   volumeEncryptionKMSKey: "STRING_VALUE",
 *   s3OutputEncryptionKMSKey: "STRING_VALUE",
 *   enableManagedSpotTraining: true || false,
 *   customModelTrainingParameters: { // CustomModelTrainingParameters
 *     sourceS3DirectoryPath: "STRING_VALUE", // required
 *     trainingEntryPointScript: "STRING_VALUE",
 *     transformEntryPointScript: "STRING_VALUE",
 *   },
 * };
 * const command = new StartMLModelTrainingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMLModelTrainingJobOutput
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   creationTimeInMillis: Number("long"),
 * // };
 *
 * ```
 *
 * @param StartMLModelTrainingJobCommandInput - {@link StartMLModelTrainingJobCommandInput}
 * @returns {@link StartMLModelTrainingJobCommandOutput}
 * @see {@link StartMLModelTrainingJobCommandInput} for command's `input` shape.
 * @see {@link StartMLModelTrainingJobCommandOutput} for command's `response` shape.
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
export class StartMLModelTrainingJobCommand extends command<StartMLModelTrainingJobCommandInput, StartMLModelTrainingJobCommandOutput>(
  _ep0,
  _mw0,
  "StartMLModelTrainingJob",
  StartMLModelTrainingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMLModelTrainingJobInput;
      output: StartMLModelTrainingJobOutput;
    };
    sdk: {
      input: StartMLModelTrainingJobCommandInput;
      output: StartMLModelTrainingJobCommandOutput;
    };
  };
}
