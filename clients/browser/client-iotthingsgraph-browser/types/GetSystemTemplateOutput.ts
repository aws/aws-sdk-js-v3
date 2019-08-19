import { _UnmarshalledSystemTemplateDescription } from "./_SystemTemplateDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSystemTemplateOutput shape
 */
export interface GetSystemTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains summary data about the system.</p>
   */
  description?: _UnmarshalledSystemTemplateDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
