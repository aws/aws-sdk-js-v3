// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { PinpointSMSVoiceV2Client, PinpointSMSVoiceV2ClientConfig } from "./PinpointSMSVoiceV2Client";

const commands = {
  AssociateOriginationIdentityCommand,
  CreateConfigurationSetCommand,
  CreateEventDestinationCommand,
  CreateOptOutListCommand,
  CreatePoolCommand,
  DeleteConfigurationSetCommand,
  DeleteDefaultMessageTypeCommand,
  DeleteDefaultSenderIdCommand,
  DeleteEventDestinationCommand,
  DeleteKeywordCommand,
  DeleteOptedOutNumberCommand,
  DeleteOptOutListCommand,
  DeletePoolCommand,
  DeleteTextMessageSpendLimitOverrideCommand,
  DeleteVoiceMessageSpendLimitOverrideCommand,
  DescribeAccountAttributesCommand,
  DescribeAccountLimitsCommand,
  DescribeConfigurationSetsCommand,
  DescribeKeywordsCommand,
  DescribeOptedOutNumbersCommand,
  DescribeOptOutListsCommand,
  DescribePhoneNumbersCommand,
  DescribePoolsCommand,
  DescribeSenderIdsCommand,
  DescribeSpendLimitsCommand,
  DisassociateOriginationIdentityCommand,
  ListPoolOriginationIdentitiesCommand,
  ListTagsForResourceCommand,
  PutKeywordCommand,
  PutOptedOutNumberCommand,
  ReleasePhoneNumberCommand,
  RequestPhoneNumberCommand,
  SendTextMessageCommand,
  SendVoiceMessageCommand,
  SetDefaultMessageTypeCommand,
  SetDefaultSenderIdCommand,
  SetTextMessageSpendLimitOverrideCommand,
  SetVoiceMessageSpendLimitOverrideCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEventDestinationCommand,
  UpdatePhoneNumberCommand,
  UpdatePoolCommand,
};

export interface PinpointSMSVoiceV2 {
  /**
   * @see {@link AssociateOriginationIdentityCommand}
   */
  associateOriginationIdentity(
    args: AssociateOriginationIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateOriginationIdentityCommandOutput>;
  associateOriginationIdentity(
    args: AssociateOriginationIdentityCommandInput,
    cb: (err: any, data?: AssociateOriginationIdentityCommandOutput) => void
  ): void;
  associateOriginationIdentity(
    args: AssociateOriginationIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateOriginationIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetCommand}
   */
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventDestinationCommand}
   */
  createEventDestination(
    args: CreateEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventDestinationCommandOutput>;
  createEventDestination(
    args: CreateEventDestinationCommandInput,
    cb: (err: any, data?: CreateEventDestinationCommandOutput) => void
  ): void;
  createEventDestination(
    args: CreateEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOptOutListCommand}
   */
  createOptOutList(
    args: CreateOptOutListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOptOutListCommandOutput>;
  createOptOutList(
    args: CreateOptOutListCommandInput,
    cb: (err: any, data?: CreateOptOutListCommandOutput) => void
  ): void;
  createOptOutList(
    args: CreateOptOutListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOptOutListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePoolCommand}
   */
  createPool(args: CreatePoolCommandInput, options?: __HttpHandlerOptions): Promise<CreatePoolCommandOutput>;
  createPool(args: CreatePoolCommandInput, cb: (err: any, data?: CreatePoolCommandOutput) => void): void;
  createPool(
    args: CreatePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetCommand}
   */
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDefaultMessageTypeCommand}
   */
  deleteDefaultMessageType(
    args: DeleteDefaultMessageTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDefaultMessageTypeCommandOutput>;
  deleteDefaultMessageType(
    args: DeleteDefaultMessageTypeCommandInput,
    cb: (err: any, data?: DeleteDefaultMessageTypeCommandOutput) => void
  ): void;
  deleteDefaultMessageType(
    args: DeleteDefaultMessageTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDefaultMessageTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDefaultSenderIdCommand}
   */
  deleteDefaultSenderId(
    args: DeleteDefaultSenderIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDefaultSenderIdCommandOutput>;
  deleteDefaultSenderId(
    args: DeleteDefaultSenderIdCommandInput,
    cb: (err: any, data?: DeleteDefaultSenderIdCommandOutput) => void
  ): void;
  deleteDefaultSenderId(
    args: DeleteDefaultSenderIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDefaultSenderIdCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventDestinationCommand}
   */
  deleteEventDestination(
    args: DeleteEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventDestinationCommandOutput>;
  deleteEventDestination(
    args: DeleteEventDestinationCommandInput,
    cb: (err: any, data?: DeleteEventDestinationCommandOutput) => void
  ): void;
  deleteEventDestination(
    args: DeleteEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeywordCommand}
   */
  deleteKeyword(args: DeleteKeywordCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKeywordCommandOutput>;
  deleteKeyword(args: DeleteKeywordCommandInput, cb: (err: any, data?: DeleteKeywordCommandOutput) => void): void;
  deleteKeyword(
    args: DeleteKeywordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeywordCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOptedOutNumberCommand}
   */
  deleteOptedOutNumber(
    args: DeleteOptedOutNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOptedOutNumberCommandOutput>;
  deleteOptedOutNumber(
    args: DeleteOptedOutNumberCommandInput,
    cb: (err: any, data?: DeleteOptedOutNumberCommandOutput) => void
  ): void;
  deleteOptedOutNumber(
    args: DeleteOptedOutNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOptedOutNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOptOutListCommand}
   */
  deleteOptOutList(
    args: DeleteOptOutListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOptOutListCommandOutput>;
  deleteOptOutList(
    args: DeleteOptOutListCommandInput,
    cb: (err: any, data?: DeleteOptOutListCommandOutput) => void
  ): void;
  deleteOptOutList(
    args: DeleteOptOutListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOptOutListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePoolCommand}
   */
  deletePool(args: DeletePoolCommandInput, options?: __HttpHandlerOptions): Promise<DeletePoolCommandOutput>;
  deletePool(args: DeletePoolCommandInput, cb: (err: any, data?: DeletePoolCommandOutput) => void): void;
  deletePool(
    args: DeletePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTextMessageSpendLimitOverrideCommand}
   */
  deleteTextMessageSpendLimitOverride(
    args: DeleteTextMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput>;
  deleteTextMessageSpendLimitOverride(
    args: DeleteTextMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: DeleteTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  deleteTextMessageSpendLimitOverride(
    args: DeleteTextMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceMessageSpendLimitOverrideCommand}
   */
  deleteVoiceMessageSpendLimitOverride(
    args: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput>;
  deleteVoiceMessageSpendLimitOverride(
    args: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: DeleteVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  deleteVoiceMessageSpendLimitOverride(
    args: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationSetsCommand}
   */
  describeConfigurationSets(
    args: DescribeConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationSetsCommandOutput>;
  describeConfigurationSets(
    args: DescribeConfigurationSetsCommandInput,
    cb: (err: any, data?: DescribeConfigurationSetsCommandOutput) => void
  ): void;
  describeConfigurationSets(
    args: DescribeConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeywordsCommand}
   */
  describeKeywords(
    args: DescribeKeywordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeywordsCommandOutput>;
  describeKeywords(
    args: DescribeKeywordsCommandInput,
    cb: (err: any, data?: DescribeKeywordsCommandOutput) => void
  ): void;
  describeKeywords(
    args: DescribeKeywordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeywordsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOptedOutNumbersCommand}
   */
  describeOptedOutNumbers(
    args: DescribeOptedOutNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptedOutNumbersCommandOutput>;
  describeOptedOutNumbers(
    args: DescribeOptedOutNumbersCommandInput,
    cb: (err: any, data?: DescribeOptedOutNumbersCommandOutput) => void
  ): void;
  describeOptedOutNumbers(
    args: DescribeOptedOutNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptedOutNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOptOutListsCommand}
   */
  describeOptOutLists(
    args: DescribeOptOutListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOptOutListsCommandOutput>;
  describeOptOutLists(
    args: DescribeOptOutListsCommandInput,
    cb: (err: any, data?: DescribeOptOutListsCommandOutput) => void
  ): void;
  describeOptOutLists(
    args: DescribeOptOutListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOptOutListsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePhoneNumbersCommand}
   */
  describePhoneNumbers(
    args: DescribePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePhoneNumbersCommandOutput>;
  describePhoneNumbers(
    args: DescribePhoneNumbersCommandInput,
    cb: (err: any, data?: DescribePhoneNumbersCommandOutput) => void
  ): void;
  describePhoneNumbers(
    args: DescribePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePoolsCommand}
   */
  describePools(args: DescribePoolsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePoolsCommandOutput>;
  describePools(args: DescribePoolsCommandInput, cb: (err: any, data?: DescribePoolsCommandOutput) => void): void;
  describePools(
    args: DescribePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSenderIdsCommand}
   */
  describeSenderIds(
    args: DescribeSenderIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSenderIdsCommandOutput>;
  describeSenderIds(
    args: DescribeSenderIdsCommandInput,
    cb: (err: any, data?: DescribeSenderIdsCommandOutput) => void
  ): void;
  describeSenderIds(
    args: DescribeSenderIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSenderIdsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpendLimitsCommand}
   */
  describeSpendLimits(
    args: DescribeSpendLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpendLimitsCommandOutput>;
  describeSpendLimits(
    args: DescribeSpendLimitsCommandInput,
    cb: (err: any, data?: DescribeSpendLimitsCommandOutput) => void
  ): void;
  describeSpendLimits(
    args: DescribeSpendLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpendLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateOriginationIdentityCommand}
   */
  disassociateOriginationIdentity(
    args: DisassociateOriginationIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateOriginationIdentityCommandOutput>;
  disassociateOriginationIdentity(
    args: DisassociateOriginationIdentityCommandInput,
    cb: (err: any, data?: DisassociateOriginationIdentityCommandOutput) => void
  ): void;
  disassociateOriginationIdentity(
    args: DisassociateOriginationIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateOriginationIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoolOriginationIdentitiesCommand}
   */
  listPoolOriginationIdentities(
    args: ListPoolOriginationIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoolOriginationIdentitiesCommandOutput>;
  listPoolOriginationIdentities(
    args: ListPoolOriginationIdentitiesCommandInput,
    cb: (err: any, data?: ListPoolOriginationIdentitiesCommandOutput) => void
  ): void;
  listPoolOriginationIdentities(
    args: ListPoolOriginationIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoolOriginationIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutKeywordCommand}
   */
  putKeyword(args: PutKeywordCommandInput, options?: __HttpHandlerOptions): Promise<PutKeywordCommandOutput>;
  putKeyword(args: PutKeywordCommandInput, cb: (err: any, data?: PutKeywordCommandOutput) => void): void;
  putKeyword(
    args: PutKeywordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutKeywordCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOptedOutNumberCommand}
   */
  putOptedOutNumber(
    args: PutOptedOutNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOptedOutNumberCommandOutput>;
  putOptedOutNumber(
    args: PutOptedOutNumberCommandInput,
    cb: (err: any, data?: PutOptedOutNumberCommandOutput) => void
  ): void;
  putOptedOutNumber(
    args: PutOptedOutNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOptedOutNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link ReleasePhoneNumberCommand}
   */
  releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleasePhoneNumberCommandOutput>;
  releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    cb: (err: any, data?: ReleasePhoneNumberCommandOutput) => void
  ): void;
  releasePhoneNumber(
    args: ReleasePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleasePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestPhoneNumberCommand}
   */
  requestPhoneNumber(
    args: RequestPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestPhoneNumberCommandOutput>;
  requestPhoneNumber(
    args: RequestPhoneNumberCommandInput,
    cb: (err: any, data?: RequestPhoneNumberCommandOutput) => void
  ): void;
  requestPhoneNumber(
    args: RequestPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTextMessageCommand}
   */
  sendTextMessage(
    args: SendTextMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTextMessageCommandOutput>;
  sendTextMessage(args: SendTextMessageCommandInput, cb: (err: any, data?: SendTextMessageCommandOutput) => void): void;
  sendTextMessage(
    args: SendTextMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTextMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link SendVoiceMessageCommand}
   */
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendVoiceMessageCommandOutput>;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultMessageTypeCommand}
   */
  setDefaultMessageType(
    args: SetDefaultMessageTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultMessageTypeCommandOutput>;
  setDefaultMessageType(
    args: SetDefaultMessageTypeCommandInput,
    cb: (err: any, data?: SetDefaultMessageTypeCommandOutput) => void
  ): void;
  setDefaultMessageType(
    args: SetDefaultMessageTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultMessageTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultSenderIdCommand}
   */
  setDefaultSenderId(
    args: SetDefaultSenderIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultSenderIdCommandOutput>;
  setDefaultSenderId(
    args: SetDefaultSenderIdCommandInput,
    cb: (err: any, data?: SetDefaultSenderIdCommandOutput) => void
  ): void;
  setDefaultSenderId(
    args: SetDefaultSenderIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultSenderIdCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTextMessageSpendLimitOverrideCommand}
   */
  setTextMessageSpendLimitOverride(
    args: SetTextMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTextMessageSpendLimitOverrideCommandOutput>;
  setTextMessageSpendLimitOverride(
    args: SetTextMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: SetTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  setTextMessageSpendLimitOverride(
    args: SetTextMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTextMessageSpendLimitOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link SetVoiceMessageSpendLimitOverrideCommand}
   */
  setVoiceMessageSpendLimitOverride(
    args: SetVoiceMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput>;
  setVoiceMessageSpendLimitOverride(
    args: SetVoiceMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: SetVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  setVoiceMessageSpendLimitOverride(
    args: SetVoiceMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVoiceMessageSpendLimitOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventDestinationCommand}
   */
  updateEventDestination(
    args: UpdateEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventDestinationCommandOutput>;
  updateEventDestination(
    args: UpdateEventDestinationCommandInput,
    cb: (err: any, data?: UpdateEventDestinationCommandOutput) => void
  ): void;
  updateEventDestination(
    args: UpdateEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberCommand}
   */
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePoolCommand}
   */
  updatePool(args: UpdatePoolCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePoolCommandOutput>;
  updatePool(args: UpdatePoolCommandInput, cb: (err: any, data?: UpdatePoolCommandOutput) => void): void;
  updatePool(
    args: UpdatePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePoolCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class PinpointSMSVoiceV2 extends PinpointSMSVoiceV2Client implements PinpointSMSVoiceV2 {}
createAggregatedClient(commands, PinpointSMSVoiceV2);
