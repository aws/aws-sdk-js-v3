import { _Observation, _UnmarshalledObservation } from "./_Observation";

/**
 * <p>Describes observations related to the problem.</p>
 */
export interface _RelatedObservations {
  /**
   * <p>The list of observations related to the problem.</p>
   */
  ObservationList?: Array<_Observation> | Iterable<_Observation>;
}

export interface _UnmarshalledRelatedObservations extends _RelatedObservations {
  /**
   * <p>The list of observations related to the problem.</p>
   */
  ObservationList?: Array<_UnmarshalledObservation>;
}
