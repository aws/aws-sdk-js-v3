import {
  _LocalPortDetails,
  _UnmarshalledLocalPortDetails
} from "./_LocalPortDetails";
import {
  _RemoteIpDetails,
  _UnmarshalledRemoteIpDetails
} from "./_RemoteIpDetails";

/**
 * _PortProbeDetail shape
 */
export interface _PortProbeDetail {
  /**
   * <p>Local port information of the connection.</p>
   */
  LocalPortDetails?: _LocalPortDetails;

  /**
   * <p>Remote IP information of the connection.</p>
   */
  RemoteIpDetails?: _RemoteIpDetails;
}

export interface _UnmarshalledPortProbeDetail extends _PortProbeDetail {
  /**
   * <p>Local port information of the connection.</p>
   */
  LocalPortDetails?: _UnmarshalledLocalPortDetails;

  /**
   * <p>Remote IP information of the connection.</p>
   */
  RemoteIpDetails?: _UnmarshalledRemoteIpDetails;
}
