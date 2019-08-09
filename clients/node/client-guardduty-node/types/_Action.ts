import {
  _AwsApiCallAction,
  _UnmarshalledAwsApiCallAction
} from "./_AwsApiCallAction";
import {
  _DnsRequestAction,
  _UnmarshalledDnsRequestAction
} from "./_DnsRequestAction";
import {
  _NetworkConnectionAction,
  _UnmarshalledNetworkConnectionAction
} from "./_NetworkConnectionAction";
import {
  _PortProbeAction,
  _UnmarshalledPortProbeAction
} from "./_PortProbeAction";

/**
 * _Action shape
 */
export interface _Action {
  /**
   * <p>GuardDuty Finding activity type.</p>
   */
  ActionType?: string;

  /**
   * <p>Information about the AWS_API_CALL action described in this finding.</p>
   */
  AwsApiCallAction?: _AwsApiCallAction;

  /**
   * <p>Information about the DNS_REQUEST action described in this finding.</p>
   */
  DnsRequestAction?: _DnsRequestAction;

  /**
   * <p>Information about the NETWORK_CONNECTION action described in this finding.</p>
   */
  NetworkConnectionAction?: _NetworkConnectionAction;

  /**
   * <p>Information about the PORT_PROBE action described in this finding.</p>
   */
  PortProbeAction?: _PortProbeAction;
}

export interface _UnmarshalledAction extends _Action {
  /**
   * <p>Information about the AWS_API_CALL action described in this finding.</p>
   */
  AwsApiCallAction?: _UnmarshalledAwsApiCallAction;

  /**
   * <p>Information about the DNS_REQUEST action described in this finding.</p>
   */
  DnsRequestAction?: _UnmarshalledDnsRequestAction;

  /**
   * <p>Information about the NETWORK_CONNECTION action described in this finding.</p>
   */
  NetworkConnectionAction?: _UnmarshalledNetworkConnectionAction;

  /**
   * <p>Information about the PORT_PROBE action described in this finding.</p>
   */
  PortProbeAction?: _UnmarshalledPortProbeAction;
}
