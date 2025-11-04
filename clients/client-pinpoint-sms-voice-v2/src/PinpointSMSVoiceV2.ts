// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateOriginationIdentityCommand,
  AssociateOriginationIdentityCommandInput,
  AssociateOriginationIdentityCommandOutput,
} from "./commands/AssociateOriginationIdentityCommand";
import {
  AssociateProtectConfigurationCommand,
  AssociateProtectConfigurationCommandInput,
  AssociateProtectConfigurationCommandOutput,
} from "./commands/AssociateProtectConfigurationCommand";
import {
  CarrierLookupCommand,
  CarrierLookupCommandInput,
  CarrierLookupCommandOutput,
} from "./commands/CarrierLookupCommand";
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
  CreateProtectConfigurationCommand,
  CreateProtectConfigurationCommandInput,
  CreateProtectConfigurationCommandOutput,
} from "./commands/CreateProtectConfigurationCommand";
import {
  CreateRegistrationAssociationCommand,
  CreateRegistrationAssociationCommandInput,
  CreateRegistrationAssociationCommandOutput,
} from "./commands/CreateRegistrationAssociationCommand";
import {
  CreateRegistrationAttachmentCommand,
  CreateRegistrationAttachmentCommandInput,
  CreateRegistrationAttachmentCommandOutput,
} from "./commands/CreateRegistrationAttachmentCommand";
import {
  CreateRegistrationCommand,
  CreateRegistrationCommandInput,
  CreateRegistrationCommandOutput,
} from "./commands/CreateRegistrationCommand";
import {
  CreateRegistrationVersionCommand,
  CreateRegistrationVersionCommandInput,
  CreateRegistrationVersionCommandOutput,
} from "./commands/CreateRegistrationVersionCommand";
import {
  CreateVerifiedDestinationNumberCommand,
  CreateVerifiedDestinationNumberCommandInput,
  CreateVerifiedDestinationNumberCommandOutput,
} from "./commands/CreateVerifiedDestinationNumberCommand";
import {
  DeleteAccountDefaultProtectConfigurationCommand,
  DeleteAccountDefaultProtectConfigurationCommandInput,
  DeleteAccountDefaultProtectConfigurationCommandOutput,
} from "./commands/DeleteAccountDefaultProtectConfigurationCommand";
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
  DeleteMediaMessageSpendLimitOverrideCommand,
  DeleteMediaMessageSpendLimitOverrideCommandInput,
  DeleteMediaMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteMediaMessageSpendLimitOverrideCommand";
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
  DeleteProtectConfigurationCommand,
  DeleteProtectConfigurationCommandInput,
  DeleteProtectConfigurationCommandOutput,
} from "./commands/DeleteProtectConfigurationCommand";
import {
  DeleteProtectConfigurationRuleSetNumberOverrideCommand,
  DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
  DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "./commands/DeleteProtectConfigurationRuleSetNumberOverrideCommand";
import {
  DeleteRegistrationAttachmentCommand,
  DeleteRegistrationAttachmentCommandInput,
  DeleteRegistrationAttachmentCommandOutput,
} from "./commands/DeleteRegistrationAttachmentCommand";
import {
  DeleteRegistrationCommand,
  DeleteRegistrationCommandInput,
  DeleteRegistrationCommandOutput,
} from "./commands/DeleteRegistrationCommand";
import {
  DeleteRegistrationFieldValueCommand,
  DeleteRegistrationFieldValueCommandInput,
  DeleteRegistrationFieldValueCommandOutput,
} from "./commands/DeleteRegistrationFieldValueCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteTextMessageSpendLimitOverrideCommand,
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteTextMessageSpendLimitOverrideCommand";
import {
  DeleteVerifiedDestinationNumberCommand,
  DeleteVerifiedDestinationNumberCommandInput,
  DeleteVerifiedDestinationNumberCommandOutput,
} from "./commands/DeleteVerifiedDestinationNumberCommand";
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
  DescribeProtectConfigurationsCommand,
  DescribeProtectConfigurationsCommandInput,
  DescribeProtectConfigurationsCommandOutput,
} from "./commands/DescribeProtectConfigurationsCommand";
import {
  DescribeRegistrationAttachmentsCommand,
  DescribeRegistrationAttachmentsCommandInput,
  DescribeRegistrationAttachmentsCommandOutput,
} from "./commands/DescribeRegistrationAttachmentsCommand";
import {
  DescribeRegistrationFieldDefinitionsCommand,
  DescribeRegistrationFieldDefinitionsCommandInput,
  DescribeRegistrationFieldDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationFieldDefinitionsCommand";
import {
  DescribeRegistrationFieldValuesCommand,
  DescribeRegistrationFieldValuesCommandInput,
  DescribeRegistrationFieldValuesCommandOutput,
} from "./commands/DescribeRegistrationFieldValuesCommand";
import {
  DescribeRegistrationsCommand,
  DescribeRegistrationsCommandInput,
  DescribeRegistrationsCommandOutput,
} from "./commands/DescribeRegistrationsCommand";
import {
  DescribeRegistrationSectionDefinitionsCommand,
  DescribeRegistrationSectionDefinitionsCommandInput,
  DescribeRegistrationSectionDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationSectionDefinitionsCommand";
import {
  DescribeRegistrationTypeDefinitionsCommand,
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationTypeDefinitionsCommand";
import {
  DescribeRegistrationVersionsCommand,
  DescribeRegistrationVersionsCommandInput,
  DescribeRegistrationVersionsCommandOutput,
} from "./commands/DescribeRegistrationVersionsCommand";
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
  DescribeVerifiedDestinationNumbersCommand,
  DescribeVerifiedDestinationNumbersCommandInput,
  DescribeVerifiedDestinationNumbersCommandOutput,
} from "./commands/DescribeVerifiedDestinationNumbersCommand";
import {
  DisassociateOriginationIdentityCommand,
  DisassociateOriginationIdentityCommandInput,
  DisassociateOriginationIdentityCommandOutput,
} from "./commands/DisassociateOriginationIdentityCommand";
import {
  DisassociateProtectConfigurationCommand,
  DisassociateProtectConfigurationCommandInput,
  DisassociateProtectConfigurationCommandOutput,
} from "./commands/DisassociateProtectConfigurationCommand";
import {
  DiscardRegistrationVersionCommand,
  DiscardRegistrationVersionCommandInput,
  DiscardRegistrationVersionCommandOutput,
} from "./commands/DiscardRegistrationVersionCommand";
import {
  GetProtectConfigurationCountryRuleSetCommand,
  GetProtectConfigurationCountryRuleSetCommandInput,
  GetProtectConfigurationCountryRuleSetCommandOutput,
} from "./commands/GetProtectConfigurationCountryRuleSetCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ListPoolOriginationIdentitiesCommand,
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "./commands/ListPoolOriginationIdentitiesCommand";
import {
  ListProtectConfigurationRuleSetNumberOverridesCommand,
  ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  ListProtectConfigurationRuleSetNumberOverridesCommandOutput,
} from "./commands/ListProtectConfigurationRuleSetNumberOverridesCommand";
import {
  ListRegistrationAssociationsCommand,
  ListRegistrationAssociationsCommandInput,
  ListRegistrationAssociationsCommandOutput,
} from "./commands/ListRegistrationAssociationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutKeywordCommand, PutKeywordCommandInput, PutKeywordCommandOutput } from "./commands/PutKeywordCommand";
import {
  PutMessageFeedbackCommand,
  PutMessageFeedbackCommandInput,
  PutMessageFeedbackCommandOutput,
} from "./commands/PutMessageFeedbackCommand";
import {
  PutOptedOutNumberCommand,
  PutOptedOutNumberCommandInput,
  PutOptedOutNumberCommandOutput,
} from "./commands/PutOptedOutNumberCommand";
import {
  PutProtectConfigurationRuleSetNumberOverrideCommand,
  PutProtectConfigurationRuleSetNumberOverrideCommandInput,
  PutProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "./commands/PutProtectConfigurationRuleSetNumberOverrideCommand";
import {
  PutRegistrationFieldValueCommand,
  PutRegistrationFieldValueCommandInput,
  PutRegistrationFieldValueCommandOutput,
} from "./commands/PutRegistrationFieldValueCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  ReleasePhoneNumberCommand,
  ReleasePhoneNumberCommandInput,
  ReleasePhoneNumberCommandOutput,
} from "./commands/ReleasePhoneNumberCommand";
import {
  ReleaseSenderIdCommand,
  ReleaseSenderIdCommandInput,
  ReleaseSenderIdCommandOutput,
} from "./commands/ReleaseSenderIdCommand";
import {
  RequestPhoneNumberCommand,
  RequestPhoneNumberCommandInput,
  RequestPhoneNumberCommandOutput,
} from "./commands/RequestPhoneNumberCommand";
import {
  RequestSenderIdCommand,
  RequestSenderIdCommandInput,
  RequestSenderIdCommandOutput,
} from "./commands/RequestSenderIdCommand";
import {
  SendDestinationNumberVerificationCodeCommand,
  SendDestinationNumberVerificationCodeCommandInput,
  SendDestinationNumberVerificationCodeCommandOutput,
} from "./commands/SendDestinationNumberVerificationCodeCommand";
import {
  SendMediaMessageCommand,
  SendMediaMessageCommandInput,
  SendMediaMessageCommandOutput,
} from "./commands/SendMediaMessageCommand";
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
  SetAccountDefaultProtectConfigurationCommand,
  SetAccountDefaultProtectConfigurationCommandInput,
  SetAccountDefaultProtectConfigurationCommandOutput,
} from "./commands/SetAccountDefaultProtectConfigurationCommand";
import {
  SetDefaultMessageFeedbackEnabledCommand,
  SetDefaultMessageFeedbackEnabledCommandInput,
  SetDefaultMessageFeedbackEnabledCommandOutput,
} from "./commands/SetDefaultMessageFeedbackEnabledCommand";
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
  SetMediaMessageSpendLimitOverrideCommand,
  SetMediaMessageSpendLimitOverrideCommandInput,
  SetMediaMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetMediaMessageSpendLimitOverrideCommand";
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
import {
  SubmitRegistrationVersionCommand,
  SubmitRegistrationVersionCommandInput,
  SubmitRegistrationVersionCommandOutput,
} from "./commands/SubmitRegistrationVersionCommand";
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
import {
  UpdateProtectConfigurationCommand,
  UpdateProtectConfigurationCommandInput,
  UpdateProtectConfigurationCommandOutput,
} from "./commands/UpdateProtectConfigurationCommand";
import {
  UpdateProtectConfigurationCountryRuleSetCommand,
  UpdateProtectConfigurationCountryRuleSetCommandInput,
  UpdateProtectConfigurationCountryRuleSetCommandOutput,
} from "./commands/UpdateProtectConfigurationCountryRuleSetCommand";
import {
  UpdateSenderIdCommand,
  UpdateSenderIdCommandInput,
  UpdateSenderIdCommandOutput,
} from "./commands/UpdateSenderIdCommand";
import {
  VerifyDestinationNumberCommand,
  VerifyDestinationNumberCommandInput,
  VerifyDestinationNumberCommandOutput,
} from "./commands/VerifyDestinationNumberCommand";
import { PinpointSMSVoiceV2Client, PinpointSMSVoiceV2ClientConfig } from "./PinpointSMSVoiceV2Client";

const commands = {
  AssociateOriginationIdentityCommand,
  AssociateProtectConfigurationCommand,
  CarrierLookupCommand,
  CreateConfigurationSetCommand,
  CreateEventDestinationCommand,
  CreateOptOutListCommand,
  CreatePoolCommand,
  CreateProtectConfigurationCommand,
  CreateRegistrationCommand,
  CreateRegistrationAssociationCommand,
  CreateRegistrationAttachmentCommand,
  CreateRegistrationVersionCommand,
  CreateVerifiedDestinationNumberCommand,
  DeleteAccountDefaultProtectConfigurationCommand,
  DeleteConfigurationSetCommand,
  DeleteDefaultMessageTypeCommand,
  DeleteDefaultSenderIdCommand,
  DeleteEventDestinationCommand,
  DeleteKeywordCommand,
  DeleteMediaMessageSpendLimitOverrideCommand,
  DeleteOptedOutNumberCommand,
  DeleteOptOutListCommand,
  DeletePoolCommand,
  DeleteProtectConfigurationCommand,
  DeleteProtectConfigurationRuleSetNumberOverrideCommand,
  DeleteRegistrationCommand,
  DeleteRegistrationAttachmentCommand,
  DeleteRegistrationFieldValueCommand,
  DeleteResourcePolicyCommand,
  DeleteTextMessageSpendLimitOverrideCommand,
  DeleteVerifiedDestinationNumberCommand,
  DeleteVoiceMessageSpendLimitOverrideCommand,
  DescribeAccountAttributesCommand,
  DescribeAccountLimitsCommand,
  DescribeConfigurationSetsCommand,
  DescribeKeywordsCommand,
  DescribeOptedOutNumbersCommand,
  DescribeOptOutListsCommand,
  DescribePhoneNumbersCommand,
  DescribePoolsCommand,
  DescribeProtectConfigurationsCommand,
  DescribeRegistrationAttachmentsCommand,
  DescribeRegistrationFieldDefinitionsCommand,
  DescribeRegistrationFieldValuesCommand,
  DescribeRegistrationsCommand,
  DescribeRegistrationSectionDefinitionsCommand,
  DescribeRegistrationTypeDefinitionsCommand,
  DescribeRegistrationVersionsCommand,
  DescribeSenderIdsCommand,
  DescribeSpendLimitsCommand,
  DescribeVerifiedDestinationNumbersCommand,
  DisassociateOriginationIdentityCommand,
  DisassociateProtectConfigurationCommand,
  DiscardRegistrationVersionCommand,
  GetProtectConfigurationCountryRuleSetCommand,
  GetResourcePolicyCommand,
  ListPoolOriginationIdentitiesCommand,
  ListProtectConfigurationRuleSetNumberOverridesCommand,
  ListRegistrationAssociationsCommand,
  ListTagsForResourceCommand,
  PutKeywordCommand,
  PutMessageFeedbackCommand,
  PutOptedOutNumberCommand,
  PutProtectConfigurationRuleSetNumberOverrideCommand,
  PutRegistrationFieldValueCommand,
  PutResourcePolicyCommand,
  ReleasePhoneNumberCommand,
  ReleaseSenderIdCommand,
  RequestPhoneNumberCommand,
  RequestSenderIdCommand,
  SendDestinationNumberVerificationCodeCommand,
  SendMediaMessageCommand,
  SendTextMessageCommand,
  SendVoiceMessageCommand,
  SetAccountDefaultProtectConfigurationCommand,
  SetDefaultMessageFeedbackEnabledCommand,
  SetDefaultMessageTypeCommand,
  SetDefaultSenderIdCommand,
  SetMediaMessageSpendLimitOverrideCommand,
  SetTextMessageSpendLimitOverrideCommand,
  SetVoiceMessageSpendLimitOverrideCommand,
  SubmitRegistrationVersionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEventDestinationCommand,
  UpdatePhoneNumberCommand,
  UpdatePoolCommand,
  UpdateProtectConfigurationCommand,
  UpdateProtectConfigurationCountryRuleSetCommand,
  UpdateSenderIdCommand,
  VerifyDestinationNumberCommand,
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
   * @see {@link AssociateProtectConfigurationCommand}
   */
  associateProtectConfiguration(
    args: AssociateProtectConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProtectConfigurationCommandOutput>;
  associateProtectConfiguration(
    args: AssociateProtectConfigurationCommandInput,
    cb: (err: any, data?: AssociateProtectConfigurationCommandOutput) => void
  ): void;
  associateProtectConfiguration(
    args: AssociateProtectConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProtectConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CarrierLookupCommand}
   */
  carrierLookup(args: CarrierLookupCommandInput, options?: __HttpHandlerOptions): Promise<CarrierLookupCommandOutput>;
  carrierLookup(args: CarrierLookupCommandInput, cb: (err: any, data?: CarrierLookupCommandOutput) => void): void;
  carrierLookup(
    args: CarrierLookupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CarrierLookupCommandOutput) => void
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
   * @see {@link CreateProtectConfigurationCommand}
   */
  createProtectConfiguration(): Promise<CreateProtectConfigurationCommandOutput>;
  createProtectConfiguration(
    args: CreateProtectConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProtectConfigurationCommandOutput>;
  createProtectConfiguration(
    args: CreateProtectConfigurationCommandInput,
    cb: (err: any, data?: CreateProtectConfigurationCommandOutput) => void
  ): void;
  createProtectConfiguration(
    args: CreateProtectConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProtectConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistrationCommand}
   */
  createRegistration(
    args: CreateRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistrationCommandOutput>;
  createRegistration(
    args: CreateRegistrationCommandInput,
    cb: (err: any, data?: CreateRegistrationCommandOutput) => void
  ): void;
  createRegistration(
    args: CreateRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistrationAssociationCommand}
   */
  createRegistrationAssociation(
    args: CreateRegistrationAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistrationAssociationCommandOutput>;
  createRegistrationAssociation(
    args: CreateRegistrationAssociationCommandInput,
    cb: (err: any, data?: CreateRegistrationAssociationCommandOutput) => void
  ): void;
  createRegistrationAssociation(
    args: CreateRegistrationAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistrationAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistrationAttachmentCommand}
   */
  createRegistrationAttachment(): Promise<CreateRegistrationAttachmentCommandOutput>;
  createRegistrationAttachment(
    args: CreateRegistrationAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistrationAttachmentCommandOutput>;
  createRegistrationAttachment(
    args: CreateRegistrationAttachmentCommandInput,
    cb: (err: any, data?: CreateRegistrationAttachmentCommandOutput) => void
  ): void;
  createRegistrationAttachment(
    args: CreateRegistrationAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistrationAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistrationVersionCommand}
   */
  createRegistrationVersion(
    args: CreateRegistrationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistrationVersionCommandOutput>;
  createRegistrationVersion(
    args: CreateRegistrationVersionCommandInput,
    cb: (err: any, data?: CreateRegistrationVersionCommandOutput) => void
  ): void;
  createRegistrationVersion(
    args: CreateRegistrationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistrationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVerifiedDestinationNumberCommand}
   */
  createVerifiedDestinationNumber(
    args: CreateVerifiedDestinationNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVerifiedDestinationNumberCommandOutput>;
  createVerifiedDestinationNumber(
    args: CreateVerifiedDestinationNumberCommandInput,
    cb: (err: any, data?: CreateVerifiedDestinationNumberCommandOutput) => void
  ): void;
  createVerifiedDestinationNumber(
    args: CreateVerifiedDestinationNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVerifiedDestinationNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountDefaultProtectConfigurationCommand}
   */
  deleteAccountDefaultProtectConfiguration(): Promise<DeleteAccountDefaultProtectConfigurationCommandOutput>;
  deleteAccountDefaultProtectConfiguration(
    args: DeleteAccountDefaultProtectConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountDefaultProtectConfigurationCommandOutput>;
  deleteAccountDefaultProtectConfiguration(
    args: DeleteAccountDefaultProtectConfigurationCommandInput,
    cb: (err: any, data?: DeleteAccountDefaultProtectConfigurationCommandOutput) => void
  ): void;
  deleteAccountDefaultProtectConfiguration(
    args: DeleteAccountDefaultProtectConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountDefaultProtectConfigurationCommandOutput) => void
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
   * @see {@link DeleteMediaMessageSpendLimitOverrideCommand}
   */
  deleteMediaMessageSpendLimitOverride(): Promise<DeleteMediaMessageSpendLimitOverrideCommandOutput>;
  deleteMediaMessageSpendLimitOverride(
    args: DeleteMediaMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaMessageSpendLimitOverrideCommandOutput>;
  deleteMediaMessageSpendLimitOverride(
    args: DeleteMediaMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: DeleteMediaMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  deleteMediaMessageSpendLimitOverride(
    args: DeleteMediaMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaMessageSpendLimitOverrideCommandOutput) => void
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
   * @see {@link DeleteProtectConfigurationCommand}
   */
  deleteProtectConfiguration(
    args: DeleteProtectConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtectConfigurationCommandOutput>;
  deleteProtectConfiguration(
    args: DeleteProtectConfigurationCommandInput,
    cb: (err: any, data?: DeleteProtectConfigurationCommandOutput) => void
  ): void;
  deleteProtectConfiguration(
    args: DeleteProtectConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtectConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProtectConfigurationRuleSetNumberOverrideCommand}
   */
  deleteProtectConfigurationRuleSetNumberOverride(
    args: DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput>;
  deleteProtectConfigurationRuleSetNumberOverride(
    args: DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
    cb: (err: any, data?: DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput) => void
  ): void;
  deleteProtectConfigurationRuleSetNumberOverride(
    args: DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistrationCommand}
   */
  deleteRegistration(
    args: DeleteRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistrationCommandOutput>;
  deleteRegistration(
    args: DeleteRegistrationCommandInput,
    cb: (err: any, data?: DeleteRegistrationCommandOutput) => void
  ): void;
  deleteRegistration(
    args: DeleteRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistrationAttachmentCommand}
   */
  deleteRegistrationAttachment(
    args: DeleteRegistrationAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistrationAttachmentCommandOutput>;
  deleteRegistrationAttachment(
    args: DeleteRegistrationAttachmentCommandInput,
    cb: (err: any, data?: DeleteRegistrationAttachmentCommandOutput) => void
  ): void;
  deleteRegistrationAttachment(
    args: DeleteRegistrationAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistrationAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistrationFieldValueCommand}
   */
  deleteRegistrationFieldValue(
    args: DeleteRegistrationFieldValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistrationFieldValueCommandOutput>;
  deleteRegistrationFieldValue(
    args: DeleteRegistrationFieldValueCommandInput,
    cb: (err: any, data?: DeleteRegistrationFieldValueCommandOutput) => void
  ): void;
  deleteRegistrationFieldValue(
    args: DeleteRegistrationFieldValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistrationFieldValueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTextMessageSpendLimitOverrideCommand}
   */
  deleteTextMessageSpendLimitOverride(): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput>;
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
   * @see {@link DeleteVerifiedDestinationNumberCommand}
   */
  deleteVerifiedDestinationNumber(
    args: DeleteVerifiedDestinationNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVerifiedDestinationNumberCommandOutput>;
  deleteVerifiedDestinationNumber(
    args: DeleteVerifiedDestinationNumberCommandInput,
    cb: (err: any, data?: DeleteVerifiedDestinationNumberCommandOutput) => void
  ): void;
  deleteVerifiedDestinationNumber(
    args: DeleteVerifiedDestinationNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVerifiedDestinationNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceMessageSpendLimitOverrideCommand}
   */
  deleteVoiceMessageSpendLimitOverride(): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput>;
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
  describeAccountAttributes(): Promise<DescribeAccountAttributesCommandOutput>;
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
  describeAccountLimits(): Promise<DescribeAccountLimitsCommandOutput>;
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
  describeConfigurationSets(): Promise<DescribeConfigurationSetsCommandOutput>;
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
  describeOptOutLists(): Promise<DescribeOptOutListsCommandOutput>;
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
  describePhoneNumbers(): Promise<DescribePhoneNumbersCommandOutput>;
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
  describePools(): Promise<DescribePoolsCommandOutput>;
  describePools(args: DescribePoolsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePoolsCommandOutput>;
  describePools(args: DescribePoolsCommandInput, cb: (err: any, data?: DescribePoolsCommandOutput) => void): void;
  describePools(
    args: DescribePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProtectConfigurationsCommand}
   */
  describeProtectConfigurations(): Promise<DescribeProtectConfigurationsCommandOutput>;
  describeProtectConfigurations(
    args: DescribeProtectConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProtectConfigurationsCommandOutput>;
  describeProtectConfigurations(
    args: DescribeProtectConfigurationsCommandInput,
    cb: (err: any, data?: DescribeProtectConfigurationsCommandOutput) => void
  ): void;
  describeProtectConfigurations(
    args: DescribeProtectConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProtectConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistrationAttachmentsCommand}
   */
  describeRegistrationAttachments(): Promise<DescribeRegistrationAttachmentsCommandOutput>;
  describeRegistrationAttachments(
    args: DescribeRegistrationAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistrationAttachmentsCommandOutput>;
  describeRegistrationAttachments(
    args: DescribeRegistrationAttachmentsCommandInput,
    cb: (err: any, data?: DescribeRegistrationAttachmentsCommandOutput) => void
  ): void;
  describeRegistrationAttachments(
    args: DescribeRegistrationAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistrationAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistrationFieldDefinitionsCommand}
   */
  describeRegistrationFieldDefinitions(
    args: DescribeRegistrationFieldDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistrationFieldDefinitionsCommandOutput>;
  describeRegistrationFieldDefinitions(
    args: DescribeRegistrationFieldDefinitionsCommandInput,
    cb: (err: any, data?: DescribeRegistrationFieldDefinitionsCommandOutput) => void
  ): void;
  describeRegistrationFieldDefinitions(
    args: DescribeRegistrationFieldDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistrationFieldDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistrationFieldValuesCommand}
   */
  describeRegistrationFieldValues(
    args: DescribeRegistrationFieldValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistrationFieldValuesCommandOutput>;
  describeRegistrationFieldValues(
    args: DescribeRegistrationFieldValuesCommandInput,
    cb: (err: any, data?: DescribeRegistrationFieldValuesCommandOutput) => void
  ): void;
  describeRegistrationFieldValues(
    args: DescribeRegistrationFieldValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistrationFieldValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistrationsCommand}
   */
  describeRegistrations(): Promise<DescribeRegistrationsCommandOutput>;
  describeRegistrations(
    args: DescribeRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistrationsCommandOutput>;
  describeRegistrations(
    args: DescribeRegistrationsCommandInput,
    cb: (err: any, data?: DescribeRegistrationsCommandOutput) => void
  ): void;
  describeRegistrations(
    args: DescribeRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistrationSectionDefinitionsCommand}
   */
  describeRegistrationSectionDefinitions(
    args: DescribeRegistrationSectionDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistrationSectionDefinitionsCommandOutput>;
  describeRegistrationSectionDefinitions(
    args: DescribeRegistrationSectionDefinitionsCommandInput,
    cb: (err: any, data?: DescribeRegistrationSectionDefinitionsCommandOutput) => void
  ): void;
  describeRegistrationSectionDefinitions(
    args: DescribeRegistrationSectionDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistrationSectionDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistrationTypeDefinitionsCommand}
   */
  describeRegistrationTypeDefinitions(): Promise<DescribeRegistrationTypeDefinitionsCommandOutput>;
  describeRegistrationTypeDefinitions(
    args: DescribeRegistrationTypeDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistrationTypeDefinitionsCommandOutput>;
  describeRegistrationTypeDefinitions(
    args: DescribeRegistrationTypeDefinitionsCommandInput,
    cb: (err: any, data?: DescribeRegistrationTypeDefinitionsCommandOutput) => void
  ): void;
  describeRegistrationTypeDefinitions(
    args: DescribeRegistrationTypeDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistrationTypeDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistrationVersionsCommand}
   */
  describeRegistrationVersions(
    args: DescribeRegistrationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistrationVersionsCommandOutput>;
  describeRegistrationVersions(
    args: DescribeRegistrationVersionsCommandInput,
    cb: (err: any, data?: DescribeRegistrationVersionsCommandOutput) => void
  ): void;
  describeRegistrationVersions(
    args: DescribeRegistrationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistrationVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSenderIdsCommand}
   */
  describeSenderIds(): Promise<DescribeSenderIdsCommandOutput>;
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
  describeSpendLimits(): Promise<DescribeSpendLimitsCommandOutput>;
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
   * @see {@link DescribeVerifiedDestinationNumbersCommand}
   */
  describeVerifiedDestinationNumbers(): Promise<DescribeVerifiedDestinationNumbersCommandOutput>;
  describeVerifiedDestinationNumbers(
    args: DescribeVerifiedDestinationNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVerifiedDestinationNumbersCommandOutput>;
  describeVerifiedDestinationNumbers(
    args: DescribeVerifiedDestinationNumbersCommandInput,
    cb: (err: any, data?: DescribeVerifiedDestinationNumbersCommandOutput) => void
  ): void;
  describeVerifiedDestinationNumbers(
    args: DescribeVerifiedDestinationNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVerifiedDestinationNumbersCommandOutput) => void
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
   * @see {@link DisassociateProtectConfigurationCommand}
   */
  disassociateProtectConfiguration(
    args: DisassociateProtectConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateProtectConfigurationCommandOutput>;
  disassociateProtectConfiguration(
    args: DisassociateProtectConfigurationCommandInput,
    cb: (err: any, data?: DisassociateProtectConfigurationCommandOutput) => void
  ): void;
  disassociateProtectConfiguration(
    args: DisassociateProtectConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateProtectConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DiscardRegistrationVersionCommand}
   */
  discardRegistrationVersion(
    args: DiscardRegistrationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DiscardRegistrationVersionCommandOutput>;
  discardRegistrationVersion(
    args: DiscardRegistrationVersionCommandInput,
    cb: (err: any, data?: DiscardRegistrationVersionCommandOutput) => void
  ): void;
  discardRegistrationVersion(
    args: DiscardRegistrationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DiscardRegistrationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProtectConfigurationCountryRuleSetCommand}
   */
  getProtectConfigurationCountryRuleSet(
    args: GetProtectConfigurationCountryRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtectConfigurationCountryRuleSetCommandOutput>;
  getProtectConfigurationCountryRuleSet(
    args: GetProtectConfigurationCountryRuleSetCommandInput,
    cb: (err: any, data?: GetProtectConfigurationCountryRuleSetCommandOutput) => void
  ): void;
  getProtectConfigurationCountryRuleSet(
    args: GetProtectConfigurationCountryRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtectConfigurationCountryRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
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
   * @see {@link ListProtectConfigurationRuleSetNumberOverridesCommand}
   */
  listProtectConfigurationRuleSetNumberOverrides(
    args: ListProtectConfigurationRuleSetNumberOverridesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectConfigurationRuleSetNumberOverridesCommandOutput>;
  listProtectConfigurationRuleSetNumberOverrides(
    args: ListProtectConfigurationRuleSetNumberOverridesCommandInput,
    cb: (err: any, data?: ListProtectConfigurationRuleSetNumberOverridesCommandOutput) => void
  ): void;
  listProtectConfigurationRuleSetNumberOverrides(
    args: ListProtectConfigurationRuleSetNumberOverridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectConfigurationRuleSetNumberOverridesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistrationAssociationsCommand}
   */
  listRegistrationAssociations(
    args: ListRegistrationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistrationAssociationsCommandOutput>;
  listRegistrationAssociations(
    args: ListRegistrationAssociationsCommandInput,
    cb: (err: any, data?: ListRegistrationAssociationsCommandOutput) => void
  ): void;
  listRegistrationAssociations(
    args: ListRegistrationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistrationAssociationsCommandOutput) => void
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
   * @see {@link PutMessageFeedbackCommand}
   */
  putMessageFeedback(
    args: PutMessageFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMessageFeedbackCommandOutput>;
  putMessageFeedback(
    args: PutMessageFeedbackCommandInput,
    cb: (err: any, data?: PutMessageFeedbackCommandOutput) => void
  ): void;
  putMessageFeedback(
    args: PutMessageFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMessageFeedbackCommandOutput) => void
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
   * @see {@link PutProtectConfigurationRuleSetNumberOverrideCommand}
   */
  putProtectConfigurationRuleSetNumberOverride(
    args: PutProtectConfigurationRuleSetNumberOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProtectConfigurationRuleSetNumberOverrideCommandOutput>;
  putProtectConfigurationRuleSetNumberOverride(
    args: PutProtectConfigurationRuleSetNumberOverrideCommandInput,
    cb: (err: any, data?: PutProtectConfigurationRuleSetNumberOverrideCommandOutput) => void
  ): void;
  putProtectConfigurationRuleSetNumberOverride(
    args: PutProtectConfigurationRuleSetNumberOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProtectConfigurationRuleSetNumberOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRegistrationFieldValueCommand}
   */
  putRegistrationFieldValue(
    args: PutRegistrationFieldValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRegistrationFieldValueCommandOutput>;
  putRegistrationFieldValue(
    args: PutRegistrationFieldValueCommandInput,
    cb: (err: any, data?: PutRegistrationFieldValueCommandOutput) => void
  ): void;
  putRegistrationFieldValue(
    args: PutRegistrationFieldValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRegistrationFieldValueCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
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
   * @see {@link ReleaseSenderIdCommand}
   */
  releaseSenderId(
    args: ReleaseSenderIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseSenderIdCommandOutput>;
  releaseSenderId(args: ReleaseSenderIdCommandInput, cb: (err: any, data?: ReleaseSenderIdCommandOutput) => void): void;
  releaseSenderId(
    args: ReleaseSenderIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseSenderIdCommandOutput) => void
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
   * @see {@link RequestSenderIdCommand}
   */
  requestSenderId(
    args: RequestSenderIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestSenderIdCommandOutput>;
  requestSenderId(args: RequestSenderIdCommandInput, cb: (err: any, data?: RequestSenderIdCommandOutput) => void): void;
  requestSenderId(
    args: RequestSenderIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestSenderIdCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDestinationNumberVerificationCodeCommand}
   */
  sendDestinationNumberVerificationCode(
    args: SendDestinationNumberVerificationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDestinationNumberVerificationCodeCommandOutput>;
  sendDestinationNumberVerificationCode(
    args: SendDestinationNumberVerificationCodeCommandInput,
    cb: (err: any, data?: SendDestinationNumberVerificationCodeCommandOutput) => void
  ): void;
  sendDestinationNumberVerificationCode(
    args: SendDestinationNumberVerificationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDestinationNumberVerificationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMediaMessageCommand}
   */
  sendMediaMessage(
    args: SendMediaMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendMediaMessageCommandOutput>;
  sendMediaMessage(
    args: SendMediaMessageCommandInput,
    cb: (err: any, data?: SendMediaMessageCommandOutput) => void
  ): void;
  sendMediaMessage(
    args: SendMediaMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMediaMessageCommandOutput) => void
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
   * @see {@link SetAccountDefaultProtectConfigurationCommand}
   */
  setAccountDefaultProtectConfiguration(
    args: SetAccountDefaultProtectConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetAccountDefaultProtectConfigurationCommandOutput>;
  setAccountDefaultProtectConfiguration(
    args: SetAccountDefaultProtectConfigurationCommandInput,
    cb: (err: any, data?: SetAccountDefaultProtectConfigurationCommandOutput) => void
  ): void;
  setAccountDefaultProtectConfiguration(
    args: SetAccountDefaultProtectConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetAccountDefaultProtectConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultMessageFeedbackEnabledCommand}
   */
  setDefaultMessageFeedbackEnabled(
    args: SetDefaultMessageFeedbackEnabledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultMessageFeedbackEnabledCommandOutput>;
  setDefaultMessageFeedbackEnabled(
    args: SetDefaultMessageFeedbackEnabledCommandInput,
    cb: (err: any, data?: SetDefaultMessageFeedbackEnabledCommandOutput) => void
  ): void;
  setDefaultMessageFeedbackEnabled(
    args: SetDefaultMessageFeedbackEnabledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultMessageFeedbackEnabledCommandOutput) => void
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
   * @see {@link SetMediaMessageSpendLimitOverrideCommand}
   */
  setMediaMessageSpendLimitOverride(
    args: SetMediaMessageSpendLimitOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetMediaMessageSpendLimitOverrideCommandOutput>;
  setMediaMessageSpendLimitOverride(
    args: SetMediaMessageSpendLimitOverrideCommandInput,
    cb: (err: any, data?: SetMediaMessageSpendLimitOverrideCommandOutput) => void
  ): void;
  setMediaMessageSpendLimitOverride(
    args: SetMediaMessageSpendLimitOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetMediaMessageSpendLimitOverrideCommandOutput) => void
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
   * @see {@link SubmitRegistrationVersionCommand}
   */
  submitRegistrationVersion(
    args: SubmitRegistrationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitRegistrationVersionCommandOutput>;
  submitRegistrationVersion(
    args: SubmitRegistrationVersionCommandInput,
    cb: (err: any, data?: SubmitRegistrationVersionCommandOutput) => void
  ): void;
  submitRegistrationVersion(
    args: SubmitRegistrationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitRegistrationVersionCommandOutput) => void
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

  /**
   * @see {@link UpdateProtectConfigurationCommand}
   */
  updateProtectConfiguration(
    args: UpdateProtectConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProtectConfigurationCommandOutput>;
  updateProtectConfiguration(
    args: UpdateProtectConfigurationCommandInput,
    cb: (err: any, data?: UpdateProtectConfigurationCommandOutput) => void
  ): void;
  updateProtectConfiguration(
    args: UpdateProtectConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProtectConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProtectConfigurationCountryRuleSetCommand}
   */
  updateProtectConfigurationCountryRuleSet(
    args: UpdateProtectConfigurationCountryRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProtectConfigurationCountryRuleSetCommandOutput>;
  updateProtectConfigurationCountryRuleSet(
    args: UpdateProtectConfigurationCountryRuleSetCommandInput,
    cb: (err: any, data?: UpdateProtectConfigurationCountryRuleSetCommandOutput) => void
  ): void;
  updateProtectConfigurationCountryRuleSet(
    args: UpdateProtectConfigurationCountryRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProtectConfigurationCountryRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSenderIdCommand}
   */
  updateSenderId(
    args: UpdateSenderIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSenderIdCommandOutput>;
  updateSenderId(args: UpdateSenderIdCommandInput, cb: (err: any, data?: UpdateSenderIdCommandOutput) => void): void;
  updateSenderId(
    args: UpdateSenderIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSenderIdCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyDestinationNumberCommand}
   */
  verifyDestinationNumber(
    args: VerifyDestinationNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyDestinationNumberCommandOutput>;
  verifyDestinationNumber(
    args: VerifyDestinationNumberCommandInput,
    cb: (err: any, data?: VerifyDestinationNumberCommandOutput) => void
  ): void;
  verifyDestinationNumber(
    args: VerifyDestinationNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyDestinationNumberCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the <i>End User MessagingSMS, version 2 API Reference</i>. This guide provides information about End User MessagingSMS, version 2 API resources, including supported HTTP methods, parameters, and schemas.</p> <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The End User MessagingSMS, version 2 API provides programmatic access to options that are unique to the SMS and voice channels. End User MessagingSMS, version 2 resources such as phone numbers, sender IDs, and opt-out lists can be used by the Amazon Pinpoint API.</p> <p>If you're new to End User MessagingSMS, it's also helpful to review the <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html"> End User MessagingSMS User Guide</a>, where you'll find tutorials, code samples, and procedures that demonstrate how to use End User MessagingSMS features programmatically and how to integrate functionality into mobile apps and other types of applications. The guide also provides key information, such as End User MessagingSMS integration with other Amazon Web Services services, and the quotas that apply to use of the service.</p> <p> <b>Regional availability</b> </p> <p>The <i>End User MessagingSMS version 2 API Reference</i> is available in several Amazon Web Services Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/hgeneral/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/pinpoint.html">Amazon Pinpoint endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing Amazon Web Services Regions</a> in the Amazon Web Services General Reference.</p> <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a> </p>
 * @public
 */
export class PinpointSMSVoiceV2 extends PinpointSMSVoiceV2Client implements PinpointSMSVoiceV2 {}
createAggregatedClient(commands, PinpointSMSVoiceV2);
