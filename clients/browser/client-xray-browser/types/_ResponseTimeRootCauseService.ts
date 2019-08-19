import {
  _ResponseTimeRootCauseEntity,
  _UnmarshalledResponseTimeRootCauseEntity
} from "./_ResponseTimeRootCauseEntity";

/**
 * <p>A collection of fields identifying the service in a response time warning.</p>
 */
export interface _ResponseTimeRootCauseService {
  /**
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: Array<string> | Iterable<string>;

  /**
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?:
    | Array<_ResponseTimeRootCauseEntity>
    | Iterable<_ResponseTimeRootCauseEntity>;

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

export interface _UnmarshalledResponseTimeRootCauseService
  extends _ResponseTimeRootCauseService {
  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: Array<string>;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: Array<_UnmarshalledResponseTimeRootCauseEntity>;
}
