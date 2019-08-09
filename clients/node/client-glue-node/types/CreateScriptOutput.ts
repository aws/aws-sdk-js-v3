import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateScriptOutput shape
 */
export interface CreateScriptOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Python script generated from the DAG.</p>
   */
  PythonScript?: string;

  /**
   * <p>The Scala code generated from the DAG.</p>
   */
  ScalaCode?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
