import {
  _LogPublishingOption,
  _UnmarshalledLogPublishingOption
} from "./_LogPublishingOption";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 */
export interface _LogPublishingOptionsStatus {
  /**
   * <p>The log publishing options configured for the Elasticsearch domain.</p>
   */
  Options?:
    | {
        [key in
          | "INDEX_SLOW_LOGS"
          | "SEARCH_SLOW_LOGS"
          | "ES_APPLICATION_LOGS"
          | string]: _LogPublishingOption
      }
    | Iterable<
        [

            | "INDEX_SLOW_LOGS"
            | "SEARCH_SLOW_LOGS"
            | "ES_APPLICATION_LOGS"
            | string,
          _LogPublishingOption
        ]
      >;

  /**
   * <p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status?: _OptionStatus;
}

export interface _UnmarshalledLogPublishingOptionsStatus
  extends _LogPublishingOptionsStatus {
  /**
   * <p>The log publishing options configured for the Elasticsearch domain.</p>
   */
  Options?: {
    [key in
      | "INDEX_SLOW_LOGS"
      | "SEARCH_SLOW_LOGS"
      | "ES_APPLICATION_LOGS"
      | string]: _UnmarshalledLogPublishingOption
  };

  /**
   * <p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status?: _UnmarshalledOptionStatus;
}
