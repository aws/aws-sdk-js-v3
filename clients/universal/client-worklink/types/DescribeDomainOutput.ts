import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDomainOutput shape
 */
export interface DescribeDomainOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the domain.</p>
   */
  DomainName?: string;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The time that the domain was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The current state for the domain.</p>
   */
  DomainStatus?:
    | "PENDING_VALIDATION"
    | "ASSOCIATING"
    | "ACTIVE"
    | "INACTIVE"
    | "DISASSOCIATING"
    | "DISASSOCIATED"
    | "FAILED_TO_ASSOCIATE"
    | "FAILED_TO_DISASSOCIATE"
    | string;

  /**
   * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
   */
  AcmCertificateArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
