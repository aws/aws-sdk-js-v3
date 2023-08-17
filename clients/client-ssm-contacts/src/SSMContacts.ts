// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AcceptPageCommand, AcceptPageCommandInput, AcceptPageCommandOutput } from "./commands/AcceptPageCommand";
import {
  ActivateContactChannelCommand,
  ActivateContactChannelCommandInput,
  ActivateContactChannelCommandOutput,
} from "./commands/ActivateContactChannelCommand";
import {
  CreateContactChannelCommand,
  CreateContactChannelCommandInput,
  CreateContactChannelCommandOutput,
} from "./commands/CreateContactChannelCommand";
import {
  CreateContactCommand,
  CreateContactCommandInput,
  CreateContactCommandOutput,
} from "./commands/CreateContactCommand";
import {
  CreateRotationCommand,
  CreateRotationCommandInput,
  CreateRotationCommandOutput,
} from "./commands/CreateRotationCommand";
import {
  CreateRotationOverrideCommand,
  CreateRotationOverrideCommandInput,
  CreateRotationOverrideCommandOutput,
} from "./commands/CreateRotationOverrideCommand";
import {
  DeactivateContactChannelCommand,
  DeactivateContactChannelCommandInput,
  DeactivateContactChannelCommandOutput,
} from "./commands/DeactivateContactChannelCommand";
import {
  DeleteContactChannelCommand,
  DeleteContactChannelCommandInput,
  DeleteContactChannelCommandOutput,
} from "./commands/DeleteContactChannelCommand";
import {
  DeleteContactCommand,
  DeleteContactCommandInput,
  DeleteContactCommandOutput,
} from "./commands/DeleteContactCommand";
import {
  DeleteRotationCommand,
  DeleteRotationCommandInput,
  DeleteRotationCommandOutput,
} from "./commands/DeleteRotationCommand";
import {
  DeleteRotationOverrideCommand,
  DeleteRotationOverrideCommandInput,
  DeleteRotationOverrideCommandOutput,
} from "./commands/DeleteRotationOverrideCommand";
import {
  DescribeEngagementCommand,
  DescribeEngagementCommandInput,
  DescribeEngagementCommandOutput,
} from "./commands/DescribeEngagementCommand";
import {
  DescribePageCommand,
  DescribePageCommandInput,
  DescribePageCommandOutput,
} from "./commands/DescribePageCommand";
import {
  GetContactChannelCommand,
  GetContactChannelCommandInput,
  GetContactChannelCommandOutput,
} from "./commands/GetContactChannelCommand";
import { GetContactCommand, GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import {
  GetContactPolicyCommand,
  GetContactPolicyCommandInput,
  GetContactPolicyCommandOutput,
} from "./commands/GetContactPolicyCommand";
import { GetRotationCommand, GetRotationCommandInput, GetRotationCommandOutput } from "./commands/GetRotationCommand";
import {
  GetRotationOverrideCommand,
  GetRotationOverrideCommandInput,
  GetRotationOverrideCommandOutput,
} from "./commands/GetRotationOverrideCommand";
import {
  ListContactChannelsCommand,
  ListContactChannelsCommandInput,
  ListContactChannelsCommandOutput,
} from "./commands/ListContactChannelsCommand";
import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "./commands/ListContactsCommand";
import {
  ListEngagementsCommand,
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput,
} from "./commands/ListEngagementsCommand";
import {
  ListPageReceiptsCommand,
  ListPageReceiptsCommandInput,
  ListPageReceiptsCommandOutput,
} from "./commands/ListPageReceiptsCommand";
import {
  ListPageResolutionsCommand,
  ListPageResolutionsCommandInput,
  ListPageResolutionsCommandOutput,
} from "./commands/ListPageResolutionsCommand";
import {
  ListPagesByContactCommand,
  ListPagesByContactCommandInput,
  ListPagesByContactCommandOutput,
} from "./commands/ListPagesByContactCommand";
import {
  ListPagesByEngagementCommand,
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
} from "./commands/ListPagesByEngagementCommand";
import {
  ListPreviewRotationShiftsCommand,
  ListPreviewRotationShiftsCommandInput,
  ListPreviewRotationShiftsCommandOutput,
} from "./commands/ListPreviewRotationShiftsCommand";
import {
  ListRotationOverridesCommand,
  ListRotationOverridesCommandInput,
  ListRotationOverridesCommandOutput,
} from "./commands/ListRotationOverridesCommand";
import {
  ListRotationsCommand,
  ListRotationsCommandInput,
  ListRotationsCommandOutput,
} from "./commands/ListRotationsCommand";
import {
  ListRotationShiftsCommand,
  ListRotationShiftsCommandInput,
  ListRotationShiftsCommandOutput,
} from "./commands/ListRotationShiftsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutContactPolicyCommand,
  PutContactPolicyCommandInput,
  PutContactPolicyCommandOutput,
} from "./commands/PutContactPolicyCommand";
import {
  SendActivationCodeCommand,
  SendActivationCodeCommandInput,
  SendActivationCodeCommandOutput,
} from "./commands/SendActivationCodeCommand";
import {
  StartEngagementCommand,
  StartEngagementCommandInput,
  StartEngagementCommandOutput,
} from "./commands/StartEngagementCommand";
import {
  StopEngagementCommand,
  StopEngagementCommandInput,
  StopEngagementCommandOutput,
} from "./commands/StopEngagementCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateContactChannelCommand,
  UpdateContactChannelCommandInput,
  UpdateContactChannelCommandOutput,
} from "./commands/UpdateContactChannelCommand";
import {
  UpdateContactCommand,
  UpdateContactCommandInput,
  UpdateContactCommandOutput,
} from "./commands/UpdateContactCommand";
import {
  UpdateRotationCommand,
  UpdateRotationCommandInput,
  UpdateRotationCommandOutput,
} from "./commands/UpdateRotationCommand";
import { SSMContactsClient, SSMContactsClientConfig } from "./SSMContactsClient";

const commands = {
  AcceptPageCommand,
  ActivateContactChannelCommand,
  CreateContactCommand,
  CreateContactChannelCommand,
  CreateRotationCommand,
  CreateRotationOverrideCommand,
  DeactivateContactChannelCommand,
  DeleteContactCommand,
  DeleteContactChannelCommand,
  DeleteRotationCommand,
  DeleteRotationOverrideCommand,
  DescribeEngagementCommand,
  DescribePageCommand,
  GetContactCommand,
  GetContactChannelCommand,
  GetContactPolicyCommand,
  GetRotationCommand,
  GetRotationOverrideCommand,
  ListContactChannelsCommand,
  ListContactsCommand,
  ListEngagementsCommand,
  ListPageReceiptsCommand,
  ListPageResolutionsCommand,
  ListPagesByContactCommand,
  ListPagesByEngagementCommand,
  ListPreviewRotationShiftsCommand,
  ListRotationOverridesCommand,
  ListRotationsCommand,
  ListRotationShiftsCommand,
  ListTagsForResourceCommand,
  PutContactPolicyCommand,
  SendActivationCodeCommand,
  StartEngagementCommand,
  StopEngagementCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateContactCommand,
  UpdateContactChannelCommand,
  UpdateRotationCommand,
};

export interface SSMContacts {
  /**
   * @see {@link AcceptPageCommand}
   */
  acceptPage(args: AcceptPageCommandInput, options?: __HttpHandlerOptions): Promise<AcceptPageCommandOutput>;
  acceptPage(args: AcceptPageCommandInput, cb: (err: any, data?: AcceptPageCommandOutput) => void): void;
  acceptPage(
    args: AcceptPageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptPageCommandOutput) => void
  ): void;

  /**
   * @see {@link ActivateContactChannelCommand}
   */
  activateContactChannel(
    args: ActivateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateContactChannelCommandOutput>;
  activateContactChannel(
    args: ActivateContactChannelCommandInput,
    cb: (err: any, data?: ActivateContactChannelCommandOutput) => void
  ): void;
  activateContactChannel(
    args: ActivateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactCommand}
   */
  createContact(args: CreateContactCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactCommandOutput>;
  createContact(args: CreateContactCommandInput, cb: (err: any, data?: CreateContactCommandOutput) => void): void;
  createContact(
    args: CreateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactChannelCommand}
   */
  createContactChannel(
    args: CreateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactChannelCommandOutput>;
  createContactChannel(
    args: CreateContactChannelCommandInput,
    cb: (err: any, data?: CreateContactChannelCommandOutput) => void
  ): void;
  createContactChannel(
    args: CreateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRotationCommand}
   */
  createRotation(
    args: CreateRotationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRotationCommandOutput>;
  createRotation(args: CreateRotationCommandInput, cb: (err: any, data?: CreateRotationCommandOutput) => void): void;
  createRotation(
    args: CreateRotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRotationOverrideCommand}
   */
  createRotationOverride(
    args: CreateRotationOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRotationOverrideCommandOutput>;
  createRotationOverride(
    args: CreateRotationOverrideCommandInput,
    cb: (err: any, data?: CreateRotationOverrideCommandOutput) => void
  ): void;
  createRotationOverride(
    args: CreateRotationOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRotationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateContactChannelCommand}
   */
  deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateContactChannelCommandOutput>;
  deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void
  ): void;
  deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactCommand}
   */
  deleteContact(args: DeleteContactCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContactCommandOutput>;
  deleteContact(args: DeleteContactCommandInput, cb: (err: any, data?: DeleteContactCommandOutput) => void): void;
  deleteContact(
    args: DeleteContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactChannelCommand}
   */
  deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactChannelCommandOutput>;
  deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    cb: (err: any, data?: DeleteContactChannelCommandOutput) => void
  ): void;
  deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRotationCommand}
   */
  deleteRotation(
    args: DeleteRotationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRotationCommandOutput>;
  deleteRotation(args: DeleteRotationCommandInput, cb: (err: any, data?: DeleteRotationCommandOutput) => void): void;
  deleteRotation(
    args: DeleteRotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRotationOverrideCommand}
   */
  deleteRotationOverride(
    args: DeleteRotationOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRotationOverrideCommandOutput>;
  deleteRotationOverride(
    args: DeleteRotationOverrideCommandInput,
    cb: (err: any, data?: DeleteRotationOverrideCommandOutput) => void
  ): void;
  deleteRotationOverride(
    args: DeleteRotationOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRotationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngagementCommand}
   */
  describeEngagement(
    args: DescribeEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngagementCommandOutput>;
  describeEngagement(
    args: DescribeEngagementCommandInput,
    cb: (err: any, data?: DescribeEngagementCommandOutput) => void
  ): void;
  describeEngagement(
    args: DescribeEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePageCommand}
   */
  describePage(args: DescribePageCommandInput, options?: __HttpHandlerOptions): Promise<DescribePageCommandOutput>;
  describePage(args: DescribePageCommandInput, cb: (err: any, data?: DescribePageCommandOutput) => void): void;
  describePage(
    args: DescribePageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactCommand}
   */
  getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
  getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
  getContact(
    args: GetContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactChannelCommand}
   */
  getContactChannel(
    args: GetContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactChannelCommandOutput>;
  getContactChannel(
    args: GetContactChannelCommandInput,
    cb: (err: any, data?: GetContactChannelCommandOutput) => void
  ): void;
  getContactChannel(
    args: GetContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactPolicyCommand}
   */
  getContactPolicy(
    args: GetContactPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactPolicyCommandOutput>;
  getContactPolicy(
    args: GetContactPolicyCommandInput,
    cb: (err: any, data?: GetContactPolicyCommandOutput) => void
  ): void;
  getContactPolicy(
    args: GetContactPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRotationCommand}
   */
  getRotation(args: GetRotationCommandInput, options?: __HttpHandlerOptions): Promise<GetRotationCommandOutput>;
  getRotation(args: GetRotationCommandInput, cb: (err: any, data?: GetRotationCommandOutput) => void): void;
  getRotation(
    args: GetRotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRotationOverrideCommand}
   */
  getRotationOverride(
    args: GetRotationOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRotationOverrideCommandOutput>;
  getRotationOverride(
    args: GetRotationOverrideCommandInput,
    cb: (err: any, data?: GetRotationOverrideCommandOutput) => void
  ): void;
  getRotationOverride(
    args: GetRotationOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRotationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactChannelsCommand}
   */
  listContactChannels(
    args: ListContactChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactChannelsCommandOutput>;
  listContactChannels(
    args: ListContactChannelsCommandInput,
    cb: (err: any, data?: ListContactChannelsCommandOutput) => void
  ): void;
  listContactChannels(
    args: ListContactChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactsCommand}
   */
  listContacts(args: ListContactsCommandInput, options?: __HttpHandlerOptions): Promise<ListContactsCommandOutput>;
  listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
  listContacts(
    args: ListContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementsCommand}
   */
  listEngagements(
    args: ListEngagementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementsCommandOutput>;
  listEngagements(args: ListEngagementsCommandInput, cb: (err: any, data?: ListEngagementsCommandOutput) => void): void;
  listEngagements(
    args: ListEngagementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPageReceiptsCommand}
   */
  listPageReceipts(
    args: ListPageReceiptsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPageReceiptsCommandOutput>;
  listPageReceipts(
    args: ListPageReceiptsCommandInput,
    cb: (err: any, data?: ListPageReceiptsCommandOutput) => void
  ): void;
  listPageReceipts(
    args: ListPageReceiptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPageReceiptsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPageResolutionsCommand}
   */
  listPageResolutions(
    args: ListPageResolutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPageResolutionsCommandOutput>;
  listPageResolutions(
    args: ListPageResolutionsCommandInput,
    cb: (err: any, data?: ListPageResolutionsCommandOutput) => void
  ): void;
  listPageResolutions(
    args: ListPageResolutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPageResolutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPagesByContactCommand}
   */
  listPagesByContact(
    args: ListPagesByContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPagesByContactCommandOutput>;
  listPagesByContact(
    args: ListPagesByContactCommandInput,
    cb: (err: any, data?: ListPagesByContactCommandOutput) => void
  ): void;
  listPagesByContact(
    args: ListPagesByContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPagesByContactCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPagesByEngagementCommand}
   */
  listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPagesByEngagementCommandOutput>;
  listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void
  ): void;
  listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPreviewRotationShiftsCommand}
   */
  listPreviewRotationShifts(
    args: ListPreviewRotationShiftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPreviewRotationShiftsCommandOutput>;
  listPreviewRotationShifts(
    args: ListPreviewRotationShiftsCommandInput,
    cb: (err: any, data?: ListPreviewRotationShiftsCommandOutput) => void
  ): void;
  listPreviewRotationShifts(
    args: ListPreviewRotationShiftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPreviewRotationShiftsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRotationOverridesCommand}
   */
  listRotationOverrides(
    args: ListRotationOverridesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRotationOverridesCommandOutput>;
  listRotationOverrides(
    args: ListRotationOverridesCommandInput,
    cb: (err: any, data?: ListRotationOverridesCommandOutput) => void
  ): void;
  listRotationOverrides(
    args: ListRotationOverridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRotationOverridesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRotationsCommand}
   */
  listRotations(args: ListRotationsCommandInput, options?: __HttpHandlerOptions): Promise<ListRotationsCommandOutput>;
  listRotations(args: ListRotationsCommandInput, cb: (err: any, data?: ListRotationsCommandOutput) => void): void;
  listRotations(
    args: ListRotationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRotationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRotationShiftsCommand}
   */
  listRotationShifts(
    args: ListRotationShiftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRotationShiftsCommandOutput>;
  listRotationShifts(
    args: ListRotationShiftsCommandInput,
    cb: (err: any, data?: ListRotationShiftsCommandOutput) => void
  ): void;
  listRotationShifts(
    args: ListRotationShiftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRotationShiftsCommandOutput) => void
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
   * @see {@link PutContactPolicyCommand}
   */
  putContactPolicy(
    args: PutContactPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutContactPolicyCommandOutput>;
  putContactPolicy(
    args: PutContactPolicyCommandInput,
    cb: (err: any, data?: PutContactPolicyCommandOutput) => void
  ): void;
  putContactPolicy(
    args: PutContactPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutContactPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SendActivationCodeCommand}
   */
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendActivationCodeCommandOutput>;
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): void;
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementCommand}
   */
  startEngagement(
    args: StartEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEngagementCommandOutput>;
  startEngagement(args: StartEngagementCommandInput, cb: (err: any, data?: StartEngagementCommandOutput) => void): void;
  startEngagement(
    args: StartEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEngagementCommand}
   */
  stopEngagement(
    args: StopEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEngagementCommandOutput>;
  stopEngagement(args: StopEngagementCommandInput, cb: (err: any, data?: StopEngagementCommandOutput) => void): void;
  stopEngagement(
    args: StopEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEngagementCommandOutput) => void
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
   * @see {@link UpdateContactCommand}
   */
  updateContact(args: UpdateContactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactCommandOutput>;
  updateContact(args: UpdateContactCommandInput, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
  updateContact(
    args: UpdateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactChannelCommand}
   */
  updateContactChannel(
    args: UpdateContactChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactChannelCommandOutput>;
  updateContactChannel(
    args: UpdateContactChannelCommandInput,
    cb: (err: any, data?: UpdateContactChannelCommandOutput) => void
  ): void;
  updateContactChannel(
    args: UpdateContactChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRotationCommand}
   */
  updateRotation(
    args: UpdateRotationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRotationCommandOutput>;
  updateRotation(args: UpdateRotationCommandInput, cb: (err: any, data?: UpdateRotationCommandOutput) => void): void;
  updateRotation(
    args: UpdateRotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRotationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Systems Manager Incident Manager is an incident management console designed to help users
 *          mitigate and recover from incidents affecting their Amazon Web Services-hosted applications.
 *          An incident is any unplanned interruption or reduction in quality of services.</p>
 *          <p>Incident Manager increases incident resolution by notifying responders of
 *          impact, highlighting relevant troubleshooting data, and providing collaboration tools to
 *          get services back up and running. To achieve the primary goal of reducing the
 *          time-to-resolution of critical incidents, Incident Manager automates response plans
 *          and enables responder team escalation.</p>
 */
export class SSMContacts extends SSMContactsClient implements SSMContacts {}
createAggregatedClient(commands, SSMContacts);
