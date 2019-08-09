/**
 * <p>Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.</p>
 */
export interface _Radios {
  /**
   * <p>True if Wi-Fi is enabled at the beginning of the test; otherwise, false.</p>
   */
  wifi?: boolean;

  /**
   * <p>True if Bluetooth is enabled at the beginning of the test; otherwise, false.</p>
   */
  bluetooth?: boolean;

  /**
   * <p>True if NFC is enabled at the beginning of the test; otherwise, false.</p>
   */
  nfc?: boolean;

  /**
   * <p>True if GPS is enabled at the beginning of the test; otherwise, false.</p>
   */
  gps?: boolean;
}

export type _UnmarshalledRadios = _Radios;
