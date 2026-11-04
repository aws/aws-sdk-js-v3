// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ECRPUBLICServiceException as __BaseException } from "./ECRPUBLICServiceException";

/**
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#InvalidParameterException";
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
 * The registry doesn't exist.
 *
 * @public
 */
export class RegistryNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#RegistryNotFoundException";
  readonly name = "RegistryNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistryNotFoundException, __BaseException>) {
    super({
      name: "RegistryNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistryNotFoundException.prototype);
  }
}

/**
 * The specified repository can't be found. Check the spelling of the specified repository and ensure that you're performing operations on the correct registry.
 *
 * @public
 */
export class RepositoryNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#RepositoryNotFoundException";
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
 * These errors are usually caused by a server-side issue.
 *
 * @public
 */
export class ServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#ServerException";
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
 * The action isn't supported in this Region.
 *
 * @public
 */
export class UnsupportedCommandException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#UnsupportedCommandException";
  readonly name = "UnsupportedCommandException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedCommandException, __BaseException>) {
    super({
      name: "UnsupportedCommandException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedCommandException.prototype);
  }
}

/**
 * The specified layer upload doesn't contain any layer parts.
 *
 * @public
 */
export class EmptyUploadException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#EmptyUploadException";
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
 * The layer digest calculation performed by Amazon ECR when the image layer doesn't match the digest specified.
 *
 * @public
 */
export class InvalidLayerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#InvalidLayerException";
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
 * The image layer already exists in the associated repository.
 *
 * @public
 */
export class LayerAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#LayerAlreadyExistsException";
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
 * Layer parts must be at least 5 MiB in size.
 *
 * @public
 */
export class LayerPartTooSmallException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#LayerPartTooSmallException";
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
 * The upload can't be found, or the specified upload ID isn't valid for this repository.
 *
 * @public
 */
export class UploadNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#UploadNotFoundException";
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
 * An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @public
 */
export class InvalidTagParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#InvalidTagParameterException";
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
 * The operation didn't succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR Service Quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#LimitExceededException";
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
 * The specified repository already exists in the specified registry.
 *
 * @public
 */
export class RepositoryAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#RepositoryAlreadyExistsException";
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
 * The list of tags on the repository is over the limit. The maximum number of tags that can be applied to a repository is 50.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#TooManyTagsException";
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
 * The specified repository contains images. To delete a repository that contains images, you must force the deletion with the `force` parameter.
 *
 * @public
 */
export class RepositoryNotEmptyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#RepositoryNotEmptyException";
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
 * The specified repository and registry combination doesn't have an associated repository policy.
 *
 * @public
 */
export class RepositoryPolicyNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#RepositoryPolicyNotFoundException";
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
 * The image requested doesn't exist in the specified repository.
 *
 * @public
 */
export class ImageNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#ImageNotFoundException";
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
 * The repository catalog data doesn't exist.
 *
 * @public
 */
export class RepositoryCatalogDataNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#RepositoryCatalogDataNotFoundException";
  readonly name = "RepositoryCatalogDataNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryCatalogDataNotFoundException, __BaseException>) {
    super({
      name: "RepositoryCatalogDataNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryCatalogDataNotFoundException.prototype);
  }
}

/**
 * The specified image has already been pushed, and there were no changes to the manifest or image tag after the last push.
 *
 * @public
 */
export class ImageAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#ImageAlreadyExistsException";
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
 * The specified image digest doesn't match the digest that Amazon ECR calculated for the image.
 *
 * @public
 */
export class ImageDigestDoesNotMatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#ImageDigestDoesNotMatchException";
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
 * The specified image is tagged with a tag that already exists. The repository is configured for tag immutability.
 *
 * @public
 */
export class ImageTagAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#ImageTagAlreadyExistsException";
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
 * The layer part size isn't valid, or the first byte specified isn't consecutive to the last byte of a previous layer part upload.
 *
 * @public
 */
export class InvalidLayerPartException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#InvalidLayerPartException";
  readonly name = "InvalidLayerPartException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon Web Services account ID that's associated with the layer part.
   *
   * @public
   */
  registryId?: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The upload ID that's associated with the layer part.
   *
   * @public
   */
  uploadId?: string | undefined;

  /**
   * The position of the last byte of the layer part.
   *
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

/**
 * The specified layers can't be found, or the specified layer isn't valid for this repository.
 *
 * @public
 */
export class LayersNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#LayersNotFoundException";
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
 * The manifest list is referencing an image that doesn't exist.
 *
 * @public
 */
export class ReferencedImagesNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecrpublic#ReferencedImagesNotFoundException";
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
