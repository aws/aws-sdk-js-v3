import { _UnmarshalledSigningMaterial } from "./_SigningMaterial";
import { _UnmarshalledSigningPlatformOverrides } from "./_SigningPlatformOverrides";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSigningProfileOutput shape
 */
export interface GetSigningProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the target signing profile.</p>
   */
  profileName?: string;

  /**
   * <p>The ARN of the certificate that the target profile uses for signing operations.</p>
   */
  signingMaterial?: _UnmarshalledSigningMaterial;

  /**
   * <p>The ID of the platform that is used by the target signing profile.</p>
   */
  platformId?: string;

  /**
   * <p>A list of overrides applied by the target signing profile for signing operations.</p>
   */
  overrides?: _UnmarshalledSigningPlatformOverrides;

  /**
   * <p>A map of key-value pairs for signing operations that is attached to the target signing profile.</p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>The status of the target signing profile.</p>
   */
  status?: "Active" | "Canceled" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
