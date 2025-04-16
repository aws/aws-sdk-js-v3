// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServiceCatalogServiceException as __BaseException } from "./ServiceCatalogServiceException";

/**
 * @public
 * @enum
 */
export const PortfolioShareType = {
  AWS_ORGANIZATIONS: "AWS_ORGANIZATIONS",
  AWS_SERVICECATALOG: "AWS_SERVICECATALOG",
  IMPORTED: "IMPORTED",
} as const;

/**
 * @public
 */
export type PortfolioShareType = (typeof PortfolioShareType)[keyof typeof PortfolioShareType];

/**
 * @public
 */
export interface AcceptPortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The type of shared portfolios to accept. The default is to accept imported portfolios.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_ORGANIZATIONS</code> - Accept portfolios shared by the management account of your
   *                organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPORTED</code> - Accept imported portfolios.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_SERVICECATALOG</code> - Not supported. (Throws ResourceNotFoundException.)</p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>aws servicecatalog accept-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS</code>
   *          </p>
   * @public
   */
  PortfolioShareType?: PortfolioShareType | undefined;
}

/**
 * @public
 */
export interface AcceptPortfolioShareOutput {}

/**
 * <p>One or more parameters provided to the operation are not valid.</p>
 * @public
 */
export class InvalidParametersException extends __BaseException {
  readonly name: "InvalidParametersException" = "InvalidParametersException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParametersException, __BaseException>) {
    super({
      name: "InvalidParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParametersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AccessLevelFilterKey = {
  ACCOUNT: "Account",
  ROLE: "Role",
  USER: "User",
} as const;

/**
 * @public
 */
export type AccessLevelFilterKey = (typeof AccessLevelFilterKey)[keyof typeof AccessLevelFilterKey];

/**
 * <p>The access level to use to filter results.</p>
 * @public
 */
export interface AccessLevelFilter {
  /**
   * <p>The access level.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Account</code> - Filter results based on the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Role</code> - Filter results based on the federated role of the specified user.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>User</code> - Filter results based on the specified user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Key?: AccessLevelFilterKey | undefined;

  /**
   * <p>The user to which the access level applies. The only supported value is <code>self</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AccessStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  UNDER_CHANGE: "UNDER_CHANGE",
} as const;

/**
 * @public
 */
export type AccessStatus = (typeof AccessStatus)[keyof typeof AccessStatus];

/**
 * <p>Information about a tag. A tag is a key-value pair. Tags are propagated
 *          to the resources created when provisioning a product.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for this key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateBudgetWithResourceInput {
  /**
   * <p>The name of the budget you want to associate.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p> The resource identifier. Either a portfolio-id or a product-id.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateBudgetWithResourceOutput {}

/**
 * <p>The specified resource is a duplicate.</p>
 * @public
 */
export class DuplicateResourceException extends __BaseException {
  readonly name: "DuplicateResourceException" = "DuplicateResourceException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateResourceException, __BaseException>) {
    super({
      name: "DuplicateResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  IAM: "IAM",
  IAM_PATTERN: "IAM_PATTERN",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 */
export interface AssociatePrincipalWithPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The ARN of the principal (user, role, or group). If the <code>PrincipalType</code> is <code>IAM</code>, the supported value is a
   *          fully defined
   *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM Amazon Resource Name (ARN)</a>.
   *          If the <code>PrincipalType</code> is <code>IAM_PATTERN</code>,
   *          the supported value is an <code>IAM</code> ARN <i>without an AccountID</i> in the following format:</p>
   *          <p>
   *             <i>arn:partition:iam:::resource-type/resource-id</i>
   *          </p>
   *          <p>The ARN resource-id can be either:</p>
   *          <ul>
   *             <li>
   *                <p>A fully formed resource-id. For example, <i>arn:aws:iam:::role/resource-name</i> or
   *             <i>arn:aws:iam:::role/resource-path/resource-name</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A wildcard ARN. The wildcard ARN accepts <code>IAM_PATTERN</code> values with a
   *                "*" or "?" in the resource-id segment of the ARN. For example <i>arn:partition:service:::resource-type/resource-path/resource-name</i>.
   *                The new symbols are exclusive to the <b>resource-path</b> and <b>resource-name</b>
   *                and cannot replace the <b>resource-type</b> or other
   *             ARN values. </p>
   *                <p>The ARN path and principal name allow unlimited wildcard characters.</p>
   *             </li>
   *          </ul>
   *          <p>Examples of an <b>acceptable</b> wildcard ARN:</p>
   *          <ul>
   *             <li>
   *                <p>arn:aws:iam:::role/ResourceName_*</p>
   *             </li>
   *             <li>
   *                <p>arn:aws:iam:::role/*\/ResourceName_?</p>
   *             </li>
   *          </ul>
   *          <p>Examples of an <b>unacceptable</b> wildcard ARN:</p>
   *          <ul>
   *             <li>
   *                <p>arn:aws:iam:::*\/ResourceName</p>
   *             </li>
   *          </ul>
   *          <p>You can associate multiple <code>IAM_PATTERN</code>s even if the account has no principal
   *          with that name. </p>
   *          <p>The "?" wildcard character matches zero or one of any character. This is similar to ".?" in regular
   *                   regex context. The "*" wildcard character matches any number of any characters.
   *                   This is similar to ".*" in regular regex context.</p>
   *          <p>In the IAM Principal ARN format (<i>arn:partition:iam:::resource-type/resource-path/resource-name</i>),
   *          valid resource-type values include <b>user/</b>, <b>group/</b>,
   *             or <b>role/</b>.  The "?" and "*" characters
   *                   are allowed only after the resource-type in the resource-id segment.
   *                   You can use special characters anywhere within the resource-id. </p>
   *          <p>The "*" character also matches the "/" character, allowing paths to be formed <i>within</i> the
   *                   resource-id. For example, <i>arn:aws:iam:::role/<b>*</b>/ResourceName_?</i>
   *                   matches both <i>arn:aws:iam:::role/pathA/pathB/ResourceName_1</i>
   *                   and
   *                   <i>arn:aws:iam:::role/pathA/ResourceName_1</i>. </p>
   * @public
   */
  PrincipalARN: string | undefined;

  /**
   * <p>The principal type. The supported value is <code>IAM</code> if you use a fully defined Amazon Resource Name
   *          (ARN), or <code>IAM_PATTERN</code> if you use an ARN with no <code>accountID</code>,
   *          with or without wildcard characters. </p>
   * @public
   */
  PrincipalType: PrincipalType | undefined;
}

/**
 * @public
 */
export interface AssociatePrincipalWithPortfolioOutput {}

/**
 * @public
 */
export interface AssociateProductWithPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The identifier of the source portfolio.</p>
   * @public
   */
  SourcePortfolioId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateProductWithPortfolioOutput {}

/**
 * @public
 */
export interface AssociateServiceActionWithProvisioningArtifactInput {
  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests from the same Amazon Web Services account use the same idempotency token, the same response is returned for each repeated request. </p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateServiceActionWithProvisioningArtifactOutput {}

/**
 * @public
 */
export interface AssociateTagOptionWithResourceInput {
  /**
   * <p>The resource identifier.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The TagOption identifier.</p>
   * @public
   */
  TagOptionId: string | undefined;
}

/**
 * @public
 */
export interface AssociateTagOptionWithResourceOutput {}

/**
 * <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 * @public
 */
export class TagOptionNotMigratedException extends __BaseException {
  readonly name: "TagOptionNotMigratedException" = "TagOptionNotMigratedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagOptionNotMigratedException, __BaseException>) {
    super({
      name: "TagOptionNotMigratedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagOptionNotMigratedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
 * @public
 */
export interface ServiceActionAssociation {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
   * @public
   */
  ServiceActionAssociations: ServiceActionAssociation[] | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceActionAssociationErrorCode = {
  DuplicateResourceException: "DUPLICATE_RESOURCE",
  InternalFailure: "INTERNAL_FAILURE",
  InvalidParameterException: "INVALID_PARAMETER",
  LimitExceededException: "LIMIT_EXCEEDED",
  ResourceNotFoundException: "RESOURCE_NOT_FOUND",
  ThrottlingException: "THROTTLING",
} as const;

/**
 * @public
 */
export type ServiceActionAssociationErrorCode =
  (typeof ServiceActionAssociationErrorCode)[keyof typeof ServiceActionAssociationErrorCode];

/**
 * <p>An object containing information about the error, along with identifying information about the self-service action and its associations.</p>
 * @public
 */
export interface FailedServiceActionAssociation {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   * @public
   */
  ServiceActionId?: string | undefined;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The error code. Valid values are listed below.</p>
   * @public
   */
  ErrorCode?: ServiceActionAssociationErrorCode | undefined;

  /**
   * <p>A text description of the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   * @public
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
   * @public
   */
  ServiceActionAssociations: ServiceActionAssociation[] | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   * @public
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CopyOption = {
  CopyTags: "CopyTags",
} as const;

/**
 * @public
 */
export type CopyOption = (typeof CopyOption)[keyof typeof CopyOption];

/**
 * @public
 * @enum
 */
export const ProvisioningArtifactPropertyName = {
  Id: "Id",
} as const;

/**
 * @public
 */
export type ProvisioningArtifactPropertyName =
  (typeof ProvisioningArtifactPropertyName)[keyof typeof ProvisioningArtifactPropertyName];

/**
 * @public
 */
export interface CopyProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source product.</p>
   * @public
   */
  SourceProductArn: string | undefined;

  /**
   * <p>The identifier of the target product. By default, a new product is created.</p>
   * @public
   */
  TargetProductId?: string | undefined;

  /**
   * <p>A name for the target product. The default is the name of the source product.</p>
   * @public
   */
  TargetProductName?: string | undefined;

  /**
   * <p>The identifiers of the provisioning artifacts (also known as versions) of the product to copy.
   *          By default, all provisioning artifacts are copied.</p>
   * @public
   */
  SourceProvisioningArtifactIdentifiers?: Partial<Record<ProvisioningArtifactPropertyName, string>>[] | undefined;

  /**
   * <p>The copy options. If the value is <code>CopyTags</code>, the tags from the source
   *          product are copied to the target product.</p>
   * @public
   */
  CopyOptions?: CopyOption[] | undefined;

  /**
   * <p> A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request. </p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CopyProductOutput {
  /**
   * <p>The token to use to track the progress of the operation.</p>
   * @public
   */
  CopyProductToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p>
   *          <dl>
   *             <dt>LAUNCH</dt>
   *             <dd>
   *                <p>You are required to specify either the <code>RoleArn</code> or the <code>LocalRoleName</code> but can't use both.</p>
   *                <p>Specify the <code>RoleArn</code> property as follows:</p>
   *                <p>
   *                   <code>\{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"\}</code>
   *                </p>
   *                <p>Specify the <code>LocalRoleName</code> property as follows:</p>
   *                <p>
   *                   <code>\{"LocalRoleName": "SCBasicLaunchRole"\}</code>
   *                </p>
   *                <p>If you specify the <code>LocalRoleName</code> property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be
   *                account-agnostic so the administrator can create fewer resources per shared account.</p>
   *                <note>
   *                   <p>The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.</p>
   *                </note>
   *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
   *                <p>You also cannot have more than one <code>LAUNCH</code> constraint on a product and portfolio.</p>
   *             </dd>
   *             <dt>NOTIFICATION</dt>
   *             <dd>
   *                <p>Specify the <code>NotificationArns</code> property as follows:</p>
   *                <p>
   *                   <code>\{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]\}</code>
   *                </p>
   *             </dd>
   *             <dt>RESOURCE_UPDATE</dt>
   *             <dd>
   *                <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p>
   *                <p>
   *                   <code>\{"Version":"2.0","Properties":\{"TagUpdateOnProvisionedProduct":"String"\}\}</code>
   *                </p>
   *                <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p>
   *             </dd>
   *             <dt>STACKSET</dt>
   *             <dd>
   *                <p>Specify the <code>Parameters</code> property as follows:</p>
   *                <p>
   *                   <code>\{"Version": "String", "Properties": \{"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"\}\}</code>
   *                </p>
   *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
   *                <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p>
   *                <p>Products with a <code>STACKSET</code> constraint will launch an CloudFormation stack set.</p>
   *             </dd>
   *             <dt>TEMPLATE</dt>
   *             <dd>
   *                <p>Specify the <code>Rules</code> property. For more information, see
   *                   <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html">Template Constraint Rules</a>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  Parameters: string | undefined;

  /**
   * <p>The type of constraint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LAUNCH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_UPDATE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STACKSET</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPLATE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The description of the constraint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * <p>Information about a constraint.</p>
 * @public
 */
export interface ConstraintDetail {
  /**
   * <p>The identifier of the constraint.</p>
   * @public
   */
  ConstraintId?: string | undefined;

  /**
   * <p>The type of constraint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LAUNCH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>STACKSET</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPLATE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The description of the constraint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The owner of the constraint.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the product the constraint applies to. Note that a constraint applies to a specific instance of a product within a certain portfolio.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The identifier of the portfolio the product resides in. The constraint applies only to the instance of the product that lives within this portfolio.</p>
   * @public
   */
  PortfolioId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface CreateConstraintOutput {
  /**
   * <p>Information about the constraint.</p>
   * @public
   */
  ConstraintDetail?: ConstraintDetail | undefined;

  /**
   * <p>The constraint parameters.</p>
   * @public
   */
  ConstraintParameters?: string | undefined;

  /**
   * <p>The status of the current request.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The name to use for display purposes.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The description of the portfolio.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the portfolio provider.</p>
   * @public
   */
  ProviderName: string | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * <p>Information about a portfolio.</p>
 * @public
 */
export interface PortfolioDetail {
  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN assigned to the portfolio.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The name to use for display purposes.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the portfolio.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The name of the portfolio provider.</p>
   * @public
   */
  ProviderName?: string | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioOutput {
  /**
   * <p>Information about the portfolio.</p>
   * @public
   */
  PortfolioDetail?: PortfolioDetail | undefined;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OrganizationNodeType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATION: "ORGANIZATION",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
} as const;

/**
 * @public
 */
export type OrganizationNodeType = (typeof OrganizationNodeType)[keyof typeof OrganizationNodeType];

/**
 * <p>Information about the organization node.</p>
 * @public
 */
export interface OrganizationNode {
  /**
   * <p>The organization node type.</p>
   * @public
   */
  Type?: OrganizationNodeType | undefined;

  /**
   * <p>The identifier of the organization node.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID. For example, <code>123456789012</code>.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The organization node to whom you are going to share. When you pass <code>OrganizationNode</code>, it creates <code>PortfolioShare</code> for all of the Amazon Web Services accounts that are associated to the <code>OrganizationNode</code>.
   *       The output returns a <code>PortfolioShareToken</code>, which enables the administrator to monitor the status of the <code>PortfolioShare</code> creation process.</p>
   * @public
   */
  OrganizationNode?: OrganizationNode | undefined;

  /**
   * <p>Enables or disables <code>TagOptions </code> sharing when creating the portfolio share. If this flag is not
   *          provided, TagOptions sharing is disabled.</p>
   * @public
   */
  ShareTagOptions?: boolean | undefined;

  /**
   * <p>This parameter is only supported for portfolios with an <b>OrganizationalNode</b>
   *       Type of <code>ORGANIZATION</code> or <code>ORGANIZATIONAL_UNIT</code>. </p>
   *          <p>Enables or disables <code>Principal</code> sharing when creating the portfolio share. If you do
   *          <b>not</b> provide this flag, principal sharing is disabled. </p>
   *          <p>When you enable Principal Name Sharing for a portfolio share, the share recipient
   *          account end users with a principal that matches any of the associated IAM
   *          patterns can provision products from the portfolio. Once
   *          shared, the share recipient can view associations of <code>PrincipalType</code>:
   *          <code>IAM_PATTERN</code> on their portfolio. You can create the principals in the recipient account before or
   *          after creating the share. </p>
   * @public
   */
  SharePrincipals?: boolean | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioShareOutput {
  /**
   * <p>The portfolio shares a unique identifier that only returns if the portfolio is shared to an organization node.</p>
   * @public
   */
  PortfolioShareToken?: string | undefined;
}

/**
 * <p>The operation is not supported.</p>
 * @public
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ProductType = {
  CLOUD_FORMATION_TEMPLATE: "CLOUD_FORMATION_TEMPLATE",
  EXTERNAL: "EXTERNAL",
  MARKETPLACE: "MARKETPLACE",
  TERRAFORM_CLOUD: "TERRAFORM_CLOUD",
  TERRAFORM_OPEN_SOURCE: "TERRAFORM_OPEN_SOURCE",
} as const;

/**
 * @public
 */
export type ProductType = (typeof ProductType)[keyof typeof ProductType];

/**
 * @public
 * @enum
 */
export const ProvisioningArtifactType = {
  CLOUD_FORMATION_TEMPLATE: "CLOUD_FORMATION_TEMPLATE",
  EXTERNAL: "EXTERNAL",
  MARKETPLACE_AMI: "MARKETPLACE_AMI",
  MARKETPLACE_CAR: "MARKETPLACE_CAR",
  TERRAFORM_CLOUD: "TERRAFORM_CLOUD",
  TERRAFORM_OPEN_SOURCE: "TERRAFORM_OPEN_SOURCE",
} as const;

/**
 * @public
 */
export type ProvisioningArtifactType = (typeof ProvisioningArtifactType)[keyof typeof ProvisioningArtifactType];

/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 * @public
 */
export interface ProvisioningArtifactProperties {
  /**
   * <p>The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the provisioning artifact, including how it differs from the previous provisioning artifact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specify the template source with one of the following options, but not both.
   *          Keys accepted: [ <code>LoadTemplateFromURL</code>, <code>ImportFromPhysicalId</code> ]</p>
   *          <p>The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.
   *        Specify the URL in JSON format as follows:</p>
   *          <p>
   *             <code>"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."</code>
   *          </p>
   *          <p>
   *             <code>ImportFromPhysicalId</code>: The physical id of the resource that contains the
   *          template. Currently only supports CloudFormation stack arn. Specify the physical id in JSON
   *          format as follows: <code>ImportFromPhysicalId: “arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]</code>
   *          </p>
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * <p>The type of provisioning artifact.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUD_FORMATION_TEMPLATE</code> - CloudFormation template</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERRAFORM_OPEN_SOURCE</code> - Terraform Open Source configuration file</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERRAFORM_CLOUD</code> - Terraform Cloud configuration file</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXTERNAL</code> - External configuration file</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ProvisioningArtifactType | undefined;

  /**
   * <p>If set to true, Service Catalog stops validating the specified provisioning artifact even if it is invalid. </p>
   *          <p>Service Catalog does not support template validation for the <code>TERRAFORM_OS</code> product type. </p>
   * @public
   */
  DisableTemplateValidation?: boolean | undefined;
}

/**
 * <p>The subtype containing details about the Codestar connection <code>Type</code>. </p>
 * @public
 */
export interface CodeStarParameters {
  /**
   * <p>The CodeStar ARN, which is the connection between Service Catalog and the external repository.</p>
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * <p>The specific repository where the product’s artifact-to-be-synced resides, formatted as
   *          "Account/Repo." </p>
   * @public
   */
  Repository: string | undefined;

  /**
   * <p>The specific branch where the artifact resides. </p>
   * @public
   */
  Branch: string | undefined;

  /**
   * <p>The absolute path wehre the artifact resides within the repo and branch, formatted as
   *          "folder/file.json." </p>
   * @public
   */
  ArtifactPath: string | undefined;
}

/**
 * <p>Provides connection details.</p>
 * @public
 */
export interface SourceConnectionParameters {
  /**
   * <p>Provides <code>ConnectionType</code> details.</p>
   * @public
   */
  CodeStar?: CodeStarParameters | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  CODESTAR: "CODESTAR",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * <p>A top level <code>ProductViewDetail</code> response containing details about the product’s connection.
 *          Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>,
 *          <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs.
 *          This response contains the same fields as the <code>ConnectionParameters</code> request, with the
 *          addition of the <code>LastSync</code> response.</p>
 * @public
 */
export interface SourceConnection {
  /**
   * <p>The only supported <code>SourceConnection</code> type is Codestar. </p>
   * @public
   */
  Type?: SourceType | undefined;

  /**
   * <p>The connection details based on the connection <code>Type</code>. </p>
   * @public
   */
  ConnectionParameters: SourceConnectionParameters | undefined;
}

/**
 * @public
 */
export interface CreateProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The name of the product.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The owner of the product.</p>
   * @public
   */
  Owner: string | undefined;

  /**
   * <p>The description of the product.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The distributor of the product.</p>
   * @public
   */
  Distributor?: string | undefined;

  /**
   * <p>The support information about the product.</p>
   * @public
   */
  SupportDescription?: string | undefined;

  /**
   * <p>The contact email for product support.</p>
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * <p>The contact URL for product support.</p>
   *          <p>
   *             <code>^https?:\/\// </code>/ is the pattern used to validate SupportUrl.</p>
   * @public
   */
  SupportUrl?: string | undefined;

  /**
   * <p>The type of product.</p>
   * @public
   */
  ProductType: ProductType | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The configuration of the provisioning artifact. </p>
   * @public
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactProperties | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Specifies connection details for the created product and syncs the product to the connection source
   *          artifact. This automatically manages the product's artifacts based on changes to the source.
   *          The <code>SourceConnection</code> parameter consists of the following sub-fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConnectionParamters</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceConnection?: SourceConnection | undefined;
}

/**
 * <p>Summary information about a product view.</p>
 * @public
 */
export interface ProductViewSummary {
  /**
   * <p>The product view identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The name of the product.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The owner of the product. Contact the product administrator for the significance of
   *          this value.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>Short description of the product.</p>
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * <p>The product type. Contact the product administrator for the significance of this
   *          value. If this value is <code>MARKETPLACE</code>, the product was created by Amazon Web Services Marketplace.</p>
   * @public
   */
  Type?: ProductType | undefined;

  /**
   * <p>The distributor of the product. Contact the product administrator for the
   *          significance of this value.</p>
   * @public
   */
  Distributor?: string | undefined;

  /**
   * <p>Indicates whether the product has a default path.
   *          If the product does not have a default path, call <a>ListLaunchPaths</a>
   *          to disambiguate between paths. Otherwise, <a>ListLaunchPaths</a> is not
   *          required, and the output of <a>ProductViewSummary</a> can be used directly with
   *          <a>DescribeProvisioningParameters</a>.</p>
   * @public
   */
  HasDefaultPath?: boolean | undefined;

  /**
   * <p>The email contact information to obtain support for this Product.</p>
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * <p>The description of the support for this Product.</p>
   * @public
   */
  SupportDescription?: string | undefined;

  /**
   * <p>The URL information to obtain support for this Product.</p>
   * @public
   */
  SupportUrl?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LastSyncStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LastSyncStatus = (typeof LastSyncStatus)[keyof typeof LastSyncStatus];

/**
 * <p>Provides details about the product's connection sync and contains the following sub-fields. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LastSyncTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastSyncStatus</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastSyncStatusMessage</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastSuccessfulSyncTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastSuccessfulSyncProvisioningArtifactID</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface LastSync {
  /**
   * <p>The time of the last attempted sync from the repository to the Service Catalog product. </p>
   * @public
   */
  LastSyncTime?: Date | undefined;

  /**
   * <p>The current status of the sync. Responses include <code>SUCCEEDED</code> or <code>FAILED</code>. </p>
   * @public
   */
  LastSyncStatus?: LastSyncStatus | undefined;

  /**
   * <p>The sync's status message. </p>
   * @public
   */
  LastSyncStatusMessage?: string | undefined;

  /**
   * <p>The time of the latest successful sync from the source repo artifact to the Service Catalog product.</p>
   * @public
   */
  LastSuccessfulSyncTime?: Date | undefined;

  /**
   * <p>The ProvisioningArtifactID of the ProvisioningArtifact created from the latest successful sync. </p>
   * @public
   */
  LastSuccessfulSyncProvisioningArtifactId?: string | undefined;
}

/**
 * <p>Provides details about the configured <code>SourceConnection</code>. </p>
 * @public
 */
export interface SourceConnectionDetail {
  /**
   * <p>The only supported <code>SourceConnection</code> type is Codestar.</p>
   * @public
   */
  Type?: SourceType | undefined;

  /**
   * <p>The connection details based on the connection <code>Type</code>.</p>
   * @public
   */
  ConnectionParameters?: SourceConnectionParameters | undefined;

  /**
   * <p>Provides details about the product's connection sync and contains the following sub-fields. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LastSyncTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastSyncStatus</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastSyncStatusMessage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastSuccessfulSyncTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastSuccessfulSyncProvisioningArtifactID</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LastSync?: LastSync | undefined;
}

/**
 * <p>Information about a product view.</p>
 * @public
 */
export interface ProductViewDetail {
  /**
   * <p>Summary information about the product view.</p>
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * <p>The status of the product.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The product is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Product creation has started; the product is not ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - An action failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The ARN of the product.</p>
   * @public
   */
  ProductARN?: string | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>A top level <code>ProductViewDetail</code> response containing details about the product’s connection.
   *          Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>,
   *          <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs.
   *          This response contains the same fields as the <code>ConnectionParameters</code> request, with the
   *          addition of the <code>LastSync</code> response.</p>
   * @public
   */
  SourceConnection?: SourceConnectionDetail | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisioningArtifactGuidance = {
  DEFAULT: "DEFAULT",
  DEPRECATED: "DEPRECATED",
} as const;

/**
 * @public
 */
export type ProvisioningArtifactGuidance =
  (typeof ProvisioningArtifactGuidance)[keyof typeof ProvisioningArtifactGuidance];

/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 * @public
 */
export interface ProvisioningArtifactDetail {
  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the provisioning artifact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the provisioning artifact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of provisioning artifact.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUD_FORMATION_TEMPLATE</code> - CloudFormation template</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERRAFORM_OPEN_SOURCE</code> - Terraform Open Source configuration file</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERRAFORM_CLOUD</code> - Terraform Cloud configuration file</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXTERNAL</code> - External configuration file</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ProvisioningArtifactType | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Indicates whether the product version is active.</p>
   * @public
   */
  Active?: boolean | undefined;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   * @public
   */
  Guidance?: ProvisioningArtifactGuidance | undefined;

  /**
   * <p>Specifies the revision of the external artifact that was used to automatically sync the Service Catalog product
   *          and create the provisioning artifact. Service Catalog includes this response parameter as a high level
   *          field to the existing <code>ProvisioningArtifactDetail</code> type, which is returned as part of the
   *          response for <code>CreateProduct</code>, <code>UpdateProduct</code>, <code>DescribeProductAsAdmin</code>,
   *          <code>DescribeProvisioningArtifact</code>, <code>ListProvisioningArtifact</code>,
   *          and <code>UpdateProvisioningArticat</code> APIs. </p>
   *          <p>This field only exists for Repo-Synced products. </p>
   * @public
   */
  SourceRevision?: string | undefined;
}

/**
 * @public
 */
export interface CreateProductOutput {
  /**
   * <p>Information about the product view.</p>
   * @public
   */
  ProductViewDetail?: ProductViewDetail | undefined;

  /**
   * <p>Information about the provisioning artifact. </p>
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * <p>Information about the tags associated with the product.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionedProductPlanType = {
  CLOUDFORMATION: "CLOUDFORMATION",
} as const;

/**
 * @public
 */
export type ProvisionedProductPlanType = (typeof ProvisionedProductPlanType)[keyof typeof ProvisionedProductPlanType];

/**
 * <p>The parameter key-value pair used to update a provisioned product.</p>
 * @public
 */
export interface UpdateProvisioningParameter {
  /**
   * <p>The parameter key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The parameter value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>If set to true, <code>Value</code> is ignored and the previous parameter value is kept.</p>
   * @public
   */
  UsePreviousValue?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The name of the plan.</p>
   * @public
   */
  PlanName: string | undefined;

  /**
   * <p>The plan type.</p>
   * @public
   */
  PlanType: ProvisionedProductPlanType | undefined;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   * @public
   */
  PathId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>A user-friendly name for the provisioned product. This value must be
   *          unique for the Amazon Web Services account and cannot be updated after the product is provisioned.</p>
   * @public
   */
  ProvisionedProductName: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the
   *          product.</p>
   * @public
   */
  ProvisioningParameters?: UpdateProvisioningParameter[] | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>One or more tags.</p>
   *          <p>If the plan is for an existing provisioned product, the product must have a <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedProductPlanOutput {
  /**
   * <p>The name of the plan.</p>
   * @public
   */
  PlanName?: string | undefined;

  /**
   * <p>The plan identifier.</p>
   * @public
   */
  PlanId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The configuration for the provisioning artifact.</p>
   * @public
   */
  Parameters: ProvisioningArtifactProperties | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * <p>Specify the template source with one of the following options, but not both. Keys
   *          accepted: [ <code>LoadTemplateFromURL</code>, <code>ImportFromPhysicalId</code> ].</p>
   *          <p>Use the URL of the CloudFormation template in Amazon S3 or GitHub in JSON format. </p>
   *          <p>
   *             <code>LoadTemplateFromURL</code>
   *          </p>
   *          <p>Use the URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.</p>
   *          <p>
   *             <code>ImportFromPhysicalId</code>
   *          </p>
   *          <p>Use the physical id of the resource that contains the template; currently supports CloudFormation stack ARN.</p>
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * <p>The status of the current request.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceActionDefinitionKey = {
  AssumeRole: "AssumeRole",
  Name: "Name",
  Parameters: "Parameters",
  Version: "Version",
} as const;

/**
 * @public
 */
export type ServiceActionDefinitionKey = (typeof ServiceActionDefinitionKey)[keyof typeof ServiceActionDefinitionKey];

/**
 * @public
 * @enum
 */
export const ServiceActionDefinitionType = {
  SsmAutomation: "SSM_AUTOMATION",
} as const;

/**
 * @public
 */
export type ServiceActionDefinitionType =
  (typeof ServiceActionDefinitionType)[keyof typeof ServiceActionDefinitionType];

/**
 * @public
 */
export interface CreateServiceActionInput {
  /**
   * <p>The self-service action name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   * @public
   */
  DefinitionType: ServiceActionDefinitionType | undefined;

  /**
   * <p>The self-service action definition. Can be one of the following:</p>
   *          <dl>
   *             <dt>Name</dt>
   *             <dd>
   *                <p>The name of the Amazon Web Services Systems Manager document (SSM document). For example, <code>AWS-RestartEC2Instance</code>.</p>
   *                <p>If you are using a shared SSM document, you must provide the ARN instead of the name.</p>
   *             </dd>
   *             <dt>Version</dt>
   *             <dd>
   *                <p>The Amazon Web Services Systems Manager automation document version. For example, <code>"Version": "1"</code>
   *                </p>
   *             </dd>
   *             <dt>AssumeRole</dt>
   *             <dd>
   *                <p>The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, <code>"AssumeRole": "arn:aws:iam::12345678910:role/ActionRole"</code>.</p>
   *                <p>To reuse the provisioned product launch role, set to <code>"AssumeRole": "LAUNCH_ROLE"</code>.</p>
   *             </dd>
   *             <dt>Parameters</dt>
   *             <dd>
   *                <p>The list of parameters in JSON format.</p>
   *                <p>For example: <code>[\{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"\}]</code> or <code>[\{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"\}]</code>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  Definition: Partial<Record<ServiceActionDefinitionKey, string>> | undefined;

  /**
   * <p>The self-service action description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * <p>Detailed information about the self-service action.</p>
 * @public
 */
export interface ServiceActionSummary {
  /**
   * <p>The self-service action identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The self-service action name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The self-service action description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The self-service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   * @public
   */
  DefinitionType?: ServiceActionDefinitionType | undefined;
}

/**
 * <p>An object containing detailed information about the self-service action.</p>
 * @public
 */
export interface ServiceActionDetail {
  /**
   * <p>Summary information about the self-service action.</p>
   * @public
   */
  ServiceActionSummary?: ServiceActionSummary | undefined;

  /**
   * <p>A map that defines the self-service action.</p>
   * @public
   */
  Definition?: Partial<Record<ServiceActionDefinitionKey, string>> | undefined;
}

/**
 * @public
 */
export interface CreateServiceActionOutput {
  /**
   * <p>An object containing information about the self-service action.</p>
   * @public
   */
  ServiceActionDetail?: ServiceActionDetail | undefined;
}

/**
 * @public
 */
export interface CreateTagOptionInput {
  /**
   * <p>The TagOption key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The TagOption value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Information about a TagOption.</p>
 * @public
 */
export interface TagOptionDetail {
  /**
   * <p>The TagOption key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The TagOption value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The TagOption active state.</p>
   * @public
   */
  Active?: boolean | undefined;

  /**
   * <p>The TagOption identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Web Services account Id of the owner account that created the TagOption.</p>
   * @public
   */
  Owner?: string | undefined;
}

/**
 * @public
 */
export interface CreateTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   * @public
   */
  TagOptionDetail?: TagOptionDetail | undefined;
}

/**
 * @public
 */
export interface DeleteConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The identifier of the constraint.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteConstraintOutput {}

/**
 * @public
 */
export interface DeletePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeletePortfolioOutput {}

/**
 * <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeletePortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The organization node to whom you are going to stop sharing.</p>
   * @public
   */
  OrganizationNode?: OrganizationNode | undefined;
}

/**
 * @public
 */
export interface DeletePortfolioShareOutput {
  /**
   * <p>The portfolio share unique identifier. This will only be returned if delete is made to an organization node.</p>
   * @public
   */
  PortfolioShareToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteProductOutput {}

/**
 * @public
 */
export interface DeleteProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The plan identifier.</p>
   * @public
   */
  PlanId: string | undefined;

  /**
   * <p>If set to true, Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   * @public
   */
  IgnoreErrors?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteProvisionedProductPlanOutput {}

/**
 * @public
 */
export interface DeleteProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningArtifactOutput {}

/**
 * @public
 */
export interface DeleteServiceActionInput {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests from the same Amazon Web Services account use the same idempotency token, the same response is returned for each repeated request. </p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceActionOutput {}

/**
 * @public
 */
export interface DeleteTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagOptionOutput {}

/**
 * @public
 */
export interface DescribeConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The identifier of the constraint.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeConstraintOutput {
  /**
   * <p>Information about the constraint.</p>
   * @public
   */
  ConstraintDetail?: ConstraintDetail | undefined;

  /**
   * <p>The constraint parameters.</p>
   * @public
   */
  ConstraintParameters?: string | undefined;

  /**
   * <p>The status of the current request.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface DescribeCopyProductStatusInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The token for the copy product operation. This token is returned by <a>CopyProduct</a>.</p>
   * @public
   */
  CopyProductToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CopyProductStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type CopyProductStatus = (typeof CopyProductStatus)[keyof typeof CopyProductStatus];

/**
 * @public
 */
export interface DescribeCopyProductStatusOutput {
  /**
   * <p>The status of the copy product operation.</p>
   * @public
   */
  CopyProductStatus?: CopyProductStatus | undefined;

  /**
   * <p>The identifier of the copied product.</p>
   * @public
   */
  TargetProductId?: string | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>Information about a budget.</p>
 * @public
 */
export interface BudgetDetail {
  /**
   * <p>Name of the associated budget.</p>
   * @public
   */
  BudgetName?: string | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioOutput {
  /**
   * <p>Information about the portfolio.</p>
   * @public
   */
  PortfolioDetail?: PortfolioDetail | undefined;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information about the TagOptions associated with the portfolio.</p>
   * @public
   */
  TagOptions?: TagOptionDetail[] | undefined;

  /**
   * <p>Information about the associated budgets.</p>
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DescribePortfolioShareType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATION: "ORGANIZATION",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
  ORGANIZATION_MEMBER_ACCOUNT: "ORGANIZATION_MEMBER_ACCOUNT",
} as const;

/**
 * @public
 */
export type DescribePortfolioShareType = (typeof DescribePortfolioShareType)[keyof typeof DescribePortfolioShareType];

/**
 * @public
 */
export interface DescribePortfolioSharesInput {
  /**
   * <p>The unique identifier of the portfolio for which shares will be retrieved.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The type of portfolio share to summarize. This field acts as a filter on the type of portfolio share, which can be one of the following:</p>
   *          <p>1. <code>ACCOUNT</code> - Represents an external account to account share.</p>
   *          <p>2. <code>ORGANIZATION</code> - Represents a share to an organization. This share is available to every account in the organization.</p>
   *          <p>3. <code>ORGANIZATIONAL_UNIT</code> - Represents a share to an organizational unit.</p>
   *          <p>4. <code>ORGANIZATION_MEMBER_ACCOUNT</code> - Represents a share to an account in the organization.</p>
   * @public
   */
  Type: DescribePortfolioShareType | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * <p>Information about the portfolio share.</p>
 * @public
 */
export interface PortfolioShareDetail {
  /**
   * <p>The identifier of the recipient entity that received the portfolio share.
   *          The recipient entity can be one of the following:</p>
   *          <p>1. An external account.</p>
   *          <p>2. An organziation member account.</p>
   *          <p>3. An organzational unit (OU).</p>
   *          <p>4. The organization itself. (This shares with every account in the organization).</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The type of the portfolio share.</p>
   * @public
   */
  Type?: DescribePortfolioShareType | undefined;

  /**
   * <p>Indicates whether the shared portfolio is imported by the recipient account. If the recipient is in an organization node, the share is automatically imported, and the field is always set to true.</p>
   * @public
   */
  Accepted?: boolean | undefined;

  /**
   * <p>Indicates whether TagOptions sharing is enabled or disabled for the portfolio share.</p>
   * @public
   */
  ShareTagOptions?: boolean | undefined;

  /**
   * <p>Indicates if <code>Principal</code> sharing is enabled or disabled for the portfolio share. </p>
   * @public
   */
  SharePrincipals?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioSharesOutput {
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>Summaries about each of the portfolio shares.</p>
   * @public
   */
  PortfolioShareDetails?: PortfolioShareDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioShareStatusInput {
  /**
   * <p>The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.</p>
   * @public
   */
  PortfolioShareToken: string | undefined;
}

/**
 * <p>Errors that occurred during the portfolio share operation.</p>
 * @public
 */
export interface ShareError {
  /**
   * <p>List of accounts impacted by the error.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>Information about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Error type that happened when processing the operation.</p>
   * @public
   */
  Error?: string | undefined;
}

/**
 * <p>Information about the portfolio share operation.</p>
 * @public
 */
export interface ShareDetails {
  /**
   * <p>List of accounts for whom the operation succeeded.</p>
   * @public
   */
  SuccessfulShares?: string[] | undefined;

  /**
   * <p>List of errors.</p>
   * @public
   */
  ShareErrors?: ShareError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 */
export interface DescribePortfolioShareStatusOutput {
  /**
   * <p>The token for the portfolio share operation. For example, <code>share-6v24abcdefghi</code>.</p>
   * @public
   */
  PortfolioShareToken?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId?: string | undefined;

  /**
   * <p>Organization node identifier. It can be either account id, organizational unit id or organization id.</p>
   * @public
   */
  OrganizationNodeValue?: string | undefined;

  /**
   * <p>Status of the portfolio share operation.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Information about the portfolio share operation.</p>
   * @public
   */
  ShareDetails?: ShareDetails | undefined;
}

/**
 * @public
 */
export interface DescribeProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The product name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A launch path object.</p>
 * @public
 */
export interface LaunchPath {
  /**
   * <p>The identifier of the launch path.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the launch path.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
 * @public
 */
export interface ProvisioningArtifact {
  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the provisioning artifact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the provisioning artifact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   * @public
   */
  Guidance?: ProvisioningArtifactGuidance | undefined;
}

/**
 * @public
 */
export interface DescribeProductOutput {
  /**
   * <p>Summary information about the product view.</p>
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * <p>Information about the provisioning artifacts for the specified product.</p>
   * @public
   */
  ProvisioningArtifacts?: ProvisioningArtifact[] | undefined;

  /**
   * <p>Information about the associated budgets.</p>
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;

  /**
   * <p>Information about the associated launch paths.</p>
   * @public
   */
  LaunchPaths?: LaunchPath[] | undefined;
}

/**
 * @public
 */
export interface DescribeProductAsAdminInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The product name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier of the shared portfolio that the specified product is associated
   *          with.</p>
   *          <p>You can provide this parameter to retrieve the shared TagOptions associated with the
   *          product. If this parameter is provided and if TagOptions sharing is enabled in the
   *          portfolio share, the API returns both local and shared TagOptions associated with the
   *          product. Otherwise only local TagOptions will be returned. </p>
   * @public
   */
  SourcePortfolioId?: string | undefined;
}

/**
 * <p>Summary information about a provisioning artifact (also known as a version) for a product.</p>
 * @public
 */
export interface ProvisioningArtifactSummary {
  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the provisioning artifact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the provisioning artifact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The metadata for the provisioning artifact. This is used with Amazon Web Services Marketplace products.</p>
   * @public
   */
  ProvisioningArtifactMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeProductAsAdminOutput {
  /**
   * <p>Information about the product view.</p>
   * @public
   */
  ProductViewDetail?: ProductViewDetail | undefined;

  /**
   * <p>Information about the provisioning artifacts (also known as versions) for the specified product.</p>
   * @public
   */
  ProvisioningArtifactSummaries?: ProvisioningArtifactSummary[] | undefined;

  /**
   * <p>Information about the tags associated with the product.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Information about the TagOptions associated with the product.</p>
   * @public
   */
  TagOptions?: TagOptionDetail[] | undefined;

  /**
   * <p>Information about the associated budgets.</p>
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeProductViewInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product view identifier.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductViewOutput {
  /**
   * <p>Summary information about the product.</p>
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * <p>Information about the provisioning artifacts for the product.</p>
   * @public
   */
  ProvisioningArtifacts?: ProvisioningArtifact[] | undefined;
}

/**
 * DescribeProvisionedProductAPI input structure.
 *
 *         AcceptLanguage - [Optional]
 *         The language code for localization.
 *
 *         Id - [Optional]
 *         The provisioned product identifier.
 *
 *         Name - [Optional]
 *         Another provisioned product identifier. Customers must provide either Id or Name.
 * @public
 */
export interface DescribeProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The provisioned product identifier. You must provide the name or ID, but not both.</p>
   *          <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the provisioned product. You must provide the name or ID, but not both.</p>
   *          <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Information about a CloudWatch dashboard.</p>
 * @public
 */
export interface CloudWatchDashboard {
  /**
   * <p>The name of the CloudWatch dashboard.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionedProductStatus = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  PLAN_IN_PROGRESS: "PLAN_IN_PROGRESS",
  TAINTED: "TAINTED",
  UNDER_CHANGE: "UNDER_CHANGE",
} as const;

/**
 * @public
 */
export type ProvisionedProductStatus = (typeof ProvisionedProductStatus)[keyof typeof ProvisionedProductStatus];

/**
 * <p>Information about a provisioned product.</p>
 * @public
 */
export interface ProvisionedProductDetail {
  /**
   * <p>The user-friendly name of the provisioned product.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the provisioned product.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of provisioned product.
   *          The supported values are <code>CFN_STACK</code>, <code>CFN_STACKSET</code>, <code>TERRAFORM_OPEN_SOURCE</code>,
   *          <code>TERRAFORM_CLOUD</code>, and <code>EXTERNAL</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The identifier of the provisioned product.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The current status of the provisioned product.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most
   *                recent operation succeeded and completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results.
   *                Wait for an <code>AVAILABLE</code> status before performing operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has
   *                completed the requested operation but is not exactly what was requested. For example, a
   *                request to update to a new version failed and the stack rolled back to the current version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running.
   *                For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product,
   *                but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an <code>AVAILABLE</code> status before performing operations.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ProvisionedProductStatus | undefined;

  /**
   * <p>The current status message of the provisioned product.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The record identifier of the last request performed on this provisioned product.</p>
   * @public
   */
  LastRecordId?: string | undefined;

  /**
   * <p>The record identifier of the last request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                UpdateProvisionedProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                ExecuteProvisionedProductPlan
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                TerminateProvisionedProduct
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  LastProvisioningRecordId?: string | undefined;

  /**
   * <p>The record identifier of the last successful request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                UpdateProvisionedProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                ExecuteProvisionedProductPlan
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                TerminateProvisionedProduct
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  LastSuccessfulProvisioningRecordId?: string | undefined;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The ARN of the launch role associated with the provisioned product.</p>
   * @public
   */
  LaunchRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisionedProductOutput {
  /**
   * <p>Information about the provisioned product.</p>
   * @public
   */
  ProvisionedProductDetail?: ProvisionedProductDetail | undefined;

  /**
   * <p>Any CloudWatch dashboards that were created when provisioning the product.</p>
   * @public
   */
  CloudWatchDashboards?: CloudWatchDashboard[] | undefined;
}

/**
 * @public
 */
export interface DescribeProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The plan identifier.</p>
   * @public
   */
  PlanId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionedProductPlanStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_SUCCESS: "CREATE_SUCCESS",
  EXECUTE_FAILED: "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS: "EXECUTE_IN_PROGRESS",
  EXECUTE_SUCCESS: "EXECUTE_SUCCESS",
} as const;

/**
 * @public
 */
export type ProvisionedProductPlanStatus =
  (typeof ProvisionedProductPlanStatus)[keyof typeof ProvisionedProductPlanStatus];

/**
 * <p>Information about a plan.</p>
 * @public
 */
export interface ProvisionedProductPlanDetails {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   * @public
   */
  PathId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The name of the plan.</p>
   * @public
   */
  PlanName?: string | undefined;

  /**
   * <p>The plan identifier.</p>
   * @public
   */
  PlanId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   * @public
   */
  ProvisionProductName?: string | undefined;

  /**
   * <p>The plan type.</p>
   * @public
   */
  PlanType?: ProvisionedProductPlanType | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: ProvisionedProductPlanStatus | undefined;

  /**
   * <p>The UTC time stamp when the plan was last updated.</p>
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the
   *          product.</p>
   * @public
   */
  ProvisioningParameters?: UpdateProvisioningParameter[] | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  ADD: "ADD",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;

/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const ResourceAttribute = {
  CREATIONPOLICY: "CREATIONPOLICY",
  DELETIONPOLICY: "DELETIONPOLICY",
  METADATA: "METADATA",
  PROPERTIES: "PROPERTIES",
  TAGS: "TAGS",
  UPDATEPOLICY: "UPDATEPOLICY",
} as const;

/**
 * @public
 */
export type ResourceAttribute = (typeof ResourceAttribute)[keyof typeof ResourceAttribute];

/**
 * @public
 * @enum
 */
export const RequiresRecreation = {
  ALWAYS: "ALWAYS",
  CONDITIONALLY: "CONDITIONALLY",
  NEVER: "NEVER",
} as const;

/**
 * @public
 */
export type RequiresRecreation = (typeof RequiresRecreation)[keyof typeof RequiresRecreation];

/**
 * <p>Information about a change to a resource attribute.</p>
 * @public
 */
export interface ResourceTargetDefinition {
  /**
   * <p>The attribute to be changed.</p>
   * @public
   */
  Attribute?: ResourceAttribute | undefined;

  /**
   * <p>If the attribute is <code>Properties</code>, the value is the name of the property.
   *          Otherwise, the value is null.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>If the attribute is <code>Properties</code>, indicates whether a change to this property
   *          causes the resource to be re-created.</p>
   * @public
   */
  RequiresRecreation?: RequiresRecreation | undefined;
}

/**
 * <p>Information about a change to a resource attribute.</p>
 * @public
 */
export interface ResourceChangeDetail {
  /**
   * <p>Information about the resource attribute to be modified.</p>
   * @public
   */
  Target?: ResourceTargetDefinition | undefined;

  /**
   * <p>For static evaluations, the value of the resource attribute will change and the new value is known.
   *          For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.</p>
   * @public
   */
  Evaluation?: EvaluationType | undefined;

  /**
   * <p>The ID of the entity that caused the change.</p>
   * @public
   */
  CausingEntity?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Replacement = {
  CONDITIONAL: "CONDITIONAL",
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;

/**
 * @public
 */
export type Replacement = (typeof Replacement)[keyof typeof Replacement];

/**
 * <p>Information about a resource change that will occur when a plan is executed.</p>
 * @public
 */
export interface ResourceChange {
  /**
   * <p>The change action.</p>
   * @public
   */
  Action?: ChangeAction | undefined;

  /**
   * <p>The ID of the resource, as defined in the CloudFormation template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>The ID of the resource, if it was already created.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>If the change type is <code>Modify</code>, indicates whether the existing resource
   *          is deleted and replaced with a new one.</p>
   * @public
   */
  Replacement?: Replacement | undefined;

  /**
   * <p>The change scope.</p>
   * @public
   */
  Scope?: ResourceAttribute[] | undefined;

  /**
   * <p>Information about the resource changes.</p>
   * @public
   */
  Details?: ResourceChangeDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeProvisionedProductPlanOutput {
  /**
   * <p>Information about the plan.</p>
   * @public
   */
  ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails | undefined;

  /**
   * <p>Information about the resource changes that will occur when the plan is executed.</p>
   * @public
   */
  ResourceChanges?: ResourceChange[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The provisioning artifact name.</p>
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * <p>The product name.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>Indicates whether a verbose level of detail is enabled.</p>
   * @public
   */
  Verbose?: boolean | undefined;

  /**
   * <p>Indicates if the API call response does or does not include additional details about the provisioning parameters. </p>
   * @public
   */
  IncludeProvisioningArtifactParameters?: boolean | undefined;
}

/**
 * <p>The constraints that the administrator has put on the parameter.</p>
 * @public
 */
export interface ParameterConstraints {
  /**
   * <p>The values that the administrator has allowed for the parameter.</p>
   * @public
   */
  AllowedValues?: string[] | undefined;

  /**
   * <p>A regular expression that represents the patterns that allow for <code>String</code> types. The pattern must match the entire parameter value provided.</p>
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * <p>A string that explains a constraint when the constraint is violated. For example, without a constraint description, a parameter that has an allowed pattern of <code>[A-Za-z0-9]+</code> displays the following error message when the user specifies an invalid value:</p>
   *          <p>
   *             <code>Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+</code>
   *          </p>
   *          <p>By adding a constraint description, such as must only contain letters (uppercase and lowercase) and numbers, you can display the following customized error message:</p>
   *          <p>
   *             <code>Malformed input-Parameter MyParameter must only contain uppercase and lowercase letters and numbers.</code>
   *          </p>
   * @public
   */
  ConstraintDescription?: string | undefined;

  /**
   * <p>An integer value that determines the largest number of characters you want to allow for <code>String</code> types. </p>
   * @public
   */
  MaxLength?: string | undefined;

  /**
   * <p>An integer value that determines the smallest number of characters you want to allow for <code>String</code> types.</p>
   * @public
   */
  MinLength?: string | undefined;

  /**
   * <p>A numeric value that determines the largest numeric value you want to allow for <code>Number</code> types.</p>
   * @public
   */
  MaxValue?: string | undefined;

  /**
   * <p>A numeric value that determines the smallest numeric value you want to allow for <code>Number</code> types. </p>
   * @public
   */
  MinValue?: string | undefined;
}

/**
 * <p>Information about a parameter used to provision a product.</p>
 * @public
 */
export interface ProvisioningArtifactParameter {
  /**
   * <p>The parameter key.</p>
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * <p>The default value.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>The parameter type.</p>
   * @public
   */
  ParameterType?: string | undefined;

  /**
   * <p>If this value is true, the value for this parameter is obfuscated from view when the
   *          parameter is retrieved. This parameter is used to hide sensitive information.</p>
   * @public
   */
  IsNoEcho?: boolean | undefined;

  /**
   * <p>The description of the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Constraints that the administrator has put on a parameter.</p>
   * @public
   */
  ParameterConstraints?: ParameterConstraints | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.</p>
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * <p>The status of the current request.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>Information about the parameters used to provision the product.  </p>
   * @public
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningParametersInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier. You must provide the product name or ID, but not both.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The name of the product. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.</p>
   * @public
   */
  PathId?: string | undefined;

  /**
   * <p>The name of the path. You must provide the name or ID, but not both.</p>
   * @public
   */
  PathName?: string | undefined;
}

/**
 * <p>Summary information about a constraint.</p>
 * @public
 */
export interface ConstraintSummary {
  /**
   * <p>The type of constraint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LAUNCH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>STACKSET</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPLATE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The description of the constraint.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Provisioning artifact output.</p>
 * @public
 */
export interface ProvisioningArtifactOutput {
  /**
   * <p>The provisioning artifact output key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Description of the provisioning artifact output key.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p>
 *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface ProvisioningArtifactPreferences {
  /**
   * <p>One or more Amazon Web Services accounts where stack instances are deployed from the stack set. These accounts can be scoped in <code>ProvisioningPreferences$StackSetAccounts</code> and <code>UpdateProvisioningPreferences$StackSetAccounts</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   * @public
   */
  StackSetAccounts?: string[] | undefined;

  /**
   * <p>One or more Amazon Web Services Regions where stack instances are deployed from the stack set. These Regions can be scoped in <code>ProvisioningPreferences$StackSetRegions</code> and <code>UpdateProvisioningPreferences$StackSetRegions</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   * @public
   */
  StackSetRegions?: string[] | undefined;
}

/**
 * <p>Summary information about a TagOption.</p>
 * @public
 */
export interface TagOptionSummary {
  /**
   * <p>The TagOption key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The TagOption value.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>Additional information provided by the administrator.</p>
 * @public
 */
export interface UsageInstruction {
  /**
   * <p>The usage instruction type for the value.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The usage instruction value for this type.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningParametersOutput {
  /**
   * <p>Information about the parameters used to provision the product.</p>
   * @public
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactParameter[] | undefined;

  /**
   * <p>Information about the constraints used to provision the product.</p>
   * @public
   */
  ConstraintSummaries?: ConstraintSummary[] | undefined;

  /**
   * <p>Any additional metadata specifically related to the provisioning of the product. For
   *          example, see the <code>Version</code> field of the CloudFormation template.</p>
   * @public
   */
  UsageInstructions?: UsageInstruction[] | undefined;

  /**
   * <p>Information about the TagOptions associated with the resource.</p>
   * @public
   */
  TagOptions?: TagOptionSummary[] | undefined;

  /**
   * <p>An object that contains information about preferences, such as Regions and accounts, for the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences | undefined;

  /**
   * <p>The output of the provisioning artifact.</p>
   *
   * @deprecated
   * @public
   */
  ProvisioningArtifactOutputs?: ProvisioningArtifactOutput[] | undefined;

  /**
   * <p>A list of the keys and descriptions of the outputs. These outputs can be referenced from a provisioned product launched from this provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactOutputKeys?: ProvisioningArtifactOutput[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecordInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The record identifier of the provisioned product. This identifier is returned by the
   *          request operation.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * <p>The error code and description resulting from an operation.</p>
 * @public
 */
export interface RecordError {
  /**
   * <p>The numeric value of the error.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Information about a tag, which is a key-value pair.</p>
 * @public
 */
export interface RecordTag {
  /**
   * <p>The key for this tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for this tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RecordStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  IN_PROGRESS_IN_ERROR: "IN_PROGRESS_IN_ERROR",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type RecordStatus = (typeof RecordStatus)[keyof typeof RecordStatus];

/**
 * <p>Information about a request operation.</p>
 * @public
 */
export interface RecordDetail {
  /**
   * <p>The identifier of the record.</p>
   * @public
   */
  RecordId?: string | undefined;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * <p>The status of the provisioned product.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The request was created but the operation has not started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The requested operation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS_IN_ERROR</code> - The provisioned product is under change but the
   *             requested operation failed and some remediation is occurring. For example, a rollback.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - The requested operation has successfully completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The requested operation has unsuccessfully completed.
   *             Investigate using the error messages returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: RecordStatus | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time when the record was last updated.</p>
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code>, <code>CFN_STACKSET</code>,
   *          <code>TERRAFORM_OPEN_SOURCE</code>, <code>TERRAFORM_CLOUD</code>, and <code>EXTERNAL</code>.</p>
   * @public
   */
  ProvisionedProductType?: string | undefined;

  /**
   * <p>The record type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISION_PRODUCT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_PROVISIONED_PRODUCT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATE_PROVISIONED_PRODUCT</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  RecordType?: string | undefined;

  /**
   * <p>The identifier of the provisioned product.</p>
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The path identifier.</p>
   * @public
   */
  PathId?: string | undefined;

  /**
   * <p>The errors that occurred.</p>
   * @public
   */
  RecordErrors?: RecordError[] | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  RecordTags?: RecordTag[] | undefined;

  /**
   * <p>The ARN of the launch role associated with the provisioned product.</p>
   * @public
   */
  LaunchRoleArn?: string | undefined;
}

/**
 * <p>The output for the product created as the result of a request. For example, the output for
 *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
 * @public
 */
export interface RecordOutput {
  /**
   * <p>The output key.</p>
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * <p>The output value.</p>
   * @public
   */
  OutputValue?: string | undefined;

  /**
   * <p>The description of the output.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecordOutput {
  /**
   * <p>Information about the product.</p>
   * @public
   */
  RecordDetail?: RecordDetail | undefined;

  /**
   * <p>Information about the product created as the result of a request. For example, the output for
   *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
   * @public
   */
  RecordOutputs?: RecordOutput[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionInput {
  /**
   * <p>The self-service action identifier.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionOutput {
  /**
   * <p>Detailed information about the self-service action.</p>
   * @public
   */
  ServiceActionDetail?: ServiceActionDetail | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionExecutionParametersInput {
  /**
   * <p>The identifier of the provisioned product.</p>
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>The self-service action identifier.</p>
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * <p>Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.</p>
 * @public
 */
export interface ExecutionParameter {
  /**
   * <p>The name of the execution parameter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The execution parameter type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The default values for the execution parameter.</p>
   * @public
   */
  DefaultValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionExecutionParametersOutput {
  /**
   * <p>The parameters of the self-service action.</p>
   * @public
   */
  ServiceActionParameters?: ExecutionParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   * @public
   */
  TagOptionDetail?: TagOptionDetail | undefined;
}

/**
 * @public
 */
export interface DisableAWSOrganizationsAccessInput {}

/**
 * @public
 */
export interface DisableAWSOrganizationsAccessOutput {}

/**
 * @public
 */
export interface DisassociateBudgetFromResourceInput {
  /**
   * <p>The name of the budget you want to disassociate.</p>
   * @public
   */
  BudgetName: string | undefined;

  /**
   * <p>The resource identifier you want to disassociate from. Either a portfolio-id or a product-id.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBudgetFromResourceOutput {}

/**
 * @public
 */
export interface DisassociatePrincipalFromPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The ARN of the principal (user, role, or group). This field allows an ARN with no <code>accountID</code> with or without wildcard characters if
   *          <code>PrincipalType</code> is <code>IAM_PATTERN</code>.</p>
   * @public
   */
  PrincipalARN: string | undefined;

  /**
   * <p>The supported value is <code>IAM</code> if you use a fully defined ARN, or <code>IAM_PATTERN</code>
   *          if you specify an <code>IAM</code> ARN with no AccountId, with or without wildcard characters. </p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;
}

/**
 * @public
 */
export interface DisassociatePrincipalFromPortfolioOutput {}

/**
 * @public
 */
export interface DisassociateProductFromPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateProductFromPortfolioOutput {}

/**
 * @public
 */
export interface DisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests from the same Amazon Web Services account use the same idempotency token, the same response is returned for each repeated request. </p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateServiceActionFromProvisioningArtifactOutput {}

/**
 * @public
 */
export interface DisassociateTagOptionFromResourceInput {
  /**
   * <p>The resource identifier.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The TagOption identifier.</p>
   * @public
   */
  TagOptionId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTagOptionFromResourceOutput {}

/**
 * @public
 */
export interface EnableAWSOrganizationsAccessInput {}

/**
 * @public
 */
export interface EnableAWSOrganizationsAccessOutput {}

/**
 * @public
 */
export interface ExecuteProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The plan identifier.</p>
   * @public
   */
  PlanId: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductPlanOutput {
  /**
   * <p>Information about the result of provisioning the product.</p>
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductServiceActionInput {
  /**
   * <p>The identifier of the provisioned product.</p>
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * <p>An idempotency token that uniquely identifies the execute request.</p>
   * @public
   */
  ExecuteToken?: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>A map of all self-service action parameters and their values. If a provided parameter is of a special type, such as <code>TARGET</code>, the provided value will
   *             override the default value generated by Service Catalog. If the parameters field is not provided, no additional parameters are passed and default values will be used for
   *             any special parameters such as <code>TARGET</code>.</p>
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductServiceActionOutput {
  /**
   * <p>An object containing detailed information about the result of provisioning the product.</p>
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface GetAWSOrganizationsAccessStatusInput {}

/**
 * @public
 */
export interface GetAWSOrganizationsAccessStatusOutput {
  /**
   * <p>The status of the portfolio share feature.</p>
   * @public
   */
  AccessStatus?: AccessStatus | undefined;
}

/**
 * @public
 */
export interface GetProvisionedProductOutputsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The identifier of the provisioned product that you want the outputs from.</p>
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * <p>The name of the provisioned product that you want the outputs from.</p>
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * <p>The list of keys that the API should return with their values. If none are provided, the API will return all outputs of the provisioned product.</p>
   * @public
   */
  OutputKeys?: string[] | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProvisionedProductOutputsOutput {
  /**
   * <p>Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
   *       </p>
   * @public
   */
  Outputs?: RecordOutput[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportAsProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The user-friendly name of the provisioned product. The value must be unique for the Amazon Web Services account.
   *          The name cannot be updated after the product is provisioned. </p>
   * @public
   */
  ProvisionedProductName: string | undefined;

  /**
   * <p>The unique identifier of the resource to be imported. It only currently supports
   *          CloudFormation stack IDs.</p>
   * @public
   */
  PhysicalId: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportAsProvisionedProductOutput {
  /**
   * <p>Information about a request operation.</p>
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface ListAcceptedPortfolioSharesInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The type of shared portfolios to list. The default is to list imported portfolios.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_ORGANIZATIONS</code> - List portfolios accepted and shared via organizational sharing by the management account or delegated administrator of your organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_SERVICECATALOG</code> - Deprecated type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPORTED</code> - List imported portfolios that have been accepted and
   *                shared through account-to-account sharing.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PortfolioShareType?: PortfolioShareType | undefined;
}

/**
 * @public
 */
export interface ListAcceptedPortfolioSharesOutput {
  /**
   * <p>Information about the portfolios.</p>
   * @public
   */
  PortfolioDetails?: PortfolioDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBudgetsForResourceInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The resource identifier.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBudgetsForResourceOutput {
  /**
   * <p>Information about the associated budgets.</p>
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConstraintsForPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConstraintsForPortfolioOutput {
  /**
   * <p>Information about the constraints.</p>
   * @public
   */
  ConstraintDetails?: ConstraintDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchPathsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>Summary information about a product path for a user.</p>
 * @public
 */
export interface LaunchPathSummary {
  /**
   * <p>The identifier of the product path.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The constraints on the portfolio-product relationship.</p>
   * @public
   */
  ConstraintSummaries?: ConstraintSummary[] | undefined;

  /**
   * <p>The tags associated with this product path.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the portfolio that contains the product. </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchPathsOutput {
  /**
   * <p>Information about the launch path.</p>
   * @public
   */
  LaunchPathSummaries?: LaunchPathSummary[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationPortfolioAccessInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier. For example, <code>port-2abcdext3y5fk</code>.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The organization node type that will be returned in the output.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ORGANIZATION</code> - Organization that has access to the portfolio. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ORGANIZATIONAL_UNIT</code> - Organizational unit that has access to the portfolio within your organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT</code> - Account that has access to the portfolio within your organization.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OrganizationNodeType: OrganizationNodeType | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListOrganizationPortfolioAccessOutput {
  /**
   * <p>Displays information about the organization nodes.</p>
   * @public
   */
  OrganizationNodes?: OrganizationNode[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortfolioAccessInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The ID of an organization node the portfolio is shared with. All children of this node with an inherited portfolio share will be returned.</p>
   * @public
   */
  OrganizationParentId?: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListPortfolioAccessOutput {
  /**
   * <p>Information about the Amazon Web Services accounts with access to the portfolio.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosOutput {
  /**
   * <p>Information about the portfolios.</p>
   * @public
   */
  PortfolioDetails?: PortfolioDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosForProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosForProductOutput {
  /**
   * <p>Information about the portfolios.</p>
   * @public
   */
  PortfolioDetails?: PortfolioDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPrincipalsForPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>Information about a principal.</p>
 * @public
 */
export interface Principal {
  /**
   * <p>The ARN of the principal (user, role, or group). This field allows for an ARN with no <code>accountID</code>, with or without wildcard characters if the
   *       <code>PrincipalType</code> is an <code>IAM_PATTERN</code>. </p>
   *          <p>For more information, review <a href="https://docs.aws.amazon.com/cli/latest/reference/servicecatalog/associate-principal-with-portfolio.html#options">associate-principal-with-portfolio</a>
   *       in the Amazon Web Services CLI Command Reference. </p>
   * @public
   */
  PrincipalARN?: string | undefined;

  /**
   * <p>The principal type. The supported value is <code>IAM</code> if you use a fully defined ARN, or
   *          <code>IAM_PATTERN</code> if you use an ARN with no <code>accountID</code>, with or without wildcard characters. </p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;
}

/**
 * @public
 */
export interface ListPrincipalsForPortfolioOutput {
  /**
   * <p>The <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the portfolio.</p>
   * @public
   */
  Principals?: Principal[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedProductPlansInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;
}

/**
 * <p>Summary information about a plan.</p>
 * @public
 */
export interface ProvisionedProductPlanSummary {
  /**
   * <p>The name of the plan.</p>
   * @public
   */
  PlanName?: string | undefined;

  /**
   * <p>The plan identifier.</p>
   * @public
   */
  PlanId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   * @public
   */
  ProvisionProductName?: string | undefined;

  /**
   * <p>The plan type.</p>
   * @public
   */
  PlanType?: ProvisionedProductPlanType | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedProductPlansOutput {
  /**
   * <p>Information about the plans.</p>
   * @public
   */
  ProvisionedProductPlans?: ProvisionedProductPlanSummary[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsOutput {
  /**
   * <p>Information about the provisioning artifacts.</p>
   * @public
   */
  ProvisioningArtifactDetails?: ProvisioningArtifactDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsForServiceActionInput {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * <p>An object that contains summary information about a product view and a provisioning artifact.</p>
 * @public
 */
export interface ProvisioningArtifactView {
  /**
   * <p>Summary information about a product view.</p>
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
   * @public
   */
  ProvisioningArtifact?: ProvisioningArtifact | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsForServiceActionOutput {
  /**
   * <p>An array of objects with information about product views and provisioning artifacts.</p>
   * @public
   */
  ProvisioningArtifactViews?: ProvisioningArtifactView[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The search filter to use when listing history records.</p>
 * @public
 */
export interface ListRecordHistorySearchFilter {
  /**
   * <p>The filter key.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>product</code> - Filter results based on the specified product identifier.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisionedproduct</code> - Filter results based on the provisioned product identifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListRecordHistoryInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;

  /**
   * <p>The search filter to scope the results.</p>
   * @public
   */
  SearchFilter?: ListRecordHistorySearchFilter | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecordHistoryOutput {
  /**
   * <p>The records, in reverse chronological order.</p>
   * @public
   */
  RecordDetails?: RecordDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesForTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   * @public
   */
  TagOptionId: string | undefined;

  /**
   * <p>The resource type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Portfolio</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Product</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>Information about a resource.</p>
 * @public
 */
export interface ResourceDetail {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The creation time of the resource.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourcesForTagOptionOutput {
  /**
   * <p>Information about the resources.</p>
   * @public
   */
  ResourceDetails?: ResourceDetail[] | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsOutput {
  /**
   * <p>An object containing information about the service actions associated with the provisioning artifact.</p>
   * @public
   */
  ServiceActionSummaries?: ServiceActionSummary[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsForProvisioningArtifactInput {
  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsForProvisioningArtifactOutput {
  /**
   * <p>An object containing information about the self-service actions associated with the provisioning artifact.</p>
   * @public
   */
  ServiceActionSummaries?: ServiceActionSummary[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesForProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The identifier of the provisioned product.</p>
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const StackInstanceStatus = {
  CURRENT: "CURRENT",
  INOPERABLE: "INOPERABLE",
  OUTDATED: "OUTDATED",
} as const;

/**
 * @public
 */
export type StackInstanceStatus = (typeof StackInstanceStatus)[keyof typeof StackInstanceStatus];

/**
 * <p>An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. </p>
 * @public
 */
export interface StackInstance {
  /**
   * <p>The name of the Amazon Web Services account that the stack instance is associated with.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The status of the stack instance, in terms of its synchronization with its associated stack set. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to true, to delete the stack instance, and then delete the stack manually. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because either
   *             the associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation,
   *             or the stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or was stopped before the stack was created or updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CURRENT</code>: The stack is currently up to date with the stack set.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackInstanceStatus?: StackInstanceStatus | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesForProvisionedProductOutput {
  /**
   * <p>List of stack instances.</p>
   * @public
   */
  StackInstances?: StackInstance[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>Filters to use when listing TagOptions.</p>
 * @public
 */
export interface ListTagOptionsFilters {
  /**
   * <p>The TagOption key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The TagOption value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The active state.</p>
   * @public
   */
  Active?: boolean | undefined;
}

/**
 * @public
 */
export interface ListTagOptionsInput {
  /**
   * <p>The search filters. If no search filters are specified, the output includes all TagOptions.</p>
   * @public
   */
  Filters?: ListTagOptionsFilters | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagOptionsOutput {
  /**
   * <p>Information about the TagOptions.</p>
   * @public
   */
  TagOptionDetails?: TagOptionDetail[] | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>
 *          The unique key-value pair
 *          for a tag
 *          that identifies provisioned product resources.
 *       </p>
 * @public
 */
export interface UniqueTagResourceIdentifier {
  /**
   * <p>
   *          A unique key
   *          that's attached
   *          to a resource.
   *       </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>
   *          A unique value
   *          that's attached
   *          to a resource.
   *       </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>
 *          The ID
 *          for the provisioned product resources
 *          that are part
 *          of a resource group.
 *       </p>
 * @public
 */
export interface EngineWorkflowResourceIdentifier {
  /**
   * <p>
   *          The unique key-value pair
   *          for a tag
   *          that identifies provisioned product resources.
   *       </p>
   * @public
   */
  UniqueTag?: UniqueTagResourceIdentifier | undefined;
}

/**
 * @public
 * @enum
 */
export const EngineWorkflowStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type EngineWorkflowStatus = (typeof EngineWorkflowStatus)[keyof typeof EngineWorkflowStatus];

/**
 * @public
 */
export interface NotifyProvisionProductEngineWorkflowResultInput {
  /**
   * <p>
   *          The encrypted contents
   *          of the provisioning engine execution payload
   *          that Service Catalog sends
   *          after the Terraform product provisioning workflow starts.
   *       </p>
   * @public
   */
  WorkflowToken: string | undefined;

  /**
   * <p>
   *          The identifier
   *          of the record.
   *       </p>
   * @public
   */
  RecordId: string | undefined;

  /**
   * <p>
   *          The status
   *          of the provisioning engine execution.
   *       </p>
   * @public
   */
  Status: EngineWorkflowStatus | undefined;

  /**
   * <p>
   *          The reason
   *          why the provisioning engine execution failed.
   *       </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>
   *          The ID
   *          for the provisioned product resources
   *          that are part
   *          of a resource group.
   *       </p>
   * @public
   */
  ResourceIdentifier?: EngineWorkflowResourceIdentifier | undefined;

  /**
   * <p>
   *          The output
   *          of the provisioning engine execution.
   *       </p>
   * @public
   */
  Outputs?: RecordOutput[] | undefined;

  /**
   * <p>
   *          The idempotency token
   *          that identifies the provisioning engine execution.
   *       </p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyProvisionProductEngineWorkflowResultOutput {}

/**
 * @public
 */
export interface NotifyTerminateProvisionedProductEngineWorkflowResultInput {
  /**
   * <p>
   *          The encrypted contents
   *          of the terminate engine execution payload
   *          that Service Catalog sends
   *          after the Terraform product terminate workflow starts.
   *       </p>
   * @public
   */
  WorkflowToken: string | undefined;

  /**
   * <p>
   *          The identifier
   *          of the record.
   *       </p>
   * @public
   */
  RecordId: string | undefined;

  /**
   * <p>
   *          The status
   *          of the terminate engine execution.
   *       </p>
   * @public
   */
  Status: EngineWorkflowStatus | undefined;

  /**
   * <p>
   *          The reason
   *          why the terminate engine execution failed.
   *       </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>
   *          The idempotency token
   *          that identifies the terminate engine execution.
   *       </p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyTerminateProvisionedProductEngineWorkflowResultOutput {}

/**
 * @public
 */
export interface NotifyUpdateProvisionedProductEngineWorkflowResultInput {
  /**
   * <p>
   *          The encrypted contents
   *          of the update engine execution payload
   *          that Service Catalog sends
   *          after the Terraform product update workflow starts.
   *       </p>
   * @public
   */
  WorkflowToken: string | undefined;

  /**
   * <p>
   *          The identifier
   *          of the record.
   *       </p>
   * @public
   */
  RecordId: string | undefined;

  /**
   * <p>
   *          The status
   *          of the update engine execution.
   *       </p>
   * @public
   */
  Status: EngineWorkflowStatus | undefined;

  /**
   * <p>
   *          The reason
   *          why the update engine execution failed.
   *       </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>
   *          The output
   *          of the update engine execution.
   *       </p>
   * @public
   */
  Outputs?: RecordOutput[] | undefined;

  /**
   * <p>
   *          The idempotency token
   *          that identifies the update engine execution.
   *       </p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyUpdateProvisionedProductEngineWorkflowResultOutput {}

/**
 * <p>Information about a parameter used to provision a product.</p>
 * @public
 */
export interface ProvisioningParameter {
  /**
   * <p>The parameter key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The parameter value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The user-defined preferences that will be applied when updating a provisioned
 *          product. Not all preferences are applicable to all provisioned product type</p>
 *          <p>One or more Amazon Web Services accounts that will have access to the provisioned product.</p>
 *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
 *          <p>The Amazon Web Services accounts specified should be within the list of accounts in the
 *             <code>STACKSET</code> constraint. To get the list of accounts in the
 *             <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code>
 *          operation.</p>
 *          <p>If no values are specified, the default value is all accounts from the
 *             <code>STACKSET</code> constraint.</p>
 * @public
 */
export interface ProvisioningPreferences {
  /**
   * <p>One or more Amazon Web Services accounts where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified accounts should be within the list of accounts from the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all acounts from the <code>STACKSET</code> constraint.</p>
   * @public
   */
  StackSetAccounts?: string[] | undefined;

  /**
   * <p>One or more Amazon Web Services Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified Regions should be within the list of Regions from the <code>STACKSET</code> constraint. To get the list of Regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all Regions from the <code>STACKSET</code> constraint.</p>
   * @public
   */
  StackSetRegions?: string[] | undefined;

  /**
   * <p>The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   *          <p>The default value is <code>0</code> if no value is specified.</p>
   * @public
   */
  StackSetFailureToleranceCount?: number | undefined;

  /**
   * <p>The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   * @public
   */
  StackSetFailureTolerancePercentage?: number | undefined;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   * @public
   */
  StackSetMaxConcurrencyCount?: number | undefined;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as <code>1</code> instead.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   * @public
   */
  StackSetMaxConcurrencyPercentage?: number | undefined;
}

/**
 * @public
 */
export interface ProvisionProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The name of the product. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.</p>
   * @public
   */
  PathId?: string | undefined;

  /**
   * <p>The name of the path. You must provide the name or ID, but not both.</p>
   * @public
   */
  PathName?: string | undefined;

  /**
   * <p>A user-friendly name for the provisioned product. This value must be
   *          unique for the Amazon Web Services account and cannot be updated after the product is provisioned.</p>
   * @public
   */
  ProvisionedProductName: string | undefined;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the
   *          product.</p>
   * @public
   */
  ProvisioningParameters?: ProvisioningParameter[] | undefined;

  /**
   * <p>An object that contains information about the provisioning preferences for a stack set.</p>
   * @public
   */
  ProvisioningPreferences?: ProvisioningPreferences | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * <p>An idempotency token that uniquely identifies the provisioning request.</p>
   * @public
   */
  ProvisionToken?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionProductOutput {
  /**
   * <p>Information about the result of provisioning the product.</p>
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface RejectPortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The type of shared portfolios to reject. The default is to reject imported portfolios.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_ORGANIZATIONS</code> - Reject portfolios shared by the management account of your
   *                organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPORTED</code> - Reject imported portfolios.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_SERVICECATALOG</code> - Not supported. (Throws ResourceNotFoundException.)</p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>aws servicecatalog reject-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS</code>
   *          </p>
   * @public
   */
  PortfolioShareType?: PortfolioShareType | undefined;
}

/**
 * @public
 */
export interface RejectPortfolioShareOutput {}

/**
 * @public
 */
export interface ScanProvisionedProductsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ScanProvisionedProductsOutput {
  /**
   * <p>Information about the provisioned products.</p>
   * @public
   */
  ProvisionedProducts?: ProvisionedProductDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProductViewFilterBy = {
  FullTextSearch: "FullTextSearch",
  Owner: "Owner",
  ProductType: "ProductType",
  SourceProductId: "SourceProductId",
} as const;

/**
 * @public
 */
export type ProductViewFilterBy = (typeof ProductViewFilterBy)[keyof typeof ProductViewFilterBy];

/**
 * @public
 * @enum
 */
export const ProductViewSortBy = {
  CreationDate: "CreationDate",
  Title: "Title",
  VersionCount: "VersionCount",
} as const;

/**
 * @public
 */
export type ProductViewSortBy = (typeof ProductViewSortBy)[keyof typeof ProductViewSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface SearchProductsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The search filters. If no search filters are specified, the output includes
   *          all products to which the caller has access.</p>
   * @public
   */
  Filters?: Partial<Record<ProductViewFilterBy, string[]>> | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted.</p>
   * @public
   */
  SortBy?: ProductViewSortBy | undefined;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>A single product view aggregation value/count pair, containing metadata about each
 *          product to which the calling user has access.</p>
 * @public
 */
export interface ProductViewAggregationValue {
  /**
   * <p>The value of the product view aggregation.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>An approximate count of the products that match the value.</p>
   * @public
   */
  ApproximateCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchProductsOutput {
  /**
   * <p>Information about the product views.</p>
   * @public
   */
  ProductViewSummaries?: ProductViewSummary[] | undefined;

  /**
   * <p>The product view aggregations.</p>
   * @public
   */
  ProductViewAggregations?: Record<string, ProductViewAggregationValue[]> | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProductSource = {
  ACCOUNT: "ACCOUNT",
} as const;

/**
 * @public
 */
export type ProductSource = (typeof ProductSource)[keyof typeof ProductSource];

/**
 * @public
 */
export interface SearchProductsAsAdminInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  PortfolioId?: string | undefined;

  /**
   * <p>The search filters. If no search filters are specified, the output includes all products
   *          to which the administrator has access.</p>
   * @public
   */
  Filters?: Partial<Record<ProductViewFilterBy, string[]>> | undefined;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted.</p>
   * @public
   */
  SortBy?: ProductViewSortBy | undefined;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>Access level of the source of the product.</p>
   * @public
   */
  ProductSource?: ProductSource | undefined;
}

/**
 * @public
 */
export interface SearchProductsAsAdminOutput {
  /**
   * <p>Information about the product views.</p>
   * @public
   */
  ProductViewDetails?: ProductViewDetail[] | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionedProductViewFilterBy = {
  SearchQuery: "SearchQuery",
} as const;

/**
 * @public
 */
export type ProvisionedProductViewFilterBy =
  (typeof ProvisionedProductViewFilterBy)[keyof typeof ProvisionedProductViewFilterBy];

/**
 * @public
 */
export interface SearchProvisionedProductsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The access level to use to obtain results. The default is
   *          <code>Account</code>.</p>
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;

  /**
   * <p>The search filters.</p>
   *          <p>When the key is <code>SearchQuery</code>, the searchable fields are <code>arn</code>,
   *          <code>createdTime</code>, <code>id</code>, <code>lastRecordId</code>,
   *          <code>idempotencyToken</code>, <code>name</code>, <code>physicalId</code>, <code>productId</code>,
   *          <code>provisioningArtifactId</code>, <code>type</code>, <code>status</code>,
   *          <code>tags</code>, <code>userArn</code>, <code>userArnSession</code>, <code>lastProvisioningRecordId</code>, <code>lastSuccessfulProvisioningRecordId</code>,
   *          <code>productName</code>, and <code>provisioningArtifactName</code>.</p>
   *          <p>Example: <code>"SearchQuery":["status:AVAILABLE"]</code>
   *          </p>
   * @public
   */
  Filters?: Partial<Record<ProvisionedProductViewFilterBy, string[]>> | undefined;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted. The valid values are <code>arn</code>, <code>id</code>, <code>name</code>,
   *          and <code>lastRecordId</code>.</p>
   * @public
   */
  SortBy?: string | undefined;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * <p>Information about a provisioned product.</p>
 * @public
 */
export interface ProvisionedProductAttribute {
  /**
   * <p>The user-friendly name of the provisioned product.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the provisioned product.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of provisioned product.
   *          The supported values are <code>CFN_STACK</code>, <code>CFN_STACKSET</code>, <code>TERRAFORM_OPEN_SOURCE</code>,
   *          <code>TERRAFORM_CLOUD</code>, and <code>EXTERNAL</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The identifier of the provisioned product.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The current status of the provisioned product.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most
   *                recent operation succeeded and completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results.
   *                Wait for an <code>AVAILABLE</code> status before performing operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has
   *                completed the requested operation but is not exactly what was requested. For example, a
   *                request to update to a new version failed and the stack rolled back to the current version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running.
   *                For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product,
   *                 but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an <code>AVAILABLE</code> status before performing operations.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ProvisionedProductStatus | undefined;

  /**
   * <p>The current status message of the provisioned product.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The record identifier of the last request performed on this provisioned product.</p>
   * @public
   */
  LastRecordId?: string | undefined;

  /**
   * <p>The record identifier of the last request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                UpdateProvisionedProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                ExecuteProvisionedProductPlan
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                TerminateProvisionedProduct
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  LastProvisioningRecordId?: string | undefined;

  /**
   * <p>The record identifier of the last successful request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                UpdateProvisionedProduct
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                ExecuteProvisionedProductPlan
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                TerminateProvisionedProduct
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  LastSuccessfulProvisioningRecordId?: string | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.</p>
   * @public
   */
  PhysicalId?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The name of the product.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The name of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  UserArn?: string | undefined;

  /**
   * <p>The ARN of the user in the session. This ARN might contain a session ID.</p>
   * @public
   */
  UserArnSession?: string | undefined;
}

/**
 * @public
 */
export interface SearchProvisionedProductsOutput {
  /**
   * <p>Information about the provisioned products.</p>
   * @public
   */
  ProvisionedProducts?: ProvisionedProductAttribute[] | undefined;

  /**
   * <p>The number of provisioned products found.</p>
   * @public
   */
  TotalResultsCount?: number | undefined;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface TerminateProvisionedProductInput {
  /**
   * <p>The name of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * <p>The identifier of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * <p>An idempotency token that uniquely identifies the termination request. This token is
   *          only valid during the termination process. After the provisioned product is terminated,
   *          subsequent requests to terminate the same provisioned product always return
   *          <b>ResourceNotFound</b>.</p>
   * @public
   */
  TerminateToken?: string | undefined;

  /**
   * <p>If set to true, Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   * @public
   */
  IgnoreErrors?: boolean | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>When this boolean parameter is set to true, the <code>TerminateProvisionedProduct</code> API deletes
   *          the Service Catalog provisioned product. However, it does not remove the CloudFormation
   *          stack, stack set, or the underlying resources of the deleted provisioned product. The
   *          default value is false.</p>
   * @public
   */
  RetainPhysicalResources?: boolean | undefined;
}

/**
 * @public
 */
export interface TerminateProvisionedProductOutput {
  /**
   * <p>Information about the result of this request.</p>
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface UpdateConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The identifier of the constraint.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The updated description of the constraint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p>
   *          <dl>
   *             <dt>LAUNCH</dt>
   *             <dd>
   *                <p>You are required to specify either the <code>RoleArn</code> or the <code>LocalRoleName</code> but can't use both.</p>
   *                <p>Specify the <code>RoleArn</code> property as follows:</p>
   *                <p>
   *                   <code>\{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"\}</code>
   *                </p>
   *                <p>Specify the <code>LocalRoleName</code> property as follows:</p>
   *                <p>
   *                   <code>\{"LocalRoleName": "SCBasicLaunchRole"\}</code>
   *                </p>
   *                <p>If you specify the <code>LocalRoleName</code> property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be
   *                   account-agnostic so the administrator can create fewer resources per shared account.</p>
   *                <note>
   *                   <p>The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.</p>
   *                </note>
   *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
   *                <p>You also cannot have more than one <code>LAUNCH</code> constraint on a product and portfolio.</p>
   *             </dd>
   *             <dt>NOTIFICATION</dt>
   *             <dd>
   *                <p>Specify the <code>NotificationArns</code> property as follows:</p>
   *                <p>
   *                   <code>\{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]\}</code>
   *                </p>
   *             </dd>
   *             <dt>RESOURCE_UPDATE</dt>
   *             <dd>
   *                <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p>
   *                <p>
   *                   <code>\{"Version":"2.0","Properties":\{"TagUpdateOnProvisionedProduct":"String"\}\}</code>
   *                </p>
   *                <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p>
   *             </dd>
   *             <dt>STACKSET</dt>
   *             <dd>
   *                <p>Specify the <code>Parameters</code> property as follows:</p>
   *                <p>
   *                   <code>\{"Version": "String", "Properties": \{"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"\}\}</code>
   *                </p>
   *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
   *                <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p>
   *                <p>Products with a <code>STACKSET</code> constraint will launch an CloudFormation stack set.</p>
   *             </dd>
   *             <dt>TEMPLATE</dt>
   *             <dd>
   *                <p>Specify the <code>Rules</code> property. For more information, see
   *                   <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html">Template Constraint Rules</a>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  Parameters?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConstraintOutput {
  /**
   * <p>Information about the constraint.</p>
   * @public
   */
  ConstraintDetail?: ConstraintDetail | undefined;

  /**
   * <p>The constraint parameters.</p>
   * @public
   */
  ConstraintParameters?: string | undefined;

  /**
   * <p>The status of the current request.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name to use for display purposes.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The updated description of the portfolio.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated name of the portfolio provider.</p>
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * <p>The tags to add.</p>
   * @public
   */
  AddTags?: Tag[] | undefined;

  /**
   * <p>The tags to remove.</p>
   * @public
   */
  RemoveTags?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioOutput {
  /**
   * <p>Information about the portfolio.</p>
   * @public
   */
  PortfolioDetail?: PortfolioDetail | undefined;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The unique identifier of the portfolio for which the share will be updated.</p>
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * <p>The Amazon Web Services account Id of the recipient account. This field is required when updating an external account to account type share.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Information about the organization node.</p>
   * @public
   */
  OrganizationNode?: OrganizationNode | undefined;

  /**
   * <p>Enables or disables <code>TagOptions</code> sharing for the portfolio share. If this field is not provided, the current state of
   *          TagOptions sharing on the portfolio share will not be modified.</p>
   * @public
   */
  ShareTagOptions?: boolean | undefined;

  /**
   * <p>A flag to enables or disables <code>Principals</code> sharing in the portfolio. If this field is not provided,
   *          the current state of the <code>Principals</code> sharing on the portfolio share will not be modified. </p>
   * @public
   */
  SharePrincipals?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioShareOutput {
  /**
   * <p>The token that tracks the status of the <code>UpdatePortfolioShare</code> operation for external account to account or  organizational type sharing.</p>
   * @public
   */
  PortfolioShareToken?: string | undefined;

  /**
   * <p>The status of <code>UpdatePortfolioShare</code> operation.
   *          You can also obtain the operation status using <code>DescribePortfolioShareStatus</code> API.
   *       </p>
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The updated product name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated owner of the product.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The updated description of the product.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated distributor of the product.</p>
   * @public
   */
  Distributor?: string | undefined;

  /**
   * <p>The updated support description for the product.</p>
   * @public
   */
  SupportDescription?: string | undefined;

  /**
   * <p>The updated support email for the product.</p>
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * <p>The updated support URL for the product.</p>
   * @public
   */
  SupportUrl?: string | undefined;

  /**
   * <p>The tags to add to the product.</p>
   * @public
   */
  AddTags?: Tag[] | undefined;

  /**
   * <p>The tags to remove from the product.</p>
   * @public
   */
  RemoveTags?: string[] | undefined;

  /**
   * <p>Specifies connection details for the updated product and syncs the product to the connection source
   *          artifact. This automatically manages the product's artifacts based on changes to the source.
   *          The <code>SourceConnection</code> parameter consists of the following sub-fields.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Type</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConnectionParamters</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceConnection?: SourceConnection | undefined;
}

/**
 * @public
 */
export interface UpdateProductOutput {
  /**
   * <p>Information about the product view.</p>
   * @public
   */
  ProductViewDetail?: ProductViewDetail | undefined;

  /**
   * <p>Information about the tags associated with the product.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const StackSetOperationType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type StackSetOperationType = (typeof StackSetOperationType)[keyof typeof StackSetOperationType];

/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 * @public
 */
export interface UpdateProvisioningPreferences {
  /**
   * <p>One or more Amazon Web Services accounts that will have access to the provisioned product.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The Amazon Web Services accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   * @public
   */
  StackSetAccounts?: string[] | undefined;

  /**
   * <p>One or more Amazon Web Services Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified Regions should be within the list of Regions from the <code>STACKSET</code> constraint. To get the list of Regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all Regions from the <code>STACKSET</code> constraint.</p>
   * @public
   */
  StackSetRegions?: string[] | undefined;

  /**
   * <p>The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   *          <p>The default value is <code>0</code> if no value is specified.</p>
   * @public
   */
  StackSetFailureToleranceCount?: number | undefined;

  /**
   * <p>The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   * @public
   */
  StackSetFailureTolerancePercentage?: number | undefined;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   * @public
   */
  StackSetMaxConcurrencyCount?: number | undefined;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as <code>1</code> instead.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   * @public
   */
  StackSetMaxConcurrencyPercentage?: number | undefined;

  /**
   * <p>Determines what action Service Catalog performs to a stack set or a stack instance represented by the provisioned product. The default value is <code>UPDATE</code> if nothing is specified.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <dl>
   *             <dt>CREATE</dt>
   *             <dd>
   *                <p>Creates a new stack instance in the stack set represented by the provisioned product. In this case, only new stack instances are created based on accounts and Regions; if new ProductId or ProvisioningArtifactID are passed, they will be ignored.</p>
   *             </dd>
   *             <dt>UPDATE</dt>
   *             <dd>
   *                <p>Updates the stack set represented by the provisioned product and also its stack instances.</p>
   *             </dd>
   *             <dt>DELETE</dt>
   *             <dd>
   *                <p>Deletes a stack instance in the stack set represented by the provisioned product.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  StackSetOperationType?: StackSetOperationType | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The name of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * <p>The identifier of the provisioned product. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * <p>The identifier of the product. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The name of the product. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * <p>The path identifier. This value is optional if the product
   *          has a default path, and required if the product has more than one path. You must provide the name or ID, but not both.</p>
   * @public
   */
  PathId?: string | undefined;

  /**
   * <p>The name of the path. You must provide the name or ID, but not both.</p>
   * @public
   */
  PathName?: string | undefined;

  /**
   * <p>The new parameters.</p>
   * @public
   */
  ProvisioningParameters?: UpdateProvisioningParameter[] | undefined;

  /**
   * <p>An object that contains information about the provisioning preferences for a stack set.</p>
   * @public
   */
  ProvisioningPreferences?: UpdateProvisioningPreferences | undefined;

  /**
   * <p>One or more tags. Requires the product to have <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The idempotency token that uniquely identifies the provisioning update request.</p>
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedProductOutput {
  /**
   * <p>Information about the result of the request.</p>
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 * @enum
 */
export const PropertyKey = {
  LaunchRole: "LAUNCH_ROLE",
  Owner: "OWNER",
} as const;

/**
 * @public
 */
export type PropertyKey = (typeof PropertyKey)[keyof typeof PropertyKey];

/**
 * @public
 */
export interface UpdateProvisionedProductPropertiesInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The identifier of the provisioned product.</p>
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>A map that contains the provisioned product properties to be updated.</p>
   *          <p>The <code>LAUNCH_ROLE</code> key accepts role ARNs. This key allows an
   *          administrator to call <code>UpdateProvisionedProductProperties</code> to update the launch
   *          role that is associated with a provisioned product. This role is used when an end user
   *          calls a provisioning operation such as <code>UpdateProvisionedProduct</code>,
   *             <code>TerminateProvisionedProduct</code>, or
   *             <code>ExecuteProvisionedProductServiceAction</code>. Only a role ARN is valid. A user ARN is invalid. </p>
   *          <p>The <code>OWNER</code> key accepts user ARNs, IAM role ARNs, and STS
   *          assumed-role ARNs. The owner is the user that has permission to see, update, terminate, and
   *          execute service actions in the provisioned product.</p>
   *          <p>The administrator can change the owner of a provisioned product to another IAM or STS entity within the
   *          same account. Both end user owners and administrators can see ownership history of the provisioned
   *          product using the <code>ListRecordHistory</code> API. The new owner can describe all past records
   *          for the provisioned product using the <code>DescribeRecord</code> API. The previous owner can no
   *          longer use <code>DescribeRecord</code>, but can still see the product's history from when he was
   *          an owner using <code>ListRecordHistory</code>.</p>
   *          <p>If a provisioned product ownership is assigned to an end user, they can see and perform any action through the API or
   *          Service Catalog console such as update, terminate, and execute service actions.
   *          If an end user provisions a product and the owner is updated to someone else, they will no longer be able to see or perform any actions through
   *          API or the Service Catalog console on that provisioned product.</p>
   * @public
   */
  ProvisionedProductProperties: Partial<Record<PropertyKey, string>> | undefined;

  /**
   * <p>The idempotency token that uniquely identifies the provisioning product update request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedProductPropertiesOutput {
  /**
   * <p>The provisioned product identifier.</p>
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * <p>A map that contains the properties updated.</p>
   * @public
   */
  ProvisionedProductProperties?: Partial<Record<PropertyKey, string>> | undefined;

  /**
   * <p>The identifier of the record.</p>
   * @public
   */
  RecordId?: string | undefined;

  /**
   * <p>The status of the request.</p>
   * @public
   */
  Status?: RecordStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * <p>The product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The updated name of the provisioning artifact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated description of the provisioning artifact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the product version is active.</p>
   *          <p>Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact.</p>
   * @public
   */
  Active?: boolean | undefined;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   *          <p>The <code>DEFAULT</code> value indicates that the product version is active.</p>
   *          <p>The administrator can set the guidance to <code>DEPRECATED</code> to inform
   *           users that the product version is deprecated. Users are able to make updates to a provisioned product
   *           of a deprecated version but cannot launch new provisioned products using a deprecated version.</p>
   * @public
   */
  Guidance?: ProvisioningArtifactGuidance | undefined;
}

/**
 * @public
 */
export interface UpdateProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.</p>
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * <p>The status of the current request.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface UpdateServiceActionInput {
  /**
   * <p>The self-service action identifier.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The self-service action name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A map that defines the self-service action.</p>
   * @public
   */
  Definition?: Partial<Record<ServiceActionDefinitionKey, string>> | undefined;

  /**
   * <p>The self-service action description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>jp</code> - Japanese</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>zh</code> - Chinese</p>
   *             </li>
   *          </ul>
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceActionOutput {
  /**
   * <p>Detailed information about the self-service action.</p>
   * @public
   */
  ServiceActionDetail?: ServiceActionDetail | undefined;
}

/**
 * @public
 */
export interface UpdateTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The updated value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The updated active state.</p>
   * @public
   */
  Active?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   * @public
   */
  TagOptionDetail?: TagOptionDetail | undefined;
}
