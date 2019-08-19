import { _UnmarshalledBuiltinIntentSlot } from "./_BuiltinIntentSlot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBuiltinIntentOutput shape
 */
export interface GetBuiltinIntentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier for a built-in intent.</p>
   */
  signature?: string;

  /**
   * <p>A list of locales that the intent supports.</p>
   */
  supportedLocales?: Array<"en-US" | "en-GB" | "de-DE" | string>;

  /**
   * <p>An array of <code>BuiltinIntentSlot</code> objects, one entry for each slot type in the intent.</p>
   */
  slots?: Array<_UnmarshalledBuiltinIntentSlot>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
