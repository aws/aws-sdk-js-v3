/**
 * <p>Endpoint for mobile app and device.</p>
 */
export interface _Endpoint {
  /**
   * <p>EndpointArn for mobile app and device.</p>
   */
  EndpointArn?: string;

  /**
   * <p>Attributes for endpoint.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledEndpoint extends _Endpoint {
  /**
   * <p>Attributes for endpoint.</p>
   */
  Attributes?: { [key: string]: string };
}
