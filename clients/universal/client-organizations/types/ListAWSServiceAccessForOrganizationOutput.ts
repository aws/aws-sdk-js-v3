import { _UnmarshalledEnabledServicePrincipal } from "./_EnabledServicePrincipal";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAWSServiceAccessForOrganizationOutput shape
 */
export interface ListAWSServiceAccessForOrganizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the service principals for the services that are enabled to integrate with your organization. Each principal is a structure that includes the name and the date that it was enabled for integration with AWS Organizations.</p>
   */
  EnabledServicePrincipals?: Array<_UnmarshalledEnabledServicePrincipal>;

  /**
   * <p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
