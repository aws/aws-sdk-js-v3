// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ConfigServiceServiceException as __BaseException } from "./ConfigServiceServiceException";

/**
 * For [PutServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html), you cannot create a service-linked recorder because a service-linked recorder already exists for the specified service.
 *
 * For [PutThirdPartyServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutThirdPartyServiceLinkedConfigurationRecorder.html), you cannot create a service-linked recorder because the specified service principal does not support multiple configuration recorders and one already exists.
 *
 * For [PutThirdPartyServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutThirdPartyServiceLinkedConfigurationRecorder.html), another in-progress operation is currently referencing the same connector or service principal. Please try again later.
 *
 * For [PutConnector](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConnector.html), you cannot create a connector because a connector already exists for the specified connector configuration.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), you cannot delete the service-linked recorder because it is currently in use by the linked Amazon Web Services service.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), another in-progress operation is currently referencing the same connector. Please try again later.
 *
 * For [DeleteConnector](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConnector.html), another in-progress operation is currently referencing the connector. Please try again later.
 *
 * For [DeleteDeliveryChannel](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html), you cannot delete the specified delivery channel because the customer managed configuration recorder is running. Use the [StopConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html) operation to stop the customer managed configuration recorder.
 *
 * For [AssociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html) and [DisassociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html), one of the following errors:
 *
 * - For service-linked configuration recorders, the configuration recorder is not in use by the service. No association or dissociation of resource types is permitted.
 * - For service-linked configuration recorders, your requested change to the configuration recorder has been denied by its linked Amazon Web Services service.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * You have specified a configuration recorder that does not exist.
 *
 * @public
 */
export class NoSuchConfigurationRecorderException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchConfigurationRecorderException";
  readonly name = "NoSuchConfigurationRecorderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigurationRecorderException, __BaseException>) {
    super({
      name: "NoSuchConfigurationRecorderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigurationRecorderException.prototype);
  }
}

/**
 * The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.
 *
 * For [PutStoredQuery](https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html), one of the following errors:
 *
 * - There are missing required fields.
 * - The input value fails the validation.
 * - You are trying to create more than 300 queries.
 *
 * For [DescribeConfigurationRecorders](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html) and [DescribeConfigurationRecorderStatus](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html), one of the following errors:
 *
 * - You have specified more than one configuration recorder.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * For [AssociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html) and [DisassociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html), one of the following errors:
 *
 * - Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.
 * - One or more of the specified resource types are already associated or disassociated with the configuration recorder.
 * - For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), one of the following errors:
 *
 * - You have provided both `Arn` and `ServicePrincipal`. Only one of `Arn` or `ServicePrincipal` can be specified.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * You have specified a configuration aggregator that does not exist.
 *
 * @public
 */
export class NoSuchConfigurationAggregatorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchConfigurationAggregatorException";
  readonly name = "NoSuchConfigurationAggregatorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigurationAggregatorException, __BaseException>) {
    super({
      name: "NoSuchConfigurationAggregatorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigurationAggregatorException.prototype);
  }
}

/**
 * There are no customer managed configuration recorders available to record your resources. Use the [PutConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html) operation to create the customer managed configuration recorder.
 *
 * @public
 */
export class NoAvailableConfigurationRecorderException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoAvailableConfigurationRecorderException";
  readonly name = "NoAvailableConfigurationRecorderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableConfigurationRecorderException, __BaseException>) {
    super({
      name: "NoAvailableConfigurationRecorderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableConfigurationRecorderException.prototype);
  }
}

/**
 * You have specified a template that is not valid or supported.
 *
 * @public
 */
export class ConformancePackTemplateValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#ConformancePackTemplateValidationException";
  readonly name = "ConformancePackTemplateValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConformancePackTemplateValidationException, __BaseException>) {
    super({
      name: "ConformancePackTemplateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConformancePackTemplateValidationException.prototype);
  }
}

/**
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidParameterValueException";
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.
 *
 * @public
 */
export class NoSuchConfigRuleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchConfigRuleException";
  readonly name = "NoSuchConfigRuleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigRuleException, __BaseException>) {
    super({
      name: "NoSuchConfigRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigRuleException.prototype);
  }
}

/**
 * You see this exception in the following cases:
 *
 * - For DeleteConfigRule, Config is deleting this rule. Try your request again later.
 * - For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.
 * - For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.
 * - For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.
 * - For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.
 * - For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 * - For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * The requested operation is not valid.
 *
 * For [PutConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html), you will see this exception because you cannot use this operation to create a service-linked configuration recorder. Use the [PutServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html) operation to create a service-linked configuration recorder.
 *
 * For [DeleteConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html), you will see this exception because you cannot use this operation to delete a service-linked configuration recorder. Use the [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html) operation to delete a service-linked configuration recorder.
 *
 * For [StartConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html) and [StopConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html), you will see this exception because these operations do not affect service-linked configuration recorders. Service-linked configuration recorders are always recording. To stop recording, you must delete the service-linked configuration recorder. Use the [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html) operation to delete a service-linked configuration recorder.
 *
 * @public
 */
export class UnmodifiableEntityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#UnmodifiableEntityException";
  readonly name = "UnmodifiableEntityException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnmodifiableEntityException, __BaseException>) {
    super({
      name: "UnmodifiableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnmodifiableEntityException.prototype);
  }
}

/**
 * You specified one or more conformance packs that do not exist.
 *
 * @public
 */
export class NoSuchConformancePackException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchConformancePackException";
  readonly name = "NoSuchConformancePackException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConformancePackException, __BaseException>) {
    super({
      name: "NoSuchConformancePackException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConformancePackException.prototype);
  }
}

/**
 * You have specified a resource that does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * You cannot delete the delivery channel you specified because the customer managed configuration recorder is running.
 *
 * @public
 */
export class LastDeliveryChannelDeleteFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#LastDeliveryChannelDeleteFailedException";
  readonly name = "LastDeliveryChannelDeleteFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LastDeliveryChannelDeleteFailedException, __BaseException>) {
    super({
      name: "LastDeliveryChannelDeleteFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LastDeliveryChannelDeleteFailedException.prototype);
  }
}

/**
 * You have specified a delivery channel that does not exist.
 *
 * @public
 */
export class NoSuchDeliveryChannelException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchDeliveryChannelException";
  readonly name = "NoSuchDeliveryChannelException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchDeliveryChannelException, __BaseException>) {
    super({
      name: "NoSuchDeliveryChannelException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchDeliveryChannelException.prototype);
  }
}

/**
 * The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.
 *
 * @public
 */
export class NoSuchOrganizationConfigRuleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchOrganizationConfigRuleException";
  readonly name = "NoSuchOrganizationConfigRuleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOrganizationConfigRuleException, __BaseException>) {
    super({
      name: "NoSuchOrganizationConfigRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOrganizationConfigRuleException.prototype);
  }
}

/**
 * For `PutConfigurationAggregator` API, you can see this exception for the following reasons:
 *
 * - No permission to call `EnableAWSServiceAccess` API
 * - The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - You are not a registered delegated administrator for Config with permissions to call `ListDelegatedAdministrators` API. Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.
 *
 * For all `OrganizationConfigRule` and `OrganizationConformancePack` APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.
 *
 * @public
 */
export class OrganizationAccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#OrganizationAccessDeniedException";
  readonly name = "OrganizationAccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationAccessDeniedException, __BaseException>) {
    super({
      name: "OrganizationAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationAccessDeniedException.prototype);
  }
}

/**
 * Config organization conformance pack that you passed in the filter does not exist.
 *
 * For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.
 *
 * @public
 */
export class NoSuchOrganizationConformancePackException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchOrganizationConformancePackException";
  readonly name = "NoSuchOrganizationConformancePackException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOrganizationConformancePackException, __BaseException>) {
    super({
      name: "NoSuchOrganizationConformancePackException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOrganizationConformancePackException.prototype);
  }
}

/**
 * Indicates one of the following errors:
 *
 * - For [PutConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html), the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.
 * - For [PutConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html), the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.
 * - For [PutOrganizationConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html), organization Config rule cannot be created because you do not have permissions to call IAM `GetRole` action or create a service-linked role.
 * - For [PutConformancePack](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html) and [PutOrganizationConformancePack](https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html), a conformance pack cannot be created because you do not have the following permissions:
 *
 *   - You do not have permission to call IAM `GetRole` action or create a service-linked role.
 *   - You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.
 * - For [PutServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html), a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM `CreateServiceLinkedRole`.
 * - For [PutConnector](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConnector.html), a connector cannot be created because you do not have the following permissions: IAM `CreateServiceLinkedRole`.
 *
 * @public
 */
export class InsufficientPermissionsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InsufficientPermissionsException";
  readonly name = "InsufficientPermissionsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientPermissionsException, __BaseException>) {
    super({
      name: "InsufficientPermissionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientPermissionsException.prototype);
  }
}

/**
 * You specified an Config rule without a remediation configuration.
 *
 * @public
 */
export class NoSuchRemediationConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchRemediationConfigurationException";
  readonly name = "NoSuchRemediationConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRemediationConfigurationException, __BaseException>) {
    super({
      name: "NoSuchRemediationConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRemediationConfigurationException.prototype);
  }
}

/**
 * Remediation action is in progress. You can either cancel execution in Amazon Web Services Systems Manager or wait and try again later.
 *
 * @public
 */
export class RemediationInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#RemediationInProgressException";
  readonly name = "RemediationInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RemediationInProgressException, __BaseException>) {
    super({
      name: "RemediationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RemediationInProgressException.prototype);
  }
}

/**
 * You tried to delete a remediation exception that does not exist.
 *
 * @public
 */
export class NoSuchRemediationExceptionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchRemediationExceptionException";
  readonly name = "NoSuchRemediationExceptionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRemediationExceptionException, __BaseException>) {
    super({
      name: "NoSuchRemediationExceptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRemediationExceptionException.prototype);
  }
}

/**
 * There is no configuration recorder running.
 *
 * @public
 */
export class NoRunningConfigurationRecorderException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoRunningConfigurationRecorderException";
  readonly name = "NoRunningConfigurationRecorderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoRunningConfigurationRecorderException, __BaseException>) {
    super({
      name: "NoRunningConfigurationRecorderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoRunningConfigurationRecorderException.prototype);
  }
}

/**
 * You have specified a retention configuration that does not exist.
 *
 * @public
 */
export class NoSuchRetentionConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchRetentionConfigurationException";
  readonly name = "NoSuchRetentionConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRetentionConfigurationException, __BaseException>) {
    super({
      name: "NoSuchRetentionConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRetentionConfigurationException.prototype);
  }
}

/**
 * The specified limit is outside the allowable range.
 *
 * @public
 */
export class InvalidLimitException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidLimitException";
  readonly name = "InvalidLimitException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLimitException, __BaseException>) {
    super({
      name: "InvalidLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLimitException.prototype);
  }
}

/**
 * The specified next token is not valid. Specify the `nextToken` string that was returned in the previous response to get the next page of results.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidNextTokenException";
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * Config rule that you passed in the filter does not exist.
 *
 * @public
 */
export class NoSuchConfigRuleInConformancePackException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchConfigRuleInConformancePackException";
  readonly name = "NoSuchConfigRuleInConformancePackException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchConfigRuleInConformancePackException, __BaseException>) {
    super({
      name: "NoSuchConfigRuleInConformancePackException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchConfigRuleInConformancePackException.prototype);
  }
}

/**
 * The configuration item size is outside the allowable range.
 *
 * @public
 */
export class OversizedConfigurationItemException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#OversizedConfigurationItemException";
  readonly name = "OversizedConfigurationItemException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OversizedConfigurationItemException, __BaseException>) {
    super({
      name: "OversizedConfigurationItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OversizedConfigurationItemException.prototype);
  }
}

/**
 * You have specified a resource that is either unknown or has not been discovered.
 *
 * @public
 */
export class ResourceNotDiscoveredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#ResourceNotDiscoveredException";
  readonly name = "ResourceNotDiscoveredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotDiscoveredException, __BaseException>) {
    super({
      name: "ResourceNotDiscoveredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotDiscoveredException.prototype);
  }
}

/**
 * The specified time range is not valid. The earlier time is not chronologically before the later time.
 *
 * @public
 */
export class InvalidTimeRangeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidTimeRangeException";
  readonly name = "InvalidTimeRangeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTimeRangeException, __BaseException>) {
    super({
      name: "InvalidTimeRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTimeRangeException.prototype);
  }
}

/**
 * Using the same client token with one or more different parameters. Specify a new client token with the parameter changes and try again.
 *
 * @public
 */
export class IdempotentParameterMismatch extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#IdempotentParameterMismatch";
  readonly name = "IdempotentParameterMismatch" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatch, __BaseException>) {
    super({
      name: "IdempotentParameterMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatch.prototype);
  }
}

/**
 * Your Amazon S3 bucket policy does not allow Config to write to it.
 *
 * @public
 */
export class InsufficientDeliveryPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InsufficientDeliveryPolicyException";
  readonly name = "InsufficientDeliveryPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientDeliveryPolicyException, __BaseException>) {
    super({
      name: "InsufficientDeliveryPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientDeliveryPolicyException.prototype);
  }
}

/**
 * The configuration recorder name is not valid. The prefix "`AWSConfigurationRecorderFor`" is reserved for service-linked configuration recorders.
 *
 * @public
 */
export class InvalidConfigurationRecorderNameException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidConfigurationRecorderNameException";
  readonly name = "InvalidConfigurationRecorderNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationRecorderNameException, __BaseException>) {
    super({
      name: "InvalidConfigurationRecorderNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationRecorderNameException.prototype);
  }
}

/**
 * The specified delivery channel name is not valid.
 *
 * @public
 */
export class InvalidDeliveryChannelNameException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidDeliveryChannelNameException";
  readonly name = "InvalidDeliveryChannelNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeliveryChannelNameException, __BaseException>) {
    super({
      name: "InvalidDeliveryChannelNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeliveryChannelNameException.prototype);
  }
}

/**
 * The syntax of the query is incorrect.
 *
 * @public
 */
export class InvalidExpressionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidExpressionException";
  readonly name = "InvalidExpressionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExpressionException, __BaseException>) {
    super({
      name: "InvalidExpressionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExpressionException.prototype);
  }
}

/**
 * One of the following errors:
 *
 * - You have provided a combination of parameter values that is not valid. For example:
 *
 *   - Setting the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`, but providing a non-empty list for the `resourceTypes`field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html).
 *   - Setting the `allSupported` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html) to `true`, but also setting the `useOnly` field of [RecordingStrategy](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES`.
 * - Every parameter is either null, false, or empty.
 * - You have reached the limit of the number of resource types you can provide for the recording group.
 * - You have provided resource types or a recording strategy that are not valid.
 *
 * @public
 */
export class InvalidRecordingGroupException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidRecordingGroupException";
  readonly name = "InvalidRecordingGroupException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRecordingGroupException, __BaseException>) {
    super({
      name: "InvalidRecordingGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRecordingGroupException.prototype);
  }
}

/**
 * The specified `ResultToken` is not valid.
 *
 * @public
 */
export class InvalidResultTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidResultTokenException";
  readonly name = "InvalidResultTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResultTokenException, __BaseException>) {
    super({
      name: "InvalidResultTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResultTokenException.prototype);
  }
}

/**
 * You have provided a null or empty Amazon Resource Name (ARN) for the IAM role assumed by Config and used by the customer managed configuration recorder.
 *
 * @public
 */
export class InvalidRoleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidRoleException";
  readonly name = "InvalidRoleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRoleException, __BaseException>) {
    super({
      name: "InvalidRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRoleException.prototype);
  }
}

/**
 * The specified Amazon S3 key prefix is not valid.
 *
 * @public
 */
export class InvalidS3KeyPrefixException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidS3KeyPrefixException";
  readonly name = "InvalidS3KeyPrefixException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KeyPrefixException, __BaseException>) {
    super({
      name: "InvalidS3KeyPrefixException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KeyPrefixException.prototype);
  }
}

/**
 * The specified Amazon KMS Key ARN is not valid.
 *
 * @public
 */
export class InvalidS3KmsKeyArnException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidS3KmsKeyArnException";
  readonly name = "InvalidS3KmsKeyArnException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KmsKeyArnException, __BaseException>) {
    super({
      name: "InvalidS3KmsKeyArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KmsKeyArnException.prototype);
  }
}

/**
 * The specified Amazon SNS topic does not exist.
 *
 * @public
 */
export class InvalidSNSTopicARNException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#InvalidSNSTopicARNException";
  readonly name = "InvalidSNSTopicARNException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSNSTopicARNException, __BaseException>) {
    super({
      name: "InvalidSNSTopicARNException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSNSTopicARNException.prototype);
  }
}

/**
 * For `PutServiceLinkedConfigurationRecorder` API, this exception is thrown if the number of service-linked roles in the account exceeds the limit.
 *
 * For `StartConfigRulesEvaluation` API, this exception is thrown if an evaluation is in progress or if you call the StartConfigRulesEvaluation API more than once per minute.
 *
 * For `PutConfigurationAggregator` API, this exception is thrown if the number of accounts and aggregators exceeds the limit.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * You have reached the limit of active custom resource types in your account. There is a limit of 100,000. Delete unused resources using [DeleteResourceConfig](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html) .
 *
 * @public
 */
export class MaxActiveResourcesExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxActiveResourcesExceededException";
  readonly name = "MaxActiveResourcesExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxActiveResourcesExceededException, __BaseException>) {
    super({
      name: "MaxActiveResourcesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxActiveResourcesExceededException.prototype);
  }
}

/**
 * Failed to add the Config rule because the account already contains the maximum number of 1000 rules. Consider deleting any deactivated rules before you add new rules.
 *
 * @public
 */
export class MaxNumberOfConfigRulesExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfConfigRulesExceededException";
  readonly name = "MaxNumberOfConfigRulesExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfConfigRulesExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfConfigRulesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfConfigRulesExceededException.prototype);
  }
}

/**
 * You have reached the limit of the number of configuration recorders you can create.
 *
 * @public
 */
export class MaxNumberOfConfigurationRecordersExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfConfigurationRecordersExceededException";
  readonly name = "MaxNumberOfConfigurationRecordersExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfConfigurationRecordersExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfConfigurationRecordersExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfConfigurationRecordersExceededException.prototype);
  }
}

/**
 * You have reached the limit of the number of conformance packs you can create in an account. For more information, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * @public
 */
export class MaxNumberOfConformancePacksExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfConformancePacksExceededException";
  readonly name = "MaxNumberOfConformancePacksExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfConformancePacksExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfConformancePacksExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfConformancePacksExceededException.prototype);
  }
}

/**
 * You have reached the limit of the number of connectors in your account.
 *
 * @public
 */
export class MaxNumberOfConnectorsExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfConnectorsExceededException";
  readonly name = "MaxNumberOfConnectorsExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfConnectorsExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfConnectorsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfConnectorsExceededException.prototype);
  }
}

/**
 * You have reached the limit of the number of delivery channels you can create.
 *
 * @public
 */
export class MaxNumberOfDeliveryChannelsExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfDeliveryChannelsExceededException";
  readonly name = "MaxNumberOfDeliveryChannelsExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfDeliveryChannelsExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfDeliveryChannelsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfDeliveryChannelsExceededException.prototype);
  }
}

/**
 * You have reached the limit of the number of organization Config rules you can create. For more information, see see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * @public
 */
export class MaxNumberOfOrganizationConfigRulesExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfOrganizationConfigRulesExceededException";
  readonly name = "MaxNumberOfOrganizationConfigRulesExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfOrganizationConfigRulesExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfOrganizationConfigRulesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfOrganizationConfigRulesExceededException.prototype);
  }
}

/**
 * You have reached the limit of the number of organization conformance packs you can create in an account. For more information, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * @public
 */
export class MaxNumberOfOrganizationConformancePacksExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfOrganizationConformancePacksExceededException";
  readonly name = "MaxNumberOfOrganizationConformancePacksExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfOrganizationConformancePacksExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfOrganizationConformancePacksExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfOrganizationConformancePacksExceededException.prototype);
  }
}

/**
 * Failed to add the retention configuration because a retention configuration with that name already exists.
 *
 * @public
 */
export class MaxNumberOfRetentionConfigurationsExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#MaxNumberOfRetentionConfigurationsExceededException";
  readonly name = "MaxNumberOfRetentionConfigurationsExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxNumberOfRetentionConfigurationsExceededException, __BaseException>) {
    super({
      name: "MaxNumberOfRetentionConfigurationsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxNumberOfRetentionConfigurationsExceededException.prototype);
  }
}

/**
 * There is no delivery channel available to record configurations.
 *
 * @public
 */
export class NoAvailableDeliveryChannelException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoAvailableDeliveryChannelException";
  readonly name = "NoAvailableDeliveryChannelException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableDeliveryChannelException, __BaseException>) {
    super({
      name: "NoAvailableDeliveryChannelException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableDeliveryChannelException.prototype);
  }
}

/**
 * Organization is no longer available.
 *
 * @public
 */
export class NoAvailableOrganizationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoAvailableOrganizationException";
  readonly name = "NoAvailableOrganizationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableOrganizationException, __BaseException>) {
    super({
      name: "NoAvailableOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableOrganizationException.prototype);
  }
}

/**
 * The specified Amazon S3 bucket does not exist.
 *
 * @public
 */
export class NoSuchBucketException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#NoSuchBucketException";
  readonly name = "NoSuchBucketException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchBucketException, __BaseException>) {
    super({
      name: "NoSuchBucketException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchBucketException.prototype);
  }
}

/**
 * Config resource cannot be created because your organization does not have all features enabled.
 *
 * @public
 */
export class OrganizationAllFeaturesNotEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#OrganizationAllFeaturesNotEnabledException";
  readonly name = "OrganizationAllFeaturesNotEnabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationAllFeaturesNotEnabledException, __BaseException>) {
    super({
      name: "OrganizationAllFeaturesNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationAllFeaturesNotEnabledException.prototype);
  }
}

/**
 * You have specified a template that is not valid or supported.
 *
 * @public
 */
export class OrganizationConformancePackTemplateValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#OrganizationConformancePackTemplateValidationException";
  readonly name = "OrganizationConformancePackTemplateValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationConformancePackTemplateValidationException, __BaseException>) {
    super({
      name: "OrganizationConformancePackTemplateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationConformancePackTemplateValidationException.prototype);
  }
}

/**
 * Two users are trying to modify the same query at the same time. Wait for a moment and try again.
 *
 * @public
 */
export class ResourceConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#ResourceConcurrentModificationException";
  readonly name = "ResourceConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConcurrentModificationException, __BaseException>) {
    super({
      name: "ResourceConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConcurrentModificationException.prototype);
  }
}

/**
 * You have reached the limit of the number of tags you can use. For more information, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.configservice#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}
