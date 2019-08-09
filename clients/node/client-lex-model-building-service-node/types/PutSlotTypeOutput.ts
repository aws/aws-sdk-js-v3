import { _UnmarshalledEnumerationValue } from "./_EnumerationValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutSlotTypeOutput shape
 */
export interface PutSlotTypeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the slot type.</p>
   */
  name?: string;

  /**
   * <p>A description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take.</p>
   */
  enumerationValues?: Array<_UnmarshalledEnumerationValue>;

  /**
   * <p>The date that the slot type was updated. When you create a slot type, the creation date and last update date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the slot type was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the slot type. For a new slot type, the version is always <code>$LATEST</code>. </p>
   */
  version?: string;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the slot type.</p>
   */
  checksum?: string;

  /**
   * <p>The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more information, see <a>PutSlotType</a>.</p>
   */
  valueSelectionStrategy?: "ORIGINAL_VALUE" | "TOP_RESOLUTION" | string;

  /**
   * _Boolean shape
   */
  createVersion?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
