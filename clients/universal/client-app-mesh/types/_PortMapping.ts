/**
 * <p>An object representing a virtual node or virtual router listener port mapping.</p>
 */
export interface _PortMapping {
  /**
   * <p>The port used for the port mapping.</p>
   */
  port: number;

  /**
   * <p>The protocol used for the port mapping.</p>
   */
  protocol: "http" | "tcp" | string;
}

export type _UnmarshalledPortMapping = _PortMapping;
