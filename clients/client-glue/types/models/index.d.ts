import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface GetTagsRequest {
    __type?: "GetTagsRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace GetTagsRequest {
    function isa(o: any): o is GetTagsRequest;
}
export interface GetTagsResponse {
    __type?: "GetTagsResponse";
    /**
     * <p>The requested tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace GetTagsResponse {
    function isa(o: any): o is GetTagsResponse;
}
export interface TagResourceRequest {
    __type?: "TagResourceRequest";
    /**
     * <p>The ARN of the AWS Glue resource to which to add the tags. For more
     *       information about AWS Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">AWS Glue ARN string pattern</a>.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>Tags to add to this resource.</p>
     */
    TagsToAdd: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
export interface TagResourceResponse {
    __type?: "TagResourceResponse";
}
export declare namespace TagResourceResponse {
    function isa(o: any): o is TagResourceResponse;
}
export interface UntagResourceRequest {
    __type?: "UntagResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>Tags to remove from this resource.</p>
     */
    TagsToRemove: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
export interface UntagResourceResponse {
    __type?: "UntagResourceResponse";
}
export declare namespace UntagResourceResponse {
    function isa(o: any): o is UntagResourceResponse;
}
export declare enum CloudWatchEncryptionMode {
    DISABLED = "DISABLED",
    SSEKMS = "SSE-KMS"
}
export declare enum ExistCondition {
    MUST_EXIST = "MUST_EXIST",
    NONE = "NONE",
    NOT_EXIST = "NOT_EXIST"
}
export declare enum JobBookmarksEncryptionMode {
    CSEKMS = "CSE-KMS",
    DISABLED = "DISABLED"
}
export declare enum S3EncryptionMode {
    DISABLED = "DISABLED",
    SSEKMS = "SSE-KMS",
    SSES3 = "SSE-S3"
}
export declare type WorkerType = "G.1X" | "G.2X" | "Standard";
/**
 * <p>Access to a resource was denied.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace AccessDeniedException {
    function isa(o: any): o is AccessDeniedException;
}
/**
 * <p>A resource to be created or added already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "AlreadyExistsException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace AlreadyExistsException {
    function isa(o: any): o is AlreadyExistsException;
}
/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
    name: "ConcurrentModificationException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace ConcurrentModificationException {
    function isa(o: any): o is ConcurrentModificationException;
}
/**
 * <p>Too many jobs are being run concurrently.</p>
 */
export interface ConcurrentRunsExceededException extends __SmithyException, $MetadataBearer {
    name: "ConcurrentRunsExceededException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace ConcurrentRunsExceededException {
    function isa(o: any): o is ConcurrentRunsExceededException;
}
/**
 * <p>A specified condition was not satisfied.</p>
 */
export interface ConditionCheckFailureException extends __SmithyException, $MetadataBearer {
    name: "ConditionCheckFailureException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace ConditionCheckFailureException {
    function isa(o: any): o is ConditionCheckFailureException;
}
/**
 * <p>A specified entity does not exist</p>
 */
export interface EntityNotFoundException extends __SmithyException, $MetadataBearer {
    name: "EntityNotFoundException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace EntityNotFoundException {
    function isa(o: any): o is EntityNotFoundException;
}
/**
 * <p>Contains details about an error.</p>
 */
export interface ErrorDetail {
    __type?: "ErrorDetail";
    /**
     * <p>The code associated with this error.</p>
     */
    ErrorCode?: string;
    /**
     * <p>A message describing the error.</p>
     */
    ErrorMessage?: string;
}
export declare namespace ErrorDetail {
    function isa(o: any): o is ErrorDetail;
}
/**
 * <p>An encryption operation failed.</p>
 */
export interface GlueEncryptionException extends __SmithyException, $MetadataBearer {
    name: "GlueEncryptionException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace GlueEncryptionException {
    function isa(o: any): o is GlueEncryptionException;
}
/**
 * <p>The same unique identifier was associated with two different records.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
    name: "IdempotentParameterMismatchException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace IdempotentParameterMismatchException {
    function isa(o: any): o is IdempotentParameterMismatchException;
}
/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
    name: "InternalServiceException";
    $fault: "server";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace InternalServiceException {
    function isa(o: any): o is InternalServiceException;
}
/**
 * <p>The input provided was not valid.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
    name: "InvalidInputException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace InvalidInputException {
    function isa(o: any): o is InvalidInputException;
}
/**
 * <p>The operation timed out.</p>
 */
export interface OperationTimeoutException extends __SmithyException, $MetadataBearer {
    name: "OperationTimeoutException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace OperationTimeoutException {
    function isa(o: any): o is OperationTimeoutException;
}
/**
 * <p>A resource numerical limit was exceeded.</p>
 */
export interface ResourceNumberLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ResourceNumberLimitExceededException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace ResourceNumberLimitExceededException {
    function isa(o: any): o is ResourceNumberLimitExceededException;
}
/**
 * <p>A value could not be validated.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace ValidationException {
    function isa(o: any): o is ValidationException;
}
/**
 * <p>There was a version conflict.</p>
 */
export interface VersionMismatchException extends __SmithyException, $MetadataBearer {
    name: "VersionMismatchException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace VersionMismatchException {
    function isa(o: any): o is VersionMismatchException;
}
export interface BatchCreatePartitionRequest {
    __type?: "BatchCreatePartitionRequest";
    /**
     * <p>The ID of the catalog in which the partition is to be created. Currently, this should be
     *       the AWS account ID.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the metadata database in which the partition is
     *       to be created.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A list of <code>PartitionInput</code> structures that define
     *       the partitions to be created.</p>
     */
    PartitionInputList: Array<PartitionInput> | undefined;
    /**
     * <p>The name of the metadata table in which the partition is to be created.</p>
     */
    TableName: string | undefined;
}
export declare namespace BatchCreatePartitionRequest {
    function isa(o: any): o is BatchCreatePartitionRequest;
}
export interface BatchCreatePartitionResponse {
    __type?: "BatchCreatePartitionResponse";
    /**
     * <p>The errors encountered when trying to create the requested partitions.</p>
     */
    Errors?: Array<PartitionError>;
}
export declare namespace BatchCreatePartitionResponse {
    function isa(o: any): o is BatchCreatePartitionResponse;
}
export interface BatchDeleteConnectionRequest {
    __type?: "BatchDeleteConnectionRequest";
    /**
     * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>A list of names of the connections to delete.</p>
     */
    ConnectionNameList: Array<string> | undefined;
}
export declare namespace BatchDeleteConnectionRequest {
    function isa(o: any): o is BatchDeleteConnectionRequest;
}
export interface BatchDeleteConnectionResponse {
    __type?: "BatchDeleteConnectionResponse";
    /**
     * <p>A map of the names of connections that were not successfully
     *        deleted to error details.</p>
     */
    Errors?: {
        [key: string]: ErrorDetail;
    };
    /**
     * <p>A list of names of the connection definitions that were
     *        successfully deleted.</p>
     */
    Succeeded?: Array<string>;
}
export declare namespace BatchDeleteConnectionResponse {
    function isa(o: any): o is BatchDeleteConnectionResponse;
}
export interface BatchDeletePartitionRequest {
    __type?: "BatchDeletePartitionRequest";
    /**
     * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
     *       the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database in which the table in question
     *       resides.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A list of <code>PartitionInput</code> structures that define
     *       the partitions to be deleted.</p>
     */
    PartitionsToDelete: Array<PartitionValueList> | undefined;
    /**
     * <p>The name of the table that contains the partitions to be deleted.</p>
     */
    TableName: string | undefined;
}
export declare namespace BatchDeletePartitionRequest {
    function isa(o: any): o is BatchDeletePartitionRequest;
}
export interface BatchDeletePartitionResponse {
    __type?: "BatchDeletePartitionResponse";
    /**
     * <p>The errors encountered when trying to delete the requested partitions.</p>
     */
    Errors?: Array<PartitionError>;
}
export declare namespace BatchDeletePartitionResponse {
    function isa(o: any): o is BatchDeletePartitionResponse;
}
export interface BatchDeleteTableRequest {
    __type?: "BatchDeleteTableRequest";
    /**
     * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database in which the tables to delete reside. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A list of the table to delete.</p>
     */
    TablesToDelete: Array<string> | undefined;
}
export declare namespace BatchDeleteTableRequest {
    function isa(o: any): o is BatchDeleteTableRequest;
}
export interface BatchDeleteTableResponse {
    __type?: "BatchDeleteTableResponse";
    /**
     * <p>A list of errors encountered in attempting to delete the specified tables.</p>
     */
    Errors?: Array<TableError>;
}
export declare namespace BatchDeleteTableResponse {
    function isa(o: any): o is BatchDeleteTableResponse;
}
export interface BatchDeleteTableVersionRequest {
    __type?: "BatchDeleteTableVersionRequest";
    /**
     * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The database in the catalog in which the table resides. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the table. For Hive compatibility,
     *       this name is entirely lowercase.</p>
     */
    TableName: string | undefined;
    /**
     * <p>A list of the IDs of versions to be deleted. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
     */
    VersionIds: Array<string> | undefined;
}
export declare namespace BatchDeleteTableVersionRequest {
    function isa(o: any): o is BatchDeleteTableVersionRequest;
}
export interface BatchDeleteTableVersionResponse {
    __type?: "BatchDeleteTableVersionResponse";
    /**
     * <p>A list of errors encountered while trying to delete
     *       the specified table versions.</p>
     */
    Errors?: Array<TableVersionError>;
}
export declare namespace BatchDeleteTableVersionResponse {
    function isa(o: any): o is BatchDeleteTableVersionResponse;
}
export interface BatchGetPartitionRequest {
    __type?: "BatchGetPartitionRequest";
    /**
     * <p>The ID of the Data Catalog where the partitions in question reside.
     *       If none is supplied, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database where the partitions reside.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A list of partition values identifying the partitions to retrieve.</p>
     */
    PartitionsToGet: Array<PartitionValueList> | undefined;
    /**
     * <p>The name of the partitions' table.</p>
     */
    TableName: string | undefined;
}
export declare namespace BatchGetPartitionRequest {
    function isa(o: any): o is BatchGetPartitionRequest;
}
export interface BatchGetPartitionResponse {
    __type?: "BatchGetPartitionResponse";
    /**
     * <p>A list of the requested partitions.</p>
     */
    Partitions?: Array<Partition>;
    /**
     * <p>A list of the partition values in the request for which partitions were not
     *       returned.</p>
     */
    UnprocessedKeys?: Array<PartitionValueList>;
}
export declare namespace BatchGetPartitionResponse {
    function isa(o: any): o is BatchGetPartitionResponse;
}
export declare enum CatalogEncryptionMode {
    DISABLED = "DISABLED",
    SSEKMS = "SSE-KMS"
}
/**
 * <p>A structure containing migration status information.</p>
 */
export interface CatalogImportStatus {
    __type?: "CatalogImportStatus";
    /**
     * <p>
     *             <code>True</code> if the migration has completed, or <code>False</code> otherwise.</p>
     */
    ImportCompleted?: boolean;
    /**
     * <p>The time that the migration was started.</p>
     */
    ImportTime?: Date;
    /**
     * <p>The name of the person who initiated the migration.</p>
     */
    ImportedBy?: string;
}
export declare namespace CatalogImportStatus {
    function isa(o: any): o is CatalogImportStatus;
}
/**
 * <p>A column in a <code>Table</code>.</p>
 */
export interface Column {
    __type?: "Column";
    /**
     * <p>A free-form text comment.</p>
     */
    Comment?: string;
    /**
     * <p>The name of the <code>Column</code>.</p>
     */
    Name: string | undefined;
    /**
     * <p>These key-value pairs define properties associated with the column.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
    /**
     * <p>The data type of the <code>Column</code>.</p>
     */
    Type?: string;
}
export declare namespace Column {
    function isa(o: any): o is Column;
}
export declare enum Comparator {
    EQUALS = "EQUALS",
    GREATER_THAN = "GREATER_THAN",
    GREATER_THAN_EQUALS = "GREATER_THAN_EQUALS",
    LESS_THAN = "LESS_THAN",
    LESS_THAN_EQUALS = "LESS_THAN_EQUALS"
}
/**
 * <p>Defines a connection to a data source.</p>
 */
export interface Connection {
    __type?: "Connection";
    /**
     * <p>These key-value pairs define parameters for the connection:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>HOST</code> - The host URI: either the
     *         fully qualified domain name (FQDN) or the IPv4 address of
     *         the database host.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>PORT</code> - The port number, between
     *         1024 and 65535, of the port on which the database host is
     *         listening for database connections.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>USER_NAME</code> -  The name under which
     *         to log in to the database. The value string for <code>USER_NAME</code> is "<code>USERNAME</code>".</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>PASSWORD</code> - A password,
     *         if one is used, for the user name.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ENCRYPTED_PASSWORD</code> - When you enable connection password protection by setting <code>ConnectionPasswordEncryption</code> in the Data Catalog encryption settings, this field stores the encrypted password.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JDBC_DRIVER_JAR_URI</code> - The Amazon Simple Storage Service (Amazon S3) path of the
     *           JAR file that contains the JDBC driver to use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JDBC_DRIVER_CLASS_NAME</code> - The class name of the JDBC driver to use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JDBC_ENGINE</code> - The name of the JDBC engine to use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JDBC_ENGINE_VERSION</code> - The version of the JDBC engine to use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CONFIG_FILES</code> - (Reserved for future use.)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>INSTANCE_ID</code> - The instance ID to use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JDBC_CONNECTION_URL</code> - The URL for the JDBC connection.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether Secure
     *           Sockets Layer (SSL) with hostname matching is enforced for the JDBC connection on the
     *           client. The default is false.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CUSTOM_JDBC_CERT</code> - An Amazon S3 location specifying the customer's root certificate. AWS Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. AWS Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code> - By default, this is <code>false</code>. AWS Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to <code>true</code> to skip AWS Glue’s validation of the customer certificate.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CUSTOM_JDBC_CERT_STRING</code> - A custom JDBC certificate string which is used for domain match or distinguished name match to prevent a man-in-the-middle attack. In Oracle database, this is used as the <code>SSL_SERVER_CERT_DN</code>; in Microsoft SQL Server, this is used as the <code>hostNameInCertificate</code>.</p>
     *             </li>
     *          </ul>
     */
    ConnectionProperties?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the connection. Currently, only JDBC is supported;
     *       SFTP is not supported.</p>
     */
    ConnectionType?: ConnectionType | string;
    /**
     * <p>The time that this connection definition was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The description of the connection.</p>
     */
    Description?: string;
    /**
     * <p>The user, group, or role that last updated this connection definition.</p>
     */
    LastUpdatedBy?: string;
    /**
     * <p>The last time that this connection definition was updated.</p>
     */
    LastUpdatedTime?: Date;
    /**
     * <p>A list of criteria that can be used in selecting this connection.</p>
     */
    MatchCriteria?: Array<string>;
    /**
     * <p>The name of the connection definition.</p>
     */
    Name?: string;
    /**
     * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
     *         <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
     */
    PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
}
export declare namespace Connection {
    function isa(o: any): o is Connection;
}
/**
 * <p>A structure that is used to specify a connection to create or update.</p>
 */
export interface ConnectionInput {
    __type?: "ConnectionInput";
    /**
     * <p>These key-value pairs define parameters for the connection.</p>
     */
    ConnectionProperties: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>The type of the connection. Currently, only JDBC is supported;
     *       SFTP is not supported.</p>
     */
    ConnectionType: ConnectionType | string | undefined;
    /**
     * <p>The description of the connection.</p>
     */
    Description?: string;
    /**
     * <p>A list of criteria that can be used in selecting this connection.</p>
     */
    MatchCriteria?: Array<string>;
    /**
     * <p>The name of the connection.</p>
     */
    Name: string | undefined;
    /**
     * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
     *         <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
     */
    PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
}
export declare namespace ConnectionInput {
    function isa(o: any): o is ConnectionInput;
}
/**
 * <p>The data structure used by the Data Catalog to encrypt the password as part of
 *         <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the
 *         <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog
 *       encryption or only password encryption.</p>
 *
 * 	        <p>When a <code>CreationConnection</code> request arrives containing a password, the Data
 *       Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole
 *       connection object again if catalog encryption is also enabled.</p>
 *
 *          <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access
 *       on the password key according to your security requirements. For example, you might want only
 *       administrators to have decrypt permission on the password key.</p>
 */
export interface ConnectionPasswordEncryption {
    __type?: "ConnectionPasswordEncryption";
    /**
     * <p>An AWS KMS key that is used to encrypt the connection password. </p>
     *
     *          <p>If connection password protection is enabled, the caller of <code>CreateConnection</code>
     *       and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the
     *       specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog. </p>
     *
     * 	        <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
     */
    AwsKmsKeyId?: string;
    /**
     * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
     */
    ReturnConnectionPasswordEncrypted: boolean | undefined;
}
export declare namespace ConnectionPasswordEncryption {
    function isa(o: any): o is ConnectionPasswordEncryption;
}
export declare enum ConnectionPropertyKey {
    CONFIG_FILES = "CONFIG_FILES",
    CUSTOM_JDBC_CERT = "CUSTOM_JDBC_CERT",
    CUSTOM_JDBC_CERT_STRING = "CUSTOM_JDBC_CERT_STRING",
    ENCRYPTED_PASSWORD = "ENCRYPTED_PASSWORD",
    HOST = "HOST",
    INSTANCE_ID = "INSTANCE_ID",
    JDBC_CONNECTION_URL = "JDBC_CONNECTION_URL",
    JDBC_DRIVER_CLASS_NAME = "JDBC_DRIVER_CLASS_NAME",
    JDBC_DRIVER_JAR_URI = "JDBC_DRIVER_JAR_URI",
    JDBC_ENFORCE_SSL = "JDBC_ENFORCE_SSL",
    JDBC_ENGINE = "JDBC_ENGINE",
    JDBC_ENGINE_VERSION = "JDBC_ENGINE_VERSION",
    PASSWORD = "PASSWORD",
    PORT = "PORT",
    SKIP_CUSTOM_JDBC_CERT_VALIDATION = "SKIP_CUSTOM_JDBC_CERT_VALIDATION",
    USER_NAME = "USERNAME"
}
export declare enum ConnectionType {
    JDBC = "JDBC",
    SFTP = "SFTP"
}
export interface CreateConnectionRequest {
    __type?: "CreateConnectionRequest";
    /**
     * <p>The ID of the Data Catalog in which to create the connection. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>A <code>ConnectionInput</code> object defining the connection
     *       to create.</p>
     */
    ConnectionInput: ConnectionInput | undefined;
}
export declare namespace CreateConnectionRequest {
    function isa(o: any): o is CreateConnectionRequest;
}
export interface CreateConnectionResponse {
    __type?: "CreateConnectionResponse";
}
export declare namespace CreateConnectionResponse {
    function isa(o: any): o is CreateConnectionResponse;
}
export interface CreateDatabaseRequest {
    __type?: "CreateDatabaseRequest";
    /**
     * <p>The ID of the Data Catalog in which to create the database. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The metadata for the database.</p>
     */
    DatabaseInput: DatabaseInput | undefined;
}
export declare namespace CreateDatabaseRequest {
    function isa(o: any): o is CreateDatabaseRequest;
}
export interface CreateDatabaseResponse {
    __type?: "CreateDatabaseResponse";
}
export declare namespace CreateDatabaseResponse {
    function isa(o: any): o is CreateDatabaseResponse;
}
export interface CreatePartitionRequest {
    __type?: "CreatePartitionRequest";
    /**
     * <p>The AWS account ID of the catalog in which the partition is to be created.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the metadata database in which the partition is
     *       to be created.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A <code>PartitionInput</code> structure defining the partition
     *       to be created.</p>
     */
    PartitionInput: PartitionInput | undefined;
    /**
     * <p>The name of the metadata table in which the partition is to be created.</p>
     */
    TableName: string | undefined;
}
export declare namespace CreatePartitionRequest {
    function isa(o: any): o is CreatePartitionRequest;
}
export interface CreatePartitionResponse {
    __type?: "CreatePartitionResponse";
}
export declare namespace CreatePartitionResponse {
    function isa(o: any): o is CreatePartitionResponse;
}
export interface CreateTableRequest {
    __type?: "CreateTableRequest";
    /**
     * <p>The ID of the Data Catalog in which to create the <code>Table</code>.
     *       If none is supplied, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The catalog database in which to create the new table. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The <code>TableInput</code> object that defines the metadata table
     *       to create in the catalog.</p>
     */
    TableInput: TableInput | undefined;
}
export declare namespace CreateTableRequest {
    function isa(o: any): o is CreateTableRequest;
}
export interface CreateTableResponse {
    __type?: "CreateTableResponse";
}
export declare namespace CreateTableResponse {
    function isa(o: any): o is CreateTableResponse;
}
export interface CreateUserDefinedFunctionRequest {
    __type?: "CreateUserDefinedFunctionRequest";
    /**
     * <p>The ID of the Data Catalog in which to create the function. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database in which to create the function.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A <code>FunctionInput</code> object that defines the function
     *       to create in the Data Catalog.</p>
     */
    FunctionInput: UserDefinedFunctionInput | undefined;
}
export declare namespace CreateUserDefinedFunctionRequest {
    function isa(o: any): o is CreateUserDefinedFunctionRequest;
}
export interface CreateUserDefinedFunctionResponse {
    __type?: "CreateUserDefinedFunctionResponse";
}
export declare namespace CreateUserDefinedFunctionResponse {
    function isa(o: any): o is CreateUserDefinedFunctionResponse;
}
/**
 * <p>Contains configuration information for maintaining Data Catalog security.</p>
 */
export interface DataCatalogEncryptionSettings {
    __type?: "DataCatalogEncryptionSettings";
    /**
     * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided
     *       key to encrypt the password as part of <code>CreateConnection</code> or
     *         <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in
     *       the connection properties. You can enable catalog encryption or only password
     *       encryption.</p>
     */
    ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
    /**
     * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
     */
    EncryptionAtRest?: EncryptionAtRest;
}
export declare namespace DataCatalogEncryptionSettings {
    function isa(o: any): o is DataCatalogEncryptionSettings;
}
/**
 * <p>The AWS Lake Formation principal.</p>
 */
export interface DataLakePrincipal {
    __type?: "DataLakePrincipal";
    /**
     * <p>An identifier for the AWS Lake Formation principal.</p>
     */
    DataLakePrincipalIdentifier?: string;
}
export declare namespace DataLakePrincipal {
    function isa(o: any): o is DataLakePrincipal;
}
/**
 * <p>The <code>Database</code> object represents a logical grouping of tables that might reside
 *       in a Hive metastore or an RDBMS.</p>
 */
export interface Database {
    __type?: "Database";
    /**
     * <p>Creates a set of default permissions on the table for principals. </p>
     */
    CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
    /**
     * <p>The time at which the metadata database was created in the catalog.</p>
     */
    CreateTime?: Date;
    /**
     * <p>A description of the database.</p>
     */
    Description?: string;
    /**
     * <p>The location of the database (for example, an HDFS path).</p>
     */
    LocationUri?: string;
    /**
     * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
     *       stored.</p>
     */
    Name: string | undefined;
    /**
     * <p>These key-value pairs define parameters and properties
     *       of the database.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
}
export declare namespace Database {
    function isa(o: any): o is Database;
}
/**
 * <p>The structure used to create or update a database.</p>
 */
export interface DatabaseInput {
    __type?: "DatabaseInput";
    /**
     * <p>Creates a set of default permissions on the table for principals. </p>
     */
    CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
    /**
     * <p>A description of the database.</p>
     */
    Description?: string;
    /**
     * <p>The location of the database (for example, an HDFS path). </p>
     */
    LocationUri?: string;
    /**
     * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
     *       stored.</p>
     */
    Name: string | undefined;
    /**
     * <p>These key-value pairs define parameters and properties
     *       of the database.</p>
     *          <p>These key-value pairs define parameters and properties of the database.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
}
export declare namespace DatabaseInput {
    function isa(o: any): o is DatabaseInput;
}
export interface DeleteConnectionRequest {
    __type?: "DeleteConnectionRequest";
    /**
     * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the connection to delete.</p>
     */
    ConnectionName: string | undefined;
}
export declare namespace DeleteConnectionRequest {
    function isa(o: any): o is DeleteConnectionRequest;
}
export interface DeleteConnectionResponse {
    __type?: "DeleteConnectionResponse";
}
export declare namespace DeleteConnectionResponse {
    function isa(o: any): o is DeleteConnectionResponse;
}
export interface DeleteDatabaseRequest {
    __type?: "DeleteDatabaseRequest";
    /**
     * <p>The ID of the Data Catalog in which the database resides. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the database to delete. For Hive compatibility, this must be all
     *       lowercase.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteDatabaseRequest {
    function isa(o: any): o is DeleteDatabaseRequest;
}
export interface DeleteDatabaseResponse {
    __type?: "DeleteDatabaseResponse";
}
export declare namespace DeleteDatabaseResponse {
    function isa(o: any): o is DeleteDatabaseResponse;
}
export interface DeletePartitionRequest {
    __type?: "DeletePartitionRequest";
    /**
     * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
     *       the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database in which the table in question
     *       resides.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The values that define the partition.</p>
     */
    PartitionValues: Array<string> | undefined;
    /**
     * <p>The name of the table that contains the partition to be deleted.</p>
     */
    TableName: string | undefined;
}
export declare namespace DeletePartitionRequest {
    function isa(o: any): o is DeletePartitionRequest;
}
export interface DeletePartitionResponse {
    __type?: "DeletePartitionResponse";
}
export declare namespace DeletePartitionResponse {
    function isa(o: any): o is DeletePartitionResponse;
}
export interface DeleteResourcePolicyRequest {
    __type?: "DeleteResourcePolicyRequest";
    /**
     * <p>The hash value returned when this policy was set.</p>
     */
    PolicyHashCondition?: string;
}
export declare namespace DeleteResourcePolicyRequest {
    function isa(o: any): o is DeleteResourcePolicyRequest;
}
export interface DeleteResourcePolicyResponse {
    __type?: "DeleteResourcePolicyResponse";
}
export declare namespace DeleteResourcePolicyResponse {
    function isa(o: any): o is DeleteResourcePolicyResponse;
}
export interface DeleteTableRequest {
    __type?: "DeleteTableRequest";
    /**
     * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database in which the table resides. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the table to be deleted. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteTableRequest {
    function isa(o: any): o is DeleteTableRequest;
}
export interface DeleteTableResponse {
    __type?: "DeleteTableResponse";
}
export declare namespace DeleteTableResponse {
    function isa(o: any): o is DeleteTableResponse;
}
export interface DeleteTableVersionRequest {
    __type?: "DeleteTableVersionRequest";
    /**
     * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The database in the catalog in which the table resides. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the table. For Hive compatibility,
     *       this name is entirely lowercase.</p>
     */
    TableName: string | undefined;
    /**
     * <p>The ID of the table version to be deleted. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
     */
    VersionId: string | undefined;
}
export declare namespace DeleteTableVersionRequest {
    function isa(o: any): o is DeleteTableVersionRequest;
}
export interface DeleteTableVersionResponse {
    __type?: "DeleteTableVersionResponse";
}
export declare namespace DeleteTableVersionResponse {
    function isa(o: any): o is DeleteTableVersionResponse;
}
export interface DeleteUserDefinedFunctionRequest {
    __type?: "DeleteUserDefinedFunctionRequest";
    /**
     * <p>The ID of the Data Catalog where the function to be deleted is
     *       located. If none is supplied, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database where the function is located.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the function definition to be deleted.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace DeleteUserDefinedFunctionRequest {
    function isa(o: any): o is DeleteUserDefinedFunctionRequest;
}
export interface DeleteUserDefinedFunctionResponse {
    __type?: "DeleteUserDefinedFunctionResponse";
}
export declare namespace DeleteUserDefinedFunctionResponse {
    function isa(o: any): o is DeleteUserDefinedFunctionResponse;
}
/**
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 */
export interface EncryptionAtRest {
    __type?: "EncryptionAtRest";
    /**
     * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
     */
    CatalogEncryptionMode: CatalogEncryptionMode | string | undefined;
    /**
     * <p>The ID of the AWS KMS key to use for encryption at rest.</p>
     */
    SseAwsKmsKeyId?: string;
}
export declare namespace EncryptionAtRest {
    function isa(o: any): o is EncryptionAtRest;
}
export interface GetCatalogImportStatusRequest {
    __type?: "GetCatalogImportStatusRequest";
    /**
     * <p>The ID of the catalog to migrate. Currently, this should be the AWS account ID.</p>
     */
    CatalogId?: string;
}
export declare namespace GetCatalogImportStatusRequest {
    function isa(o: any): o is GetCatalogImportStatusRequest;
}
export interface GetCatalogImportStatusResponse {
    __type?: "GetCatalogImportStatusResponse";
    /**
     * <p>The status of the specified catalog migration.</p>
     */
    ImportStatus?: CatalogImportStatus;
}
export declare namespace GetCatalogImportStatusResponse {
    function isa(o: any): o is GetCatalogImportStatusResponse;
}
export interface GetConnectionRequest {
    __type?: "GetConnectionRequest";
    /**
     * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>Allows you to retrieve the connection metadata without returning the password. For
     *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
     *       the password. Set this parameter when the caller might not have permission to use the AWS KMS
     *       key to decrypt the password, but it does have permission to access the rest of the connection
     *       properties.</p>
     */
    HidePassword?: boolean;
    /**
     * <p>The name of the connection definition to retrieve.</p>
     */
    Name: string | undefined;
}
export declare namespace GetConnectionRequest {
    function isa(o: any): o is GetConnectionRequest;
}
export interface GetConnectionResponse {
    __type?: "GetConnectionResponse";
    /**
     * <p>The requested connection definition.</p>
     */
    Connection?: Connection;
}
export declare namespace GetConnectionResponse {
    function isa(o: any): o is GetConnectionResponse;
}
/**
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code>
 *       API operation.</p>
 */
export interface GetConnectionsFilter {
    __type?: "GetConnectionsFilter";
    /**
     * <p>The type of connections to return. Currently, only JDBC is supported;
     *       SFTP is not supported.</p>
     */
    ConnectionType?: ConnectionType | string;
    /**
     * <p>A criteria string that must match the criteria recorded in the
     *        connection definition for that connection definition to be returned.</p>
     */
    MatchCriteria?: Array<string>;
}
export declare namespace GetConnectionsFilter {
    function isa(o: any): o is GetConnectionsFilter;
}
export interface GetConnectionsRequest {
    __type?: "GetConnectionsRequest";
    /**
     * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>A filter that controls which connections are returned.</p>
     */
    Filter?: GetConnectionsFilter;
    /**
     * <p>Allows you to retrieve the connection metadata without returning the password. For
     *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
     *       the password. Set this parameter when the caller might not have permission to use the AWS KMS
     *       key to decrypt the password, but it does have permission to access the rest of the connection
     *       properties.</p>
     */
    HidePassword?: boolean;
    /**
     * <p>The maximum number of connections to return in one response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetConnectionsRequest {
    function isa(o: any): o is GetConnectionsRequest;
}
export interface GetConnectionsResponse {
    __type?: "GetConnectionsResponse";
    /**
     * <p>A list of requested connection definitions.</p>
     */
    ConnectionList?: Array<Connection>;
    /**
     * <p>A continuation token, if the list of connections returned does not
     *       include the last of the filtered connections.</p>
     */
    NextToken?: string;
}
export declare namespace GetConnectionsResponse {
    function isa(o: any): o is GetConnectionsResponse;
}
export interface GetDataCatalogEncryptionSettingsRequest {
    __type?: "GetDataCatalogEncryptionSettingsRequest";
    /**
     * <p>The ID of the Data Catalog to retrieve the security configuration for. If none is
     *       provided, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
}
export declare namespace GetDataCatalogEncryptionSettingsRequest {
    function isa(o: any): o is GetDataCatalogEncryptionSettingsRequest;
}
export interface GetDataCatalogEncryptionSettingsResponse {
    __type?: "GetDataCatalogEncryptionSettingsResponse";
    /**
     * <p>The requested security configuration.</p>
     */
    DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}
export declare namespace GetDataCatalogEncryptionSettingsResponse {
    function isa(o: any): o is GetDataCatalogEncryptionSettingsResponse;
}
export interface GetDatabaseRequest {
    __type?: "GetDatabaseRequest";
    /**
     * <p>The ID of the Data Catalog in which the database resides. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the database to retrieve. For Hive compatibility, this
     *       should be all lowercase.</p>
     */
    Name: string | undefined;
}
export declare namespace GetDatabaseRequest {
    function isa(o: any): o is GetDatabaseRequest;
}
export interface GetDatabaseResponse {
    __type?: "GetDatabaseResponse";
    /**
     * <p>The definition of the specified database in the Data Catalog.</p>
     */
    Database?: Database;
}
export declare namespace GetDatabaseResponse {
    function isa(o: any): o is GetDatabaseResponse;
}
export interface GetDatabasesRequest {
    __type?: "GetDatabasesRequest";
    /**
     * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
     *       provided, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The maximum number of databases to return in one response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetDatabasesRequest {
    function isa(o: any): o is GetDatabasesRequest;
}
export interface GetDatabasesResponse {
    __type?: "GetDatabasesResponse";
    /**
     * <p>A list of <code>Database</code> objects from the specified catalog.</p>
     */
    DatabaseList: Array<Database> | undefined;
    /**
     * <p>A continuation token for paginating the returned list of tokens,
     *       returned if the current segment of the list is not the last.</p>
     */
    NextToken?: string;
}
export declare namespace GetDatabasesResponse {
    function isa(o: any): o is GetDatabasesResponse;
}
export interface GetPartitionRequest {
    __type?: "GetPartitionRequest";
    /**
     * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
     *       the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database where the partition resides.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The values that define the partition.</p>
     */
    PartitionValues: Array<string> | undefined;
    /**
     * <p>The name of the partition's table.</p>
     */
    TableName: string | undefined;
}
export declare namespace GetPartitionRequest {
    function isa(o: any): o is GetPartitionRequest;
}
export interface GetPartitionResponse {
    __type?: "GetPartitionResponse";
    /**
     * <p>The requested information, in the form of a <code>Partition</code>
     *       object.</p>
     */
    Partition?: Partition;
}
export declare namespace GetPartitionResponse {
    function isa(o: any): o is GetPartitionResponse;
}
export interface GetPartitionsRequest {
    __type?: "GetPartitionsRequest";
    /**
     * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
     *       the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database where the partitions reside.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>An expression that filters the partitions to be returned.</p>
     *          <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The
     *       SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p>
     *          <p>
     *             <i>Operators</i>: The following are the operators that you can use in the
     *         <code>Expression</code> API call:</p>
     *          <dl>
     *             <dt>=</dt>
     *             <dd>
     *                <p>Checks whether the values of the two operands are equal; if yes, then the condition becomes
     *             true.</p>
     *                <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p>
     *                <p>(a = b) is not true.</p>
     *             </dd>
     *             <dt>< ></dt>
     *             <dd>
     *                <p>Checks whether the values of two operands are equal; if the values are not equal,
     *             then the condition becomes true.</p>
     *                <p>Example: (a < > b) is true.</p>
     *             </dd>
     *             <dt>></dt>
     *             <dd>
     *                <p>Checks whether the value of the left operand is greater than the value of the right
     *             operand; if yes, then the condition becomes true.</p>
     *                <p>Example: (a > b) is not true.</p>
     *             </dd>
     *             <dt><</dt>
     *             <dd>
     *                <p>Checks whether the value of the left operand is less than the value of the right
     *             operand; if yes, then the condition becomes true.</p>
     *                <p>Example: (a < b) is true.</p>
     *             </dd>
     *             <dt>>=</dt>
     *             <dd>
     *                <p>Checks whether the value of the left operand is greater than or equal to the value
     *             of the right operand; if yes, then the condition becomes true.</p>
     *                <p>Example: (a >= b) is not true.</p>
     *             </dd>
     *             <dt><=</dt>
     *             <dd>
     *                <p>Checks whether the value of the left operand is less than or equal to the value of
     *             the right operand; if yes, then the condition becomes true.</p>
     *                <p>Example: (a <= b) is true.</p>
     *             </dd>
     *             <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt>
     *             <dd>
     *                <p>Logical operators.</p>
     *             </dd>
     *          </dl>
     *          <p>
     *             <i>Supported Partition Key Types</i>: The following are the supported
     *       partition keys.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>string</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>date</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>timestamp</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>int</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>bigint</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>long</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tinyint</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>smallint</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>decimal</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>If an invalid type is encountered, an exception is thrown. </p>
     *          <p>The following list shows the valid operators on each type. When you define a crawler, the
     *         <code>partitionKey</code> type is created as a <code>STRING</code>, to be compatible with the catalog
     *       partitions. </p>
     *
     *          <p>
     *             <i>Sample API Call</i>: </p>
     */
    Expression?: string;
    /**
     * <p>The maximum number of partitions to return in a single response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is not the first call to retrieve
     *       these partitions.</p>
     */
    NextToken?: string;
    /**
     * <p>The segment of the table's partitions to scan in this request.</p>
     */
    Segment?: Segment;
    /**
     * <p>The name of the partitions' table.</p>
     */
    TableName: string | undefined;
}
export declare namespace GetPartitionsRequest {
    function isa(o: any): o is GetPartitionsRequest;
}
export interface GetPartitionsResponse {
    __type?: "GetPartitionsResponse";
    /**
     * <p>A continuation token, if the returned list of partitions does not include the last
     *       one.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of requested partitions.</p>
     */
    Partitions?: Array<Partition>;
}
export declare namespace GetPartitionsResponse {
    function isa(o: any): o is GetPartitionsResponse;
}
export interface GetResourcePolicyRequest {
    __type?: "GetResourcePolicyRequest";
}
export declare namespace GetResourcePolicyRequest {
    function isa(o: any): o is GetResourcePolicyRequest;
}
export interface GetResourcePolicyResponse {
    __type?: "GetResourcePolicyResponse";
    /**
     * <p>The date and time at which the policy was created.</p>
     */
    CreateTime?: Date;
    /**
     * <p>Contains the hash value associated with this policy.</p>
     */
    PolicyHash?: string;
    /**
     * <p>Contains the requested policy document, in JSON format.</p>
     */
    PolicyInJson?: string;
    /**
     * <p>The date and time at which the policy was last updated.</p>
     */
    UpdateTime?: Date;
}
export declare namespace GetResourcePolicyResponse {
    function isa(o: any): o is GetResourcePolicyResponse;
}
export interface GetTableRequest {
    __type?: "GetTableRequest";
    /**
     * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the database in the catalog in which the table resides.
     *       For Hive compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the table for which to retrieve the definition. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    Name: string | undefined;
}
export declare namespace GetTableRequest {
    function isa(o: any): o is GetTableRequest;
}
export interface GetTableResponse {
    __type?: "GetTableResponse";
    /**
     * <p>The <code>Table</code> object that defines the specified table.</p>
     */
    Table?: Table;
}
export declare namespace GetTableResponse {
    function isa(o: any): o is GetTableResponse;
}
export interface GetTableVersionRequest {
    __type?: "GetTableVersionRequest";
    /**
     * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The database in the catalog in which the table resides. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the table. For Hive compatibility,
     *       this name is entirely lowercase.</p>
     */
    TableName: string | undefined;
    /**
     * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
     */
    VersionId?: string;
}
export declare namespace GetTableVersionRequest {
    function isa(o: any): o is GetTableVersionRequest;
}
export interface GetTableVersionResponse {
    __type?: "GetTableVersionResponse";
    /**
     * <p>The requested table version.</p>
     */
    TableVersion?: TableVersion;
}
export declare namespace GetTableVersionResponse {
    function isa(o: any): o is GetTableVersionResponse;
}
export interface GetTableVersionsRequest {
    __type?: "GetTableVersionsRequest";
    /**
     * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The database in the catalog in which the table resides. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The maximum number of table versions to return in one response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is not the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the table. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    TableName: string | undefined;
}
export declare namespace GetTableVersionsRequest {
    function isa(o: any): o is GetTableVersionsRequest;
}
export interface GetTableVersionsResponse {
    __type?: "GetTableVersionsResponse";
    /**
     * <p>A continuation token, if the list of available versions does
     *       not include the last one.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of strings identifying available versions of the
     *       specified table.</p>
     */
    TableVersions?: Array<TableVersion>;
}
export declare namespace GetTableVersionsResponse {
    function isa(o: any): o is GetTableVersionsResponse;
}
export interface GetTablesRequest {
    __type?: "GetTablesRequest";
    /**
     * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The database in the catalog whose tables to list. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A regular expression pattern. If present, only those tables
     *       whose names match the pattern are returned.</p>
     */
    Expression?: string;
    /**
     * <p>The maximum number of tables to return in a single response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, included if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetTablesRequest {
    function isa(o: any): o is GetTablesRequest;
}
export interface GetTablesResponse {
    __type?: "GetTablesResponse";
    /**
     * <p>A continuation token, present if the current list segment is
     *       not the last.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of the requested <code>Table</code> objects.</p>
     */
    TableList?: Array<Table>;
}
export declare namespace GetTablesResponse {
    function isa(o: any): o is GetTablesResponse;
}
export interface GetUserDefinedFunctionRequest {
    __type?: "GetUserDefinedFunctionRequest";
    /**
     * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
     *       provided, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database where the function is located.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the function.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace GetUserDefinedFunctionRequest {
    function isa(o: any): o is GetUserDefinedFunctionRequest;
}
export interface GetUserDefinedFunctionResponse {
    __type?: "GetUserDefinedFunctionResponse";
    /**
     * <p>The requested function definition.</p>
     */
    UserDefinedFunction?: UserDefinedFunction;
}
export declare namespace GetUserDefinedFunctionResponse {
    function isa(o: any): o is GetUserDefinedFunctionResponse;
}
export interface GetUserDefinedFunctionsRequest {
    __type?: "GetUserDefinedFunctionsRequest";
    /**
     * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
     *       provided, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database where the functions are located.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The maximum number of functions to return in one response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
    /**
     * <p>An optional function-name pattern string that filters the function
     *       definitions returned.</p>
     */
    Pattern: string | undefined;
}
export declare namespace GetUserDefinedFunctionsRequest {
    function isa(o: any): o is GetUserDefinedFunctionsRequest;
}
export interface GetUserDefinedFunctionsResponse {
    __type?: "GetUserDefinedFunctionsResponse";
    /**
     * <p>A continuation token, if the list of functions returned does
     *       not include the last requested function.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of requested function definitions.</p>
     */
    UserDefinedFunctions?: Array<UserDefinedFunction>;
}
export declare namespace GetUserDefinedFunctionsResponse {
    function isa(o: any): o is GetUserDefinedFunctionsResponse;
}
export interface ImportCatalogToGlueRequest {
    __type?: "ImportCatalogToGlueRequest";
    /**
     * <p>The ID of the catalog to import. Currently, this should be the AWS account ID.</p>
     */
    CatalogId?: string;
}
export declare namespace ImportCatalogToGlueRequest {
    function isa(o: any): o is ImportCatalogToGlueRequest;
}
export interface ImportCatalogToGlueResponse {
    __type?: "ImportCatalogToGlueResponse";
}
export declare namespace ImportCatalogToGlueResponse {
    function isa(o: any): o is ImportCatalogToGlueResponse;
}
/**
 * <p>Specifies the sort order of a sorted column.</p>
 */
export interface Order {
    __type?: "Order";
    /**
     * <p>The name of the column.</p>
     */
    Column: string | undefined;
    /**
     * <p>Indicates that the column is sorted in ascending order
     *       (<code>== 1</code>), or in descending order (<code>==0</code>).</p>
     */
    SortOrder: number | undefined;
}
export declare namespace Order {
    function isa(o: any): o is Order;
}
/**
 * <p>Represents a slice of table data.</p>
 */
export interface Partition {
    __type?: "Partition";
    /**
     * <p>The time at which the partition was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The name of the catalog database in which to create the partition.</p>
     */
    DatabaseName?: string;
    /**
     * <p>The last time at which the partition was accessed.</p>
     */
    LastAccessTime?: Date;
    /**
     * <p>The last time at which column statistics were computed for this
     *       partition.</p>
     */
    LastAnalyzedTime?: Date;
    /**
     * <p>These key-value pairs define partition parameters.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
    /**
     * <p>Provides information about the physical
     *       location where the partition is stored.</p>
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * <p>The name of the database table in which to create the partition.</p>
     */
    TableName?: string;
    /**
     * <p>The values of the partition.</p>
     */
    Values?: Array<string>;
}
export declare namespace Partition {
    function isa(o: any): o is Partition;
}
/**
 * <p>Contains information about a partition error.</p>
 */
export interface PartitionError {
    __type?: "PartitionError";
    /**
     * <p>The details about the partition error.</p>
     */
    ErrorDetail?: ErrorDetail;
    /**
     * <p>The values that define the partition.</p>
     */
    PartitionValues?: Array<string>;
}
export declare namespace PartitionError {
    function isa(o: any): o is PartitionError;
}
/**
 * <p>The structure used to create and update a partition.</p>
 */
export interface PartitionInput {
    __type?: "PartitionInput";
    /**
     * <p>The last time at which the partition was accessed.</p>
     */
    LastAccessTime?: Date;
    /**
     * <p>The last time at which column statistics were computed for this partition.</p>
     */
    LastAnalyzedTime?: Date;
    /**
     * <p>These key-value pairs define partition parameters.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
    /**
     * <p>Provides information about the physical
     *       location where the partition is stored.</p>
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
     *
     * 	        <p>The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.</p>
     */
    Values?: Array<string>;
}
export declare namespace PartitionInput {
    function isa(o: any): o is PartitionInput;
}
/**
 * <p>Contains a list of values defining partitions.</p>
 */
export interface PartitionValueList {
    __type?: "PartitionValueList";
    /**
     * <p>The list of values.</p>
     */
    Values: Array<string> | undefined;
}
export declare namespace PartitionValueList {
    function isa(o: any): o is PartitionValueList;
}
export declare enum Permission {
    ALL = "ALL",
    ALTER = "ALTER",
    CREATE_DATABASE = "CREATE_DATABASE",
    CREATE_TABLE = "CREATE_TABLE",
    DATA_LOCATION_ACCESS = "DATA_LOCATION_ACCESS",
    DELETE = "DELETE",
    DROP = "DROP",
    INSERT = "INSERT",
    SELECT = "SELECT"
}
/**
 * <p>Specifies the physical requirements for a connection.</p>
 */
export interface PhysicalConnectionRequirements {
    __type?: "PhysicalConnectionRequirements";
    /**
     * <p>The connection's Availability Zone. This field is redundant because the specified subnet
     *       implies the Availability Zone to be used. Currently the field must be populated, but it will
     *       be deprecated in the future.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The security group ID list used by the connection.</p>
     */
    SecurityGroupIdList?: Array<string>;
    /**
     * <p>The subnet ID used by the connection.</p>
     */
    SubnetId?: string;
}
export declare namespace PhysicalConnectionRequirements {
    function isa(o: any): o is PhysicalConnectionRequirements;
}
/**
 * <p>Permissions granted to a principal.</p>
 */
export interface PrincipalPermissions {
    __type?: "PrincipalPermissions";
    /**
     * <p>The permissions that are granted to the principal.</p>
     */
    Permissions?: Array<Permission | string>;
    /**
     * <p>The principal who is granted permissions.</p>
     */
    Principal?: DataLakePrincipal;
}
export declare namespace PrincipalPermissions {
    function isa(o: any): o is PrincipalPermissions;
}
export declare enum PrincipalType {
    GROUP = "GROUP",
    ROLE = "ROLE",
    USER = "USER"
}
/**
 * <p>Defines a property predicate.</p>
 */
export interface PropertyPredicate {
    __type?: "PropertyPredicate";
    /**
     * <p>The comparator used to compare this property to others.</p>
     */
    Comparator?: Comparator | string;
    /**
     * <p>The key of the property.</p>
     */
    Key?: string;
    /**
     * <p>The value of the property.</p>
     */
    Value?: string;
}
export declare namespace PropertyPredicate {
    function isa(o: any): o is PropertyPredicate;
}
export interface PutDataCatalogEncryptionSettingsRequest {
    __type?: "PutDataCatalogEncryptionSettingsRequest";
    /**
     * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
     *       AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The security configuration to set.</p>
     */
    DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}
export declare namespace PutDataCatalogEncryptionSettingsRequest {
    function isa(o: any): o is PutDataCatalogEncryptionSettingsRequest;
}
export interface PutDataCatalogEncryptionSettingsResponse {
    __type?: "PutDataCatalogEncryptionSettingsResponse";
}
export declare namespace PutDataCatalogEncryptionSettingsResponse {
    function isa(o: any): o is PutDataCatalogEncryptionSettingsResponse;
}
export interface PutResourcePolicyRequest {
    __type?: "PutResourcePolicyRequest";
    /**
     * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
     *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
     *       null value is used, the call will not depend on the existence of a policy.</p>
     */
    PolicyExistsCondition?: ExistCondition | string;
    /**
     * <p>The hash value returned when the previous policy was set using
     *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
     *       policy. Do not use this parameter if no previous policy has been set.</p>
     */
    PolicyHashCondition?: string;
    /**
     * <p>Contains the policy document to set, in JSON format.</p>
     */
    PolicyInJson: string | undefined;
}
export declare namespace PutResourcePolicyRequest {
    function isa(o: any): o is PutResourcePolicyRequest;
}
export interface PutResourcePolicyResponse {
    __type?: "PutResourcePolicyResponse";
    /**
     * <p>A hash of the policy that has just been set. This must
     *       be included in a subsequent call that overwrites or updates
     *       this policy.</p>
     */
    PolicyHash?: string;
}
export declare namespace PutResourcePolicyResponse {
    function isa(o: any): o is PutResourcePolicyResponse;
}
export declare enum ResourceType {
    ARCHIVE = "ARCHIVE",
    FILE = "FILE",
    JAR = "JAR"
}
/**
 * <p>The URIs for function resources.</p>
 */
export interface ResourceUri {
    __type?: "ResourceUri";
    /**
     * <p>The type of the resource.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>The URI for accessing the resource.</p>
     */
    Uri?: string;
}
export declare namespace ResourceUri {
    function isa(o: any): o is ResourceUri;
}
export interface SearchTablesRequest {
    __type?: "SearchTablesRequest";
    /**
     * <p>A unique identifier, consisting of <code>
     *                <i>account_id</i>/datalake</code>.</p>
     */
    CatalogId?: string;
    /**
     * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
     */
    Filters?: Array<PropertyPredicate>;
    /**
     * <p>The maximum number of tables to return in a single response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, included if this is a continuation call.</p>
     */
    NextToken?: string;
    /**
     * <p>A string used for a text search.</p>
     * 	        <p>Specifying a value in quotes filters based on an exact match to the value.</p>
     */
    SearchText?: string;
    /**
     * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
     */
    SortCriteria?: Array<SortCriterion>;
}
export declare namespace SearchTablesRequest {
    function isa(o: any): o is SearchTablesRequest;
}
export interface SearchTablesResponse {
    __type?: "SearchTablesResponse";
    /**
     * <p>A continuation token, present if the current list segment is not the last.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of the requested <code>Table</code> objects. The <code>SearchTables</code> response returns only the tables that you have access to.</p>
     */
    TableList?: Array<Table>;
}
export declare namespace SearchTablesResponse {
    function isa(o: any): o is SearchTablesResponse;
}
/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be executed in parallel.</p>
 */
export interface Segment {
    __type?: "Segment";
    /**
     * <p>The zero-based index number of the segment. For example, if the total number of segments
     *       is 4, <code>SegmentNumber</code> values range from 0 through 3.</p>
     */
    SegmentNumber: number | undefined;
    /**
     * <p>The total number of segments.</p>
     */
    TotalSegments: number | undefined;
}
export declare namespace Segment {
    function isa(o: any): o is Segment;
}
/**
 * <p>Information about a serialization/deserialization program (SerDe) that serves as an
 *       extractor and loader.</p>
 */
export interface SerDeInfo {
    __type?: "SerDeInfo";
    /**
     * <p>Name of the SerDe.</p>
     */
    Name?: string;
    /**
     * <p>These key-value pairs define initialization parameters for the SerDe.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
    /**
     * <p>Usually the class that implements the SerDe. An example is
     *         <code>org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe</code>.</p>
     */
    SerializationLibrary?: string;
}
export declare namespace SerDeInfo {
    function isa(o: any): o is SerDeInfo;
}
/**
 * <p>Specifies skewed values in a table. Skewed values are those that occur with very high
 *       frequency.</p>
 */
export interface SkewedInfo {
    __type?: "SkewedInfo";
    /**
     * <p>A list of names of columns that contain skewed values.</p>
     */
    SkewedColumnNames?: Array<string>;
    /**
     * <p>A mapping of skewed values to the columns that contain them.</p>
     */
    SkewedColumnValueLocationMaps?: {
        [key: string]: string;
    };
    /**
     * <p>A list of values that appear so frequently as to be considered
     *       skewed.</p>
     */
    SkewedColumnValues?: Array<string>;
}
export declare namespace SkewedInfo {
    function isa(o: any): o is SkewedInfo;
}
export declare enum Sort {
    ASCENDING = "ASC",
    DESCENDING = "DESC"
}
/**
 * <p>Specifies a field to sort by and a sort order.</p>
 */
export interface SortCriterion {
    __type?: "SortCriterion";
    /**
     * <p>The name of the field on which to sort.</p>
     */
    FieldName?: string;
    /**
     * <p>An ascending or descending sort.</p>
     */
    Sort?: Sort | string;
}
export declare namespace SortCriterion {
    function isa(o: any): o is SortCriterion;
}
/**
 * <p>Describes the physical storage of table data.</p>
 */
export interface StorageDescriptor {
    __type?: "StorageDescriptor";
    /**
     * <p>A list of reducer grouping columns, clustering columns, and
     *       bucketing columns in the table.</p>
     */
    BucketColumns?: Array<string>;
    /**
     * <p>A list of the <code>Columns</code> in the table.</p>
     */
    Columns?: Array<Column>;
    /**
     * <p>
     *             <code>True</code> if the data in the table is compressed, or <code>False</code> if
     *       not.</p>
     */
    Compressed?: boolean;
    /**
     * <p>The input format: <code>SequenceFileInputFormat</code> (binary),
     *       or <code>TextInputFormat</code>, or a custom format.</p>
     */
    InputFormat?: string;
    /**
     * <p>The physical location of the table. By default, this takes the form of the warehouse
     *       location, followed by the database location in the warehouse, followed by the table
     *       name.</p>
     */
    Location?: string;
    /**
     * <p>Must be specified if the table contains any dimension columns.</p>
     */
    NumberOfBuckets?: number;
    /**
     * <p>The output format: <code>SequenceFileOutputFormat</code> (binary),
     *       or <code>IgnoreKeyTextOutputFormat</code>, or a custom format.</p>
     */
    OutputFormat?: string;
    /**
     * <p>The user-supplied properties in key-value form.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
    /**
     * <p>The serialization/deserialization (SerDe) information.</p>
     */
    SerdeInfo?: SerDeInfo;
    /**
     * <p>The information about values that appear frequently in a column (skewed values).</p>
     */
    SkewedInfo?: SkewedInfo;
    /**
     * <p>A list specifying the sort order of each bucket in the table.</p>
     */
    SortColumns?: Array<Order>;
    /**
     * <p>
     *             <code>True</code> if the table data is stored in subdirectories, or <code>False</code> if
     *       not.</p>
     */
    StoredAsSubDirectories?: boolean;
}
export declare namespace StorageDescriptor {
    function isa(o: any): o is StorageDescriptor;
}
/**
 * <p>Represents a collection of related data organized in columns and rows.</p>
 */
export interface Table {
    __type?: "Table";
    /**
     * <p>The time when the table definition was created in the Data Catalog.</p>
     */
    CreateTime?: Date;
    /**
     * <p>The person or entity who created the table.</p>
     */
    CreatedBy?: string;
    /**
     * <p>The name of the database where the table metadata resides.
     *       For Hive compatibility, this must be all lowercase.</p>
     */
    DatabaseName?: string;
    /**
     * <p>A description of the table.</p>
     */
    Description?: string;
    /**
     * <p>Indicates whether the table has been registered with AWS Lake Formation.</p>
     */
    IsRegisteredWithLakeFormation?: boolean;
    /**
     * <p>The last time that the table was accessed. This is usually taken from HDFS, and might not
     *       be reliable.</p>
     */
    LastAccessTime?: Date;
    /**
     * <p>The last time that column statistics were computed for this table.</p>
     */
    LastAnalyzedTime?: Date;
    /**
     * <p>The table name. For Hive compatibility, this must be entirely
     *       lowercase.</p>
     */
    Name: string | undefined;
    /**
     * <p>The owner of the table.</p>
     */
    Owner?: string;
    /**
     * <p>These key-value pairs define properties associated with the table.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
    /**
     * <p>A list of columns by which the table is partitioned. Only primitive
     *       types are supported as partition keys.</p>
     * 	        <p>When you create a table used by Amazon Athena, and you do not specify any
     *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
     *       an empty list. For example:</p>
     *          <p>
     *             <code>"PartitionKeys": []</code>
     *          </p>
     */
    PartitionKeys?: Array<Column>;
    /**
     * <p>The retention time for this table.</p>
     */
    Retention?: number;
    /**
     * <p>A storage descriptor containing information about the physical storage
     *       of this table.</p>
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
     */
    TableType?: string;
    /**
     * <p>The last time that the table was updated.</p>
     */
    UpdateTime?: Date;
    /**
     * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
     */
    ViewExpandedText?: string;
    /**
     * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
     */
    ViewOriginalText?: string;
}
export declare namespace Table {
    function isa(o: any): o is Table;
}
/**
 * <p>An error record for table operations.</p>
 */
export interface TableError {
    __type?: "TableError";
    /**
     * <p>The details about the error.</p>
     */
    ErrorDetail?: ErrorDetail;
    /**
     * <p>The name of the table. For Hive compatibility, this must be entirely lowercase.</p>
     */
    TableName?: string;
}
export declare namespace TableError {
    function isa(o: any): o is TableError;
}
/**
 * <p>A structure used to define a table.</p>
 */
export interface TableInput {
    __type?: "TableInput";
    /**
     * <p>A description of the table.</p>
     */
    Description?: string;
    /**
     * <p>The last time that the table was accessed.</p>
     */
    LastAccessTime?: Date;
    /**
     * <p>The last time that column statistics were computed for this table.</p>
     */
    LastAnalyzedTime?: Date;
    /**
     * <p>The table name. For Hive compatibility, this is folded to
     *       lowercase when it is stored.</p>
     */
    Name: string | undefined;
    /**
     * <p>The table owner.</p>
     */
    Owner?: string;
    /**
     * <p>These key-value pairs define properties associated with the table.</p>
     */
    Parameters?: {
        [key: string]: string;
    };
    /**
     * <p>A list of columns by which the table is partitioned. Only primitive
     *       types are supported as partition keys.</p>
     * 	        <p>When you create a table used by Amazon Athena, and you do not specify any
     *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
     *       an empty list. For example:</p>
     *          <p>
     *             <code>"PartitionKeys": []</code>
     *          </p>
     */
    PartitionKeys?: Array<Column>;
    /**
     * <p>The retention time for this table.</p>
     */
    Retention?: number;
    /**
     * <p>A storage descriptor containing information about the physical storage
     *       of this table.</p>
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
     */
    TableType?: string;
    /**
     * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
     */
    ViewExpandedText?: string;
    /**
     * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
     */
    ViewOriginalText?: string;
}
export declare namespace TableInput {
    function isa(o: any): o is TableInput;
}
/**
 * <p>Specifies a version of a table.</p>
 */
export interface TableVersion {
    __type?: "TableVersion";
    /**
     * <p>The table in question.</p>
     */
    Table?: Table;
    /**
     * <p>The ID value that identifies this table version. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
     */
    VersionId?: string;
}
export declare namespace TableVersion {
    function isa(o: any): o is TableVersion;
}
/**
 * <p>An error record for table-version operations.</p>
 */
export interface TableVersionError {
    __type?: "TableVersionError";
    /**
     * <p>The details about the error.</p>
     */
    ErrorDetail?: ErrorDetail;
    /**
     * <p>The name of the table in question.</p>
     */
    TableName?: string;
    /**
     * <p>The ID value of the version in question. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
     */
    VersionId?: string;
}
export declare namespace TableVersionError {
    function isa(o: any): o is TableVersionError;
}
export interface UpdateConnectionRequest {
    __type?: "UpdateConnectionRequest";
    /**
     * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
     *       account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>A <code>ConnectionInput</code> object that redefines the connection
     *       in question.</p>
     */
    ConnectionInput: ConnectionInput | undefined;
    /**
     * <p>The name of the connection definition to update.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateConnectionRequest {
    function isa(o: any): o is UpdateConnectionRequest;
}
export interface UpdateConnectionResponse {
    __type?: "UpdateConnectionResponse";
}
export declare namespace UpdateConnectionResponse {
    function isa(o: any): o is UpdateConnectionResponse;
}
export interface UpdateDatabaseRequest {
    __type?: "UpdateDatabaseRequest";
    /**
     * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
     *       the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>A <code>DatabaseInput</code> object specifying the new definition
     *       of the metadata database in the catalog.</p>
     */
    DatabaseInput: DatabaseInput | undefined;
    /**
     * <p>The name of the database to update in the catalog. For Hive
     *       compatibility, this is folded to lowercase.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateDatabaseRequest {
    function isa(o: any): o is UpdateDatabaseRequest;
}
export interface UpdateDatabaseResponse {
    __type?: "UpdateDatabaseResponse";
}
export declare namespace UpdateDatabaseResponse {
    function isa(o: any): o is UpdateDatabaseResponse;
}
export interface UpdatePartitionRequest {
    __type?: "UpdatePartitionRequest";
    /**
     * <p>The ID of the Data Catalog where the partition to be updated resides. If none is provided,
     *       the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database in which the table in question
     *       resides.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The new partition object to update the partition to.</p>
     */
    PartitionInput: PartitionInput | undefined;
    /**
     * <p>A list of the values defining the partition.</p>
     */
    PartitionValueList: Array<string> | undefined;
    /**
     * <p>The name of the table in which the partition to be updated is located.</p>
     */
    TableName: string | undefined;
}
export declare namespace UpdatePartitionRequest {
    function isa(o: any): o is UpdatePartitionRequest;
}
export interface UpdatePartitionResponse {
    __type?: "UpdatePartitionResponse";
}
export declare namespace UpdatePartitionResponse {
    function isa(o: any): o is UpdatePartitionResponse;
}
export interface UpdateTableRequest {
    __type?: "UpdateTableRequest";
    /**
     * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
     *       ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database in which the table resides. For Hive
     *       compatibility, this name is entirely lowercase.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>By default, <code>UpdateTable</code> always creates an archived version of the table
     *       before updating it. However, if <code>skipArchive</code> is set to true,
     *         <code>UpdateTable</code> does not create the archived version.</p>
     */
    SkipArchive?: boolean;
    /**
     * <p>An updated <code>TableInput</code> object to define the metadata table
     *       in the catalog.</p>
     */
    TableInput: TableInput | undefined;
}
export declare namespace UpdateTableRequest {
    function isa(o: any): o is UpdateTableRequest;
}
export interface UpdateTableResponse {
    __type?: "UpdateTableResponse";
}
export declare namespace UpdateTableResponse {
    function isa(o: any): o is UpdateTableResponse;
}
export interface UpdateUserDefinedFunctionRequest {
    __type?: "UpdateUserDefinedFunctionRequest";
    /**
     * <p>The ID of the Data Catalog where the function to be updated is located. If none is
     *       provided, the AWS account ID is used by default.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the catalog database where the function to be updated is
     *       located.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A <code>FunctionInput</code> object that redefines the function in the Data
     *       Catalog.</p>
     */
    FunctionInput: UserDefinedFunctionInput | undefined;
    /**
     * <p>The name of the function.</p>
     */
    FunctionName: string | undefined;
}
export declare namespace UpdateUserDefinedFunctionRequest {
    function isa(o: any): o is UpdateUserDefinedFunctionRequest;
}
export interface UpdateUserDefinedFunctionResponse {
    __type?: "UpdateUserDefinedFunctionResponse";
}
export declare namespace UpdateUserDefinedFunctionResponse {
    function isa(o: any): o is UpdateUserDefinedFunctionResponse;
}
/**
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 */
export interface UserDefinedFunction {
    __type?: "UserDefinedFunction";
    /**
     * <p>The Java class that contains the function code.</p>
     */
    ClassName?: string;
    /**
     * <p>The time at which the function was created.</p>
     */
    CreateTime?: Date;
    /**
     * <p>The name of the function.</p>
     */
    FunctionName?: string;
    /**
     * <p>The owner of the function.</p>
     */
    OwnerName?: string;
    /**
     * <p>The owner type.</p>
     */
    OwnerType?: PrincipalType | string;
    /**
     * <p>The resource URIs for the function.</p>
     */
    ResourceUris?: Array<ResourceUri>;
}
export declare namespace UserDefinedFunction {
    function isa(o: any): o is UserDefinedFunction;
}
/**
 * <p>A structure used to create or update a user-defined function.</p>
 */
export interface UserDefinedFunctionInput {
    __type?: "UserDefinedFunctionInput";
    /**
     * <p>The Java class that contains the function code.</p>
     */
    ClassName?: string;
    /**
     * <p>The name of the function.</p>
     */
    FunctionName?: string;
    /**
     * <p>The owner of the function.</p>
     */
    OwnerName?: string;
    /**
     * <p>The owner type.</p>
     */
    OwnerType?: PrincipalType | string;
    /**
     * <p>The resource URIs for the function.</p>
     */
    ResourceUris?: Array<ResourceUri>;
}
export declare namespace UserDefinedFunctionInput {
    function isa(o: any): o is UserDefinedFunctionInput;
}
export interface BatchGetDevEndpointsRequest {
    __type?: "BatchGetDevEndpointsRequest";
    /**
     * <p>The list of <code>DevEndpoint</code> names, which might be the names returned from the
     *         <code>ListDevEndpoint</code> operation.</p>
     */
    DevEndpointNames: Array<string> | undefined;
}
export declare namespace BatchGetDevEndpointsRequest {
    function isa(o: any): o is BatchGetDevEndpointsRequest;
}
export interface BatchGetDevEndpointsResponse {
    __type?: "BatchGetDevEndpointsResponse";
    /**
     * <p>A list of <code>DevEndpoint</code> definitions.</p>
     */
    DevEndpoints?: Array<DevEndpoint>;
    /**
     * <p>A list of <code>DevEndpoints</code> not found.</p>
     */
    DevEndpointsNotFound?: Array<string>;
}
export declare namespace BatchGetDevEndpointsResponse {
    function isa(o: any): o is BatchGetDevEndpointsResponse;
}
/**
 * <p>Specifies how Amazon CloudWatch data should be encrypted.</p>
 */
export interface CloudWatchEncryption {
    __type?: "CloudWatchEncryption";
    /**
     * <p>The encryption mode to use for CloudWatch data.</p>
     */
    CloudWatchEncryptionMode?: CloudWatchEncryptionMode | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
     */
    KmsKeyArn?: string;
}
export declare namespace CloudWatchEncryption {
    function isa(o: any): o is CloudWatchEncryption;
}
export interface CreateDevEndpointRequest {
    __type?: "CreateDevEndpointRequest";
    /**
     * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
     */
    Arguments?: {
        [key: string]: string;
    };
    /**
     * <p>The name to be assigned to the new <code>DevEndpoint</code>.</p>
     */
    EndpointName: string | undefined;
    /**
     * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
     *       in your <code>DevEndpoint</code>.</p>
     */
    ExtraJarsS3Path?: string;
    /**
     * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
     *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
     *       comma.</p>
     *          <note>
     *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
     *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
     *         analysis library, are not yet supported.</p>
     *          </note>
     */
    ExtraPythonLibsS3Path?: string;
    /**
     * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
     *
     *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
     *
     * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
     *
     * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
     */
    GlueVersion?: string;
    /**
     * <p>The number of AWS Glue Data Processing Units (DPUs) to allocate to this
     *         <code>DevEndpoint</code>.</p>
     */
    NumberOfNodes?: number;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
     *
     * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
     *       attribute is provided for backward compatibility because the recommended attribute to use is
     *       public keys.</p>
     */
    PublicKey?: string;
    /**
     * <p>A list of public keys to be used by the development endpoints for authentication. The use
     *       of this attribute is preferred over a single public key because the public keys allow you to
     *       have a different private key per client.</p>
     *
     *          <note>
     *             <p>If you previously created an endpoint with a public key, you must remove that key to be able
     *         to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API with the public
     *         key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the
     *           <code>addPublicKeys</code> attribute.</p>
     *          </note>
     */
    PublicKeys?: Array<string>;
    /**
     * <p>The IAM role for the <code>DevEndpoint</code>.</p>
     */
    RoleArn: string | undefined;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
     *         <code>DevEndpoint</code>.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>Security group IDs for the security groups to be used by the new
     *       <code>DevEndpoint</code>.</p>
     */
    SecurityGroupIds?: Array<string>;
    /**
     * <p>The subnet ID for the new <code>DevEndpoint</code> to use.</p>
     */
    SubnetId?: string;
    /**
     * <p>The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *          </ul>
     * 	        <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
     *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace CreateDevEndpointRequest {
    function isa(o: any): o is CreateDevEndpointRequest;
}
export interface CreateDevEndpointResponse {
    __type?: "CreateDevEndpointResponse";
    /**
     * <p>The map of arguments used to configure this <code>DevEndpoint</code>.</p>
     *
     * 	        <p>Valid arguments are:</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>"--enable-glue-datacatalog": ""</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>"GLUE_PYTHON_VERSION": "3"</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>"GLUE_PYTHON_VERSION": "2"</code>
     *                </p>
     *             </li>
     *          </ul>
     *
     *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
     */
    Arguments?: {
        [key: string]: string;
    };
    /**
     * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The point in time at which this <code>DevEndpoint</code> was created.</p>
     */
    CreatedTimestamp?: Date;
    /**
     * <p>The name assigned to the new <code>DevEndpoint</code>.</p>
     */
    EndpointName?: string;
    /**
     * <p>Path to one or more Java <code>.jar</code> files in an S3 bucket that will be loaded in
     *       your <code>DevEndpoint</code>.</p>
     */
    ExtraJarsS3Path?: string;
    /**
     * <p>The paths to one or more Python libraries in an S3 bucket that will be loaded in your
     *         <code>DevEndpoint</code>.</p>
     */
    ExtraPythonLibsS3Path?: string;
    /**
     * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
     */
    FailureReason?: string;
    /**
     * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
     */
    GlueVersion?: string;
    /**
     * <p>The number of AWS Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>
     */
    NumberOfNodes?: number;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The Amazon Resource Name (ARN) of the role assigned to the new
     *       <code>DevEndpoint</code>.</p>
     */
    RoleArn?: string;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure being used with this
     *         <code>DevEndpoint</code>.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>The security groups assigned to the new <code>DevEndpoint</code>.</p>
     */
    SecurityGroupIds?: Array<string>;
    /**
     * <p>The current status of the new <code>DevEndpoint</code>.</p>
     */
    Status?: string;
    /**
     * <p>The subnet ID assigned to the new <code>DevEndpoint</code>.</p>
     */
    SubnetId?: string;
    /**
     * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
     */
    VpcId?: string;
    /**
     * <p>The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.</p>
     */
    WorkerType?: WorkerType | string;
    /**
     * <p>The address of the YARN endpoint used by this <code>DevEndpoint</code>.</p>
     */
    YarnEndpointAddress?: string;
    /**
     * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
     */
    ZeppelinRemoteSparkInterpreterPort?: number;
}
export declare namespace CreateDevEndpointResponse {
    function isa(o: any): o is CreateDevEndpointResponse;
}
export interface CreateSecurityConfigurationRequest {
    __type?: "CreateSecurityConfigurationRequest";
    /**
     * <p>The encryption configuration for the new security configuration.</p>
     */
    EncryptionConfiguration: EncryptionConfiguration | undefined;
    /**
     * <p>The name for the new security configuration.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateSecurityConfigurationRequest {
    function isa(o: any): o is CreateSecurityConfigurationRequest;
}
export interface CreateSecurityConfigurationResponse {
    __type?: "CreateSecurityConfigurationResponse";
    /**
     * <p>The time at which the new security configuration was created.</p>
     */
    CreatedTimestamp?: Date;
    /**
     * <p>The name assigned to the new security configuration.</p>
     */
    Name?: string;
}
export declare namespace CreateSecurityConfigurationResponse {
    function isa(o: any): o is CreateSecurityConfigurationResponse;
}
export interface DeleteDevEndpointRequest {
    __type?: "DeleteDevEndpointRequest";
    /**
     * <p>The name of the <code>DevEndpoint</code>.</p>
     */
    EndpointName: string | undefined;
}
export declare namespace DeleteDevEndpointRequest {
    function isa(o: any): o is DeleteDevEndpointRequest;
}
export interface DeleteDevEndpointResponse {
    __type?: "DeleteDevEndpointResponse";
}
export declare namespace DeleteDevEndpointResponse {
    function isa(o: any): o is DeleteDevEndpointResponse;
}
export interface DeleteSecurityConfigurationRequest {
    __type?: "DeleteSecurityConfigurationRequest";
    /**
     * <p>The name of the security configuration to delete.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteSecurityConfigurationRequest {
    function isa(o: any): o is DeleteSecurityConfigurationRequest;
}
export interface DeleteSecurityConfigurationResponse {
    __type?: "DeleteSecurityConfigurationResponse";
}
export declare namespace DeleteSecurityConfigurationResponse {
    function isa(o: any): o is DeleteSecurityConfigurationResponse;
}
/**
 * <p>A development endpoint where a developer can remotely debug extract, transform, and load
 *       (ETL) scripts.</p>
 */
export interface DevEndpoint {
    __type?: "DevEndpoint";
    /**
     * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
     *          <p>Valid arguments are:</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>"--enable-glue-datacatalog": ""</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>"GLUE_PYTHON_VERSION": "3"</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>"GLUE_PYTHON_VERSION": "2"</code>
     *                </p>
     *             </li>
     *          </ul>
     *
     *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
     */
    Arguments?: {
        [key: string]: string;
    };
    /**
     * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The point in time at which this DevEndpoint was created.</p>
     */
    CreatedTimestamp?: Date;
    /**
     * <p>The name of the <code>DevEndpoint</code>.</p>
     */
    EndpointName?: string;
    /**
     * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
     *       in your <code>DevEndpoint</code>.</p>
     *          <note>
     *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
     *          </note>
     */
    ExtraJarsS3Path?: string;
    /**
     * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
     *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
     *       comma.</p>
     *
     *          <note>
     *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
     *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
     *         analysis library, are not currently supported.</p>
     *          </note>
     */
    ExtraPythonLibsS3Path?: string;
    /**
     * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
     */
    FailureReason?: string;
    /**
     * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
     *
     *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
     *
     * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
     *
     * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
     */
    GlueVersion?: string;
    /**
     * <p>The point in time at which this <code>DevEndpoint</code> was last modified.</p>
     */
    LastModifiedTimestamp?: Date;
    /**
     * <p>The status of the last update.</p>
     */
    LastUpdateStatus?: string;
    /**
     * <p>The number of AWS Glue Data Processing Units (DPUs) allocated to this
     *         <code>DevEndpoint</code>.</p>
     */
    NumberOfNodes?: number;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
     *
     * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>A private IP address to access the <code>DevEndpoint</code> within a VPC if the
     *         <code>DevEndpoint</code> is created within one. The <code>PrivateAddress</code> field is
     *       present only when you create the <code>DevEndpoint</code> within your VPC.</p>
     */
    PrivateAddress?: string;
    /**
     * <p>The public IP address used by this <code>DevEndpoint</code>. The
     *         <code>PublicAddress</code> field is present only when you create a non-virtual private cloud
     *       (VPC) <code>DevEndpoint</code>.</p>
     */
    PublicAddress?: string;
    /**
     * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
     *       attribute is provided for backward compatibility because the recommended attribute to use is
     *       public keys.</p>
     */
    PublicKey?: string;
    /**
     * <p>A list of public keys to be used by the <code>DevEndpoints</code> for authentication.
     *       Using this attribute is preferred over a single public key because the public keys allow you
     *       to have a different private key per client.</p>
     *          <note>
     *             <p>If you previously created an endpoint with a public key, you must remove that key to be
     *         able to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API operation
     *         with the public key content in the <code>deletePublicKeys</code> attribute, and the list of
     *         new keys in the <code>addPublicKeys</code> attribute.</p>
     *          </note>
     */
    PublicKeys?: Array<string>;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role used in this
     *       <code>DevEndpoint</code>.</p>
     */
    RoleArn?: string;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
     *         <code>DevEndpoint</code>.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>A list of security group identifiers used in this <code>DevEndpoint</code>.</p>
     */
    SecurityGroupIds?: Array<string>;
    /**
     * <p>The current status of this <code>DevEndpoint</code>.</p>
     */
    Status?: string;
    /**
     * <p>The subnet ID for this <code>DevEndpoint</code>.</p>
     */
    SubnetId?: string;
    /**
     * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
     */
    VpcId?: string;
    /**
     * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *          </ul>
     *
     * 	        <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
     *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
     */
    WorkerType?: WorkerType | string;
    /**
     * <p>The YARN endpoint address used by this <code>DevEndpoint</code>.</p>
     */
    YarnEndpointAddress?: string;
    /**
     * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
     */
    ZeppelinRemoteSparkInterpreterPort?: number;
}
export declare namespace DevEndpoint {
    function isa(o: any): o is DevEndpoint;
}
/**
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 */
export interface DevEndpointCustomLibraries {
    __type?: "DevEndpointCustomLibraries";
    /**
     * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
     *       in your <code>DevEndpoint</code>.</p>
     *          <note>
     *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
     *          </note>
     */
    ExtraJarsS3Path?: string;
    /**
     * <p>The paths to one or more Python libraries in an Amazon Simple Storage Service (Amazon S3)
     *       bucket that should be loaded in your <code>DevEndpoint</code>. Multiple values must be
     *       complete paths separated by a comma.</p>
     *          <note>
     *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
     *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
     *         analysis library, are not currently supported.</p>
     *          </note>
     */
    ExtraPythonLibsS3Path?: string;
}
export declare namespace DevEndpointCustomLibraries {
    function isa(o: any): o is DevEndpointCustomLibraries;
}
/**
 * <p>Specifies an encryption configuration.</p>
 */
export interface EncryptionConfiguration {
    __type?: "EncryptionConfiguration";
    /**
     * <p>The encryption configuration for Amazon CloudWatch.</p>
     */
    CloudWatchEncryption?: CloudWatchEncryption;
    /**
     * <p>The encryption configuration for job bookmarks.</p>
     */
    JobBookmarksEncryption?: JobBookmarksEncryption;
    /**
     * <p>The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.</p>
     */
    S3Encryption?: Array<S3Encryption>;
}
export declare namespace EncryptionConfiguration {
    function isa(o: any): o is EncryptionConfiguration;
}
export interface GetDevEndpointRequest {
    __type?: "GetDevEndpointRequest";
    /**
     * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
     */
    EndpointName: string | undefined;
}
export declare namespace GetDevEndpointRequest {
    function isa(o: any): o is GetDevEndpointRequest;
}
export interface GetDevEndpointResponse {
    __type?: "GetDevEndpointResponse";
    /**
     * <p>A <code>DevEndpoint</code> definition.</p>
     */
    DevEndpoint?: DevEndpoint;
}
export declare namespace GetDevEndpointResponse {
    function isa(o: any): o is GetDevEndpointResponse;
}
export interface GetDevEndpointsRequest {
    __type?: "GetDevEndpointsRequest";
    /**
     * <p>The maximum size of information to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetDevEndpointsRequest {
    function isa(o: any): o is GetDevEndpointsRequest;
}
export interface GetDevEndpointsResponse {
    __type?: "GetDevEndpointsResponse";
    /**
     * <p>A list of <code>DevEndpoint</code> definitions.</p>
     */
    DevEndpoints?: Array<DevEndpoint>;
    /**
     * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
     *       returned.</p>
     */
    NextToken?: string;
}
export declare namespace GetDevEndpointsResponse {
    function isa(o: any): o is GetDevEndpointsResponse;
}
export interface GetJobBookmarkRequest {
    __type?: "GetJobBookmarkRequest";
    /**
     * <p>The name of the job in question.</p>
     */
    JobName: string | undefined;
    /**
     * <p>The unique run identifier associated with this job run.</p>
     */
    RunId?: string;
}
export declare namespace GetJobBookmarkRequest {
    function isa(o: any): o is GetJobBookmarkRequest;
}
export interface GetJobBookmarkResponse {
    __type?: "GetJobBookmarkResponse";
    /**
     * <p>A structure that defines a point that a job can resume processing.</p>
     */
    JobBookmarkEntry?: JobBookmarkEntry;
}
export declare namespace GetJobBookmarkResponse {
    function isa(o: any): o is GetJobBookmarkResponse;
}
export interface GetSecurityConfigurationRequest {
    __type?: "GetSecurityConfigurationRequest";
    /**
     * <p>The name of the security configuration to retrieve.</p>
     */
    Name: string | undefined;
}
export declare namespace GetSecurityConfigurationRequest {
    function isa(o: any): o is GetSecurityConfigurationRequest;
}
export interface GetSecurityConfigurationResponse {
    __type?: "GetSecurityConfigurationResponse";
    /**
     * <p>The requested security configuration.</p>
     */
    SecurityConfiguration?: SecurityConfiguration;
}
export declare namespace GetSecurityConfigurationResponse {
    function isa(o: any): o is GetSecurityConfigurationResponse;
}
export interface GetSecurityConfigurationsRequest {
    __type?: "GetSecurityConfigurationsRequest";
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetSecurityConfigurationsRequest {
    function isa(o: any): o is GetSecurityConfigurationsRequest;
}
export interface GetSecurityConfigurationsResponse {
    __type?: "GetSecurityConfigurationsResponse";
    /**
     * <p>A continuation token, if there are more security
     *       configurations to return.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of security configurations.</p>
     */
    SecurityConfigurations?: Array<SecurityConfiguration>;
}
export declare namespace GetSecurityConfigurationsResponse {
    function isa(o: any): o is GetSecurityConfigurationsResponse;
}
/**
 * <p>Defines a point that a job can resume processing.</p>
 */
export interface JobBookmarkEntry {
    __type?: "JobBookmarkEntry";
    /**
     * <p>The attempt ID number.</p>
     */
    Attempt?: number;
    /**
     * <p>The bookmark itself.</p>
     */
    JobBookmark?: string;
    /**
     * <p>The name of the job in question.</p>
     */
    JobName?: string;
    /**
     * <p>The unique run identifier associated with the previous job run.</p>
     */
    PreviousRunId?: string;
    /**
     * <p>The run ID number.</p>
     */
    Run?: number;
    /**
     * <p>The run ID number.</p>
     */
    RunId?: string;
    /**
     * <p>The version of the job.</p>
     */
    Version?: number;
}
export declare namespace JobBookmarkEntry {
    function isa(o: any): o is JobBookmarkEntry;
}
/**
 * <p>Specifies how job bookmark data should be encrypted.</p>
 */
export interface JobBookmarksEncryption {
    __type?: "JobBookmarksEncryption";
    /**
     * <p>The encryption mode to use for job bookmarks data.</p>
     */
    JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
     */
    KmsKeyArn?: string;
}
export declare namespace JobBookmarksEncryption {
    function isa(o: any): o is JobBookmarksEncryption;
}
export interface ListDevEndpointsRequest {
    __type?: "ListDevEndpointsRequest";
    /**
     * <p>The maximum size of a list to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation request.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifies to return only these tagged resources.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListDevEndpointsRequest {
    function isa(o: any): o is ListDevEndpointsRequest;
}
export interface ListDevEndpointsResponse {
    __type?: "ListDevEndpointsResponse";
    /**
     * <p>The names of all the <code>DevEndpoint</code>s in the account, or the
     *         <code>DevEndpoint</code>s with the specified tags.</p>
     */
    DevEndpointNames?: Array<string>;
    /**
     * <p>A continuation token, if the returned list does not contain the
     *       last metric available.</p>
     */
    NextToken?: string;
}
export declare namespace ListDevEndpointsResponse {
    function isa(o: any): o is ListDevEndpointsResponse;
}
export interface ResetJobBookmarkRequest {
    __type?: "ResetJobBookmarkRequest";
    /**
     * <p>The name of the job in question.</p>
     */
    JobName: string | undefined;
    /**
     * <p>The unique run identifier associated with this job run.</p>
     */
    RunId?: string;
}
export declare namespace ResetJobBookmarkRequest {
    function isa(o: any): o is ResetJobBookmarkRequest;
}
export interface ResetJobBookmarkResponse {
    __type?: "ResetJobBookmarkResponse";
    /**
     * <p>The reset bookmark entry.</p>
     */
    JobBookmarkEntry?: JobBookmarkEntry;
}
export declare namespace ResetJobBookmarkResponse {
    function isa(o: any): o is ResetJobBookmarkResponse;
}
/**
 * <p>Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.</p>
 */
export interface S3Encryption {
    __type?: "S3Encryption";
    /**
     * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
     */
    KmsKeyArn?: string;
    /**
     * <p>The encryption mode to use for Amazon S3 data.</p>
     */
    S3EncryptionMode?: S3EncryptionMode | string;
}
export declare namespace S3Encryption {
    function isa(o: any): o is S3Encryption;
}
/**
 * <p>Specifies a security configuration.</p>
 */
export interface SecurityConfiguration {
    __type?: "SecurityConfiguration";
    /**
     * <p>The time at which this security configuration was created.</p>
     */
    CreatedTimeStamp?: Date;
    /**
     * <p>The encryption configuration associated with this security configuration.</p>
     */
    EncryptionConfiguration?: EncryptionConfiguration;
    /**
     * <p>The name of the security configuration.</p>
     */
    Name?: string;
}
export declare namespace SecurityConfiguration {
    function isa(o: any): o is SecurityConfiguration;
}
export interface UpdateDevEndpointRequest {
    __type?: "UpdateDevEndpointRequest";
    /**
     * <p>The map of arguments to add the map of arguments used to configure the
     *         <code>DevEndpoint</code>.</p>
     *
     * 	        <p>Valid arguments are:</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>"--enable-glue-datacatalog": ""</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>"GLUE_PYTHON_VERSION": "3"</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>"GLUE_PYTHON_VERSION": "2"</code>
     *                </p>
     *             </li>
     *          </ul>
     *
     *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
     */
    AddArguments?: {
        [key: string]: string;
    };
    /**
     * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
     */
    AddPublicKeys?: Array<string>;
    /**
     * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
     */
    CustomLibraries?: DevEndpointCustomLibraries;
    /**
     * <p>The list of argument keys to be deleted from the map of arguments used to configure the
     *         <code>DevEndpoint</code>.</p>
     */
    DeleteArguments?: Array<string>;
    /**
     * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
     */
    DeletePublicKeys?: Array<string>;
    /**
     * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
     */
    EndpointName: string | undefined;
    /**
     * <p>The public key for the <code>DevEndpoint</code> to use.</p>
     */
    PublicKey?: string;
    /**
     * <p>
     *             <code>True</code> if the list of custom libraries to be loaded in the development endpoint
     *       needs to be updated, or <code>False</code> if otherwise.</p>
     */
    UpdateEtlLibraries?: boolean;
}
export declare namespace UpdateDevEndpointRequest {
    function isa(o: any): o is UpdateDevEndpointRequest;
}
export interface UpdateDevEndpointResponse {
    __type?: "UpdateDevEndpointResponse";
}
export declare namespace UpdateDevEndpointResponse {
    function isa(o: any): o is UpdateDevEndpointResponse;
}
export interface CancelMLTaskRunRequest {
    __type?: "CancelMLTaskRunRequest";
    /**
     * <p>A unique identifier for the task run.</p>
     */
    TaskRunId: string | undefined;
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId: string | undefined;
}
export declare namespace CancelMLTaskRunRequest {
    function isa(o: any): o is CancelMLTaskRunRequest;
}
export interface CancelMLTaskRunResponse {
    __type?: "CancelMLTaskRunResponse";
    /**
     * <p>The status for this run.</p>
     */
    Status?: TaskStatusType | string;
    /**
     * <p>The unique identifier for the task run.</p>
     */
    TaskRunId?: string;
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId?: string;
}
export declare namespace CancelMLTaskRunResponse {
    function isa(o: any): o is CancelMLTaskRunResponse;
}
/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *
 * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 */
export interface ConfusionMatrix {
    __type?: "ConfusionMatrix";
    /**
     * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
     */
    NumFalseNegatives?: number;
    /**
     * <p>The number of nonmatches in the data that the transform incorrectly classified as a match,
     *       in the confusion matrix for your transform.</p>
     */
    NumFalsePositives?: number;
    /**
     * <p>The number of nonmatches in the data that the transform correctly rejected, in the
     *       confusion matrix for your transform.</p>
     */
    NumTrueNegatives?: number;
    /**
     * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
     */
    NumTruePositives?: number;
}
export declare namespace ConfusionMatrix {
    function isa(o: any): o is ConfusionMatrix;
}
export interface CreateMLTransformRequest {
    __type?: "CreateMLTransformRequest";
    /**
     * <p>A description of the machine learning transform that is being defined. The default is an
     *       empty string.</p>
     */
    Description?: string;
    /**
     * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
     */
    GlueVersion?: string;
    /**
     * <p>A list of AWS Glue table definitions used by the transform.</p>
     */
    InputRecordTables: Array<GlueTable> | undefined;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
     *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
     *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
     *         page</a>. </p>
     *
     * 			      <p>
     *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
     *         <ul>
     *             <li>
     *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
     *             </li>
     *          </ul>
     *
     * 	        <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
     *
     *
     *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>The unique name that you give the transform when you create it.</p>
     */
    Name: string | undefined;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
     *
     * 		       <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The algorithmic parameters that are specific to the transform type used. Conditionally
     *       dependent on the transform type.</p>
     */
    Parameters: TransformParameters | undefined;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform. </p>
     *
     * 		       <ul>
     *             <li>
     *                <p>This role needs AWS Glue service role permissions to allow access to resources in AWS Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access AWS Glue</a>.</p>
     *             </li>
     *             <li>
     *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
     *             </li>
     *          </ul>
     */
    Role: string | undefined;
    /**
     * <p>The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
     */
    Timeout?: number;
    /**
     * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
     *             </li>
     *          </ul>
     *
     * 	        <p>
     *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
     *         <ul>
     *             <li>
     *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace CreateMLTransformRequest {
    function isa(o: any): o is CreateMLTransformRequest;
}
export interface CreateMLTransformResponse {
    __type?: "CreateMLTransformResponse";
    /**
     * <p>A unique identifier that is generated for the transform.</p>
     */
    TransformId?: string;
}
export declare namespace CreateMLTransformResponse {
    function isa(o: any): o is CreateMLTransformResponse;
}
export interface DeleteMLTransformRequest {
    __type?: "DeleteMLTransformRequest";
    /**
     * <p>The unique identifier of the transform to delete.</p>
     */
    TransformId: string | undefined;
}
export declare namespace DeleteMLTransformRequest {
    function isa(o: any): o is DeleteMLTransformRequest;
}
export interface DeleteMLTransformResponse {
    __type?: "DeleteMLTransformResponse";
    /**
     * <p>The unique identifier of the transform that was deleted.</p>
     */
    TransformId?: string;
}
export declare namespace DeleteMLTransformResponse {
    function isa(o: any): o is DeleteMLTransformResponse;
}
/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 */
export interface EvaluationMetrics {
    __type?: "EvaluationMetrics";
    /**
     * <p>The evaluation metrics for the find matches algorithm.</p>
     */
    FindMatchesMetrics?: FindMatchesMetrics;
    /**
     * <p>The type of machine learning transform.</p>
     */
    TransformType: TransformType | string | undefined;
}
export declare namespace EvaluationMetrics {
    function isa(o: any): o is EvaluationMetrics;
}
/**
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 */
export interface ExportLabelsTaskRunProperties {
    __type?: "ExportLabelsTaskRunProperties";
    /**
     * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
     *       labels.</p>
     */
    OutputS3Path?: string;
}
export declare namespace ExportLabelsTaskRunProperties {
    function isa(o: any): o is ExportLabelsTaskRunProperties;
}
/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 */
export interface FindMatchesMetrics {
    __type?: "FindMatchesMetrics";
    /**
     * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
     *       quality of the transform, that is independent of the choice made for precision vs. recall.
     *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
     * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
     */
    AreaUnderPRCurve?: number;
    /**
     * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
     * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
     */
    ConfusionMatrix?: ConfusionMatrix;
    /**
     * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
     *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
     */
    F1?: number;
    /**
     * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
     *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
     */
    Precision?: number;
    /**
     * <p>The recall metric indicates that for an actual match, how often your transform predicts
     *       the match. Specifically, it measures how well the transform finds true positives from the
     *       total records in the source data.</p>
     *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
     */
    Recall?: number;
}
export declare namespace FindMatchesMetrics {
    function isa(o: any): o is FindMatchesMetrics;
}
/**
 * <p>The parameters to configure the find matches transform.</p>
 */
export interface FindMatchesParameters {
    __type?: "FindMatchesParameters";
    /**
     * <p>The value that is selected when tuning your transform for a balance between accuracy and
     *       cost. A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0
     *       means a bias purely for accuracy, which typically results in a higher cost, sometimes
     *       substantially higher. A value of 0.0 means a bias purely for cost, which results in a less
     *       accurate <code>FindMatches</code> transform, sometimes with unacceptable accuracy.</p>
     *
     * 	        <p>Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall. </p>
     *
     * 	        <p>Cost measures how many compute resources, and thus money, are consumed to run the
     *       transform.</p>
     */
    AccuracyCostTradeoff?: number;
    /**
     * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
     *          <p>Note that setting this value to true may increase the conflation execution time.</p>
     */
    EnforceProvidedLabels?: boolean;
    /**
     * <p>The value selected when tuning your transform for a balance between precision and recall.
     *       A value of 0.5 means no preference; a value of 1.0 means a bias purely for precision, and a
     *       value of 0.0 means a bias for recall. Because this is a tradeoff, choosing values close to 1.0
     *       means very low recall, and choosing values close to 0.0 results in very low precision.</p>
     *
     * 	        <p>The precision metric indicates how often your model is correct when it predicts a match. </p>
     *
     * 	        <p>The recall metric indicates that for an actual match, how often your model predicts the
     *       match.</p>
     */
    PrecisionRecallTradeoff?: number;
    /**
     * <p>The name of a column that uniquely identifies rows in the source table. Used to help identify matching records.</p>
     */
    PrimaryKeyColumnName?: string;
}
export declare namespace FindMatchesParameters {
    function isa(o: any): o is FindMatchesParameters;
}
/**
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 */
export interface FindMatchesTaskRunProperties {
    __type?: "FindMatchesTaskRunProperties";
    /**
     * <p>The job ID for the Find Matches task run.</p>
     */
    JobId?: string;
    /**
     * <p>The name assigned to the job for the Find Matches task run.</p>
     */
    JobName?: string;
    /**
     * <p>The job run ID for the Find Matches task run.</p>
     */
    JobRunId?: string;
}
export declare namespace FindMatchesTaskRunProperties {
    function isa(o: any): o is FindMatchesTaskRunProperties;
}
export interface GetMLTaskRunRequest {
    __type?: "GetMLTaskRunRequest";
    /**
     * <p>The unique identifier of the task run.</p>
     */
    TaskRunId: string | undefined;
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId: string | undefined;
}
export declare namespace GetMLTaskRunRequest {
    function isa(o: any): o is GetMLTaskRunRequest;
}
export interface GetMLTaskRunResponse {
    __type?: "GetMLTaskRunResponse";
    /**
     * <p>The date and time when this task run was completed.</p>
     */
    CompletedOn?: Date;
    /**
     * <p>The error strings that are associated with the task run.</p>
     */
    ErrorString?: string;
    /**
     * <p>The amount of time (in seconds) that the task run consumed resources.</p>
     */
    ExecutionTime?: number;
    /**
     * <p>The date and time when this task run was last modified.</p>
     */
    LastModifiedOn?: Date;
    /**
     * <p>The names of the log groups that are associated with the task run.</p>
     */
    LogGroupName?: string;
    /**
     * <p>The list of properties that are associated with the task run.</p>
     */
    Properties?: TaskRunProperties;
    /**
     * <p>The date and time when this task run started.</p>
     */
    StartedOn?: Date;
    /**
     * <p>The status for this task run.</p>
     */
    Status?: TaskStatusType | string;
    /**
     * <p>The unique run identifier associated with this run.</p>
     */
    TaskRunId?: string;
    /**
     * <p>The unique identifier of the task run.</p>
     */
    TransformId?: string;
}
export declare namespace GetMLTaskRunResponse {
    function isa(o: any): o is GetMLTaskRunResponse;
}
export interface GetMLTaskRunsRequest {
    __type?: "GetMLTaskRunsRequest";
    /**
     * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
     */
    Filter?: TaskRunFilterCriteria;
    /**
     * <p>The maximum number of results to return. </p>
     */
    MaxResults?: number;
    /**
     * <p>A token for pagination of the results. The default is empty.</p>
     */
    NextToken?: string;
    /**
     * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
     */
    Sort?: TaskRunSortCriteria;
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId: string | undefined;
}
export declare namespace GetMLTaskRunsRequest {
    function isa(o: any): o is GetMLTaskRunsRequest;
}
export interface GetMLTaskRunsResponse {
    __type?: "GetMLTaskRunsResponse";
    /**
     * <p>A pagination token, if more results are available.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of task runs that are associated with the transform.</p>
     */
    TaskRuns?: Array<TaskRun>;
}
export declare namespace GetMLTaskRunsResponse {
    function isa(o: any): o is GetMLTaskRunsResponse;
}
export interface GetMLTransformRequest {
    __type?: "GetMLTransformRequest";
    /**
     * <p>The unique identifier of the transform, generated at the time that the transform was
     *       created.</p>
     */
    TransformId: string | undefined;
}
export declare namespace GetMLTransformRequest {
    function isa(o: any): o is GetMLTransformRequest;
}
export interface GetMLTransformResponse {
    __type?: "GetMLTransformResponse";
    /**
     * <p>The date and time when the transform was created.</p>
     */
    CreatedOn?: Date;
    /**
     * <p>A description of the transform.</p>
     */
    Description?: string;
    /**
     * <p>The latest evaluation metrics.</p>
     */
    EvaluationMetrics?: EvaluationMetrics;
    /**
     * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
     */
    GlueVersion?: string;
    /**
     * <p>A list of AWS Glue table definitions used by the transform.</p>
     */
    InputRecordTables?: Array<GlueTable>;
    /**
     * <p>The number of labels available for this transform.</p>
     */
    LabelCount?: number;
    /**
     * <p>The date and time when the transform was last modified.</p>
     */
    LastModifiedOn?: Date;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
     *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
     *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
     *         page</a>. </p>
     *
     *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>The unique name given to the transform when it was created.</p>
     */
    Name?: string;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The configuration parameters that are specific to the algorithm used.</p>
     */
    Parameters?: TransformParameters;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
     *       permissions.</p>
     */
    Role?: string;
    /**
     * <p>The <code>Map<Column, Type></code> object that represents the schema that this
     *       transform accepts. Has an upper bound of 100 columns.</p>
     */
    Schema?: Array<SchemaColumn>;
    /**
     * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
     */
    Status?: TransformStatusType | string;
    /**
     * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
     */
    Timeout?: number;
    /**
     * <p>The unique identifier of the transform, generated at the time that the transform was
     *       created.</p>
     */
    TransformId?: string;
    /**
     * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace GetMLTransformResponse {
    function isa(o: any): o is GetMLTransformResponse;
}
export interface GetMLTransformsRequest {
    __type?: "GetMLTransformsRequest";
    /**
     * <p>The filter transformation criteria.</p>
     */
    Filter?: TransformFilterCriteria;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A paginated token to offset the results.</p>
     */
    NextToken?: string;
    /**
     * <p>The sorting criteria.</p>
     */
    Sort?: TransformSortCriteria;
}
export declare namespace GetMLTransformsRequest {
    function isa(o: any): o is GetMLTransformsRequest;
}
export interface GetMLTransformsResponse {
    __type?: "GetMLTransformsResponse";
    /**
     * <p>A pagination token, if more results are available.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of machine learning transforms.</p>
     */
    Transforms: Array<MLTransform> | undefined;
}
export declare namespace GetMLTransformsResponse {
    function isa(o: any): o is GetMLTransformsResponse;
}
/**
 * <p>The database and table in the AWS Glue Data Catalog that is used for input or output data.</p>
 */
export interface GlueTable {
    __type?: "GlueTable";
    /**
     * <p>A unique identifier for the AWS Glue Data Catalog.</p>
     */
    CatalogId?: string;
    /**
     * <p>The name of the connection to the AWS Glue Data Catalog.</p>
     */
    ConnectionName?: string;
    /**
     * <p>A database name in the AWS Glue Data Catalog.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A table name in the AWS Glue Data Catalog.</p>
     */
    TableName: string | undefined;
}
export declare namespace GlueTable {
    function isa(o: any): o is GlueTable;
}
/**
 * <p>Specifies configuration properties for an importing labels task run.</p>
 */
export interface ImportLabelsTaskRunProperties {
    __type?: "ImportLabelsTaskRunProperties";
    /**
     * <p>The Amazon Simple Storage Service (Amazon S3) path from where you will import the
     *       labels.</p>
     */
    InputS3Path?: string;
    /**
     * <p>Indicates whether to overwrite your existing labels.</p>
     */
    Replace?: boolean;
}
export declare namespace ImportLabelsTaskRunProperties {
    function isa(o: any): o is ImportLabelsTaskRunProperties;
}
/**
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 */
export interface LabelingSetGenerationTaskRunProperties {
    __type?: "LabelingSetGenerationTaskRunProperties";
    /**
     * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
     *       set.</p>
     */
    OutputS3Path?: string;
}
export declare namespace LabelingSetGenerationTaskRunProperties {
    function isa(o: any): o is LabelingSetGenerationTaskRunProperties;
}
/**
 * <p>A structure for a machine learning transform.</p>
 */
export interface MLTransform {
    __type?: "MLTransform";
    /**
     * <p>A timestamp. The time and date that this machine learning transform was created.</p>
     */
    CreatedOn?: Date;
    /**
     * <p>A user-defined, long-form description text for the machine learning transform.
     *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
     */
    Description?: string;
    /**
     * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
     */
    EvaluationMetrics?: EvaluationMetrics;
    /**
     * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
     */
    GlueVersion?: string;
    /**
     * <p>A list of AWS Glue table definitions used by the transform.</p>
     */
    InputRecordTables?: Array<GlueTable>;
    /**
     * <p>A count identifier for the labeling files generated by AWS Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
     */
    LabelCount?: number;
    /**
     * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
     */
    LastModifiedOn?: Date;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
     *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
     *       information, see the <a href="http://aws.amazon.com/glue/pricing/">AWS Glue pricing
     *         page</a>. </p>
     *
     * 		       <p>
     *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
     *         <ul>
     *             <li>
     *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
     *             </li>
     *          </ul>
     *
     * 	        <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
     *       learning transform fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
     *       and can be changed at any time.</p>
     */
    Name?: string;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
     *
     * 	        <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
     *       behavior of the machine learning transform by specifying what data it learns from and your
     *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
     */
    Parameters?: TransformParameters;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform. </p>
     *
     * 		       <ul>
     *             <li>
     *                <p>This role needs AWS Glue service role permissions to allow access to resources in AWS Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access AWS Glue</a>.</p>
     *             </li>
     *             <li>
     *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
     *             </li>
     *          </ul>
     */
    Role?: string;
    /**
     * <p>A map of key-value pairs representing the columns and data types that this transform can
     *       run against. Has an upper bound of 100 columns.</p>
     */
    Schema?: Array<SchemaColumn>;
    /**
     * <p>The current status of the machine learning transform.</p>
     */
    Status?: TransformStatusType | string;
    /**
     * <p>The timeout in minutes of the machine learning transform.</p>
     */
    Timeout?: number;
    /**
     * <p>The unique transform ID that is generated for the machine learning transform. The ID is
     *       guaranteed to be unique and does not change.</p>
     */
    TransformId?: string;
    /**
     * <p>The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
     *             </li>
     *          </ul>
     *
     * 	        <p>
     *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
     *         <ul>
     *             <li>
     *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
     *             </li>
     *             <li>
     *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace MLTransform {
    function isa(o: any): o is MLTransform;
}
/**
 * <p>The machine learning transform is not ready to run.</p>
 */
export interface MLTransformNotReadyException extends __SmithyException, $MetadataBearer {
    name: "MLTransformNotReadyException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace MLTransformNotReadyException {
    function isa(o: any): o is MLTransformNotReadyException;
}
/**
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 */
export interface SchemaColumn {
    __type?: "SchemaColumn";
    /**
     * <p>The type of data in the column.</p>
     */
    DataType?: string;
    /**
     * <p>The name of the column.</p>
     */
    Name?: string;
}
export declare namespace SchemaColumn {
    function isa(o: any): o is SchemaColumn;
}
export declare enum SortDirectionType {
    ASCENDING = "ASCENDING",
    DESCENDING = "DESCENDING"
}
export interface StartExportLabelsTaskRunRequest {
    __type?: "StartExportLabelsTaskRunRequest";
    /**
     * <p>The Amazon S3 path where you export the labels.</p>
     */
    OutputS3Path: string | undefined;
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId: string | undefined;
}
export declare namespace StartExportLabelsTaskRunRequest {
    function isa(o: any): o is StartExportLabelsTaskRunRequest;
}
export interface StartExportLabelsTaskRunResponse {
    __type?: "StartExportLabelsTaskRunResponse";
    /**
     * <p>The unique identifier for the task run.</p>
     */
    TaskRunId?: string;
}
export declare namespace StartExportLabelsTaskRunResponse {
    function isa(o: any): o is StartExportLabelsTaskRunResponse;
}
export interface StartImportLabelsTaskRunRequest {
    __type?: "StartImportLabelsTaskRunRequest";
    /**
     * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
     *       labels.</p>
     */
    InputS3Path: string | undefined;
    /**
     * <p>Indicates whether to overwrite your existing labels.</p>
     */
    ReplaceAllLabels?: boolean;
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId: string | undefined;
}
export declare namespace StartImportLabelsTaskRunRequest {
    function isa(o: any): o is StartImportLabelsTaskRunRequest;
}
export interface StartImportLabelsTaskRunResponse {
    __type?: "StartImportLabelsTaskRunResponse";
    /**
     * <p>The unique identifier for the task run.</p>
     */
    TaskRunId?: string;
}
export declare namespace StartImportLabelsTaskRunResponse {
    function isa(o: any): o is StartImportLabelsTaskRunResponse;
}
export interface StartMLEvaluationTaskRunRequest {
    __type?: "StartMLEvaluationTaskRunRequest";
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId: string | undefined;
}
export declare namespace StartMLEvaluationTaskRunRequest {
    function isa(o: any): o is StartMLEvaluationTaskRunRequest;
}
export interface StartMLEvaluationTaskRunResponse {
    __type?: "StartMLEvaluationTaskRunResponse";
    /**
     * <p>The unique identifier associated with this run.</p>
     */
    TaskRunId?: string;
}
export declare namespace StartMLEvaluationTaskRunResponse {
    function isa(o: any): o is StartMLEvaluationTaskRunResponse;
}
export interface StartMLLabelingSetGenerationTaskRunRequest {
    __type?: "StartMLLabelingSetGenerationTaskRunRequest";
    /**
     * <p>The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling
     *       set.</p>
     */
    OutputS3Path: string | undefined;
    /**
     * <p>The unique identifier of the machine learning transform.</p>
     */
    TransformId: string | undefined;
}
export declare namespace StartMLLabelingSetGenerationTaskRunRequest {
    function isa(o: any): o is StartMLLabelingSetGenerationTaskRunRequest;
}
export interface StartMLLabelingSetGenerationTaskRunResponse {
    __type?: "StartMLLabelingSetGenerationTaskRunResponse";
    /**
     * <p>The unique run identifier that is associated with this task run.</p>
     */
    TaskRunId?: string;
}
export declare namespace StartMLLabelingSetGenerationTaskRunResponse {
    function isa(o: any): o is StartMLLabelingSetGenerationTaskRunResponse;
}
/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 */
export interface TaskRun {
    __type?: "TaskRun";
    /**
     * <p>The last point in time that the requested task run was completed.</p>
     */
    CompletedOn?: Date;
    /**
     * <p>The list of error strings associated with this task run.</p>
     */
    ErrorString?: string;
    /**
     * <p>The amount of time (in seconds) that the task run consumed resources.</p>
     */
    ExecutionTime?: number;
    /**
     * <p>The last point in time that the requested task run was updated.</p>
     */
    LastModifiedOn?: Date;
    /**
     * <p>The names of the log group for secure logging, associated with this task run.</p>
     */
    LogGroupName?: string;
    /**
     * <p>Specifies configuration properties associated with this task run.</p>
     */
    Properties?: TaskRunProperties;
    /**
     * <p>The date and time that this task run started.</p>
     */
    StartedOn?: Date;
    /**
     * <p>The current status of the requested task run.</p>
     */
    Status?: TaskStatusType | string;
    /**
     * <p>The unique identifier for this task run.</p>
     */
    TaskRunId?: string;
    /**
     * <p>The unique identifier for the transform.</p>
     */
    TransformId?: string;
}
export declare namespace TaskRun {
    function isa(o: any): o is TaskRun;
}
/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunFilterCriteria {
    __type?: "TaskRunFilterCriteria";
    /**
     * <p>Filter on task runs started after this date.</p>
     */
    StartedAfter?: Date;
    /**
     * <p>Filter on task runs started before this date.</p>
     */
    StartedBefore?: Date;
    /**
     * <p>The current status of the task run.</p>
     */
    Status?: TaskStatusType | string;
    /**
     * <p>The type of task run.</p>
     */
    TaskRunType?: TaskType | string;
}
export declare namespace TaskRunFilterCriteria {
    function isa(o: any): o is TaskRunFilterCriteria;
}
/**
 * <p>The configuration properties for the task run.</p>
 */
export interface TaskRunProperties {
    __type?: "TaskRunProperties";
    /**
     * <p>The configuration properties for an exporting labels task run.</p>
     */
    ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;
    /**
     * <p>The configuration properties for a find matches task run.</p>
     */
    FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
    /**
     * <p>The configuration properties for an importing labels task run.</p>
     */
    ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;
    /**
     * <p>The configuration properties for a labeling set generation task run.</p>
     */
    LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;
    /**
     * <p>The type of task run.</p>
     */
    TaskType?: TaskType | string;
}
export declare namespace TaskRunProperties {
    function isa(o: any): o is TaskRunProperties;
}
export declare enum TaskRunSortColumnType {
    STARTED = "STARTED",
    STATUS = "STATUS",
    TASK_RUN_TYPE = "TASK_RUN_TYPE"
}
/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunSortCriteria {
    __type?: "TaskRunSortCriteria";
    /**
     * <p>The column to be used to sort the list of task runs for the machine learning
     *       transform.</p>
     */
    Column: TaskRunSortColumnType | string | undefined;
    /**
     * <p>The sort direction to be used to sort the list of task runs for the machine learning
     *       transform.</p>
     */
    SortDirection: SortDirectionType | string | undefined;
}
export declare namespace TaskRunSortCriteria {
    function isa(o: any): o is TaskRunSortCriteria;
}
export declare enum TaskStatusType {
    FAILED = "FAILED",
    RUNNING = "RUNNING",
    STARTING = "STARTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING",
    SUCCEEDED = "SUCCEEDED",
    TIMEOUT = "TIMEOUT"
}
export declare enum TaskType {
    EVALUATION = "EVALUATION",
    EXPORT_LABELS = "EXPORT_LABELS",
    FIND_MATCHES = "FIND_MATCHES",
    IMPORT_LABELS = "IMPORT_LABELS",
    LABELING_SET_GENERATION = "LABELING_SET_GENERATION"
}
/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 */
export interface TransformFilterCriteria {
    __type?: "TransformFilterCriteria";
    /**
     * <p>The time and date after which the transforms were created.</p>
     */
    CreatedAfter?: Date;
    /**
     * <p>The time and date before which the transforms were created.</p>
     */
    CreatedBefore?: Date;
    /**
     * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
     */
    GlueVersion?: string;
    /**
     * <p>Filter on transforms last modified after this date.</p>
     */
    LastModifiedAfter?: Date;
    /**
     * <p>Filter on transforms last modified before this date.</p>
     */
    LastModifiedBefore?: Date;
    /**
     * <p>A unique transform name that is used to filter the machine learning transforms.</p>
     */
    Name?: string;
    /**
     * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
     *       object is an array of key-value pairs representing the schema this transform accepts, where
     *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
     *       such as an integer or string. Has an upper bound of 100 columns.</p>
     */
    Schema?: Array<SchemaColumn>;
    /**
     * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
     */
    Status?: TransformStatusType | string;
    /**
     * <p>The type of machine learning transform that is used to filter the machine learning
     *       transforms.</p>
     */
    TransformType?: TransformType | string;
}
export declare namespace TransformFilterCriteria {
    function isa(o: any): o is TransformFilterCriteria;
}
/**
 * <p>The algorithm-specific parameters that are associated with the machine learning
 *       transform.</p>
 */
export interface TransformParameters {
    __type?: "TransformParameters";
    /**
     * <p>The parameters for the find matches algorithm.</p>
     */
    FindMatchesParameters?: FindMatchesParameters;
    /**
     * <p>The type of machine learning transform.</p>
     * 	        <p>For information about the types of machine learning transforms, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html">Creating Machine Learning Transforms</a>.</p>
     */
    TransformType: TransformType | string | undefined;
}
export declare namespace TransformParameters {
    function isa(o: any): o is TransformParameters;
}
export declare enum TransformSortColumnType {
    CREATED = "CREATED",
    LAST_MODIFIED = "LAST_MODIFIED",
    NAME = "NAME",
    STATUS = "STATUS",
    TRANSFORM_TYPE = "TRANSFORM_TYPE"
}
/**
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 */
export interface TransformSortCriteria {
    __type?: "TransformSortCriteria";
    /**
     * <p>The column to be used in the sorting criteria that are associated with the machine
     *       learning transform.</p>
     */
    Column: TransformSortColumnType | string | undefined;
    /**
     * <p>The sort direction to be used in the sorting criteria that are associated with the machine
     *       learning transform.</p>
     */
    SortDirection: SortDirectionType | string | undefined;
}
export declare namespace TransformSortCriteria {
    function isa(o: any): o is TransformSortCriteria;
}
export declare enum TransformStatusType {
    DELETING = "DELETING",
    NOT_READY = "NOT_READY",
    READY = "READY"
}
export declare enum TransformType {
    FIND_MATCHES = "FIND_MATCHES"
}
export interface UpdateMLTransformRequest {
    __type?: "UpdateMLTransformRequest";
    /**
     * <p>A description of the transform. The default is an empty string.</p>
     */
    Description?: string;
    /**
     * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
     */
    GlueVersion?: string;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
     *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
     *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
     *         page</a>. </p>
     *
     *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>The unique name that you gave the transform when you created it.</p>
     */
    Name?: string;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The configuration parameters that are specific to the transform type (algorithm) used.
     *       Conditionally dependent on the transform type.</p>
     */
    Parameters?: TransformParameters;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
     *       permissions.</p>
     */
    Role?: string;
    /**
     * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
     */
    Timeout?: number;
    /**
     * <p>A unique identifier that was generated when the transform was created.</p>
     */
    TransformId: string | undefined;
    /**
     * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace UpdateMLTransformRequest {
    function isa(o: any): o is UpdateMLTransformRequest;
}
export interface UpdateMLTransformResponse {
    __type?: "UpdateMLTransformResponse";
    /**
     * <p>The unique identifier for the transform that was updated.</p>
     */
    TransformId?: string;
}
export declare namespace UpdateMLTransformResponse {
    function isa(o: any): o is UpdateMLTransformResponse;
}
/**
 * <p>Defines an action to be initiated by a trigger.</p>
 */
export interface Action {
    __type?: "Action";
    /**
     * <p>The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.</p>
     *          <p>You can specify arguments here that your own job-execution script
     *       consumes, as well as arguments that AWS Glue itself consumes.</p>
     *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
     *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
     */
    Arguments?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the crawler to be used with this action.</p>
     */
    CrawlerName?: string;
    /**
     * <p>The name of a job to be executed.</p>
     */
    JobName?: string;
    /**
     * <p>Specifies configuration properties of a job run notification.</p>
     */
    NotificationProperty?: NotificationProperty;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
     *       action.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
     *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
     *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
     */
    Timeout?: number;
}
export declare namespace Action {
    function isa(o: any): o is Action;
}
export interface BatchGetJobsRequest {
    __type?: "BatchGetJobsRequest";
    /**
     * <p>A list of job names, which might be the names returned from the <code>ListJobs</code>
     *       operation.</p>
     */
    JobNames: Array<string> | undefined;
}
export declare namespace BatchGetJobsRequest {
    function isa(o: any): o is BatchGetJobsRequest;
}
export interface BatchGetJobsResponse {
    __type?: "BatchGetJobsResponse";
    /**
     * <p>A list of job definitions.</p>
     */
    Jobs?: Array<Job>;
    /**
     * <p>A list of names of jobs not found.</p>
     */
    JobsNotFound?: Array<string>;
}
export declare namespace BatchGetJobsResponse {
    function isa(o: any): o is BatchGetJobsResponse;
}
export interface BatchGetTriggersRequest {
    __type?: "BatchGetTriggersRequest";
    /**
     * <p>A list of trigger names, which may be the names returned from the <code>ListTriggers</code> operation.</p>
     */
    TriggerNames: Array<string> | undefined;
}
export declare namespace BatchGetTriggersRequest {
    function isa(o: any): o is BatchGetTriggersRequest;
}
export interface BatchGetTriggersResponse {
    __type?: "BatchGetTriggersResponse";
    /**
     * <p>A list of trigger definitions.</p>
     */
    Triggers?: Array<Trigger>;
    /**
     * <p>A list of names of triggers not found.</p>
     */
    TriggersNotFound?: Array<string>;
}
export declare namespace BatchGetTriggersResponse {
    function isa(o: any): o is BatchGetTriggersResponse;
}
export interface BatchGetWorkflowsRequest {
    __type?: "BatchGetWorkflowsRequest";
    /**
     * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
     */
    IncludeGraph?: boolean;
    /**
     * <p>A list of workflow names, which may be the names returned from the <code>ListWorkflows</code> operation.</p>
     */
    Names: Array<string> | undefined;
}
export declare namespace BatchGetWorkflowsRequest {
    function isa(o: any): o is BatchGetWorkflowsRequest;
}
export interface BatchGetWorkflowsResponse {
    __type?: "BatchGetWorkflowsResponse";
    /**
     * <p>A list of names of workflows not found.</p>
     */
    MissingWorkflows?: Array<string>;
    /**
     * <p>A list of workflow resource metadata.</p>
     */
    Workflows?: Array<Workflow>;
}
export declare namespace BatchGetWorkflowsResponse {
    function isa(o: any): o is BatchGetWorkflowsResponse;
}
/**
 * <p>Records an error that occurred when attempting to stop a
 *       specified job run.</p>
 */
export interface BatchStopJobRunError {
    __type?: "BatchStopJobRunError";
    /**
     * <p>Specifies details about the error that was encountered.</p>
     */
    ErrorDetail?: ErrorDetail;
    /**
     * <p>The name of the job definition that is used in the job run in question.</p>
     */
    JobName?: string;
    /**
     * <p>The <code>JobRunId</code> of the job run in question.</p>
     */
    JobRunId?: string;
}
export declare namespace BatchStopJobRunError {
    function isa(o: any): o is BatchStopJobRunError;
}
export interface BatchStopJobRunRequest {
    __type?: "BatchStopJobRunRequest";
    /**
     * <p>The name of the job definition for which to stop job runs.</p>
     */
    JobName: string | undefined;
    /**
     * <p>A list of the <code>JobRunIds</code> that should be stopped for that job
     *       definition.</p>
     */
    JobRunIds: Array<string> | undefined;
}
export declare namespace BatchStopJobRunRequest {
    function isa(o: any): o is BatchStopJobRunRequest;
}
export interface BatchStopJobRunResponse {
    __type?: "BatchStopJobRunResponse";
    /**
     * <p>A list of the errors that were encountered in trying to stop <code>JobRuns</code>,
     *       including the <code>JobRunId</code> for which each error was encountered and details about the
     *       error.</p>
     */
    Errors?: Array<BatchStopJobRunError>;
    /**
     * <p>A list of the JobRuns that were successfully submitted for stopping.</p>
     */
    SuccessfulSubmissions?: Array<BatchStopJobRunSuccessfulSubmission>;
}
export declare namespace BatchStopJobRunResponse {
    function isa(o: any): o is BatchStopJobRunResponse;
}
/**
 * <p>Records a successful request to stop a specified <code>JobRun</code>.</p>
 */
export interface BatchStopJobRunSuccessfulSubmission {
    __type?: "BatchStopJobRunSuccessfulSubmission";
    /**
     * <p>The name of the job definition used in the job run that was stopped.</p>
     */
    JobName?: string;
    /**
     * <p>The <code>JobRunId</code> of the job run that was stopped.</p>
     */
    JobRunId?: string;
}
export declare namespace BatchStopJobRunSuccessfulSubmission {
    function isa(o: any): o is BatchStopJobRunSuccessfulSubmission;
}
/**
 * <p>Defines a condition under which a trigger fires.</p>
 */
export interface Condition {
    __type?: "Condition";
    /**
     * <p>The state of the crawler to which this condition applies.</p>
     */
    CrawlState?: CrawlState | string;
    /**
     * <p>The name of the crawler to which this condition applies.</p>
     */
    CrawlerName?: string;
    /**
     * <p>The name of the job whose <code>JobRuns</code> this condition applies to, and on which
     *       this trigger waits.</p>
     */
    JobName?: string;
    /**
     * <p>A logical operator.</p>
     */
    LogicalOperator?: LogicalOperator | string;
    /**
     * <p>The condition state. Currently, the values supported are <code>SUCCEEDED</code>,
     *       <code>STOPPED</code>, <code>TIMEOUT</code>, and <code>FAILED</code>.</p>
     */
    State?: JobRunState | string;
}
export declare namespace Condition {
    function isa(o: any): o is Condition;
}
/**
 * <p>Specifies the connections used by a job.</p>
 */
export interface ConnectionsList {
    __type?: "ConnectionsList";
    /**
     * <p>A list of connections used by the job.</p>
     */
    Connections?: Array<string>;
}
export declare namespace ConnectionsList {
    function isa(o: any): o is ConnectionsList;
}
/**
 * <p>The details of a crawl in the workflow.</p>
 */
export interface Crawl {
    __type?: "Crawl";
    /**
     * <p>The date and time on which the crawl completed.</p>
     */
    CompletedOn?: Date;
    /**
     * <p>The error message associated with the crawl.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The log group associated with the crawl.</p>
     */
    LogGroup?: string;
    /**
     * <p>The log stream associated with the crawl.</p>
     */
    LogStream?: string;
    /**
     * <p>The date and time on which the crawl started.</p>
     */
    StartedOn?: Date;
    /**
     * <p>The state of the crawler.</p>
     */
    State?: CrawlState | string;
}
export declare namespace Crawl {
    function isa(o: any): o is Crawl;
}
export declare enum CrawlState {
    CANCELLED = "CANCELLED",
    FAILED = "FAILED",
    RUNNING = "RUNNING",
    SUCCEEDED = "SUCCEEDED"
}
/**
 * <p>The details of a Crawler node present in the workflow.</p>
 */
export interface CrawlerNodeDetails {
    __type?: "CrawlerNodeDetails";
    /**
     * <p>A list of crawls represented by the crawl node.</p>
     */
    Crawls?: Array<Crawl>;
}
export declare namespace CrawlerNodeDetails {
    function isa(o: any): o is CrawlerNodeDetails;
}
export interface CreateJobRequest {
    __type?: "CreateJobRequest";
    /**
     * <p>This parameter is deprecated. Use <code>MaxCapacity</code> instead.</p>
     *
     *          <p>The number of AWS Glue data processing units (DPUs) to allocate to this Job. You can
     *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
     *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
     *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
     *       page</a>.</p>
     */
    AllocatedCapacity?: number;
    /**
     * <p>The <code>JobCommand</code> that executes this job.</p>
     */
    Command: JobCommand | undefined;
    /**
     * <p>The connections used for this job.</p>
     */
    Connections?: ConnectionsList;
    /**
     * <p>The default arguments for this job.</p>
     *          <p>You can specify arguments here that your own job-execution script
     *       consumes, as well as arguments that AWS Glue itself consumes.</p>
     *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
     *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
     */
    DefaultArguments?: {
        [key: string]: string;
    };
    /**
     * <p>Description of the job being defined.</p>
     */
    Description?: string;
    /**
     * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
     *       for this job.</p>
     */
    ExecutionProperty?: ExecutionProperty;
    /**
     * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
     *
     *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
     *
     * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
     */
    GlueVersion?: string;
    /**
     * <p>This field is reserved for future use.</p>
     */
    LogUri?: string;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
     *        of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     *        For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
     *          pricing page</a>.</p>
     *
     * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
     *
     *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
     *       running a Python shell job or an Apache Spark ETL job:</p>
     *          <ul>
     *             <li>
     *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
     *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
     *             </li>
     *             <li>
     *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
     *             </li>
     *          </ul>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry this job if it fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>The name you assign to this job definition. It must be unique in your account.</p>
     */
    Name: string | undefined;
    /**
     * <p>Specifies configuration properties of a job notification.</p>
     */
    NotificationProperty?: NotificationProperty;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
     *
     * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
     */
    Role: string | undefined;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
     *       job.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>The tags to use with this job. You may use tags to limit access to the job. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The job timeout in minutes.  This is the maximum time that a job run
     *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
     *       status. The default is 2,880 minutes (48 hours).</p>
     */
    Timeout?: number;
    /**
     * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace CreateJobRequest {
    function isa(o: any): o is CreateJobRequest;
}
export interface CreateJobResponse {
    __type?: "CreateJobResponse";
    /**
     * <p>The unique name that was provided for this job definition.</p>
     */
    Name?: string;
}
export declare namespace CreateJobResponse {
    function isa(o: any): o is CreateJobResponse;
}
export interface CreateTriggerRequest {
    __type?: "CreateTriggerRequest";
    /**
     * <p>The actions initiated by this trigger when it fires.</p>
     */
    Actions: Array<Action> | undefined;
    /**
     * <p>A description of the new trigger.</p>
     */
    Description?: string;
    /**
     * <p>The name of the trigger.</p>
     */
    Name: string | undefined;
    /**
     * <p>A predicate to specify when the new trigger should fire.</p>
     *          <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
     */
    Predicate?: Predicate;
    /**
     * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
     *       something every day at 12:15 UTC, you would specify:
     *       <code>cron(15 12 * * ? *)</code>.</p>
     *          <p>This field is required when the trigger type is SCHEDULED.</p>
     */
    Schedule?: string;
    /**
     * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code>
     *       triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
     */
    StartOnCreation?: boolean;
    /**
     * <p>The tags to use with this trigger. You may use tags to limit access to the trigger.
     *       For more information about tags in AWS Glue, see
     *       <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS
     *         Glue</a> in the developer guide. </p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the new trigger.</p>
     */
    Type: TriggerType | string | undefined;
    /**
     * <p>The name of the workflow associated with the trigger.</p>
     */
    WorkflowName?: string;
}
export declare namespace CreateTriggerRequest {
    function isa(o: any): o is CreateTriggerRequest;
}
export interface CreateTriggerResponse {
    __type?: "CreateTriggerResponse";
    /**
     * <p>The name of the trigger.</p>
     */
    Name?: string;
}
export declare namespace CreateTriggerResponse {
    function isa(o: any): o is CreateTriggerResponse;
}
export interface CreateWorkflowRequest {
    __type?: "CreateWorkflowRequest";
    /**
     * <p>A collection of properties to be used as part of each execution of the workflow.</p>
     */
    DefaultRunProperties?: {
        [key: string]: string;
    };
    /**
     * <p>A description of the workflow.</p>
     */
    Description?: string;
    /**
     * <p>The name to be assigned to the workflow. It should be unique within your account.</p>
     */
    Name: string | undefined;
    /**
     * <p>The tags to be used with this workflow.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateWorkflowRequest {
    function isa(o: any): o is CreateWorkflowRequest;
}
export interface CreateWorkflowResponse {
    __type?: "CreateWorkflowResponse";
    /**
     * <p>The name of the workflow which was provided as part of the request.</p>
     */
    Name?: string;
}
export declare namespace CreateWorkflowResponse {
    function isa(o: any): o is CreateWorkflowResponse;
}
export interface DeleteJobRequest {
    __type?: "DeleteJobRequest";
    /**
     * <p>The name of the job definition to delete.</p>
     */
    JobName: string | undefined;
}
export declare namespace DeleteJobRequest {
    function isa(o: any): o is DeleteJobRequest;
}
export interface DeleteJobResponse {
    __type?: "DeleteJobResponse";
    /**
     * <p>The name of the job definition that was deleted.</p>
     */
    JobName?: string;
}
export declare namespace DeleteJobResponse {
    function isa(o: any): o is DeleteJobResponse;
}
export interface DeleteTriggerRequest {
    __type?: "DeleteTriggerRequest";
    /**
     * <p>The name of the trigger to delete.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteTriggerRequest {
    function isa(o: any): o is DeleteTriggerRequest;
}
export interface DeleteTriggerResponse {
    __type?: "DeleteTriggerResponse";
    /**
     * <p>The name of the trigger that was deleted.</p>
     */
    Name?: string;
}
export declare namespace DeleteTriggerResponse {
    function isa(o: any): o is DeleteTriggerResponse;
}
export interface DeleteWorkflowRequest {
    __type?: "DeleteWorkflowRequest";
    /**
     * <p>Name of the workflow to be deleted.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteWorkflowRequest {
    function isa(o: any): o is DeleteWorkflowRequest;
}
export interface DeleteWorkflowResponse {
    __type?: "DeleteWorkflowResponse";
    /**
     * <p>Name of the workflow specified in input.</p>
     */
    Name?: string;
}
export declare namespace DeleteWorkflowResponse {
    function isa(o: any): o is DeleteWorkflowResponse;
}
/**
 * <p>An edge represents a directed connection between two AWS Glue components which are part of the workflow the
 *       edge belongs to.</p>
 */
export interface Edge {
    __type?: "Edge";
    /**
     * <p>The unique of the node within the workflow where the edge ends.</p>
     */
    DestinationId?: string;
    /**
     * <p>The unique of the node within the workflow where the edge starts.</p>
     */
    SourceId?: string;
}
export declare namespace Edge {
    function isa(o: any): o is Edge;
}
/**
 * <p>An execution property of a job.</p>
 */
export interface ExecutionProperty {
    __type?: "ExecutionProperty";
    /**
     * <p>The maximum number of concurrent runs allowed for the job.
     *       The default is 1. An error is returned when this threshold is reached.
     *       The maximum value you can specify is controlled by a service limit.</p>
     */
    MaxConcurrentRuns?: number;
}
export declare namespace ExecutionProperty {
    function isa(o: any): o is ExecutionProperty;
}
export interface GetJobRequest {
    __type?: "GetJobRequest";
    /**
     * <p>The name of the job definition to retrieve.</p>
     */
    JobName: string | undefined;
}
export declare namespace GetJobRequest {
    function isa(o: any): o is GetJobRequest;
}
export interface GetJobResponse {
    __type?: "GetJobResponse";
    /**
     * <p>The requested job definition.</p>
     */
    Job?: Job;
}
export declare namespace GetJobResponse {
    function isa(o: any): o is GetJobResponse;
}
export interface GetJobRunRequest {
    __type?: "GetJobRunRequest";
    /**
     * <p>Name of the job definition being run.</p>
     */
    JobName: string | undefined;
    /**
     * <p>True if a list of predecessor runs should be returned.</p>
     */
    PredecessorsIncluded?: boolean;
    /**
     * <p>The ID of the job run.</p>
     */
    RunId: string | undefined;
}
export declare namespace GetJobRunRequest {
    function isa(o: any): o is GetJobRunRequest;
}
export interface GetJobRunResponse {
    __type?: "GetJobRunResponse";
    /**
     * <p>The requested job-run metadata.</p>
     */
    JobRun?: JobRun;
}
export declare namespace GetJobRunResponse {
    function isa(o: any): o is GetJobRunResponse;
}
export interface GetJobRunsRequest {
    __type?: "GetJobRunsRequest";
    /**
     * <p>The name of the job definition for which to retrieve all job runs.</p>
     */
    JobName: string | undefined;
    /**
     * <p>The maximum size of the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetJobRunsRequest {
    function isa(o: any): o is GetJobRunsRequest;
}
export interface GetJobRunsResponse {
    __type?: "GetJobRunsResponse";
    /**
     * <p>A list of job-run metadata objects.</p>
     */
    JobRuns?: Array<JobRun>;
    /**
     * <p>A continuation token, if not all requested job runs have been returned.</p>
     */
    NextToken?: string;
}
export declare namespace GetJobRunsResponse {
    function isa(o: any): o is GetJobRunsResponse;
}
export interface GetJobsRequest {
    __type?: "GetJobsRequest";
    /**
     * <p>The maximum size of the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetJobsRequest {
    function isa(o: any): o is GetJobsRequest;
}
export interface GetJobsResponse {
    __type?: "GetJobsResponse";
    /**
     * <p>A list of job definitions.</p>
     */
    Jobs?: Array<Job>;
    /**
     * <p>A continuation token, if not all job definitions have yet been returned.</p>
     */
    NextToken?: string;
}
export declare namespace GetJobsResponse {
    function isa(o: any): o is GetJobsResponse;
}
export interface GetTriggerRequest {
    __type?: "GetTriggerRequest";
    /**
     * <p>The name of the trigger to retrieve.</p>
     */
    Name: string | undefined;
}
export declare namespace GetTriggerRequest {
    function isa(o: any): o is GetTriggerRequest;
}
export interface GetTriggerResponse {
    __type?: "GetTriggerResponse";
    /**
     * <p>The requested trigger definition.</p>
     */
    Trigger?: Trigger;
}
export declare namespace GetTriggerResponse {
    function isa(o: any): o is GetTriggerResponse;
}
export interface GetTriggersRequest {
    __type?: "GetTriggersRequest";
    /**
     * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
     *       returned, and if there is no such trigger, all triggers are returned.</p>
     */
    DependentJobName?: string;
    /**
     * <p>The maximum size of the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetTriggersRequest {
    function isa(o: any): o is GetTriggersRequest;
}
export interface GetTriggersResponse {
    __type?: "GetTriggersResponse";
    /**
     * <p>A continuation token, if not all the requested triggers
     *       have yet been returned.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of triggers for the specified job.</p>
     */
    Triggers?: Array<Trigger>;
}
export declare namespace GetTriggersResponse {
    function isa(o: any): o is GetTriggersResponse;
}
export interface GetWorkflowRequest {
    __type?: "GetWorkflowRequest";
    /**
     * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
     */
    IncludeGraph?: boolean;
    /**
     * <p>The name of the workflow to retrieve.</p>
     */
    Name: string | undefined;
}
export declare namespace GetWorkflowRequest {
    function isa(o: any): o is GetWorkflowRequest;
}
export interface GetWorkflowResponse {
    __type?: "GetWorkflowResponse";
    /**
     * <p>The resource metadata for the workflow.</p>
     */
    Workflow?: Workflow;
}
export declare namespace GetWorkflowResponse {
    function isa(o: any): o is GetWorkflowResponse;
}
export interface GetWorkflowRunPropertiesRequest {
    __type?: "GetWorkflowRunPropertiesRequest";
    /**
     * <p>Name of the workflow which was run.</p>
     */
    Name: string | undefined;
    /**
     * <p>The ID of the workflow run whose run properties should be returned.</p>
     */
    RunId: string | undefined;
}
export declare namespace GetWorkflowRunPropertiesRequest {
    function isa(o: any): o is GetWorkflowRunPropertiesRequest;
}
export interface GetWorkflowRunPropertiesResponse {
    __type?: "GetWorkflowRunPropertiesResponse";
    /**
     * <p>The workflow run properties which were set during the specified run.</p>
     */
    RunProperties?: {
        [key: string]: string;
    };
}
export declare namespace GetWorkflowRunPropertiesResponse {
    function isa(o: any): o is GetWorkflowRunPropertiesResponse;
}
export interface GetWorkflowRunRequest {
    __type?: "GetWorkflowRunRequest";
    /**
     * <p>Specifies whether to include the workflow graph in response or not.</p>
     */
    IncludeGraph?: boolean;
    /**
     * <p>Name of the workflow being run.</p>
     */
    Name: string | undefined;
    /**
     * <p>The ID of the workflow run.</p>
     */
    RunId: string | undefined;
}
export declare namespace GetWorkflowRunRequest {
    function isa(o: any): o is GetWorkflowRunRequest;
}
export interface GetWorkflowRunResponse {
    __type?: "GetWorkflowRunResponse";
    /**
     * <p>The requested workflow run metadata.</p>
     */
    Run?: WorkflowRun;
}
export declare namespace GetWorkflowRunResponse {
    function isa(o: any): o is GetWorkflowRunResponse;
}
export interface GetWorkflowRunsRequest {
    __type?: "GetWorkflowRunsRequest";
    /**
     * <p>Specifies whether to include the workflow graph in response or not.</p>
     */
    IncludeGraph?: boolean;
    /**
     * <p>The maximum number of workflow runs to be included in the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>Name of the workflow whose metadata of runs should be returned.</p>
     */
    Name: string | undefined;
    /**
     * <p>The maximum size of the response.</p>
     */
    NextToken?: string;
}
export declare namespace GetWorkflowRunsRequest {
    function isa(o: any): o is GetWorkflowRunsRequest;
}
export interface GetWorkflowRunsResponse {
    __type?: "GetWorkflowRunsResponse";
    /**
     * <p>A continuation token, if not all requested workflow runs have been returned.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of workflow run metadata objects.</p>
     */
    Runs?: Array<WorkflowRun>;
}
export declare namespace GetWorkflowRunsResponse {
    function isa(o: any): o is GetWorkflowRunsResponse;
}
/**
 * <p>Specifies a job definition.</p>
 */
export interface Job {
    __type?: "Job";
    /**
     * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
     *
     *          <p>The number of AWS Glue data processing units (DPUs) allocated to runs of this job. You can
     *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
     *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
     *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
     *       page</a>.</p>
     * 	        <p></p>
     */
    AllocatedCapacity?: number;
    /**
     * <p>The <code>JobCommand</code> that executes this job.</p>
     */
    Command?: JobCommand;
    /**
     * <p>The connections used for this job.</p>
     */
    Connections?: ConnectionsList;
    /**
     * <p>The time and date that this job definition was created.</p>
     */
    CreatedOn?: Date;
    /**
     * <p>The default arguments for this job, specified as name-value pairs.</p>
     *          <p>You can specify arguments here that your own job-execution script
     *       consumes, as well as arguments that AWS Glue itself consumes.</p>
     *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
     *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
     */
    DefaultArguments?: {
        [key: string]: string;
    };
    /**
     * <p>A description of the job.</p>
     */
    Description?: string;
    /**
     * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
     *       for this job.</p>
     */
    ExecutionProperty?: ExecutionProperty;
    /**
     * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
     *
     *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
     *
     * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
     */
    GlueVersion?: string;
    /**
     * <p>The last point in time when this job definition was modified.</p>
     */
    LastModifiedOn?: Date;
    /**
     * <p>This field is reserved for future use.</p>
     */
    LogUri?: string;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
     *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
     *       pricing page</a>.</p>
     *
     * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
     *
     * 	        <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
     *       running a Python shell job or an Apache Spark ETL job:</p>
     *         <ul>
     *             <li>
     *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
     *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
     *             </li>
     *             <li>
     *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
     *             </li>
     *          </ul>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry this job after a JobRun fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>The name you assign to this job definition.</p>
     */
    Name?: string;
    /**
     * <p>Specifies configuration properties of a job notification.</p>
     */
    NotificationProperty?: NotificationProperty;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
     *
     * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
     */
    Role?: string;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
     *       job.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>The job timeout in minutes.  This is the maximum time that a job run
     *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
     *       status. The default is 2,880 minutes (48 hours).</p>
     */
    Timeout?: number;
    /**
     * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace Job {
    function isa(o: any): o is Job;
}
/**
 * <p>Specifies code executed when a job is run.</p>
 */
export interface JobCommand {
    __type?: "JobCommand";
    /**
     * <p>The name of the job command. For an Apache Spark ETL job, this must be
     *         <code>glueetl</code>. For a Python shell job, it must be <code>pythonshell</code>.</p>
     */
    Name?: string;
    /**
     * <p>The Python version being used to execute a Python shell job. Allowed values are 2 or 3.</p>
     */
    PythonVersion?: string;
    /**
     * <p>Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a
     *       job.</p>
     */
    ScriptLocation?: string;
}
export declare namespace JobCommand {
    function isa(o: any): o is JobCommand;
}
/**
 * <p>The details of a Job node present in the workflow.</p>
 */
export interface JobNodeDetails {
    __type?: "JobNodeDetails";
    /**
     * <p>The information for the job runs represented by the job node.</p>
     */
    JobRuns?: Array<JobRun>;
}
export declare namespace JobNodeDetails {
    function isa(o: any): o is JobNodeDetails;
}
/**
 * <p>Contains information about a job run.</p>
 */
export interface JobRun {
    __type?: "JobRun";
    /**
     * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
     *
     *          <p>The number of AWS Glue data processing units (DPUs) allocated to this JobRun.
     *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
     *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
     *         pricing page</a>.</p>
     */
    AllocatedCapacity?: number;
    /**
     * <p>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself.</p>
     *          <p>You can specify arguments here that your own job-execution script
     *       consumes, as well as arguments that AWS Glue itself consumes.</p>
     *          <p>For information about how to specify and consume your own job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
     *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
     */
    Arguments?: {
        [key: string]: string;
    };
    /**
     * <p>The number of the attempt to run this job.</p>
     */
    Attempt?: number;
    /**
     * <p>The date and time that this job run completed.</p>
     */
    CompletedOn?: Date;
    /**
     * <p>An error message associated with this job run.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The amount of time (in seconds) that the job run consumed resources.</p>
     */
    ExecutionTime?: number;
    /**
     * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
     *
     *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
     *
     * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
     */
    GlueVersion?: string;
    /**
     * <p>The ID of this job run.</p>
     */
    Id?: string;
    /**
     * <p>The name of the job definition being used in this run.</p>
     */
    JobName?: string;
    /**
     * <p>The current state of the job run.</p>
     */
    JobRunState?: JobRunState | string;
    /**
     * <p>The last time that this job run was modified.</p>
     */
    LastModifiedOn?: Date;
    /**
     * <p>The name of the log group for secure logging that can be server-side encrypted in Amazon
     *       CloudWatch using AWS KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the
     *       default encryption is <code>NONE</code>. If you add a role name and
     *       <code>SecurityConfiguration</code> name (in other words,
     *       <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security
     *       configuration is used to encrypt the log group.</p>
     */
    LogGroupName?: string;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
     *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     *       For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue
     *         pricing page</a>.</p>
     *
     *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
     *
     *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
     *       running a Python shell job or an Apache Spark ETL job:</p>
     *          <ul>
     *             <li>
     *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
     *         allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
     *             </li>
     *             <li>
     *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
     *             </li>
     *          </ul>
     */
    MaxCapacity?: number;
    /**
     * <p>Specifies configuration properties of a job run notification.</p>
     */
    NotificationProperty?: NotificationProperty;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
     *
     *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>A list of predecessors to this job run.</p>
     */
    PredecessorRuns?: Array<Predecessor>;
    /**
     * <p>The ID of the previous run of this job. For example, the <code>JobRunId</code> specified
     *       in the <code>StartJobRun</code> action.</p>
     */
    PreviousRunId?: string;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
     *       run.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>The date and time at which this job run was started.</p>
     */
    StartedOn?: Date;
    /**
     * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
     *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
     *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
     */
    Timeout?: number;
    /**
     * <p>The name of the trigger that started this job run.</p>
     */
    TriggerName?: string;
    /**
     * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     *          <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace JobRun {
    function isa(o: any): o is JobRun;
}
export declare enum JobRunState {
    FAILED = "FAILED",
    RUNNING = "RUNNING",
    STARTING = "STARTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING",
    SUCCEEDED = "SUCCEEDED",
    TIMEOUT = "TIMEOUT"
}
/**
 * <p>Specifies information used to update an existing job definition. The previous job
 *       definition is completely overwritten by this information.</p>
 */
export interface JobUpdate {
    __type?: "JobUpdate";
    /**
     * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
     *
     *          <p>The number of AWS Glue data processing units (DPUs) to allocate to this job. You can
     *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
     *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
     *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
     *       page</a>.</p>
     */
    AllocatedCapacity?: number;
    /**
     * <p>The <code>JobCommand</code> that executes this job (required).</p>
     */
    Command?: JobCommand;
    /**
     * <p>The connections used for this job.</p>
     */
    Connections?: ConnectionsList;
    /**
     * <p>The default arguments for this job.</p>
     *          <p>You can specify arguments here that your own job-execution script
     *       consumes, as well as arguments that AWS Glue itself consumes.</p>
     *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
     *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
     */
    DefaultArguments?: {
        [key: string]: string;
    };
    /**
     * <p>Description of the job being defined.</p>
     */
    Description?: string;
    /**
     * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
     *       for this job.</p>
     */
    ExecutionProperty?: ExecutionProperty;
    /**
     * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
     *
     *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
     */
    GlueVersion?: string;
    /**
     * <p>This field is reserved for future use.</p>
     */
    LogUri?: string;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
     *      of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p>
     *
     * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
     *
     *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
     *       running a Python shell job or an Apache Spark ETL job:</p>
     *
     *          <ul>
     *             <li>
     *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
     *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
     *             </li>
     *             <li>
     *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
     *             </li>
     *          </ul>
     */
    MaxCapacity?: number;
    /**
     * <p>The maximum number of times to retry this job if it fails.</p>
     */
    MaxRetries?: number;
    /**
     * <p>Specifies the configuration properties of a job notification.</p>
     */
    NotificationProperty?: NotificationProperty;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
     *
     *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job
     *       (required).</p>
     */
    Role?: string;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
     *       job.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>The job timeout in minutes.  This is the maximum time that a job run
     *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
     *       status. The default is 2,880 minutes (48 hours).</p>
     */
    Timeout?: number;
    /**
     * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     * 	        <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace JobUpdate {
    function isa(o: any): o is JobUpdate;
}
export interface ListJobsRequest {
    __type?: "ListJobsRequest";
    /**
     * <p>The maximum size of a list to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation request.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifies to return only these tagged resources.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListJobsRequest {
    function isa(o: any): o is ListJobsRequest;
}
export interface ListJobsResponse {
    __type?: "ListJobsResponse";
    /**
     * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
     */
    JobNames?: Array<string>;
    /**
     * <p>A continuation token, if the returned list does not contain the
     *       last metric available.</p>
     */
    NextToken?: string;
}
export declare namespace ListJobsResponse {
    function isa(o: any): o is ListJobsResponse;
}
export interface ListTriggersRequest {
    __type?: "ListTriggersRequest";
    /**
     * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
     *       is returned. If there is no such trigger, all triggers are returned.</p>
     */
    DependentJobName?: string;
    /**
     * <p>The maximum size of a list to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation request.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifies to return only these tagged resources.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTriggersRequest {
    function isa(o: any): o is ListTriggersRequest;
}
export interface ListTriggersResponse {
    __type?: "ListTriggersResponse";
    /**
     * <p>A continuation token, if the returned list does not contain the
     *       last metric available.</p>
     */
    NextToken?: string;
    /**
     * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
     */
    TriggerNames?: Array<string>;
}
export declare namespace ListTriggersResponse {
    function isa(o: any): o is ListTriggersResponse;
}
export interface ListWorkflowsRequest {
    __type?: "ListWorkflowsRequest";
    /**
     * <p>The maximum size of a list to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation request.</p>
     */
    NextToken?: string;
}
export declare namespace ListWorkflowsRequest {
    function isa(o: any): o is ListWorkflowsRequest;
}
export interface ListWorkflowsResponse {
    __type?: "ListWorkflowsResponse";
    /**
     * <p>A continuation token, if not all workflow names have been returned.</p>
     */
    NextToken?: string;
    /**
     * <p>List of names of workflows in the account.</p>
     */
    Workflows?: Array<string>;
}
export declare namespace ListWorkflowsResponse {
    function isa(o: any): o is ListWorkflowsResponse;
}
export declare enum Logical {
    AND = "AND",
    ANY = "ANY"
}
export declare enum LogicalOperator {
    EQUALS = "EQUALS"
}
/**
 * <p>A node represents an AWS Glue component like Trigger, Job etc. which is part of a workflow.</p>
 */
export interface Node {
    __type?: "Node";
    /**
     * <p>Details of the crawler when the node represents a crawler.</p>
     */
    CrawlerDetails?: CrawlerNodeDetails;
    /**
     * <p>Details of the Job when the node represents a Job.</p>
     */
    JobDetails?: JobNodeDetails;
    /**
     * <p>The name of the AWS Glue component represented by the node.</p>
     */
    Name?: string;
    /**
     * <p>Details of the Trigger when the node represents a Trigger.</p>
     */
    TriggerDetails?: TriggerNodeDetails;
    /**
     * <p>The type of AWS Glue component represented by the node.</p>
     */
    Type?: NodeType | string;
    /**
     * <p>The unique Id assigned to the node within the workflow.</p>
     */
    UniqueId?: string;
}
export declare namespace Node {
    function isa(o: any): o is Node;
}
export declare enum NodeType {
    CRAWLER = "CRAWLER",
    JOB = "JOB",
    TRIGGER = "TRIGGER"
}
/**
 * <p>Specifies configuration properties of a notification.</p>
 */
export interface NotificationProperty {
    __type?: "NotificationProperty";
    /**
     * <p>After a job run starts, the number of minutes to wait before
     *       sending a job run delay notification.</p>
     */
    NotifyDelayAfter?: number;
}
export declare namespace NotificationProperty {
    function isa(o: any): o is NotificationProperty;
}
/**
 * <p>A job run that was used in the predicate of a conditional trigger
 *       that triggered this job run.</p>
 */
export interface Predecessor {
    __type?: "Predecessor";
    /**
     * <p>The name of the job definition used by the predecessor job run.</p>
     */
    JobName?: string;
    /**
     * <p>The job-run ID of the predecessor job run.</p>
     */
    RunId?: string;
}
export declare namespace Predecessor {
    function isa(o: any): o is Predecessor;
}
/**
 * <p>Defines the predicate of the trigger, which determines when it fires.</p>
 */
export interface Predicate {
    __type?: "Predicate";
    /**
     * <p>A list of the conditions that determine when the trigger will fire.</p>
     */
    Conditions?: Array<Condition>;
    /**
     * <p>An optional field if only one condition is listed. If multiple conditions are listed, then
     *       this field is required.</p>
     */
    Logical?: Logical | string;
}
export declare namespace Predicate {
    function isa(o: any): o is Predicate;
}
export interface PutWorkflowRunPropertiesRequest {
    __type?: "PutWorkflowRunPropertiesRequest";
    /**
     * <p>Name of the workflow which was run.</p>
     */
    Name: string | undefined;
    /**
     * <p>The ID of the workflow run for which the run properties should be updated.</p>
     */
    RunId: string | undefined;
    /**
     * <p>The properties to put for the specified run.</p>
     */
    RunProperties: {
        [key: string]: string;
    } | undefined;
}
export declare namespace PutWorkflowRunPropertiesRequest {
    function isa(o: any): o is PutWorkflowRunPropertiesRequest;
}
export interface PutWorkflowRunPropertiesResponse {
    __type?: "PutWorkflowRunPropertiesResponse";
}
export declare namespace PutWorkflowRunPropertiesResponse {
    function isa(o: any): o is PutWorkflowRunPropertiesResponse;
}
export interface StartJobRunRequest {
    __type?: "StartJobRunRequest";
    /**
     * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
     *
     *          <p>The number of AWS Glue data processing units (DPUs) to allocate to this JobRun.
     *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
     *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     *       For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue
     *         pricing page</a>.</p>
     */
    AllocatedCapacity?: number;
    /**
     * <p>The job arguments specifically for this run. For this job run, they replace the default arguments set in the job definition itself.</p>
     *          <p>You can specify arguments here that your own job-execution script
     *       consumes, as well as arguments that AWS Glue itself consumes.</p>
     *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
     *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
     */
    Arguments?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the job definition to use.</p>
     */
    JobName: string | undefined;
    /**
     * <p>The ID of a previous <code>JobRun</code> to retry.</p>
     */
    JobRunId?: string;
    /**
     * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
     *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     *       For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue
     *         pricing page</a>.</p>
     *
     *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
     *
     *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
     *       running a Python shell job, or an Apache Spark ETL job:</p>
     *          <ul>
     *             <li>
     *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
     *         allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
     *             </li>
     *             <li>
     *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
     *             </li>
     *          </ul>
     */
    MaxCapacity?: number;
    /**
     * <p>Specifies configuration properties of a job run notification.</p>
     */
    NotificationProperty?: NotificationProperty;
    /**
     * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
     *
     *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
     */
    NumberOfWorkers?: number;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
     *       run.</p>
     */
    SecurityConfiguration?: string;
    /**
     * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
     *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
     *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
     */
    Timeout?: number;
    /**
     * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
     *          <ul>
     *             <li>
     *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
     *             </li>
     *             <li>
     *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
     *             </li>
     *          </ul>
     */
    WorkerType?: WorkerType | string;
}
export declare namespace StartJobRunRequest {
    function isa(o: any): o is StartJobRunRequest;
}
export interface StartJobRunResponse {
    __type?: "StartJobRunResponse";
    /**
     * <p>The ID assigned to this job run.</p>
     */
    JobRunId?: string;
}
export declare namespace StartJobRunResponse {
    function isa(o: any): o is StartJobRunResponse;
}
export interface StartTriggerRequest {
    __type?: "StartTriggerRequest";
    /**
     * <p>The name of the trigger to start.</p>
     */
    Name: string | undefined;
}
export declare namespace StartTriggerRequest {
    function isa(o: any): o is StartTriggerRequest;
}
export interface StartTriggerResponse {
    __type?: "StartTriggerResponse";
    /**
     * <p>The name of the trigger that was started.</p>
     */
    Name?: string;
}
export declare namespace StartTriggerResponse {
    function isa(o: any): o is StartTriggerResponse;
}
export interface StartWorkflowRunRequest {
    __type?: "StartWorkflowRunRequest";
    /**
     * <p>The name of the workflow to start.</p>
     */
    Name: string | undefined;
}
export declare namespace StartWorkflowRunRequest {
    function isa(o: any): o is StartWorkflowRunRequest;
}
export interface StartWorkflowRunResponse {
    __type?: "StartWorkflowRunResponse";
    /**
     * <p>An Id for the new run.</p>
     */
    RunId?: string;
}
export declare namespace StartWorkflowRunResponse {
    function isa(o: any): o is StartWorkflowRunResponse;
}
export interface StopTriggerRequest {
    __type?: "StopTriggerRequest";
    /**
     * <p>The name of the trigger to stop.</p>
     */
    Name: string | undefined;
}
export declare namespace StopTriggerRequest {
    function isa(o: any): o is StopTriggerRequest;
}
export interface StopTriggerResponse {
    __type?: "StopTriggerResponse";
    /**
     * <p>The name of the trigger that was stopped.</p>
     */
    Name?: string;
}
export declare namespace StopTriggerResponse {
    function isa(o: any): o is StopTriggerResponse;
}
/**
 * <p>Information about a specific trigger.</p>
 */
export interface Trigger {
    __type?: "Trigger";
    /**
     * <p>The actions initiated by this trigger.</p>
     */
    Actions?: Array<Action>;
    /**
     * <p>A description of this trigger.</p>
     */
    Description?: string;
    /**
     * <p>Reserved for future use.</p>
     */
    Id?: string;
    /**
     * <p>The name of the trigger.</p>
     */
    Name?: string;
    /**
     * <p>The predicate of this trigger, which defines when it will fire.</p>
     */
    Predicate?: Predicate;
    /**
     * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
     *       Schedules for Jobs and Crawlers</a>. For example, to run
     *       something every day at 12:15 UTC, you would specify:
     *       <code>cron(15 12 * * ? *)</code>.</p>
     */
    Schedule?: string;
    /**
     * <p>The current state of the trigger.</p>
     */
    State?: TriggerState | string;
    /**
     * <p>The type of trigger that this is.</p>
     */
    Type?: TriggerType | string;
    /**
     * <p>The name of the workflow associated with the trigger.</p>
     */
    WorkflowName?: string;
}
export declare namespace Trigger {
    function isa(o: any): o is Trigger;
}
/**
 * <p>The details of a Trigger node present in the workflow.</p>
 */
export interface TriggerNodeDetails {
    __type?: "TriggerNodeDetails";
    /**
     * <p>The information of the trigger represented by the trigger node.</p>
     */
    Trigger?: Trigger;
}
export declare namespace TriggerNodeDetails {
    function isa(o: any): o is TriggerNodeDetails;
}
export declare enum TriggerState {
    ACTIVATED = "ACTIVATED",
    ACTIVATING = "ACTIVATING",
    CREATED = "CREATED",
    CREATING = "CREATING",
    DEACTIVATED = "DEACTIVATED",
    DEACTIVATING = "DEACTIVATING",
    DELETING = "DELETING",
    UPDATING = "UPDATING"
}
export declare enum TriggerType {
    CONDITIONAL = "CONDITIONAL",
    ON_DEMAND = "ON_DEMAND",
    SCHEDULED = "SCHEDULED"
}
/**
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 */
export interface TriggerUpdate {
    __type?: "TriggerUpdate";
    /**
     * <p>The actions initiated by this trigger.</p>
     */
    Actions?: Array<Action>;
    /**
     * <p>A description of this trigger.</p>
     */
    Description?: string;
    /**
     * <p>Reserved for future use.</p>
     */
    Name?: string;
    /**
     * <p>The predicate of this trigger, which defines when it will fire.</p>
     */
    Predicate?: Predicate;
    /**
     * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
     *       Schedules for Jobs and Crawlers</a>. For example, to run
     *       something every day at 12:15 UTC, you would specify:
     *       <code>cron(15 12 * * ? *)</code>.</p>
     */
    Schedule?: string;
}
export declare namespace TriggerUpdate {
    function isa(o: any): o is TriggerUpdate;
}
export interface UpdateJobRequest {
    __type?: "UpdateJobRequest";
    /**
     * <p>The name of the job definition to update.</p>
     */
    JobName: string | undefined;
    /**
     * <p>Specifies the values with which to update the job definition.</p>
     */
    JobUpdate: JobUpdate | undefined;
}
export declare namespace UpdateJobRequest {
    function isa(o: any): o is UpdateJobRequest;
}
export interface UpdateJobResponse {
    __type?: "UpdateJobResponse";
    /**
     * <p>Returns the name of the updated job definition.</p>
     */
    JobName?: string;
}
export declare namespace UpdateJobResponse {
    function isa(o: any): o is UpdateJobResponse;
}
export interface UpdateTriggerRequest {
    __type?: "UpdateTriggerRequest";
    /**
     * <p>The name of the trigger to update.</p>
     */
    Name: string | undefined;
    /**
     * <p>The new values with which to update the trigger.</p>
     */
    TriggerUpdate: TriggerUpdate | undefined;
}
export declare namespace UpdateTriggerRequest {
    function isa(o: any): o is UpdateTriggerRequest;
}
export interface UpdateTriggerResponse {
    __type?: "UpdateTriggerResponse";
    /**
     * <p>The resulting trigger definition.</p>
     */
    Trigger?: Trigger;
}
export declare namespace UpdateTriggerResponse {
    function isa(o: any): o is UpdateTriggerResponse;
}
export interface UpdateWorkflowRequest {
    __type?: "UpdateWorkflowRequest";
    /**
     * <p>A collection of properties to be used as part of each execution of the workflow.</p>
     */
    DefaultRunProperties?: {
        [key: string]: string;
    };
    /**
     * <p>The description of the workflow.</p>
     */
    Description?: string;
    /**
     * <p>Name of the workflow to be updated.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateWorkflowRequest {
    function isa(o: any): o is UpdateWorkflowRequest;
}
export interface UpdateWorkflowResponse {
    __type?: "UpdateWorkflowResponse";
    /**
     * <p>The name of the workflow which was specified in input.</p>
     */
    Name?: string;
}
export declare namespace UpdateWorkflowResponse {
    function isa(o: any): o is UpdateWorkflowResponse;
}
/**
 * <p>A workflow represents a flow in which AWS Glue components should be executed to complete a logical
 *       task.</p>
 */
export interface Workflow {
    __type?: "Workflow";
    /**
     * <p>The date and time when the workflow was created.</p>
     */
    CreatedOn?: Date;
    /**
     * <p>A collection of properties to be used as part of each execution of the workflow.</p>
     */
    DefaultRunProperties?: {
        [key: string]: string;
    };
    /**
     * <p>A description of the workflow.</p>
     */
    Description?: string;
    /**
     * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed
     *       connections between them as edges.</p>
     */
    Graph?: WorkflowGraph;
    /**
     * <p>The date and time when the workflow was last modified.</p>
     */
    LastModifiedOn?: Date;
    /**
     * <p>The information about the last execution of the workflow.</p>
     */
    LastRun?: WorkflowRun;
    /**
     * <p>The name of the workflow representing the flow.</p>
     */
    Name?: string;
}
export declare namespace Workflow {
    function isa(o: any): o is Workflow;
}
/**
 * <p>A workflow graph represents the complete workflow containing all the AWS Glue components present in the
 *       workflow and all the directed connections between them.</p>
 */
export interface WorkflowGraph {
    __type?: "WorkflowGraph";
    /**
     * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
     */
    Edges?: Array<Edge>;
    /**
     * <p>A list of the the AWS Glue components belong to the workflow represented as nodes.</p>
     */
    Nodes?: Array<Node>;
}
export declare namespace WorkflowGraph {
    function isa(o: any): o is WorkflowGraph;
}
/**
 * <p>A workflow run is an execution of a workflow providing all the runtime information.</p>
 */
export interface WorkflowRun {
    __type?: "WorkflowRun";
    /**
     * <p>The date and time when the workflow run completed.</p>
     */
    CompletedOn?: Date;
    /**
     * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed
     *       connections between them as edges.</p>
     */
    Graph?: WorkflowGraph;
    /**
     * <p>Name of the workflow which was executed.</p>
     */
    Name?: string;
    /**
     * <p>The date and time when the workflow run was started.</p>
     */
    StartedOn?: Date;
    /**
     * <p>The statistics of the run.</p>
     */
    Statistics?: WorkflowRunStatistics;
    /**
     * <p>The status of the workflow run.</p>
     */
    Status?: WorkflowRunStatus | string;
    /**
     * <p>The ID of this workflow run.</p>
     */
    WorkflowRunId?: string;
    /**
     * <p>The workflow run properties which were set during the run.</p>
     */
    WorkflowRunProperties?: {
        [key: string]: string;
    };
}
export declare namespace WorkflowRun {
    function isa(o: any): o is WorkflowRun;
}
/**
 * <p>Workflow run statistics provides statistics about the workflow run.</p>
 */
export interface WorkflowRunStatistics {
    __type?: "WorkflowRunStatistics";
    /**
     * <p>Total number of Actions which have failed.</p>
     */
    FailedActions?: number;
    /**
     * <p>Total number Actions in running state.</p>
     */
    RunningActions?: number;
    /**
     * <p>Total number of Actions which have stopped.</p>
     */
    StoppedActions?: number;
    /**
     * <p>Total number of Actions which have succeeded.</p>
     */
    SucceededActions?: number;
    /**
     * <p>Total number of Actions which timed out.</p>
     */
    TimeoutActions?: number;
    /**
     * <p>Total number of Actions in the workflow run.</p>
     */
    TotalActions?: number;
}
export declare namespace WorkflowRunStatistics {
    function isa(o: any): o is WorkflowRunStatistics;
}
export declare enum WorkflowRunStatus {
    COMPLETED = "COMPLETED",
    RUNNING = "RUNNING"
}
export interface BatchGetCrawlersRequest {
    __type?: "BatchGetCrawlersRequest";
    /**
     * <p>A list of crawler names, which might be the names returned from the
     *         <code>ListCrawlers</code> operation.</p>
     */
    CrawlerNames: Array<string> | undefined;
}
export declare namespace BatchGetCrawlersRequest {
    function isa(o: any): o is BatchGetCrawlersRequest;
}
export interface BatchGetCrawlersResponse {
    __type?: "BatchGetCrawlersResponse";
    /**
     * <p>A list of crawler definitions.</p>
     */
    Crawlers?: Array<Crawler>;
    /**
     * <p>A list of names of crawlers that were not found.</p>
     */
    CrawlersNotFound?: Array<string>;
}
export declare namespace BatchGetCrawlersResponse {
    function isa(o: any): o is BatchGetCrawlersResponse;
}
/**
 * <p>Specifies a table definition in the AWS Glue Data Catalog.</p>
 */
export interface CatalogEntry {
    __type?: "CatalogEntry";
    /**
     * <p>The database in which the table metadata resides.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>The name of the table in question.</p>
     */
    TableName: string | undefined;
}
export declare namespace CatalogEntry {
    function isa(o: any): o is CatalogEntry;
}
/**
 * <p>Specifies an AWS Glue Data Catalog target.</p>
 */
export interface CatalogTarget {
    __type?: "CatalogTarget";
    /**
     * <p>The name of the database to be synchronized.</p>
     */
    DatabaseName: string | undefined;
    /**
     * <p>A list of the tables to be synchronized.</p>
     */
    Tables: Array<string> | undefined;
}
export declare namespace CatalogTarget {
    function isa(o: any): o is CatalogTarget;
}
/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is
 *       in a format it can handle. If it is, the classifier creates a schema in the form of a
 *         <code>StructType</code> object that matches that data format.</p>
 *          <p>You can use the standard classifiers that AWS Glue provides, or you can write your own
 *       classifiers to best categorize your data sources and specify the appropriate schemas to use
 *       for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier,
 *       a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one
 *       of the fields in the <code>Classifier</code> object.</p>
 */
export interface Classifier {
    __type?: "Classifier";
    /**
     * <p>A classifier for comma-separated values (CSV).</p>
     */
    CsvClassifier?: CsvClassifier;
    /**
     * <p>A classifier that uses <code>grok</code>.</p>
     */
    GrokClassifier?: GrokClassifier;
    /**
     * <p>A classifier for JSON content.</p>
     */
    JsonClassifier?: JsonClassifier;
    /**
     * <p>A classifier for XML content.</p>
     */
    XMLClassifier?: XMLClassifier;
}
export declare namespace Classifier {
    function isa(o: any): o is Classifier;
}
/**
 * <p>Represents a directional edge in a directed acyclic graph (DAG).</p>
 */
export interface CodeGenEdge {
    __type?: "CodeGenEdge";
    /**
     * <p>The ID of the node at which the edge starts.</p>
     */
    Source: string | undefined;
    /**
     * <p>The ID of the node at which the edge ends.</p>
     */
    Target: string | undefined;
    /**
     * <p>The target of the edge.</p>
     */
    TargetParameter?: string;
}
export declare namespace CodeGenEdge {
    function isa(o: any): o is CodeGenEdge;
}
/**
 * <p>Represents a node in a directed acyclic graph (DAG)</p>
 */
export interface CodeGenNode {
    __type?: "CodeGenNode";
    /**
     * <p>Properties of the node, in the form of name-value pairs.</p>
     */
    Args: Array<CodeGenNodeArg> | undefined;
    /**
     * <p>A node identifier that is unique within the node's graph.</p>
     */
    Id: string | undefined;
    /**
     * <p>The line number of the node.</p>
     */
    LineNumber?: number;
    /**
     * <p>The type of node that this is.</p>
     */
    NodeType: string | undefined;
}
export declare namespace CodeGenNode {
    function isa(o: any): o is CodeGenNode;
}
/**
 * <p>An argument or property of a node.</p>
 */
export interface CodeGenNodeArg {
    __type?: "CodeGenNodeArg";
    /**
     * <p>The name of the argument or property.</p>
     */
    Name: string | undefined;
    /**
     * <p>True if the value is used as a parameter.</p>
     */
    Param?: boolean;
    /**
     * <p>The value of the argument or property.</p>
     */
    Value: string | undefined;
}
export declare namespace CodeGenNodeArg {
    function isa(o: any): o is CodeGenNodeArg;
}
/**
 * <p>Specifies a crawler program that examines a data source and uses classifiers to try to
 *       determine its schema. If successful, the crawler records metadata concerning the data source
 *       in the AWS Glue Data Catalog.</p>
 */
export interface Crawler {
    __type?: "Crawler";
    /**
     * <p>A list of UTF-8 strings that specify the custom classifiers that are associated
     *      with the crawler.</p>
     */
    Classifiers?: Array<string>;
    /**
     * <p>Crawler configuration information. This versioned JSON string allows users
     *         to specify aspects of a crawler's behavior.
     *         For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
     */
    Configuration?: string;
    /**
     * <p>If the crawler is running, contains the total time elapsed since the last crawl
     *       began.</p>
     */
    CrawlElapsedTime?: number;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
     *       crawler.</p>
     */
    CrawlerSecurityConfiguration?: string;
    /**
     * <p>The time that the crawler was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The name of the database in which the crawler's output is stored.</p>
     */
    DatabaseName?: string;
    /**
     * <p>A description of the crawler.</p>
     */
    Description?: string;
    /**
     * <p>The status of the last crawl, and potentially error information if
     *       an error occurred.</p>
     */
    LastCrawl?: LastCrawlInfo;
    /**
     * <p>The time that the crawler was last updated.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>The name of the crawler.</p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources,
     *       such as Amazon Simple Storage Service (Amazon S3) data.</p>
     */
    Role?: string;
    /**
     * <p>For scheduled crawlers, the schedule when the crawler runs.</p>
     */
    Schedule?: Schedule;
    /**
     * <p>The policy that specifies update and delete behaviors for the crawler.</p>
     */
    SchemaChangePolicy?: SchemaChangePolicy;
    /**
     * <p>Indicates whether the crawler is running, or whether a run is pending.</p>
     */
    State?: CrawlerState | string;
    /**
     * <p>The prefix added to the names of tables that are created.</p>
     */
    TablePrefix?: string;
    /**
     * <p>A collection of targets to crawl.</p>
     */
    Targets?: CrawlerTargets;
    /**
     * <p>The version of the crawler.</p>
     */
    Version?: number;
}
export declare namespace Crawler {
    function isa(o: any): o is Crawler;
}
/**
 * <p>Metrics for a specified crawler.</p>
 */
export interface CrawlerMetrics {
    __type?: "CrawlerMetrics";
    /**
     * <p>The name of the crawler.</p>
     */
    CrawlerName?: string;
    /**
     * <p>The duration of the crawler's most recent run, in seconds.</p>
     */
    LastRuntimeSeconds?: number;
    /**
     * <p>The median duration of this crawler's runs, in seconds.</p>
     */
    MedianRuntimeSeconds?: number;
    /**
     * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
     */
    StillEstimating?: boolean;
    /**
     * <p>The number of tables created by this crawler.</p>
     */
    TablesCreated?: number;
    /**
     * <p>The number of tables deleted by this crawler.</p>
     */
    TablesDeleted?: number;
    /**
     * <p>The number of tables updated by this crawler.</p>
     */
    TablesUpdated?: number;
    /**
     * <p>The estimated time left to complete a running crawl.</p>
     */
    TimeLeftSeconds?: number;
}
export declare namespace CrawlerMetrics {
    function isa(o: any): o is CrawlerMetrics;
}
/**
 * <p>The specified crawler is not running.</p>
 */
export interface CrawlerNotRunningException extends __SmithyException, $MetadataBearer {
    name: "CrawlerNotRunningException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace CrawlerNotRunningException {
    function isa(o: any): o is CrawlerNotRunningException;
}
/**
 * <p>The operation cannot be performed because the crawler is already running.</p>
 */
export interface CrawlerRunningException extends __SmithyException, $MetadataBearer {
    name: "CrawlerRunningException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace CrawlerRunningException {
    function isa(o: any): o is CrawlerRunningException;
}
export declare enum CrawlerState {
    READY = "READY",
    RUNNING = "RUNNING",
    STOPPING = "STOPPING"
}
/**
 * <p>The specified crawler is stopping.</p>
 */
export interface CrawlerStoppingException extends __SmithyException, $MetadataBearer {
    name: "CrawlerStoppingException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace CrawlerStoppingException {
    function isa(o: any): o is CrawlerStoppingException;
}
/**
 * <p>Specifies data stores to crawl.</p>
 */
export interface CrawlerTargets {
    __type?: "CrawlerTargets";
    /**
     * <p>Specifies AWS Glue Data Catalog targets.</p>
     */
    CatalogTargets?: Array<CatalogTarget>;
    /**
     * <p>Specifies Amazon DynamoDB targets.</p>
     */
    DynamoDBTargets?: Array<DynamoDBTarget>;
    /**
     * <p>Specifies JDBC targets.</p>
     */
    JdbcTargets?: Array<JdbcTarget>;
    /**
     * <p>Specifies Amazon Simple Storage Service (Amazon S3) targets.</p>
     */
    S3Targets?: Array<S3Target>;
}
export declare namespace CrawlerTargets {
    function isa(o: any): o is CrawlerTargets;
}
export interface CreateClassifierRequest {
    __type?: "CreateClassifierRequest";
    /**
     * <p>A <code>CsvClassifier</code> object specifying the classifier
     *       to create.</p>
     */
    CsvClassifier?: CreateCsvClassifierRequest;
    /**
     * <p>A <code>GrokClassifier</code> object specifying the classifier
     *       to create.</p>
     */
    GrokClassifier?: CreateGrokClassifierRequest;
    /**
     * <p>A <code>JsonClassifier</code> object specifying the classifier
     *       to create.</p>
     */
    JsonClassifier?: CreateJsonClassifierRequest;
    /**
     * <p>An <code>XMLClassifier</code> object specifying the classifier
     *       to create.</p>
     */
    XMLClassifier?: CreateXMLClassifierRequest;
}
export declare namespace CreateClassifierRequest {
    function isa(o: any): o is CreateClassifierRequest;
}
export interface CreateClassifierResponse {
    __type?: "CreateClassifierResponse";
}
export declare namespace CreateClassifierResponse {
    function isa(o: any): o is CreateClassifierResponse;
}
export interface CreateCrawlerRequest {
    __type?: "CreateCrawlerRequest";
    /**
     * <p>A list of custom classifiers that the user has registered. By default, all built-in
     *       classifiers are included in a crawl, but these custom classifiers always override the default
     *       classifiers for a given classification.</p>
     */
    Classifiers?: Array<string>;
    /**
     * <p>The crawler configuration information. This versioned JSON string allows users to specify
     *       aspects of a crawler's behavior. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a
     *         Crawler</a>.</p>
     */
    Configuration?: string;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
     *       crawler.</p>
     */
    CrawlerSecurityConfiguration?: string;
    /**
     * <p>The AWS Glue database where results are written, such as:
     *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
     */
    DatabaseName?: string;
    /**
     * <p>A description of the new crawler.</p>
     */
    Description?: string;
    /**
     * <p>Name of the new crawler.</p>
     */
    Name: string | undefined;
    /**
     * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to
     *       access customer resources.</p>
     */
    Role: string | undefined;
    /**
     * <p>A <code>cron</code> expression used to specify the schedule. For more information, see
     *         <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
     *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
     */
    Schedule?: string;
    /**
     * <p>The policy for the crawler's update and deletion behavior.</p>
     */
    SchemaChangePolicy?: SchemaChangePolicy;
    /**
     * <p>The table prefix used for catalog tables that are created.</p>
     */
    TablePrefix?: string;
    /**
     * <p>The tags to use with this crawler request. You can use tags to limit access to the
     *       crawler. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS
     *         Glue</a>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>A list of collection of targets to crawl.</p>
     */
    Targets: CrawlerTargets | undefined;
}
export declare namespace CreateCrawlerRequest {
    function isa(o: any): o is CreateCrawlerRequest;
}
export interface CreateCrawlerResponse {
    __type?: "CreateCrawlerResponse";
}
export declare namespace CreateCrawlerResponse {
    function isa(o: any): o is CreateCrawlerResponse;
}
/**
 * <p>Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateCsvClassifierRequest {
    __type?: "CreateCsvClassifierRequest";
    /**
     * <p>Enables the processing of files that contain only one column.</p>
     */
    AllowSingleColumn?: boolean;
    /**
     * <p>Indicates whether the CSV file contains a header.</p>
     */
    ContainsHeader?: CsvHeaderOption | string;
    /**
     * <p>A custom symbol to denote what separates each column entry in the row.</p>
     */
    Delimiter?: string;
    /**
     * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
     */
    DisableValueTrimming?: boolean;
    /**
     * <p>A list of strings representing column names.</p>
     */
    Header?: Array<string>;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.</p>
     */
    QuoteSymbol?: string;
}
export declare namespace CreateCsvClassifierRequest {
    function isa(o: any): o is CreateCsvClassifierRequest;
}
/**
 * <p>Specifies a <code>grok</code> classifier for <code>CreateClassifier</code>
 *       to create.</p>
 */
export interface CreateGrokClassifierRequest {
    __type?: "CreateGrokClassifierRequest";
    /**
     * <p>An identifier of the data format that the classifier matches,
     *       such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>
     */
    Classification: string | undefined;
    /**
     * <p>Optional custom grok patterns used by this classifier.</p>
     */
    CustomPatterns?: string;
    /**
     * <p>The grok pattern used by this classifier.</p>
     */
    GrokPattern: string | undefined;
    /**
     * <p>The name of the new classifier.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateGrokClassifierRequest {
    function isa(o: any): o is CreateGrokClassifierRequest;
}
/**
 * <p>Specifies a JSON classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateJsonClassifierRequest {
    __type?: "CreateJsonClassifierRequest";
    /**
     * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS
     *       Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
     */
    JsonPath: string | undefined;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateJsonClassifierRequest {
    function isa(o: any): o is CreateJsonClassifierRequest;
}
export interface CreateScriptRequest {
    __type?: "CreateScriptRequest";
    /**
     * <p>A list of the edges in the DAG.</p>
     */
    DagEdges?: Array<CodeGenEdge>;
    /**
     * <p>A list of the nodes in the DAG.</p>
     */
    DagNodes?: Array<CodeGenNode>;
    /**
     * <p>The programming language of the resulting code from the DAG.</p>
     */
    Language?: Language | string;
}
export declare namespace CreateScriptRequest {
    function isa(o: any): o is CreateScriptRequest;
}
export interface CreateScriptResponse {
    __type?: "CreateScriptResponse";
    /**
     * <p>The Python script generated from the DAG.</p>
     */
    PythonScript?: string;
    /**
     * <p>The Scala code generated from the DAG.</p>
     */
    ScalaCode?: string;
}
export declare namespace CreateScriptResponse {
    function isa(o: any): o is CreateScriptResponse;
}
/**
 * <p>Specifies an XML classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateXMLClassifierRequest {
    __type?: "CreateXMLClassifierRequest";
    /**
     * <p>An identifier of the data format that the classifier matches.</p>
     */
    Classification: string | undefined;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>The XML tag designating the element that contains each record in an XML document being
     *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
     *       row element that contains only attributes can be parsed as long as it ends with a closing tag
     *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
     *         <code><row item_a="A" item_b="B" /></code> is not).</p>
     */
    RowTag?: string;
}
export declare namespace CreateXMLClassifierRequest {
    function isa(o: any): o is CreateXMLClassifierRequest;
}
/**
 * <p>A classifier for custom <code>CSV</code> content.</p>
 */
export interface CsvClassifier {
    __type?: "CsvClassifier";
    /**
     * <p>Enables the processing of files that contain only one column.</p>
     */
    AllowSingleColumn?: boolean;
    /**
     * <p>Indicates whether the CSV file contains a header.</p>
     */
    ContainsHeader?: CsvHeaderOption | string;
    /**
     * <p>The time that this classifier was registered.</p>
     */
    CreationTime?: Date;
    /**
     * <p>A custom symbol to denote what separates each column entry in the row.</p>
     */
    Delimiter?: string;
    /**
     * <p>Specifies not to trim values before identifying the type of column values. The default
     *       value is <code>true</code>.</p>
     */
    DisableValueTrimming?: boolean;
    /**
     * <p>A list of strings representing column names.</p>
     */
    Header?: Array<string>;
    /**
     * <p>The time that this classifier was last updated.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>A custom symbol to denote what combines content into a single column value. It must be
     *       different from the column delimiter.</p>
     */
    QuoteSymbol?: string;
    /**
     * <p>The version of this classifier.</p>
     */
    Version?: number;
}
export declare namespace CsvClassifier {
    function isa(o: any): o is CsvClassifier;
}
export declare enum CsvHeaderOption {
    ABSENT = "ABSENT",
    PRESENT = "PRESENT",
    UNKNOWN = "UNKNOWN"
}
export declare enum DeleteBehavior {
    DELETE_FROM_DATABASE = "DELETE_FROM_DATABASE",
    DEPRECATE_IN_DATABASE = "DEPRECATE_IN_DATABASE",
    LOG = "LOG"
}
export interface DeleteClassifierRequest {
    __type?: "DeleteClassifierRequest";
    /**
     * <p>Name of the classifier to remove.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteClassifierRequest {
    function isa(o: any): o is DeleteClassifierRequest;
}
export interface DeleteClassifierResponse {
    __type?: "DeleteClassifierResponse";
}
export declare namespace DeleteClassifierResponse {
    function isa(o: any): o is DeleteClassifierResponse;
}
export interface DeleteCrawlerRequest {
    __type?: "DeleteCrawlerRequest";
    /**
     * <p>The name of the crawler to remove.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteCrawlerRequest {
    function isa(o: any): o is DeleteCrawlerRequest;
}
export interface DeleteCrawlerResponse {
    __type?: "DeleteCrawlerResponse";
}
export declare namespace DeleteCrawlerResponse {
    function isa(o: any): o is DeleteCrawlerResponse;
}
/**
 * <p>Specifies an Amazon DynamoDB table to crawl.</p>
 */
export interface DynamoDBTarget {
    __type?: "DynamoDBTarget";
    /**
     * <p>The name of the DynamoDB table to crawl.</p>
     */
    Path?: string;
}
export declare namespace DynamoDBTarget {
    function isa(o: any): o is DynamoDBTarget;
}
export interface GetClassifierRequest {
    __type?: "GetClassifierRequest";
    /**
     * <p>Name of the classifier to retrieve.</p>
     */
    Name: string | undefined;
}
export declare namespace GetClassifierRequest {
    function isa(o: any): o is GetClassifierRequest;
}
export interface GetClassifierResponse {
    __type?: "GetClassifierResponse";
    /**
     * <p>The requested classifier.</p>
     */
    Classifier?: Classifier;
}
export declare namespace GetClassifierResponse {
    function isa(o: any): o is GetClassifierResponse;
}
export interface GetClassifiersRequest {
    __type?: "GetClassifiersRequest";
    /**
     * <p>The size of the list to return (optional).</p>
     */
    MaxResults?: number;
    /**
     * <p>An optional continuation token.</p>
     */
    NextToken?: string;
}
export declare namespace GetClassifiersRequest {
    function isa(o: any): o is GetClassifiersRequest;
}
export interface GetClassifiersResponse {
    __type?: "GetClassifiersResponse";
    /**
     * <p>The requested list of classifier
     *       objects.</p>
     */
    Classifiers?: Array<Classifier>;
    /**
     * <p>A continuation token.</p>
     */
    NextToken?: string;
}
export declare namespace GetClassifiersResponse {
    function isa(o: any): o is GetClassifiersResponse;
}
export interface GetCrawlerMetricsRequest {
    __type?: "GetCrawlerMetricsRequest";
    /**
     * <p>A list of the names of crawlers about which to retrieve metrics.</p>
     */
    CrawlerNameList?: Array<string>;
    /**
     * <p>The maximum size of a list to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation call.</p>
     */
    NextToken?: string;
}
export declare namespace GetCrawlerMetricsRequest {
    function isa(o: any): o is GetCrawlerMetricsRequest;
}
export interface GetCrawlerMetricsResponse {
    __type?: "GetCrawlerMetricsResponse";
    /**
     * <p>A list of metrics for the specified crawler.</p>
     */
    CrawlerMetricsList?: Array<CrawlerMetrics>;
    /**
     * <p>A continuation token, if the returned list does not contain the
     *       last metric available.</p>
     */
    NextToken?: string;
}
export declare namespace GetCrawlerMetricsResponse {
    function isa(o: any): o is GetCrawlerMetricsResponse;
}
export interface GetCrawlerRequest {
    __type?: "GetCrawlerRequest";
    /**
     * <p>The name of the crawler to retrieve metadata for.</p>
     */
    Name: string | undefined;
}
export declare namespace GetCrawlerRequest {
    function isa(o: any): o is GetCrawlerRequest;
}
export interface GetCrawlerResponse {
    __type?: "GetCrawlerResponse";
    /**
     * <p>The metadata for the specified crawler.</p>
     */
    Crawler?: Crawler;
}
export declare namespace GetCrawlerResponse {
    function isa(o: any): o is GetCrawlerResponse;
}
export interface GetCrawlersRequest {
    __type?: "GetCrawlersRequest";
    /**
     * <p>The number of crawlers to return on each call.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation request.</p>
     */
    NextToken?: string;
}
export declare namespace GetCrawlersRequest {
    function isa(o: any): o is GetCrawlersRequest;
}
export interface GetCrawlersResponse {
    __type?: "GetCrawlersResponse";
    /**
     * <p>A list of crawler metadata.</p>
     */
    Crawlers?: Array<Crawler>;
    /**
     * <p>A continuation token, if the returned list has not reached the end
     *       of those defined in this customer account.</p>
     */
    NextToken?: string;
}
export declare namespace GetCrawlersResponse {
    function isa(o: any): o is GetCrawlersResponse;
}
export interface GetDataflowGraphRequest {
    __type?: "GetDataflowGraphRequest";
    /**
     * <p>The Python script to transform.</p>
     */
    PythonScript?: string;
}
export declare namespace GetDataflowGraphRequest {
    function isa(o: any): o is GetDataflowGraphRequest;
}
export interface GetDataflowGraphResponse {
    __type?: "GetDataflowGraphResponse";
    /**
     * <p>A list of the edges in the resulting DAG.</p>
     */
    DagEdges?: Array<CodeGenEdge>;
    /**
     * <p>A list of the nodes in the resulting DAG.</p>
     */
    DagNodes?: Array<CodeGenNode>;
}
export declare namespace GetDataflowGraphResponse {
    function isa(o: any): o is GetDataflowGraphResponse;
}
export interface GetMappingRequest {
    __type?: "GetMappingRequest";
    /**
     * <p>Parameters for the mapping.</p>
     */
    Location?: Location;
    /**
     * <p>A list of target tables.</p>
     */
    Sinks?: Array<CatalogEntry>;
    /**
     * <p>Specifies the source table.</p>
     */
    Source: CatalogEntry | undefined;
}
export declare namespace GetMappingRequest {
    function isa(o: any): o is GetMappingRequest;
}
export interface GetMappingResponse {
    __type?: "GetMappingResponse";
    /**
     * <p>A list of mappings to the specified targets.</p>
     */
    Mapping: Array<MappingEntry> | undefined;
}
export declare namespace GetMappingResponse {
    function isa(o: any): o is GetMappingResponse;
}
export interface GetPlanRequest {
    __type?: "GetPlanRequest";
    /**
     * <p>The programming language of the code to perform the mapping.</p>
     */
    Language?: Language | string;
    /**
     * <p>The parameters for the mapping.</p>
     */
    Location?: Location;
    /**
     * <p>The list of mappings from a source table to target tables.</p>
     */
    Mapping: Array<MappingEntry> | undefined;
    /**
     * <p>The target tables.</p>
     */
    Sinks?: Array<CatalogEntry>;
    /**
     * <p>The source table.</p>
     */
    Source: CatalogEntry | undefined;
}
export declare namespace GetPlanRequest {
    function isa(o: any): o is GetPlanRequest;
}
export interface GetPlanResponse {
    __type?: "GetPlanResponse";
    /**
     * <p>A Python script to perform the mapping.</p>
     */
    PythonScript?: string;
    /**
     * <p>The Scala code to perform the mapping.</p>
     */
    ScalaCode?: string;
}
export declare namespace GetPlanResponse {
    function isa(o: any): o is GetPlanResponse;
}
/**
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 */
export interface GrokClassifier {
    __type?: "GrokClassifier";
    /**
     * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and
     *       so on.</p>
     */
    Classification: string | undefined;
    /**
     * <p>The time that this classifier was registered.</p>
     */
    CreationTime?: Date;
    /**
     * <p>Optional custom grok patterns defined by this classifier. For more information, see custom
     *       patterns in <a href="http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
     */
    CustomPatterns?: string;
    /**
     * <p>The grok pattern applied to a data store by this classifier. For more information, see
     *       built-in patterns in <a href="http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom
     *         Classifiers</a>.</p>
     */
    GrokPattern: string | undefined;
    /**
     * <p>The time that this classifier was last updated.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>The version of this classifier.</p>
     */
    Version?: number;
}
export declare namespace GrokClassifier {
    function isa(o: any): o is GrokClassifier;
}
/**
 * <p>Specifies a JDBC data store to crawl.</p>
 */
export interface JdbcTarget {
    __type?: "JdbcTarget";
    /**
     * <p>The name of the connection to use to connect to the JDBC target.</p>
     */
    ConnectionName?: string;
    /**
     * <p>A list of glob patterns used to exclude from the crawl.
     *       For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
     */
    Exclusions?: Array<string>;
    /**
     * <p>The path of the JDBC target.</p>
     */
    Path?: string;
}
export declare namespace JdbcTarget {
    function isa(o: any): o is JdbcTarget;
}
/**
 * <p>A classifier for <code>JSON</code> content.</p>
 */
export interface JsonClassifier {
    __type?: "JsonClassifier";
    /**
     * <p>The time that this classifier was registered.</p>
     */
    CreationTime?: Date;
    /**
     * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS
     *       Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
     */
    JsonPath: string | undefined;
    /**
     * <p>The time that this classifier was last updated.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>The version of this classifier.</p>
     */
    Version?: number;
}
export declare namespace JsonClassifier {
    function isa(o: any): o is JsonClassifier;
}
export declare enum Language {
    PYTHON = "PYTHON",
    SCALA = "SCALA"
}
/**
 * <p>Status and error information about the most recent crawl.</p>
 */
export interface LastCrawlInfo {
    __type?: "LastCrawlInfo";
    /**
     * <p>If an error occurred, the error information about the last crawl.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The log group for the last crawl.</p>
     */
    LogGroup?: string;
    /**
     * <p>The log stream for the last crawl.</p>
     */
    LogStream?: string;
    /**
     * <p>The prefix for a message about this crawl.</p>
     */
    MessagePrefix?: string;
    /**
     * <p>The time at which the crawl started.</p>
     */
    StartTime?: Date;
    /**
     * <p>Status of the last crawl.</p>
     */
    Status?: LastCrawlStatus | string;
}
export declare namespace LastCrawlInfo {
    function isa(o: any): o is LastCrawlInfo;
}
export declare enum LastCrawlStatus {
    CANCELLED = "CANCELLED",
    FAILED = "FAILED",
    SUCCEEDED = "SUCCEEDED"
}
export interface ListCrawlersRequest {
    __type?: "ListCrawlersRequest";
    /**
     * <p>The maximum size of a list to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>A continuation token, if this is a continuation request.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifies to return only these tagged resources.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListCrawlersRequest {
    function isa(o: any): o is ListCrawlersRequest;
}
export interface ListCrawlersResponse {
    __type?: "ListCrawlersResponse";
    /**
     * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
     */
    CrawlerNames?: Array<string>;
    /**
     * <p>A continuation token, if the returned list does not contain the
     *       last metric available.</p>
     */
    NextToken?: string;
}
export declare namespace ListCrawlersResponse {
    function isa(o: any): o is ListCrawlersResponse;
}
/**
 * <p>The location of resources.</p>
 */
export interface Location {
    __type?: "Location";
    /**
     * <p>An Amazon DynamoDB table location.</p>
     */
    DynamoDB?: Array<CodeGenNodeArg>;
    /**
     * <p>A JDBC location.</p>
     */
    Jdbc?: Array<CodeGenNodeArg>;
    /**
     * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
     */
    S3?: Array<CodeGenNodeArg>;
}
export declare namespace Location {
    function isa(o: any): o is Location;
}
/**
 * <p>Defines a mapping.</p>
 */
export interface MappingEntry {
    __type?: "MappingEntry";
    /**
     * <p>The source path.</p>
     */
    SourcePath?: string;
    /**
     * <p>The name of the source table.</p>
     */
    SourceTable?: string;
    /**
     * <p>The source type.</p>
     */
    SourceType?: string;
    /**
     * <p>The target path.</p>
     */
    TargetPath?: string;
    /**
     * <p>The target table.</p>
     */
    TargetTable?: string;
    /**
     * <p>The target type.</p>
     */
    TargetType?: string;
}
export declare namespace MappingEntry {
    function isa(o: any): o is MappingEntry;
}
/**
 * <p>There is no applicable schedule.</p>
 */
export interface NoScheduleException extends __SmithyException, $MetadataBearer {
    name: "NoScheduleException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace NoScheduleException {
    function isa(o: any): o is NoScheduleException;
}
/**
 * <p>Specifies a data store in Amazon Simple Storage Service (Amazon S3).</p>
 */
export interface S3Target {
    __type?: "S3Target";
    /**
     * <p>A list of glob patterns used to exclude from the crawl.
     *       For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
     */
    Exclusions?: Array<string>;
    /**
     * <p>The path to the Amazon S3 target.</p>
     */
    Path?: string;
}
export declare namespace S3Target {
    function isa(o: any): o is S3Target;
}
/**
 * <p>A scheduling object using a <code>cron</code> statement to schedule an event.</p>
 */
export interface Schedule {
    __type?: "Schedule";
    /**
     * <p>A <code>cron</code> expression used to specify the schedule. For more information, see
     *         <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
     *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
     */
    ScheduleExpression?: string;
    /**
     * <p>The state of the schedule.</p>
     */
    State?: ScheduleState | string;
}
export declare namespace Schedule {
    function isa(o: any): o is Schedule;
}
export declare enum ScheduleState {
    NOT_SCHEDULED = "NOT_SCHEDULED",
    SCHEDULED = "SCHEDULED",
    TRANSITIONING = "TRANSITIONING"
}
/**
 * <p>The specified scheduler is not running.</p>
 */
export interface SchedulerNotRunningException extends __SmithyException, $MetadataBearer {
    name: "SchedulerNotRunningException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace SchedulerNotRunningException {
    function isa(o: any): o is SchedulerNotRunningException;
}
/**
 * <p>The specified scheduler is already running.</p>
 */
export interface SchedulerRunningException extends __SmithyException, $MetadataBearer {
    name: "SchedulerRunningException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace SchedulerRunningException {
    function isa(o: any): o is SchedulerRunningException;
}
/**
 * <p>The specified scheduler is transitioning.</p>
 */
export interface SchedulerTransitioningException extends __SmithyException, $MetadataBearer {
    name: "SchedulerTransitioningException";
    $fault: "client";
    /**
     * <p>A message describing the problem.</p>
     */
    Message?: string;
}
export declare namespace SchedulerTransitioningException {
    function isa(o: any): o is SchedulerTransitioningException;
}
/**
 * <p>A policy that specifies update and deletion behaviors for the crawler.</p>
 */
export interface SchemaChangePolicy {
    __type?: "SchemaChangePolicy";
    /**
     * <p>The deletion behavior when the crawler finds a deleted object.</p>
     */
    DeleteBehavior?: DeleteBehavior | string;
    /**
     * <p>The update behavior when the crawler finds a changed schema.</p>
     */
    UpdateBehavior?: UpdateBehavior | string;
}
export declare namespace SchemaChangePolicy {
    function isa(o: any): o is SchemaChangePolicy;
}
export interface StartCrawlerRequest {
    __type?: "StartCrawlerRequest";
    /**
     * <p>Name of the crawler to start.</p>
     */
    Name: string | undefined;
}
export declare namespace StartCrawlerRequest {
    function isa(o: any): o is StartCrawlerRequest;
}
export interface StartCrawlerResponse {
    __type?: "StartCrawlerResponse";
}
export declare namespace StartCrawlerResponse {
    function isa(o: any): o is StartCrawlerResponse;
}
export interface StartCrawlerScheduleRequest {
    __type?: "StartCrawlerScheduleRequest";
    /**
     * <p>Name of the crawler to schedule.</p>
     */
    CrawlerName: string | undefined;
}
export declare namespace StartCrawlerScheduleRequest {
    function isa(o: any): o is StartCrawlerScheduleRequest;
}
export interface StartCrawlerScheduleResponse {
    __type?: "StartCrawlerScheduleResponse";
}
export declare namespace StartCrawlerScheduleResponse {
    function isa(o: any): o is StartCrawlerScheduleResponse;
}
export interface StopCrawlerRequest {
    __type?: "StopCrawlerRequest";
    /**
     * <p>Name of the crawler to stop.</p>
     */
    Name: string | undefined;
}
export declare namespace StopCrawlerRequest {
    function isa(o: any): o is StopCrawlerRequest;
}
export interface StopCrawlerResponse {
    __type?: "StopCrawlerResponse";
}
export declare namespace StopCrawlerResponse {
    function isa(o: any): o is StopCrawlerResponse;
}
export interface StopCrawlerScheduleRequest {
    __type?: "StopCrawlerScheduleRequest";
    /**
     * <p>Name of the crawler whose schedule state to set.</p>
     */
    CrawlerName: string | undefined;
}
export declare namespace StopCrawlerScheduleRequest {
    function isa(o: any): o is StopCrawlerScheduleRequest;
}
export interface StopCrawlerScheduleResponse {
    __type?: "StopCrawlerScheduleResponse";
}
export declare namespace StopCrawlerScheduleResponse {
    function isa(o: any): o is StopCrawlerScheduleResponse;
}
export declare enum UpdateBehavior {
    LOG = "LOG",
    UPDATE_IN_DATABASE = "UPDATE_IN_DATABASE"
}
export interface UpdateClassifierRequest {
    __type?: "UpdateClassifierRequest";
    /**
     * <p>A <code>CsvClassifier</code> object with updated fields.</p>
     */
    CsvClassifier?: UpdateCsvClassifierRequest;
    /**
     * <p>A <code>GrokClassifier</code> object with updated fields.</p>
     */
    GrokClassifier?: UpdateGrokClassifierRequest;
    /**
     * <p>A <code>JsonClassifier</code> object with updated fields.</p>
     */
    JsonClassifier?: UpdateJsonClassifierRequest;
    /**
     * <p>An <code>XMLClassifier</code> object with updated fields.</p>
     */
    XMLClassifier?: UpdateXMLClassifierRequest;
}
export declare namespace UpdateClassifierRequest {
    function isa(o: any): o is UpdateClassifierRequest;
}
export interface UpdateClassifierResponse {
    __type?: "UpdateClassifierResponse";
}
export declare namespace UpdateClassifierResponse {
    function isa(o: any): o is UpdateClassifierResponse;
}
export interface UpdateCrawlerRequest {
    __type?: "UpdateCrawlerRequest";
    /**
     * <p>A list of custom classifiers that the user
     *       has registered. By default, all built-in classifiers are included in a crawl,
     *       but these custom classifiers always override the default classifiers
     *       for a given classification.</p>
     */
    Classifiers?: Array<string>;
    /**
     * <p>The crawler configuration information. This versioned JSON string allows users to specify
     *       aspects of a crawler's behavior. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a
     *         Crawler</a>.</p>
     */
    Configuration?: string;
    /**
     * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
     *       crawler.</p>
     */
    CrawlerSecurityConfiguration?: string;
    /**
     * <p>The AWS Glue database where results are stored, such as:
     *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
     */
    DatabaseName?: string;
    /**
     * <p>A description of the new crawler.</p>
     */
    Description?: string;
    /**
     * <p>Name of the new crawler.</p>
     */
    Name: string | undefined;
    /**
     * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
     *       to access customer resources.</p>
     */
    Role?: string;
    /**
     * <p>A <code>cron</code> expression used to specify the schedule. For more information, see
     *         <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
     *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
     */
    Schedule?: string;
    /**
     * <p>The policy for the crawler's update and deletion behavior.</p>
     */
    SchemaChangePolicy?: SchemaChangePolicy;
    /**
     * <p>The table prefix used for catalog tables that are created.</p>
     */
    TablePrefix?: string;
    /**
     * <p>A list of targets to crawl.</p>
     */
    Targets?: CrawlerTargets;
}
export declare namespace UpdateCrawlerRequest {
    function isa(o: any): o is UpdateCrawlerRequest;
}
export interface UpdateCrawlerResponse {
    __type?: "UpdateCrawlerResponse";
}
export declare namespace UpdateCrawlerResponse {
    function isa(o: any): o is UpdateCrawlerResponse;
}
export interface UpdateCrawlerScheduleRequest {
    __type?: "UpdateCrawlerScheduleRequest";
    /**
     * <p>The name of the crawler whose schedule to update.</p>
     */
    CrawlerName: string | undefined;
    /**
     * <p>The updated <code>cron</code> expression used to specify the schedule. For more
     *       information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
     *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
     */
    Schedule?: string;
}
export declare namespace UpdateCrawlerScheduleRequest {
    function isa(o: any): o is UpdateCrawlerScheduleRequest;
}
export interface UpdateCrawlerScheduleResponse {
    __type?: "UpdateCrawlerScheduleResponse";
}
export declare namespace UpdateCrawlerScheduleResponse {
    function isa(o: any): o is UpdateCrawlerScheduleResponse;
}
/**
 * <p>Specifies a custom CSV classifier to be updated.</p>
 */
export interface UpdateCsvClassifierRequest {
    __type?: "UpdateCsvClassifierRequest";
    /**
     * <p>Enables the processing of files that contain only one column.</p>
     */
    AllowSingleColumn?: boolean;
    /**
     * <p>Indicates whether the CSV file contains a header.</p>
     */
    ContainsHeader?: CsvHeaderOption | string;
    /**
     * <p>A custom symbol to denote what separates each column entry in the row.</p>
     */
    Delimiter?: string;
    /**
     * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
     */
    DisableValueTrimming?: boolean;
    /**
     * <p>A list of strings representing column names.</p>
     */
    Header?: Array<string>;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>A custom symbol to denote what combines content into a single column value. It must be
     *       different from the column delimiter.</p>
     */
    QuoteSymbol?: string;
}
export declare namespace UpdateCsvClassifierRequest {
    function isa(o: any): o is UpdateCsvClassifierRequest;
}
/**
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 */
export interface UpdateGrokClassifierRequest {
    __type?: "UpdateGrokClassifierRequest";
    /**
     * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
     *       Amazon CloudWatch Logs, and so on.</p>
     */
    Classification?: string;
    /**
     * <p>Optional custom grok patterns used by this classifier.</p>
     */
    CustomPatterns?: string;
    /**
     * <p>The grok pattern used by this classifier.</p>
     */
    GrokPattern?: string;
    /**
     * <p>The name of the <code>GrokClassifier</code>.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateGrokClassifierRequest {
    function isa(o: any): o is UpdateGrokClassifierRequest;
}
/**
 * <p>Specifies a JSON classifier to be updated.</p>
 */
export interface UpdateJsonClassifierRequest {
    __type?: "UpdateJsonClassifierRequest";
    /**
     * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS
     *       Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
     */
    JsonPath?: string;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateJsonClassifierRequest {
    function isa(o: any): o is UpdateJsonClassifierRequest;
}
/**
 * <p>Specifies an XML classifier to be updated.</p>
 */
export interface UpdateXMLClassifierRequest {
    __type?: "UpdateXMLClassifierRequest";
    /**
     * <p>An identifier of the data format that the classifier matches.</p>
     */
    Classification?: string;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>The XML tag designating the element that contains each record in an XML document being
     *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
     *       row element that contains only attributes can be parsed as long as it ends with a closing tag
     *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
     *         <code><row item_a="A" item_b="B" /></code> is not).</p>
     */
    RowTag?: string;
}
export declare namespace UpdateXMLClassifierRequest {
    function isa(o: any): o is UpdateXMLClassifierRequest;
}
/**
 * <p>A classifier for <code>XML</code> content.</p>
 */
export interface XMLClassifier {
    __type?: "XMLClassifier";
    /**
     * <p>An identifier of the data format that the classifier matches.</p>
     */
    Classification: string | undefined;
    /**
     * <p>The time that this classifier was registered.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The time that this classifier was last updated.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>The name of the classifier.</p>
     */
    Name: string | undefined;
    /**
     * <p>The XML tag designating the element that contains each record in an XML document being
     *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
     *       row element that contains only attributes can be parsed as long as it ends with a closing tag
     *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
     *         <code><row item_a="A" item_b="B" /></code> is not).</p>
     */
    RowTag?: string;
    /**
     * <p>The version of this classifier.</p>
     */
    Version?: number;
}
export declare namespace XMLClassifier {
    function isa(o: any): o is XMLClassifier;
}
