import { _Session, _UnmarshalledSession } from "./_Session";

/**
 * <p>Specifies information about an event that reports data to Amazon Pinpoint.</p>
 */
export interface _Event {
  /**
   * <p>The package name of the app that's recording the event.</p>
   */
  AppPackageName?: string;

  /**
   * <p>The title of the app that's recording the event.</p>
   */
  AppTitle?: string;

  /**
   * <p>The version number of the app that's recording the event.</p>
   */
  AppVersionCode?: string;

  /**
   * <p>One or more custom attributes that are associated with the event.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The version of the SDK that's running on the client device.</p>
   */
  ClientSdkVersion?: string;

  /**
   * <p>The name of the event.</p>
   */
  EventType: string;

  /**
   * <p>One or more custom metrics that are associated with the event.</p>
   */
  Metrics?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * <p>The name of the SDK that's being used to record the event.</p>
   */
  SdkName?: string;

  /**
   * <p>Information about the session in which the event occurred.</p>
   */
  Session?: _Session;

  /**
   * <p>The date and time, in ISO 8601 format, when the event occurred.</p>
   */
  Timestamp: string;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>One or more custom attributes that are associated with the event.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>One or more custom metrics that are associated with the event.</p>
   */
  Metrics?: { [key: string]: number };

  /**
   * <p>Information about the session in which the event occurred.</p>
   */
  Session?: _UnmarshalledSession;
}
