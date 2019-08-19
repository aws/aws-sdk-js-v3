import { _UnmarshalledAccountQuota } from "./_AccountQuota";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeAccountAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Account quota information.</p>
   */
  AccountQuotas?: Array<_UnmarshalledAccountQuota>;

  /**
   * <p>A unique AWS DMS identifier for an account in a particular AWS Region. The value of this identifier has the following format: <code>c99999999999</code>. DMS uses this identifier to name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket for storing task assessment reports in a given AWS Region. The format of this S3 bucket name is the following: <code>dms-<i>AccountNumber</i>-<i>UniqueAccountIdentifier</i>.</code> Here is an example name for this default S3 bucket: <code>dms-111122223333-c44445555666</code>.</p> <note> <p>AWS DMS supports <code>UniqueAccountIdentifier</code> in versions 3.1.4 and later.</p> </note>
   */
  UniqueAccountIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
