import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * LabelParameterVersionOutput shape
 */
export interface LabelParameterVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The label does not meet the requirements. For information about parameter label requirements, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html">Labeling Parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  InvalidLabels?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
