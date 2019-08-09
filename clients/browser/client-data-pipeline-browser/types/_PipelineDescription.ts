import { _Field, _UnmarshalledField } from "./_Field";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Contains pipeline metadata.</p>
 */
export interface _PipelineDescription {
  /**
   * <p>The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   */
  pipelineId: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  name: string;

  /**
   * <p>A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.</p>
   */
  fields: Array<_Field> | Iterable<_Field>;

  /**
   * <p>Description of the pipeline.</p>
   */
  description?: string;

  /**
   * <p>A list of tags to associated with a pipeline. Tags let you control access to pipelines. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledPipelineDescription extends _PipelineDescription {
  /**
   * <p>A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.</p>
   */
  fields: Array<_UnmarshalledField>;

  /**
   * <p>A list of tags to associated with a pipeline. Tags let you control access to pipelines. For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
