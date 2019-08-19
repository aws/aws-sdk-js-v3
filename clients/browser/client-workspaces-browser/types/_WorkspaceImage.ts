import {
  _OperatingSystem,
  _UnmarshalledOperatingSystem
} from "./_OperatingSystem";

/**
 * <p>Describes a WorkSpace image.</p>
 */
export interface _WorkspaceImage {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The operating system that the image is running. </p>
   */
  OperatingSystem?: _OperatingSystem;

  /**
   * <p>The status of the image.</p>
   */
  State?: "AVAILABLE" | "PENDING" | "ERROR" | string;

  /**
   * <p>Specifies whether the image is running on dedicated hardware. When bring your own license (BYOL) is enabled, this value is set to DEDICATED. </p>
   */
  RequiredTenancy?: "DEFAULT" | "DEDICATED" | string;

  /**
   * <p>The error code that is returned for the image.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned for the image.</p>
   */
  ErrorMessage?: string;
}

export interface _UnmarshalledWorkspaceImage extends _WorkspaceImage {
  /**
   * <p>The operating system that the image is running. </p>
   */
  OperatingSystem?: _UnmarshalledOperatingSystem;
}
