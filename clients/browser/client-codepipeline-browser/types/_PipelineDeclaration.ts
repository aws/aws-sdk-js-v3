import { _ArtifactStore, _UnmarshalledArtifactStore } from "./_ArtifactStore";
import {
  _StageDeclaration,
  _UnmarshalledStageDeclaration
} from "./_StageDeclaration";

/**
 * <p>Represents the structure of actions and stages to be performed in the pipeline.</p>
 */
export interface _PipelineDeclaration {
  /**
   * <p>The name of the action to be performed.</p>
   */
  name: string;

  /**
   * <p>The Amazon Resource Name (ARN) for AWS CodePipeline to use to either perform actions with no <code>actionRoleArn</code>, or to use to assume roles for actions with an <code>actionRoleArn</code>.</p>
   */
  roleArn: string;

  /**
   * <p>Represents information about the Amazon S3 bucket where artifacts are stored for the pipeline. </p>
   */
  artifactStore?: _ArtifactStore;

  /**
   * <p>A mapping of <code>artifactStore</code> objects and their corresponding regions. There must be an artifact store for the pipeline region and for each cross-region action within the pipeline. You can only use either <code>artifactStore</code> or <code>artifactStores</code>, not both.</p> <p>If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p>
   */
  artifactStores?:
    | { [key: string]: _ArtifactStore }
    | Iterable<[string, _ArtifactStore]>;

  /**
   * <p>The stage in which to perform the action.</p>
   */
  stages: Array<_StageDeclaration> | Iterable<_StageDeclaration>;

  /**
   * <p>The version number of the pipeline. A new pipeline always has a version number of 1. This number is automatically incremented when a pipeline is updated.</p>
   */
  version?: number;
}

export interface _UnmarshalledPipelineDeclaration extends _PipelineDeclaration {
  /**
   * <p>Represents information about the Amazon S3 bucket where artifacts are stored for the pipeline. </p>
   */
  artifactStore?: _UnmarshalledArtifactStore;

  /**
   * <p>A mapping of <code>artifactStore</code> objects and their corresponding regions. There must be an artifact store for the pipeline region and for each cross-region action within the pipeline. You can only use either <code>artifactStore</code> or <code>artifactStores</code>, not both.</p> <p>If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p>
   */
  artifactStores?: { [key: string]: _UnmarshalledArtifactStore };

  /**
   * <p>The stage in which to perform the action.</p>
   */
  stages: Array<_UnmarshalledStageDeclaration>;
}
