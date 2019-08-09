import { _UnmarshalledSourceCredentialsInfo } from "./_SourceCredentialsInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSourceCredentialsOutput shape
 */
export interface ListSourceCredentialsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of <code>SourceCredentialsInfo</code> objects. Each <code>SourceCredentialsInfo</code> object includes the authentication type, token ARN, and type of source provider for one set of credentials. </p>
   */
  sourceCredentialsInfos?: Array<_UnmarshalledSourceCredentialsInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
