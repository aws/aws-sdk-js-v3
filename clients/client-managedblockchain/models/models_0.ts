import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum ThresholdComparator {
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
}

/**
 * <p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
 */
export interface ApprovalThresholdPolicy {
  /**
   * <p>The percentage of votes among all members that must be <code>YES</code> for a proposal to be approved. For example, a <code>ThresholdPercentage</code> value of <code>50</code> indicates 50%. The <code>ThresholdComparator</code> determines the precise comparison. If a <code>ThresholdPercentage</code> value of <code>50</code> is specified on a network with 10 members, along with a <code>ThresholdComparator</code> value of <code>GREATER_THAN</code>, this indicates that 6 <code>YES</code> votes are required for the proposal to be approved.</p>
   */
  ThresholdPercentage?: number;

  /**
   * <p>The duration from the time that a proposal is created until it expires. If members cast neither the required number of <code>YES</code> votes to approve the proposal nor the number of <code>NO</code> votes required to reject it before the duration expires, the proposal is <code>EXPIRED</code> and <code>ProposalActions</code> are not carried out.</p>
   */
  ProposalDurationInHours?: number;

  /**
   * <p>Determines whether the vote percentage must be greater than the <code>ThresholdPercentage</code> or must be greater than or equal to the <code>ThreholdPercentage</code> to be approved.</p>
   */
  ThresholdComparator?: ThresholdComparator | string;
}

export namespace ApprovalThresholdPolicy {
  export const filterSensitiveLog = (obj: ApprovalThresholdPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface MemberFabricConfiguration {
  /**
   * <p>The user name for the member's initial administrative user.</p>
   */
  AdminUsername: string | undefined;

  /**
   * <p>The password for the member's initial administrative user. The <code>AdminPassword</code> must be at least eight characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quote(‘), double quote(“), forward slash(/), backward slash(\), @, or a space.</p>
   */
  AdminPassword: string | undefined;
}

export namespace MemberFabricConfiguration {
  export const filterSensitiveLog = (obj: MemberFabricConfiguration): any => ({
    ...obj,
    ...(obj.AdminPassword && { AdminPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 */
export interface MemberFrameworkConfiguration {
  /**
   * <p>Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: MemberFabricConfiguration;
}

export namespace MemberFrameworkConfiguration {
  export const filterSensitiveLog = (obj: MemberFrameworkConfiguration): any => ({
    ...obj,
    ...(obj.Fabric && { Fabric: MemberFabricConfiguration.filterSensitiveLog(obj.Fabric) }),
  });
}

/**
 * <p>A configuration for logging events.</p>
 */
export interface LogConfiguration {
  /**
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace LogConfiguration {
  export const filterSensitiveLog = (obj: LogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of log configurations.</p>
 */
export interface LogConfigurations {
  /**
   * <p>Parameters for publishing logs to Amazon CloudWatch Logs.</p>
   */
  Cloudwatch?: LogConfiguration;
}

export namespace LogConfigurations {
  export const filterSensitiveLog = (obj: LogConfigurations): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface MemberFabricLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a member's Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.</p>
   */
  CaLogs?: LogConfigurations;
}

export namespace MemberFabricLogPublishingConfiguration {
  export const filterSensitiveLog = (obj: MemberFabricLogPublishingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network.</p>
 */
export interface MemberLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
   */
  Fabric?: MemberFabricLogPublishingConfiguration;
}

export namespace MemberLogPublishingConfiguration {
  export const filterSensitiveLog = (obj: MemberLogPublishingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration properties of the member.</p>
 */
export interface MemberConfiguration {
  /**
   * <p>The name of the member.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional description of the member.</p>
   */
  Description?: string;

  /**
   * <p>Configuration properties of the blockchain framework relevant to the member.</p>
   */
  FrameworkConfiguration: MemberFrameworkConfiguration | undefined;

  /**
   * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network.</p>
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration;
}

export namespace MemberConfiguration {
  export const filterSensitiveLog = (obj: MemberConfiguration): any => ({
    ...obj,
    ...(obj.FrameworkConfiguration && {
      FrameworkConfiguration: MemberFrameworkConfiguration.filterSensitiveLog(obj.FrameworkConfiguration),
    }),
  });
}

export interface CreateMemberInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The unique identifier of the invitation that is sent to the member to join the network.</p>
   */
  InvitationId: string | undefined;

  /**
   * <p>The unique identifier of the network in which the member is created.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>Member configuration parameters.</p>
   */
  MemberConfiguration: MemberConfiguration | undefined;
}

export namespace CreateMemberInput {
  export const filterSensitiveLog = (obj: CreateMemberInput): any => ({
    ...obj,
    ...(obj.MemberConfiguration && {
      MemberConfiguration: MemberConfiguration.filterSensitiveLog(obj.MemberConfiguration),
    }),
  });
}

export interface CreateMemberOutput {
  /**
   * <p>The unique identifier of the member.</p>
   */
  MemberId?: string;
}

export namespace CreateMemberOutput {
  export const filterSensitiveLog = (obj: CreateMemberOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
}

export namespace InternalServiceErrorException {
  export const filterSensitiveLog = (obj: InternalServiceErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource request is issued for a resource that already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource exists but is not in a status that can complete the operation.</p>
 */
export interface ResourceNotReadyException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotReadyException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotReadyException {
  export const filterSensitiveLog = (obj: ResourceNotReadyException): any => ({
    ...obj,
  });
}

/**
 * <p>The request or operation could not be performed because a service is throttling requests. The most common source of throttling errors is launching EC2 instances such that your service limit for EC2 instances is exceeded. Request a limit increase or delete unused resources if possible.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export enum Framework {
  HYPERLEDGER_FABRIC = "HYPERLEDGER_FABRIC",
}

export enum Edition {
  STANDARD = "STANDARD",
  STARTER = "STARTER",
}

/**
 * <p>Hyperledger Fabric configuration properties for the network.</p>
 */
export interface NetworkFabricConfiguration {
  /**
   * <p>The edition of Amazon Managed Blockchain that the network uses. For more information, see <a href="http://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   */
  Edition: Edition | string | undefined;
}

export namespace NetworkFabricConfiguration {
  export const filterSensitiveLog = (obj: NetworkFabricConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>
 *          Configuration properties relevant to the network for the blockchain framework that the network uses.
 *       </p>
 */
export interface NetworkFrameworkConfiguration {
  /**
   * <p>
   *          Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric.
   *       </p>
   */
  Fabric?: NetworkFabricConfiguration;
}

export namespace NetworkFrameworkConfiguration {
  export const filterSensitiveLog = (obj: NetworkFrameworkConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>
 *          The voting rules for the network to decide if a proposal is accepted
 *       </p>
 */
export interface VotingPolicy {
  /**
   * <p>Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
   */
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
}

export namespace VotingPolicy {
  export const filterSensitiveLog = (obj: VotingPolicy): any => ({
    ...obj,
  });
}

export interface CreateNetworkInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The name of the network.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional description for the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework: Framework | string | undefined;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion: string | undefined;

  /**
   * <p>
   *          Configuration properties of the blockchain framework relevant to the network configuration.
   *       </p>
   */
  FrameworkConfiguration?: NetworkFrameworkConfiguration;

  /**
   * <p>
   *          The voting rules used by the network to determine if a proposal is approved.
   *       </p>
   */
  VotingPolicy: VotingPolicy | undefined;

  /**
   * <p>Configuration properties for the first member within the network.</p>
   */
  MemberConfiguration: MemberConfiguration | undefined;
}

export namespace CreateNetworkInput {
  export const filterSensitiveLog = (obj: CreateNetworkInput): any => ({
    ...obj,
    ...(obj.MemberConfiguration && {
      MemberConfiguration: MemberConfiguration.filterSensitiveLog(obj.MemberConfiguration),
    }),
  });
}

export interface CreateNetworkOutput {
  /**
   * <p>The unique identifier for the network.</p>
   */
  NetworkId?: string;

  /**
   * <p>The unique identifier for the first member within the network.</p>
   */
  MemberId?: string;
}

export namespace CreateNetworkOutput {
  export const filterSensitiveLog = (obj: CreateNetworkOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.</p>
 */
export interface NodeFabricLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with chaincode execution on a peer node. Chaincode logs contain the results of instantiating, invoking, and querying the chaincode. A peer can run multiple instances of chaincode. When enabled, a log stream is created for all chaincodes, with an individual log stream for each chaincode.</p>
   */
  ChaincodeLogs?: LogConfigurations;

  /**
   * <p>Configuration properties for a peer node log. Peer node logs contain messages generated when your client submits transaction proposals to peer nodes, requests to join channels, enrolls an admin peer, and lists the chaincode instances on a peer node. </p>
   */
  PeerLogs?: LogConfigurations;
}

export namespace NodeFabricLogPublishingConfiguration {
  export const filterSensitiveLog = (obj: NodeFabricLogPublishingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.</p>
 */
export interface NodeLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
   */
  Fabric?: NodeFabricLogPublishingConfiguration;
}

export namespace NodeLogPublishingConfiguration {
  export const filterSensitiveLog = (obj: NodeLogPublishingConfiguration): any => ({
    ...obj,
  });
}

export enum StateDBType {
  CouchDB = "CouchDB",
  LevelDB = "LevelDB",
}

/**
 * <p>Configuration properties of a peer node.</p>
 */
export interface NodeConfiguration {
  /**
   * <p>The Amazon Managed Blockchain instance type for the node.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.
   *       </p>
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;

  /**
   * <p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>. When using an Amazon Managed Blockchain network with Hyperledger Fabric version 1.4 or later, the default is <code>CouchDB</code>.</p>
   */
  StateDB?: StateDBType | string;
}

export namespace NodeConfiguration {
  export const filterSensitiveLog = (obj: NodeConfiguration): any => ({
    ...obj,
  });
}

export interface CreateNodeInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The unique identifier of the network in which this node runs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns this node.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The properties of a node configuration.</p>
   */
  NodeConfiguration: NodeConfiguration | undefined;
}

export namespace CreateNodeInput {
  export const filterSensitiveLog = (obj: CreateNodeInput): any => ({
    ...obj,
  });
}

export interface CreateNodeOutput {
  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId?: string;
}

export namespace CreateNodeOutput {
  export const filterSensitiveLog = (obj: CreateNodeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An action to invite a specific AWS account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p>
 */
export interface InviteAction {
  /**
   * <p>The AWS account ID to invite.</p>
   */
  Principal: string | undefined;
}

export namespace InviteAction {
  export const filterSensitiveLog = (obj: InviteAction): any => ({
    ...obj,
  });
}

/**
 * <p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p>
 */
export interface RemoveAction {
  /**
   * <p>The unique identifier of the member to remove.</p>
   */
  MemberId: string | undefined;
}

export namespace RemoveAction {
  export const filterSensitiveLog = (obj: RemoveAction): any => ({
    ...obj,
  });
}

/**
 * <p>
 *          The actions to carry out if a proposal is <code>APPROVED</code>.
 *       </p>
 */
export interface ProposalActions {
  /**
   * <p>
   *          The actions to perform for an <code>APPROVED</code> proposal to invite an AWS account to create a member and join the network.
   *       </p>
   */
  Invitations?: InviteAction[];

  /**
   * <p>
   *          The actions to perform for an <code>APPROVED</code> proposal to remove a member from the network, which deletes the member and all associated member resources from the network.
   *       </p>
   */
  Removals?: RemoveAction[];
}

export namespace ProposalActions {
  export const filterSensitiveLog = (obj: ProposalActions): any => ({
    ...obj,
  });
}

export interface CreateProposalInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>
   *          The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The type of actions proposed, such as inviting a member or removing a member. The types of <code>Actions</code> in a proposal are mutually exclusive. For example, a proposal with <code>Invitations</code> actions cannot also contain <code>Removals</code> actions.</p>
   */
  Actions: ProposalActions | undefined;

  /**
   * <p>A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."</p>
   */
  Description?: string;
}

export namespace CreateProposalInput {
  export const filterSensitiveLog = (obj: CreateProposalInput): any => ({
    ...obj,
  });
}

export interface CreateProposalOutput {
  /**
   * <p>The unique identifier of the proposal.</p>
   */
  ProposalId?: string;
}

export namespace CreateProposalOutput {
  export const filterSensitiveLog = (obj: CreateProposalOutput): any => ({
    ...obj,
  });
}

export interface DeleteMemberInput {
  /**
   * <p>The unique identifier of the network from which the member is removed.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member to remove.</p>
   */
  MemberId: string | undefined;
}

export namespace DeleteMemberInput {
  export const filterSensitiveLog = (obj: DeleteMemberInput): any => ({
    ...obj,
  });
}

export interface DeleteMemberOutput {}

export namespace DeleteMemberOutput {
  export const filterSensitiveLog = (obj: DeleteMemberOutput): any => ({
    ...obj,
  });
}

export interface DeleteNodeInput {
  /**
   * <p>The unique identifier of the network that the node belongs to.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns this node.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId: string | undefined;
}

export namespace DeleteNodeInput {
  export const filterSensitiveLog = (obj: DeleteNodeInput): any => ({
    ...obj,
  });
}

export interface DeleteNodeOutput {}

export namespace DeleteNodeOutput {
  export const filterSensitiveLog = (obj: DeleteNodeOutput): any => ({
    ...obj,
  });
}

export interface GetMemberInput {
  /**
   * <p>The unique identifier of the network to which the member belongs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member.</p>
   */
  MemberId: string | undefined;
}

export namespace GetMemberInput {
  export const filterSensitiveLog = (obj: GetMemberInput): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface MemberFabricAttributes {
  /**
   * <p>The user name for the initial administrator user for the member.</p>
   */
  AdminUsername?: string;

  /**
   * <p>The endpoint used to access the member's certificate authority.</p>
   */
  CaEndpoint?: string;
}

export namespace MemberFabricAttributes {
  export const filterSensitiveLog = (obj: MemberFabricAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 */
export interface MemberFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: MemberFabricAttributes;
}

export namespace MemberFrameworkAttributes {
  export const filterSensitiveLog = (obj: MemberFrameworkAttributes): any => ({
    ...obj,
  });
}

export enum MemberStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

/**
 * <p>Member configuration properties.</p>
 */
export interface Member {
  /**
   * <p>The unique identifier of the network to which the member belongs.</p>
   */
  NetworkId?: string;

  /**
   * <p>The unique identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the member.</p>
   */
  Description?: string;

  /**
   * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
   */
  FrameworkAttributes?: MemberFrameworkAttributes;

  /**
   * <p>Configuration properties for logging events associated with a member.</p>
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration;

  /**
   * <p>The status of a member.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The AWS account is in the process of creating a member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The member has been created and can participate in the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - The AWS account attempted to create a member and creation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *          </ul>
   */
  Status?: MemberStatus | string;

  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface GetMemberOutput {
  /**
   * <p>The properties of a member.</p>
   */
  Member?: Member;
}

export namespace GetMemberOutput {
  export const filterSensitiveLog = (obj: GetMemberOutput): any => ({
    ...obj,
  });
}

export interface GetNetworkInput {
  /**
   * <p>The unique identifier of the network to get information about.</p>
   */
  NetworkId: string | undefined;
}

export namespace GetNetworkInput {
  export const filterSensitiveLog = (obj: GetNetworkInput): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of Hyperledger Fabric for a network.</p>
 */
export interface NetworkFabricAttributes {
  /**
   * <p>The endpoint of the ordering service for the network.</p>
   */
  OrderingServiceEndpoint?: string;

  /**
   * <p>The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see <a href="http://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   */
  Edition?: Edition | string;
}

export namespace NetworkFabricAttributes {
  export const filterSensitiveLog = (obj: NetworkFabricAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes relevant to the network for the blockchain framework that the network uses.</p>
 */
export interface NetworkFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: NetworkFabricAttributes;
}

export namespace NetworkFrameworkAttributes {
  export const filterSensitiveLog = (obj: NetworkFrameworkAttributes): any => ({
    ...obj,
  });
}

export enum NetworkStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
}

/**
 * <p>Network configuration properties.</p>
 */
export interface Network {
  /**
   * <p>The unique identifier of the network.</p>
   */
  Id?: string;

  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>Attributes of the blockchain framework for the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework?: Framework | string;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>Attributes of the blockchain framework that the network uses.</p>
   */
  FrameworkAttributes?: NetworkFrameworkAttributes;

  /**
   * <p>The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.</p>
   */
  VpcEndpointServiceName?: string;

  /**
   * <p>The voting rules for the network to decide if a proposal is accepted.</p>
   */
  VotingPolicy?: VotingPolicy;

  /**
   * <p>The current status of the network.</p>
   */
  Status?: NetworkStatus | string;

  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date;
}

export namespace Network {
  export const filterSensitiveLog = (obj: Network): any => ({
    ...obj,
  });
}

export interface GetNetworkOutput {
  /**
   * <p>An object containing network configuration parameters.</p>
   */
  Network?: Network;
}

export namespace GetNetworkOutput {
  export const filterSensitiveLog = (obj: GetNetworkOutput): any => ({
    ...obj,
  });
}

export interface GetNodeInput {
  /**
   * <p>The unique identifier of the network to which the node belongs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns the node.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId: string | undefined;
}

export namespace GetNodeInput {
  export const filterSensitiveLog = (obj: GetNodeInput): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
 */
export interface NodeFabricAttributes {
  /**
   * <p>The endpoint that identifies the peer node for all services except peer channel-based event services.</p>
   */
  PeerEndpoint?: string;

  /**
   * <p>The endpoint that identifies the peer node for peer channel-based event services.</p>
   */
  PeerEventEndpoint?: string;
}

export namespace NodeFabricAttributes {
  export const filterSensitiveLog = (obj: NodeFabricAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses.</p>
 */
export interface NodeFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: NodeFabricAttributes;
}

export namespace NodeFrameworkAttributes {
  export const filterSensitiveLog = (obj: NodeFrameworkAttributes): any => ({
    ...obj,
  });
}

export enum NodeStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>Configuration properties of a peer node.</p>
 */
export interface Node {
  /**
   * <p>The unique identifier of the network that the node is in.</p>
   */
  NetworkId?: string;

  /**
   * <p>The unique identifier of the member to which the node belongs.</p>
   */
  MemberId?: string;

  /**
   * <p>The unique identifier of the node.</p>
   */
  Id?: string;

  /**
   * <p>The instance type of the node.</p>
   */
  InstanceType?: string;

  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Attributes of the blockchain framework being used.</p>
   */
  FrameworkAttributes?: NodeFrameworkAttributes;

  /**
   * <p>Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.</p>
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;

  /**
   * <p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>.</p>
   */
  StateDB?: StateDBType | string;

  /**
   * <p>The status of the node.</p>
   */
  Status?: NodeStatus | string;

  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date;
}

export namespace Node {
  export const filterSensitiveLog = (obj: Node): any => ({
    ...obj,
  });
}

export interface GetNodeOutput {
  /**
   * <p>Properties of the node configuration.</p>
   */
  Node?: Node;
}

export namespace GetNodeOutput {
  export const filterSensitiveLog = (obj: GetNodeOutput): any => ({
    ...obj,
  });
}

export interface GetProposalInput {
  /**
   * <p>The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the proposal.</p>
   */
  ProposalId: string | undefined;
}

export namespace GetProposalInput {
  export const filterSensitiveLog = (obj: GetProposalInput): any => ({
    ...obj,
  });
}

export enum ProposalStatus {
  ACTION_FAILED = "ACTION_FAILED",
  APPROVED = "APPROVED",
  EXPIRED = "EXPIRED",
  IN_PROGRESS = "IN_PROGRESS",
  REJECTED = "REJECTED",
}

/**
 * <p>Properties of a proposal on a Managed Blockchain network.</p>
 */
export interface Proposal {
  /**
   * <p>The unique identifier of the proposal.</p>
   */
  ProposalId?: string;

  /**
   * <p>The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId?: string;

  /**
   * <p>The description of the proposal.</p>
   */
  Description?: string;

  /**
   * <p>The actions to perform on the network if the proposal is <code>APPROVED</code>.</p>
   */
  Actions?: ProposalActions;

  /**
   * <p>The unique identifier of the member that created the proposal.</p>
   */
  ProposedByMemberId?: string;

  /**
   * <p>The name of the member that created the proposal.</p>
   */
  ProposedByMemberName?: string;

  /**
   * <p>The status of the proposal. Values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The proposal is active and open for member voting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code> - The proposal was approved with sufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified proposal actions are carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved could not be completed because of an error. The <code>ACTION_FAILED</code> status occurs even if only one ProposalAction fails and other actions are successful.</p>
   *             </li>
   *          </ul>
   */
  Status?: ProposalStatus | string;

  /**
   * <p>
   *          The date and time that the proposal was created.
   *       </p>
   */
  CreationDate?: Date;

  /**
   * <p>
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> are not carried out.
   *       </p>
   */
  ExpirationDate?: Date;

  /**
   * <p>
   *          The current total of <code>YES</code> votes cast on the proposal by members.
   *       </p>
   */
  YesVoteCount?: number;

  /**
   * <p>
   *          The current total of <code>NO</code> votes cast on the proposal by members.
   *       </p>
   */
  NoVoteCount?: number;

  /**
   * <p>
   *          The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of <code>YES</code> votes and <code>NO</code> votes.
   *       </p>
   */
  OutstandingVoteCount?: number;
}

export namespace Proposal {
  export const filterSensitiveLog = (obj: Proposal): any => ({
    ...obj,
  });
}

export interface GetProposalOutput {
  /**
   * <p>Information about a proposal.</p>
   */
  Proposal?: Proposal;
}

export namespace GetProposalOutput {
  export const filterSensitiveLog = (obj: GetProposalOutput): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface IllegalActionException extends __SmithyException, $MetadataBearer {
  name: "IllegalActionException";
  $fault: "client";
  Message?: string;
}

export namespace IllegalActionException {
  export const filterSensitiveLog = (obj: IllegalActionException): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of network configuration properties.</p>
 */
export interface NetworkSummary {
  /**
   * <p>The unique identifier of the network.</p>
   */
  Id?: string;

  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>An optional description of the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework?: Framework | string;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>The current status of the network.</p>
   */
  Status?: NetworkStatus | string;

  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date;
}

export namespace NetworkSummary {
  export const filterSensitiveLog = (obj: NetworkSummary): any => ({
    ...obj,
  });
}

export enum InvitationStatus {
  ACCEPTED = "ACCEPTED",
  ACCEPTING = "ACCEPTING",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * <p>An invitation to an AWS account to create a member and join the network.</p>
 */
export interface Invitation {
  /**
   * <p>The unique identifier for the invitation.</p>
   */
  InvitationId?: string;

  /**
   * <p>The date and time that the invitation was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that the invitation expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, the invitee can no longer create a member and join the network using this <code>InvitationId</code>.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>The status of the invitation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The invitee has not created a member to join the network, and the invitation has not yet expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCEPTING</code> - The invitee has begun creating a member, and creation has not yet completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCEPTED</code> - The invitee created a member and joined the network using the <code>InvitationID</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The invitee rejected the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - The invitee neither created a member nor rejected the invitation before the <code>ExpirationDate</code>.</p>
   *             </li>
   *          </ul>
   */
  Status?: InvitationStatus | string;

  /**
   * <p>A summary of network configuration properties.</p>
   */
  NetworkSummary?: NetworkSummary;
}

export namespace Invitation {
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
}

export interface ListInvitationsInput {
  /**
   * <p>The maximum number of invitations to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsInput {
  export const filterSensitiveLog = (obj: ListInvitationsInput): any => ({
    ...obj,
  });
}

export interface ListInvitationsOutput {
  /**
   * <p>The invitations for the network.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsOutput {
  export const filterSensitiveLog = (obj: ListInvitationsOutput): any => ({
    ...obj,
  });
}

export interface ListMembersInput {
  /**
   * <p>The unique identifier of the network for which to list members.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The optional name of the member to list.</p>
   */
  Name?: string;

  /**
   * <p>An optional status specifier. If provided, only members currently in this status are listed.</p>
   */
  Status?: MemberStatus | string;

  /**
   * <p>An optional Boolean value. If provided, the request is limited either to
   *          members that the current AWS account owns (<code>true</code>) or that other AWS accounts
   *          own (<code>false</code>). If omitted, all members are listed.</p>
   */
  IsOwned?: boolean;

  /**
   * <p>The maximum number of members to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListMembersInput {
  export const filterSensitiveLog = (obj: ListMembersInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of configuration properties for a member.</p>
 */
export interface MemberSummary {
  /**
   * <p>The unique identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>An optional description of the member.</p>
   */
  Description?: string;

  /**
   * <p>The status of the member.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The AWS account is in the process of creating a member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The member has been created and can participate in the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - The AWS account attempted to create a member and creation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *          </ul>
   */
  Status?: MemberStatus | string;

  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>An indicator of whether the member is owned by your AWS account or a different AWS account.</p>
   */
  IsOwned?: boolean;
}

export namespace MemberSummary {
  export const filterSensitiveLog = (obj: MemberSummary): any => ({
    ...obj,
  });
}

export interface ListMembersOutput {
  /**
   * <p>An array of <code>MemberSummary</code> objects. Each object contains details about a network member.</p>
   */
  Members?: MemberSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListMembersOutput {
  export const filterSensitiveLog = (obj: ListMembersOutput): any => ({
    ...obj,
  });
}

export interface ListNetworksInput {
  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>An optional framework specifier. If provided, only networks of this framework type are listed.</p>
   */
  Framework?: Framework | string;

  /**
   * <p>An optional status specifier. If provided, only networks currently in this status are listed.</p>
   */
  Status?: NetworkStatus | string;

  /**
   * <p>The maximum number of networks to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListNetworksInput {
  export const filterSensitiveLog = (obj: ListNetworksInput): any => ({
    ...obj,
  });
}

export interface ListNetworksOutput {
  /**
   * <p>An array of <code>NetworkSummary</code> objects that contain configuration properties for each network.</p>
   */
  Networks?: NetworkSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListNetworksOutput {
  export const filterSensitiveLog = (obj: ListNetworksOutput): any => ({
    ...obj,
  });
}

export interface ListNodesInput {
  /**
   * <p>The unique identifier of the network for which to list nodes.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member who owns the nodes to list.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>An optional status specifier. If provided, only nodes currently in this status are listed.</p>
   */
  Status?: NodeStatus | string;

  /**
   * <p>The maximum number of nodes to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListNodesInput {
  export const filterSensitiveLog = (obj: ListNodesInput): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of configuration properties for a peer node.</p>
 */
export interface NodeSummary {
  /**
   * <p>The unique identifier of the node.</p>
   */
  Id?: string;

  /**
   * <p>The status of the node.</p>
   */
  Status?: NodeStatus | string;

  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The EC2 instance type for the node.</p>
   */
  InstanceType?: string;
}

export namespace NodeSummary {
  export const filterSensitiveLog = (obj: NodeSummary): any => ({
    ...obj,
  });
}

export interface ListNodesOutput {
  /**
   * <p>An array of <code>NodeSummary</code> objects that contain configuration properties for each node.</p>
   */
  Nodes?: NodeSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListNodesOutput {
  export const filterSensitiveLog = (obj: ListNodesOutput): any => ({
    ...obj,
  });
}

export interface ListProposalsInput {
  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The maximum number of proposals to return.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListProposalsInput {
  export const filterSensitiveLog = (obj: ListProposalsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Properties of a proposal.</p>
 */
export interface ProposalSummary {
  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   */
  ProposalId?: string;

  /**
   * <p>
   *          The description of the proposal.
   *       </p>
   */
  Description?: string;

  /**
   * <p>
   *          The unique identifier of the member that created the proposal.
   *       </p>
   */
  ProposedByMemberId?: string;

  /**
   * <p>
   *          The name of the member that created the proposal.
   *       </p>
   */
  ProposedByMemberName?: string;

  /**
   * <p>The status of the proposal. Values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The proposal is active and open for member voting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code> - The proposal was approved with sufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified proposal actions are carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> are not carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved could not be completed because of an error.</p>
   *             </li>
   *          </ul>
   */
  Status?: ProposalStatus | string;

  /**
   * <p>
   *          The date and time that the proposal was created.
   *       </p>
   */
  CreationDate?: Date;

  /**
   * <p>
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>.  After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> are not carried out.
   *       </p>
   */
  ExpirationDate?: Date;
}

export namespace ProposalSummary {
  export const filterSensitiveLog = (obj: ProposalSummary): any => ({
    ...obj,
  });
}

export interface ListProposalsOutput {
  /**
   * <p>The summary of each proposal made on the network.</p>
   */
  Proposals?: ProposalSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListProposalsOutput {
  export const filterSensitiveLog = (obj: ListProposalsOutput): any => ({
    ...obj,
  });
}

export interface ListProposalVotesInput {
  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   */
  ProposalId: string | undefined;

  /**
   * <p>
   *          The maximum number of votes to return.
   *       </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListProposalVotesInput {
  export const filterSensitiveLog = (obj: ListProposalVotesInput): any => ({
    ...obj,
  });
}

export enum VoteValue {
  NO = "NO",
  YES = "YES",
}

/**
 * <p>
 *          Properties of an individual vote that a member cast for a proposal.
 *       </p>
 */
export interface VoteSummary {
  /**
   * <p>
   *          The vote value, either <code>YES</code> or <code>NO</code>.
   *       </p>
   */
  Vote?: VoteValue | string;

  /**
   * <p>
   *          The name of the member that cast the vote.
   *       </p>
   */
  MemberName?: string;

  /**
   * <p>
   *          The unique identifier of the member that cast the vote.
   *       </p>
   */
  MemberId?: string;
}

export namespace VoteSummary {
  export const filterSensitiveLog = (obj: VoteSummary): any => ({
    ...obj,
  });
}

export interface ListProposalVotesOutput {
  /**
   * <p>
   *          The listing of votes.
   *       </p>
   */
  ProposalVotes?: VoteSummary[];

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListProposalVotesOutput {
  export const filterSensitiveLog = (obj: ListProposalVotesOutput): any => ({
    ...obj,
  });
}

export interface RejectInvitationInput {
  /**
   * <p>The unique identifier of the invitation to reject.</p>
   */
  InvitationId: string | undefined;
}

export namespace RejectInvitationInput {
  export const filterSensitiveLog = (obj: RejectInvitationInput): any => ({
    ...obj,
  });
}

export interface RejectInvitationOutput {}

export namespace RejectInvitationOutput {
  export const filterSensitiveLog = (obj: RejectInvitationOutput): any => ({
    ...obj,
  });
}

export interface UpdateMemberInput {
  /**
   * <p>The unique ID of the Managed Blockchain network to which the member belongs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique ID of the member.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>Configuration properties for publishing to Amazon CloudWatch Logs.</p>
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration;
}

export namespace UpdateMemberInput {
  export const filterSensitiveLog = (obj: UpdateMemberInput): any => ({
    ...obj,
  });
}

export interface UpdateMemberOutput {}

export namespace UpdateMemberOutput {
  export const filterSensitiveLog = (obj: UpdateMemberOutput): any => ({
    ...obj,
  });
}

export interface UpdateNodeInput {
  /**
   * <p>The unique ID of the Managed Blockchain network to which the node belongs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique ID of the member that owns the node.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The unique ID of the node.</p>
   */
  NodeId: string | undefined;

  /**
   * <p>Configuration properties for publishing to Amazon CloudWatch Logs.</p>
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;
}

export namespace UpdateNodeInput {
  export const filterSensitiveLog = (obj: UpdateNodeInput): any => ({
    ...obj,
  });
}

export interface UpdateNodeOutput {}

export namespace UpdateNodeOutput {
  export const filterSensitiveLog = (obj: UpdateNodeOutput): any => ({
    ...obj,
  });
}

export interface VoteOnProposalInput {
  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   */
  ProposalId: string | undefined;

  /**
   * <p>The unique identifier of the member casting the vote.
   *       </p>
   */
  VoterMemberId: string | undefined;

  /**
   * <p>
   *          The value of the vote.
   *       </p>
   */
  Vote: VoteValue | string | undefined;
}

export namespace VoteOnProposalInput {
  export const filterSensitiveLog = (obj: VoteOnProposalInput): any => ({
    ...obj,
  });
}

export interface VoteOnProposalOutput {}

export namespace VoteOnProposalOutput {
  export const filterSensitiveLog = (obj: VoteOnProposalOutput): any => ({
    ...obj,
  });
}
