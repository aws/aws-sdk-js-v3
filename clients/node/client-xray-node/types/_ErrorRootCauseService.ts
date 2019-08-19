import {
  _ErrorRootCauseEntity,
  _UnmarshalledErrorRootCauseEntity
} from "./_ErrorRootCauseEntity";

/**
 * <p>A collection of fields identifying the services in a trace summary error.</p>
 */
export interface _ErrorRootCauseService {
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
  EntityPath?: Array<_ErrorRootCauseEntity> | Iterable<_ErrorRootCauseEntity>;

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

export interface _UnmarshalledErrorRootCauseService
  extends _ErrorRootCauseService {
  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: Array<string>;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: Array<_UnmarshalledErrorRootCauseEntity>;
}
