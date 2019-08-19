/**
 * Settings information for the .m3u8 container
 */
export interface _M3u8Settings {
  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.
   */
  AudioPids?: string;

  /**
   * This parameter is unused and deprecated.
   */
  EcmPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PatInterval?: number;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: "CONFIGURED_PCR_PERIOD" | "PCR_EVERY_PES_PACKET" | string;

  /**
   * Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.
   */
  PcrPeriod?: number;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.
   */
  PcrPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PmtInterval?: number;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  PmtPid?: string;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNum?: number;

  /**
   * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
   */
  Scte35Behavior?: "NO_PASSTHROUGH" | "PASSTHROUGH" | string;

  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  Scte35Pid?: string;

  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   */
  TimedMetadataBehavior?: "NO_PASSTHROUGH" | "PASSTHROUGH" | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  TimedMetadataPid?: string;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  VideoPid?: string;
}

export type _UnmarshalledM3u8Settings = _M3u8Settings;
