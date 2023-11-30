// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MarketplaceDeploymentServiceException as __BaseException } from "./MarketplaceDeploymentServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique identifier for the resource associated with the error.</p>
   */
  resourceId: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
  }
}

/**
 * @public
 * <p>There was an internal service exception.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>The shape containing the requested deployment parameter name and secretString.</p>
 */
export interface DeploymentParameterInput {
  /**
   * @public
   * <p>The desired name of the deployment parameter. This is the identifier on which deployment parameters are keyed for a given buyer and product. If this name matches an existing deployment parameter, this request will update the existing resource.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The text to encrypt and store in the secret.</p>
   */
  secretString: string | undefined;
}

/**
 * @public
 */
export interface PutDeploymentParameterRequest {
  /**
   * @public
   * <p>The catalog related to the request. Fixed value: <code>AWS Marketplace</code>
   *          </p>
   */
  catalog: string | undefined;

  /**
   * @public
   * <p>The product for which AWS Marketplace will save secrets for the buyer’s account.</p>
   */
  productId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the agreement.</p>
   */
  agreementId: string | undefined;

  /**
   * @public
   * <p>The deployment parameter targeted to the acceptor of an agreement for which to create the AWS Secret Manager resource.</p>
   */
  deploymentParameter: DeploymentParameterInput | undefined;

  /**
   * @public
   * <p>A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The date when deployment parameters expire and are scheduled for deletion.</p>
   */
  expirationDate?: Date;

  /**
   * @public
   * <p>The idempotency token for deployment parameters. A unique identifier for the new version.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface PutDeploymentParameterResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to create or update.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the agreement.</p>
   */
  agreementId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the deployment parameter.</p>
   */
  deploymentParameterId: string | undefined;

  /**
   * @public
   * <p>A map of key-value pairs, where each pair represents a tag saved to the resource. Tags will only be applied for create operations, and they'll be ignored if the resource already exists.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The specified resource wasn't found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The maximum number of requests per account has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>Too many requests.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * <p>An error occurred during validation.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The field name associated with the error.</p>
   */
  fieldName: string | undefined;

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
    this.fieldName = opts.fieldName;
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the deployment parameter resource you want to list tags on.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A map of key-value pairs, where each pair represents a tag present on the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A map of key-value pairs, where each pair represents a tag present on the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of key names of tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const DeploymentParameterInputFilterSensitiveLog = (obj: DeploymentParameterInput): any => ({
  ...obj,
  ...(obj.secretString && { secretString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutDeploymentParameterRequestFilterSensitiveLog = (obj: PutDeploymentParameterRequest): any => ({
  ...obj,
  ...(obj.deploymentParameter && {
    deploymentParameter: DeploymentParameterInputFilterSensitiveLog(obj.deploymentParameter),
  }),
});
