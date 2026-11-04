// smithy-typescript generated code
import type { AttachPointType, ConnectionState, EnvironmentState, RemoteAccountIdentifierType } from "./enums";

/**
 * Identifies an attach point to use with a Connection.
 *
 * @public
 */
export type AttachPoint =
  | AttachPoint.ArnMember
  | AttachPoint.DirectConnectGatewayMember
  | AttachPoint.$UnknownMember;

/**
 * @public
 */
export namespace AttachPoint {
  /**
   * Identifies an DirectConnect Gateway attach point by DirectConnectGatewayID.
   *
   * @public
   */
  export interface DirectConnectGatewayMember {
    directConnectGateway: string;
    arn?: never;
    $unknown?: never;
  }

  /**
   * Identifies an attach point by full ARN.
   *
   * @public
   */
  export interface ArnMember {
    directConnectGateway?: never;
    arn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    directConnectGateway?: never;
    arn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    directConnectGateway: (value: string) => T;
    arn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AcceptConnectionProposalRequest {
  /**
   * The Attach Point to which the connection should be associated.
   *
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * An Activation Key that was generated on a supported partner's portal. This key captures the desired parameters from the initial creation request.
   *
   * The details of this request can be described using with DescribeConnectionProposal.
   *
   * @public
   */
  activationKey: string | undefined;

  /**
   * A description to distinguish this Connection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags to associate with the resulting Connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token used for the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Describes the respective AWS Interconnect Partner organization.
 *
 * @public
 */
export type Provider =
  | Provider.CloudServiceProviderMember
  | Provider.LastMileProviderMember
  | Provider.$UnknownMember;

/**
 * @public
 */
export namespace Provider {
  /**
   * The provider's name. Specifically, connections to/from this Cloud Service Provider will be considered Multicloud connections.
   *
   * @public
   */
  export interface CloudServiceProviderMember {
    cloudServiceProvider: string;
    lastMileProvider?: never;
    $unknown?: never;
  }

  /**
   * The provider's name. Specifically, connections to/from this Last Mile Provider will be considered LastMile connections.
   *
   * @public
   */
  export interface LastMileProviderMember {
    cloudServiceProvider?: never;
    lastMileProvider: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudServiceProvider?: never;
    lastMileProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudServiceProvider: (value: string) => T;
    lastMileProvider: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The object describing the provided connectivity from the AWS region to the partner location.
 *
 * @public
 */
export interface Connection {
  /**
   * The short identifier of the connection object.
   *
   * @public
   */
  id: string | undefined;

  /**
   * An ARN of a Connection object.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A descriptive name for the connection.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The specific selected bandwidth of this connection.
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The Attach Point to which the connection should be associated."
   *
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * The specific Environment this connection is placed upon.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The provider on the remote side of this Connection.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The provider specific location on the remote side of this Connection
   *
   * @public
   */
  location: string | undefined;

  /**
   * The specific product type of this Connection.
   *
   * @public
   */
  type: string | undefined;

  /**
   * - `requested`: The initial state of a connection. The state will remain here until the Connection is accepted on the Partner portal.
   * - `pending`: The connection has been accepted and is being provisioned between AWS and the Partner.
   * - `available`: The connection has been fully provisioned between AWS and the Partner.
   * - `deleting`: The connection is being deleted.
   * - `deleted`: The connection has been deleted.
   * - `failed`: The connection has failed to be created.
   * - `updating`: The connection is being updated.
   *
   * @public
   */
  state: ConnectionState | undefined;

  /**
   * An identifier used by both AWS and the remote partner to identify the specific connection.
   *
   * @public
   */
  sharedId: string | undefined;

  /**
   * The billing tier this connection is currently assigned.
   *
   * @public
   */
  billingTier?: number | undefined;

  /**
   * The account that owns this Connection
   *
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * The Activation Key associated to this connection.
   *
   * @public
   */
  activationKey: string | undefined;

  /**
   * The tags on the Connection
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AcceptConnectionProposalResponse {
  /**
   * The created Connection object.
   *
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * Describes a possible Attach Point for a Connection.
 *
 * @public
 */
export interface AttachPointDescriptor {
  /**
   * The type of this AttachPoint, which will dictate the syntax of the identifier.
   *
   * Current types include:
   *
   * - ARN
   * - DirectConnect Gateway
   *
   * @public
   */
  type: AttachPointType | undefined;

  /**
   * The identifier for the specific type of the AttachPoint.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The descriptive name of the identifier attach point.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Contains the details about the available and supported bandwidths.
 *
 * @public
 */
export interface Bandwidths {
  /**
   * The list of currently available bandwidths.
   *
   * @public
   */
  available?: string[] | undefined;

  /**
   * The list of all bandwidths that this environment plans to support
   *
   * @public
   */
  supported?: string[] | undefined;
}

/**
 * The types of identifiers that may be needed for remote account specification.
 *
 * @public
 */
export type RemoteAccountIdentifier =
  | RemoteAccountIdentifier.IdentifierMember
  | RemoteAccountIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace RemoteAccountIdentifier {
  /**
   * A generic bit of identifying information. Can be used in place of any of the more specific types.
   *
   * @public
   */
  export interface IdentifierMember {
    identifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    identifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    identifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * A description to distinguish this Connection.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The desired bandwidth of the requested Connection
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The Attach Point to which the connection should be associated."
   *
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * The identifier of the Environment across which this Connection should be created.
   *
   * The available Environment objects can be determined using ListEnvironments.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * Account and/or principal identifying information that can be verified by the partner of this specific Environment.
   *
   * @public
   */
  remoteAccount?: RemoteAccountIdentifier | undefined;

  /**
   * The tag to associate with the resulting Connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token used for the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * The resulting Connection.
   *
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * The identifier of the Connection to be deleted.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Idempotency token used for the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * The Connection object that has been marked for deletion.
   *
   * @public
   */
  connection: Connection | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * The identifier of the requested Connection
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * The existing Connection resource.
   *
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * The max number of list results in a single paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token from a previous paginated response indicating you wish to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter the results to only include Connection objects in the given Connection$state.
   *
   * @public
   */
  state?: ConnectionState | undefined;

  /**
   * Filter the results to only include Connection objects on the given Environment.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * Filter the results to only include Connection objects to the given Provider.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * Filter results to only include Connection objects attached to the given AttachPoint.
   *
   * @public
   */
  attachPoint?: AttachPoint | undefined;
}

/**
 * Summarized view of a Connection object.
 *
 * @public
 */
export interface ConnectionSummary {
  /**
   * The identifier of the requested Connection
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ARN of the Connection
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A descriptive name of the Connection
   *
   * @public
   */
  description: string | undefined;

  /**
   * The bandwidth of the Connection
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The Attach Point to which the connection should be associated.
   *
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * The Environment that this Connection is created on.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The provider on the remote end of this Connection
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The provider specific location at the remote end of this Connection
   *
   * @public
   */
  location: string | undefined;

  /**
   * The product variant supplied by this resource.
   *
   * @public
   */
  type: string | undefined;

  /**
   * - `requested`: The initial state of a connection. The state will remain here until the Connection is accepted on the Partner portal.
   * - `pending`: The connection has been accepted and is being provisioned between AWS and the Partner.
   * - `available`: The connection has been fully provisioned between AWS and the Partner.
   * - `deleting`: The connection is being deleted.
   * - `deleted`: The connection has been deleted.
   * - `failed`: The connection has failed to be created.
   * - `updating`: The connection is being updated.
   *
   * @public
   */
  state: ConnectionState | undefined;

  /**
   * An identifier used by both AWS and the remote partner to identify the specific connection.
   *
   * @public
   */
  sharedId: string | undefined;

  /**
   * The billing tier this connection is currently assigned.
   *
   * @public
   */
  billingTier?: number | undefined;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * The resulting list of Connection objects.
   *
   * @public
   */
  connections?: ConnectionSummary[] | undefined;

  /**
   * A pagination token for use in subsequent calls to fetch the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * The identifier of the Connection that should be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * An updated description to apply to the Connection
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Request a new bandwidth size on the given Connection.
   *
   * Note that changes to the size may be subject to additional policy, and does require the remote partner provider to acknowledge and permit this new bandwidth size.
   *
   * @public
   */
  bandwidth?: string | undefined;

  /**
   * Idempotency token used for the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * The resulting updated Connection
   *
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionProposalRequest {
  /**
   * An Activation Key that was generated on a supported partner's portal. This key captures the desired parameters from the initial creation request.
   *
   * @public
   */
  activationKey: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionProposalResponse {
  /**
   * The bandwidth of the proposed Connection.
   *
   * @public
   */
  bandwidth: string | undefined;

  /**
   * The identifier of the Environment upon which the Connection would be placed if this proposal were accepted.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The partner provider of the specific Environment of the proposal.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The partner specific location distinguisher of the specific Environment of the proposal.
   *
   * @public
   */
  location: string | undefined;
}

/**
 * Defines the logical topology that an AWS Interconnect Connection is created upon.
 *
 * Specifically, an Environment defines the partner The remote Cloud Service Provider of this resource. or The remote Last Mile Provider of this resource. and the region or location specification to which an AWS Interconnect Connection can be made.
 *
 * @public
 */
export interface Environment {
  /**
   * The provider on the remote side of this Connection.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The provider specific location on the remote side of this Connection.
   *
   * @public
   */
  location: string | undefined;

  /**
   * The identifier of this Environment
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The state of the Environment. Possible values:
   *
   * - `available`: The environment is available and new Connection objects can be requested.
   * - `limited`: The environment is available, but overall capacity is limited. The set of available bandwidths
   * - `unavailable`: The environment is currently unavailable.
   *
   * @public
   */
  state: EnvironmentState | undefined;

  /**
   * The sets of bandwidths that are available and supported on this environment.
   *
   * @public
   */
  bandwidths: Bandwidths | undefined;

  /**
   * The specific product type of Connection objects provided by this Environment.
   *
   * @public
   */
  type: string | undefined;

  /**
   * An HTTPS URL on the remote partner portal where the Activation Key should be brought to complete the creation process.
   *
   * @public
   */
  activationPageUrl?: string | undefined;

  /**
   * The type of identifying information that should be supplied to the `remoteAccount` parameter of a CreateConnection call for this specific Environment.
   *
   * @public
   */
  remoteIdentifierType?: RemoteAccountIdentifierType | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * The identifier of the specific Environment to describe.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * The requested Environment structure.
   *
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * The max number of list results in a single paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token from a previous paginated response indicating you wish to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter results to only include Environment objects that connect to the Provider.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * Filter results to only include Environment objects that connect to a given location distiguisher.
   *
   * @public
   */
  location?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * The list of matching Environment objects.
   *
   * @public
   */
  environments: Environment[] | undefined;

  /**
   * A pagination token for use in subsequent calls to fetch the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachPointsRequest {
  /**
   * The identifier of the Environment for which to list valid Attach Points.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The max number of list results in a single paginated response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token from a previous paginated response indicating you wish to get the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachPointsResponse {
  /**
   * The valid AttachPoint
   *
   * @public
   */
  attachPoints: AttachPointDescriptor[] | undefined;

  /**
   * A pagination token indicating that there are more results that can be fetched.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource ARN for which to list tags.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags on the specified ARN.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource that should receive the new tags.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A map of tags to apply to the specified resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * The ARN of the resource from which the specified tags should be removed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The list of tag keys that should be removed from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
