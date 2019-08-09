import { _UnmarshalledTypedLinkSpecifier } from "./_TypedLinkSpecifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListIncomingTypedLinksOutput shape
 */
export interface ListIncomingTypedLinksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: Array<_UnmarshalledTypedLinkSpecifier>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
