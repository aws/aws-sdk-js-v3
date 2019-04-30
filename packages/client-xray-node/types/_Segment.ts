/**
 * <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a>PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
 */
export interface _Segment {
  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * <p>The segment document.</p>
   */
  Document?: string;
}

export type _UnmarshalledSegment = _Segment;
