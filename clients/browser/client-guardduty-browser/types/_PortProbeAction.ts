import {
  _PortProbeDetail,
  _UnmarshalledPortProbeDetail
} from "./_PortProbeDetail";

/**
 * _PortProbeAction shape
 */
export interface _PortProbeAction {
  /**
   * <p>Port probe blocked information.</p>
   */
  Blocked?: boolean;

  /**
   * <p>A list of port probe details objects.</p>
   */
  PortProbeDetails?: Array<_PortProbeDetail> | Iterable<_PortProbeDetail>;
}

export interface _UnmarshalledPortProbeAction extends _PortProbeAction {
  /**
   * <p>A list of port probe details objects.</p>
   */
  PortProbeDetails?: Array<_UnmarshalledPortProbeDetail>;
}
