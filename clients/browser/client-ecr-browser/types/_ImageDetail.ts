/**
 * <p>An object that describes an image returned by a <a>DescribeImages</a> operation.</p>
 */
export interface _ImageDetail {
  /**
   * <p>The AWS account ID associated with the registry to which this image belongs.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to which this image belongs.</p>
   */
  repositoryName?: string;

  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: Array<string> | Iterable<string>;

  /**
   * <p>The size, in bytes, of the image in the repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
   */
  imageSizeInBytes?: number;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository. </p>
   */
  imagePushedAt?: Date | string | number;
}

export interface _UnmarshalledImageDetail extends _ImageDetail {
  /**
   * <p>The list of tags associated with this image.</p>
   */
  imageTags?: Array<string>;

  /**
   * <p>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository. </p>
   */
  imagePushedAt?: Date;
}
