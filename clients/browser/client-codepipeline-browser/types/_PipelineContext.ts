import { _StageContext, _UnmarshalledStageContext } from "./_StageContext";
import { _ActionContext, _UnmarshalledActionContext } from "./_ActionContext";

/**
 * <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
 */
export interface _PipelineContext {
  /**
   * <p>The name of the pipeline. This is a user-specified value. Pipeline names must be unique across all pipeline names under an Amazon Web Services account.</p>
   */
  pipelineName?: string;

  /**
   * <p>The stage of the pipeline.</p>
   */
  stage?: _StageContext;

  /**
   * <p>The context of an action to a job worker within the stage of a pipeline.</p>
   */
  action?: _ActionContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  pipelineArn?: string;

  /**
   * <p>The execution ID of the pipeline.</p>
   */
  pipelineExecutionId?: string;
}

export interface _UnmarshalledPipelineContext extends _PipelineContext {
  /**
   * <p>The stage of the pipeline.</p>
   */
  stage?: _UnmarshalledStageContext;

  /**
   * <p>The context of an action to a job worker within the stage of a pipeline.</p>
   */
  action?: _UnmarshalledActionContext;
}
