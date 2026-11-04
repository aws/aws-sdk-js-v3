// smithy-typescript generated code
import type {
  AccessLevelFilterKey,
  AccessStatus,
  ChangeAction,
  CopyOption,
  CopyProductStatus,
  DescribePortfolioShareType,
  EngineWorkflowStatus,
  EvaluationType,
  LastSyncStatus,
  OrganizationNodeType,
  PortfolioShareType,
  PrincipalType,
  ProductSource,
  ProductType,
  ProductViewFilterBy,
  ProductViewSortBy,
  PropertyKey,
  ProvisionedProductPlanStatus,
  ProvisionedProductPlanType,
  ProvisionedProductStatus,
  ProvisionedProductViewFilterBy,
  ProvisioningArtifactGuidance,
  ProvisioningArtifactPropertyName,
  ProvisioningArtifactType,
  RecordStatus,
  Replacement,
  RequiresRecreation,
  ResourceAttribute,
  ServiceActionAssociationErrorCode,
  ServiceActionDefinitionKey,
  ServiceActionDefinitionType,
  ShareStatus,
  SortOrder,
  SourceType,
  StackInstanceStatus,
  StackSetOperationType,
  Status,
} from "./enums";

/**
 * @public
 */
export interface AcceptPortfolioShareInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The type of shared portfolios to accept. The default is to accept imported portfolios.
   *
   * - `AWS_ORGANIZATIONS` - Accept portfolios shared by the management account of your organization.
   * - `IMPORTED` - Accept imported portfolios.
   * - `AWS_SERVICECATALOG` - Not supported. (Throws ResourceNotFoundException.)
   *
   * For example, `aws servicecatalog accept-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS`
   *
   * @public
   */
  PortfolioShareType?: PortfolioShareType | undefined;
}

/**
 * @public
 */
export interface AcceptPortfolioShareOutput {}

/**
 * The access level to use to filter results.
 *
 * @public
 */
export interface AccessLevelFilter {
  /**
   * The access level.
   *
   * - `Account` - Filter results based on the account.
   * - `Role` - Filter results based on the federated role of the specified user.
   * - `User` - Filter results based on the specified user.
   *
   * @public
   */
  Key?: AccessLevelFilterKey | undefined;

  /**
   * The user to which the access level applies. The only supported value is `self`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for this key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateBudgetWithResourceInput {
  /**
   * The name of the budget you want to associate.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The resource identifier. Either a portfolio-id or a product-id.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateBudgetWithResourceOutput {}

/**
 * @public
 */
export interface AssociatePrincipalWithPortfolioInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The ARN of the principal (user, role, or group). If the `PrincipalType` is `IAM`, the supported value is a fully defined [IAM Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). If the `PrincipalType` is `IAM_PATTERN`, the supported value is an `IAM` ARN *without an AccountID* in the following format:
   *
   * *arn:partition:iam:::resource-type/resource-id*
   *
   * The ARN resource-id can be either:
   *
   * - A fully formed resource-id. For example, *arn:aws:iam:::role/resource-name* or *arn:aws:iam:::role/resource-path/resource-name*
   * - A wildcard ARN. The wildcard ARN accepts `IAM_PATTERN` values with a "*" or "?" in the resource-id segment of the ARN. For example *arn:partition:service:::resource-type/resource-path/resource-name*. The new symbols are exclusive to the **resource-path** and **resource-name** and cannot replace the **resource-type** or other ARN values.
   *
   *   The ARN path and principal name allow unlimited wildcard characters.
   *
   * Examples of an **acceptable** wildcard ARN:
   *
   * - arn:aws:iam:::role/ResourceName_*
   * - arn:aws:iam:::role/*\/ResourceName_?
   *
   * Examples of an **unacceptable** wildcard ARN:
   *
   * - arn:aws:iam:::*\/ResourceName
   *
   * You can associate multiple `IAM_PATTERN`s even if the account has no principal with that name.
   *
   * The "?" wildcard character matches zero or one of any character. This is similar to ".?" in regular regex context. The "*" wildcard character matches any number of any characters. This is similar to ".*" in regular regex context.
   *
   * In the IAM Principal ARN format (*arn:partition:iam:::resource-type/resource-path/resource-name*), valid resource-type values include **user/**, **group/**, or **role/**. The "?" and "*" characters are allowed only after the resource-type in the resource-id segment. You can use special characters anywhere within the resource-id.
   *
   * The "*" character also matches the "/" character, allowing paths to be formed *within* the resource-id. For example, *arn:aws:iam:::role/*****\/ResourceName_?* matches both *arn:aws:iam:::role/pathA/pathB/ResourceName_1* and *arn:aws:iam:::role/pathA/ResourceName_1*.
   *
   * @public
   */
  PrincipalARN: string | undefined;

  /**
   * The principal type. The supported value is `IAM` if you use a fully defined Amazon Resource Name (ARN), or `IAM_PATTERN` if you use an ARN with no `accountID`, with or without wildcard characters.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The identifier of the source portfolio.
   *
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
   * The product identifier. For example, `prod-abcdzk7xy33qa`.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`.
   *
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * The self-service action identifier. For example, `act-fs7abcd89wxyz`.
   *
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests from the same Amazon Web Services account use the same idempotency token, the same response is returned for each repeated request.
   *
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
   * The resource identifier.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The TagOption identifier.
   *
   * @public
   */
  TagOptionId: string | undefined;
}

/**
 * @public
 */
export interface AssociateTagOptionWithResourceOutput {}

/**
 * A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
 *
 * @public
 */
export interface ServiceActionAssociation {
  /**
   * The self-service action identifier. For example, `act-fs7abcd89wxyz`.
   *
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * The product identifier. For example, `prod-abcdzk7xy33qa`.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`.
   *
   * @public
   */
  ProvisioningArtifactId: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
   *
   * @public
   */
  ServiceActionAssociations: ServiceActionAssociation[] | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * An object containing information about the error, along with identifying information about the self-service action and its associations.
 *
 * @public
 */
export interface FailedServiceActionAssociation {
  /**
   * The self-service action identifier. For example, `act-fs7abcd89wxyz`.
   *
   * @public
   */
  ServiceActionId?: string | undefined;

  /**
   * The product identifier. For example, `prod-abcdzk7xy33qa`.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The error code. Valid values are listed below.
   *
   * @public
   */
  ErrorCode?: ServiceActionAssociationErrorCode | undefined;

  /**
   * A text description of the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
  /**
   * An object that contains a list of errors, along with information to help you identify the self-service action.
   *
   * @public
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
   *
   * @public
   */
  ServiceActionAssociations: ServiceActionAssociation[] | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  /**
   * An object that contains a list of errors, along with information to help you identify the self-service action.
   *
   * @public
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[] | undefined;
}

/**
 * @public
 */
export interface CopyProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source product.
   *
   * @public
   */
  SourceProductArn: string | undefined;

  /**
   * The identifier of the target product. By default, a new product is created.
   *
   * @public
   */
  TargetProductId?: string | undefined;

  /**
   * A name for the target product. The default is the name of the source product.
   *
   * @public
   */
  TargetProductName?: string | undefined;

  /**
   * The identifiers of the provisioning artifacts (also known as versions) of the product to copy. By default, all provisioning artifacts are copied.
   *
   * @public
   */
  SourceProvisioningArtifactIdentifiers?: Partial<Record<ProvisioningArtifactPropertyName, string>>[] | undefined;

  /**
   * The copy options. If the value is `CopyTags`, the tags from the source product are copied to the target product.
   *
   * @public
   */
  CopyOptions?: CopyOption[] | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CopyProductOutput {
  /**
   * The token to use to track the progress of the operation.
   *
   * @public
   */
  CopyProductToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConstraintInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:
   *
   * - **LAUNCH**
   *
   *   You are required to specify either the `RoleArn` or the `LocalRoleName` but can't use both.
   *
   *   Specify the `RoleArn` property as follows:
   *
   *   `\{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"\}`
   *
   *   Specify the `LocalRoleName` property as follows:
   *
   *   `\{"LocalRoleName": "SCBasicLaunchRole"\}`
   *
   *   If you specify the `LocalRoleName` property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account.
   *
   *   > **Note:** The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.
   *
   *   You cannot have both a `LAUNCH` and a `STACKSET` constraint.
   *
   *   You also cannot have more than one `LAUNCH` constraint on a product and portfolio.
   *
   * - **NOTIFICATION**
   *
   *   Specify the `NotificationArns` property as follows:
   *
   *   `\{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]\}`
   *
   * - **RESOURCE_UPDATE**
   *
   *   Specify the `TagUpdatesOnProvisionedProduct` property as follows:
   *
   *   `\{"Version":"2.0","Properties":\{"TagUpdateOnProvisionedProduct":"String"\}\}`
   *
   *   The `TagUpdatesOnProvisionedProduct` property accepts a string value of `ALLOWED` or `NOT_ALLOWED`.
   *
   * - **STACKSET**
   *
   *   Specify the `Parameters` property as follows:
   *
   *   `\{"Version": "String", "Properties": \{"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"\}\}`
   *
   *   You cannot have both a `LAUNCH` and a `STACKSET` constraint.
   *
   *   You also cannot have more than one `STACKSET` constraint on a product and portfolio.
   *
   *   Products with a `STACKSET` constraint will launch an CloudFormation stack set.
   *
   * - **TEMPLATE**
   *
   *   Specify the `Rules` property. For more information, see [Template Constraint Rules](http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html).
   *
   * @public
   */
  Parameters: string | undefined;

  /**
   * The type of constraint.
   *
   * - `LAUNCH`
   * - `NOTIFICATION`
   * - `RESOURCE_UPDATE`
   * - `STACKSET`
   * - `TEMPLATE`
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The description of the constraint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * Information about a constraint.
 *
 * @public
 */
export interface ConstraintDetail {
  /**
   * The identifier of the constraint.
   *
   * @public
   */
  ConstraintId?: string | undefined;

  /**
   * The type of constraint.
   *
   * - `LAUNCH`
   * - `NOTIFICATION`
   * - STACKSET
   * - `TEMPLATE`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The description of the constraint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The owner of the constraint.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The identifier of the product the constraint applies to. Note that a constraint applies to a specific instance of a product within a certain portfolio.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The identifier of the portfolio the product resides in. The constraint applies only to the instance of the product that lives within this portfolio.
   *
   * @public
   */
  PortfolioId?: string | undefined;
}

/**
 * @public
 */
export interface CreateConstraintOutput {
  /**
   * Information about the constraint.
   *
   * @public
   */
  ConstraintDetail?: ConstraintDetail | undefined;

  /**
   * The constraint parameters.
   *
   * @public
   */
  ConstraintParameters?: string | undefined;

  /**
   * The status of the current request.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The name to use for display purposes.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The description of the portfolio.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the portfolio provider.
   *
   * @public
   */
  ProviderName: string | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * Information about a portfolio.
 *
 * @public
 */
export interface PortfolioDetail {
  /**
   * The portfolio identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN assigned to the portfolio.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name to use for display purposes.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the portfolio.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The name of the portfolio provider.
   *
   * @public
   */
  ProviderName?: string | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioOutput {
  /**
   * Information about the portfolio.
   *
   * @public
   */
  PortfolioDetail?: PortfolioDetail | undefined;

  /**
   * Information about the tags associated with the portfolio.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Information about the organization node.
 *
 * @public
 */
export interface OrganizationNode {
  /**
   * The organization node type.
   *
   * @public
   */
  Type?: OrganizationNodeType | undefined;

  /**
   * The identifier of the organization node.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioShareInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The Amazon Web Services account ID. For example, `123456789012`.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The organization node to whom you are going to share. When you pass `OrganizationNode`, it creates `PortfolioShare` for all of the Amazon Web Services accounts that are associated to the `OrganizationNode`. The output returns a `PortfolioShareToken`, which enables the administrator to monitor the status of the `PortfolioShare` creation process.
   *
   * @public
   */
  OrganizationNode?: OrganizationNode | undefined;

  /**
   * Enables or disables `TagOptions` sharing when creating the portfolio share. If this flag is not provided, TagOptions sharing is disabled.
   *
   * @public
   */
  ShareTagOptions?: boolean | undefined;

  /**
   * This parameter is only supported for portfolios with an **OrganizationalNode** Type of `ORGANIZATION` or `ORGANIZATIONAL_UNIT`.
   *
   * Enables or disables `Principal` sharing when creating the portfolio share. If you do **not** provide this flag, principal sharing is disabled.
   *
   * When you enable Principal Name Sharing for a portfolio share, the share recipient account end users with a principal that matches any of the associated IAM patterns can provision products from the portfolio. Once shared, the share recipient can view associations of `PrincipalType`: `IAM_PATTERN` on their portfolio. You can create the principals in the recipient account before or after creating the share.
   *
   * @public
   */
  SharePrincipals?: boolean | undefined;
}

/**
 * @public
 */
export interface CreatePortfolioShareOutput {
  /**
   * The portfolio shares a unique identifier that only returns if the portfolio is shared to an organization node.
   *
   * @public
   */
  PortfolioShareToken?: string | undefined;
}

/**
 * Information about a provisioning artifact (also known as a version) for a product.
 *
 * @public
 */
export interface ProvisioningArtifactProperties {
  /**
   * The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the provisioning artifact, including how it differs from the previous provisioning artifact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specify the template source with one of the following options, but not both. Keys accepted: [ `LoadTemplateFromURL`, `ImportFromPhysicalId` ]
   *
   * The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format. Specify the URL in JSON format as follows:
   *
   * `"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."`
   *
   * `ImportFromPhysicalId`: The physical id of the resource that contains the template. Currently only supports CloudFormation stack arn. Specify the physical id in JSON format as follows: `ImportFromPhysicalId: “arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]`
   *
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * The type of provisioning artifact.
   *
   * - `CLOUD_FORMATION_TEMPLATE` - CloudFormation template
   * - `TERRAFORM_OPEN_SOURCE` - Terraform Open Source configuration file
   * - `TERRAFORM_CLOUD` - Terraform Cloud configuration file
   * - `EXTERNAL` - External configuration file
   *
   * @public
   */
  Type?: ProvisioningArtifactType | undefined;

  /**
   * If set to true, Service Catalog stops validating the specified provisioning artifact even if it is invalid.
   *
   * Service Catalog does not support template validation for the `TERRAFORM_OS` product type.
   *
   * @public
   */
  DisableTemplateValidation?: boolean | undefined;
}

/**
 * The subtype containing details about the Codestar connection `Type`.
 *
 * @public
 */
export interface CodeStarParameters {
  /**
   * The CodeStar ARN, which is the connection between Service Catalog and the external repository.
   *
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * The specific repository where the product’s artifact-to-be-synced resides, formatted as "Account/Repo."
   *
   * @public
   */
  Repository: string | undefined;

  /**
   * The specific branch where the artifact resides.
   *
   * @public
   */
  Branch: string | undefined;

  /**
   * The absolute path wehre the artifact resides within the repo and branch, formatted as "folder/file.json."
   *
   * @public
   */
  ArtifactPath: string | undefined;
}

/**
 * Provides connection details.
 *
 * @public
 */
export interface SourceConnectionParameters {
  /**
   * Provides `ConnectionType` details.
   *
   * @public
   */
  CodeStar?: CodeStarParameters | undefined;
}

/**
 * A top level `ProductViewDetail` response containing details about the product’s connection. Service Catalog returns this field for the `CreateProduct`, `UpdateProduct`, `DescribeProductAsAdmin`, and `SearchProductAsAdmin` APIs. This response contains the same fields as the `ConnectionParameters` request, with the addition of the `LastSync` response.
 *
 * @public
 */
export interface SourceConnection {
  /**
   * The only supported `SourceConnection` type is Codestar.
   *
   * @public
   */
  Type?: SourceType | undefined;

  /**
   * The connection details based on the connection `Type`.
   *
   * @public
   */
  ConnectionParameters: SourceConnectionParameters | undefined;
}

/**
 * @public
 */
export interface CreateProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The name of the product.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The owner of the product.
   *
   * @public
   */
  Owner: string | undefined;

  /**
   * The description of the product.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The distributor of the product.
   *
   * @public
   */
  Distributor?: string | undefined;

  /**
   * The support information about the product.
   *
   * @public
   */
  SupportDescription?: string | undefined;

  /**
   * The contact email for product support.
   *
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * The contact URL for product support.
   *
   * `^https?:\/\//`/ is the pattern used to validate SupportUrl.
   *
   * @public
   */
  SupportUrl?: string | undefined;

  /**
   * The type of product.
   *
   * @public
   */
  ProductType: ProductType | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The configuration of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactProperties | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Specifies connection details for the created product and syncs the product to the connection source artifact. This automatically manages the product's artifacts based on changes to the source. The `SourceConnection` parameter consists of the following sub-fields.
   *
   * - `Type`
   * - `ConnectionParamters`
   *
   * @public
   */
  SourceConnection?: SourceConnection | undefined;
}

/**
 * Summary information about a product view.
 *
 * @public
 */
export interface ProductViewSummary {
  /**
   * The product view identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The name of the product.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The owner of the product. Contact the product administrator for the significance of this value.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * Short description of the product.
   *
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * The product type. Contact the product administrator for the significance of this value. If this value is `MARKETPLACE`, the product was created by Amazon Web Services Marketplace.
   *
   * @public
   */
  Type?: ProductType | undefined;

  /**
   * The distributor of the product. Contact the product administrator for the significance of this value.
   *
   * @public
   */
  Distributor?: string | undefined;

  /**
   * Indicates whether the product has a default path. If the product does not have a default path, call ListLaunchPaths to disambiguate between paths. Otherwise, ListLaunchPaths is not required, and the output of ProductViewSummary can be used directly with DescribeProvisioningParameters.
   *
   * @public
   */
  HasDefaultPath?: boolean | undefined;

  /**
   * The email contact information to obtain support for this Product.
   *
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * The description of the support for this Product.
   *
   * @public
   */
  SupportDescription?: string | undefined;

  /**
   * The URL information to obtain support for this Product.
   *
   * @public
   */
  SupportUrl?: string | undefined;
}

/**
 * Provides details about the product's connection sync and contains the following sub-fields.
 *
 * - `LastSyncTime`
 * - `LastSyncStatus`
 * - `LastSyncStatusMessage`
 * - `LastSuccessfulSyncTime`
 * - `LastSuccessfulSyncProvisioningArtifactID`
 *
 * @public
 */
export interface LastSync {
  /**
   * The time of the last attempted sync from the repository to the Service Catalog product.
   *
   * @public
   */
  LastSyncTime?: Date | undefined;

  /**
   * The current status of the sync. Responses include `SUCCEEDED` or `FAILED`.
   *
   * @public
   */
  LastSyncStatus?: LastSyncStatus | undefined;

  /**
   * The sync's status message.
   *
   * @public
   */
  LastSyncStatusMessage?: string | undefined;

  /**
   * The time of the latest successful sync from the source repo artifact to the Service Catalog product.
   *
   * @public
   */
  LastSuccessfulSyncTime?: Date | undefined;

  /**
   * The ProvisioningArtifactID of the ProvisioningArtifact created from the latest successful sync.
   *
   * @public
   */
  LastSuccessfulSyncProvisioningArtifactId?: string | undefined;
}

/**
 * Provides details about the configured `SourceConnection`.
 *
 * @public
 */
export interface SourceConnectionDetail {
  /**
   * The only supported `SourceConnection` type is Codestar.
   *
   * @public
   */
  Type?: SourceType | undefined;

  /**
   * The connection details based on the connection `Type`.
   *
   * @public
   */
  ConnectionParameters?: SourceConnectionParameters | undefined;

  /**
   * Provides details about the product's connection sync and contains the following sub-fields.
   *
   * - `LastSyncTime`
   * - `LastSyncStatus`
   * - `LastSyncStatusMessage`
   * - `LastSuccessfulSyncTime`
   * - `LastSuccessfulSyncProvisioningArtifactID`
   *
   * @public
   */
  LastSync?: LastSync | undefined;
}

/**
 * Information about a product view.
 *
 * @public
 */
export interface ProductViewDetail {
  /**
   * Summary information about the product view.
   *
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * The status of the product.
   *
   * - `AVAILABLE` - The product is ready for use.
   * - `CREATING` - Product creation has started; the product is not ready for use.
   * - `FAILED` - An action failed.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The ARN of the product.
   *
   * @public
   */
  ProductARN?: string | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * A top level `ProductViewDetail` response containing details about the product’s connection. Service Catalog returns this field for the `CreateProduct`, `UpdateProduct`, `DescribeProductAsAdmin`, and `SearchProductAsAdmin` APIs. This response contains the same fields as the `ConnectionParameters` request, with the addition of the `LastSync` response.
   *
   * @public
   */
  SourceConnection?: SourceConnectionDetail | undefined;
}

/**
 * Information about a provisioning artifact (also known as a version) for a product.
 *
 * @public
 */
export interface ProvisioningArtifactDetail {
  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the provisioning artifact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the provisioning artifact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of provisioning artifact.
   *
   * - `CLOUD_FORMATION_TEMPLATE` - CloudFormation template
   * - `TERRAFORM_OPEN_SOURCE` - Terraform Open Source configuration file
   * - `TERRAFORM_CLOUD` - Terraform Cloud configuration file
   * - `EXTERNAL` - External configuration file
   *
   * @public
   */
  Type?: ProvisioningArtifactType | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Indicates whether the product version is active.
   *
   * @public
   */
  Active?: boolean | undefined;

  /**
   * Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.
   *
   * @public
   */
  Guidance?: ProvisioningArtifactGuidance | undefined;

  /**
   * Specifies the revision of the external artifact that was used to automatically sync the Service Catalog product and create the provisioning artifact. Service Catalog includes this response parameter as a high level field to the existing `ProvisioningArtifactDetail` type, which is returned as part of the response for `CreateProduct`, `UpdateProduct`, `DescribeProductAsAdmin`, `DescribeProvisioningArtifact`, `ListProvisioningArtifact`, and `UpdateProvisioningArticat` APIs.
   *
   * This field only exists for Repo-Synced products.
   *
   * @public
   */
  SourceRevision?: string | undefined;
}

/**
 * @public
 */
export interface CreateProductOutput {
  /**
   * Information about the product view.
   *
   * @public
   */
  ProductViewDetail?: ProductViewDetail | undefined;

  /**
   * Information about the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * Information about the tags associated with the product.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The parameter key-value pair used to update a provisioned product.
 *
 * @public
 */
export interface UpdateProvisioningParameter {
  /**
   * The parameter key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The parameter value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * If set to true, `Value` is ignored and the previous parameter value is kept.
   *
   * @public
   */
  UsePreviousValue?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedProductPlanInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The name of the plan.
   *
   * @public
   */
  PlanName: string | undefined;

  /**
   * The plan type.
   *
   * @public
   */
  PlanType: ProvisionedProductPlanType | undefined;

  /**
   * Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
   *
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.
   *
   * @public
   */
  PathId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * A user-friendly name for the provisioned product. This value must be unique for the Amazon Web Services account and cannot be updated after the product is provisioned.
   *
   * @public
   */
  ProvisionedProductName: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * Parameters specified by the administrator that are required for provisioning the product.
   *
   * @public
   */
  ProvisioningParameters?: UpdateProvisioningParameter[] | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * One or more tags.
   *
   * If the plan is for an existing provisioned product, the product must have a `RESOURCE_UPDATE` constraint with `TagUpdatesOnProvisionedProduct` set to `ALLOWED` to allow tag updates.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedProductPlanOutput {
  /**
   * The name of the plan.
   *
   * @public
   */
  PlanName?: string | undefined;

  /**
   * The plan identifier.
   *
   * @public
   */
  PlanId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * The user-friendly name of the provisioned product.
   *
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningArtifactInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The configuration for the provisioning artifact.
   *
   * @public
   */
  Parameters: ProvisioningArtifactProperties | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningArtifactOutput {
  /**
   * Information about the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * Specify the template source with one of the following options, but not both. Keys accepted: [ `LoadTemplateFromURL`, `ImportFromPhysicalId` ].
   *
   * Use the URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.
   *
   * `LoadTemplateFromURL`
   *
   * Use the URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.
   *
   * `ImportFromPhysicalId`
   *
   * Use the physical id of the resource that contains the template; currently supports CloudFormation stack ARN.
   *
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * The status of the current request.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface CreateServiceActionInput {
  /**
   * The self-service action name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The service action definition type. For example, `SSM_AUTOMATION`.
   *
   * @public
   */
  DefinitionType: ServiceActionDefinitionType | undefined;

  /**
   * The self-service action definition. Can be one of the following:
   *
   * - **Name**
   *
   *   The name of the Amazon Web Services Systems Manager document (SSM document). For example, `AWS-RestartEC2Instance`.
   *
   *   If you are using a shared SSM document, you must provide the ARN instead of the name.
   *
   * - **Version**
   *
   *   The Amazon Web Services Systems Manager automation document version. For example, `"Version": "1"`
   *
   * - **AssumeRole**
   *
   *   The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, `"AssumeRole": "arn:aws:iam::12345678910:role/ActionRole"`.
   *
   *   To reuse the provisioned product launch role, set to `"AssumeRole": "LAUNCH_ROLE"`.
   *
   * - **Parameters**
   *
   *   The list of parameters in JSON format.
   *
   *   For example: `[\{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"\}]` or `[\{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"\}]`.
   *
   * @public
   */
  Definition: Partial<Record<ServiceActionDefinitionKey, string>> | undefined;

  /**
   * The self-service action description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * Detailed information about the self-service action.
 *
 * @public
 */
export interface ServiceActionSummary {
  /**
   * The self-service action identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The self-service action name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The self-service action description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The self-service action definition type. For example, `SSM_AUTOMATION`.
   *
   * @public
   */
  DefinitionType?: ServiceActionDefinitionType | undefined;
}

/**
 * An object containing detailed information about the self-service action.
 *
 * @public
 */
export interface ServiceActionDetail {
  /**
   * Summary information about the self-service action.
   *
   * @public
   */
  ServiceActionSummary?: ServiceActionSummary | undefined;

  /**
   * A map that defines the self-service action.
   *
   * @public
   */
  Definition?: Partial<Record<ServiceActionDefinitionKey, string>> | undefined;
}

/**
 * @public
 */
export interface CreateServiceActionOutput {
  /**
   * An object containing information about the self-service action.
   *
   * @public
   */
  ServiceActionDetail?: ServiceActionDetail | undefined;
}

/**
 * @public
 */
export interface CreateTagOptionInput {
  /**
   * The TagOption key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The TagOption value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Information about a TagOption.
 *
 * @public
 */
export interface TagOptionDetail {
  /**
   * The TagOption key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The TagOption value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The TagOption active state.
   *
   * @public
   */
  Active?: boolean | undefined;

  /**
   * The TagOption identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Web Services account Id of the owner account that created the TagOption.
   *
   * @public
   */
  Owner?: string | undefined;
}

/**
 * @public
 */
export interface CreateTagOptionOutput {
  /**
   * Information about the TagOption.
   *
   * @public
   */
  TagOptionDetail?: TagOptionDetail | undefined;
}

/**
 * @public
 */
export interface DeleteConstraintInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The identifier of the constraint.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeletePortfolioOutput {}

/**
 * @public
 */
export interface DeletePortfolioShareInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The organization node to whom you are going to stop sharing.
   *
   * @public
   */
  OrganizationNode?: OrganizationNode | undefined;
}

/**
 * @public
 */
export interface DeletePortfolioShareOutput {
  /**
   * The portfolio share unique identifier. This will only be returned if delete is made to an organization node.
   *
   * @public
   */
  PortfolioShareToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The plan identifier.
   *
   * @public
   */
  PlanId: string | undefined;

  /**
   * If set to true, Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
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
   * The self-service action identifier. For example, `act-fs7abcd89wxyz`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests from the same Amazon Web Services account use the same idempotency token, the same response is returned for each repeated request.
   *
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
   * The TagOption identifier.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The identifier of the constraint.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeConstraintOutput {
  /**
   * Information about the constraint.
   *
   * @public
   */
  ConstraintDetail?: ConstraintDetail | undefined;

  /**
   * The constraint parameters.
   *
   * @public
   */
  ConstraintParameters?: string | undefined;

  /**
   * The status of the current request.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface DescribeCopyProductStatusInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The token for the copy product operation. This token is returned by CopyProduct.
   *
   * @public
   */
  CopyProductToken: string | undefined;
}

/**
 * @public
 */
export interface DescribeCopyProductStatusOutput {
  /**
   * The status of the copy product operation.
   *
   * @public
   */
  CopyProductStatus?: CopyProductStatus | undefined;

  /**
   * The identifier of the copied product.
   *
   * @public
   */
  TargetProductId?: string | undefined;

  /**
   * The status message.
   *
   * @public
   */
  StatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Information about a budget.
 *
 * @public
 */
export interface BudgetDetail {
  /**
   * Name of the associated budget.
   *
   * @public
   */
  BudgetName?: string | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioOutput {
  /**
   * Information about the portfolio.
   *
   * @public
   */
  PortfolioDetail?: PortfolioDetail | undefined;

  /**
   * Information about the tags associated with the portfolio.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Information about the TagOptions associated with the portfolio.
   *
   * @public
   */
  TagOptions?: TagOptionDetail[] | undefined;

  /**
   * Information about the associated budgets.
   *
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioSharesInput {
  /**
   * The unique identifier of the portfolio for which shares will be retrieved.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The type of portfolio share to summarize. This field acts as a filter on the type of portfolio share, which can be one of the following:
   *
   * 1. `ACCOUNT` - Represents an external account to account share.
   *
   * 2. `ORGANIZATION` - Represents a share to an organization. This share is available to every account in the organization.
   *
   * 3. `ORGANIZATIONAL_UNIT` - Represents a share to an organizational unit.
   *
   * 4. `ORGANIZATION_MEMBER_ACCOUNT` - Represents a share to an account in the organization.
   *
   * @public
   */
  Type: DescribePortfolioShareType | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * Information about the portfolio share.
 *
 * @public
 */
export interface PortfolioShareDetail {
  /**
   * The identifier of the recipient entity that received the portfolio share. The recipient entity can be one of the following:
   *
   * 1. An external account.
   *
   * 2. An organziation member account.
   *
   * 3. An organzational unit (OU).
   *
   * 4. The organization itself. (This shares with every account in the organization).
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The type of the portfolio share.
   *
   * @public
   */
  Type?: DescribePortfolioShareType | undefined;

  /**
   * Indicates whether the shared portfolio is imported by the recipient account. If the recipient is in an organization node, the share is automatically imported, and the field is always set to true.
   *
   * @public
   */
  Accepted?: boolean | undefined;

  /**
   * Indicates whether TagOptions sharing is enabled or disabled for the portfolio share.
   *
   * @public
   */
  ShareTagOptions?: boolean | undefined;

  /**
   * Indicates if `Principal` sharing is enabled or disabled for the portfolio share.
   *
   * @public
   */
  SharePrincipals?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioSharesOutput {
  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * Summaries about each of the portfolio shares.
   *
   * @public
   */
  PortfolioShareDetails?: PortfolioShareDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioShareStatusInput {
  /**
   * The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.
   *
   * @public
   */
  PortfolioShareToken: string | undefined;
}

/**
 * Errors that occurred during the portfolio share operation.
 *
 * @public
 */
export interface ShareError {
  /**
   * List of accounts impacted by the error.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * Information about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Error type that happened when processing the operation.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * Information about the portfolio share operation.
 *
 * @public
 */
export interface ShareDetails {
  /**
   * List of accounts for whom the operation succeeded.
   *
   * @public
   */
  SuccessfulShares?: string[] | undefined;

  /**
   * List of errors.
   *
   * @public
   */
  ShareErrors?: ShareError[] | undefined;
}

/**
 * @public
 */
export interface DescribePortfolioShareStatusOutput {
  /**
   * The token for the portfolio share operation. For example, `share-6v24abcdefghi`.
   *
   * @public
   */
  PortfolioShareToken?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId?: string | undefined;

  /**
   * Organization node identifier. It can be either account id, organizational unit id or organization id.
   *
   * @public
   */
  OrganizationNodeValue?: string | undefined;

  /**
   * Status of the portfolio share operation.
   *
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * Information about the portfolio share operation.
   *
   * @public
   */
  ShareDetails?: ShareDetails | undefined;
}

/**
 * @public
 */
export interface DescribeProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The product name.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A launch path object.
 *
 * @public
 */
export interface LaunchPath {
  /**
   * The identifier of the launch path.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the launch path.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Information about a provisioning artifact. A provisioning artifact is also known as a product version.
 *
 * @public
 */
export interface ProvisioningArtifact {
  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the provisioning artifact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the provisioning artifact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.
   *
   * @public
   */
  Guidance?: ProvisioningArtifactGuidance | undefined;
}

/**
 * @public
 */
export interface DescribeProductOutput {
  /**
   * Summary information about the product view.
   *
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * Information about the provisioning artifacts for the specified product.
   *
   * @public
   */
  ProvisioningArtifacts?: ProvisioningArtifact[] | undefined;

  /**
   * Information about the associated budgets.
   *
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;

  /**
   * Information about the associated launch paths.
   *
   * @public
   */
  LaunchPaths?: LaunchPath[] | undefined;
}

/**
 * @public
 */
export interface DescribeProductAsAdminInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The product name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the shared portfolio that the specified product is associated with.
   *
   * You can provide this parameter to retrieve the shared TagOptions associated with the product. If this parameter is provided and if TagOptions sharing is enabled in the portfolio share, the API returns both local and shared TagOptions associated with the product. Otherwise only local TagOptions will be returned.
   *
   * @public
   */
  SourcePortfolioId?: string | undefined;
}

/**
 * Summary information about a provisioning artifact (also known as a version) for a product.
 *
 * @public
 */
export interface ProvisioningArtifactSummary {
  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the provisioning artifact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the provisioning artifact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The metadata for the provisioning artifact. This is used with Amazon Web Services Marketplace products.
   *
   * @public
   */
  ProvisioningArtifactMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeProductAsAdminOutput {
  /**
   * Information about the product view.
   *
   * @public
   */
  ProductViewDetail?: ProductViewDetail | undefined;

  /**
   * Information about the provisioning artifacts (also known as versions) for the specified product.
   *
   * @public
   */
  ProvisioningArtifactSummaries?: ProvisioningArtifactSummary[] | undefined;

  /**
   * Information about the tags associated with the product.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Information about the TagOptions associated with the product.
   *
   * @public
   */
  TagOptions?: TagOptionDetail[] | undefined;

  /**
   * Information about the associated budgets.
   *
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeProductViewInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product view identifier.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductViewOutput {
  /**
   * Summary information about the product.
   *
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * Information about the provisioning artifacts for the product.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The provisioned product identifier. You must provide the name or ID, but not both.
   *
   * If you do not provide a name or ID, or you provide both name and ID, an `InvalidParametersException` will occur.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the provisioned product. You must provide the name or ID, but not both.
   *
   * If you do not provide a name or ID, or you provide both name and ID, an `InvalidParametersException` will occur.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Information about a CloudWatch dashboard.
 *
 * @public
 */
export interface CloudWatchDashboard {
  /**
   * The name of the CloudWatch dashboard.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Information about a provisioned product.
 *
 * @public
 */
export interface ProvisionedProductDetail {
  /**
   * The user-friendly name of the provisioned product.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the provisioned product.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of provisioned product. The supported values are `CFN_STACK`, `CFN_STACKSET`, `TERRAFORM_OPEN_SOURCE`, `TERRAFORM_CLOUD`, and `EXTERNAL`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The identifier of the provisioned product.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the provisioned product.
   *
   * - `AVAILABLE` - Stable state, ready to perform any operation. The most recent operation succeeded and completed.
   * - `UNDER_CHANGE` - Transitive state. Operations performed might not have valid results. Wait for an `AVAILABLE` status before performing operations.
   * - `TAINTED` - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.
   * - `ERROR` - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.
   * - `PLAN_IN_PROGRESS` - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an `AVAILABLE` status before performing operations.
   *
   * @public
   */
  Status?: ProvisionedProductStatus | undefined;

  /**
   * The current status message of the provisioned product.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The record identifier of the last request performed on this provisioned product.
   *
   * @public
   */
  LastRecordId?: string | undefined;

  /**
   * The record identifier of the last request performed on this provisioned product of the following types:
   *
   * - ProvisionProduct
   * - UpdateProvisionedProduct
   * - ExecuteProvisionedProductPlan
   * - TerminateProvisionedProduct
   *
   * @public
   */
  LastProvisioningRecordId?: string | undefined;

  /**
   * The record identifier of the last successful request performed on this provisioned product of the following types:
   *
   * - ProvisionProduct
   * - UpdateProvisionedProduct
   * - ExecuteProvisionedProductPlan
   * - TerminateProvisionedProduct
   *
   * @public
   */
  LastSuccessfulProvisioningRecordId?: string | undefined;

  /**
   * The product identifier. For example, `prod-abcdzk7xy33qa`.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The ARN of the launch role associated with the provisioned product.
   *
   * @public
   */
  LaunchRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisionedProductOutput {
  /**
   * Information about the provisioned product.
   *
   * @public
   */
  ProvisionedProductDetail?: ProvisionedProductDetail | undefined;

  /**
   * Any CloudWatch dashboards that were created when provisioning the product.
   *
   * @public
   */
  CloudWatchDashboards?: CloudWatchDashboard[] | undefined;
}

/**
 * @public
 */
export interface DescribeProvisionedProductPlanInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The plan identifier.
   *
   * @public
   */
  PlanId: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * Information about a plan.
 *
 * @public
 */
export interface ProvisionedProductPlanDetails {
  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths.
   *
   * @public
   */
  PathId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The name of the plan.
   *
   * @public
   */
  PlanName?: string | undefined;

  /**
   * The plan identifier.
   *
   * @public
   */
  PlanId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * The user-friendly name of the provisioned product.
   *
   * @public
   */
  ProvisionProductName?: string | undefined;

  /**
   * The plan type.
   *
   * @public
   */
  PlanType?: ProvisionedProductPlanType | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: ProvisionedProductPlanStatus | undefined;

  /**
   * The UTC time stamp when the plan was last updated.
   *
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
   *
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * Parameters specified by the administrator that are required for provisioning the product.
   *
   * @public
   */
  ProvisioningParameters?: UpdateProvisioningParameter[] | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Information about a change to a resource attribute.
 *
 * @public
 */
export interface ResourceTargetDefinition {
  /**
   * The attribute to be changed.
   *
   * @public
   */
  Attribute?: ResourceAttribute | undefined;

  /**
   * If the attribute is `Properties`, the value is the name of the property. Otherwise, the value is null.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If the attribute is `Properties`, indicates whether a change to this property causes the resource to be re-created.
   *
   * @public
   */
  RequiresRecreation?: RequiresRecreation | undefined;
}

/**
 * Information about a change to a resource attribute.
 *
 * @public
 */
export interface ResourceChangeDetail {
  /**
   * Information about the resource attribute to be modified.
   *
   * @public
   */
  Target?: ResourceTargetDefinition | undefined;

  /**
   * For static evaluations, the value of the resource attribute will change and the new value is known. For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.
   *
   * @public
   */
  Evaluation?: EvaluationType | undefined;

  /**
   * The ID of the entity that caused the change.
   *
   * @public
   */
  CausingEntity?: string | undefined;
}

/**
 * Information about a resource change that will occur when a plan is executed.
 *
 * @public
 */
export interface ResourceChange {
  /**
   * The change action.
   *
   * @public
   */
  Action?: ChangeAction | undefined;

  /**
   * The ID of the resource, as defined in the CloudFormation template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * The ID of the resource, if it was already created.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * If the change type is `Modify`, indicates whether the existing resource is deleted and replaced with a new one.
   *
   * @public
   */
  Replacement?: Replacement | undefined;

  /**
   * The change scope.
   *
   * @public
   */
  Scope?: ResourceAttribute[] | undefined;

  /**
   * Information about the resource changes.
   *
   * @public
   */
  Details?: ResourceChangeDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeProvisionedProductPlanOutput {
  /**
   * Information about the plan.
   *
   * @public
   */
  ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails | undefined;

  /**
   * Information about the resource changes that will occur when the plan is executed.
   *
   * @public
   */
  ResourceChanges?: ResourceChange[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningArtifactInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The provisioning artifact name.
   *
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * The product name.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * Indicates whether a verbose level of detail is enabled.
   *
   * @public
   */
  Verbose?: boolean | undefined;

  /**
   * Indicates if the API call response does or does not include additional details about the provisioning parameters.
   *
   * @public
   */
  IncludeProvisioningArtifactParameters?: boolean | undefined;
}

/**
 * The constraints that the administrator has put on the parameter.
 *
 * @public
 */
export interface ParameterConstraints {
  /**
   * The values that the administrator has allowed for the parameter.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;

  /**
   * A regular expression that represents the patterns that allow for `String` types. The pattern must match the entire parameter value provided.
   *
   * @public
   */
  AllowedPattern?: string | undefined;

  /**
   * A string that explains a constraint when the constraint is violated. For example, without a constraint description, a parameter that has an allowed pattern of `[A-Za-z0-9]+` displays the following error message when the user specifies an invalid value:
   *
   * `Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+`
   *
   * By adding a constraint description, such as must only contain letters (uppercase and lowercase) and numbers, you can display the following customized error message:
   *
   * `Malformed input-Parameter MyParameter must only contain uppercase and lowercase letters and numbers.`
   *
   * @public
   */
  ConstraintDescription?: string | undefined;

  /**
   * An integer value that determines the largest number of characters you want to allow for `String` types.
   *
   * @public
   */
  MaxLength?: string | undefined;

  /**
   * An integer value that determines the smallest number of characters you want to allow for `String` types.
   *
   * @public
   */
  MinLength?: string | undefined;

  /**
   * A numeric value that determines the largest numeric value you want to allow for `Number` types.
   *
   * @public
   */
  MaxValue?: string | undefined;

  /**
   * A numeric value that determines the smallest numeric value you want to allow for `Number` types.
   *
   * @public
   */
  MinValue?: string | undefined;
}

/**
 * Information about a parameter used to provision a product.
 *
 * @public
 */
export interface ProvisioningArtifactParameter {
  /**
   * The parameter key.
   *
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * The default value.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The parameter type.
   *
   * @public
   */
  ParameterType?: string | undefined;

  /**
   * If this value is true, the value for this parameter is obfuscated from view when the parameter is retrieved. This parameter is used to hide sensitive information.
   *
   * @public
   */
  IsNoEcho?: boolean | undefined;

  /**
   * The description of the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Constraints that the administrator has put on a parameter.
   *
   * @public
   */
  ParameterConstraints?: ParameterConstraints | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningArtifactOutput {
  /**
   * Information about the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.
   *
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * The status of the current request.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * Information about the parameters used to provision the product.
   *
   * @public
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningParametersInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier. You must provide the product name or ID, but not both.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The name of the product. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The identifier of the provisioning artifact. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The name of the provisioning artifact. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths. You must provide the name or ID, but not both.
   *
   * @public
   */
  PathId?: string | undefined;

  /**
   * The name of the path. You must provide the name or ID, but not both.
   *
   * @public
   */
  PathName?: string | undefined;
}

/**
 * Summary information about a constraint.
 *
 * @public
 */
export interface ConstraintSummary {
  /**
   * The type of constraint.
   *
   * - `LAUNCH`
   * - `NOTIFICATION`
   * - STACKSET
   * - `TEMPLATE`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The description of the constraint.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Provisioning artifact output.
 *
 * @public
 */
export interface ProvisioningArtifactOutput {
  /**
   * The provisioning artifact output key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Description of the provisioning artifact output key.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The user-defined preferences that will be applied during product provisioning, unless overridden by `ProvisioningPreferences` or `UpdateProvisioningPreferences`.
 *
 * For more information on maximum concurrent accounts and failure tolerance, see [Stack set operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface ProvisioningArtifactPreferences {
  /**
   * One or more Amazon Web Services accounts where stack instances are deployed from the stack set. These accounts can be scoped in `ProvisioningPreferences$StackSetAccounts` and `UpdateProvisioningPreferences$StackSetAccounts`.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * @public
   */
  StackSetAccounts?: string[] | undefined;

  /**
   * One or more Amazon Web Services Regions where stack instances are deployed from the stack set. These Regions can be scoped in `ProvisioningPreferences$StackSetRegions` and `UpdateProvisioningPreferences$StackSetRegions`.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * @public
   */
  StackSetRegions?: string[] | undefined;
}

/**
 * Summary information about a TagOption.
 *
 * @public
 */
export interface TagOptionSummary {
  /**
   * The TagOption key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The TagOption value.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Additional information provided by the administrator.
 *
 * @public
 */
export interface UsageInstruction {
  /**
   * The usage instruction type for the value.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The usage instruction value for this type.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningParametersOutput {
  /**
   * Information about the parameters used to provision the product.
   *
   * @public
   */
  ProvisioningArtifactParameters?: ProvisioningArtifactParameter[] | undefined;

  /**
   * Information about the constraints used to provision the product.
   *
   * @public
   */
  ConstraintSummaries?: ConstraintSummary[] | undefined;

  /**
   * Any additional metadata specifically related to the provisioning of the product. For example, see the `Version` field of the CloudFormation template.
   *
   * @public
   */
  UsageInstructions?: UsageInstruction[] | undefined;

  /**
   * Information about the TagOptions associated with the resource.
   *
   * @public
   */
  TagOptions?: TagOptionSummary[] | undefined;

  /**
   * An object that contains information about preferences, such as Regions and accounts, for the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences | undefined;

  /**
   * The output of the provisioning artifact.
   *
   * @deprecated This property is deprecated and returns the Id and Description of the Provisioning Artifact. Use ProvisioningArtifactOutputKeys instead to get the Keys and Descriptions of the outputs.
   * @public
   */
  ProvisioningArtifactOutputs?: ProvisioningArtifactOutput[] | undefined;

  /**
   * A list of the keys and descriptions of the outputs. These outputs can be referenced from a provisioned product launched from this provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactOutputKeys?: ProvisioningArtifactOutput[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecordInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The record identifier of the provisioned product. This identifier is returned by the request operation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * The error code and description resulting from an operation.
 *
 * @public
 */
export interface RecordError {
  /**
   * The numeric value of the error.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The description of the error.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Information about a tag, which is a key-value pair.
 *
 * @public
 */
export interface RecordTag {
  /**
   * The key for this tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for this tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about a request operation.
 *
 * @public
 */
export interface RecordDetail {
  /**
   * The identifier of the record.
   *
   * @public
   */
  RecordId?: string | undefined;

  /**
   * The user-friendly name of the provisioned product.
   *
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * The status of the provisioned product.
   *
   * - `CREATED` - The request was created but the operation has not started.
   * - `IN_PROGRESS` - The requested operation is in progress.
   * - `IN_PROGRESS_IN_ERROR` - The provisioned product is under change but the requested operation failed and some remediation is occurring. For example, a rollback.
   * - `SUCCEEDED` - The requested operation has successfully completed.
   * - `FAILED` - The requested operation has unsuccessfully completed. Investigate using the error messages returned.
   *
   * @public
   */
  Status?: RecordStatus | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time when the record was last updated.
   *
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * The type of provisioned product. The supported values are `CFN_STACK`, `CFN_STACKSET`, `TERRAFORM_OPEN_SOURCE`, `TERRAFORM_CLOUD`, and `EXTERNAL`.
   *
   * @public
   */
  ProvisionedProductType?: string | undefined;

  /**
   * The record type.
   *
   * - `PROVISION_PRODUCT`
   * - `UPDATE_PROVISIONED_PRODUCT`
   * - `TERMINATE_PROVISIONED_PRODUCT`
   *
   * @public
   */
  RecordType?: string | undefined;

  /**
   * The identifier of the provisioned product.
   *
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The path identifier.
   *
   * @public
   */
  PathId?: string | undefined;

  /**
   * The errors that occurred.
   *
   * @public
   */
  RecordErrors?: RecordError[] | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  RecordTags?: RecordTag[] | undefined;

  /**
   * The ARN of the launch role associated with the provisioned product.
   *
   * @public
   */
  LaunchRoleArn?: string | undefined;
}

/**
 * The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
 *
 * @public
 */
export interface RecordOutput {
  /**
   * The output key.
   *
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * The output value.
   *
   * @public
   */
  OutputValue?: string | undefined;

  /**
   * The description of the output.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecordOutput {
  /**
   * Information about the product.
   *
   * @public
   */
  RecordDetail?: RecordDetail | undefined;

  /**
   * Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
   *
   * @public
   */
  RecordOutputs?: RecordOutput[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionInput {
  /**
   * The self-service action identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionOutput {
  /**
   * Detailed information about the self-service action.
   *
   * @public
   */
  ServiceActionDetail?: ServiceActionDetail | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionExecutionParametersInput {
  /**
   * The identifier of the provisioned product.
   *
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * The self-service action identifier.
   *
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.
 *
 * @public
 */
export interface ExecutionParameter {
  /**
   * The name of the execution parameter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The execution parameter type.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The default values for the execution parameter.
   *
   * @public
   */
  DefaultValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceActionExecutionParametersOutput {
  /**
   * The parameters of the self-service action.
   *
   * @public
   */
  ServiceActionParameters?: ExecutionParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagOptionInput {
  /**
   * The TagOption identifier.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagOptionOutput {
  /**
   * Information about the TagOption.
   *
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
   * The name of the budget you want to disassociate.
   *
   * @public
   */
  BudgetName: string | undefined;

  /**
   * The resource identifier you want to disassociate from. Either a portfolio-id or a product-id.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The ARN of the principal (user, role, or group). This field allows an ARN with no `accountID` with or without wildcard characters if `PrincipalType` is `IAM_PATTERN`.
   *
   * @public
   */
  PrincipalARN: string | undefined;

  /**
   * The supported value is `IAM` if you use a fully defined ARN, or `IAM_PATTERN` if you specify an `IAM` ARN with no AccountId, with or without wildcard characters.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The portfolio identifier.
   *
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
   * The product identifier. For example, `prod-abcdzk7xy33qa`.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`.
   *
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * The self-service action identifier. For example, `act-fs7abcd89wxyz`.
   *
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests from the same Amazon Web Services account use the same idempotency token, the same response is returned for each repeated request.
   *
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
   * The resource identifier.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The TagOption identifier.
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The plan identifier.
   *
   * @public
   */
  PlanId: string | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductPlanOutput {
  /**
   * Information about the result of provisioning the product.
   *
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductServiceActionInput {
  /**
   * The identifier of the provisioned product.
   *
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * The self-service action identifier. For example, `act-fs7abcd89wxyz`.
   *
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * An idempotency token that uniquely identifies the execute request.
   *
   * @public
   */
  ExecuteToken?: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * A map of all self-service action parameters and their values. If a provided parameter is of a special type, such as `TARGET`, the provided value will override the default value generated by Service Catalog. If the parameters field is not provided, no additional parameters are passed and default values will be used for any special parameters such as `TARGET`.
   *
   * @public
   */
  Parameters?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface ExecuteProvisionedProductServiceActionOutput {
  /**
   * An object containing detailed information about the result of provisioning the product.
   *
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
   * The status of the portfolio share feature.
   *
   * @public
   */
  AccessStatus?: AccessStatus | undefined;
}

/**
 * @public
 */
export interface GetProvisionedProductOutputsInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The identifier of the provisioned product that you want the outputs from.
   *
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * The name of the provisioned product that you want the outputs from.
   *
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * The list of keys that the API should return with their values. If none are provided, the API will return all outputs of the provisioned product.
   *
   * @public
   */
  OutputKeys?: string[] | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProvisionedProductOutputsOutput {
  /**
   * Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
   *
   * @public
   */
  Outputs?: RecordOutput[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportAsProvisionedProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * The user-friendly name of the provisioned product. The value must be unique for the Amazon Web Services account. The name cannot be updated after the product is provisioned.
   *
   * @public
   */
  ProvisionedProductName: string | undefined;

  /**
   * The unique identifier of the resource to be imported. It only currently supports CloudFormation stack IDs.
   *
   * @public
   */
  PhysicalId: string | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportAsProvisionedProductOutput {
  /**
   * Information about a request operation.
   *
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface ListAcceptedPortfolioSharesInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The type of shared portfolios to list. The default is to list imported portfolios.
   *
   * - `AWS_ORGANIZATIONS` - List portfolios accepted and shared via organizational sharing by the management account or delegated administrator of your organization.
   * - `AWS_SERVICECATALOG` - Deprecated type.
   * - `IMPORTED` - List imported portfolios that have been accepted and shared through account-to-account sharing.
   *
   * @public
   */
  PortfolioShareType?: PortfolioShareType | undefined;
}

/**
 * @public
 */
export interface ListAcceptedPortfolioSharesOutput {
  /**
   * Information about the portfolios.
   *
   * @public
   */
  PortfolioDetails?: PortfolioDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBudgetsForResourceInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The resource identifier.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBudgetsForResourceOutput {
  /**
   * Information about the associated budgets.
   *
   * @public
   */
  Budgets?: BudgetDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConstraintsForPortfolioInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConstraintsForPortfolioOutput {
  /**
   * Information about the constraints.
   *
   * @public
   */
  ConstraintDetails?: ConstraintDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchPathsInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * Summary information about a product path for a user.
 *
 * @public
 */
export interface LaunchPathSummary {
  /**
   * The identifier of the product path.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The constraints on the portfolio-product relationship.
   *
   * @public
   */
  ConstraintSummaries?: ConstraintSummary[] | undefined;

  /**
   * The tags associated with this product path.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the portfolio that contains the product.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchPathsOutput {
  /**
   * Information about the launch path.
   *
   * @public
   */
  LaunchPathSummaries?: LaunchPathSummary[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationPortfolioAccessInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier. For example, `port-2abcdext3y5fk`.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The organization node type that will be returned in the output.
   *
   * - `ORGANIZATION` - Organization that has access to the portfolio.
   * - `ORGANIZATIONAL_UNIT` - Organizational unit that has access to the portfolio within your organization.
   * - `ACCOUNT` - Account that has access to the portfolio within your organization.
   *
   * @public
   */
  OrganizationNodeType: OrganizationNodeType | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListOrganizationPortfolioAccessOutput {
  /**
   * Displays information about the organization nodes.
   *
   * @public
   */
  OrganizationNodes?: OrganizationNode[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortfolioAccessInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The ID of an organization node the portfolio is shared with. All children of this node with an inherited portfolio share will be returned.
   *
   * @public
   */
  OrganizationParentId?: string | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListPortfolioAccessOutput {
  /**
   * Information about the Amazon Web Services accounts with access to the portfolio.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosOutput {
  /**
   * Information about the portfolios.
   *
   * @public
   */
  PortfolioDetails?: PortfolioDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosForProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListPortfoliosForProductOutput {
  /**
   * Information about the portfolios.
   *
   * @public
   */
  PortfolioDetails?: PortfolioDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPrincipalsForPortfolioInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * Information about a principal.
 *
 * @public
 */
export interface Principal {
  /**
   * The ARN of the principal (user, role, or group). This field allows for an ARN with no `accountID`, with or without wildcard characters if the `PrincipalType` is an `IAM_PATTERN`.
   *
   * For more information, review [associate-principal-with-portfolio](https://docs.aws.amazon.com/cli/latest/reference/servicecatalog/associate-principal-with-portfolio.html#options) in the Amazon Web Services CLI Command Reference.
   *
   * @public
   */
  PrincipalARN?: string | undefined;

  /**
   * The principal type. The supported value is `IAM` if you use a fully defined ARN, or `IAM_PATTERN` if you use an ARN with no `accountID`, with or without wildcard characters.
   *
   * @public
   */
  PrincipalType?: PrincipalType | undefined;
}

/**
 * @public
 */
export interface ListPrincipalsForPortfolioOutput {
  /**
   * The `PrincipalARN`s and corresponding `PrincipalType`s associated with the portfolio.
   *
   * @public
   */
  Principals?: Principal[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedProductPlansInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The access level to use to obtain results. The default is `User`.
   *
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;
}

/**
 * Summary information about a plan.
 *
 * @public
 */
export interface ProvisionedProductPlanSummary {
  /**
   * The name of the plan.
   *
   * @public
   */
  PlanName?: string | undefined;

  /**
   * The plan identifier.
   *
   * @public
   */
  PlanId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProvisionProductId?: string | undefined;

  /**
   * The user-friendly name of the provisioned product.
   *
   * @public
   */
  ProvisionProductName?: string | undefined;

  /**
   * The plan type.
   *
   * @public
   */
  PlanType?: ProvisionedProductPlanType | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedProductPlansOutput {
  /**
   * Information about the plans.
   *
   * @public
   */
  ProvisionedProductPlans?: ProvisionedProductPlanSummary[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsOutput {
  /**
   * Information about the provisioning artifacts.
   *
   * @public
   */
  ProvisioningArtifactDetails?: ProvisioningArtifactDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsForServiceActionInput {
  /**
   * The self-service action identifier. For example, `act-fs7abcd89wxyz`.
   *
   * @public
   */
  ServiceActionId: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * An object that contains summary information about a product view and a provisioning artifact.
 *
 * @public
 */
export interface ProvisioningArtifactView {
  /**
   * Summary information about a product view.
   *
   * @public
   */
  ProductViewSummary?: ProductViewSummary | undefined;

  /**
   * Information about a provisioning artifact. A provisioning artifact is also known as a product version.
   *
   * @public
   */
  ProvisioningArtifact?: ProvisioningArtifact | undefined;
}

/**
 * @public
 */
export interface ListProvisioningArtifactsForServiceActionOutput {
  /**
   * An array of objects with information about product views and provisioning artifacts.
   *
   * @public
   */
  ProvisioningArtifactViews?: ProvisioningArtifactView[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * The search filter to use when listing history records.
 *
 * @public
 */
export interface ListRecordHistorySearchFilter {
  /**
   * The filter key.
   *
   * - `product` - Filter results based on the specified product identifier.
   * - `provisionedproduct` - Filter results based on the provisioned product identifier.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListRecordHistoryInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The access level to use to obtain results. The default is `User`.
   *
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;

  /**
   * The search filter to scope the results.
   *
   * @public
   */
  SearchFilter?: ListRecordHistorySearchFilter | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecordHistoryOutput {
  /**
   * The records, in reverse chronological order.
   *
   * @public
   */
  RecordDetails?: RecordDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesForTagOptionInput {
  /**
   * The TagOption identifier.
   *
   * @public
   */
  TagOptionId: string | undefined;

  /**
   * The resource type.
   *
   * - `Portfolio`
   * - `Product`
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * Information about a resource.
 *
 * @public
 */
export interface ResourceDetail {
  /**
   * The identifier of the resource.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the resource.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The creation time of the resource.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListResourcesForTagOptionOutput {
  /**
   * Information about the resources.
   *
   * @public
   */
  ResourceDetails?: ResourceDetail[] | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsOutput {
  /**
   * An object containing information about the service actions associated with the provisioning artifact.
   *
   * @public
   */
  ServiceActionSummaries?: ServiceActionSummary[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsForProvisioningArtifactInput {
  /**
   * The product identifier. For example, `prod-abcdzk7xy33qa`.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`.
   *
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceActionsForProvisioningArtifactOutput {
  /**
   * An object containing information about the self-service actions associated with the provisioning artifact.
   *
   * @public
   */
  ServiceActionSummaries?: ServiceActionSummary[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesForProvisionedProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The identifier of the provisioned product.
   *
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.
 *
 * @public
 */
export interface StackInstance {
  /**
   * The name of the Amazon Web Services account that the stack instance is associated with.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The name of the Amazon Web Services Region that the stack instance is associated with.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The status of the stack instance, in terms of its synchronization with its associated stack set.
   *
   * - `INOPERABLE`: A `DeleteStackInstances` operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further `UpdateStackSet` operations. You might need to perform a `DeleteStackInstances` operation, with `RetainStacks` set to true, to delete the stack instance, and then delete the stack manually.
   * - `OUTDATED`: The stack isn't currently up to date with the stack set because either the associated stack failed during a `CreateStackSet` or `UpdateStackSet` operation, or the stack was part of a `CreateStackSet` or `UpdateStackSet` operation that failed or was stopped before the stack was created or updated.
   * - `CURRENT`: The stack is currently up to date with the stack set.
   *
   * @public
   */
  StackInstanceStatus?: StackInstanceStatus | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesForProvisionedProductOutput {
  /**
   * List of stack instances.
   *
   * @public
   */
  StackInstances?: StackInstance[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * Filters to use when listing TagOptions.
 *
 * @public
 */
export interface ListTagOptionsFilters {
  /**
   * The TagOption key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The TagOption value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The active state.
   *
   * @public
   */
  Active?: boolean | undefined;
}

/**
 * @public
 */
export interface ListTagOptionsInput {
  /**
   * The search filters. If no search filters are specified, the output includes all TagOptions.
   *
   * @public
   */
  Filters?: ListTagOptionsFilters | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagOptionsOutput {
  /**
   * Information about the TagOptions.
   *
   * @public
   */
  TagOptionDetails?: TagOptionDetail[] | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * The unique key-value pair for a tag that identifies provisioned product resources.
 *
 * @public
 */
export interface UniqueTagResourceIdentifier {
  /**
   * A unique key that's attached to a resource.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * A unique value that's attached to a resource.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The ID for the provisioned product resources that are part of a resource group.
 *
 * @public
 */
export interface EngineWorkflowResourceIdentifier {
  /**
   * The unique key-value pair for a tag that identifies provisioned product resources.
   *
   * @public
   */
  UniqueTag?: UniqueTagResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface NotifyProvisionProductEngineWorkflowResultInput {
  /**
   * The encrypted contents of the provisioning engine execution payload that Service Catalog sends after the Terraform product provisioning workflow starts.
   *
   * @public
   */
  WorkflowToken: string | undefined;

  /**
   * The identifier of the record.
   *
   * @public
   */
  RecordId: string | undefined;

  /**
   * The status of the provisioning engine execution.
   *
   * @public
   */
  Status: EngineWorkflowStatus | undefined;

  /**
   * The reason why the provisioning engine execution failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The ID for the provisioned product resources that are part of a resource group.
   *
   * @public
   */
  ResourceIdentifier?: EngineWorkflowResourceIdentifier | undefined;

  /**
   * The output of the provisioning engine execution.
   *
   * @public
   */
  Outputs?: RecordOutput[] | undefined;

  /**
   * The idempotency token that identifies the provisioning engine execution.
   *
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
   * The encrypted contents of the terminate engine execution payload that Service Catalog sends after the Terraform product terminate workflow starts.
   *
   * @public
   */
  WorkflowToken: string | undefined;

  /**
   * The identifier of the record.
   *
   * @public
   */
  RecordId: string | undefined;

  /**
   * The status of the terminate engine execution.
   *
   * @public
   */
  Status: EngineWorkflowStatus | undefined;

  /**
   * The reason why the terminate engine execution failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The idempotency token that identifies the terminate engine execution.
   *
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
   * The encrypted contents of the update engine execution payload that Service Catalog sends after the Terraform product update workflow starts.
   *
   * @public
   */
  WorkflowToken: string | undefined;

  /**
   * The identifier of the record.
   *
   * @public
   */
  RecordId: string | undefined;

  /**
   * The status of the update engine execution.
   *
   * @public
   */
  Status: EngineWorkflowStatus | undefined;

  /**
   * The reason why the update engine execution failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The output of the update engine execution.
   *
   * @public
   */
  Outputs?: RecordOutput[] | undefined;

  /**
   * The idempotency token that identifies the update engine execution.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyUpdateProvisionedProductEngineWorkflowResultOutput {}

/**
 * Information about a parameter used to provision a product.
 *
 * @public
 */
export interface ProvisioningParameter {
  /**
   * The parameter key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The parameter value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type
 *
 * One or more Amazon Web Services accounts that will have access to the provisioned product.
 *
 * Applicable only to a `CFN_STACKSET` provisioned product type.
 *
 * The Amazon Web Services accounts specified should be within the list of accounts in the `STACKSET` constraint. To get the list of accounts in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
 *
 * If no values are specified, the default value is all accounts from the `STACKSET` constraint.
 *
 * @public
 */
export interface ProvisioningPreferences {
  /**
   * One or more Amazon Web Services accounts where the provisioned product will be available.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * The specified accounts should be within the list of accounts from the `STACKSET` constraint. To get the list of accounts in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
   *
   * If no values are specified, the default value is all acounts from the `STACKSET` constraint.
   *
   * @public
   */
  StackSetAccounts?: string[] | undefined;

  /**
   * One or more Amazon Web Services Regions where the provisioned product will be available.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * The specified Regions should be within the list of Regions from the `STACKSET` constraint. To get the list of Regions in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
   *
   * If no values are specified, the default value is all Regions from the `STACKSET` constraint.
   *
   * @public
   */
  StackSetRegions?: string[] | undefined;

  /**
   * The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage`, but not both.
   *
   * The default value is `0` if no value is specified.
   *
   * @public
   */
  StackSetFailureToleranceCount?: number | undefined;

  /**
   * The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.
   *
   * When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage`, but not both.
   *
   * @public
   */
  StackSetFailureTolerancePercentage?: number | undefined;

  /**
   * The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of `StackSetFailureToleranceCount`. `StackSetMaxConcurrentCount` is at most one more than the `StackSetFailureToleranceCount`.
   *
   * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage`, but not both.
   *
   * @public
   */
  StackSetMaxConcurrencyCount?: number | undefined;

  /**
   * The maximum percentage of accounts in which to perform this operation at one time.
   *
   * When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as `1` instead.
   *
   * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage`, but not both.
   *
   * @public
   */
  StackSetMaxConcurrencyPercentage?: number | undefined;
}

/**
 * @public
 */
export interface ProvisionProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The name of the product. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The identifier of the provisioning artifact. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The name of the provisioning artifact. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use ListLaunchPaths. You must provide the name or ID, but not both.
   *
   * @public
   */
  PathId?: string | undefined;

  /**
   * The name of the path. You must provide the name or ID, but not both.
   *
   * @public
   */
  PathName?: string | undefined;

  /**
   * A user-friendly name for the provisioned product. This value must be unique for the Amazon Web Services account and cannot be updated after the product is provisioned.
   *
   * @public
   */
  ProvisionedProductName: string | undefined;

  /**
   * Parameters specified by the administrator that are required for provisioning the product.
   *
   * @public
   */
  ProvisioningParameters?: ProvisioningParameter[] | undefined;

  /**
   * An object that contains information about the provisioning preferences for a stack set.
   *
   * @public
   */
  ProvisioningPreferences?: ProvisioningPreferences | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
   *
   * @public
   */
  NotificationArns?: string[] | undefined;

  /**
   * An idempotency token that uniquely identifies the provisioning request.
   *
   * @public
   */
  ProvisionToken?: string | undefined;
}

/**
 * @public
 */
export interface ProvisionProductOutput {
  /**
   * Information about the result of provisioning the product.
   *
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface RejectPortfolioShareInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The type of shared portfolios to reject. The default is to reject imported portfolios.
   *
   * - `AWS_ORGANIZATIONS` - Reject portfolios shared by the management account of your organization.
   * - `IMPORTED` - Reject imported portfolios.
   * - `AWS_SERVICECATALOG` - Not supported. (Throws ResourceNotFoundException.)
   *
   * For example, `aws servicecatalog reject-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS`
   *
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
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The access level to use to obtain results. The default is `User`.
   *
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * @public
 */
export interface ScanProvisionedProductsOutput {
  /**
   * Information about the provisioned products.
   *
   * @public
   */
  ProvisionedProducts?: ProvisionedProductDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchProductsInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The search filters. If no search filters are specified, the output includes all products to which the caller has access.
   *
   * @public
   */
  Filters?: Partial<Record<ProductViewFilterBy, string[]>> | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The sort field. If no value is specified, the results are not sorted.
   *
   * @public
   */
  SortBy?: ProductViewSortBy | undefined;

  /**
   * The sort order. If no value is specified, the results are not sorted.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.
 *
 * @public
 */
export interface ProductViewAggregationValue {
  /**
   * The value of the product view aggregation.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * An approximate count of the products that match the value.
   *
   * @public
   */
  ApproximateCount?: number | undefined;
}

/**
 * @public
 */
export interface SearchProductsOutput {
  /**
   * Information about the product views.
   *
   * @public
   */
  ProductViewSummaries?: ProductViewSummary[] | undefined;

  /**
   * The product view aggregations.
   *
   * @public
   */
  ProductViewAggregations?: Record<string, ProductViewAggregationValue[]> | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchProductsAsAdminInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  PortfolioId?: string | undefined;

  /**
   * The search filters. If no search filters are specified, the output includes all products to which the administrator has access.
   *
   * @public
   */
  Filters?: Partial<Record<ProductViewFilterBy, string[]>> | undefined;

  /**
   * The sort field. If no value is specified, the results are not sorted.
   *
   * @public
   */
  SortBy?: ProductViewSortBy | undefined;

  /**
   * The sort order. If no value is specified, the results are not sorted.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * Access level of the source of the product.
   *
   * @public
   */
  ProductSource?: ProductSource | undefined;
}

/**
 * @public
 */
export interface SearchProductsAsAdminOutput {
  /**
   * Information about the product views.
   *
   * @public
   */
  ProductViewDetails?: ProductViewDetail[] | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchProvisionedProductsInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The access level to use to obtain results. The default is `Account`.
   *
   * @public
   */
  AccessLevelFilter?: AccessLevelFilter | undefined;

  /**
   * The search filters.
   *
   * When the key is `SearchQuery`, the searchable fields are `arn`, `createdTime`, `id`, `lastRecordId`, `idempotencyToken`, `name`, `physicalId`, `productId`, `provisioningArtifactId`, `type`, `status`, `tags`, `userArn`, `userArnSession`, `lastProvisioningRecordId`, `lastSuccessfulProvisioningRecordId`, `productName`, and `provisioningArtifactName`.
   *
   * Example: `"SearchQuery":["status:AVAILABLE"]`
   *
   * @public
   */
  Filters?: Partial<Record<ProvisionedProductViewFilterBy, string[]>> | undefined;

  /**
   * The sort field. If no value is specified, the results are not sorted. The valid values are `arn`, `id`, `name`, and `lastRecordId`.
   *
   * @public
   */
  SortBy?: string | undefined;

  /**
   * The sort order. If no value is specified, the results are not sorted.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The page token for the next set of results. To retrieve the first set of results, use null.
   *
   * @public
   */
  PageToken?: string | undefined;
}

/**
 * Information about a provisioned product.
 *
 * @public
 */
export interface ProvisionedProductAttribute {
  /**
   * The user-friendly name of the provisioned product.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the provisioned product.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of provisioned product. The supported values are `CFN_STACK`, `CFN_STACKSET`, `TERRAFORM_OPEN_SOURCE`, `TERRAFORM_CLOUD`, and `EXTERNAL`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The identifier of the provisioned product.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the provisioned product.
   *
   * - `AVAILABLE` - Stable state, ready to perform any operation. The most recent operation succeeded and completed.
   * - `UNDER_CHANGE` - Transitive state. Operations performed might not have valid results. Wait for an `AVAILABLE` status before performing operations.
   * - `TAINTED` - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.
   * - `ERROR` - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.
   * - `PLAN_IN_PROGRESS` - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an `AVAILABLE` status before performing operations.
   *
   * @public
   */
  Status?: ProvisionedProductStatus | undefined;

  /**
   * The current status message of the provisioned product.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The UTC time stamp of the creation time.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The record identifier of the last request performed on this provisioned product.
   *
   * @public
   */
  LastRecordId?: string | undefined;

  /**
   * The record identifier of the last request performed on this provisioned product of the following types:
   *
   * - ProvisionProduct
   * - UpdateProvisionedProduct
   * - ExecuteProvisionedProductPlan
   * - TerminateProvisionedProduct
   *
   * @public
   */
  LastProvisioningRecordId?: string | undefined;

  /**
   * The record identifier of the last successful request performed on this provisioned product of the following types:
   *
   * - ProvisionProduct
   * - UpdateProvisionedProduct
   * - ExecuteProvisionedProductPlan
   * - TerminateProvisionedProduct
   *
   * @public
   */
  LastSuccessfulProvisioningRecordId?: string | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.
   *
   * @public
   */
  PhysicalId?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The name of the product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The name of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user.
   *
   * @public
   */
  UserArn?: string | undefined;

  /**
   * The ARN of the user in the session. This ARN might contain a session ID.
   *
   * @public
   */
  UserArnSession?: string | undefined;
}

/**
 * @public
 */
export interface SearchProvisionedProductsOutput {
  /**
   * Information about the provisioned products.
   *
   * @public
   */
  ProvisionedProducts?: ProvisionedProductAttribute[] | undefined;

  /**
   * The number of provisioned products found.
   *
   * @public
   */
  TotalResultsCount?: number | undefined;

  /**
   * The page token to use to retrieve the next set of results. If there are no additional results, this value is null.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface TerminateProvisionedProductInput {
  /**
   * The name of the provisioned product. You cannot specify both `ProvisionedProductName` and `ProvisionedProductId`.
   *
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * The identifier of the provisioned product. You cannot specify both `ProvisionedProductName` and `ProvisionedProductId`.
   *
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * An idempotency token that uniquely identifies the termination request. This token is only valid during the termination process. After the provisioned product is terminated, subsequent requests to terminate the same provisioned product always return **ResourceNotFound**.
   *
   * @public
   */
  TerminateToken?: string | undefined;

  /**
   * If set to true, Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources.
   *
   * @public
   */
  IgnoreErrors?: boolean | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * When this boolean parameter is set to true, the `TerminateProvisionedProduct` API deletes the Service Catalog provisioned product. However, it does not remove the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is false.
   *
   * @public
   */
  RetainPhysicalResources?: boolean | undefined;
}

/**
 * @public
 */
export interface TerminateProvisionedProductOutput {
  /**
   * Information about the result of this request.
   *
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface UpdateConstraintInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The identifier of the constraint.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The updated description of the constraint.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:
   *
   * - **LAUNCH**
   *
   *   You are required to specify either the `RoleArn` or the `LocalRoleName` but can't use both.
   *
   *   Specify the `RoleArn` property as follows:
   *
   *   `\{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"\}`
   *
   *   Specify the `LocalRoleName` property as follows:
   *
   *   `\{"LocalRoleName": "SCBasicLaunchRole"\}`
   *
   *   If you specify the `LocalRoleName` property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account.
   *
   *   > **Note:** The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.
   *
   *   You cannot have both a `LAUNCH` and a `STACKSET` constraint.
   *
   *   You also cannot have more than one `LAUNCH` constraint on a product and portfolio.
   *
   * - **NOTIFICATION**
   *
   *   Specify the `NotificationArns` property as follows:
   *
   *   `\{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]\}`
   *
   * - **RESOURCE_UPDATE**
   *
   *   Specify the `TagUpdatesOnProvisionedProduct` property as follows:
   *
   *   `\{"Version":"2.0","Properties":\{"TagUpdateOnProvisionedProduct":"String"\}\}`
   *
   *   The `TagUpdatesOnProvisionedProduct` property accepts a string value of `ALLOWED` or `NOT_ALLOWED`.
   *
   * - **STACKSET**
   *
   *   Specify the `Parameters` property as follows:
   *
   *   `\{"Version": "String", "Properties": \{"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"\}\}`
   *
   *   You cannot have both a `LAUNCH` and a `STACKSET` constraint.
   *
   *   You also cannot have more than one `STACKSET` constraint on a product and portfolio.
   *
   *   Products with a `STACKSET` constraint will launch an CloudFormation stack set.
   *
   * - **TEMPLATE**
   *
   *   Specify the `Rules` property. For more information, see [Template Constraint Rules](http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html).
   *
   * @public
   */
  Parameters?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConstraintOutput {
  /**
   * Information about the constraint.
   *
   * @public
   */
  ConstraintDetail?: ConstraintDetail | undefined;

  /**
   * The constraint parameters.
   *
   * @public
   */
  ConstraintParameters?: string | undefined;

  /**
   * The status of the current request.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The portfolio identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name to use for display purposes.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The updated description of the portfolio.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated name of the portfolio provider.
   *
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * The tags to add.
   *
   * @public
   */
  AddTags?: Tag[] | undefined;

  /**
   * The tags to remove.
   *
   * @public
   */
  RemoveTags?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioOutput {
  /**
   * Information about the portfolio.
   *
   * @public
   */
  PortfolioDetail?: PortfolioDetail | undefined;

  /**
   * Information about the tags associated with the portfolio.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioShareInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The unique identifier of the portfolio for which the share will be updated.
   *
   * @public
   */
  PortfolioId: string | undefined;

  /**
   * The Amazon Web Services account Id of the recipient account. This field is required when updating an external account to account type share.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Information about the organization node.
   *
   * @public
   */
  OrganizationNode?: OrganizationNode | undefined;

  /**
   * Enables or disables `TagOptions` sharing for the portfolio share. If this field is not provided, the current state of TagOptions sharing on the portfolio share will not be modified.
   *
   * @public
   */
  ShareTagOptions?: boolean | undefined;

  /**
   * A flag to enables or disables `Principals` sharing in the portfolio. If this field is not provided, the current state of the `Principals` sharing on the portfolio share will not be modified.
   *
   * @public
   */
  SharePrincipals?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePortfolioShareOutput {
  /**
   * The token that tracks the status of the `UpdatePortfolioShare` operation for external account to account or organizational type sharing.
   *
   * @public
   */
  PortfolioShareToken?: string | undefined;

  /**
   * The status of `UpdatePortfolioShare` operation. You can also obtain the operation status using `DescribePortfolioShareStatus` API.
   *
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The updated product name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated owner of the product.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The updated description of the product.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated distributor of the product.
   *
   * @public
   */
  Distributor?: string | undefined;

  /**
   * The updated support description for the product.
   *
   * @public
   */
  SupportDescription?: string | undefined;

  /**
   * The updated support email for the product.
   *
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * The updated support URL for the product.
   *
   * @public
   */
  SupportUrl?: string | undefined;

  /**
   * The tags to add to the product.
   *
   * @public
   */
  AddTags?: Tag[] | undefined;

  /**
   * The tags to remove from the product.
   *
   * @public
   */
  RemoveTags?: string[] | undefined;

  /**
   * Specifies connection details for the updated product and syncs the product to the connection source artifact. This automatically manages the product's artifacts based on changes to the source. The `SourceConnection` parameter consists of the following sub-fields.
   *
   * - `Type`
   * - `ConnectionParamters`
   *
   * @public
   */
  SourceConnection?: SourceConnection | undefined;
}

/**
 * @public
 */
export interface UpdateProductOutput {
  /**
   * Information about the product view.
   *
   * @public
   */
  ProductViewDetail?: ProductViewDetail | undefined;

  /**
   * Information about the tags associated with the product.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
 *
 * @public
 */
export interface UpdateProvisioningPreferences {
  /**
   * One or more Amazon Web Services accounts that will have access to the provisioned product.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * The Amazon Web Services accounts specified should be within the list of accounts in the `STACKSET` constraint. To get the list of accounts in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
   *
   * If no values are specified, the default value is all accounts from the `STACKSET` constraint.
   *
   * @public
   */
  StackSetAccounts?: string[] | undefined;

  /**
   * One or more Amazon Web Services Regions where the provisioned product will be available.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * The specified Regions should be within the list of Regions from the `STACKSET` constraint. To get the list of Regions in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
   *
   * If no values are specified, the default value is all Regions from the `STACKSET` constraint.
   *
   * @public
   */
  StackSetRegions?: string[] | undefined;

  /**
   * The number of accounts, per Region, for which this operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage`, but not both.
   *
   * The default value is `0` if no value is specified.
   *
   * @public
   */
  StackSetFailureToleranceCount?: number | undefined;

  /**
   * The percentage of accounts, per Region, for which this stack operation can fail before Service Catalog stops the operation in that Region. If the operation is stopped in a Region, Service Catalog doesn't attempt the operation in any subsequent Regions.
   *
   * When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage`, but not both.
   *
   * @public
   */
  StackSetFailureTolerancePercentage?: number | undefined;

  /**
   * The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of `StackSetFailureToleranceCount`. `StackSetMaxConcurrentCount` is at most one more than the `StackSetFailureToleranceCount`.
   *
   * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage`, but not both.
   *
   * @public
   */
  StackSetMaxConcurrencyCount?: number | undefined;

  /**
   * The maximum percentage of accounts in which to perform this operation at one time.
   *
   * When calculating the number of accounts based on the specified percentage, Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, Service Catalog sets the number as `1` instead.
   *
   * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage`, but not both.
   *
   * @public
   */
  StackSetMaxConcurrencyPercentage?: number | undefined;

  /**
   * Determines what action Service Catalog performs to a stack set or a stack instance represented by the provisioned product. The default value is `UPDATE` if nothing is specified.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * - **CREATE**
   *
   *   Creates a new stack instance in the stack set represented by the provisioned product. In this case, only new stack instances are created based on accounts and Regions; if new ProductId or ProvisioningArtifactID are passed, they will be ignored.
   *
   * - **UPDATE**
   *
   *   Updates the stack set represented by the provisioned product and also its stack instances.
   *
   * - **DELETE**
   *
   *   Deletes a stack instance in the stack set represented by the provisioned product.
   *
   * @public
   */
  StackSetOperationType?: StackSetOperationType | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedProductInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The name of the provisioned product. You cannot specify both `ProvisionedProductName` and `ProvisionedProductId`.
   *
   * @public
   */
  ProvisionedProductName?: string | undefined;

  /**
   * The identifier of the provisioned product. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * The identifier of the product. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The name of the product. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The name of the provisioning artifact. You must provide the name or ID, but not both.
   *
   * @public
   */
  ProvisioningArtifactName?: string | undefined;

  /**
   * The path identifier. This value is optional if the product has a default path, and required if the product has more than one path. You must provide the name or ID, but not both.
   *
   * @public
   */
  PathId?: string | undefined;

  /**
   * The name of the path. You must provide the name or ID, but not both.
   *
   * @public
   */
  PathName?: string | undefined;

  /**
   * The new parameters.
   *
   * @public
   */
  ProvisioningParameters?: UpdateProvisioningParameter[] | undefined;

  /**
   * An object that contains information about the provisioning preferences for a stack set.
   *
   * @public
   */
  ProvisioningPreferences?: UpdateProvisioningPreferences | undefined;

  /**
   * One or more tags. Requires the product to have `RESOURCE_UPDATE` constraint with `TagUpdatesOnProvisionedProduct` set to `ALLOWED` to allow tag updates.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The idempotency token that uniquely identifies the provisioning update request.
   *
   * @public
   */
  UpdateToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedProductOutput {
  /**
   * Information about the result of the request.
   *
   * @public
   */
  RecordDetail?: RecordDetail | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedProductPropertiesInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The identifier of the provisioned product.
   *
   * @public
   */
  ProvisionedProductId: string | undefined;

  /**
   * A map that contains the provisioned product properties to be updated.
   *
   * The `LAUNCH_ROLE` key accepts role ARNs. This key allows an administrator to call `UpdateProvisionedProductProperties` to update the launch role that is associated with a provisioned product. This role is used when an end user calls a provisioning operation such as `UpdateProvisionedProduct`, `TerminateProvisionedProduct`, or `ExecuteProvisionedProductServiceAction`. Only a role ARN is valid. A user ARN is invalid.
   *
   * The `OWNER` key accepts user ARNs, IAM role ARNs, and STS assumed-role ARNs. The owner is the user that has permission to see, update, terminate, and execute service actions in the provisioned product.
   *
   * The administrator can change the owner of a provisioned product to another IAM or STS entity within the same account. Both end user owners and administrators can see ownership history of the provisioned product using the `ListRecordHistory` API. The new owner can describe all past records for the provisioned product using the `DescribeRecord` API. The previous owner can no longer use `DescribeRecord`, but can still see the product's history from when he was an owner using `ListRecordHistory`.
   *
   * If a provisioned product ownership is assigned to an end user, they can see and perform any action through the API or Service Catalog console such as update, terminate, and execute service actions. If an end user provisions a product and the owner is updated to someone else, they will no longer be able to see or perform any actions through API or the Service Catalog console on that provisioned product.
   *
   * @public
   */
  ProvisionedProductProperties: Partial<Record<PropertyKey, string>> | undefined;

  /**
   * The idempotency token that uniquely identifies the provisioning product update request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedProductPropertiesOutput {
  /**
   * The provisioned product identifier.
   *
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * A map that contains the properties updated.
   *
   * @public
   */
  ProvisionedProductProperties?: Partial<Record<PropertyKey, string>> | undefined;

  /**
   * The identifier of the record.
   *
   * @public
   */
  RecordId?: string | undefined;

  /**
   * The status of the request.
   *
   * @public
   */
  Status?: RecordStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProvisioningArtifactInput {
  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;

  /**
   * The product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId: string | undefined;

  /**
   * The updated name of the provisioning artifact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The updated description of the provisioning artifact.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the product version is active.
   *
   * Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact.
   *
   * @public
   */
  Active?: boolean | undefined;

  /**
   * Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.
   *
   * The `DEFAULT` value indicates that the product version is active.
   *
   * The administrator can set the guidance to `DEPRECATED` to inform users that the product version is deprecated. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version.
   *
   * @public
   */
  Guidance?: ProvisioningArtifactGuidance | undefined;
}

/**
 * @public
 */
export interface UpdateProvisioningArtifactOutput {
  /**
   * Information about the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail | undefined;

  /**
   * The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.
   *
   * @public
   */
  Info?: Record<string, string> | undefined;

  /**
   * The status of the current request.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface UpdateServiceActionInput {
  /**
   * The self-service action identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The self-service action name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A map that defines the self-service action.
   *
   * @public
   */
  Definition?: Partial<Record<ServiceActionDefinitionKey, string>> | undefined;

  /**
   * The self-service action description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The language code.
   *
   * - `jp` - Japanese
   * - `zh` - Chinese
   *
   * @public
   */
  AcceptLanguage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateServiceActionOutput {
  /**
   * Detailed information about the self-service action.
   *
   * @public
   */
  ServiceActionDetail?: ServiceActionDetail | undefined;
}

/**
 * @public
 */
export interface UpdateTagOptionInput {
  /**
   * The TagOption identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The updated value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The updated active state.
   *
   * @public
   */
  Active?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTagOptionOutput {
  /**
   * Information about the TagOption.
   *
   * @public
   */
  TagOptionDetail?: TagOptionDetail | undefined;
}
