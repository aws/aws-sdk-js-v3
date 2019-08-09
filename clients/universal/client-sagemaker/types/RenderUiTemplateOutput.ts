import { _UnmarshalledRenderingError } from "./_RenderingError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RenderUiTemplateOutput shape
 */
export interface RenderUiTemplateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A Liquid template that renders the HTML for the worker UI.</p>
   */
  RenderedContent: string;

  /**
   * <p>A list of one or more <code>RenderingError</code> objects if any were encountered while rendering the template. If there were no errors, the list is empty.</p>
   */
  Errors: Array<_UnmarshalledRenderingError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
