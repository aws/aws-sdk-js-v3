/**
 * <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <note> <p>The values in the <code>HLSTimestampRange</code> are inclusive. Fragments that begin before the start time but continue past it, or fragments that begin before the end time but continue past it, are included in the session.</p> </note>
 */
export interface _HLSTimestampRange {
  /**
   * <p>The start of the timestamp range for the requested media.</p> <p>If the <code>HLSTimestampRange</code> value is specified, the <code>StartTimestamp</code> value is required.</p> <note> <p>This value is inclusive. Fragments that start before the <code>StartTimestamp</code> and continue past it are included in the session. If <code>FragmentSelectorType</code> is <code>SERVER_TIMESTAMP</code>, the <code>StartTimestamp</code> must be later than the stream head.</p> </note>
   */
  StartTimestamp?: Date | string | number;

  /**
   * <p>The end of the timestamp range for the requested media. This value must be within 3 hours of the specified <code>StartTimestamp</code>, and it must be later than the <code>StartTimestamp</code> value.</p> <p>If <code>FragmentSelectorType</code> for the request is <code>SERVER_TIMESTAMP</code>, this value must be in the past.</p> <p>The <code>EndTimestamp</code> value is required for <code>ON_DEMAND</code> mode, but optional for <code>LIVE_REPLAY</code> mode. If the <code>EndTimestamp</code> is not set for <code>LIVE_REPLAY</code> mode then the session will continue to include newly ingested fragments until the session expires.</p> <note> <p>This value is inclusive. The <code>EndTimestamp</code> is compared to the (starting) timestamp of the fragment. Fragments that start before the <code>EndTimestamp</code> value and continue past it are included in the session.</p> </note>
   */
  EndTimestamp?: Date | string | number;
}

export interface _UnmarshalledHLSTimestampRange extends _HLSTimestampRange {
  /**
   * <p>The start of the timestamp range for the requested media.</p> <p>If the <code>HLSTimestampRange</code> value is specified, the <code>StartTimestamp</code> value is required.</p> <note> <p>This value is inclusive. Fragments that start before the <code>StartTimestamp</code> and continue past it are included in the session. If <code>FragmentSelectorType</code> is <code>SERVER_TIMESTAMP</code>, the <code>StartTimestamp</code> must be later than the stream head.</p> </note>
   */
  StartTimestamp?: Date;

  /**
   * <p>The end of the timestamp range for the requested media. This value must be within 3 hours of the specified <code>StartTimestamp</code>, and it must be later than the <code>StartTimestamp</code> value.</p> <p>If <code>FragmentSelectorType</code> for the request is <code>SERVER_TIMESTAMP</code>, this value must be in the past.</p> <p>The <code>EndTimestamp</code> value is required for <code>ON_DEMAND</code> mode, but optional for <code>LIVE_REPLAY</code> mode. If the <code>EndTimestamp</code> is not set for <code>LIVE_REPLAY</code> mode then the session will continue to include newly ingested fragments until the session expires.</p> <note> <p>This value is inclusive. The <code>EndTimestamp</code> is compared to the (starting) timestamp of the fragment. Fragments that start before the <code>EndTimestamp</code> value and continue past it are included in the session.</p> </note>
   */
  EndTimestamp?: Date;
}
