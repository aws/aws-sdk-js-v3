import { _UnmarshalledRoot } from "./_Root";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * EnablePolicyTypeOutput shape
 */
export interface EnablePolicyTypeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that shows the root with the updated list of enabled policy types.</p>
   */
  Root?: _UnmarshalledRoot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
