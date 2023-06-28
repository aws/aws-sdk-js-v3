// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptDirectConnectGatewayAssociationProposalCommand,
  AcceptDirectConnectGatewayAssociationProposalCommandInput,
  AcceptDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/AcceptDirectConnectGatewayAssociationProposalCommand";
import {
  AllocateConnectionOnInterconnectCommand,
  AllocateConnectionOnInterconnectCommandInput,
  AllocateConnectionOnInterconnectCommandOutput,
} from "./commands/AllocateConnectionOnInterconnectCommand";
import {
  AllocateHostedConnectionCommand,
  AllocateHostedConnectionCommandInput,
  AllocateHostedConnectionCommandOutput,
} from "./commands/AllocateHostedConnectionCommand";
import {
  AllocatePrivateVirtualInterfaceCommand,
  AllocatePrivateVirtualInterfaceCommandInput,
  AllocatePrivateVirtualInterfaceCommandOutput,
} from "./commands/AllocatePrivateVirtualInterfaceCommand";
import {
  AllocatePublicVirtualInterfaceCommand,
  AllocatePublicVirtualInterfaceCommandInput,
  AllocatePublicVirtualInterfaceCommandOutput,
} from "./commands/AllocatePublicVirtualInterfaceCommand";
import {
  AllocateTransitVirtualInterfaceCommand,
  AllocateTransitVirtualInterfaceCommandInput,
  AllocateTransitVirtualInterfaceCommandOutput,
} from "./commands/AllocateTransitVirtualInterfaceCommand";
import {
  AssociateConnectionWithLagCommand,
  AssociateConnectionWithLagCommandInput,
  AssociateConnectionWithLagCommandOutput,
} from "./commands/AssociateConnectionWithLagCommand";
import {
  AssociateHostedConnectionCommand,
  AssociateHostedConnectionCommandInput,
  AssociateHostedConnectionCommandOutput,
} from "./commands/AssociateHostedConnectionCommand";
import {
  AssociateMacSecKeyCommand,
  AssociateMacSecKeyCommandInput,
  AssociateMacSecKeyCommandOutput,
} from "./commands/AssociateMacSecKeyCommand";
import {
  AssociateVirtualInterfaceCommand,
  AssociateVirtualInterfaceCommandInput,
  AssociateVirtualInterfaceCommandOutput,
} from "./commands/AssociateVirtualInterfaceCommand";
import {
  ConfirmConnectionCommand,
  ConfirmConnectionCommandInput,
  ConfirmConnectionCommandOutput,
} from "./commands/ConfirmConnectionCommand";
import {
  ConfirmCustomerAgreementCommand,
  ConfirmCustomerAgreementCommandInput,
  ConfirmCustomerAgreementCommandOutput,
} from "./commands/ConfirmCustomerAgreementCommand";
import {
  ConfirmPrivateVirtualInterfaceCommand,
  ConfirmPrivateVirtualInterfaceCommandInput,
  ConfirmPrivateVirtualInterfaceCommandOutput,
} from "./commands/ConfirmPrivateVirtualInterfaceCommand";
import {
  ConfirmPublicVirtualInterfaceCommand,
  ConfirmPublicVirtualInterfaceCommandInput,
  ConfirmPublicVirtualInterfaceCommandOutput,
} from "./commands/ConfirmPublicVirtualInterfaceCommand";
import {
  ConfirmTransitVirtualInterfaceCommand,
  ConfirmTransitVirtualInterfaceCommandInput,
  ConfirmTransitVirtualInterfaceCommandOutput,
} from "./commands/ConfirmTransitVirtualInterfaceCommand";
import {
  CreateBGPPeerCommand,
  CreateBGPPeerCommandInput,
  CreateBGPPeerCommandOutput,
} from "./commands/CreateBGPPeerCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateDirectConnectGatewayAssociationCommand,
  CreateDirectConnectGatewayAssociationCommandInput,
  CreateDirectConnectGatewayAssociationCommandOutput,
} from "./commands/CreateDirectConnectGatewayAssociationCommand";
import {
  CreateDirectConnectGatewayAssociationProposalCommand,
  CreateDirectConnectGatewayAssociationProposalCommandInput,
  CreateDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/CreateDirectConnectGatewayAssociationProposalCommand";
import {
  CreateDirectConnectGatewayCommand,
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
} from "./commands/CreateDirectConnectGatewayCommand";
import {
  CreateInterconnectCommand,
  CreateInterconnectCommandInput,
  CreateInterconnectCommandOutput,
} from "./commands/CreateInterconnectCommand";
import { CreateLagCommand, CreateLagCommandInput, CreateLagCommandOutput } from "./commands/CreateLagCommand";
import {
  CreatePrivateVirtualInterfaceCommand,
  CreatePrivateVirtualInterfaceCommandInput,
  CreatePrivateVirtualInterfaceCommandOutput,
} from "./commands/CreatePrivateVirtualInterfaceCommand";
import {
  CreatePublicVirtualInterfaceCommand,
  CreatePublicVirtualInterfaceCommandInput,
  CreatePublicVirtualInterfaceCommandOutput,
} from "./commands/CreatePublicVirtualInterfaceCommand";
import {
  CreateTransitVirtualInterfaceCommand,
  CreateTransitVirtualInterfaceCommandInput,
  CreateTransitVirtualInterfaceCommandOutput,
} from "./commands/CreateTransitVirtualInterfaceCommand";
import {
  DeleteBGPPeerCommand,
  DeleteBGPPeerCommandInput,
  DeleteBGPPeerCommandOutput,
} from "./commands/DeleteBGPPeerCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteDirectConnectGatewayAssociationCommand,
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
} from "./commands/DeleteDirectConnectGatewayAssociationCommand";
import {
  DeleteDirectConnectGatewayAssociationProposalCommand,
  DeleteDirectConnectGatewayAssociationProposalCommandInput,
  DeleteDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/DeleteDirectConnectGatewayAssociationProposalCommand";
import {
  DeleteDirectConnectGatewayCommand,
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
} from "./commands/DeleteDirectConnectGatewayCommand";
import {
  DeleteInterconnectCommand,
  DeleteInterconnectCommandInput,
  DeleteInterconnectCommandOutput,
} from "./commands/DeleteInterconnectCommand";
import { DeleteLagCommand, DeleteLagCommandInput, DeleteLagCommandOutput } from "./commands/DeleteLagCommand";
import {
  DeleteVirtualInterfaceCommand,
  DeleteVirtualInterfaceCommandInput,
  DeleteVirtualInterfaceCommandOutput,
} from "./commands/DeleteVirtualInterfaceCommand";
import {
  DescribeConnectionLoaCommand,
  DescribeConnectionLoaCommandInput,
  DescribeConnectionLoaCommandOutput,
} from "./commands/DescribeConnectionLoaCommand";
import {
  DescribeConnectionsCommand,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "./commands/DescribeConnectionsCommand";
import {
  DescribeConnectionsOnInterconnectCommand,
  DescribeConnectionsOnInterconnectCommandInput,
  DescribeConnectionsOnInterconnectCommandOutput,
} from "./commands/DescribeConnectionsOnInterconnectCommand";
import {
  DescribeCustomerMetadataCommand,
  DescribeCustomerMetadataCommandInput,
  DescribeCustomerMetadataCommandOutput,
} from "./commands/DescribeCustomerMetadataCommand";
import {
  DescribeDirectConnectGatewayAssociationProposalsCommand,
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAssociationProposalsCommand";
import {
  DescribeDirectConnectGatewayAssociationsCommand,
  DescribeDirectConnectGatewayAssociationsCommandInput,
  DescribeDirectConnectGatewayAssociationsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAssociationsCommand";
import {
  DescribeDirectConnectGatewayAttachmentsCommand,
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAttachmentsCommand";
import {
  DescribeDirectConnectGatewaysCommand,
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
} from "./commands/DescribeDirectConnectGatewaysCommand";
import {
  DescribeHostedConnectionsCommand,
  DescribeHostedConnectionsCommandInput,
  DescribeHostedConnectionsCommandOutput,
} from "./commands/DescribeHostedConnectionsCommand";
import {
  DescribeInterconnectLoaCommand,
  DescribeInterconnectLoaCommandInput,
  DescribeInterconnectLoaCommandOutput,
} from "./commands/DescribeInterconnectLoaCommand";
import {
  DescribeInterconnectsCommand,
  DescribeInterconnectsCommandInput,
  DescribeInterconnectsCommandOutput,
} from "./commands/DescribeInterconnectsCommand";
import {
  DescribeLagsCommand,
  DescribeLagsCommandInput,
  DescribeLagsCommandOutput,
} from "./commands/DescribeLagsCommand";
import { DescribeLoaCommand, DescribeLoaCommandInput, DescribeLoaCommandOutput } from "./commands/DescribeLoaCommand";
import {
  DescribeLocationsCommand,
  DescribeLocationsCommandInput,
  DescribeLocationsCommandOutput,
} from "./commands/DescribeLocationsCommand";
import {
  DescribeRouterConfigurationCommand,
  DescribeRouterConfigurationCommandInput,
  DescribeRouterConfigurationCommandOutput,
} from "./commands/DescribeRouterConfigurationCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeVirtualGatewaysCommand,
  DescribeVirtualGatewaysCommandInput,
  DescribeVirtualGatewaysCommandOutput,
} from "./commands/DescribeVirtualGatewaysCommand";
import {
  DescribeVirtualInterfacesCommand,
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
} from "./commands/DescribeVirtualInterfacesCommand";
import {
  DisassociateConnectionFromLagCommand,
  DisassociateConnectionFromLagCommandInput,
  DisassociateConnectionFromLagCommandOutput,
} from "./commands/DisassociateConnectionFromLagCommand";
import {
  DisassociateMacSecKeyCommand,
  DisassociateMacSecKeyCommandInput,
  DisassociateMacSecKeyCommandOutput,
} from "./commands/DisassociateMacSecKeyCommand";
import {
  ListVirtualInterfaceTestHistoryCommand,
  ListVirtualInterfaceTestHistoryCommandInput,
  ListVirtualInterfaceTestHistoryCommandOutput,
} from "./commands/ListVirtualInterfaceTestHistoryCommand";
import {
  StartBgpFailoverTestCommand,
  StartBgpFailoverTestCommandInput,
  StartBgpFailoverTestCommandOutput,
} from "./commands/StartBgpFailoverTestCommand";
import {
  StopBgpFailoverTestCommand,
  StopBgpFailoverTestCommandInput,
  StopBgpFailoverTestCommandOutput,
} from "./commands/StopBgpFailoverTestCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
} from "./commands/UpdateConnectionCommand";
import {
  UpdateDirectConnectGatewayAssociationCommand,
  UpdateDirectConnectGatewayAssociationCommandInput,
  UpdateDirectConnectGatewayAssociationCommandOutput,
} from "./commands/UpdateDirectConnectGatewayAssociationCommand";
import {
  UpdateDirectConnectGatewayCommand,
  UpdateDirectConnectGatewayCommandInput,
  UpdateDirectConnectGatewayCommandOutput,
} from "./commands/UpdateDirectConnectGatewayCommand";
import { UpdateLagCommand, UpdateLagCommandInput, UpdateLagCommandOutput } from "./commands/UpdateLagCommand";
import {
  UpdateVirtualInterfaceAttributesCommand,
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
} from "./commands/UpdateVirtualInterfaceAttributesCommand";
import { DirectConnectClient, DirectConnectClientConfig } from "./DirectConnectClient";

const commands = {
  AcceptDirectConnectGatewayAssociationProposalCommand,
  AllocateConnectionOnInterconnectCommand,
  AllocateHostedConnectionCommand,
  AllocatePrivateVirtualInterfaceCommand,
  AllocatePublicVirtualInterfaceCommand,
  AllocateTransitVirtualInterfaceCommand,
  AssociateConnectionWithLagCommand,
  AssociateHostedConnectionCommand,
  AssociateMacSecKeyCommand,
  AssociateVirtualInterfaceCommand,
  ConfirmConnectionCommand,
  ConfirmCustomerAgreementCommand,
  ConfirmPrivateVirtualInterfaceCommand,
  ConfirmPublicVirtualInterfaceCommand,
  ConfirmTransitVirtualInterfaceCommand,
  CreateBGPPeerCommand,
  CreateConnectionCommand,
  CreateDirectConnectGatewayCommand,
  CreateDirectConnectGatewayAssociationCommand,
  CreateDirectConnectGatewayAssociationProposalCommand,
  CreateInterconnectCommand,
  CreateLagCommand,
  CreatePrivateVirtualInterfaceCommand,
  CreatePublicVirtualInterfaceCommand,
  CreateTransitVirtualInterfaceCommand,
  DeleteBGPPeerCommand,
  DeleteConnectionCommand,
  DeleteDirectConnectGatewayCommand,
  DeleteDirectConnectGatewayAssociationCommand,
  DeleteDirectConnectGatewayAssociationProposalCommand,
  DeleteInterconnectCommand,
  DeleteLagCommand,
  DeleteVirtualInterfaceCommand,
  DescribeConnectionLoaCommand,
  DescribeConnectionsCommand,
  DescribeConnectionsOnInterconnectCommand,
  DescribeCustomerMetadataCommand,
  DescribeDirectConnectGatewayAssociationProposalsCommand,
  DescribeDirectConnectGatewayAssociationsCommand,
  DescribeDirectConnectGatewayAttachmentsCommand,
  DescribeDirectConnectGatewaysCommand,
  DescribeHostedConnectionsCommand,
  DescribeInterconnectLoaCommand,
  DescribeInterconnectsCommand,
  DescribeLagsCommand,
  DescribeLoaCommand,
  DescribeLocationsCommand,
  DescribeRouterConfigurationCommand,
  DescribeTagsCommand,
  DescribeVirtualGatewaysCommand,
  DescribeVirtualInterfacesCommand,
  DisassociateConnectionFromLagCommand,
  DisassociateMacSecKeyCommand,
  ListVirtualInterfaceTestHistoryCommand,
  StartBgpFailoverTestCommand,
  StopBgpFailoverTestCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectionCommand,
  UpdateDirectConnectGatewayCommand,
  UpdateDirectConnectGatewayAssociationCommand,
  UpdateLagCommand,
  UpdateVirtualInterfaceAttributesCommand,
};

export interface DirectConnect {
  /**
   * @see {@link AcceptDirectConnectGatewayAssociationProposalCommand}
   */
  acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput>;
  acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    cb: (err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocateConnectionOnInterconnectCommand}
   */
  allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateConnectionOnInterconnectCommandOutput>;
  allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectCommandInput,
    cb: (err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void
  ): void;
  allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocateHostedConnectionCommand}
   */
  allocateHostedConnection(
    args: AllocateHostedConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateHostedConnectionCommandOutput>;
  allocateHostedConnection(
    args: AllocateHostedConnectionCommandInput,
    cb: (err: any, data?: AllocateHostedConnectionCommandOutput) => void
  ): void;
  allocateHostedConnection(
    args: AllocateHostedConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateHostedConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocatePrivateVirtualInterfaceCommand}
   */
  allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocatePrivateVirtualInterfaceCommandOutput>;
  allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceCommandInput,
    cb: (err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void
  ): void;
  allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocatePublicVirtualInterfaceCommand}
   */
  allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocatePublicVirtualInterfaceCommandOutput>;
  allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceCommandInput,
    cb: (err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void
  ): void;
  allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocateTransitVirtualInterfaceCommand}
   */
  allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateTransitVirtualInterfaceCommandOutput>;
  allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceCommandInput,
    cb: (err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void
  ): void;
  allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateConnectionWithLagCommand}
   */
  associateConnectionWithLag(
    args: AssociateConnectionWithLagCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateConnectionWithLagCommandOutput>;
  associateConnectionWithLag(
    args: AssociateConnectionWithLagCommandInput,
    cb: (err: any, data?: AssociateConnectionWithLagCommandOutput) => void
  ): void;
  associateConnectionWithLag(
    args: AssociateConnectionWithLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateConnectionWithLagCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateHostedConnectionCommand}
   */
  associateHostedConnection(
    args: AssociateHostedConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateHostedConnectionCommandOutput>;
  associateHostedConnection(
    args: AssociateHostedConnectionCommandInput,
    cb: (err: any, data?: AssociateHostedConnectionCommandOutput) => void
  ): void;
  associateHostedConnection(
    args: AssociateHostedConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateHostedConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMacSecKeyCommand}
   */
  associateMacSecKey(
    args: AssociateMacSecKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMacSecKeyCommandOutput>;
  associateMacSecKey(
    args: AssociateMacSecKeyCommandInput,
    cb: (err: any, data?: AssociateMacSecKeyCommandOutput) => void
  ): void;
  associateMacSecKey(
    args: AssociateMacSecKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMacSecKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateVirtualInterfaceCommand}
   */
  associateVirtualInterface(
    args: AssociateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVirtualInterfaceCommandOutput>;
  associateVirtualInterface(
    args: AssociateVirtualInterfaceCommandInput,
    cb: (err: any, data?: AssociateVirtualInterfaceCommandOutput) => void
  ): void;
  associateVirtualInterface(
    args: AssociateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmConnectionCommand}
   */
  confirmConnection(
    args: ConfirmConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmConnectionCommandOutput>;
  confirmConnection(
    args: ConfirmConnectionCommandInput,
    cb: (err: any, data?: ConfirmConnectionCommandOutput) => void
  ): void;
  confirmConnection(
    args: ConfirmConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmCustomerAgreementCommand}
   */
  confirmCustomerAgreement(
    args: ConfirmCustomerAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmCustomerAgreementCommandOutput>;
  confirmCustomerAgreement(
    args: ConfirmCustomerAgreementCommandInput,
    cb: (err: any, data?: ConfirmCustomerAgreementCommandOutput) => void
  ): void;
  confirmCustomerAgreement(
    args: ConfirmCustomerAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmCustomerAgreementCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmPrivateVirtualInterfaceCommand}
   */
  confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmPrivateVirtualInterfaceCommandOutput>;
  confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceCommandInput,
    cb: (err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void
  ): void;
  confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmPublicVirtualInterfaceCommand}
   */
  confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmPublicVirtualInterfaceCommandOutput>;
  confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceCommandInput,
    cb: (err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void
  ): void;
  confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmTransitVirtualInterfaceCommand}
   */
  confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmTransitVirtualInterfaceCommandOutput>;
  confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceCommandInput,
    cb: (err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void
  ): void;
  confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBGPPeerCommand}
   */
  createBGPPeer(args: CreateBGPPeerCommandInput, options?: __HttpHandlerOptions): Promise<CreateBGPPeerCommandOutput>;
  createBGPPeer(args: CreateBGPPeerCommandInput, cb: (err: any, data?: CreateBGPPeerCommandOutput) => void): void;
  createBGPPeer(
    args: CreateBGPPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBGPPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectConnectGatewayCommand}
   */
  createDirectConnectGateway(
    args: CreateDirectConnectGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectConnectGatewayCommandOutput>;
  createDirectConnectGateway(
    args: CreateDirectConnectGatewayCommandInput,
    cb: (err: any, data?: CreateDirectConnectGatewayCommandOutput) => void
  ): void;
  createDirectConnectGateway(
    args: CreateDirectConnectGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectConnectGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectConnectGatewayAssociationCommand}
   */
  createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectConnectGatewayAssociationCommandOutput>;
  createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationCommandInput,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectConnectGatewayAssociationProposalCommand}
   */
  createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput>;
  createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalCommandInput,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInterconnectCommand}
   */
  createInterconnect(
    args: CreateInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInterconnectCommandOutput>;
  createInterconnect(
    args: CreateInterconnectCommandInput,
    cb: (err: any, data?: CreateInterconnectCommandOutput) => void
  ): void;
  createInterconnect(
    args: CreateInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInterconnectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLagCommand}
   */
  createLag(args: CreateLagCommandInput, options?: __HttpHandlerOptions): Promise<CreateLagCommandOutput>;
  createLag(args: CreateLagCommandInput, cb: (err: any, data?: CreateLagCommandOutput) => void): void;
  createLag(
    args: CreateLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLagCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrivateVirtualInterfaceCommand}
   */
  createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrivateVirtualInterfaceCommandOutput>;
  createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceCommandInput,
    cb: (err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void
  ): void;
  createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePublicVirtualInterfaceCommand}
   */
  createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicVirtualInterfaceCommandOutput>;
  createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceCommandInput,
    cb: (err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void
  ): void;
  createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitVirtualInterfaceCommand}
   */
  createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitVirtualInterfaceCommandOutput>;
  createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceCommandInput,
    cb: (err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void
  ): void;
  createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBGPPeerCommand}
   */
  deleteBGPPeer(args: DeleteBGPPeerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBGPPeerCommandOutput>;
  deleteBGPPeer(args: DeleteBGPPeerCommandInput, cb: (err: any, data?: DeleteBGPPeerCommandOutput) => void): void;
  deleteBGPPeer(
    args: DeleteBGPPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBGPPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectConnectGatewayCommand}
   */
  deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectConnectGatewayCommandOutput>;
  deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayCommandInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void
  ): void;
  deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectConnectGatewayAssociationCommand}
   */
  deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectConnectGatewayAssociationCommandOutput>;
  deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationCommandInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectConnectGatewayAssociationProposalCommand}
   */
  deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput>;
  deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInterconnectCommand}
   */
  deleteInterconnect(
    args: DeleteInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInterconnectCommandOutput>;
  deleteInterconnect(
    args: DeleteInterconnectCommandInput,
    cb: (err: any, data?: DeleteInterconnectCommandOutput) => void
  ): void;
  deleteInterconnect(
    args: DeleteInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInterconnectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLagCommand}
   */
  deleteLag(args: DeleteLagCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLagCommandOutput>;
  deleteLag(args: DeleteLagCommandInput, cb: (err: any, data?: DeleteLagCommandOutput) => void): void;
  deleteLag(
    args: DeleteLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLagCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVirtualInterfaceCommand}
   */
  deleteVirtualInterface(
    args: DeleteVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualInterfaceCommandOutput>;
  deleteVirtualInterface(
    args: DeleteVirtualInterfaceCommandInput,
    cb: (err: any, data?: DeleteVirtualInterfaceCommandOutput) => void
  ): void;
  deleteVirtualInterface(
    args: DeleteVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionLoaCommand}
   */
  describeConnectionLoa(
    args: DescribeConnectionLoaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionLoaCommandOutput>;
  describeConnectionLoa(
    args: DescribeConnectionLoaCommandInput,
    cb: (err: any, data?: DescribeConnectionLoaCommandOutput) => void
  ): void;
  describeConnectionLoa(
    args: DescribeConnectionLoaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionLoaCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionsCommand}
   */
  describeConnections(
    args: DescribeConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionsCommandOutput>;
  describeConnections(
    args: DescribeConnectionsCommandInput,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  describeConnections(
    args: DescribeConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionsOnInterconnectCommand}
   */
  describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionsOnInterconnectCommandOutput>;
  describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectCommandInput,
    cb: (err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void
  ): void;
  describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomerMetadataCommand}
   */
  describeCustomerMetadata(
    args: DescribeCustomerMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomerMetadataCommandOutput>;
  describeCustomerMetadata(
    args: DescribeCustomerMetadataCommandInput,
    cb: (err: any, data?: DescribeCustomerMetadataCommandOutput) => void
  ): void;
  describeCustomerMetadata(
    args: DescribeCustomerMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomerMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommand}
   */
  describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput>;
  describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void
  ): void;
  describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDirectConnectGatewayAssociationsCommand}
   */
  describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput>;
  describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void
  ): void;
  describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDirectConnectGatewayAttachmentsCommand}
   */
  describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput>;
  describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void
  ): void;
  describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDirectConnectGatewaysCommand}
   */
  describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewaysCommandOutput>;
  describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void
  ): void;
  describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHostedConnectionsCommand}
   */
  describeHostedConnections(
    args: DescribeHostedConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostedConnectionsCommandOutput>;
  describeHostedConnections(
    args: DescribeHostedConnectionsCommandInput,
    cb: (err: any, data?: DescribeHostedConnectionsCommandOutput) => void
  ): void;
  describeHostedConnections(
    args: DescribeHostedConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostedConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInterconnectLoaCommand}
   */
  describeInterconnectLoa(
    args: DescribeInterconnectLoaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInterconnectLoaCommandOutput>;
  describeInterconnectLoa(
    args: DescribeInterconnectLoaCommandInput,
    cb: (err: any, data?: DescribeInterconnectLoaCommandOutput) => void
  ): void;
  describeInterconnectLoa(
    args: DescribeInterconnectLoaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInterconnectLoaCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInterconnectsCommand}
   */
  describeInterconnects(
    args: DescribeInterconnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInterconnectsCommandOutput>;
  describeInterconnects(
    args: DescribeInterconnectsCommandInput,
    cb: (err: any, data?: DescribeInterconnectsCommandOutput) => void
  ): void;
  describeInterconnects(
    args: DescribeInterconnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInterconnectsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLagsCommand}
   */
  describeLags(args: DescribeLagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLagsCommandOutput>;
  describeLags(args: DescribeLagsCommandInput, cb: (err: any, data?: DescribeLagsCommandOutput) => void): void;
  describeLags(
    args: DescribeLagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoaCommand}
   */
  describeLoa(args: DescribeLoaCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoaCommandOutput>;
  describeLoa(args: DescribeLoaCommandInput, cb: (err: any, data?: DescribeLoaCommandOutput) => void): void;
  describeLoa(
    args: DescribeLoaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoaCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationsCommand}
   */
  describeLocations(
    args: DescribeLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationsCommandOutput>;
  describeLocations(
    args: DescribeLocationsCommandInput,
    cb: (err: any, data?: DescribeLocationsCommandOutput) => void
  ): void;
  describeLocations(
    args: DescribeLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRouterConfigurationCommand}
   */
  describeRouterConfiguration(
    args: DescribeRouterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouterConfigurationCommandOutput>;
  describeRouterConfiguration(
    args: DescribeRouterConfigurationCommandInput,
    cb: (err: any, data?: DescribeRouterConfigurationCommandOutput) => void
  ): void;
  describeRouterConfiguration(
    args: DescribeRouterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVirtualGatewaysCommand}
   */
  describeVirtualGateways(
    args: DescribeVirtualGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualGatewaysCommandOutput>;
  describeVirtualGateways(
    args: DescribeVirtualGatewaysCommandInput,
    cb: (err: any, data?: DescribeVirtualGatewaysCommandOutput) => void
  ): void;
  describeVirtualGateways(
    args: DescribeVirtualGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVirtualInterfacesCommand}
   */
  describeVirtualInterfaces(
    args: DescribeVirtualInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualInterfacesCommandOutput>;
  describeVirtualInterfaces(
    args: DescribeVirtualInterfacesCommandInput,
    cb: (err: any, data?: DescribeVirtualInterfacesCommandOutput) => void
  ): void;
  describeVirtualInterfaces(
    args: DescribeVirtualInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateConnectionFromLagCommand}
   */
  disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConnectionFromLagCommandOutput>;
  disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagCommandInput,
    cb: (err: any, data?: DisassociateConnectionFromLagCommandOutput) => void
  ): void;
  disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConnectionFromLagCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMacSecKeyCommand}
   */
  disassociateMacSecKey(
    args: DisassociateMacSecKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMacSecKeyCommandOutput>;
  disassociateMacSecKey(
    args: DisassociateMacSecKeyCommandInput,
    cb: (err: any, data?: DisassociateMacSecKeyCommandOutput) => void
  ): void;
  disassociateMacSecKey(
    args: DisassociateMacSecKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMacSecKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualInterfaceTestHistoryCommand}
   */
  listVirtualInterfaceTestHistory(
    args: ListVirtualInterfaceTestHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualInterfaceTestHistoryCommandOutput>;
  listVirtualInterfaceTestHistory(
    args: ListVirtualInterfaceTestHistoryCommandInput,
    cb: (err: any, data?: ListVirtualInterfaceTestHistoryCommandOutput) => void
  ): void;
  listVirtualInterfaceTestHistory(
    args: ListVirtualInterfaceTestHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualInterfaceTestHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBgpFailoverTestCommand}
   */
  startBgpFailoverTest(
    args: StartBgpFailoverTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBgpFailoverTestCommandOutput>;
  startBgpFailoverTest(
    args: StartBgpFailoverTestCommandInput,
    cb: (err: any, data?: StartBgpFailoverTestCommandOutput) => void
  ): void;
  startBgpFailoverTest(
    args: StartBgpFailoverTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBgpFailoverTestCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBgpFailoverTestCommand}
   */
  stopBgpFailoverTest(
    args: StopBgpFailoverTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBgpFailoverTestCommandOutput>;
  stopBgpFailoverTest(
    args: StopBgpFailoverTestCommandInput,
    cb: (err: any, data?: StopBgpFailoverTestCommandOutput) => void
  ): void;
  stopBgpFailoverTest(
    args: StopBgpFailoverTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBgpFailoverTestCommandOutput) => void
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
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDirectConnectGatewayCommand}
   */
  updateDirectConnectGateway(
    args: UpdateDirectConnectGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectConnectGatewayCommandOutput>;
  updateDirectConnectGateway(
    args: UpdateDirectConnectGatewayCommandInput,
    cb: (err: any, data?: UpdateDirectConnectGatewayCommandOutput) => void
  ): void;
  updateDirectConnectGateway(
    args: UpdateDirectConnectGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectConnectGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDirectConnectGatewayAssociationCommand}
   */
  updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectConnectGatewayAssociationCommandOutput>;
  updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationCommandInput,
    cb: (err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLagCommand}
   */
  updateLag(args: UpdateLagCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLagCommandOutput>;
  updateLag(args: UpdateLagCommandInput, cb: (err: any, data?: UpdateLagCommandOutput) => void): void;
  updateLag(
    args: UpdateLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLagCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVirtualInterfaceAttributesCommand}
   */
  updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualInterfaceAttributesCommandOutput>;
  updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesCommandInput,
    cb: (err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void
  ): void;
  updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions.
 *       Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 */
export class DirectConnect extends DirectConnectClient implements DirectConnect {}
createAggregatedClient(commands, DirectConnect);
