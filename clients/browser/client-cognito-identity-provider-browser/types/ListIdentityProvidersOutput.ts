import { _UnmarshalledProviderDescription } from "./_ProviderDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListIdentityProvidersOutput shape
 */
export interface ListIdentityProvidersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of identity provider objects.</p>
   */
  Providers: Array<_UnmarshalledProviderDescription>;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
