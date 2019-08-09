import { _UnmarshalledAttachment } from "./_Attachment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.</p>
 */
export interface DescribeAttachmentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attachment content and file name.</p>
   */
  attachment?: _UnmarshalledAttachment;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
