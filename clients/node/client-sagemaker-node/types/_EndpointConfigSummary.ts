/**
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface _EndpointConfigSummary {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | string | number;
}

export interface _UnmarshalledEndpointConfigSummary
  extends _EndpointConfigSummary {
  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date;
}
