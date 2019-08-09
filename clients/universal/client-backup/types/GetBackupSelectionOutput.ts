import { _UnmarshalledBackupSelection } from "./_BackupSelection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBackupSelectionOutput shape
 */
export interface GetBackupSelectionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p> <p>It includes an array of resources, an optional array of patterns to exclude resources, an optional role to provide access to the AWS service that the resource belongs to, and an optional array of tags used to identify a set of resources.</p>
   */
  BackupSelection?: _UnmarshalledBackupSelection;

  /**
   * <p>Uniquely identifies the body of a request to assign a set of resources to a backup plan.</p>
   */
  SelectionId?: string;

  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId?: string;

  /**
   * <p>The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreationDate</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
