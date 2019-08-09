import { _UnmarshalledOutputDescription } from "./_OutputDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationOutputOutput shape
 */
export interface AddApplicationOutputOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when the application is updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes the application output configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. </p>
   */
  OutputDescriptions?: Array<_UnmarshalledOutputDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
