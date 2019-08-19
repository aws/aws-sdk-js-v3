/**
 * <p> Describes the real-time endpoint information for an <code>MLModel</code>.</p>
 */
export interface _RealtimeEndpointInfo {
  /**
   * <p> The maximum processing rate for the real-time endpoint for <code>MLModel</code>, measured in incoming requests per second.</p>
   */
  PeakRequestsPerSecond?: number;

  /**
   * <p>The time that the request to create the real-time endpoint for the <code>MLModel</code> was received. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>The URI that specifies where to send real-time prediction requests for the <code>MLModel</code>.</p> <note><title>Note</title> <p>The application must wait until the real-time endpoint is ready before using this URI.</p> </note>
   */
  EndpointUrl?: string;

  /**
   * <p> The current status of the real-time endpoint for the <code>MLModel</code>. This element can have one of the following values: </p> <ul> <li> <code>NONE</code> - Endpoint does not exist or was previously deleted.</li> <li> <code>READY</code> - Endpoint is ready to be used for real-time predictions.</li> <li> <code>UPDATING</code> - Updating/creating the endpoint. </li> </ul>
   */
  EndpointStatus?: "NONE" | "READY" | "UPDATING" | "FAILED" | string;
}

export interface _UnmarshalledRealtimeEndpointInfo
  extends _RealtimeEndpointInfo {
  /**
   * <p>The time that the request to create the real-time endpoint for the <code>MLModel</code> was received. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;
}
