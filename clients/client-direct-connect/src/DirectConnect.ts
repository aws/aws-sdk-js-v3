// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { DirectConnectClient } from "./DirectConnectClient";

/**
 * <p>Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions.
 *       Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 */
export class DirectConnect extends DirectConnectClient {
  /**
   * <p>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</p>
   */
  public acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput>;
  public acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    cb: (err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  public acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  public acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void),
    cb?: (err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput> | void {
    const command = new AcceptDirectConnectGatewayAssociationProposalCommand(args);
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
   * @deprecated
   *
   * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p>
   *          <p>Creates a hosted connection on an interconnect.</p>
   *          <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p>
   *          <note>
   *             <p>Intended for use by Direct Connect Partners only.</p>
   *          </note>
   */
  public allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateConnectionOnInterconnectCommandOutput>;
  public allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectCommandInput,
    cb: (err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void
  ): void;
  public allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void
  ): void;
  public allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void),
    cb?: (err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void
  ): Promise<AllocateConnectionOnInterconnectCommandOutput> | void {
    const command = new AllocateConnectionOnInterconnectCommand(args);
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
   * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p>
   *          <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects.
   *       Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p>
   *          <note>
   *             <p>Intended for use by Direct Connect Partners only.</p>
   *          </note>
   */
  public allocateHostedConnection(
    args: AllocateHostedConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateHostedConnectionCommandOutput>;
  public allocateHostedConnection(
    args: AllocateHostedConnectionCommandInput,
    cb: (err: any, data?: AllocateHostedConnectionCommandOutput) => void
  ): void;
  public allocateHostedConnection(
    args: AllocateHostedConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateHostedConnectionCommandOutput) => void
  ): void;
  public allocateHostedConnection(
    args: AllocateHostedConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllocateHostedConnectionCommandOutput) => void),
    cb?: (err: any, data?: AllocateHostedConnectionCommandOutput) => void
  ): Promise<AllocateHostedConnectionCommandOutput> | void {
    const command = new AllocateHostedConnectionCommand(args);
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
   * <p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p>
   *          <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>.
   *       Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
   */
  public allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocatePrivateVirtualInterfaceCommandOutput>;
  public allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceCommandInput,
    cb: (err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void
  ): void;
  public allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void
  ): void;
  public allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void
  ): Promise<AllocatePrivateVirtualInterfaceCommandOutput> | void {
    const command = new AllocatePrivateVirtualInterfaceCommand(args);
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
   * <p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p>
   *          <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p>
   *          <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>.
   *       Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p>
   *          <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
   *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
   */
  public allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocatePublicVirtualInterfaceCommandOutput>;
  public allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceCommandInput,
    cb: (err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void
  ): void;
  public allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void
  ): void;
  public allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void
  ): Promise<AllocatePublicVirtualInterfaceCommandOutput> | void {
    const command = new AllocatePublicVirtualInterfaceCommand(args);
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
   * <p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p>
   *          <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p>
   *          <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
   */
  public allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateTransitVirtualInterfaceCommandOutput>;
  public allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceCommandInput,
    cb: (err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void
  ): void;
  public allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void
  ): void;
  public allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void
  ): Promise<AllocateTransitVirtualInterfaceCommandOutput> | void {
    const command = new AllocateTransitVirtualInterfaceCommand(args);
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
   * <p>Associates an existing connection with a link aggregation group (LAG). The connection
   *       is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is
   *       interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its
   *       bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's
   *       currently associated with a different LAG; however, if removing the connection would cause
   *       the original LAG to fall below its setting for minimum number of operational connections,
   *       the request fails.</p>
   *          <p>Any virtual interfaces that are directly associated with the connection are
   *       automatically re-associated with the LAG. If the connection was originally associated
   *       with a different LAG, the virtual interfaces remain associated with the original
   *       LAG.</p>
   *          <p>For interconnects, any hosted connections are automatically re-associated with the
   *       LAG. If the interconnect was originally associated with a different LAG, the hosted
   *       connections remain associated with the original LAG.</p>
   */
  public associateConnectionWithLag(
    args: AssociateConnectionWithLagCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateConnectionWithLagCommandOutput>;
  public associateConnectionWithLag(
    args: AssociateConnectionWithLagCommandInput,
    cb: (err: any, data?: AssociateConnectionWithLagCommandOutput) => void
  ): void;
  public associateConnectionWithLag(
    args: AssociateConnectionWithLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateConnectionWithLagCommandOutput) => void
  ): void;
  public associateConnectionWithLag(
    args: AssociateConnectionWithLagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateConnectionWithLagCommandOutput) => void),
    cb?: (err: any, data?: AssociateConnectionWithLagCommandOutput) => void
  ): Promise<AssociateConnectionWithLagCommandOutput> | void {
    const command = new AssociateConnectionWithLagCommand(args);
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
   * <p>Associates a hosted connection and its virtual interfaces with a link aggregation
   *       group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted
   *       connection with a conflicting VLAN number or IP address, the operation fails. This
   *       action temporarily interrupts the hosted connection's connectivity to Amazon Web Services
   *       as it is being migrated.</p>
   *          <note>
   *             <p>Intended for use by Direct Connect Partners only.</p>
   *          </note>
   */
  public associateHostedConnection(
    args: AssociateHostedConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateHostedConnectionCommandOutput>;
  public associateHostedConnection(
    args: AssociateHostedConnectionCommandInput,
    cb: (err: any, data?: AssociateHostedConnectionCommandOutput) => void
  ): void;
  public associateHostedConnection(
    args: AssociateHostedConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateHostedConnectionCommandOutput) => void
  ): void;
  public associateHostedConnection(
    args: AssociateHostedConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateHostedConnectionCommandOutput) => void),
    cb?: (err: any, data?: AssociateHostedConnectionCommandOutput) => void
  ): Promise<AssociateHostedConnectionCommandOutput> | void {
    const command = new AssociateHostedConnectionCommand(args);
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
   * <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p>
   *          <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p>
   *          <p>For information about MAC Security (MACsec) key considerations, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>
   */
  public associateMacSecKey(
    args: AssociateMacSecKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMacSecKeyCommandOutput>;
  public associateMacSecKey(
    args: AssociateMacSecKeyCommandInput,
    cb: (err: any, data?: AssociateMacSecKeyCommandOutput) => void
  ): void;
  public associateMacSecKey(
    args: AssociateMacSecKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMacSecKeyCommandOutput) => void
  ): void;
  public associateMacSecKey(
    args: AssociateMacSecKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateMacSecKeyCommandOutput) => void),
    cb?: (err: any, data?: AssociateMacSecKeyCommandOutput) => void
  ): Promise<AssociateMacSecKeyCommandOutput> | void {
    const command = new AssociateMacSecKeyCommand(args);
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
   * <p>Associates a virtual interface with a specified link aggregation group (LAG) or
   *       connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is
   *       being migrated. If the target connection or LAG has an associated virtual interface with
   *       a conflicting VLAN number or a conflicting IP address, the operation fails.</p>
   *          <p>Virtual interfaces associated with a hosted connection cannot be associated with a
   *       LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p>
   *          <p>To reassociate a virtual interface to a new connection or LAG, the requester
   *       must own either the virtual interface itself or the connection to which the virtual
   *       interface is currently associated. Additionally, the requester must own the connection
   *       or LAG for the association.</p>
   */
  public associateVirtualInterface(
    args: AssociateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVirtualInterfaceCommandOutput>;
  public associateVirtualInterface(
    args: AssociateVirtualInterfaceCommandInput,
    cb: (err: any, data?: AssociateVirtualInterfaceCommandOutput) => void
  ): void;
  public associateVirtualInterface(
    args: AssociateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVirtualInterfaceCommandOutput) => void
  ): void;
  public associateVirtualInterface(
    args: AssociateVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: AssociateVirtualInterfaceCommandOutput) => void
  ): Promise<AssociateVirtualInterfaceCommandOutput> | void {
    const command = new AssociateVirtualInterfaceCommand(args);
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
   * <p>Confirms the creation of the specified hosted connection on an interconnect.</p>
   *          <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and
   *       remains in this state until the owner confirms creation of the hosted connection.</p>
   */
  public confirmConnection(
    args: ConfirmConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmConnectionCommandOutput>;
  public confirmConnection(
    args: ConfirmConnectionCommandInput,
    cb: (err: any, data?: ConfirmConnectionCommandOutput) => void
  ): void;
  public confirmConnection(
    args: ConfirmConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmConnectionCommandOutput) => void
  ): void;
  public confirmConnection(
    args: ConfirmConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmConnectionCommandOutput) => void),
    cb?: (err: any, data?: ConfirmConnectionCommandOutput) => void
  ): Promise<ConfirmConnectionCommandOutput> | void {
    const command = new ConfirmConnectionCommand(args);
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
   * <p>
   *       The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).
   *     </p>
   */
  public confirmCustomerAgreement(
    args: ConfirmCustomerAgreementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmCustomerAgreementCommandOutput>;
  public confirmCustomerAgreement(
    args: ConfirmCustomerAgreementCommandInput,
    cb: (err: any, data?: ConfirmCustomerAgreementCommandOutput) => void
  ): void;
  public confirmCustomerAgreement(
    args: ConfirmCustomerAgreementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmCustomerAgreementCommandOutput) => void
  ): void;
  public confirmCustomerAgreement(
    args: ConfirmCustomerAgreementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmCustomerAgreementCommandOutput) => void),
    cb?: (err: any, data?: ConfirmCustomerAgreementCommandOutput) => void
  ): Promise<ConfirmCustomerAgreementCommandOutput> | void {
    const command = new ConfirmCustomerAgreementCommand(args);
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
   * <p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p>
   *          <p>After the virtual interface owner makes this call, the virtual interface is
   *       created and attached to the specified virtual private gateway or Direct Connect gateway, and is
   *       made available to handle traffic.</p>
   */
  public confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmPrivateVirtualInterfaceCommandOutput>;
  public confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceCommandInput,
    cb: (err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void
  ): void;
  public confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void
  ): void;
  public confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void
  ): Promise<ConfirmPrivateVirtualInterfaceCommandOutput> | void {
    const command = new ConfirmPrivateVirtualInterfaceCommand(args);
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
   * <p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p>
   *          <p>After the virtual interface owner makes this call, the specified virtual interface is
   *       created and made available to handle traffic.</p>
   */
  public confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmPublicVirtualInterfaceCommandOutput>;
  public confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceCommandInput,
    cb: (err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void
  ): void;
  public confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void
  ): void;
  public confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void
  ): Promise<ConfirmPublicVirtualInterfaceCommandOutput> | void {
    const command = new ConfirmPublicVirtualInterfaceCommand(args);
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
   * <p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p>
   *
   *          <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
   */
  public confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmTransitVirtualInterfaceCommandOutput>;
  public confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceCommandInput,
    cb: (err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void
  ): void;
  public confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void
  ): void;
  public confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void
  ): Promise<ConfirmTransitVirtualInterfaceCommandOutput> | void {
    const command = new ConfirmTransitVirtualInterfaceCommand(args);
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
   * <p>Creates a BGP peer on the specified virtual interface.</p>
   *          <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p>
   *          <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot
   *       be in the same address family as an existing BGP peer on the virtual interface.</p>
   *          <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
   *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
   *          <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>
   */
  public createBGPPeer(
    args: CreateBGPPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBGPPeerCommandOutput>;
  public createBGPPeer(
    args: CreateBGPPeerCommandInput,
    cb: (err: any, data?: CreateBGPPeerCommandOutput) => void
  ): void;
  public createBGPPeer(
    args: CreateBGPPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBGPPeerCommandOutput) => void
  ): void;
  public createBGPPeer(
    args: CreateBGPPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBGPPeerCommandOutput) => void),
    cb?: (err: any, data?: CreateBGPPeerCommandOutput) => void
  ): Promise<CreateBGPPeerCommandOutput> | void {
    const command = new CreateBGPPeerCommand(args);
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
   * <p>Creates a connection between a customer network and a specific Direct Connect location.</p>
   *
   *          <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic
   *       cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p>
   *          <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p>
   *          <p>You can automatically add the new connection to a link aggregation group (LAG) by
   *       specifying a LAG ID in the request. This ensures that the new connection is allocated on the
   *       same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint,
   *       the request fails and no connection is created.</p>
   */
  public createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  public createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
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
   * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
   *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
   *       Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that
   *       are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to
   *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
   *       are located, and pass traffic between them.</p>
   */
  public createDirectConnectGateway(
    args: CreateDirectConnectGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectConnectGatewayCommandOutput>;
  public createDirectConnectGateway(
    args: CreateDirectConnectGatewayCommandInput,
    cb: (err: any, data?: CreateDirectConnectGatewayCommandOutput) => void
  ): void;
  public createDirectConnectGateway(
    args: CreateDirectConnectGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectConnectGatewayCommandOutput) => void
  ): void;
  public createDirectConnectGateway(
    args: CreateDirectConnectGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDirectConnectGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateDirectConnectGatewayCommandOutput) => void
  ): Promise<CreateDirectConnectGatewayCommandOutput> | void {
    const command = new CreateDirectConnectGatewayCommand(args);
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
   * <p>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual
   *       private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</p>
   */
  public createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectConnectGatewayAssociationCommandOutput>;
  public createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationCommandInput,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  public createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  public createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void
  ): Promise<CreateDirectConnectGatewayAssociationCommandOutput> | void {
    const command = new CreateDirectConnectGatewayAssociationCommand(args);
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
   * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p>
   *          <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>
   */
  public createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput>;
  public createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalCommandInput,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  public createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  public createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void),
    cb?: (err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput> | void {
    const command = new CreateDirectConnectGatewayAssociationProposalCommand(args);
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
   * <p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p>
   *          <p>An interconnect is a connection that is capable of hosting other connections. The
   *       Direct Connect Partner can use an interconnect to provide Direct Connect hosted
   *       connections to customers through their own network services. Like a standard connection, an
   *       interconnect links the partner's network to an Direct Connect location over a standard Ethernet
   *       fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect
   *       router.</p>
   *          <p>You can automatically add the new interconnect to a link aggregation group (LAG) by
   *       specifying a LAG ID in the request. This ensures that the new interconnect is allocated on
   *       the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the
   *       endpoint, the request fails and no interconnect is created.</p>
   *          <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>.
   *       The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p>
   *          <note>
   *             <p>Intended for use by Direct Connect Partners only.</p>
   *          </note>
   */
  public createInterconnect(
    args: CreateInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInterconnectCommandOutput>;
  public createInterconnect(
    args: CreateInterconnectCommandInput,
    cb: (err: any, data?: CreateInterconnectCommandOutput) => void
  ): void;
  public createInterconnect(
    args: CreateInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInterconnectCommandOutput) => void
  ): void;
  public createInterconnect(
    args: CreateInterconnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInterconnectCommandOutput) => void),
    cb?: (err: any, data?: CreateInterconnectCommandOutput) => void
  ): Promise<CreateInterconnectCommandOutput> | void {
    const command = new CreateInterconnectCommand(args);
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
   * <p>Creates a link aggregation group (LAG) with the specified number of bundled
   *       physical dedicated connections between the customer network and a specific Direct Connect location.
   *       A LAG is a logical interface that uses the Link Aggregation Control Protocol
   *       (LACP) to aggregate multiple interfaces, enabling you to treat them as a single
   *       interface.</p>
   *         <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p>
   *          <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you
   *       request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is
   *       created.</p>
   *          <p>You can specify an existing physical dedicated connection or interconnect to include in
   *       the LAG (which counts towards the total number of connections). Doing so interrupts the
   *       current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG
   *       will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any
   *       virtual interfaces associated with the dedicated connection are automatically disassociated
   *       and re-associated with the LAG. The connection ID does not change.</p>
   *          <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is
   *       automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual
   *       interfaces cannot be directly configured.</p>
   */
  public createLag(args: CreateLagCommandInput, options?: __HttpHandlerOptions): Promise<CreateLagCommandOutput>;
  public createLag(args: CreateLagCommandInput, cb: (err: any, data?: CreateLagCommandOutput) => void): void;
  public createLag(
    args: CreateLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLagCommandOutput) => void
  ): void;
  public createLag(
    args: CreateLagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLagCommandOutput) => void),
    cb?: (err: any, data?: CreateLagCommandOutput) => void
  ): Promise<CreateLagCommandOutput> | void {
    const command = new CreateLagCommand(args);
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
   * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
   *       A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW).
   *       Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple
   *       VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface
   *       to a VGW only provides access to a single VPC within the same Region.</p>
   *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
   *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
   *       the connection disrupts network connectivity for all virtual interfaces associated with
   *       the connection for up to 30 seconds. To check whether your connection supports jumbo
   *       frames, call <a>DescribeConnections</a>. To check whether your virtual
   *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
   */
  public createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrivateVirtualInterfaceCommandOutput>;
  public createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceCommandInput,
    cb: (err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void
  ): void;
  public createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void
  ): void;
  public createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void
  ): Promise<CreatePrivateVirtualInterfaceCommandOutput> | void {
    const command = new CreatePrivateVirtualInterfaceCommand(args);
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
   * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
   *       A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p>
   *          <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code>
   *       and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
   */
  public createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicVirtualInterfaceCommandOutput>;
  public createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceCommandInput,
    cb: (err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void
  ): void;
  public createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void
  ): void;
  public createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void
  ): Promise<CreatePublicVirtualInterfaceCommandOutput> | void {
    const command = new CreatePublicVirtualInterfaceCommand(args);
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
   * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p>
   *          <important>
   *             <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p>
   *          </important>
   *          <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to
   *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
   *       the connection disrupts network connectivity for all virtual interfaces associated with
   *       the connection for up to 30 seconds. To check whether your connection supports jumbo
   *       frames, call <a>DescribeConnections</a>. To check whether your virtual
   *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
   */
  public createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitVirtualInterfaceCommandOutput>;
  public createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceCommandInput,
    cb: (err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void
  ): void;
  public createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void
  ): void;
  public createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void
  ): Promise<CreateTransitVirtualInterfaceCommandOutput> | void {
    const command = new CreateTransitVirtualInterfaceCommand(args);
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
   * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p>
   *          <p>You cannot delete the last BGP peer from a virtual interface.</p>
   */
  public deleteBGPPeer(
    args: DeleteBGPPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBGPPeerCommandOutput>;
  public deleteBGPPeer(
    args: DeleteBGPPeerCommandInput,
    cb: (err: any, data?: DeleteBGPPeerCommandOutput) => void
  ): void;
  public deleteBGPPeer(
    args: DeleteBGPPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBGPPeerCommandOutput) => void
  ): void;
  public deleteBGPPeer(
    args: DeleteBGPPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBGPPeerCommandOutput) => void),
    cb?: (err: any, data?: DeleteBGPPeerCommandOutput) => void
  ): Promise<DeleteBGPPeerCommandOutput> | void {
    const command = new DeleteBGPPeerCommand(args);
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
   * <p>Deletes the specified connection.</p>
   *          <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges.
   *       If you are partnering with any third parties to connect with the Direct Connect location,
   *       you must cancel your service with them separately.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
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
   * <p>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are
   *       attached to the Direct Connect gateway and disassociate all virtual private gateways associated
   *       with the Direct Connect gateway.</p>
   */
  public deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectConnectGatewayCommandOutput>;
  public deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayCommandInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void
  ): void;
  public deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void
  ): void;
  public deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void
  ): Promise<DeleteDirectConnectGatewayCommandOutput> | void {
    const command = new DeleteDirectConnectGatewayCommand(args);
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
   * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p>
   *          <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
   */
  public deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectConnectGatewayAssociationCommandOutput>;
  public deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationCommandInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  public deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  public deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void
  ): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> | void {
    const command = new DeleteDirectConnectGatewayAssociationCommand(args);
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
   * <p>Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.</p>
   */
  public deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput>;
  public deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  public deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): void;
  public deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void),
    cb?: (err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void
  ): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput> | void {
    const command = new DeleteDirectConnectGatewayAssociationProposalCommand(args);
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
   * <p>Deletes the specified interconnect.</p>
   *          <note>
   *             <p>Intended for use
   *         by Direct Connect Partners only.</p>
   *          </note>
   */
  public deleteInterconnect(
    args: DeleteInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInterconnectCommandOutput>;
  public deleteInterconnect(
    args: DeleteInterconnectCommandInput,
    cb: (err: any, data?: DeleteInterconnectCommandOutput) => void
  ): void;
  public deleteInterconnect(
    args: DeleteInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInterconnectCommandOutput) => void
  ): void;
  public deleteInterconnect(
    args: DeleteInterconnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInterconnectCommandOutput) => void),
    cb?: (err: any, data?: DeleteInterconnectCommandOutput) => void
  ): Promise<DeleteInterconnectCommandOutput> | void {
    const command = new DeleteInterconnectCommand(args);
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
   * <p>Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active
   *       virtual interfaces or hosted connections.</p>
   */
  public deleteLag(args: DeleteLagCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLagCommandOutput>;
  public deleteLag(args: DeleteLagCommandInput, cb: (err: any, data?: DeleteLagCommandOutput) => void): void;
  public deleteLag(
    args: DeleteLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLagCommandOutput) => void
  ): void;
  public deleteLag(
    args: DeleteLagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLagCommandOutput) => void),
    cb?: (err: any, data?: DeleteLagCommandOutput) => void
  ): Promise<DeleteLagCommandOutput> | void {
    const command = new DeleteLagCommand(args);
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
   * <p>Deletes a virtual interface.</p>
   */
  public deleteVirtualInterface(
    args: DeleteVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualInterfaceCommandOutput>;
  public deleteVirtualInterface(
    args: DeleteVirtualInterfaceCommandInput,
    cb: (err: any, data?: DeleteVirtualInterfaceCommandOutput) => void
  ): void;
  public deleteVirtualInterface(
    args: DeleteVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualInterfaceCommandOutput) => void
  ): void;
  public deleteVirtualInterface(
    args: DeleteVirtualInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVirtualInterfaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteVirtualInterfaceCommandOutput) => void
  ): Promise<DeleteVirtualInterfaceCommandOutput> | void {
    const command = new DeleteVirtualInterfaceCommand(args);
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
   * @deprecated
   *
   * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
   *          <p>Gets the LOA-CFA for a connection.</p>
   *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or
   *       service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information,
   *       see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects
   *       at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
   */
  public describeConnectionLoa(
    args: DescribeConnectionLoaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionLoaCommandOutput>;
  public describeConnectionLoa(
    args: DescribeConnectionLoaCommandInput,
    cb: (err: any, data?: DescribeConnectionLoaCommandOutput) => void
  ): void;
  public describeConnectionLoa(
    args: DescribeConnectionLoaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionLoaCommandOutput) => void
  ): void;
  public describeConnectionLoa(
    args: DescribeConnectionLoaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectionLoaCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectionLoaCommandOutput) => void
  ): Promise<DescribeConnectionLoaCommandOutput> | void {
    const command = new DescribeConnectionLoaCommand(args);
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
   * <p>Displays the specified connection or all connections in this Region.</p>
   */
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionsCommandOutput>;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): Promise<DescribeConnectionsCommandOutput> | void {
    const command = new DescribeConnectionsCommand(args);
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
   * @deprecated
   *
   * <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p>
   *          <p>Lists the connections that have been provisioned on the specified interconnect.</p>
   *          <note>
   *             <p>Intended for use by Direct Connect Partners only.</p>
   *          </note>
   */
  public describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionsOnInterconnectCommandOutput>;
  public describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectCommandInput,
    cb: (err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void
  ): void;
  public describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void
  ): void;
  public describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void
  ): Promise<DescribeConnectionsOnInterconnectCommandOutput> | void {
    const command = new DescribeConnectionsOnInterconnectCommand(args);
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
   * <p>Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. </p>
   */
  public describeCustomerMetadata(
    args: DescribeCustomerMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomerMetadataCommandOutput>;
  public describeCustomerMetadata(
    args: DescribeCustomerMetadataCommandInput,
    cb: (err: any, data?: DescribeCustomerMetadataCommandOutput) => void
  ): void;
  public describeCustomerMetadata(
    args: DescribeCustomerMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomerMetadataCommandOutput) => void
  ): void;
  public describeCustomerMetadata(
    args: DescribeCustomerMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomerMetadataCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomerMetadataCommandOutput) => void
  ): Promise<DescribeCustomerMetadataCommandOutput> | void {
    const command = new DescribeCustomerMetadataCommand(args);
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
   * <p>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. </p>
   */
  public describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput>;
  public describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void
  ): void;
  public describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void
  ): void;
  public describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> | void {
    const command = new DescribeDirectConnectGatewayAssociationProposalsCommand(args);
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
   * <p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>A Direct Connect gateway</p>
   *                <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p>
   *             </li>
   *             <li>
   *                <p>A virtual private gateway</p>
   *                <p>The response contains the Direct Connect gateway.</p>
   *             </li>
   *             <li>
   *                <p>A transit gateway</p>
   *                <p>The response contains the Direct Connect gateway.</p>
   *             </li>
   *             <li>
   *                <p>A Direct Connect gateway and a virtual private gateway</p>
   *                <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p>
   *             </li>
   *             <li>
   *                <p>A Direct Connect gateway and a transit gateway</p>
   *                <p>The response contains the association between the Direct Connect gateway and transit gateway.</p>
   *             </li>
   *          </ul>
   */
  public describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput>;
  public describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void
  ): void;
  public describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void
  ): void;
  public describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void
  ): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput> | void {
    const command = new DescribeDirectConnectGatewayAssociationsCommand(args);
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
   * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
   *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
   *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
   *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
   *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
   */
  public describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput>;
  public describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void
  ): void;
  public describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void
  ): void;
  public describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void
  ): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput> | void {
    const command = new DescribeDirectConnectGatewayAttachmentsCommand(args);
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
   * <p>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</p>
   */
  public describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectConnectGatewaysCommandOutput>;
  public describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysCommandInput,
    cb: (err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void
  ): void;
  public describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void
  ): void;
  public describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void
  ): Promise<DescribeDirectConnectGatewaysCommandOutput> | void {
    const command = new DescribeDirectConnectGatewaysCommand(args);
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
   * <p>Lists the hosted connections that have been provisioned on the specified
   *       interconnect or link aggregation group (LAG).</p>
   *          <note>
   *             <p>Intended for use by Direct Connect Partners only.</p>
   *          </note>
   */
  public describeHostedConnections(
    args: DescribeHostedConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostedConnectionsCommandOutput>;
  public describeHostedConnections(
    args: DescribeHostedConnectionsCommandInput,
    cb: (err: any, data?: DescribeHostedConnectionsCommandOutput) => void
  ): void;
  public describeHostedConnections(
    args: DescribeHostedConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostedConnectionsCommandOutput) => void
  ): void;
  public describeHostedConnections(
    args: DescribeHostedConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHostedConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeHostedConnectionsCommandOutput) => void
  ): Promise<DescribeHostedConnectionsCommandOutput> | void {
    const command = new DescribeHostedConnectionsCommand(args);
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
   * @deprecated
   *
   * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
   *          <p>Gets the LOA-CFA for the specified interconnect.</p>
   *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility.
   *       For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a>
   *       in the <i>Direct Connect User Guide</i>.</p>
   */
  public describeInterconnectLoa(
    args: DescribeInterconnectLoaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInterconnectLoaCommandOutput>;
  public describeInterconnectLoa(
    args: DescribeInterconnectLoaCommandInput,
    cb: (err: any, data?: DescribeInterconnectLoaCommandOutput) => void
  ): void;
  public describeInterconnectLoa(
    args: DescribeInterconnectLoaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInterconnectLoaCommandOutput) => void
  ): void;
  public describeInterconnectLoa(
    args: DescribeInterconnectLoaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInterconnectLoaCommandOutput) => void),
    cb?: (err: any, data?: DescribeInterconnectLoaCommandOutput) => void
  ): Promise<DescribeInterconnectLoaCommandOutput> | void {
    const command = new DescribeInterconnectLoaCommand(args);
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
   * <p>Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.</p>
   */
  public describeInterconnects(
    args: DescribeInterconnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInterconnectsCommandOutput>;
  public describeInterconnects(
    args: DescribeInterconnectsCommandInput,
    cb: (err: any, data?: DescribeInterconnectsCommandOutput) => void
  ): void;
  public describeInterconnects(
    args: DescribeInterconnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInterconnectsCommandOutput) => void
  ): void;
  public describeInterconnects(
    args: DescribeInterconnectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInterconnectsCommandOutput) => void),
    cb?: (err: any, data?: DescribeInterconnectsCommandOutput) => void
  ): Promise<DescribeInterconnectsCommandOutput> | void {
    const command = new DescribeInterconnectsCommand(args);
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
   * <p>Describes all your link aggregation groups (LAG) or the specified LAG.</p>
   */
  public describeLags(
    args: DescribeLagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLagsCommandOutput>;
  public describeLags(args: DescribeLagsCommandInput, cb: (err: any, data?: DescribeLagsCommandOutput) => void): void;
  public describeLags(
    args: DescribeLagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLagsCommandOutput) => void
  ): void;
  public describeLags(
    args: DescribeLagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLagsCommandOutput) => void
  ): Promise<DescribeLagsCommandOutput> | void {
    const command = new DescribeLagsCommand(args);
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
   * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p>
   *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing
   *       your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a>
   *       in the <i>Direct Connect User Guide</i>.</p>
   */
  public describeLoa(args: DescribeLoaCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoaCommandOutput>;
  public describeLoa(args: DescribeLoaCommandInput, cb: (err: any, data?: DescribeLoaCommandOutput) => void): void;
  public describeLoa(
    args: DescribeLoaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoaCommandOutput) => void
  ): void;
  public describeLoa(
    args: DescribeLoaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoaCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoaCommandOutput) => void
  ): Promise<DescribeLoaCommandOutput> | void {
    const command = new DescribeLoaCommand(args);
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
   * <p>Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling
   *       <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>
   */
  public describeLocations(
    args: DescribeLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationsCommandOutput>;
  public describeLocations(
    args: DescribeLocationsCommandInput,
    cb: (err: any, data?: DescribeLocationsCommandOutput) => void
  ): void;
  public describeLocations(
    args: DescribeLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationsCommandOutput) => void
  ): void;
  public describeLocations(
    args: DescribeLocationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocationsCommandOutput) => void
  ): Promise<DescribeLocationsCommandOutput> | void {
    const command = new DescribeLocationsCommand(args);
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
   * <p>
   *       Details about the router.
   *     </p>
   */
  public describeRouterConfiguration(
    args: DescribeRouterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouterConfigurationCommandOutput>;
  public describeRouterConfiguration(
    args: DescribeRouterConfigurationCommandInput,
    cb: (err: any, data?: DescribeRouterConfigurationCommandOutput) => void
  ): void;
  public describeRouterConfiguration(
    args: DescribeRouterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouterConfigurationCommandOutput) => void
  ): void;
  public describeRouterConfiguration(
    args: DescribeRouterConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRouterConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeRouterConfigurationCommandOutput) => void
  ): Promise<DescribeRouterConfigurationCommandOutput> | void {
    const command = new DescribeRouterConfigurationCommand(args);
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
   * <p>Describes the tags associated with the specified Direct Connect resources.</p>
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
   * <p>Lists the virtual private gateways owned by the Amazon Web Services account.</p>
   *          <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
   */
  public describeVirtualGateways(
    args: DescribeVirtualGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualGatewaysCommandOutput>;
  public describeVirtualGateways(
    args: DescribeVirtualGatewaysCommandInput,
    cb: (err: any, data?: DescribeVirtualGatewaysCommandOutput) => void
  ): void;
  public describeVirtualGateways(
    args: DescribeVirtualGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualGatewaysCommandOutput) => void
  ): void;
  public describeVirtualGateways(
    args: DescribeVirtualGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVirtualGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeVirtualGatewaysCommandOutput) => void
  ): Promise<DescribeVirtualGatewaysCommandOutput> | void {
    const command = new DescribeVirtualGatewaysCommand(args);
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
   * <p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer
   *       than 15 minutes before you make the request are also returned. If you specify a
   *       connection ID, only the virtual interfaces associated with the connection are returned.
   *       If you specify a virtual interface ID, then only a single virtual interface is returned.</p>
   *          <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>
   */
  public describeVirtualInterfaces(
    args: DescribeVirtualInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVirtualInterfacesCommandOutput>;
  public describeVirtualInterfaces(
    args: DescribeVirtualInterfacesCommandInput,
    cb: (err: any, data?: DescribeVirtualInterfacesCommandOutput) => void
  ): void;
  public describeVirtualInterfaces(
    args: DescribeVirtualInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVirtualInterfacesCommandOutput) => void
  ): void;
  public describeVirtualInterfaces(
    args: DescribeVirtualInterfacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVirtualInterfacesCommandOutput) => void),
    cb?: (err: any, data?: DescribeVirtualInterfacesCommandOutput) => void
  ): Promise<DescribeVirtualInterfacesCommandOutput> | void {
    const command = new DescribeVirtualInterfacesCommand(args);
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
   * <p>Disassociates a connection from a link aggregation group (LAG). The connection is
   *       interrupted and re-established as a standalone connection (the connection is not
   *       deleted; to delete the connection, use the <a>DeleteConnection</a> request).
   *       If the LAG has associated virtual interfaces or hosted connections, they remain
   *       associated with the LAG. A disassociated connection owned by an Direct Connect Partner is
   *       automatically converted to an interconnect.</p>
   *          <p>If disassociating the connection would cause the LAG to fall below its setting for
   *       minimum number of operational connections, the request fails, except when it's the last
   *       member of the LAG. If all connections are disassociated, the LAG continues to exist as
   *       an empty LAG with no physical connections. </p>
   */
  public disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConnectionFromLagCommandOutput>;
  public disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagCommandInput,
    cb: (err: any, data?: DisassociateConnectionFromLagCommandOutput) => void
  ): void;
  public disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConnectionFromLagCommandOutput) => void
  ): void;
  public disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateConnectionFromLagCommandOutput) => void),
    cb?: (err: any, data?: DisassociateConnectionFromLagCommandOutput) => void
  ): Promise<DisassociateConnectionFromLagCommandOutput> | void {
    const command = new DisassociateConnectionFromLagCommand(args);
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
   * <p>Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.</p>
   */
  public disassociateMacSecKey(
    args: DisassociateMacSecKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMacSecKeyCommandOutput>;
  public disassociateMacSecKey(
    args: DisassociateMacSecKeyCommandInput,
    cb: (err: any, data?: DisassociateMacSecKeyCommandOutput) => void
  ): void;
  public disassociateMacSecKey(
    args: DisassociateMacSecKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMacSecKeyCommandOutput) => void
  ): void;
  public disassociateMacSecKey(
    args: DisassociateMacSecKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMacSecKeyCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMacSecKeyCommandOutput) => void
  ): Promise<DisassociateMacSecKeyCommandOutput> | void {
    const command = new DisassociateMacSecKeyCommand(args);
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
   * <p>Lists the virtual interface failover test history.</p>
   */
  public listVirtualInterfaceTestHistory(
    args: ListVirtualInterfaceTestHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualInterfaceTestHistoryCommandOutput>;
  public listVirtualInterfaceTestHistory(
    args: ListVirtualInterfaceTestHistoryCommandInput,
    cb: (err: any, data?: ListVirtualInterfaceTestHistoryCommandOutput) => void
  ): void;
  public listVirtualInterfaceTestHistory(
    args: ListVirtualInterfaceTestHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualInterfaceTestHistoryCommandOutput) => void
  ): void;
  public listVirtualInterfaceTestHistory(
    args: ListVirtualInterfaceTestHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualInterfaceTestHistoryCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualInterfaceTestHistoryCommandOutput) => void
  ): Promise<ListVirtualInterfaceTestHistoryCommandOutput> | void {
    const command = new ListVirtualInterfaceTestHistoryCommand(args);
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
   * <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p>
   *          <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p>
   *          <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p>
   *          <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
   */
  public startBgpFailoverTest(
    args: StartBgpFailoverTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBgpFailoverTestCommandOutput>;
  public startBgpFailoverTest(
    args: StartBgpFailoverTestCommandInput,
    cb: (err: any, data?: StartBgpFailoverTestCommandOutput) => void
  ): void;
  public startBgpFailoverTest(
    args: StartBgpFailoverTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBgpFailoverTestCommandOutput) => void
  ): void;
  public startBgpFailoverTest(
    args: StartBgpFailoverTestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBgpFailoverTestCommandOutput) => void),
    cb?: (err: any, data?: StartBgpFailoverTestCommandOutput) => void
  ): Promise<StartBgpFailoverTestCommandOutput> | void {
    const command = new StartBgpFailoverTestCommand(args);
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
   * <p>Stops the virtual interface failover test.</p>
   */
  public stopBgpFailoverTest(
    args: StopBgpFailoverTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBgpFailoverTestCommandOutput>;
  public stopBgpFailoverTest(
    args: StopBgpFailoverTestCommandInput,
    cb: (err: any, data?: StopBgpFailoverTestCommandOutput) => void
  ): void;
  public stopBgpFailoverTest(
    args: StopBgpFailoverTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBgpFailoverTestCommandOutput) => void
  ): void;
  public stopBgpFailoverTest(
    args: StopBgpFailoverTestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopBgpFailoverTestCommandOutput) => void),
    cb?: (err: any, data?: StopBgpFailoverTestCommandOutput) => void
  ): Promise<StopBgpFailoverTestCommandOutput> | void {
    const command = new StopBgpFailoverTestCommand(args);
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
   * <p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p>
   *          <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
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
   * <p>Removes one or more tags from the specified Direct Connect resource.</p>
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
   * <p>Updates the Direct Connect dedicated connection configuration.</p>
   *          <p>You can update the following parameters for a connection:</p>
   *          <ul>
   *             <li>
   *                <p>The connection name</p>
   *             </li>
   *             <li>
   *                <p>The connection's MAC Security (MACsec) encryption mode.</p>
   *             </li>
   *          </ul>
   */
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): Promise<UpdateConnectionCommandOutput> | void {
    const command = new UpdateConnectionCommand(args);
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
   * <p>Updates the name of a current Direct Connect gateway.</p>
   */
  public updateDirectConnectGateway(
    args: UpdateDirectConnectGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectConnectGatewayCommandOutput>;
  public updateDirectConnectGateway(
    args: UpdateDirectConnectGatewayCommandInput,
    cb: (err: any, data?: UpdateDirectConnectGatewayCommandOutput) => void
  ): void;
  public updateDirectConnectGateway(
    args: UpdateDirectConnectGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectConnectGatewayCommandOutput) => void
  ): void;
  public updateDirectConnectGateway(
    args: UpdateDirectConnectGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDirectConnectGatewayCommandOutput) => void),
    cb?: (err: any, data?: UpdateDirectConnectGatewayCommandOutput) => void
  ): Promise<UpdateDirectConnectGatewayCommandOutput> | void {
    const command = new UpdateDirectConnectGatewayCommand(args);
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
   * <p>Updates the specified attributes of the Direct Connect gateway association.</p>
   *          <p>Add or remove prefixes from the association.</p>
   */
  public updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectConnectGatewayAssociationCommandOutput>;
  public updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationCommandInput,
    cb: (err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  public updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void
  ): void;
  public updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void
  ): Promise<UpdateDirectConnectGatewayAssociationCommandOutput> | void {
    const command = new UpdateDirectConnectGatewayAssociationCommand(args);
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
   * <p>Updates the attributes of the specified link aggregation group (LAG).</p>
   *          <p>You can update the following LAG attributes:</p>
   *          <ul>
   *             <li>
   *                <p>The name of the LAG.</p>
   *             </li>
   *             <li>
   *                <p>The value for the minimum number of connections that must be operational
   *           for the LAG itself to be operational. </p>
   *             </li>
   *             <li>
   *                <p>The LAG's MACsec encryption mode.</p>
   *                <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p>
   *             </li>
   *             <li>
   *                <p>The tags</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If you adjust the threshold value for the minimum number of operational connections, ensure
   *       that the new value does not cause the LAG to fall below the threshold and become
   *       non-operational.</p>
   *          </note>
   */
  public updateLag(args: UpdateLagCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLagCommandOutput>;
  public updateLag(args: UpdateLagCommandInput, cb: (err: any, data?: UpdateLagCommandOutput) => void): void;
  public updateLag(
    args: UpdateLagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLagCommandOutput) => void
  ): void;
  public updateLag(
    args: UpdateLagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLagCommandOutput) => void),
    cb?: (err: any, data?: UpdateLagCommandOutput) => void
  ): Promise<UpdateLagCommandOutput> | void {
    const command = new UpdateLagCommand(args);
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
   * <p>Updates the specified attributes of the specified virtual private interface.</p>
   *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
   *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
   *       the connection disrupts network connectivity for all virtual interfaces associated with
   *       the connection for up to 30 seconds. To check whether your connection supports jumbo
   *       frames, call <a>DescribeConnections</a>. To check whether your virtual q
   *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
   */
  public updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVirtualInterfaceAttributesCommandOutput>;
  public updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesCommandInput,
    cb: (err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void
  ): void;
  public updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void
  ): void;
  public updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void
  ): Promise<UpdateVirtualInterfaceAttributesCommandOutput> | void {
    const command = new UpdateVirtualInterfaceAttributesCommand(args);
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
