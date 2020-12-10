import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ProviderType {
  BITBUCKET = "Bitbucket",
  GITHUB = "GitHub",
  GITHUB_ENTERPRISE_SERVER = "GitHubEnterpriseServer",
}

/**
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

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

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

export namespace CreateConnectionInput {
  export const filterSensitiveLog = (obj: CreateConnectionInput): any => ({
    ...obj,
  });
}

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

export namespace CreateConnectionOutput {
  export const filterSensitiveLog = (obj: CreateConnectionOutput): any => ({
    ...obj,
  });
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
}

/**
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

export namespace VpcConfiguration {
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj,
  });
}

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
}

export namespace CreateHostInput {
  export const filterSensitiveLog = (obj: CreateHostInput): any => ({
    ...obj,
  });
}

export interface CreateHostOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be created.</p>
   */
  HostArn?: string;
}

export namespace CreateHostOutput {
  export const filterSensitiveLog = (obj: CreateHostOutput): any => ({
    ...obj,
  });
}

export interface DeleteConnectionInput {
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
}

export interface DeleteConnectionOutput {}

export namespace DeleteConnectionOutput {
  export const filterSensitiveLog = (obj: DeleteConnectionOutput): any => ({
    ...obj,
  });
}

export interface DeleteHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the host to be deleted.</p>
   */
  HostArn: string | undefined;
}

export namespace DeleteHostInput {
  export const filterSensitiveLog = (obj: DeleteHostInput): any => ({
    ...obj,
  });
}

export interface DeleteHostOutput {}

export namespace DeleteHostOutput {
  export const filterSensitiveLog = (obj: DeleteHostOutput): any => ({
    ...obj,
  });
}

export interface GetConnectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of a connection.</p>
   */
  ConnectionArn: string | undefined;
}

export namespace GetConnectionInput {
  export const filterSensitiveLog = (obj: GetConnectionInput): any => ({
    ...obj,
  });
}

export enum ConnectionStatus {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PENDING = "PENDING",
}

/**
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

export namespace Connection {
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

export interface GetConnectionOutput {
  /**
   * <p>The connection details, such as status, owner, and provider type.</p>
   */
  Connection?: Connection;
}

export namespace GetConnectionOutput {
  export const filterSensitiveLog = (obj: GetConnectionOutput): any => ({
    ...obj,
  });
}

export interface GetHostInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the requested host.</p>
   */
  HostArn: string | undefined;
}

export namespace GetHostInput {
  export const filterSensitiveLog = (obj: GetHostInput): any => ({
    ...obj,
  });
}

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

export namespace GetHostOutput {
  export const filterSensitiveLog = (obj: GetHostOutput): any => ({
    ...obj,
  });
}

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

export namespace ListConnectionsInput {
  export const filterSensitiveLog = (obj: ListConnectionsInput): any => ({
    ...obj,
  });
}

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

export namespace ListConnectionsOutput {
  export const filterSensitiveLog = (obj: ListConnectionsOutput): any => ({
    ...obj,
  });
}

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

export namespace ListHostsInput {
  export const filterSensitiveLog = (obj: ListHostsInput): any => ({
    ...obj,
  });
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

export namespace Host {
  export const filterSensitiveLog = (obj: Host): any => ({
    ...obj,
  });
}

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

export namespace ListHostsOutput {
  export const filterSensitiveLog = (obj: ListHostsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

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

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Two conflicting operations have been made on the same resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation is not supported. Check the connection status and try again.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

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

export namespace UpdateHostInput {
  export const filterSensitiveLog = (obj: UpdateHostInput): any => ({
    ...obj,
  });
}

export interface UpdateHostOutput {}

export namespace UpdateHostOutput {
  export const filterSensitiveLog = (obj: UpdateHostOutput): any => ({
    ...obj,
  });
}
