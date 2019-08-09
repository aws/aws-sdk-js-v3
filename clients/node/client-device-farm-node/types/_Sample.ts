/**
 * <p>Represents a sample of performance data.</p>
 */
export interface _Sample {
  /**
   * <p>The sample's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The sample's type.</p> <p>Must be one of the following values:</p> <ul> <li> <p>CPU: A CPU sample type. This is expressed as the app processing CPU time (including child processes) as reported by process, as a percentage.</p> </li> <li> <p>MEMORY: A memory usage sample type. This is expressed as the total proportional set size of an app process, in kilobytes.</p> </li> <li> <p>NATIVE_AVG_DRAWTIME</p> </li> <li> <p>NATIVE_FPS</p> </li> <li> <p>NATIVE_FRAMES</p> </li> <li> <p>NATIVE_MAX_DRAWTIME</p> </li> <li> <p>NATIVE_MIN_DRAWTIME</p> </li> <li> <p>OPENGL_AVG_DRAWTIME</p> </li> <li> <p>OPENGL_FPS</p> </li> <li> <p>OPENGL_FRAMES</p> </li> <li> <p>OPENGL_MAX_DRAWTIME</p> </li> <li> <p>OPENGL_MIN_DRAWTIME</p> </li> <li> <p>RX</p> </li> <li> <p>RX_RATE: The total number of bytes per second (TCP and UDP) that are sent, by app process.</p> </li> <li> <p>THREADS: A threads sample type. This is expressed as the total number of threads per app process.</p> </li> <li> <p>TX</p> </li> <li> <p>TX_RATE: The total number of bytes per second (TCP and UDP) that are received, by app process.</p> </li> </ul>
   */
  type?:
    | "CPU"
    | "MEMORY"
    | "THREADS"
    | "RX_RATE"
    | "TX_RATE"
    | "RX"
    | "TX"
    | "NATIVE_FRAMES"
    | "NATIVE_FPS"
    | "NATIVE_MIN_DRAWTIME"
    | "NATIVE_AVG_DRAWTIME"
    | "NATIVE_MAX_DRAWTIME"
    | "OPENGL_FRAMES"
    | "OPENGL_FPS"
    | "OPENGL_MIN_DRAWTIME"
    | "OPENGL_AVG_DRAWTIME"
    | "OPENGL_MAX_DRAWTIME"
    | string;

  /**
   * <p>The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the sample's file.</p>
   */
  url?: string;
}

export type _UnmarshalledSample = _Sample;
