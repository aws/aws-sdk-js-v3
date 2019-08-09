import { _UnmarshalledSnapshotCopyGrant } from "./_SnapshotCopyGrant";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSnapshotCopyGrantOutput shape
 */
export interface CreateSnapshotCopyGrantOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   */
  SnapshotCopyGrant?: _UnmarshalledSnapshotCopyGrant;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
