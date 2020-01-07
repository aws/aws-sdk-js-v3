import { DirectConnectClient } from "./DirectConnectClient";
import { AcceptDirectConnectGatewayAssociationProposalCommandInput, AcceptDirectConnectGatewayAssociationProposalCommandOutput } from "./commands/AcceptDirectConnectGatewayAssociationProposalCommand";
import { AllocateConnectionOnInterconnectCommandInput, AllocateConnectionOnInterconnectCommandOutput } from "./commands/AllocateConnectionOnInterconnectCommand";
import { AllocateHostedConnectionCommandInput, AllocateHostedConnectionCommandOutput } from "./commands/AllocateHostedConnectionCommand";
import { AllocatePrivateVirtualInterfaceCommandInput, AllocatePrivateVirtualInterfaceCommandOutput } from "./commands/AllocatePrivateVirtualInterfaceCommand";
import { AllocatePublicVirtualInterfaceCommandInput, AllocatePublicVirtualInterfaceCommandOutput } from "./commands/AllocatePublicVirtualInterfaceCommand";
import { AllocateTransitVirtualInterfaceCommandInput, AllocateTransitVirtualInterfaceCommandOutput } from "./commands/AllocateTransitVirtualInterfaceCommand";
import { AssociateConnectionWithLagCommandInput, AssociateConnectionWithLagCommandOutput } from "./commands/AssociateConnectionWithLagCommand";
import { AssociateHostedConnectionCommandInput, AssociateHostedConnectionCommandOutput } from "./commands/AssociateHostedConnectionCommand";
import { AssociateVirtualInterfaceCommandInput, AssociateVirtualInterfaceCommandOutput } from "./commands/AssociateVirtualInterfaceCommand";
import { ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput } from "./commands/ConfirmConnectionCommand";
import { ConfirmPrivateVirtualInterfaceCommandInput, ConfirmPrivateVirtualInterfaceCommandOutput } from "./commands/ConfirmPrivateVirtualInterfaceCommand";
import { ConfirmPublicVirtualInterfaceCommandInput, ConfirmPublicVirtualInterfaceCommandOutput } from "./commands/ConfirmPublicVirtualInterfaceCommand";
import { ConfirmTransitVirtualInterfaceCommandInput, ConfirmTransitVirtualInterfaceCommandOutput } from "./commands/ConfirmTransitVirtualInterfaceCommand";
import { CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput } from "./commands/CreateBGPPeerCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateDirectConnectGatewayAssociationCommandInput, CreateDirectConnectGatewayAssociationCommandOutput } from "./commands/CreateDirectConnectGatewayAssociationCommand";
import { CreateDirectConnectGatewayAssociationProposalCommandInput, CreateDirectConnectGatewayAssociationProposalCommandOutput } from "./commands/CreateDirectConnectGatewayAssociationProposalCommand";
import { CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput } from "./commands/CreateDirectConnectGatewayCommand";
import { CreateInterconnectCommandInput, CreateInterconnectCommandOutput } from "./commands/CreateInterconnectCommand";
import { CreateLagCommandInput, CreateLagCommandOutput } from "./commands/CreateLagCommand";
import { CreatePrivateVirtualInterfaceCommandInput, CreatePrivateVirtualInterfaceCommandOutput } from "./commands/CreatePrivateVirtualInterfaceCommand";
import { CreatePublicVirtualInterfaceCommandInput, CreatePublicVirtualInterfaceCommandOutput } from "./commands/CreatePublicVirtualInterfaceCommand";
import { CreateTransitVirtualInterfaceCommandInput, CreateTransitVirtualInterfaceCommandOutput } from "./commands/CreateTransitVirtualInterfaceCommand";
import { DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput } from "./commands/DeleteBGPPeerCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteDirectConnectGatewayAssociationCommandInput, DeleteDirectConnectGatewayAssociationCommandOutput } from "./commands/DeleteDirectConnectGatewayAssociationCommand";
import { DeleteDirectConnectGatewayAssociationProposalCommandInput, DeleteDirectConnectGatewayAssociationProposalCommandOutput } from "./commands/DeleteDirectConnectGatewayAssociationProposalCommand";
import { DeleteDirectConnectGatewayCommandInput, DeleteDirectConnectGatewayCommandOutput } from "./commands/DeleteDirectConnectGatewayCommand";
import { DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput } from "./commands/DeleteInterconnectCommand";
import { DeleteLagCommandInput, DeleteLagCommandOutput } from "./commands/DeleteLagCommand";
import { DeleteVirtualInterfaceCommandInput, DeleteVirtualInterfaceCommandOutput } from "./commands/DeleteVirtualInterfaceCommand";
import { DescribeConnectionLoaCommandInput, DescribeConnectionLoaCommandOutput } from "./commands/DescribeConnectionLoaCommand";
import { DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput } from "./commands/DescribeConnectionsCommand";
import { DescribeConnectionsOnInterconnectCommandInput, DescribeConnectionsOnInterconnectCommandOutput } from "./commands/DescribeConnectionsOnInterconnectCommand";
import { DescribeDirectConnectGatewayAssociationProposalsCommandInput, DescribeDirectConnectGatewayAssociationProposalsCommandOutput } from "./commands/DescribeDirectConnectGatewayAssociationProposalsCommand";
import { DescribeDirectConnectGatewayAssociationsCommandInput, DescribeDirectConnectGatewayAssociationsCommandOutput } from "./commands/DescribeDirectConnectGatewayAssociationsCommand";
import { DescribeDirectConnectGatewayAttachmentsCommandInput, DescribeDirectConnectGatewayAttachmentsCommandOutput } from "./commands/DescribeDirectConnectGatewayAttachmentsCommand";
import { DescribeDirectConnectGatewaysCommandInput, DescribeDirectConnectGatewaysCommandOutput } from "./commands/DescribeDirectConnectGatewaysCommand";
import { DescribeHostedConnectionsCommandInput, DescribeHostedConnectionsCommandOutput } from "./commands/DescribeHostedConnectionsCommand";
import { DescribeInterconnectLoaCommandInput, DescribeInterconnectLoaCommandOutput } from "./commands/DescribeInterconnectLoaCommand";
import { DescribeInterconnectsCommandInput, DescribeInterconnectsCommandOutput } from "./commands/DescribeInterconnectsCommand";
import { DescribeLagsCommandInput, DescribeLagsCommandOutput } from "./commands/DescribeLagsCommand";
import { DescribeLoaCommandInput, DescribeLoaCommandOutput } from "./commands/DescribeLoaCommand";
import { DescribeLocationsCommandInput, DescribeLocationsCommandOutput } from "./commands/DescribeLocationsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { DescribeVirtualGatewaysCommandInput, DescribeVirtualGatewaysCommandOutput } from "./commands/DescribeVirtualGatewaysCommand";
import { DescribeVirtualInterfacesCommandInput, DescribeVirtualInterfacesCommandOutput } from "./commands/DescribeVirtualInterfacesCommand";
import { DisassociateConnectionFromLagCommandInput, DisassociateConnectionFromLagCommandOutput } from "./commands/DisassociateConnectionFromLagCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDirectConnectGatewayAssociationCommandInput, UpdateDirectConnectGatewayAssociationCommandOutput } from "./commands/UpdateDirectConnectGatewayAssociationCommand";
import { UpdateLagCommandInput, UpdateLagCommandOutput } from "./commands/UpdateLagCommand";
import { UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput } from "./commands/UpdateVirtualInterfaceAttributesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all AWS Regions except the China (Beijing) and (China) Ningxia Regions.
 *       AWS resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 */
export declare class DirectConnect extends DirectConnectClient {
    /**
     * <p>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</p>
     */
    acceptDirectConnectGatewayAssociationProposal(args: AcceptDirectConnectGatewayAssociationProposalCommandInput, options?: __HttpHandlerOptions): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput>;
    acceptDirectConnectGatewayAssociationProposal(args: AcceptDirectConnectGatewayAssociationProposalCommandInput, cb: (err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void): void;
    acceptDirectConnectGatewayAssociationProposal(args: AcceptDirectConnectGatewayAssociationProposalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptDirectConnectGatewayAssociationProposalCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p>
     *          <p>Creates a hosted connection on an interconnect.</p>
     *          <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p>
     *          <note>
     *             <p>Intended for use by AWS Direct Connect Partners only.</p>
     *          </note>
     */
    allocateConnectionOnInterconnect(args: AllocateConnectionOnInterconnectCommandInput, options?: __HttpHandlerOptions): Promise<AllocateConnectionOnInterconnectCommandOutput>;
    allocateConnectionOnInterconnect(args: AllocateConnectionOnInterconnectCommandInput, cb: (err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void): void;
    allocateConnectionOnInterconnect(args: AllocateConnectionOnInterconnectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllocateConnectionOnInterconnectCommandOutput) => void): void;
    /**
     * <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p>
     *          <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. AWS polices the hosted connection for the specified capacity and the AWS Direct Connect Partner must also police the hosted connection for the specified capacity.</p>
     *          <note>
     *             <p>Intended for use by AWS Direct Connect Partners only.</p>
     *          </note>
     */
    allocateHostedConnection(args: AllocateHostedConnectionCommandInput, options?: __HttpHandlerOptions): Promise<AllocateHostedConnectionCommandOutput>;
    allocateHostedConnection(args: AllocateHostedConnectionCommandInput, cb: (err: any, data?: AllocateHostedConnectionCommandOutput) => void): void;
    allocateHostedConnection(args: AllocateHostedConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllocateHostedConnectionCommandOutput) => void): void;
    /**
     * <p>Provisions a private virtual interface to be owned by the specified AWS account.</p>
     *          <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>.
     *       Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
     */
    allocatePrivateVirtualInterface(args: AllocatePrivateVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<AllocatePrivateVirtualInterfaceCommandOutput>;
    allocatePrivateVirtualInterface(args: AllocatePrivateVirtualInterfaceCommandInput, cb: (err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void): void;
    allocatePrivateVirtualInterface(args: AllocatePrivateVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllocatePrivateVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Provisions a public virtual interface to be owned by the specified AWS account.</p>
     *          <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified AWS account.</p>
     *          <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>.
     *       Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p>
     *          <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
     *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
     */
    allocatePublicVirtualInterface(args: AllocatePublicVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<AllocatePublicVirtualInterfaceCommandOutput>;
    allocatePublicVirtualInterface(args: AllocatePublicVirtualInterfaceCommandInput, cb: (err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void): void;
    allocatePublicVirtualInterface(args: AllocatePublicVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllocatePublicVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Provisions a transit virtual interface to be owned by the specified AWS account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p>
     *          <p>The owner of a connection provisions a transit virtual interface to be owned by the specified AWS account.</p>
     *          <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
     */
    allocateTransitVirtualInterface(args: AllocateTransitVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<AllocateTransitVirtualInterfaceCommandOutput>;
    allocateTransitVirtualInterface(args: AllocateTransitVirtualInterfaceCommandInput, cb: (err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void): void;
    allocateTransitVirtualInterface(args: AllocateTransitVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllocateTransitVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Associates an existing connection with a link aggregation group (LAG). The connection
     *       is interrupted and re-established as a member of the LAG (connectivity to AWS is
     *       interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its
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
    associateConnectionWithLag(args: AssociateConnectionWithLagCommandInput, options?: __HttpHandlerOptions): Promise<AssociateConnectionWithLagCommandOutput>;
    associateConnectionWithLag(args: AssociateConnectionWithLagCommandInput, cb: (err: any, data?: AssociateConnectionWithLagCommandOutput) => void): void;
    associateConnectionWithLag(args: AssociateConnectionWithLagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateConnectionWithLagCommandOutput) => void): void;
    /**
     * <p>Associates a hosted connection and its virtual interfaces with a link aggregation
     *       group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted
     *       connection with a conflicting VLAN number or IP address, the operation fails. This
     *       action temporarily interrupts the hosted connection's connectivity to AWS as it is being
     *       migrated.</p>
     *          <note>
     *             <p>Intended for use by AWS Direct Connect Partners only.</p>
     *          </note>
     */
    associateHostedConnection(args: AssociateHostedConnectionCommandInput, options?: __HttpHandlerOptions): Promise<AssociateHostedConnectionCommandOutput>;
    associateHostedConnection(args: AssociateHostedConnectionCommandInput, cb: (err: any, data?: AssociateHostedConnectionCommandOutput) => void): void;
    associateHostedConnection(args: AssociateHostedConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateHostedConnectionCommandOutput) => void): void;
    /**
     * <p>Associates a virtual interface with a specified link aggregation group (LAG) or
     *       connection. Connectivity to AWS is temporarily interrupted as the virtual interface is
     *       being migrated. If the target connection or LAG has an associated virtual interface with
     *       a conflicting VLAN number or a conflicting IP address, the operation fails.</p>
     *          <p>Virtual interfaces associated with a hosted connection cannot be associated with a
     *       LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p>
     *          <p>To reassociate a virtual interface to a new connection or LAG, the requester
     *       must own either the virtual interface itself or the connection to which the virtual
     *       interface is currently associated. Additionally, the requester must own the connection
     *       or LAG for the association.</p>
     */
    associateVirtualInterface(args: AssociateVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<AssociateVirtualInterfaceCommandOutput>;
    associateVirtualInterface(args: AssociateVirtualInterfaceCommandInput, cb: (err: any, data?: AssociateVirtualInterfaceCommandOutput) => void): void;
    associateVirtualInterface(args: AssociateVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Confirms the creation of the specified hosted connection on an interconnect.</p>
     *          <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and
     *       remains in this state until the owner confirms creation of the hosted connection.</p>
     */
    confirmConnection(args: ConfirmConnectionCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmConnectionCommandOutput>;
    confirmConnection(args: ConfirmConnectionCommandInput, cb: (err: any, data?: ConfirmConnectionCommandOutput) => void): void;
    confirmConnection(args: ConfirmConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmConnectionCommandOutput) => void): void;
    /**
     * <p>Accepts ownership of a private virtual interface created by another AWS account.</p>
     *          <p>After the virtual interface owner makes this call, the virtual interface is
     *       created and attached to the specified virtual private gateway or Direct Connect gateway, and is
     *       made available to handle traffic.</p>
     */
    confirmPrivateVirtualInterface(args: ConfirmPrivateVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmPrivateVirtualInterfaceCommandOutput>;
    confirmPrivateVirtualInterface(args: ConfirmPrivateVirtualInterfaceCommandInput, cb: (err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void): void;
    confirmPrivateVirtualInterface(args: ConfirmPrivateVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmPrivateVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Accepts ownership of a public virtual interface created by another AWS account.</p>
     *          <p>After the virtual interface owner makes this call, the specified virtual interface is
     *       created and made available to handle traffic.</p>
     */
    confirmPublicVirtualInterface(args: ConfirmPublicVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmPublicVirtualInterfaceCommandOutput>;
    confirmPublicVirtualInterface(args: ConfirmPublicVirtualInterfaceCommandInput, cb: (err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void): void;
    confirmPublicVirtualInterface(args: ConfirmPublicVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmPublicVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Accepts ownership of a transit virtual interface created by another AWS account.</p>
     *
     *          <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
     */
    confirmTransitVirtualInterface(args: ConfirmTransitVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<ConfirmTransitVirtualInterfaceCommandOutput>;
    confirmTransitVirtualInterface(args: ConfirmTransitVirtualInterfaceCommandInput, cb: (err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void): void;
    confirmTransitVirtualInterface(args: ConfirmTransitVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfirmTransitVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Creates a BGP peer on the specified virtual interface.</p>
     *          <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access AWS resources that also use that address family.</p>
     *          <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot
     *       be in the same address family as an existing BGP peer on the virtual interface.</p>
     *          <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
     *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
     *          <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.</p>
     */
    createBGPPeer(args: CreateBGPPeerCommandInput, options?: __HttpHandlerOptions): Promise<CreateBGPPeerCommandOutput>;
    createBGPPeer(args: CreateBGPPeerCommandInput, cb: (err: any, data?: CreateBGPPeerCommandOutput) => void): void;
    createBGPPeer(args: CreateBGPPeerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBGPPeerCommandOutput) => void): void;
    /**
     * <p>Creates a connection between a customer network and a specific AWS Direct Connect location.</p>
     *
     *          <p>A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic
     *       cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router.</p>
     *          <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p>
     *          <p>You can automatically add the new connection to a link aggregation group (LAG) by
     *       specifying a LAG ID in the request. This ensures that the new connection is allocated on the
     *       same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint,
     *       the request fails and no connection is created.</p>
     */
    createConnection(args: CreateConnectionCommandInput, options?: __HttpHandlerOptions): Promise<CreateConnectionCommandOutput>;
    createConnection(args: CreateConnectionCommandInput, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    createConnection(args: CreateConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    /**
     * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
     *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
     *       AWS Region after it is created. The virtual interfaces and virtual private gateways that
     *       are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to
     *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
     *       are located, and pass traffic between them.</p>
     */
    createDirectConnectGateway(args: CreateDirectConnectGatewayCommandInput, options?: __HttpHandlerOptions): Promise<CreateDirectConnectGatewayCommandOutput>;
    createDirectConnectGateway(args: CreateDirectConnectGatewayCommandInput, cb: (err: any, data?: CreateDirectConnectGatewayCommandOutput) => void): void;
    createDirectConnectGateway(args: CreateDirectConnectGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDirectConnectGatewayCommandOutput) => void): void;
    /**
     * <p>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual
     *       private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</p>
     */
    createDirectConnectGatewayAssociation(args: CreateDirectConnectGatewayAssociationCommandInput, options?: __HttpHandlerOptions): Promise<CreateDirectConnectGatewayAssociationCommandOutput>;
    createDirectConnectGatewayAssociation(args: CreateDirectConnectGatewayAssociationCommandInput, cb: (err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void): void;
    createDirectConnectGatewayAssociation(args: CreateDirectConnectGatewayAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDirectConnectGatewayAssociationCommandOutput) => void): void;
    /**
     * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p>
     *          <p>You can only associate a Direct Connect gateway and virtual private gateway or transit gateway when the account that owns the Direct Connect gateway  and the account that owns the virtual private gateway or transit gateway have the same AWS Payer ID.</p>
     */
    createDirectConnectGatewayAssociationProposal(args: CreateDirectConnectGatewayAssociationProposalCommandInput, options?: __HttpHandlerOptions): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput>;
    createDirectConnectGatewayAssociationProposal(args: CreateDirectConnectGatewayAssociationProposalCommandInput, cb: (err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void): void;
    createDirectConnectGatewayAssociationProposal(args: CreateDirectConnectGatewayAssociationProposalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDirectConnectGatewayAssociationProposalCommandOutput) => void): void;
    /**
     * <p>Creates an interconnect between an AWS Direct Connect Partner's network and a specific AWS Direct Connect location.</p>
     *          <p>An interconnect is a connection that is capable of hosting other connections. The AWS
     *       Direct Connect partner can use an interconnect to provide AWS Direct Connect hosted
     *       connections to customers through their own network services. Like a standard connection, an
     *       interconnect links the partner's network to an AWS Direct Connect location over a standard Ethernet
     *       fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect
     *       router.</p>
     *          <p>You can automatically add the new interconnect to a link aggregation group (LAG) by
     *       specifying a LAG ID in the request. This ensures that the new interconnect is allocated on
     *       the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the
     *       endpoint, the request fails and no interconnect is created.</p>
     *          <p>For each end customer, the AWS Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>.
     *       The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect Partner.</p>
     *          <note>
     *             <p>Intended for use by AWS Direct Connect Partners only.</p>
     *          </note>
     */
    createInterconnect(args: CreateInterconnectCommandInput, options?: __HttpHandlerOptions): Promise<CreateInterconnectCommandOutput>;
    createInterconnect(args: CreateInterconnectCommandInput, cb: (err: any, data?: CreateInterconnectCommandOutput) => void): void;
    createInterconnect(args: CreateInterconnectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInterconnectCommandOutput) => void): void;
    /**
     * <p>Creates a link aggregation group (LAG) with the specified number of bundled
     *       physical connections between the customer network and a specific AWS Direct Connect location.
     *       A LAG is a logical interface that uses the Link Aggregation Control Protocol
     *       (LACP) to aggregate multiple interfaces, enabling you to treat them as a single
     *       interface.</p>
     *          <p>All connections in a LAG must use the same bandwidth and must terminate at the same AWS Direct Connect endpoint.</p>
     *          <p>You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections
     *       for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created.</p>
     *          <p>You can specify an existing physical connection or interconnect to include in the LAG
     *       (which counts towards the total number of connections). Doing so interrupts the current
     *       physical connection or hosted connections, and re-establishes them as a member of the
     *       LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the
     *       connection terminates. Any virtual interfaces associated with the connection are
     *       automatically disassociated and re-associated with the LAG. The connection ID does not
     *       change.</p>
     *          <p>If the AWS account used to create a LAG is a registered AWS Direct Connect Partner, the LAG is
     *       automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual
     *       interfaces cannot be directly configured.</p>
     */
    createLag(args: CreateLagCommandInput, options?: __HttpHandlerOptions): Promise<CreateLagCommandOutput>;
    createLag(args: CreateLagCommandInput, cb: (err: any, data?: CreateLagCommandOutput) => void): void;
    createLag(args: CreateLagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLagCommandOutput) => void): void;
    /**
     * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic.
     *       A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW).
     *       Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple
     *       VPCs, including VPCs in different AWS Regions. Connecting the private virtual interface to a VGW only
     *       provides access to a single VPC within the same Region.</p>
     */
    createPrivateVirtualInterface(args: CreatePrivateVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<CreatePrivateVirtualInterfaceCommandOutput>;
    createPrivateVirtualInterface(args: CreatePrivateVirtualInterfaceCommandInput, cb: (err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void): void;
    createPrivateVirtualInterface(args: CreatePrivateVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePrivateVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic.
     *       A public virtual interface supports sending traffic to public services of AWS such as Amazon S3.</p>
     *          <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code>
     *       and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
     */
    createPublicVirtualInterface(args: CreatePublicVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<CreatePublicVirtualInterfaceCommandOutput>;
    createPublicVirtualInterface(args: CreatePublicVirtualInterfaceCommandInput, cb: (err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void): void;
    createPublicVirtualInterface(args: CreatePublicVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePublicVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p>
     *          <important>
     *             <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p>
     *          </important>
     */
    createTransitVirtualInterface(args: CreateTransitVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<CreateTransitVirtualInterfaceCommandOutput>;
    createTransitVirtualInterface(args: CreateTransitVirtualInterfaceCommandInput, cb: (err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void): void;
    createTransitVirtualInterface(args: CreateTransitVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTransitVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p>
     *          <p>You cannot delete the last BGP peer from a virtual interface.</p>
     */
    deleteBGPPeer(args: DeleteBGPPeerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBGPPeerCommandOutput>;
    deleteBGPPeer(args: DeleteBGPPeerCommandInput, cb: (err: any, data?: DeleteBGPPeerCommandOutput) => void): void;
    deleteBGPPeer(args: DeleteBGPPeerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBGPPeerCommandOutput) => void): void;
    /**
     * <p>Deletes the specified connection.</p>
     *          <p>Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges.
     *       If you are partnering with any third parties to connect with the AWS Direct Connect location,
     *       you must cancel your service with them separately.</p>
     */
    deleteConnection(args: DeleteConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectionCommandOutput>;
    deleteConnection(args: DeleteConnectionCommandInput, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    deleteConnection(args: DeleteConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are
     *       attached to the Direct Connect gateway and disassociate all virtual private gateways associated
     *       with the Direct Connect gateway.</p>
     */
    deleteDirectConnectGateway(args: DeleteDirectConnectGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDirectConnectGatewayCommandOutput>;
    deleteDirectConnectGateway(args: DeleteDirectConnectGatewayCommandInput, cb: (err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void): void;
    deleteDirectConnectGateway(args: DeleteDirectConnectGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDirectConnectGatewayCommandOutput) => void): void;
    /**
     * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p>
     *          <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
     */
    deleteDirectConnectGatewayAssociation(args: DeleteDirectConnectGatewayAssociationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDirectConnectGatewayAssociationCommandOutput>;
    deleteDirectConnectGatewayAssociation(args: DeleteDirectConnectGatewayAssociationCommandInput, cb: (err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void): void;
    deleteDirectConnectGatewayAssociation(args: DeleteDirectConnectGatewayAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDirectConnectGatewayAssociationCommandOutput) => void): void;
    /**
     * <p>Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.</p>
     */
    deleteDirectConnectGatewayAssociationProposal(args: DeleteDirectConnectGatewayAssociationProposalCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput>;
    deleteDirectConnectGatewayAssociationProposal(args: DeleteDirectConnectGatewayAssociationProposalCommandInput, cb: (err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void): void;
    deleteDirectConnectGatewayAssociationProposal(args: DeleteDirectConnectGatewayAssociationProposalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDirectConnectGatewayAssociationProposalCommandOutput) => void): void;
    /**
     * <p>Deletes the specified interconnect.</p>
     *          <note>
     *             <p>Intended for use
     *         by AWS Direct Connect Partners only.</p>
     *          </note>
     */
    deleteInterconnect(args: DeleteInterconnectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInterconnectCommandOutput>;
    deleteInterconnect(args: DeleteInterconnectCommandInput, cb: (err: any, data?: DeleteInterconnectCommandOutput) => void): void;
    deleteInterconnect(args: DeleteInterconnectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInterconnectCommandOutput) => void): void;
    /**
     * <p>Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active
     *       virtual interfaces or hosted connections.</p>
     */
    deleteLag(args: DeleteLagCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLagCommandOutput>;
    deleteLag(args: DeleteLagCommandInput, cb: (err: any, data?: DeleteLagCommandOutput) => void): void;
    deleteLag(args: DeleteLagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLagCommandOutput) => void): void;
    /**
     * <p>Deletes a virtual interface.</p>
     */
    deleteVirtualInterface(args: DeleteVirtualInterfaceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVirtualInterfaceCommandOutput>;
    deleteVirtualInterface(args: DeleteVirtualInterfaceCommandInput, cb: (err: any, data?: DeleteVirtualInterfaceCommandOutput) => void): void;
    deleteVirtualInterface(args: DeleteVirtualInterfaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVirtualInterfaceCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
     *          <p>Gets the LOA-CFA for a connection.</p>
     *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or
     *       service provider uses when establishing your cross connect to AWS at the colocation facility. For more information,
     *       see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects
     *       at AWS Direct Connect Locations</a> in the <i>AWS Direct Connect User Guide</i>.</p>
     */
    describeConnectionLoa(args: DescribeConnectionLoaCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConnectionLoaCommandOutput>;
    describeConnectionLoa(args: DescribeConnectionLoaCommandInput, cb: (err: any, data?: DescribeConnectionLoaCommandOutput) => void): void;
    describeConnectionLoa(args: DescribeConnectionLoaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConnectionLoaCommandOutput) => void): void;
    /**
     * <p>Displays the specified connection or all connections in this Region.</p>
     */
    describeConnections(args: DescribeConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConnectionsCommandOutput>;
    describeConnections(args: DescribeConnectionsCommandInput, cb: (err: any, data?: DescribeConnectionsCommandOutput) => void): void;
    describeConnections(args: DescribeConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConnectionsCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p>
     *          <p>Lists the connections that have been provisioned on the specified interconnect.</p>
     *          <note>
     *             <p>Intended for use by AWS Direct Connect Partners only.</p>
     *          </note>
     */
    describeConnectionsOnInterconnect(args: DescribeConnectionsOnInterconnectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConnectionsOnInterconnectCommandOutput>;
    describeConnectionsOnInterconnect(args: DescribeConnectionsOnInterconnectCommandInput, cb: (err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void): void;
    describeConnectionsOnInterconnect(args: DescribeConnectionsOnInterconnectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConnectionsOnInterconnectCommandOutput) => void): void;
    /**
     * <p>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. </p>
     */
    describeDirectConnectGatewayAssociationProposals(args: DescribeDirectConnectGatewayAssociationProposalsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput>;
    describeDirectConnectGatewayAssociationProposals(args: DescribeDirectConnectGatewayAssociationProposalsCommandInput, cb: (err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void): void;
    describeDirectConnectGatewayAssociationProposals(args: DescribeDirectConnectGatewayAssociationProposalsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDirectConnectGatewayAssociationProposalsCommandOutput) => void): void;
    /**
     * <p>Lists the associations between your Direct Connect gateways and virtual private gateways.
     *       You must specify a Direct Connect gateway, a virtual private gateway, or both. If you specify
     *       a Direct Connect gateway, the response contains all virtual private gateways associated with
     *       the Direct Connect gateway. If you specify a virtual private gateway, the response contains
     *       all Direct Connect gateways associated with the virtual private gateway. If you specify both,
     *       the response contains the association between the Direct Connect gateway and the virtual
     *       private gateway.</p>
     */
    describeDirectConnectGatewayAssociations(args: DescribeDirectConnectGatewayAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput>;
    describeDirectConnectGatewayAssociations(args: DescribeDirectConnectGatewayAssociationsCommandInput, cb: (err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void): void;
    describeDirectConnectGatewayAssociations(args: DescribeDirectConnectGatewayAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDirectConnectGatewayAssociationsCommandOutput) => void): void;
    /**
     * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
     *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
     *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
     *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
     *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
     */
    describeDirectConnectGatewayAttachments(args: DescribeDirectConnectGatewayAttachmentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput>;
    describeDirectConnectGatewayAttachments(args: DescribeDirectConnectGatewayAttachmentsCommandInput, cb: (err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void): void;
    describeDirectConnectGatewayAttachments(args: DescribeDirectConnectGatewayAttachmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDirectConnectGatewayAttachmentsCommandOutput) => void): void;
    /**
     * <p>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</p>
     */
    describeDirectConnectGateways(args: DescribeDirectConnectGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDirectConnectGatewaysCommandOutput>;
    describeDirectConnectGateways(args: DescribeDirectConnectGatewaysCommandInput, cb: (err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void): void;
    describeDirectConnectGateways(args: DescribeDirectConnectGatewaysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDirectConnectGatewaysCommandOutput) => void): void;
    /**
     * <p>Lists the hosted connections that have been provisioned on the specified
     *       interconnect or link aggregation group (LAG).</p>
     *          <note>
     *             <p>Intended for use by AWS Direct Connect Partners only.</p>
     *          </note>
     */
    describeHostedConnections(args: DescribeHostedConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHostedConnectionsCommandOutput>;
    describeHostedConnections(args: DescribeHostedConnectionsCommandInput, cb: (err: any, data?: DescribeHostedConnectionsCommandOutput) => void): void;
    describeHostedConnections(args: DescribeHostedConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHostedConnectionsCommandOutput) => void): void;
    /**
     * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
     *          <p>Gets the LOA-CFA for the specified interconnect.</p>
     *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility.
     *       For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a>
     *       in the <i>AWS Direct Connect User Guide</i>.</p>
     */
    describeInterconnectLoa(args: DescribeInterconnectLoaCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInterconnectLoaCommandOutput>;
    describeInterconnectLoa(args: DescribeInterconnectLoaCommandInput, cb: (err: any, data?: DescribeInterconnectLoaCommandOutput) => void): void;
    describeInterconnectLoa(args: DescribeInterconnectLoaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInterconnectLoaCommandOutput) => void): void;
    /**
     * <p>Lists the interconnects owned by the AWS account or only the specified interconnect.</p>
     */
    describeInterconnects(args: DescribeInterconnectsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInterconnectsCommandOutput>;
    describeInterconnects(args: DescribeInterconnectsCommandInput, cb: (err: any, data?: DescribeInterconnectsCommandOutput) => void): void;
    describeInterconnects(args: DescribeInterconnectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInterconnectsCommandOutput) => void): void;
    /**
     * <p>Describes all your link aggregation groups (LAG) or the specified LAG.</p>
     */
    describeLags(args: DescribeLagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLagsCommandOutput>;
    describeLags(args: DescribeLagsCommandInput, cb: (err: any, data?: DescribeLagsCommandOutput) => void): void;
    describeLags(args: DescribeLagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLagsCommandOutput) => void): void;
    /**
     * <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p>
     *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing
     *       your cross connect to AWS at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a>
     *       in the <i>AWS Direct Connect User Guide</i>.</p>
     */
    describeLoa(args: DescribeLoaCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoaCommandOutput>;
    describeLoa(args: DescribeLoaCommandInput, cb: (err: any, data?: DescribeLoaCommandOutput) => void): void;
    describeLoa(args: DescribeLoaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoaCommandOutput) => void): void;
    /**
     * <p>Lists the AWS Direct Connect locations in the current AWS Region. These are the locations that can be selected when calling
     *       <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>
     */
    describeLocations(args: DescribeLocationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLocationsCommandOutput>;
    describeLocations(args: DescribeLocationsCommandInput, cb: (err: any, data?: DescribeLocationsCommandOutput) => void): void;
    describeLocations(args: DescribeLocationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLocationsCommandOutput) => void): void;
    /**
     * <p>Describes the tags associated with the specified AWS Direct Connect resources.</p>
     */
    describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
    describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    describeTags(args: DescribeTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    /**
     * <p>Lists the virtual private gateways owned by the AWS account.</p>
     *          <p>You can create one or more AWS Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
     */
    describeVirtualGateways(args: DescribeVirtualGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVirtualGatewaysCommandOutput>;
    describeVirtualGateways(args: DescribeVirtualGatewaysCommandInput, cb: (err: any, data?: DescribeVirtualGatewaysCommandOutput) => void): void;
    describeVirtualGateways(args: DescribeVirtualGatewaysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVirtualGatewaysCommandOutput) => void): void;
    /**
     * <p>Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer
     *       than 15 minutes before you make the request are also returned. If you specify a
     *       connection ID, only the virtual interfaces associated with the connection are returned.
     *       If you specify a virtual interface ID, then only a single virtual interface is returned.</p>
     *          <p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer network.</p>
     */
    describeVirtualInterfaces(args: DescribeVirtualInterfacesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVirtualInterfacesCommandOutput>;
    describeVirtualInterfaces(args: DescribeVirtualInterfacesCommandInput, cb: (err: any, data?: DescribeVirtualInterfacesCommandOutput) => void): void;
    describeVirtualInterfaces(args: DescribeVirtualInterfacesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVirtualInterfacesCommandOutput) => void): void;
    /**
     * <p>Disassociates a connection from a link aggregation group (LAG). The connection is
     *       interrupted and re-established as a standalone connection (the connection is not
     *       deleted; to delete the connection, use the <a>DeleteConnection</a> request).
     *       If the LAG has associated virtual interfaces or hosted connections, they remain
     *       associated with the LAG. A disassociated connection owned by an AWS Direct Connect Partner is
     *       automatically converted to an interconnect.</p>
     *          <p>If disassociating the connection would cause the LAG to fall below its setting for
     *       minimum number of operational connections, the request fails, except when it's the last
     *       member of the LAG. If all connections are disassociated, the LAG continues to exist as
     *       an empty LAG with no physical connections. </p>
     */
    disassociateConnectionFromLag(args: DisassociateConnectionFromLagCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateConnectionFromLagCommandOutput>;
    disassociateConnectionFromLag(args: DisassociateConnectionFromLagCommandInput, cb: (err: any, data?: DisassociateConnectionFromLagCommandOutput) => void): void;
    disassociateConnectionFromLag(args: DisassociateConnectionFromLagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateConnectionFromLagCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags.</p>
     *          <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from the specified AWS Direct Connect resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the specified attributes of the Direct Connect gateway association.</p>
     *          <p>Add or remove prefixes from the association.</p>
     */
    updateDirectConnectGatewayAssociation(args: UpdateDirectConnectGatewayAssociationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDirectConnectGatewayAssociationCommandOutput>;
    updateDirectConnectGatewayAssociation(args: UpdateDirectConnectGatewayAssociationCommandInput, cb: (err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void): void;
    updateDirectConnectGatewayAssociation(args: UpdateDirectConnectGatewayAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDirectConnectGatewayAssociationCommandOutput) => void): void;
    /**
     * <p>Updates the attributes of the specified link aggregation group (LAG).</p>
     *          <p>You can update the following attributes:</p>
     *          <ul>
     *             <li>
     *                <p>The name of the LAG.</p>
     *             </li>
     *             <li>
     *                <p>The value for the minimum number of connections that must be operational
     *           for the LAG itself to be operational. </p>
     *             </li>
     *          </ul>
     *          <p>When you create a LAG, the default value for the minimum number of operational
     *       connections is zero (0). If you update this value and the number of operational
     *       connections falls below the specified value, the LAG automatically goes down to avoid
     *       over-utilization of the remaining connections. Adjust this value with care, as it
     *       could force the LAG down if it is set higher than the current number of operational
     *       connections.</p>
     */
    updateLag(args: UpdateLagCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLagCommandOutput>;
    updateLag(args: UpdateLagCommandInput, cb: (err: any, data?: UpdateLagCommandOutput) => void): void;
    updateLag(args: UpdateLagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLagCommandOutput) => void): void;
    /**
     * <p>Updates the specified attributes of the specified virtual private interface.</p>
     *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
     *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
     *       the connection disrupts network connectivity for all virtual interfaces associated with
     *       the connection for up to 30 seconds. To check whether your connection supports jumbo
     *       frames, call <a>DescribeConnections</a>. To check whether your virtual
     *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
     */
    updateVirtualInterfaceAttributes(args: UpdateVirtualInterfaceAttributesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVirtualInterfaceAttributesCommandOutput>;
    updateVirtualInterfaceAttributes(args: UpdateVirtualInterfaceAttributesCommandInput, cb: (err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void): void;
    updateVirtualInterfaceAttributes(args: UpdateVirtualInterfaceAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVirtualInterfaceAttributesCommandOutput) => void): void;
}
