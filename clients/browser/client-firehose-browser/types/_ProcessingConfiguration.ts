import { _Processor, _UnmarshalledProcessor } from "./_Processor";

/**
 * <p>Describes a data processing configuration.</p>
 */
export interface _ProcessingConfiguration {
  /**
   * <p>Enables or disables data processing.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The data processors.</p>
   */
  Processors?: Array<_Processor> | Iterable<_Processor>;
}

export interface _UnmarshalledProcessingConfiguration
  extends _ProcessingConfiguration {
  /**
   * <p>The data processors.</p>
   */
  Processors?: Array<_UnmarshalledProcessor>;
}
