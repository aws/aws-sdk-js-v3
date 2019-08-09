import {
  _ImageStateChangeReason,
  _UnmarshalledImageStateChangeReason
} from "./_ImageStateChangeReason";
import { _Application, _UnmarshalledApplication } from "./_Application";
import {
  _ImagePermissions,
  _UnmarshalledImagePermissions
} from "./_ImagePermissions";

/**
 * <p>Describes an image.</p>
 */
export interface _Image {
  /**
   * <p>The name of the image.</p>
   */
  Name: string;

  /**
   * <p>The ARN of the image.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the image from which this image was created.</p>
   */
  BaseImageArn?: string;

  /**
   * <p>The image name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The image starts in the <code>PENDING</code> state. If image creation succeeds, the state is <code>AVAILABLE</code>. If image creation fails, the state is <code>FAILED</code>.</p>
   */
  State?: "PENDING" | "AVAILABLE" | "FAILED" | "COPYING" | "DELETING" | string;

  /**
   * <p>Indicates whether the image is public or private.</p>
   */
  Visibility?: "PUBLIC" | "PRIVATE" | "SHARED" | string;

  /**
   * <p>Indicates whether an image builder can be launched from this image.</p>
   */
  ImageBuilderSupported?: boolean;

  /**
   * <p>The name of the image builder that was used to create the private image. If the image is shared, this value is null.</p>
   */
  ImageBuilderName?: string;

  /**
   * <p>The operating system platform of the image.</p>
   */
  Platform?: "WINDOWS" | "WINDOWS_SERVER_2016" | "WINDOWS_SERVER_2019" | string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The reason why the last state change occurred.</p>
   */
  StateChangeReason?: _ImageStateChangeReason;

  /**
   * <p>The applications associated with the image.</p>
   */
  Applications?: Array<_Application> | Iterable<_Application>;

  /**
   * <p>The time the image was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The release date of the public base image. For private images, this date is the release date of the base image from which the image was created.</p>
   */
  PublicBaseImageReleasedDate?: Date | string | number;

  /**
   * <p>The version of the AppStream 2.0 agent to use for instances that are launched from this image. </p>
   */
  AppstreamAgentVersion?: string;

  /**
   * <p>The permissions to provide to the destination AWS account for the specified image.</p>
   */
  ImagePermissions?: _ImagePermissions;
}

export interface _UnmarshalledImage extends _Image {
  /**
   * <p>The reason why the last state change occurred.</p>
   */
  StateChangeReason?: _UnmarshalledImageStateChangeReason;

  /**
   * <p>The applications associated with the image.</p>
   */
  Applications?: Array<_UnmarshalledApplication>;

  /**
   * <p>The time the image was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The release date of the public base image. For private images, this date is the release date of the base image from which the image was created.</p>
   */
  PublicBaseImageReleasedDate?: Date;

  /**
   * <p>The permissions to provide to the destination AWS account for the specified image.</p>
   */
  ImagePermissions?: _UnmarshalledImagePermissions;
}
