// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ManagedBlockchainServiceException as __BaseException } from "./ManagedBlockchainServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

export enum AccessorStatus {
  AVAILABLE = "AVAILABLE",
  DELETED = "DELETED",
  PENDING_DELETION = "PENDING_DELETION",
}

export enum AccessorType {
  BILLING_TOKEN = "BILLING_TOKEN",
}

/**
 * <important>
 *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
 *         subject to change. We recommend that you use this feature only with
 *         test scenarios, and not in production environments.</p>
 *          </important>
 *          <p>The properties of the Accessor.</p>
 */
export interface Accessor {
  /**
   * <p>The unique identifier of the accessor.</p>
   */
  Id?: string;

  /**
   * <p>The type of the accessor.</p>
   *          <note>
   *             <p>Currently accessor type is restricted to <code>BILLING_TOKEN</code>.</p>
   *          </note>
   */
  Type?: AccessorType | string;

  /**
   * <p>The billing token is a property of the accessor. Use this token to make Ethereum API calls to your
   *          Ethereum node. The billing token is used to track your accessor object for billing Ethereum API
   *          requests made to your Ethereum nodes.</p>
   */
  BillingToken?: string;

  /**
   * <p>The current status of the accessor.</p>
   */
  Status?: AccessorStatus | string;

  /**
   * <p>The creation date and time of the accessor.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the accessor. For more information about
   *          ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *             Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
}

/**
 * <important>
 *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
 *         subject to change. We recommend that you use this feature only with
 *         test scenarios, and not in production environments.</p>
 *          </important>
 *          <p>A summary of accessor properties.</p>
 */
export interface AccessorSummary {
  /**
   * <p>The unique identifier of the accessor.</p>
   */
  Id?: string;

  /**
   * <p>The type of the accessor.</p>
   *          <note>
   *             <p>Currently accessor type is restricted to <code>BILLING_TOKEN</code>.</p>
   *          </note>
   */
  Type?: AccessorType | string;

  /**
   * <p>The current status of the accessor.</p>
   */
  Status?: AccessorStatus | string;

  /**
   * <p>The creation date and time of the accessor.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the accessor. For more information about
   *          ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *             Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
}

export enum ThresholdComparator {
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
}

/**
 * <p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 */
export interface ApprovalThresholdPolicy {
  /**
   * <p>The percentage of votes among all members that must be <code>YES</code> for a proposal to be approved. For example, a <code>ThresholdPercentage</code> value of <code>50</code> indicates 50%. The <code>ThresholdComparator</code> determines the precise comparison. If a <code>ThresholdPercentage</code> value of <code>50</code> is specified on a network with 10 members, along with a <code>ThresholdComparator</code> value of <code>GREATER_THAN</code>, this indicates that 6 <code>YES</code> votes are required for the proposal to be approved.</p>
   */
  ThresholdPercentage?: number;

  /**
   * <p>The duration from the time that a proposal is created until it expires. If members cast neither the required number of <code>YES</code> votes to approve the proposal nor the number of <code>NO</code> votes required to reject it before the duration expires, the proposal is <code>EXPIRED</code> and <code>ProposalActions</code> aren't carried out.</p>
   */
  ProposalDurationInHours?: number;

  /**
   * <p>Determines whether the vote percentage must be greater than the <code>ThresholdPercentage</code> or must be greater than or equal to the <code>ThreholdPercentage</code> to be approved.</p>
   */
  ThresholdComparator?: ThresholdComparator | string;
}

export interface CreateAccessorInput {
  /**
   * <p>This is a unique, case-sensitive identifier that you provide to ensure the idempotency of
   *          the operation. An idempotent operation completes no more than once. This
   *          identifier is required only if you make a service request directly using
   *          an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the
   *          Amazon Web Services CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The type of accessor.</p>
   *          <note>
   *             <p>Currently accessor type is restricted to <code>BILLING_TOKEN</code>.</p>
   *          </note>
   */
  AccessorType: AccessorType | string | undefined;
}

export interface CreateAccessorOutput {
  /**
   * <p>The unique identifier of the accessor.</p>
   */
  AccessorId?: string;

  /**
   * <p>The billing token is a property of the Accessor. Use this token to make Ethereum API calls to
   *          your Ethereum node. The billing token is used to track your accessor object for billing Ethereum
   *          API requests made to your Ethereum nodes.</p>
   */
  BillingToken?: string;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
  }
}

/**
 * <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource request is issued for a resource that already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of resources of that type already exist. Ensure the resources requested
 *          are within the boundaries of the service edition and your account limits.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
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
   * <p>The password for the member's initial administrative user. The <code>AdminPassword</code> must be at least eight characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quotation mark (‘), a double quotation marks (“), a forward slash(/), a backward slash(\), @, or a space.</p>
   */
  AdminPassword: string | undefined;
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

/**
 * <p>A configuration for logging events.</p>
 */
export interface LogConfiguration {
  /**
   * <p>Indicates whether logging is enabled.</p>
   */
  Enabled?: boolean;
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

/**
 * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface MemberFabricLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a member's Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.</p>
   */
  CaLogs?: LogConfigurations;
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

/**
 * <p>Configuration properties of the member.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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

  /**
   * <p>Tags assigned to the member. Tags consist of a key and optional value. For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   *          <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) to use for encryption at rest in the member. This parameter is inherited by any nodes that this member creates. For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   *          <p>Use one of the following options to specify this parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Undefined or empty string</b> - By default, use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>A valid symmetric customer managed KMS key</b> - Use the specified KMS key in your account that you create, own, and manage.</p>
   *                <p>Amazon Managed Blockchain doesn't support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *                <p>The following is an example of a KMS key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyArn?: string;
}

export interface CreateMemberInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.</p>
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

export interface CreateMemberOutput {
  /**
   * <p>The unique identifier of the member.</p>
   */
  MemberId?: string;
}

/**
 * <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>A requested resource doesn't exist. It may have been deleted or referenced inaccurately.</p>
   */
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>The requested resource exists but isn't in a status that can complete the operation.</p>
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p></p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p></p>
   */
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

export enum Framework {
  ETHEREUM = "ETHEREUM",
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

/**
 * <p>
 *          The voting rules for the network to decide if a proposal is accepted
 *       </p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 */
export interface VotingPolicy {
  /**
   * <p>Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
   */
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
}

export interface CreateNetworkInput {
  /**
   * <p>This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once. This identifier is required only
   *          if you make a service request directly using an HTTP client. It is generated automatically if you
   *          use an Amazon Web Services SDK or the Amazon Web Services CLI.
   *       </p>
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

  /**
   * <p>Tags to assign to the network. Each tag consists of a key and optional value.</p>
   *          <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  Tags?: Record<string, string>;
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

/**
 * <p>Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.</p>
 */
export interface NodeLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
   */
  Fabric?: NodeFabricLogPublishingConfiguration;
}

export enum StateDBType {
  CouchDB = "CouchDB",
  LevelDB = "LevelDB",
}

/**
 * <p>Configuration properties of a node.</p>
 */
export interface NodeConfiguration {
  /**
   * <p>The Amazon Managed Blockchain instance type for the node.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The Availability Zone in which the node exists. Required for Ethereum nodes. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.
   *       </p>
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;

  /**
   * <p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>. When using an Amazon Managed Blockchain network with Hyperledger Fabric version 1.4 or later, the default is <code>CouchDB</code>.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  StateDB?: StateDBType | string;
}

export interface CreateNodeInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The unique identifier of the network for the node.</p>
   *          <p>Ethereum public networks have the following <code>NetworkId</code>s:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-mainnet</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-goerli</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-rinkeby</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-ropsten</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns this node.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  MemberId?: string;

  /**
   * <p>The properties of a node configuration.</p>
   */
  NodeConfiguration: NodeConfiguration | undefined;

  /**
   * <p>Tags to assign to the node. Each tag consists of a key and optional value.</p>
   *          <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateNodeOutput {
  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId?: string;
}

/**
 * <p>An action to invite a specific Amazon Web Services account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 */
export interface InviteAction {
  /**
   * <p>The Amazon Web Services account ID to invite.</p>
   */
  Principal: string | undefined;
}

/**
 * <p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 */
export interface RemoveAction {
  /**
   * <p>The unique identifier of the member to remove.</p>
   */
  MemberId: string | undefined;
}

/**
 * <p>
 *          The actions to carry out if a proposal is <code>APPROVED</code>.
 *       </p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 */
export interface ProposalActions {
  /**
   * <p>
   *          The actions to perform for an <code>APPROVED</code> proposal to invite an Amazon Web Services account to create a member and join the network.
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

export interface CreateProposalInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>
   *          The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that is creating the proposal. This
   *          identifier is especially useful for identifying the member making the proposal
   *          when multiple members exist in a single Amazon Web Services account.</p>
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

  /**
   * <p>Tags to assign to the proposal. Each tag consists of a key and optional value.</p>
   *          <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource. If the proposal is for a network invitation, the invitation inherits the tags added to the proposal.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateProposalOutput {
  /**
   * <p>The unique identifier of the proposal.</p>
   */
  ProposalId?: string;
}

export interface DeleteAccessorInput {
  /**
   * <p>The unique identifier of the accessor.</p>
   */
  AccessorId: string | undefined;
}

export interface DeleteAccessorOutput {}

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

export interface DeleteMemberOutput {}

export interface DeleteNodeInput {
  /**
   * <p>The unique identifier of the network that the node is on.</p>
   *          <p>Ethereum public networks have the following <code>NetworkId</code>s:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-mainnet</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-goerli</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-rinkeby</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-ropsten</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns this node.</p>
   *          <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
   */
  MemberId?: string;

  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId: string | undefined;
}

export interface DeleteNodeOutput {}

export interface GetAccessorInput {
  /**
   * <p>The unique identifier of the accessor.</p>
   */
  AccessorId: string | undefined;
}

export interface GetAccessorOutput {
  /**
   * <p>The properties of the accessor.</p>
   */
  Accessor?: Accessor;
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

/**
 * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 */
export interface MemberFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: MemberFabricAttributes;
}

export enum MemberStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  INACCESSIBLE_ENCRYPTION_KEY = "INACCESSIBLE_ENCRYPTION_KEY",
  UPDATING = "UPDATING",
}

/**
 * <p>Member configuration properties.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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
   *                   <code>CREATING</code> - The Amazon Web Services account is in the process of creating a member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The member has been created and can participate in the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - The Amazon Web Services account attempted to create a member and creation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The member is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACCESSIBLE_ENCRYPTION_KEY</code> - The member is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.</p>
   *                <p>The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the member resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.</p>
   *             </li>
   *          </ul>
   */
  Status?: MemberStatus | string;

  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Tags assigned to the member. Tags consist of a key and optional value. For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the member uses for encryption at rest. If the value of this parameter is <code>"AWS Owned KMS Key"</code>, the member uses an Amazon Web Services owned KMS key for encryption. This parameter is inherited by the nodes that this member owns.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  KmsKeyArn?: string;
}

export interface GetMemberOutput {
  /**
   * <p>The properties of a member.</p>
   */
  Member?: Member;
}

export interface GetNetworkInput {
  /**
   * <p>The unique identifier of the network to get information about.</p>
   */
  NetworkId: string | undefined;
}

/**
 * <p>Attributes of Ethereum for a network. </p>
 */
export interface NetworkEthereumAttributes {
  /**
   * <p>The Ethereum <code>CHAIN_ID</code> associated with the Ethereum network. Chain IDs are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>mainnet = <code>1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>goerli = <code>5</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>rinkeby = <code>4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ropsten = <code>3</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ChainId?: string;
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

/**
 * <p>Attributes relevant to the network for the blockchain framework that the network uses.</p>
 */
export interface NetworkFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: NetworkFabricAttributes;

  /**
   * <p>Attributes of an Ethereum network for Managed Blockchain resources participating in an Ethereum network. </p>
   */
  Ethereum?: NetworkEthereumAttributes;
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

  /**
   * <p>Tags assigned to the network. Each tag consists of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
}

export interface GetNetworkOutput {
  /**
   * <p>An object containing network configuration parameters.</p>
   */
  Network?: Network;
}

export interface GetNodeInput {
  /**
   * <p>The unique identifier of the network that the node is on.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns the node.</p>
   *          <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
   */
  MemberId?: string;

  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId: string | undefined;
}

/**
 * <p>Attributes of an Ethereum node.</p>
 */
export interface NodeEthereumAttributes {
  /**
   * <p>The endpoint on which the Ethereum node listens to run Ethereum API methods over HTTP connections from a client. Use this endpoint in client code for smart contracts when using an HTTP connection. Connections to this endpoint are authenticated using <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   */
  HttpEndpoint?: string;

  /**
   * <p>The endpoint on which the Ethereum node listens to run Ethereum JSON-RPC methods over WebSocket connections from a client. Use this endpoint in client code for smart contracts when using a WebSocket connection. Connections to this endpoint are authenticated using <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   */
  WebSocketEndpoint?: string;
}

/**
 * <p>Attributes of Hyperledger Fabric for a peer node on a Hyperledger Fabric network on Managed Blockchain.</p>
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

/**
 * <p>Attributes relevant to a node on a Managed Blockchain network for the blockchain framework that the network uses.</p>
 */
export interface NodeFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: NodeFabricAttributes;

  /**
   * <p>Attributes of Ethereum for a node on a Managed Blockchain network that uses Ethereum. </p>
   */
  Ethereum?: NodeEthereumAttributes;
}

export enum NodeStatus {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED = "FAILED",
  INACCESSIBLE_ENCRYPTION_KEY = "INACCESSIBLE_ENCRYPTION_KEY",
  UNHEALTHY = "UNHEALTHY",
  UPDATING = "UPDATING",
}

/**
 * <p>Configuration properties of a node.</p>
 */
export interface Node {
  /**
   * <p>The unique identifier of the network that the node is on.</p>
   */
  NetworkId?: string;

  /**
   * <p>The unique identifier of the member to which the node belongs.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
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
   * <p>The Availability Zone in which the node exists. Required for Ethereum nodes. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Attributes of the blockchain framework being used.</p>
   */
  FrameworkAttributes?: NodeFrameworkAttributes;

  /**
   * <p>Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.</p>
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;

  /**
   * <p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  StateDB?: StateDBType | string;

  /**
   * <p>The status of the node.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The Amazon Web Services account is in the process of creating a node.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The node has been created and can participate in the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNHEALTHY</code> - The node is impaired and might not function as expected. Amazon Managed Blockchain automatically finds nodes in this state and tries to recover them. If a node is recoverable, it returns to <code>AVAILABLE</code>. Otherwise, it moves to <code>FAILED</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - The Amazon Web Services account attempted to create a node and creation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The node is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The node is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The node can no longer participate on the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The node is no longer functional, cannot be recovered, and must be deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACCESSIBLE_ENCRYPTION_KEY</code> - The node is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.</p>
   *                <p>The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the node resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.</p>
   *             </li>
   *          </ul>
   */
  Status?: NodeStatus | string;

  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Tags assigned to the node. Each tag consists of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the node uses for encryption at rest. If the value of this parameter is <code>"AWS Owned KMS Key"</code>, the node uses an Amazon Web Services owned KMS key for encryption. The node inherits this parameter from the member that it belongs to.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  KmsKeyArn?: string;
}

export interface GetNodeOutput {
  /**
   * <p>Properties of the node configuration.</p>
   */
  Node?: Node;
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

export enum ProposalStatus {
  ACTION_FAILED = "ACTION_FAILED",
  APPROVED = "APPROVED",
  EXPIRED = "EXPIRED",
  IN_PROGRESS = "IN_PROGRESS",
  REJECTED = "REJECTED",
}

/**
 * <p>Properties of a proposal on a Managed Blockchain network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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
   *                   <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> aren't carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - Members didn't cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> aren't carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved couldn't be completed because of an error. The <code>ACTION_FAILED</code> status occurs even if only one ProposalAction fails and other actions are successful.</p>
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
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> aren't carried out.
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

  /**
   * <p>Tags assigned to the proposal. Each tag consists of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
}

export interface GetProposalOutput {
  /**
   * <p>Information about a proposal.</p>
   */
  Proposal?: Proposal;
}

/**
 * <p></p>
 */
export class IllegalActionException extends __BaseException {
  readonly name: "IllegalActionException" = "IllegalActionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalActionException, __BaseException>) {
    super({
      name: "IllegalActionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalActionException.prototype);
    this.Message = opts.Message;
  }
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

  /**
   * <p>The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
}

export enum InvitationStatus {
  ACCEPTED = "ACCEPTED",
  ACCEPTING = "ACCEPTING",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * <p>An invitation to an Amazon Web Services account to create a member and join the network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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
   *                   <code>PENDING</code> - The invitee hasn't created a member to join the network, and the invitation hasn't yet expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCEPTING</code> - The invitee has begun creating a member, and creation hasn't yet completed.</p>
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

  /**
   * <p>The Amazon Resource Name (ARN) of the invitation. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
}

export interface ListAccessorsInput {
  /**
   * <p> The maximum number of accessors to list.</p>
   */
  MaxResults?: number;

  /**
   * <p> The pagination token that indicates the next set of results to retrieve. </p>
   */
  NextToken?: string;
}

export interface ListAccessorsOutput {
  /**
   * <p>An array of AccessorSummary objects that contain configuration properties for
   *          each accessor.</p>
   */
  Accessors?: AccessorSummary[];

  /**
   * <p> The pagination token that indicates the next set of results to retrieve. </p>
   */
  NextToken?: string;
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
   *          members that the current Amazon Web Services account owns (<code>true</code>) or that other Amazon Web Services accountsn
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

/**
 * <p>A summary of configuration properties for a member.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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
   *                   <code>CREATING</code> - The Amazon Web Services account is in the process of creating a member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The member has been created and can participate in the network.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> - The Amazon Web Services account attempted to create a member and creation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The member is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code>
   *                   <code>PROPOSAL</code> to remove the member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACCESSIBLE_ENCRYPTION_KEY</code> - The member is impaired and might not function as expected because it cannot access the specified customer managed key in Key Management Service (KMS) for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.</p>
   *                <p>The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the member resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.</p>
   *             </li>
   *          </ul>
   */
  Status?: MemberStatus | string;

  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>An indicator of whether the member is owned by your Amazon Web Services account or a different Amazon Web Services account.</p>
   */
  IsOwned?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
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
   *          <p>Applies only to Hyperledger Fabric.</p>
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

export interface ListNodesInput {
  /**
   * <p>The unique identifier of the network for which to list nodes.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member who owns the nodes to list.</p>
   *          <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
   */
  MemberId?: string;

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

/**
 * <p>A summary of configuration properties for a node.</p>
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

  /**
   * <p>The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
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

/**
 * <p>Properties of a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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
   *                   <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> aren't carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> - Members didn't cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> aren't carried out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved couldn't be completed because of an error.</p>
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
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>.  After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> aren't carried out.
   *       </p>
   */
  ExpirationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;
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

export enum VoteValue {
  NO = "NO",
  YES = "YES",
}

/**
 * <p>
 *          Properties of an individual vote that a member cast for a proposal.
 *       </p>
 *          <p>Applies only to Hyperledger Fabric.</p>
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

export interface ListProposalVotesOutput {
  /**
   * <p>
   *          The list of votes.
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags assigned to the resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface RejectInvitationInput {
  /**
   * <p>The unique identifier of the invitation to reject.</p>
   */
  InvitationId: string | undefined;
}

export interface RejectInvitationOutput {}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the specified resource. Tag values can be empty, for example, <code>"MyTagKey" : ""</code>. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateMemberInput {
  /**
   * <p>The unique identifier of the Managed Blockchain network to which the member belongs.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>Configuration properties for publishing to Amazon CloudWatch Logs.</p>
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration;
}

export interface UpdateMemberOutput {}

export interface UpdateNodeInput {
  /**
   * <p>The unique identifier of the network that the node is on.</p>
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns the node.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   */
  MemberId?: string;

  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId: string | undefined;

  /**
   * <p>Configuration properties for publishing to Amazon CloudWatch Logs.</p>
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration;
}

export interface UpdateNodeOutput {}

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

export interface VoteOnProposalOutput {}

/**
 * @internal
 */
export const AccessorFilterSensitiveLog = (obj: Accessor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessorSummaryFilterSensitiveLog = (obj: AccessorSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApprovalThresholdPolicyFilterSensitiveLog = (obj: ApprovalThresholdPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessorInputFilterSensitiveLog = (obj: CreateAccessorInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessorOutputFilterSensitiveLog = (obj: CreateAccessorOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFabricConfigurationFilterSensitiveLog = (obj: MemberFabricConfiguration): any => ({
  ...obj,
  ...(obj.AdminPassword && { AdminPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MemberFrameworkConfigurationFilterSensitiveLog = (obj: MemberFrameworkConfiguration): any => ({
  ...obj,
  ...(obj.Fabric && { Fabric: MemberFabricConfigurationFilterSensitiveLog(obj.Fabric) }),
});

/**
 * @internal
 */
export const LogConfigurationFilterSensitiveLog = (obj: LogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogConfigurationsFilterSensitiveLog = (obj: LogConfigurations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFabricLogPublishingConfigurationFilterSensitiveLog = (
  obj: MemberFabricLogPublishingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberLogPublishingConfigurationFilterSensitiveLog = (obj: MemberLogPublishingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberConfigurationFilterSensitiveLog = (obj: MemberConfiguration): any => ({
  ...obj,
  ...(obj.FrameworkConfiguration && {
    FrameworkConfiguration: MemberFrameworkConfigurationFilterSensitiveLog(obj.FrameworkConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateMemberInputFilterSensitiveLog = (obj: CreateMemberInput): any => ({
  ...obj,
  ...(obj.MemberConfiguration && {
    MemberConfiguration: MemberConfigurationFilterSensitiveLog(obj.MemberConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateMemberOutputFilterSensitiveLog = (obj: CreateMemberOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFabricConfigurationFilterSensitiveLog = (obj: NetworkFabricConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFrameworkConfigurationFilterSensitiveLog = (obj: NetworkFrameworkConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VotingPolicyFilterSensitiveLog = (obj: VotingPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNetworkInputFilterSensitiveLog = (obj: CreateNetworkInput): any => ({
  ...obj,
  ...(obj.MemberConfiguration && {
    MemberConfiguration: MemberConfigurationFilterSensitiveLog(obj.MemberConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateNetworkOutputFilterSensitiveLog = (obj: CreateNetworkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFabricLogPublishingConfigurationFilterSensitiveLog = (
  obj: NodeFabricLogPublishingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeLogPublishingConfigurationFilterSensitiveLog = (obj: NodeLogPublishingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeConfigurationFilterSensitiveLog = (obj: NodeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNodeInputFilterSensitiveLog = (obj: CreateNodeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNodeOutputFilterSensitiveLog = (obj: CreateNodeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InviteActionFilterSensitiveLog = (obj: InviteAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveActionFilterSensitiveLog = (obj: RemoveAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProposalActionsFilterSensitiveLog = (obj: ProposalActions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProposalInputFilterSensitiveLog = (obj: CreateProposalInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProposalOutputFilterSensitiveLog = (obj: CreateProposalOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessorInputFilterSensitiveLog = (obj: DeleteAccessorInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessorOutputFilterSensitiveLog = (obj: DeleteAccessorOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMemberInputFilterSensitiveLog = (obj: DeleteMemberInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMemberOutputFilterSensitiveLog = (obj: DeleteMemberOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNodeInputFilterSensitiveLog = (obj: DeleteNodeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNodeOutputFilterSensitiveLog = (obj: DeleteNodeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessorInputFilterSensitiveLog = (obj: GetAccessorInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessorOutputFilterSensitiveLog = (obj: GetAccessorOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMemberInputFilterSensitiveLog = (obj: GetMemberInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFabricAttributesFilterSensitiveLog = (obj: MemberFabricAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFrameworkAttributesFilterSensitiveLog = (obj: MemberFrameworkAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFilterSensitiveLog = (obj: Member): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMemberOutputFilterSensitiveLog = (obj: GetMemberOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkInputFilterSensitiveLog = (obj: GetNetworkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkEthereumAttributesFilterSensitiveLog = (obj: NetworkEthereumAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFabricAttributesFilterSensitiveLog = (obj: NetworkFabricAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFrameworkAttributesFilterSensitiveLog = (obj: NetworkFrameworkAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFilterSensitiveLog = (obj: Network): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNetworkOutputFilterSensitiveLog = (obj: GetNetworkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNodeInputFilterSensitiveLog = (obj: GetNodeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeEthereumAttributesFilterSensitiveLog = (obj: NodeEthereumAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFabricAttributesFilterSensitiveLog = (obj: NodeFabricAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFrameworkAttributesFilterSensitiveLog = (obj: NodeFrameworkAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFilterSensitiveLog = (obj: Node): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNodeOutputFilterSensitiveLog = (obj: GetNodeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProposalInputFilterSensitiveLog = (obj: GetProposalInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProposalFilterSensitiveLog = (obj: Proposal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProposalOutputFilterSensitiveLog = (obj: GetProposalOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkSummaryFilterSensitiveLog = (obj: NetworkSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvitationFilterSensitiveLog = (obj: Invitation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessorsInputFilterSensitiveLog = (obj: ListAccessorsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessorsOutputFilterSensitiveLog = (obj: ListAccessorsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvitationsInputFilterSensitiveLog = (obj: ListInvitationsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvitationsOutputFilterSensitiveLog = (obj: ListInvitationsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersInputFilterSensitiveLog = (obj: ListMembersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberSummaryFilterSensitiveLog = (obj: MemberSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersOutputFilterSensitiveLog = (obj: ListMembersOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworksInputFilterSensitiveLog = (obj: ListNetworksInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNetworksOutputFilterSensitiveLog = (obj: ListNetworksOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodesInputFilterSensitiveLog = (obj: ListNodesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeSummaryFilterSensitiveLog = (obj: NodeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodesOutputFilterSensitiveLog = (obj: ListNodesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProposalsInputFilterSensitiveLog = (obj: ListProposalsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProposalSummaryFilterSensitiveLog = (obj: ProposalSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProposalsOutputFilterSensitiveLog = (obj: ListProposalsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProposalVotesInputFilterSensitiveLog = (obj: ListProposalVotesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoteSummaryFilterSensitiveLog = (obj: VoteSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProposalVotesOutputFilterSensitiveLog = (obj: ListProposalVotesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectInvitationInputFilterSensitiveLog = (obj: RejectInvitationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectInvitationOutputFilterSensitiveLog = (obj: RejectInvitationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberInputFilterSensitiveLog = (obj: UpdateMemberInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberOutputFilterSensitiveLog = (obj: UpdateMemberOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNodeInputFilterSensitiveLog = (obj: UpdateNodeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNodeOutputFilterSensitiveLog = (obj: UpdateNodeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoteOnProposalInputFilterSensitiveLog = (obj: VoteOnProposalInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoteOnProposalOutputFilterSensitiveLog = (obj: VoteOnProposalOutput): any => ({
  ...obj,
});
