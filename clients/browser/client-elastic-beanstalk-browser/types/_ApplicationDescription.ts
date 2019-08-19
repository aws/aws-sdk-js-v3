import {
  _ApplicationResourceLifecycleConfig,
  _UnmarshalledApplicationResourceLifecycleConfig
} from "./_ApplicationResourceLifecycleConfig";

/**
 * <p>Describes the properties of an application.</p>
 */
export interface _ApplicationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationArn?: string;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>User-defined description of the application.</p>
   */
  Description?: string;

  /**
   * <p>The date when the application was created.</p>
   */
  DateCreated?: Date | string | number;

  /**
   * <p>The date when the application was last modified.</p>
   */
  DateUpdated?: Date | string | number;

  /**
   * <p>The names of the versions for this application.</p>
   */
  Versions?: Array<string> | Iterable<string>;

  /**
   * <p>The names of the configuration templates associated with this application.</p>
   */
  ConfigurationTemplates?: Array<string> | Iterable<string>;

  /**
   * <p>The lifecycle settings for the application.</p>
   */
  ResourceLifecycleConfig?: _ApplicationResourceLifecycleConfig;
}

export interface _UnmarshalledApplicationDescription
  extends _ApplicationDescription {
  /**
   * <p>The date when the application was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the application was last modified.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The names of the versions for this application.</p>
   */
  Versions?: Array<string>;

  /**
   * <p>The names of the configuration templates associated with this application.</p>
   */
  ConfigurationTemplates?: Array<string>;

  /**
   * <p>The lifecycle settings for the application.</p>
   */
  ResourceLifecycleConfig?: _UnmarshalledApplicationResourceLifecycleConfig;
}
