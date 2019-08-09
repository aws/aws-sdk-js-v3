import { DirectConnectClient } from "./DirectConnectClient";
import { AcceptDirectConnectGatewayAssociationProposalInput } from "./types/AcceptDirectConnectGatewayAssociationProposalInput";
import { AcceptDirectConnectGatewayAssociationProposalOutput } from "./types/AcceptDirectConnectGatewayAssociationProposalOutput";
import { AllocateConnectionOnInterconnectInput } from "./types/AllocateConnectionOnInterconnectInput";
import { AllocateConnectionOnInterconnectOutput } from "./types/AllocateConnectionOnInterconnectOutput";
import { AllocateHostedConnectionInput } from "./types/AllocateHostedConnectionInput";
import { AllocateHostedConnectionOutput } from "./types/AllocateHostedConnectionOutput";
import { AllocatePrivateVirtualInterfaceInput } from "./types/AllocatePrivateVirtualInterfaceInput";
import { AllocatePrivateVirtualInterfaceOutput } from "./types/AllocatePrivateVirtualInterfaceOutput";
import { AllocatePublicVirtualInterfaceInput } from "./types/AllocatePublicVirtualInterfaceInput";
import { AllocatePublicVirtualInterfaceOutput } from "./types/AllocatePublicVirtualInterfaceOutput";
import { AllocateTransitVirtualInterfaceInput } from "./types/AllocateTransitVirtualInterfaceInput";
import { AllocateTransitVirtualInterfaceOutput } from "./types/AllocateTransitVirtualInterfaceOutput";
import { AssociateConnectionWithLagInput } from "./types/AssociateConnectionWithLagInput";
import { AssociateConnectionWithLagOutput } from "./types/AssociateConnectionWithLagOutput";
import { AssociateHostedConnectionInput } from "./types/AssociateHostedConnectionInput";
import { AssociateHostedConnectionOutput } from "./types/AssociateHostedConnectionOutput";
import { AssociateVirtualInterfaceInput } from "./types/AssociateVirtualInterfaceInput";
import { AssociateVirtualInterfaceOutput } from "./types/AssociateVirtualInterfaceOutput";
import { ConfirmConnectionInput } from "./types/ConfirmConnectionInput";
import { ConfirmConnectionOutput } from "./types/ConfirmConnectionOutput";
import { ConfirmPrivateVirtualInterfaceInput } from "./types/ConfirmPrivateVirtualInterfaceInput";
import { ConfirmPrivateVirtualInterfaceOutput } from "./types/ConfirmPrivateVirtualInterfaceOutput";
import { ConfirmPublicVirtualInterfaceInput } from "./types/ConfirmPublicVirtualInterfaceInput";
import { ConfirmPublicVirtualInterfaceOutput } from "./types/ConfirmPublicVirtualInterfaceOutput";
import { ConfirmTransitVirtualInterfaceInput } from "./types/ConfirmTransitVirtualInterfaceInput";
import { ConfirmTransitVirtualInterfaceOutput } from "./types/ConfirmTransitVirtualInterfaceOutput";
import { CreateBGPPeerInput } from "./types/CreateBGPPeerInput";
import { CreateBGPPeerOutput } from "./types/CreateBGPPeerOutput";
import { CreateConnectionInput } from "./types/CreateConnectionInput";
import { CreateConnectionOutput } from "./types/CreateConnectionOutput";
import { CreateDirectConnectGatewayAssociationInput } from "./types/CreateDirectConnectGatewayAssociationInput";
import { CreateDirectConnectGatewayAssociationOutput } from "./types/CreateDirectConnectGatewayAssociationOutput";
import { CreateDirectConnectGatewayAssociationProposalInput } from "./types/CreateDirectConnectGatewayAssociationProposalInput";
import { CreateDirectConnectGatewayAssociationProposalOutput } from "./types/CreateDirectConnectGatewayAssociationProposalOutput";
import { CreateDirectConnectGatewayInput } from "./types/CreateDirectConnectGatewayInput";
import { CreateDirectConnectGatewayOutput } from "./types/CreateDirectConnectGatewayOutput";
import { CreateInterconnectInput } from "./types/CreateInterconnectInput";
import { CreateInterconnectOutput } from "./types/CreateInterconnectOutput";
import { CreateLagInput } from "./types/CreateLagInput";
import { CreateLagOutput } from "./types/CreateLagOutput";
import { CreatePrivateVirtualInterfaceInput } from "./types/CreatePrivateVirtualInterfaceInput";
import { CreatePrivateVirtualInterfaceOutput } from "./types/CreatePrivateVirtualInterfaceOutput";
import { CreatePublicVirtualInterfaceInput } from "./types/CreatePublicVirtualInterfaceInput";
import { CreatePublicVirtualInterfaceOutput } from "./types/CreatePublicVirtualInterfaceOutput";
import { CreateTransitVirtualInterfaceInput } from "./types/CreateTransitVirtualInterfaceInput";
import { CreateTransitVirtualInterfaceOutput } from "./types/CreateTransitVirtualInterfaceOutput";
import { DeleteBGPPeerInput } from "./types/DeleteBGPPeerInput";
import { DeleteBGPPeerOutput } from "./types/DeleteBGPPeerOutput";
import { DeleteConnectionInput } from "./types/DeleteConnectionInput";
import { DeleteConnectionOutput } from "./types/DeleteConnectionOutput";
import { DeleteDirectConnectGatewayAssociationInput } from "./types/DeleteDirectConnectGatewayAssociationInput";
import { DeleteDirectConnectGatewayAssociationOutput } from "./types/DeleteDirectConnectGatewayAssociationOutput";
import { DeleteDirectConnectGatewayAssociationProposalInput } from "./types/DeleteDirectConnectGatewayAssociationProposalInput";
import { DeleteDirectConnectGatewayAssociationProposalOutput } from "./types/DeleteDirectConnectGatewayAssociationProposalOutput";
import { DeleteDirectConnectGatewayInput } from "./types/DeleteDirectConnectGatewayInput";
import { DeleteDirectConnectGatewayOutput } from "./types/DeleteDirectConnectGatewayOutput";
import { DeleteInterconnectInput } from "./types/DeleteInterconnectInput";
import { DeleteInterconnectOutput } from "./types/DeleteInterconnectOutput";
import { DeleteLagInput } from "./types/DeleteLagInput";
import { DeleteLagOutput } from "./types/DeleteLagOutput";
import { DeleteVirtualInterfaceInput } from "./types/DeleteVirtualInterfaceInput";
import { DeleteVirtualInterfaceOutput } from "./types/DeleteVirtualInterfaceOutput";
import { DescribeConnectionLoaInput } from "./types/DescribeConnectionLoaInput";
import { DescribeConnectionLoaOutput } from "./types/DescribeConnectionLoaOutput";
import { DescribeConnectionsInput } from "./types/DescribeConnectionsInput";
import { DescribeConnectionsOnInterconnectInput } from "./types/DescribeConnectionsOnInterconnectInput";
import { DescribeConnectionsOnInterconnectOutput } from "./types/DescribeConnectionsOnInterconnectOutput";
import { DescribeConnectionsOutput } from "./types/DescribeConnectionsOutput";
import { DescribeDirectConnectGatewayAssociationProposalsInput } from "./types/DescribeDirectConnectGatewayAssociationProposalsInput";
import { DescribeDirectConnectGatewayAssociationProposalsOutput } from "./types/DescribeDirectConnectGatewayAssociationProposalsOutput";
import { DescribeDirectConnectGatewayAssociationsInput } from "./types/DescribeDirectConnectGatewayAssociationsInput";
import { DescribeDirectConnectGatewayAssociationsOutput } from "./types/DescribeDirectConnectGatewayAssociationsOutput";
import { DescribeDirectConnectGatewayAttachmentsInput } from "./types/DescribeDirectConnectGatewayAttachmentsInput";
import { DescribeDirectConnectGatewayAttachmentsOutput } from "./types/DescribeDirectConnectGatewayAttachmentsOutput";
import { DescribeDirectConnectGatewaysInput } from "./types/DescribeDirectConnectGatewaysInput";
import { DescribeDirectConnectGatewaysOutput } from "./types/DescribeDirectConnectGatewaysOutput";
import { DescribeHostedConnectionsInput } from "./types/DescribeHostedConnectionsInput";
import { DescribeHostedConnectionsOutput } from "./types/DescribeHostedConnectionsOutput";
import { DescribeInterconnectLoaInput } from "./types/DescribeInterconnectLoaInput";
import { DescribeInterconnectLoaOutput } from "./types/DescribeInterconnectLoaOutput";
import { DescribeInterconnectsInput } from "./types/DescribeInterconnectsInput";
import { DescribeInterconnectsOutput } from "./types/DescribeInterconnectsOutput";
import { DescribeLagsInput } from "./types/DescribeLagsInput";
import { DescribeLagsOutput } from "./types/DescribeLagsOutput";
import { DescribeLoaInput } from "./types/DescribeLoaInput";
import { DescribeLoaOutput } from "./types/DescribeLoaOutput";
import { DescribeLocationsInput } from "./types/DescribeLocationsInput";
import { DescribeLocationsOutput } from "./types/DescribeLocationsOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DescribeVirtualGatewaysInput } from "./types/DescribeVirtualGatewaysInput";
import { DescribeVirtualGatewaysOutput } from "./types/DescribeVirtualGatewaysOutput";
import { DescribeVirtualInterfacesInput } from "./types/DescribeVirtualInterfacesInput";
import { DescribeVirtualInterfacesOutput } from "./types/DescribeVirtualInterfacesOutput";
import { DirectConnectClientException } from "./types/DirectConnectClientException";
import { DirectConnectServerException } from "./types/DirectConnectServerException";
import { DisassociateConnectionFromLagInput } from "./types/DisassociateConnectionFromLagInput";
import { DisassociateConnectionFromLagOutput } from "./types/DisassociateConnectionFromLagOutput";
import { DuplicateTagKeysException } from "./types/DuplicateTagKeysException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateDirectConnectGatewayAssociationInput } from "./types/UpdateDirectConnectGatewayAssociationInput";
import { UpdateDirectConnectGatewayAssociationOutput } from "./types/UpdateDirectConnectGatewayAssociationOutput";
import { UpdateLagInput } from "./types/UpdateLagInput";
import { UpdateLagOutput } from "./types/UpdateLagOutput";
import { UpdateVirtualInterfaceAttributesInput } from "./types/UpdateVirtualInterfaceAttributesInput";
import { UpdateVirtualInterfaceAttributesOutput } from "./types/UpdateVirtualInterfaceAttributesOutput";
import { AcceptDirectConnectGatewayAssociationProposalCommand } from "./commands/AcceptDirectConnectGatewayAssociationProposalCommand";
import { AllocateConnectionOnInterconnectCommand } from "./commands/AllocateConnectionOnInterconnectCommand";
import { AllocateHostedConnectionCommand } from "./commands/AllocateHostedConnectionCommand";
import { AllocatePrivateVirtualInterfaceCommand } from "./commands/AllocatePrivateVirtualInterfaceCommand";
import { AllocatePublicVirtualInterfaceCommand } from "./commands/AllocatePublicVirtualInterfaceCommand";
import { AllocateTransitVirtualInterfaceCommand } from "./commands/AllocateTransitVirtualInterfaceCommand";
import { AssociateConnectionWithLagCommand } from "./commands/AssociateConnectionWithLagCommand";
import { AssociateHostedConnectionCommand } from "./commands/AssociateHostedConnectionCommand";
import { AssociateVirtualInterfaceCommand } from "./commands/AssociateVirtualInterfaceCommand";
import { ConfirmConnectionCommand } from "./commands/ConfirmConnectionCommand";
import { ConfirmPrivateVirtualInterfaceCommand } from "./commands/ConfirmPrivateVirtualInterfaceCommand";
import { ConfirmPublicVirtualInterfaceCommand } from "./commands/ConfirmPublicVirtualInterfaceCommand";
import { ConfirmTransitVirtualInterfaceCommand } from "./commands/ConfirmTransitVirtualInterfaceCommand";
import { CreateBGPPeerCommand } from "./commands/CreateBGPPeerCommand";
import { CreateConnectionCommand } from "./commands/CreateConnectionCommand";
import { CreateDirectConnectGatewayAssociationCommand } from "./commands/CreateDirectConnectGatewayAssociationCommand";
import { CreateDirectConnectGatewayAssociationProposalCommand } from "./commands/CreateDirectConnectGatewayAssociationProposalCommand";
import { CreateDirectConnectGatewayCommand } from "./commands/CreateDirectConnectGatewayCommand";
import { CreateInterconnectCommand } from "./commands/CreateInterconnectCommand";
import { CreateLagCommand } from "./commands/CreateLagCommand";
import { CreatePrivateVirtualInterfaceCommand } from "./commands/CreatePrivateVirtualInterfaceCommand";
import { CreatePublicVirtualInterfaceCommand } from "./commands/CreatePublicVirtualInterfaceCommand";
import { CreateTransitVirtualInterfaceCommand } from "./commands/CreateTransitVirtualInterfaceCommand";
import { DeleteBGPPeerCommand } from "./commands/DeleteBGPPeerCommand";
import { DeleteConnectionCommand } from "./commands/DeleteConnectionCommand";
import { DeleteDirectConnectGatewayAssociationCommand } from "./commands/DeleteDirectConnectGatewayAssociationCommand";
import { DeleteDirectConnectGatewayAssociationProposalCommand } from "./commands/DeleteDirectConnectGatewayAssociationProposalCommand";
import { DeleteDirectConnectGatewayCommand } from "./commands/DeleteDirectConnectGatewayCommand";
import { DeleteInterconnectCommand } from "./commands/DeleteInterconnectCommand";
import { DeleteLagCommand } from "./commands/DeleteLagCommand";
import { DeleteVirtualInterfaceCommand } from "./commands/DeleteVirtualInterfaceCommand";
import { DescribeConnectionLoaCommand } from "./commands/DescribeConnectionLoaCommand";
import { DescribeConnectionsCommand } from "./commands/DescribeConnectionsCommand";
import { DescribeConnectionsOnInterconnectCommand } from "./commands/DescribeConnectionsOnInterconnectCommand";
import { DescribeDirectConnectGatewayAssociationProposalsCommand } from "./commands/DescribeDirectConnectGatewayAssociationProposalsCommand";
import { DescribeDirectConnectGatewayAssociationsCommand } from "./commands/DescribeDirectConnectGatewayAssociationsCommand";
import { DescribeDirectConnectGatewayAttachmentsCommand } from "./commands/DescribeDirectConnectGatewayAttachmentsCommand";
import { DescribeDirectConnectGatewaysCommand } from "./commands/DescribeDirectConnectGatewaysCommand";
import { DescribeHostedConnectionsCommand } from "./commands/DescribeHostedConnectionsCommand";
import { DescribeInterconnectLoaCommand } from "./commands/DescribeInterconnectLoaCommand";
import { DescribeInterconnectsCommand } from "./commands/DescribeInterconnectsCommand";
import { DescribeLagsCommand } from "./commands/DescribeLagsCommand";
import { DescribeLoaCommand } from "./commands/DescribeLoaCommand";
import { DescribeLocationsCommand } from "./commands/DescribeLocationsCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DescribeVirtualGatewaysCommand } from "./commands/DescribeVirtualGatewaysCommand";
import { DescribeVirtualInterfacesCommand } from "./commands/DescribeVirtualInterfacesCommand";
import { DisassociateConnectionFromLagCommand } from "./commands/DisassociateConnectionFromLagCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDirectConnectGatewayAssociationCommand } from "./commands/UpdateDirectConnectGatewayAssociationCommand";
import { UpdateLagCommand } from "./commands/UpdateLagCommand";
import { UpdateVirtualInterfaceAttributesCommand } from "./commands/UpdateVirtualInterfaceAttributesCommand";

export class DirectConnect extends DirectConnectClient {
  /**
   * <p>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalInput
  ): Promise<AcceptDirectConnectGatewayAssociationProposalOutput>;
  public acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalInput,
    cb: (
      err: any,
      data?: AcceptDirectConnectGatewayAssociationProposalOutput
    ) => void
  ): void;
  public acceptDirectConnectGatewayAssociationProposal(
    args: AcceptDirectConnectGatewayAssociationProposalInput,
    cb?: (
      err: any,
      data?: AcceptDirectConnectGatewayAssociationProposalOutput
    ) => void
  ): Promise<AcceptDirectConnectGatewayAssociationProposalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptDirectConnectGatewayAssociationProposalCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectInput
  ): Promise<AllocateConnectionOnInterconnectOutput>;
  public allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectInput,
    cb: (err: any, data?: AllocateConnectionOnInterconnectOutput) => void
  ): void;
  public allocateConnectionOnInterconnect(
    args: AllocateConnectionOnInterconnectInput,
    cb?: (err: any, data?: AllocateConnectionOnInterconnectOutput) => void
  ): Promise<AllocateConnectionOnInterconnectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocateConnectionOnInterconnectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. AWS polices the hosted connection for the specified capacity and the AWS Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocateHostedConnection(
    args: AllocateHostedConnectionInput
  ): Promise<AllocateHostedConnectionOutput>;
  public allocateHostedConnection(
    args: AllocateHostedConnectionInput,
    cb: (err: any, data?: AllocateHostedConnectionOutput) => void
  ): void;
  public allocateHostedConnection(
    args: AllocateHostedConnectionInput,
    cb?: (err: any, data?: AllocateHostedConnectionOutput) => void
  ): Promise<AllocateHostedConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocateHostedConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provisions a private virtual interface to be owned by the specified AWS account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceInput
  ): Promise<AllocatePrivateVirtualInterfaceOutput>;
  public allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceInput,
    cb: (err: any, data?: AllocatePrivateVirtualInterfaceOutput) => void
  ): void;
  public allocatePrivateVirtualInterface(
    args: AllocatePrivateVirtualInterfaceInput,
    cb?: (err: any, data?: AllocatePrivateVirtualInterfaceOutput) => void
  ): Promise<AllocatePrivateVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocatePrivateVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provisions a public virtual interface to be owned by the specified AWS account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceInput
  ): Promise<AllocatePublicVirtualInterfaceOutput>;
  public allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceInput,
    cb: (err: any, data?: AllocatePublicVirtualInterfaceOutput) => void
  ): void;
  public allocatePublicVirtualInterface(
    args: AllocatePublicVirtualInterfaceInput,
    cb?: (err: any, data?: AllocatePublicVirtualInterfaceOutput) => void
  ): Promise<AllocatePublicVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocatePublicVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provisions a transit virtual interface to be owned by the specified AWS account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified AWS account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceInput
  ): Promise<AllocateTransitVirtualInterfaceOutput>;
  public allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceInput,
    cb: (err: any, data?: AllocateTransitVirtualInterfaceOutput) => void
  ): void;
  public allocateTransitVirtualInterface(
    args: AllocateTransitVirtualInterfaceInput,
    cb?: (err: any, data?: AllocateTransitVirtualInterfaceOutput) => void
  ): Promise<AllocateTransitVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocateTransitVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS is interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateConnectionWithLag(
    args: AssociateConnectionWithLagInput
  ): Promise<AssociateConnectionWithLagOutput>;
  public associateConnectionWithLag(
    args: AssociateConnectionWithLagInput,
    cb: (err: any, data?: AssociateConnectionWithLagOutput) => void
  ): void;
  public associateConnectionWithLag(
    args: AssociateConnectionWithLagInput,
    cb?: (err: any, data?: AssociateConnectionWithLagOutput) => void
  ): Promise<AssociateConnectionWithLagOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateConnectionWithLagCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateHostedConnection(
    args: AssociateHostedConnectionInput
  ): Promise<AssociateHostedConnectionOutput>;
  public associateHostedConnection(
    args: AssociateHostedConnectionInput,
    cb: (err: any, data?: AssociateHostedConnectionOutput) => void
  ): void;
  public associateHostedConnection(
    args: AssociateHostedConnectionInput,
    cb?: (err: any, data?: AssociateHostedConnectionOutput) => void
  ): Promise<AssociateHostedConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateHostedConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateVirtualInterface(
    args: AssociateVirtualInterfaceInput
  ): Promise<AssociateVirtualInterfaceOutput>;
  public associateVirtualInterface(
    args: AssociateVirtualInterfaceInput,
    cb: (err: any, data?: AssociateVirtualInterfaceOutput) => void
  ): void;
  public associateVirtualInterface(
    args: AssociateVirtualInterfaceInput,
    cb?: (err: any, data?: AssociateVirtualInterfaceOutput) => void
  ): Promise<AssociateVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmConnection(
    args: ConfirmConnectionInput
  ): Promise<ConfirmConnectionOutput>;
  public confirmConnection(
    args: ConfirmConnectionInput,
    cb: (err: any, data?: ConfirmConnectionOutput) => void
  ): void;
  public confirmConnection(
    args: ConfirmConnectionInput,
    cb?: (err: any, data?: ConfirmConnectionOutput) => void
  ): Promise<ConfirmConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts ownership of a private virtual interface created by another AWS account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceInput
  ): Promise<ConfirmPrivateVirtualInterfaceOutput>;
  public confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceInput,
    cb: (err: any, data?: ConfirmPrivateVirtualInterfaceOutput) => void
  ): void;
  public confirmPrivateVirtualInterface(
    args: ConfirmPrivateVirtualInterfaceInput,
    cb?: (err: any, data?: ConfirmPrivateVirtualInterfaceOutput) => void
  ): Promise<ConfirmPrivateVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmPrivateVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts ownership of a public virtual interface created by another AWS account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceInput
  ): Promise<ConfirmPublicVirtualInterfaceOutput>;
  public confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceInput,
    cb: (err: any, data?: ConfirmPublicVirtualInterfaceOutput) => void
  ): void;
  public confirmPublicVirtualInterface(
    args: ConfirmPublicVirtualInterfaceInput,
    cb?: (err: any, data?: ConfirmPublicVirtualInterfaceOutput) => void
  ): Promise<ConfirmPublicVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmPublicVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts ownership of a transit virtual interface created by another AWS account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceInput
  ): Promise<ConfirmTransitVirtualInterfaceOutput>;
  public confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceInput,
    cb: (err: any, data?: ConfirmTransitVirtualInterfaceOutput) => void
  ): void;
  public confirmTransitVirtualInterface(
    args: ConfirmTransitVirtualInterfaceInput,
    cb?: (err: any, data?: ConfirmTransitVirtualInterfaceOutput) => void
  ): Promise<ConfirmTransitVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmTransitVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access AWS resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBGPPeer(args: CreateBGPPeerInput): Promise<CreateBGPPeerOutput>;
  public createBGPPeer(
    args: CreateBGPPeerInput,
    cb: (err: any, data?: CreateBGPPeerOutput) => void
  ): void;
  public createBGPPeer(
    args: CreateBGPPeerInput,
    cb?: (err: any, data?: CreateBGPPeerOutput) => void
  ): Promise<CreateBGPPeerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBGPPeerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a connection between a customer network and a specific AWS Direct Connect location.</p> <p>A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConnection(
    args: CreateConnectionInput
  ): Promise<CreateConnectionOutput>;
  public createConnection(
    args: CreateConnectionInput,
    cb: (err: any, data?: CreateConnectionOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionInput,
    cb?: (err: any, data?: CreateConnectionOutput) => void
  ): Promise<CreateConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any AWS Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDirectConnectGateway(
    args: CreateDirectConnectGatewayInput
  ): Promise<CreateDirectConnectGatewayOutput>;
  public createDirectConnectGateway(
    args: CreateDirectConnectGatewayInput,
    cb: (err: any, data?: CreateDirectConnectGatewayOutput) => void
  ): void;
  public createDirectConnectGateway(
    args: CreateDirectConnectGatewayInput,
    cb?: (err: any, data?: CreateDirectConnectGatewayOutput) => void
  ): Promise<CreateDirectConnectGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDirectConnectGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationInput
  ): Promise<CreateDirectConnectGatewayAssociationOutput>;
  public createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationInput,
    cb: (err: any, data?: CreateDirectConnectGatewayAssociationOutput) => void
  ): void;
  public createDirectConnectGatewayAssociation(
    args: CreateDirectConnectGatewayAssociationInput,
    cb?: (err: any, data?: CreateDirectConnectGatewayAssociationOutput) => void
  ): Promise<CreateDirectConnectGatewayAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDirectConnectGatewayAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can only associate a Direct Connect gateway and virtual private gateway or transit gateway when the account that owns the Direct Connect gateway and the account that owns the virtual private gateway or transit gateway have the same AWS Payer ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalInput
  ): Promise<CreateDirectConnectGatewayAssociationProposalOutput>;
  public createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalInput,
    cb: (
      err: any,
      data?: CreateDirectConnectGatewayAssociationProposalOutput
    ) => void
  ): void;
  public createDirectConnectGatewayAssociationProposal(
    args: CreateDirectConnectGatewayAssociationProposalInput,
    cb?: (
      err: any,
      data?: CreateDirectConnectGatewayAssociationProposalOutput
    ) => void
  ): Promise<CreateDirectConnectGatewayAssociationProposalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDirectConnectGatewayAssociationProposalCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an interconnect between an AWS Direct Connect Partner's network and a specific AWS Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide AWS Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the AWS Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect Partner.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInterconnect(
    args: CreateInterconnectInput
  ): Promise<CreateInterconnectOutput>;
  public createInterconnect(
    args: CreateInterconnectInput,
    cb: (err: any, data?: CreateInterconnectOutput) => void
  ): void;
  public createInterconnect(
    args: CreateInterconnectInput,
    cb?: (err: any, data?: CreateInterconnectOutput) => void
  ): Promise<CreateInterconnectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInterconnectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth and must terminate at the same AWS Direct Connect endpoint.</p> <p>You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the AWS account used to create a LAG is a registered AWS Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLag(args: CreateLagInput): Promise<CreateLagOutput>;
  public createLag(
    args: CreateLagInput,
    cb: (err: any, data?: CreateLagOutput) => void
  ): void;
  public createLag(
    args: CreateLagInput,
    cb?: (err: any, data?: CreateLagOutput) => void
  ): Promise<CreateLagOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLagCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceInput
  ): Promise<CreatePrivateVirtualInterfaceOutput>;
  public createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceInput,
    cb: (err: any, data?: CreatePrivateVirtualInterfaceOutput) => void
  ): void;
  public createPrivateVirtualInterface(
    args: CreatePrivateVirtualInterfaceInput,
    cb?: (err: any, data?: CreatePrivateVirtualInterfaceOutput) => void
  ): Promise<CreatePrivateVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePrivateVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceInput
  ): Promise<CreatePublicVirtualInterfaceOutput>;
  public createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceInput,
    cb: (err: any, data?: CreatePublicVirtualInterfaceOutput) => void
  ): void;
  public createPublicVirtualInterface(
    args: CreatePublicVirtualInterfaceInput,
    cb?: (err: any, data?: CreatePublicVirtualInterfaceOutput) => void
  ): Promise<CreatePublicVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePublicVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceInput
  ): Promise<CreateTransitVirtualInterfaceOutput>;
  public createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceInput,
    cb: (err: any, data?: CreateTransitVirtualInterfaceOutput) => void
  ): void;
  public createTransitVirtualInterface(
    args: CreateTransitVirtualInterfaceInput,
    cb?: (err: any, data?: CreateTransitVirtualInterfaceOutput) => void
  ): Promise<CreateTransitVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTransitVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBGPPeer(args: DeleteBGPPeerInput): Promise<DeleteBGPPeerOutput>;
  public deleteBGPPeer(
    args: DeleteBGPPeerInput,
    cb: (err: any, data?: DeleteBGPPeerOutput) => void
  ): void;
  public deleteBGPPeer(
    args: DeleteBGPPeerInput,
    cb?: (err: any, data?: DeleteBGPPeerOutput) => void
  ): Promise<DeleteBGPPeerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBGPPeerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified connection.</p> <p>Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the AWS Direct Connect location, you must cancel your service with them separately.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConnection(
    args: DeleteConnectionInput
  ): Promise<DeleteConnectionOutput>;
  public deleteConnection(
    args: DeleteConnectionInput,
    cb: (err: any, data?: DeleteConnectionOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionInput,
    cb?: (err: any, data?: DeleteConnectionOutput) => void
  ): Promise<DeleteConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways that are associated with the Direct Connect gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayInput
  ): Promise<DeleteDirectConnectGatewayOutput>;
  public deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayOutput) => void
  ): void;
  public deleteDirectConnectGateway(
    args: DeleteDirectConnectGatewayInput,
    cb?: (err: any, data?: DeleteDirectConnectGatewayOutput) => void
  ): Promise<DeleteDirectConnectGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDirectConnectGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationInput
  ): Promise<DeleteDirectConnectGatewayAssociationOutput>;
  public deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationInput,
    cb: (err: any, data?: DeleteDirectConnectGatewayAssociationOutput) => void
  ): void;
  public deleteDirectConnectGatewayAssociation(
    args: DeleteDirectConnectGatewayAssociationInput,
    cb?: (err: any, data?: DeleteDirectConnectGatewayAssociationOutput) => void
  ): Promise<DeleteDirectConnectGatewayAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDirectConnectGatewayAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalInput
  ): Promise<DeleteDirectConnectGatewayAssociationProposalOutput>;
  public deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalInput,
    cb: (
      err: any,
      data?: DeleteDirectConnectGatewayAssociationProposalOutput
    ) => void
  ): void;
  public deleteDirectConnectGatewayAssociationProposal(
    args: DeleteDirectConnectGatewayAssociationProposalInput,
    cb?: (
      err: any,
      data?: DeleteDirectConnectGatewayAssociationProposalOutput
    ) => void
  ): Promise<DeleteDirectConnectGatewayAssociationProposalOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDirectConnectGatewayAssociationProposalCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInterconnect(
    args: DeleteInterconnectInput
  ): Promise<DeleteInterconnectOutput>;
  public deleteInterconnect(
    args: DeleteInterconnectInput,
    cb: (err: any, data?: DeleteInterconnectOutput) => void
  ): void;
  public deleteInterconnect(
    args: DeleteInterconnectInput,
    cb?: (err: any, data?: DeleteInterconnectOutput) => void
  ): Promise<DeleteInterconnectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInterconnectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLag(args: DeleteLagInput): Promise<DeleteLagOutput>;
  public deleteLag(
    args: DeleteLagInput,
    cb: (err: any, data?: DeleteLagOutput) => void
  ): void;
  public deleteLag(
    args: DeleteLagInput,
    cb?: (err: any, data?: DeleteLagOutput) => void
  ): Promise<DeleteLagOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLagCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a virtual interface.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVirtualInterface(
    args: DeleteVirtualInterfaceInput
  ): Promise<DeleteVirtualInterfaceOutput>;
  public deleteVirtualInterface(
    args: DeleteVirtualInterfaceInput,
    cb: (err: any, data?: DeleteVirtualInterfaceOutput) => void
  ): void;
  public deleteVirtualInterface(
    args: DeleteVirtualInterfaceInput,
    cb?: (err: any, data?: DeleteVirtualInterfaceOutput) => void
  ): Promise<DeleteVirtualInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVirtualInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConnectionLoa(
    args: DescribeConnectionLoaInput
  ): Promise<DescribeConnectionLoaOutput>;
  public describeConnectionLoa(
    args: DescribeConnectionLoaInput,
    cb: (err: any, data?: DescribeConnectionLoaOutput) => void
  ): void;
  public describeConnectionLoa(
    args: DescribeConnectionLoaInput,
    cb?: (err: any, data?: DescribeConnectionLoaOutput) => void
  ): Promise<DescribeConnectionLoaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConnectionLoaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays the specified connection or all connections in this Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConnections(
    args: DescribeConnectionsInput
  ): Promise<DescribeConnectionsOutput>;
  public describeConnections(
    args: DescribeConnectionsInput,
    cb: (err: any, data?: DescribeConnectionsOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsInput,
    cb?: (err: any, data?: DescribeConnectionsOutput) => void
  ): Promise<DescribeConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectInput
  ): Promise<DescribeConnectionsOnInterconnectOutput>;
  public describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectInput,
    cb: (err: any, data?: DescribeConnectionsOnInterconnectOutput) => void
  ): void;
  public describeConnectionsOnInterconnect(
    args: DescribeConnectionsOnInterconnectInput,
    cb?: (err: any, data?: DescribeConnectionsOnInterconnectOutput) => void
  ): Promise<DescribeConnectionsOnInterconnectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConnectionsOnInterconnectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsInput
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsOutput>;
  public describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsInput,
    cb: (
      err: any,
      data?: DescribeDirectConnectGatewayAssociationProposalsOutput
    ) => void
  ): void;
  public describeDirectConnectGatewayAssociationProposals(
    args: DescribeDirectConnectGatewayAssociationProposalsInput,
    cb?: (
      err: any,
      data?: DescribeDirectConnectGatewayAssociationProposalsOutput
    ) => void
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDirectConnectGatewayAssociationProposalsCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the associations between your Direct Connect gateways and virtual private gateways. You must specify a Direct Connect gateway, a virtual private gateway, or both. If you specify a Direct Connect gateway, the response contains all virtual private gateways associated with the Direct Connect gateway. If you specify a virtual private gateway, the response contains all Direct Connect gateways associated with the virtual private gateway. If you specify both, the response contains the association between the Direct Connect gateway and the virtual private gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsInput
  ): Promise<DescribeDirectConnectGatewayAssociationsOutput>;
  public describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsInput,
    cb: (
      err: any,
      data?: DescribeDirectConnectGatewayAssociationsOutput
    ) => void
  ): void;
  public describeDirectConnectGatewayAssociations(
    args: DescribeDirectConnectGatewayAssociationsInput,
    cb?: (
      err: any,
      data?: DescribeDirectConnectGatewayAssociationsOutput
    ) => void
  ): Promise<DescribeDirectConnectGatewayAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDirectConnectGatewayAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsInput
  ): Promise<DescribeDirectConnectGatewayAttachmentsOutput>;
  public describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsInput,
    cb: (err: any, data?: DescribeDirectConnectGatewayAttachmentsOutput) => void
  ): void;
  public describeDirectConnectGatewayAttachments(
    args: DescribeDirectConnectGatewayAttachmentsInput,
    cb?: (
      err: any,
      data?: DescribeDirectConnectGatewayAttachmentsOutput
    ) => void
  ): Promise<DescribeDirectConnectGatewayAttachmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDirectConnectGatewayAttachmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysInput
  ): Promise<DescribeDirectConnectGatewaysOutput>;
  public describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysInput,
    cb: (err: any, data?: DescribeDirectConnectGatewaysOutput) => void
  ): void;
  public describeDirectConnectGateways(
    args: DescribeDirectConnectGatewaysInput,
    cb?: (err: any, data?: DescribeDirectConnectGatewaysOutput) => void
  ): Promise<DescribeDirectConnectGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDirectConnectGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by AWS Direct Connect Partners only.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHostedConnections(
    args: DescribeHostedConnectionsInput
  ): Promise<DescribeHostedConnectionsOutput>;
  public describeHostedConnections(
    args: DescribeHostedConnectionsInput,
    cb: (err: any, data?: DescribeHostedConnectionsOutput) => void
  ): void;
  public describeHostedConnections(
    args: DescribeHostedConnectionsInput,
    cb?: (err: any, data?: DescribeHostedConnectionsOutput) => void
  ): Promise<DescribeHostedConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHostedConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInterconnectLoa(
    args: DescribeInterconnectLoaInput
  ): Promise<DescribeInterconnectLoaOutput>;
  public describeInterconnectLoa(
    args: DescribeInterconnectLoaInput,
    cb: (err: any, data?: DescribeInterconnectLoaOutput) => void
  ): void;
  public describeInterconnectLoa(
    args: DescribeInterconnectLoaInput,
    cb?: (err: any, data?: DescribeInterconnectLoaOutput) => void
  ): Promise<DescribeInterconnectLoaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInterconnectLoaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the interconnects owned by the AWS account or only the specified interconnect.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInterconnects(
    args: DescribeInterconnectsInput
  ): Promise<DescribeInterconnectsOutput>;
  public describeInterconnects(
    args: DescribeInterconnectsInput,
    cb: (err: any, data?: DescribeInterconnectsOutput) => void
  ): void;
  public describeInterconnects(
    args: DescribeInterconnectsInput,
    cb?: (err: any, data?: DescribeInterconnectsOutput) => void
  ): Promise<DescribeInterconnectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInterconnectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes all your link aggregation groups (LAG) or the specified LAG.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLags(args: DescribeLagsInput): Promise<DescribeLagsOutput>;
  public describeLags(
    args: DescribeLagsInput,
    cb: (err: any, data?: DescribeLagsOutput) => void
  ): void;
  public describeLags(
    args: DescribeLagsInput,
    cb?: (err: any, data?: DescribeLagsOutput) => void
  ): Promise<DescribeLagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoa(args: DescribeLoaInput): Promise<DescribeLoaOutput>;
  public describeLoa(
    args: DescribeLoaInput,
    cb: (err: any, data?: DescribeLoaOutput) => void
  ): void;
  public describeLoa(
    args: DescribeLoaInput,
    cb?: (err: any, data?: DescribeLoaOutput) => void
  ): Promise<DescribeLoaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the AWS Direct Connect locations in the current AWS Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLocations(
    args: DescribeLocationsInput
  ): Promise<DescribeLocationsOutput>;
  public describeLocations(
    args: DescribeLocationsInput,
    cb: (err: any, data?: DescribeLocationsOutput) => void
  ): void;
  public describeLocations(
    args: DescribeLocationsInput,
    cb?: (err: any, data?: DescribeLocationsOutput) => void
  ): Promise<DescribeLocationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLocationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the tags associated with the specified AWS Direct Connect resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the virtual private gateways owned by the AWS account.</p> <p>You can create one or more AWS Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVirtualGateways(
    args: DescribeVirtualGatewaysInput
  ): Promise<DescribeVirtualGatewaysOutput>;
  public describeVirtualGateways(
    args: DescribeVirtualGatewaysInput,
    cb: (err: any, data?: DescribeVirtualGatewaysOutput) => void
  ): void;
  public describeVirtualGateways(
    args: DescribeVirtualGatewaysInput,
    cb?: (err: any, data?: DescribeVirtualGatewaysOutput) => void
  ): Promise<DescribeVirtualGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVirtualGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVirtualInterfaces(
    args: DescribeVirtualInterfacesInput
  ): Promise<DescribeVirtualInterfacesOutput>;
  public describeVirtualInterfaces(
    args: DescribeVirtualInterfacesInput,
    cb: (err: any, data?: DescribeVirtualInterfacesOutput) => void
  ): void;
  public describeVirtualInterfaces(
    args: DescribeVirtualInterfacesInput,
    cb?: (err: any, data?: DescribeVirtualInterfacesOutput) => void
  ): Promise<DescribeVirtualInterfacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVirtualInterfacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagInput
  ): Promise<DisassociateConnectionFromLagOutput>;
  public disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagInput,
    cb: (err: any, data?: DisassociateConnectionFromLagOutput) => void
  ): void;
  public disassociateConnectionFromLag(
    args: DisassociateConnectionFromLagInput,
    cb?: (err: any, data?: DisassociateConnectionFromLagOutput) => void
  ): Promise<DisassociateConnectionFromLagOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateConnectionFromLagCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You have reached the limit on the number of tags that can be assigned.</p>
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from the specified AWS Direct Connect resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationInput
  ): Promise<UpdateDirectConnectGatewayAssociationOutput>;
  public updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationInput,
    cb: (err: any, data?: UpdateDirectConnectGatewayAssociationOutput) => void
  ): void;
  public updateDirectConnectGatewayAssociation(
    args: UpdateDirectConnectGatewayAssociationInput,
    cb?: (err: any, data?: UpdateDirectConnectGatewayAssociationOutput) => void
  ): Promise<UpdateDirectConnectGatewayAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDirectConnectGatewayAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> </ul> <p>When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value and the number of operational connections falls below the specified value, the LAG automatically goes down to avoid over-utilization of the remaining connections. Adjust this value with care, as it could force the LAG down if it is set higher than the current number of operational connections.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLag(args: UpdateLagInput): Promise<UpdateLagOutput>;
  public updateLag(
    args: UpdateLagInput,
    cb: (err: any, data?: UpdateLagOutput) => void
  ): void;
  public updateLag(
    args: UpdateLagInput,
    cb?: (err: any, data?: UpdateLagOutput) => void
  ): Promise<UpdateLagOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLagCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectConnectServerException} <p>A server-side error occurred.</p>
   *   - {DirectConnectClientException} <p>One or more parameters are not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesInput
  ): Promise<UpdateVirtualInterfaceAttributesOutput>;
  public updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesInput,
    cb: (err: any, data?: UpdateVirtualInterfaceAttributesOutput) => void
  ): void;
  public updateVirtualInterfaceAttributes(
    args: UpdateVirtualInterfaceAttributesInput,
    cb?: (err: any, data?: UpdateVirtualInterfaceAttributesOutput) => void
  ): Promise<UpdateVirtualInterfaceAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVirtualInterfaceAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
