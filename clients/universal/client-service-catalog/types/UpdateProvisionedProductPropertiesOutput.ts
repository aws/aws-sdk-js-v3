import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateProvisionedProductPropertiesOutput shape
 */
export interface UpdateProvisionedProductPropertiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The provisioned product identifier.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>A map that contains the properties updated.</p>
   */
  ProvisionedProductProperties?: { [key in "OWNER" | string]: string };

  /**
   * <p>The identifier of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>The status of the request.</p>
   */
  Status?:
    | "CREATED"
    | "IN_PROGRESS"
    | "IN_PROGRESS_IN_ERROR"
    | "SUCCEEDED"
    | "FAILED"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
