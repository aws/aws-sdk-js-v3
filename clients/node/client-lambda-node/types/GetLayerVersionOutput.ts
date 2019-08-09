import { _UnmarshalledLayerVersionContentOutput } from "./_LayerVersionContentOutput";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLayerVersionOutput shape
 */
export interface GetLayerVersionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details about the layer version.</p>
   */
  Content?: _UnmarshalledLayerVersionContentOutput;

  /**
   * <p>The ARN of the layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  CreatedDate?: string;

  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: Array<
    | "nodejs"
    | "nodejs4.3"
    | "nodejs6.10"
    | "nodejs8.10"
    | "nodejs10.x"
    | "java8"
    | "python2.7"
    | "python3.6"
    | "python3.7"
    | "dotnetcore1.0"
    | "dotnetcore2.0"
    | "dotnetcore2.1"
    | "nodejs4.3-edge"
    | "go1.x"
    | "ruby2.5"
    | "provided"
    | string
  >;

  /**
   * <p>The layer's software license.</p>
   */
  LicenseInfo?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
