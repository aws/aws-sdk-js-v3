// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateOriginationIdentityCommand,
  AssociateOriginationIdentityCommandInput,
  AssociateOriginationIdentityCommandOutput,
} from "./commands/AssociateOriginationIdentityCommand";
import {
  CreateConfigurationSetCommand,
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateEventDestinationCommand,
  CreateEventDestinationCommandInput,
  CreateEventDestinationCommandOutput,
} from "./commands/CreateEventDestinationCommand";
import {
  CreateOptOutListCommand,
  CreateOptOutListCommandInput,
  CreateOptOutListCommandOutput,
} from "./commands/CreateOptOutListCommand";
import { CreatePoolCommand, CreatePoolCommandInput, CreatePoolCommandOutput } from "./commands/CreatePoolCommand";
import {
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteDefaultMessageTypeCommand,
  DeleteDefaultMessageTypeCommandInput,
  DeleteDefaultMessageTypeCommandOutput,
} from "./commands/DeleteDefaultMessageTypeCommand";
import {
  DeleteDefaultSenderIdCommand,
  DeleteDefaultSenderIdCommandInput,
  DeleteDefaultSenderIdCommandOutput,
} from "./commands/DeleteDefaultSenderIdCommand";
import {
  DeleteEventDestinationCommand,
  DeleteEventDestinationCommandInput,
  DeleteEventDestinationCommandOutput,
} from "./commands/DeleteEventDestinationCommand";
import {
  DeleteKeywordCommand,
  DeleteKeywordCommandInput,
  DeleteKeywordCommandOutput,
} from "./commands/DeleteKeywordCommand";
import {
  DeleteOptedOutNumberCommand,
  DeleteOptedOutNumberCommandInput,
  DeleteOptedOutNumberCommandOutput,
} from "./commands/DeleteOptedOutNumberCommand";
import {
  DeleteOptOutListCommand,
  DeleteOptOutListCommandInput,
  DeleteOptOutListCommandOutput,
} from "./commands/DeleteOptOutListCommand";
import { DeletePoolCommand, DeletePoolCommandInput, DeletePoolCommandOutput } from "./commands/DeletePoolCommand";
import {
  DeleteTextMessageSpendLimitOverrideCommand,
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteTextMessageSpendLimitOverrideCommand";
import {
  DeleteVoiceMessageSpendLimitOverrideCommand,
  DeleteVoiceMessageSpendLimitOverrideCommandInput,
  DeleteVoiceMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteVoiceMessageSpendLimitOverrideCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeConfigurationSetsCommand,
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput,
} from "./commands/DescribeConfigurationSetsCommand";
import {
  DescribeKeywordsCommand,
  DescribeKeywordsCommandInput,
  DescribeKeywordsCommandOutput,
} from "./commands/DescribeKeywordsCommand";
import {
  DescribeOptedOutNumbersCommand,
  DescribeOptedOutNumbersCommandInput,
  DescribeOptedOutNumbersCommandOutput,
} from "./commands/DescribeOptedOutNumbersCommand";
import {
  DescribeOptOutListsCommand,
  DescribeOptOutListsCommandInput,
  DescribeOptOutListsCommandOutput,
} from "./commands/DescribeOptOutListsCommand";
import {
  DescribePhoneNumbersCommand,
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput,
} from "./commands/DescribePhoneNumbersCommand";
import {
  DescribePoolsCommand,
  DescribePoolsCommandInput,
  DescribePoolsCommandOutput,
} from "./commands/DescribePoolsCommand";
import {
  DescribeSenderIdsCommand,
  DescribeSenderIdsCommandInput,
  DescribeSenderIdsCommandOutput,
} from "./commands/DescribeSenderIdsCommand";
import {
  DescribeSpendLimitsCommand,
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput,
} from "./commands/DescribeSpendLimitsCommand";
import {
  DisassociateOriginationIdentityCommand,
  DisassociateOriginationIdentityCommandInput,
  DisassociateOriginationIdentityCommandOutput,
} from "./commands/DisassociateOriginationIdentityCommand";
import {
  ListPoolOriginationIdentitiesCommand,
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "./commands/ListPoolOriginationIdentitiesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutKeywordCommand, PutKeywordCommandInput, PutKeywordCommandOutput } from "./commands/PutKeywordCommand";
import {
  PutOptedOutNumberCommand,
  PutOptedOutNumberCommandInput,
  PutOptedOutNumberCommandOutput,
} from "./commands/PutOptedOutNumberCommand";
import {
  ReleasePhoneNumberCommand,
  ReleasePhoneNumberCommandInput,
  ReleasePhoneNumberCommandOutput,
} from "./commands/ReleasePhoneNumberCommand";
import {
  RequestPhoneNumberCommand,
  RequestPhoneNumberCommandInput,
  RequestPhoneNumberCommandOutput,
} from "./commands/RequestPhoneNumberCommand";
import {
  SendTextMessageCommand,
  SendTextMessageCommandInput,
  SendTextMessageCommandOutput,
} from "./commands/SendTextMessageCommand";
import {
  SendVoiceMessageCommand,
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput,
} from "./commands/SendVoiceMessageCommand";
import {
  SetDefaultMessageTypeCommand,
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
} from "./commands/SetDefaultMessageTypeCommand";
import {
  SetDefaultSenderIdCommand,
  SetDefaultSenderIdCommandInput,
  SetDefaultSenderIdCommandOutput,
} from "./commands/SetDefaultSenderIdCommand";
import {
  SetTextMessageSpendLimitOverrideCommand,
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetTextMessageSpendLimitOverrideCommand";
import {
  SetVoiceMessageSpendLimitOverrideCommand,
  SetVoiceMessageSpendLimitOverrideCommandInput,
  SetVoiceMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetVoiceMessageSpendLimitOverrideCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEventDestinationCommand,
  UpdateEventDestinationCommandInput,
  UpdateEventDestinationCommandOutput,
} from "./commands/UpdateEventDestinationCommand";
import {
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
} from "./commands/UpdatePhoneNumberCommand";
import { UpdatePoolCommand, UpdatePoolCommandInput, UpdatePoolCommandOutput } from "./commands/UpdatePoolCommand";
import { PinpointSMSVoiceV2Client } from "./PinpointSMSVoiceV2Client";

/**
 * <p>Welcome to the <i>Amazon Pinpoint SMS and Voice, version 2 API Reference</i>.
 *             This guide provides information about Amazon Pinpoint SMS and Voice, version 2 API
 *             resources, including supported HTTP methods, parameters, and schemas.</p>
 *         <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with
 *             your recipients across multiple messaging channels. The Amazon Pinpoint SMS and
 *             Voice, version 2 API provides programmatic access to options that are unique to the SMS
 *             and voice channels and supplements the resources provided by the Amazon Pinpoint
 *             API.</p>
 *         <p>If you're new to Amazon Pinpoint, it's also helpful to review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">
 *                 Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint
 *                 Developer Guide</i> provides tutorials, code samples, and procedures that
 *             demonstrate how to use Amazon Pinpoint features programmatically and how to integrate
 *                 Amazon Pinpoint functionality into mobile apps and other types of applications.
 *             The guide also provides key information, such as Amazon Pinpoint integration with
 *             other Amazon Web Services services, and the quotas that apply to use of the
 *             service.</p>
 */
export class PinpointSMSVoiceV2 extends PinpointSMSVoiceV2Client {
  /**
   * <p>Associates the specified origination identity with a pool.</p>
   *         <p>If the origination identity is a phone number and is already associated with another
   *             pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
   *         <p>If the origination identity configuration doesn't match the pool's configuration, an
   *             Error is returned.</p>
   */
  public associateOriginationIdentity(
    args: AssociateOriginationIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateOriginationIdentityCommandOutput>;
  public associateOriginationIdentity(
    args: AssociateOriginationIdentityCommandInput,
    cb: (err: any, data?: AssociateOriginationIdentityCommandOutput) => void
  ): void;
  public associateOriginationIdentity(
    args: AssociateOriginationIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateOriginationIdentityCommandOutput) => void
  ): void;
  public associateOriginationIdentity(
    args: AssociateOriginationIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateOriginationIdentityCommandOutput) => void),
    cb?: (err: any, data?: AssociateOriginationIdentityCommandOutput) => void
  ): Promise<AssociateOriginationIdentityCommandOutput> | void {
    const command = new AssociateOriginationIdentityCommand(args);
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
   * <p>Creates a new configuration set. After you create the configuration set, you can add
   *             one or more event destinations to it.</p>
   *         <p>A configuration set is a set of rules that you apply to the SMS and voice messages
   *             that you send.</p>
   *         <p>When you send a message, you can optionally specify a single configuration set.</p>
   */
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  public createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): Promise<CreateConfigurationSetCommandOutput> | void {
    const command = new CreateConfigurationSetCommand(args);
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
   * <p>Creates a new event destination in a configuration set.</p>
   *         <p>An event destination is a location where you send message events. The event options
   *             are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example,
   *             when a message is delivered successfully, you can send information about that event to
   *             an event destination, or send notifications to endpoints that are subscribed to an
   *                 Amazon SNS topic.</p>
   *         <p>Each configuration set can contain between 0 and 5 event destinations. Each event
   *             destination can contain a reference to a single destination, such as a CloudWatch
   *             or Kinesis Data Firehose destination.</p>
   */
  public createEventDestination(
    args: CreateEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventDestinationCommandOutput>;
  public createEventDestination(
    args: CreateEventDestinationCommandInput,
    cb: (err: any, data?: CreateEventDestinationCommandOutput) => void
  ): void;
  public createEventDestination(
    args: CreateEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventDestinationCommandOutput) => void
  ): void;
  public createEventDestination(
    args: CreateEventDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateEventDestinationCommandOutput) => void
  ): Promise<CreateEventDestinationCommandOutput> | void {
    const command = new CreateEventDestinationCommand(args);
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
   * <p>Creates a new opt-out list.</p>
   *         <p>If the opt-out list name already exists, an Error is returned.</p>
   *         <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send
   *             SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for
   *             the phone number is added to the opt-out list. In addition to STOP, your recipients can
   *             use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported
   *             opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout">
   *                 SMS opt out </a> in the <i>Amazon Pinpoint User
   *             Guide</i>.</p>
   */
  public createOptOutList(
    args: CreateOptOutListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOptOutListCommandOutput>;
  public createOptOutList(
    args: CreateOptOutListCommandInput,
    cb: (err: any, data?: CreateOptOutListCommandOutput) => void
  ): void;
  public createOptOutList(
    args: CreateOptOutListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOptOutListCommandOutput) => void
  ): void;
  public createOptOutList(
    args: CreateOptOutListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOptOutListCommandOutput) => void),
    cb?: (err: any, data?: CreateOptOutListCommandOutput) => void
  ): Promise<CreateOptOutListCommandOutput> | void {
    const command = new CreateOptOutListCommand(args);
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
   * <p>Creates a new pool and associates the specified origination identity to the pool. A
   *             pool can include one or more phone numbers and SenderIds that are associated with your
   *                 Amazon Web Services account.</p>
   *         <p>The new pool inherits its configuration from the specified origination identity. This
   *             includes keywords, message type, opt-out list, two-way configuration, and self-managed
   *             opt-out configuration. Deletion protection isn't inherited from the origination identity
   *             and defaults to false.</p>
   *         <p>If the origination identity is a phone number and is already associated with another
   *             pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
   */
  public createPool(args: CreatePoolCommandInput, options?: __HttpHandlerOptions): Promise<CreatePoolCommandOutput>;
  public createPool(args: CreatePoolCommandInput, cb: (err: any, data?: CreatePoolCommandOutput) => void): void;
  public createPool(
    args: CreatePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePoolCommandOutput) => void
  ): void;
  public createPool(
    args: CreatePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePoolCommandOutput) => void),
    cb?: (err: any, data?: CreatePoolCommandOutput) => void
  ): Promise<CreatePoolCommandOutput> | void {
    const command = new CreatePoolCommand(args);
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
   * <p>Deletes an existing configuration set.</p>
   *         <p>A configuration set is a set of rules that you apply to voice and SMS messages that
   *             you send. In a configuration set, you can specify a destination for specific types of
   *             events related to voice and SMS messages. </p>
   */
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  public deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): Promise<DeleteConfigurationSetCommandOutput> | void {
    const command = new DeleteConfigurationSetCommand(args);
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
   * <p>Deletes an existing default message type on a configuration set.</p>
   *         <p> A message type is a type of messages that you plan to send. If you send
   *             account-related messages or time-sensitive messages such as one-time passcodes, choose
   *                 <b>Transactional</b>. If you plan to send messages that
   *             contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services
   *             account. </p>
   */
  public deleteDefaultMessageType(
    args: DeleteDefaultMessageTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDefaultMessageTypeCommandOutput>;
  public deleteDefaultMessageType(
    args: DeleteDefaultMessageTypeCommandInput,
    cb: (err: any, data?: DeleteDefaultMessageTypeCommandOutput) => void
  ): void;
  public deleteDefaultMessageType(
    args: DeleteDefaultMessageTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDefaultMessageTypeCommandOutput) => void
  ): void;
  public deleteDefaultMessageType(
    args: DeleteDefaultMessageTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDefaultMessageTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteDefaultMessageTypeCommandOutput) => void
  ): Promise<DeleteDefaultMessageTypeCommandOutput> | void {
    const command = new DeleteDefaultMessageTypeCommand(args);
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
   * <p>Deletes an existing default sender ID on a configuration set.</p>
   *         <p>A default sender ID is the identity that appears on recipients' devices when they
   *             receive SMS messages. Support for sender ID capabilities varies by country or
   *             region.</p>
   */
  public deleteDefaultSenderId(
    args: DeleteDefaultSenderIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDefaultSenderIdCommandOutput>;
  public deleteDefaultSenderId(
    args: DeleteDefaultSenderIdCommandInput,
    cb: (err: any, data?: DeleteDefaultSenderIdCommandOutput) => void
  ): void;
  public deleteDefaultSenderId(
    args: DeleteDefaultSenderIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDefaultSenderIdCommandOutput) => void
  ): void;
  public deleteDefaultSenderId(
    args: DeleteDefaultSenderIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDefaultSenderIdCommandOutput) => void),
    cb?: (err: any, data?: DeleteDefaultSenderIdCommandOutput) => void
  ): Promise<DeleteDefaultSenderIdCommandOutput> | void {
    const command = new DeleteDefaultSenderIdCommand(args);
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
   * <p>Deletes an existing event destination.</p>
   *         <p>An event destination is a location where you send response information about the
   *             messages that you send. For example, when a message is delivered successfully, you can
   *             send information about that event to an Amazon CloudWatch destination, or send
   *             notifications to endpoints that are subscribed to an Amazon SNS topic.</p>
   */
  public deleteEventDestination(
    args: DeleteEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventDestinationCommandOutput>;
  public deleteEventDestination(
    args: DeleteEventDestinationCommandInput,
    cb: (err: any, data?: DeleteEventDestinationCommandOutput) => void
  ): void;
  public deleteEventDestination(
    args: DeleteEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventDestinationCommandOutput) => void
  ): void;
  public deleteEventDestination(
    args: DeleteEventDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventDestinationCommandOutput) => void
  ): Promise<DeleteEventDestinationCommandOutput> | void {
    const command = new DeleteEventDestinationCommand(args);
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
   * <p>Deletes an existing keyword from an origination phone number or pool.</p>
   *         <p>A keyword is a word that you can search for on a particular phone number or pool. It
   *             is also a specific word or phrase that an end user can send to your number to elicit a
   *             response, such as an informational message or a special offer. When your number receives
   *             a message that begins with a keyword, Amazon Pinpoint responds with a customizable
   *             message.</p>
   *         <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>
   */
  public deleteKeyword(
    args: DeleteKeywordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeywordCommandOutput>;
  public deleteKeyword(
    args: DeleteKeywordCommandInput,
    cb: (err: any, data?: DeleteKeywordCommandOutput) => void
  ): void;
  public deleteKeyword(
    args: DeleteKeywordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeywordCommandOutput) => void
  ): void;
  public deleteKeyword(
    args: DeleteKeywordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteKeywordCommandOutput) => void),
    cb?: (err: any, data?: DeleteKeywordCommandOutput) => void
  ): Promise<DeleteKeywordCommandOutput> | void {
    const command = new DeleteKeywordCommand(args);
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
   * <p>Deletes an existing opted out destination phone number from the specified opt-out
   *             list.</p>
   *         <p>Each destination phone number can only be deleted once every 30 days.</p>
   *         <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't
   *             exist, an Error is returned.</p>
   */
  public deleteOptedOutNumber(
    args: DeleteOptedOutNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOptedOutNumberCommandOutput>;
  public deleteOptedOutNumber(
    args: DeleteOptedOutNumberCommandInput,
    cb: (err: any, data?: DeleteOptedOutNumberCommandOutput) => void
  ): void;
  public deleteOptedOutNumber(
    args: DeleteOptedOutNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOptedOutNumberCommandOutput) => void
  ): void;
  public deleteOptedOutNumber(
    args: DeleteOptedOutNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOptedOutNumberCommandOutput) => void),
    cb?: (err: any, data?: DeleteOptedOutNumberCommandOutput) => void
  ): Promise<DeleteOptedOutNumberCommandOutput> | void {
    const command = new DeleteOptedOutNumberCommand(args);
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
   * <p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are
   *             deleted.</p>
   *         <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone
   *             number or pool, an Error is returned.</p>
   */
  public deleteOptOutList(
    args: DeleteOptOutListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOptOutListCommandOutput>;
  public deleteOptOutList(
    args: DeleteOptOutListCommandInput,
    cb: (err: any, data?: DeleteOptOutListCommandOutput) => void
  ): void;
  public deleteOptOutList(
    args: DeleteOptOutListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOptOutListCommandOutput) => void
  ): void;
  public deleteOptOutList(
    args: DeleteOptOutListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOptOutListCommandOutput) => void),
    cb?: (err: any, data?: DeleteOptOutListCommandOutput) => void
  ): Promise<DeleteOptOutListCommandOutput> | void {
    const command = new DeleteOptOutListCommand(args);
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
   * <p>Deletes an existing pool. Deleting a pool disassociates all origination identities
   *             from that pool.</p>
   *         <p>If the pool status isn't active or if deletion protection is enabled, an Error is
   *             returned.</p>
   *         <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more
   *             phone numbers and SenderIds that are associated with your Amazon Web Services
   *             account.</p>
   */
  public deletePool(args: DeletePoolCommandInput, options?: __HttpHandlerOptions): Promise<DeletePoolCommandOutput>;
  public deletePool(args: DeletePoolCommandInput, cb: (err: any, data?: DeletePoolCommandOutput) => void): void;
  public deletePool(
    args: DeletePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePoolCommandOutput) => void
  ): void;
  public deletePool(
    args: DeletePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePoolCommandOutput) => void),
    cb?: (err: any, data?: DeletePoolCommandOutput) => void
  ): Promise<DeletePoolCommandOutput> | void {
    const command = new DeletePoolCommand(args);
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
   * <p>Deletes an account-level monthly spending limit override for sending text messages.
   *             Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the
   *                 <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more
   *             information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a>
   *             in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   */
  public deleteTextMessageSpendLimitOverride(
    args: DeleteTextMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput>;
  public deleteTextMessageSpendLimitOverride(
    args: DeleteTextMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: DeleteTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public deleteTextMessageSpendLimitOverride(
    args: DeleteTextMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public deleteTextMessageSpendLimitOverride(
    args: DeleteTextMessageSpendLimitOverrideCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTextMessageSpendLimitOverrideCommandOutput) => void),
    cb?: (err: any, data?: DeleteTextMessageSpendLimitOverrideCommandOutput) => void
  ): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput> | void {
    const command = new DeleteTextMessageSpendLimitOverrideCommand(args);
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
   * <p>Deletes an account level monthly spend limit override for sending voice messages.
   *             Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the
   *                 <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more
   *             information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a>
   *             in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   */
  public deleteVoiceMessageSpendLimitOverride(
    args: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput>;
  public deleteVoiceMessageSpendLimitOverride(
    args: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: DeleteVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public deleteVoiceMessageSpendLimitOverride(
    args: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public deleteVoiceMessageSpendLimitOverride(
    args: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceMessageSpendLimitOverrideCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput> | void {
    const command = new DeleteVoiceMessageSpendLimitOverrideCommand(args);
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
   * <p>Describes attributes of your Amazon Web Services account. The supported account
   *             attributes include account tier, which indicates whether your account is in the sandbox
   *             or production environment. When you're ready to move your account out of the sandbox,
   *             create an Amazon Web Services Support case for a service limit increase request.</p>
   *         <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox
   *             protects both Amazon Web Services end recipients and SMS or voice recipients from fraud
   *             and abuse. </p>
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): Promise<DescribeAccountAttributesCommandOutput> | void {
    const command = new DescribeAccountAttributesCommand(args);
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
   * <p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your
   *             account. The description for a quota includes the quota name, current usage toward that
   *             quota, and the quota's maximum value.</p>
   *         <p>When you establish an Amazon Web Services account, the account has initial quotas on
   *             the maximum number of configuration sets, opt-out lists, phone numbers, and pools that
   *             you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">
   *                 Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer
   *                 Guide</i>.</p>
   */
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): Promise<DescribeAccountLimitsCommandOutput> | void {
    const command = new DescribeAccountLimitsCommand(args);
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
   * <p>Describes the specified configuration sets or all in your account.</p>
   *         <p>If you specify configuration set names, the output includes information for only the
   *             specified configuration sets. If you specify filters, the output includes information
   *             for only those configuration sets that meet the filter criteria. If you don't specify
   *             configuration set names or filters, the output includes information for all
   *             configuration sets.</p>
   *         <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
   */
  public describeConfigurationSets(
    args: DescribeConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationSetsCommandOutput>;
  public describeConfigurationSets(
    args: DescribeConfigurationSetsCommandInput,
    cb: (err: any, data?: DescribeConfigurationSetsCommandOutput) => void
  ): void;
  public describeConfigurationSets(
    args: DescribeConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationSetsCommandOutput) => void
  ): void;
  public describeConfigurationSets(
    args: DescribeConfigurationSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationSetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationSetsCommandOutput) => void
  ): Promise<DescribeConfigurationSetsCommandOutput> | void {
    const command = new DescribeConfigurationSetsCommand(args);
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
   * <p>Describes the specified keywords or all keywords on your origination phone number or
   *             pool.</p>
   *         <p>A keyword is a word that you can search for on a particular phone number or pool. It
   *             is also a specific word or phrase that an end user can send to your number to elicit a
   *             response, such as an informational message or a special offer. When your number receives
   *             a message that begins with a keyword, Amazon Pinpoint responds with a customizable
   *             message.</p>
   *         <p>If you specify a keyword that isn't valid, an Error is returned.</p>
   */
  public describeKeywords(
    args: DescribeKeywordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeywordsCommandOutput>;
  public describeKeywords(
    args: DescribeKeywordsCommandInput,
    cb: (err: any, data?: DescribeKeywordsCommandOutput) => void
  ): void;
  public describeKeywords(
    args: DescribeKeywordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeywordsCommandOutput) => void
  ): void;
  public describeKeywords(
    args: DescribeKeywordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeKeywordsCommandOutput) => void),
    cb?: (err: any, data?: DescribeKeywordsCommandOutput) => void
  ): Promise<DescribeKeywordsCommandOutput> | void {
    const command = new DescribeKeywordsCommand(args);
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
   * <p>Describes the specified opted out destination numbers or all opted out destination
   *             numbers in an opt-out list.</p>
   *         <p>If you specify opted out numbers, the output includes information for only the
   *             specified opted out numbers. If you specify filters, the output includes information for
   *             only those opted out numbers that meet the filter criteria. If you don't specify opted
   *             out numbers or filters, the output includes information for all opted out destination
   *             numbers in your opt-out list.</p>
   *         <p>If you specify an opted out number that isn't valid, an Error is returned.</p>
   */
  public describeOptedOutNumbers(
    args: DescribeOptedOutNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptedOutNumbersCommandOutput>;
  public describeOptedOutNumbers(
    args: DescribeOptedOutNumbersCommandInput,
    cb: (err: any, data?: DescribeOptedOutNumbersCommandOutput) => void
  ): void;
  public describeOptedOutNumbers(
    args: DescribeOptedOutNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptedOutNumbersCommandOutput) => void
  ): void;
  public describeOptedOutNumbers(
    args: DescribeOptedOutNumbersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOptedOutNumbersCommandOutput) => void),
    cb?: (err: any, data?: DescribeOptedOutNumbersCommandOutput) => void
  ): Promise<DescribeOptedOutNumbersCommandOutput> | void {
    const command = new DescribeOptedOutNumbersCommand(args);
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
   * <p>Describes the specified opt-out list or all opt-out lists in your account.</p>
   *         <p>If you specify opt-out list names, the output includes information for only the
   *             specified opt-out lists. Opt-out lists include only those that meet the filter criteria.
   *             If you don't specify opt-out list names or filters, the output includes information for
   *             all opt-out lists.</p>
   *         <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>
   */
  public describeOptOutLists(
    args: DescribeOptOutListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptOutListsCommandOutput>;
  public describeOptOutLists(
    args: DescribeOptOutListsCommandInput,
    cb: (err: any, data?: DescribeOptOutListsCommandOutput) => void
  ): void;
  public describeOptOutLists(
    args: DescribeOptOutListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptOutListsCommandOutput) => void
  ): void;
  public describeOptOutLists(
    args: DescribeOptOutListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOptOutListsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOptOutListsCommandOutput) => void
  ): Promise<DescribeOptOutListsCommandOutput> | void {
    const command = new DescribeOptOutListsCommand(args);
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
   * <p>Describes the specified origination phone number, or all the phone numbers in your
   *             account.</p>
   *         <p>If you specify phone number IDs, the output includes information for only the
   *             specified phone numbers. If you specify filters, the output includes information for
   *             only those phone numbers that meet the filter criteria. If you don't specify phone
   *             number IDs or filters, the output includes information for all phone numbers.</p>
   *         <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>
   */
  public describePhoneNumbers(
    args: DescribePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePhoneNumbersCommandOutput>;
  public describePhoneNumbers(
    args: DescribePhoneNumbersCommandInput,
    cb: (err: any, data?: DescribePhoneNumbersCommandOutput) => void
  ): void;
  public describePhoneNumbers(
    args: DescribePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePhoneNumbersCommandOutput) => void
  ): void;
  public describePhoneNumbers(
    args: DescribePhoneNumbersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: DescribePhoneNumbersCommandOutput) => void
  ): Promise<DescribePhoneNumbersCommandOutput> | void {
    const command = new DescribePhoneNumbersCommand(args);
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
   * <p>Retrieves the specified pools or all pools associated with your Amazon Web Services
   *             account.</p>
   *         <p>If you specify pool IDs, the output includes information for only the specified pools.
   *             If you specify filters, the output includes information for only those pools that meet
   *             the filter criteria. If you don't specify pool IDs or filters, the output includes
   *             information for all pools.</p>
   *         <p>If you specify a pool ID that isn't valid, an Error is returned.</p>
   *         <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more
   *             phone numbers and SenderIds that are associated with your Amazon Web Services
   *             account.</p>
   */
  public describePools(
    args: DescribePoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePoolsCommandOutput>;
  public describePools(
    args: DescribePoolsCommandInput,
    cb: (err: any, data?: DescribePoolsCommandOutput) => void
  ): void;
  public describePools(
    args: DescribePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePoolsCommandOutput) => void
  ): void;
  public describePools(
    args: DescribePoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePoolsCommandOutput) => void),
    cb?: (err: any, data?: DescribePoolsCommandOutput) => void
  ): Promise<DescribePoolsCommandOutput> | void {
    const command = new DescribePoolsCommand(args);
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
   * <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p>
   *         <p>If you specify SenderIds, the output includes information for only the specified
   *             SenderIds. If you specify filters, the output includes information for only those
   *             SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the
   *             output includes information for all SenderIds.</p>
   *         <p>f you specify a sender ID that isn't valid, an Error is returned.</p>
   */
  public describeSenderIds(
    args: DescribeSenderIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSenderIdsCommandOutput>;
  public describeSenderIds(
    args: DescribeSenderIdsCommandInput,
    cb: (err: any, data?: DescribeSenderIdsCommandOutput) => void
  ): void;
  public describeSenderIds(
    args: DescribeSenderIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSenderIdsCommandOutput) => void
  ): void;
  public describeSenderIds(
    args: DescribeSenderIdsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSenderIdsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSenderIdsCommandOutput) => void
  ): Promise<DescribeSenderIdsCommandOutput> | void {
    const command = new DescribeSenderIdsCommand(args);
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
   * <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and
   *             text messages.</p>
   *         <p>When you establish an Amazon Web Services account, the account has initial monthly
   *             spend limit in a given Region. For more information on increasing your monthly spend
   *             limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html">
   *                 Requesting increases to your monthly SMS spending quota for Amazon Pinpoint
   *             </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  public describeSpendLimits(
    args: DescribeSpendLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpendLimitsCommandOutput>;
  public describeSpendLimits(
    args: DescribeSpendLimitsCommandInput,
    cb: (err: any, data?: DescribeSpendLimitsCommandOutput) => void
  ): void;
  public describeSpendLimits(
    args: DescribeSpendLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpendLimitsCommandOutput) => void
  ): void;
  public describeSpendLimits(
    args: DescribeSpendLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpendLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpendLimitsCommandOutput) => void
  ): Promise<DescribeSpendLimitsCommandOutput> | void {
    const command = new DescribeSpendLimitsCommand(args);
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
   * <p>Removes the specified origination identity from an existing pool.</p>
   *         <p>If the origination identity isn't associated with the specified pool, an Error is
   *             returned.</p>
   */
  public disassociateOriginationIdentity(
    args: DisassociateOriginationIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateOriginationIdentityCommandOutput>;
  public disassociateOriginationIdentity(
    args: DisassociateOriginationIdentityCommandInput,
    cb: (err: any, data?: DisassociateOriginationIdentityCommandOutput) => void
  ): void;
  public disassociateOriginationIdentity(
    args: DisassociateOriginationIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateOriginationIdentityCommandOutput) => void
  ): void;
  public disassociateOriginationIdentity(
    args: DisassociateOriginationIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateOriginationIdentityCommandOutput) => void),
    cb?: (err: any, data?: DisassociateOriginationIdentityCommandOutput) => void
  ): Promise<DisassociateOriginationIdentityCommandOutput> | void {
    const command = new DisassociateOriginationIdentityCommand(args);
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
   * <p>Lists all associated origination identities in your pool.</p>
   *         <p>If you specify filters, the output includes information for only those origination
   *             identities that meet the filter criteria.</p>
   */
  public listPoolOriginationIdentities(
    args: ListPoolOriginationIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoolOriginationIdentitiesCommandOutput>;
  public listPoolOriginationIdentities(
    args: ListPoolOriginationIdentitiesCommandInput,
    cb: (err: any, data?: ListPoolOriginationIdentitiesCommandOutput) => void
  ): void;
  public listPoolOriginationIdentities(
    args: ListPoolOriginationIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoolOriginationIdentitiesCommandOutput) => void
  ): void;
  public listPoolOriginationIdentities(
    args: ListPoolOriginationIdentitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPoolOriginationIdentitiesCommandOutput) => void),
    cb?: (err: any, data?: ListPoolOriginationIdentitiesCommandOutput) => void
  ): Promise<ListPoolOriginationIdentitiesCommandOutput> | void {
    const command = new ListPoolOriginationIdentitiesCommand(args);
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
   * <p>List all tags associated with a resource.</p>
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
   * <p>Creates or updates a keyword configuration on an origination phone number or
   *             pool.</p>
   *         <p> A keyword is a word that you can search for on a particular phone number or pool. It
   *             is also a specific word or phrase that an end user can send to your number to elicit a
   *             response, such as an informational message or a special offer. When your number receives
   *             a message that begins with a keyword, Amazon Pinpoint responds with a customizable
   *             message.</p>
   *         <p>If you specify a keyword that isn't valid, an Error is returned.</p>
   */
  public putKeyword(args: PutKeywordCommandInput, options?: __HttpHandlerOptions): Promise<PutKeywordCommandOutput>;
  public putKeyword(args: PutKeywordCommandInput, cb: (err: any, data?: PutKeywordCommandOutput) => void): void;
  public putKeyword(
    args: PutKeywordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutKeywordCommandOutput) => void
  ): void;
  public putKeyword(
    args: PutKeywordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutKeywordCommandOutput) => void),
    cb?: (err: any, data?: PutKeywordCommandOutput) => void
  ): Promise<PutKeywordCommandOutput> | void {
    const command = new PutKeywordCommand(args);
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
   * <p>Creates an opted out destination phone number in the opt-out list.</p>
   *         <p>If the destination phone number isn't valid or if the specified opt-out list doesn't
   *             exist, an Error is returned.</p>
   */
  public putOptedOutNumber(
    args: PutOptedOutNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOptedOutNumberCommandOutput>;
  public putOptedOutNumber(
    args: PutOptedOutNumberCommandInput,
    cb: (err: any, data?: PutOptedOutNumberCommandOutput) => void
  ): void;
  public putOptedOutNumber(
    args: PutOptedOutNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOptedOutNumberCommandOutput) => void
  ): void;
  public putOptedOutNumber(
    args: PutOptedOutNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutOptedOutNumberCommandOutput) => void),
    cb?: (err: any, data?: PutOptedOutNumberCommandOutput) => void
  ): Promise<PutOptedOutNumberCommandOutput> | void {
    const command = new PutOptedOutNumberCommand(args);
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
   * <p>Releases an existing origination phone number in your account. Once released, a phone
   *             number is no longer available for sending messages.</p>
   *         <p>If the origination phone number has deletion protection enabled or is associated with
   *             a pool, an Error is returned.</p>
   */
  public releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleasePhoneNumberCommandOutput>;
  public releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    cb: (err: any, data?: ReleasePhoneNumberCommandOutput) => void
  ): void;
  public releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleasePhoneNumberCommandOutput) => void
  ): void;
  public releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReleasePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: ReleasePhoneNumberCommandOutput) => void
  ): Promise<ReleasePhoneNumberCommandOutput> | void {
    const command = new ReleasePhoneNumberCommand(args);
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
   * <p>Request an origination phone number for use in your account. For more information on
   *             phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a
   *                 number </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  public requestPhoneNumber(
    args: RequestPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestPhoneNumberCommandOutput>;
  public requestPhoneNumber(
    args: RequestPhoneNumberCommandInput,
    cb: (err: any, data?: RequestPhoneNumberCommandOutput) => void
  ): void;
  public requestPhoneNumber(
    args: RequestPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestPhoneNumberCommandOutput) => void
  ): void;
  public requestPhoneNumber(
    args: RequestPhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: RequestPhoneNumberCommandOutput) => void
  ): Promise<RequestPhoneNumberCommandOutput> | void {
    const command = new RequestPhoneNumberCommand(args);
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
   * <p>Creates a new text message and sends it to a recipient's phone number.</p>
   *         <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit
   *             depends on the destination country of your messages, as well as the type of phone number
   *             (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per
   *                 Second (MPS) limits</a> in the <i>Amazon Pinpoint User
   *                 Guide</i>.</p>
   */
  public sendTextMessage(
    args: SendTextMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTextMessageCommandOutput>;
  public sendTextMessage(
    args: SendTextMessageCommandInput,
    cb: (err: any, data?: SendTextMessageCommandOutput) => void
  ): void;
  public sendTextMessage(
    args: SendTextMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTextMessageCommandOutput) => void
  ): void;
  public sendTextMessage(
    args: SendTextMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendTextMessageCommandOutput) => void),
    cb?: (err: any, data?: SendTextMessageCommandOutput) => void
  ): Promise<SendTextMessageCommandOutput> | void {
    const command = new SendTextMessageCommand(args);
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
   * <p>Allows you to send a request that sends a text message through Amazon Pinpoint.
   *             This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to
   *             convert a text script into a voice message.</p>
   */
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendVoiceMessageCommandOutput>;
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;
  public sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendVoiceMessageCommandOutput) => void),
    cb?: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): Promise<SendVoiceMessageCommandOutput> | void {
    const command = new SendVoiceMessageCommand(args);
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
   * <p>Sets the default message type on a configuration set.</p>
   *         <p>Choose the category of SMS messages that you plan to send from this account. If you
   *             send account-related messages or time-sensitive messages such as one-time passcodes,
   *             choose <b>Transactional</b>. If you plan to send messages that
   *             contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services
   *             account.</p>
   */
  public setDefaultMessageType(
    args: SetDefaultMessageTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultMessageTypeCommandOutput>;
  public setDefaultMessageType(
    args: SetDefaultMessageTypeCommandInput,
    cb: (err: any, data?: SetDefaultMessageTypeCommandOutput) => void
  ): void;
  public setDefaultMessageType(
    args: SetDefaultMessageTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultMessageTypeCommandOutput) => void
  ): void;
  public setDefaultMessageType(
    args: SetDefaultMessageTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetDefaultMessageTypeCommandOutput) => void),
    cb?: (err: any, data?: SetDefaultMessageTypeCommandOutput) => void
  ): Promise<SetDefaultMessageTypeCommandOutput> | void {
    const command = new SetDefaultMessageTypeCommand(args);
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
   * <p>Sets default sender ID on a configuration set.</p>
   *         <p>When sending a text message to a destination country that supports sender IDs, the
   *             default sender ID on the configuration set specified will be used if no dedicated
   *             origination phone numbers or registered sender IDs are available in your account.</p>
   */
  public setDefaultSenderId(
    args: SetDefaultSenderIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultSenderIdCommandOutput>;
  public setDefaultSenderId(
    args: SetDefaultSenderIdCommandInput,
    cb: (err: any, data?: SetDefaultSenderIdCommandOutput) => void
  ): void;
  public setDefaultSenderId(
    args: SetDefaultSenderIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultSenderIdCommandOutput) => void
  ): void;
  public setDefaultSenderId(
    args: SetDefaultSenderIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetDefaultSenderIdCommandOutput) => void),
    cb?: (err: any, data?: SetDefaultSenderIdCommandOutput) => void
  ): Promise<SetDefaultSenderIdCommandOutput> | void {
    const command = new SetDefaultSenderIdCommand(args);
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
   * <p>Sets an account level monthly spend limit override for sending text messages. The
   *             requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is
   *             set by Amazon Web Services. </p>
   */
  public setTextMessageSpendLimitOverride(
    args: SetTextMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTextMessageSpendLimitOverrideCommandOutput>;
  public setTextMessageSpendLimitOverride(
    args: SetTextMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: SetTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public setTextMessageSpendLimitOverride(
    args: SetTextMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public setTextMessageSpendLimitOverride(
    args: SetTextMessageSpendLimitOverrideCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTextMessageSpendLimitOverrideCommandOutput) => void),
    cb?: (err: any, data?: SetTextMessageSpendLimitOverrideCommandOutput) => void
  ): Promise<SetTextMessageSpendLimitOverrideCommandOutput> | void {
    const command = new SetTextMessageSpendLimitOverrideCommand(args);
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
   * <p>Sets an account level monthly spend limit override for sending voice messages. The
   *             requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is
   *             set by Amazon Web Services. </p>
   */
  public setVoiceMessageSpendLimitOverride(
    args: SetVoiceMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput>;
  public setVoiceMessageSpendLimitOverride(
    args: SetVoiceMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: SetVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public setVoiceMessageSpendLimitOverride(
    args: SetVoiceMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  public setVoiceMessageSpendLimitOverride(
    args: SetVoiceMessageSpendLimitOverrideCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetVoiceMessageSpendLimitOverrideCommandOutput) => void),
    cb?: (err: any, data?: SetVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput> | void {
    const command = new SetVoiceMessageSpendLimitOverrideCommand(args);
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
   * <p>Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS
   *             Voice, version 2 resource. When you specify an existing tag key, the value is
   *             overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag
   *             consists of a key and an optional value. Tag keys must be unique per resource. For more
   *             information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer
   *                 Guide</i>.</p>
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
   * <p>Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2
   *             resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer
   *                 Guide</i>. </p>
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
   * <p>Updates an existing event destination in a configuration set. You can update the
   *                 IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can
   *             also enable or disable the event destination.</p>
   *         <p>You may want to update an event destination to change its matching event types or
   *             updating the destination resource ARN. You can't change an event destination's type
   *             between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
   */
  public updateEventDestination(
    args: UpdateEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventDestinationCommandOutput>;
  public updateEventDestination(
    args: UpdateEventDestinationCommandInput,
    cb: (err: any, data?: UpdateEventDestinationCommandOutput) => void
  ): void;
  public updateEventDestination(
    args: UpdateEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventDestinationCommandOutput) => void
  ): void;
  public updateEventDestination(
    args: UpdateEventDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEventDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventDestinationCommandOutput) => void
  ): Promise<UpdateEventDestinationCommandOutput> | void {
    const command = new UpdateEventDestinationCommand(args);
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
   * <p>Updates the configuration of an existing origination phone number. You can update the
   *             opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable
   *             or disable self-managed opt-outs, and enable or disable deletion protection.</p>
   *         <p>If the origination phone number is associated with a pool, an Error is
   *             returned.</p>
   */
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): Promise<UpdatePhoneNumberCommandOutput> | void {
    const command = new UpdatePhoneNumberCommand(args);
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
   * <p>Updates the configuration of an existing pool. You can update the opt-out list, enable
   *             or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or
   *             disable self-managed opt-outs, enable or disable deletion protection, and enable or
   *             disable shared routes.</p>
   */
  public updatePool(args: UpdatePoolCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePoolCommandOutput>;
  public updatePool(args: UpdatePoolCommandInput, cb: (err: any, data?: UpdatePoolCommandOutput) => void): void;
  public updatePool(
    args: UpdatePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePoolCommandOutput) => void
  ): void;
  public updatePool(
    args: UpdatePoolCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePoolCommandOutput) => void),
    cb?: (err: any, data?: UpdatePoolCommandOutput) => void
  ): Promise<UpdatePoolCommandOutput> | void {
    const command = new UpdatePoolCommand(args);
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
