/**
 * <p>Describes the compute type.</p>
 */
export interface _ComputeType {
  /**
   * <p>The compute type.</p>
   */
  Name?:
    | "VALUE"
    | "STANDARD"
    | "PERFORMANCE"
    | "POWER"
    | "GRAPHICS"
    | "POWERPRO"
    | "GRAPHICSPRO"
    | string;
}

export type _UnmarshalledComputeType = _ComputeType;
