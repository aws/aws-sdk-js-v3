// smithy-typescript generated code
import type { AttachPointType, ConnectionState, EnvironmentState, RemoteAccountIdentifierType } from "./enums";

/**
 * <p>Identifies an attach point to use with a Connection.</p>
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
   * <p>Identifies an DirectConnect Gateway attach point by DirectConnectGatewayID.</p>
   * @public
   */
  export interface DirectConnectGatewayMember {
    directConnectGateway: string;
    arn?: never;
    $unknown?: never;
  }

  /**
   * <p>Identifies an attach point by full ARN.</p>
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
   * <p>The Attach Point to which the connection should be associated.</p>
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * <p>An Activation Key that was generated on a supported partner's portal. This key captures the desired parameters from the initial creation request.</p> <p>The details of this request can be described using with <a>DescribeConnectionProposal</a>. </p>
   * @public
   */
  activationKey: string | undefined;

  /**
   * <p>A description to distinguish this <a>Connection</a>.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags to associate with the resulting <a>Connection</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Idempotency token used for the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Describes the respective AWS Interconnect Partner organization.</p>
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
   * <p>The provider's name. Specifically, connections to/from this Cloud Service Provider will be considered Multicloud connections.</p>
   * @public
   */
  export interface CloudServiceProviderMember {
    cloudServiceProvider: string;
    lastMileProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The provider's name. Specifically, connections to/from this Last Mile Provider will be considered LastMile connections.</p>
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
 * <p>The object describing the provided connectivity from the AWS region to the partner location.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The short identifier of the connection object.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An ARN of a <a>Connection</a> object.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A descriptive name for the connection.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The specific selected bandwidth of this connection.</p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The Attach Point to which the connection should be associated."</p>
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * <p>The specific <a>Environment</a> this connection is placed upon.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The provider on the remote side of this <a>Connection</a>.</p>
   * @public
   */
  provider: Provider | undefined;

  /**
   * <p>The provider specific location on the remote side of this <a>Connection</a> </p>
   * @public
   */
  location: string | undefined;

  /**
   * <p>The specific product type of this <a>Connection</a>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <ul> <li> <p> <code>requested</code>: The initial state of a connection. The state will remain here until the Connection is accepted on the Partner portal.</p> </li> <li> <p> <code>pending</code>: The connection has been accepted and is being provisioned between AWS and the Partner.</p> </li> <li> <p> <code>available</code>: The connection has been fully provisioned between AWS and the Partner.</p> </li> <li> <p> <code>deleting</code>: The connection is being deleted.</p> </li> <li> <p> <code>deleted</code>: The connection has been deleted.</p> </li> <li> <p> <code>failed</code>: The connection has failed to be created.</p> </li> <li> <p> <code>updating</code>: The connection is being updated.</p> </li> </ul>
   * @public
   */
  state: ConnectionState | undefined;

  /**
   * <p>An identifier used by both AWS and the remote partner to identify the specific connection.</p>
   * @public
   */
  sharedId: string | undefined;

  /**
   * <p>The billing tier this connection is currently assigned.</p>
   * @public
   */
  billingTier?: number | undefined;

  /**
   * <p>The account that owns this <a>Connection</a> </p>
   * @public
   */
  ownerAccount: string | undefined;

  /**
   * <p>The Activation Key associated to this connection.</p>
   * @public
   */
  activationKey: string | undefined;

  /**
   * <p>The tags on the <a>Connection</a> </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AcceptConnectionProposalResponse {
  /**
   * <p>The created <a>Connection</a> object.</p>
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * <p>Describes a possible Attach Point for a Connection.</p>
 * @public
 */
export interface AttachPointDescriptor {
  /**
   * <p>The type of this AttachPoint, which will dictate the syntax of the identifier.</p> <p>Current types include:</p> <ul> <li> <p>ARN</p> </li> <li> <p>DirectConnect Gateway</p> </li> </ul>
   * @public
   */
  type: AttachPointType | undefined;

  /**
   * <p>The identifier for the specific type of the AttachPoint.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The descriptive name of the identifier attach point.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Contains the details about the available and supported bandwidths.</p>
 * @public
 */
export interface Bandwidths {
  /**
   * <p>The list of currently available bandwidths.</p>
   * @public
   */
  available?: string[] | undefined;

  /**
   * <p>The list of all bandwidths that this environment plans to support</p>
   * @public
   */
  supported?: string[] | undefined;
}

/**
 * <p>The types of identifiers that may be needed for remote account specification.</p>
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
   * <p>A generic bit of identifying information. Can be used in place of any of the more specific types.</p>
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
   * <p>A description to distinguish this <a>Connection</a>.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The desired bandwidth of the requested <a>Connection</a> </p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The Attach Point to which the connection should be associated."</p>
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * <p>The identifier of the <a>Environment</a> across which this <a>Connection</a> should be created.</p> <p>The available <a>Environment</a> objects can be determined using <a>ListEnvironments</a>.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>Account and/or principal identifying information that can be verified by the partner of this specific Environment.</p>
   * @public
   */
  remoteAccount?: RemoteAccountIdentifier | undefined;

  /**
   * <p>The tag to associate with the resulting <a>Connection</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Idempotency token used for the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * <p>The resulting <a>Connection</a>.</p>
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * <p>The identifier of the <a>Connection</a> to be deleted. </p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Idempotency token used for the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * <p>The <a>Connection</a> object that has been marked for deletion.</p>
   * @public
   */
  connection: Connection | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * <p>The identifier of the requested <a>Connection</a> </p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p>The existing <a>Connection</a> resource.</p>
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * <p>The max number of list results in a single paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token from a previous paginated response indicating you wish to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter the results to only include <a>Connection</a> objects in the given <a>Connection$state</a>.</p>
   * @public
   */
  state?: ConnectionState | undefined;

  /**
   * <p>Filter the results to only include <a>Connection</a> objects on the given <a>Environment</a>.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>Filter the results to only include <a>Connection</a> objects to the given <a>Provider</a>.</p>
   * @public
   */
  provider?: Provider | undefined;

  /**
   * <p>Filter results to only include <a>Connection</a> objects attached to the given <a>AttachPoint</a>.</p>
   * @public
   */
  attachPoint?: AttachPoint | undefined;
}

/**
 * <p>Summarized view of a Connection object.</p>
 * @public
 */
export interface ConnectionSummary {
  /**
   * <p>The identifier of the requested <a>Connection</a> </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the <a>Connection</a> </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A descriptive name of the <a>Connection</a> </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The bandwidth of the <a>Connection</a> </p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The Attach Point to which the connection should be associated.</p>
   * @public
   */
  attachPoint: AttachPoint | undefined;

  /**
   * <p>The <a>Environment</a> that this <a>Connection</a> is created on.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The provider on the remote end of this <a>Connection</a> </p>
   * @public
   */
  provider: Provider | undefined;

  /**
   * <p>The provider specific location at the remote end of this <a>Connection</a> </p>
   * @public
   */
  location: string | undefined;

  /**
   * <p>The product variant supplied by this resource.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <ul> <li> <p> <code>requested</code>: The initial state of a connection. The state will remain here until the Connection is accepted on the Partner portal.</p> </li> <li> <p> <code>pending</code>: The connection has been accepted and is being provisioned between AWS and the Partner.</p> </li> <li> <p> <code>available</code>: The connection has been fully provisioned between AWS and the Partner.</p> </li> <li> <p> <code>deleting</code>: The connection is being deleted.</p> </li> <li> <p> <code>deleted</code>: The connection has been deleted.</p> </li> <li> <p> <code>failed</code>: The connection has failed to be created.</p> </li> <li> <p> <code>updating</code>: The connection is being updated.</p> </li> </ul>
   * @public
   */
  state: ConnectionState | undefined;

  /**
   * <p>An identifier used by both AWS and the remote partner to identify the specific connection.</p>
   * @public
   */
  sharedId: string | undefined;

  /**
   * <p>The billing tier this connection is currently assigned.</p>
   * @public
   */
  billingTier?: number | undefined;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * <p>The resulting list of <a>Connection</a> objects.</p>
   * @public
   */
  connections?: ConnectionSummary[] | undefined;

  /**
   * <p>A pagination token for use in subsequent calls to fetch the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * <p>The identifier of the <a>Connection</a> that should be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>An updated description to apply to the <a>Connection</a> </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Request a new bandwidth size on the given <a>Connection</a>.</p> <p>Note that changes to the size may be subject to additional policy, and does require the remote partner provider to acknowledge and permit this new bandwidth size.</p>
   * @public
   */
  bandwidth?: string | undefined;

  /**
   * <p>Idempotency token used for the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * <p>The resulting updated <a>Connection</a> </p>
   * @public
   */
  connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionProposalRequest {
  /**
   * <p>An Activation Key that was generated on a supported partner's portal. This key captures the desired parameters from the initial creation request.</p>
   * @public
   */
  activationKey: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionProposalResponse {
  /**
   * <p>The bandwidth of the proposed <a>Connection</a>. </p>
   * @public
   */
  bandwidth: string | undefined;

  /**
   * <p>The identifier of the <a>Environment</a> upon which the <a>Connection</a> would be placed if this proposal were accepted.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The partner provider of the specific <a>Environment</a> of the proposal.</p>
   * @public
   */
  provider: Provider | undefined;

  /**
   * <p>The partner specific location distinguisher of the specific <a>Environment</a> of the proposal.</p>
   * @public
   */
  location: string | undefined;
}

/**
 * <p>Defines the logical topology that an AWS Interconnect Connection is created upon.</p> <p>Specifically, an Environment defines the partner The remote Cloud Service Provider of this resource. or The remote Last Mile Provider of this resource. and the region or location specification to which an AWS Interconnect Connection can be made.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>The provider on the remote side of this <a>Connection</a>.</p>
   * @public
   */
  provider: Provider | undefined;

  /**
   * <p>The provider specific location on the remote side of this <a>Connection</a>.</p>
   * @public
   */
  location: string | undefined;

  /**
   * <p>The identifier of this <a>Environment</a> </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The state of the <a>Environment</a>. Possible values:</p> <ul> <li> <p> <code>available</code>: The environment is available and new <a>Connection</a> objects can be requested.</p> </li> <li> <p> <code>limited</code>: The environment is available, but overall capacity is limited. The set of available bandwidths </p> </li> <li> <p> <code>unavailable</code>: The environment is currently unavailable.</p> </li> </ul>
   * @public
   */
  state: EnvironmentState | undefined;

  /**
   * <p>The sets of bandwidths that are available and supported on this environment.</p>
   * @public
   */
  bandwidths: Bandwidths | undefined;

  /**
   * <p>The specific product type of <a>Connection</a> objects provided by this <a>Environment</a>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>An HTTPS URL on the remote partner portal where the Activation Key should be brought to complete the creation process.</p>
   * @public
   */
  activationPageUrl?: string | undefined;

  /**
   * <p>The type of identifying information that should be supplied to the <code>remoteAccount</code> parameter of a <a>CreateConnection</a> call for this specific Environment.</p>
   * @public
   */
  remoteIdentifierType?: RemoteAccountIdentifierType | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * <p>The identifier of the specific <a>Environment</a> to describe.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * <p>The requested <a>Environment</a> structure.</p>
   * @public
   */
  environment: Environment | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>The max number of list results in a single paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token from a previous paginated response indicating you wish to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter results to only include <a>Environment</a> objects that connect to the <a>Provider</a>.</p>
   * @public
   */
  provider?: Provider | undefined;

  /**
   * <p>Filter results to only include <a>Environment</a> objects that connect to a given location distiguisher.</p>
   * @public
   */
  location?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>The list of matching <a>Environment</a> objects.</p>
   * @public
   */
  environments: Environment[] | undefined;

  /**
   * <p>A pagination token for use in subsequent calls to fetch the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachPointsRequest {
  /**
   * <p>The identifier of the <a>Environment</a> for which to list valid Attach Points.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The max number of list results in a single paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token from a previous paginated response indicating you wish to get the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachPointsResponse {
  /**
   * <p>The valid <a>AttachPoint</a> </p>
   * @public
   */
  attachPoints: AttachPointDescriptor[] | undefined;

  /**
   * <p>A pagination token indicating that there are more results that can be fetched.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN for which to list tags. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags on the specified ARN.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource that should receive the new tags.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A map of tags to apply to the specified resource.</p>
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
   * <p>The ARN of the resource from which the specified tags should be removed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The list of tag keys that should be removed from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
