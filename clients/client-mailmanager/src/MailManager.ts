// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAddonInstanceCommand,
  CreateAddonInstanceCommandInput,
  CreateAddonInstanceCommandOutput,
} from "./commands/CreateAddonInstanceCommand";
import {
  CreateAddonSubscriptionCommand,
  CreateAddonSubscriptionCommandInput,
  CreateAddonSubscriptionCommandOutput,
} from "./commands/CreateAddonSubscriptionCommand";
import {
  CreateAddressListCommand,
  CreateAddressListCommandInput,
  CreateAddressListCommandOutput,
} from "./commands/CreateAddressListCommand";
import {
  CreateAddressListImportJobCommand,
  CreateAddressListImportJobCommandInput,
  CreateAddressListImportJobCommandOutput,
} from "./commands/CreateAddressListImportJobCommand";
import {
  CreateArchiveCommand,
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
} from "./commands/CreateArchiveCommand";
import {
  CreateIngressPointCommand,
  CreateIngressPointCommandInput,
  CreateIngressPointCommandOutput,
} from "./commands/CreateIngressPointCommand";
import { CreateRelayCommand, CreateRelayCommandInput, CreateRelayCommandOutput } from "./commands/CreateRelayCommand";
import {
  CreateRuleSetCommand,
  CreateRuleSetCommandInput,
  CreateRuleSetCommandOutput,
} from "./commands/CreateRuleSetCommand";
import {
  CreateTrafficPolicyCommand,
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import {
  DeleteAddonInstanceCommand,
  DeleteAddonInstanceCommandInput,
  DeleteAddonInstanceCommandOutput,
} from "./commands/DeleteAddonInstanceCommand";
import {
  DeleteAddonSubscriptionCommand,
  DeleteAddonSubscriptionCommandInput,
  DeleteAddonSubscriptionCommandOutput,
} from "./commands/DeleteAddonSubscriptionCommand";
import {
  DeleteAddressListCommand,
  DeleteAddressListCommandInput,
  DeleteAddressListCommandOutput,
} from "./commands/DeleteAddressListCommand";
import {
  DeleteArchiveCommand,
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
} from "./commands/DeleteArchiveCommand";
import {
  DeleteIngressPointCommand,
  DeleteIngressPointCommandInput,
  DeleteIngressPointCommandOutput,
} from "./commands/DeleteIngressPointCommand";
import { DeleteRelayCommand, DeleteRelayCommandInput, DeleteRelayCommandOutput } from "./commands/DeleteRelayCommand";
import {
  DeleteRuleSetCommand,
  DeleteRuleSetCommandInput,
  DeleteRuleSetCommandOutput,
} from "./commands/DeleteRuleSetCommand";
import {
  DeleteTrafficPolicyCommand,
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import {
  DeregisterMemberFromAddressListCommand,
  DeregisterMemberFromAddressListCommandInput,
  DeregisterMemberFromAddressListCommandOutput,
} from "./commands/DeregisterMemberFromAddressListCommand";
import {
  GetAddonInstanceCommand,
  GetAddonInstanceCommandInput,
  GetAddonInstanceCommandOutput,
} from "./commands/GetAddonInstanceCommand";
import {
  GetAddonSubscriptionCommand,
  GetAddonSubscriptionCommandInput,
  GetAddonSubscriptionCommandOutput,
} from "./commands/GetAddonSubscriptionCommand";
import {
  GetAddressListCommand,
  GetAddressListCommandInput,
  GetAddressListCommandOutput,
} from "./commands/GetAddressListCommand";
import {
  GetAddressListImportJobCommand,
  GetAddressListImportJobCommandInput,
  GetAddressListImportJobCommandOutput,
} from "./commands/GetAddressListImportJobCommand";
import { GetArchiveCommand, GetArchiveCommandInput, GetArchiveCommandOutput } from "./commands/GetArchiveCommand";
import {
  GetArchiveExportCommand,
  GetArchiveExportCommandInput,
  GetArchiveExportCommandOutput,
} from "./commands/GetArchiveExportCommand";
import {
  GetArchiveMessageCommand,
  GetArchiveMessageCommandInput,
  GetArchiveMessageCommandOutput,
} from "./commands/GetArchiveMessageCommand";
import {
  GetArchiveMessageContentCommand,
  GetArchiveMessageContentCommandInput,
  GetArchiveMessageContentCommandOutput,
} from "./commands/GetArchiveMessageContentCommand";
import {
  GetArchiveSearchCommand,
  GetArchiveSearchCommandInput,
  GetArchiveSearchCommandOutput,
} from "./commands/GetArchiveSearchCommand";
import {
  GetArchiveSearchResultsCommand,
  GetArchiveSearchResultsCommandInput,
  GetArchiveSearchResultsCommandOutput,
} from "./commands/GetArchiveSearchResultsCommand";
import {
  GetIngressPointCommand,
  GetIngressPointCommandInput,
  GetIngressPointCommandOutput,
} from "./commands/GetIngressPointCommand";
import {
  GetMemberOfAddressListCommand,
  GetMemberOfAddressListCommandInput,
  GetMemberOfAddressListCommandOutput,
} from "./commands/GetMemberOfAddressListCommand";
import { GetRelayCommand, GetRelayCommandInput, GetRelayCommandOutput } from "./commands/GetRelayCommand";
import { GetRuleSetCommand, GetRuleSetCommandInput, GetRuleSetCommandOutput } from "./commands/GetRuleSetCommand";
import {
  GetTrafficPolicyCommand,
  GetTrafficPolicyCommandInput,
  GetTrafficPolicyCommandOutput,
} from "./commands/GetTrafficPolicyCommand";
import {
  ListAddonInstancesCommand,
  ListAddonInstancesCommandInput,
  ListAddonInstancesCommandOutput,
} from "./commands/ListAddonInstancesCommand";
import {
  ListAddonSubscriptionsCommand,
  ListAddonSubscriptionsCommandInput,
  ListAddonSubscriptionsCommandOutput,
} from "./commands/ListAddonSubscriptionsCommand";
import {
  ListAddressListImportJobsCommand,
  ListAddressListImportJobsCommandInput,
  ListAddressListImportJobsCommandOutput,
} from "./commands/ListAddressListImportJobsCommand";
import {
  ListAddressListsCommand,
  ListAddressListsCommandInput,
  ListAddressListsCommandOutput,
} from "./commands/ListAddressListsCommand";
import {
  ListArchiveExportsCommand,
  ListArchiveExportsCommandInput,
  ListArchiveExportsCommandOutput,
} from "./commands/ListArchiveExportsCommand";
import {
  ListArchivesCommand,
  ListArchivesCommandInput,
  ListArchivesCommandOutput,
} from "./commands/ListArchivesCommand";
import {
  ListArchiveSearchesCommand,
  ListArchiveSearchesCommandInput,
  ListArchiveSearchesCommandOutput,
} from "./commands/ListArchiveSearchesCommand";
import {
  ListIngressPointsCommand,
  ListIngressPointsCommandInput,
  ListIngressPointsCommandOutput,
} from "./commands/ListIngressPointsCommand";
import {
  ListMembersOfAddressListCommand,
  ListMembersOfAddressListCommandInput,
  ListMembersOfAddressListCommandOutput,
} from "./commands/ListMembersOfAddressListCommand";
import { ListRelaysCommand, ListRelaysCommandInput, ListRelaysCommandOutput } from "./commands/ListRelaysCommand";
import {
  ListRuleSetsCommand,
  ListRuleSetsCommandInput,
  ListRuleSetsCommandOutput,
} from "./commands/ListRuleSetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrafficPoliciesCommand,
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import {
  RegisterMemberToAddressListCommand,
  RegisterMemberToAddressListCommandInput,
  RegisterMemberToAddressListCommandOutput,
} from "./commands/RegisterMemberToAddressListCommand";
import {
  StartAddressListImportJobCommand,
  StartAddressListImportJobCommandInput,
  StartAddressListImportJobCommandOutput,
} from "./commands/StartAddressListImportJobCommand";
import {
  StartArchiveExportCommand,
  StartArchiveExportCommandInput,
  StartArchiveExportCommandOutput,
} from "./commands/StartArchiveExportCommand";
import {
  StartArchiveSearchCommand,
  StartArchiveSearchCommandInput,
  StartArchiveSearchCommandOutput,
} from "./commands/StartArchiveSearchCommand";
import {
  StopAddressListImportJobCommand,
  StopAddressListImportJobCommandInput,
  StopAddressListImportJobCommandOutput,
} from "./commands/StopAddressListImportJobCommand";
import {
  StopArchiveExportCommand,
  StopArchiveExportCommandInput,
  StopArchiveExportCommandOutput,
} from "./commands/StopArchiveExportCommand";
import {
  StopArchiveSearchCommand,
  StopArchiveSearchCommandInput,
  StopArchiveSearchCommandOutput,
} from "./commands/StopArchiveSearchCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateArchiveCommand,
  UpdateArchiveCommandInput,
  UpdateArchiveCommandOutput,
} from "./commands/UpdateArchiveCommand";
import {
  UpdateIngressPointCommand,
  UpdateIngressPointCommandInput,
  UpdateIngressPointCommandOutput,
} from "./commands/UpdateIngressPointCommand";
import { UpdateRelayCommand, UpdateRelayCommandInput, UpdateRelayCommandOutput } from "./commands/UpdateRelayCommand";
import {
  UpdateRuleSetCommand,
  UpdateRuleSetCommandInput,
  UpdateRuleSetCommandOutput,
} from "./commands/UpdateRuleSetCommand";
import {
  UpdateTrafficPolicyCommand,
  UpdateTrafficPolicyCommandInput,
  UpdateTrafficPolicyCommandOutput,
} from "./commands/UpdateTrafficPolicyCommand";
import { MailManagerClient } from "./MailManagerClient";

const commands = {
  CreateAddonInstanceCommand,
  CreateAddonSubscriptionCommand,
  CreateAddressListCommand,
  CreateAddressListImportJobCommand,
  CreateArchiveCommand,
  CreateIngressPointCommand,
  CreateRelayCommand,
  CreateRuleSetCommand,
  CreateTrafficPolicyCommand,
  DeleteAddonInstanceCommand,
  DeleteAddonSubscriptionCommand,
  DeleteAddressListCommand,
  DeleteArchiveCommand,
  DeleteIngressPointCommand,
  DeleteRelayCommand,
  DeleteRuleSetCommand,
  DeleteTrafficPolicyCommand,
  DeregisterMemberFromAddressListCommand,
  GetAddonInstanceCommand,
  GetAddonSubscriptionCommand,
  GetAddressListCommand,
  GetAddressListImportJobCommand,
  GetArchiveCommand,
  GetArchiveExportCommand,
  GetArchiveMessageCommand,
  GetArchiveMessageContentCommand,
  GetArchiveSearchCommand,
  GetArchiveSearchResultsCommand,
  GetIngressPointCommand,
  GetMemberOfAddressListCommand,
  GetRelayCommand,
  GetRuleSetCommand,
  GetTrafficPolicyCommand,
  ListAddonInstancesCommand,
  ListAddonSubscriptionsCommand,
  ListAddressListImportJobsCommand,
  ListAddressListsCommand,
  ListArchiveExportsCommand,
  ListArchivesCommand,
  ListArchiveSearchesCommand,
  ListIngressPointsCommand,
  ListMembersOfAddressListCommand,
  ListRelaysCommand,
  ListRuleSetsCommand,
  ListTagsForResourceCommand,
  ListTrafficPoliciesCommand,
  RegisterMemberToAddressListCommand,
  StartAddressListImportJobCommand,
  StartArchiveExportCommand,
  StartArchiveSearchCommand,
  StopAddressListImportJobCommand,
  StopArchiveExportCommand,
  StopArchiveSearchCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateArchiveCommand,
  UpdateIngressPointCommand,
  UpdateRelayCommand,
  UpdateRuleSetCommand,
  UpdateTrafficPolicyCommand,
};

export interface MailManager {
  /**
   * @see {@link CreateAddonInstanceCommand}
   */
  createAddonInstance(
    args: CreateAddonInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddonInstanceCommandOutput>;
  createAddonInstance(
    args: CreateAddonInstanceCommandInput,
    cb: (err: any, data?: CreateAddonInstanceCommandOutput) => void
  ): void;
  createAddonInstance(
    args: CreateAddonInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddonInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAddonSubscriptionCommand}
   */
  createAddonSubscription(
    args: CreateAddonSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddonSubscriptionCommandOutput>;
  createAddonSubscription(
    args: CreateAddonSubscriptionCommandInput,
    cb: (err: any, data?: CreateAddonSubscriptionCommandOutput) => void
  ): void;
  createAddonSubscription(
    args: CreateAddonSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddonSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAddressListCommand}
   */
  createAddressList(
    args: CreateAddressListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddressListCommandOutput>;
  createAddressList(
    args: CreateAddressListCommandInput,
    cb: (err: any, data?: CreateAddressListCommandOutput) => void
  ): void;
  createAddressList(
    args: CreateAddressListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddressListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAddressListImportJobCommand}
   */
  createAddressListImportJob(
    args: CreateAddressListImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddressListImportJobCommandOutput>;
  createAddressListImportJob(
    args: CreateAddressListImportJobCommandInput,
    cb: (err: any, data?: CreateAddressListImportJobCommandOutput) => void
  ): void;
  createAddressListImportJob(
    args: CreateAddressListImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddressListImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(
    args: CreateArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateArchiveCommandOutput>;
  createArchive(
    args: CreateArchiveCommandInput,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;
  createArchive(
    args: CreateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIngressPointCommand}
   */
  createIngressPoint(
    args: CreateIngressPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIngressPointCommandOutput>;
  createIngressPoint(
    args: CreateIngressPointCommandInput,
    cb: (err: any, data?: CreateIngressPointCommandOutput) => void
  ): void;
  createIngressPoint(
    args: CreateIngressPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIngressPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRelayCommand}
   */
  createRelay(
    args: CreateRelayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelayCommandOutput>;
  createRelay(
    args: CreateRelayCommandInput,
    cb: (err: any, data?: CreateRelayCommandOutput) => void
  ): void;
  createRelay(
    args: CreateRelayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleSetCommand}
   */
  createRuleSet(
    args: CreateRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleSetCommandOutput>;
  createRuleSet(
    args: CreateRuleSetCommandInput,
    cb: (err: any, data?: CreateRuleSetCommandOutput) => void
  ): void;
  createRuleSet(
    args: CreateRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficPolicyCommand}
   */
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficPolicyCommandOutput>;
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;
  createTrafficPolicy(
    args: CreateTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAddonInstanceCommand}
   */
  deleteAddonInstance(
    args: DeleteAddonInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAddonInstanceCommandOutput>;
  deleteAddonInstance(
    args: DeleteAddonInstanceCommandInput,
    cb: (err: any, data?: DeleteAddonInstanceCommandOutput) => void
  ): void;
  deleteAddonInstance(
    args: DeleteAddonInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddonInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAddonSubscriptionCommand}
   */
  deleteAddonSubscription(
    args: DeleteAddonSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAddonSubscriptionCommandOutput>;
  deleteAddonSubscription(
    args: DeleteAddonSubscriptionCommandInput,
    cb: (err: any, data?: DeleteAddonSubscriptionCommandOutput) => void
  ): void;
  deleteAddonSubscription(
    args: DeleteAddonSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddonSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAddressListCommand}
   */
  deleteAddressList(
    args: DeleteAddressListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAddressListCommandOutput>;
  deleteAddressList(
    args: DeleteAddressListCommandInput,
    cb: (err: any, data?: DeleteAddressListCommandOutput) => void
  ): void;
  deleteAddressList(
    args: DeleteAddressListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddressListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArchiveCommandOutput>;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIngressPointCommand}
   */
  deleteIngressPoint(
    args: DeleteIngressPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIngressPointCommandOutput>;
  deleteIngressPoint(
    args: DeleteIngressPointCommandInput,
    cb: (err: any, data?: DeleteIngressPointCommandOutput) => void
  ): void;
  deleteIngressPoint(
    args: DeleteIngressPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIngressPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRelayCommand}
   */
  deleteRelay(
    args: DeleteRelayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRelayCommandOutput>;
  deleteRelay(
    args: DeleteRelayCommandInput,
    cb: (err: any, data?: DeleteRelayCommandOutput) => void
  ): void;
  deleteRelay(
    args: DeleteRelayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRelayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleSetCommand}
   */
  deleteRuleSet(
    args: DeleteRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleSetCommandOutput>;
  deleteRuleSet(
    args: DeleteRuleSetCommandInput,
    cb: (err: any, data?: DeleteRuleSetCommandOutput) => void
  ): void;
  deleteRuleSet(
    args: DeleteRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficPolicyCommand}
   */
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficPolicyCommandOutput>;
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;
  deleteTrafficPolicy(
    args: DeleteTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterMemberFromAddressListCommand}
   */
  deregisterMemberFromAddressList(
    args: DeregisterMemberFromAddressListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterMemberFromAddressListCommandOutput>;
  deregisterMemberFromAddressList(
    args: DeregisterMemberFromAddressListCommandInput,
    cb: (err: any, data?: DeregisterMemberFromAddressListCommandOutput) => void
  ): void;
  deregisterMemberFromAddressList(
    args: DeregisterMemberFromAddressListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterMemberFromAddressListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAddonInstanceCommand}
   */
  getAddonInstance(
    args: GetAddonInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAddonInstanceCommandOutput>;
  getAddonInstance(
    args: GetAddonInstanceCommandInput,
    cb: (err: any, data?: GetAddonInstanceCommandOutput) => void
  ): void;
  getAddonInstance(
    args: GetAddonInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAddonInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAddonSubscriptionCommand}
   */
  getAddonSubscription(
    args: GetAddonSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAddonSubscriptionCommandOutput>;
  getAddonSubscription(
    args: GetAddonSubscriptionCommandInput,
    cb: (err: any, data?: GetAddonSubscriptionCommandOutput) => void
  ): void;
  getAddonSubscription(
    args: GetAddonSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAddonSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAddressListCommand}
   */
  getAddressList(
    args: GetAddressListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAddressListCommandOutput>;
  getAddressList(
    args: GetAddressListCommandInput,
    cb: (err: any, data?: GetAddressListCommandOutput) => void
  ): void;
  getAddressList(
    args: GetAddressListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAddressListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAddressListImportJobCommand}
   */
  getAddressListImportJob(
    args: GetAddressListImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAddressListImportJobCommandOutput>;
  getAddressListImportJob(
    args: GetAddressListImportJobCommandInput,
    cb: (err: any, data?: GetAddressListImportJobCommandOutput) => void
  ): void;
  getAddressListImportJob(
    args: GetAddressListImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAddressListImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchiveCommand}
   */
  getArchive(
    args: GetArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveCommandOutput>;
  getArchive(
    args: GetArchiveCommandInput,
    cb: (err: any, data?: GetArchiveCommandOutput) => void
  ): void;
  getArchive(
    args: GetArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchiveExportCommand}
   */
  getArchiveExport(
    args: GetArchiveExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveExportCommandOutput>;
  getArchiveExport(
    args: GetArchiveExportCommandInput,
    cb: (err: any, data?: GetArchiveExportCommandOutput) => void
  ): void;
  getArchiveExport(
    args: GetArchiveExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchiveMessageCommand}
   */
  getArchiveMessage(
    args: GetArchiveMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveMessageCommandOutput>;
  getArchiveMessage(
    args: GetArchiveMessageCommandInput,
    cb: (err: any, data?: GetArchiveMessageCommandOutput) => void
  ): void;
  getArchiveMessage(
    args: GetArchiveMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchiveMessageContentCommand}
   */
  getArchiveMessageContent(
    args: GetArchiveMessageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveMessageContentCommandOutput>;
  getArchiveMessageContent(
    args: GetArchiveMessageContentCommandInput,
    cb: (err: any, data?: GetArchiveMessageContentCommandOutput) => void
  ): void;
  getArchiveMessageContent(
    args: GetArchiveMessageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveMessageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchiveSearchCommand}
   */
  getArchiveSearch(
    args: GetArchiveSearchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveSearchCommandOutput>;
  getArchiveSearch(
    args: GetArchiveSearchCommandInput,
    cb: (err: any, data?: GetArchiveSearchCommandOutput) => void
  ): void;
  getArchiveSearch(
    args: GetArchiveSearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveSearchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchiveSearchResultsCommand}
   */
  getArchiveSearchResults(
    args: GetArchiveSearchResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveSearchResultsCommandOutput>;
  getArchiveSearchResults(
    args: GetArchiveSearchResultsCommandInput,
    cb: (err: any, data?: GetArchiveSearchResultsCommandOutput) => void
  ): void;
  getArchiveSearchResults(
    args: GetArchiveSearchResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveSearchResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIngressPointCommand}
   */
  getIngressPoint(
    args: GetIngressPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIngressPointCommandOutput>;
  getIngressPoint(
    args: GetIngressPointCommandInput,
    cb: (err: any, data?: GetIngressPointCommandOutput) => void
  ): void;
  getIngressPoint(
    args: GetIngressPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIngressPointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemberOfAddressListCommand}
   */
  getMemberOfAddressList(
    args: GetMemberOfAddressListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMemberOfAddressListCommandOutput>;
  getMemberOfAddressList(
    args: GetMemberOfAddressListCommandInput,
    cb: (err: any, data?: GetMemberOfAddressListCommandOutput) => void
  ): void;
  getMemberOfAddressList(
    args: GetMemberOfAddressListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberOfAddressListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelayCommand}
   */
  getRelay(
    args: GetRelayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelayCommandOutput>;
  getRelay(
    args: GetRelayCommandInput,
    cb: (err: any, data?: GetRelayCommandOutput) => void
  ): void;
  getRelay(
    args: GetRelayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleSetCommand}
   */
  getRuleSet(
    args: GetRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuleSetCommandOutput>;
  getRuleSet(
    args: GetRuleSetCommandInput,
    cb: (err: any, data?: GetRuleSetCommandOutput) => void
  ): void;
  getRuleSet(
    args: GetRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrafficPolicyCommand}
   */
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrafficPolicyCommandOutput>;
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;
  getTrafficPolicy(
    args: GetTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrafficPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAddonInstancesCommand}
   */
  listAddonInstances(): Promise<ListAddonInstancesCommandOutput>;
  listAddonInstances(
    args: ListAddonInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAddonInstancesCommandOutput>;
  listAddonInstances(
    args: ListAddonInstancesCommandInput,
    cb: (err: any, data?: ListAddonInstancesCommandOutput) => void
  ): void;
  listAddonInstances(
    args: ListAddonInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAddonInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAddonSubscriptionsCommand}
   */
  listAddonSubscriptions(): Promise<ListAddonSubscriptionsCommandOutput>;
  listAddonSubscriptions(
    args: ListAddonSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAddonSubscriptionsCommandOutput>;
  listAddonSubscriptions(
    args: ListAddonSubscriptionsCommandInput,
    cb: (err: any, data?: ListAddonSubscriptionsCommandOutput) => void
  ): void;
  listAddonSubscriptions(
    args: ListAddonSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAddonSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAddressListImportJobsCommand}
   */
  listAddressListImportJobs(
    args: ListAddressListImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAddressListImportJobsCommandOutput>;
  listAddressListImportJobs(
    args: ListAddressListImportJobsCommandInput,
    cb: (err: any, data?: ListAddressListImportJobsCommandOutput) => void
  ): void;
  listAddressListImportJobs(
    args: ListAddressListImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAddressListImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAddressListsCommand}
   */
  listAddressLists(): Promise<ListAddressListsCommandOutput>;
  listAddressLists(
    args: ListAddressListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAddressListsCommandOutput>;
  listAddressLists(
    args: ListAddressListsCommandInput,
    cb: (err: any, data?: ListAddressListsCommandOutput) => void
  ): void;
  listAddressLists(
    args: ListAddressListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAddressListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArchiveExportsCommand}
   */
  listArchiveExports(
    args: ListArchiveExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchiveExportsCommandOutput>;
  listArchiveExports(
    args: ListArchiveExportsCommandInput,
    cb: (err: any, data?: ListArchiveExportsCommandOutput) => void
  ): void;
  listArchiveExports(
    args: ListArchiveExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchiveExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(): Promise<ListArchivesCommandOutput>;
  listArchives(
    args: ListArchivesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchivesCommandOutput>;
  listArchives(
    args: ListArchivesCommandInput,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;
  listArchives(
    args: ListArchivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArchiveSearchesCommand}
   */
  listArchiveSearches(
    args: ListArchiveSearchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchiveSearchesCommandOutput>;
  listArchiveSearches(
    args: ListArchiveSearchesCommandInput,
    cb: (err: any, data?: ListArchiveSearchesCommandOutput) => void
  ): void;
  listArchiveSearches(
    args: ListArchiveSearchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchiveSearchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIngressPointsCommand}
   */
  listIngressPoints(): Promise<ListIngressPointsCommandOutput>;
  listIngressPoints(
    args: ListIngressPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngressPointsCommandOutput>;
  listIngressPoints(
    args: ListIngressPointsCommandInput,
    cb: (err: any, data?: ListIngressPointsCommandOutput) => void
  ): void;
  listIngressPoints(
    args: ListIngressPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIngressPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersOfAddressListCommand}
   */
  listMembersOfAddressList(
    args: ListMembersOfAddressListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembersOfAddressListCommandOutput>;
  listMembersOfAddressList(
    args: ListMembersOfAddressListCommandInput,
    cb: (err: any, data?: ListMembersOfAddressListCommandOutput) => void
  ): void;
  listMembersOfAddressList(
    args: ListMembersOfAddressListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersOfAddressListCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRelaysCommand}
   */
  listRelays(): Promise<ListRelaysCommandOutput>;
  listRelays(
    args: ListRelaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRelaysCommandOutput>;
  listRelays(
    args: ListRelaysCommandInput,
    cb: (err: any, data?: ListRelaysCommandOutput) => void
  ): void;
  listRelays(
    args: ListRelaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRelaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleSetsCommand}
   */
  listRuleSets(): Promise<ListRuleSetsCommandOutput>;
  listRuleSets(
    args: ListRuleSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleSetsCommandOutput>;
  listRuleSets(
    args: ListRuleSetsCommandInput,
    cb: (err: any, data?: ListRuleSetsCommandOutput) => void
  ): void;
  listRuleSets(
    args: ListRuleSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleSetsCommandOutput) => void
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
   * @see {@link ListTrafficPoliciesCommand}
   */
  listTrafficPolicies(): Promise<ListTrafficPoliciesCommandOutput>;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrafficPoliciesCommandOutput>;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;
  listTrafficPolicies(
    args: ListTrafficPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrafficPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterMemberToAddressListCommand}
   */
  registerMemberToAddressList(
    args: RegisterMemberToAddressListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterMemberToAddressListCommandOutput>;
  registerMemberToAddressList(
    args: RegisterMemberToAddressListCommandInput,
    cb: (err: any, data?: RegisterMemberToAddressListCommandOutput) => void
  ): void;
  registerMemberToAddressList(
    args: RegisterMemberToAddressListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterMemberToAddressListCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAddressListImportJobCommand}
   */
  startAddressListImportJob(
    args: StartAddressListImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAddressListImportJobCommandOutput>;
  startAddressListImportJob(
    args: StartAddressListImportJobCommandInput,
    cb: (err: any, data?: StartAddressListImportJobCommandOutput) => void
  ): void;
  startAddressListImportJob(
    args: StartAddressListImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAddressListImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartArchiveExportCommand}
   */
  startArchiveExport(
    args: StartArchiveExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartArchiveExportCommandOutput>;
  startArchiveExport(
    args: StartArchiveExportCommandInput,
    cb: (err: any, data?: StartArchiveExportCommandOutput) => void
  ): void;
  startArchiveExport(
    args: StartArchiveExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartArchiveExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartArchiveSearchCommand}
   */
  startArchiveSearch(
    args: StartArchiveSearchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartArchiveSearchCommandOutput>;
  startArchiveSearch(
    args: StartArchiveSearchCommandInput,
    cb: (err: any, data?: StartArchiveSearchCommandOutput) => void
  ): void;
  startArchiveSearch(
    args: StartArchiveSearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartArchiveSearchCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAddressListImportJobCommand}
   */
  stopAddressListImportJob(
    args: StopAddressListImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAddressListImportJobCommandOutput>;
  stopAddressListImportJob(
    args: StopAddressListImportJobCommandInput,
    cb: (err: any, data?: StopAddressListImportJobCommandOutput) => void
  ): void;
  stopAddressListImportJob(
    args: StopAddressListImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAddressListImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopArchiveExportCommand}
   */
  stopArchiveExport(
    args: StopArchiveExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopArchiveExportCommandOutput>;
  stopArchiveExport(
    args: StopArchiveExportCommandInput,
    cb: (err: any, data?: StopArchiveExportCommandOutput) => void
  ): void;
  stopArchiveExport(
    args: StopArchiveExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopArchiveExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StopArchiveSearchCommand}
   */
  stopArchiveSearch(
    args: StopArchiveSearchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopArchiveSearchCommandOutput>;
  stopArchiveSearch(
    args: StopArchiveSearchCommandInput,
    cb: (err: any, data?: StopArchiveSearchCommandOutput) => void
  ): void;
  stopArchiveSearch(
    args: StopArchiveSearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopArchiveSearchCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(
    args: UpdateArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateArchiveCommandOutput>;
  updateArchive(
    args: UpdateArchiveCommandInput,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;
  updateArchive(
    args: UpdateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIngressPointCommand}
   */
  updateIngressPoint(
    args: UpdateIngressPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIngressPointCommandOutput>;
  updateIngressPoint(
    args: UpdateIngressPointCommandInput,
    cb: (err: any, data?: UpdateIngressPointCommandOutput) => void
  ): void;
  updateIngressPoint(
    args: UpdateIngressPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIngressPointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelayCommand}
   */
  updateRelay(
    args: UpdateRelayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelayCommandOutput>;
  updateRelay(
    args: UpdateRelayCommandInput,
    cb: (err: any, data?: UpdateRelayCommandOutput) => void
  ): void;
  updateRelay(
    args: UpdateRelayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleSetCommand}
   */
  updateRuleSet(
    args: UpdateRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleSetCommandOutput>;
  updateRuleSet(
    args: UpdateRuleSetCommandInput,
    cb: (err: any, data?: UpdateRuleSetCommandOutput) => void
  ): void;
  updateRuleSet(
    args: UpdateRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrafficPolicyCommand}
   */
  updateTrafficPolicy(
    args: UpdateTrafficPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrafficPolicyCommandOutput>;
  updateTrafficPolicy(
    args: UpdateTrafficPolicyCommandInput,
    cb: (err: any, data?: UpdateTrafficPolicyCommandOutput) => void
  ): void;
  updateTrafficPolicy(
    args: UpdateTrafficPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrafficPolicyCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon SES Mail Manager API</fullname> <p>The Amazon SES Mail Manager API contains operations and data types that comprise the Mail Manager feature of <a href="http://aws.amazon.com/ses">Amazon Simple Email Service (SES)</a>.</p> <p>Mail Manager is a set of Amazon SES email gateway features designed to help you strengthen your organization's email infrastructure, simplify email workflow management, and streamline email compliance control. To learn more, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/eb.html">Mail Manager chapter</a> in the <i>Amazon SES Developer Guide</i>.</p>
 * @public
 */
export class MailManager extends MailManagerClient implements MailManager {}
createAggregatedClient(commands, MailManager);
