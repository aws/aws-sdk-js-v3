import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum PortfolioShareType {
  AWS_ORGANIZATIONS = "AWS_ORGANIZATIONS",
  AWS_SERVICECATALOG = "AWS_SERVICECATALOG",
  IMPORTED = "IMPORTED",
}

export interface AcceptPortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace AcceptPortfolioShareInput {
  export const filterSensitiveLog = (obj: AcceptPortfolioShareInput): any => ({
    ...obj,
  });
}

export interface AcceptPortfolioShareOutput {}

export namespace AcceptPortfolioShareOutput {
  export const filterSensitiveLog = (obj: AcceptPortfolioShareOutput): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters provided to the operation are not valid.</p>
 */
export interface InvalidParametersException extends __SmithyException, $MetadataBearer {
  name: "InvalidParametersException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParametersException {
  export const filterSensitiveLog = (obj: InvalidParametersException): any => ({
    ...obj,
  });
}

/**
 * <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export enum AccessLevelFilterKey {
  ACCOUNT = "Account",
  ROLE = "Role",
  USER = "User",
}

/**
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

export namespace AccessLevelFilter {
  export const filterSensitiveLog = (obj: AccessLevelFilter): any => ({
    ...obj,
  });
}

export enum AccessStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  UNDER_CHANGE = "UNDER_CHANGE",
}

/**
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

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

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

export namespace AssociateBudgetWithResourceInput {
  export const filterSensitiveLog = (obj: AssociateBudgetWithResourceInput): any => ({
    ...obj,
  });
}

export interface AssociateBudgetWithResourceOutput {}

export namespace AssociateBudgetWithResourceOutput {
  export const filterSensitiveLog = (obj: AssociateBudgetWithResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is a duplicate.</p>
 */
export interface DuplicateResourceException extends __SmithyException, $MetadataBearer {
  name: "DuplicateResourceException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateResourceException {
  export const filterSensitiveLog = (obj: DuplicateResourceException): any => ({
    ...obj,
  });
}

export enum PrincipalType {
  IAM = "IAM",
}

export interface AssociatePrincipalWithPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>The ARN of the principal (IAM user, role, or group).</p>
   */
  PrincipalARN: string | undefined;

  /**
   * <p>The principal type. The supported value is <code>IAM</code>.</p>
   */
  PrincipalType: PrincipalType | string | undefined;
}

export namespace AssociatePrincipalWithPortfolioInput {
  export const filterSensitiveLog = (obj: AssociatePrincipalWithPortfolioInput): any => ({
    ...obj,
  });
}

export interface AssociatePrincipalWithPortfolioOutput {}

export namespace AssociatePrincipalWithPortfolioOutput {
  export const filterSensitiveLog = (obj: AssociatePrincipalWithPortfolioOutput): any => ({
    ...obj,
  });
}

export interface AssociateProductWithPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace AssociateProductWithPortfolioInput {
  export const filterSensitiveLog = (obj: AssociateProductWithPortfolioInput): any => ({
    ...obj,
  });
}

export interface AssociateProductWithPortfolioOutput {}

export namespace AssociateProductWithPortfolioOutput {
  export const filterSensitiveLog = (obj: AssociateProductWithPortfolioOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace AssociateServiceActionWithProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: AssociateServiceActionWithProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export interface AssociateServiceActionWithProvisioningArtifactOutput {}

export namespace AssociateServiceActionWithProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: AssociateServiceActionWithProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

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

export namespace AssociateTagOptionWithResourceInput {
  export const filterSensitiveLog = (obj: AssociateTagOptionWithResourceInput): any => ({
    ...obj,
  });
}

export interface AssociateTagOptionWithResourceOutput {}

export namespace AssociateTagOptionWithResourceOutput {
  export const filterSensitiveLog = (obj: AssociateTagOptionWithResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 */
export interface InvalidStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidStateException {
  export const filterSensitiveLog = (obj: InvalidStateException): any => ({
    ...obj,
  });
}

/**
 * <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Please use the AWS console to perform the migration
 *          process before retrying the operation.</p>
 */
export interface TagOptionNotMigratedException extends __SmithyException, $MetadataBearer {
  name: "TagOptionNotMigratedException";
  $fault: "client";
  Message?: string;
}

export namespace TagOptionNotMigratedException {
  export const filterSensitiveLog = (obj: TagOptionNotMigratedException): any => ({
    ...obj,
  });
}

/**
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

export namespace ServiceActionAssociation {
  export const filterSensitiveLog = (obj: ServiceActionAssociation): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace BatchAssociateServiceActionWithProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: BatchAssociateServiceActionWithProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export enum ServiceActionAssociationErrorCode {
  DuplicateResourceException = "DUPLICATE_RESOURCE",
  InternalFailure = "INTERNAL_FAILURE",
  LimitExceededException = "LIMIT_EXCEEDED",
  ResourceNotFoundException = "RESOURCE_NOT_FOUND",
  ThrottlingException = "THROTTLING",
}

/**
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

export namespace FailedServiceActionAssociation {
  export const filterSensitiveLog = (obj: FailedServiceActionAssociation): any => ({
    ...obj,
  });
}

export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[];
}

export namespace BatchAssociateServiceActionWithProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: BatchAssociateServiceActionWithProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace BatchDisassociateServiceActionFromProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: BatchDisassociateServiceActionFromProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   */
  FailedServiceActionAssociations?: FailedServiceActionAssociation[];
}

export namespace BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: BatchDisassociateServiceActionFromProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

export enum CopyOption {
  CopyTags = "CopyTags",
}

export enum ProvisioningArtifactPropertyName {
  Id = "Id",
}

export interface CopyProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
  SourceProvisioningArtifactIdentifiers?: { [key: string]: string }[];

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

export namespace CopyProductInput {
  export const filterSensitiveLog = (obj: CopyProductInput): any => ({
    ...obj,
  });
}

export interface CopyProductOutput {
  /**
   * <p>The token to use to track the progress of the operation.</p>
   */
  CopyProductToken?: string;
}

export namespace CopyProductOutput {
  export const filterSensitiveLog = (obj: CopyProductOutput): any => ({
    ...obj,
  });
}

export interface CreateConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   *                   <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code>
   *                </p>
   *                <p>Specify the <code>LocalRoleName</code> property as follows:</p>
   *                <p>
   *                   <code>{"LocalRoleName": "SCBasicLaunchRole"}</code>
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
   *                   <code>{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}</code>
   *                </p>
   *             </dd>
   *             <dt>RESOURCE_UPDATE</dt>
   *             <dd>
   *                <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p>
   *                <p>
   *                   <code>{"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}</code>
   *                </p>
   *                <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p>
   *             </dd>
   *             <dt>STACKSET</dt>
   *             <dd>
   *                <p>Specify the <code>Parameters</code> property as follows:</p>
   *                <p>
   *                   <code>{"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}</code>
   *                </p>
   *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
   *                <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p>
   *                <p>Products with a <code>STACKSET</code> constraint will launch an AWS CloudFormation stack set.</p>
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

export namespace CreateConstraintInput {
  export const filterSensitiveLog = (obj: CreateConstraintInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ConstraintDetail {
  export const filterSensitiveLog = (obj: ConstraintDetail): any => ({
    ...obj,
  });
}

export enum Status {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  FAILED = "FAILED",
}

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

export namespace CreateConstraintOutput {
  export const filterSensitiveLog = (obj: CreateConstraintOutput): any => ({
    ...obj,
  });
}

export interface CreatePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace CreatePortfolioInput {
  export const filterSensitiveLog = (obj: CreatePortfolioInput): any => ({
    ...obj,
  });
}

/**
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

export namespace PortfolioDetail {
  export const filterSensitiveLog = (obj: PortfolioDetail): any => ({
    ...obj,
  });
}

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

export namespace CreatePortfolioOutput {
  export const filterSensitiveLog = (obj: CreatePortfolioOutput): any => ({
    ...obj,
  });
}

export enum OrganizationNodeType {
  ACCOUNT = "ACCOUNT",
  ORGANIZATION = "ORGANIZATION",
  ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT",
}

/**
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

export namespace OrganizationNode {
  export const filterSensitiveLog = (obj: OrganizationNode): any => ({
    ...obj,
  });
}

export interface CreatePortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>The AWS account ID. For example, <code>123456789012</code>.</p>
   */
  AccountId?: string;

  /**
   * <p>The organization node to whom you are going to share. If <code>OrganizationNode</code>
   *          is passed in, <code>PortfolioShare</code> will be created for the node an
   *          ListOrganizationPortfolioAccessd its children (when applies), and a
   *             <code>PortfolioShareToken</code> will be returned in the output in order for the
   *          administrator to monitor the status of the <code>PortfolioShare</code> creation
   *          process.</p>
   */
  OrganizationNode?: OrganizationNode;
}

export namespace CreatePortfolioShareInput {
  export const filterSensitiveLog = (obj: CreatePortfolioShareInput): any => ({
    ...obj,
  });
}

export interface CreatePortfolioShareOutput {
  /**
   * <p>The portfolio shares a unique identifier that only returns if the portfolio is shared to an organization node.</p>
   */
  PortfolioShareToken?: string;
}

export namespace CreatePortfolioShareOutput {
  export const filterSensitiveLog = (obj: CreatePortfolioShareOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The operation is not supported.</p>
 */
export interface OperationNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotSupportedException";
  $fault: "client";
  Message?: string;
}

export namespace OperationNotSupportedException {
  export const filterSensitiveLog = (obj: OperationNotSupportedException): any => ({
    ...obj,
  });
}

export enum ProductType {
  CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE",
  MARKETPLACE = "MARKETPLACE",
}

export enum ProvisioningArtifactType {
  CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE",
  MARKETPLACE_AMI = "MARKETPLACE_AMI",
  MARKETPLACE_CAR = "MARKETPLACE_CAR",
}

/**
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
   * <p>The URL of the CloudFormation template in Amazon S3. Specify the URL in JSON format as follows:</p>
   *          <p>
   *             <code>"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."</code>
   *          </p>
   */
  Info: { [key: string]: string } | undefined;

  /**
   * <p>The type of provisioning artifact.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p>
   *             </li>
   *          </ul>
   */
  Type?: ProvisioningArtifactType | string;

  /**
   * <p>If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.</p>
   */
  DisableTemplateValidation?: boolean;
}

export namespace ProvisioningArtifactProperties {
  export const filterSensitiveLog = (obj: ProvisioningArtifactProperties): any => ({
    ...obj,
  });
}

export interface CreateProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>The configuration of the provisioning artifact. The <code>info</code> field accepts <code>ImportFromPhysicalID</code>.</p>
   */
  ProvisioningArtifactParameters: ProvisioningArtifactProperties | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

export namespace CreateProductInput {
  export const filterSensitiveLog = (obj: CreateProductInput): any => ({
    ...obj,
  });
}

/**
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
   *          value. If this value is <code>MARKETPLACE</code>, the product was created by AWS
   *          Marketplace.</p>
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

export namespace ProductViewSummary {
  export const filterSensitiveLog = (obj: ProductViewSummary): any => ({
    ...obj,
  });
}

/**
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
}

export namespace ProductViewDetail {
  export const filterSensitiveLog = (obj: ProductViewDetail): any => ({
    ...obj,
  });
}

export enum ProvisioningArtifactGuidance {
  DEFAULT = "DEFAULT",
  DEPRECATED = "DEPRECATED",
}

/**
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
   *                   <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p>
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
}

export namespace ProvisioningArtifactDetail {
  export const filterSensitiveLog = (obj: ProvisioningArtifactDetail): any => ({
    ...obj,
  });
}

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

export namespace CreateProductOutput {
  export const filterSensitiveLog = (obj: CreateProductOutput): any => ({
    ...obj,
  });
}

export enum ProvisionedProductPlanType {
  CLOUDFORMATION = "CLOUDFORMATION",
}

/**
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

export namespace UpdateProvisioningParameter {
  export const filterSensitiveLog = (obj: UpdateProvisioningParameter): any => ({
    ...obj,
  });
}

export interface CreateProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   *          unique for the AWS account and cannot be updated after the product is provisioned.</p>
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

export namespace CreateProvisionedProductPlanInput {
  export const filterSensitiveLog = (obj: CreateProvisionedProductPlanInput): any => ({
    ...obj,
  });
}

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

export namespace CreateProvisionedProductPlanOutput {
  export const filterSensitiveLog = (obj: CreateProvisionedProductPlanOutput): any => ({
    ...obj,
  });
}

export interface CreateProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>The configuration for the provisioning artifact. The <code>info</code> field accepts <code>ImportFromPhysicalID</code>.
   *       </p>
   */
  Parameters: ProvisioningArtifactProperties | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;
}

export namespace CreateProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: CreateProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export interface CreateProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3, in JSON format.</p>
   */
  Info?: { [key: string]: string };

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
}

export namespace CreateProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: CreateProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

export enum ServiceActionDefinitionKey {
  AssumeRole = "AssumeRole",
  Name = "Name",
  Parameters = "Parameters",
  Version = "Version",
}

export enum ServiceActionDefinitionType {
  SsmAutomation = "SSM_AUTOMATION",
}

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
   *                <p>The name of the AWS Systems Manager document (SSM document). For example, <code>AWS-RestartEC2Instance</code>.</p>
   *                <p>If you are using a shared SSM document, you must provide the ARN instead of the name.</p>
   *             </dd>
   *             <dt>Version</dt>
   *             <dd>
   *                <p>The AWS Systems Manager automation document version. For example, <code>"Version": "1"</code>
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
   *                <p>For example: <code>[{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}]</code> or <code>[{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"}]</code>.</p>
   *             </dd>
   *          </dl>
   */
  Definition: { [key: string]: string } | undefined;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace CreateServiceActionInput {
  export const filterSensitiveLog = (obj: CreateServiceActionInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ServiceActionSummary {
  export const filterSensitiveLog = (obj: ServiceActionSummary): any => ({
    ...obj,
  });
}

/**
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
  Definition?: { [key: string]: string };
}

export namespace ServiceActionDetail {
  export const filterSensitiveLog = (obj: ServiceActionDetail): any => ({
    ...obj,
  });
}

export interface CreateServiceActionOutput {
  /**
   * <p>An object containing information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

export namespace CreateServiceActionOutput {
  export const filterSensitiveLog = (obj: CreateServiceActionOutput): any => ({
    ...obj,
  });
}

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

export namespace CreateTagOptionInput {
  export const filterSensitiveLog = (obj: CreateTagOptionInput): any => ({
    ...obj,
  });
}

/**
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
}

export namespace TagOptionDetail {
  export const filterSensitiveLog = (obj: TagOptionDetail): any => ({
    ...obj,
  });
}

export interface CreateTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
}

export namespace CreateTagOptionOutput {
  export const filterSensitiveLog = (obj: CreateTagOptionOutput): any => ({
    ...obj,
  });
}

export interface DeleteConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DeleteConstraintInput {
  export const filterSensitiveLog = (obj: DeleteConstraintInput): any => ({
    ...obj,
  });
}

export interface DeleteConstraintOutput {}

export namespace DeleteConstraintOutput {
  export const filterSensitiveLog = (obj: DeleteConstraintOutput): any => ({
    ...obj,
  });
}

export interface DeletePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DeletePortfolioInput {
  export const filterSensitiveLog = (obj: DeletePortfolioInput): any => ({
    ...obj,
  });
}

export interface DeletePortfolioOutput {}

export namespace DeletePortfolioOutput {
  export const filterSensitiveLog = (obj: DeletePortfolioOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeletePortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>The AWS account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The organization node to whom you are going to stop sharing.</p>
   */
  OrganizationNode?: OrganizationNode;
}

export namespace DeletePortfolioShareInput {
  export const filterSensitiveLog = (obj: DeletePortfolioShareInput): any => ({
    ...obj,
  });
}

export interface DeletePortfolioShareOutput {
  /**
   * <p>The portfolio share unique identifier. This will only be returned if delete is made to an organization node.</p>
   */
  PortfolioShareToken?: string;
}

export namespace DeletePortfolioShareOutput {
  export const filterSensitiveLog = (obj: DeletePortfolioShareOutput): any => ({
    ...obj,
  });
}

export interface DeleteProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DeleteProductInput {
  export const filterSensitiveLog = (obj: DeleteProductInput): any => ({
    ...obj,
  });
}

export interface DeleteProductOutput {}

export namespace DeleteProductOutput {
  export const filterSensitiveLog = (obj: DeleteProductOutput): any => ({
    ...obj,
  });
}

export interface DeleteProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>If set to true, AWS Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   */
  IgnoreErrors?: boolean;
}

export namespace DeleteProvisionedProductPlanInput {
  export const filterSensitiveLog = (obj: DeleteProvisionedProductPlanInput): any => ({
    ...obj,
  });
}

export interface DeleteProvisionedProductPlanOutput {}

export namespace DeleteProvisionedProductPlanOutput {
  export const filterSensitiveLog = (obj: DeleteProvisionedProductPlanOutput): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DeleteProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: DeleteProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningArtifactOutput {}

export namespace DeleteProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: DeleteProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DeleteServiceActionInput {
  export const filterSensitiveLog = (obj: DeleteServiceActionInput): any => ({
    ...obj,
  });
}

export interface DeleteServiceActionOutput {}

export namespace DeleteServiceActionOutput {
  export const filterSensitiveLog = (obj: DeleteServiceActionOutput): any => ({
    ...obj,
  });
}

export interface DeleteTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   */
  Id: string | undefined;
}

export namespace DeleteTagOptionInput {
  export const filterSensitiveLog = (obj: DeleteTagOptionInput): any => ({
    ...obj,
  });
}

export interface DeleteTagOptionOutput {}

export namespace DeleteTagOptionOutput {
  export const filterSensitiveLog = (obj: DeleteTagOptionOutput): any => ({
    ...obj,
  });
}

export interface DescribeConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeConstraintInput {
  export const filterSensitiveLog = (obj: DescribeConstraintInput): any => ({
    ...obj,
  });
}

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

export namespace DescribeConstraintOutput {
  export const filterSensitiveLog = (obj: DescribeConstraintOutput): any => ({
    ...obj,
  });
}

export interface DescribeCopyProductStatusInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeCopyProductStatusInput {
  export const filterSensitiveLog = (obj: DescribeCopyProductStatusInput): any => ({
    ...obj,
  });
}

export enum CopyProductStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

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

export namespace DescribeCopyProductStatusOutput {
  export const filterSensitiveLog = (obj: DescribeCopyProductStatusOutput): any => ({
    ...obj,
  });
}

export interface DescribePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribePortfolioInput {
  export const filterSensitiveLog = (obj: DescribePortfolioInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a budget.</p>
 */
export interface BudgetDetail {
  /**
   * <p>Name of the associated budget.</p>
   */
  BudgetName?: string;
}

export namespace BudgetDetail {
  export const filterSensitiveLog = (obj: BudgetDetail): any => ({
    ...obj,
  });
}

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

export namespace DescribePortfolioOutput {
  export const filterSensitiveLog = (obj: DescribePortfolioOutput): any => ({
    ...obj,
  });
}

export interface DescribePortfolioShareStatusInput {
  /**
   * <p>The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.</p>
   */
  PortfolioShareToken: string | undefined;
}

export namespace DescribePortfolioShareStatusInput {
  export const filterSensitiveLog = (obj: DescribePortfolioShareStatusInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ShareError {
  export const filterSensitiveLog = (obj: ShareError): any => ({
    ...obj,
  });
}

/**
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

export namespace ShareDetails {
  export const filterSensitiveLog = (obj: ShareDetails): any => ({
    ...obj,
  });
}

export enum ShareStatus {
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

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

export namespace DescribePortfolioShareStatusOutput {
  export const filterSensitiveLog = (obj: DescribePortfolioShareStatusOutput): any => ({
    ...obj,
  });
}

export interface DescribeProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeProductInput {
  export const filterSensitiveLog = (obj: DescribeProductInput): any => ({
    ...obj,
  });
}

/**
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

export namespace LaunchPath {
  export const filterSensitiveLog = (obj: LaunchPath): any => ({
    ...obj,
  });
}

/**
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

export namespace ProvisioningArtifact {
  export const filterSensitiveLog = (obj: ProvisioningArtifact): any => ({
    ...obj,
  });
}

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

export namespace DescribeProductOutput {
  export const filterSensitiveLog = (obj: DescribeProductOutput): any => ({
    ...obj,
  });
}

export interface DescribeProductAsAdminInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeProductAsAdminInput {
  export const filterSensitiveLog = (obj: DescribeProductAsAdminInput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The metadata for the provisioning artifact. This is used with AWS Marketplace products.</p>
   */
  ProvisioningArtifactMetadata?: { [key: string]: string };
}

export namespace ProvisioningArtifactSummary {
  export const filterSensitiveLog = (obj: ProvisioningArtifactSummary): any => ({
    ...obj,
  });
}

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

export namespace DescribeProductAsAdminOutput {
  export const filterSensitiveLog = (obj: DescribeProductAsAdminOutput): any => ({
    ...obj,
  });
}

export interface DescribeProductViewInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeProductViewInput {
  export const filterSensitiveLog = (obj: DescribeProductViewInput): any => ({
    ...obj,
  });
}

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

export namespace DescribeProductViewOutput {
  export const filterSensitiveLog = (obj: DescribeProductViewOutput): any => ({
    ...obj,
  });
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
 */
export interface DescribeProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeProvisionedProductInput {
  export const filterSensitiveLog = (obj: DescribeProvisionedProductInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a CloudWatch dashboard.</p>
 */
export interface CloudWatchDashboard {
  /**
   * <p>The name of the CloudWatch dashboard.</p>
   */
  Name?: string;
}

export namespace CloudWatchDashboard {
  export const filterSensitiveLog = (obj: CloudWatchDashboard): any => ({
    ...obj,
  });
}

export enum ProvisionedProductStatus {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PLAN_IN_PROGRESS = "PLAN_IN_PROGRESS",
  TAINTED = "TAINTED",
  UNDER_CHANGE = "UNDER_CHANGE",
}

/**
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

export namespace ProvisionedProductDetail {
  export const filterSensitiveLog = (obj: ProvisionedProductDetail): any => ({
    ...obj,
  });
}

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

export namespace DescribeProvisionedProductOutput {
  export const filterSensitiveLog = (obj: DescribeProvisionedProductOutput): any => ({
    ...obj,
  });
}

export interface DescribeProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeProvisionedProductPlanInput {
  export const filterSensitiveLog = (obj: DescribeProvisionedProductPlanInput): any => ({
    ...obj,
  });
}

export enum ProvisionedProductPlanStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESS = "CREATE_SUCCESS",
  EXECUTE_FAILED = "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS = "EXECUTE_IN_PROGRESS",
  EXECUTE_SUCCESS = "EXECUTE_SUCCESS",
}

/**
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
   * <p>The time when the plan was last updated.</p>
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

export namespace ProvisionedProductPlanDetails {
  export const filterSensitiveLog = (obj: ProvisionedProductPlanDetails): any => ({
    ...obj,
  });
}

export enum ChangeAction {
  ADD = "ADD",
  MODIFY = "MODIFY",
  REMOVE = "REMOVE",
}

export enum EvaluationType {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC",
}

export enum ResourceAttribute {
  CREATIONPOLICY = "CREATIONPOLICY",
  DELETIONPOLICY = "DELETIONPOLICY",
  METADATA = "METADATA",
  PROPERTIES = "PROPERTIES",
  TAGS = "TAGS",
  UPDATEPOLICY = "UPDATEPOLICY",
}

export enum RequiresRecreation {
  ALWAYS = "ALWAYS",
  CONDITIONALLY = "CONDITIONALLY",
  NEVER = "NEVER",
}

/**
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

export namespace ResourceTargetDefinition {
  export const filterSensitiveLog = (obj: ResourceTargetDefinition): any => ({
    ...obj,
  });
}

/**
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

export namespace ResourceChangeDetail {
  export const filterSensitiveLog = (obj: ResourceChangeDetail): any => ({
    ...obj,
  });
}

export enum Replacement {
  CONDITIONAL = "CONDITIONAL",
  FALSE = "FALSE",
  TRUE = "TRUE",
}

/**
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

export namespace ResourceChange {
  export const filterSensitiveLog = (obj: ResourceChange): any => ({
    ...obj,
  });
}

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

export namespace DescribeProvisionedProductPlanOutput {
  export const filterSensitiveLog = (obj: DescribeProvisionedProductPlanOutput): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
}

export namespace DescribeProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: DescribeProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3.</p>
   */
  Info?: { [key: string]: string };

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
}

export namespace DescribeProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: DescribeProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningParametersInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeProvisioningParametersInput {
  export const filterSensitiveLog = (obj: DescribeProvisioningParametersInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ConstraintSummary {
  export const filterSensitiveLog = (obj: ConstraintSummary): any => ({
    ...obj,
  });
}

/**
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

export namespace ProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: ProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The constraints that the administrator has put on the parameter.</p>
 */
export interface ParameterConstraints {
  /**
   * <p>The values that the administrator has allowed for the parameter.</p>
   */
  AllowedValues?: string[];
}

export namespace ParameterConstraints {
  export const filterSensitiveLog = (obj: ParameterConstraints): any => ({
    ...obj,
  });
}

/**
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

export namespace ProvisioningArtifactParameter {
  export const filterSensitiveLog = (obj: ProvisioningArtifactParameter): any => ({
    ...obj,
  });
}

/**
 * <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p>
 *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface ProvisioningArtifactPreferences {
  /**
   * <p>One or more AWS accounts where stack instances are deployed from the stack set. These accounts can be scoped in <code>ProvisioningPreferences$StackSetAccounts</code> and <code>UpdateProvisioningPreferences$StackSetAccounts</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   */
  StackSetAccounts?: string[];

  /**
   * <p>One or more AWS Regions where stack instances are deployed from the stack set. These regions can be scoped in <code>ProvisioningPreferences$StackSetRegions</code> and <code>UpdateProvisioningPreferences$StackSetRegions</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   */
  StackSetRegions?: string[];
}

export namespace ProvisioningArtifactPreferences {
  export const filterSensitiveLog = (obj: ProvisioningArtifactPreferences): any => ({
    ...obj,
  });
}

/**
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

export namespace TagOptionSummary {
  export const filterSensitiveLog = (obj: TagOptionSummary): any => ({
    ...obj,
  });
}

/**
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

export namespace UsageInstruction {
  export const filterSensitiveLog = (obj: UsageInstruction): any => ({
    ...obj,
  });
}

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
   * <p>An object that contains information about preferences, such as regions and accounts, for the provisioning artifact.</p>
   */
  ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences;

  /**
   * <p>The output of the provisioning artifact.</p>
   */
  ProvisioningArtifactOutputs?: ProvisioningArtifactOutput[];
}

export namespace DescribeProvisioningParametersOutput {
  export const filterSensitiveLog = (obj: DescribeProvisioningParametersOutput): any => ({
    ...obj,
  });
}

export interface DescribeRecordInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeRecordInput {
  export const filterSensitiveLog = (obj: DescribeRecordInput): any => ({
    ...obj,
  });
}

/**
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

export namespace RecordError {
  export const filterSensitiveLog = (obj: RecordError): any => ({
    ...obj,
  });
}

/**
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

export namespace RecordTag {
  export const filterSensitiveLog = (obj: RecordTag): any => ({
    ...obj,
  });
}

export enum RecordStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  IN_PROGRESS_IN_ERROR = "IN_PROGRESS_IN_ERROR",
  SUCCEEDED = "SUCCEEDED",
}

/**
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

export namespace RecordDetail {
  export const filterSensitiveLog = (obj: RecordDetail): any => ({
    ...obj,
  });
}

/**
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

export namespace RecordOutput {
  export const filterSensitiveLog = (obj: RecordOutput): any => ({
    ...obj,
  });
}

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

export namespace DescribeRecordOutput {
  export const filterSensitiveLog = (obj: DescribeRecordOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeServiceActionInput {
  export const filterSensitiveLog = (obj: DescribeServiceActionInput): any => ({
    ...obj,
  });
}

export interface DescribeServiceActionOutput {
  /**
   * <p>Detailed information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

export namespace DescribeServiceActionOutput {
  export const filterSensitiveLog = (obj: DescribeServiceActionOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DescribeServiceActionExecutionParametersInput {
  export const filterSensitiveLog = (obj: DescribeServiceActionExecutionParametersInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ExecutionParameter {
  export const filterSensitiveLog = (obj: ExecutionParameter): any => ({
    ...obj,
  });
}

export interface DescribeServiceActionExecutionParametersOutput {
  /**
   * <p>The parameters of the self-service action.</p>
   */
  ServiceActionParameters?: ExecutionParameter[];
}

export namespace DescribeServiceActionExecutionParametersOutput {
  export const filterSensitiveLog = (obj: DescribeServiceActionExecutionParametersOutput): any => ({
    ...obj,
  });
}

export interface DescribeTagOptionInput {
  /**
   * <p>The TagOption identifier.</p>
   */
  Id: string | undefined;
}

export namespace DescribeTagOptionInput {
  export const filterSensitiveLog = (obj: DescribeTagOptionInput): any => ({
    ...obj,
  });
}

export interface DescribeTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
}

export namespace DescribeTagOptionOutput {
  export const filterSensitiveLog = (obj: DescribeTagOptionOutput): any => ({
    ...obj,
  });
}

export interface DisableAWSOrganizationsAccessInput {}

export namespace DisableAWSOrganizationsAccessInput {
  export const filterSensitiveLog = (obj: DisableAWSOrganizationsAccessInput): any => ({
    ...obj,
  });
}

export interface DisableAWSOrganizationsAccessOutput {}

export namespace DisableAWSOrganizationsAccessOutput {
  export const filterSensitiveLog = (obj: DisableAWSOrganizationsAccessOutput): any => ({
    ...obj,
  });
}

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

export namespace DisassociateBudgetFromResourceInput {
  export const filterSensitiveLog = (obj: DisassociateBudgetFromResourceInput): any => ({
    ...obj,
  });
}

export interface DisassociateBudgetFromResourceOutput {}

export namespace DisassociateBudgetFromResourceOutput {
  export const filterSensitiveLog = (obj: DisassociateBudgetFromResourceOutput): any => ({
    ...obj,
  });
}

export interface DisassociatePrincipalFromPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>The ARN of the principal (IAM user, role, or group).</p>
   */
  PrincipalARN: string | undefined;
}

export namespace DisassociatePrincipalFromPortfolioInput {
  export const filterSensitiveLog = (obj: DisassociatePrincipalFromPortfolioInput): any => ({
    ...obj,
  });
}

export interface DisassociatePrincipalFromPortfolioOutput {}

export namespace DisassociatePrincipalFromPortfolioOutput {
  export const filterSensitiveLog = (obj: DisassociatePrincipalFromPortfolioOutput): any => ({
    ...obj,
  });
}

export interface DisassociateProductFromPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DisassociateProductFromPortfolioInput {
  export const filterSensitiveLog = (obj: DisassociateProductFromPortfolioInput): any => ({
    ...obj,
  });
}

export interface DisassociateProductFromPortfolioOutput {}

export namespace DisassociateProductFromPortfolioOutput {
  export const filterSensitiveLog = (obj: DisassociateProductFromPortfolioOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace DisassociateServiceActionFromProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: DisassociateServiceActionFromProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export interface DisassociateServiceActionFromProvisioningArtifactOutput {}

export namespace DisassociateServiceActionFromProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: DisassociateServiceActionFromProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

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

export namespace DisassociateTagOptionFromResourceInput {
  export const filterSensitiveLog = (obj: DisassociateTagOptionFromResourceInput): any => ({
    ...obj,
  });
}

export interface DisassociateTagOptionFromResourceOutput {}

export namespace DisassociateTagOptionFromResourceOutput {
  export const filterSensitiveLog = (obj: DisassociateTagOptionFromResourceOutput): any => ({
    ...obj,
  });
}

export interface EnableAWSOrganizationsAccessInput {}

export namespace EnableAWSOrganizationsAccessInput {
  export const filterSensitiveLog = (obj: EnableAWSOrganizationsAccessInput): any => ({
    ...obj,
  });
}

export interface EnableAWSOrganizationsAccessOutput {}

export namespace EnableAWSOrganizationsAccessOutput {
  export const filterSensitiveLog = (obj: EnableAWSOrganizationsAccessOutput): any => ({
    ...obj,
  });
}

export interface ExecuteProvisionedProductPlanInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ExecuteProvisionedProductPlanInput {
  export const filterSensitiveLog = (obj: ExecuteProvisionedProductPlanInput): any => ({
    ...obj,
  });
}

export interface ExecuteProvisionedProductPlanOutput {
  /**
   * <p>Information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace ExecuteProvisionedProductPlanOutput {
  export const filterSensitiveLog = (obj: ExecuteProvisionedProductPlanOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   *             override the default value generated by AWS Service Catalog. If the parameters field is not provided, no additional parameters are passed and default values will be used for
   *             any special parameters such as <code>TARGET</code>.</p>
   */
  Parameters?: { [key: string]: string[] };
}

export namespace ExecuteProvisionedProductServiceActionInput {
  export const filterSensitiveLog = (obj: ExecuteProvisionedProductServiceActionInput): any => ({
    ...obj,
  });
}

export interface ExecuteProvisionedProductServiceActionOutput {
  /**
   * <p>An object containing detailed information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace ExecuteProvisionedProductServiceActionOutput {
  export const filterSensitiveLog = (obj: ExecuteProvisionedProductServiceActionOutput): any => ({
    ...obj,
  });
}

export interface GetAWSOrganizationsAccessStatusInput {}

export namespace GetAWSOrganizationsAccessStatusInput {
  export const filterSensitiveLog = (obj: GetAWSOrganizationsAccessStatusInput): any => ({
    ...obj,
  });
}

export interface GetAWSOrganizationsAccessStatusOutput {
  /**
   * <p>The status of the portfolio share feature.</p>
   */
  AccessStatus?: AccessStatus | string;
}

export namespace GetAWSOrganizationsAccessStatusOutput {
  export const filterSensitiveLog = (obj: GetAWSOrganizationsAccessStatusOutput): any => ({
    ...obj,
  });
}

export interface GetProvisionedProductOutputsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace GetProvisionedProductOutputsInput {
  export const filterSensitiveLog = (obj: GetProvisionedProductOutputsInput): any => ({
    ...obj,
  });
}

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

export namespace GetProvisionedProductOutputsOutput {
  export const filterSensitiveLog = (obj: GetProvisionedProductOutputsOutput): any => ({
    ...obj,
  });
}

export interface ImportAsProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>The user-friendly name of the provisioned product. The value must be unique for the AWS
   *          account. The name cannot be updated after the product is provisioned. </p>
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

export namespace ImportAsProvisionedProductInput {
  export const filterSensitiveLog = (obj: ImportAsProvisionedProductInput): any => ({
    ...obj,
  });
}

export interface ImportAsProvisionedProductOutput {
  /**
   * <p>Information about a request operation.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace ImportAsProvisionedProductOutput {
  export const filterSensitiveLog = (obj: ImportAsProvisionedProductOutput): any => ({
    ...obj,
  });
}

export interface ListAcceptedPortfolioSharesInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   *                   <code>AWS_ORGANIZATIONS</code> - List portfolios shared by the management
   *                account of your organization</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_SERVICECATALOG</code> - List default portfolios</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPORTED</code> - List imported portfolios</p>
   *             </li>
   *          </ul>
   */
  PortfolioShareType?: PortfolioShareType | string;
}

export namespace ListAcceptedPortfolioSharesInput {
  export const filterSensitiveLog = (obj: ListAcceptedPortfolioSharesInput): any => ({
    ...obj,
  });
}

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

export namespace ListAcceptedPortfolioSharesOutput {
  export const filterSensitiveLog = (obj: ListAcceptedPortfolioSharesOutput): any => ({
    ...obj,
  });
}

export interface ListBudgetsForResourceInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListBudgetsForResourceInput {
  export const filterSensitiveLog = (obj: ListBudgetsForResourceInput): any => ({
    ...obj,
  });
}

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

export namespace ListBudgetsForResourceOutput {
  export const filterSensitiveLog = (obj: ListBudgetsForResourceOutput): any => ({
    ...obj,
  });
}

export interface ListConstraintsForPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListConstraintsForPortfolioInput {
  export const filterSensitiveLog = (obj: ListConstraintsForPortfolioInput): any => ({
    ...obj,
  });
}

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

export namespace ListConstraintsForPortfolioOutput {
  export const filterSensitiveLog = (obj: ListConstraintsForPortfolioOutput): any => ({
    ...obj,
  });
}

export interface ListLaunchPathsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListLaunchPathsInput {
  export const filterSensitiveLog = (obj: ListLaunchPathsInput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The name of the portfolio to which the user was assigned.</p>
   */
  Name?: string;
}

export namespace LaunchPathSummary {
  export const filterSensitiveLog = (obj: LaunchPathSummary): any => ({
    ...obj,
  });
}

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

export namespace ListLaunchPathsOutput {
  export const filterSensitiveLog = (obj: ListLaunchPathsOutput): any => ({
    ...obj,
  });
}

export interface ListOrganizationPortfolioAccessInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListOrganizationPortfolioAccessInput {
  export const filterSensitiveLog = (obj: ListOrganizationPortfolioAccessInput): any => ({
    ...obj,
  });
}

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

export namespace ListOrganizationPortfolioAccessOutput {
  export const filterSensitiveLog = (obj: ListOrganizationPortfolioAccessOutput): any => ({
    ...obj,
  });
}

export interface ListPortfolioAccessInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListPortfolioAccessInput {
  export const filterSensitiveLog = (obj: ListPortfolioAccessInput): any => ({
    ...obj,
  });
}

export interface ListPortfolioAccessOutput {
  /**
   * <p>Information about the AWS accounts with access to the portfolio.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

export namespace ListPortfolioAccessOutput {
  export const filterSensitiveLog = (obj: ListPortfolioAccessOutput): any => ({
    ...obj,
  });
}

export interface ListPortfoliosInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListPortfoliosInput {
  export const filterSensitiveLog = (obj: ListPortfoliosInput): any => ({
    ...obj,
  });
}

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

export namespace ListPortfoliosOutput {
  export const filterSensitiveLog = (obj: ListPortfoliosOutput): any => ({
    ...obj,
  });
}

export interface ListPortfoliosForProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListPortfoliosForProductInput {
  export const filterSensitiveLog = (obj: ListPortfoliosForProductInput): any => ({
    ...obj,
  });
}

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

export namespace ListPortfoliosForProductOutput {
  export const filterSensitiveLog = (obj: ListPortfoliosForProductOutput): any => ({
    ...obj,
  });
}

export interface ListPrincipalsForPortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListPrincipalsForPortfolioInput {
  export const filterSensitiveLog = (obj: ListPrincipalsForPortfolioInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a principal.</p>
 */
export interface Principal {
  /**
   * <p>The ARN of the principal (IAM user, role, or group).</p>
   */
  PrincipalARN?: string;

  /**
   * <p>The principal type. The supported value is <code>IAM</code>.</p>
   */
  PrincipalType?: PrincipalType | string;
}

export namespace Principal {
  export const filterSensitiveLog = (obj: Principal): any => ({
    ...obj,
  });
}

export interface ListPrincipalsForPortfolioOutput {
  /**
   * <p>The IAM principals (users or roles) associated with the portfolio.</p>
   */
  Principals?: Principal[];

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

export namespace ListPrincipalsForPortfolioOutput {
  export const filterSensitiveLog = (obj: ListPrincipalsForPortfolioOutput): any => ({
    ...obj,
  });
}

export interface ListProvisionedProductPlansInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListProvisionedProductPlansInput {
  export const filterSensitiveLog = (obj: ListProvisionedProductPlansInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ProvisionedProductPlanSummary {
  export const filterSensitiveLog = (obj: ProvisionedProductPlanSummary): any => ({
    ...obj,
  });
}

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

export namespace ListProvisionedProductPlansOutput {
  export const filterSensitiveLog = (obj: ListProvisionedProductPlansOutput): any => ({
    ...obj,
  });
}

export interface ListProvisioningArtifactsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListProvisioningArtifactsInput {
  export const filterSensitiveLog = (obj: ListProvisioningArtifactsInput): any => ({
    ...obj,
  });
}

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

export namespace ListProvisioningArtifactsOutput {
  export const filterSensitiveLog = (obj: ListProvisioningArtifactsOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListProvisioningArtifactsForServiceActionInput {
  export const filterSensitiveLog = (obj: ListProvisioningArtifactsForServiceActionInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ProvisioningArtifactView {
  export const filterSensitiveLog = (obj: ProvisioningArtifactView): any => ({
    ...obj,
  });
}

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

export namespace ListProvisioningArtifactsForServiceActionOutput {
  export const filterSensitiveLog = (obj: ListProvisioningArtifactsForServiceActionOutput): any => ({
    ...obj,
  });
}

/**
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

export namespace ListRecordHistorySearchFilter {
  export const filterSensitiveLog = (obj: ListRecordHistorySearchFilter): any => ({
    ...obj,
  });
}

export interface ListRecordHistoryInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListRecordHistoryInput {
  export const filterSensitiveLog = (obj: ListRecordHistoryInput): any => ({
    ...obj,
  });
}

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

export namespace ListRecordHistoryOutput {
  export const filterSensitiveLog = (obj: ListRecordHistoryOutput): any => ({
    ...obj,
  });
}

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

export namespace ListResourcesForTagOptionInput {
  export const filterSensitiveLog = (obj: ListResourcesForTagOptionInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ResourceDetail {
  export const filterSensitiveLog = (obj: ResourceDetail): any => ({
    ...obj,
  });
}

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

export namespace ListResourcesForTagOptionOutput {
  export const filterSensitiveLog = (obj: ListResourcesForTagOptionOutput): any => ({
    ...obj,
  });
}

export interface ListServiceActionsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListServiceActionsInput {
  export const filterSensitiveLog = (obj: ListServiceActionsInput): any => ({
    ...obj,
  });
}

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

export namespace ListServiceActionsOutput {
  export const filterSensitiveLog = (obj: ListServiceActionsOutput): any => ({
    ...obj,
  });
}

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
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListServiceActionsForProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: ListServiceActionsForProvisioningArtifactInput): any => ({
    ...obj,
  });
}

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

export namespace ListServiceActionsForProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: ListServiceActionsForProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

export interface ListStackInstancesForProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ListStackInstancesForProvisionedProductInput {
  export const filterSensitiveLog = (obj: ListStackInstancesForProvisionedProductInput): any => ({
    ...obj,
  });
}

export enum StackInstanceStatus {
  CURRENT = "CURRENT",
  INOPERABLE = "INOPERABLE",
  OUTDATED = "OUTDATED",
}

/**
 * <p>An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. </p>
 */
export interface StackInstance {
  /**
   * <p>The name of the AWS account that the stack instance is associated with.</p>
   */
  Account?: string;

  /**
   * <p>The name of the AWS region that the stack instance is associated with.</p>
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

export namespace StackInstance {
  export const filterSensitiveLog = (obj: StackInstance): any => ({
    ...obj,
  });
}

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

export namespace ListStackInstancesForProvisionedProductOutput {
  export const filterSensitiveLog = (obj: ListStackInstancesForProvisionedProductOutput): any => ({
    ...obj,
  });
}

/**
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

export namespace ListTagOptionsFilters {
  export const filterSensitiveLog = (obj: ListTagOptionsFilters): any => ({
    ...obj,
  });
}

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

export namespace ListTagOptionsInput {
  export const filterSensitiveLog = (obj: ListTagOptionsInput): any => ({
    ...obj,
  });
}

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

export namespace ListTagOptionsOutput {
  export const filterSensitiveLog = (obj: ListTagOptionsOutput): any => ({
    ...obj,
  });
}

/**
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

export namespace ProvisioningParameter {
  export const filterSensitiveLog = (obj: ProvisioningParameter): any => ({
    ...obj,
  });
}

/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 */
export interface ProvisioningPreferences {
  /**
   * <p>One or more AWS accounts that will have access to the provisioned product.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: string[];

  /**
   * <p>One or more AWS Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: string[];

  /**
   * <p>The number of accounts, per region, for which this operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   *          <p>The default value is <code>0</code> if no value is specified.</p>
   */
  StackSetFailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per region, for which this stack operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number.</p>
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
   *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as <code>1</code> instead.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyPercentage?: number;
}

export namespace ProvisioningPreferences {
  export const filterSensitiveLog = (obj: ProvisioningPreferences): any => ({
    ...obj,
  });
}

export interface ProvisionProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   *          unique for the AWS account and cannot be updated after the product is provisioned.</p>
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

export namespace ProvisionProductInput {
  export const filterSensitiveLog = (obj: ProvisionProductInput): any => ({
    ...obj,
  });
}

export interface ProvisionProductOutput {
  /**
   * <p>Information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace ProvisionProductOutput {
  export const filterSensitiveLog = (obj: ProvisionProductOutput): any => ({
    ...obj,
  });
}

export interface RejectPortfolioShareInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace RejectPortfolioShareInput {
  export const filterSensitiveLog = (obj: RejectPortfolioShareInput): any => ({
    ...obj,
  });
}

export interface RejectPortfolioShareOutput {}

export namespace RejectPortfolioShareOutput {
  export const filterSensitiveLog = (obj: RejectPortfolioShareOutput): any => ({
    ...obj,
  });
}

export interface ScanProvisionedProductsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace ScanProvisionedProductsInput {
  export const filterSensitiveLog = (obj: ScanProvisionedProductsInput): any => ({
    ...obj,
  });
}

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

export namespace ScanProvisionedProductsOutput {
  export const filterSensitiveLog = (obj: ScanProvisionedProductsOutput): any => ({
    ...obj,
  });
}

export enum ProductViewFilterBy {
  FullTextSearch = "FullTextSearch",
  Owner = "Owner",
  ProductType = "ProductType",
  SourceProductId = "SourceProductId",
}

export enum ProductViewSortBy {
  CreationDate = "CreationDate",
  Title = "Title",
  VersionCount = "VersionCount",
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface SearchProductsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
  Filters?: { [key: string]: string[] };

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

export namespace SearchProductsInput {
  export const filterSensitiveLog = (obj: SearchProductsInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ProductViewAggregationValue {
  export const filterSensitiveLog = (obj: ProductViewAggregationValue): any => ({
    ...obj,
  });
}

export interface SearchProductsOutput {
  /**
   * <p>Information about the product views.</p>
   */
  ProductViewSummaries?: ProductViewSummary[];

  /**
   * <p>The product view aggregations.</p>
   */
  ProductViewAggregations?: { [key: string]: ProductViewAggregationValue[] };

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

export namespace SearchProductsOutput {
  export const filterSensitiveLog = (obj: SearchProductsOutput): any => ({
    ...obj,
  });
}

export enum ProductSource {
  ACCOUNT = "ACCOUNT",
}

export interface SearchProductsAsAdminInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
  Filters?: { [key: string]: string[] };

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

export namespace SearchProductsAsAdminInput {
  export const filterSensitiveLog = (obj: SearchProductsAsAdminInput): any => ({
    ...obj,
  });
}

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

export namespace SearchProductsAsAdminOutput {
  export const filterSensitiveLog = (obj: SearchProductsAsAdminOutput): any => ({
    ...obj,
  });
}

export enum ProvisionedProductViewFilterBy {
  SearchQuery = "SearchQuery",
}

export interface SearchProvisionedProductsInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
  Filters?: { [key: string]: string[] };

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

export namespace SearchProvisionedProductsInput {
  export const filterSensitiveLog = (obj: SearchProvisionedProductsInput): any => ({
    ...obj,
  });
}

/**
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
   * <p>The Amazon Resource Name (ARN) of the IAM user.</p>
   */
  UserArn?: string;

  /**
   * <p>The ARN of the IAM user in the session. This ARN might contain a session ID.</p>
   */
  UserArnSession?: string;
}

export namespace ProvisionedProductAttribute {
  export const filterSensitiveLog = (obj: ProvisionedProductAttribute): any => ({
    ...obj,
  });
}

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

export namespace SearchProvisionedProductsOutput {
  export const filterSensitiveLog = (obj: SearchProvisionedProductsOutput): any => ({
    ...obj,
  });
}

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
   * <p>If set to true, AWS Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   */
  IgnoreErrors?: boolean;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   * <p>When this boolean parameter is set to true, the TerminateProvisionedProduct API deletes
   *          the Service Catalog provisioned product. However, it does not remove the CloudFormation
   *          stack, stack set, or the underlying resources of the deleted provisioned product. The
   *          default value is false.</p>
   */
  RetainPhysicalResources?: boolean;
}

export namespace TerminateProvisionedProductInput {
  export const filterSensitiveLog = (obj: TerminateProvisionedProductInput): any => ({
    ...obj,
  });
}

export interface TerminateProvisionedProductOutput {
  /**
   * <p>Information about the result of this request.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace TerminateProvisionedProductOutput {
  export const filterSensitiveLog = (obj: TerminateProvisionedProductOutput): any => ({
    ...obj,
  });
}

export interface UpdateConstraintInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   *                   <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code>
   *                </p>
   *                <p>Specify the <code>LocalRoleName</code> property as follows:</p>
   *                <p>
   *                   <code>{"LocalRoleName": "SCBasicLaunchRole"}</code>
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
   *                   <code>{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}</code>
   *                </p>
   *             </dd>
   *             <dt>RESOURCE_UPDATE</dt>
   *             <dd>
   *                <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p>
   *                <p>
   *                   <code>{"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}</code>
   *                </p>
   *                <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p>
   *             </dd>
   *             <dt>STACKSET</dt>
   *             <dd>
   *                <p>Specify the <code>Parameters</code> property as follows:</p>
   *                <p>
   *                   <code>{"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}</code>
   *                </p>
   *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
   *                <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p>
   *                <p>Products with a <code>STACKSET</code> constraint will launch an AWS CloudFormation stack set.</p>
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

export namespace UpdateConstraintInput {
  export const filterSensitiveLog = (obj: UpdateConstraintInput): any => ({
    ...obj,
  });
}

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

export namespace UpdateConstraintOutput {
  export const filterSensitiveLog = (obj: UpdateConstraintOutput): any => ({
    ...obj,
  });
}

export interface UpdatePortfolioInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace UpdatePortfolioInput {
  export const filterSensitiveLog = (obj: UpdatePortfolioInput): any => ({
    ...obj,
  });
}

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

export namespace UpdatePortfolioOutput {
  export const filterSensitiveLog = (obj: UpdatePortfolioOutput): any => ({
    ...obj,
  });
}

export interface UpdateProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
}

export namespace UpdateProductInput {
  export const filterSensitiveLog = (obj: UpdateProductInput): any => ({
    ...obj,
  });
}

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

export namespace UpdateProductOutput {
  export const filterSensitiveLog = (obj: UpdateProductOutput): any => ({
    ...obj,
  });
}

export type StackSetOperationType = "CREATE" | "DELETE" | "UPDATE";

/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 */
export interface UpdateProvisioningPreferences {
  /**
   * <p>One or more AWS accounts that will have access to the provisioned product.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: string[];

  /**
   * <p>One or more AWS Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: string[];

  /**
   * <p>The number of accounts, per region, for which this operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
   *          <p>The default value is <code>0</code> if no value is specified.</p>
   */
  StackSetFailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per region, for which this stack operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number.</p>
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
   *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as <code>1</code> instead.</p>
   *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
   */
  StackSetMaxConcurrencyPercentage?: number;

  /**
   * <p>Determines what action AWS Service Catalog performs to a stack set or a stack instance represented by the provisioned product. The default value is <code>UPDATE</code> if nothing is specified.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <dl>
   *             <dt>CREATE</dt>
   *             <dd>
   *                <p>Creates a new stack instance in the stack set represented by the provisioned product. In this case, only new stack instances are created based on accounts and regions; if new ProductId or ProvisioningArtifactID are passed, they will be ignored.</p>
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

export namespace UpdateProvisioningPreferences {
  export const filterSensitiveLog = (obj: UpdateProvisioningPreferences): any => ({
    ...obj,
  });
}

export interface UpdateProvisionedProductInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace UpdateProvisionedProductInput {
  export const filterSensitiveLog = (obj: UpdateProvisionedProductInput): any => ({
    ...obj,
  });
}

export interface UpdateProvisionedProductOutput {
  /**
   * <p>Information about the result of the request.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace UpdateProvisionedProductOutput {
  export const filterSensitiveLog = (obj: UpdateProvisionedProductOutput): any => ({
    ...obj,
  });
}

export enum PropertyKey {
  LaunchRole = "LAUNCH_ROLE",
  Owner = "OWNER",
}

export interface UpdateProvisionedProductPropertiesInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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
   *
   *          <p>The <code>OWNER</code> key accepts user ARNs and role ARNs. The owner is the user
   *          that has permission to see, update, terminate, and execute service actions in the
   *          provisioned product.</p>
   *          <p>The administrator can change the owner of a provisioned product to another IAM user within the same account. Both end user owners and
   *          administrators can see ownership history of the provisioned product using the <code>ListRecordHistory</code> API. The new owner can
   *       describe all past records for the provisioned product using the <code>DescribeRecord</code> API. The previous owner can no longer use <code>DescribeRecord</code>,
   *       but can still see the product's history from when he was an owner using <code>ListRecordHistory</code>.</p>
   *          <p>If a provisioned product ownership is assigned to an end user, they can see and perform any action through the API or
   *          Service Catalog console such as update, terminate, and execute service actions.
   *          If an end user provisions a product and the owner is updated to someone else, they will no longer be able to see or perform any actions through
   *          API or the Service Catalog console on that provisioned product.</p>
   */
  ProvisionedProductProperties: { [key: string]: string } | undefined;

  /**
   * <p>The idempotency token that uniquely identifies the provisioning product update request.</p>
   */
  IdempotencyToken?: string;
}

export namespace UpdateProvisionedProductPropertiesInput {
  export const filterSensitiveLog = (obj: UpdateProvisionedProductPropertiesInput): any => ({
    ...obj,
  });
}

export interface UpdateProvisionedProductPropertiesOutput {
  /**
   * <p>The provisioned product identifier.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>A map that contains the properties updated.</p>
   */
  ProvisionedProductProperties?: { [key: string]: string };

  /**
   * <p>The identifier of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>The status of the request.</p>
   */
  Status?: RecordStatus | string;
}

export namespace UpdateProvisionedProductPropertiesOutput {
  export const filterSensitiveLog = (obj: UpdateProvisionedProductPropertiesOutput): any => ({
    ...obj,
  });
}

export interface UpdateProvisioningArtifactInput {
  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace UpdateProvisioningArtifactInput {
  export const filterSensitiveLog = (obj: UpdateProvisioningArtifactInput): any => ({
    ...obj,
  });
}

export interface UpdateProvisioningArtifactOutput {
  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3.</p>
   */
  Info?: { [key: string]: string };

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
}

export namespace UpdateProvisioningArtifactOutput {
  export const filterSensitiveLog = (obj: UpdateProvisioningArtifactOutput): any => ({
    ...obj,
  });
}

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
  Definition?: { [key: string]: string };

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The language code.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>en</code> - English (default)</p>
   *             </li>
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

export namespace UpdateServiceActionInput {
  export const filterSensitiveLog = (obj: UpdateServiceActionInput): any => ({
    ...obj,
  });
}

export interface UpdateServiceActionOutput {
  /**
   * <p>Detailed information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

export namespace UpdateServiceActionOutput {
  export const filterSensitiveLog = (obj: UpdateServiceActionOutput): any => ({
    ...obj,
  });
}

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

export namespace UpdateTagOptionInput {
  export const filterSensitiveLog = (obj: UpdateTagOptionInput): any => ({
    ...obj,
  });
}

export interface UpdateTagOptionOutput {
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
}

export namespace UpdateTagOptionOutput {
  export const filterSensitiveLog = (obj: UpdateTagOptionOutput): any => ({
    ...obj,
  });
}
