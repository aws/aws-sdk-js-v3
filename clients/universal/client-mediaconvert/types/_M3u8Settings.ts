/**
 * Settings for TS segments in HLS
 */
export interface _M3u8Settings {
  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
   */
  AudioPids?: Array<number> | Iterable<number>;

  /**
   * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3?: "INSERT" | "NONE" | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PatInterval?: number;

  /**
   * When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: "PCR_EVERY_PES_PACKET" | "CONFIGURED_PCR_PERIOD" | string;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID.
   */
  PcrPid?: number;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream.
   */
  PmtPid?: number;

  /**
   * Packet Identifier (PID) of the private metadata stream in the transport stream.
   */
  PrivateMetadataPid?: number;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNumber?: number;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream.
   */
  Scte35Pid?: number;

  /**
   * For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml).
   */
  Scte35Source?: "PASSTHROUGH" | "NONE" | string;

  /**
   * Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output.
   */
  TimedMetadata?: "PASSTHROUGH" | "NONE" | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream.
   */
  TimedMetadataPid?: number;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream.
   */
  VideoPid?: number;
}

export interface _UnmarshalledM3u8Settings extends _M3u8Settings {
  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
   */
  AudioPids?: Array<number>;
}
