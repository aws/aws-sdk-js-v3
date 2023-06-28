// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeStarConnectionsServiceException as __BaseException } from "./CodeStarConnectionsServiceException";

/**
 * @public
 * @enum
 */
export const ProviderType = {
  BITBUCKET: "Bitbucket",
  GITHUB: "GitHub",
  GITHUB_ENTERPRISE_SERVER: "GitHubEnterpriseServer",
} as const;

/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * @public
 * <p>A tag is a key-value pair that is used to manage the resource.</p>
 *          <p>This tag is available for use by AWS services that support tags.</p>
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInput {
  /**
   * <p>The name of the external provider where your third-party code repository is
   *       configured.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The name of the connection to be created. The name must be unique in the calling AWS
   *       account.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The key-value pair to use when tagging the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection to be created.</p>
   */
  HostArn?: string;
}

/**
 * @public
 */
export interface CreateConnectionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the
   *       connection reference when the connection is shared between AWS services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn: string | undefined;

  /**
   * <p>Specifies the tags applied to the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Exceeded the maximum limit for connections.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Resource not found. Verify the connection resource ARN and try again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

/**
 * @public
 * <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The VPC configuration provisioned for the host.</p>
 */
export interface VpcConfiguration {
  /**
   * <p>The ID of the Amazon VPC connected to the infrastructure where your provider type is
   *       installed.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the subnet or subnets associated with the Amazon VPC connected to the
   *       infrastructure where your provider type is installed.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ID of the security group or security groups associated with the Amazon VPC connected
   *       to the infrastructure where your provider type is installed.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.</p>
   */
  TlsCertificate?: string;
}

/**
 * @public
 */
export interface CreateHostInput {
  /**
   * <p>The name of the host to be created. The name must be unique in the calling AWS
   *       account.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   */
  ProviderType: ProviderType | string | undefined;

  /**
   * <p>The endpoint of the infrastructure to be represented by the host after it is
   *       created.</p>
   */
  ProviderEndpoint: string | undefined;

  /**
   * <p>The VPC configuration to be provisioned for the host. A VPC must be configured and the
   *       infrastructure to be represented by the host must already be connected to the VPC.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateHostOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be created.</p>
   */
  HostArn?: string;

  Tags?: Tag[];
}

/**
 * @public
 */
export interface DeleteConnectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to be deleted.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionOutput {}

/**
 * @public
 */
export interface DeleteHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be deleted.</p>
   */
  HostArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteHostOutput {}

/**
 * @public
 */
export interface GetConnectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of a connection.</p>
   */
  ConnectionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p>
 *          <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the
 *       connection in the console.</p>
 */
export interface Connection {
  /**
   * <p>The name of the connection. Connection names must be unique in an AWS user account.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection
   *       reference when the connection is shared between AWS services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn?: string;

  /**
   * <p>The name of the external provider where your third-party code repository is
   *       configured.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The identifier of the external provider where your third-party code repository is configured.
   *       For Bitbucket, this is the account ID of the owner of the Bitbucket repository.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The current status of the connection. </p>
   */
  ConnectionStatus?: ConnectionStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection.</p>
   */
  HostArn?: string;
}

/**
 * @public
 */
export interface GetConnectionOutput {
  /**
   * <p>The connection details, such as status, owner, and provider type.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface GetHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the requested host.</p>
   */
  HostArn: string | undefined;
}

/**
 * @public
 */
export interface GetHostOutput {
  /**
   * <p>The name of the requested host.</p>
   */
  Name?: string;

  /**
   * <p>The status of the requested host.</p>
   */
  Status?: string;

  /**
   * <p>The provider type of the requested host, such as GitHub Enterprise Server.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The endpoint of the infrastructure represented by the requested host.</p>
   */
  ProviderEndpoint?: string;

  /**
   * <p>The VPC configuration of the requested host.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

/**
 * @public
 */
export interface ListConnectionsInput {
  /**
   * <p>Filters the list of connections to those associated with a specified provider, such as
   *       Bitbucket.</p>
   */
  ProviderTypeFilter?: ProviderType | string;

  /**
   * <p>Filters the list of connections to those associated with a specified host.</p>
   */
  HostArnFilter?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that was returned from the previous <code>ListConnections</code> call, which
   *       can be used to return the next set of connections in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectionsOutput {
  /**
   * <p>A list of connections and the details for each connection, such as status, owner, and
   *       provider type.</p>
   */
  Connections?: Connection[];

  /**
   * <p>A token that can be used in the next <code>ListConnections</code> call. To view all
   *       items in the list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHostsInput {
  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that was returned from the previous <code>ListHosts</code> call, which can be
   *       used to return the next set of hosts in the list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A resource that represents the infrastructure where a third-party provider is installed.
 *       The host is used when you create connections to an installed third-party provider type, such
 *       as GitHub Enterprise Server. You create one host for all connections to that provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 */
export interface Host {
  /**
   * <p>The name of the host.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the host.</p>
   */
  HostArn?: string;

  /**
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The endpoint of the infrastructure where your provider type is installed.</p>
   */
  ProviderEndpoint?: string;

  /**
   * <p>The VPC configuration provisioned for the host.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The status of the host, such as PENDING, AVAILABLE, VPC_CONFIG_DELETING, VPC_CONFIG_INITIALIZING, and VPC_CONFIG_FAILED_INITIALIZATION.</p>
   */
  Status?: string;

  /**
   * <p>The status description for the host.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface ListHostsOutput {
  /**
   * <p>A list of hosts and the details for each host, such as status, endpoint, and provider
   *       type.</p>
   */
  Hosts?: Host[];

  /**
   * <p>A token that can be used in the next <code>ListHosts</code> call. To view all items in the
   *       list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags you want to modify or add to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of keys for the tags to be removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 * <p>Two conflicting operations have been made on the same resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The operation is not supported. Check the connection status and try again.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be updated.</p>
   */
  HostArn: string | undefined;

  /**
   * <p>The URL or endpoint of the host to be updated.</p>
   */
  ProviderEndpoint?: string;

  /**
   * <p>The VPC configuration of the host to be updated. A VPC must be configured and the
   *       infrastructure to be represented by the host must already be connected to the VPC.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

/**
 * @public
 */
export interface UpdateHostOutput {}
