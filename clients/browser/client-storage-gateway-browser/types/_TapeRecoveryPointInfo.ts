/**
 * <p>Describes a recovery point.</p>
 */
export interface _TapeRecoveryPointInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The time when the point-in-time view of the virtual tape was replicated for later recovery.</p> <p>The default time stamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
   */
  TapeRecoveryPointTime?: Date | string | number;

  /**
   * <p>The size, in bytes, of the virtual tapes to recover.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The status of the virtual tapes.</p>
   */
  TapeStatus?: string;
}

export interface _UnmarshalledTapeRecoveryPointInfo
  extends _TapeRecoveryPointInfo {
  /**
   * <p>The time when the point-in-time view of the virtual tape was replicated for later recovery.</p> <p>The default time stamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
   */
  TapeRecoveryPointTime?: Date;
}
