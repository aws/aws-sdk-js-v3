/**
 * <p>Settings that determine when a clip begins and how long it lasts.</p>
 */
export interface _TimeSpan {
  /**
   * <p>The place in the input file where you want a clip to start. The format can be either HH:mm:ss.SSS (maximum value: 23:59:59.999; SSS is thousandths of a second) or sssss.SSS (maximum value: 86399.999). If you don't specify a value, Elastic Transcoder starts at the beginning of the input file.</p>
   */
  StartTime?: string;

  /**
   * <p>The duration of the clip. The format can be either HH:mm:ss.SSS (maximum value: 23:59:59.999; SSS is thousandths of a second) or sssss.SSS (maximum value: 86399.999). If you don't specify a value, Elastic Transcoder creates an output file from StartTime to the end of the file.</p> <p>If you specify a value longer than the duration of the input file, Elastic Transcoder transcodes the file and returns a warning message.</p>
   */
  Duration?: string;
}

export type _UnmarshalledTimeSpan = _TimeSpan;
