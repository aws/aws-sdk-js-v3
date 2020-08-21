import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p>
 *          <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the
 *       connection in the console.</p>
 */
export interface Connection {
  __type?: "Connection";
  /**
   * <p>The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection
   *       reference when the connection is shared between AWS services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection.</p>
   */
  HostArn?: string;

  /**
   * <p>The current status of the connection. </p>
   */
  ConnectionStatus?: ConnectionStatus | string;

  /**
   * <p>The name of the external provider where your third-party code repository is configured.
   *       The valid provider type is Bitbucket.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The identifier of the external provider where your third-party code repository is configured.
   *       For Bitbucket, this is the account ID of the owner of the Bitbucket repository.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The name of the connection. Connection names must be unique in an AWS user account.</p>
   */
  ConnectionName?: string;
}

export namespace Connection {
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Connection => __isa(o, "Connection");
}

export enum ConnectionStatus {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PENDING = "PENDING",
}

export interface CreateConnectionInput {
  __type?: "CreateConnectionInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the host associated with the connection to be created.</p>
   */
  HostArn?: string;

  /**
   * <p>The name of the external provider where your third-party code repository is configured.
   *       The valid provider type is Bitbucket.</p>
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
}

export namespace CreateConnectionInput {
  export const filterSensitiveLog = (obj: CreateConnectionInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConnectionInput => __isa(o, "CreateConnectionInput");
}

export interface CreateConnectionOutput {
  __type?: "CreateConnectionOutput";
  /**
   * <p>Specifies the tags applied to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the connection to be created. The ARN is used as the
   *       connection reference when the connection is shared between AWS services.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn: string | undefined;
}

export namespace CreateConnectionOutput {
  export const filterSensitiveLog = (obj: CreateConnectionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConnectionOutput => __isa(o, "CreateConnectionOutput");
}

export interface CreateHostInput {
  __type?: "CreateHostInput";
  /**
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   */
  ProviderType: ProviderType | string | undefined;

  /**
   * <p>The VPC configuration to be provisioned for the host. A VPC must be configured and the
   *       infrastructure to be represented by the host must already be connected to the VPC.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The endpoint of the infrastructure to be represented by the host after it is
   *       created.</p>
   */
  ProviderEndpoint: string | undefined;

  /**
   * <p>The name of the host to be created. The name must be unique in the calling AWS
   *       account.</p>
   */
  Name: string | undefined;
}

export namespace CreateHostInput {
  export const filterSensitiveLog = (obj: CreateHostInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateHostInput => __isa(o, "CreateHostInput");
}

export interface CreateHostOutput {
  __type?: "CreateHostOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be created.</p>
   */
  HostArn?: string;
}

export namespace CreateHostOutput {
  export const filterSensitiveLog = (obj: CreateHostOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateHostOutput => __isa(o, "CreateHostOutput");
}

export interface DeleteConnectionInput {
  __type?: "DeleteConnectionInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the connection to be deleted.</p>
   *          <note>
   *             <p>The ARN is never reused if the connection is deleted.</p>
   *          </note>
   */
  ConnectionArn: string | undefined;
}

export namespace DeleteConnectionInput {
  export const filterSensitiveLog = (obj: DeleteConnectionInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteConnectionInput => __isa(o, "DeleteConnectionInput");
}

export interface DeleteConnectionOutput {
  __type?: "DeleteConnectionOutput";
}

export namespace DeleteConnectionOutput {
  export const filterSensitiveLog = (obj: DeleteConnectionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteConnectionOutput => __isa(o, "DeleteConnectionOutput");
}

export interface DeleteHostInput {
  __type?: "DeleteHostInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be deleted.</p>
   */
  HostArn: string | undefined;
}

export namespace DeleteHostInput {
  export const filterSensitiveLog = (obj: DeleteHostInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteHostInput => __isa(o, "DeleteHostInput");
}

export interface DeleteHostOutput {
  __type?: "DeleteHostOutput";
}

export namespace DeleteHostOutput {
  export const filterSensitiveLog = (obj: DeleteHostOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteHostOutput => __isa(o, "DeleteHostOutput");
}

export interface GetConnectionInput {
  __type?: "GetConnectionInput";
  /**
   * <p>The Amazon Resource Name (ARN) of a connection.</p>
   */
  ConnectionArn: string | undefined;
}

export namespace GetConnectionInput {
  export const filterSensitiveLog = (obj: GetConnectionInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetConnectionInput => __isa(o, "GetConnectionInput");
}

export interface GetConnectionOutput {
  __type?: "GetConnectionOutput";
  /**
   * <p>The connection details, such as status, owner, and provider type.</p>
   */
  Connection?: Connection;
}

export namespace GetConnectionOutput {
  export const filterSensitiveLog = (obj: GetConnectionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetConnectionOutput => __isa(o, "GetConnectionOutput");
}

export interface GetHostInput {
  __type?: "GetHostInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the requested host.</p>
   */
  HostArn: string | undefined;
}

export namespace GetHostInput {
  export const filterSensitiveLog = (obj: GetHostInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetHostInput => __isa(o, "GetHostInput");
}

export interface GetHostOutput {
  __type?: "GetHostOutput";
  /**
   * <p>The provider type of the requested host, such as GitHub Enterprise Server.</p>
   */
  ProviderType?: ProviderType | string;

  /**
   * <p>The VPC configuration of the requested host.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The endpoint of the infrastructure represented by the requested host.</p>
   */
  ProviderEndpoint?: string;

  /**
   * <p>The status of the requested host.</p>
   */
  Status?: string;

  /**
   * <p>The name of the requested host.</p>
   */
  Name?: string;
}

export namespace GetHostOutput {
  export const filterSensitiveLog = (obj: GetHostOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetHostOutput => __isa(o, "GetHostOutput");
}

/**
 * <p>A resource that represents the infrastructure where a third-party provider is installed.
 *       The host is used when you create connections to an installed third-party provider type, such
 *       as GitHub Enterprise Server. You create one host for all connections to that provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 */
export interface Host {
  __type?: "Host";
  /**
   * <p>The VPC configuration provisioned for the host.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * <p>The name of the host.</p>
   */
  Name?: string;

  /**
   * <p>The endpoint of the infrastructure where your provider type is installed.</p>
   */
  ProviderEndpoint?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the host.</p>
   */
  HostArn?: string;

  /**
   * <p>The status of the host, such as PENDING, AVAILABLE, VPC_CONFIG_DELETING, VPC_CONFIG_INITIALIZING, and VPC_CONFIG_FAILED_INITIALIZATION.</p>
   */
  Status?: string;

  /**
   * <p>The status description for the host.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The name of the installed provider to be associated with your connection. The host
   *       resource represents the infrastructure where your provider type is installed. The valid
   *       provider type is GitHub Enterprise Server.</p>
   */
  ProviderType?: ProviderType | string;
}

export namespace Host {
  export const filterSensitiveLog = (obj: Host): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Host => __isa(o, "Host");
}

/**
 * <p>Exceeded the maximum limit for connections.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListConnectionsInput {
  __type?: "ListConnectionsInput";
  /**
   * <p>Filters the list of connections to those associated with a specified host.</p>
   */
  HostArnFilter?: string;

  /**
   * <p>Filters the list of connections to those associated with a specified provider, such as
   *       Bitbucket.</p>
   */
  ProviderTypeFilter?: ProviderType | string;

  /**
   * <p>The token that was returned from the previous <code>ListConnections</code> call, which
   *       can be used to return the next set of connections in the list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace ListConnectionsInput {
  export const filterSensitiveLog = (obj: ListConnectionsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConnectionsInput => __isa(o, "ListConnectionsInput");
}

export interface ListConnectionsOutput {
  __type?: "ListConnectionsOutput";
  /**
   * <p>A token that can be used in the next <code>ListConnections</code> call. To view all
   *       items in the list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of connections and the details for each connection, such as status, owner, and
   *       provider type.</p>
   */
  Connections?: Connection[];
}

export namespace ListConnectionsOutput {
  export const filterSensitiveLog = (obj: ListConnectionsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConnectionsOutput => __isa(o, "ListConnectionsOutput");
}

export interface ListHostsInput {
  __type?: "ListHostsInput";
  /**
   * <p>The token that was returned from the previous <code>ListHosts</code> call, which can be
   *       used to return the next set of hosts in the list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

export namespace ListHostsInput {
  export const filterSensitiveLog = (obj: ListHostsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListHostsInput => __isa(o, "ListHostsInput");
}

export interface ListHostsOutput {
  __type?: "ListHostsOutput";
  /**
   * <p>A token that can be used in the next <code>ListHosts</code> call. To view all items in the
   *       list, continue to call this operation with each subsequent token until no more
   *       <code>nextToken</code> values are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of hosts and the details for each host, such as status, endpoint, and provider
   *       type.</p>
   */
  Hosts?: Host[];
}

export namespace ListHostsOutput {
  export const filterSensitiveLog = (obj: ListHostsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListHostsOutput => __isa(o, "ListHostsOutput");
}

export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceInput => __isa(o, "ListTagsForResourceInput");
}

export interface ListTagsForResourceOutput {
  __type?: "ListTagsForResourceOutput";
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceOutput => __isa(o, "ListTagsForResourceOutput");
}

export enum ProviderType {
  BITBUCKET = "Bitbucket",
  GITHUB_ENTERPRISE_SERVER = "GitHubEnterpriseServer",
}

/**
 * <p>Resource not found. Verify the connection resource ARN and try again.</p>
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
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceUnavailableException => __isa(o, "ResourceUnavailableException");
}

/**
 * <p>A tag is a key-value pair that is used to manage the resource.</p>
 *          <p>This tag is available for use by AWS services that support tags.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag's value.</p>
   */
  Value: string | undefined;

  /**
   * <p>The tag's key.</p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags you want to modify or add to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceInput => __isa(o, "TagResourceInput");
}

export interface TagResourceOutput {
  __type?: "TagResourceOutput";
}

export namespace TagResourceOutput {
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceOutput => __isa(o, "TagResourceOutput");
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
  /**
   * <p>The list of keys for the tags to be removed from the resource.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceInput => __isa(o, "UntagResourceInput");
}

export interface UntagResourceOutput {
  __type?: "UntagResourceOutput";
}

export namespace UntagResourceOutput {
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceOutput => __isa(o, "UntagResourceOutput");
}

/**
 * <p>The VPC configuration provisioned for the host.</p>
 */
export interface VpcConfiguration {
  __type?: "VpcConfiguration";
  /**
   * <p>The ID of the security group or security groups associated with the Amazon VPC connected
   *       to the infrastructure where your provider type is installed.</p>
   */
  SecurityGroupIds: string[] | undefined;

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
   * <p>The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.</p>
   */
  TlsCertificate?: string;
}

export namespace VpcConfiguration {
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VpcConfiguration => __isa(o, "VpcConfiguration");
}
