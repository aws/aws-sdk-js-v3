import { _UnmarshalledApplicationComponent } from "./_ApplicationComponent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeComponentOutput shape
 */
export interface DescribeComponentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a standalone resource or similarly grouped resources that the application is made up of.</p>
   */
  ApplicationComponent?: _UnmarshalledApplicationComponent;

  /**
   * <p>The list of resource ARNs that belong to the component.</p>
   */
  ResourceList?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
