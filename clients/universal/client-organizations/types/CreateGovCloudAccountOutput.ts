import { _UnmarshalledCreateAccountStatus } from "./_CreateAccountStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGovCloudAccountOutput shape
 */
export interface CreateGovCloudAccountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.</p>
   */
  CreateAccountStatus?: _UnmarshalledCreateAccountStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
