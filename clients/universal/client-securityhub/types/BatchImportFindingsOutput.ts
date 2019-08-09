import { _UnmarshalledImportFindingsError } from "./_ImportFindingsError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchImportFindingsOutput shape
 */
export interface BatchImportFindingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number;

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number;

  /**
   * <p>The list of the findings that failed to import.</p>
   */
  FailedFindings?: Array<_UnmarshalledImportFindingsError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
