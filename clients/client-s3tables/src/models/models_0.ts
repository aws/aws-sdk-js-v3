// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { S3TablesServiceException as __BaseException } from "./S3TablesServiceException";

/**
 * <p>The action cannot be performed because you do not have the required permission.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request is invalid or malformed.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * <p>The request failed because there is a conflict with a previous write. You can retry the
 *       request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket to create the namespace in.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>A name for the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;
}

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket the namespace was created in.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;
}

/**
 * <p>The caller isn't authorized to make the request.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * <p>The request failed due to an internal server error.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified resource could not be found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const OpenTableFormat = {
  ICEBERG: "ICEBERG",
} as const;

/**
 * @public
 */
export type OpenTableFormat = (typeof OpenTableFormat)[keyof typeof OpenTableFormat];

/**
 * <p>Contains details about a schema field.</p>
 * @public
 */
export interface SchemaField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The field type. S3 Tables supports all Apache Iceberg primitive types. For more information, see the <a href="https://iceberg.apache.org/spec/#primitive-types">Apache Iceberg documentation</a>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>A Boolean value that specifies whether values are required for each row in this field. By default, this is <code>false</code> and null values are allowed in the field. If this is <code>true</code> the field does not allow null values.</p>
   * @public
   */
  required?: boolean | undefined;
}

/**
 * <p>Contains details about the schema for an Iceberg table.</p>
 * @public
 */
export interface IcebergSchema {
  /**
   * <p>The schema fields for the table</p>
   * @public
   */
  fields: SchemaField[] | undefined;
}

/**
 * <p>Contains details about the metadata for an Iceberg table.</p>
 * @public
 */
export interface IcebergMetadata {
  /**
   * <p>The schema for an Iceberg table.</p>
   * @public
   */
  schema: IcebergSchema | undefined;
}

/**
 * <p>Contains details about the table metadata.</p>
 * @public
 */
export type TableMetadata = TableMetadata.IcebergMember | TableMetadata.$UnknownMember;

/**
 * @public
 */
export namespace TableMetadata {
  /**
   * <p>Contains details about the metadata of an Iceberg table.</p>
   * @public
   */
  export interface IcebergMember {
    iceberg: IcebergMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    iceberg?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    iceberg: (value: IcebergMetadata) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TableMetadata, visitor: Visitor<T>): T => {
    if (value.iceberg !== undefined) return visitor.iceberg(value.iceberg);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket to create the table in.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace to associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name for the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The format for the table.</p>
   * @public
   */
  format: OpenTableFormat | undefined;

  /**
   * <p>The metadata for the table.</p>
   * @public
   */
  metadata?: TableMetadata | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken: string | undefined;
}

/**
 * @public
 */
export interface CreateTableBucketRequest {
  /**
   * <p>The name for the table bucket.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface CreateTableBucketResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the namespace.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableBucketPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteTablePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table. </p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The table name.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceResponse {
  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The date and time the namespace was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the account that created the namespace.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The ID of the account that owns the namespcace.</p>
   * @public
   */
  ownerAccountId: string | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace the table is associated with.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TableType = {
  AWS: "aws",
  CUSTOMER: "customer",
} as const;

/**
 * @public
 */
export type TableType = (typeof TableType)[keyof typeof TableType];

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the table.</p>
   * @public
   */
  type: TableType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The metadata location of the table.</p>
   * @public
   */
  metadataLocation?: string | undefined;

  /**
   * <p>The warehouse location of the table.</p>
   * @public
   */
  warehouseLocation: string | undefined;

  /**
   * <p>The date and time the table bucket was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the account that created the table.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The service that manages the table.</p>
   * @public
   */
  managedByService?: string | undefined;

  /**
   * <p>The date and time the table was last modified on.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The ID of the account that last modified the table.</p>
   * @public
   */
  modifiedBy: string | undefined;

  /**
   * <p>The ID of the account that owns the table.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The format of the table.</p>
   * @public
   */
  format: OpenTableFormat | undefined;
}

/**
 * @public
 */
export interface GetTableBucketRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the table bucket</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the account that owns the table bucket.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The date and time the table bucket was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance
   *       configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TableBucketMaintenanceType = {
  ICEBERG_UNREFERENCED_FILE_REMOVAL: "icebergUnreferencedFileRemoval",
} as const;

/**
 * @public
 */
export type TableBucketMaintenanceType = (typeof TableBucketMaintenanceType)[keyof typeof TableBucketMaintenanceType];

/**
 * <p>Contains details about the unreferenced file removal settings for an Iceberg table bucket.
 *     </p>
 * @public
 */
export interface IcebergUnreferencedFileRemovalSettings {
  /**
   * <p>The number of days an object has to be unreferenced before it is marked as non-current.
   *
   *        </p>
   * @public
   */
  unreferencedDays?: number | undefined;

  /**
   * <p>The number of days an object has to be non-current before it is deleted.
   *
   *     </p>
   * @public
   */
  nonCurrentDays?: number | undefined;
}

/**
 * <p>Contains details about the maintenance settings for the table bucket.</p>
 * @public
 */
export type TableBucketMaintenanceSettings =
  | TableBucketMaintenanceSettings.IcebergUnreferencedFileRemovalMember
  | TableBucketMaintenanceSettings.$UnknownMember;

/**
 * @public
 */
export namespace TableBucketMaintenanceSettings {
  /**
   * <p>The unreferenced file removal settings for the table bucket.</p>
   * @public
   */
  export interface IcebergUnreferencedFileRemovalMember {
    icebergUnreferencedFileRemoval: IcebergUnreferencedFileRemovalSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    icebergUnreferencedFileRemoval?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    icebergUnreferencedFileRemoval: (value: IcebergUnreferencedFileRemovalSettings) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TableBucketMaintenanceSettings, visitor: Visitor<T>): T => {
    if (value.icebergUnreferencedFileRemoval !== undefined)
      return visitor.icebergUnreferencedFileRemoval(value.icebergUnreferencedFileRemoval);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const MaintenanceStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];

/**
 * <p>Details about the values that define the maintenance configuration for a table bucket.</p>
 * @public
 */
export interface TableBucketMaintenanceConfigurationValue {
  /**
   * <p>The status of the maintenance configuration.</p>
   * @public
   */
  status?: MaintenanceStatus | undefined;

  /**
   * <p>Contains details about the settings of the maintenance configuration.</p>
   * @public
   */
  settings?: TableBucketMaintenanceSettings | undefined;
}

/**
 * @public
 */
export interface GetTableBucketMaintenanceConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance
   *       configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>Details about the maintenance configuration for the table bucket.</p>
   * @public
   */
  configuration: Partial<Record<TableBucketMaintenanceType, TableBucketMaintenanceConfigurationValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableBucketPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;
}

/**
 * @public
 */
export interface GetTableBucketPolicyResponse {
  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TableMaintenanceType = {
  ICEBERG_COMPACTION: "icebergCompaction",
  ICEBERG_SNAPSHOT_MANAGEMENT: "icebergSnapshotManagement",
} as const;

/**
 * @public
 */
export type TableMaintenanceType = (typeof TableMaintenanceType)[keyof typeof TableMaintenanceType];

/**
 * <p>Contains details about the compaction settings for an Iceberg table.
 *     </p>
 * @public
 */
export interface IcebergCompactionSettings {
  /**
   * <p>The target file size for the table in MB.</p>
   * @public
   */
  targetFileSizeMB?: number | undefined;
}

/**
 * <p>Contains details about the snapshot management settings for an Iceberg table. The oldest snapshot expires when its age exceeds the <code>maxSnapshotAgeHours</code> and the total number of snapshots exceeds the value for the minimum number of snapshots to keep <code>minSnapshotsToKeep</code>.
 *     </p>
 * @public
 */
export interface IcebergSnapshotManagementSettings {
  /**
   * <p>The minimum number of snapshots to keep.</p>
   * @public
   */
  minSnapshotsToKeep?: number | undefined;

  /**
   * <p>The maximum age of a snapshot before it can be expired.</p>
   * @public
   */
  maxSnapshotAgeHours?: number | undefined;
}

/**
 * <p>Contains details about maintenance settings for the table.</p>
 * @public
 */
export type TableMaintenanceSettings =
  | TableMaintenanceSettings.IcebergCompactionMember
  | TableMaintenanceSettings.IcebergSnapshotManagementMember
  | TableMaintenanceSettings.$UnknownMember;

/**
 * @public
 */
export namespace TableMaintenanceSettings {
  /**
   * <p>Contains details about the Iceberg compaction settings for the table.</p>
   * @public
   */
  export interface IcebergCompactionMember {
    icebergCompaction: IcebergCompactionSettings;
    icebergSnapshotManagement?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains details about the Iceberg snapshot management settings for the table.</p>
   * @public
   */
  export interface IcebergSnapshotManagementMember {
    icebergCompaction?: never;
    icebergSnapshotManagement: IcebergSnapshotManagementSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    icebergCompaction?: never;
    icebergSnapshotManagement?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    icebergCompaction: (value: IcebergCompactionSettings) => T;
    icebergSnapshotManagement: (value: IcebergSnapshotManagementSettings) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TableMaintenanceSettings, visitor: Visitor<T>): T => {
    if (value.icebergCompaction !== undefined) return visitor.icebergCompaction(value.icebergCompaction);
    if (value.icebergSnapshotManagement !== undefined)
      return visitor.icebergSnapshotManagement(value.icebergSnapshotManagement);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains the values that define a maintenance configuration for a table.</p>
 * @public
 */
export interface TableMaintenanceConfigurationValue {
  /**
   * <p>The status of the maintenance configuration.</p>
   * @public
   */
  status?: MaintenanceStatus | undefined;

  /**
   * <p>Contains details about the settings for the maintenance configuration.</p>
   * @public
   */
  settings?: TableMaintenanceSettings | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>Details about the maintenance configuration for the table bucket.</p>
   * @public
   */
  configuration: Partial<Record<TableMaintenanceType, TableMaintenanceConfigurationValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceJobStatusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The name of the namespace the table is associated with.
   *
   *     </p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the maintenance job.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TableMaintenanceJobType = {
  ICEBERG_COMPACTION: "icebergCompaction",
  ICEBERG_SNAPSHOT_MANAGEMENT: "icebergSnapshotManagement",
  ICEBERG_UNREFERENCED_FILE_REMOVAL: "icebergUnreferencedFileRemoval",
} as const;

/**
 * @public
 */
export type TableMaintenanceJobType = (typeof TableMaintenanceJobType)[keyof typeof TableMaintenanceJobType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  DISABLED: "Disabled",
  FAILED: "Failed",
  NOT_YET_RUN: "Not_Yet_Run",
  SUCCESSFUL: "Successful",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>Details about the status of a maintenance job.</p>
 * @public
 */
export interface TableMaintenanceJobStatusValue {
  /**
   * <p>The status of the job.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The date and time that the maintenance job was last run.</p>
   * @public
   */
  lastRunTimestamp?: Date | undefined;

  /**
   * <p>The failure message of a failed job.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetTableMaintenanceJobStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The status of the maintenance job.</p>
   * @public
   */
  status: Partial<Record<TableMaintenanceJobType, TableMaintenanceJobStatusValue>> | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataLocationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataLocationResponse {
  /**
   * <p>The version token.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The metadata location.</p>
   * @public
   */
  metadataLocation?: string | undefined;

  /**
   * <p>The warehouse location.</p>
   * @public
   */
  warehouseLocation: string | undefined;
}

/**
 * @public
 */
export interface GetTablePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetTablePolicyResponse {
  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The prefix of the namespaces.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>
   *             <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on
   *       this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real key.
   *       You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The maximum number of namespaces to return in the list.</p>
   * @public
   */
  maxNamespaces?: number | undefined;
}

/**
 * <p>Contains details about a namespace.</p>
 * @public
 */
export interface NamespaceSummary {
  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The date and time the namespace was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The ID of the account that created the namespace.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The ID of the account that owns the namespace.</p>
   * @public
   */
  ownerAccountId: string | undefined;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * <p>A list of namespaces.</p>
   * @public
   */
  namespaces: NamespaceSummary[] | undefined;

  /**
   * <p>The <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableBucketsRequest {
  /**
   * <p>The prefix of the table buckets.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>
   *             <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on
   *       this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real key.
   *       You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The maximum number of table buckets to return in the list.</p>
   * @public
   */
  maxBuckets?: number | undefined;
}

/**
 * <p>Contains details about a table bucket.</p>
 * @public
 */
export interface TableBucketSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the table bucket.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the account that owns the table bucket.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The date and time the table bucket was created at.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTableBucketsResponse {
  /**
   * <p>A list of table buckets.</p>
   * @public
   */
  tableBuckets: TableBucketSummary[] | undefined;

  /**
   * <p>You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * <p>The Amazon resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the tables.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The prefix of the tables.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>
   *             <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on
   *       this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real key.
   *       You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;

  /**
   * <p>The maximum number of tables to return.</p>
   * @public
   */
  maxTables?: number | undefined;
}

/**
 * <p>Contains details about a table.</p>
 * @public
 */
export interface TableSummary {
  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the table.</p>
   * @public
   */
  type: TableType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The date and time the table was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the table was last modified at.</p>
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * <p>A list of tables.</p>
   * @public
   */
  tables: TableSummary[] | undefined;

  /**
   * <p>You can use this <code>ContinuationToken</code> for pagination of the list results.</p>
   * @public
   */
  continuationToken?: string | undefined;
}

/**
 * @public
 */
export interface PutTableBucketMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance
   *       configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The type of the maintenance configuration.</p>
   * @public
   */
  type: TableBucketMaintenanceType | undefined;

  /**
   * <p>Defines the values of the maintenance configuration for the table bucket.</p>
   * @public
   */
  value: TableBucketMaintenanceConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTableBucketPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutTableMaintenanceConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table associated with the maintenance
   *       configuration.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the maintenance configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the maintenance configuration.</p>
   * @public
   */
  type: TableMaintenanceType | undefined;

  /**
   * <p>Defines the values of the maintenance configuration for the table.</p>
   * @public
   */
  value: TableMaintenanceConfigurationValue | undefined;
}

/**
 * @public
 */
export interface PutTablePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket that contains the table.</p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The <code>JSON</code> that defines the policy.</p>
   * @public
   */
  resourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface RenameTableRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket. </p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace associated with the table. </p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The current name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new name for the namespace.</p>
   * @public
   */
  newNamespaceName?: string | undefined;

  /**
   * <p>The new name for the table.</p>
   * @public
   */
  newName?: string | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableMetadataLocationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the table bucket. </p>
   * @public
   */
  tableBucketARN: string | undefined;

  /**
   * <p>The namespace of the table.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version token of the table. </p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The new metadata location for the table. </p>
   * @public
   */
  metadataLocation: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableMetadataLocationResponse {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  tableARN: string | undefined;

  /**
   * <p>The namespace the table is associated with.</p>
   * @public
   */
  namespace: string[] | undefined;

  /**
   * <p>The version token of the table.</p>
   * @public
   */
  versionToken: string | undefined;

  /**
   * <p>The metadata location of the table.</p>
   * @public
   */
  metadataLocation: string | undefined;
}
