/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href="http://docs.aws.amazon.com//AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 */
export interface _DeployedImage {
  /**
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;

  /**
   * <p>The specific digest path of the image hosted in this <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * <p>The date and time when the image path for the model resolved to the <code>ResolvedImage</code> </p>
   */
  ResolutionTime?: Date | string | number;
}

export interface _UnmarshalledDeployedImage extends _DeployedImage {
  /**
   * <p>The date and time when the image path for the model resolved to the <code>ResolvedImage</code> </p>
   */
  ResolutionTime?: Date;
}
