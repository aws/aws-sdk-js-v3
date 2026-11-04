// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMLModelTransformJobInput, StartMLModelTransformJobOutput } from "../models/models_0";
import { StartMLModelTransformJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMLModelTransformJobCommand}.
 */
export interface StartMLModelTransformJobCommandInput extends StartMLModelTransformJobInput {}
/**
 * @public
 *
 * The output of {@link StartMLModelTransformJobCommand}.
 */
export interface StartMLModelTransformJobCommandOutput extends StartMLModelTransformJobOutput, __MetadataBearer {}

/**
 * Creates a new model transform job. See [Use a trained model to generate new model artifacts](https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-model-transform.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:StartMLModelTransformJob](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmlmodeltransformjob) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, StartMLModelTransformJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, StartMLModelTransformJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // StartMLModelTransformJobInput
 *   id: "STRING_VALUE",
 *   dataProcessingJobId: "STRING_VALUE",
 *   mlModelTrainingJobId: "STRING_VALUE",
 *   trainingJobName: "STRING_VALUE",
 *   modelTransformOutputS3Location: "STRING_VALUE", // required
 *   sagemakerIamRoleArn: "STRING_VALUE",
 *   neptuneIamRoleArn: "STRING_VALUE",
 *   customModelTransformParameters: { // CustomModelTransformParameters
 *     sourceS3DirectoryPath: "STRING_VALUE", // required
 *     transformEntryPointScript: "STRING_VALUE",
 *   },
 *   baseProcessingInstanceType: "STRING_VALUE",
 *   baseProcessingInstanceVolumeSizeInGB: Number("int"),
 *   subnets: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   volumeEncryptionKMSKey: "STRING_VALUE",
 *   s3OutputEncryptionKMSKey: "STRING_VALUE",
 * };
 * const command = new StartMLModelTransformJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMLModelTransformJobOutput
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   creationTimeInMillis: Number("long"),
 * // };
 *
 * ```
 *
 * @param StartMLModelTransformJobCommandInput - {@link StartMLModelTransformJobCommandInput}
 * @returns {@link StartMLModelTransformJobCommandOutput}
 * @see {@link StartMLModelTransformJobCommandInput} for command's `input` shape.
 * @see {@link StartMLModelTransformJobCommandOutput} for command's `response` shape.
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
export class StartMLModelTransformJobCommand extends command<StartMLModelTransformJobCommandInput, StartMLModelTransformJobCommandOutput>(
  _ep0,
  _mw0,
  "StartMLModelTransformJob",
  StartMLModelTransformJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMLModelTransformJobInput;
      output: StartMLModelTransformJobOutput;
    };
    sdk: {
      input: StartMLModelTransformJobCommandInput;
      output: StartMLModelTransformJobCommandOutput;
    };
  };
}
