import { _UnmarshalledSource } from "./_Source";
import { _UnmarshalledSigningMaterial } from "./_SigningMaterial";
import { _UnmarshalledSigningPlatformOverrides } from "./_SigningPlatformOverrides";
import { _UnmarshalledSignedObject } from "./_SignedObject";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSigningJobOutput shape
 */
export interface DescribeSigningJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the signing job on output.</p>
   */
  jobId?: string;

  /**
   * <p>The object that contains the name of your S3 bucket or your raw code.</p>
   */
  source?: _UnmarshalledSource;

  /**
   * <p>Amazon Resource Name (ARN) of your code signing certificate.</p>
   */
  signingMaterial?: _UnmarshalledSigningMaterial;

  /**
   * <p>The microcontroller platform to which your signed code image will be distributed.</p>
   */
  platformId?: string;

  /**
   * <p>The name of the profile that initiated the signing operation.</p>
   */
  profileName?: string;

  /**
   * <p>A list of any overrides that were applied to the signing operation.</p>
   */
  overrides?: _UnmarshalledSigningPlatformOverrides;

  /**
   * <p>Map of user-assigned key-value pairs used during signing. These values contain any information that you specified for use in your signing job. </p>
   */
  signingParameters?: { [key: string]: string };

  /**
   * <p>Date and time that the signing job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Date and time that the signing job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>The IAM principal that requested the signing job.</p>
   */
  requestedBy?: string;

  /**
   * <p>Status of the signing job.</p>
   */
  status?: "InProgress" | "Failed" | "Succeeded" | string;

  /**
   * <p>String value that contains the status reason.</p>
   */
  statusReason?: string;

  /**
   * <p>Name of the S3 bucket where the signed code image is saved by AWS Signer.</p>
   */
  signedObject?: _UnmarshalledSignedObject;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
