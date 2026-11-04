// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { SESServiceException as __BaseException } from "./SESServiceException";

/**
 * Indicates that email sending is disabled for your entire Amazon SES account.
 *
 * You can enable or disable email sending for your Amazon SES account using UpdateAccountSendingEnabled.
 *
 * @public
 */
export class AccountSendingPausedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#AccountSendingPausedException";
  readonly name = "AccountSendingPausedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountSendingPausedException, __BaseException>) {
    super({
      name: "AccountSendingPausedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountSendingPausedException.prototype);
  }
}

/**
 * Indicates that a resource could not be created because of a naming conflict.
 *
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#AlreadyExistsException";
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that a resource could not be created because the resource name already exists.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Name = opts.Name;
  }
}

/**
 * Indicates that the delete operation could not be completed.
 *
 * @public
 */
export class CannotDeleteException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#CannotDeleteException";
  readonly name = "CannotDeleteException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that a resource could not be deleted because no resource with the specified name exists.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotDeleteException, __BaseException>) {
    super({
      name: "CannotDeleteException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotDeleteException.prototype);
    this.Name = opts.Name;
  }
}

/**
 * Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html).
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#LimitExceededException";
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
 * Indicates that the provided receipt rule set does not exist.
 *
 * @public
 */
export class RuleSetDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#RuleSetDoesNotExistException";
  readonly name = "RuleSetDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the named receipt rule set does not exist.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RuleSetDoesNotExistException, __BaseException>) {
    super({
      name: "RuleSetDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RuleSetDoesNotExistException.prototype);
    this.Name = opts.Name;
  }
}

/**
 * Indicates that the configuration set could not be created because of a naming conflict.
 *
 * @public
 */
export class ConfigurationSetAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#ConfigurationSetAlreadyExistsException";
  readonly name = "ConfigurationSetAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the configuration set does not exist.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConfigurationSetAlreadyExistsException, __BaseException>) {
    super({
      name: "ConfigurationSetAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConfigurationSetAlreadyExistsException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
}

/**
 * Indicates that the configuration set does not exist.
 *
 * @public
 */
export class ConfigurationSetDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#ConfigurationSetDoesNotExistException";
  readonly name = "ConfigurationSetDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the configuration set does not exist.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConfigurationSetDoesNotExistException, __BaseException>) {
    super({
      name: "ConfigurationSetDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConfigurationSetDoesNotExistException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
}

/**
 * Indicates that email sending is disabled for the configuration set.
 *
 * You can enable or disable email sending for a configuration set using UpdateConfigurationSetSendingEnabled.
 *
 * @public
 */
export class ConfigurationSetSendingPausedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#ConfigurationSetSendingPausedException";
  readonly name = "ConfigurationSetSendingPausedException" as const;
  readonly $fault = "client" as const;
  /**
   * The name of the configuration set for which email sending is disabled.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConfigurationSetSendingPausedException, __BaseException>) {
    super({
      name: "ConfigurationSetSendingPausedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConfigurationSetSendingPausedException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
}

/**
 * Indicates that the configuration set is invalid. See the error message for details.
 *
 * @public
 */
export class InvalidConfigurationSetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidConfigurationSetException";
  readonly name = "InvalidConfigurationSetException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationSetException, __BaseException>) {
    super({
      name: "InvalidConfigurationSetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationSetException.prototype);
  }
}

/**
 * Indicates that the event destination could not be created because of a naming conflict.
 *
 * @public
 */
export class EventDestinationAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#EventDestinationAlreadyExistsException";
  readonly name = "EventDestinationAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the configuration set does not exist.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * Indicates that the event destination does not exist.
   *
   * @public
   */
  EventDestinationName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDestinationAlreadyExistsException, __BaseException>) {
    super({
      name: "EventDestinationAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDestinationAlreadyExistsException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
}

/**
 * Indicates that the Amazon CloudWatch destination is invalid. See the error message for details.
 *
 * @public
 */
export class InvalidCloudWatchDestinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidCloudWatchDestinationException";
  readonly name = "InvalidCloudWatchDestinationException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the configuration set does not exist.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * Indicates that the event destination does not exist.
   *
   * @public
   */
  EventDestinationName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCloudWatchDestinationException, __BaseException>) {
    super({
      name: "InvalidCloudWatchDestinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCloudWatchDestinationException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
}

/**
 * Indicates that the Amazon Kinesis Firehose destination is invalid. See the error message for details.
 *
 * @public
 */
export class InvalidFirehoseDestinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidFirehoseDestinationException";
  readonly name = "InvalidFirehoseDestinationException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the configuration set does not exist.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * Indicates that the event destination does not exist.
   *
   * @public
   */
  EventDestinationName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFirehoseDestinationException, __BaseException>) {
    super({
      name: "InvalidFirehoseDestinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFirehoseDestinationException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
}

/**
 * Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is invalid. See the error message for details.
 *
 * @public
 */
export class InvalidSNSDestinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidSNSDestinationException";
  readonly name = "InvalidSNSDestinationException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the configuration set does not exist.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * Indicates that the event destination does not exist.
   *
   * @public
   */
  EventDestinationName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSNSDestinationException, __BaseException>) {
    super({
      name: "InvalidSNSDestinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSNSDestinationException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
}

/**
 * Indicates that the custom domain to be used for open and click tracking redirects is invalid. This error appears most often in the following situations:
 *
 * - When the tracking domain you specified is not verified in Amazon SES.
 * - When the tracking domain you specified is not a valid domain or subdomain.
 *
 * @public
 */
export class InvalidTrackingOptionsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidTrackingOptionsException";
  readonly name = "InvalidTrackingOptionsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTrackingOptionsException, __BaseException>) {
    super({
      name: "InvalidTrackingOptionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTrackingOptionsException.prototype);
  }
}

/**
 * Indicates that the configuration set you specified already contains a TrackingOptions object.
 *
 * @public
 */
export class TrackingOptionsAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#TrackingOptionsAlreadyExistsException";
  readonly name = "TrackingOptionsAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that a TrackingOptions object already exists in the specified configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrackingOptionsAlreadyExistsException, __BaseException>) {
    super({
      name: "TrackingOptionsAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrackingOptionsAlreadyExistsException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
}

/**
 * Indicates that custom verification email template provided content is invalid.
 *
 * @public
 */
export class CustomVerificationEmailInvalidContentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#CustomVerificationEmailInvalidContentException";
  readonly name = "CustomVerificationEmailInvalidContentException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomVerificationEmailInvalidContentException, __BaseException>) {
    super({
      name: "CustomVerificationEmailInvalidContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomVerificationEmailInvalidContentException.prototype);
  }
}

/**
 * Indicates that a custom verification email template with the name you specified already exists.
 *
 * @public
 */
export class CustomVerificationEmailTemplateAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException";
  readonly name = "CustomVerificationEmailTemplateAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the provided custom verification email template with the specified template name already exists.
   *
   * @public
   */
  CustomVerificationEmailTemplateName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomVerificationEmailTemplateAlreadyExistsException, __BaseException>) {
    super({
      name: "CustomVerificationEmailTemplateAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomVerificationEmailTemplateAlreadyExistsException.prototype);
    this.CustomVerificationEmailTemplateName = opts.CustomVerificationEmailTemplateName;
  }
}

/**
 * Indicates that the sender address specified for a custom verification email is not verified, and is therefore not eligible to send the custom verification email.
 *
 * @public
 */
export class FromEmailAddressNotVerifiedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#FromEmailAddressNotVerifiedException";
  readonly name = "FromEmailAddressNotVerifiedException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the from email address associated with the custom verification email template is not verified.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FromEmailAddressNotVerifiedException, __BaseException>) {
    super({
      name: "FromEmailAddressNotVerifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FromEmailAddressNotVerifiedException.prototype);
    this.FromEmailAddress = opts.FromEmailAddress;
  }
}

/**
 * Indicates that the provided Amazon Web Services Lambda function is invalid, or that Amazon SES could not execute the provided function, possibly due to permissions issues. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html).
 *
 * @public
 */
export class InvalidLambdaFunctionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidLambdaFunctionException";
  readonly name = "InvalidLambdaFunctionException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the ARN of the function was not found.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLambdaFunctionException, __BaseException>) {
    super({
      name: "InvalidLambdaFunctionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLambdaFunctionException.prototype);
    this.FunctionArn = opts.FunctionArn;
  }
}

/**
 * Indicates that the provided Amazon S3 bucket or Amazon Web Services KMS encryption key is invalid, or that Amazon SES could not publish to the bucket, possibly due to permissions issues. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html).
 *
 * @public
 */
export class InvalidS3ConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidS3ConfigurationException";
  readonly name = "InvalidS3ConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicated that the S3 Bucket was not found.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3ConfigurationException, __BaseException>) {
    super({
      name: "InvalidS3ConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3ConfigurationException.prototype);
    this.Bucket = opts.Bucket;
  }
}

/**
 * Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not publish to the topic, possibly due to permissions issues. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html).
 *
 * @public
 */
export class InvalidSnsTopicException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidSnsTopicException";
  readonly name = "InvalidSnsTopicException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the topic does not exist.
   *
   * @public
   */
  Topic?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnsTopicException, __BaseException>) {
    super({
      name: "InvalidSnsTopicException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnsTopicException.prototype);
    this.Topic = opts.Topic;
  }
}

/**
 * Indicates that the provided receipt rule does not exist.
 *
 * @public
 */
export class RuleDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#RuleDoesNotExistException";
  readonly name = "RuleDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the named receipt rule does not exist.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RuleDoesNotExistException, __BaseException>) {
    super({
      name: "RuleDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RuleDoesNotExistException.prototype);
    this.Name = opts.Name;
  }
}

/**
 * Indicates that the template that you specified could not be rendered. This issue may occur when a template refers to a partial that does not exist.
 *
 * @public
 */
export class InvalidTemplateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidTemplateException";
  readonly name = "InvalidTemplateException" as const;
  readonly $fault = "client" as const;
  TemplateName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTemplateException, __BaseException>) {
    super({
      name: "InvalidTemplateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTemplateException.prototype);
    this.TemplateName = opts.TemplateName;
  }
}

/**
 * Indicates that a custom verification email template with the name you specified does not exist.
 *
 * @public
 */
export class CustomVerificationEmailTemplateDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException";
  readonly name = "CustomVerificationEmailTemplateDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the provided custom verification email template does not exist.
   *
   * @public
   */
  CustomVerificationEmailTemplateName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomVerificationEmailTemplateDoesNotExistException, __BaseException>) {
    super({
      name: "CustomVerificationEmailTemplateDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomVerificationEmailTemplateDoesNotExistException.prototype);
    this.CustomVerificationEmailTemplateName = opts.CustomVerificationEmailTemplateName;
  }
}

/**
 * Indicates that the event destination does not exist.
 *
 * @public
 */
export class EventDestinationDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#EventDestinationDoesNotExistException";
  readonly name = "EventDestinationDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that the configuration set does not exist.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * Indicates that the event destination does not exist.
   *
   * @public
   */
  EventDestinationName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDestinationDoesNotExistException, __BaseException>) {
    super({
      name: "EventDestinationDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDestinationDoesNotExistException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
    this.EventDestinationName = opts.EventDestinationName;
  }
}

/**
 * Indicates that the TrackingOptions object you specified does not exist.
 *
 * @public
 */
export class TrackingOptionsDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#TrackingOptionsDoesNotExistException";
  readonly name = "TrackingOptionsDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * Indicates that a TrackingOptions object does not exist in the specified configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrackingOptionsDoesNotExistException, __BaseException>) {
    super({
      name: "TrackingOptionsDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrackingOptionsDoesNotExistException.prototype);
    this.ConfigurationSetName = opts.ConfigurationSetName;
  }
}

/**
 * Indicates that the Template object you specified does not exist in your Amazon SES account.
 *
 * @public
 */
export class TemplateDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#TemplateDoesNotExistException";
  readonly name = "TemplateDoesNotExistException" as const;
  readonly $fault = "client" as const;
  TemplateName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemplateDoesNotExistException, __BaseException>) {
    super({
      name: "TemplateDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TemplateDoesNotExistException.prototype);
    this.TemplateName = opts.TemplateName;
  }
}

/**
 * Indicates that provided delivery option is invalid.
 *
 * @public
 */
export class InvalidDeliveryOptionsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidDeliveryOptionsException";
  readonly name = "InvalidDeliveryOptionsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeliveryOptionsException, __BaseException>) {
    super({
      name: "InvalidDeliveryOptionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeliveryOptionsException.prototype);
  }
}

/**
 * Indicates that the provided policy is invalid. Check the error stack for more information about what caused the error.
 *
 * @public
 */
export class InvalidPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidPolicyException";
  readonly name = "InvalidPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyException, __BaseException>) {
    super({
      name: "InvalidPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyException.prototype);
  }
}

/**
 * Indicates that one or more of the replacement values you provided is invalid. This error may occur when the TemplateData object contains invalid JSON.
 *
 * @public
 */
export class InvalidRenderingParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#InvalidRenderingParameterException";
  readonly name = "InvalidRenderingParameterException" as const;
  readonly $fault = "client" as const;
  TemplateName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRenderingParameterException, __BaseException>) {
    super({
      name: "InvalidRenderingParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRenderingParameterException.prototype);
    this.TemplateName = opts.TemplateName;
  }
}

/**
 * Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html).
 *
 * @public
 */
export class MailFromDomainNotVerifiedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#MailFromDomainNotVerifiedException";
  readonly name = "MailFromDomainNotVerifiedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailFromDomainNotVerifiedException, __BaseException>) {
    super({
      name: "MailFromDomainNotVerifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailFromDomainNotVerifiedException.prototype);
  }
}

/**
 * Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.
 *
 * @public
 */
export class MessageRejected extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#MessageRejected";
  readonly name = "MessageRejected" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageRejected, __BaseException>) {
    super({
      name: "MessageRejected",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageRejected.prototype);
  }
}

/**
 * Indicates that one or more of the replacement values for the specified template was not specified. Ensure that the TemplateData object contains references to all of the replacement tags in the specified template.
 *
 * @public
 */
export class MissingRenderingAttributeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#MissingRenderingAttributeException";
  readonly name = "MissingRenderingAttributeException" as const;
  readonly $fault = "client" as const;
  TemplateName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRenderingAttributeException, __BaseException>) {
    super({
      name: "MissingRenderingAttributeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRenderingAttributeException.prototype);
    this.TemplateName = opts.TemplateName;
  }
}

/**
 * Indicates that the account has not been granted production access.
 *
 * @public
 */
export class ProductionAccessNotGrantedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ses#ProductionAccessNotGrantedException";
  readonly name = "ProductionAccessNotGrantedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProductionAccessNotGrantedException, __BaseException>) {
    super({
      name: "ProductionAccessNotGrantedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProductionAccessNotGrantedException.prototype);
  }
}
