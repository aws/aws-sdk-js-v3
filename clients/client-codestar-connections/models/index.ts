import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The configuration that allows a service such as CodePipeline to connect to a third-party
 *       code repository.</p>
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
   * <p>The name of the connection. Connection names must be unique in an AWS user account.</p>
   */
  ConnectionName?: string;

  /**
   * <p>The current status of the connection. </p>
   */
  ConnectionStatus?: ConnectionStatus | string;

  /**
   * <p>The name of the external provider where your third-party code repository is configured.
   *       For Bitbucket, this is the account ID of the owner of the Bitbucket repository.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The name of the external provider where your third-party code repository is configured.
   *       Currently, the valid provider type is Bitbucket.</p>
   */
  ProviderType?: ProviderType | string;
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
   * <p>The name of the connection to be created. The name must be unique in the calling AWS
   *       account.</p>
   */
  ConnectionName: string | undefined;

  /**
   * <p>The name of the external provider where your third-party code repository is configured.
   *       Currently, the valid provider type is Bitbucket.</p>
   */
  ProviderType: ProviderType | string | undefined;
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
   * <p>The maximum number of results to return in a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that was returned from the previous <code>ListConnections</code> call, which
   *       can be used to return the next set of connections in the list.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters the list of connections to those associated with a specified provider, such as
   *       Bitbucket.</p>
   */
  ProviderTypeFilter?: ProviderType | string;
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
  export const isa = (o: any): o is ListConnectionsOutput => __isa(o, "ListConnectionsOutput");
}

export enum ProviderType {
  BITBUCKET = "Bitbucket",
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
