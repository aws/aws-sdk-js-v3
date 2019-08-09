import { _UnmarshalledReferenceDataSourceDescription } from "./_ReferenceDataSourceDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationReferenceDataSourceOutput shape
 */
export interface AddApplicationReferenceDataSourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Amazon Kinesis Data Analytics increments this ID when the application is updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes reference data sources configured for the application. </p>
   */
  ReferenceDataSourceDescriptions?: Array<
    _UnmarshalledReferenceDataSourceDescription
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
