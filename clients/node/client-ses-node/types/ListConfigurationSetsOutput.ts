import { _UnmarshalledConfigurationSet } from "./_ConfigurationSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface ListConfigurationSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of configuration sets.</p>
   */
  ConfigurationSets?: Array<_UnmarshalledConfigurationSet>;

  /**
   * <p>A token indicating that there are additional configuration sets available to be listed. Pass this token to successive calls of <code>ListConfigurationSets</code>. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
