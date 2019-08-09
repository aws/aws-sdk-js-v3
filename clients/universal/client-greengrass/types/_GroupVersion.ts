/**
 * Information about a group version.
 */
export interface _GroupVersion {
  /**
   * The ARN of the connector definition version for this group.
   */
  ConnectorDefinitionVersionArn?: string;

  /**
   * The ARN of the core definition version for this group.
   */
  CoreDefinitionVersionArn?: string;

  /**
   * The ARN of the device definition version for this group.
   */
  DeviceDefinitionVersionArn?: string;

  /**
   * The ARN of the function definition version for this group.
   */
  FunctionDefinitionVersionArn?: string;

  /**
   * The ARN of the logger definition version for this group.
   */
  LoggerDefinitionVersionArn?: string;

  /**
   * The ARN of the resource definition version for this group.
   */
  ResourceDefinitionVersionArn?: string;

  /**
   * The ARN of the subscription definition version for this group.
   */
  SubscriptionDefinitionVersionArn?: string;
}

export type _UnmarshalledGroupVersion = _GroupVersion;
