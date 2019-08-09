import { _UnmarshalledPolicyToPath } from "./_PolicyToPath";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * LookupPolicyOutput shape
 */
export interface LookupPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and <code>PolicyType</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: Array<_UnmarshalledPolicyToPath>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
