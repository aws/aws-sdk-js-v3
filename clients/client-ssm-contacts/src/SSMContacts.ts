// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptPageCommandInput,
  type AcceptPageCommandOutput,
  AcceptPageCommand,
} from "./commands/AcceptPageCommand";
import {
  type ActivateContactChannelCommandInput,
  type ActivateContactChannelCommandOutput,
  ActivateContactChannelCommand,
} from "./commands/ActivateContactChannelCommand";
import {
  type CreateContactChannelCommandInput,
  type CreateContactChannelCommandOutput,
  CreateContactChannelCommand,
} from "./commands/CreateContactChannelCommand";
import {
  type CreateContactCommandInput,
  type CreateContactCommandOutput,
  CreateContactCommand,
} from "./commands/CreateContactCommand";
import {
  type CreateRotationCommandInput,
  type CreateRotationCommandOutput,
  CreateRotationCommand,
} from "./commands/CreateRotationCommand";
import {
  type CreateRotationOverrideCommandInput,
  type CreateRotationOverrideCommandOutput,
  CreateRotationOverrideCommand,
} from "./commands/CreateRotationOverrideCommand";
import {
  type DeactivateContactChannelCommandInput,
  type DeactivateContactChannelCommandOutput,
  DeactivateContactChannelCommand,
} from "./commands/DeactivateContactChannelCommand";
import {
  type DeleteContactChannelCommandInput,
  type DeleteContactChannelCommandOutput,
  DeleteContactChannelCommand,
} from "./commands/DeleteContactChannelCommand";
import {
  type DeleteContactCommandInput,
  type DeleteContactCommandOutput,
  DeleteContactCommand,
} from "./commands/DeleteContactCommand";
import {
  type DeleteRotationCommandInput,
  type DeleteRotationCommandOutput,
  DeleteRotationCommand,
} from "./commands/DeleteRotationCommand";
import {
  type DeleteRotationOverrideCommandInput,
  type DeleteRotationOverrideCommandOutput,
  DeleteRotationOverrideCommand,
} from "./commands/DeleteRotationOverrideCommand";
import {
  type DescribeEngagementCommandInput,
  type DescribeEngagementCommandOutput,
  DescribeEngagementCommand,
} from "./commands/DescribeEngagementCommand";
import {
  type DescribePageCommandInput,
  type DescribePageCommandOutput,
  DescribePageCommand,
} from "./commands/DescribePageCommand";
import {
  type GetContactChannelCommandInput,
  type GetContactChannelCommandOutput,
  GetContactChannelCommand,
} from "./commands/GetContactChannelCommand";
import {
  type GetContactCommandInput,
  type GetContactCommandOutput,
  GetContactCommand,
} from "./commands/GetContactCommand";
import {
  type GetContactPolicyCommandInput,
  type GetContactPolicyCommandOutput,
  GetContactPolicyCommand,
} from "./commands/GetContactPolicyCommand";
import {
  type GetRotationCommandInput,
  type GetRotationCommandOutput,
  GetRotationCommand,
} from "./commands/GetRotationCommand";
import {
  type GetRotationOverrideCommandInput,
  type GetRotationOverrideCommandOutput,
  GetRotationOverrideCommand,
} from "./commands/GetRotationOverrideCommand";
import {
  type ListContactChannelsCommandInput,
  type ListContactChannelsCommandOutput,
  ListContactChannelsCommand,
} from "./commands/ListContactChannelsCommand";
import {
  type ListContactsCommandInput,
  type ListContactsCommandOutput,
  ListContactsCommand,
} from "./commands/ListContactsCommand";
import {
  type ListEngagementsCommandInput,
  type ListEngagementsCommandOutput,
  ListEngagementsCommand,
} from "./commands/ListEngagementsCommand";
import {
  type ListPageReceiptsCommandInput,
  type ListPageReceiptsCommandOutput,
  ListPageReceiptsCommand,
} from "./commands/ListPageReceiptsCommand";
import {
  type ListPageResolutionsCommandInput,
  type ListPageResolutionsCommandOutput,
  ListPageResolutionsCommand,
} from "./commands/ListPageResolutionsCommand";
import {
  type ListPagesByContactCommandInput,
  type ListPagesByContactCommandOutput,
  ListPagesByContactCommand,
} from "./commands/ListPagesByContactCommand";
import {
  type ListPagesByEngagementCommandInput,
  type ListPagesByEngagementCommandOutput,
  ListPagesByEngagementCommand,
} from "./commands/ListPagesByEngagementCommand";
import {
  type ListPreviewRotationShiftsCommandInput,
  type ListPreviewRotationShiftsCommandOutput,
  ListPreviewRotationShiftsCommand,
} from "./commands/ListPreviewRotationShiftsCommand";
import {
  type ListRotationOverridesCommandInput,
  type ListRotationOverridesCommandOutput,
  ListRotationOverridesCommand,
} from "./commands/ListRotationOverridesCommand";
import {
  type ListRotationsCommandInput,
  type ListRotationsCommandOutput,
  ListRotationsCommand,
} from "./commands/ListRotationsCommand";
import {
  type ListRotationShiftsCommandInput,
  type ListRotationShiftsCommandOutput,
  ListRotationShiftsCommand,
} from "./commands/ListRotationShiftsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutContactPolicyCommandInput,
  type PutContactPolicyCommandOutput,
  PutContactPolicyCommand,
} from "./commands/PutContactPolicyCommand";
import {
  type SendActivationCodeCommandInput,
  type SendActivationCodeCommandOutput,
  SendActivationCodeCommand,
} from "./commands/SendActivationCodeCommand";
import {
  type StartEngagementCommandInput,
  type StartEngagementCommandOutput,
  StartEngagementCommand,
} from "./commands/StartEngagementCommand";
import {
  type StopEngagementCommandInput,
  type StopEngagementCommandOutput,
  StopEngagementCommand,
} from "./commands/StopEngagementCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateContactChannelCommandInput,
  type UpdateContactChannelCommandOutput,
  UpdateContactChannelCommand,
} from "./commands/UpdateContactChannelCommand";
import {
  type UpdateContactCommandInput,
  type UpdateContactCommandOutput,
  UpdateContactCommand,
} from "./commands/UpdateContactCommand";
import {
  type UpdateRotationCommandInput,
  type UpdateRotationCommandOutput,
  UpdateRotationCommand,
} from "./commands/UpdateRotationCommand";
import { paginateListContactChannels } from "./pagination/ListContactChannelsPaginator";
import { paginateListContacts } from "./pagination/ListContactsPaginator";
import { paginateListEngagements } from "./pagination/ListEngagementsPaginator";
import { paginateListPageReceipts } from "./pagination/ListPageReceiptsPaginator";
import { paginateListPageResolutions } from "./pagination/ListPageResolutionsPaginator";
import { paginateListPagesByContact } from "./pagination/ListPagesByContactPaginator";
import { paginateListPagesByEngagement } from "./pagination/ListPagesByEngagementPaginator";
import { paginateListPreviewRotationShifts } from "./pagination/ListPreviewRotationShiftsPaginator";
import { paginateListRotationOverrides } from "./pagination/ListRotationOverridesPaginator";
import { paginateListRotationShifts } from "./pagination/ListRotationShiftsPaginator";
import { paginateListRotations } from "./pagination/ListRotationsPaginator";
import { SSMContactsClient } from "./SSMContactsClient";

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
const paginators = {
  paginateListContactChannels,
  paginateListContacts,
  paginateListEngagements,
  paginateListPageReceipts,
  paginateListPageResolutions,
  paginateListPagesByContact,
  paginateListPagesByEngagement,
  paginateListPreviewRotationShifts,
  paginateListRotationOverrides,
  paginateListRotations,
  paginateListRotationShifts,
};

/**
 * @public
 */
export interface SSMContactsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SSMContacts {
  /**
   * @see {@link AcceptPageCommand}
   */
  acceptPage(
    args: AcceptPageCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<AcceptPageCommandOutput>;
  acceptPage(
    args: AcceptPageCommandInput,
    cb: (err: any, data?: AcceptPageCommandOutput) => void
  ): void;
  acceptPage(
    args: AcceptPageCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: AcceptPageCommandOutput) => void
  ): void;

  /**
   * @see {@link ActivateContactChannelCommand}
   */
  activateContactChannel(
    args: ActivateContactChannelCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ActivateContactChannelCommandOutput>;
  activateContactChannel(
    args: ActivateContactChannelCommandInput,
    cb: (err: any, data?: ActivateContactChannelCommandOutput) => void
  ): void;
  activateContactChannel(
    args: ActivateContactChannelCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ActivateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactCommand}
   */
  createContact(
    args: CreateContactCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<CreateContactCommandOutput>;
  createContact(
    args: CreateContactCommandInput,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  createContact(
    args: CreateContactCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactChannelCommand}
   */
  createContactChannel(
    args: CreateContactChannelCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<CreateContactChannelCommandOutput>;
  createContactChannel(
    args: CreateContactChannelCommandInput,
    cb: (err: any, data?: CreateContactChannelCommandOutput) => void
  ): void;
  createContactChannel(
    args: CreateContactChannelCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: CreateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRotationCommand}
   */
  createRotation(
    args: CreateRotationCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<CreateRotationCommandOutput>;
  createRotation(
    args: CreateRotationCommandInput,
    cb: (err: any, data?: CreateRotationCommandOutput) => void
  ): void;
  createRotation(
    args: CreateRotationCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: CreateRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRotationOverrideCommand}
   */
  createRotationOverride(
    args: CreateRotationOverrideCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<CreateRotationOverrideCommandOutput>;
  createRotationOverride(
    args: CreateRotationOverrideCommandInput,
    cb: (err: any, data?: CreateRotationOverrideCommandOutput) => void
  ): void;
  createRotationOverride(
    args: CreateRotationOverrideCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: CreateRotationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateContactChannelCommand}
   */
  deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<DeactivateContactChannelCommandOutput>;
  deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void
  ): void;
  deactivateContactChannel(
    args: DeactivateContactChannelCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: DeactivateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactCommand}
   */
  deleteContact(
    args: DeleteContactCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<DeleteContactCommandOutput>;
  deleteContact(
    args: DeleteContactCommandInput,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;
  deleteContact(
    args: DeleteContactCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactChannelCommand}
   */
  deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<DeleteContactChannelCommandOutput>;
  deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    cb: (err: any, data?: DeleteContactChannelCommandOutput) => void
  ): void;
  deleteContactChannel(
    args: DeleteContactChannelCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: DeleteContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRotationCommand}
   */
  deleteRotation(
    args: DeleteRotationCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<DeleteRotationCommandOutput>;
  deleteRotation(
    args: DeleteRotationCommandInput,
    cb: (err: any, data?: DeleteRotationCommandOutput) => void
  ): void;
  deleteRotation(
    args: DeleteRotationCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: DeleteRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRotationOverrideCommand}
   */
  deleteRotationOverride(
    args: DeleteRotationOverrideCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<DeleteRotationOverrideCommandOutput>;
  deleteRotationOverride(
    args: DeleteRotationOverrideCommandInput,
    cb: (err: any, data?: DeleteRotationOverrideCommandOutput) => void
  ): void;
  deleteRotationOverride(
    args: DeleteRotationOverrideCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: DeleteRotationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngagementCommand}
   */
  describeEngagement(
    args: DescribeEngagementCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<DescribeEngagementCommandOutput>;
  describeEngagement(
    args: DescribeEngagementCommandInput,
    cb: (err: any, data?: DescribeEngagementCommandOutput) => void
  ): void;
  describeEngagement(
    args: DescribeEngagementCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: DescribeEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePageCommand}
   */
  describePage(
    args: DescribePageCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<DescribePageCommandOutput>;
  describePage(
    args: DescribePageCommandInput,
    cb: (err: any, data?: DescribePageCommandOutput) => void
  ): void;
  describePage(
    args: DescribePageCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: DescribePageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactCommand}
   */
  getContact(
    args: GetContactCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<GetContactCommandOutput>;
  getContact(
    args: GetContactCommandInput,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;
  getContact(
    args: GetContactCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactChannelCommand}
   */
  getContactChannel(
    args: GetContactChannelCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<GetContactChannelCommandOutput>;
  getContactChannel(
    args: GetContactChannelCommandInput,
    cb: (err: any, data?: GetContactChannelCommandOutput) => void
  ): void;
  getContactChannel(
    args: GetContactChannelCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: GetContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactPolicyCommand}
   */
  getContactPolicy(
    args: GetContactPolicyCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<GetContactPolicyCommandOutput>;
  getContactPolicy(
    args: GetContactPolicyCommandInput,
    cb: (err: any, data?: GetContactPolicyCommandOutput) => void
  ): void;
  getContactPolicy(
    args: GetContactPolicyCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: GetContactPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRotationCommand}
   */
  getRotation(
    args: GetRotationCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<GetRotationCommandOutput>;
  getRotation(
    args: GetRotationCommandInput,
    cb: (err: any, data?: GetRotationCommandOutput) => void
  ): void;
  getRotation(
    args: GetRotationCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: GetRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRotationOverrideCommand}
   */
  getRotationOverride(
    args: GetRotationOverrideCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<GetRotationOverrideCommandOutput>;
  getRotationOverride(
    args: GetRotationOverrideCommandInput,
    cb: (err: any, data?: GetRotationOverrideCommandOutput) => void
  ): void;
  getRotationOverride(
    args: GetRotationOverrideCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: GetRotationOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactChannelsCommand}
   */
  listContactChannels(
    args: ListContactChannelsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListContactChannelsCommandOutput>;
  listContactChannels(
    args: ListContactChannelsCommandInput,
    cb: (err: any, data?: ListContactChannelsCommandOutput) => void
  ): void;
  listContactChannels(
    args: ListContactChannelsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListContactChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactsCommand}
   */
  listContacts(): Promise<ListContactsCommandOutput>;
  listContacts(
    args: ListContactsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListContactsCommandOutput>;
  listContacts(
    args: ListContactsCommandInput,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;
  listContacts(
    args: ListContactsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementsCommand}
   */
  listEngagements(): Promise<ListEngagementsCommandOutput>;
  listEngagements(
    args: ListEngagementsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListEngagementsCommandOutput>;
  listEngagements(
    args: ListEngagementsCommandInput,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;
  listEngagements(
    args: ListEngagementsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPageReceiptsCommand}
   */
  listPageReceipts(
    args: ListPageReceiptsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListPageReceiptsCommandOutput>;
  listPageReceipts(
    args: ListPageReceiptsCommandInput,
    cb: (err: any, data?: ListPageReceiptsCommandOutput) => void
  ): void;
  listPageReceipts(
    args: ListPageReceiptsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListPageReceiptsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPageResolutionsCommand}
   */
  listPageResolutions(
    args: ListPageResolutionsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListPageResolutionsCommandOutput>;
  listPageResolutions(
    args: ListPageResolutionsCommandInput,
    cb: (err: any, data?: ListPageResolutionsCommandOutput) => void
  ): void;
  listPageResolutions(
    args: ListPageResolutionsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListPageResolutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPagesByContactCommand}
   */
  listPagesByContact(
    args: ListPagesByContactCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListPagesByContactCommandOutput>;
  listPagesByContact(
    args: ListPagesByContactCommandInput,
    cb: (err: any, data?: ListPagesByContactCommandOutput) => void
  ): void;
  listPagesByContact(
    args: ListPagesByContactCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListPagesByContactCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPagesByEngagementCommand}
   */
  listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListPagesByEngagementCommandOutput>;
  listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void
  ): void;
  listPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListPagesByEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPreviewRotationShiftsCommand}
   */
  listPreviewRotationShifts(
    args: ListPreviewRotationShiftsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListPreviewRotationShiftsCommandOutput>;
  listPreviewRotationShifts(
    args: ListPreviewRotationShiftsCommandInput,
    cb: (err: any, data?: ListPreviewRotationShiftsCommandOutput) => void
  ): void;
  listPreviewRotationShifts(
    args: ListPreviewRotationShiftsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListPreviewRotationShiftsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRotationOverridesCommand}
   */
  listRotationOverrides(
    args: ListRotationOverridesCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListRotationOverridesCommandOutput>;
  listRotationOverrides(
    args: ListRotationOverridesCommandInput,
    cb: (err: any, data?: ListRotationOverridesCommandOutput) => void
  ): void;
  listRotationOverrides(
    args: ListRotationOverridesCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListRotationOverridesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRotationsCommand}
   */
  listRotations(): Promise<ListRotationsCommandOutput>;
  listRotations(
    args: ListRotationsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListRotationsCommandOutput>;
  listRotations(
    args: ListRotationsCommandInput,
    cb: (err: any, data?: ListRotationsCommandOutput) => void
  ): void;
  listRotations(
    args: ListRotationsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListRotationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRotationShiftsCommand}
   */
  listRotationShifts(
    args: ListRotationShiftsCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListRotationShiftsCommandOutput>;
  listRotationShifts(
    args: ListRotationShiftsCommandInput,
    cb: (err: any, data?: ListRotationShiftsCommandOutput) => void
  ): void;
  listRotationShifts(
    args: ListRotationShiftsCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListRotationShiftsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutContactPolicyCommand}
   */
  putContactPolicy(
    args: PutContactPolicyCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<PutContactPolicyCommandOutput>;
  putContactPolicy(
    args: PutContactPolicyCommandInput,
    cb: (err: any, data?: PutContactPolicyCommandOutput) => void
  ): void;
  putContactPolicy(
    args: PutContactPolicyCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: PutContactPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SendActivationCodeCommand}
   */
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<SendActivationCodeCommandOutput>;
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): void;
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementCommand}
   */
  startEngagement(
    args: StartEngagementCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<StartEngagementCommandOutput>;
  startEngagement(
    args: StartEngagementCommandInput,
    cb: (err: any, data?: StartEngagementCommandOutput) => void
  ): void;
  startEngagement(
    args: StartEngagementCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: StartEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEngagementCommand}
   */
  stopEngagement(
    args: StopEngagementCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<StopEngagementCommandOutput>;
  stopEngagement(
    args: StopEngagementCommandInput,
    cb: (err: any, data?: StopEngagementCommandOutput) => void
  ): void;
  stopEngagement(
    args: StopEngagementCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: StopEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactCommand}
   */
  updateContact(
    args: UpdateContactCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<UpdateContactCommandOutput>;
  updateContact(
    args: UpdateContactCommandInput,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
  updateContact(
    args: UpdateContactCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactChannelCommand}
   */
  updateContactChannel(
    args: UpdateContactChannelCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<UpdateContactChannelCommandOutput>;
  updateContactChannel(
    args: UpdateContactChannelCommandInput,
    cb: (err: any, data?: UpdateContactChannelCommandOutput) => void
  ): void;
  updateContactChannel(
    args: UpdateContactChannelCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: UpdateContactChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRotationCommand}
   */
  updateRotation(
    args: UpdateRotationCommandInput,
    options?: SSMContactsRequestOptions
  ): Promise<UpdateRotationCommandOutput>;
  updateRotation(
    args: UpdateRotationCommandInput,
    cb: (err: any, data?: UpdateRotationCommandOutput) => void
  ): void;
  updateRotation(
    args: UpdateRotationCommandInput,
    options: SSMContactsRequestOptions,
    cb: (err: any, data?: UpdateRotationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactChannelsCommandOutput}.
   */
  paginateListContactChannels(
    args: ListContactChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactChannelsCommandOutput>;

  /**
   * @see {@link ListContactsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContactsCommandOutput}.
   */
  paginateListContacts(
    args?: ListContactsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContactsCommandOutput>;

  /**
   * @see {@link ListEngagementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementsCommandOutput}.
   */
  paginateListEngagements(
    args?: ListEngagementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementsCommandOutput>;

  /**
   * @see {@link ListPageReceiptsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPageReceiptsCommandOutput}.
   */
  paginateListPageReceipts(
    args: ListPageReceiptsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPageReceiptsCommandOutput>;

  /**
   * @see {@link ListPageResolutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPageResolutionsCommandOutput}.
   */
  paginateListPageResolutions(
    args: ListPageResolutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPageResolutionsCommandOutput>;

  /**
   * @see {@link ListPagesByContactCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPagesByContactCommandOutput}.
   */
  paginateListPagesByContact(
    args: ListPagesByContactCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPagesByContactCommandOutput>;

  /**
   * @see {@link ListPagesByEngagementCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPagesByEngagementCommandOutput}.
   */
  paginateListPagesByEngagement(
    args: ListPagesByEngagementCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPagesByEngagementCommandOutput>;

  /**
   * @see {@link ListPreviewRotationShiftsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPreviewRotationShiftsCommandOutput}.
   */
  paginateListPreviewRotationShifts(
    args: ListPreviewRotationShiftsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPreviewRotationShiftsCommandOutput>;

  /**
   * @see {@link ListRotationOverridesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRotationOverridesCommandOutput}.
   */
  paginateListRotationOverrides(
    args: ListRotationOverridesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRotationOverridesCommandOutput>;

  /**
   * @see {@link ListRotationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRotationsCommandOutput}.
   */
  paginateListRotations(
    args?: ListRotationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRotationsCommandOutput>;

  /**
   * @see {@link ListRotationShiftsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRotationShiftsCommandOutput}.
   */
  paginateListRotationShifts(
    args: ListRotationShiftsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRotationShiftsCommandOutput>;
}

/**
 * <p>Systems Manager Incident Manager is an incident management console designed to help users
 *          mitigate and recover from incidents affecting their Amazon Web Services-hosted applications.
 *          An incident is any unplanned interruption or reduction in quality of services.</p>
 *          <p>Incident Manager increases incident resolution by notifying responders of
 *          impact, highlighting relevant troubleshooting data, and providing collaboration tools to
 *          get services back up and running. To achieve the primary goal of reducing the
 *          time-to-resolution of critical incidents, Incident Manager automates response plans
 *          and enables responder team escalation.</p>
 * @public
 */
export class SSMContacts extends SSMContactsClient implements SSMContacts {}
createAggregatedClient(commands, SSMContacts, { paginators });
