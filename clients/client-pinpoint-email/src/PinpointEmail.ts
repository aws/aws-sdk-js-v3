// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateConfigurationSetCommand,
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommand,
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateDedicatedIpPoolCommand,
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
} from "./commands/CreateDedicatedIpPoolCommand";
import {
  CreateDeliverabilityTestReportCommand,
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
} from "./commands/CreateDeliverabilityTestReportCommand";
import {
  CreateEmailIdentityCommand,
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
} from "./commands/CreateEmailIdentityCommand";
import {
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteDedicatedIpPoolCommand,
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "./commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommand,
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "./commands/DeleteEmailIdentityCommand";
import { GetAccountCommand, GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import {
  GetBlacklistReportsCommand,
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
} from "./commands/GetBlacklistReportsCommand";
import {
  GetConfigurationSetCommand,
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
} from "./commands/GetConfigurationSetCommand";
import {
  GetConfigurationSetEventDestinationsCommand,
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "./commands/GetConfigurationSetEventDestinationsCommand";
import {
  GetDedicatedIpCommand,
  GetDedicatedIpCommandInput,
  GetDedicatedIpCommandOutput,
} from "./commands/GetDedicatedIpCommand";
import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "./commands/GetDedicatedIpsCommand";
import {
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
} from "./commands/GetDeliverabilityDashboardOptionsCommand";
import {
  GetDeliverabilityTestReportCommand,
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
} from "./commands/GetDeliverabilityTestReportCommand";
import {
  GetDomainDeliverabilityCampaignCommand,
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
} from "./commands/GetDomainDeliverabilityCampaignCommand";
import {
  GetDomainStatisticsReportCommand,
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
} from "./commands/GetDomainStatisticsReportCommand";
import {
  GetEmailIdentityCommand,
  GetEmailIdentityCommandInput,
  GetEmailIdentityCommandOutput,
} from "./commands/GetEmailIdentityCommand";
import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "./commands/ListConfigurationSetsCommand";
import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "./commands/ListDedicatedIpPoolsCommand";
import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "./commands/ListDeliverabilityTestReportsCommand";
import {
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "./commands/ListDomainDeliverabilityCampaignsCommand";
import {
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "./commands/ListEmailIdentitiesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import {
  PutAccountSendingAttributesCommand,
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "./commands/PutAccountSendingAttributesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
} from "./commands/PutConfigurationSetReputationOptionsCommand";
import {
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
} from "./commands/PutConfigurationSetSendingOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommand,
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "./commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
} from "./commands/PutDedicatedIpInPoolCommand";
import {
  PutDedicatedIpWarmupAttributesCommand,
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
} from "./commands/PutDedicatedIpWarmupAttributesCommand";
import {
  PutDeliverabilityDashboardOptionCommand,
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
} from "./commands/PutDeliverabilityDashboardOptionCommand";
import {
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "./commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommand,
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "./commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommand, SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommand,
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { PinpointEmailClient, PinpointEmailClientConfig } from "./PinpointEmailClient";

const commands = {
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  CreateDedicatedIpPoolCommand,
  CreateDeliverabilityTestReportCommand,
  CreateEmailIdentityCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  DeleteDedicatedIpPoolCommand,
  DeleteEmailIdentityCommand,
  GetAccountCommand,
  GetBlacklistReportsCommand,
  GetConfigurationSetCommand,
  GetConfigurationSetEventDestinationsCommand,
  GetDedicatedIpCommand,
  GetDedicatedIpsCommand,
  GetDeliverabilityDashboardOptionsCommand,
  GetDeliverabilityTestReportCommand,
  GetDomainDeliverabilityCampaignCommand,
  GetDomainStatisticsReportCommand,
  GetEmailIdentityCommand,
  ListConfigurationSetsCommand,
  ListDedicatedIpPoolsCommand,
  ListDeliverabilityTestReportsCommand,
  ListDomainDeliverabilityCampaignsCommand,
  ListEmailIdentitiesCommand,
  ListTagsForResourceCommand,
  PutAccountDedicatedIpWarmupAttributesCommand,
  PutAccountSendingAttributesCommand,
  PutConfigurationSetDeliveryOptionsCommand,
  PutConfigurationSetReputationOptionsCommand,
  PutConfigurationSetSendingOptionsCommand,
  PutConfigurationSetTrackingOptionsCommand,
  PutDedicatedIpInPoolCommand,
  PutDedicatedIpWarmupAttributesCommand,
  PutDeliverabilityDashboardOptionCommand,
  PutEmailIdentityDkimAttributesCommand,
  PutEmailIdentityFeedbackAttributesCommand,
  PutEmailIdentityMailFromAttributesCommand,
  SendEmailCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConfigurationSetEventDestinationCommand,
};

export interface PinpointEmail {
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
   * @see {@link CreateConfigurationSetEventDestinationCommand}
   */
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDedicatedIpPoolCommand}
   */
  createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDedicatedIpPoolCommandOutput>;
  createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;
  createDedicatedIpPool(
    args: CreateDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeliverabilityTestReportCommand}
   */
  createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeliverabilityTestReportCommandOutput>;
  createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;
  createDeliverabilityTestReport(
    args: CreateDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailIdentityCommand}
   */
  createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailIdentityCommandOutput>;
  createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
  ): void;
  createEmailIdentity(
    args: CreateEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void
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
   * @see {@link DeleteConfigurationSetEventDestinationCommand}
   */
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDedicatedIpPoolCommand}
   */
  deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDedicatedIpPoolCommandOutput>;
  deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;
  deleteDedicatedIpPool(
    args: DeleteDedicatedIpPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailIdentityCommand}
   */
  deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailIdentityCommandOutput>;
  deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;
  deleteEmailIdentity(
    args: DeleteEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountCommand}
   */
  getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlacklistReportsCommand}
   */
  getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlacklistReportsCommandOutput>;
  getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;
  getBlacklistReports(
    args: GetBlacklistReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationSetCommand}
   */
  getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetCommandOutput>;
  getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;
  getConfigurationSet(
    args: GetConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationSetEventDestinationsCommand}
   */
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDedicatedIpCommand}
   */
  getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpCommandOutput>;
  getDedicatedIp(args: GetDedicatedIpCommandInput, cb: (err: any, data?: GetDedicatedIpCommandOutput) => void): void;
  getDedicatedIp(
    args: GetDedicatedIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDedicatedIpsCommand}
   */
  getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDedicatedIpsCommandOutput>;
  getDedicatedIps(args: GetDedicatedIpsCommandInput, cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void): void;
  getDedicatedIps(
    args: GetDedicatedIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliverabilityDashboardOptionsCommand}
   */
  getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput>;
  getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;
  getDeliverabilityDashboardOptions(
    args: GetDeliverabilityDashboardOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeliverabilityTestReportCommand}
   */
  getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeliverabilityTestReportCommandOutput>;
  getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;
  getDeliverabilityTestReport(
    args: GetDeliverabilityTestReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainDeliverabilityCampaignCommand}
   */
  getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainDeliverabilityCampaignCommandOutput>;
  getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;
  getDomainDeliverabilityCampaign(
    args: GetDomainDeliverabilityCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainStatisticsReportCommand}
   */
  getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainStatisticsReportCommandOutput>;
  getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;
  getDomainStatisticsReport(
    args: GetDomainStatisticsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailIdentityCommand}
   */
  getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailIdentityCommandOutput>;
  getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;
  getEmailIdentity(
    args: GetEmailIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationSetsCommand}
   */
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDedicatedIpPoolsCommand}
   */
  listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDedicatedIpPoolsCommandOutput>;
  listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;
  listDedicatedIpPools(
    args: ListDedicatedIpPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeliverabilityTestReportsCommand}
   */
  listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeliverabilityTestReportsCommandOutput>;
  listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;
  listDeliverabilityTestReports(
    args: ListDeliverabilityTestReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainDeliverabilityCampaignsCommand}
   */
  listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainDeliverabilityCampaignsCommandOutput>;
  listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;
  listDomainDeliverabilityCampaigns(
    args: ListDomainDeliverabilityCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEmailIdentitiesCommand}
   */
  listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEmailIdentitiesCommandOutput>;
  listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
  ): void;
  listEmailIdentities(
    args: ListEmailIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void
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
   * @see {@link PutAccountDedicatedIpWarmupAttributesCommand}
   */
  putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput>;
  putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  putAccountDedicatedIpWarmupAttributes(
    args: PutAccountDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountSendingAttributesCommand}
   */
  putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSendingAttributesCommandOutput>;
  putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;
  putAccountSendingAttributes(
    args: PutAccountSendingAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetDeliveryOptionsCommand}
   */
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput>;
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;
  putConfigurationSetDeliveryOptions(
    args: PutConfigurationSetDeliveryOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetReputationOptionsCommand}
   */
  putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput>;
  putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;
  putConfigurationSetReputationOptions(
    args: PutConfigurationSetReputationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetSendingOptionsCommand}
   */
  putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetSendingOptionsCommandOutput>;
  putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;
  putConfigurationSetSendingOptions(
    args: PutConfigurationSetSendingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationSetTrackingOptionsCommand}
   */
  putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationSetTrackingOptionsCommandOutput>;
  putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;
  putConfigurationSetTrackingOptions(
    args: PutConfigurationSetTrackingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDedicatedIpInPoolCommand}
   */
  putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpInPoolCommandOutput>;
  putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;
  putDedicatedIpInPool(
    args: PutDedicatedIpInPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDedicatedIpWarmupAttributesCommand}
   */
  putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput>;
  putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;
  putDedicatedIpWarmupAttributes(
    args: PutDedicatedIpWarmupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDeliverabilityDashboardOptionCommand}
   */
  putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput>;
  putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;
  putDeliverabilityDashboardOption(
    args: PutDeliverabilityDashboardOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityDkimAttributesCommand}
   */
  putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput>;
  putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;
  putEmailIdentityDkimAttributes(
    args: PutEmailIdentityDkimAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityFeedbackAttributesCommand}
   */
  putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput>;
  putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;
  putEmailIdentityFeedbackAttributes(
    args: PutEmailIdentityFeedbackAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailIdentityMailFromAttributesCommand}
   */
  putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailIdentityMailFromAttributesCommandOutput>;
  putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;
  putEmailIdentityMailFromAttributes(
    args: PutEmailIdentityMailFromAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEmailCommand}
   */
  sendEmail(args: SendEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendEmailCommandOutput>;
  sendEmail(args: SendEmailCommandInput, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
  sendEmail(
    args: SendEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEmailCommandOutput) => void
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
   * @see {@link UpdateConfigurationSetEventDestinationCommand}
   */
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Pinpoint Email Service</fullname>
 *         <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides
 *             information about the Amazon Pinpoint Email API (version 1.0), including supported
 *             operations, data types, parameters, and schemas.</p>
 *         <p>
 *             <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you
 *             can use to engage with your customers across multiple messaging channels. You can use
 *             Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The
 *             Amazon Pinpoint Email API provides programmatic access to options that are unique to the
 *             email channel and supplement the options provided by the Amazon Pinpoint API.</p>
 *         <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon
 *                 Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer
 *                 Guide</i> provides tutorials, code samples, and procedures that demonstrate
 *             how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into
 *             mobile apps and other types of applications. The guide also provides information about
 *             key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply
 *             to using the service.</p>
 *         <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint
 *             for each of these Regions. For a list of all the Regions and endpoints where the API is
 *             currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in
 *             the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS
 *                 Regions</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *         <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
 *             are physically isolated from each other, but are united by private, low-latency,
 *             high-throughput, and highly redundant network connections. These Availability Zones
 *             enable us to provide very high levels of availability and redundancy, while also
 *             minimizing latency. To learn more about the number of Availability Zones that are
 *             available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>
 */
export class PinpointEmail extends PinpointEmailClient implements PinpointEmail {}
createAggregatedClient(commands, PinpointEmail);
