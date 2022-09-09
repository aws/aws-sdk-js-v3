// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcceptReservedNodeExchangeCommand,
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
} from "./commands/AcceptReservedNodeExchangeCommand";
import { AddPartnerCommand, AddPartnerCommandInput, AddPartnerCommandOutput } from "./commands/AddPartnerCommand";
import {
  AssociateDataShareConsumerCommand,
  AssociateDataShareConsumerCommandInput,
  AssociateDataShareConsumerCommandOutput,
} from "./commands/AssociateDataShareConsumerCommand";
import {
  AuthorizeClusterSecurityGroupIngressCommand,
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeClusterSecurityGroupIngressCommand";
import {
  AuthorizeDataShareCommand,
  AuthorizeDataShareCommandInput,
  AuthorizeDataShareCommandOutput,
} from "./commands/AuthorizeDataShareCommand";
import {
  AuthorizeEndpointAccessCommand,
  AuthorizeEndpointAccessCommandInput,
  AuthorizeEndpointAccessCommandOutput,
} from "./commands/AuthorizeEndpointAccessCommand";
import {
  AuthorizeSnapshotAccessCommand,
  AuthorizeSnapshotAccessCommandInput,
  AuthorizeSnapshotAccessCommandOutput,
} from "./commands/AuthorizeSnapshotAccessCommand";
import {
  BatchDeleteClusterSnapshotsCommand,
  BatchDeleteClusterSnapshotsCommandInput,
  BatchDeleteClusterSnapshotsCommandOutput,
} from "./commands/BatchDeleteClusterSnapshotsCommand";
import {
  BatchModifyClusterSnapshotsCommand,
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
} from "./commands/BatchModifyClusterSnapshotsCommand";
import {
  CancelResizeCommand,
  CancelResizeCommandInput,
  CancelResizeCommandOutput,
} from "./commands/CancelResizeCommand";
import {
  CopyClusterSnapshotCommand,
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
} from "./commands/CopyClusterSnapshotCommand";
import {
  CreateAuthenticationProfileCommand,
  CreateAuthenticationProfileCommandInput,
  CreateAuthenticationProfileCommandOutput,
} from "./commands/CreateAuthenticationProfileCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateClusterParameterGroupCommand,
  CreateClusterParameterGroupCommandInput,
  CreateClusterParameterGroupCommandOutput,
} from "./commands/CreateClusterParameterGroupCommand";
import {
  CreateClusterSecurityGroupCommand,
  CreateClusterSecurityGroupCommandInput,
  CreateClusterSecurityGroupCommandOutput,
} from "./commands/CreateClusterSecurityGroupCommand";
import {
  CreateClusterSnapshotCommand,
  CreateClusterSnapshotCommandInput,
  CreateClusterSnapshotCommandOutput,
} from "./commands/CreateClusterSnapshotCommand";
import {
  CreateClusterSubnetGroupCommand,
  CreateClusterSubnetGroupCommandInput,
  CreateClusterSubnetGroupCommandOutput,
} from "./commands/CreateClusterSubnetGroupCommand";
import {
  CreateEndpointAccessCommand,
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import {
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateHsmClientCertificateCommand,
  CreateHsmClientCertificateCommandInput,
  CreateHsmClientCertificateCommandOutput,
} from "./commands/CreateHsmClientCertificateCommand";
import {
  CreateHsmConfigurationCommand,
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
} from "./commands/CreateHsmConfigurationCommand";
import {
  CreateScheduledActionCommand,
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "./commands/CreateScheduledActionCommand";
import {
  CreateSnapshotCopyGrantCommand,
  CreateSnapshotCopyGrantCommandInput,
  CreateSnapshotCopyGrantCommandOutput,
} from "./commands/CreateSnapshotCopyGrantCommand";
import {
  CreateSnapshotScheduleCommand,
  CreateSnapshotScheduleCommandInput,
  CreateSnapshotScheduleCommandOutput,
} from "./commands/CreateSnapshotScheduleCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  CreateUsageLimitCommand,
  CreateUsageLimitCommandInput,
  CreateUsageLimitCommandOutput,
} from "./commands/CreateUsageLimitCommand";
import {
  DeauthorizeDataShareCommand,
  DeauthorizeDataShareCommandInput,
  DeauthorizeDataShareCommandOutput,
} from "./commands/DeauthorizeDataShareCommand";
import {
  DeleteAuthenticationProfileCommand,
  DeleteAuthenticationProfileCommandInput,
  DeleteAuthenticationProfileCommandOutput,
} from "./commands/DeleteAuthenticationProfileCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteClusterParameterGroupCommand,
  DeleteClusterParameterGroupCommandInput,
  DeleteClusterParameterGroupCommandOutput,
} from "./commands/DeleteClusterParameterGroupCommand";
import {
  DeleteClusterSecurityGroupCommand,
  DeleteClusterSecurityGroupCommandInput,
  DeleteClusterSecurityGroupCommandOutput,
} from "./commands/DeleteClusterSecurityGroupCommand";
import {
  DeleteClusterSnapshotCommand,
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
} from "./commands/DeleteClusterSnapshotCommand";
import {
  DeleteClusterSubnetGroupCommand,
  DeleteClusterSubnetGroupCommandInput,
  DeleteClusterSubnetGroupCommandOutput,
} from "./commands/DeleteClusterSubnetGroupCommand";
import {
  DeleteEndpointAccessCommand,
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import {
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteHsmClientCertificateCommand,
  DeleteHsmClientCertificateCommandInput,
  DeleteHsmClientCertificateCommandOutput,
} from "./commands/DeleteHsmClientCertificateCommand";
import {
  DeleteHsmConfigurationCommand,
  DeleteHsmConfigurationCommandInput,
  DeleteHsmConfigurationCommandOutput,
} from "./commands/DeleteHsmConfigurationCommand";
import {
  DeletePartnerCommand,
  DeletePartnerCommandInput,
  DeletePartnerCommandOutput,
} from "./commands/DeletePartnerCommand";
import {
  DeleteScheduledActionCommand,
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import {
  DeleteSnapshotCopyGrantCommand,
  DeleteSnapshotCopyGrantCommandInput,
  DeleteSnapshotCopyGrantCommandOutput,
} from "./commands/DeleteSnapshotCopyGrantCommand";
import {
  DeleteSnapshotScheduleCommand,
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DeleteUsageLimitCommand,
  DeleteUsageLimitCommandInput,
  DeleteUsageLimitCommandOutput,
} from "./commands/DeleteUsageLimitCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeAuthenticationProfilesCommand,
  DescribeAuthenticationProfilesCommandInput,
  DescribeAuthenticationProfilesCommandOutput,
} from "./commands/DescribeAuthenticationProfilesCommand";
import {
  DescribeClusterDbRevisionsCommand,
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
} from "./commands/DescribeClusterDbRevisionsCommand";
import {
  DescribeClusterParameterGroupsCommand,
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
} from "./commands/DescribeClusterParameterGroupsCommand";
import {
  DescribeClusterParametersCommand,
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "./commands/DescribeClusterParametersCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  DescribeClusterSecurityGroupsCommand,
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
} from "./commands/DescribeClusterSecurityGroupsCommand";
import {
  DescribeClusterSnapshotsCommand,
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "./commands/DescribeClusterSnapshotsCommand";
import {
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "./commands/DescribeClusterSubnetGroupsCommand";
import {
  DescribeClusterTracksCommand,
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "./commands/DescribeClusterTracksCommand";
import {
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "./commands/DescribeClusterVersionsCommand";
import {
  DescribeDataSharesCommand,
  DescribeDataSharesCommandInput,
  DescribeDataSharesCommandOutput,
} from "./commands/DescribeDataSharesCommand";
import {
  DescribeDataSharesForConsumerCommand,
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
} from "./commands/DescribeDataSharesForConsumerCommand";
import {
  DescribeDataSharesForProducerCommand,
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
} from "./commands/DescribeDataSharesForProducerCommand";
import {
  DescribeDefaultClusterParametersCommand,
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "./commands/DescribeDefaultClusterParametersCommand";
import {
  DescribeEndpointAccessCommand,
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
} from "./commands/DescribeEndpointAccessCommand";
import {
  DescribeEndpointAuthorizationCommand,
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
} from "./commands/DescribeEndpointAuthorizationCommand";
import {
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeHsmClientCertificatesCommand,
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
} from "./commands/DescribeHsmClientCertificatesCommand";
import {
  DescribeHsmConfigurationsCommand,
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
} from "./commands/DescribeHsmConfigurationsCommand";
import {
  DescribeLoggingStatusCommand,
  DescribeLoggingStatusCommandInput,
  DescribeLoggingStatusCommandOutput,
} from "./commands/DescribeLoggingStatusCommand";
import {
  DescribeNodeConfigurationOptionsCommand,
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "./commands/DescribeNodeConfigurationOptionsCommand";
import {
  DescribeOrderableClusterOptionsCommand,
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
} from "./commands/DescribeOrderableClusterOptionsCommand";
import {
  DescribePartnersCommand,
  DescribePartnersCommandInput,
  DescribePartnersCommandOutput,
} from "./commands/DescribePartnersCommand";
import {
  DescribeReservedNodeExchangeStatusCommand,
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
} from "./commands/DescribeReservedNodeExchangeStatusCommand";
import {
  DescribeReservedNodeOfferingsCommand,
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
} from "./commands/DescribeReservedNodeOfferingsCommand";
import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "./commands/DescribeReservedNodesCommand";
import {
  DescribeResizeCommand,
  DescribeResizeCommandInput,
  DescribeResizeCommandOutput,
} from "./commands/DescribeResizeCommand";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import {
  DescribeSnapshotCopyGrantsCommand,
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
} from "./commands/DescribeSnapshotCopyGrantsCommand";
import {
  DescribeSnapshotSchedulesCommand,
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
} from "./commands/DescribeSnapshotSchedulesCommand";
import {
  DescribeStorageCommand,
  DescribeStorageCommandInput,
  DescribeStorageCommandOutput,
} from "./commands/DescribeStorageCommand";
import {
  DescribeTableRestoreStatusCommand,
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "./commands/DescribeTableRestoreStatusCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeUsageLimitsCommand,
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "./commands/DescribeUsageLimitsCommand";
import {
  DisableLoggingCommand,
  DisableLoggingCommandInput,
  DisableLoggingCommandOutput,
} from "./commands/DisableLoggingCommand";
import {
  DisableSnapshotCopyCommand,
  DisableSnapshotCopyCommandInput,
  DisableSnapshotCopyCommandOutput,
} from "./commands/DisableSnapshotCopyCommand";
import {
  DisassociateDataShareConsumerCommand,
  DisassociateDataShareConsumerCommandInput,
  DisassociateDataShareConsumerCommandOutput,
} from "./commands/DisassociateDataShareConsumerCommand";
import {
  EnableLoggingCommand,
  EnableLoggingCommandInput,
  EnableLoggingCommandOutput,
} from "./commands/EnableLoggingCommand";
import {
  EnableSnapshotCopyCommand,
  EnableSnapshotCopyCommandInput,
  EnableSnapshotCopyCommandOutput,
} from "./commands/EnableSnapshotCopyCommand";
import {
  GetClusterCredentialsCommand,
  GetClusterCredentialsCommandInput,
  GetClusterCredentialsCommandOutput,
} from "./commands/GetClusterCredentialsCommand";
import {
  GetClusterCredentialsWithIAMCommand,
  GetClusterCredentialsWithIAMCommandInput,
  GetClusterCredentialsWithIAMCommandOutput,
} from "./commands/GetClusterCredentialsWithIAMCommand";
import {
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
} from "./commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import {
  GetReservedNodeExchangeOfferingsCommand,
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
} from "./commands/GetReservedNodeExchangeOfferingsCommand";
import {
  ModifyAquaConfigurationCommand,
  ModifyAquaConfigurationCommandInput,
  ModifyAquaConfigurationCommandOutput,
} from "./commands/ModifyAquaConfigurationCommand";
import {
  ModifyAuthenticationProfileCommand,
  ModifyAuthenticationProfileCommandInput,
  ModifyAuthenticationProfileCommandOutput,
} from "./commands/ModifyAuthenticationProfileCommand";
import {
  ModifyClusterCommand,
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
} from "./commands/ModifyClusterCommand";
import {
  ModifyClusterDbRevisionCommand,
  ModifyClusterDbRevisionCommandInput,
  ModifyClusterDbRevisionCommandOutput,
} from "./commands/ModifyClusterDbRevisionCommand";
import {
  ModifyClusterIamRolesCommand,
  ModifyClusterIamRolesCommandInput,
  ModifyClusterIamRolesCommandOutput,
} from "./commands/ModifyClusterIamRolesCommand";
import {
  ModifyClusterMaintenanceCommand,
  ModifyClusterMaintenanceCommandInput,
  ModifyClusterMaintenanceCommandOutput,
} from "./commands/ModifyClusterMaintenanceCommand";
import {
  ModifyClusterParameterGroupCommand,
  ModifyClusterParameterGroupCommandInput,
  ModifyClusterParameterGroupCommandOutput,
} from "./commands/ModifyClusterParameterGroupCommand";
import {
  ModifyClusterSnapshotCommand,
  ModifyClusterSnapshotCommandInput,
  ModifyClusterSnapshotCommandOutput,
} from "./commands/ModifyClusterSnapshotCommand";
import {
  ModifyClusterSnapshotScheduleCommand,
  ModifyClusterSnapshotScheduleCommandInput,
  ModifyClusterSnapshotScheduleCommandOutput,
} from "./commands/ModifyClusterSnapshotScheduleCommand";
import {
  ModifyClusterSubnetGroupCommand,
  ModifyClusterSubnetGroupCommandInput,
  ModifyClusterSubnetGroupCommandOutput,
} from "./commands/ModifyClusterSubnetGroupCommand";
import {
  ModifyEndpointAccessCommand,
  ModifyEndpointAccessCommandInput,
  ModifyEndpointAccessCommandOutput,
} from "./commands/ModifyEndpointAccessCommand";
import {
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyScheduledActionCommand,
  ModifyScheduledActionCommandInput,
  ModifyScheduledActionCommandOutput,
} from "./commands/ModifyScheduledActionCommand";
import {
  ModifySnapshotCopyRetentionPeriodCommand,
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
} from "./commands/ModifySnapshotCopyRetentionPeriodCommand";
import {
  ModifySnapshotScheduleCommand,
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
} from "./commands/ModifySnapshotScheduleCommand";
import {
  ModifyUsageLimitCommand,
  ModifyUsageLimitCommandInput,
  ModifyUsageLimitCommandOutput,
} from "./commands/ModifyUsageLimitCommand";
import {
  PauseClusterCommand,
  PauseClusterCommandInput,
  PauseClusterCommandOutput,
} from "./commands/PauseClusterCommand";
import {
  PurchaseReservedNodeOfferingCommand,
  PurchaseReservedNodeOfferingCommandInput,
  PurchaseReservedNodeOfferingCommandOutput,
} from "./commands/PurchaseReservedNodeOfferingCommand";
import {
  RebootClusterCommand,
  RebootClusterCommandInput,
  RebootClusterCommandOutput,
} from "./commands/RebootClusterCommand";
import {
  RejectDataShareCommand,
  RejectDataShareCommandInput,
  RejectDataShareCommandOutput,
} from "./commands/RejectDataShareCommand";
import {
  ResetClusterParameterGroupCommand,
  ResetClusterParameterGroupCommandInput,
  ResetClusterParameterGroupCommandOutput,
} from "./commands/ResetClusterParameterGroupCommand";
import {
  ResizeClusterCommand,
  ResizeClusterCommandInput,
  ResizeClusterCommandOutput,
} from "./commands/ResizeClusterCommand";
import {
  RestoreFromClusterSnapshotCommand,
  RestoreFromClusterSnapshotCommandInput,
  RestoreFromClusterSnapshotCommandOutput,
} from "./commands/RestoreFromClusterSnapshotCommand";
import {
  RestoreTableFromClusterSnapshotCommand,
  RestoreTableFromClusterSnapshotCommandInput,
  RestoreTableFromClusterSnapshotCommandOutput,
} from "./commands/RestoreTableFromClusterSnapshotCommand";
import {
  ResumeClusterCommand,
  ResumeClusterCommandInput,
  ResumeClusterCommandOutput,
} from "./commands/ResumeClusterCommand";
import {
  RevokeClusterSecurityGroupIngressCommand,
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
} from "./commands/RevokeClusterSecurityGroupIngressCommand";
import {
  RevokeEndpointAccessCommand,
  RevokeEndpointAccessCommandInput,
  RevokeEndpointAccessCommandOutput,
} from "./commands/RevokeEndpointAccessCommand";
import {
  RevokeSnapshotAccessCommand,
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
} from "./commands/RevokeSnapshotAccessCommand";
import {
  RotateEncryptionKeyCommand,
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
} from "./commands/RotateEncryptionKeyCommand";
import {
  UpdatePartnerStatusCommand,
  UpdatePartnerStatusCommandInput,
  UpdatePartnerStatusCommandOutput,
} from "./commands/UpdatePartnerStatusCommand";
import { RedshiftClient } from "./RedshiftClient";

/**
 * <fullname>Amazon Redshift</fullname>
 *         <p>
 *             <b>Overview</b>
 *         </p>
 *         <p>This is an interface reference for Amazon Redshift. It contains documentation for one of
 *             the programming or command line interfaces you can use to manage Amazon Redshift clusters.
 *             Note that Amazon Redshift is asynchronous, which means that some interfaces may require
 *             techniques, such as polling or asynchronous callback handlers, to determine when a
 *             command has been applied. In this reference, the parameter descriptions indicate whether
 *             a change is applied immediately, on the next instance reboot, or during the next
 *             maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to
 *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the
 *                 Amazon Redshift Management Interfaces</a>.</p>
 *         <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data
 *             warehouse: provisioning capacity, monitoring and backing up the cluster, and applying
 *             patches and upgrades to the Amazon Redshift engine. You can focus on using your data to
 *             acquire new insights for your business and customers.</p>
 *         <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading
 *             the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p>
 *
 *         <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design,
 *             build, query, and maintain the databases that make up your data warehouse. </p>
 */
export class Redshift extends RedshiftClient {
  /**
   * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
   *             configuration (term, payment type, or number of nodes) and no additional costs.
   *         </p>
   */
  public acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptReservedNodeExchangeCommandOutput>;
  public acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void
  ): void;
  public acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void
  ): void;
  public acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void),
    cb?: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void
  ): Promise<AcceptReservedNodeExchangeCommandOutput> | void {
    const command = new AcceptReservedNodeExchangeCommand(args);
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
   * <p>Adds a partner integration to a cluster.
   *             This operation authorizes a partner to push status updates for the specified database.
   *             To complete the integration, you also set up the integration on the partner website.</p>
   */
  public addPartner(args: AddPartnerCommandInput, options?: __HttpHandlerOptions): Promise<AddPartnerCommandOutput>;
  public addPartner(args: AddPartnerCommandInput, cb: (err: any, data?: AddPartnerCommandOutput) => void): void;
  public addPartner(
    args: AddPartnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPartnerCommandOutput) => void
  ): void;
  public addPartner(
    args: AddPartnerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddPartnerCommandOutput) => void),
    cb?: (err: any, data?: AddPartnerCommandOutput) => void
  ): Promise<AddPartnerCommandOutput> | void {
    const command = new AddPartnerCommand(args);
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
   * <p>From a datashare consumer account, associates a datashare with the
   *             account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer
   *             can consume the datashare.</p>
   */
  public associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDataShareConsumerCommandOutput>;
  public associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    cb: (err: any, data?: AssociateDataShareConsumerCommandOutput) => void
  ): void;
  public associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDataShareConsumerCommandOutput) => void
  ): void;
  public associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDataShareConsumerCommandOutput) => void),
    cb?: (err: any, data?: AssociateDataShareConsumerCommandOutput) => void
  ): Promise<AssociateDataShareConsumerCommandOutput> | void {
    const command = new AssociateDataShareConsumerCommand(args);
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
   * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
   *             the application accessing your cluster is running on the Internet or an Amazon EC2
   *             instance, you can authorize inbound access to either a Classless Interdomain Routing
   *             (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
   *             many as 20 ingress rules to an Amazon Redshift security group.</p>
   *         <p>If you authorize access to an Amazon EC2 security group, specify
   *                 <i>EC2SecurityGroupName</i> and
   *                 <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and
   *             Amazon Redshift cluster must be in the same Amazon Web Services Region. </p>
   *         <p>If you authorize access to a CIDR/IP address range, specify
   *                 <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia
   *             article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
   *         <p>You must also associate the security group with a cluster so that clients running
   *             on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
   *             information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security
   *                 Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput>;
  public authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void
  ): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> | void {
    const command = new AuthorizeClusterSecurityGroupIngressCommand(args);
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
   * <p>From a data producer account, authorizes the sharing of a datashare with one or more
   *             consumer accounts or managing entities. To authorize a datashare for a data consumer,
   *             the producer account must have the correct access permissions.</p>
   */
  public authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeDataShareCommandOutput>;
  public authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    cb: (err: any, data?: AuthorizeDataShareCommandOutput) => void
  ): void;
  public authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeDataShareCommandOutput) => void
  ): void;
  public authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeDataShareCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeDataShareCommandOutput) => void
  ): Promise<AuthorizeDataShareCommandOutput> | void {
    const command = new AuthorizeDataShareCommand(args);
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
   * <p>Grants access to a cluster.</p>
   */
  public authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeEndpointAccessCommandOutput>;
  public authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    cb: (err: any, data?: AuthorizeEndpointAccessCommandOutput) => void
  ): void;
  public authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeEndpointAccessCommandOutput) => void
  ): void;
  public authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeEndpointAccessCommandOutput) => void
  ): Promise<AuthorizeEndpointAccessCommandOutput> | void {
    const command = new AuthorizeEndpointAccessCommand(args);
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
   * <p>Authorizes the specified Amazon Web Services account to restore the specified
   *             snapshot.</p>
   *         <p>
   * For more information about working with snapshots, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeSnapshotAccessCommandOutput>;
  public authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void
  ): void;
  public authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void
  ): void;
  public authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void
  ): Promise<AuthorizeSnapshotAccessCommandOutput> | void {
    const command = new AuthorizeSnapshotAccessCommand(args);
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
   * <p>Deletes a set of cluster snapshots.</p>
   */
  public batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteClusterSnapshotsCommandOutput>;
  public batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void
  ): void;
  public batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void
  ): void;
  public batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void
  ): Promise<BatchDeleteClusterSnapshotsCommandOutput> | void {
    const command = new BatchDeleteClusterSnapshotsCommand(args);
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
   * <p>Modifies the settings for a set of cluster snapshots.</p>
   */
  public batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchModifyClusterSnapshotsCommandOutput>;
  public batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void
  ): void;
  public batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void
  ): void;
  public batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void
  ): Promise<BatchModifyClusterSnapshotsCommandOutput> | void {
    const command = new BatchModifyClusterSnapshotsCommand(args);
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
   * <p>Cancels a resize operation for a cluster.</p>
   */
  public cancelResize(
    args: CancelResizeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelResizeCommandOutput>;
  public cancelResize(args: CancelResizeCommandInput, cb: (err: any, data?: CancelResizeCommandOutput) => void): void;
  public cancelResize(
    args: CancelResizeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelResizeCommandOutput) => void
  ): void;
  public cancelResize(
    args: CancelResizeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelResizeCommandOutput) => void),
    cb?: (err: any, data?: CancelResizeCommandOutput) => void
  ): Promise<CancelResizeCommandOutput> | void {
    const command = new CancelResizeCommand(args);
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
   * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot.
   *             The source must be an automated snapshot and it must be in the available
   *             state.</p>
   *         <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
   *             cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
   *             automatically deletes it. If you want to keep an automated snapshot for a longer period,
   *             you can make a manual copy of the snapshot. Manual snapshots are retained until you
   *             delete them.</p>
   *         <p>
   * For more information about working with snapshots, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyClusterSnapshotCommandOutput>;
  public copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;
  public copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;
  public copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): Promise<CopyClusterSnapshotCommandOutput> | void {
    const command = new CopyClusterSnapshotCommand(args);
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
   * <p>Creates an authentication profile with the specified parameters.</p>
   */
  public createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthenticationProfileCommandOutput>;
  public createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    cb: (err: any, data?: CreateAuthenticationProfileCommandOutput) => void
  ): void;
  public createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthenticationProfileCommandOutput) => void
  ): void;
  public createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAuthenticationProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateAuthenticationProfileCommandOutput) => void
  ): Promise<CreateAuthenticationProfileCommandOutput> | void {
    const command = new CreateAuthenticationProfileCommand(args);
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
   * <p>Creates a new cluster with the specified parameters.</p>
   *         <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster
   *             subnet group name. The cluster subnet group identifies the subnets of your VPC that
   *             Amazon Redshift uses when creating the cluster.
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  public createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterCommandOutput) => void
  ): Promise<CreateClusterCommandOutput> | void {
    const command = new CreateClusterCommand(args);
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
   * <p>Creates an Amazon Redshift parameter group.</p>
   *         <p>Creating parameter groups is independent of creating clusters. You can associate a
   *             cluster with a parameter group when you create the cluster. You can also associate an
   *             existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p>
   *         <p>Parameters in the parameter group define specific behavior that applies to the
   *             databases you create on the cluster.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterParameterGroupCommandOutput>;
  public createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void
  ): void;
  public createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void
  ): void;
  public createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void
  ): Promise<CreateClusterParameterGroupCommandOutput> | void {
    const command = new CreateClusterParameterGroupCommand(args);
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
   * <p>Creates a new Amazon Redshift security group. You use security groups to control access
   *             to non-VPC clusters.</p>
   *         <p>
   * For information about managing security groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
   * <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSecurityGroupCommandOutput>;
  public createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void
  ): void;
  public createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void
  ): void;
  public createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void
  ): Promise<CreateClusterSecurityGroupCommandOutput> | void {
    const command = new CreateClusterSecurityGroupCommand(args);
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
   * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the
   *                 <code>available</code> state. </p>
   *         <p>
   * For more information about working with snapshots, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSnapshotCommandOutput>;
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): Promise<CreateClusterSnapshotCommandOutput> | void {
    const command = new CreateClusterSnapshotCommand(args);
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
   * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more
   *             subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
   *             Amazon Redshift subnet group.</p>
   *         <p>
   * For information about subnet groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the
   * <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSubnetGroupCommandOutput>;
  public createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void
  ): void;
  public createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void
  ): void;
  public createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void
  ): Promise<CreateClusterSubnetGroupCommandOutput> | void {
    const command = new CreateClusterSubnetGroupCommand(args);
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
   * <p>Creates a Redshift-managed VPC endpoint.</p>
   */
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointAccessCommandOutput>;
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): Promise<CreateEndpointAccessCommandOutput> | void {
    const command = new CreateEndpointAccessCommand(args);
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
   * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN
   *             (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
   *             the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
   *             must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
   *             the SNS console.</p>
   *         <p>You can specify the source type, and lists of Amazon Redshift source IDs, event
   *             categories, and event severities. Notifications will be sent for all events you want
   *             that match those criteria. For example, you can specify source type = cluster, source ID
   *             = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
   *             ERROR. The subscription will only send notifications for those ERROR events in the
   *             Availability and Backup categories for the specified clusters.</p>
   *         <p>If you specify both the source type and source IDs, such as source type = cluster
   *             and source identifier = my-cluster-1, notifications will be sent for all the cluster
   *             events for my-cluster-1. If you specify a source type but do not specify a source
   *             identifier, you will receive notice of the events for the objects of that type in your
   *             Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you
   *             will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>
   */
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): Promise<CreateEventSubscriptionCommandOutput> | void {
    const command = new CreateEventSubscriptionCommand(args);
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
   * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
   *             the client's HSM in order to store and retrieve the keys used to encrypt the cluster
   *             databases.</p>
   *         <p>The command returns a public key, which you must store in the HSM. In addition to
   *             creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
   *             provides a cluster the information needed to store and use encryption keys in the HSM.
   *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a>
   *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHsmClientCertificateCommandOutput>;
  public createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void
  ): void;
  public createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void
  ): void;
  public createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHsmClientCertificateCommandOutput) => void),
    cb?: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void
  ): Promise<CreateHsmClientCertificateCommandOutput> | void {
    const command = new CreateHsmClientCertificateCommand(args);
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
   * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift
   *             cluster to store and use database encryption keys in a Hardware Security Module (HSM).
   *             After creating the HSM configuration, you can specify it as a parameter when creating a
   *             cluster. The cluster will then store its encryption keys in the HSM.</p>
   *         <p>In addition to creating an HSM configuration, you must also create an HSM client
   *             certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
   *             in the Amazon Redshift Cluster Management Guide.</p>
   */
  public createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHsmConfigurationCommandOutput>;
  public createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void
  ): void;
  public createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void
  ): void;
  public createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHsmConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateHsmConfigurationCommandOutput) => void
  ): Promise<CreateHsmConfigurationCommandOutput> | void {
    const command = new CreateHsmConfigurationCommand(args);
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
   * <p>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
   *             For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
   *         </p>
   */
  public createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledActionCommandOutput>;
  public createScheduledAction(
    args: CreateScheduledActionCommandInput,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;
  public createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;
  public createScheduledAction(
    args: CreateScheduledActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScheduledActionCommandOutput) => void),
    cb?: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): Promise<CreateScheduledActionCommandOutput> | void {
    const command = new CreateScheduledActionCommand(args);
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
   * <p>Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key
   *             from Key Management Service (KMS) to encrypt copied snapshots in a
   *             destination region.</p>
   *         <p>
   * For more information about managing snapshot copy grants, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   */
  public createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCopyGrantCommandOutput>;
  public createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void
  ): void;
  public createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void
  ): void;
  public createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void
  ): Promise<CreateSnapshotCopyGrantCommandOutput> | void {
    const command = new CreateSnapshotCopyGrantCommand(args);
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
   * <p>Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. </p>
   */
  public createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotScheduleCommandOutput>;
  public createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void
  ): void;
  public createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void
  ): void;
  public createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotScheduleCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void
  ): Promise<CreateSnapshotScheduleCommandOutput> | void {
    const command = new CreateSnapshotScheduleCommand(args);
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
   * <p>Adds tags to a cluster.</p>
   *         <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a
   *             resource, you will receive an error and the attempt will fail.</p>
   *         <p>If you specify a key that already exists for the resource, the value for that key
   *             will be updated with the new value.</p>
   */
  public createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  public createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  public createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateTagsCommandOutput) => void
  ): Promise<CreateTagsCommandOutput> | void {
    const command = new CreateTagsCommand(args);
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
   * <p>Creates a usage limit for a specified Amazon Redshift feature on a cluster.
   *             The usage limit is identified by the returned usage limit identifier.</p>
   */
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsageLimitCommandOutput>;
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUsageLimitCommandOutput) => void),
    cb?: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): Promise<CreateUsageLimitCommandOutput> | void {
    const command = new CreateUsageLimitCommand(args);
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
   * <p>From a datashare producer account, removes authorization from the specified datashare. </p>
   */
  public deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeauthorizeDataShareCommandOutput>;
  public deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    cb: (err: any, data?: DeauthorizeDataShareCommandOutput) => void
  ): void;
  public deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeauthorizeDataShareCommandOutput) => void
  ): void;
  public deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeauthorizeDataShareCommandOutput) => void),
    cb?: (err: any, data?: DeauthorizeDataShareCommandOutput) => void
  ): Promise<DeauthorizeDataShareCommandOutput> | void {
    const command = new DeauthorizeDataShareCommand(args);
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
   * <p>Deletes an authentication profile.</p>
   */
  public deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthenticationProfileCommandOutput>;
  public deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    cb: (err: any, data?: DeleteAuthenticationProfileCommandOutput) => void
  ): void;
  public deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthenticationProfileCommandOutput) => void
  ): void;
  public deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAuthenticationProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteAuthenticationProfileCommandOutput) => void
  ): Promise<DeleteAuthenticationProfileCommandOutput> | void {
    const command = new DeleteAuthenticationProfileCommand(args);
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
   * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web
   *             service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete
   *             operation cannot be canceled or reverted once submitted.
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *         <p>If you want to shut down the cluster and retain it for future use, set
   *                 <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a
   *             name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this
   *             snapshot to resume using the cluster. If a final cluster snapshot is requested, the
   *             status of the cluster will be "final-snapshot" while the snapshot is being taken, then
   *             it's "deleting" once Amazon Redshift begins deleting the cluster. </p>
   *         <p>
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterCommandOutput) => void
  ): Promise<DeleteClusterCommandOutput> | void {
    const command = new DeleteClusterCommand(args);
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
   * <p>Deletes a specified Amazon Redshift parameter group.</p>
   *         <note>
   *             <p>You cannot delete a parameter group if it is associated with a
   *                 cluster.</p>
   *         </note>
   */
  public deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterParameterGroupCommandOutput>;
  public deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void
  ): void;
  public deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void
  ): void;
  public deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void
  ): Promise<DeleteClusterParameterGroupCommandOutput> | void {
    const command = new DeleteClusterParameterGroupCommand(args);
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
   * <p>Deletes an Amazon Redshift security group.</p>
   *         <note>
   *             <p>You cannot delete a security group that is associated with any clusters. You
   *                 cannot delete the default security group.</p>
   *         </note>
   *         <p>
   * For information about managing security groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
   * <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSecurityGroupCommandOutput>;
  public deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void
  ): void;
  public deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void
  ): void;
  public deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void
  ): Promise<DeleteClusterSecurityGroupCommandOutput> | void {
    const command = new DeleteClusterSecurityGroupCommand(args);
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
   * <p>Deletes the specified manual snapshot. The snapshot must be in the
   *                 <code>available</code> state, with no other users authorized to access the snapshot. </p>
   *         <p>Unlike automated snapshots, manual snapshots are retained even after you delete
   *             your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual
   *             snapshot explicitly to avoid getting charged. If other accounts are authorized to access
   *             the snapshot, you must revoke all of the authorizations before you can delete the
   *             snapshot.</p>
   */
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSnapshotCommandOutput>;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): Promise<DeleteClusterSnapshotCommandOutput> | void {
    const command = new DeleteClusterSnapshotCommand(args);
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
   * <p>Deletes the specified cluster subnet group.</p>
   */
  public deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSubnetGroupCommandOutput>;
  public deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void
  ): void;
  public deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void
  ): void;
  public deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void
  ): Promise<DeleteClusterSubnetGroupCommandOutput> | void {
    const command = new DeleteClusterSubnetGroupCommand(args);
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
   * <p>Deletes a Redshift-managed VPC endpoint.</p>
   */
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointAccessCommandOutput>;
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): Promise<DeleteEndpointAccessCommandOutput> | void {
    const command = new DeleteEndpointAccessCommand(args);
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
   * <p>Deletes an Amazon Redshift event notification subscription.</p>
   */
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): Promise<DeleteEventSubscriptionCommandOutput> | void {
    const command = new DeleteEventSubscriptionCommand(args);
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
   * <p>Deletes the specified HSM client certificate.</p>
   */
  public deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHsmClientCertificateCommandOutput>;
  public deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void
  ): void;
  public deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void
  ): void;
  public deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHsmClientCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void
  ): Promise<DeleteHsmClientCertificateCommandOutput> | void {
    const command = new DeleteHsmClientCertificateCommand(args);
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
   * <p>Deletes the specified Amazon Redshift HSM configuration.</p>
   */
  public deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHsmConfigurationCommandOutput>;
  public deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void
  ): void;
  public deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void
  ): void;
  public deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHsmConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void
  ): Promise<DeleteHsmConfigurationCommandOutput> | void {
    const command = new DeleteHsmConfigurationCommand(args);
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
   * <p>Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.</p>
   */
  public deletePartner(
    args: DeletePartnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartnerCommandOutput>;
  public deletePartner(
    args: DeletePartnerCommandInput,
    cb: (err: any, data?: DeletePartnerCommandOutput) => void
  ): void;
  public deletePartner(
    args: DeletePartnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartnerCommandOutput) => void
  ): void;
  public deletePartner(
    args: DeletePartnerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePartnerCommandOutput) => void),
    cb?: (err: any, data?: DeletePartnerCommandOutput) => void
  ): Promise<DeletePartnerCommandOutput> | void {
    const command = new DeletePartnerCommand(args);
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
   * <p>Deletes a scheduled action.
   *              </p>
   */
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  public deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScheduledActionCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): Promise<DeleteScheduledActionCommandOutput> | void {
    const command = new DeleteScheduledActionCommand(args);
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
   * <p>Deletes the specified snapshot copy grant.</p>
   */
  public deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCopyGrantCommandOutput>;
  public deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void
  ): void;
  public deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void
  ): void;
  public deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void),
    cb?: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void
  ): Promise<DeleteSnapshotCopyGrantCommandOutput> | void {
    const command = new DeleteSnapshotCopyGrantCommand(args);
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
   * <p>Deletes a snapshot schedule.</p>
   */
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotScheduleCommandOutput>;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;
  public deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSnapshotScheduleCommandOutput) => void),
    cb?: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): Promise<DeleteSnapshotScheduleCommandOutput> | void {
    const command = new DeleteSnapshotScheduleCommand(args);
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
   * <p>Deletes tags from a resource. You must provide the ARN of the resource
   *             from which you want to delete the tag or tags.</p>
   */
  public deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  public deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
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
   * <p>Deletes a usage limit from a cluster.</p>
   */
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsageLimitCommandOutput>;
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUsageLimitCommandOutput) => void),
    cb?: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): Promise<DeleteUsageLimitCommandOutput> | void {
    const command = new DeleteUsageLimitCommand(args);
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
   * <p>Returns a list of attributes attached to an account</p>
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
   * <p>Describes an authentication profile.</p>
   */
  public describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuthenticationProfilesCommandOutput>;
  public describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    cb: (err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void
  ): void;
  public describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void
  ): void;
  public describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void
  ): Promise<DescribeAuthenticationProfilesCommandOutput> | void {
    const command = new DescribeAuthenticationProfilesCommand(args);
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
   * <p>Returns an array of <code>ClusterDbRevision</code> objects.</p>
   */
  public describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterDbRevisionsCommandOutput>;
  public describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void
  ): void;
  public describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void
  ): void;
  public describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void
  ): Promise<DescribeClusterDbRevisionsCommandOutput> | void {
    const command = new DescribeClusterDbRevisionsCommand(args);
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
   * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you
   *             created and the default parameter group. For each parameter group, the response includes
   *             the parameter group name, description, and parameter group family name. You can
   *             optionally specify a name to retrieve the description of a specific parameter
   *             group.</p>
   *         <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all parameter groups that match any combination of the specified keys and values. For
   *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
   *                 <code>admin</code> and <code>test</code> for tag values, all parameter groups that
   *             have any combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, parameter groups are
   *             returned regardless of whether they have tag keys or values associated with
   *             them.</p>
   */
  public describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterParameterGroupsCommandOutput>;
  public describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void
  ): void;
  public describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void
  ): void;
  public describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void
  ): Promise<DescribeClusterParameterGroupsCommandOutput> | void {
    const command = new DescribeClusterParameterGroupsCommand(args);
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
   * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift
   *             parameter group. For each parameter the response includes information such as parameter
   *             name, description, data type, value, whether the parameter value is modifiable, and so
   *             on.</p>
   *         <p>You can specify <i>source</i> filter to retrieve parameters of only
   *             specific type. For example, to retrieve parameters that were modified by a user action
   *             such as from <a>ModifyClusterParameterGroup</a>, you can specify
   *                 <i>source</i> equal to <i>user</i>.</p>
   *         <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterParametersCommandOutput>;
  public describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void
  ): void;
  public describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void
  ): void;
  public describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterParametersCommandOutput) => void
  ): Promise<DescribeClusterParametersCommandOutput> | void {
    const command = new DescribeClusterParametersCommand(args);
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
   * <p>Returns properties of provisioned clusters including general cluster properties,
   *             cluster database properties, maintenance and backup properties, and security and access
   *             properties. This operation supports pagination.
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all clusters that match any combination of the specified keys and values. For example,
   *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
   *                 <code>admin</code> and <code>test</code> for tag values, all clusters that have any
   *             combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, clusters are returned
   *             regardless of whether they have tag keys or values associated with them.</p>
   */
  public describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  public describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeClustersCommandOutput) => void
  ): Promise<DescribeClustersCommandOutput> | void {
    const command = new DescribeClustersCommand(args);
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
   * <p>Returns information about Amazon Redshift security groups. If the name of a security
   *             group is specified, the response will contain only information about only that security
   *             group.</p>
   *         <p>
   * For information about managing security groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
   * <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all security groups that match any combination of the specified keys and values. For
   *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
   *                 <code>admin</code> and <code>test</code> for tag values, all security groups that
   *             have any combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, security groups are
   *             returned regardless of whether they have tag keys or values associated with
   *             them.</p>
   */
  public describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterSecurityGroupsCommandOutput>;
  public describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void
  ): void;
  public describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void
  ): void;
  public describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void
  ): Promise<DescribeClusterSecurityGroupsCommandOutput> | void {
    const command = new DescribeClusterSecurityGroupsCommand(args);
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
   * <p>Returns one or more snapshot objects, which contain metadata about your cluster
   *             snapshots. By default, this operation returns information about all snapshots of all
   *             clusters that are owned by your Amazon Web Services account. No information is returned for
   *             snapshots owned by inactive Amazon Web Services accounts.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all snapshots that match any combination of the specified keys and values. For example,
   *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
   *                 <code>admin</code> and <code>test</code> for tag values, all snapshots that have any
   *             combination of those values are returned. Only snapshots that you own are returned in
   *             the response; shared snapshots are not returned with the tag key and tag value request
   *             parameters.</p>
   *         <p>If both tag keys and values are omitted from the request, snapshots are returned
   *             regardless of whether they have tag keys or values associated with them.</p>
   */
  public describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterSnapshotsCommandOutput>;
  public describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void
  ): void;
  public describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void
  ): void;
  public describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void
  ): Promise<DescribeClusterSnapshotsCommandOutput> | void {
    const command = new DescribeClusterSnapshotsCommand(args);
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
   * <p>Returns one or more cluster subnet group objects, which contain metadata about your
   *             cluster subnet groups. By default, this operation returns information about all cluster
   *             subnet groups that are defined in your Amazon Web Services account.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all subnet groups that match any combination of the specified keys and values. For
   *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
   *                 <code>admin</code> and <code>test</code> for tag values, all subnet groups that have
   *             any combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, subnet groups are
   *             returned regardless of whether they have tag keys or values associated with
   *             them.</p>
   */
  public describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterSubnetGroupsCommandOutput>;
  public describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void
  ): void;
  public describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void
  ): void;
  public describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void
  ): Promise<DescribeClusterSubnetGroupsCommandOutput> | void {
    const command = new DescribeClusterSubnetGroupsCommand(args);
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
   * <p>Returns a list of all the available maintenance tracks.</p>
   */
  public describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterTracksCommandOutput>;
  public describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void
  ): void;
  public describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void
  ): void;
  public describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterTracksCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterTracksCommandOutput) => void
  ): Promise<DescribeClusterTracksCommandOutput> | void {
    const command = new DescribeClusterTracksCommand(args);
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
   * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this
   *             operation even before creating any clusters to learn more about the Amazon Redshift versions.
   *
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterVersionsCommandOutput>;
  public describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;
  public describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;
  public describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): Promise<DescribeClusterVersionsCommandOutput> | void {
    const command = new DescribeClusterVersionsCommand(args);
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
   * <p>Shows the status of any inbound or outbound datashares available in the specified
   *             account.</p>
   */
  public describeDataShares(
    args: DescribeDataSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSharesCommandOutput>;
  public describeDataShares(
    args: DescribeDataSharesCommandInput,
    cb: (err: any, data?: DescribeDataSharesCommandOutput) => void
  ): void;
  public describeDataShares(
    args: DescribeDataSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSharesCommandOutput) => void
  ): void;
  public describeDataShares(
    args: DescribeDataSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSharesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSharesCommandOutput) => void
  ): Promise<DescribeDataSharesCommandOutput> | void {
    const command = new DescribeDataSharesCommand(args);
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
   * <p>Returns a list of datashares where the account identifier being called is a consumer account identifier.</p>
   */
  public describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSharesForConsumerCommandOutput>;
  public describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    cb: (err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void
  ): void;
  public describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void
  ): void;
  public describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void
  ): Promise<DescribeDataSharesForConsumerCommandOutput> | void {
    const command = new DescribeDataSharesForConsumerCommand(args);
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
   * <p>Returns a list of datashares when the account identifier being called is a producer account identifier.</p>
   */
  public describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSharesForProducerCommandOutput>;
  public describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    cb: (err: any, data?: DescribeDataSharesForProducerCommandOutput) => void
  ): void;
  public describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSharesForProducerCommandOutput) => void
  ): void;
  public describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSharesForProducerCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSharesForProducerCommandOutput) => void
  ): Promise<DescribeDataSharesForProducerCommandOutput> | void {
    const command = new DescribeDataSharesForProducerCommand(args);
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
   * <p>Returns a list of parameter settings for the specified parameter group
   *             family.</p>
   *         <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultClusterParametersCommandOutput>;
  public describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void
  ): void;
  public describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void
  ): void;
  public describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void
  ): Promise<DescribeDefaultClusterParametersCommandOutput> | void {
    const command = new DescribeDefaultClusterParametersCommand(args);
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
   * <p>Describes a Redshift-managed VPC endpoint.</p>
   */
  public describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointAccessCommandOutput>;
  public describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    cb: (err: any, data?: DescribeEndpointAccessCommandOutput) => void
  ): void;
  public describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointAccessCommandOutput) => void
  ): void;
  public describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointAccessCommandOutput) => void
  ): Promise<DescribeEndpointAccessCommandOutput> | void {
    const command = new DescribeEndpointAccessCommand(args);
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
   * <p>Describes an endpoint authorization.</p>
   */
  public describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointAuthorizationCommandOutput>;
  public describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    cb: (err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void
  ): void;
  public describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void
  ): void;
  public describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void
  ): Promise<DescribeEndpointAuthorizationCommandOutput> | void {
    const command = new DescribeEndpointAuthorizationCommand(args);
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
   * <p>Displays a list of event categories for all event source types, or for a specified
   *             source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event
   *                 Notifications</a>.</p>
   */
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventCategoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): Promise<DescribeEventCategoriesCommandOutput> | void {
    const command = new DescribeEventCategoriesCommand(args);
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
   * <p>Returns events related to clusters, security groups, snapshots, and parameter
   *             groups for the past 14 days. Events specific to a particular cluster, security group,
   *             snapshot or parameter group can be obtained by providing the name as a parameter. By
   *             default, the past hour of events are returned.</p>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
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
   * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a
   *             customer account. If you specify a subscription name, lists the description for that
   *             subscription.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all event notification subscriptions that match any combination of the specified keys
   *             and values. For example, if you have <code>owner</code> and <code>environment</code> for
   *             tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions
   *             that have any combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, subscriptions are
   *             returned regardless of whether they have tag keys or values associated with
   *             them.</p>
   */
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): Promise<DescribeEventSubscriptionsCommandOutput> | void {
    const command = new DescribeEventSubscriptionsCommand(args);
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
   * <p>Returns information about the specified HSM client certificate. If no certificate
   *             ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all HSM client certificates that match any combination of the specified keys and values.
   *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
   *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
   *             that have any combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, HSM client certificates
   *             are returned regardless of whether they have tag keys or values associated with
   *             them.</p>
   */
  public describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHsmClientCertificatesCommandOutput>;
  public describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void
  ): void;
  public describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void
  ): void;
  public describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void
  ): Promise<DescribeHsmClientCertificatesCommandOutput> | void {
    const command = new DescribeHsmClientCertificatesCommand(args);
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
   * <p>Returns information about the specified Amazon Redshift HSM configuration. If no
   *             configuration ID is specified, returns information about all the HSM configurations
   *             owned by your Amazon Web Services account.</p>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all HSM connections that match any combination of the specified keys and values. For
   *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
   *                 <code>admin</code> and <code>test</code> for tag values, all HSM connections that
   *             have any combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, HSM connections are
   *             returned regardless of whether they have tag keys or values associated with
   *             them.</p>
   */
  public describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHsmConfigurationsCommandOutput>;
  public describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void
  ): void;
  public describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void
  ): void;
  public describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHsmConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void
  ): Promise<DescribeHsmConfigurationsCommandOutput> | void {
    const command = new DescribeHsmConfigurationsCommand(args);
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
   * <p>Describes whether information, such as queries and connection attempts, is being
   *             logged for the specified Amazon Redshift cluster.</p>
   */
  public describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingStatusCommandOutput>;
  public describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void
  ): void;
  public describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void
  ): void;
  public describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoggingStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoggingStatusCommandOutput) => void
  ): Promise<DescribeLoggingStatusCommandOutput> | void {
    const command = new DescribeLoggingStatusCommand(args);
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
   * <p>Returns properties of possible node configurations such as node type, number of nodes, and
   *             disk usage for the specified action type.</p>
   */
  public describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodeConfigurationOptionsCommandOutput>;
  public describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void
  ): void;
  public describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void
  ): void;
  public describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void
  ): Promise<DescribeNodeConfigurationOptionsCommandOutput> | void {
    const command = new DescribeNodeConfigurationOptionsCommand(args);
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
   * <p>Returns a list of orderable cluster options. Before you create a new cluster you
   *             can use this operation to find what options are available, such as the EC2 Availability
   *             Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can
   *             request. The node types differ by available storage, memory, CPU and price. With the
   *             cost involved you might want to obtain a list of cluster options in the specific region
   *             and specify values when creating a cluster.
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableClusterOptionsCommandOutput>;
  public describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void
  ): void;
  public describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void
  ): void;
  public describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void
  ): Promise<DescribeOrderableClusterOptionsCommandOutput> | void {
    const command = new DescribeOrderableClusterOptionsCommand(args);
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
   * <p>Returns information about the partner integrations defined for a cluster.</p>
   */
  public describePartners(
    args: DescribePartnersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePartnersCommandOutput>;
  public describePartners(
    args: DescribePartnersCommandInput,
    cb: (err: any, data?: DescribePartnersCommandOutput) => void
  ): void;
  public describePartners(
    args: DescribePartnersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePartnersCommandOutput) => void
  ): void;
  public describePartners(
    args: DescribePartnersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePartnersCommandOutput) => void),
    cb?: (err: any, data?: DescribePartnersCommandOutput) => void
  ): Promise<DescribePartnersCommandOutput> | void {
    const command = new DescribePartnersCommand(args);
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
   * <p>Returns exchange status details and associated metadata for a reserved-node
   *             exchange. Statuses include such values as in progress and requested.</p>
   */
  public describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodeExchangeStatusCommandOutput>;
  public describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    cb: (err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void
  ): void;
  public describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void
  ): void;
  public describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void
  ): Promise<DescribeReservedNodeExchangeStatusCommandOutput> | void {
    const command = new DescribeReservedNodeExchangeStatusCommand(args);
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
   * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their
   *             descriptions including the node type, the fixed and recurring costs of reserving the
   *             node and duration the node will be reserved for you. These descriptions help you
   *             determine which reserve node offering you want to purchase. You then use the unique
   *             offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one
   *             or more nodes for your Amazon Redshift cluster. </p>
   *         <p>
   * For more information about reserved node offerings, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodeOfferingsCommandOutput>;
  public describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void
  ): void;
  public describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void
  ): void;
  public describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void
  ): Promise<DescribeReservedNodeOfferingsCommandOutput> | void {
    const command = new DescribeReservedNodeOfferingsCommand(args);
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
   * <p>Returns the descriptions of the reserved nodes.</p>
   */
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodesCommandOutput>;
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedNodesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): Promise<DescribeReservedNodesCommandOutput> | void {
    const command = new DescribeReservedNodesCommand(args);
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
   * <p>Returns information about the last resize operation for the specified cluster. If
   *             no resize operation has ever been initiated for the specified cluster, a <code>HTTP
   *                 404</code> error is returned. If a resize operation was initiated and completed, the
   *             status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p>
   *         <p>A resize operation can be requested using <a>ModifyCluster</a> and
   *             specifying a different number or type of nodes for the cluster. </p>
   */
  public describeResize(
    args: DescribeResizeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResizeCommandOutput>;
  public describeResize(
    args: DescribeResizeCommandInput,
    cb: (err: any, data?: DescribeResizeCommandOutput) => void
  ): void;
  public describeResize(
    args: DescribeResizeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResizeCommandOutput) => void
  ): void;
  public describeResize(
    args: DescribeResizeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResizeCommandOutput) => void),
    cb?: (err: any, data?: DescribeResizeCommandOutput) => void
  ): Promise<DescribeResizeCommandOutput> | void {
    const command = new DescribeResizeCommand(args);
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
   * <p>Describes properties of scheduled actions.
   *              </p>
   */
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledActionsCommandOutput>;
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  public describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScheduledActionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): Promise<DescribeScheduledActionsCommandOutput> | void {
    const command = new DescribeScheduledActionsCommand(args);
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
   * <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination
   *             region.</p>
   *         <p>
   * For more information about managing snapshot copy grants, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   */
  public describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput>;
  public describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void
  ): void;
  public describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void
  ): void;
  public describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput> | void {
    const command = new DescribeSnapshotCopyGrantsCommand(args);
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
   * <p>Returns a list of snapshot schedules. </p>
   */
  public describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotSchedulesCommandOutput>;
  public describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void
  ): void;
  public describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void
  ): void;
  public describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void
  ): Promise<DescribeSnapshotSchedulesCommandOutput> | void {
    const command = new DescribeSnapshotSchedulesCommand(args);
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
   * <p>Returns account level backups storage size and provisional storage.</p>
   */
  public describeStorage(
    args: DescribeStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageCommandOutput>;
  public describeStorage(
    args: DescribeStorageCommandInput,
    cb: (err: any, data?: DescribeStorageCommandOutput) => void
  ): void;
  public describeStorage(
    args: DescribeStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageCommandOutput) => void
  ): void;
  public describeStorage(
    args: DescribeStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStorageCommandOutput) => void),
    cb?: (err: any, data?: DescribeStorageCommandOutput) => void
  ): Promise<DescribeStorageCommandOutput> | void {
    const command = new DescribeStorageCommand(args);
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
   * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
   *             for the <code>TableRestoreRequestId</code> parameter, then
   *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
   *             requests ordered by the date and time of the request in ascending order. Otherwise
   *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
   *                 <code>TableRestoreRequestId</code>.</p>
   */
  public describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableRestoreStatusCommandOutput>;
  public describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void
  ): void;
  public describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void
  ): void;
  public describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTableRestoreStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void
  ): Promise<DescribeTableRestoreStatusCommandOutput> | void {
    const command = new DescribeTableRestoreStatusCommand(args);
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
   * <p>Returns a list of tags. You can return tags from a specific resource by specifying
   *             an ARN, or you can return all tags for a given type of resource, such as clusters,
   *             snapshots, and so on.</p>
   *         <p>The following are limitations for <code>DescribeTags</code>: </p>
   *         <ul>
   *             <li>
   *                 <p>You cannot specify an ARN and a resource-type value together in the same
   *                     request.</p>
   *             </li>
   *             <li>
   *                 <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code>
   *                     parameters together with the ARN parameter.</p>
   *             </li>
   *             <li>
   *                 <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results
   *                     to return in a request.</p>
   *             </li>
   *          </ul>
   *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
   *             all resources that match any combination of the specified keys and values. For example,
   *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
   *                 <code>admin</code> and <code>test</code> for tag values, all resources that have any
   *             combination of those values are returned.</p>
   *         <p>If both tag keys and values are omitted from the request, resources are returned
   *             regardless of whether they have tag keys or values associated with them.</p>
   */
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
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
   * <p>Shows usage limits on a cluster.
   *             Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p>
   *         <ul>
   *             <li>
   *                <p>If usage limit identifier, cluster identifier, and feature type are not provided,
   *                 then all usage limit objects for the current account in the current region are returned.</p>
   *             </li>
   *             <li>
   *                <p>If usage limit identifier is provided,
   *                 then the corresponding usage limit object is returned.</p>
   *             </li>
   *             <li>
   *                <p>If cluster identifier is provided,
   *                 then all usage limit objects for the specified cluster are returned.</p>
   *             </li>
   *             <li>
   *                <p>If cluster identifier and feature type are provided,
   *                 then all usage limit objects for the combination of cluster and feature are returned.</p>
   *             </li>
   *          </ul>
   */
  public describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsageLimitsCommandOutput>;
  public describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    cb: (err: any, data?: DescribeUsageLimitsCommandOutput) => void
  ): void;
  public describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsageLimitsCommandOutput) => void
  ): void;
  public describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUsageLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeUsageLimitsCommandOutput) => void
  ): Promise<DescribeUsageLimitsCommandOutput> | void {
    const command = new DescribeUsageLimitsCommand(args);
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
   * <p>Stops logging information, such as queries and connection attempts, for the
   *             specified Amazon Redshift cluster.</p>
   */
  public disableLogging(
    args: DisableLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableLoggingCommandOutput>;
  public disableLogging(
    args: DisableLoggingCommandInput,
    cb: (err: any, data?: DisableLoggingCommandOutput) => void
  ): void;
  public disableLogging(
    args: DisableLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableLoggingCommandOutput) => void
  ): void;
  public disableLogging(
    args: DisableLoggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableLoggingCommandOutput) => void),
    cb?: (err: any, data?: DisableLoggingCommandOutput) => void
  ): Promise<DisableLoggingCommandOutput> | void {
    const command = new DisableLoggingCommand(args);
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
   * <p>Disables the automatic copying of snapshots from one region to another region for a
   *             specified cluster.</p>
   *         <p>If your cluster and its snapshots are encrypted using an encrypted symmetric key
   *             from Key Management Service, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that
   *             grants Amazon Redshift permission to the key in the destination region. </p>
   */
  public disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableSnapshotCopyCommandOutput>;
  public disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void
  ): void;
  public disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void
  ): void;
  public disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableSnapshotCopyCommandOutput) => void),
    cb?: (err: any, data?: DisableSnapshotCopyCommandOutput) => void
  ): Promise<DisableSnapshotCopyCommandOutput> | void {
    const command = new DisableSnapshotCopyCommand(args);
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
   * <p>From a datashare consumer account, remove association for the specified datashare.
   *             </p>
   */
  public disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDataShareConsumerCommandOutput>;
  public disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    cb: (err: any, data?: DisassociateDataShareConsumerCommandOutput) => void
  ): void;
  public disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDataShareConsumerCommandOutput) => void
  ): void;
  public disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDataShareConsumerCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDataShareConsumerCommandOutput) => void
  ): Promise<DisassociateDataShareConsumerCommandOutput> | void {
    const command = new DisassociateDataShareConsumerCommand(args);
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
   * <p>Starts logging information, such as queries and connection attempts, for the
   *             specified Amazon Redshift cluster.</p>
   */
  public enableLogging(
    args: EnableLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableLoggingCommandOutput>;
  public enableLogging(
    args: EnableLoggingCommandInput,
    cb: (err: any, data?: EnableLoggingCommandOutput) => void
  ): void;
  public enableLogging(
    args: EnableLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableLoggingCommandOutput) => void
  ): void;
  public enableLogging(
    args: EnableLoggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableLoggingCommandOutput) => void),
    cb?: (err: any, data?: EnableLoggingCommandOutput) => void
  ): Promise<EnableLoggingCommandOutput> | void {
    const command = new EnableLoggingCommand(args);
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
   * <p>Enables the automatic copy of snapshots from one region to another region for a
   *             specified cluster.</p>
   */
  public enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSnapshotCopyCommandOutput>;
  public enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void
  ): void;
  public enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void
  ): void;
  public enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableSnapshotCopyCommandOutput) => void),
    cb?: (err: any, data?: EnableSnapshotCopyCommandOutput) => void
  ): Promise<EnableSnapshotCopyCommandOutput> | void {
    const command = new EnableSnapshotCopyCommand(args);
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
   * <p>Returns a database user name and temporary password with temporary authorization to
   *             log on to an Amazon Redshift database. The action returns the database user name
   *             prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or
   *                 <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can
   *             optionally specify one or more database user groups that the user will join at log on.
   *             By default, the temporary credentials expire in 900 seconds. You can optionally specify
   *             a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
   *             information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication
   *                 to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p>
   *         <p>The Identity and Access Management (IAM) user or role that runs
   *             GetClusterCredentials must have an IAM policy attached that allows access to all
   *             necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the
   *             Amazon Redshift Cluster Management Guide.</p>
   *         <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the
   *                 <code>redshift:JoinGroup</code> action with access to the listed
   *                 <code>dbgroups</code>. </p>
   *         <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>,
   *             then the policy must include the <code>redshift:CreateClusterUser</code>
   *             permission.</p>
   *         <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access
   *             to the resource <code>dbname</code> for the specified database name. </p>
   */
  public getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterCredentialsCommandOutput>;
  public getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void
  ): void;
  public getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void
  ): void;
  public getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClusterCredentialsCommandOutput) => void),
    cb?: (err: any, data?: GetClusterCredentialsCommandOutput) => void
  ): Promise<GetClusterCredentialsCommandOutput> | void {
    const command = new GetClusterCredentialsCommand(args);
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
   * <p>Returns a database user name and temporary password with temporary authorization to
   *             log in to an Amazon Redshift database.
   *             The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity.
   *             For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the
   *             Amazon Web Services Identity and Access Management User Guide.</p>
   *         <p>The Identity and Access Management (IAM) identity that runs
   *             this operation must have an IAM policy attached that allows access to all
   *             necessary actions and resources.
   *                 For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the
   *             Amazon Redshift Cluster Management Guide. </p>
   */
  public getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterCredentialsWithIAMCommandOutput>;
  public getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    cb: (err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void
  ): void;
  public getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void
  ): void;
  public getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void),
    cb?: (err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void
  ): Promise<GetClusterCredentialsWithIAMCommandOutput> | void {
    const command = new GetClusterCredentialsWithIAMCommand(args);
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
   * <p>Gets the configuration options for the reserved-node exchange. These options
   *             include information about the source reserved node and target reserved node offering.
   *             Details include the node type, the price, the node count, and the offering type.</p>
   */
  public getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput>;
  public getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    cb: (err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void
  ): void;
  public getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void
  ): void;
  public getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void),
    cb?: (err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void
  ): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput> | void {
    const command = new GetReservedNodeExchangeConfigurationOptionsCommand(args);
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
   * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
   *             and usage price of the given DC1 reserved node.</p>
   */
  public getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservedNodeExchangeOfferingsCommandOutput>;
  public getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void
  ): void;
  public getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void
  ): void;
  public getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void),
    cb?: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void
  ): Promise<GetReservedNodeExchangeOfferingsCommandOutput> | void {
    const command = new GetReservedNodeExchangeOfferingsCommand(args);
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
   * <p>This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). </p>
   */
  public modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAquaConfigurationCommandOutput>;
  public modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    cb: (err: any, data?: ModifyAquaConfigurationCommandOutput) => void
  ): void;
  public modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAquaConfigurationCommandOutput) => void
  ): void;
  public modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyAquaConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ModifyAquaConfigurationCommandOutput) => void
  ): Promise<ModifyAquaConfigurationCommandOutput> | void {
    const command = new ModifyAquaConfigurationCommand(args);
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
   * <p>Modifies an authentication profile.</p>
   */
  public modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAuthenticationProfileCommandOutput>;
  public modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    cb: (err: any, data?: ModifyAuthenticationProfileCommandOutput) => void
  ): void;
  public modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAuthenticationProfileCommandOutput) => void
  ): void;
  public modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyAuthenticationProfileCommandOutput) => void),
    cb?: (err: any, data?: ModifyAuthenticationProfileCommandOutput) => void
  ): Promise<ModifyAuthenticationProfileCommandOutput> | void {
    const command = new ModifyAuthenticationProfileCommand(args);
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
   * <p>Modifies the settings for a cluster.</p>
   *         <p>You can also change node type and the number of nodes to scale up or down the
   *             cluster. When resizing a cluster, you must specify both the number of nodes and the node
   *             type even if one of the parameters does not change.</p>
   * 		       <p>You can add another security or
   *             parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect.
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public modifyCluster(
    args: ModifyClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterCommandOutput>;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterCommandOutput) => void
  ): Promise<ModifyClusterCommandOutput> | void {
    const command = new ModifyClusterCommand(args);
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
   * <p>Modifies the database revision of a cluster. The database revision is a unique
   *             revision of the database running in a cluster.</p>
   */
  public modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterDbRevisionCommandOutput>;
  public modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void
  ): void;
  public modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void
  ): void;
  public modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterDbRevisionCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void
  ): Promise<ModifyClusterDbRevisionCommandOutput> | void {
    const command = new ModifyClusterDbRevisionCommand(args);
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
   * <p>Modifies the list of Identity and Access Management (IAM) roles that can be
   *             used by the cluster to access other Amazon Web Services services.</p>
   *         <p>The maximum number of IAM roles that you can associate is subject to a quota.
   *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a>
   *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterIamRolesCommandOutput>;
  public modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void
  ): void;
  public modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void
  ): void;
  public modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterIamRolesCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void
  ): Promise<ModifyClusterIamRolesCommandOutput> | void {
    const command = new ModifyClusterIamRolesCommand(args);
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
   * <p>Modifies the maintenance settings of a cluster.</p>
   */
  public modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterMaintenanceCommandOutput>;
  public modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void
  ): void;
  public modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void
  ): void;
  public modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterMaintenanceCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void
  ): Promise<ModifyClusterMaintenanceCommandOutput> | void {
    const command = new ModifyClusterMaintenanceCommand(args);
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
   * <p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p>
   *         <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterParameterGroupCommandOutput>;
  public modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void
  ): void;
  public modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void
  ): void;
  public modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void
  ): Promise<ModifyClusterParameterGroupCommandOutput> | void {
    const command = new ModifyClusterParameterGroupCommand(args);
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
   * <p>Modifies the settings for a snapshot.</p>
   * 		       <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
   */
  public modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterSnapshotCommandOutput>;
  public modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void
  ): void;
  public modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void
  ): void;
  public modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void
  ): Promise<ModifyClusterSnapshotCommandOutput> | void {
    const command = new ModifyClusterSnapshotCommand(args);
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
   * <p>Modifies a snapshot schedule for a cluster.</p>
   */
  public modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterSnapshotScheduleCommandOutput>;
  public modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void
  ): void;
  public modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void
  ): void;
  public modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void
  ): Promise<ModifyClusterSnapshotScheduleCommandOutput> | void {
    const command = new ModifyClusterSnapshotScheduleCommand(args);
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
   * <p>Modifies a cluster subnet group to include the specified list of VPC subnets. The
   *             operation replaces the existing list of subnets with the new list of subnets.</p>
   */
  public modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterSubnetGroupCommandOutput>;
  public modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void
  ): void;
  public modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void
  ): void;
  public modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void
  ): Promise<ModifyClusterSubnetGroupCommandOutput> | void {
    const command = new ModifyClusterSubnetGroupCommand(args);
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
   * <p>Modifies a Redshift-managed VPC endpoint.</p>
   */
  public modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEndpointAccessCommandOutput>;
  public modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    cb: (err: any, data?: ModifyEndpointAccessCommandOutput) => void
  ): void;
  public modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEndpointAccessCommandOutput) => void
  ): void;
  public modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: ModifyEndpointAccessCommandOutput) => void
  ): Promise<ModifyEndpointAccessCommandOutput> | void {
    const command = new ModifyEndpointAccessCommand(args);
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
   * <p>Modifies an existing Amazon Redshift event notification subscription.</p>
   */
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): Promise<ModifyEventSubscriptionCommandOutput> | void {
    const command = new ModifyEventSubscriptionCommand(args);
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
   * <p>Modifies a scheduled action.
   *             </p>
   */
  public modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyScheduledActionCommandOutput>;
  public modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void
  ): void;
  public modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void
  ): void;
  public modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyScheduledActionCommandOutput) => void),
    cb?: (err: any, data?: ModifyScheduledActionCommandOutput) => void
  ): Promise<ModifyScheduledActionCommandOutput> | void {
    const command = new ModifyScheduledActionCommand(args);
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
   * <p>Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after
   *             they are copied from the source Amazon Web Services Region. By default, this operation only changes the
   *             retention period of copied automated snapshots. The retention periods for both new and
   *             existing copied automated snapshots are updated with the new retention period. You can
   *             set the manual option to change only the retention periods of copied manual snapshots.
   *             If you set this option, only newly copied manual snapshots have the new retention
   *             period. </p>
   */
  public modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput>;
  public modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void
  ): void;
  public modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void
  ): void;
  public modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void),
    cb?: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void
  ): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> | void {
    const command = new ModifySnapshotCopyRetentionPeriodCommand(args);
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
   * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified
   *             asynchronously.</p>
   */
  public modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySnapshotScheduleCommandOutput>;
  public modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void
  ): void;
  public modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void
  ): void;
  public modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifySnapshotScheduleCommandOutput) => void),
    cb?: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void
  ): Promise<ModifySnapshotScheduleCommandOutput> | void {
    const command = new ModifySnapshotScheduleCommand(args);
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
   * <p>Modifies a usage limit in a cluster.
   *             You can't modify the feature type or period of a usage limit.</p>
   */
  public modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyUsageLimitCommandOutput>;
  public modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    cb: (err: any, data?: ModifyUsageLimitCommandOutput) => void
  ): void;
  public modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyUsageLimitCommandOutput) => void
  ): void;
  public modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyUsageLimitCommandOutput) => void),
    cb?: (err: any, data?: ModifyUsageLimitCommandOutput) => void
  ): Promise<ModifyUsageLimitCommandOutput> | void {
    const command = new ModifyUsageLimitCommand(args);
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
   * <p>Pauses a cluster.</p>
   */
  public pauseCluster(
    args: PauseClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PauseClusterCommandOutput>;
  public pauseCluster(args: PauseClusterCommandInput, cb: (err: any, data?: PauseClusterCommandOutput) => void): void;
  public pauseCluster(
    args: PauseClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseClusterCommandOutput) => void
  ): void;
  public pauseCluster(
    args: PauseClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PauseClusterCommandOutput) => void),
    cb?: (err: any, data?: PauseClusterCommandOutput) => void
  ): Promise<PauseClusterCommandOutput> | void {
    const command = new PauseClusterCommand(args);
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
   * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
   *             reserved node offerings. You can purchase one or more of the offerings. You can call the
   *                 <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved
   *             node offerings. You can call this API by providing a specific reserved node offering and
   *             the number of nodes you want to reserve. </p>
   *         <p>
   * For more information about reserved node offerings, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedNodeOfferingCommandOutput>;
  public purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void
  ): void;
  public purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void
  ): void;
  public purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void
  ): Promise<PurchaseReservedNodeOfferingCommandOutput> | void {
    const command = new PurchaseReservedNodeOfferingCommand(args);
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
   * <p>Reboots a cluster. This action is taken as soon as possible. It results in a
   *             momentary outage to the cluster, during which the cluster status is set to
   *                 <code>rebooting</code>. A cluster event is created when the reboot is completed. Any
   *             pending cluster modifications (see <a>ModifyCluster</a>) are applied at this
   *             reboot.
   * For more information about managing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   */
  public rebootCluster(
    args: RebootClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootClusterCommandOutput>;
  public rebootCluster(
    args: RebootClusterCommandInput,
    cb: (err: any, data?: RebootClusterCommandOutput) => void
  ): void;
  public rebootCluster(
    args: RebootClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootClusterCommandOutput) => void
  ): void;
  public rebootCluster(
    args: RebootClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootClusterCommandOutput) => void),
    cb?: (err: any, data?: RebootClusterCommandOutput) => void
  ): Promise<RebootClusterCommandOutput> | void {
    const command = new RebootClusterCommand(args);
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
   * <p>From a datashare consumer account, rejects the specified datashare.</p>
   */
  public rejectDataShare(
    args: RejectDataShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectDataShareCommandOutput>;
  public rejectDataShare(
    args: RejectDataShareCommandInput,
    cb: (err: any, data?: RejectDataShareCommandOutput) => void
  ): void;
  public rejectDataShare(
    args: RejectDataShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectDataShareCommandOutput) => void
  ): void;
  public rejectDataShare(
    args: RejectDataShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectDataShareCommandOutput) => void),
    cb?: (err: any, data?: RejectDataShareCommandOutput) => void
  ): Promise<RejectDataShareCommandOutput> | void {
    const command = new RejectDataShareCommand(args);
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
   * <p>Sets one or more parameters of the specified parameter group to their default
   *             values and sets the source values of the parameters to "engine-default". To reset the
   *             entire parameter group specify the <i>ResetAllParameters</i> parameter.
   *             For parameter changes to take effect you must reboot any associated clusters. </p>
   */
  public resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetClusterParameterGroupCommandOutput>;
  public resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void
  ): void;
  public resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void
  ): void;
  public resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void
  ): Promise<ResetClusterParameterGroupCommandOutput> | void {
    const command = new ResetClusterParameterGroupCommand(args);
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
   * <p>Changes the size of the cluster. You can change the cluster's type, or change the
   *             number or type of nodes. The default behavior is to use the elastic resize method. With
   *             an elastic resize, your cluster is available for read and write operations more quickly
   *             than with the classic resize method. </p>
   *         <p>Elastic resize operations have the following restrictions:</p>
   *         <ul>
   *             <li>
   *                 <p>You can only resize clusters of the following types:</p>
   *                 <ul>
   *                   <li>
   *                         <p>dc1.large (if your cluster is in a VPC)</p>
   *                     </li>
   *                   <li>
   *                         <p>dc1.8xlarge (if your cluster is in a VPC)</p>
   *                     </li>
   *                   <li>
   *                         <p>dc2.large</p>
   *                     </li>
   *                   <li>
   *                         <p>dc2.8xlarge</p>
   *                     </li>
   *                   <li>
   *                         <p>ds2.xlarge</p>
   *                     </li>
   *                   <li>
   *                         <p>ds2.8xlarge</p>
   *                     </li>
   *                   <li>
   *                         <p>ra3.xlplus</p>
   *                     </li>
   *                   <li>
   *                         <p>ra3.4xlarge</p>
   *                     </li>
   *                   <li>
   *                         <p>ra3.16xlarge</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>The type of nodes that you add must match the node type for the
   *                     cluster.</p>
   *             </li>
   *          </ul>
   */
  public resizeCluster(
    args: ResizeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResizeClusterCommandOutput>;
  public resizeCluster(
    args: ResizeClusterCommandInput,
    cb: (err: any, data?: ResizeClusterCommandOutput) => void
  ): void;
  public resizeCluster(
    args: ResizeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResizeClusterCommandOutput) => void
  ): void;
  public resizeCluster(
    args: ResizeClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResizeClusterCommandOutput) => void),
    cb?: (err: any, data?: ResizeClusterCommandOutput) => void
  ): Promise<ResizeClusterCommandOutput> | void {
    const command = new ResizeClusterCommand(args);
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
   * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
   *             cluster with the same configuration as the original cluster from which the snapshot was
   *             created, except that the new cluster is created with the default cluster security and
   *             parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different
   *             parameter group with the restored cluster. If you are using a DS node type, you can also
   *             choose to change to another DS node type of the same size during restore.</p>
   *         <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where
   *             you want the cluster restored.</p>
   *         <p>
   * For more information about working with snapshots, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreFromClusterSnapshotCommandOutput>;
  public restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void
  ): void;
  public restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void
  ): void;
  public restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void
  ): Promise<RestoreFromClusterSnapshotCommandOutput> | void {
    const command = new RestoreFromClusterSnapshotCommand(args);
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
   * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
   *             create the new table within the Amazon Redshift cluster that the snapshot was taken
   *             from.</p>
   *         <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with
   *             the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
   *             overwrite an existing table in a cluster with a restored table. If you want to replace
   *             your original table with a new, restored table, then rename or drop your original table
   *             before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your
   *             original table, then you can pass the original name of the table as the
   *                 <code>NewTableName</code> parameter value in the call to
   *                 <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original
   *             table with the table created from the snapshot.</p>
   */
  public restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableFromClusterSnapshotCommandOutput>;
  public restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void
  ): void;
  public restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void
  ): void;
  public restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void
  ): Promise<RestoreTableFromClusterSnapshotCommandOutput> | void {
    const command = new RestoreTableFromClusterSnapshotCommand(args);
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
   * <p>Resumes a paused cluster.</p>
   */
  public resumeCluster(
    args: ResumeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeClusterCommandOutput>;
  public resumeCluster(
    args: ResumeClusterCommandInput,
    cb: (err: any, data?: ResumeClusterCommandOutput) => void
  ): void;
  public resumeCluster(
    args: ResumeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeClusterCommandOutput) => void
  ): void;
  public resumeCluster(
    args: ResumeClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeClusterCommandOutput) => void),
    cb?: (err: any, data?: ResumeClusterCommandOutput) => void
  ): Promise<ResumeClusterCommandOutput> | void {
    const command = new ResumeClusterCommand(args);
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
   * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
   *             IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>.
   * For information about managing security groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
   * <i>Amazon Redshift Cluster Management Guide</i>. </p>
   */
  public revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeClusterSecurityGroupIngressCommandOutput>;
  public revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void
  ): Promise<RevokeClusterSecurityGroupIngressCommandOutput> | void {
    const command = new RevokeClusterSecurityGroupIngressCommand(args);
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
   * <p>Revokes access to a cluster.</p>
   */
  public revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeEndpointAccessCommandOutput>;
  public revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    cb: (err: any, data?: RevokeEndpointAccessCommandOutput) => void
  ): void;
  public revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeEndpointAccessCommandOutput) => void
  ): void;
  public revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: RevokeEndpointAccessCommandOutput) => void
  ): Promise<RevokeEndpointAccessCommandOutput> | void {
    const command = new RevokeEndpointAccessCommand(args);
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
   * <p>Removes the ability of the specified  Amazon Web Services account to restore the specified
   *             snapshot. If the account is currently restoring the snapshot, the restore will run to
   *             completion.</p>
   *         <p>
   * For more information about working with snapshots, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  public revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSnapshotAccessCommandOutput>;
  public revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void
  ): void;
  public revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void
  ): void;
  public revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeSnapshotAccessCommandOutput) => void),
    cb?: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void
  ): Promise<RevokeSnapshotAccessCommandOutput> | void {
    const command = new RevokeSnapshotAccessCommand(args);
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
   * <p>Rotates the encryption keys for a cluster.</p>
   */
  public rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateEncryptionKeyCommandOutput>;
  public rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void
  ): void;
  public rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void
  ): void;
  public rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RotateEncryptionKeyCommandOutput) => void),
    cb?: (err: any, data?: RotateEncryptionKeyCommandOutput) => void
  ): Promise<RotateEncryptionKeyCommandOutput> | void {
    const command = new RotateEncryptionKeyCommand(args);
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
   * <p>Updates the status of a partner integration.</p>
   */
  public updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartnerStatusCommandOutput>;
  public updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    cb: (err: any, data?: UpdatePartnerStatusCommandOutput) => void
  ): void;
  public updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartnerStatusCommandOutput) => void
  ): void;
  public updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePartnerStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdatePartnerStatusCommandOutput) => void
  ): Promise<UpdatePartnerStatusCommandOutput> | void {
    const command = new UpdatePartnerStatusCommand(args);
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
