import {
  _AlgorithmStatusItem,
  _UnmarshalledAlgorithmStatusItem
} from "./_AlgorithmStatusItem";

/**
 * <p>Specifies the validation and image scan statuses of the algorithm.</p>
 */
export interface _AlgorithmStatusDetails {
  /**
   * <p>The status of algorithm validation.</p>
   */
  ValidationStatuses?:
    | Array<_AlgorithmStatusItem>
    | Iterable<_AlgorithmStatusItem>;

  /**
   * <p>The status of the scan of the algorithm's Docker image container.</p>
   */
  ImageScanStatuses?:
    | Array<_AlgorithmStatusItem>
    | Iterable<_AlgorithmStatusItem>;
}

export interface _UnmarshalledAlgorithmStatusDetails
  extends _AlgorithmStatusDetails {
  /**
   * <p>The status of algorithm validation.</p>
   */
  ValidationStatuses?: Array<_UnmarshalledAlgorithmStatusItem>;

  /**
   * <p>The status of the scan of the algorithm's Docker image container.</p>
   */
  ImageScanStatuses?: Array<_UnmarshalledAlgorithmStatusItem>;
}
