// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECRServiceException as __BaseException } from "./ECRServiceException";

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 * @public
 */
export class RepositoryNotFoundException extends __BaseException {
  readonly name = "RepositoryNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNotFoundException, __BaseException>) {
    super({
      name: "RepositoryNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNotFoundException.prototype);
  }
}

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 * @public
 */
export class ServerException extends __BaseException {
  readonly name = "ServerException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerException, __BaseException>) {
    super({
      name: "ServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerException.prototype);
  }
}

/**
 * <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The image or images were unable to be pulled using the pull through cache rule. This
 *             is usually caused because of an issue with the Secrets Manager secret containing the credentials
 *             for the upstream registry.</p>
 * @public
 */
export class UnableToGetUpstreamImageException extends __BaseException {
  readonly name = "UnableToGetUpstreamImageException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToGetUpstreamImageException, __BaseException>) {
    super({
      name: "UnableToGetUpstreamImageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToGetUpstreamImageException.prototype);
  }
}

/**
 * <p>There was an exception validating this request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>The specified layer upload does not contain any layer parts.</p>
 * @public
 */
export class EmptyUploadException extends __BaseException {
  readonly name = "EmptyUploadException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EmptyUploadException, __BaseException>) {
    super({
      name: "EmptyUploadException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EmptyUploadException.prototype);
  }
}

/**
 * <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does
 *             not match the digest specified.</p>
 * @public
 */
export class InvalidLayerException extends __BaseException {
  readonly name = "InvalidLayerException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLayerException, __BaseException>) {
    super({
      name: "InvalidLayerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLayerException.prototype);
  }
}

/**
 * <p>The operation failed due to a KMS exception.</p>
 * @public
 */
export class KmsException extends __BaseException {
  readonly name = "KmsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code returned by KMS.</p>
   * @public
   */
  kmsError?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsException, __BaseException>) {
    super({
      name: "KmsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsException.prototype);
    this.kmsError = opts.kmsError;
  }
}

/**
 * <p>The image layer already exists in the associated repository.</p>
 * @public
 */
export class LayerAlreadyExistsException extends __BaseException {
  readonly name = "LayerAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayerAlreadyExistsException, __BaseException>) {
    super({
      name: "LayerAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayerAlreadyExistsException.prototype);
  }
}

/**
 * <p>Layer parts must be at least 5 MiB in size.</p>
 * @public
 */
export class LayerPartTooSmallException extends __BaseException {
  readonly name = "LayerPartTooSmallException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayerPartTooSmallException, __BaseException>) {
    super({
      name: "LayerPartTooSmallException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayerPartTooSmallException.prototype);
  }
}

/**
 * <p>The upload could not be found, or the specified upload ID is not valid for this
 *             repository.</p>
 * @public
 */
export class UploadNotFoundException extends __BaseException {
  readonly name = "UploadNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UploadNotFoundException, __BaseException>) {
    super({
      name: "UploadNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UploadNotFoundException.prototype);
  }
}

/**
 * <p>A pull through cache rule with these settings already exists for the private
 *             registry.</p>
 * @public
 */
export class PullThroughCacheRuleAlreadyExistsException extends __BaseException {
  readonly name = "PullThroughCacheRuleAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullThroughCacheRuleAlreadyExistsException, __BaseException>) {
    super({
      name: "PullThroughCacheRuleAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullThroughCacheRuleAlreadyExistsException.prototype);
  }
}

/**
 * <p>The ARN of the secret specified in the pull through cache rule was not found. Update
 *             the pull through cache rule with a valid secret ARN and try again.</p>
 * @public
 */
export class SecretNotFoundException extends __BaseException {
  readonly name = "SecretNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SecretNotFoundException, __BaseException>) {
    super({
      name: "SecretNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SecretNotFoundException.prototype);
  }
}

/**
 * <p>The secret is unable to be accessed. Verify the resource permissions for the secret
 *             and try again.</p>
 * @public
 */
export class UnableToAccessSecretException extends __BaseException {
  readonly name = "UnableToAccessSecretException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToAccessSecretException, __BaseException>) {
    super({
      name: "UnableToAccessSecretException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToAccessSecretException.prototype);
  }
}

/**
 * <p>The secret is accessible but is unable to be decrypted. Verify the resource
 *             permisisons and try again.</p>
 * @public
 */
export class UnableToDecryptSecretValueException extends __BaseException {
  readonly name = "UnableToDecryptSecretValueException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToDecryptSecretValueException, __BaseException>) {
    super({
      name: "UnableToDecryptSecretValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToDecryptSecretValueException.prototype);
  }
}

/**
 * <p>The specified upstream registry isn't supported.</p>
 * @public
 */
export class UnsupportedUpstreamRegistryException extends __BaseException {
  readonly name = "UnsupportedUpstreamRegistryException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedUpstreamRegistryException, __BaseException>) {
    super({
      name: "UnsupportedUpstreamRegistryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUpstreamRegistryException.prototype);
  }
}

/**
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have
 *             a maximum length of 256 characters.</p>
 * @public
 */
export class InvalidTagParameterException extends __BaseException {
  readonly name = "InvalidTagParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagParameterException, __BaseException>) {
    super({
      name: "InvalidTagParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagParameterException.prototype);
  }
}

/**
 * <p>The specified repository already exists in the specified registry.</p>
 * @public
 */
export class RepositoryAlreadyExistsException extends __BaseException {
  readonly name = "RepositoryAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryAlreadyExistsException, __BaseException>) {
    super({
      name: "RepositoryAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryAlreadyExistsException.prototype);
  }
}

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * <p>The repository creation template already exists. Specify a unique prefix and try
 *             again.</p>
 * @public
 */
export class TemplateAlreadyExistsException extends __BaseException {
  readonly name = "TemplateAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemplateAlreadyExistsException, __BaseException>) {
    super({
      name: "TemplateAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TemplateAlreadyExistsException.prototype);
  }
}

/**
 * <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
 * @public
 */
export class LifecyclePolicyNotFoundException extends __BaseException {
  readonly name = "LifecyclePolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecyclePolicyNotFoundException, __BaseException>) {
    super({
      name: "LifecyclePolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecyclePolicyNotFoundException.prototype);
  }
}

/**
 * <p>The pull through cache rule was not found. Specify a valid pull through cache rule and
 *             try again.</p>
 * @public
 */
export class PullThroughCacheRuleNotFoundException extends __BaseException {
  readonly name = "PullThroughCacheRuleNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullThroughCacheRuleNotFoundException, __BaseException>) {
    super({
      name: "PullThroughCacheRuleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullThroughCacheRuleNotFoundException.prototype);
  }
}

/**
 * <p>The registry doesn't have an associated registry policy.</p>
 * @public
 */
export class RegistryPolicyNotFoundException extends __BaseException {
  readonly name = "RegistryPolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistryPolicyNotFoundException, __BaseException>) {
    super({
      name: "RegistryPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistryPolicyNotFoundException.prototype);
  }
}

/**
 * <p>The specified repository contains images. To delete a repository that contains images,
 *             you must force the deletion with the <code>force</code> parameter.</p>
 * @public
 */
export class RepositoryNotEmptyException extends __BaseException {
  readonly name = "RepositoryNotEmptyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNotEmptyException, __BaseException>) {
    super({
      name: "RepositoryNotEmptyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNotEmptyException.prototype);
  }
}

/**
 * <p>The specified repository creation template can't be found. Verify the registry ID and
 *             prefix and try again.</p>
 * @public
 */
export class TemplateNotFoundException extends __BaseException {
  readonly name = "TemplateNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemplateNotFoundException, __BaseException>) {
    super({
      name: "TemplateNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TemplateNotFoundException.prototype);
  }
}

/**
 * <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
 * @public
 */
export class RepositoryPolicyNotFoundException extends __BaseException {
  readonly name = "RepositoryPolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryPolicyNotFoundException, __BaseException>) {
    super({
      name: "RepositoryPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryPolicyNotFoundException.prototype);
  }
}

/**
 * <p>The image requested does not exist in the specified repository.</p>
 * @public
 */
export class ImageNotFoundException extends __BaseException {
  readonly name = "ImageNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageNotFoundException, __BaseException>) {
    super({
      name: "ImageNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageNotFoundException.prototype);
  }
}

/**
 * <p>The specified image scan could not be found. Ensure that image scanning is enabled on
 *             the repository and try again.</p>
 * @public
 */
export class ScanNotFoundException extends __BaseException {
  readonly name = "ScanNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScanNotFoundException, __BaseException>) {
    super({
      name: "ScanNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScanNotFoundException.prototype);
  }
}

/**
 * <p>The specified layer is not available because it is not associated with an image.
 *             Unassociated image layers may be cleaned up at any time.</p>
 * @public
 */
export class LayerInaccessibleException extends __BaseException {
  readonly name = "LayerInaccessibleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayerInaccessibleException, __BaseException>) {
    super({
      name: "LayerInaccessibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayerInaccessibleException.prototype);
  }
}

/**
 * <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
 * @public
 */
export class LayersNotFoundException extends __BaseException {
  readonly name = "LayersNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LayersNotFoundException, __BaseException>) {
    super({
      name: "LayersNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LayersNotFoundException.prototype);
  }
}

/**
 * <p>There was an issue getting the upstream layer matching the pull through cache
 *             rule.</p>
 * @public
 */
export class UnableToGetUpstreamLayerException extends __BaseException {
  readonly name = "UnableToGetUpstreamLayerException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToGetUpstreamLayerException, __BaseException>) {
    super({
      name: "UnableToGetUpstreamLayerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToGetUpstreamLayerException.prototype);
  }
}

/**
 * <p>There is no dry run for this repository.</p>
 * @public
 */
export class LifecyclePolicyPreviewNotFoundException extends __BaseException {
  readonly name = "LifecyclePolicyPreviewNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecyclePolicyPreviewNotFoundException, __BaseException>) {
    super({
      name: "LifecyclePolicyPreviewNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecyclePolicyPreviewNotFoundException.prototype);
  }
}

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest
 *             or image tag after the last push.</p>
 * @public
 */
export class ImageAlreadyExistsException extends __BaseException {
  readonly name = "ImageAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageAlreadyExistsException, __BaseException>) {
    super({
      name: "ImageAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageAlreadyExistsException.prototype);
  }
}

/**
 * <p>The specified image digest does not match the digest that Amazon ECR calculated for the
 *             image.</p>
 * @public
 */
export class ImageDigestDoesNotMatchException extends __BaseException {
  readonly name = "ImageDigestDoesNotMatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageDigestDoesNotMatchException, __BaseException>) {
    super({
      name: "ImageDigestDoesNotMatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageDigestDoesNotMatchException.prototype);
  }
}

/**
 * <p>The specified image is tagged with a tag that already exists. The repository is
 *             configured for tag immutability.</p>
 * @public
 */
export class ImageTagAlreadyExistsException extends __BaseException {
  readonly name = "ImageTagAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageTagAlreadyExistsException, __BaseException>) {
    super({
      name: "ImageTagAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageTagAlreadyExistsException.prototype);
  }
}

/**
 * <p>The manifest list is referencing an image that does not exist.</p>
 * @public
 */
export class ReferencedImagesNotFoundException extends __BaseException {
  readonly name = "ReferencedImagesNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReferencedImagesNotFoundException, __BaseException>) {
    super({
      name: "ReferencedImagesNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReferencedImagesNotFoundException.prototype);
  }
}

/**
 * <p>The image is of a type that cannot be scanned.</p>
 * @public
 */
export class UnsupportedImageTypeException extends __BaseException {
  readonly name = "UnsupportedImageTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedImageTypeException, __BaseException>) {
    super({
      name: "UnsupportedImageTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedImageTypeException.prototype);
  }
}

/**
 * <p>The previous lifecycle policy preview request has not completed. Wait and try
 *             again.</p>
 * @public
 */
export class LifecyclePolicyPreviewInProgressException extends __BaseException {
  readonly name = "LifecyclePolicyPreviewInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LifecyclePolicyPreviewInProgressException, __BaseException>) {
    super({
      name: "LifecyclePolicyPreviewInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LifecyclePolicyPreviewInProgressException.prototype);
  }
}

/**
 * <p>The layer part size is not valid, or the first byte specified is not consecutive to
 *             the last byte of a previous layer part upload.</p>
 * @public
 */
export class InvalidLayerPartException extends __BaseException {
  readonly name = "InvalidLayerPartException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The registry ID associated with the exception.</p>
   * @public
   */
  registryId?: string | undefined;

  /**
   * <p>The repository name associated with the exception.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The upload ID associated with the exception.</p>
   * @public
   */
  uploadId?: string | undefined;

  /**
   * <p>The last valid byte received from the layer part upload that is associated with the
   *             exception.</p>
   * @public
   */
  lastValidByteReceived?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLayerPartException, __BaseException>) {
    super({
      name: "InvalidLayerPartException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLayerPartException.prototype);
    this.registryId = opts.registryId;
    this.repositoryName = opts.repositoryName;
    this.uploadId = opts.uploadId;
    this.lastValidByteReceived = opts.lastValidByteReceived;
  }
}
