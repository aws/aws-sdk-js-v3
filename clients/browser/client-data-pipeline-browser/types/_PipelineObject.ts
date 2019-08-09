import { _Field, _UnmarshalledField } from "./_Field";

/**
 * <p>Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.</p>
 */
export interface _PipelineObject {
  /**
   * <p>The ID of the object.</p>
   */
  id: string;

  /**
   * <p>The name of the object.</p>
   */
  name: string;

  /**
   * <p>Key-value pairs that define the properties of the object.</p>
   */
  fields: Array<_Field> | Iterable<_Field>;
}

export interface _UnmarshalledPipelineObject extends _PipelineObject {
  /**
   * <p>Key-value pairs that define the properties of the object.</p>
   */
  fields: Array<_UnmarshalledField>;
}
