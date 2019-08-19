import {
  _DataflowEndpoint,
  _UnmarshalledDataflowEndpoint
} from "./_DataflowEndpoint";
import {
  _SecurityDetails,
  _UnmarshalledSecurityDetails
} from "./_SecurityDetails";

/**
 * <p>Information about the endpoint details.</p>
 */
export interface _EndpointDetails {
  /**
   * <p>A dataflow endpoint.</p>
   */
  endpoint?: _DataflowEndpoint;

  /**
   * <p>Endpoint security details.</p>
   */
  securityDetails?: _SecurityDetails;
}

export interface _UnmarshalledEndpointDetails extends _EndpointDetails {
  /**
   * <p>A dataflow endpoint.</p>
   */
  endpoint?: _UnmarshalledDataflowEndpoint;

  /**
   * <p>Endpoint security details.</p>
   */
  securityDetails?: _UnmarshalledSecurityDetails;
}
