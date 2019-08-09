import { _M2tsSettings, _UnmarshalledM2tsSettings } from "./_M2tsSettings";

/**
 * Udp Container Settings
 */
export interface _UdpContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: _M2tsSettings;
}

export interface _UnmarshalledUdpContainerSettings
  extends _UdpContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: _UnmarshalledM2tsSettings;
}
