import { _UnmarshalledMigrationTask } from "./_MigrationTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMigrationTaskOutput shape
 */
export interface DescribeMigrationTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object encapsulating information about the migration task.</p>
   */
  MigrationTask?: _UnmarshalledMigrationTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
