import {
  _ThrottleSettings,
  _UnmarshalledThrottleSettings
} from "./_ThrottleSettings";

/**
 * <p>API stage name of the associated API stage in a usage plan.</p>
 */
export interface _ApiStage {
  /**
   * <p>API Id of the associated API stage in a usage plan.</p>
   */
  apiId?: string;

  /**
   * <p>API stage name of the associated API stage in a usage plan.</p>
   */
  stage?: string;

  /**
   * <p>Map containing method level throttling information for API stage in a usage plan.</p>
   */
  throttle?:
    | { [key: string]: _ThrottleSettings }
    | Iterable<[string, _ThrottleSettings]>;
}

export interface _UnmarshalledApiStage extends _ApiStage {
  /**
   * <p>Map containing method level throttling information for API stage in a usage plan.</p>
   */
  throttle?: { [key: string]: _UnmarshalledThrottleSettings };
}
