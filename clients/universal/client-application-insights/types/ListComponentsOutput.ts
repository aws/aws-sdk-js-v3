import { _UnmarshalledApplicationComponent } from "./_ApplicationComponent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListComponentsOutput shape
 */
export interface ListComponentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of application components.</p>
   */
  ApplicationComponentList?: Array<_UnmarshalledApplicationComponent>;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
