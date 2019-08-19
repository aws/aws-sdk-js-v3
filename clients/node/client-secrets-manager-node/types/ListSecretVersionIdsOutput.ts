import { _UnmarshalledSecretVersionsListEntry } from "./_SecretVersionsListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSecretVersionIdsOutput shape
 */
export interface ListSecretVersionIdsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of the currently available versions of the specified secret.</p>
   */
  Versions?: Array<_UnmarshalledSecretVersionsListEntry>;

  /**
   * <p>If present in the response, this value indicates that there's more output available than what's included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a very long list. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to continue processing and get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the secret.</p> <note> <p>Secrets Manager automatically adds several random characters to the name at the end of the ARN when you initially create a secret. This affects only the ARN and not the actual friendly name. This ensures that if you create a new secret with the same name as an old secret that you previously deleted, then users with access to the old secret <i>don't</i> automatically get access to the new secret because the ARNs are different.</p> </note>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
