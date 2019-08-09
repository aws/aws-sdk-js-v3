import {
  _UdpContainerSettings,
  _UnmarshalledUdpContainerSettings
} from "./_UdpContainerSettings";
import {
  _OutputLocationRef,
  _UnmarshalledOutputLocationRef
} from "./_OutputLocationRef";
import {
  _FecOutputSettings,
  _UnmarshalledFecOutputSettings
} from "./_FecOutputSettings";

/**
 * Udp Output Settings
 */
export interface _UdpOutputSettings {
  /**
   * UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc.
   */
  BufferMsec?: number;

  /**
   * Udp Container Settings
   */
  ContainerSettings: _UdpContainerSettings;

  /**
   * Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
   */
  Destination: _OutputLocationRef;

  /**
   * Settings for enabling and adjusting Forward Error Correction on UDP outputs.
   */
  FecOutputSettings?: _FecOutputSettings;
}

export interface _UnmarshalledUdpOutputSettings extends _UdpOutputSettings {
  /**
   * Udp Container Settings
   */
  ContainerSettings: _UnmarshalledUdpContainerSettings;

  /**
   * Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
   */
  Destination: _UnmarshalledOutputLocationRef;

  /**
   * Settings for enabling and adjusting Forward Error Correction on UDP outputs.
   */
  FecOutputSettings?: _UnmarshalledFecOutputSettings;
}
