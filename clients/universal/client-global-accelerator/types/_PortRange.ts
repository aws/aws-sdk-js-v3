/**
 * <p>A complex type for a range of ports for a listener.</p>
 */
export interface _PortRange {
  /**
   * <p>The first port in the range of ports, inclusive.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port in the range of ports, inclusive.</p>
   */
  ToPort?: number;
}

export type _UnmarshalledPortRange = _PortRange;
