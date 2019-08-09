/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 */
export interface _FpgaImageState {
  /**
   * <p>The state. The following are the possible values:</p> <ul> <li> <p> <code>pending</code> - AFI bitstream generation is in progress.</p> </li> <li> <p> <code>available</code> - The AFI is available for use.</p> </li> <li> <p> <code>failed</code> - AFI bitstream generation failed.</p> </li> <li> <p> <code>unavailable</code> - The AFI is no longer available for use.</p> </li> </ul>
   */
  Code?: "pending" | "failed" | "available" | "unavailable" | string;

  /**
   * <p>If the state is <code>failed</code>, this is the error message.</p>
   */
  Message?: string;
}

export type _UnmarshalledFpgaImageState = _FpgaImageState;
