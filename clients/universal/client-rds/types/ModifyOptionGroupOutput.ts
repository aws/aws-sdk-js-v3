import { _UnmarshalledOptionGroup } from "./_OptionGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyOptionGroupOutput shape
 */
export interface ModifyOptionGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  OptionGroup?: _UnmarshalledOptionGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
