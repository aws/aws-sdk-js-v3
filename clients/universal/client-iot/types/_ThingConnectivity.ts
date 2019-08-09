/**
 * <p>The connectivity status of the thing.</p>
 */
export interface _ThingConnectivity {
  /**
   * <p>True if the thing is connected to the AWS IoT service; false if it is not connected.</p>
   */
  connected?: boolean;

  /**
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the thing has been disconnected for more than a few weeks, the time value might be missing.</p>
   */
  timestamp?: number;
}

export type _UnmarshalledThingConnectivity = _ThingConnectivity;
