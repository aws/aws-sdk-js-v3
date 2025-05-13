// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ApplicationType,
  EvaluationConfig,
  EvaluationConfigFilterSensitiveLog,
  EvaluationInferenceConfig,
  EvaluationInferenceConfigFilterSensitiveLog,
  EvaluationJobStatus,
  EvaluationJobType,
  EvaluationOutputDataConfig,
} from "./models_0";

/**
 * @public
 */
export interface GetEvaluationJobResponse {
  /**
   * <p>The name for the evaluation job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The current status of the evaluation job.</p>
   * @public
   */
  status: EvaluationJobStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the evaluation job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The description of the evaluation job.</p>
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role used in the evaluation job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed encryption key specified when the evaluation job was created.</p>
   * @public
   */
  customerEncryptionKeyId?: string | undefined;

  /**
   * <p>Specifies whether the evaluation job is automated or human-based.</p>
   * @public
   */
  jobType: EvaluationJobType | undefined;

  /**
   * <p>Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation).</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * <p>Contains the configuration details of either an automated or human-based evaluation job.</p>
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * <p>Contains the configuration details of the inference model used for the evaluation job. </p>
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * <p>Contains the configuration details of the Amazon S3 bucket for
   *          storing the results of the evaluation job.</p>
   * @public
   */
  outputDataConfig: EvaluationOutputDataConfig | undefined;

  /**
   * <p>The time the evaluation job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the evaluation job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>A list of strings that specify why the evaluation job failed to create.</p>
   * @public
   */
  failureMessages?: string[] | undefined;
}

/**
 * @internal
 */
export const GetEvaluationJobResponseFilterSensitiveLog = (obj: GetEvaluationJobResponse): any => ({
  ...obj,
  ...(obj.jobDescription && { jobDescription: SENSITIVE_STRING }),
  ...(obj.evaluationConfig && { evaluationConfig: EvaluationConfigFilterSensitiveLog(obj.evaluationConfig) }),
  ...(obj.inferenceConfig && { inferenceConfig: EvaluationInferenceConfigFilterSensitiveLog(obj.inferenceConfig) }),
});
