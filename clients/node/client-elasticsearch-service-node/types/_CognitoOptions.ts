/**
 * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
 */
export interface _CognitoOptions {
  /**
   * <p>Specifies the option to enable Cognito for Kibana authentication.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies the Cognito user pool ID for Kibana authentication.</p>
   */
  UserPoolId?: string;

  /**
   * <p>Specifies the Cognito identity pool ID for Kibana authentication.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.</p>
   */
  RoleArn?: string;
}

export type _UnmarshalledCognitoOptions = _CognitoOptions;
