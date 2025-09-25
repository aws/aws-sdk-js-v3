// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ManagedBlockchainServiceException as __BaseException } from "./ManagedBlockchainServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 * @enum
 */
export const AccessorNetworkType = {
  ETHEREUM_GOERLI: "ETHEREUM_GOERLI",
  ETHEREUM_MAINNET: "ETHEREUM_MAINNET",
  ETHEREUM_MAINNET_AND_GOERLI: "ETHEREUM_MAINNET_AND_GOERLI",
  POLYGON_MAINNET: "POLYGON_MAINNET",
  POLYGON_MUMBAI: "POLYGON_MUMBAI",
} as const;

/**
 * @public
 */
export type AccessorNetworkType = (typeof AccessorNetworkType)[keyof typeof AccessorNetworkType];

/**
 * @public
 * @enum
 */
export const AccessorStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  PENDING_DELETION: "PENDING_DELETION",
} as const;

/**
 * @public
 */
export type AccessorStatus = (typeof AccessorStatus)[keyof typeof AccessorStatus];

/**
 * @public
 * @enum
 */
export const AccessorType = {
  BILLING_TOKEN: "BILLING_TOKEN",
} as const;

/**
 * @public
 */
export type AccessorType = (typeof AccessorType)[keyof typeof AccessorType];

/**
 * <p>The properties of the Accessor.</p>
 * @public
 */
export interface Accessor {
  /**
   * <p>The unique identifier of the accessor.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the accessor.</p>
   *          <note>
   *             <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p>
   *          </note>
   * @public
   */
  Type?: AccessorType | undefined;

  /**
   * <p>The billing token is a property of the Accessor. Use this token to
   *          when making calls to the blockchain network. The billing token is used
   *          to track your accessor token for billing requests.</p>
   * @public
   */
  BillingToken?: string | undefined;

  /**
   * <p>The current status of the accessor.</p>
   * @public
   */
  Status?: AccessorStatus | undefined;

  /**
   * <p>The creation date and time of the accessor.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the accessor. For more information about
   *          ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *             Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The tags assigned to the Accessor.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The blockchain network that the Accessor token is created for.</p>
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * <p>A summary of accessor properties.</p>
 * @public
 */
export interface AccessorSummary {
  /**
   * <p>The unique identifier of the accessor.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the accessor.</p>
   *          <note>
   *             <p>Currently accessor type is restricted to <code>BILLING_TOKEN</code>.</p>
   *          </note>
   * @public
   */
  Type?: AccessorType | undefined;

  /**
   * <p>The current status of the accessor.</p>
   * @public
   */
  Status?: AccessorStatus | undefined;

  /**
   * <p>The creation date and time of the accessor.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the accessor. For more information about
   *          ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource
   *             Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The blockchain network that the Accessor token is created for.</p>
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * @public
 * @enum
 */
export const ThresholdComparator = {
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
} as const;

/**
 * @public
 */
export type ThresholdComparator = (typeof ThresholdComparator)[keyof typeof ThresholdComparator];

/**
 * <p>A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of <code>YES</code> votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface ApprovalThresholdPolicy {
  /**
   * <p>The percentage of votes among all members that must be <code>YES</code> for a proposal to be approved. For example, a <code>ThresholdPercentage</code> value of <code>50</code> indicates 50%. The <code>ThresholdComparator</code> determines the precise comparison. If a <code>ThresholdPercentage</code> value of <code>50</code> is specified on a network with 10 members, along with a <code>ThresholdComparator</code> value of <code>GREATER_THAN</code>, this indicates that 6 <code>YES</code> votes are required for the proposal to be approved.</p>
   * @public
   */
  ThresholdPercentage?: number | undefined;

  /**
   * <p>The duration from the time that a proposal is created until it expires. If members cast neither the required number of <code>YES</code> votes to approve the proposal nor the number of <code>NO</code> votes required to reject it before the duration expires, the proposal is <code>EXPIRED</code> and <code>ProposalActions</code> aren't carried out.</p>
   * @public
   */
  ProposalDurationInHours?: number | undefined;

  /**
   * <p>Determines whether the vote percentage must be greater than the
   *             <code>ThresholdPercentage</code> or must be greater than or equal to the
   *             <code>ThresholdPercentage</code> to be approved.</p>
   * @public
   */
  ThresholdComparator?: ThresholdComparator | undefined;
}

/**
 * @public
 */
export interface CreateAccessorInput {
  /**
   * <p>This is a unique, case-sensitive identifier that you provide to ensure the idempotency of
   *          the operation. An idempotent operation completes no more than once. This
   *          identifier is required only if you make a service request directly using
   *          an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the
   *          Amazon Web Services CLI.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The type of accessor.</p>
   *          <note>
   *             <p>Currently, accessor type is restricted to <code>BILLING_TOKEN</code>.</p>
   *          </note>
   * @public
   */
  AccessorType: AccessorType | undefined;

  /**
   * <p>Tags to assign to the Accessor.</p>
   *          <p> Each tag consists of a key and an optional value. You can specify
   *           multiple key-value pairs in a single request with an overall maximum of 50 tags
   *           allowed per resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The blockchain network that the <code>Accessor</code> token is created for.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Use the actual <code>networkType</code> value for the blockchain network that you are creating
   *             the <code>Accessor</code> token for.</p>
   *                </li>
   *                <li>
   *                   <p>With the shut down of the <i>Ethereum Goerli</i> and <i>Polygon Mumbai
   *             Testnet</i> networks the following <code>networkType</code> values are no longer available
   *             for selection and use.</p>
   *                   <ul>
   *                      <li>
   *                         <p>
   *                            <code>ETHEREUM_MAINNET_AND_GOERLI</code>
   *                         </p>
   *                      </li>
   *                      <li>
   *                         <p>
   *                            <code>ETHEREUM_GOERLI</code>
   *                         </p>
   *                      </li>
   *                      <li>
   *                         <p>
   *                            <code>POLYGON_MUMBAI</code>
   *                         </p>
   *                      </li>
   *                   </ul>
   *                   <p>However, your existing <code>Accessor</code> tokens with these <code>networkType</code>
   *                values will remain unchanged.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * @public
 */
export interface CreateAccessorOutput {
  /**
   * <p>The unique identifier of the accessor.</p>
   * @public
   */
  AccessorId?: string | undefined;

  /**
   * <p>The billing token is a property of the Accessor. Use this token to
   *          when making calls to the blockchain network. The billing token is used
   *          to track your accessor token for billing requests.</p>
   * @public
   */
  BillingToken?: string | undefined;

  /**
   * <p>The blockchain network that the accessor token is created for.</p>
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
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
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
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
 * <p></p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  ResourceName?: string | undefined;
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

/**
 * <p>Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.</p>
 * @public
 */
export interface MemberFabricConfiguration {
  /**
   * <p>The user name for the member's initial administrative user.</p>
   * @public
   */
  AdminUsername: string | undefined;

  /**
   * <p>The password for the member's initial administrative user. The <code>AdminPassword</code> must be at least 8 characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quotation mark (‘), a double quotation marks (“), a forward slash(/), a backward slash(\), @, or a space.</p>
   * @public
   */
  AdminPassword: string | undefined;
}

/**
 * <p>Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 * @public
 */
export interface MemberFrameworkConfiguration {
  /**
   * <p>Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   * @public
   */
  Fabric?: MemberFabricConfiguration | undefined;
}

/**
 * <p>A configuration for logging events.</p>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>Indicates whether logging is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>A collection of log configurations.</p>
 * @public
 */
export interface LogConfigurations {
  /**
   * <p>Parameters for publishing logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  Cloudwatch?: LogConfiguration | undefined;
}

/**
 * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 * @public
 */
export interface MemberFabricLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a member's Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.</p>
   * @public
   */
  CaLogs?: LogConfigurations | undefined;
}

/**
 * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network.</p>
 * @public
 */
export interface MemberLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
   * @public
   */
  Fabric?: MemberFabricLogPublishingConfiguration | undefined;
}

/**
 * <p>Configuration properties of the member.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface MemberConfiguration {
  /**
   * <p>The name of the member.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional description of the member.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration properties of the blockchain framework relevant to the member.</p>
   * @public
   */
  FrameworkConfiguration: MemberFrameworkConfiguration | undefined;

  /**
   * <p>Configuration properties for logging events associated with a member of a Managed Blockchain network.</p>
   * @public
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration | undefined;

  /**
   * <p>Tags assigned to the member. Tags consist of a key and optional value. </p>
   *          <p>When specifying tags during creation, you can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMemberInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The unique identifier of the invitation that is sent to the member to join the network.</p>
   * @public
   */
  InvitationId: string | undefined;

  /**
   * <p>The unique identifier of the network in which the member is created.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>Member configuration parameters.</p>
   * @public
   */
  MemberConfiguration: MemberConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMemberOutput {
  /**
   * <p>The unique identifier of the member.</p>
   * @public
   */
  MemberId?: string | undefined;
}

/**
 * <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>A requested resource doesn't exist. It may have been deleted or referenced inaccurately.</p>
   * @public
   */
  ResourceName?: string | undefined;
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
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 * @enum
 */
export const Framework = {
  ETHEREUM: "ETHEREUM",
  HYPERLEDGER_FABRIC: "HYPERLEDGER_FABRIC",
} as const;

/**
 * @public
 */
export type Framework = (typeof Framework)[keyof typeof Framework];

/**
 * @public
 * @enum
 */
export const Edition = {
  STANDARD: "STANDARD",
  STARTER: "STARTER",
} as const;

/**
 * @public
 */
export type Edition = (typeof Edition)[keyof typeof Edition];

/**
 * <p>Hyperledger Fabric configuration properties for the network.</p>
 * @public
 */
export interface NetworkFabricConfiguration {
  /**
   * <p>The edition of Amazon Managed Blockchain that the network uses. For more information, see <a href="http://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   * @public
   */
  Edition: Edition | undefined;
}

/**
 * <p>
 *          Configuration properties relevant to the network for the blockchain framework that the network uses.
 *       </p>
 * @public
 */
export interface NetworkFrameworkConfiguration {
  /**
   * <p>
   *          Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric.
   *       </p>
   * @public
   */
  Fabric?: NetworkFabricConfiguration | undefined;
}

/**
 * <p>
 *          The voting rules for the network to decide if a proposal is accepted
 *       </p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface VotingPolicy {
  /**
   * <p>Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
   * @public
   */
  ApprovalThresholdPolicy?: ApprovalThresholdPolicy | undefined;
}

/**
 * @public
 */
export interface CreateNetworkInput {
  /**
   * <p>This is a unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than once. This identifier is required only
   *          if you make a service request directly using an HTTP client. It is generated automatically if you
   *          use an Amazon Web Services SDK or the Amazon Web Services CLI.
   *       </p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The name of the network.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional description for the network.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The blockchain framework that the network uses.</p>
   * @public
   */
  Framework: Framework | undefined;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   * @public
   */
  FrameworkVersion: string | undefined;

  /**
   * <p>
   *          Configuration properties of the blockchain framework relevant to the network configuration.
   *       </p>
   * @public
   */
  FrameworkConfiguration?: NetworkFrameworkConfiguration | undefined;

  /**
   * <p>
   *          The voting rules used by the network to determine if a proposal is approved.
   *       </p>
   * @public
   */
  VotingPolicy: VotingPolicy | undefined;

  /**
   * <p>Configuration properties for the first member within the network.</p>
   * @public
   */
  MemberConfiguration: MemberConfiguration | undefined;

  /**
   * <p>Tags to assign to the network.</p>
   *          <p> Each tag consists of a key and an optional value. You can specify
   *           multiple key-value pairs in a single request with an overall maximum of 50 tags
   *           allowed per resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNetworkOutput {
  /**
   * <p>The unique identifier for the network.</p>
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * <p>The unique identifier for the first member within the network.</p>
   * @public
   */
  MemberId?: string | undefined;
}

/**
 * <p>Configuration properties for logging events associated with a peer node owned by a member in a Managed Blockchain network.</p>
 * @public
 */
export interface NodeFabricLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with chaincode execution on a peer node. Chaincode logs contain the results of instantiating, invoking, and querying the chaincode. A peer can run multiple instances of chaincode. When enabled, a log stream is created for all chaincodes, with an individual log stream for each chaincode.</p>
   * @public
   */
  ChaincodeLogs?: LogConfigurations | undefined;

  /**
   * <p>Configuration properties for a peer node log. Peer node logs contain messages generated when your client submits transaction proposals to peer nodes, requests to join channels, enrolls an admin peer, and lists the chaincode instances on a peer node. </p>
   * @public
   */
  PeerLogs?: LogConfigurations | undefined;
}

/**
 * <p>Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.</p>
 * @public
 */
export interface NodeLogPublishingConfiguration {
  /**
   * <p>Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.</p>
   * @public
   */
  Fabric?: NodeFabricLogPublishingConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const StateDBType = {
  CouchDB: "CouchDB",
  LevelDB: "LevelDB",
} as const;

/**
 * @public
 */
export type StateDBType = (typeof StateDBType)[keyof typeof StateDBType];

/**
 * <p>Configuration properties of a node.</p>
 * @public
 */
export interface NodeConfiguration {
  /**
   * <p>The Amazon Managed Blockchain instance type for the node.</p>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The Availability Zone in which the node exists. Required for Ethereum nodes. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.
   *       </p>
   * @public
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration | undefined;

  /**
   * <p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>. When using an Amazon Managed Blockchain network with Hyperledger Fabric version 1.4 or later, the default is <code>CouchDB</code>.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   * @public
   */
  StateDB?: StateDBType | undefined;
}

/**
 * @public
 */
export interface CreateNodeInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The unique identifier of the network for the node.</p>
   *          <p>Ethereum public networks have the following <code>NetworkId</code>s:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-mainnet</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns this node.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The properties of a node configuration.</p>
   * @public
   */
  NodeConfiguration: NodeConfiguration | undefined;

  /**
   * <p>Tags to assign to the node.</p>
   *          <p> Each tag consists of a key and an optional value. You can specify
   *           multiple key-value pairs in a single request with an overall maximum of 50 tags
   *           allowed per resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNodeOutput {
  /**
   * <p>The unique identifier of the node.</p>
   * @public
   */
  NodeId?: string | undefined;
}

/**
 * <p>An action to invite a specific Amazon Web Services account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface InviteAction {
  /**
   * <p>The Amazon Web Services account ID to invite.</p>
   * @public
   */
  Principal: string | undefined;
}

/**
 * <p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface RemoveAction {
  /**
   * <p>The unique identifier of the member to remove.</p>
   * @public
   */
  MemberId: string | undefined;
}

/**
 * <p>
 *          The actions to carry out if a proposal is <code>APPROVED</code>.
 *       </p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface ProposalActions {
  /**
   * <p>
   *          The actions to perform for an <code>APPROVED</code> proposal to invite an Amazon Web Services account to create a member and join the network.
   *       </p>
   * @public
   */
  Invitations?: InviteAction[] | undefined;

  /**
   * <p>
   *          The actions to perform for an <code>APPROVED</code> proposal to remove a member from the network, which deletes the member and all associated member resources from the network.
   *       </p>
   * @public
   */
  Removals?: RemoveAction[] | undefined;
}

/**
 * @public
 */
export interface CreateProposalInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an Amazon Web Services SDK or the CLI.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>
   *          The unique identifier of the network for which the proposal is made.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that is creating the proposal. This
   *          identifier is especially useful for identifying the member making the proposal
   *          when multiple members exist in a single Amazon Web Services account.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The type of actions proposed, such as inviting a member or removing a member. The types of <code>Actions</code> in a proposal are mutually exclusive. For example, a proposal with <code>Invitations</code> actions cannot also contain <code>Removals</code> actions.</p>
   * @public
   */
  Actions: ProposalActions | undefined;

  /**
   * <p>A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Tags to assign to the proposal.</p>
   *          <p> Each tag consists of a key and an optional value. You can specify
   *           multiple key-value pairs in a single request with an overall maximum of 50 tags
   *           allowed per resource.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProposalOutput {
  /**
   * <p>The unique identifier of the proposal.</p>
   * @public
   */
  ProposalId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessorInput {
  /**
   * <p>The unique identifier of the accessor.</p>
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
   * <p>The unique identifier of the network from which the member is removed.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member to remove.</p>
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
   * <p>The unique identifier of the network that the node is on.</p>
   *          <p>Ethereum public networks have the following <code>NetworkId</code>s:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>n-ethereum-mainnet</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns this node.</p>
   *          <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
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
   * <p>The unique identifier of the accessor.</p>
   * @public
   */
  AccessorId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessorOutput {
  /**
   * <p>The properties of the accessor.</p>
   * @public
   */
  Accessor?: Accessor | undefined;
}

/**
 * @public
 */
export interface GetMemberInput {
  /**
   * <p>The unique identifier of the network to which the member belongs.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member.</p>
   * @public
   */
  MemberId: string | undefined;
}

/**
 * <p>Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 * @public
 */
export interface MemberFabricAttributes {
  /**
   * <p>The user name for the initial administrator user for the member.</p>
   * @public
   */
  AdminUsername?: string | undefined;

  /**
   * <p>The endpoint used to access the member's certificate authority.</p>
   * @public
   */
  CaEndpoint?: string | undefined;
}

/**
 * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 * @public
 */
export interface MemberFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   * @public
   */
  Fabric?: MemberFabricAttributes | undefined;
}

/**
 * @public
 * @enum
 */
export const MemberStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_KEY: "INACCESSIBLE_ENCRYPTION_KEY",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

/**
 * <p>Member configuration properties.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The unique identifier of the network to which the member belongs.</p>
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * <p>The unique identifier of the member.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the member.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description for the member.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
   * @public
   */
  FrameworkAttributes?: MemberFrameworkAttributes | undefined;

  /**
   * <p>Configuration properties for logging events associated with a member.</p>
   * @public
   */
  LogPublishingConfiguration?: MemberLogPublishingConfiguration | undefined;

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
   * @public
   */
  Status?: MemberStatus | undefined;

  /**
   * <p>The date and time that the member was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>Tags assigned to the member. Tags consist of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the member uses for encryption at rest. If the value of this parameter is <code>"AWS Owned KMS Key"</code>, the member uses an Amazon Web Services owned KMS key for encryption. This parameter is inherited by the nodes that this member owns.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetMemberOutput {
  /**
   * <p>The properties of a member.</p>
   * @public
   */
  Member?: Member | undefined;
}

/**
 * @public
 */
export interface GetNetworkInput {
  /**
   * <p>The unique identifier of the network to get information about.</p>
   * @public
   */
  NetworkId: string | undefined;
}

/**
 * <p>Attributes of Ethereum for a network. </p>
 * @public
 */
export interface NetworkEthereumAttributes {
  /**
   * <p>The Ethereum <code>CHAIN_ID</code> associated with the Ethereum network. Chain IDs are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>mainnet = <code>1</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ChainId?: string | undefined;
}

/**
 * <p>Attributes of Hyperledger Fabric for a network.</p>
 * @public
 */
export interface NetworkFabricAttributes {
  /**
   * <p>The endpoint of the ordering service for the network.</p>
   * @public
   */
  OrderingServiceEndpoint?: string | undefined;

  /**
   * <p>The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see <a href="http://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   * @public
   */
  Edition?: Edition | undefined;
}

/**
 * <p>Attributes relevant to the network for the blockchain framework that the network uses.</p>
 * @public
 */
export interface NetworkFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.</p>
   * @public
   */
  Fabric?: NetworkFabricAttributes | undefined;

  /**
   * <p>Attributes of an Ethereum network for Managed Blockchain resources participating in an Ethereum network. </p>
   * @public
   */
  Ethereum?: NetworkEthereumAttributes | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type NetworkStatus = (typeof NetworkStatus)[keyof typeof NetworkStatus];

/**
 * <p>Network configuration properties.</p>
 * @public
 */
export interface Network {
  /**
   * <p>The unique identifier of the network.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the network.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Attributes of the blockchain framework for the network.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The blockchain framework that the network uses.</p>
   * @public
   */
  Framework?: Framework | undefined;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   * @public
   */
  FrameworkVersion?: string | undefined;

  /**
   * <p>Attributes of the blockchain framework that the network uses.</p>
   * @public
   */
  FrameworkAttributes?: NetworkFrameworkAttributes | undefined;

  /**
   * <p>The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.</p>
   * @public
   */
  VpcEndpointServiceName?: string | undefined;

  /**
   * <p>The voting rules that the network uses to decide if a proposal is accepted.</p>
   * @public
   */
  VotingPolicy?: VotingPolicy | undefined;

  /**
   * <p>The current status of the network.</p>
   * @public
   */
  Status?: NetworkStatus | undefined;

  /**
   * <p>The date and time that the network was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>Tags assigned to the network. Each tag consists of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkOutput {
  /**
   * <p>An object containing network configuration parameters.</p>
   * @public
   */
  Network?: Network | undefined;
}

/**
 * @public
 */
export interface GetNodeInput {
  /**
   * <p>The unique identifier of the network that the node is on.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns the node.</p>
   *          <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
   * @public
   */
  NodeId: string | undefined;
}

/**
 * <p>Attributes of an Ethereum node.</p>
 * @public
 */
export interface NodeEthereumAttributes {
  /**
   * <p>The endpoint on which the Ethereum node listens to run Ethereum API methods over HTTP connections from a client. Use this endpoint in client code for smart contracts when using an HTTP connection. Connections to this endpoint are authenticated using <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   * @public
   */
  HttpEndpoint?: string | undefined;

  /**
   * <p>The endpoint on which the Ethereum node listens to run Ethereum JSON-RPC methods over WebSocket connections from a client. Use this endpoint in client code for smart contracts when using a WebSocket connection. Connections to this endpoint are authenticated using <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
   * @public
   */
  WebSocketEndpoint?: string | undefined;
}

/**
 * <p>Attributes of Hyperledger Fabric for a peer node on a Hyperledger Fabric network on Managed Blockchain.</p>
 * @public
 */
export interface NodeFabricAttributes {
  /**
   * <p>The endpoint that identifies the peer node for all services except peer channel-based event services.</p>
   * @public
   */
  PeerEndpoint?: string | undefined;

  /**
   * <p>The endpoint that identifies the peer node for peer channel-based event services.</p>
   * @public
   */
  PeerEventEndpoint?: string | undefined;
}

/**
 * <p>Attributes relevant to a node on a Managed Blockchain network for the blockchain framework that the network uses.</p>
 * @public
 */
export interface NodeFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   * @public
   */
  Fabric?: NodeFabricAttributes | undefined;

  /**
   * <p>Attributes of Ethereum for a node on a Managed Blockchain network that uses Ethereum. </p>
   * @public
   */
  Ethereum?: NodeEthereumAttributes | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACCESSIBLE_ENCRYPTION_KEY: "INACCESSIBLE_ENCRYPTION_KEY",
  UNHEALTHY: "UNHEALTHY",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type NodeStatus = (typeof NodeStatus)[keyof typeof NodeStatus];

/**
 * <p>Configuration properties of a node.</p>
 * @public
 */
export interface Node {
  /**
   * <p>The unique identifier of the network that the node is on.</p>
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * <p>The unique identifier of the member to which the node belongs.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The instance type of the node.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Availability Zone in which the node exists. Required for Ethereum nodes. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Attributes of the blockchain framework being used.</p>
   * @public
   */
  FrameworkAttributes?: NodeFrameworkAttributes | undefined;

  /**
   * <p>Configuration properties for logging events associated with a peer node on a Hyperledger Fabric network on Managed Blockchain.</p>
   * @public
   */
  LogPublishingConfiguration?: NodeLogPublishingConfiguration | undefined;

  /**
   * <p>The state database that the node uses. Values are <code>LevelDB</code> or <code>CouchDB</code>.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   * @public
   */
  StateDB?: StateDBType | undefined;

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
   * @public
   */
  Status?: NodeStatus | undefined;

  /**
   * <p>The date and time that the node was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>Tags assigned to the node. Each tag consists of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed key in Key Management Service (KMS) that the node uses for encryption at rest. If the value of this parameter is <code>"AWS Owned KMS Key"</code>, the node uses an Amazon Web Services owned KMS key for encryption. The node inherits this parameter from the member that it belongs to.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-encryption-at-rest.html">Encryption at Rest</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetNodeOutput {
  /**
   * <p>Properties of the node configuration.</p>
   * @public
   */
  Node?: Node | undefined;
}

/**
 * @public
 */
export interface GetProposalInput {
  /**
   * <p>The unique identifier of the network for which the proposal is made.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the proposal.</p>
   * @public
   */
  ProposalId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProposalStatus = {
  ACTION_FAILED: "ACTION_FAILED",
  APPROVED: "APPROVED",
  EXPIRED: "EXPIRED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus];

/**
 * <p>Properties of a proposal on a Managed Blockchain network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface Proposal {
  /**
   * <p>The unique identifier of the proposal.</p>
   * @public
   */
  ProposalId?: string | undefined;

  /**
   * <p>The unique identifier of the network for which the proposal is made.</p>
   * @public
   */
  NetworkId?: string | undefined;

  /**
   * <p>The description of the proposal.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The actions to perform on the network if the proposal is <code>APPROVED</code>.</p>
   * @public
   */
  Actions?: ProposalActions | undefined;

  /**
   * <p>The unique identifier of the member that created the proposal.</p>
   * @public
   */
  ProposedByMemberId?: string | undefined;

  /**
   * <p>The name of the member that created the proposal.</p>
   * @public
   */
  ProposedByMemberName?: string | undefined;

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
   * @public
   */
  Status?: ProposalStatus | undefined;

  /**
   * <p>
   *          The date and time that the proposal was created.
   *       </p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> aren't carried out.
   *       </p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>
   *          The current total of <code>YES</code> votes cast on the proposal by members.
   *       </p>
   * @public
   */
  YesVoteCount?: number | undefined;

  /**
   * <p>
   *          The current total of <code>NO</code> votes cast on the proposal by members.
   *       </p>
   * @public
   */
  NoVoteCount?: number | undefined;

  /**
   * <p>
   *          The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of <code>YES</code> votes and <code>NO</code> votes.
   *       </p>
   * @public
   */
  OutstandingVoteCount?: number | undefined;

  /**
   * <p>Tags assigned to the proposal. Each tag consists of a key and optional value.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Ethereum Developer Guide</i>, or <a href="https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html">Tagging Resources</a> in the <i>Amazon Managed Blockchain Hyperledger Fabric Developer Guide</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface GetProposalOutput {
  /**
   * <p>Information about a proposal.</p>
   * @public
   */
  Proposal?: Proposal | undefined;
}

/**
 * <p></p>
 * @public
 */
export class IllegalActionException extends __BaseException {
  readonly name: "IllegalActionException" = "IllegalActionException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface NetworkSummary {
  /**
   * <p>The unique identifier of the network.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the network.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description of the network.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The blockchain framework that the network uses.</p>
   * @public
   */
  Framework?: Framework | undefined;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   * @public
   */
  FrameworkVersion?: string | undefined;

  /**
   * <p>The current status of the network.</p>
   * @public
   */
  Status?: NetworkStatus | undefined;

  /**
   * <p>The date and time that the network was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InvitationStatus = {
  ACCEPTED: "ACCEPTED",
  ACCEPTING: "ACCEPTING",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];

/**
 * <p>An invitation to an Amazon Web Services account to create a member and join the network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface Invitation {
  /**
   * <p>The unique identifier for the invitation.</p>
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * <p>The date and time that the invitation was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date and time that the invitation expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, the invitee can no longer create a member and join the network using this <code>InvitationId</code>.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

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
   * @public
   */
  Status?: InvitationStatus | undefined;

  /**
   * <p>A summary of network configuration properties.</p>
   * @public
   */
  NetworkSummary?: NetworkSummary | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the invitation. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessorsInput {
  /**
   * <p> The maximum number of accessors to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The pagination token that indicates the next set of results to retrieve. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The blockchain network that the <code>Accessor</code> token is created for.</p>
   *          <note>
   *             <p>Use the value <code>ETHEREUM_MAINNET_AND_GOERLI</code> for all
   *          existing <code>Accessors</code> tokens that were created before the <code>networkType</code>
   *          property was introduced.</p>
   *          </note>
   * @public
   */
  NetworkType?: AccessorNetworkType | undefined;
}

/**
 * @public
 */
export interface ListAccessorsOutput {
  /**
   * <p>An array of AccessorSummary objects that contain configuration properties for
   *          each accessor.</p>
   * @public
   */
  Accessors?: AccessorSummary[] | undefined;

  /**
   * <p> The pagination token that indicates the next set of results to retrieve. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsInput {
  /**
   * <p>The maximum number of invitations to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsOutput {
  /**
   * <p>The invitations for the network.</p>
   * @public
   */
  Invitations?: Invitation[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersInput {
  /**
   * <p>The unique identifier of the network for which to list members.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The optional name of the member to list.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional status specifier. If provided, only members currently in this status are listed.</p>
   * @public
   */
  Status?: MemberStatus | undefined;

  /**
   * <p>An optional Boolean value. If provided, the request is limited either to
   *          members that the current Amazon Web Services account owns (<code>true</code>) or that other Amazon Web Services accountsn
   *          own (<code>false</code>). If omitted, all members are listed.</p>
   * @public
   */
  IsOwned?: boolean | undefined;

  /**
   * <p>The maximum number of members to return in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of configuration properties for a member.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface MemberSummary {
  /**
   * <p>The unique identifier of the member.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the member.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional description of the member.</p>
   * @public
   */
  Description?: string | undefined;

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
   * @public
   */
  Status?: MemberStatus | undefined;

  /**
   * <p>The date and time that the member was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>An indicator of whether the member is owned by your Amazon Web Services account or a different Amazon Web Services account.</p>
   * @public
   */
  IsOwned?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersOutput {
  /**
   * <p>An array of <code>MemberSummary</code> objects. Each object contains details about a network member.</p>
   * @public
   */
  Members?: MemberSummary[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworksInput {
  /**
   * <p>The name of the network.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An optional framework specifier. If provided, only networks of this framework type are listed.</p>
   * @public
   */
  Framework?: Framework | undefined;

  /**
   * <p>An optional status specifier. If provided, only networks currently in this status are listed.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   * @public
   */
  Status?: NetworkStatus | undefined;

  /**
   * <p>The maximum number of networks to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworksOutput {
  /**
   * <p>An array of <code>NetworkSummary</code> objects that contain configuration properties for each network.</p>
   * @public
   */
  Networks?: NetworkSummary[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesInput {
  /**
   * <p>The unique identifier of the network for which to list nodes.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member who owns the nodes to list.</p>
   *          <p>Applies only to Hyperledger Fabric and is required for Hyperledger Fabric.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>An optional status specifier. If provided, only nodes currently in this status are listed.</p>
   * @public
   */
  Status?: NodeStatus | undefined;

  /**
   * <p>The maximum number of nodes to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of configuration properties for a node.</p>
 * @public
 */
export interface NodeSummary {
  /**
   * <p>The unique identifier of the node.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The status of the node.</p>
   * @public
   */
  Status?: NodeStatus | undefined;

  /**
   * <p>The date and time that the node was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The Availability Zone in which the node exists.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The EC2 instance type for the node.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the node. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesOutput {
  /**
   * <p>An array of <code>NodeSummary</code> objects that contain configuration properties for each node.</p>
   * @public
   */
  Nodes?: NodeSummary[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalsInput {
  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The maximum number of proposals to return.
   *       </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Properties of a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface ProposalSummary {
  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   * @public
   */
  ProposalId?: string | undefined;

  /**
   * <p>
   *          The description of the proposal.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *          The unique identifier of the member that created the proposal.
   *       </p>
   * @public
   */
  ProposedByMemberId?: string | undefined;

  /**
   * <p>
   *          The name of the member that created the proposal.
   *       </p>
   * @public
   */
  ProposedByMemberName?: string | undefined;

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
   * @public
   */
  Status?: ProposalStatus | undefined;

  /**
   * <p>
   *          The date and time that the proposal was created.
   *       </p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>
   *          The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>.  After this date and time, if members haven't cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> aren't carried out.
   *       </p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the proposal. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalsOutput {
  /**
   * <p>The summary of each proposal made on the network.</p>
   * @public
   */
  Proposals?: ProposalSummary[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalVotesInput {
  /**
   * <p>
   *          The unique identifier of the network.
   *       </p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   * @public
   */
  ProposalId: string | undefined;

  /**
   * <p>
   *          The maximum number of votes to return.
   *       </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VoteValue = {
  NO: "NO",
  YES: "YES",
} as const;

/**
 * @public
 */
export type VoteValue = (typeof VoteValue)[keyof typeof VoteValue];

/**
 * <p>
 *          Properties of an individual vote that a member cast for a proposal.
 *       </p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @public
 */
export interface VoteSummary {
  /**
   * <p>
   *          The vote value, either <code>YES</code> or <code>NO</code>.
   *       </p>
   * @public
   */
  Vote?: VoteValue | undefined;

  /**
   * <p>
   *          The name of the member that cast the vote.
   *       </p>
   * @public
   */
  MemberName?: string | undefined;

  /**
   * <p>
   *          The unique identifier of the member that cast the vote.
   *       </p>
   * @public
   */
  MemberId?: string | undefined;
}

/**
 * @public
 */
export interface ListProposalVotesOutput {
  /**
   * <p>
   *          The list of votes.
   *       </p>
   * @public
   */
  ProposalVotes?: VoteSummary[] | undefined;

  /**
   * <p>
   *          The pagination token that indicates the next set of results to retrieve.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags assigned to the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RejectInvitationInput {
  /**
   * <p>The unique identifier of the invitation to reject.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the specified resource. Tag values can be empty, for example, <code>"MyTagKey" : ""</code>. You can specify multiple key-value pairs in a single request, with an overall maximum of 50 tags added to each resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs and their format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
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
   * <p>The unique identifier of the Managed Blockchain network to which the member belongs.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>Configuration properties for publishing to Amazon CloudWatch Logs.</p>
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
   * <p>The unique identifier of the network that the node is on.</p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>The unique identifier of the member that owns the node.</p>
   *          <p>Applies only to Hyperledger Fabric.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The unique identifier of the node.</p>
   * @public
   */
  NodeId: string | undefined;

  /**
   * <p>Configuration properties for publishing to Amazon CloudWatch Logs.</p>
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
   * <p>
   *          The unique identifier of the network.
   *       </p>
   * @public
   */
  NetworkId: string | undefined;

  /**
   * <p>
   *          The unique identifier of the proposal.
   *       </p>
   * @public
   */
  ProposalId: string | undefined;

  /**
   * <p>The unique identifier of the member casting the vote.
   *       </p>
   * @public
   */
  VoterMemberId: string | undefined;

  /**
   * <p>
   *          The value of the vote.
   *       </p>
   * @public
   */
  Vote: VoteValue | undefined;
}

/**
 * @public
 */
export interface VoteOnProposalOutput {}
