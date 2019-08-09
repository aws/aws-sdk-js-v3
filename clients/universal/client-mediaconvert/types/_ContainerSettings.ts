import { _F4vSettings, _UnmarshalledF4vSettings } from "./_F4vSettings";
import { _M2tsSettings, _UnmarshalledM2tsSettings } from "./_M2tsSettings";
import { _M3u8Settings, _UnmarshalledM3u8Settings } from "./_M3u8Settings";
import { _MovSettings, _UnmarshalledMovSettings } from "./_MovSettings";
import { _Mp4Settings, _UnmarshalledMp4Settings } from "./_Mp4Settings";

/**
 * Container specific settings.
 */
export interface _ContainerSettings {
  /**
   * Container for this output. Some containers require a container settings object. If not specified, the default object will be created.
   */
  Container?:
    | "F4V"
    | "ISMV"
    | "M2TS"
    | "M3U8"
    | "CMFC"
    | "MOV"
    | "MP4"
    | "MPD"
    | "MXF"
    | "RAW"
    | string;

  /**
   * Settings for F4v container
   */
  F4vSettings?: _F4vSettings;

  /**
   * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
   */
  M2tsSettings?: _M2tsSettings;

  /**
   * Settings for TS segments in HLS
   */
  M3u8Settings?: _M3u8Settings;

  /**
   * Settings for MOV Container.
   */
  MovSettings?: _MovSettings;

  /**
   * Settings for MP4 container. You can create audio-only AAC outputs with this container.
   */
  Mp4Settings?: _Mp4Settings;
}

export interface _UnmarshalledContainerSettings extends _ContainerSettings {
  /**
   * Settings for F4v container
   */
  F4vSettings?: _UnmarshalledF4vSettings;

  /**
   * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
   */
  M2tsSettings?: _UnmarshalledM2tsSettings;

  /**
   * Settings for TS segments in HLS
   */
  M3u8Settings?: _UnmarshalledM3u8Settings;

  /**
   * Settings for MOV Container.
   */
  MovSettings?: _UnmarshalledMovSettings;

  /**
   * Settings for MP4 container. You can create audio-only AAC outputs with this container.
   */
  Mp4Settings?: _UnmarshalledMp4Settings;
}
