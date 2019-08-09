import {
  _ProcessorParameter,
  _UnmarshalledProcessorParameter
} from "./_ProcessorParameter";

/**
 * <p>Describes a data processor.</p>
 */
export interface _Processor {
  /**
   * <p>The type of processor.</p>
   */
  Type: "Lambda" | string;

  /**
   * <p>The processor parameters.</p>
   */
  Parameters?: Array<_ProcessorParameter> | Iterable<_ProcessorParameter>;
}

export interface _UnmarshalledProcessor extends _Processor {
  /**
   * <p>The processor parameters.</p>
   */
  Parameters?: Array<_UnmarshalledProcessorParameter>;
}
