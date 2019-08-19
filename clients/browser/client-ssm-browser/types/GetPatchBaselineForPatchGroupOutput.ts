import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPatchBaselineForPatchGroupOutput shape
 */
export interface GetPatchBaselineForPatchGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the patch baseline that should be used for the patch group.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch group.</p>
   */
  PatchGroup?: string;

  /**
   * <p>The operating system rule specified for patch groups using the patch baseline.</p>
   */
  OperatingSystem?:
    | "WINDOWS"
    | "AMAZON_LINUX"
    | "AMAZON_LINUX_2"
    | "UBUNTU"
    | "REDHAT_ENTERPRISE_LINUX"
    | "SUSE"
    | "CENTOS"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
