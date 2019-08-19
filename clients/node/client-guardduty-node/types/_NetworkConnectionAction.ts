import {
  _LocalPortDetails,
  _UnmarshalledLocalPortDetails
} from "./_LocalPortDetails";
import {
  _RemoteIpDetails,
  _UnmarshalledRemoteIpDetails
} from "./_RemoteIpDetails";
import {
  _RemotePortDetails,
  _UnmarshalledRemotePortDetails
} from "./_RemotePortDetails";

/**
 * _NetworkConnectionAction shape
 */
export interface _NetworkConnectionAction {
  /**
   * <p>Network connection blocked information.</p>
   */
  Blocked?: boolean;

  /**
   * <p>Network connection direction.</p>
   */
  ConnectionDirection?: string;

  /**
   * <p>Local port information of the connection.</p>
   */
  LocalPortDetails?: _LocalPortDetails;

  /**
   * <p>Network connection protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>Remote IP information of the connection.</p>
   */
  RemoteIpDetails?: _RemoteIpDetails;

  /**
   * <p>Remote port information of the connection.</p>
   */
  RemotePortDetails?: _RemotePortDetails;
}

export interface _UnmarshalledNetworkConnectionAction
  extends _NetworkConnectionAction {
  /**
   * <p>Local port information of the connection.</p>
   */
  LocalPortDetails?: _UnmarshalledLocalPortDetails;

  /**
   * <p>Remote IP information of the connection.</p>
   */
  RemoteIpDetails?: _UnmarshalledRemoteIpDetails;

  /**
   * <p>Remote port information of the connection.</p>
   */
  RemotePortDetails?: _UnmarshalledRemotePortDetails;
}
