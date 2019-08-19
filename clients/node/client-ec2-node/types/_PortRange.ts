/**
 * <p>Describes a range of ports.</p>
 */
export interface _PortRange {
  /**
   * <p>The first port in the range.</p>
   */
  From?: number;

  /**
   * <p>The last port in the range.</p>
   */
  To?: number;
}

export type _UnmarshalledPortRange = _PortRange;
