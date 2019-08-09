import { SNSClient } from "./SNSClient";
import { AddPermissionInput } from "./types/AddPermissionInput";
import { AddPermissionOutput } from "./types/AddPermissionOutput";
import { AuthorizationErrorException } from "./types/AuthorizationErrorException";
import { CheckIfPhoneNumberIsOptedOutInput } from "./types/CheckIfPhoneNumberIsOptedOutInput";
import { CheckIfPhoneNumberIsOptedOutOutput } from "./types/CheckIfPhoneNumberIsOptedOutOutput";
import { ConcurrentAccessException } from "./types/ConcurrentAccessException";
import { ConfirmSubscriptionInput } from "./types/ConfirmSubscriptionInput";
import { ConfirmSubscriptionOutput } from "./types/ConfirmSubscriptionOutput";
import { CreatePlatformApplicationInput } from "./types/CreatePlatformApplicationInput";
import { CreatePlatformApplicationOutput } from "./types/CreatePlatformApplicationOutput";
import { CreatePlatformEndpointInput } from "./types/CreatePlatformEndpointInput";
import { CreatePlatformEndpointOutput } from "./types/CreatePlatformEndpointOutput";
import { CreateTopicInput } from "./types/CreateTopicInput";
import { CreateTopicOutput } from "./types/CreateTopicOutput";
import { DeleteEndpointInput } from "./types/DeleteEndpointInput";
import { DeleteEndpointOutput } from "./types/DeleteEndpointOutput";
import { DeletePlatformApplicationInput } from "./types/DeletePlatformApplicationInput";
import { DeletePlatformApplicationOutput } from "./types/DeletePlatformApplicationOutput";
import { DeleteTopicInput } from "./types/DeleteTopicInput";
import { DeleteTopicOutput } from "./types/DeleteTopicOutput";
import { EndpointDisabledException } from "./types/EndpointDisabledException";
import { FilterPolicyLimitExceededException } from "./types/FilterPolicyLimitExceededException";
import { GetEndpointAttributesInput } from "./types/GetEndpointAttributesInput";
import { GetEndpointAttributesOutput } from "./types/GetEndpointAttributesOutput";
import { GetPlatformApplicationAttributesInput } from "./types/GetPlatformApplicationAttributesInput";
import { GetPlatformApplicationAttributesOutput } from "./types/GetPlatformApplicationAttributesOutput";
import { GetSMSAttributesInput } from "./types/GetSMSAttributesInput";
import { GetSMSAttributesOutput } from "./types/GetSMSAttributesOutput";
import { GetSubscriptionAttributesInput } from "./types/GetSubscriptionAttributesInput";
import { GetSubscriptionAttributesOutput } from "./types/GetSubscriptionAttributesOutput";
import { GetTopicAttributesInput } from "./types/GetTopicAttributesInput";
import { GetTopicAttributesOutput } from "./types/GetTopicAttributesOutput";
import { InternalErrorException } from "./types/InternalErrorException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidSecurityException } from "./types/InvalidSecurityException";
import { KMSAccessDeniedException } from "./types/KMSAccessDeniedException";
import { KMSDisabledException } from "./types/KMSDisabledException";
import { KMSInvalidStateException } from "./types/KMSInvalidStateException";
import { KMSNotFoundException } from "./types/KMSNotFoundException";
import { KMSOptInRequired } from "./types/KMSOptInRequired";
import { KMSThrottlingException } from "./types/KMSThrottlingException";
import { ListEndpointsByPlatformApplicationInput } from "./types/ListEndpointsByPlatformApplicationInput";
import { ListEndpointsByPlatformApplicationOutput } from "./types/ListEndpointsByPlatformApplicationOutput";
import { ListPhoneNumbersOptedOutInput } from "./types/ListPhoneNumbersOptedOutInput";
import { ListPhoneNumbersOptedOutOutput } from "./types/ListPhoneNumbersOptedOutOutput";
import { ListPlatformApplicationsInput } from "./types/ListPlatformApplicationsInput";
import { ListPlatformApplicationsOutput } from "./types/ListPlatformApplicationsOutput";
import { ListSubscriptionsByTopicInput } from "./types/ListSubscriptionsByTopicInput";
import { ListSubscriptionsByTopicOutput } from "./types/ListSubscriptionsByTopicOutput";
import { ListSubscriptionsInput } from "./types/ListSubscriptionsInput";
import { ListSubscriptionsOutput } from "./types/ListSubscriptionsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTopicsInput } from "./types/ListTopicsInput";
import { ListTopicsOutput } from "./types/ListTopicsOutput";
import { NotFoundException } from "./types/NotFoundException";
import { OptInPhoneNumberInput } from "./types/OptInPhoneNumberInput";
import { OptInPhoneNumberOutput } from "./types/OptInPhoneNumberOutput";
import { PlatformApplicationDisabledException } from "./types/PlatformApplicationDisabledException";
import { PublishInput } from "./types/PublishInput";
import { PublishOutput } from "./types/PublishOutput";
import { RemovePermissionInput } from "./types/RemovePermissionInput";
import { RemovePermissionOutput } from "./types/RemovePermissionOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { SetEndpointAttributesInput } from "./types/SetEndpointAttributesInput";
import { SetEndpointAttributesOutput } from "./types/SetEndpointAttributesOutput";
import { SetPlatformApplicationAttributesInput } from "./types/SetPlatformApplicationAttributesInput";
import { SetPlatformApplicationAttributesOutput } from "./types/SetPlatformApplicationAttributesOutput";
import { SetSMSAttributesInput } from "./types/SetSMSAttributesInput";
import { SetSMSAttributesOutput } from "./types/SetSMSAttributesOutput";
import { SetSubscriptionAttributesInput } from "./types/SetSubscriptionAttributesInput";
import { SetSubscriptionAttributesOutput } from "./types/SetSubscriptionAttributesOutput";
import { SetTopicAttributesInput } from "./types/SetTopicAttributesInput";
import { SetTopicAttributesOutput } from "./types/SetTopicAttributesOutput";
import { StaleTagException } from "./types/StaleTagException";
import { SubscribeInput } from "./types/SubscribeInput";
import { SubscribeOutput } from "./types/SubscribeOutput";
import { SubscriptionLimitExceededException } from "./types/SubscriptionLimitExceededException";
import { TagLimitExceededException } from "./types/TagLimitExceededException";
import { TagPolicyException } from "./types/TagPolicyException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { ThrottledException } from "./types/ThrottledException";
import { TopicLimitExceededException } from "./types/TopicLimitExceededException";
import { UnsubscribeInput } from "./types/UnsubscribeInput";
import { UnsubscribeOutput } from "./types/UnsubscribeOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { AddPermissionCommand } from "./commands/AddPermissionCommand";
import { CheckIfPhoneNumberIsOptedOutCommand } from "./commands/CheckIfPhoneNumberIsOptedOutCommand";
import { ConfirmSubscriptionCommand } from "./commands/ConfirmSubscriptionCommand";
import { CreatePlatformApplicationCommand } from "./commands/CreatePlatformApplicationCommand";
import { CreatePlatformEndpointCommand } from "./commands/CreatePlatformEndpointCommand";
import { CreateTopicCommand } from "./commands/CreateTopicCommand";
import { DeleteEndpointCommand } from "./commands/DeleteEndpointCommand";
import { DeletePlatformApplicationCommand } from "./commands/DeletePlatformApplicationCommand";
import { DeleteTopicCommand } from "./commands/DeleteTopicCommand";
import { GetEndpointAttributesCommand } from "./commands/GetEndpointAttributesCommand";
import { GetPlatformApplicationAttributesCommand } from "./commands/GetPlatformApplicationAttributesCommand";
import { GetSMSAttributesCommand } from "./commands/GetSMSAttributesCommand";
import { GetSubscriptionAttributesCommand } from "./commands/GetSubscriptionAttributesCommand";
import { GetTopicAttributesCommand } from "./commands/GetTopicAttributesCommand";
import { ListEndpointsByPlatformApplicationCommand } from "./commands/ListEndpointsByPlatformApplicationCommand";
import { ListPhoneNumbersOptedOutCommand } from "./commands/ListPhoneNumbersOptedOutCommand";
import { ListPlatformApplicationsCommand } from "./commands/ListPlatformApplicationsCommand";
import { ListSubscriptionsByTopicCommand } from "./commands/ListSubscriptionsByTopicCommand";
import { ListSubscriptionsCommand } from "./commands/ListSubscriptionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTopicsCommand } from "./commands/ListTopicsCommand";
import { OptInPhoneNumberCommand } from "./commands/OptInPhoneNumberCommand";
import { PublishCommand } from "./commands/PublishCommand";
import { RemovePermissionCommand } from "./commands/RemovePermissionCommand";
import { SetEndpointAttributesCommand } from "./commands/SetEndpointAttributesCommand";
import { SetPlatformApplicationAttributesCommand } from "./commands/SetPlatformApplicationAttributesCommand";
import { SetSMSAttributesCommand } from "./commands/SetSMSAttributesCommand";
import { SetSubscriptionAttributesCommand } from "./commands/SetSubscriptionAttributesCommand";
import { SetTopicAttributesCommand } from "./commands/SetTopicAttributesCommand";
import { SubscribeCommand } from "./commands/SubscribeCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnsubscribeCommand } from "./commands/UnsubscribeCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class SNS extends SNSClient {
  /**
   * <p>Adds a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addPermission(args: AddPermissionInput): Promise<AddPermissionOutput>;
  public addPermission(
    args: AddPermissionInput,
    cb: (err: any, data?: AddPermissionOutput) => void
  ): void;
  public addPermission(
    args: AddPermissionInput,
    cb?: (err: any, data?: AddPermissionOutput) => void
  ): Promise<AddPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your account. You cannot send SMS messages to a number that is opted out.</p> <p>To resume sending messages, you can opt in the number by using the <code>OptInPhoneNumber</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ThrottledException} <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your account.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutInput
  ): Promise<CheckIfPhoneNumberIsOptedOutOutput>;
  public checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutInput,
    cb: (err: any, data?: CheckIfPhoneNumberIsOptedOutOutput) => void
  ): void;
  public checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutInput,
    cb?: (err: any, data?: CheckIfPhoneNumberIsOptedOutOutput) => void
  ): Promise<CheckIfPhoneNumberIsOptedOutOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CheckIfPhoneNumberIsOptedOutCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the action creates a new subscription and returns its Amazon Resource Name (ARN). This call requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is set to "true".</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionLimitExceededException} <p>Indicates that the customer already owns the maximum allowed number of subscriptions.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {FilterPolicyLimitExceededException} <p>Indicates that the number of filter polices in your AWS account exceeds the limit. To add more filter polices, submit an SNS Limit Increase case in the AWS Support Center.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmSubscription(
    args: ConfirmSubscriptionInput
  ): Promise<ConfirmSubscriptionOutput>;
  public confirmSubscription(
    args: ConfirmSubscriptionInput,
    cb: (err: any, data?: ConfirmSubscriptionOutput) => void
  ): void;
  public confirmSubscription(
    args: ConfirmSubscriptionInput,
    cb?: (err: any, data?: ConfirmSubscriptionOutput) => void
  ): Promise<ConfirmSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a platform application object for one of the supported push notification services, such as APNS and FCM, to which devices and mobile apps may register. You must specify PlatformPrincipal and PlatformCredential attributes when using the <code>CreatePlatformApplication</code> action. The PlatformPrincipal is received from the notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is "SSL certificate". For GCM, PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is "client id". The PlatformCredential is also received from the notification service. For WNS, PlatformPrincipal is "Package Security Identifier". For MPNS, PlatformPrincipal is "TLS certificate". For Baidu, PlatformPrincipal is "API key".</p> <p>For APNS/APNS_SANDBOX, PlatformCredential is "private key". For GCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client secret". For WNS, PlatformCredential is "secret key". For MPNS, PlatformCredential is "private key". For Baidu, PlatformCredential is "secret key". The PlatformApplicationArn that is returned when using <code>CreatePlatformApplication</code> is then used as an attribute for the <code>CreatePlatformEndpoint</code> action. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For more information about obtaining the PlatformPrincipal and PlatformCredential for each of the supported push notification services, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-apns.html">Getting Started with Apple Push Notification Service</a>, <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-adm.html">Getting Started with Amazon Device Messaging</a>, <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-baidu.html">Getting Started with Baidu Cloud Push</a>, <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-gcm.html">Getting Started with Google Cloud Messaging for Android</a>, <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-mpns.html">Getting Started with MPNS</a>, or <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-wns.html">Getting Started with WNS</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPlatformApplication(
    args: CreatePlatformApplicationInput
  ): Promise<CreatePlatformApplicationOutput>;
  public createPlatformApplication(
    args: CreatePlatformApplicationInput,
    cb: (err: any, data?: CreatePlatformApplicationOutput) => void
  ): void;
  public createPlatformApplication(
    args: CreatePlatformApplicationInput,
    cb?: (err: any, data?: CreatePlatformApplicationOutput) => void
  ): Promise<CreatePlatformApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePlatformApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS. <code>CreatePlatformEndpoint</code> requires the PlatformApplicationArn that is returned from <code>CreatePlatformApplication</code>. The EndpointArn that is returned when using <code>CreatePlatformEndpoint</code> can then be used by the <code>Publish</code> action to send a message to a mobile app or by the <code>Subscribe</code> action for subscription to a topic. The <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for Baidu</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPlatformEndpoint(
    args: CreatePlatformEndpointInput
  ): Promise<CreatePlatformEndpointOutput>;
  public createPlatformEndpoint(
    args: CreatePlatformEndpointInput,
    cb: (err: any, data?: CreatePlatformEndpointOutput) => void
  ): void;
  public createPlatformEndpoint(
    args: CreatePlatformEndpointInput,
    cb?: (err: any, data?: CreatePlatformEndpointOutput) => void
  ): Promise<CreatePlatformEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePlatformEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a topic to which notifications can be published. Users can create at most 100,000 topics. For more information, see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {TopicLimitExceededException} <p>Indicates that the customer already owns the maximum allowed number of topics.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidSecurityException} <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.</p>
   *   - {TagLimitExceededException} <p>Can't add more than 50 tags to a topic.</p>
   *   - {StaleTagException} <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a short while and then retry the operation.</p>
   *   - {TagPolicyException} <p>The request doesn't comply with the IAM tag policy. Correct your request and then retry it.</p>
   *   - {ConcurrentAccessException} <p>Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTopic(args: CreateTopicInput): Promise<CreateTopicOutput>;
  public createTopic(
    args: CreateTopicInput,
    cb: (err: any, data?: CreateTopicOutput) => void
  ): void;
  public createTopic(
    args: CreateTopicInput,
    cb?: (err: any, data?: CreateTopicOutput) => void
  ): Promise<CreateTopicOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTopicCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>When you delete an endpoint that is also subscribed to a topic, then you must also unsubscribe the endpoint from the topic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEndpoint(
    args: DeleteEndpointInput
  ): Promise<DeleteEndpointOutput>;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb: (err: any, data?: DeleteEndpointOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb?: (err: any, data?: DeleteEndpointOutput) => void
  ): Promise<DeleteEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a platform application object for one of the supported push notification services, such as APNS and GCM. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePlatformApplication(
    args: DeletePlatformApplicationInput
  ): Promise<DeletePlatformApplicationOutput>;
  public deletePlatformApplication(
    args: DeletePlatformApplicationInput,
    cb: (err: any, data?: DeletePlatformApplicationOutput) => void
  ): void;
  public deletePlatformApplication(
    args: DeletePlatformApplicationInput,
    cb?: (err: any, data?: DeletePlatformApplicationOutput) => void
  ): Promise<DeletePlatformApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePlatformApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a topic and all its subscriptions. Deleting a topic might prevent some messages previously sent to the topic from being delivered to subscribers. This action is idempotent, so deleting a topic that does not exist does not result in an error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {StaleTagException} <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a short while and then retry the operation.</p>
   *   - {TagPolicyException} <p>The request doesn't comply with the IAM tag policy. Correct your request and then retry it.</p>
   *   - {ConcurrentAccessException} <p>Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTopic(args: DeleteTopicInput): Promise<DeleteTopicOutput>;
  public deleteTopic(
    args: DeleteTopicInput,
    cb: (err: any, data?: DeleteTopicOutput) => void
  ): void;
  public deleteTopic(
    args: DeleteTopicInput,
    cb?: (err: any, data?: DeleteTopicOutput) => void
  ): Promise<DeleteTopicOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTopicCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEndpointAttributes(
    args: GetEndpointAttributesInput
  ): Promise<GetEndpointAttributesOutput>;
  public getEndpointAttributes(
    args: GetEndpointAttributesInput,
    cb: (err: any, data?: GetEndpointAttributesOutput) => void
  ): void;
  public getEndpointAttributes(
    args: GetEndpointAttributesInput,
    cb?: (err: any, data?: GetEndpointAttributesOutput) => void
  ): Promise<GetEndpointAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEndpointAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesInput
  ): Promise<GetPlatformApplicationAttributesOutput>;
  public getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesInput,
    cb: (err: any, data?: GetPlatformApplicationAttributesOutput) => void
  ): void;
  public getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesInput,
    cb?: (err: any, data?: GetPlatformApplicationAttributesOutput) => void
  ): Promise<GetPlatformApplicationAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPlatformApplicationAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the settings for sending SMS messages from your account.</p> <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ThrottledException} <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your account.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSMSAttributes(
    args: GetSMSAttributesInput
  ): Promise<GetSMSAttributesOutput>;
  public getSMSAttributes(
    args: GetSMSAttributesInput,
    cb: (err: any, data?: GetSMSAttributesOutput) => void
  ): void;
  public getSMSAttributes(
    args: GetSMSAttributesInput,
    cb?: (err: any, data?: GetSMSAttributesOutput) => void
  ): Promise<GetSMSAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSMSAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all of the properties of a subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSubscriptionAttributes(
    args: GetSubscriptionAttributesInput
  ): Promise<GetSubscriptionAttributesOutput>;
  public getSubscriptionAttributes(
    args: GetSubscriptionAttributesInput,
    cb: (err: any, data?: GetSubscriptionAttributesOutput) => void
  ): void;
  public getSubscriptionAttributes(
    args: GetSubscriptionAttributesInput,
    cb?: (err: any, data?: GetSubscriptionAttributesOutput) => void
  ): Promise<GetSubscriptionAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSubscriptionAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all of the properties of a topic. Topic properties returned might differ based on the authorization of the user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidSecurityException} <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTopicAttributes(
    args: GetTopicAttributesInput
  ): Promise<GetTopicAttributesOutput>;
  public getTopicAttributes(
    args: GetTopicAttributesInput,
    cb: (err: any, data?: GetTopicAttributesOutput) => void
  ): void;
  public getTopicAttributes(
    args: GetTopicAttributesInput,
    cb?: (err: any, data?: GetTopicAttributesOutput) => void
  ): Promise<GetTopicAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTopicAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS. The results for <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited list of endpoints, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListEndpointsByPlatformApplication</code> again using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 30 transactions per second (TPS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationInput
  ): Promise<ListEndpointsByPlatformApplicationOutput>;
  public listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationInput,
    cb: (err: any, data?: ListEndpointsByPlatformApplicationOutput) => void
  ): void;
  public listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationInput,
    cb?: (err: any, data?: ListEndpointsByPlatformApplicationOutput) => void
  ): Promise<ListEndpointsByPlatformApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEndpointsByPlatformApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.</p> <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a <code>NextToken</code> string will be returned. To receive the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the <code>NextToken</code> string received from the previous call. When there are no more records to return, <code>NextToken</code> will be null.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ThrottledException} <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your account.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutInput
  ): Promise<ListPhoneNumbersOptedOutOutput>;
  public listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutInput,
    cb: (err: any, data?: ListPhoneNumbersOptedOutOutput) => void
  ): void;
  public listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutInput,
    cb?: (err: any, data?: ListPhoneNumbersOptedOutOutput) => void
  ): Promise<ListPhoneNumbersOptedOutOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPhoneNumbersOptedOutCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the platform application objects for the supported push notification services, such as APNS and GCM. The results for <code>ListPlatformApplications</code> are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call <code>ListPlatformApplications</code> using the NextToken string received from the previous call. When there are no more records to return, NextToken will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p> <p>This action is throttled at 15 transactions per second (TPS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPlatformApplications(
    args: ListPlatformApplicationsInput
  ): Promise<ListPlatformApplicationsOutput>;
  public listPlatformApplications(
    args: ListPlatformApplicationsInput,
    cb: (err: any, data?: ListPlatformApplicationsOutput) => void
  ): void;
  public listPlatformApplications(
    args: ListPlatformApplicationsInput,
    cb?: (err: any, data?: ListPlatformApplicationsOutput) => void
  ): Promise<ListPlatformApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPlatformApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the requester's subscriptions. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptions</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSubscriptions(
    args: ListSubscriptionsInput
  ): Promise<ListSubscriptionsOutput>;
  public listSubscriptions(
    args: ListSubscriptionsInput,
    cb: (err: any, data?: ListSubscriptionsOutput) => void
  ): void;
  public listSubscriptions(
    args: ListSubscriptionsInput,
    cb?: (err: any, data?: ListSubscriptionsOutput) => void
  ): Promise<ListSubscriptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSubscriptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited list of subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListSubscriptionsByTopic</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicInput
  ): Promise<ListSubscriptionsByTopicOutput>;
  public listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicInput,
    cb: (err: any, data?: ListSubscriptionsByTopicOutput) => void
  ): void;
  public listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicInput,
    cb?: (err: any, data?: ListSubscriptionsByTopicOutput) => void
  ): Promise<ListSubscriptionsByTopicOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSubscriptionsByTopicCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Can't tag resource. Verify that the topic exists.</p>
   *   - {TagPolicyException} <p>The request doesn't comply with the IAM tag policy. Correct your request and then retry it.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {ConcurrentAccessException} <p>Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get further results.</p> <p>This action is throttled at 30 transactions per second (TPS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTopics(args: ListTopicsInput): Promise<ListTopicsOutput>;
  public listTopics(
    args: ListTopicsInput,
    cb: (err: any, data?: ListTopicsOutput) => void
  ): void;
  public listTopics(
    args: ListTopicsInput,
    cb?: (err: any, data?: ListTopicsOutput) => void
  ): Promise<ListTopicsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTopicsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number.</p> <p>You can opt in a phone number only once every 30 days.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ThrottledException} <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your account.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public optInPhoneNumber(
    args: OptInPhoneNumberInput
  ): Promise<OptInPhoneNumberOutput>;
  public optInPhoneNumber(
    args: OptInPhoneNumberInput,
    cb: (err: any, data?: OptInPhoneNumberOutput) => void
  ): void;
  public optInPhoneNumber(
    args: OptInPhoneNumberInput,
    cb?: (err: any, data?: OptInPhoneNumberOutput) => void
  ): Promise<OptInPhoneNumberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new OptInPhoneNumberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends a message to an Amazon SNS topic or sends a text message (SMS message) directly to a phone number. </p> <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is subscribed to the topic. The format of the message depends on the notification protocol for each subscribed endpoint.</p> <p>When a <code>messageId</code> is returned, the message has been saved and Amazon SNS will attempt to deliver it shortly.</p> <p>To use the <code>Publish</code> action for sending a message to a mobile endpoint, such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for the TargetArn parameter. The EndpointArn is returned when making a call with the <code>CreatePlatformEndpoint</code> action. </p> <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom Platform-Specific Payloads in Messages to Mobile Devices</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InvalidParameterValueException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {EndpointDisabledException} <p>Exception error indicating endpoint disabled.</p>
   *   - {PlatformApplicationDisabledException} <p>Exception error indicating platform application disabled.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {KMSDisabledException} <p>The request was rejected because the specified customer master key (CMK) isn't enabled.</p>
   *   - {KMSInvalidStateException} <p>The request was rejected because the state of the specified resource isn't valid for this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   *   - {KMSNotFoundException} <p>The request was rejected because the specified entity or resource can't be found.</p>
   *   - {KMSOptInRequired} <p>The AWS access key ID needs a subscription for the service.</p>
   *   - {KMSThrottlingException} <p>The request was denied due to request throttling. For more information about throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in the <i>AWS Key Management Service Developer Guide.</i> </p>
   *   - {KMSAccessDeniedException} <p>The ciphertext references a key that doesn't exist or that you don't have access to.</p>
   *   - {InvalidSecurityException} <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public publish(args: PublishInput): Promise<PublishOutput>;
  public publish(
    args: PublishInput,
    cb: (err: any, data?: PublishOutput) => void
  ): void;
  public publish(
    args: PublishInput,
    cb?: (err: any, data?: PublishOutput) => void
  ): Promise<PublishOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PublishCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a statement from a topic's access control policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removePermission(
    args: RemovePermissionInput
  ): Promise<RemovePermissionOutput>;
  public removePermission(
    args: RemovePermissionInput,
    cb: (err: any, data?: RemovePermissionOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionInput,
    cb?: (err: any, data?: RemovePermissionOutput) => void
  ): Promise<RemovePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemovePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setEndpointAttributes(
    args: SetEndpointAttributesInput
  ): Promise<SetEndpointAttributesOutput>;
  public setEndpointAttributes(
    args: SetEndpointAttributesInput,
    cb: (err: any, data?: SetEndpointAttributesOutput) => void
  ): void;
  public setEndpointAttributes(
    args: SetEndpointAttributesInput,
    cb?: (err: any, data?: SetEndpointAttributesOutput) => void
  ): Promise<SetEndpointAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetEndpointAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for Message Delivery Status</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesInput
  ): Promise<SetPlatformApplicationAttributesOutput>;
  public setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesInput,
    cb: (err: any, data?: SetPlatformApplicationAttributesOutput) => void
  ): void;
  public setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesInput,
    cb?: (err: any, data?: SetPlatformApplicationAttributesOutput) => void
  ): Promise<SetPlatformApplicationAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetPlatformApplicationAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use this request to set the default settings for sending SMS messages and receiving daily SMS usage reports.</p> <p>You can override some of these settings for a single message when you use the <code>Publish</code> action with the <code>MessageAttributes.entry.N</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Sending an SMS Message</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {ThrottledException} <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your account.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setSMSAttributes(
    args: SetSMSAttributesInput
  ): Promise<SetSMSAttributesOutput>;
  public setSMSAttributes(
    args: SetSMSAttributesInput,
    cb: (err: any, data?: SetSMSAttributesOutput) => void
  ): void;
  public setSMSAttributes(
    args: SetSMSAttributesInput,
    cb?: (err: any, data?: SetSMSAttributesOutput) => void
  ): Promise<SetSMSAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetSMSAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows a subscription owner to set an attribute of the subscription to a new value.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {FilterPolicyLimitExceededException} <p>Indicates that the number of filter polices in your AWS account exceeds the limit. To add more filter polices, submit an SNS Limit Increase case in the AWS Support Center.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setSubscriptionAttributes(
    args: SetSubscriptionAttributesInput
  ): Promise<SetSubscriptionAttributesOutput>;
  public setSubscriptionAttributes(
    args: SetSubscriptionAttributesInput,
    cb: (err: any, data?: SetSubscriptionAttributesOutput) => void
  ): void;
  public setSubscriptionAttributes(
    args: SetSubscriptionAttributesInput,
    cb?: (err: any, data?: SetSubscriptionAttributesOutput) => void
  ): Promise<SetSubscriptionAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetSubscriptionAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows a topic owner to set an attribute of the topic to a new value.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidSecurityException} <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setTopicAttributes(
    args: SetTopicAttributesInput
  ): Promise<SetTopicAttributesOutput>;
  public setTopicAttributes(
    args: SetTopicAttributesInput,
    cb: (err: any, data?: SetTopicAttributesOutput) => void
  ): void;
  public setTopicAttributes(
    args: SetTopicAttributesInput,
    cb?: (err: any, data?: SetTopicAttributesOutput) => void
  ): Promise<SetTopicAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetTopicAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Prepares to subscribe an endpoint by sending the endpoint a confirmation message. To actually create a subscription, the endpoint owner must call the <code>ConfirmSubscription</code> action with the token from the confirmation message. Confirmation tokens are valid for three days.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionLimitExceededException} <p>Indicates that the customer already owns the maximum allowed number of subscriptions.</p>
   *   - {FilterPolicyLimitExceededException} <p>Indicates that the number of filter polices in your AWS account exceeds the limit. To add more filter polices, submit an SNS Limit Increase case in the AWS Support Center.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {InvalidSecurityException} <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public subscribe(args: SubscribeInput): Promise<SubscribeOutput>;
  public subscribe(
    args: SubscribeInput,
    cb: (err: any, data?: SubscribeOutput) => void
  ): void;
  public subscribe(
    args: SubscribeInput,
    cb?: (err: any, data?: SubscribeOutput) => void
  ): Promise<SubscribeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SubscribeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p> <p>When you use topic tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a topic isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> <li> <p>Tagging actions are limited to 10 TPS per AWS account. If your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-limits.html#limits-topics">Limits Related to Topics</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Can't tag resource. Verify that the topic exists.</p>
   *   - {TagLimitExceededException} <p>Can't add more than 50 tags to a topic.</p>
   *   - {StaleTagException} <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a short while and then retry the operation.</p>
   *   - {TagPolicyException} <p>The request doesn't comply with the IAM tag policy. Correct your request and then retry it.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {ConcurrentAccessException} <p>Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a subscription. If the subscription requires authentication for deletion, only the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature is required. If the <code>Unsubscribe</code> call does not require authentication and the requester is not the subscription owner, a final cancellation message is delivered to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the <code>Unsubscribe</code> request was unintended.</p> <p>This action is throttled at 100 transactions per second (TPS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {InternalErrorException} <p>Indicates an internal service error.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {NotFoundException} <p>Indicates that the requested resource does not exist.</p>
   *   - {InvalidSecurityException} <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unsubscribe(args: UnsubscribeInput): Promise<UnsubscribeOutput>;
  public unsubscribe(
    args: UnsubscribeInput,
    cb: (err: any, data?: UnsubscribeOutput) => void
  ): void;
  public unsubscribe(
    args: UnsubscribeInput,
    cb?: (err: any, data?: UnsubscribeOutput) => void
  ): Promise<UnsubscribeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnsubscribeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the <i>Amazon SNS Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>Can't tag resource. Verify that the topic exists.</p>
   *   - {TagLimitExceededException} <p>Can't add more than 50 tags to a topic.</p>
   *   - {StaleTagException} <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a short while and then retry the operation.</p>
   *   - {TagPolicyException} <p>The request doesn't comply with the IAM tag policy. Correct your request and then retry it.</p>
   *   - {InvalidParameterException} <p>Indicates that a request parameter does not comply with the associated constraints.</p>
   *   - {AuthorizationErrorException} <p>Indicates that the user has been denied access to the requested resource.</p>
   *   - {ConcurrentAccessException} <p>Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
