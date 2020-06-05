import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access to the resource is denied.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>Access to the resource is denied.</p>
   */
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

/**
 * <p>The destination for the asset.</p>
 */
export interface AssetDestinationEntry {
  __type?: "AssetDestinationEntry";
  /**
   * <p>The unique identifier for the asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The S3 bucket that is the destination for the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key?: string;
}

export namespace AssetDestinationEntry {
  export const filterSensitiveLog = (obj: AssetDestinationEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssetDestinationEntry =>
    __isa(o, "AssetDestinationEntry");
}

export interface AssetDetails {
  __type?: "AssetDetails";
  /**
   * <p>The S3 object that is the asset.</p>
   */
  S3SnapshotAsset?: S3SnapshotAsset;
}

export namespace AssetDetails {
  export const filterSensitiveLog = (obj: AssetDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssetDetails => __isa(o, "AssetDetails");
}

/**
 * <p>An asset in AWS Data Exchange is a piece of data that can be stored as an S3 object. The asset can be a structured data file, an image file, or some other data file. When you create an import job for your files, you create an asset in AWS Data Exchange for each of those files.</p>
 */
export interface AssetEntry {
  __type?: "AssetEntry";
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Information about the asset, including its size.</p>
   */
  AssetDetails: AssetDetails | undefined;

  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace AssetEntry {
  export const filterSensitiveLog = (obj: AssetEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssetEntry => __isa(o, "AssetEntry");
}

/**
 * <p>The source of the assets.</p>
 */
export interface AssetSourceEntry {
  __type?: "AssetSourceEntry";
  /**
   * <p>The S3 bucket that's part of the source of the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key: string | undefined;
}

export namespace AssetSourceEntry {
  export const filterSensitiveLog = (obj: AssetSourceEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssetSourceEntry =>
    __isa(o, "AssetSourceEntry");
}

export enum AssetType {
  S3_SNAPSHOT = "S3_SNAPSHOT"
}

export interface CancelJobRequest {
  __type?: "CancelJobRequest";
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export namespace CancelJobRequest {
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobRequest =>
    __isa(o, "CancelJobRequest");
}

export enum Code {
  ACCESS_DENIED_EXCEPTION = "ACCESS_DENIED_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION = "INTERNAL_SERVER_EXCEPTION",
  MALWARE_DETECTED = "MALWARE_DETECTED",
  MALWARE_SCAN_ENCRYPTED_FILE = "MALWARE_SCAN_ENCRYPTED_FILE",
  RESOURCE_NOT_FOUND_EXCEPTION = "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION = "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  VALIDATION_EXCEPTION = "VALIDATION_EXCEPTION"
}

/**
 * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource with the conflict.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource with the conflict.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

/**
 * <p>The request body for CreateDataSet.</p>
 */
export interface CreateDataSetRequest {
  __type?: "CreateDataSetRequest";
  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>A description for the data set. This value can be up to 16,348 characters long.</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * <p>A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDataSetRequest {
  export const filterSensitiveLog = (obj: CreateDataSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSetRequest =>
    __isa(o, "CreateDataSetRequest");
}

export interface CreateDataSetResponse {
  __type?: "CreateDataSetResponse";
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the data set.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace CreateDataSetResponse {
  export const filterSensitiveLog = (obj: CreateDataSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSetResponse =>
    __isa(o, "CreateDataSetResponse");
}

/**
 * <p>The request body for CreateJob.</p>
 */
export interface CreateJobRequest {
  __type?: "CreateJobRequest";
  /**
   * <p>The details for the CreateJob request.</p>
   */
  Details: RequestDetails | undefined;

  /**
   * <p>The type of job to be created.</p>
   */
  Type: Type | string | undefined;
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobRequest =>
    __isa(o, "CreateJobRequest");
}

export interface CreateJobResponse {
  __type?: "CreateJobResponse";
  /**
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * <p>The state of the job.</p>
   */
  State?: State | string;

  /**
   * <p>The job type.</p>
   */
  Type?: Type | string;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace CreateJobResponse {
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobResponse =>
    __isa(o, "CreateJobResponse");
}

/**
 * <p>The request body for CreateRevision.</p>
 */
export interface CreateRevisionRequest {
  __type?: "CreateRevisionRequest";
  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateRevisionRequest {
  export const filterSensitiveLog = (obj: CreateRevisionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRevisionRequest =>
    __isa(o, "CreateRevisionRequest");
}

export interface CreateRevisionResponse {
  __type?: "CreateRevisionResponse";
  /**
   * <p>The ARN for the revision</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the revision.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace CreateRevisionResponse {
  export const filterSensitiveLog = (obj: CreateRevisionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRevisionResponse =>
    __isa(o, "CreateRevisionResponse");
}

/**
 * <p>A data set is an AWS resource with one or more revisions.</p>
 */
export interface DataSetEntry {
  __type?: "DataSetEntry";
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The description for the data set.</p>
   */
  Description: string | undefined;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin: Origin | string | undefined;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace DataSetEntry {
  export const filterSensitiveLog = (obj: DataSetEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSetEntry => __isa(o, "DataSetEntry");
}

export interface DeleteAssetRequest {
  __type?: "DeleteAssetRequest";
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace DeleteAssetRequest {
  export const filterSensitiveLog = (obj: DeleteAssetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAssetRequest =>
    __isa(o, "DeleteAssetRequest");
}

export interface DeleteDataSetRequest {
  __type?: "DeleteDataSetRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

export namespace DeleteDataSetRequest {
  export const filterSensitiveLog = (obj: DeleteDataSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDataSetRequest =>
    __isa(o, "DeleteDataSetRequest");
}

export interface DeleteRevisionRequest {
  __type?: "DeleteRevisionRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace DeleteRevisionRequest {
  export const filterSensitiveLog = (obj: DeleteRevisionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRevisionRequest =>
    __isa(o, "DeleteRevisionRequest");
}

export interface Details {
  __type?: "Details";
  ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;
  /**
   * <p>The list of sources for the assets.</p>
   */
  ImportAssetsFromS3JobErrorDetails?: AssetSourceEntry[];
}

export namespace Details {
  export const filterSensitiveLog = (obj: Details): any => ({
    ...obj
  });
  export const isa = (o: any): o is Details => __isa(o, "Details");
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetsToS3RequestDetails {
  __type?: "ExportAssetsToS3RequestDetails";
  /**
   * <p>The destination for the asset.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ExportAssetsToS3RequestDetails {
  export const filterSensitiveLog = (
    obj: ExportAssetsToS3RequestDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportAssetsToS3RequestDetails =>
    __isa(o, "ExportAssetsToS3RequestDetails");
}

/**
 * <p>Details about the export to Amazon S3 response.</p>
 */
export interface ExportAssetsToS3ResponseDetails {
  __type?: "ExportAssetsToS3ResponseDetails";
  /**
   * <p>The destination in Amazon S3 where the asset is exported.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;
}

export namespace ExportAssetsToS3ResponseDetails {
  export const filterSensitiveLog = (
    obj: ExportAssetsToS3ResponseDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportAssetsToS3ResponseDetails =>
    __isa(o, "ExportAssetsToS3ResponseDetails");
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetToSignedUrlRequestDetails {
  __type?: "ExportAssetToSignedUrlRequestDetails";
  /**
   * <p>The unique identifier for the asset that is exported to a signed URL.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ExportAssetToSignedUrlRequestDetails {
  export const filterSensitiveLog = (
    obj: ExportAssetToSignedUrlRequestDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportAssetToSignedUrlRequestDetails =>
    __isa(o, "ExportAssetToSignedUrlRequestDetails");
}

/**
 * <p>The details of the export to signed URL response.</p>
 */
export interface ExportAssetToSignedUrlResponseDetails {
  __type?: "ExportAssetToSignedUrlResponseDetails";
  /**
   * <p>The unique identifier for the asset associated with this export job.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL for the export request.</p>
   */
  SignedUrl?: string;

  /**
   * <p>The date and time that the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

export namespace ExportAssetToSignedUrlResponseDetails {
  export const filterSensitiveLog = (
    obj: ExportAssetToSignedUrlResponseDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportAssetToSignedUrlResponseDetails =>
    __isa(o, "ExportAssetToSignedUrlResponseDetails");
}

export interface GetAssetRequest {
  __type?: "GetAssetRequest";
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace GetAssetRequest {
  export const filterSensitiveLog = (obj: GetAssetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAssetRequest =>
    __isa(o, "GetAssetRequest");
}

export interface GetAssetResponse {
  __type?: "GetAssetResponse";
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the asset, including its size.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * <p>The name of the asset When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetAssetResponse {
  export const filterSensitiveLog = (obj: GetAssetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAssetResponse =>
    __isa(o, "GetAssetResponse");
}

export interface GetDataSetRequest {
  __type?: "GetDataSetRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

export namespace GetDataSetRequest {
  export const filterSensitiveLog = (obj: GetDataSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataSetRequest =>
    __isa(o, "GetDataSetRequest");
}

export interface GetDataSetResponse {
  __type?: "GetDataSetResponse";
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the data set.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetDataSetResponse {
  export const filterSensitiveLog = (obj: GetDataSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataSetResponse =>
    __isa(o, "GetDataSetResponse");
}

export interface GetJobRequest {
  __type?: "GetJobRequest";
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export namespace GetJobRequest {
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobRequest => __isa(o, "GetJobRequest");
}

export interface GetJobResponse {
  __type?: "GetJobResponse";
  /**
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * <p>The state of the job.</p>
   */
  State?: State | string;

  /**
   * <p>The job type.</p>
   */
  Type?: Type | string;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetJobResponse {
  export const filterSensitiveLog = (obj: GetJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobResponse =>
    __isa(o, "GetJobResponse");
}

export interface GetRevisionRequest {
  __type?: "GetRevisionRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace GetRevisionRequest {
  export const filterSensitiveLog = (obj: GetRevisionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRevisionRequest =>
    __isa(o, "GetRevisionRequest");
}

export interface GetRevisionResponse {
  __type?: "GetRevisionResponse";
  /**
   * <p>The ARN for the revision</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the revision.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace GetRevisionResponse {
  export const filterSensitiveLog = (obj: GetRevisionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRevisionResponse =>
    __isa(o, "GetRevisionResponse");
}

export interface ImportAssetFromSignedUrlJobErrorDetails {
  __type?: "ImportAssetFromSignedUrlJobErrorDetails";
  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.</p>
   */
  AssetName: string | undefined;
}

export namespace ImportAssetFromSignedUrlJobErrorDetails {
  export const filterSensitiveLog = (
    obj: ImportAssetFromSignedUrlJobErrorDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportAssetFromSignedUrlJobErrorDetails =>
    __isa(o, "ImportAssetFromSignedUrlJobErrorDetails");
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetFromSignedUrlRequestDetails {
  __type?: "ImportAssetFromSignedUrlRequestDetails";
  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name.</p>
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetFromSignedUrlRequestDetails {
  export const filterSensitiveLog = (
    obj: ImportAssetFromSignedUrlRequestDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportAssetFromSignedUrlRequestDetails =>
    __isa(o, "ImportAssetFromSignedUrlRequestDetails");
}

/**
 * <p>The details in the response for an import request, including the signed URL and other information.</p>
 */
export interface ImportAssetFromSignedUrlResponseDetails {
  __type?: "ImportAssetFromSignedUrlResponseDetails";
  /**
   * <p>The name for the asset associated with this import response.</p>
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash?: string;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL.</p>
   */
  SignedUrl?: string;

  /**
   * <p>The time and date at which the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

export namespace ImportAssetFromSignedUrlResponseDetails {
  export const filterSensitiveLog = (
    obj: ImportAssetFromSignedUrlResponseDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportAssetFromSignedUrlResponseDetails =>
    __isa(o, "ImportAssetFromSignedUrlResponseDetails");
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetsFromS3RequestDetails {
  __type?: "ImportAssetsFromS3RequestDetails";
  /**
   * <p>Is a list of S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetsFromS3RequestDetails {
  export const filterSensitiveLog = (
    obj: ImportAssetsFromS3RequestDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportAssetsFromS3RequestDetails =>
    __isa(o, "ImportAssetsFromS3RequestDetails");
}

/**
 * <p>Details from an import from Amazon S3 response.</p>
 */
export interface ImportAssetsFromS3ResponseDetails {
  __type?: "ImportAssetsFromS3ResponseDetails";
  /**
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;
}

export namespace ImportAssetsFromS3ResponseDetails {
  export const filterSensitiveLog = (
    obj: ImportAssetsFromS3ResponseDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportAssetsFromS3ResponseDetails =>
    __isa(o, "ImportAssetsFromS3ResponseDetails");
}

/**
 * An exception occurred with the service.
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * The message identifying the service exception that occurred.
   */
  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerException =>
    __isa(o, "InternalServerException");
}

/**
 * AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.
 */
export interface JobEntry {
  __type?: "JobEntry";
  /**
   * <p>The ARN for the job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>Details of the operation to be performed by the job, such as export destination details or import source details.</p>
   */
  Details: ResponseDetails | undefined;

  /**
   * <p>Errors for jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id: string | undefined;

  /**
   * <p>The state of the job.</p>
   */
  State: State | string | undefined;

  /**
   * <p>The job type.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace JobEntry {
  export const filterSensitiveLog = (obj: JobEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobEntry => __isa(o, "JobEntry");
}

/**
 * An error that occurred with the job request.
 */
export interface JobError {
  __type?: "JobError";
  /**
   * The code for the job error.
   */
  Code: Code | string | undefined;

  Details?: Details;
  /**
   * <p>The name of the limit that was reached.</p>
   */
  LimitName?: JobErrorLimitName | string;

  /**
   * The value of the exceeded limit.
   */
  LimitValue?: number;

  /**
   * The message related to the job error.
   */
  Message: string | undefined;

  /**
   * The unqiue identifier for the resource related to the error.
   */
  ResourceId?: string;

  /**
   * The type of resource related to the error.
   */
  ResourceType?: JobErrorResourceTypes | string;
}

export namespace JobError {
  export const filterSensitiveLog = (obj: JobError): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobError => __isa(o, "JobError");
}

export enum JobErrorLimitName {
  Asset_size_in_GB = "Asset size in GB",
  Assets_per_revision = "Assets per revision"
}

export enum JobErrorResourceTypes {
  ASSET = "ASSET",
  REVISION = "REVISION"
}

export enum LimitName {
  Asset_per_export_job_from_Amazon_S3 = "Asset per export job from Amazon S3",
  Asset_size_in_GB = "Asset size in GB",
  Assets_per_import_job_from_Amazon_S3 = "Assets per import job from Amazon S3",
  Assets_per_revision = "Assets per revision",
  Concurrent_in_progress_jobs_to_export_assets_to_Amazon_S3 = "Concurrent in progress jobs to export assets to Amazon S3",
  Concurrent_in_progress_jobs_to_export_assets_to_a_signed_URL = "Concurrent in progress jobs to export assets to a signed URL",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_S3 = "Concurrent in progress jobs to import assets from Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_a_signed_URL = "Concurrent in progress jobs to import assets from a signed URL",
  Data_sets_per_account = "Data sets per account",
  Data_sets_per_product = "Data sets per product",
  Products_per_account = "Products per account",
  Revisions_per_data_set = "Revisions per data set"
}

export interface ListDataSetRevisionsRequest {
  __type?: "ListDataSetRevisionsRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSetRevisionsRequest {
  export const filterSensitiveLog = (
    obj: ListDataSetRevisionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSetRevisionsRequest =>
    __isa(o, "ListDataSetRevisionsRequest");
}

export interface ListDataSetRevisionsResponse {
  __type?: "ListDataSetRevisionsResponse";
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The asset objects listed by the request.</p>
   */
  Revisions?: RevisionEntry[];
}

export namespace ListDataSetRevisionsResponse {
  export const filterSensitiveLog = (
    obj: ListDataSetRevisionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSetRevisionsResponse =>
    __isa(o, "ListDataSetRevisionsResponse");
}

export interface ListDataSetsRequest {
  __type?: "ListDataSetsRequest";
  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: string;
}

export namespace ListDataSetsRequest {
  export const filterSensitiveLog = (obj: ListDataSetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSetsRequest =>
    __isa(o, "ListDataSetsRequest");
}

export interface ListDataSetsResponse {
  __type?: "ListDataSetsResponse";
  /**
   * <p>The data set objects listed by the request.</p>
   */
  DataSets?: DataSetEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListDataSetsResponse {
  export const filterSensitiveLog = (obj: ListDataSetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDataSetsResponse =>
    __isa(o, "ListDataSetsResponse");
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId?: string;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsRequest =>
    __isa(o, "ListJobsRequest");
}

export interface ListJobsResponse {
  __type?: "ListJobsResponse";
  /**
   * <p>The jobs listed by the request.</p>
   */
  Jobs?: JobEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsResponse =>
    __isa(o, "ListJobsResponse");
}

export interface ListRevisionAssetsRequest {
  __type?: "ListRevisionAssetsRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace ListRevisionAssetsRequest {
  export const filterSensitiveLog = (obj: ListRevisionAssetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRevisionAssetsRequest =>
    __isa(o, "ListRevisionAssetsRequest");
}

export interface ListRevisionAssetsResponse {
  __type?: "ListRevisionAssetsResponse";
  /**
   * <p>The asset objects listed by the request.</p>
   */
  Assets?: AssetEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListRevisionAssetsResponse {
  export const filterSensitiveLog = (obj: ListRevisionAssetsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRevisionAssetsResponse =>
    __isa(o, "ListRevisionAssetsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * A label that consists of a customer-defined key and an optional value.
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export enum Origin {
  ENTITLED = "ENTITLED",
  OWNED = "OWNED"
}

export interface OriginDetails {
  __type?: "OriginDetails";
  ProductId: string | undefined;
}

export namespace OriginDetails {
  export const filterSensitiveLog = (obj: OriginDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is OriginDetails => __isa(o, "OriginDetails");
}

/**
 * <p>The details for the request.</p>
 */
export interface RequestDetails {
  __type?: "RequestDetails";
  /**
   * <p>Details about the export to signed URL request.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

  /**
   * <p>Details about the export to Amazon S3 request.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3RequestDetails;

  /**
   * <p>Details about the import from signed URL request.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

  /**
   * <p>Details about the import from Amazon S3 request.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
}

export namespace RequestDetails {
  export const filterSensitiveLog = (obj: RequestDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestDetails =>
    __isa(o, "RequestDetails");
}

/**
 * <p>The resource couldn't be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The resource couldn't be found.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource that couldn't be found.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource that couldn't be found.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

export enum ResourceType {
  ASSET = "ASSET",
  DATA_SET = "DATA_SET",
  JOB = "JOB",
  REVISION = "REVISION"
}

/**
 * <p>Details for the response.</p>
 */
export interface ResponseDetails {
  __type?: "ResponseDetails";
  /**
   * <p>Details for the export to signed URL response.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;

  /**
   * <p>Details for the export to Amazon S3 response.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;

  /**
   * <p>Details for the import from signed URL response.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;

  /**
   * <p>Details for the import from Amazon S3 response.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;
}

export namespace ResponseDetails {
  export const filterSensitiveLog = (obj: ResponseDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResponseDetails =>
    __isa(o, "ResponseDetails");
}

/**
 * <p>A revision is a container for one or more assets.</p>
 */
export interface RevisionEntry {
  __type?: "RevisionEntry";
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace RevisionEntry {
  export const filterSensitiveLog = (obj: RevisionEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevisionEntry => __isa(o, "RevisionEntry");
}

/**
 * <p>The S3 object that is the asset.</p>
 */
export interface S3SnapshotAsset {
  __type?: "S3SnapshotAsset";
  /**
   * <p>The size of the S3 object that is the object.</p>
   */
  Size: number | undefined;
}

export namespace S3SnapshotAsset {
  export const filterSensitiveLog = (obj: S3SnapshotAsset): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3SnapshotAsset =>
    __isa(o, "S3SnapshotAsset");
}

/**
 * <p>The request has exceeded the quotas imposed by the service.</p>
 */
export interface ServiceLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceLimitExceededException";
  $fault: "client";
  /**
   * <p>The name of the quota that was exceeded.</p>
   */
  LimitName?: LimitName | string;

  /**
   * <p>The maximum value for the service-specific limit.</p>
   */
  LimitValue?: number;

  /**
   * <p>The request has exceeded the quotas imposed by the service.</p>
   */
  Message: string | undefined;
}

export namespace ServiceLimitExceededException {
  export const filterSensitiveLog = (
    obj: ServiceLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceLimitExceededException =>
    __isa(o, "ServiceLimitExceededException");
}

export interface StartJobRequest {
  __type?: "StartJobRequest";
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export namespace StartJobRequest {
  export const filterSensitiveLog = (obj: StartJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartJobRequest =>
    __isa(o, "StartJobRequest");
}

export interface StartJobResponse {
  __type?: "StartJobResponse";
}

export namespace StartJobResponse {
  export const filterSensitiveLog = (obj: StartJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartJobResponse =>
    __isa(o, "StartJobResponse");
}

export enum State {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS",
  TIMED_OUT = "TIMED_OUT",
  WAITING = "WAITING"
}

/**
 * <p>The request body for TagResource.</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * A label that consists of a customer-defined key and an optional value.
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The limit on the number of requests per second was exceeded.</p>
   */
  Message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

export enum Type {
  EXPORT_ASSETS_TO_S3 = "EXPORT_ASSETS_TO_S3",
  EXPORT_ASSET_TO_SIGNED_URL = "EXPORT_ASSET_TO_SIGNED_URL",
  IMPORT_ASSETS_FROM_S3 = "IMPORT_ASSETS_FROM_S3",
  IMPORT_ASSET_FROM_SIGNED_URL = "IMPORT_ASSET_FROM_SIGNED_URL"
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * The key tags.
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

/**
 * <p>The request body for UpdateAsset.</p>
 */
export interface UpdateAssetRequest {
  __type?: "UpdateAssetRequest";
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace UpdateAssetRequest {
  export const filterSensitiveLog = (obj: UpdateAssetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAssetRequest =>
    __isa(o, "UpdateAssetRequest");
}

export interface UpdateAssetResponse {
  __type?: "UpdateAssetResponse";
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the asset, including its size.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * <p>The name of the asset When importing from Amazon S3, the S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target S3 object key.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace UpdateAssetResponse {
  export const filterSensitiveLog = (obj: UpdateAssetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAssetResponse =>
    __isa(o, "UpdateAssetResponse");
}

/**
 * <p>The request body for UpdateDataSet.</p>
 */
export interface UpdateDataSetRequest {
  __type?: "UpdateDataSetRequest";
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;
}

export namespace UpdateDataSetRequest {
  export const filterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSetRequest =>
    __isa(o, "UpdateDataSetRequest");
}

export interface UpdateDataSetResponse {
  __type?: "UpdateDataSetResponse";
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of file your data is stored in. Currently, the supported asset type is S3_SNAPSHOT.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace UpdateDataSetResponse {
  export const filterSensitiveLog = (obj: UpdateDataSetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSetResponse =>
    __isa(o, "UpdateDataSetResponse");
}

/**
 * <p>The request body for UpdateRevision.</p>
 */
export interface UpdateRevisionRequest {
  __type?: "UpdateRevisionRequest";
  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export namespace UpdateRevisionRequest {
  export const filterSensitiveLog = (obj: UpdateRevisionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRevisionRequest =>
    __isa(o, "UpdateRevisionRequest");
}

export interface UpdateRevisionResponse {
  __type?: "UpdateRevisionResponse";
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p> <p>Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export namespace UpdateRevisionResponse {
  export const filterSensitiveLog = (obj: UpdateRevisionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRevisionResponse =>
    __isa(o, "UpdateRevisionResponse");
}

/**
 * <p>The request was invalid.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The message that informs you about what was invalid about the request.</p>
   */
  Message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}
