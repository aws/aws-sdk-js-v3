import { _ActionTypeId, _UnmarshalledActionTypeId } from "./_ActionTypeId";
import {
  _ActionConfiguration,
  _UnmarshalledActionConfiguration
} from "./_ActionConfiguration";
import {
  _PipelineContext,
  _UnmarshalledPipelineContext
} from "./_PipelineContext";
import { _Artifact, _UnmarshalledArtifact } from "./_Artifact";
import {
  _AWSSessionCredentials,
  _UnmarshalledAWSSessionCredentials
} from "./_AWSSessionCredentials";
import { _EncryptionKey, _UnmarshalledEncryptionKey } from "./_EncryptionKey";

/**
 * <p>Represents additional information about a job required for a job worker to complete the job.</p>
 */
export interface _JobData {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: _ActionTypeId;

  /**
   * <p>Represents information about an action configuration.</p>
   */
  actionConfiguration?: _ActionConfiguration;

  /**
   * <p>Represents information about a pipeline to a job worker.</p> <note> <p>Includes <code>pipelineArn</code> and <code>pipelineExecutionId</code> for Custom jobs.</p> </note>
   */
  pipelineContext?: _PipelineContext;

  /**
   * <p>The artifact supplied to the job.</p>
   */
  inputArtifacts?: Array<_Artifact> | Iterable<_Artifact>;

  /**
   * <p>The output of the job.</p>
   */
  outputArtifacts?: Array<_Artifact> | Iterable<_Artifact>;

  /**
   * <p>Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifacts for the pipeline in AWS CodePipeline.</p>
   */
  artifactCredentials?: _AWSSessionCredentials;

  /**
   * <p>A system-generated token, such as a AWS CodeDeploy deployment ID, that a job requires in order to continue the job asynchronously.</p>
   */
  continuationToken?: string;

  /**
   * <p>Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. </p>
   */
  encryptionKey?: _EncryptionKey;
}

export interface _UnmarshalledJobData extends _JobData {
  /**
   * <p>Represents information about an action type.</p>
   */
  actionTypeId?: _UnmarshalledActionTypeId;

  /**
   * <p>Represents information about an action configuration.</p>
   */
  actionConfiguration?: _UnmarshalledActionConfiguration;

  /**
   * <p>Represents information about a pipeline to a job worker.</p> <note> <p>Includes <code>pipelineArn</code> and <code>pipelineExecutionId</code> for Custom jobs.</p> </note>
   */
  pipelineContext?: _UnmarshalledPipelineContext;

  /**
   * <p>The artifact supplied to the job.</p>
   */
  inputArtifacts?: Array<_UnmarshalledArtifact>;

  /**
   * <p>The output of the job.</p>
   */
  outputArtifacts?: Array<_UnmarshalledArtifact>;

  /**
   * <p>Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifacts for the pipeline in AWS CodePipeline.</p>
   */
  artifactCredentials?: _UnmarshalledAWSSessionCredentials;

  /**
   * <p>Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. </p>
   */
  encryptionKey?: _UnmarshalledEncryptionKey;
}
