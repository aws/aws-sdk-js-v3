// smithy-typescript generated code
import type {
  AccessorNetworkType,
  AccessorStatus,
  AccessorType,
  Edition,
  Framework,
  InvitationStatus,
  MemberStatus,
  NetworkStatus,
  NodeStatus,
  ProposalStatus,
  StateDBType,
  ThresholdComparator,
  VoteValue,
} from "./enums";

/**
 * The properties of the Accessor.
 *
 * @public
 */
export interface Accessor {
  /**
   * The unique identifier of the accessor.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the accessor.
   *
   * > **Note:** Currently, accessor type is restricted to `BILLING_TOKEN`.
   *
   * @public
   */
  Type?: AccessorType | undefined;

  /**
   * The billing token is a property of the Accessor. Use this token to when making calls to the blockchain network. The billing token is used to track your accessor token for billing requests.
   *
   * @public
   */
  BillingToken?: string | undefined;

  /**
   * The current status of the accessor.
   *
   * @public
   */
  Status?: AccessorStatus | undefined;

  /**
   * The creation date and time of the accessor.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the accessor. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tags assigned to the Accessor.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The blockchain network that the Accessor token is created for.
   *
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * A summary of accessor properties.
 *
 * @public
 */
export interface AccessorSummary {
  /**
   * The unique identifier of the accessor.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the accessor.
   *
   * > **Note:** Currently accessor type is restricted to `BILLING_TOKEN`.
   *
   * @public
   */
  Type?: AccessorType | undefined;

  /**
   * The current status of the accessor.
   *
   * @public
   */
  Status?: AccessorStatus | undefined;

  /**
   * The creation date and time of the accessor.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the accessor. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The blockchain network that the Accessor token is created for.
   *
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of `YES` votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface ApprovalThresholdPolicy {
  /**
   * The percentage of votes among all members that must be `YES` for a proposal to be approved. For example, a `ThresholdPercentage` value of `50` indicates 50%. The `ThresholdComparator` determines the precise comparison. If a `ThresholdPercentage` value of `50` is specified on a network with 10 members, along with a `ThresholdComparator` value of `GREATER_THAN`, this indicates that 6 `YES` votes are required for the proposal to be approved.
   *
   * @public
   */
  ThresholdPercentage?: number | undefined;

  /**
   * The duration from the time that a proposal is created until it expires. If members cast neither the required number of `YES` votes to approve the proposal nor the number of `NO` votes required to reject it before the duration expires, the proposal is `EXPIRED` and `ProposalActions` aren't carried out.
   *
   * @public
   */
  ProposalDurationInHours?: number | undefined;

  /**
   * Determines whether the vote percentage must be greater than the `ThresholdPercentage` or must be greater than or equal to the `ThresholdPercentage` to be approved.
   *
   * @public
   */
  ThresholdComparator?: ThresholdComparator | undefined;
}

/**
 * @public
 */
export interface CreateAccessorInput {
  /**
   * This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The type of accessor.
   *
   * > **Note:** Currently, accessor type is restricted to `BILLING_TOKEN`.
   *
   * @public
   */
  AccessorType: AccessorType | undefined;

  /**
   * Tags to assign to the Accessor.
   *
   * Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The blockchain network that the `Accessor` token is created for.
   *
   * > **Note:**
   * >
   * > - Use the actual `networkType` value for the blockchain network that you are creating the `Accessor` token for.
   * > - With the shut down of the *Ethereum Goerli* and *Polygon Mumbai Testnet* networks the following `networkType` values are no longer available for selection and use.
   * >
   * >   - `ETHEREUM_MAINNET_AND_GOERLI`
   * >   - `ETHEREUM_GOERLI`
   * >   - `POLYGON_MUMBAI`
   * >
   * >   However, your existing `Accessor` tokens with these `networkType` values will remain unchanged.
   *
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * @public
 */
export interface CreateAccessorOutput {
  /**
   * The unique identifier of the accessor.
   *
   * @public
   */
  AccessorId?: string | undefined;

  /**
   * The billing token is a property of the Accessor. Use this token to when making calls to the blockchain network. The billing token is used to track your accessor token for billing requests.
   *
   * @public
   */
  BillingToken?: string | undefined;

  /**
   * The blockchain network that the accessor token is created for.
   *
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.
 *
 * @public
 */
export interface MemberFabricConfiguration {
  /**
   * The user name for the member's initial administrative user.
   *
   * @public
   */
  AdminUsername: string | undefined;

  /**
   * The password for the member's initial administrative user. The `AdminPassword` must be at least 8 characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quotation mark (‘), a double quotation marks (“), a forward slash(/), a backward slash(\), @, or a space.
   *
   * @public
   */
  AdminPassword: string | undefined;
}

/**
 * Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.
 *
 * @public
 */
export interface MemberFrameworkConfiguration {
  /**
   * Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.
   *
   * @public
   */
  Fabric?: MemberFabricConfiguration | undefined;
}

/**
 * A configuration for logging events.
 *
 * @public
 */
export interface LogConfiguration {
  /**
   * Indicates whether logging is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * A collection of log configurations.
 *
 * @public
 */
export interface LogConfigurations {
  /**
   * Parameters for publishing logs to Amazon CloudWatch Logs.
   *
   * @public
   */
  Cloudwatch?: LogConfiguration | undefined;
}

/**
 * Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.
 *
 * @public
 */
export interface MemberFabricLogPublishingConfiguration {
  /**
   * Configuration properties for logging events associated with a member's Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.
   *
   * @public
   */
  CaLogs?: LogConfigurations | undefined;
}

/**
 * Configuration properties for logging events associated with a member of a Managed Blockchain network.
 *
 * @public
 */
export interface MemberLogPublishingConfiguration {
  /**
   * Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.
   *
   * @public
   */
  Fabric?: MemberFabricLogPublishingConfiguration | undefined;
}

/**
 * Configuration properties of the member.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface MemberConfiguration {
  /**
   * The name of the member.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional description of the member.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration properties of the blockchain framework relevant to the member.
   *
   * @public
   */
  FrameworkConfiguration: MemberFrameworkConfiguration | undefined;

  /**
   * Configuration properties for logging events associated with a member of a Managed Blockchain network.
   *
   * @public
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration | undefined;

  /**
   * Tags assigned to the member. Tags consist of a key and optional value.
   *
   * When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) to use for encryption at rest in the member. This parameter is inherited by any nodes that this member creates. For more information, see [Encryption at Rest](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * Use one of the following options to specify this parameter:
   *
   * - **Undefined or empty string** - By default, use an KMS key that is owned and managed by Amazon Web Services on your behalf.
   * - **A valid symmetric customer managed KMS key** - Use the specified KMS key in your account that you create, own, and manage.
   *
   *   Amazon Managed Blockchain doesn't support asymmetric keys. For more information, see [Using symmetric and asymmetric keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
   *
   *   The following is an example of a KMS key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMemberInput {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The unique identifier of the invitation that is sent to the member to join the network.
   *
   * @public
   */
  InvitationId: string | undefined;

  /**
   * The unique identifier of the network in which the member is created.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * Member configuration parameters.
   *
   * @public
   */
  MemberConfiguration: MemberConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMemberOutput {
  /**
   * The unique identifier of the member.
   *
   * @public
   */
  MemberId?: string | undefined;
}

/**
 * Hyperledger Fabric configuration properties for the network.
 *
 * @public
 */
export interface NetworkFabricConfiguration {
  /**
   * The edition of Amazon Managed Blockchain that the network uses. For more information, see [Amazon Managed Blockchain Pricing](http://aws.amazon.com/managed-blockchain/pricing/).
   *
   * @public
   */
  Edition: Edition | undefined;
}

/**
 * Configuration properties relevant to the network for the blockchain framework that the network uses.
 *
 * @public
 */
export interface NetworkFrameworkConfiguration {
  /**
   * Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric.
   *
   * @public
   */
  Fabric?: NetworkFabricConfiguration | undefined;
}

/**
 * The voting rules for the network to decide if a proposal is accepted
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface VotingPolicy {
  /**
   * Defines the rules for the network for voting on proposals, such as the percentage of `YES` votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
   *
   * @public
   */
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInput {
  /**
   * This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the Amazon Web Services CLI.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the network.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional description for the network.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The blockchain framework that the network uses.
   *
   * @public
   */
  Framework: Framework | undefined;

  /**
   * The version of the blockchain framework that the network uses.
   *
   * @public
   */
  FrameworkVersion: string | undefined;

  /**
   * Configuration properties of the blockchain framework relevant to the network configuration.
   *
   * @public
   */
  FrameworkConfiguration?: NetworkFrameworkConfiguration | undefined;

  /**
   * The voting rules used by the network to determine if a proposal is approved.
   *
   * @public
   */
  VotingPolicy: VotingPolicy | undefined;

  /**
   * Configuration properties for the first member within the network.
   *
   * @public
   */
  MemberConfiguration: MemberConfiguration | undefined;

  /**
   * Tags to assign to the network.
   *
   * Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNetworkOutput {
  /**
   * The unique identifier for the network.
   *
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * The unique identifier for the first member within the network.
   *
   * @public
   */
  MemberId?: string | undefined;
}

/**
 * Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.
 *
 * @public
 */
export interface NodeFabricLogPublishingConfiguration {
  /**
   * Configuration properties for logging events associated with chaincode execution on a peer node. Chaincode logs contain the results of instantiating, invoking, and querying the chaincode. A peer can run multiple instances of chaincode. When enabled, a log stream is created for all chaincodes, with an individual log stream for each chaincode.
   *
   * @public
   */
  ChaincodeLogs?: LogConfigurations | undefined;

  /**
   * Configuration properties for a peer node log. Peer node logs contain messages generated when your client submits transaction proposals to peer nodes, requests to join channels, enrolls an admin peer, and lists the chaincode instances on a peer node.
   *
   * @public
   */
  PeerLogs?: LogConfigurations | undefined;
}

/**
 * Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.
 *
 * @public
 */
export interface NodeLogPublishingConfiguration {
  /**
   * Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.
   *
   * @public
   */
  Fabric?: NodeFabricLogPublishingConfiguration | undefined;
}

/**
 * Configuration properties of a node.
 *
 * @public
 */
export interface NodeConfiguration {
  /**
   * The Amazon Managed Blockchain instance type for the node.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The Availability Zone in which the node exists. Required for Ethereum nodes.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.
   *
   * @public
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration | undefined;

  /**
   * The state database that the node uses. Values are `LevelDB` or `CouchDB`. When using an Amazon Managed Blockchain network with Hyperledger Fabric version 1.4 or later, the default is `CouchDB`.
   *
   * Applies only to Hyperledger Fabric.
   *
   * @public
   */
  StateDB?: StateDBType | undefined;
}

/**
 * @public
 */
export interface CreateNodeInput {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The unique identifier of the network for the node.
   *
   * Ethereum public networks have the following `NetworkId`s:
   *
   * - `n-ethereum-mainnet`
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member that owns this node.
   *
   * Applies only to Hyperledger Fabric.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The properties of a node configuration.
   *
   * @public
   */
  NodeConfiguration: NodeConfiguration | undefined;

  /**
   * Tags to assign to the node.
   *
   * Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNodeOutput {
  /**
   * The unique identifier of the node.
   *
   * @public
   */
  NodeId?: string | undefined;
}

/**
 * An action to invite a specific Amazon Web Services account to create a member and join the network. The `InviteAction` is carried out when a `Proposal` is `APPROVED`.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface InviteAction {
  /**
   * The Amazon Web Services account ID to invite.
   *
   * @public
   */
  Principal: string | undefined;
}

/**
 * An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is `APPROVED`. The member and all associated resources are deleted from the network.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface RemoveAction {
  /**
   * The unique identifier of the member to remove.
   *
   * @public
   */
  MemberId: string | undefined;
}

/**
 * The actions to carry out if a proposal is `APPROVED`.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface ProposalActions {
  /**
   * The actions to perform for an `APPROVED` proposal to invite an Amazon Web Services account to create a member and join the network.
   *
   * @public
   */
  Invitations?: InviteAction[] | undefined;

  /**
   * The actions to perform for an `APPROVED` proposal to remove a member from the network, which deletes the member and all associated member resources from the network.
   *
   * @public
   */
  Removals?: RemoveAction[] | undefined;
}

/**
 * @public
 */
export interface CreateProposalInput {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The unique identifier of the network for which the proposal is made.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single Amazon Web Services account.
   *
   * @public
   */
  MemberId: string | undefined;

  /**
   * The type of actions proposed, such as inviting a member or removing a member. The types of `Actions` in a proposal are mutually exclusive. For example, a proposal with `Invitations` actions cannot also contain `Removals` actions.
   *
   * @public
   */
  Actions: ProposalActions | undefined;

  /**
   * A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags to assign to the proposal.
   *
   * Each tag consists of a key and an optional value. You can specify multiple key-value pairs in a single request with an overall maximum of 50 tags allowed per resource.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProposalOutput {
  /**
   * The unique identifier of the proposal.
   *
   * @public
   */
  ProposalId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessorInput {
  /**
   * The unique identifier of the accessor.
   *
   * @public
   */
  AccessorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessorOutput {}

/**
 * @public
 */
export interface DeleteMemberInput {
  /**
   * The unique identifier of the network from which the member is removed.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member to remove.
   *
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemberOutput {}

/**
 * @public
 */
export interface DeleteNodeInput {
  /**
   * The unique identifier of the network that the node is on.
   *
   * Ethereum public networks have the following `NetworkId`s:
   *
   * - `n-ethereum-mainnet`
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member that owns this node.
   *
   * Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The unique identifier of the node.
   *
   * @public
   */
  NodeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNodeOutput {}

/**
 * @public
 */
export interface GetAccessorInput {
  /**
   * The unique identifier of the accessor.
   *
   * @public
   */
  AccessorId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessorOutput {
  /**
   * The properties of the accessor.
   *
   * @public
   */
  Accessor?: Accessor | undefined;
}

/**
 * @public
 */
export interface GetMemberInput {
  /**
   * The unique identifier of the network to which the member belongs.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member.
   *
   * @public
   */
  MemberId: string | undefined;
}

/**
 * Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.
 *
 * @public
 */
export interface MemberFabricAttributes {
  /**
   * The user name for the initial administrator user for the member.
   *
   * @public
   */
  AdminUsername?: string | undefined;

  /**
   * The endpoint used to access the member's certificate authority.
   *
   * @public
   */
  CaEndpoint?: string | undefined;
}

/**
 * Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.
 *
 * @public
 */
export interface MemberFrameworkAttributes {
  /**
   * Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.
   *
   * @public
   */
  Fabric?: MemberFabricAttributes | undefined;
}

/**
 * Member configuration properties.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface Member {
  /**
   * The unique identifier of the network to which the member belongs.
   *
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * The unique identifier of the member.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the member.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description for the member.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.
   *
   * @public
   */
  FrameworkAttributes?: MemberFrameworkAttributes | undefined;

  /**
   * Configuration properties for logging events associated with a member.
   *
   * @public
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration | undefined;

  /**
   * The status of a member.
   *
   * - `CREATING` - The Amazon Web Services account is in the process of creating a member.
   * - `AVAILABLE` - The member has been created and can participate in the network.
   * - `CREATE_FAILED` - The Amazon Web Services account attempted to create a member and creation failed.
   * - `UPDATING` - The member is in the process of being updated.
   * - `DELETING` - The member and all associated resources are in the process of being deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an `APPROVED` `PROPOSAL` to remove the member.
   * - `DELETED` - The member can no longer participate on the network and all associated resources are deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an `APPROVED` `PROPOSAL` to remove the member.
   * - `INACCESSIBLE_ENCRYPTION_KEY` - The member is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.
   *
   *   The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the member resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.
   *
   * @public
   */
  Status?: MemberStatus | undefined;

  /**
   * The date and time that the member was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Tags assigned to the member. Tags consist of a key and optional value.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the member uses for encryption at rest. If the value of this parameter is `"AWS Owned KMS Key"`, the member uses an Amazon Web Services owned KMS key for encryption. This parameter is inherited by the nodes that this member owns.
   *
   * For more information, see [Encryption at Rest](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetMemberOutput {
  /**
   * The properties of a member.
   *
   * @public
   */
  Member?: Member | undefined;
}

/**
 * @public
 */
export interface GetNetworkInput {
  /**
   * The unique identifier of the network to get information about.
   *
   * @public
   */
  NetworkId: string | undefined;
}

/**
 * Attributes of Ethereum for a network.
 *
 * @public
 */
export interface NetworkEthereumAttributes {
  /**
   * The Ethereum `CHAIN_ID` associated with the Ethereum network. Chain IDs are as follows:
   *
   * - mainnet = `1`
   *
   * @public
   */
  ChainId?: string | undefined;
}

/**
 * Attributes of Hyperledger Fabric for a network.
 *
 * @public
 */
export interface NetworkFabricAttributes {
  /**
   * The endpoint of the ordering service for the network.
   *
   * @public
   */
  OrderingServiceEndpoint?: string | undefined;

  /**
   * The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see [Amazon Managed Blockchain Pricing](http://aws.amazon.com/managed-blockchain/pricing/).
   *
   * @public
   */
  Edition?: Edition | undefined;
}

/**
 * Attributes relevant to the network for the blockchain framework that the network uses.
 *
 * @public
 */
export interface NetworkFrameworkAttributes {
  /**
   * Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.
   *
   * @public
   */
  Fabric?: NetworkFabricAttributes | undefined;

  /**
   * Attributes of an Ethereum network for Managed Blockchain resources participating in an Ethereum network.
   *
   * @public
   */
  Ethereum?: NetworkEthereumAttributes | undefined;
}

/**
 * Network configuration properties.
 *
 * @public
 */
export interface Network {
  /**
   * The unique identifier of the network.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the network.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Attributes of the blockchain framework for the network.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The blockchain framework that the network uses.
   *
   * @public
   */
  Framework?: Framework | undefined;

  /**
   * The version of the blockchain framework that the network uses.
   *
   * @public
   */
  FrameworkVersion?: string | undefined;

  /**
   * Attributes of the blockchain framework that the network uses.
   *
   * @public
   */
  FrameworkAttributes?: NetworkFrameworkAttributes | undefined;

  /**
   * The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.
   *
   * @public
   */
  VpcEndpointServiceName?: string | undefined;

  /**
   * The voting rules that the network uses to decide if a proposal is accepted.
   *
   * @public
   */
  VotingPolicy?: VotingPolicy | undefined;

  /**
   * The current status of the network.
   *
   * @public
   */
  Status?: NetworkStatus | undefined;

  /**
   * The date and time that the network was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Tags assigned to the network. Each tag consists of a key and optional value.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkOutput {
  /**
   * An object containing network configuration parameters.
   *
   * @public
   */
  Network?: Network | undefined;
}

/**
 * @public
 */
export interface GetNodeInput {
  /**
   * The unique identifier of the network that the node is on.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member that owns the node.
   *
   * Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The unique identifier of the node.
   *
   * @public
   */
  NodeId: string | undefined;
}

/**
 * Attributes of an Ethereum node.
 *
 * @public
 */
export interface NodeEthereumAttributes {
  /**
   * The endpoint on which the Ethereum node listens to run Ethereum API methods over HTTP connections from a client. Use this endpoint in client code for smart contracts when using an HTTP connection. Connections to this endpoint are authenticated using [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * The endpoint on which the Ethereum node listens to run Ethereum JSON-RPC methods over WebSocket connections from a client. Use this endpoint in client code for smart contracts when using a WebSocket connection. Connections to this endpoint are authenticated using [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * @public
   */
  WebSocketEndpoint?: string | undefined;
}

/**
 * Attributes of Hyperledger Fabric for a peer node on a Hyperledger Fabric network on Managed Blockchain.
 *
 * @public
 */
export interface NodeFabricAttributes {
  /**
   * The endpoint that identifies the peer node for all services except peer channel-based event services.
   *
   * @public
   */
  PeerEndpoint?: string | undefined;

  /**
   * The endpoint that identifies the peer node for peer channel-based event services.
   *
   * @public
   */
  PeerEventEndpoint?: string | undefined;
}

/**
 * Attributes relevant to a node on a Managed Blockchain network for the blockchain framework that the network uses.
 *
 * @public
 */
export interface NodeFrameworkAttributes {
  /**
   * Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.
   *
   * @public
   */
  Fabric?: NodeFabricAttributes | undefined;

  /**
   * Attributes of Ethereum for a node on a Managed Blockchain network that uses Ethereum.
   *
   * @public
   */
  Ethereum?: NodeEthereumAttributes | undefined;
}

/**
 * Configuration properties of a node.
 *
 * @public
 */
export interface Node {
  /**
   * The unique identifier of the network that the node is on.
   *
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * The unique identifier of the member to which the node belongs.
   *
   * Applies only to Hyperledger Fabric.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The unique identifier of the node.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The instance type of the node.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Availability Zone in which the node exists. Required for Ethereum nodes.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Attributes of the blockchain framework being used.
   *
   * @public
   */
  FrameworkAttributes?: NodeFrameworkAttributes | undefined;

  /**
   * Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.
   *
   * @public
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration | undefined;

  /**
   * The state database that the node uses. Values are `LevelDB` or `CouchDB`.
   *
   * Applies only to Hyperledger Fabric.
   *
   * @public
   */
  StateDB?: StateDBType | undefined;

  /**
   * The status of the node.
   *
   * - `CREATING` - The Amazon Web Services account is in the process of creating a node.
   * - `AVAILABLE` - The node has been created and can participate in the network.
   * - `UNHEALTHY` - The node is impaired and might not function as expected. Amazon Managed Blockchain automatically finds nodes in this state and tries to recover them. If a node is recoverable, it returns to `AVAILABLE`. Otherwise, it moves to `FAILED` status.
   * - `CREATE_FAILED` - The Amazon Web Services account attempted to create a node and creation failed.
   * - `UPDATING` - The node is in the process of being updated.
   * - `DELETING` - The node is in the process of being deleted.
   * - `DELETED` - The node can no longer participate on the network.
   * - `FAILED` - The node is no longer functional, cannot be recovered, and must be deleted.
   * - `INACCESSIBLE_ENCRYPTION_KEY` - The node is impaired and might not function as expected because it cannot access the specified customer managed key in KMS for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.
   *
   *   The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the node resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.
   *
   * @public
   */
  Status?: NodeStatus | undefined;

  /**
   * The date and time that the node was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Tags assigned to the node. Each tag consists of a key and optional value.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the node uses for encryption at rest. If the value of this parameter is `"AWS Owned KMS Key"`, the node uses an Amazon Web Services owned KMS key for encryption. The node inherits this parameter from the member that it belongs to.
   *
   * For more information, see [Encryption at Rest](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * Applies only to Hyperledger Fabric.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetNodeOutput {
  /**
   * Properties of the node configuration.
   *
   * @public
   */
  Node?: Node | undefined;
}

/**
 * @public
 */
export interface GetProposalInput {
  /**
   * The unique identifier of the network for which the proposal is made.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the proposal.
   *
   * @public
   */
  ProposalId: string | undefined;
}

/**
 * Properties of a proposal on a Managed Blockchain network.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface Proposal {
  /**
   * The unique identifier of the proposal.
   *
   * @public
   */
  ProposalId?: string | undefined;

  /**
   * The unique identifier of the network for which the proposal is made.
   *
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * The description of the proposal.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The actions to perform on the network if the proposal is `APPROVED`.
   *
   * @public
   */
  Actions?: ProposalActions | undefined;

  /**
   * The unique identifier of the member that created the proposal.
   *
   * @public
   */
  ProposedByMemberId?: string | undefined;

  /**
   * The name of the member that created the proposal.
   *
   * @public
   */
  ProposedByMemberName?: string | undefined;

  /**
   * The status of the proposal. Values are as follows:
   *
   * - `IN_PROGRESS` - The proposal is active and open for member voting.
   * - `APPROVED` - The proposal was approved with sufficient `YES` votes among members according to the `VotingPolicy` specified for the `Network`. The specified proposal actions are carried out.
   * - `REJECTED` - The proposal was rejected with insufficient `YES` votes among members according to the `VotingPolicy` specified for the `Network`. The specified `ProposalActions` aren't carried out.
   * - `EXPIRED` - Members didn't cast the number of votes required to determine the proposal outcome before the proposal expired. The specified `ProposalActions` aren't carried out.
   * - `ACTION_FAILED` - One or more of the specified `ProposalActions` in a proposal that was approved couldn't be completed because of an error. The `ACTION_FAILED` status occurs even if only one ProposalAction fails and other actions are successful.
   *
   * @public
   */
  Status?: ProposalStatus | undefined;

  /**
   * The date and time that the proposal was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that the proposal expires. This is the `CreationDate` plus the `ProposalDurationInHours` that is specified in the `ProposalThresholdPolicy`. After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is `EXPIRED` and `Actions` aren't carried out.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The current total of `YES` votes cast on the proposal by members.
   *
   * @public
   */
  YesVoteCount?: number | undefined;

  /**
   * The current total of `NO` votes cast on the proposal by members.
   *
   * @public
   */
  NoVoteCount?: number | undefined;

  /**
   * The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of `YES` votes and `NO` votes.
   *
   * @public
   */
  OutstandingVoteCount?: number | undefined;

  /**
   * Tags assigned to the proposal. Each tag consists of a key and optional value.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide*, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide*.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface GetProposalOutput {
  /**
   * Information about a proposal.
   *
   * @public
   */
  Proposal?: Proposal | undefined;
}

/**
 * A summary of network configuration properties.
 *
 * @public
 */
export interface NetworkSummary {
  /**
   * The unique identifier of the network.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the network.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description of the network.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The blockchain framework that the network uses.
   *
   * @public
   */
  Framework?: Framework | undefined;

  /**
   * The version of the blockchain framework that the network uses.
   *
   * @public
   */
  FrameworkVersion?: string | undefined;

  /**
   * The current status of the network.
   *
   * @public
   */
  Status?: NetworkStatus | undefined;

  /**
   * The date and time that the network was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * An invitation to an Amazon Web Services account to create a member and join the network.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface Invitation {
  /**
   * The unique identifier for the invitation.
   *
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * The date and time that the invitation was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that the invitation expires. This is the `CreationDate` plus the `ProposalDurationInHours` that is specified in the `ProposalThresholdPolicy`. After this date and time, the invitee can no longer create a member and join the network using this `InvitationId`.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The status of the invitation:
   *
   * - `PENDING` - The invitee hasn't created a member to join the network, and the invitation hasn't yet expired.
   * - `ACCEPTING` - The invitee has begun creating a member, and creation hasn't yet completed.
   * - `ACCEPTED` - The invitee created a member and joined the network using the `InvitationID`.
   * - `REJECTED` - The invitee rejected the invitation.
   * - `EXPIRED` - The invitee neither created a member nor rejected the invitation before the `ExpirationDate`.
   *
   * @public
   */
  Status?: InvitationStatus | undefined;

  /**
   * A summary of network configuration properties.
   *
   * @public
   */
  NetworkSummary?: NetworkSummary | undefined;

  /**
   * The Amazon Resource Name (ARN) of the invitation. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessorsInput {
  /**
   * The maximum number of accessors to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The blockchain network that the `Accessor` token is created for.
   *
   * > **Note:** Use the value `ETHEREUM_MAINNET_AND_GOERLI` for all existing `Accessors` tokens that were created before the `networkType` property was introduced.
   *
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * @public
 */
export interface ListAccessorsOutput {
  /**
   * An array of AccessorSummary objects that contain configuration properties for each accessor.
   *
   * @public
   */
  Accessors?: AccessorSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsInput {
  /**
   * The maximum number of invitations to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsOutput {
  /**
   * The invitations for the network.
   *
   * @public
   */
  Invitations?: Invitation[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersInput {
  /**
   * The unique identifier of the network for which to list members.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The optional name of the member to list.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional status specifier. If provided, only members currently in this status are listed.
   *
   * @public
   */
  Status?: MemberStatus | undefined;

  /**
   * An optional Boolean value. If provided, the request is limited either to members that the current Amazon Web Services account owns (`true`) or that other Amazon Web Services accountsn own (`false`). If omitted, all members are listed.
   *
   * @public
   */
  IsOwned?: boolean | undefined;

  /**
   * The maximum number of members to return in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of configuration properties for a member.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface MemberSummary {
  /**
   * The unique identifier of the member.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the member.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional description of the member.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the member.
   *
   * - `CREATING` - The Amazon Web Services account is in the process of creating a member.
   * - `AVAILABLE` - The member has been created and can participate in the network.
   * - `CREATE_FAILED` - The Amazon Web Services account attempted to create a member and creation failed.
   * - `UPDATING` - The member is in the process of being updated.
   * - `DELETING` - The member and all associated resources are in the process of being deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an `APPROVED` `PROPOSAL` to remove the member.
   * - `DELETED` - The member can no longer participate on the network and all associated resources are deleted. Either the Amazon Web Services account that owns the member deleted it, or the member is being deleted as the result of an `APPROVED` `PROPOSAL` to remove the member.
   * - `INACCESSIBLE_ENCRYPTION_KEY` - The member is impaired and might not function as expected because it cannot access the specified customer managed key in Key Management Service (KMS) for encryption at rest. Either the KMS key was disabled or deleted, or the grants on the key were revoked.
   *
   *   The effect of disabling or deleting a key or of revoking a grant isn't immediate. It might take some time for the member resource to discover that the key is inaccessible. When a resource is in this state, we recommend deleting and recreating the resource.
   *
   * @public
   */
  Status?: MemberStatus | undefined;

  /**
   * The date and time that the member was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * An indicator of whether the member is owned by your Amazon Web Services account or a different Amazon Web Services account.
   *
   * @public
   */
  IsOwned?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersOutput {
  /**
   * An array of `MemberSummary` objects. Each object contains details about a network member.
   *
   * @public
   */
  Members?: MemberSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworksInput {
  /**
   * The name of the network.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional framework specifier. If provided, only networks of this framework type are listed.
   *
   * @public
   */
  Framework?: Framework | undefined;

  /**
   * An optional status specifier. If provided, only networks currently in this status are listed.
   *
   * Applies only to Hyperledger Fabric.
   *
   * @public
   */
  Status?: NetworkStatus | undefined;

  /**
   * The maximum number of networks to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworksOutput {
  /**
   * An array of `NetworkSummary` objects that contain configuration properties for each network.
   *
   * @public
   */
  Networks?: NetworkSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesInput {
  /**
   * The unique identifier of the network for which to list nodes.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member who owns the nodes to list.
   *
   * Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * An optional status specifier. If provided, only nodes currently in this status are listed.
   *
   * @public
   */
  Status?: NodeStatus | undefined;

  /**
   * The maximum number of nodes to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of configuration properties for a node.
 *
 * @public
 */
export interface NodeSummary {
  /**
   * The unique identifier of the node.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The status of the node.
   *
   * @public
   */
  Status?: NodeStatus | undefined;

  /**
   * The date and time that the node was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The Availability Zone in which the node exists.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The EC2 instance type for the node.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesOutput {
  /**
   * An array of `NodeSummary` objects that contain configuration properties for each node.
   *
   * @public
   */
  Nodes?: NodeSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalsInput {
  /**
   * The unique identifier of the network.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The maximum number of proposals to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Properties of a proposal.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface ProposalSummary {
  /**
   * The unique identifier of the proposal.
   *
   * @public
   */
  ProposalId?: string | undefined;

  /**
   * The description of the proposal.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the member that created the proposal.
   *
   * @public
   */
  ProposedByMemberId?: string | undefined;

  /**
   * The name of the member that created the proposal.
   *
   * @public
   */
  ProposedByMemberName?: string | undefined;

  /**
   * The status of the proposal. Values are as follows:
   *
   * - `IN_PROGRESS` - The proposal is active and open for member voting.
   * - `APPROVED` - The proposal was approved with sufficient `YES` votes among members according to the `VotingPolicy` specified for the `Network`. The specified proposal actions are carried out.
   * - `REJECTED` - The proposal was rejected with insufficient `YES` votes among members according to the `VotingPolicy` specified for the `Network`. The specified `ProposalActions` aren't carried out.
   * - `EXPIRED` - Members didn't cast the number of votes required to determine the proposal outcome before the proposal expired. The specified `ProposalActions` aren't carried out.
   * - `ACTION_FAILED` - One or more of the specified `ProposalActions` in a proposal that was approved couldn't be completed because of an error.
   *
   * @public
   */
  Status?: ProposalStatus | undefined;

  /**
   * The date and time that the proposal was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time that the proposal expires. This is the `CreationDate` plus the `ProposalDurationInHours` that is specified in the `ProposalThresholdPolicy`. After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is `EXPIRED` and `Actions` aren't carried out.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalsOutput {
  /**
   * The summary of each proposal made on the network.
   *
   * @public
   */
  Proposals?: ProposalSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalVotesInput {
  /**
   * The unique identifier of the network.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the proposal.
   *
   * @public
   */
  ProposalId: string | undefined;

  /**
   * The maximum number of votes to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Properties of an individual vote that a member cast for a proposal.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @public
 */
export interface VoteSummary {
  /**
   * The vote value, either `YES` or `NO`.
   *
   * @public
   */
  Vote?: VoteValue | undefined;

  /**
   * The name of the member that cast the vote.
   *
   * @public
   */
  MemberName?: string | undefined;

  /**
   * The unique identifier of the member that cast the vote.
   *
   * @public
   */
  MemberId?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalVotesOutput {
  /**
   * The list of votes.
   *
   * @public
   */
  ProposalVotes?: VoteSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags assigned to the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RejectInvitationInput {
  /**
   * The unique identifier of the invitation to reject.
   *
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface RejectInvitationOutput {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to assign to the specified resource. Tag values can be empty, for example, `"MyTagKey" : ""`. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateMemberInput {
  /**
   * The unique identifier of the Managed Blockchain network to which the member belongs.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member.
   *
   * @public
   */
  MemberId: string | undefined;

  /**
   * Configuration properties for publishing to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMemberOutput {}

/**
 * @public
 */
export interface UpdateNodeInput {
  /**
   * The unique identifier of the network that the node is on.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the member that owns the node.
   *
   * Applies only to Hyperledger Fabric.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The unique identifier of the node.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * Configuration properties for publishing to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateNodeOutput {}

/**
 * @public
 */
export interface VoteOnProposalInput {
  /**
   * The unique identifier of the network.
   *
   * @public
   */
  NetworkId: string | undefined;

  /**
   * The unique identifier of the proposal.
   *
   * @public
   */
  ProposalId: string | undefined;

  /**
   * The unique identifier of the member casting the vote.
   *
   * @public
   */
  VoterMemberId: string | undefined;

  /**
   * The value of the vote.
   *
   * @public
   */
  Vote: VoteValue | undefined;
}

/**
 * @public
 */
export interface VoteOnProposalOutput {}
