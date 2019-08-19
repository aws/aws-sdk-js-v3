import {
  _FaultRootCauseEntity,
  _UnmarshalledFaultRootCauseEntity
} from "./_FaultRootCauseEntity";

/**
 * <p>A collection of fields identifying the services in a trace summary fault.</p>
 */
export interface _FaultRootCauseService {
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
  EntityPath?: Array<_FaultRootCauseEntity> | Iterable<_FaultRootCauseEntity>;

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

export interface _UnmarshalledFaultRootCauseService
  extends _FaultRootCauseService {
  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: Array<string>;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: Array<_UnmarshalledFaultRootCauseEntity>;
}
