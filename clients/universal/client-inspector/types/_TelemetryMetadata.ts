/**
 * <p>The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.</p>
 */
export interface _TelemetryMetadata {
  /**
   * <p>A specific type of behavioral data that is collected by the agent.</p>
   */
  messageType: string;

  /**
   * <p>The count of messages that the agent sends to the Amazon Inspector service.</p>
   */
  count: number;

  /**
   * <p>The data size of messages that the agent sends to the Amazon Inspector service.</p>
   */
  dataSize?: number;
}

export type _UnmarshalledTelemetryMetadata = _TelemetryMetadata;
