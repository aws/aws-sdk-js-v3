import {
  _ImageIdentifier,
  _UnmarshalledImageIdentifier
} from "./_ImageIdentifier";

/**
 * <p>An object representing an Amazon ECR image.</p>
 */
export interface _Image {
  /**
   * <p>The AWS account ID associated with the registry containing the image.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository associated with the image.</p>
   */
  repositoryName?: string;

  /**
   * <p>An object containing the image tag and image digest associated with an image.</p>
   */
  imageId?: _ImageIdentifier;

  /**
   * <p>The image manifest associated with the image.</p>
   */
  imageManifest?: string;
}

export interface _UnmarshalledImage extends _Image {
  /**
   * <p>An object containing the image tag and image digest associated with an image.</p>
   */
  imageId?: _UnmarshalledImageIdentifier;
}
