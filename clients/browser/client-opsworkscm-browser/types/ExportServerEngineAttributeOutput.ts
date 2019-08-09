import { _UnmarshalledEngineAttribute } from "./_EngineAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportServerEngineAttributeOutput shape
 */
export interface ExportServerEngineAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested engine attribute pair with attribute name and value.</p>
   */
  EngineAttribute?: _UnmarshalledEngineAttribute;

  /**
   * <p>The server name used in the request.</p>
   */
  ServerName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
