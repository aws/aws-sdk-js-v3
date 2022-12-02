// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
} from "./commands/AddPermissionCommand";
import {
  CheckIfPhoneNumberIsOptedOutCommand,
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
} from "./commands/CheckIfPhoneNumberIsOptedOutCommand";
import {
  ConfirmSubscriptionCommand,
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
} from "./commands/ConfirmSubscriptionCommand";
import {
  CreatePlatformApplicationCommand,
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput,
} from "./commands/CreatePlatformApplicationCommand";
import {
  CreatePlatformEndpointCommand,
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
} from "./commands/CreatePlatformEndpointCommand";
import {
  CreateSMSSandboxPhoneNumberCommand,
  CreateSMSSandboxPhoneNumberCommandInput,
  CreateSMSSandboxPhoneNumberCommandOutput,
} from "./commands/CreateSMSSandboxPhoneNumberCommand";
import { CreateTopicCommand, CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeletePlatformApplicationCommand,
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput,
} from "./commands/DeletePlatformApplicationCommand";
import {
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteSMSSandboxPhoneNumberCommandInput,
  DeleteSMSSandboxPhoneNumberCommandOutput,
} from "./commands/DeleteSMSSandboxPhoneNumberCommand";
import { DeleteTopicCommand, DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import {
  GetDataProtectionPolicyCommand,
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "./commands/GetDataProtectionPolicyCommand";
import {
  GetEndpointAttributesCommand,
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput,
} from "./commands/GetEndpointAttributesCommand";
import {
  GetPlatformApplicationAttributesCommand,
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput,
} from "./commands/GetPlatformApplicationAttributesCommand";
import {
  GetSMSAttributesCommand,
  GetSMSAttributesCommandInput,
  GetSMSAttributesCommandOutput,
} from "./commands/GetSMSAttributesCommand";
import {
  GetSMSSandboxAccountStatusCommand,
  GetSMSSandboxAccountStatusCommandInput,
  GetSMSSandboxAccountStatusCommandOutput,
} from "./commands/GetSMSSandboxAccountStatusCommand";
import {
  GetSubscriptionAttributesCommand,
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
} from "./commands/GetSubscriptionAttributesCommand";
import {
  GetTopicAttributesCommand,
  GetTopicAttributesCommandInput,
  GetTopicAttributesCommandOutput,
} from "./commands/GetTopicAttributesCommand";
import {
  ListEndpointsByPlatformApplicationCommand,
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
} from "./commands/ListEndpointsByPlatformApplicationCommand";
import {
  ListOriginationNumbersCommand,
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
} from "./commands/ListOriginationNumbersCommand";
import {
  ListPhoneNumbersOptedOutCommand,
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
} from "./commands/ListPhoneNumbersOptedOutCommand";
import {
  ListPlatformApplicationsCommand,
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
} from "./commands/ListPlatformApplicationsCommand";
import {
  ListSMSSandboxPhoneNumbersCommand,
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
} from "./commands/ListSMSSandboxPhoneNumbersCommand";
import {
  ListSubscriptionsByTopicCommand,
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
} from "./commands/ListSubscriptionsByTopicCommand";
import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "./commands/ListSubscriptionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import {
  OptInPhoneNumberCommand,
  OptInPhoneNumberCommandInput,
  OptInPhoneNumberCommandOutput,
} from "./commands/OptInPhoneNumberCommand";
import {
  PublishBatchCommand,
  PublishBatchCommandInput,
  PublishBatchCommandOutput,
} from "./commands/PublishBatchCommand";
import { PublishCommand, PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import {
  PutDataProtectionPolicyCommand,
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "./commands/PutDataProtectionPolicyCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  SetEndpointAttributesCommand,
  SetEndpointAttributesCommandInput,
  SetEndpointAttributesCommandOutput,
} from "./commands/SetEndpointAttributesCommand";
import {
  SetPlatformApplicationAttributesCommand,
  SetPlatformApplicationAttributesCommandInput,
  SetPlatformApplicationAttributesCommandOutput,
} from "./commands/SetPlatformApplicationAttributesCommand";
import {
  SetSMSAttributesCommand,
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput,
} from "./commands/SetSMSAttributesCommand";
import {
  SetSubscriptionAttributesCommand,
  SetSubscriptionAttributesCommandInput,
  SetSubscriptionAttributesCommandOutput,
} from "./commands/SetSubscriptionAttributesCommand";
import {
  SetTopicAttributesCommand,
  SetTopicAttributesCommandInput,
  SetTopicAttributesCommandOutput,
} from "./commands/SetTopicAttributesCommand";
import { SubscribeCommand, SubscribeCommandInput, SubscribeCommandOutput } from "./commands/SubscribeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnsubscribeCommand, UnsubscribeCommandInput, UnsubscribeCommandOutput } from "./commands/UnsubscribeCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  VerifySMSSandboxPhoneNumberCommand,
  VerifySMSSandboxPhoneNumberCommandInput,
  VerifySMSSandboxPhoneNumberCommandOutput,
} from "./commands/VerifySMSSandboxPhoneNumberCommand";
import { SNSClient } from "./SNSClient";

/**
 * <fullname>Amazon Simple Notification Service</fullname>
 *         <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you
 *             to build distributed web-enabled applications. Applications can use Amazon SNS to easily push
 *             real-time notification messages to interested subscribers over multiple delivery
 *             protocols. For more information about this product see the <a href="http://aws.amazon.com/sns/">Amazon SNS product page</a>. For detailed information about Amazon SNS features
 *             and their associated API calls, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p>
 *         <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html">Identity and access management in Amazon SNS</a> in the <i>Amazon SNS Developer
 *                 Guide.</i>
 *          </p>
 *         <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming
 *             language. The SDKs contain functionality that automatically takes care of tasks such as:
 *             cryptographically signing your service requests, retrying requests, and handling error
 *             responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>
 */
export class SNS extends SNSClient {
  /**
   * <p>Adds a statement to a topic's access control policy, granting access for the specified
   *             Amazon Web Services accounts to the specified actions.</p>
   *         <note>
   *             <p>To remove the ability to change topic permissions, you must deny permissions to
   *                 the <code>AddPermission</code>, <code>RemovePermission</code>, and
   *                     <code>SetTopicAttributes</code> actions in your IAM policy.</p>
   *         </note>
   */
  public addPermission(
    args: AddPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddPermissionCommandOutput>;
  public addPermission(
    args: AddPermissionCommandInput,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;
  public addPermission(
    args: AddPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;
  public addPermission(
    args: AddPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddPermissionCommandOutput) => void),
    cb?: (err: any, data?: AddPermissionCommandOutput) => void
  ): Promise<AddPermissionCommandOutput> | void {
    const command = new AddPermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a phone number and indicates whether the phone holder has opted out of
   *             receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number
   *             that is opted out.</p>
   *         <p>To resume sending messages, you can opt in the number by using the
   *                 <code>OptInPhoneNumber</code> action.</p>
   */
  public checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput>;
  public checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    cb: (err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void
  ): void;
  public checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void
  ): void;
  public checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void),
    cb?: (err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void
  ): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> | void {
    const command = new CheckIfPhoneNumberIsOptedOutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent
   *             to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the
   *             action creates a new subscription and returns its Amazon Resource Name (ARN). This call
   *             requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is
   *             set to "true".</p>
   */
  public confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmSubscriptionCommandOutput>;
  public confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    cb: (err: any, data?: ConfirmSubscriptionCommandOutput) => void
  ): void;
  public confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmSubscriptionCommandOutput) => void
  ): void;
  public confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: ConfirmSubscriptionCommandOutput) => void
  ): Promise<ConfirmSubscriptionCommandOutput> | void {
    const command = new ConfirmSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a platform application object for one of the supported push notification
   *             services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile
   *             apps may register. You must specify <code>PlatformPrincipal</code> and
   *                 <code>PlatformCredential</code> attributes when using the
   *                 <code>CreatePlatformApplication</code> action.</p>
   *         <p>
   *             <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from
   *             the notification service.</p>
   *         <ul>
   *             <li>
   *                 <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code>
   *                     and <code>PlatformCredential</code> is <code>client secret</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code>
   *                     and <code>PlatformCredential</code> is <code>secret key</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using certificate
   *                     credentials, <code>PlatformPrincipal</code> is <code>SSL certificate</code> and
   *                         <code>PlatformCredential</code> is <code>private key</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>APNS</code> and <code>APNS_SANDBOX</code> using token credentials,
   *                         <code>PlatformPrincipal</code> is <code>signing key ID</code> and
   *                         <code>PlatformCredential</code> is <code>signing key</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no
   *                         <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is
   *                         <code>API key</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS
   *                         certificate</code> and <code>PlatformCredential</code> is <code>private
   *                         key</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security
   *                         Identifier</code> and <code>PlatformCredential</code> is <code>secret
   *                         key</code>.</p>
   *             </li>
   *          </ul>
   *         <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the
   *                 <code>CreatePlatformEndpoint</code> action.</p>
   */
  public createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlatformApplicationCommandOutput>;
  public createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    cb: (err: any, data?: CreatePlatformApplicationCommandOutput) => void
  ): void;
  public createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlatformApplicationCommandOutput) => void
  ): void;
  public createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlatformApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreatePlatformApplicationCommandOutput) => void
  ): Promise<CreatePlatformApplicationCommandOutput> | void {
    const command = new CreatePlatformApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an endpoint for a device and mobile app on one of the supported push
   *             notification services, such as GCM (Firebase Cloud Messaging) and APNS.
   *                 <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code>
   *             that is returned from <code>CreatePlatformApplication</code>. You can use the returned
   *                 <code>EndpointArn</code> to send a message to a mobile app or by the
   *                 <code>Subscribe</code> action for subscription to a topic. The
   *                 <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester
   *             already owns an endpoint with the same device token and attributes, that endpoint's ARN
   *             is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
   *                 Notifications</a>. </p>
   *         <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be
   *             provided: ChannelId and UserId. The token field must also contain the ChannelId. For
   *             more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for
   *                 Baidu</a>. </p>
   */
  public createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlatformEndpointCommandOutput>;
  public createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    cb: (err: any, data?: CreatePlatformEndpointCommandOutput) => void
  ): void;
  public createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlatformEndpointCommandOutput) => void
  ): void;
  public createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlatformEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreatePlatformEndpointCommandOutput) => void
  ): Promise<CreatePlatformEndpointCommandOutput> | void {
    const command = new CreatePlatformEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a
   *             one-time password (OTP) to that phone number.</p>
   *         <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
   *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
   *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
   *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
   *                 SMS messages only to verified destination phone numbers. For more information, including how to
   *                 move out of the sandbox to send messages without restrictions,
   *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
   *                 the <i>Amazon SNS Developer Guide</i>.</p>
   */
  public createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSMSSandboxPhoneNumberCommandOutput>;
  public createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  public createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  public createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void
  ): Promise<CreateSMSSandboxPhoneNumberCommandOutput> | void {
    const command = new CreateSMSSandboxPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a topic to which notifications can be published. Users can create at most
   *             100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS
   *                 topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is
   *             idempotent, so if the requester already owns a topic with the specified name, that
   *             topic's ARN is returned without creating a new topic.</p>
   */
  public createTopic(args: CreateTopicCommandInput, options?: __HttpHandlerOptions): Promise<CreateTopicCommandOutput>;
  public createTopic(args: CreateTopicCommandInput, cb: (err: any, data?: CreateTopicCommandOutput) => void): void;
  public createTopic(
    args: CreateTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;
  public createTopic(
    args: CreateTopicCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTopicCommandOutput) => void),
    cb?: (err: any, data?: CreateTopicCommandOutput) => void
  ): Promise<CreateTopicCommandOutput> | void {
    const command = new CreateTopicCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is
   *             idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
   *             Notifications</a>. </p>
   *         <p>When you delete an endpoint that is also subscribed to a topic, then you must also
   *             unsubscribe the endpoint from the topic.</p>
   */
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): Promise<DeleteEndpointCommandOutput> | void {
    const command = new DeleteEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a platform application object for one of the supported push notification
   *             services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see
   *                 <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS
   *                 Mobile Push Notifications</a>. </p>
   */
  public deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlatformApplicationCommandOutput>;
  public deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    cb: (err: any, data?: DeletePlatformApplicationCommandOutput) => void
  ): void;
  public deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlatformApplicationCommandOutput) => void
  ): void;
  public deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePlatformApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeletePlatformApplicationCommandOutput) => void
  ): Promise<DeletePlatformApplicationCommandOutput> | void {
    const command = new DeletePlatformApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an Amazon Web Services account's verified or pending phone number from the SMS
   *             sandbox.</p>
   *         <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
   *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
   *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
   *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
   *                 SMS messages only to verified destination phone numbers. For more information, including how to
   *                 move out of the sandbox to send messages without restrictions,
   *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
   *                 the <i>Amazon SNS Developer Guide</i>.</p>
   */
  public deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSMSSandboxPhoneNumberCommandOutput>;
  public deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  public deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  public deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void
  ): Promise<DeleteSMSSandboxPhoneNumberCommandOutput> | void {
    const command = new DeleteSMSSandboxPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a topic and all its subscriptions. Deleting a topic might prevent some
   *             messages previously sent to the topic from being delivered to subscribers. This action
   *             is idempotent, so deleting a topic that does not exist does not result in an
   *             error.</p>
   */
  public deleteTopic(args: DeleteTopicCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTopicCommandOutput>;
  public deleteTopic(args: DeleteTopicCommandInput, cb: (err: any, data?: DeleteTopicCommandOutput) => void): void;
  public deleteTopic(
    args: DeleteTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;
  public deleteTopic(
    args: DeleteTopicCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTopicCommandOutput) => void),
    cb?: (err: any, data?: DeleteTopicCommandOutput) => void
  ): Promise<DeleteTopicCommandOutput> | void {
    const command = new DeleteTopicCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the specified inline <code>DataProtectionPolicy</code> document that is
   *             stored in the specified Amazon SNS topic. </p>
   */
  public getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataProtectionPolicyCommandOutput>;
  public getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  public getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  public getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataProtectionPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): Promise<GetDataProtectionPolicyCommandOutput> | void {
    const command = new GetDataProtectionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the endpoint attributes for a device on one of the supported push
   *             notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
   *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
   */
  public getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEndpointAttributesCommandOutput>;
  public getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    cb: (err: any, data?: GetEndpointAttributesCommandOutput) => void
  ): void;
  public getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEndpointAttributesCommandOutput) => void
  ): void;
  public getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEndpointAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetEndpointAttributesCommandOutput) => void
  ): Promise<GetEndpointAttributesCommandOutput> | void {
    const command = new GetEndpointAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the attributes of the platform application object for the supported push
   *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
   *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
   */
  public getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlatformApplicationAttributesCommandOutput>;
  public getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    cb: (err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  public getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  public getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void
  ): Promise<GetPlatformApplicationAttributesCommandOutput> | void {
    const command = new GetPlatformApplicationAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the settings for sending SMS messages from your Amazon Web Services account.</p>
   *         <p>These settings are set with the <code>SetSMSAttributes</code> action.</p>
   */
  public getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSMSAttributesCommandOutput>;
  public getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    cb: (err: any, data?: GetSMSAttributesCommandOutput) => void
  ): void;
  public getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSMSAttributesCommandOutput) => void
  ): void;
  public getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSMSAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetSMSAttributesCommandOutput) => void
  ): Promise<GetSMSAttributesCommandOutput> | void {
    const command = new GetSMSAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target
   *             Amazon Web Services Region.</p>
   *         <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
   *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
   *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
   *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
   *                 SMS messages only to verified destination phone numbers. For more information, including how to
   *                 move out of the sandbox to send messages without restrictions,
   *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
   *                 the <i>Amazon SNS Developer Guide</i>.</p>
   */
  public getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSMSSandboxAccountStatusCommandOutput>;
  public getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    cb: (err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void
  ): void;
  public getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void
  ): void;
  public getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void),
    cb?: (err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void
  ): Promise<GetSMSSandboxAccountStatusCommandOutput> | void {
    const command = new GetSMSSandboxAccountStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all of the properties of a subscription.</p>
   */
  public getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionAttributesCommandOutput>;
  public getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    cb: (err: any, data?: GetSubscriptionAttributesCommandOutput) => void
  ): void;
  public getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionAttributesCommandOutput) => void
  ): void;
  public getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSubscriptionAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetSubscriptionAttributesCommandOutput) => void
  ): Promise<GetSubscriptionAttributesCommandOutput> | void {
    const command = new GetSubscriptionAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all of the properties of a topic. Topic properties returned might differ based
   *             on the authorization of the user.</p>
   */
  public getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTopicAttributesCommandOutput>;
  public getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    cb: (err: any, data?: GetTopicAttributesCommandOutput) => void
  ): void;
  public getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTopicAttributesCommandOutput) => void
  ): void;
  public getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTopicAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetTopicAttributesCommandOutput) => void
  ): Promise<GetTopicAttributesCommandOutput> | void {
    const command = new GetTopicAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the endpoints and endpoint attributes for devices in a supported push
   *             notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for
   *                 <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited
   *             list of endpoints, up to 100. If additional records are available after the first page
   *             results, then a NextToken string will be returned. To receive the next page, you call
   *                 <code>ListEndpointsByPlatformApplication</code> again using the NextToken string
   *             received from the previous call. When there are no more records to return, NextToken
   *             will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
   *             Notifications</a>. </p>
   *         <p>This action is throttled at 30 transactions per second (TPS).</p>
   */
  public listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointsByPlatformApplicationCommandOutput>;
  public listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    cb: (err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void
  ): void;
  public listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void
  ): void;
  public listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void),
    cb?: (err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void
  ): Promise<ListEndpointsByPlatformApplicationCommandOutput> | void {
    const command = new ListEndpointsByPlatformApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata.
   *             For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer
   *             Guide</i>.</p>
   */
  public listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginationNumbersCommandOutput>;
  public listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    cb: (err: any, data?: ListOriginationNumbersCommandOutput) => void
  ): void;
  public listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginationNumbersCommandOutput) => void
  ): void;
  public listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOriginationNumbersCommandOutput) => void),
    cb?: (err: any, data?: ListOriginationNumbersCommandOutput) => void
  ): Promise<ListOriginationNumbersCommandOutput> | void {
    const command = new ListOriginationNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS
   *             messages to them.</p>
   *         <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page
   *             returns up to 100 phone numbers. If additional phone numbers are available after the
   *             first page of results, then a <code>NextToken</code> string will be returned. To receive
   *             the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the
   *                 <code>NextToken</code> string received from the previous call. When there are no
   *             more records to return, <code>NextToken</code> will be null.</p>
   */
  public listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersOptedOutCommandOutput>;
  public listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    cb: (err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void
  ): void;
  public listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void
  ): void;
  public listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void
  ): Promise<ListPhoneNumbersOptedOutCommandOutput> | void {
    const command = new ListPhoneNumbersOptedOutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the platform application objects for the supported push notification services,
   *             such as APNS and GCM (Firebase Cloud Messaging). The results for
   *                 <code>ListPlatformApplications</code> are paginated and return a limited list of
   *             applications, up to 100. If additional records are available after the first page
   *             results, then a NextToken string will be returned. To receive the next page, you call
   *                 <code>ListPlatformApplications</code> using the NextToken string received from the
   *             previous call. When there are no more records to return, <code>NextToken</code> will be
   *             null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
   *             Notifications</a>. </p>
   *         <p>This action is throttled at 15 transactions per second (TPS).</p>
   */
  public listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlatformApplicationsCommandOutput>;
  public listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    cb: (err: any, data?: ListPlatformApplicationsCommandOutput) => void
  ): void;
  public listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlatformApplicationsCommandOutput) => void
  ): void;
  public listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPlatformApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListPlatformApplicationsCommandOutput) => void
  ): Promise<ListPlatformApplicationsCommandOutput> | void {
    const command = new ListPlatformApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the calling Amazon Web Services account's current verified and pending destination phone
   *             numbers in the SMS sandbox.</p>
   *         <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
   *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
   *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
   *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
   *                 SMS messages only to verified destination phone numbers. For more information, including how to
   *                 move out of the sandbox to send messages without restrictions,
   *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
   *                 the <i>Amazon SNS Developer Guide</i>.</p>
   */
  public listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSMSSandboxPhoneNumbersCommandOutput>;
  public listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    cb: (err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void
  ): void;
  public listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void
  ): void;
  public listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void
  ): Promise<ListSMSSandboxPhoneNumbersCommandOutput> | void {
    const command = new ListSMSSandboxPhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the requester's subscriptions. Each call returns a limited list of
   *             subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is
   *             also returned. Use the <code>NextToken</code> parameter in a new
   *                 <code>ListSubscriptions</code> call to get further results.</p>
   *         <p>This action is throttled at 30 transactions per second (TPS).</p>
   */
  public listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  public listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  public listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  public listSubscriptions(
    args: ListSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): Promise<ListSubscriptionsCommandOutput> | void {
    const command = new ListSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited
   *             list of subscriptions, up to 100. If there are more subscriptions, a
   *                 <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in
   *             a new <code>ListSubscriptionsByTopic</code> call to get further results.</p>
   *         <p>This action is throttled at 30 transactions per second (TPS).</p>
   */
  public listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionsByTopicCommandOutput>;
  public listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    cb: (err: any, data?: ListSubscriptionsByTopicCommandOutput) => void
  ): void;
  public listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionsByTopicCommandOutput) => void
  ): void;
  public listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSubscriptionsByTopicCommandOutput) => void),
    cb?: (err: any, data?: ListSubscriptionsByTopicCommandOutput) => void
  ): Promise<ListSubscriptionsByTopicCommandOutput> | void {
    const command = new ListSubscriptionsByTopicCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all tags added to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the
   *                 <i>Amazon Simple Notification Service Developer Guide</i>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the requester's topics. Each call returns a limited list of topics,
   *             up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the
   *                 <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get
   *             further results.</p>
   *         <p>This action is throttled at 30 transactions per second (TPS).</p>
   */
  public listTopics(args: ListTopicsCommandInput, options?: __HttpHandlerOptions): Promise<ListTopicsCommandOutput>;
  public listTopics(args: ListTopicsCommandInput, cb: (err: any, data?: ListTopicsCommandOutput) => void): void;
  public listTopics(
    args: ListTopicsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;
  public listTopics(
    args: ListTopicsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTopicsCommandOutput) => void),
    cb?: (err: any, data?: ListTopicsCommandOutput) => void
  ): Promise<ListTopicsCommandOutput> | void {
    const command = new ListTopicsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this request to opt in a phone number that is opted out, which enables you to
   *             resume sending SMS messages to the number.</p>
   *         <p>You can opt in a phone number only once every 30 days.</p>
   */
  public optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OptInPhoneNumberCommandOutput>;
  public optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    cb: (err: any, data?: OptInPhoneNumberCommandOutput) => void
  ): void;
  public optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OptInPhoneNumberCommandOutput) => void
  ): void;
  public optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: OptInPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: OptInPhoneNumberCommandOutput) => void
  ): Promise<OptInPhoneNumberCommandOutput> | void {
    const command = new OptInPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone
   *             number, or a message to a mobile platform endpoint (when you specify the
   *                 <code>TargetArn</code>).</p>
   *         <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is
   *             subscribed to the topic. The format of the message depends on the notification protocol
   *             for each subscribed endpoint.</p>
   *         <p>When a <code>messageId</code> is returned, the message is saved and Amazon SNS immediately
   *             delivers it to subscribers.</p>
   *         <p>To use the <code>Publish</code> action for publishing a message to a mobile endpoint,
   *             such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for
   *             the TargetArn parameter. The EndpointArn is returned when making a call with the
   *                 <code>CreatePlatformEndpoint</code> action. </p>
   *         <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom
   *                 Platform-Specific Payloads in Messages to Mobile Devices</a>. </p>
   *         <important>
   *             <p>You can publish messages only to topics and endpoints in the same
   *                 Amazon Web Services Region.</p>
   *         </important>
   */
  public publish(args: PublishCommandInput, options?: __HttpHandlerOptions): Promise<PublishCommandOutput>;
  public publish(args: PublishCommandInput, cb: (err: any, data?: PublishCommandOutput) => void): void;
  public publish(
    args: PublishCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishCommandOutput) => void
  ): void;
  public publish(
    args: PublishCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishCommandOutput) => void),
    cb?: (err: any, data?: PublishCommandOutput) => void
  ): Promise<PublishCommandOutput> | void {
    const command = new PublishCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Publishes up to ten messages to the specified topic. This is a batch version of
   *                 <code>Publish</code>. For FIFO topics, multiple messages within a single batch are
   *             published in the order they are sent, and messages are deduplicated within the batch and
   *             across batches for 5 minutes.</p>
   *         <p>The result of publishing each message is reported individually in the response.
   *             Because the batch request can result in a combination of successful and unsuccessful
   *             actions, you should check for batch errors even when the call returns an HTTP status
   *             code of <code>200</code>.</p>
   *         <p>The maximum allowed individual message size and the maximum total payload size (the
   *             sum of the individual lengths of all of the batched messages) are both 256 KB (262,144
   *             bytes). </p>
   *         <p>Some actions take lists of parameters. These lists are specified using the
   *                 <code>param.n</code> notation. Values of <code>n</code> are integers starting from
   *             1. For example, a parameter list with two elements looks like this: </p>
   *         <p>&AttributeName.1=first</p>
   *         <p>&AttributeName.2=second</p>
   *         <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each
   *             endpoint that is subscribed to the topic. The format of the batch message depends on the
   *             notification protocol for each subscribed endpoint.</p>
   *         <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS
   *             immediately delivers the message to subscribers.</p>
   */
  public publishBatch(
    args: PublishBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishBatchCommandOutput>;
  public publishBatch(args: PublishBatchCommandInput, cb: (err: any, data?: PublishBatchCommandOutput) => void): void;
  public publishBatch(
    args: PublishBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishBatchCommandOutput) => void
  ): void;
  public publishBatch(
    args: PublishBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishBatchCommandOutput) => void),
    cb?: (err: any, data?: PublishBatchCommandOutput) => void
  ): Promise<PublishBatchCommandOutput> | void {
    const command = new PublishBatchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or updates an inline policy document that is stored in the specified Amazon SNS
   *             topic.</p>
   */
  public putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataProtectionPolicyCommandOutput>;
  public putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  public putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  public putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDataProtectionPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): Promise<PutDataProtectionPolicyCommandOutput> | void {
    const command = new PutDataProtectionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a statement from a topic's access control policy.</p>
   *         <note>
   *             <p>To remove the ability to change topic permissions, you must deny permissions to
   *                 the <code>AddPermission</code>, <code>RemovePermission</code>, and
   *                     <code>SetTopicAttributes</code> actions in your IAM policy.</p>
   *         </note>
   */
  public removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  public removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemovePermissionCommandOutput) => void),
    cb?: (err: any, data?: RemovePermissionCommandOutput) => void
  ): Promise<RemovePermissionCommandOutput> | void {
    const command = new RemovePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the attributes for an endpoint for a device on one of the supported push
   *             notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
   *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
   */
  public setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetEndpointAttributesCommandOutput>;
  public setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    cb: (err: any, data?: SetEndpointAttributesCommandOutput) => void
  ): void;
  public setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetEndpointAttributesCommandOutput) => void
  ): void;
  public setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetEndpointAttributesCommandOutput) => void),
    cb?: (err: any, data?: SetEndpointAttributesCommandOutput) => void
  ): Promise<SetEndpointAttributesCommandOutput> | void {
    const command = new SetEndpointAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the attributes of the platform application object for the supported push
   *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
   *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring
   *             attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for
   *                 Message Delivery Status</a>. </p>
   */
  public setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetPlatformApplicationAttributesCommandOutput>;
  public setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    cb: (err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  public setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  public setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void),
    cb?: (err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void
  ): Promise<SetPlatformApplicationAttributesCommandOutput> | void {
    const command = new SetPlatformApplicationAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this request to set the default settings for sending SMS messages and receiving
   *             daily SMS usage reports.</p>
   *         <p>You can override some of these settings for a single message when you use the
   *                 <code>Publish</code> action with the <code>MessageAttributes.entry.N</code>
   *             parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a>
   *             in the <i>Amazon SNS Developer Guide</i>.</p>
   *         <note>
   *             <p>To use this operation, you must grant the Amazon SNS service principal
   *                     (<code>sns.amazonaws.com</code>) permission to perform the
   *                     <code>s3:ListBucket</code> action. </p>
   *         </note>
   */
  public setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSMSAttributesCommandOutput>;
  public setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    cb: (err: any, data?: SetSMSAttributesCommandOutput) => void
  ): void;
  public setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSMSAttributesCommandOutput) => void
  ): void;
  public setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetSMSAttributesCommandOutput) => void),
    cb?: (err: any, data?: SetSMSAttributesCommandOutput) => void
  ): Promise<SetSMSAttributesCommandOutput> | void {
    const command = new SetSMSAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows a subscription owner to set an attribute of the subscription to a new
   *             value.</p>
   */
  public setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSubscriptionAttributesCommandOutput>;
  public setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    cb: (err: any, data?: SetSubscriptionAttributesCommandOutput) => void
  ): void;
  public setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSubscriptionAttributesCommandOutput) => void
  ): void;
  public setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetSubscriptionAttributesCommandOutput) => void),
    cb?: (err: any, data?: SetSubscriptionAttributesCommandOutput) => void
  ): Promise<SetSubscriptionAttributesCommandOutput> | void {
    const command = new SetSubscriptionAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows a topic owner to set an attribute of the topic to a new value.</p>
   *         <note>
   *             <p>To remove the ability to change topic permissions, you must deny permissions to
   *                 the <code>AddPermission</code>, <code>RemovePermission</code>, and
   *                     <code>SetTopicAttributes</code> actions in your IAM policy.</p>
   *         </note>
   */
  public setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTopicAttributesCommandOutput>;
  public setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    cb: (err: any, data?: SetTopicAttributesCommandOutput) => void
  ): void;
  public setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTopicAttributesCommandOutput) => void
  ): void;
  public setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTopicAttributesCommandOutput) => void),
    cb?: (err: any, data?: SetTopicAttributesCommandOutput) => void
  ): Promise<SetTopicAttributesCommandOutput> | void {
    const command = new SetTopicAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or
   *             if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must
   *             run the <code>ConfirmSubscription</code> action to confirm the subscription.</p>
   *         <p>You call the <code>ConfirmSubscription</code> action with the token from the
   *             subscription response. Confirmation tokens are valid for three days.</p>
   *         <p>This action is throttled at 100 transactions per second (TPS).</p>
   */
  public subscribe(args: SubscribeCommandInput, options?: __HttpHandlerOptions): Promise<SubscribeCommandOutput>;
  public subscribe(args: SubscribeCommandInput, cb: (err: any, data?: SubscribeCommandOutput) => void): void;
  public subscribe(
    args: SubscribeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeCommandOutput) => void
  ): void;
  public subscribe(
    args: SubscribeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubscribeCommandOutput) => void),
    cb?: (err: any, data?: SubscribeCommandOutput) => void
  ): Promise<SubscribeCommandOutput> | void {
    const command = new SubscribeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add tags to the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the
   *                 <i>Amazon SNS Developer Guide</i>.</p>
   *         <p>When you use topic tags, keep the following guidelines in mind:</p>
   *         <ul>
   *             <li>
   *                 <p>Adding more than 50 tags to a topic isn't recommended.</p>
   *             </li>
   *             <li>
   *                 <p>Tags don't have any semantic meaning. Amazon SNS interprets tags as character
   *                     strings.</p>
   *             </li>
   *             <li>
   *                 <p>Tags are case-sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>A new tag with a key identical to that of an existing tag overwrites the
   *                     existing tag.</p>
   *             </li>
   *             <li>
   *                 <p>Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If
   *                     your application requires a higher throughput, file a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=technical">technical support request</a>.</p>
   *             </li>
   *          </ul>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a subscription. If the subscription requires authentication for deletion, only
   *             the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services
   *             signature is required. If the <code>Unsubscribe</code> call does not require
   *             authentication and the requester is not the subscription owner, a final cancellation
   *             message is delivered to the endpoint, so that the endpoint owner can easily resubscribe
   *             to the topic if the <code>Unsubscribe</code> request was unintended.</p>
   *         <note>
   *             <p>Amazon SQS queue subscriptions require authentication for deletion. Only the owner of
   *                 the subscription, or the owner of the topic can unsubscribe using the required Amazon Web Services
   *                 signature.</p>
   *         </note>
   *         <p>This action is throttled at 100 transactions per second (TPS).</p>
   */
  public unsubscribe(args: UnsubscribeCommandInput, options?: __HttpHandlerOptions): Promise<UnsubscribeCommandOutput>;
  public unsubscribe(args: UnsubscribeCommandInput, cb: (err: any, data?: UnsubscribeCommandOutput) => void): void;
  public unsubscribe(
    args: UnsubscribeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnsubscribeCommandOutput) => void
  ): void;
  public unsubscribe(
    args: UnsubscribeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnsubscribeCommandOutput) => void),
    cb?: (err: any, data?: UnsubscribeCommandOutput) => void
  ): Promise<UnsubscribeCommandOutput> | void {
    const command = new UnsubscribeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove tags from the specified Amazon SNS topic. For an overview, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html">Amazon SNS Tags</a> in the
   *                 <i>Amazon SNS Developer Guide</i>.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Verifies a destination phone number with a one-time password (OTP) for the calling
   *             Amazon Web Services account.</p>
   *         <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
   *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
   *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
   *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
   *                 SMS messages only to verified destination phone numbers. For more information, including how to
   *                 move out of the sandbox to send messages without restrictions,
   *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
   *                 the <i>Amazon SNS Developer Guide</i>.</p>
   */
  public verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifySMSSandboxPhoneNumberCommandOutput>;
  public verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  public verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  public verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void
  ): Promise<VerifySMSSandboxPhoneNumberCommandOutput> | void {
    const command = new VerifySMSSandboxPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
