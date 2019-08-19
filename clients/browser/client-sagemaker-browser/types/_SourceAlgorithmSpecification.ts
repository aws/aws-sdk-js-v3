import {
  _SourceAlgorithm,
  _UnmarshalledSourceAlgorithm
} from "./_SourceAlgorithm";

/**
 * <p>A list of algorithms that were used to create a model package.</p>
 */
export interface _SourceAlgorithmSpecification {
  /**
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: Array<_SourceAlgorithm> | Iterable<_SourceAlgorithm>;
}

export interface _UnmarshalledSourceAlgorithmSpecification
  extends _SourceAlgorithmSpecification {
  /**
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: Array<_UnmarshalledSourceAlgorithm>;
}
