/**
 * Scte35 Time Signal Apos
 */
export interface _Scte35TimeSignalApos {
  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: "FOLLOW" | "IGNORE" | string;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: "FOLLOW" | "IGNORE" | string;
}

export type _UnmarshalledScte35TimeSignalApos = _Scte35TimeSignalApos;
