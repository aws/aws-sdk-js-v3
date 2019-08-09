import {
  _OriginationRoute,
  _UnmarshalledOriginationRoute
} from "./_OriginationRoute";

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime Voice Connector.</p>
 */
export interface _Origination {
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1. Maximum value of 20.</p>
   */
  Routes?: Array<_OriginationRoute> | Iterable<_OriginationRoute>;

  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;
}

export interface _UnmarshalledOrigination extends _Origination {
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1. Maximum value of 20.</p>
   */
  Routes?: Array<_UnmarshalledOriginationRoute>;
}
