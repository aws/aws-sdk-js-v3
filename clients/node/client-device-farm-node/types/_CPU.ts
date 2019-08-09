/**
 * <p>Represents the amount of CPU that an app is using on a physical device.</p> <p>Note that this does not represent system-wide CPU usage.</p>
 */
export interface _CPU {
  /**
   * <p>The CPU's frequency.</p>
   */
  frequency?: string;

  /**
   * <p>The CPU's architecture, for example x86 or ARM.</p>
   */
  architecture?: string;

  /**
   * <p>The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2 GHz CPU is expressed as 1200000000.</p>
   */
  clock?: number;
}

export type _UnmarshalledCPU = _CPU;
