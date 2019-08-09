import {
  _ImageIdentifier,
  _UnmarshalledImageIdentifier
} from "./_ImageIdentifier";

/**
 * <p>An object representing an Amazon ECR image failure.</p>
 */
export interface _ImageFailure {
  /**
   * <p>The image ID associated with the failure.</p>
   */
  imageId?: _ImageIdentifier;

  /**
   * <p>The code associated with the failure.</p>
   */
  failureCode?:
    | "InvalidImageDigest"
    | "InvalidImageTag"
    | "ImageTagDoesNotMatchDigest"
    | "ImageNotFound"
    | "MissingDigestAndTag"
    | string;

  /**
   * <p>The reason for the failure.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledImageFailure extends _ImageFailure {
  /**
   * <p>The image ID associated with the failure.</p>
   */
  imageId?: _UnmarshalledImageIdentifier;
}
