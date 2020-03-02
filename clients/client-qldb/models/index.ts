import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface CreateLedgerRequest {
  __type?: "CreateLedgerRequest";
  /**
   * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
   *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
   *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
   *          console disables deletion protection for you when you use it to delete a ledger.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The name of the ledger that you want to create. The name must be unique among all of
   *          your ledgers in the current AWS Region.</p>
   */
  Name: string | undefined;

  /**
   * <p>The permissions mode to assign to the ledger that you want to create.</p>
   */
  PermissionsMode: PermissionsMode | string | undefined;

  /**
   * <p>The key-value pairs to add as tags to the ledger that you want to create. Tag keys are
   *          case sensitive. Tag values are case sensitive and can be null.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateLedgerRequest {
  export function isa(o: any): o is CreateLedgerRequest {
    return __isa(o, "CreateLedgerRequest");
  }
}

export interface CreateLedgerResponse {
  __type?: "CreateLedgerResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the ledger.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
   *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
   *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
   *          console disables deletion protection for you when you use it to delete a ledger.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The name of the ledger.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the ledger.</p>
   */
  State?: LedgerState | string;
}

export namespace CreateLedgerResponse {
  export function isa(o: any): o is CreateLedgerResponse {
    return __isa(o, "CreateLedgerResponse");
  }
}

export interface DeleteLedgerRequest {
  __type?: "DeleteLedgerRequest";
  /**
   * <p>The name of the ledger that you want to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteLedgerRequest {
  export function isa(o: any): o is DeleteLedgerRequest {
    return __isa(o, "DeleteLedgerRequest");
  }
}

export interface DescribeJournalS3ExportRequest {
  __type?: "DescribeJournalS3ExportRequest";
  /**
   * <p>The unique ID of the journal export job that you want to describe.</p>
   */
  ExportId: string | undefined;

  /**
   * <p>The name of the ledger.</p>
   */
  Name: string | undefined;
}

export namespace DescribeJournalS3ExportRequest {
  export function isa(o: any): o is DescribeJournalS3ExportRequest {
    return __isa(o, "DescribeJournalS3ExportRequest");
  }
}

export interface DescribeJournalS3ExportResponse {
  __type?: "DescribeJournalS3ExportResponse";
  /**
   * <p>Information about the journal export job returned by a
   *             <code>DescribeJournalS3Export</code> request.</p>
   */
  ExportDescription: JournalS3ExportDescription | undefined;
}

export namespace DescribeJournalS3ExportResponse {
  export function isa(o: any): o is DescribeJournalS3ExportResponse {
    return __isa(o, "DescribeJournalS3ExportResponse");
  }
}

export interface DescribeLedgerRequest {
  __type?: "DescribeLedgerRequest";
  /**
   * <p>The name of the ledger that you want to describe.</p>
   */
  Name: string | undefined;
}

export namespace DescribeLedgerRequest {
  export function isa(o: any): o is DescribeLedgerRequest {
    return __isa(o, "DescribeLedgerRequest");
  }
}

export interface DescribeLedgerResponse {
  __type?: "DescribeLedgerResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the ledger.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
   *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
   *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
   *          console disables deletion protection for you when you use it to delete a ledger.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The name of the ledger.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the ledger.</p>
   */
  State?: LedgerState | string;
}

export namespace DescribeLedgerResponse {
  export function isa(o: any): o is DescribeLedgerResponse {
    return __isa(o, "DescribeLedgerResponse");
  }
}

export interface ExportJournalToS3Request {
  __type?: "ExportJournalToS3Request";
  /**
   * <p>The exclusive end date and time for the range of journal contents that you want to
   *          export.</p>
   *          <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format
   *          and in Universal Coordinated Time (UTC). For example:
   *          <code>2019-06-13T21:36:34Z</code>
   *          </p>
   *          <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and
   *          time.</p>
   */
  ExclusiveEndTime: Date | undefined;

  /**
   * <p>The inclusive start date and time for the range of journal contents that you want to
   *          export.</p>
   *          <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time
   *          format and in Universal Coordinated Time (UTC). For example:
   *             <code>2019-06-13T21:36:34Z</code>
   *          </p>
   *          <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p>
   *          <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's
   *             <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's
   *             <code>CreationDateTime</code>.</p>
   */
  InclusiveStartTime: Date | undefined;

  /**
   * <p>The name of the ledger.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
   *          journal export job to do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p>
   *             </li>
   *             <li>
   *                <p>(Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS
   *                KMS) for server-side encryption of your exported data.</p>
   *             </li>
   *          </ul>
   */
  RoleArn: string | undefined;

  /**
   * <p>The configuration settings of the Amazon S3 bucket destination for your export
   *          request.</p>
   */
  S3ExportConfiguration: S3ExportConfiguration | undefined;
}

export namespace ExportJournalToS3Request {
  export function isa(o: any): o is ExportJournalToS3Request {
    return __isa(o, "ExportJournalToS3Request");
  }
}

export interface ExportJournalToS3Response {
  __type?: "ExportJournalToS3Response";
  /**
   * <p>The unique ID that QLDB assigns to each journal export job.</p>
   *          <p>To describe your export request and check the status of the job, you can use
   *             <code>ExportId</code> to call <code>DescribeJournalS3Export</code>.</p>
   */
  ExportId: string | undefined;
}

export namespace ExportJournalToS3Response {
  export function isa(o: any): o is ExportJournalToS3Response {
    return __isa(o, "ExportJournalToS3Response");
  }
}

export enum ExportStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS"
}

export interface GetBlockRequest {
  __type?: "GetBlockRequest";
  /**
   * <p>The location of the block that you want to request. An address is an Amazon Ion
   *          structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p>
   *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14}</code>
   *          </p>
   */
  BlockAddress: ValueHolder | undefined;

  /**
   * <p>The latest block location covered by the digest for which to request a proof. An address
   *          is an Amazon Ion structure that has two fields: <code>strandId</code> and
   *             <code>sequenceNo</code>.</p>
   *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49}</code>
   *          </p>
   */
  DigestTipAddress?: ValueHolder;

  /**
   * <p>The name of the ledger.</p>
   */
  Name: string | undefined;
}

export namespace GetBlockRequest {
  export function isa(o: any): o is GetBlockRequest {
    return __isa(o, "GetBlockRequest");
  }
}

export interface GetBlockResponse {
  __type?: "GetBlockResponse";
  /**
   * <p>The block data object in Amazon Ion format.</p>
   */
  Block: ValueHolder | undefined;

  /**
   * <p>The proof object in Amazon Ion format returned by a <code>GetBlock</code> request. A
   *          proof contains the list of hash values required to recalculate the specified digest using a
   *          Merkle tree, starting with the specified block.</p>
   */
  Proof?: ValueHolder;
}

export namespace GetBlockResponse {
  export function isa(o: any): o is GetBlockResponse {
    return __isa(o, "GetBlockResponse");
  }
}

export interface GetDigestRequest {
  __type?: "GetDigestRequest";
  /**
   * <p>The name of the ledger.</p>
   */
  Name: string | undefined;
}

export namespace GetDigestRequest {
  export function isa(o: any): o is GetDigestRequest {
    return __isa(o, "GetDigestRequest");
  }
}

export interface GetDigestResponse {
  __type?: "GetDigestResponse";
  /**
   * <p>The 256-bit hash value representing the digest returned by a <code>GetDigest</code>
   *          request.</p>
   */
  Digest: Uint8Array | undefined;

  /**
   * <p>The latest block location covered by the digest that you requested. An address is an
   *          Amazon Ion structure that has two fields: <code>strandId</code> and
   *          <code>sequenceNo</code>.</p>
   */
  DigestTipAddress: ValueHolder | undefined;
}

export namespace GetDigestResponse {
  export function isa(o: any): o is GetDigestResponse {
    return __isa(o, "GetDigestResponse");
  }
}

export interface GetRevisionRequest {
  __type?: "GetRevisionRequest";
  /**
   * <p>The block location of the document revision to be verified. An address is an Amazon Ion
   *          structure that has two fields: <code>strandId</code> and <code>sequenceNo</code>.</p>
   *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14}</code>
   *          </p>
   */
  BlockAddress: ValueHolder | undefined;

  /**
   * <p>The latest block location covered by the digest for which to request a proof. An address
   *          is an Amazon Ion structure that has two fields: <code>strandId</code> and
   *             <code>sequenceNo</code>.</p>
   *          <p>For example: <code>{strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49}</code>
   *          </p>
   */
  DigestTipAddress?: ValueHolder;

  /**
   * <p>The unique ID of the document to be verified.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The name of the ledger.</p>
   */
  Name: string | undefined;
}

export namespace GetRevisionRequest {
  export function isa(o: any): o is GetRevisionRequest {
    return __isa(o, "GetRevisionRequest");
  }
}

export interface GetRevisionResponse {
  __type?: "GetRevisionResponse";
  /**
   * <p>The proof object in Amazon Ion format returned by a <code>GetRevision</code> request. A
   *          proof contains the list of hash values that are required to recalculate the specified
   *          digest using a Merkle tree, starting with the specified document revision.</p>
   */
  Proof?: ValueHolder;

  /**
   * <p>The document revision data object in Amazon Ion format.</p>
   */
  Revision: ValueHolder | undefined;
}

export namespace GetRevisionResponse {
  export function isa(o: any): o is GetRevisionResponse {
    return __isa(o, "GetRevisionResponse");
  }
}

/**
 * <p>One or more parameters in the request aren't valid.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the invalid parameter.</p>
   */
  ParameterName?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>The information about a journal export job, including the ledger name, export ID, when
 *          it was created, current status, and its start and end time export parameters.</p>
 */
export interface JournalS3ExportDescription {
  __type?: "JournalS3ExportDescription";
  /**
   * <p>The exclusive end date and time for the range of journal contents that are specified in
   *          the original export request.</p>
   */
  ExclusiveEndTime: Date | undefined;

  /**
   * <p>The date and time, in epoch time format, when the export job was created. (Epoch time
   *          format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   */
  ExportCreationTime: Date | undefined;

  /**
   * <p>The unique ID of the journal export job.</p>
   */
  ExportId: string | undefined;

  /**
   * <p>The inclusive start date and time for the range of journal contents that are specified
   *          in the original export request.</p>
   */
  InclusiveStartTime: Date | undefined;

  /**
   * <p>The name of the ledger.</p>
   */
  LedgerName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a
   *          journal export job to do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.</p>
   *             </li>
   *             <li>
   *                <p>(Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS
   *                KMS) for server-side encryption of your exported data.</p>
   *             </li>
   *          </ul>
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal
   *          contents.</p>
   */
  S3ExportConfiguration: S3ExportConfiguration | undefined;

  /**
   * <p>The current state of the journal export job.</p>
   */
  Status: ExportStatus | string | undefined;
}

export namespace JournalS3ExportDescription {
  export function isa(o: any): o is JournalS3ExportDescription {
    return __isa(o, "JournalS3ExportDescription");
  }
}

export enum LedgerState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING"
}

/**
 * <p>Information about a ledger, including its name, state, and when it was created.</p>
 */
export interface LedgerSummary {
  __type?: "LedgerSummary";
  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The name of the ledger.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the ledger.</p>
   */
  State?: LedgerState | string;
}

export namespace LedgerSummary {
  export function isa(o: any): o is LedgerSummary {
    return __isa(o, "LedgerSummary");
  }
}

/**
 * <p>You have reached the limit on the maximum number of resources allowed.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListJournalS3ExportsForLedgerRequest {
  __type?: "ListJournalS3ExportsForLedgerRequest";
  /**
   * <p>The maximum number of results to return in a single
   *             <code>ListJournalS3ExportsForLedger</code> request. (The actual number of results
   *          returned might be fewer.)</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the ledger.</p>
   */
  Name: string | undefined;

  /**
   * <p>A pagination token, indicating that you want to retrieve the next page of results. If
   *          you received a value for <code>NextToken</code> in the response from a previous
   *             <code>ListJournalS3ExportsForLedger</code> call, then you should use that value as input
   *          here.</p>
   */
  NextToken?: string;
}

export namespace ListJournalS3ExportsForLedgerRequest {
  export function isa(o: any): o is ListJournalS3ExportsForLedgerRequest {
    return __isa(o, "ListJournalS3ExportsForLedgerRequest");
  }
}

export interface ListJournalS3ExportsForLedgerResponse {
  __type?: "ListJournalS3ExportsForLedgerResponse";
  /**
   * <p>The array of journal export job descriptions that are associated with the specified
   *          ledger.</p>
   */
  JournalS3Exports?: Array<JournalS3ExportDescription>;

  /**
   * <ul>
   *             <li>
   *                <p>If <code>NextToken</code> is empty, then the last page of results has been
   *                processed and there are no more results to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
   *                results available. To retrieve the next page of results, use the value of
   *                   <code>NextToken</code> in a subsequent <code>ListJournalS3ExportsForLedger</code>
   *                call.</p>
   *             </li>
   *          </ul>
   */
  NextToken?: string;
}

export namespace ListJournalS3ExportsForLedgerResponse {
  export function isa(o: any): o is ListJournalS3ExportsForLedgerResponse {
    return __isa(o, "ListJournalS3ExportsForLedgerResponse");
  }
}

export interface ListJournalS3ExportsRequest {
  __type?: "ListJournalS3ExportsRequest";
  /**
   * <p>The maximum number of results to return in a single <code>ListJournalS3Exports</code>
   *          request. (The actual number of results returned might be fewer.)</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token, indicating that you want to retrieve the next page of results. If
   *          you received a value for <code>NextToken</code> in the response from a previous
   *             <code>ListJournalS3Exports</code> call, then you should use that value as input
   *          here.</p>
   */
  NextToken?: string;
}

export namespace ListJournalS3ExportsRequest {
  export function isa(o: any): o is ListJournalS3ExportsRequest {
    return __isa(o, "ListJournalS3ExportsRequest");
  }
}

export interface ListJournalS3ExportsResponse {
  __type?: "ListJournalS3ExportsResponse";
  /**
   * <p>The array of journal export job descriptions for all ledgers that are associated with
   *          the current AWS account and Region.</p>
   */
  JournalS3Exports?: Array<JournalS3ExportDescription>;

  /**
   * <ul>
   *             <li>
   *                <p>If <code>NextToken</code> is empty, then the last page of results has been
   *                processed and there are no more results to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
   *                results available. To retrieve the next page of results, use the value of
   *                   <code>NextToken</code> in a subsequent <code>ListJournalS3Exports</code>
   *                call.</p>
   *             </li>
   *          </ul>
   */
  NextToken?: string;
}

export namespace ListJournalS3ExportsResponse {
  export function isa(o: any): o is ListJournalS3ExportsResponse {
    return __isa(o, "ListJournalS3ExportsResponse");
  }
}

export interface ListLedgersRequest {
  __type?: "ListLedgersRequest";
  /**
   * <p>The maximum number of results to return in a single <code>ListLedgers</code> request.
   *          (The actual number of results returned might be fewer.)</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token, indicating that you want to retrieve the next page of results. If
   *          you received a value for <code>NextToken</code> in the response from a previous
   *             <code>ListLedgers</code> call, then you should use that value as input here.</p>
   */
  NextToken?: string;
}

export namespace ListLedgersRequest {
  export function isa(o: any): o is ListLedgersRequest {
    return __isa(o, "ListLedgersRequest");
  }
}

export interface ListLedgersResponse {
  __type?: "ListLedgersResponse";
  /**
   * <p>The array of ledger summaries that are associated with the current AWS account and
   *          Region.</p>
   */
  Ledgers?: Array<LedgerSummary>;

  /**
   * <p>A pagination token, indicating whether there are more results available:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>NextToken</code> is empty, then the last page of results has been
   *                processed and there are no more results to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>If <code>NextToken</code> is <i>not</i> empty, then there are more
   *                results available. To retrieve the next page of results, use the value of
   *                   <code>NextToken</code> in a subsequent <code>ListLedgers</code> call.</p>
   *             </li>
   *          </ul>
   */
  NextToken?: string;
}

export namespace ListLedgersResponse {
  export function isa(o: any): o is ListLedgersResponse {
    return __isa(o, "ListLedgersResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) for which you want to list the tags. For example:</p>
   *          <p>
   *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
   *          </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags that are currently associated with the specified Amazon QLDB resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export enum PermissionsMode {
  ALLOW_ALL = "ALLOW_ALL"
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The specified resource can't be modified at this time.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>The specified resource doesn't exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The operation failed because a condition wasn't satisfied in advance.</p>
 */
export interface ResourcePreconditionNotMetException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourcePreconditionNotMetException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;
}

export namespace ResourcePreconditionNotMetException {
  export function isa(o: any): o is ResourcePreconditionNotMetException {
    return __isa(o, "ResourcePreconditionNotMetException");
  }
}

/**
 * <p>The encryption settings that are used by a journal export job to write data in an
 *          Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface S3EncryptionConfiguration {
  __type?: "S3EncryptionConfiguration";
  /**
   * <p>The Amazon Resource Name (ARN) for a customer master key (CMK) in AWS Key Management
   *          Service (AWS KMS).</p>
   *          <p>You must provide a <code>KmsKeyArn</code> if you specify <code>SSE_KMS</code> as the
   *             <code>ObjectEncryptionType</code>.</p>
   *          <p>
   *             <code>KmsKeyArn</code> is not required if you specify <code>SSE_S3</code> as the
   *             <code>ObjectEncryptionType</code>.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The Amazon S3 object encryption type.</p>
   *          <p>To learn more about server-side encryption options in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">Protecting Data
   *             Using Server-Side Encryption</a> in the <i>Amazon S3 Developer
   *          Guide</i>.</p>
   */
  ObjectEncryptionType: S3ObjectEncryptionType | string | undefined;
}

export namespace S3EncryptionConfiguration {
  export function isa(o: any): o is S3EncryptionConfiguration {
    return __isa(o, "S3EncryptionConfiguration");
  }
}

/**
 * <p>The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal
 *          contents.</p>
 */
export interface S3ExportConfiguration {
  __type?: "S3ExportConfiguration";
  /**
   * <p>The Amazon S3 bucket name in which a journal export job writes the journal contents.</p>
   *          <p>The bucket name must comply with the Amazon S3 bucket naming conventions. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket Restrictions and
   *             Limitations</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The encryption settings that are used by a journal export job to write data in an Amazon S3
   *          bucket.</p>
   */
  EncryptionConfiguration: S3EncryptionConfiguration | undefined;

  /**
   * <p>The prefix for the Amazon S3 bucket in which a journal export job writes the journal
   *          contents.</p>
   *          <p>The prefix must comply with Amazon S3 key naming rules and restrictions. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3 Developer
   *          Guide</i>.</p>
   *          <p>The following are examples of valid <code>Prefix</code> values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>JournalExports-ForMyLedger/Testing/</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JournalExports</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>My:Tests/</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Prefix: string | undefined;
}

export namespace S3ExportConfiguration {
  export function isa(o: any): o is S3ExportConfiguration {
    return __isa(o, "S3ExportConfiguration");
  }
}

export enum S3ObjectEncryptionType {
  NO_ENCRYPTION = "NO_ENCRYPTION",
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3"
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) to which you want to add the tags. For example:</p>
   *          <p>
   *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
   *          </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case
   *          sensitive. If you specify a key that already exists for the resource, your request fails
   *          and returns an error. Tag values are case sensitive and can be null.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) from which you want to remove the tags. For
   *          example:</p>
   *          <p>
   *             <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code>
   *          </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys that you want to remove.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateLedgerRequest {
  __type?: "UpdateLedgerRequest";
  /**
   * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
   *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
   *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
   *          console disables deletion protection for you when you use it to delete a ledger.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The name of the ledger.</p>
   */
  Name: string | undefined;
}

export namespace UpdateLedgerRequest {
  export function isa(o: any): o is UpdateLedgerRequest {
    return __isa(o, "UpdateLedgerRequest");
  }
}

export interface UpdateLedgerResponse {
  __type?: "UpdateLedgerResponse";
  /**
   * <p>The Amazon Resource Name (ARN) for the ledger.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in epoch time format, when the ledger was created. (Epoch time format
   *          is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The flag that prevents a ledger from being deleted by any user. If not provided on
   *          ledger creation, this feature is enabled (<code>true</code>) by default.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
   *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
   *          console disables deletion protection for you when you use it to delete a ledger.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The name of the ledger.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the ledger.</p>
   */
  State?: LedgerState | string;
}

export namespace UpdateLedgerResponse {
  export function isa(o: any): o is UpdateLedgerResponse {
    return __isa(o, "UpdateLedgerResponse");
  }
}

/**
 * <p>A structure that can contain an Amazon Ion value in multiple encoding formats.</p>
 */
export interface ValueHolder {
  __type?: "ValueHolder";
  /**
   * <p>An Amazon Ion plaintext value contained in a <code>ValueHolder</code> structure.</p>
   */
  IonText?: string;
}

export namespace ValueHolder {
  export function isa(o: any): o is ValueHolder {
    return __isa(o, "ValueHolder");
  }
}
