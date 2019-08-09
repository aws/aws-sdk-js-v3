import {
  _ArchiveContainerSettings,
  _UnmarshalledArchiveContainerSettings
} from "./_ArchiveContainerSettings";

/**
 * Archive Output Settings
 */
export interface _ArchiveOutputSettings {
  /**
   * Settings specific to the container type of the file.
   */
  ContainerSettings: _ArchiveContainerSettings;

  /**
   * Output file extension. If excluded, this will be auto-selected from the container type.
   */
  Extension?: string;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;
}

export interface _UnmarshalledArchiveOutputSettings
  extends _ArchiveOutputSettings {
  /**
   * Settings specific to the container type of the file.
   */
  ContainerSettings: _UnmarshalledArchiveContainerSettings;
}
