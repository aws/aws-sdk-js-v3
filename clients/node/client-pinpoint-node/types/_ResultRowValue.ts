/**
 *  <p>Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application or campaign.</p>
 */
export interface _ResultRowValue {
  /**
   *  <p>The name of the field that Amazon Pinpoint uses to store the value specified by the Value property.</p>
   */
  Key: string;

  /**
   *  <p>The data type of the value specified by the Value property.</p>
   */
  Type: string;

  /**
   *  <p>In a Values object, the value for the metric that the query retrieved data for. In a GroupedBys object, the value for the field that was used to group data in a result set that contains multiple results (Values objects).</p>
   */
  Value: string;
}

export type _UnmarshalledResultRowValue = _ResultRowValue;
