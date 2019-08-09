/**
 * <p>The metadata for a service, such as the service code and available attribute names.</p>
 */
export interface _Service {
  /**
   * <p>The code for the AWS service.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The attributes that are available for this service.</p>
   */
  AttributeNames?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledService extends _Service {
  /**
   * <p>The attributes that are available for this service.</p>
   */
  AttributeNames?: Array<string>;
}
