import { _UnmarshalledOrganization } from "./_Organization";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateOrganizationOutput shape
 */
export interface CreateOrganizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the newly created organization.</p>
   */
  Organization?: _UnmarshalledOrganization;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
