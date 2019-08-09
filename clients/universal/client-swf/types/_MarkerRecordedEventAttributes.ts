/**
 * <p>Provides the details of the <code>MarkerRecorded</code> event.</p>
 */
export interface _MarkerRecordedEventAttributes {
  /**
   * <p>The name of the marker.</p>
   */
  markerName: string;

  /**
   * <p>The details of the marker.</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RecordMarker</code> decision that requested this marker. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledMarkerRecordedEventAttributes = _MarkerRecordedEventAttributes;
