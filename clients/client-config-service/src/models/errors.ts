// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConfigServiceServiceException as __BaseException } from "./ConfigServiceServiceException";

/**
 * <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, you cannot create a service-linked recorder because a service-linked recorder already exists for the specified service.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a>, you cannot delete the service-linked recorder because it is currently in use by the linked Amazon Web Services service.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html">DeleteDeliveryChannel</a>, you cannot delete the specified delivery channel because the customer managed configuration recorder is running. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html">StopConfigurationRecorder</a> operation to stop the customer managed configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder is not in use by the service. No association or dissociation of resource types is permitted.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, your requested change to the configuration recorder has been denied by its linked Amazon Web Services service.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ConflictException extends __BaseException {
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
 * <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 * @public
 */
export class NoSuchConfigurationRecorderException extends __BaseException {
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
 * <p>The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html">PutStoredQuery</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>There are missing required fields.</p>
 *             </li>
 *             <li>
 *                <p>The input value fails the validation.</p>
 *             </li>
 *             <li>
 *                <p>You are trying to create more than 300 queries.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html">DescribeConfigurationRecorders</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html">DescribeConfigurationRecorderStatus</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have specified more than one configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>You have provided a service principal for service-linked configuration recorder that is not valid.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.</p>
 *             </li>
 *             <li>
 *                <p>One or more of the specified resource types are already associated or disassociated with the configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ValidationException extends __BaseException {
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
 * <p>You have specified a configuration aggregator that does not exist.</p>
 * @public
 */
export class NoSuchConfigurationAggregatorException extends __BaseException {
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
 * <p>There are no customer managed configuration recorders available to record your resources. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a> operation to create the customer managed configuration
 * 			recorder.</p>
 * @public
 */
export class NoAvailableConfigurationRecorderException extends __BaseException {
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
 * <p>You have specified a template that is not valid or supported.</p>
 * @public
 */
export class ConformancePackTemplateValidationException extends __BaseException {
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
 * <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
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
 * <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 * @public
 */
export class NoSuchConfigRuleException extends __BaseException {
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
 * <p>You see this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>For DeleteConfigRule, Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ResourceInUseException extends __BaseException {
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
 * <p>The requested operation is not valid.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a>,
 * 			you will see this exception because you cannot use this operation to create a service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a> operation to create a service-linked configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html">DeleteConfigurationRecorder</a>, you will see this exception because you cannot use this operation to delete a service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a> operation to delete a service-linked configuration
 * 			recorder.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html">StartConfigurationRecorder</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html">StopConfigurationRecorder</a>, you will see this exception because these operations do not affect service-linked configuration recorders.
 * 			Service-linked configuration recorders are always recording. To stop recording, you must delete the service-linked configuration recorder. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html">DeleteServiceLinkedConfigurationRecorder</a> operation to delete a service-linked configuration
 * 			recorder.</p>
 * @public
 */
export class UnmodifiableEntityException extends __BaseException {
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
 * <p>You specified one or more conformance packs that do not exist.</p>
 * @public
 */
export class NoSuchConformancePackException extends __BaseException {
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
 * <p>You cannot delete the delivery channel you specified because the customer managed configuration recorder is running.</p>
 * @public
 */
export class LastDeliveryChannelDeleteFailedException extends __BaseException {
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
 * <p>You have specified a delivery channel that does not
 * 			exist.</p>
 * @public
 */
export class NoSuchDeliveryChannelException extends __BaseException {
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
 * <p>The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 * @public
 */
export class NoSuchOrganizationConfigRuleException extends __BaseException {
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
 * <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 * @public
 */
export class OrganizationAccessDeniedException extends __BaseException {
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
 * <p>Config organization conformance pack that you passed in the filter does not exist.</p>
 *          <p>For DeleteOrganizationConformancePack, you tried to delete an organization conformance pack that does not exist.</p>
 * @public
 */
export class NoSuchOrganizationConformancePackException extends __BaseException {
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
 * <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html">PutOrganizationConfigRule</a>, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html">PutOrganizationConformancePack</a>, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM <code>CreateServiceLinkedRole</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InsufficientPermissionsException extends __BaseException {
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
 * <p>You specified an Config rule without a remediation configuration.</p>
 * @public
 */
export class NoSuchRemediationConfigurationException extends __BaseException {
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
 * <p>Remediation action is in progress. You can either cancel execution in Amazon Web Services Systems Manager or wait and try again later. </p>
 * @public
 */
export class RemediationInProgressException extends __BaseException {
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
 * <p>You tried to delete a remediation exception that does not exist.</p>
 * @public
 */
export class NoSuchRemediationExceptionException extends __BaseException {
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
 * <p>There is no configuration recorder running.</p>
 * @public
 */
export class NoRunningConfigurationRecorderException extends __BaseException {
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
 * <p>You have specified a retention configuration that does not exist.</p>
 * @public
 */
export class NoSuchRetentionConfigurationException extends __BaseException {
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
 * <p>You have specified a resource that does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>The specified limit is outside the allowable range.</p>
 * @public
 */
export class InvalidLimitException extends __BaseException {
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
 * <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
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
 * <p>Config rule that you passed in the filter does not exist.</p>
 * @public
 */
export class NoSuchConfigRuleInConformancePackException extends __BaseException {
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
 * <p>The configuration item size is outside the allowable range.</p>
 * @public
 */
export class OversizedConfigurationItemException extends __BaseException {
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
 * <p>You have specified a resource that is either unknown or has not
 * 			been discovered.</p>
 * @public
 */
export class ResourceNotDiscoveredException extends __BaseException {
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
 * <p>The specified time range is not valid. The earlier time is not
 * 			chronologically before the later time.</p>
 * @public
 */
export class InvalidTimeRangeException extends __BaseException {
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
 * <p>Using the same client token with one or more different parameters. Specify a new client token with the parameter changes and try again.</p>
 * @public
 */
export class IdempotentParameterMismatch extends __BaseException {
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
 * <p>Your Amazon S3 bucket policy does not allow Config to
 * 			write to it.</p>
 * @public
 */
export class InsufficientDeliveryPolicyException extends __BaseException {
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
 * <p>The configuration recorder name is not valid. The prefix "<code>AWSConfigurationRecorderFor</code>" is reserved for service-linked configuration recorders.</p>
 * @public
 */
export class InvalidConfigurationRecorderNameException extends __BaseException {
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
 * <p>The specified delivery channel name is not valid.</p>
 * @public
 */
export class InvalidDeliveryChannelNameException extends __BaseException {
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
 * <p>The syntax of the query is incorrect.</p>
 * @public
 */
export class InvalidExpressionException extends __BaseException {
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
 * <p>One of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have provided a combination of parameter values that is not valid. For example:</p>
 *                <ul>
 *                   <li>
 *                      <p>Setting the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>,
 * 						but providing a non-empty list for the <code>resourceTypes</code>field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>Setting the <code>allSupported</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html">RecordingGroup</a> to <code>true</code>, but also setting the <code>useOnly</code> field of <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingStrategy.html">RecordingStrategy</a> to <code>EXCLUSION_BY_RESOURCE_TYPES</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Every parameter is either null, false, or empty.</p>
 *             </li>
 *             <li>
 *                <p>You have reached the limit of the number of resource types you can provide for the recording group.</p>
 *             </li>
 *             <li>
 *                <p>You have provided resource types or a recording strategy that are not valid.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidRecordingGroupException extends __BaseException {
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
 * <p>The specified <code>ResultToken</code> is not valid.</p>
 * @public
 */
export class InvalidResultTokenException extends __BaseException {
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
 * <p>You have provided a null or empty Amazon Resource Name (ARN) for the IAM role assumed by Config and used by the customer managed configuration recorder.</p>
 * @public
 */
export class InvalidRoleException extends __BaseException {
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
 * <p>The specified Amazon S3 key prefix is not valid.</p>
 * @public
 */
export class InvalidS3KeyPrefixException extends __BaseException {
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
 * <p>The specified Amazon KMS Key ARN is not valid.</p>
 * @public
 */
export class InvalidS3KmsKeyArnException extends __BaseException {
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
 * <p>The specified Amazon SNS topic does not exist.</p>
 * @public
 */
export class InvalidSNSTopicARNException extends __BaseException {
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
 * <p>For <code>PutServiceLinkedConfigurationRecorder</code> API, this exception
 * 			is thrown if the number of service-linked roles in the account exceeds the limit.</p>
 *          <p>For <code>StartConfigRulesEvaluation</code> API, this exception
 * 			is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per
 * 			minute.</p>
 *          <p>For <code>PutConfigurationAggregator</code> API, this exception
 * 			is thrown if the number of accounts and aggregators exceeds the
 * 			limit.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>You have reached the limit of active custom resource types in your account. There is a limit of 100,000.
 * 			Delete unused resources using <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html">DeleteResourceConfig</a>
 *             <code></code>.</p>
 * @public
 */
export class MaxActiveResourcesExceededException extends __BaseException {
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
 * <p>Failed to add the Config rule because the account already
 * 			contains the maximum number of 1000 rules. Consider deleting any
 * 			deactivated rules before you add new rules.</p>
 * @public
 */
export class MaxNumberOfConfigRulesExceededException extends __BaseException {
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
 * <p>You have reached the limit of the number of configuration recorders you can
 * 			create.</p>
 * @public
 */
export class MaxNumberOfConfigurationRecordersExceededException extends __BaseException {
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
 * <p>You have reached the limit of the number of conformance packs you can create in an account. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
 */
export class MaxNumberOfConformancePacksExceededException extends __BaseException {
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
 * <p>You have reached the limit of the number of delivery channels
 * 			you can create.</p>
 * @public
 */
export class MaxNumberOfDeliveryChannelsExceededException extends __BaseException {
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
 * <p>You have reached the limit of the number of organization Config rules you can create. For more information, see see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
 */
export class MaxNumberOfOrganizationConfigRulesExceededException extends __BaseException {
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
 * <p>You have reached the limit of the number of organization conformance packs you can create in an account. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
 */
export class MaxNumberOfOrganizationConformancePacksExceededException extends __BaseException {
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
 * <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 * @public
 */
export class MaxNumberOfRetentionConfigurationsExceededException extends __BaseException {
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
 * <p>There is no delivery channel available to record
 * 			configurations.</p>
 * @public
 */
export class NoAvailableDeliveryChannelException extends __BaseException {
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
 * <p>Organization is no longer available.</p>
 * @public
 */
export class NoAvailableOrganizationException extends __BaseException {
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
 * <p>The specified Amazon S3 bucket does not exist.</p>
 * @public
 */
export class NoSuchBucketException extends __BaseException {
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
 * <p>Config resource cannot be created because your organization does not have all features enabled.</p>
 * @public
 */
export class OrganizationAllFeaturesNotEnabledException extends __BaseException {
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
 * <p>You have specified a template that is not valid or supported.</p>
 * @public
 */
export class OrganizationConformancePackTemplateValidationException extends __BaseException {
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
 * <p>Two users are trying to modify the same query at the same time. Wait for a moment and try again.</p>
 * @public
 */
export class ResourceConcurrentModificationException extends __BaseException {
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
 * <p>You have reached the limit of the number of tags you can use.
 * 			For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
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
