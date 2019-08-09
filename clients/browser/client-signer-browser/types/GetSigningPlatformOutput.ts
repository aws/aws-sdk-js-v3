import { _UnmarshalledSigningConfiguration } from "./_SigningConfiguration";
import { _UnmarshalledSigningImageFormat } from "./_SigningImageFormat";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSigningPlatformOutput shape
 */
export interface GetSigningPlatformOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the target signing platform.</p>
   */
  platformId?: string;

  /**
   * <p>The display name of the target signing platform.</p>
   */
  displayName?: string;

  /**
   * <p>A list of partner entities that use the target signing platform.</p>
   */
  partner?: string;

  /**
   * <p>The validation template that is used by the target signing platform.</p>
   */
  target?: string;

  /**
   * <p>The category type of the target signing platform.</p>
   */
  category?: "AWSIoT" | string;

  /**
   * <p>A list of configurations applied to the target platform at signing.</p>
   */
  signingConfiguration?: _UnmarshalledSigningConfiguration;

  /**
   * <p>The format of the target platform's signing image.</p>
   */
  signingImageFormat?: _UnmarshalledSigningImageFormat;

  /**
   * <p>The maximum size (in MB) of the payload that can be signed by the target platform.</p>
   */
  maxSizeInMB?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
