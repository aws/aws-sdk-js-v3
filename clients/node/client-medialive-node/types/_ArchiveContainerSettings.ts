import { _M2tsSettings, _UnmarshalledM2tsSettings } from "./_M2tsSettings";

/**
 * Archive Container Settings
 */
export interface _ArchiveContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: _M2tsSettings;
}

export interface _UnmarshalledArchiveContainerSettings
  extends _ArchiveContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: _UnmarshalledM2tsSettings;
}
