import { _UnmarshalledCreateAccountStatus } from "./_CreateAccountStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCreateAccountStatusOutput shape
 */
export interface ListCreateAccountStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of objects with details about the requests. Certain elements, such as the accountId number, are present in the output only after the account has been successfully created.</p>
   */
  CreateAccountStatuses?: Array<_UnmarshalledCreateAccountStatus>;

  /**
   * <p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
