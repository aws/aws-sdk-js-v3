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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
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
   */
  PortfolioShareType?: PortfolioShareType | string;
}

/**
 * @public
 */
export interface AcceptPortfolioShareOutput {}

/**
 * @public
 * <p>One or more parameters provided to the operation are not valid.</p>
 */
export class InvalidParametersException extends __BaseException {
  readonly name: "InvalidParametersException" = "InvalidParametersException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The access level to use to filter results.</p>
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
   */
  Key?: AccessLevelFilterKey | string;

  /**
   * <p>The user to which the access level applies. The only supported value is <code>Self</code>.</p>
   */
  Value?: string;
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
 * @public
 * <p>Information about a tag. A tag is a key-value pair. Tags are propagated
 *          to the resources created when provisioning a product.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for this key.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateBudgetWithResourceInput {
  /**
   * <p>The name of the budget you want to associate.</p>
   */
  BudgetName: string | undefined;

  /**
   * <p> The resource identifier. Either a portfolio-id or a product-id.</p>
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateBudgetWithResourceOutput {}

/**
 * @public
 * <p>The specified resource is a duplicate.</p>
 */
export class DuplicateResourceException extends __BaseException {
  readonly name: "DuplicateResourceException" = "DuplicateResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
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
   */
  PrincipalARN: string | undefined;

  /**
   * <p>The principal type. The supported value is <code>IAM</code> if you use a fully defined Amazon Resource Name
   *          (ARN), or <code>IAM_PATTERN</code> if you use an ARN with no <code>accountID</code>,
   *          with or without wildcard characters. </p>
   */
  PrincipalType: PrincipalType | string | undefined;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The identifier of the source portfolio.</p>
   */
  SourcePortfolioId?: string;
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
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
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
   */
  AcceptLanguage?: string;
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
   */
  ResourceId: string | undefined;

  /**
   * <p>The TagOption identifier.</p>
   */
  TagOptionId: string | undefined;
}

/**
 * @public
 */
export interface AssociateTagOptionWithResourceOutput {}

/**
 * @public
 * <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 */
export class TagOptionNotMigratedException extends __BaseException {
  readonly name: "TagOptionNotMigratedException" = "TagOptionNotMigratedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
 */
export interface ServiceActionAssociation {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId: string | undefined;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
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
   */
  AcceptLanguage?: string;
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
 * @public
 * <p>An object containing information about the error, along with identifying information about the self-service action and its associations.</p>
 */
export interface FailedServiceActionAssociation {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId?: string;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The error code. Valid values are listed below.</p>
   */
  ErrorCode?: ServiceActionAssociationErrorCode | string;

  /**
   * <p>A text description of the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[];
}

/**
 * @public
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
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
   */
  AcceptLanguage?: string;
}

/**
 * @public
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[];
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source product.</p>
   */
  SourceProductArn: string | undefined;

  /**
   * <p>The identifier of the target product. By default, a new product is created.</p>
   */
  TargetProductId?: string;

  /**
   * <p>A name for the target product. The default is the name of the source product.</p>
   */
  TargetProductName?: string;

  /**
   * <p>The identifiers of the provisioning artifacts (also known as versions) of the product to copy.
   *          By default, all provisioning artifacts are copied.</p>
   */
  SourceProvisioningArtifactIdentifiers?: Record<string, string>[];

  /**
   * <p>The copy options. If the value is <code>CopyTags</code>, the tags from the source
   *          product are copied to the target product.</p>
   */
  CopyOptions?: (CopyOption | string)[];

  /**
   * <p> A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request. </p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface CopyProductOutput {
  /**
   * <p>The token to use to track the progress of the operation.</p>
   */
  CopyProductToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The product identifier.</p>
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
   */
  Type: string | undefined;

  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 * <p>Information about a constraint.</p>
 */
export interface ConstraintDetail {
  /**
   * <p>The identifier of the constraint.</p>
   */
  ConstraintId?: string;

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
   */
  Type?: string;

  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;

  /**
   * <p>The owner of the constraint.</p>
   */
  Owner?: string;

  /**
   * <p>The identifier of the product the constraint applies to. Note that a constraint applies to a specific instance of a product within a certain portfolio.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the portfolio the product resides in. The constraint applies only to the instance of the product that lives within this portfolio.</p>
   */
  PortfolioId?: string;
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
   */
  ConstraintDetail?: ConstraintDetail;

  /**
   * <p>The constraint parameters.</p>
   */
  ConstraintParameters?: string;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>The description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The name of the portfolio provider.</p>
   */
  ProviderName: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 * <p>Information about a portfolio.</p>
 */
export interface PortfolioDetail {
  /**
   * <p>The portfolio identifier.</p>
   */
  Id?: string;

  /**
   * <p>The ARN assigned to the portfolio.</p>
   */
  ARN?: string;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name of the portfolio provider.</p>
   */
  ProviderName?: string;
}

/**
 * @public
 */
export interface CreatePortfolioOutput {
  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: PortfolioDetail;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Tag[];
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
 * @public
 * <p>Information about the organization node.</p>
 */
export interface OrganizationNode {
  /**
   * <p>The organization node type.</p>
   */
  Type?: OrganizationNodeType | string;

  /**
   * <p>The identifier of the organization node.</p>
   */
  Value?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID. For example, <code>123456789012</code>.</p>
   */
  AccountId?: string;

  /**
   * <p>The organization node to whom you are going to share. When you pass <code>OrganizationNode</code>, it creates <code>PortfolioShare</code> for all of the Amazon Web Services accounts that are associated to the <code>OrganizationNode</code>.
   *       The output returns a <code>PortfolioShareToken</code>, which enables the administrator to monitor the status of the <code>PortfolioShare</code> creation process.</p>
   */
  OrganizationNode?: OrganizationNode;

  /**
   * <p>Enables or disables <code>TagOptions </code> sharing when creating the portfolio share. If this flag is not
   *          provided, TagOptions sharing is disabled.</p>
   */
  ShareTagOptions?: boolean;

  /**
   * <p>Enables or disables <code>Principal</code> sharing when creating the portfolio share. If this flag is not provided,
   *          principal sharing is disabled. </p>
   *          <p>When you enable Principal Name Sharing for a portfolio share, the share recipient
   *          account end users with a principal that matches any of the associated IAM
   *          patterns can provision products from the portfolio. Once
   *          shared, the share recipient can view associations of <code>PrincipalType</code>:
   *          <code>IAM_PATTERN</code> on their portfolio. You can create the principals in the recipient account before or
   *          after creating the share. </p>
   */
  SharePrincipals?: boolean;
}

/**
 * @public
 */
export interface CreatePortfolioShareOutput {
  /**
   * <p>The portfolio shares a unique identifier that only returns if the portfolio is shared to an organization node.</p>
   */
  PortfolioShareToken?: string;
}

/**
 * @public
 * <p>The operation is not supported.</p>
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  MARKETPLACE: "MARKETPLACE",
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
  MARKETPLACE_AMI: "MARKETPLACE_AMI",
  MARKETPLACE_CAR: "MARKETPLACE_CAR",
  TERRAFORM_OPEN_SOURCE: "TERRAFORM_OPEN_SOURCE",
} as const;

/**
 * @public
 */
export type ProvisioningArtifactType = (typeof ProvisioningArtifactType)[keyof typeof ProvisioningArtifactType];

/**
 * @public
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactProperties {
  /**
   * <p>The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.</p>
   */
  Name?: string;

  /**
   * <p>The description of the provisioning artifact, including how it differs from the previous provisioning artifact.</p>
   */
  Description?: string;

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
   */
  Info?: Record<string, string>;

  /**
   * <p>The type of provisioning artifact.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUD_FORMATION_TEMPLATE</code> - CloudFormation template</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_AMI</code> - Amazon Web Services Marketplace AMI</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_CAR</code> - Amazon Web Services Marketplace Clusters and Amazon Web Services Resources</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERRAFORM_OPEN_SOURCE</code> - Terraform open source configuration file</p>
   *             </li>
   *          </ul>
   */
  Type?: ProvisioningArtifactType | string;

  /**
   * <p>If set to true, Service Catalog stops validating the specified provisioning artifact even if it is invalid.</p>
   */
  DisableTemplateValidation?: boolean;
}

/**
 * @public
 * <p>The subtype containing details about the Codestar connection <code>Type</code>. </p>
 */
export interface CodeStarParameters {
  /**
   * <p>The CodeStar ARN, which is the connection between Service Catalog and the external repository.</p>
   */
  ConnectionArn: string | undefined;

  /**
   * <p>The specific repository where the product’s artifact-to-be-synced resides, formatted as
   *          "Account/Repo." </p>
   */
  Repository: string | undefined;

  /**
   * <p>The specific branch where the artifact resides. </p>
   */
  Branch: string | undefined;

  /**
   * <p>The absolute path wehre the artifact resides within the repo and branch, formatted as
   *          "folder/file.json." </p>
   */
  ArtifactPath: string | undefined;
}

/**
 * @public
 * <p>Provides connection details.</p>
 */
export interface SourceConnectionParameters {
  /**
   * <p>Provides <code>ConnectionType</code> details.</p>
   */
  CodeStar?: CodeStarParameters;
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
 * @public
 * <p>A top level <code>ProductViewDetail</code> response containing details about the product’s connection.
 *          Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>,
 *          <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs.
 *          This response contains the same fields as the <code>ConnectionParameters</code> request, with the
 *          addition of the <code>LastSync</code> response.</p>
 */
export interface SourceConnection {
  /**
   * <p>The only supported <code>SourceConnection</code> type is Codestar. </p>
   */
  Type?: SourceType | string;

  /**
   * <p>The connection details based on the connection <code>Type</code>. </p>
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The name of the product.</p>
   */
  Name: string | undefined;

  /**
   * <p>The owner of the product.</p>
   */
  Owner: string | undefined;

  /**
   * <p>The description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The distributor of the product.</p>
   */
  Distributor?: string;

  /**
   * <p>The support information about the product.</p>
   */
  SupportDescription?: string;

  /**
   * <p>The contact email for product support.</p>
   */
  SupportEmail?: string;

  /**
   * <p>The contact URL for product support.</p>
   *          <p>
   *             <code>^https?:\/\// </code>/ is the pattern used to validate SupportUrl.</p>
   */
  SupportUrl?: string;

  /**
   * <p>The type of product.</p>
   */
  ProductType: ProductType | string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration of the provisioning artifact. </p>
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactProperties;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

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
   */
  SourceConnection?: SourceConnection;
}

/**
 * @public
 * <p>Summary information about a product view.</p>
 */
export interface ProductViewSummary {
  /**
   * <p>The product view identifier.</p>
   */
  Id?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The name of the product.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the product. Contact the product administrator for the significance of
   *          this value.</p>
   */
  Owner?: string;

  /**
   * <p>Short description of the product.</p>
   */
  ShortDescription?: string;

  /**
   * <p>The product type. Contact the product administrator for the significance of this
   *          value. If this value is <code>MARKETPLACE</code>, the product was created by Amazon Web Services Marketplace.</p>
   */
  Type?: ProductType | string;

  /**
   * <p>The distributor of the product. Contact the product administrator for the
   *          significance of this value.</p>
   */
  Distributor?: string;

  /**
   * <p>Indicates whether the product has a default path.
   *          If the product does not have a default path, call <a>ListLaunchPaths</a>
   *          to disambiguate between paths. Otherwise, <a>ListLaunchPaths</a> is not
   *          required, and the output of <a>ProductViewSummary</a> can be used directly with
   *          <a>DescribeProvisioningParameters</a>.</p>
   */
  HasDefaultPath?: boolean;

  /**
   * <p>The email contact information to obtain support for this Product.</p>
   */
  SupportEmail?: string;

  /**
   * <p>The description of the support for this Product.</p>
   */
  SupportDescription?: string;

  /**
   * <p>The URL information to obtain support for this Product.</p>
   */
  SupportUrl?: string;
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
 * @public
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
 */
export interface LastSync {
  /**
   * <p>The time of the last attempted sync from the repository to the Service Catalog product. </p>
   */
  LastSyncTime?: Date;

  /**
   * <p>The current status of the sync. Responses include <code>SUCCEEDED</code> or <code>FAILED</code>. </p>
   */
  LastSyncStatus?: LastSyncStatus | string;

  /**
   * <p>The sync's status message. </p>
   */
  LastSyncStatusMessage?: string;

  /**
   * <p>The time of the latest successful sync from the source repo artifact to the Service Catalog product.</p>
   */
  LastSuccessfulSyncTime?: Date;

  /**
   * <p>The ProvisioningArtifactID of the ProvisioningArtifact created from the latest successful sync. </p>
   */
  LastSuccessfulSyncProvisioningArtifactId?: string;
}

/**
 * @public
 * <p>Provides details about the configured <code>SourceConnection</code>. </p>
 */
export interface SourceConnectionDetail {
  /**
   * <p>The only supported <code>SourceConnection</code> type is Codestar.</p>
   */
  Type?: SourceType | string;

  /**
   * <p>The connection details based on the connection <code>Type</code>.</p>
   */
  ConnectionParameters?: SourceConnectionParameters;

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
   */
  LastSync?: LastSync;
}

/**
 * @public
 * <p>Information about a product view.</p>
 */
export interface ProductViewDetail {
  /**
   * <p>Summary information about the product view.</p>
   */
  ProductViewSummary?: ProductViewSummary;

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
   */
  Status?: Status | string;

  /**
   * <p>The ARN of the product.</p>
   */
  ProductARN?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>A top level <code>ProductViewDetail</code> response containing details about the product’s connection.
   *          Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>,
   *          <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs.
   *          This response contains the same fields as the <code>ConnectionParameters</code> request, with the
   *          addition of the <code>LastSync</code> response.</p>
   */
  SourceConnection?: SourceConnectionDetail;
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
 * @public
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactDetail {
  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>The type of provisioning artifact.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUD_FORMATION_TEMPLATE</code> - CloudFormation template</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_AMI</code> - Amazon Web Services Marketplace AMI</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_CAR</code> - Amazon Web Services Marketplace Clusters and Amazon Web Services Resources</p>
   *             </li>
   *          </ul>
   */
  Type?: ProvisioningArtifactType | string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Indicates whether the product version is active.</p>
   */
  Active?: boolean;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   */
  Guidance?: ProvisioningArtifactGuidance | string;

  /**
   * <p>Specifies the revision of the external artifact that was used to automatically sync the Service Catalog product
   *          and create the provisioning artifact. Service Catalog includes this response parameter as a high level
   *          field to the existing <code>ProvisioningArtifactDetail</code> type, which is returned as part of the
   *          response for <code>CreateProduct</code>, <code>UpdateProduct</code>, <code>DescribeProductAsAdmin</code>,
   *          <code>DescribeProvisioningArtifact</code>, <code>ListProvisioningArtifact</code>,
   *          and <code>UpdateProvisioningArticat</code> APIs. </p>
   *          <p>This field only exists for Repo-Synced products. </p>
   */
  SourceRevision?: string;
}

/**
 * @public
 */
export interface CreateProductOutput {
  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: ProductViewDetail;

  /**
   * <p>Information about the provisioning artifact. </p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Tag[];
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
 * @public
 * <p>The parameter key-value pair used to update a provisioned product.</p>
 */
export interface UpdateProvisioningParameter {
  /**
   * <p>The parameter key.</p>
   */
  Key?: string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;

  /**
   * <p>If set to true, <code>Value</code> is ignored and the previous parameter value is kept.</p>
   */
  UsePreviousValue?: boolean;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The name of the plan.</p>
   */
  PlanName: string | undefined;

  /**
   * <p>The plan type.</p>
   */
  PlanType: ProvisionedProductPlanType | string | undefined;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   */
  NotificationArns?: string[];

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   */
  PathId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>A user-friendly name for the provisioned product. This value must be
   *          unique for the Amazon Web Services account and cannot be updated after the product is provisioned.</p>
   */
  ProvisionedProductName: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the
   *          product.</p>
   */
  ProvisioningParameters?: UpdateProvisioningParameter[];

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>One or more tags.</p>
   *          <p>If the plan is for an existing provisioned product, the product must have a <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateProvisionedProductPlanOutput {
  /**
   * <p>The name of the plan.</p>
   */
  PlanName?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The configuration for the provisioning artifact.</p>
   */
  Parameters: ProvisioningArtifactProperties | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface CreateProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

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
   */
  Info?: Record<string, string>;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
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
   */
  Name: string | undefined;

  /**
   * <p>The service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   */
  DefinitionType: ServiceActionDefinitionType | string | undefined;

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
   */
  Definition: Record<string, string> | undefined;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

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
   */
  AcceptLanguage?: string;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 * <p>Detailed information about the self-service action.</p>
 */
export interface ServiceActionSummary {
  /**
   * <p>The self-service action identifier.</p>
   */
  Id?: string;

  /**
   * <p>The self-service action name.</p>
   */
  Name?: string;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The self-service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   */
  DefinitionType?: ServiceActionDefinitionType | string;
}

/**
 * @public
 * <p>An object containing detailed information about the self-service action.</p>
 */
export interface ServiceActionDetail {
  /**
   * <p>Summary information about the self-service action.</p>
   */
  ServiceActionSummary?: ServiceActionSummary;

  /**
   * <p>A map that defines the self-service action.</p>
   */
  Definition?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateServiceActionOutput {
  /**
   * <p>An object containing information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

/**
 * @public
 */
export interface CreateTagOptionInput {
  /**
   * <p>The TagOption key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The TagOption value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Information about a TagOption.</p>
 */
export interface TagOptionDetail {
  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Value?: string;

  /**
   * <p>The TagOption active state.</p>
   */
  Active?: boolean;

  /**
   * <p>The TagOption identifier.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Web Services account Id of the owner account that created the TagOption.</p>
   */
  Owner?: string;
}

/**
 * @public
 */
export interface CreateTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The identifier of the constraint.</p>
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeletePortfolioOutput {}

/**
 * @public
 * <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The organization node to whom you are going to stop sharing.</p>
   */
  OrganizationNode?: OrganizationNode;
}

/**
 * @public
 */
export interface DeletePortfolioShareOutput {
  /**
   * <p>The portfolio share unique identifier. This will only be returned if delete is made to an organization node.</p>
   */
  PortfolioShareToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId: string | undefined;

  /**
   * <p>If set to true, Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   */
  IgnoreErrors?: boolean;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
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
   */
  AcceptLanguage?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The identifier of the constraint.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeConstraintOutput {
  /**
   * <p>Information about the constraint.</p>
   */
  ConstraintDetail?: ConstraintDetail;

  /**
   * <p>The constraint parameters.</p>
   */
  ConstraintParameters?: string;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The token for the copy product operation. This token is returned by <a>CopyProduct</a>.</p>
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
   */
  CopyProductStatus?: CopyProductStatus | string;

  /**
   * <p>The identifier of the copied product.</p>
   */
  TargetProductId?: string;

  /**
   * <p>The status message.</p>
   */
  StatusDetail?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Information about a budget.</p>
 */
export interface BudgetDetail {
  /**
   * <p>Name of the associated budget.</p>
   */
  BudgetName?: string;
}

/**
 * @public
 */
export interface DescribePortfolioOutput {
  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: PortfolioDetail;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the TagOptions associated with the portfolio.</p>
   */
  TagOptions?: TagOptionDetail[];

  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: BudgetDetail[];
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
   */
  PortfolioId: string | undefined;

  /**
   * <p>The type of portfolio share to summarize. This field acts as a filter on the type of portfolio share, which can be one of the following:</p>
   *          <p>1. <code>ACCOUNT</code> - Represents an external account to account share.</p>
   *          <p>2. <code>ORGANIZATION</code> - Represents a share to an organization. This share is available to every account in the organization.</p>
   *          <p>3. <code>ORGANIZATIONAL_UNIT</code> - Represents a share to an organizational unit.</p>
   *          <p>4. <code>ORGANIZATION_MEMBER_ACCOUNT</code> - Represents a share to an account in the organization.</p>
   */
  Type: DescribePortfolioShareType | string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>Information about the portfolio share.</p>
 */
export interface PortfolioShareDetail {
  /**
   * <p>The identifier of the recipient entity that received the portfolio share.
   *          The recipient entity can be one of the following:</p>
   *          <p>1. An external account.</p>
   *          <p>2. An organziation member account.</p>
   *          <p>3. An organzational unit (OU).</p>
   *          <p>4. The organization itself. (This shares with every account in the organization).</p>
   */
  PrincipalId?: string;

  /**
   * <p>The type of the portfolio share.</p>
   */
  Type?: DescribePortfolioShareType | string;

  /**
   * <p>Indicates whether the shared portfolio is imported by the recipient account. If the recipient is in an organization node, the share is automatically imported, and the field is always set to true.</p>
   */
  Accepted?: boolean;

  /**
   * <p>Indicates whether TagOptions sharing is enabled or disabled for the portfolio share.</p>
   */
  ShareTagOptions?: boolean;

  /**
   * <p>Indicates if <code>Principal</code> sharing is enabled or disabled for the portfolio share. </p>
   */
  SharePrincipals?: boolean;
}

/**
 * @public
 */
export interface DescribePortfolioSharesOutput {
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Summaries about each of the portfolio shares.</p>
   */
  PortfolioShareDetails?: PortfolioShareDetail[];
}

/**
 * @public
 */
export interface DescribePortfolioShareStatusInput {
  /**
   * <p>The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.</p>
   */
  PortfolioShareToken: string | undefined;
}

/**
 * @public
 * <p>Errors that occurred during the portfolio share operation.</p>
 */
export interface ShareError {
  /**
   * <p>List of accounts impacted by the error.</p>
   */
  Accounts?: string[];

  /**
   * <p>Information about the error.</p>
   */
  Message?: string;

  /**
   * <p>Error type that happened when processing the operation.</p>
   */
  Error?: string;
}

/**
 * @public
 * <p>Information about the portfolio share operation.</p>
 */
export interface ShareDetails {
  /**
   * <p>List of accounts for whom the operation succeeded.</p>
   */
  SuccessfulShares?: string[];

  /**
   * <p>List of errors.</p>
   */
  ShareErrors?: ShareError[];
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
   */
  PortfolioShareToken?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId?: string;

  /**
   * <p>Organization node identifier. It can be either account id, organizational unit id or organization id.</p>
   */
  OrganizationNodeValue?: string;

  /**
   * <p>Status of the portfolio share operation.</p>
   */
  Status?: ShareStatus | string;

  /**
   * <p>Information about the portfolio share operation.</p>
   */
  ShareDetails?: ShareDetails;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  Id?: string;

  /**
   * <p>The product name.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>A launch path object.</p>
 */
export interface LaunchPath {
  /**
   * <p>The identifier of the launch path.</p>
   */
  Id?: string;

  /**
   * <p>The name of the launch path.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
 */
export interface ProvisioningArtifact {
  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   */
  Guidance?: ProvisioningArtifactGuidance | string;
}

/**
 * @public
 */
export interface DescribeProductOutput {
  /**
   * <p>Summary information about the product view.</p>
   */
  ProductViewSummary?: ProductViewSummary;

  /**
   * <p>Information about the provisioning artifacts for the specified product.</p>
   */
  ProvisioningArtifacts?: ProvisioningArtifact[];

  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: BudgetDetail[];

  /**
   * <p>Information about the associated launch paths.</p>
   */
  LaunchPaths?: LaunchPath[];
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  Id?: string;

  /**
   * <p>The product name.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier of the shared portfolio that the specified product is associated
   *          with.</p>
   *          <p>You can provide this parameter to retrieve the shared TagOptions associated with the
   *          product. If this parameter is provided and if TagOptions sharing is enabled in the
   *          portfolio share, the API returns both local and shared TagOptions associated with the
   *          product. Otherwise only local TagOptions will be returned. </p>
   */
  SourcePortfolioId?: string;
}

/**
 * @public
 * <p>Summary information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactSummary {
  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The metadata for the provisioning artifact. This is used with Amazon Web Services Marketplace products.</p>
   */
  ProvisioningArtifactMetadata?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeProductAsAdminOutput {
  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: ProductViewDetail;

  /**
   * <p>Information about the provisioning artifacts (also known as versions) for the specified product.</p>
   */
  ProvisioningArtifactSummaries?: ProvisioningArtifactSummary[];

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Information about the TagOptions associated with the product.</p>
   */
  TagOptions?: TagOptionDetail[];

  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: BudgetDetail[];
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product view identifier.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductViewOutput {
  /**
   * <p>Summary information about the product.</p>
   */
  ProductViewSummary?: ProductViewSummary;

  /**
   * <p>Information about the provisioning artifacts for the product.</p>
   */
  ProvisioningArtifacts?: ProvisioningArtifact[];
}

/**
 * @public
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The provisioned product identifier. You must provide the name or ID, but not both.</p>
   *          <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioned product. You must provide the name or ID, but not both.</p>
   *          <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Information about a CloudWatch dashboard.</p>
 */
export interface CloudWatchDashboard {
  /**
   * <p>The name of the CloudWatch dashboard.</p>
   */
  Name?: string;
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
 * @public
 * <p>Information about a provisioned product.</p>
 */
export interface ProvisionedProductDetail {
  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the provisioned product.</p>
   */
  Arn?: string;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  Type?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  Id?: string;

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
   */
  Status?: ProvisionedProductStatus | string;

  /**
   * <p>The current status message of the provisioned product.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The record identifier of the last request performed on this provisioned product.</p>
   */
  LastRecordId?: string;

  /**
   * <p>The record identifier of the last request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionedProduct
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
   */
  LastProvisioningRecordId?: string;

  /**
   * <p>The record identifier of the last successful request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionedProduct
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
   */
  LastSuccessfulProvisioningRecordId?: string;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The ARN of the launch role associated with the provisioned product.</p>
   */
  LaunchRoleArn?: string;
}

/**
 * @public
 */
export interface DescribeProvisionedProductOutput {
  /**
   * <p>Information about the provisioned product.</p>
   */
  ProvisionedProductDetail?: ProvisionedProductDetail;

  /**
   * <p>Any CloudWatch dashboards that were created when provisioning the product.</p>
   */
  CloudWatchDashboards?: CloudWatchDashboard[];
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
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
 * @public
 * <p>Information about a plan.</p>
 */
export interface ProvisionedProductPlanDetails {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   */
  PathId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The name of the plan.</p>
   */
  PlanName?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionProductName?: string;

  /**
   * <p>The plan type.</p>
   */
  PlanType?: ProvisionedProductPlanType | string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: ProvisionedProductPlanStatus | string;

  /**
   * <p>The UTC time stamp when the plan was last updated.</p>
   */
  UpdatedTime?: Date;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   */
  NotificationArns?: string[];

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the
   *          product.</p>
   */
  ProvisioningParameters?: UpdateProvisioningParameter[];

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;
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
 * @public
 * <p>Information about a change to a resource attribute.</p>
 */
export interface ResourceTargetDefinition {
  /**
   * <p>The attribute to be changed.</p>
   */
  Attribute?: ResourceAttribute | string;

  /**
   * <p>If the attribute is <code>Properties</code>, the value is the name of the property.
   *          Otherwise, the value is null.</p>
   */
  Name?: string;

  /**
   * <p>If the attribute is <code>Properties</code>, indicates whether a change to this property
   *          causes the resource to be re-created.</p>
   */
  RequiresRecreation?: RequiresRecreation | string;
}

/**
 * @public
 * <p>Information about a change to a resource attribute.</p>
 */
export interface ResourceChangeDetail {
  /**
   * <p>Information about the resource attribute to be modified.</p>
   */
  Target?: ResourceTargetDefinition;

  /**
   * <p>For static evaluations, the value of the resource attribute will change and the new value is known.
   *          For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.</p>
   */
  Evaluation?: EvaluationType | string;

  /**
   * <p>The ID of the entity that caused the change.</p>
   */
  CausingEntity?: string;
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
 * @public
 * <p>Information about a resource change that will occur when a plan is executed.</p>
 */
export interface ResourceChange {
  /**
   * <p>The change action.</p>
   */
  Action?: ChangeAction | string;

  /**
   * <p>The ID of the resource, as defined in the CloudFormation template.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The ID of the resource, if it was already created.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>If the change type is <code>Modify</code>, indicates whether the existing resource
   *          is deleted and replaced with a new one.</p>
   */
  Replacement?: Replacement | string;

  /**
   * <p>The change scope.</p>
   */
  Scope?: (ResourceAttribute | string)[];

  /**
   * <p>Information about the resource changes.</p>
   */
  Details?: ResourceChangeDetail[];
}

/**
 * @public
 */
export interface DescribeProvisionedProductPlanOutput {
  /**
   * <p>Information about the plan.</p>
   */
  ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;

  /**
   * <p>Information about the resource changes that will occur when the plan is executed.</p>
   */
  ResourceChanges?: ResourceChange[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The provisioning artifact name.</p>
   */
  ProvisioningArtifactName?: string;

  /**
   * <p>The product name.</p>
   */
  ProductName?: string;

  /**
   * <p>Indicates whether a verbose level of detail is enabled.</p>
   */
  Verbose?: boolean;

  /**
   * <p>Indicates if the API call response does or does not include additional details about the provisioning parameters. </p>
   */
  IncludeProvisioningArtifactParameters?: boolean;
}

/**
 * @public
 * <p>The constraints that the administrator has put on the parameter.</p>
 */
export interface ParameterConstraints {
  /**
   * <p>The values that the administrator has allowed for the parameter.</p>
   */
  AllowedValues?: string[];

  /**
   * <p>A regular expression that represents the patterns that allow for <code>String</code> types. The pattern must match the entire parameter value provided.</p>
   */
  AllowedPattern?: string;

  /**
   * <p>A string that explains a constraint when the constraint is violated. For example, without a constraint description, a parameter that has an allowed pattern of <code>[A-Za-z0-9]+</code> displays the following error message when the user specifies an invalid value:</p>
   *          <p>
   *             <code>Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+</code>
   *          </p>
   *          <p>By adding a constraint description, such as must only contain letters (uppercase and lowercase) and numbers, you can display the following customized error message:</p>
   *          <p>
   *             <code>Malformed input-Parameter MyParameter must only contain uppercase and lowercase letters and numbers.</code>
   *          </p>
   */
  ConstraintDescription?: string;

  /**
   * <p>An integer value that determines the largest number of characters you want to allow for <code>String</code> types. </p>
   */
  MaxLength?: string;

  /**
   * <p>An integer value that determines the smallest number of characters you want to allow for <code>String</code> types.</p>
   */
  MinLength?: string;

  /**
   * <p>A numeric value that determines the largest numeric value you want to allow for <code>Number</code> types.</p>
   */
  MaxValue?: string;

  /**
   * <p>A numeric value that determines the smallest numeric value you want to allow for <code>Number</code> types. </p>
   */
  MinValue?: string;
}

/**
 * @public
 * <p>Information about a parameter used to provision a product.</p>
 */
export interface ProvisioningArtifactParameter {
  /**
   * <p>The parameter key.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The default value.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The parameter type.</p>
   */
  ParameterType?: string;

  /**
   * <p>If this value is true, the value for this parameter is obfuscated from view when the
   *          parameter is retrieved. This parameter is used to hide sensitive information.</p>
   */
  IsNoEcho?: boolean;

  /**
   * <p>The description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Constraints that the administrator has put on a parameter.</p>
   */
  ParameterConstraints?: ParameterConstraints;
}

/**
 * @public
 */
export interface DescribeProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.</p>
   */
  Info?: Record<string, string>;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;

  /**
   * <p>Information about the parameters used to provision the product.  </p>
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactParameter[];
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier. You must provide the product name or ID, but not both.</p>
   */
  ProductId?: string;

  /**
   * <p>The name of the product. You must provide the name or ID, but not both.</p>
   */
  ProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact. You must provide the name or ID, but not both.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
   */
  ProvisioningArtifactName?: string;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.</p>
   */
  PathId?: string;

  /**
   * <p>The name of the path. You must provide the name or ID, but not both.</p>
   */
  PathName?: string;
}

/**
 * @public
 * <p>Summary information about a constraint.</p>
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
   */
  Type?: string;

  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Provisioning artifact output.</p>
 */
export interface ProvisioningArtifactOutput {
  /**
   * <p>The provisioning artifact output key.</p>
   */
  Key?: string;

  /**
   * <p>Description of the provisioning artifact output key.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p>
 *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export interface ProvisioningArtifactPreferences {
  /**
   * <p>One or more Amazon Web Services accounts where stack instances are deployed from the stack set. These accounts can be scoped in <code>ProvisioningPreferences$StackSetAccounts</code> and <code>UpdateProvisioningPreferences$StackSetAccounts</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   */
  StackSetAccounts?: string[];

  /**
   * <p>One or more Amazon Web Services Regions where stack instances are deployed from the stack set. These Regions can be scoped in <code>ProvisioningPreferences$StackSetRegions</code> and <code>UpdateProvisioningPreferences$StackSetRegions</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   */
  StackSetRegions?: string[];
}

/**
 * @public
 * <p>Summary information about a TagOption.</p>
 */
export interface TagOptionSummary {
  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Values?: string[];
}

/**
 * @public
 * <p>Additional information provided by the administrator.</p>
 */
export interface UsageInstruction {
  /**
   * <p>The usage instruction type for the value.</p>
   */
  Type?: string;

  /**
   * <p>The usage instruction value for this type.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeProvisioningParametersOutput {
  /**
   * <p>Information about the parameters used to provision the product.</p>
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactParameter[];

  /**
   * <p>Information about the constraints used to provision the product.</p>
   */
  ConstraintSummaries?: ConstraintSummary[];

  /**
   * <p>Any additional metadata specifically related to the provisioning of the product. For
   *          example, see the <code>Version</code> field of the CloudFormation template.</p>
   */
  UsageInstructions?: UsageInstruction[];

  /**
   * <p>Information about the TagOptions associated with the resource.</p>
   */
  TagOptions?: TagOptionSummary[];

  /**
   * <p>An object that contains information about preferences, such as Regions and accounts, for the provisioning artifact.</p>
   */
  ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences;

  /**
   * @deprecated
   *
   * <p>The output of the provisioning artifact.</p>
   */
  ProvisioningArtifactOutputs?: ProvisioningArtifactOutput[];

  /**
   * <p>A list of the keys and descriptions of the outputs. These outputs can be referenced from a provisioned product launched from this provisioning artifact.</p>
   */
  ProvisioningArtifactOutputKeys?: ProvisioningArtifactOutput[];
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The record identifier of the provisioned product. This identifier is returned by the
   *          request operation.</p>
   */
  Id: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>The error code and description resulting from an operation.</p>
 */
export interface RecordError {
  /**
   * <p>The numeric value of the error.</p>
   */
  Code?: string;

  /**
   * <p>The description of the error.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Information about a tag, which is a key-value pair.</p>
 */
export interface RecordTag {
  /**
   * <p>The key for this tag.</p>
   */
  Key?: string;

  /**
   * <p>The value for this tag.</p>
   */
  Value?: string;
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
 * @public
 * <p>Information about a request operation.</p>
 */
export interface RecordDetail {
  /**
   * <p>The identifier of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionedProductName?: string;

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
   */
  Status?: RecordStatus | string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time when the record was last updated.</p>
   */
  UpdatedTime?: Date;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  ProvisionedProductType?: string;

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
   */
  RecordType?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The path identifier.</p>
   */
  PathId?: string;

  /**
   * <p>The errors that occurred.</p>
   */
  RecordErrors?: RecordError[];

  /**
   * <p>One or more tags.</p>
   */
  RecordTags?: RecordTag[];

  /**
   * <p>The ARN of the launch role associated with the provisioned product.</p>
   */
  LaunchRoleArn?: string;
}

/**
 * @public
 * <p>The output for the product created as the result of a request. For example, the output for
 *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
 */
export interface RecordOutput {
  /**
   * <p>The output key.</p>
   */
  OutputKey?: string;

  /**
   * <p>The output value.</p>
   */
  OutputValue?: string;

  /**
   * <p>The description of the output.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface DescribeRecordOutput {
  /**
   * <p>Information about the product.</p>
   */
  RecordDetail?: RecordDetail;

  /**
   * <p>Information about the product created as the result of a request. For example, the output for
   *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
   */
  RecordOutputs?: RecordOutput[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface DescribeServiceActionInput {
  /**
   * <p>The self-service action identifier.</p>
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
   */
  AcceptLanguage?: string;
}

/**
 * @public
 */
export interface DescribeServiceActionOutput {
  /**
   * <p>Detailed information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

/**
 * @public
 */
export interface DescribeServiceActionExecutionParametersInput {
  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>The self-service action identifier.</p>
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
   */
  AcceptLanguage?: string;
}

/**
 * @public
 * <p>Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.</p>
 */
export interface ExecutionParameter {
  /**
   * <p>The name of the execution parameter.</p>
   */
  Name?: string;

  /**
   * <p>The execution parameter type.</p>
   */
  Type?: string;

  /**
   * <p>The default values for the execution parameter.</p>
   */
  DefaultValues?: string[];
}

/**
 * @public
 */
export interface DescribeServiceActionExecutionParametersOutput {
  /**
   * <p>The parameters of the self-service action.</p>
   */
  ServiceActionParameters?: ExecutionParameter[];
}

/**
 * @public
 */
export interface DescribeTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
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
   */
  BudgetName: string | undefined;

  /**
   * <p>The resource identifier you want to disassociate from. Either a portfolio-id or a product-id.</p>
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The ARN of the principal (user, role, or group). This field allows an ARN with no <code>accountID</code> with or without wildcard characters if
   *          <code>PrincipalType</code> is <code>IAM_PATTERN</code>.</p>
   */
  PrincipalARN: string | undefined;

  /**
   * <p>The supported value is <code>IAM</code> if you use a fully defined ARN, or <code>IAM_PATTERN</code>
   *          if you specify an <code>IAM</code> ARN with no AccountId, with or without wildcard characters. </p>
   */
  PrincipalType?: PrincipalType | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The portfolio identifier.</p>
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
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
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
   */
  AcceptLanguage?: string;
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
   */
  ResourceId: string | undefined;

  /**
   * <p>The TagOption identifier.</p>
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductPlanOutput {
  /**
   * <p>Information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductServiceActionInput {
  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId: string | undefined;

  /**
   * <p>An idempotency token that uniquely identifies the execute request.</p>
   */
  ExecuteToken?: string;

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
   */
  AcceptLanguage?: string;

  /**
   * <p>A map of all self-service action parameters and their values. If a provided parameter is of a special type, such as <code>TARGET</code>, the provided value will
   *             override the default value generated by Service Catalog. If the parameters field is not provided, no additional parameters are passed and default values will be used for
   *             any special parameters such as <code>TARGET</code>.</p>
   */
  Parameters?: Record<string, string[]>;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductServiceActionOutput {
  /**
   * <p>An object containing detailed information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
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
   */
  AccessStatus?: AccessStatus | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The identifier of the provisioned product that you want the outputs from.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The name of the provisioned product that you want the outputs from.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The list of keys that the API should return with their values. If none are provided, the API will return all outputs of the provisioned product.</p>
   */
  OutputKeys?: string[];

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 */
export interface GetProvisionedProductOutputsOutput {
  /**
   * <p>Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
   *       </p>
   */
  Outputs?: RecordOutput[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The user-friendly name of the provisioned product. The value must be unique for the Amazon Web Services account. The name cannot be updated after the product is provisioned. </p>
   */
  ProvisionedProductName: string | undefined;

  /**
   * <p>The unique identifier of the resource to be imported. It only currently supports
   *          CloudFormation stack IDs.</p>
   */
  PhysicalId: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface ImportAsProvisionedProductOutput {
  /**
   * <p>Information about a request operation.</p>
   */
  RecordDetail?: RecordDetail;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

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
   */
  PortfolioShareType?: PortfolioShareType | string;
}

/**
 * @public
 */
export interface ListAcceptedPortfolioSharesOutput {
  /**
   * <p>Information about the portfolios.</p>
   */
  PortfolioDetails?: PortfolioDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The resource identifier.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 */
export interface ListBudgetsForResourceOutput {
  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: BudgetDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 */
export interface ListConstraintsForPortfolioOutput {
  /**
   * <p>Information about the constraints.</p>
   */
  ConstraintDetails?: ConstraintDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 * <p>Summary information about a product path for a user.</p>
 */
export interface LaunchPathSummary {
  /**
   * <p>The identifier of the product path.</p>
   */
  Id?: string;

  /**
   * <p>The constraints on the portfolio-product relationship.</p>
   */
  ConstraintSummaries?: ConstraintSummary[];

  /**
   * <p>The tags associated with this product path.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the portfolio that contains the product. </p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListLaunchPathsOutput {
  /**
   * <p>Information about the launch path.</p>
   */
  LaunchPathSummaries?: LaunchPathSummary[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier. For example, <code>port-2abcdext3y5fk</code>.</p>
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
   */
  OrganizationNodeType: OrganizationNodeType | string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;
}

/**
 * @public
 */
export interface ListOrganizationPortfolioAccessOutput {
  /**
   * <p>Displays information about the organization nodes.</p>
   */
  OrganizationNodes?: OrganizationNode[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The ID of an organization node the portfolio is shared with. All children of this node with an inherited portfolio share will be returned.</p>
   */
  OrganizationParentId?: string;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;
}

/**
 * @public
 */
export interface ListPortfolioAccessOutput {
  /**
   * <p>Information about the Amazon Web Services accounts with access to the portfolio.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;
}

/**
 * @public
 */
export interface ListPortfoliosOutput {
  /**
   * <p>Information about the portfolios.</p>
   */
  PortfolioDetails?: PortfolioDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;
}

/**
 * @public
 */
export interface ListPortfoliosForProductOutput {
  /**
   * <p>Information about the portfolios.</p>
   */
  PortfolioDetails?: PortfolioDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 * <p>Information about a principal.</p>
 */
export interface Principal {
  /**
   * <p>The ARN of the principal (user, role, or group). This field allows for an ARN with no <code>accountID</code>, with or without wildcard characters if the
   *       <code>PrincipalType</code> is an <code>IAM_PATTERN</code>. </p>
   *          <p>For more information, review <a href="https://docs.aws.amazon.com/cli/latest/reference/servicecatalog/associate-principal-with-portfolio.html#options">associate-principal-with-portfolio</a>
   *       in the Amazon Web Services CLI Command Reference. </p>
   */
  PrincipalARN?: string;

  /**
   * <p>The principal type. The supported value is <code>IAM</code> if you use a fully defined ARN, or
   *          <code>IAM_PATTERN</code> if you use an ARN with no <code>accountID</code>, with or without wildcard characters. </p>
   */
  PrincipalType?: PrincipalType | string;
}

/**
 * @public
 */
export interface ListPrincipalsForPortfolioOutput {
  /**
   * <p>The <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the portfolio.</p>
   */
  Principals?: Principal[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   */
  AccessLevelFilter?: AccessLevelFilter;
}

/**
 * @public
 * <p>Summary information about a plan.</p>
 */
export interface ProvisionedProductPlanSummary {
  /**
   * <p>The name of the plan.</p>
   */
  PlanName?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionProductName?: string;

  /**
   * <p>The plan type.</p>
   */
  PlanType?: ProvisionedProductPlanType | string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;
}

/**
 * @public
 */
export interface ListProvisionedProductPlansOutput {
  /**
   * <p>Information about the plans.</p>
   */
  ProvisionedProductPlans?: ProvisionedProductPlanSummary[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsOutput {
  /**
   * <p>Information about the provisioning artifacts.</p>
   */
  ProvisioningArtifactDetails?: ProvisioningArtifactDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsForServiceActionInput {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

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
   */
  AcceptLanguage?: string;
}

/**
 * @public
 * <p>An object that contains summary information about a product view and a provisioning artifact.</p>
 */
export interface ProvisioningArtifactView {
  /**
   * <p>Summary information about a product view.</p>
   */
  ProductViewSummary?: ProductViewSummary;

  /**
   * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
   */
  ProvisioningArtifact?: ProvisioningArtifact;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsForServiceActionOutput {
  /**
   * <p>An array of objects with information about product views and provisioning artifacts.</p>
   */
  ProvisioningArtifactViews?: ProvisioningArtifactView[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>The search filter to use when listing history records.</p>
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
   */
  Key?: string;

  /**
   * <p>The filter value.</p>
   */
  Value?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   */
  AccessLevelFilter?: AccessLevelFilter;

  /**
   * <p>The search filter to scope the results.</p>
   */
  SearchFilter?: ListRecordHistorySearchFilter;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 */
export interface ListRecordHistoryOutput {
  /**
   * <p>The records, in reverse chronological order.</p>
   */
  RecordDetails?: RecordDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface ListResourcesForTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
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
   */
  ResourceType?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 * <p>Information about a resource.</p>
 */
export interface ResourceDetail {
  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  ARN?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The creation time of the resource.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListResourcesForTagOptionOutput {
  /**
   * <p>Information about the resources.</p>
   */
  ResourceDetails?: ResourceDetail[];

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 */
export interface ListServiceActionsOutput {
  /**
   * <p>An object containing information about the service actions associated with the provisioning artifact.</p>
   */
  ServiceActionSummaries?: ServiceActionSummary[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface ListServiceActionsForProvisioningArtifactInput {
  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

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
   */
  AcceptLanguage?: string;
}

/**
 * @public
 */
export interface ListServiceActionsForProvisioningArtifactOutput {
  /**
   * <p>An object containing information about the self-service actions associated with the provisioning artifact.</p>
   */
  ServiceActionSummaries?: ServiceActionSummary[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;
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
 * @public
 * <p>An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. </p>
 */
export interface StackInstance {
  /**
   * <p>The name of the Amazon Web Services account that the stack instance is associated with.</p>
   */
  Account?: string;

  /**
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   */
  Region?: string;

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
   */
  StackInstanceStatus?: StackInstanceStatus | string;
}

/**
 * @public
 */
export interface ListStackInstancesForProvisionedProductOutput {
  /**
   * <p>List of stack instances.</p>
   */
  StackInstances?: StackInstance[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>Filters to use when listing TagOptions.</p>
 */
export interface ListTagOptionsFilters {
  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Value?: string;

  /**
   * <p>The active state.</p>
   */
  Active?: boolean;
}

/**
 * @public
 */
export interface ListTagOptionsInput {
  /**
   * <p>The search filters. If no search filters are specified, the output includes all TagOptions.</p>
   */
  Filters?: ListTagOptionsFilters;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 */
export interface ListTagOptionsOutput {
  /**
   * <p>Information about the TagOptions.</p>
   */
  TagOptionDetails?: TagOptionDetail[];

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 * <p>
 *          The unique key-value pair
 *          for a tag
 *          that identifies provisioned product resources.
 *       </p>
 */
export interface UniqueTagResourceIdentifier {
  /**
   * <p>
   *          A unique key
   *          that's attached
   *          to a resource.
   *       </p>
   */
  Key?: string;

  /**
   * <p>
   *          A unique value
   *          that's attached
   *          to a resource.
   *       </p>
   */
  Value?: string;
}

/**
 * @public
 * <p>
 *          The ID
 *          for the provisioned product resources
 *          that are part
 *          of a resource group.
 *       </p>
 */
export interface EngineWorkflowResourceIdentifier {
  /**
   * <p>
   *          The unique key-value pair
   *          for a tag
   *          that identifies provisioned product resources.
   *       </p>
   */
  UniqueTag?: UniqueTagResourceIdentifier;
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
   */
  WorkflowToken: string | undefined;

  /**
   * <p>
   *          The identifier
   *          of the record.
   *       </p>
   */
  RecordId: string | undefined;

  /**
   * <p>
   *          The status
   *          of the provisioning engine execution.
   *       </p>
   */
  Status: EngineWorkflowStatus | string | undefined;

  /**
   * <p>
   *          The reason
   *          why the provisioning engine execution failed.
   *       </p>
   */
  FailureReason?: string;

  /**
   * <p>
   *          The ID
   *          for the provisioned product resources
   *          that are part
   *          of a resource group.
   *       </p>
   */
  ResourceIdentifier?: EngineWorkflowResourceIdentifier;

  /**
   * <p>
   *          The output
   *          of the provisioning engine execution.
   *       </p>
   */
  Outputs?: RecordOutput[];

  /**
   * <p>
   *          The idempotency token
   *          that identifies the provisioning engine execution.
   *       </p>
   */
  IdempotencyToken?: string;
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
   */
  WorkflowToken: string | undefined;

  /**
   * <p>
   *          The identifier
   *          of the record.
   *       </p>
   */
  RecordId: string | undefined;

  /**
   * <p>
   *          The status
   *          of the terminate engine execution.
   *       </p>
   */
  Status: EngineWorkflowStatus | string | undefined;

  /**
   * <p>
   *          The reason
   *          why the terminate engine execution failed.
   *       </p>
   */
  FailureReason?: string;

  /**
   * <p>
   *          The idempotency token
   *          that identifies the terminate engine execution.
   *       </p>
   */
  IdempotencyToken?: string;
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
   */
  WorkflowToken: string | undefined;

  /**
   * <p>
   *          The identifier
   *          of the record.
   *       </p>
   */
  RecordId: string | undefined;

  /**
   * <p>
   *          The status
   *          of the update engine execution.
   *       </p>
   */
  Status: EngineWorkflowStatus | string | undefined;

  /**
   * <p>
   *          The reason
   *          why the update engine execution failed.
   *       </p>
   */
  FailureReason?: string;

  /**
   * <p>
   *          The output
   *          of the update engine execution.
   *       </p>
   */
  Outputs?: RecordOutput[];

  /**
   * <p>
   *          The idempotency token
   *          that identifies the update engine execution.
   *       </p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface NotifyUpdateProvisionedProductEngineWorkflowResultOutput {}

/**
 * @public
 * <p>Information about a parameter used to provision a product.</p>
 */
export interface ProvisioningParameter {
  /**
   * <p>The parameter key.</p>
   */
  Key?: string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;
}

/**
 * @public
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
 */
export interface ProvisioningPreferences {
  /**
   * <p>One or more Amazon Web Services accounts where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified accounts should be within the list of accounts from the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all acounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: string[];

  /**
   * <p>One or more Amazon Web Services Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified Regions should be within the list of Regions from the <code>STACKSET</code> constraint. To get the list of Regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all Regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: string[];

  /**
   * <p>The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   *          <p>The default value is <code>0</code> if no value is specified.</p>
   */
  StackSetFailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   */
  StackSetFailureTolerancePercentage?: number;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyCount?: number;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as <code>1</code> instead.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyPercentage?: number;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier. You must provide the name or ID, but not both.</p>
   */
  ProductId?: string;

  /**
   * <p>The name of the product. You must provide the name or ID, but not both.</p>
   */
  ProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact. You must provide the name or ID, but not both.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
   */
  ProvisioningArtifactName?: string;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.</p>
   */
  PathId?: string;

  /**
   * <p>The name of the path. You must provide the name or ID, but not both.</p>
   */
  PathName?: string;

  /**
   * <p>A user-friendly name for the provisioned product. This value must be
   *          unique for the Amazon Web Services account and cannot be updated after the product is provisioned.</p>
   */
  ProvisionedProductName: string | undefined;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the
   *          product.</p>
   */
  ProvisioningParameters?: ProvisioningParameter[];

  /**
   * <p>An object that contains information about the provisioning preferences for a stack set.</p>
   */
  ProvisioningPreferences?: ProvisioningPreferences;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   */
  NotificationArns?: string[];

  /**
   * <p>An idempotency token that uniquely identifies the provisioning request.</p>
   */
  ProvisionToken?: string;
}

/**
 * @public
 */
export interface ProvisionProductOutput {
  /**
   * <p>Information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
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
   */
  PortfolioShareType?: PortfolioShareType | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   */
  AccessLevelFilter?: AccessLevelFilter;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 */
export interface ScanProvisionedProductsOutput {
  /**
   * <p>Information about the provisioned products.</p>
   */
  ProvisionedProducts?: ProvisionedProductDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The search filters. If no search filters are specified, the output includes
   *          all products to which the caller has access.</p>
   */
  Filters?: Record<string, string[]>;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted.</p>
   */
  SortBy?: ProductViewSortBy | string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 * <p>A single product view aggregation value/count pair, containing metadata about each
 *          product to which the calling user has access.</p>
 */
export interface ProductViewAggregationValue {
  /**
   * <p>The value of the product view aggregation.</p>
   */
  Value?: string;

  /**
   * <p>An approximate count of the products that match the value.</p>
   */
  ApproximateCount?: number;
}

/**
 * @public
 */
export interface SearchProductsOutput {
  /**
   * <p>Information about the product views.</p>
   */
  ProductViewSummaries?: ProductViewSummary[];

  /**
   * <p>The product view aggregations.</p>
   */
  ProductViewAggregations?: Record<string, ProductViewAggregationValue[]>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId?: string;

  /**
   * <p>The search filters. If no search filters are specified, the output includes all products
   *          to which the administrator has access.</p>
   */
  Filters?: Record<string, string[]>;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted.</p>
   */
  SortBy?: ProductViewSortBy | string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>Access level of the source of the product.</p>
   */
  ProductSource?: ProductSource | string;
}

/**
 * @public
 */
export interface SearchProductsAsAdminOutput {
  /**
   * <p>Information about the product views.</p>
   */
  ProductViewDetails?: ProductViewDetail[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   */
  AccessLevelFilter?: AccessLevelFilter;

  /**
   * <p>The search filters.</p>
   *          <p>When the key is <code>SearchQuery</code>, the searchable fields are <code>arn</code>,
   *          <code>createdTime</code>, <code>id</code>, <code>lastRecordId</code>,
   *          <code>idempotencyToken</code>, <code>name</code>, <code>physicalId</code>, <code>productId</code>,
   *          <code>provisioningArtifact</code>, <code>type</code>, <code>status</code>,
   *          <code>tags</code>, <code>userArn</code>, <code>userArnSession</code>, <code>lastProvisioningRecordId</code>, <code>lastSuccessfulProvisioningRecordId</code>,
   *          <code>productName</code>, and <code>provisioningArtifactName</code>.</p>
   *          <p>Example: <code>"SearchQuery":["status:AVAILABLE"]</code>
   *          </p>
   */
  Filters?: Record<string, string[]>;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted. The valid values are <code>arn</code>, <code>id</code>, <code>name</code>,
   *          and <code>lastRecordId</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

/**
 * @public
 * <p>Information about a provisioned product.</p>
 */
export interface ProvisionedProductAttribute {
  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the provisioned product.</p>
   */
  Arn?: string;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  Type?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  Id?: string;

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
   */
  Status?: ProvisionedProductStatus | string;

  /**
   * <p>The current status message of the provisioned product.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The record identifier of the last request performed on this provisioned product.</p>
   */
  LastRecordId?: string;

  /**
   * <p>The record identifier of the last request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionedProduct
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
   */
  LastProvisioningRecordId?: string;

  /**
   * <p>The record identifier of the last successful request performed on this provisioned product of the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                ProvisionedProduct
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
   */
  LastSuccessfulProvisioningRecordId?: string;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.</p>
   */
  PhysicalId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  ProvisioningArtifactName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  UserArn?: string;

  /**
   * <p>The ARN of the user in the session. This ARN might contain a session ID.</p>
   */
  UserArnSession?: string;
}

/**
 * @public
 */
export interface SearchProvisionedProductsOutput {
  /**
   * <p>Information about the provisioned products.</p>
   */
  ProvisionedProducts?: ProvisionedProductAttribute[];

  /**
   * <p>The number of provisioned products found.</p>
   */
  TotalResultsCount?: number;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface TerminateProvisionedProductInput {
  /**
   * <p>The name of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The identifier of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>An idempotency token that uniquely identifies the termination request. This token is
   *          only valid during the termination process. After the provisioned product is terminated,
   *          subsequent requests to terminate the same provisioned product always return
   *          <b>ResourceNotFound</b>.</p>
   */
  TerminateToken?: string;

  /**
   * <p>If set to true, Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   */
  IgnoreErrors?: boolean;

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
   */
  AcceptLanguage?: string;

  /**
   * <p>When this boolean parameter is set to true, the <code>TerminateProvisionedProduct</code> API deletes
   *          the Service Catalog provisioned product. However, it does not remove the CloudFormation
   *          stack, stack set, or the underlying resources of the deleted provisioned product. The
   *          default value is false.</p>
   */
  RetainPhysicalResources?: boolean;
}

/**
 * @public
 */
export interface TerminateProvisionedProductOutput {
  /**
   * <p>Information about the result of this request.</p>
   */
  RecordDetail?: RecordDetail;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The identifier of the constraint.</p>
   */
  Id: string | undefined;

  /**
   * <p>The updated description of the constraint.</p>
   */
  Description?: string;

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
   */
  Parameters?: string;
}

/**
 * @public
 */
export interface UpdateConstraintOutput {
  /**
   * <p>Information about the constraint.</p>
   */
  ConstraintDetail?: ConstraintDetail;

  /**
   * <p>The constraint parameters.</p>
   */
  ConstraintParameters?: string;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName?: string;

  /**
   * <p>The updated description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The updated name of the portfolio provider.</p>
   */
  ProviderName?: string;

  /**
   * <p>The tags to add.</p>
   */
  AddTags?: Tag[];

  /**
   * <p>The tags to remove.</p>
   */
  RemoveTags?: string[];
}

/**
 * @public
 */
export interface UpdatePortfolioOutput {
  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: PortfolioDetail;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Tag[];
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The unique identifier of the portfolio for which the share will be updated.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The Amazon Web Services account Id of the recipient account. This field is required when updating an external account to account type share.</p>
   */
  AccountId?: string;

  /**
   * <p>Information about the organization node.</p>
   */
  OrganizationNode?: OrganizationNode;

  /**
   * <p>Enables or disables <code>TagOptions</code> sharing for the portfolio share. If this field is not provided, the current state of
   *          TagOptions sharing on the portfolio share will not be modified.</p>
   */
  ShareTagOptions?: boolean;

  /**
   * <p>A flag to enables or disables <code>Principals</code> sharing in the portfolio. If this field is not provided,
   *          the current state of the <code>Principals</code> sharing on the portfolio share will not be modified. </p>
   */
  SharePrincipals?: boolean;
}

/**
 * @public
 */
export interface UpdatePortfolioShareOutput {
  /**
   * <p>The token that tracks the status of the <code>UpdatePortfolioShare</code> operation for external account to account or  organizational type sharing.</p>
   */
  PortfolioShareToken?: string;

  /**
   * <p>The status of <code>UpdatePortfolioShare</code> operation.
   *          You can also obtain the operation status using <code>DescribePortfolioShareStatus</code> API.
   *       </p>
   */
  Status?: ShareStatus | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The updated product name.</p>
   */
  Name?: string;

  /**
   * <p>The updated owner of the product.</p>
   */
  Owner?: string;

  /**
   * <p>The updated description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The updated distributor of the product.</p>
   */
  Distributor?: string;

  /**
   * <p>The updated support description for the product.</p>
   */
  SupportDescription?: string;

  /**
   * <p>The updated support email for the product.</p>
   */
  SupportEmail?: string;

  /**
   * <p>The updated support URL for the product.</p>
   */
  SupportUrl?: string;

  /**
   * <p>The tags to add to the product.</p>
   */
  AddTags?: Tag[];

  /**
   * <p>The tags to remove from the product.</p>
   */
  RemoveTags?: string[];

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
   */
  SourceConnection?: SourceConnection;
}

/**
 * @public
 */
export interface UpdateProductOutput {
  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: ProductViewDetail;

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Tag[];
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
 * @public
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 */
export interface UpdateProvisioningPreferences {
  /**
   * <p>One or more Amazon Web Services accounts that will have access to the provisioned product.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The Amazon Web Services accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: string[];

  /**
   * <p>One or more Amazon Web Services Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified Regions should be within the list of Regions from the <code>STACKSET</code> constraint. To get the list of Regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all Regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: string[];

  /**
   * <p>The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   *          <p>The default value is <code>0</code> if no value is specified.</p>
   */
  StackSetFailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   */
  StackSetFailureTolerancePercentage?: number;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyCount?: number;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as <code>1</code> instead.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyPercentage?: number;

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
   */
  StackSetOperationType?: StackSetOperationType | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The name of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The identifier of the provisioned product. You must provide the name or ID, but not both.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The identifier of the product. You must provide the name or ID, but not both.</p>
   */
  ProductId?: string;

  /**
   * <p>The name of the product. You must provide the name or ID, but not both.</p>
   */
  ProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
   */
  ProvisioningArtifactName?: string;

  /**
   * <p>The path identifier. This value is optional if the product
   *          has a default path, and required if the product has more than one path. You must provide the name or ID, but not both.</p>
   */
  PathId?: string;

  /**
   * <p>The name of the path. You must provide the name or ID, but not both.</p>
   */
  PathName?: string;

  /**
   * <p>The new parameters.</p>
   */
  ProvisioningParameters?: UpdateProvisioningParameter[];

  /**
   * <p>An object that contains information about the provisioning preferences for a stack set.</p>
   */
  ProvisioningPreferences?: UpdateProvisioningPreferences;

  /**
   * <p>One or more tags. Requires the product to have <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The idempotency token that uniquely identifies the provisioning update request.</p>
   */
  UpdateToken?: string;
}

/**
 * @public
 */
export interface UpdateProvisionedProductOutput {
  /**
   * <p>Information about the result of the request.</p>
   */
  RecordDetail?: RecordDetail;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
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
   */
  ProvisionedProductProperties: Record<string, string> | undefined;

  /**
   * <p>The idempotency token that uniquely identifies the provisioning product update request.</p>
   */
  IdempotencyToken?: string;
}

/**
 * @public
 */
export interface UpdateProvisionedProductPropertiesOutput {
  /**
   * <p>The provisioned product identifier.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>A map that contains the properties updated.</p>
   */
  ProvisionedProductProperties?: Record<string, string>;

  /**
   * <p>The identifier of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>The status of the request.</p>
   */
  Status?: RecordStatus | string;
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
   */
  AcceptLanguage?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * <p>The updated name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The updated description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the product version is active.</p>
   *          <p>Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact.</p>
   */
  Active?: boolean;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   *          <p>The <code>DEFAULT</code> value indicates that the product version is active.</p>
   *          <p>The administrator can set the guidance to <code>DEPRECATED</code> to inform
   *           users that the product version is deprecated. Users are able to make updates to a provisioned product
   *           of a deprecated version but cannot launch new provisioned products using a deprecated version.</p>
   */
  Guidance?: ProvisioningArtifactGuidance | string;
}

/**
 * @public
 */
export interface UpdateProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.</p>
   */
  Info?: Record<string, string>;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
}

/**
 * @public
 */
export interface UpdateServiceActionInput {
  /**
   * <p>The self-service action identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The self-service action name.</p>
   */
  Name?: string;

  /**
   * <p>A map that defines the self-service action.</p>
   */
  Definition?: Record<string, string>;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

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
   */
  AcceptLanguage?: string;
}

/**
 * @public
 */
export interface UpdateServiceActionOutput {
  /**
   * <p>Detailed information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

/**
 * @public
 */
export interface UpdateTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The updated value.</p>
   */
  Value?: string;

  /**
   * <p>The updated active state.</p>
   */
  Active?: boolean;
}

/**
 * @public
 */
export interface UpdateTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
}
