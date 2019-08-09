import {
  _CognitoOptions,
  _UnmarshalledCognitoOptions
} from "./_CognitoOptions";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>Status of the Cognito options for the specified Elasticsearch domain.</p>
 */
export interface _CognitoOptionsStatus {
  /**
   * <p>Specifies the Cognito options for the specified Elasticsearch domain.</p>
   */
  Options: _CognitoOptions;

  /**
   * <p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledCognitoOptionsStatus
  extends _CognitoOptionsStatus {
  /**
   * <p>Specifies the Cognito options for the specified Elasticsearch domain.</p>
   */
  Options: _UnmarshalledCognitoOptions;

  /**
   * <p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
