/**
 * <p>Platform application object.</p>
 */
export interface _PlatformApplication {
  /**
   * <p>PlatformApplicationArn for platform application object.</p>
   */
  PlatformApplicationArn?: string;

  /**
   * <p>Attributes for platform application object.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledPlatformApplication extends _PlatformApplication {
  /**
   * <p>Attributes for platform application object.</p>
   */
  Attributes?: { [key: string]: string };
}
