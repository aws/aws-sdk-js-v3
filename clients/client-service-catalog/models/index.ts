import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateTagOptionWithResourceInput {
  __type?: "AssociateTagOptionWithResourceInput";
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
  export function isa(o: any): o is AssociateTagOptionWithResourceInput {
    return _smithy.isa(o, "AssociateTagOptionWithResourceInput");
  }
}

export interface AssociateTagOptionWithResourceOutput extends $MetadataBearer {
  __type?: "AssociateTagOptionWithResourceOutput";
}

export namespace AssociateTagOptionWithResourceOutput {
  export function isa(o: any): o is AssociateTagOptionWithResourceOutput {
    return _smithy.isa(o, "AssociateTagOptionWithResourceOutput");
  }
}

export interface CreateTagOptionInput {
  __type?: "CreateTagOptionInput";
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
  export function isa(o: any): o is CreateTagOptionInput {
    return _smithy.isa(o, "CreateTagOptionInput");
  }
}

export interface CreateTagOptionOutput extends $MetadataBearer {
  __type?: "CreateTagOptionOutput";
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
}

export namespace CreateTagOptionOutput {
  export function isa(o: any): o is CreateTagOptionOutput {
    return _smithy.isa(o, "CreateTagOptionOutput");
  }
}

export interface DeleteTagOptionInput {
  __type?: "DeleteTagOptionInput";
  /**
   * <p>The TagOption identifier.</p>
   */
  Id: string | undefined;
}

export namespace DeleteTagOptionInput {
  export function isa(o: any): o is DeleteTagOptionInput {
    return _smithy.isa(o, "DeleteTagOptionInput");
  }
}

export interface DeleteTagOptionOutput extends $MetadataBearer {
  __type?: "DeleteTagOptionOutput";
}

export namespace DeleteTagOptionOutput {
  export function isa(o: any): o is DeleteTagOptionOutput {
    return _smithy.isa(o, "DeleteTagOptionOutput");
  }
}

export interface DescribeTagOptionInput {
  __type?: "DescribeTagOptionInput";
  /**
   * <p>The TagOption identifier.</p>
   */
  Id: string | undefined;
}

export namespace DescribeTagOptionInput {
  export function isa(o: any): o is DescribeTagOptionInput {
    return _smithy.isa(o, "DescribeTagOptionInput");
  }
}

export interface DescribeTagOptionOutput extends $MetadataBearer {
  __type?: "DescribeTagOptionOutput";
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
}

export namespace DescribeTagOptionOutput {
  export function isa(o: any): o is DescribeTagOptionOutput {
    return _smithy.isa(o, "DescribeTagOptionOutput");
  }
}

export interface DisassociateTagOptionFromResourceInput {
  __type?: "DisassociateTagOptionFromResourceInput";
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
  export function isa(o: any): o is DisassociateTagOptionFromResourceInput {
    return _smithy.isa(o, "DisassociateTagOptionFromResourceInput");
  }
}

export interface DisassociateTagOptionFromResourceOutput
  extends $MetadataBearer {
  __type?: "DisassociateTagOptionFromResourceOutput";
}

export namespace DisassociateTagOptionFromResourceOutput {
  export function isa(o: any): o is DisassociateTagOptionFromResourceOutput {
    return _smithy.isa(o, "DisassociateTagOptionFromResourceOutput");
  }
}

export interface ListResourcesForTagOptionInput {
  __type?: "ListResourcesForTagOptionInput";
  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

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
   * <p>The TagOption identifier.</p>
   */
  TagOptionId: string | undefined;
}

export namespace ListResourcesForTagOptionInput {
  export function isa(o: any): o is ListResourcesForTagOptionInput {
    return _smithy.isa(o, "ListResourcesForTagOptionInput");
  }
}

export interface ListResourcesForTagOptionOutput extends $MetadataBearer {
  __type?: "ListResourcesForTagOptionOutput";
  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>Information about the resources.</p>
   */
  ResourceDetails?: Array<ResourceDetail>;
}

export namespace ListResourcesForTagOptionOutput {
  export function isa(o: any): o is ListResourcesForTagOptionOutput {
    return _smithy.isa(o, "ListResourcesForTagOptionOutput");
  }
}

/**
 * <p>Filters to use when listing TagOptions.</p>
 */
export interface ListTagOptionsFilters {
  __type?: "ListTagOptionsFilters";
  /**
   * <p>The active state.</p>
   */
  Active?: boolean;

  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Value?: string;
}

export namespace ListTagOptionsFilters {
  export function isa(o: any): o is ListTagOptionsFilters {
    return _smithy.isa(o, "ListTagOptionsFilters");
  }
}

export interface ListTagOptionsInput {
  __type?: "ListTagOptionsInput";
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
  export function isa(o: any): o is ListTagOptionsInput {
    return _smithy.isa(o, "ListTagOptionsInput");
  }
}

export interface ListTagOptionsOutput extends $MetadataBearer {
  __type?: "ListTagOptionsOutput";
  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>Information about the TagOptions.</p>
   */
  TagOptionDetails?: Array<TagOptionDetail>;
}

export namespace ListTagOptionsOutput {
  export function isa(o: any): o is ListTagOptionsOutput {
    return _smithy.isa(o, "ListTagOptionsOutput");
  }
}

/**
 * <p>Information about a resource.</p>
 */
export interface ResourceDetail {
  __type?: "ResourceDetail";
  /**
   * <p>The ARN of the resource.</p>
   */
  ARN?: string;

  /**
   * <p>The creation time of the resource.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;
}

export namespace ResourceDetail {
  export function isa(o: any): o is ResourceDetail {
    return _smithy.isa(o, "ResourceDetail");
  }
}

/**
 * <p>Information about a TagOption.</p>
 */
export interface TagOptionDetail {
  __type?: "TagOptionDetail";
  /**
   * <p>The TagOption active state.</p>
   */
  Active?: boolean;

  /**
   * <p>The TagOption identifier.</p>
   */
  Id?: string;

  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Value?: string;
}

export namespace TagOptionDetail {
  export function isa(o: any): o is TagOptionDetail {
    return _smithy.isa(o, "TagOptionDetail");
  }
}

export interface UpdateTagOptionInput {
  __type?: "UpdateTagOptionInput";
  /**
   * <p>The updated active state.</p>
   */
  Active?: boolean;

  /**
   * <p>The TagOption identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The updated value.</p>
   */
  Value?: string;
}

export namespace UpdateTagOptionInput {
  export function isa(o: any): o is UpdateTagOptionInput {
    return _smithy.isa(o, "UpdateTagOptionInput");
  }
}

export interface UpdateTagOptionOutput extends $MetadataBearer {
  __type?: "UpdateTagOptionOutput";
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: TagOptionDetail;
}

export namespace UpdateTagOptionOutput {
  export function isa(o: any): o is UpdateTagOptionOutput {
    return _smithy.isa(o, "UpdateTagOptionOutput");
  }
}

export interface AcceptPortfolioShareInput {
  __type?: "AcceptPortfolioShareInput";
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
   *                   <code>AWS_ORGANIZATIONS</code> - Accept portfolios shared by the master account of your organization.</p>
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
  export function isa(o: any): o is AcceptPortfolioShareInput {
    return _smithy.isa(o, "AcceptPortfolioShareInput");
  }
}

export interface AcceptPortfolioShareOutput extends $MetadataBearer {
  __type?: "AcceptPortfolioShareOutput";
}

export namespace AcceptPortfolioShareOutput {
  export function isa(o: any): o is AcceptPortfolioShareOutput {
    return _smithy.isa(o, "AcceptPortfolioShareOutput");
  }
}

/**
 * <p>The access level to use to filter results.</p>
 */
export interface AccessLevelFilter {
  __type?: "AccessLevelFilter";
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
  export function isa(o: any): o is AccessLevelFilter {
    return _smithy.isa(o, "AccessLevelFilter");
  }
}

export enum AccessLevelFilterKey {
  ACCOUNT = "Account",
  ROLE = "Role",
  USER = "User"
}

export enum AccessStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  UNDER_CHANGE = "UNDER_CHANGE"
}

export interface AssociateBudgetWithResourceInput {
  __type?: "AssociateBudgetWithResourceInput";
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
  export function isa(o: any): o is AssociateBudgetWithResourceInput {
    return _smithy.isa(o, "AssociateBudgetWithResourceInput");
  }
}

export interface AssociateBudgetWithResourceOutput extends $MetadataBearer {
  __type?: "AssociateBudgetWithResourceOutput";
}

export namespace AssociateBudgetWithResourceOutput {
  export function isa(o: any): o is AssociateBudgetWithResourceOutput {
    return _smithy.isa(o, "AssociateBudgetWithResourceOutput");
  }
}

export interface AssociatePrincipalWithPortfolioInput {
  __type?: "AssociatePrincipalWithPortfolioInput";
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
  export function isa(o: any): o is AssociatePrincipalWithPortfolioInput {
    return _smithy.isa(o, "AssociatePrincipalWithPortfolioInput");
  }
}

export interface AssociatePrincipalWithPortfolioOutput extends $MetadataBearer {
  __type?: "AssociatePrincipalWithPortfolioOutput";
}

export namespace AssociatePrincipalWithPortfolioOutput {
  export function isa(o: any): o is AssociatePrincipalWithPortfolioOutput {
    return _smithy.isa(o, "AssociatePrincipalWithPortfolioOutput");
  }
}

export interface AssociateProductWithPortfolioInput {
  __type?: "AssociateProductWithPortfolioInput";
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
   * <p>The identifier of the source portfolio.</p>
   */
  SourcePortfolioId?: string;
}

export namespace AssociateProductWithPortfolioInput {
  export function isa(o: any): o is AssociateProductWithPortfolioInput {
    return _smithy.isa(o, "AssociateProductWithPortfolioInput");
  }
}

export interface AssociateProductWithPortfolioOutput extends $MetadataBearer {
  __type?: "AssociateProductWithPortfolioOutput";
}

export namespace AssociateProductWithPortfolioOutput {
  export function isa(o: any): o is AssociateProductWithPortfolioOutput {
    return _smithy.isa(o, "AssociateProductWithPortfolioOutput");
  }
}

export interface AssociateServiceActionWithProvisioningArtifactInput {
  __type?: "AssociateServiceActionWithProvisioningArtifactInput";
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
}

export namespace AssociateServiceActionWithProvisioningArtifactInput {
  export function isa(
    o: any
  ): o is AssociateServiceActionWithProvisioningArtifactInput {
    return _smithy.isa(
      o,
      "AssociateServiceActionWithProvisioningArtifactInput"
    );
  }
}

export interface AssociateServiceActionWithProvisioningArtifactOutput
  extends $MetadataBearer {
  __type?: "AssociateServiceActionWithProvisioningArtifactOutput";
}

export namespace AssociateServiceActionWithProvisioningArtifactOutput {
  export function isa(
    o: any
  ): o is AssociateServiceActionWithProvisioningArtifactOutput {
    return _smithy.isa(
      o,
      "AssociateServiceActionWithProvisioningArtifactOutput"
    );
  }
}

export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
  __type?: "BatchAssociateServiceActionWithProvisioningArtifactInput";
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
   * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
   */
  ServiceActionAssociations: Array<ServiceActionAssociation> | undefined;
}

export namespace BatchAssociateServiceActionWithProvisioningArtifactInput {
  export function isa(
    o: any
  ): o is BatchAssociateServiceActionWithProvisioningArtifactInput {
    return _smithy.isa(
      o,
      "BatchAssociateServiceActionWithProvisioningArtifactInput"
    );
  }
}

export interface BatchAssociateServiceActionWithProvisioningArtifactOutput
  extends $MetadataBearer {
  __type?: "BatchAssociateServiceActionWithProvisioningArtifactOutput";
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   */
  FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
}

export namespace BatchAssociateServiceActionWithProvisioningArtifactOutput {
  export function isa(
    o: any
  ): o is BatchAssociateServiceActionWithProvisioningArtifactOutput {
    return _smithy.isa(
      o,
      "BatchAssociateServiceActionWithProvisioningArtifactOutput"
    );
  }
}

export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
  __type?: "BatchDisassociateServiceActionFromProvisioningArtifactInput";
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
   * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
   */
  ServiceActionAssociations: Array<ServiceActionAssociation> | undefined;
}

export namespace BatchDisassociateServiceActionFromProvisioningArtifactInput {
  export function isa(
    o: any
  ): o is BatchDisassociateServiceActionFromProvisioningArtifactInput {
    return _smithy.isa(
      o,
      "BatchDisassociateServiceActionFromProvisioningArtifactInput"
    );
  }
}

export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput
  extends $MetadataBearer {
  __type?: "BatchDisassociateServiceActionFromProvisioningArtifactOutput";
  /**
   * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
   */
  FailedServiceActionAssociations?: Array<FailedServiceActionAssociation>;
}

export namespace BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  export function isa(
    o: any
  ): o is BatchDisassociateServiceActionFromProvisioningArtifactOutput {
    return _smithy.isa(
      o,
      "BatchDisassociateServiceActionFromProvisioningArtifactOutput"
    );
  }
}

/**
 * <p>Information about a budget.</p>
 */
export interface BudgetDetail {
  __type?: "BudgetDetail";
  /**
   * <p>Name of the associated budget.</p>
   */
  BudgetName?: string;
}

export namespace BudgetDetail {
  export function isa(o: any): o is BudgetDetail {
    return _smithy.isa(o, "BudgetDetail");
  }
}

export enum ChangeAction {
  ADD = "ADD",
  MODIFY = "MODIFY",
  REMOVE = "REMOVE"
}

/**
 * <p>Information about a CloudWatch dashboard.</p>
 */
export interface CloudWatchDashboard {
  __type?: "CloudWatchDashboard";
  /**
   * <p>The name of the CloudWatch dashboard.</p>
   */
  Name?: string;
}

export namespace CloudWatchDashboard {
  export function isa(o: any): o is CloudWatchDashboard {
    return _smithy.isa(o, "CloudWatchDashboard");
  }
}

/**
 * <p>Information about a constraint.</p>
 */
export interface ConstraintDetail {
  __type?: "ConstraintDetail";
  /**
   * <p>The identifier of the constraint.</p>
   */
  ConstraintId?: string;

  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;

  /**
   * <p>The owner of the constraint.</p>
   */
  Owner?: string;

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
}

export namespace ConstraintDetail {
  export function isa(o: any): o is ConstraintDetail {
    return _smithy.isa(o, "ConstraintDetail");
  }
}

/**
 * <p>Summary information about a constraint.</p>
 */
export interface ConstraintSummary {
  __type?: "ConstraintSummary";
  /**
   * <p>The description of the constraint.</p>
   */
  Description?: string;

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
}

export namespace ConstraintSummary {
  export function isa(o: any): o is ConstraintSummary {
    return _smithy.isa(o, "ConstraintSummary");
  }
}

export enum CopyOption {
  CopyTags = "CopyTags"
}

export interface CopyProductInput {
  __type?: "CopyProductInput";
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
   * <p>The copy options. If the value is <code>CopyTags</code>, the tags from the source
   *          product are copied to the target product.</p>
   */
  CopyOptions?: Array<CopyOption | string>;

  /**
   * <p> A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request. </p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source product.</p>
   */
  SourceProductArn: string | undefined;

  /**
   * <p>The identifiers of the provisioning artifacts (also known as versions) of the product to copy.
   *          By default, all provisioning artifacts are copied.</p>
   */
  SourceProvisioningArtifactIdentifiers?: Array<{ [key: string]: string }>;

  /**
   * <p>The identifier of the target product. By default, a new product is created.</p>
   */
  TargetProductId?: string;

  /**
   * <p>A name for the target product. The default is the name of the source product.</p>
   */
  TargetProductName?: string;
}

export namespace CopyProductInput {
  export function isa(o: any): o is CopyProductInput {
    return _smithy.isa(o, "CopyProductInput");
  }
}

export interface CopyProductOutput extends $MetadataBearer {
  __type?: "CopyProductOutput";
  /**
   * <p>The token to use to track the progress of the operation.</p>
   */
  CopyProductToken?: string;
}

export namespace CopyProductOutput {
  export function isa(o: any): o is CopyProductOutput {
    return _smithy.isa(o, "CopyProductOutput");
  }
}

export enum CopyProductStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED"
}

export interface CreateConstraintInput {
  __type?: "CreateConstraintInput";
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
   * <p>The description of the constraint.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p>
   *          <dl>
   *             <dt>LAUNCH</dt>
   *             <dd>
   *                <p>Specify the <code>RoleArn</code> property as follows:</p>
   *                <p>
   *                   <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code>
   *                </p>
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
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

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
}

export namespace CreateConstraintInput {
  export function isa(o: any): o is CreateConstraintInput {
    return _smithy.isa(o, "CreateConstraintInput");
  }
}

export interface CreateConstraintOutput extends $MetadataBearer {
  __type?: "CreateConstraintOutput";
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
  export function isa(o: any): o is CreateConstraintOutput {
    return _smithy.isa(o, "CreateConstraintOutput");
  }
}

export interface CreatePortfolioInput {
  __type?: "CreatePortfolioInput";
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
   * <p>The description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The name of the portfolio provider.</p>
   */
  ProviderName: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreatePortfolioInput {
  export function isa(o: any): o is CreatePortfolioInput {
    return _smithy.isa(o, "CreatePortfolioInput");
  }
}

export interface CreatePortfolioOutput extends $MetadataBearer {
  __type?: "CreatePortfolioOutput";
  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: PortfolioDetail;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreatePortfolioOutput {
  export function isa(o: any): o is CreatePortfolioOutput {
    return _smithy.isa(o, "CreatePortfolioOutput");
  }
}

export interface CreatePortfolioShareInput {
  __type?: "CreatePortfolioShareInput";
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
   * <p>The AWS account ID. For example, <code>123456789012</code>.</p>
   */
  AccountId?: string;

  /**
   * <p>The organization node to whom you are going to share. If <code>OrganizationNode</code> is passed in, <code>PortfolioShare</code> will be created for the node and its children (when applies), and a <code>PortfolioShareToken</code> will be returned in the output in order for the administrator to monitor the status of the <code>PortfolioShare</code> creation process.</p>
   */
  OrganizationNode?: OrganizationNode;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;
}

export namespace CreatePortfolioShareInput {
  export function isa(o: any): o is CreatePortfolioShareInput {
    return _smithy.isa(o, "CreatePortfolioShareInput");
  }
}

export interface CreatePortfolioShareOutput extends $MetadataBearer {
  __type?: "CreatePortfolioShareOutput";
  /**
   * <p>The portfolio share unique identifier. This will only be returned if portfolio is shared to an organization node.</p>
   */
  PortfolioShareToken?: string;
}

export namespace CreatePortfolioShareOutput {
  export function isa(o: any): o is CreatePortfolioShareOutput {
    return _smithy.isa(o, "CreatePortfolioShareOutput");
  }
}

export interface CreateProductInput {
  __type?: "CreateProductInput";
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
   * <p>The description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The distributor of the product.</p>
   */
  Distributor?: string;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The name of the product.</p>
   */
  Name: string | undefined;

  /**
   * <p>The owner of the product.</p>
   */
  Owner: string | undefined;

  /**
   * <p>The type of product.</p>
   */
  ProductType: ProductType | string | undefined;

  /**
   * <p>The configuration of the provisioning artifact.</p>
   */
  ProvisioningArtifactParameters: ProvisioningArtifactProperties | undefined;

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
   * <p>One or more tags.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateProductInput {
  export function isa(o: any): o is CreateProductInput {
    return _smithy.isa(o, "CreateProductInput");
  }
}

export interface CreateProductOutput extends $MetadataBearer {
  __type?: "CreateProductOutput";
  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: ProductViewDetail;

  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateProductOutput {
  export function isa(o: any): o is CreateProductOutput {
    return _smithy.isa(o, "CreateProductOutput");
  }
}

export interface CreateProvisionedProductPlanInput {
  __type?: "CreateProvisionedProductPlanInput";
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

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   */
  NotificationArns?: Array<string>;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   */
  PathId?: string;

  /**
   * <p>The name of the plan.</p>
   */
  PlanName: string | undefined;

  /**
   * <p>The plan type.</p>
   */
  PlanType: ProvisionedProductPlanType | string | undefined;

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
  ProvisioningParameters?: Array<UpdateProvisioningParameter>;

  /**
   * <p>One or more tags.</p>
   *          <p>If the plan is for an existing provisioned product, the product must have a <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateProvisionedProductPlanInput {
  export function isa(o: any): o is CreateProvisionedProductPlanInput {
    return _smithy.isa(o, "CreateProvisionedProductPlanInput");
  }
}

export interface CreateProvisionedProductPlanOutput extends $MetadataBearer {
  __type?: "CreateProvisionedProductPlanOutput";
  /**
   * <p>The plan identifier.</p>
   */
  PlanId?: string;

  /**
   * <p>The name of the plan.</p>
   */
  PlanName?: string;

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
  export function isa(o: any): o is CreateProvisionedProductPlanOutput {
    return _smithy.isa(o, "CreateProvisionedProductPlanOutput");
  }
}

export interface CreateProvisioningArtifactInput {
  __type?: "CreateProvisioningArtifactInput";
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

  /**
   * <p>The configuration for the provisioning artifact.</p>
   */
  Parameters: ProvisioningArtifactProperties | undefined;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;
}

export namespace CreateProvisioningArtifactInput {
  export function isa(o: any): o is CreateProvisioningArtifactInput {
    return _smithy.isa(o, "CreateProvisioningArtifactInput");
  }
}

export interface CreateProvisioningArtifactOutput extends $MetadataBearer {
  __type?: "CreateProvisioningArtifactOutput";
  /**
   * <p>The URL of the CloudFormation template in Amazon S3, in JSON format.</p>
   */
  Info?: { [key: string]: string };

  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
}

export namespace CreateProvisioningArtifactOutput {
  export function isa(o: any): o is CreateProvisioningArtifactOutput {
    return _smithy.isa(o, "CreateProvisioningArtifactOutput");
  }
}

export interface CreateServiceActionInput {
  __type?: "CreateServiceActionInput";
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
   * <p>The self-service action definition. Can be one of the following:</p>
   *          <dl>
   *             <dt>Name</dt>
   *             <dd>
   *                <p>The name of the AWS Systems Manager Document. For example, <code>AWS-RestartEC2Instance</code>.</p>
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
   *                <p>For example: <code>[{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}]</code>.</p>
   *             </dd>
   *          </dl>
   */
  Definition: { [key: string]: string } | undefined;

  /**
   * <p>The service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   */
  DefinitionType: ServiceActionDefinitionType | string | undefined;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
   *   the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The self-service action name.</p>
   */
  Name: string | undefined;
}

export namespace CreateServiceActionInput {
  export function isa(o: any): o is CreateServiceActionInput {
    return _smithy.isa(o, "CreateServiceActionInput");
  }
}

export interface CreateServiceActionOutput extends $MetadataBearer {
  __type?: "CreateServiceActionOutput";
  /**
   * <p>An object containing information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

export namespace CreateServiceActionOutput {
  export function isa(o: any): o is CreateServiceActionOutput {
    return _smithy.isa(o, "CreateServiceActionOutput");
  }
}

export interface DeleteConstraintInput {
  __type?: "DeleteConstraintInput";
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
  export function isa(o: any): o is DeleteConstraintInput {
    return _smithy.isa(o, "DeleteConstraintInput");
  }
}

export interface DeleteConstraintOutput extends $MetadataBearer {
  __type?: "DeleteConstraintOutput";
}

export namespace DeleteConstraintOutput {
  export function isa(o: any): o is DeleteConstraintOutput {
    return _smithy.isa(o, "DeleteConstraintOutput");
  }
}

export interface DeletePortfolioInput {
  __type?: "DeletePortfolioInput";
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
  export function isa(o: any): o is DeletePortfolioInput {
    return _smithy.isa(o, "DeletePortfolioInput");
  }
}

export interface DeletePortfolioOutput extends $MetadataBearer {
  __type?: "DeletePortfolioOutput";
}

export namespace DeletePortfolioOutput {
  export function isa(o: any): o is DeletePortfolioOutput {
    return _smithy.isa(o, "DeletePortfolioOutput");
  }
}

export interface DeletePortfolioShareInput {
  __type?: "DeletePortfolioShareInput";
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
   * <p>The AWS account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The organization node to whom you are going to stop sharing.</p>
   */
  OrganizationNode?: OrganizationNode;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;
}

export namespace DeletePortfolioShareInput {
  export function isa(o: any): o is DeletePortfolioShareInput {
    return _smithy.isa(o, "DeletePortfolioShareInput");
  }
}

export interface DeletePortfolioShareOutput extends $MetadataBearer {
  __type?: "DeletePortfolioShareOutput";
  /**
   * <p>The portfolio share unique identifier. This will only be returned if delete is made to an organization node.</p>
   */
  PortfolioShareToken?: string;
}

export namespace DeletePortfolioShareOutput {
  export function isa(o: any): o is DeletePortfolioShareOutput {
    return _smithy.isa(o, "DeletePortfolioShareOutput");
  }
}

export interface DeleteProductInput {
  __type?: "DeleteProductInput";
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
  export function isa(o: any): o is DeleteProductInput {
    return _smithy.isa(o, "DeleteProductInput");
  }
}

export interface DeleteProductOutput extends $MetadataBearer {
  __type?: "DeleteProductOutput";
}

export namespace DeleteProductOutput {
  export function isa(o: any): o is DeleteProductOutput {
    return _smithy.isa(o, "DeleteProductOutput");
  }
}

export interface DeleteProvisionedProductPlanInput {
  __type?: "DeleteProvisionedProductPlanInput";
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
   * <p>If set to true, AWS Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   */
  IgnoreErrors?: boolean;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId: string | undefined;
}

export namespace DeleteProvisionedProductPlanInput {
  export function isa(o: any): o is DeleteProvisionedProductPlanInput {
    return _smithy.isa(o, "DeleteProvisionedProductPlanInput");
  }
}

export interface DeleteProvisionedProductPlanOutput extends $MetadataBearer {
  __type?: "DeleteProvisionedProductPlanOutput";
}

export namespace DeleteProvisionedProductPlanOutput {
  export function isa(o: any): o is DeleteProvisionedProductPlanOutput {
    return _smithy.isa(o, "DeleteProvisionedProductPlanOutput");
  }
}

export interface DeleteProvisioningArtifactInput {
  __type?: "DeleteProvisioningArtifactInput";
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
  export function isa(o: any): o is DeleteProvisioningArtifactInput {
    return _smithy.isa(o, "DeleteProvisioningArtifactInput");
  }
}

export interface DeleteProvisioningArtifactOutput extends $MetadataBearer {
  __type?: "DeleteProvisioningArtifactOutput";
}

export namespace DeleteProvisioningArtifactOutput {
  export function isa(o: any): o is DeleteProvisioningArtifactOutput {
    return _smithy.isa(o, "DeleteProvisioningArtifactOutput");
  }
}

export interface DeleteServiceActionInput {
  __type?: "DeleteServiceActionInput";
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
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  Id: string | undefined;
}

export namespace DeleteServiceActionInput {
  export function isa(o: any): o is DeleteServiceActionInput {
    return _smithy.isa(o, "DeleteServiceActionInput");
  }
}

export interface DeleteServiceActionOutput extends $MetadataBearer {
  __type?: "DeleteServiceActionOutput";
}

export namespace DeleteServiceActionOutput {
  export function isa(o: any): o is DeleteServiceActionOutput {
    return _smithy.isa(o, "DeleteServiceActionOutput");
  }
}

export interface DescribeConstraintInput {
  __type?: "DescribeConstraintInput";
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
  export function isa(o: any): o is DescribeConstraintInput {
    return _smithy.isa(o, "DescribeConstraintInput");
  }
}

export interface DescribeConstraintOutput extends $MetadataBearer {
  __type?: "DescribeConstraintOutput";
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
  export function isa(o: any): o is DescribeConstraintOutput {
    return _smithy.isa(o, "DescribeConstraintOutput");
  }
}

export interface DescribeCopyProductStatusInput {
  __type?: "DescribeCopyProductStatusInput";
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
  export function isa(o: any): o is DescribeCopyProductStatusInput {
    return _smithy.isa(o, "DescribeCopyProductStatusInput");
  }
}

export interface DescribeCopyProductStatusOutput extends $MetadataBearer {
  __type?: "DescribeCopyProductStatusOutput";
  /**
   * <p>The status of the copy product operation.</p>
   */
  CopyProductStatus?: CopyProductStatus | string;

  /**
   * <p>The status message.</p>
   */
  StatusDetail?: string;

  /**
   * <p>The identifier of the copied product.</p>
   */
  TargetProductId?: string;
}

export namespace DescribeCopyProductStatusOutput {
  export function isa(o: any): o is DescribeCopyProductStatusOutput {
    return _smithy.isa(o, "DescribeCopyProductStatusOutput");
  }
}

export interface DescribePortfolioInput {
  __type?: "DescribePortfolioInput";
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
  export function isa(o: any): o is DescribePortfolioInput {
    return _smithy.isa(o, "DescribePortfolioInput");
  }
}

export interface DescribePortfolioOutput extends $MetadataBearer {
  __type?: "DescribePortfolioOutput";
  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<BudgetDetail>;

  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: PortfolioDetail;

  /**
   * <p>Information about the TagOptions associated with the portfolio.</p>
   */
  TagOptions?: Array<TagOptionDetail>;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Array<Tag>;
}

export namespace DescribePortfolioOutput {
  export function isa(o: any): o is DescribePortfolioOutput {
    return _smithy.isa(o, "DescribePortfolioOutput");
  }
}

export interface DescribePortfolioShareStatusInput {
  __type?: "DescribePortfolioShareStatusInput";
  /**
   * <p>The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.</p>
   */
  PortfolioShareToken: string | undefined;
}

export namespace DescribePortfolioShareStatusInput {
  export function isa(o: any): o is DescribePortfolioShareStatusInput {
    return _smithy.isa(o, "DescribePortfolioShareStatusInput");
  }
}

export interface DescribePortfolioShareStatusOutput extends $MetadataBearer {
  __type?: "DescribePortfolioShareStatusOutput";
  /**
   * <p>Organization node identifier. It can be either account id, organizational unit id or organization id.</p>
   */
  OrganizationNodeValue?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId?: string;

  /**
   * <p>The token for the portfolio share operation. For example, <code>share-6v24abcdefghi</code>.</p>
   */
  PortfolioShareToken?: string;

  /**
   * <p>Information about the portfolio share operation.</p>
   */
  ShareDetails?: ShareDetails;

  /**
   * <p>Status of the portfolio share operation.</p>
   */
  Status?: ShareStatus | string;
}

export namespace DescribePortfolioShareStatusOutput {
  export function isa(o: any): o is DescribePortfolioShareStatusOutput {
    return _smithy.isa(o, "DescribePortfolioShareStatusOutput");
  }
}

export interface DescribeProductAsAdminInput {
  __type?: "DescribeProductAsAdminInput";
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

export namespace DescribeProductAsAdminInput {
  export function isa(o: any): o is DescribeProductAsAdminInput {
    return _smithy.isa(o, "DescribeProductAsAdminInput");
  }
}

export interface DescribeProductAsAdminOutput extends $MetadataBearer {
  __type?: "DescribeProductAsAdminOutput";
  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<BudgetDetail>;

  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: ProductViewDetail;

  /**
   * <p>Information about the provisioning artifacts (also known as versions) for the specified product.</p>
   */
  ProvisioningArtifactSummaries?: Array<ProvisioningArtifactSummary>;

  /**
   * <p>Information about the TagOptions associated with the product.</p>
   */
  TagOptions?: Array<TagOptionDetail>;

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Array<Tag>;
}

export namespace DescribeProductAsAdminOutput {
  export function isa(o: any): o is DescribeProductAsAdminOutput {
    return _smithy.isa(o, "DescribeProductAsAdminOutput");
  }
}

export interface DescribeProductInput {
  __type?: "DescribeProductInput";
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

export namespace DescribeProductInput {
  export function isa(o: any): o is DescribeProductInput {
    return _smithy.isa(o, "DescribeProductInput");
  }
}

export interface DescribeProductOutput extends $MetadataBearer {
  __type?: "DescribeProductOutput";
  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<BudgetDetail>;

  /**
   * <p>Summary information about the product view.</p>
   */
  ProductViewSummary?: ProductViewSummary;

  /**
   * <p>Information about the provisioning artifacts for the specified product.</p>
   */
  ProvisioningArtifacts?: Array<ProvisioningArtifact>;
}

export namespace DescribeProductOutput {
  export function isa(o: any): o is DescribeProductOutput {
    return _smithy.isa(o, "DescribeProductOutput");
  }
}

export interface DescribeProductViewInput {
  __type?: "DescribeProductViewInput";
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
  export function isa(o: any): o is DescribeProductViewInput {
    return _smithy.isa(o, "DescribeProductViewInput");
  }
}

export interface DescribeProductViewOutput extends $MetadataBearer {
  __type?: "DescribeProductViewOutput";
  /**
   * <p>Summary information about the product.</p>
   */
  ProductViewSummary?: ProductViewSummary;

  /**
   * <p>Information about the provisioning artifacts for the product.</p>
   */
  ProvisioningArtifacts?: Array<ProvisioningArtifact>;
}

export namespace DescribeProductViewOutput {
  export function isa(o: any): o is DescribeProductViewOutput {
    return _smithy.isa(o, "DescribeProductViewOutput");
  }
}

export interface DescribeProvisionedProductInput {
  __type?: "DescribeProvisionedProductInput";
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
   * <p>The provisioned product identifier.</p>
   */
  Id: string | undefined;
}

export namespace DescribeProvisionedProductInput {
  export function isa(o: any): o is DescribeProvisionedProductInput {
    return _smithy.isa(o, "DescribeProvisionedProductInput");
  }
}

export interface DescribeProvisionedProductOutput extends $MetadataBearer {
  __type?: "DescribeProvisionedProductOutput";
  /**
   * <p>Any CloudWatch dashboards that were created when provisioning the product.</p>
   */
  CloudWatchDashboards?: Array<CloudWatchDashboard>;

  /**
   * <p>Information about the provisioned product.</p>
   */
  ProvisionedProductDetail?: ProvisionedProductDetail;
}

export namespace DescribeProvisionedProductOutput {
  export function isa(o: any): o is DescribeProvisionedProductOutput {
    return _smithy.isa(o, "DescribeProvisionedProductOutput");
  }
}

export interface DescribeProvisionedProductPlanInput {
  __type?: "DescribeProvisionedProductPlanInput";
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

  /**
   * <p>The plan identifier.</p>
   */
  PlanId: string | undefined;
}

export namespace DescribeProvisionedProductPlanInput {
  export function isa(o: any): o is DescribeProvisionedProductPlanInput {
    return _smithy.isa(o, "DescribeProvisionedProductPlanInput");
  }
}

export interface DescribeProvisionedProductPlanOutput extends $MetadataBearer {
  __type?: "DescribeProvisionedProductPlanOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the plan.</p>
   */
  ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;

  /**
   * <p>Information about the resource changes that will occur when the plan is executed.</p>
   */
  ResourceChanges?: Array<ResourceChange>;
}

export namespace DescribeProvisionedProductPlanOutput {
  export function isa(o: any): o is DescribeProvisionedProductPlanOutput {
    return _smithy.isa(o, "DescribeProvisionedProductPlanOutput");
  }
}

export interface DescribeProvisioningArtifactInput {
  __type?: "DescribeProvisioningArtifactInput";
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
   * <p>Indicates whether a verbose level of detail is enabled.</p>
   */
  Verbose?: boolean;
}

export namespace DescribeProvisioningArtifactInput {
  export function isa(o: any): o is DescribeProvisioningArtifactInput {
    return _smithy.isa(o, "DescribeProvisioningArtifactInput");
  }
}

export interface DescribeProvisioningArtifactOutput extends $MetadataBearer {
  __type?: "DescribeProvisioningArtifactOutput";
  /**
   * <p>The URL of the CloudFormation template in Amazon S3.</p>
   */
  Info?: { [key: string]: string };

  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
}

export namespace DescribeProvisioningArtifactOutput {
  export function isa(o: any): o is DescribeProvisioningArtifactOutput {
    return _smithy.isa(o, "DescribeProvisioningArtifactOutput");
  }
}

export interface DescribeProvisioningParametersInput {
  __type?: "DescribeProvisioningParametersInput";
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
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId: string | undefined;
}

export namespace DescribeProvisioningParametersInput {
  export function isa(o: any): o is DescribeProvisioningParametersInput {
    return _smithy.isa(o, "DescribeProvisioningParametersInput");
  }
}

export interface DescribeProvisioningParametersOutput extends $MetadataBearer {
  __type?: "DescribeProvisioningParametersOutput";
  /**
   * <p>Information about the constraints used to provision the product.</p>
   */
  ConstraintSummaries?: Array<ConstraintSummary>;

  /**
   * <p>Information about the parameters used to provision the product.</p>
   */
  ProvisioningArtifactParameters?: Array<ProvisioningArtifactParameter>;

  /**
   * <p>An object that contains information about preferences, such as regions and accounts, for the provisioning artifact.</p>
   */
  ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences;

  /**
   * <p>Information about the TagOptions associated with the resource.</p>
   */
  TagOptions?: Array<TagOptionSummary>;

  /**
   * <p>Any additional metadata specifically related to the provisioning of the product. For
   *          example, see the <code>Version</code> field of the CloudFormation template.</p>
   */
  UsageInstructions?: Array<UsageInstruction>;
}

export namespace DescribeProvisioningParametersOutput {
  export function isa(o: any): o is DescribeProvisioningParametersOutput {
    return _smithy.isa(o, "DescribeProvisioningParametersOutput");
  }
}

export interface DescribeRecordInput {
  __type?: "DescribeRecordInput";
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
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;
}

export namespace DescribeRecordInput {
  export function isa(o: any): o is DescribeRecordInput {
    return _smithy.isa(o, "DescribeRecordInput");
  }
}

export interface DescribeRecordOutput extends $MetadataBearer {
  __type?: "DescribeRecordOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the product.</p>
   */
  RecordDetail?: RecordDetail;

  /**
   * <p>Information about the product created as the result of a request. For example, the output for
   *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
   */
  RecordOutputs?: Array<RecordOutput>;
}

export namespace DescribeRecordOutput {
  export function isa(o: any): o is DescribeRecordOutput {
    return _smithy.isa(o, "DescribeRecordOutput");
  }
}

export interface DescribeServiceActionExecutionParametersInput {
  __type?: "DescribeServiceActionExecutionParametersInput";
  AcceptLanguage?: string;
  ProvisionedProductId: string | undefined;
  ServiceActionId: string | undefined;
}

export namespace DescribeServiceActionExecutionParametersInput {
  export function isa(
    o: any
  ): o is DescribeServiceActionExecutionParametersInput {
    return _smithy.isa(o, "DescribeServiceActionExecutionParametersInput");
  }
}

export interface DescribeServiceActionExecutionParametersOutput
  extends $MetadataBearer {
  __type?: "DescribeServiceActionExecutionParametersOutput";
  ServiceActionParameters?: Array<ExecutionParameter>;
}

export namespace DescribeServiceActionExecutionParametersOutput {
  export function isa(
    o: any
  ): o is DescribeServiceActionExecutionParametersOutput {
    return _smithy.isa(o, "DescribeServiceActionExecutionParametersOutput");
  }
}

export interface DescribeServiceActionInput {
  __type?: "DescribeServiceActionInput";
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
   * <p>The self-service action identifier.</p>
   */
  Id: string | undefined;
}

export namespace DescribeServiceActionInput {
  export function isa(o: any): o is DescribeServiceActionInput {
    return _smithy.isa(o, "DescribeServiceActionInput");
  }
}

export interface DescribeServiceActionOutput extends $MetadataBearer {
  __type?: "DescribeServiceActionOutput";
  /**
   * <p>Detailed information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

export namespace DescribeServiceActionOutput {
  export function isa(o: any): o is DescribeServiceActionOutput {
    return _smithy.isa(o, "DescribeServiceActionOutput");
  }
}

export interface DisableAWSOrganizationsAccessInput {
  __type?: "DisableAWSOrganizationsAccessInput";
}

export namespace DisableAWSOrganizationsAccessInput {
  export function isa(o: any): o is DisableAWSOrganizationsAccessInput {
    return _smithy.isa(o, "DisableAWSOrganizationsAccessInput");
  }
}

export interface DisableAWSOrganizationsAccessOutput extends $MetadataBearer {
  __type?: "DisableAWSOrganizationsAccessOutput";
}

export namespace DisableAWSOrganizationsAccessOutput {
  export function isa(o: any): o is DisableAWSOrganizationsAccessOutput {
    return _smithy.isa(o, "DisableAWSOrganizationsAccessOutput");
  }
}

export interface DisassociateBudgetFromResourceInput {
  __type?: "DisassociateBudgetFromResourceInput";
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
  export function isa(o: any): o is DisassociateBudgetFromResourceInput {
    return _smithy.isa(o, "DisassociateBudgetFromResourceInput");
  }
}

export interface DisassociateBudgetFromResourceOutput extends $MetadataBearer {
  __type?: "DisassociateBudgetFromResourceOutput";
}

export namespace DisassociateBudgetFromResourceOutput {
  export function isa(o: any): o is DisassociateBudgetFromResourceOutput {
    return _smithy.isa(o, "DisassociateBudgetFromResourceOutput");
  }
}

export interface DisassociatePrincipalFromPortfolioInput {
  __type?: "DisassociatePrincipalFromPortfolioInput";
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
  export function isa(o: any): o is DisassociatePrincipalFromPortfolioInput {
    return _smithy.isa(o, "DisassociatePrincipalFromPortfolioInput");
  }
}

export interface DisassociatePrincipalFromPortfolioOutput
  extends $MetadataBearer {
  __type?: "DisassociatePrincipalFromPortfolioOutput";
}

export namespace DisassociatePrincipalFromPortfolioOutput {
  export function isa(o: any): o is DisassociatePrincipalFromPortfolioOutput {
    return _smithy.isa(o, "DisassociatePrincipalFromPortfolioOutput");
  }
}

export interface DisassociateProductFromPortfolioInput {
  __type?: "DisassociateProductFromPortfolioInput";
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
}

export namespace DisassociateProductFromPortfolioInput {
  export function isa(o: any): o is DisassociateProductFromPortfolioInput {
    return _smithy.isa(o, "DisassociateProductFromPortfolioInput");
  }
}

export interface DisassociateProductFromPortfolioOutput
  extends $MetadataBearer {
  __type?: "DisassociateProductFromPortfolioOutput";
}

export namespace DisassociateProductFromPortfolioOutput {
  export function isa(o: any): o is DisassociateProductFromPortfolioOutput {
    return _smithy.isa(o, "DisassociateProductFromPortfolioOutput");
  }
}

export interface DisassociateServiceActionFromProvisioningArtifactInput {
  __type?: "DisassociateServiceActionFromProvisioningArtifactInput";
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
}

export namespace DisassociateServiceActionFromProvisioningArtifactInput {
  export function isa(
    o: any
  ): o is DisassociateServiceActionFromProvisioningArtifactInput {
    return _smithy.isa(
      o,
      "DisassociateServiceActionFromProvisioningArtifactInput"
    );
  }
}

export interface DisassociateServiceActionFromProvisioningArtifactOutput
  extends $MetadataBearer {
  __type?: "DisassociateServiceActionFromProvisioningArtifactOutput";
}

export namespace DisassociateServiceActionFromProvisioningArtifactOutput {
  export function isa(
    o: any
  ): o is DisassociateServiceActionFromProvisioningArtifactOutput {
    return _smithy.isa(
      o,
      "DisassociateServiceActionFromProvisioningArtifactOutput"
    );
  }
}

/**
 * <p>The specified resource is a duplicate.</p>
 */
export interface DuplicateResourceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "DuplicateResourceException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateResourceException {
  export function isa(o: any): o is DuplicateResourceException {
    return _smithy.isa(o, "DuplicateResourceException");
  }
}

export interface EnableAWSOrganizationsAccessInput {
  __type?: "EnableAWSOrganizationsAccessInput";
}

export namespace EnableAWSOrganizationsAccessInput {
  export function isa(o: any): o is EnableAWSOrganizationsAccessInput {
    return _smithy.isa(o, "EnableAWSOrganizationsAccessInput");
  }
}

export interface EnableAWSOrganizationsAccessOutput extends $MetadataBearer {
  __type?: "EnableAWSOrganizationsAccessOutput";
}

export namespace EnableAWSOrganizationsAccessOutput {
  export function isa(o: any): o is EnableAWSOrganizationsAccessOutput {
    return _smithy.isa(o, "EnableAWSOrganizationsAccessOutput");
  }
}

export enum EvaluationType {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC"
}

export interface ExecuteProvisionedProductPlanInput {
  __type?: "ExecuteProvisionedProductPlanInput";
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

  /**
   * <p>The plan identifier.</p>
   */
  PlanId: string | undefined;
}

export namespace ExecuteProvisionedProductPlanInput {
  export function isa(o: any): o is ExecuteProvisionedProductPlanInput {
    return _smithy.isa(o, "ExecuteProvisionedProductPlanInput");
  }
}

export interface ExecuteProvisionedProductPlanOutput extends $MetadataBearer {
  __type?: "ExecuteProvisionedProductPlanOutput";
  /**
   * <p>Information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace ExecuteProvisionedProductPlanOutput {
  export function isa(o: any): o is ExecuteProvisionedProductPlanOutput {
    return _smithy.isa(o, "ExecuteProvisionedProductPlanOutput");
  }
}

export interface ExecuteProvisionedProductServiceActionInput {
  __type?: "ExecuteProvisionedProductServiceActionInput";
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
   * <p>An idempotency token that uniquely identifies the execute request.</p>
   */
  ExecuteToken?: string;

  Parameters?: { [key: string]: Array<string> };
  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId: string | undefined;
}

export namespace ExecuteProvisionedProductServiceActionInput {
  export function isa(
    o: any
  ): o is ExecuteProvisionedProductServiceActionInput {
    return _smithy.isa(o, "ExecuteProvisionedProductServiceActionInput");
  }
}

export interface ExecuteProvisionedProductServiceActionOutput
  extends $MetadataBearer {
  __type?: "ExecuteProvisionedProductServiceActionOutput";
  /**
   * <p>An object containing detailed information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace ExecuteProvisionedProductServiceActionOutput {
  export function isa(
    o: any
  ): o is ExecuteProvisionedProductServiceActionOutput {
    return _smithy.isa(o, "ExecuteProvisionedProductServiceActionOutput");
  }
}

export interface ExecutionParameter {
  __type?: "ExecutionParameter";
  DefaultValues?: Array<string>;
  Name?: string;
  Type?: string;
}

export namespace ExecutionParameter {
  export function isa(o: any): o is ExecutionParameter {
    return _smithy.isa(o, "ExecutionParameter");
  }
}

/**
 * <p>An object containing information about the error, along with identifying information about the self-service action and its associations.</p>
 */
export interface FailedServiceActionAssociation {
  __type?: "FailedServiceActionAssociation";
  /**
   * <p>The error code. Valid values are listed below.</p>
   */
  ErrorCode?: ServiceActionAssociationErrorCode | string;

  /**
   * <p>A text description of the error.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId?: string;
}

export namespace FailedServiceActionAssociation {
  export function isa(o: any): o is FailedServiceActionAssociation {
    return _smithy.isa(o, "FailedServiceActionAssociation");
  }
}

export interface GetAWSOrganizationsAccessStatusInput {
  __type?: "GetAWSOrganizationsAccessStatusInput";
}

export namespace GetAWSOrganizationsAccessStatusInput {
  export function isa(o: any): o is GetAWSOrganizationsAccessStatusInput {
    return _smithy.isa(o, "GetAWSOrganizationsAccessStatusInput");
  }
}

export interface GetAWSOrganizationsAccessStatusOutput extends $MetadataBearer {
  __type?: "GetAWSOrganizationsAccessStatusOutput";
  /**
   * <p>The status of the portfolio share feature.</p>
   */
  AccessStatus?: AccessStatus | string;
}

export namespace GetAWSOrganizationsAccessStatusOutput {
  export function isa(o: any): o is GetAWSOrganizationsAccessStatusOutput {
    return _smithy.isa(o, "GetAWSOrganizationsAccessStatusOutput");
  }
}

/**
 * <p>One or more parameters provided to the operation are not valid.</p>
 */
export interface InvalidParametersException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidParametersException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParametersException {
  export function isa(o: any): o is InvalidParametersException {
    return _smithy.isa(o, "InvalidParametersException");
  }
}

/**
 * <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 */
export interface InvalidStateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidStateException {
  export function isa(o: any): o is InvalidStateException {
    return _smithy.isa(o, "InvalidStateException");
  }
}

/**
 * <p>Summary information about a product path for a user.</p>
 */
export interface LaunchPathSummary {
  __type?: "LaunchPathSummary";
  /**
   * <p>The constraints on the portfolio-product relationship.</p>
   */
  ConstraintSummaries?: Array<ConstraintSummary>;

  /**
   * <p>The identifier of the product path.</p>
   */
  Id?: string;

  /**
   * <p>The name of the portfolio to which the user was assigned.</p>
   */
  Name?: string;

  /**
   * <p>The tags associated with this product path.</p>
   */
  Tags?: Array<Tag>;
}

export namespace LaunchPathSummary {
  export function isa(o: any): o is LaunchPathSummary {
    return _smithy.isa(o, "LaunchPathSummary");
  }
}

/**
 * <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

export interface ListAcceptedPortfolioSharesInput {
  __type?: "ListAcceptedPortfolioSharesInput";
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

  /**
   * <p>The type of shared portfolios to list. The default is to list imported portfolios.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_ORGANIZATIONS</code> - List portfolios shared by the master account of your organization</p>
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
  export function isa(o: any): o is ListAcceptedPortfolioSharesInput {
    return _smithy.isa(o, "ListAcceptedPortfolioSharesInput");
  }
}

export interface ListAcceptedPortfolioSharesOutput extends $MetadataBearer {
  __type?: "ListAcceptedPortfolioSharesOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the portfolios.</p>
   */
  PortfolioDetails?: Array<PortfolioDetail>;
}

export namespace ListAcceptedPortfolioSharesOutput {
  export function isa(o: any): o is ListAcceptedPortfolioSharesOutput {
    return _smithy.isa(o, "ListAcceptedPortfolioSharesOutput");
  }
}

export interface ListBudgetsForResourceInput {
  __type?: "ListBudgetsForResourceInput";
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

  /**
   * <p>The resource identifier.</p>
   */
  ResourceId: string | undefined;
}

export namespace ListBudgetsForResourceInput {
  export function isa(o: any): o is ListBudgetsForResourceInput {
    return _smithy.isa(o, "ListBudgetsForResourceInput");
  }
}

export interface ListBudgetsForResourceOutput extends $MetadataBearer {
  __type?: "ListBudgetsForResourceOutput";
  /**
   * <p>Information about the associated budgets.</p>
   */
  Budgets?: Array<BudgetDetail>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

export namespace ListBudgetsForResourceOutput {
  export function isa(o: any): o is ListBudgetsForResourceOutput {
    return _smithy.isa(o, "ListBudgetsForResourceOutput");
  }
}

export interface ListConstraintsForPortfolioInput {
  __type?: "ListConstraintsForPortfolioInput";
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

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;
}

export namespace ListConstraintsForPortfolioInput {
  export function isa(o: any): o is ListConstraintsForPortfolioInput {
    return _smithy.isa(o, "ListConstraintsForPortfolioInput");
  }
}

export interface ListConstraintsForPortfolioOutput extends $MetadataBearer {
  __type?: "ListConstraintsForPortfolioOutput";
  /**
   * <p>Information about the constraints.</p>
   */
  ConstraintDetails?: Array<ConstraintDetail>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

export namespace ListConstraintsForPortfolioOutput {
  export function isa(o: any): o is ListConstraintsForPortfolioOutput {
    return _smithy.isa(o, "ListConstraintsForPortfolioOutput");
  }
}

export interface ListLaunchPathsInput {
  __type?: "ListLaunchPathsInput";
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

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;
}

export namespace ListLaunchPathsInput {
  export function isa(o: any): o is ListLaunchPathsInput {
    return _smithy.isa(o, "ListLaunchPathsInput");
  }
}

export interface ListLaunchPathsOutput extends $MetadataBearer {
  __type?: "ListLaunchPathsOutput";
  /**
   * <p>Information about the launch path.</p>
   */
  LaunchPathSummaries?: Array<LaunchPathSummary>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

export namespace ListLaunchPathsOutput {
  export function isa(o: any): o is ListLaunchPathsOutput {
    return _smithy.isa(o, "ListLaunchPathsOutput");
  }
}

export interface ListOrganizationPortfolioAccessInput {
  __type?: "ListOrganizationPortfolioAccessInput";
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
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The portfolio identifier. For example, <code>port-2abcdext3y5fk</code>.</p>
   */
  PortfolioId: string | undefined;
}

export namespace ListOrganizationPortfolioAccessInput {
  export function isa(o: any): o is ListOrganizationPortfolioAccessInput {
    return _smithy.isa(o, "ListOrganizationPortfolioAccessInput");
  }
}

export interface ListOrganizationPortfolioAccessOutput extends $MetadataBearer {
  __type?: "ListOrganizationPortfolioAccessOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Displays information about the organization nodes.</p>
   */
  OrganizationNodes?: Array<OrganizationNode>;
}

export namespace ListOrganizationPortfolioAccessOutput {
  export function isa(o: any): o is ListOrganizationPortfolioAccessOutput {
    return _smithy.isa(o, "ListOrganizationPortfolioAccessOutput");
  }
}

export interface ListPortfolioAccessInput {
  __type?: "ListPortfolioAccessInput";
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
}

export namespace ListPortfolioAccessInput {
  export function isa(o: any): o is ListPortfolioAccessInput {
    return _smithy.isa(o, "ListPortfolioAccessInput");
  }
}

export interface ListPortfolioAccessOutput extends $MetadataBearer {
  __type?: "ListPortfolioAccessOutput";
  /**
   * <p>Information about the AWS accounts with access to the portfolio.</p>
   */
  AccountIds?: Array<string>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;
}

export namespace ListPortfolioAccessOutput {
  export function isa(o: any): o is ListPortfolioAccessOutput {
    return _smithy.isa(o, "ListPortfolioAccessOutput");
  }
}

export interface ListPortfoliosForProductInput {
  __type?: "ListPortfoliosForProductInput";
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

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;
}

export namespace ListPortfoliosForProductInput {
  export function isa(o: any): o is ListPortfoliosForProductInput {
    return _smithy.isa(o, "ListPortfoliosForProductInput");
  }
}

export interface ListPortfoliosForProductOutput extends $MetadataBearer {
  __type?: "ListPortfoliosForProductOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the portfolios.</p>
   */
  PortfolioDetails?: Array<PortfolioDetail>;
}

export namespace ListPortfoliosForProductOutput {
  export function isa(o: any): o is ListPortfoliosForProductOutput {
    return _smithy.isa(o, "ListPortfoliosForProductOutput");
  }
}

export interface ListPortfoliosInput {
  __type?: "ListPortfoliosInput";
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

export namespace ListPortfoliosInput {
  export function isa(o: any): o is ListPortfoliosInput {
    return _smithy.isa(o, "ListPortfoliosInput");
  }
}

export interface ListPortfoliosOutput extends $MetadataBearer {
  __type?: "ListPortfoliosOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the portfolios.</p>
   */
  PortfolioDetails?: Array<PortfolioDetail>;
}

export namespace ListPortfoliosOutput {
  export function isa(o: any): o is ListPortfoliosOutput {
    return _smithy.isa(o, "ListPortfoliosOutput");
  }
}

export interface ListPrincipalsForPortfolioInput {
  __type?: "ListPrincipalsForPortfolioInput";
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

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string | undefined;
}

export namespace ListPrincipalsForPortfolioInput {
  export function isa(o: any): o is ListPrincipalsForPortfolioInput {
    return _smithy.isa(o, "ListPrincipalsForPortfolioInput");
  }
}

export interface ListPrincipalsForPortfolioOutput extends $MetadataBearer {
  __type?: "ListPrincipalsForPortfolioOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The IAM principals (users or roles) associated with the portfolio.</p>
   */
  Principals?: Array<Principal>;
}

export namespace ListPrincipalsForPortfolioOutput {
  export function isa(o: any): o is ListPrincipalsForPortfolioOutput {
    return _smithy.isa(o, "ListPrincipalsForPortfolioOutput");
  }
}

export interface ListProvisionedProductPlansInput {
  __type?: "ListProvisionedProductPlansInput";
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

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;
}

export namespace ListProvisionedProductPlansInput {
  export function isa(o: any): o is ListProvisionedProductPlansInput {
    return _smithy.isa(o, "ListProvisionedProductPlansInput");
  }
}

export interface ListProvisionedProductPlansOutput extends $MetadataBearer {
  __type?: "ListProvisionedProductPlansOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the plans.</p>
   */
  ProvisionedProductPlans?: Array<ProvisionedProductPlanSummary>;
}

export namespace ListProvisionedProductPlansOutput {
  export function isa(o: any): o is ListProvisionedProductPlansOutput {
    return _smithy.isa(o, "ListProvisionedProductPlansOutput");
  }
}

export interface ListProvisioningArtifactsForServiceActionInput {
  __type?: "ListProvisioningArtifactsForServiceActionInput";
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

  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId: string | undefined;
}

export namespace ListProvisioningArtifactsForServiceActionInput {
  export function isa(
    o: any
  ): o is ListProvisioningArtifactsForServiceActionInput {
    return _smithy.isa(o, "ListProvisioningArtifactsForServiceActionInput");
  }
}

export interface ListProvisioningArtifactsForServiceActionOutput
  extends $MetadataBearer {
  __type?: "ListProvisioningArtifactsForServiceActionOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>An array of objects with information about product views and provisioning artifacts.</p>
   */
  ProvisioningArtifactViews?: Array<ProvisioningArtifactView>;
}

export namespace ListProvisioningArtifactsForServiceActionOutput {
  export function isa(
    o: any
  ): o is ListProvisioningArtifactsForServiceActionOutput {
    return _smithy.isa(o, "ListProvisioningArtifactsForServiceActionOutput");
  }
}

export interface ListProvisioningArtifactsInput {
  __type?: "ListProvisioningArtifactsInput";
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
  export function isa(o: any): o is ListProvisioningArtifactsInput {
    return _smithy.isa(o, "ListProvisioningArtifactsInput");
  }
}

export interface ListProvisioningArtifactsOutput extends $MetadataBearer {
  __type?: "ListProvisioningArtifactsOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the provisioning artifacts.</p>
   */
  ProvisioningArtifactDetails?: Array<ProvisioningArtifactDetail>;
}

export namespace ListProvisioningArtifactsOutput {
  export function isa(o: any): o is ListProvisioningArtifactsOutput {
    return _smithy.isa(o, "ListProvisioningArtifactsOutput");
  }
}

export interface ListRecordHistoryInput {
  __type?: "ListRecordHistoryInput";
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

  /**
   * <p>The search filter to scope the results.</p>
   */
  SearchFilter?: ListRecordHistorySearchFilter;
}

export namespace ListRecordHistoryInput {
  export function isa(o: any): o is ListRecordHistoryInput {
    return _smithy.isa(o, "ListRecordHistoryInput");
  }
}

export interface ListRecordHistoryOutput extends $MetadataBearer {
  __type?: "ListRecordHistoryOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The records, in reverse chronological order.</p>
   */
  RecordDetails?: Array<RecordDetail>;
}

export namespace ListRecordHistoryOutput {
  export function isa(o: any): o is ListRecordHistoryOutput {
    return _smithy.isa(o, "ListRecordHistoryOutput");
  }
}

/**
 * <p>The search filter to use when listing history records.</p>
 */
export interface ListRecordHistorySearchFilter {
  __type?: "ListRecordHistorySearchFilter";
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
  export function isa(o: any): o is ListRecordHistorySearchFilter {
    return _smithy.isa(o, "ListRecordHistorySearchFilter");
  }
}

export interface ListServiceActionsForProvisioningArtifactInput {
  __type?: "ListServiceActionsForProvisioningArtifactInput";
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

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId: string | undefined;
}

export namespace ListServiceActionsForProvisioningArtifactInput {
  export function isa(
    o: any
  ): o is ListServiceActionsForProvisioningArtifactInput {
    return _smithy.isa(o, "ListServiceActionsForProvisioningArtifactInput");
  }
}

export interface ListServiceActionsForProvisioningArtifactOutput
  extends $MetadataBearer {
  __type?: "ListServiceActionsForProvisioningArtifactOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>An object containing information about the self-service actions associated with the provisioning artifact.</p>
   */
  ServiceActionSummaries?: Array<ServiceActionSummary>;
}

export namespace ListServiceActionsForProvisioningArtifactOutput {
  export function isa(
    o: any
  ): o is ListServiceActionsForProvisioningArtifactOutput {
    return _smithy.isa(o, "ListServiceActionsForProvisioningArtifactOutput");
  }
}

export interface ListServiceActionsInput {
  __type?: "ListServiceActionsInput";
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
  export function isa(o: any): o is ListServiceActionsInput {
    return _smithy.isa(o, "ListServiceActionsInput");
  }
}

export interface ListServiceActionsOutput extends $MetadataBearer {
  __type?: "ListServiceActionsOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>An object containing information about the service actions associated with the provisioning artifact.</p>
   */
  ServiceActionSummaries?: Array<ServiceActionSummary>;
}

export namespace ListServiceActionsOutput {
  export function isa(o: any): o is ListServiceActionsOutput {
    return _smithy.isa(o, "ListServiceActionsOutput");
  }
}

export interface ListStackInstancesForProvisionedProductInput {
  __type?: "ListStackInstancesForProvisionedProductInput";
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

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId: string | undefined;
}

export namespace ListStackInstancesForProvisionedProductInput {
  export function isa(
    o: any
  ): o is ListStackInstancesForProvisionedProductInput {
    return _smithy.isa(o, "ListStackInstancesForProvisionedProductInput");
  }
}

export interface ListStackInstancesForProvisionedProductOutput
  extends $MetadataBearer {
  __type?: "ListStackInstancesForProvisionedProductOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>List of stack instances.</p>
   */
  StackInstances?: Array<StackInstance>;
}

export namespace ListStackInstancesForProvisionedProductOutput {
  export function isa(
    o: any
  ): o is ListStackInstancesForProvisionedProductOutput {
    return _smithy.isa(o, "ListStackInstancesForProvisionedProductOutput");
  }
}

/**
 * <p>The operation is not supported.</p>
 */
export interface OperationNotSupportedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "OperationNotSupportedException";
  $fault: "client";
  Message?: string;
}

export namespace OperationNotSupportedException {
  export function isa(o: any): o is OperationNotSupportedException {
    return _smithy.isa(o, "OperationNotSupportedException");
  }
}

/**
 * <p>Information about the organization node.</p>
 */
export interface OrganizationNode {
  __type?: "OrganizationNode";
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
  export function isa(o: any): o is OrganizationNode {
    return _smithy.isa(o, "OrganizationNode");
  }
}

export enum OrganizationNodeType {
  ACCOUNT = "ACCOUNT",
  ORGANIZATION = "ORGANIZATION",
  ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
}

/**
 * <p>The constraints that the administrator has put on the parameter.</p>
 */
export interface ParameterConstraints {
  __type?: "ParameterConstraints";
  /**
   * <p>The values that the administrator has allowed for the parameter.</p>
   */
  AllowedValues?: Array<string>;
}

export namespace ParameterConstraints {
  export function isa(o: any): o is ParameterConstraints {
    return _smithy.isa(o, "ParameterConstraints");
  }
}

/**
 * <p>Information about a portfolio.</p>
 */
export interface PortfolioDetail {
  __type?: "PortfolioDetail";
  /**
   * <p>The ARN assigned to the portfolio.</p>
   */
  ARN?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  Id?: string;

  /**
   * <p>The name of the portfolio provider.</p>
   */
  ProviderName?: string;
}

export namespace PortfolioDetail {
  export function isa(o: any): o is PortfolioDetail {
    return _smithy.isa(o, "PortfolioDetail");
  }
}

export enum PortfolioShareType {
  AWS_ORGANIZATIONS = "AWS_ORGANIZATIONS",
  AWS_SERVICECATALOG = "AWS_SERVICECATALOG",
  IMPORTED = "IMPORTED"
}

/**
 * <p>Information about a principal.</p>
 */
export interface Principal {
  __type?: "Principal";
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
  export function isa(o: any): o is Principal {
    return _smithy.isa(o, "Principal");
  }
}

export enum PrincipalType {
  IAM = "IAM"
}

export enum ProductSource {
  ACCOUNT = "ACCOUNT"
}

export enum ProductType {
  CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE",
  MARKETPLACE = "MARKETPLACE"
}

/**
 * <p>A single product view aggregation value/count pair, containing metadata about each
 *          product to which the calling user has access.</p>
 */
export interface ProductViewAggregationValue {
  __type?: "ProductViewAggregationValue";
  /**
   * <p>An approximate count of the products that match the value.</p>
   */
  ApproximateCount?: number;

  /**
   * <p>The value of the product view aggregation.</p>
   */
  Value?: string;
}

export namespace ProductViewAggregationValue {
  export function isa(o: any): o is ProductViewAggregationValue {
    return _smithy.isa(o, "ProductViewAggregationValue");
  }
}

/**
 * <p>Information about a product view.</p>
 */
export interface ProductViewDetail {
  __type?: "ProductViewDetail";
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ARN of the product.</p>
   */
  ProductARN?: string;

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
}

export namespace ProductViewDetail {
  export function isa(o: any): o is ProductViewDetail {
    return _smithy.isa(o, "ProductViewDetail");
  }
}

export enum ProductViewFilterBy {
  FullTextSearch = "FullTextSearch",
  Owner = "Owner",
  ProductType = "ProductType",
  SourceProductId = "SourceProductId"
}

export enum ProductViewSortBy {
  CreationDate = "CreationDate",
  Title = "Title",
  VersionCount = "VersionCount"
}

/**
 * <p>Summary information about a product view.</p>
 */
export interface ProductViewSummary {
  __type?: "ProductViewSummary";
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
   * <p>The product view identifier.</p>
   */
  Id?: string;

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
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>Short description of the product.</p>
   */
  ShortDescription?: string;

  /**
   * <p>The description of the support for this Product.</p>
   */
  SupportDescription?: string;

  /**
   * <p>The email contact information to obtain support for this Product.</p>
   */
  SupportEmail?: string;

  /**
   * <p>The URL information to obtain support for this Product.</p>
   */
  SupportUrl?: string;

  /**
   * <p>The product type. Contact the product administrator for the significance of this
   *          value. If this value is <code>MARKETPLACE</code>, the product was created by AWS
   *          Marketplace.</p>
   */
  Type?: ProductType | string;
}

export namespace ProductViewSummary {
  export function isa(o: any): o is ProductViewSummary {
    return _smithy.isa(o, "ProductViewSummary");
  }
}

export enum PropertyKey {
  Owner = "OWNER"
}

export interface ProvisionProductInput {
  __type?: "ProvisionProductInput";
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
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   */
  NotificationArns?: Array<string>;

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
   * <p>An idempotency token that uniquely identifies the provisioning request.</p>
   */
  ProvisionToken?: string;

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
  ProvisioningParameters?: Array<ProvisioningParameter>;

  /**
   * <p>An object that contains information about the provisioning preferences for a stack set.</p>
   */
  ProvisioningPreferences?: ProvisioningPreferences;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ProvisionProductInput {
  export function isa(o: any): o is ProvisionProductInput {
    return _smithy.isa(o, "ProvisionProductInput");
  }
}

export interface ProvisionProductOutput extends $MetadataBearer {
  __type?: "ProvisionProductOutput";
  /**
   * <p>Information about the result of provisioning the product.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace ProvisionProductOutput {
  export function isa(o: any): o is ProvisionProductOutput {
    return _smithy.isa(o, "ProvisionProductOutput");
  }
}

/**
 * <p>Information about a provisioned product.</p>
 */
export interface ProvisionedProductAttribute {
  __type?: "ProvisionedProductAttribute";
  /**
   * <p>The ARN of the provisioned product.</p>
   */
  Arn?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  Id?: string;

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
   * <p>The user-friendly name of the provisioned product.</p>
   */
  Name?: string;

  /**
   * <p>The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.</p>
   */
  PhysicalId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

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
   * <p>One or more tags.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  Type?: string;

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
  export function isa(o: any): o is ProvisionedProductAttribute {
    return _smithy.isa(o, "ProvisionedProductAttribute");
  }
}

/**
 * <p>Information about a provisioned product.</p>
 */
export interface ProvisionedProductDetail {
  __type?: "ProvisionedProductDetail";
  /**
   * <p>The ARN of the provisioned product.</p>
   */
  Arn?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  Id?: string;

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
   * <p>The user-friendly name of the provisioned product.</p>
   */
  Name?: string;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId?: string;

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
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  Type?: string;
}

export namespace ProvisionedProductDetail {
  export function isa(o: any): o is ProvisionedProductDetail {
    return _smithy.isa(o, "ProvisionedProductDetail");
  }
}

/**
 * <p>Information about a plan.</p>
 */
export interface ProvisionedProductPlanDetails {
  __type?: "ProvisionedProductPlanDetails";
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
   *          events.</p>
   */
  NotificationArns?: Array<string>;

  /**
   * <p>The path identifier of the product. This value is optional if the product
   *          has a default path, and required if the product has more than one path.
   *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   */
  PathId?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId?: string;

  /**
   * <p>The name of the plan.</p>
   */
  PlanName?: string;

  /**
   * <p>The plan type.</p>
   */
  PlanType?: ProvisionedProductPlanType | string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the
   *          product.</p>
   */
  ProvisioningParameters?: Array<UpdateProvisioningParameter>;

  /**
   * <p>The status.</p>
   */
  Status?: ProvisionedProductPlanStatus | string;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The time when the plan was last updated.</p>
   */
  UpdatedTime?: Date;
}

export namespace ProvisionedProductPlanDetails {
  export function isa(o: any): o is ProvisionedProductPlanDetails {
    return _smithy.isa(o, "ProvisionedProductPlanDetails");
  }
}

export enum ProvisionedProductPlanStatus {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_SUCCESS = "CREATE_SUCCESS",
  EXECUTE_FAILED = "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS = "EXECUTE_IN_PROGRESS",
  EXECUTE_SUCCESS = "EXECUTE_SUCCESS"
}

/**
 * <p>Summary information about a plan.</p>
 */
export interface ProvisionedProductPlanSummary {
  __type?: "ProvisionedProductPlanSummary";
  /**
   * <p>The plan identifier.</p>
   */
  PlanId?: string;

  /**
   * <p>The name of the plan.</p>
   */
  PlanName?: string;

  /**
   * <p>The plan type.</p>
   */
  PlanType?: ProvisionedProductPlanType | string;

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;
}

export namespace ProvisionedProductPlanSummary {
  export function isa(o: any): o is ProvisionedProductPlanSummary {
    return _smithy.isa(o, "ProvisionedProductPlanSummary");
  }
}

export enum ProvisionedProductPlanType {
  CLOUDFORMATION = "CLOUDFORMATION"
}

export enum ProvisionedProductStatus {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PLAN_IN_PROGRESS = "PLAN_IN_PROGRESS",
  TAINTED = "TAINTED",
  UNDER_CHANGE = "UNDER_CHANGE"
}

export enum ProvisionedProductViewFilterBy {
  SearchQuery = "SearchQuery"
}

/**
 * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
 */
export interface ProvisioningArtifact {
  __type?: "ProvisioningArtifact";
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   */
  Guidance?: ProvisioningArtifactGuidance | string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  Name?: string;
}

export namespace ProvisioningArtifact {
  export function isa(o: any): o is ProvisioningArtifact {
    return _smithy.isa(o, "ProvisioningArtifact");
  }
}

/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactDetail {
  __type?: "ProvisioningArtifactDetail";
  /**
   * <p>Indicates whether the product version is active.</p>
   */
  Active?: boolean;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   */
  Guidance?: ProvisioningArtifactGuidance | string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  Name?: string;

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
}

export namespace ProvisioningArtifactDetail {
  export function isa(o: any): o is ProvisioningArtifactDetail {
    return _smithy.isa(o, "ProvisioningArtifactDetail");
  }
}

export enum ProvisioningArtifactGuidance {
  DEFAULT = "DEFAULT",
  DEPRECATED = "DEPRECATED"
}

/**
 * <p>Information about a parameter used to provision a product.</p>
 */
export interface ProvisioningArtifactParameter {
  __type?: "ProvisioningArtifactParameter";
  /**
   * <p>The default value.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>If this value is true, the value for this parameter is obfuscated from view when the
   *          parameter is retrieved. This parameter is used to hide sensitive information.</p>
   */
  IsNoEcho?: boolean;

  /**
   * <p>Constraints that the administrator has put on a parameter.</p>
   */
  ParameterConstraints?: ParameterConstraints;

  /**
   * <p>The parameter key.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The parameter type.</p>
   */
  ParameterType?: string;
}

export namespace ProvisioningArtifactParameter {
  export function isa(o: any): o is ProvisioningArtifactParameter {
    return _smithy.isa(o, "ProvisioningArtifactParameter");
  }
}

/**
 * <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p>
 *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface ProvisioningArtifactPreferences {
  __type?: "ProvisioningArtifactPreferences";
  /**
   * <p>One or more AWS accounts where stack instances are deployed from the stack set. These accounts can be scoped in <code>ProvisioningPreferences$StackSetAccounts</code> and <code>UpdateProvisioningPreferences$StackSetAccounts</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   */
  StackSetAccounts?: Array<string>;

  /**
   * <p>One or more AWS Regions where stack instances are deployed from the stack set. These regions can be scoped in <code>ProvisioningPreferences$StackSetRegions</code> and <code>UpdateProvisioningPreferences$StackSetRegions</code>.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   */
  StackSetRegions?: Array<string>;
}

export namespace ProvisioningArtifactPreferences {
  export function isa(o: any): o is ProvisioningArtifactPreferences {
    return _smithy.isa(o, "ProvisioningArtifactPreferences");
  }
}

/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactProperties {
  __type?: "ProvisioningArtifactProperties";
  /**
   * <p>The description of the provisioning artifact, including how it differs from the previous provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.</p>
   */
  DisableTemplateValidation?: boolean;

  /**
   * <p>The URL of the CloudFormation template in Amazon S3. Specify the URL in JSON format as follows:</p>
   *          <p>
   *             <code>"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."</code>
   *          </p>
   */
  Info: { [key: string]: string } | undefined;

  /**
   * <p>The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.</p>
   */
  Name?: string;

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
}

export namespace ProvisioningArtifactProperties {
  export function isa(o: any): o is ProvisioningArtifactProperties {
    return _smithy.isa(o, "ProvisioningArtifactProperties");
  }
}

export enum ProvisioningArtifactPropertyName {
  Id = "Id"
}

/**
 * <p>Summary information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactSummary {
  __type?: "ProvisioningArtifactSummary";
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The metadata for the provisioning artifact. This is used with AWS Marketplace products.</p>
   */
  ProvisioningArtifactMetadata?: { [key: string]: string };
}

export namespace ProvisioningArtifactSummary {
  export function isa(o: any): o is ProvisioningArtifactSummary {
    return _smithy.isa(o, "ProvisioningArtifactSummary");
  }
}

export enum ProvisioningArtifactType {
  CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE",
  MARKETPLACE_AMI = "MARKETPLACE_AMI",
  MARKETPLACE_CAR = "MARKETPLACE_CAR"
}

/**
 * <p>An object that contains summary information about a product view and a provisioning artifact.</p>
 */
export interface ProvisioningArtifactView {
  __type?: "ProvisioningArtifactView";
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
  export function isa(o: any): o is ProvisioningArtifactView {
    return _smithy.isa(o, "ProvisioningArtifactView");
  }
}

/**
 * <p>Information about a parameter used to provision a product.</p>
 */
export interface ProvisioningParameter {
  __type?: "ProvisioningParameter";
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
  export function isa(o: any): o is ProvisioningParameter {
    return _smithy.isa(o, "ProvisioningParameter");
  }
}

/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 */
export interface ProvisioningPreferences {
  __type?: "ProvisioningPreferences";
  /**
   * <p>One or more AWS accounts that will have access to the provisioned product.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: Array<string>;

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
   * <p>One or more AWS Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: Array<string>;
}

export namespace ProvisioningPreferences {
  export function isa(o: any): o is ProvisioningPreferences {
    return _smithy.isa(o, "ProvisioningPreferences");
  }
}

/**
 * <p>Information about a request operation.</p>
 */
export interface RecordDetail {
  __type?: "RecordDetail";
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The path identifier.</p>
   */
  PathId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  ProvisionedProductType?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The errors that occurred.</p>
   */
  RecordErrors?: Array<RecordError>;

  /**
   * <p>The identifier of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>One or more tags.</p>
   */
  RecordTags?: Array<RecordTag>;

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
   * <p>The time when the record was last updated.</p>
   */
  UpdatedTime?: Date;
}

export namespace RecordDetail {
  export function isa(o: any): o is RecordDetail {
    return _smithy.isa(o, "RecordDetail");
  }
}

/**
 * <p>The error code and description resulting from an operation.</p>
 */
export interface RecordError {
  __type?: "RecordError";
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
  export function isa(o: any): o is RecordError {
    return _smithy.isa(o, "RecordError");
  }
}

/**
 * <p>The output for the product created as the result of a request. For example, the output for
 *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
 */
export interface RecordOutput {
  __type?: "RecordOutput";
  /**
   * <p>The description of the output.</p>
   */
  Description?: string;

  /**
   * <p>The output key.</p>
   */
  OutputKey?: string;

  /**
   * <p>The output value.</p>
   */
  OutputValue?: string;
}

export namespace RecordOutput {
  export function isa(o: any): o is RecordOutput {
    return _smithy.isa(o, "RecordOutput");
  }
}

export enum RecordStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  IN_PROGRESS_IN_ERROR = "IN_PROGRESS_IN_ERROR",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>Information about a tag, which is a key-value pair.</p>
 */
export interface RecordTag {
  __type?: "RecordTag";
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
  export function isa(o: any): o is RecordTag {
    return _smithy.isa(o, "RecordTag");
  }
}

export interface RejectPortfolioShareInput {
  __type?: "RejectPortfolioShareInput";
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
   *                   <code>AWS_ORGANIZATIONS</code> - Reject portfolios shared by the master account of your organization.</p>
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
  export function isa(o: any): o is RejectPortfolioShareInput {
    return _smithy.isa(o, "RejectPortfolioShareInput");
  }
}

export interface RejectPortfolioShareOutput extends $MetadataBearer {
  __type?: "RejectPortfolioShareOutput";
}

export namespace RejectPortfolioShareOutput {
  export function isa(o: any): o is RejectPortfolioShareOutput {
    return _smithy.isa(o, "RejectPortfolioShareOutput");
  }
}

export enum Replacement {
  CONDITIONAL = "CONDITIONAL",
  FALSE = "FALSE",
  TRUE = "TRUE"
}

export enum RequiresRecreation {
  ALWAYS = "ALWAYS",
  CONDITIONALLY = "CONDITIONALLY",
  NEVER = "NEVER"
}

export enum ResourceAttribute {
  CREATIONPOLICY = "CREATIONPOLICY",
  DELETIONPOLICY = "DELETIONPOLICY",
  METADATA = "METADATA",
  PROPERTIES = "PROPERTIES",
  TAGS = "TAGS",
  UPDATEPOLICY = "UPDATEPOLICY"
}

/**
 * <p>Information about a resource change that will occur when a plan is executed.</p>
 */
export interface ResourceChange {
  __type?: "ResourceChange";
  /**
   * <p>The change action.</p>
   */
  Action?: ChangeAction | string;

  /**
   * <p>Information about the resource changes.</p>
   */
  Details?: Array<ResourceChangeDetail>;

  /**
   * <p>The ID of the resource, as defined in the CloudFormation template.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The ID of the resource, if it was already created.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>If the change type is <code>Modify</code>, indicates whether the existing resource
   *          is deleted and replaced with a new one.</p>
   */
  Replacement?: Replacement | string;

  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: string;

  /**
   * <p>The change scope.</p>
   */
  Scope?: Array<ResourceAttribute | string>;
}

export namespace ResourceChange {
  export function isa(o: any): o is ResourceChange {
    return _smithy.isa(o, "ResourceChange");
  }
}

/**
 * <p>Information about a change to a resource attribute.</p>
 */
export interface ResourceChangeDetail {
  __type?: "ResourceChangeDetail";
  /**
   * <p>The ID of the entity that caused the change.</p>
   */
  CausingEntity?: string;

  /**
   * <p>For static evaluations, the value of the resource attribute will change and the new value is known.
   *          For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.</p>
   */
  Evaluation?: EvaluationType | string;

  /**
   * <p>Information about the resource attribute to be modified.</p>
   */
  Target?: ResourceTargetDefinition;
}

export namespace ResourceChangeDetail {
  export function isa(o: any): o is ResourceChangeDetail {
    return _smithy.isa(o, "ResourceChangeDetail");
  }
}

/**
 * <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
 */
export interface ResourceInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return _smithy.isa(o, "ResourceInUseException");
  }
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Information about a change to a resource attribute.</p>
 */
export interface ResourceTargetDefinition {
  __type?: "ResourceTargetDefinition";
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
  export function isa(o: any): o is ResourceTargetDefinition {
    return _smithy.isa(o, "ResourceTargetDefinition");
  }
}

export interface ScanProvisionedProductsInput {
  __type?: "ScanProvisionedProductsInput";
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
  export function isa(o: any): o is ScanProvisionedProductsInput {
    return _smithy.isa(o, "ScanProvisionedProductsInput");
  }
}

export interface ScanProvisionedProductsOutput extends $MetadataBearer {
  __type?: "ScanProvisionedProductsOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the provisioned products.</p>
   */
  ProvisionedProducts?: Array<ProvisionedProductDetail>;
}

export namespace ScanProvisionedProductsOutput {
  export function isa(o: any): o is ScanProvisionedProductsOutput {
    return _smithy.isa(o, "ScanProvisionedProductsOutput");
  }
}

export interface SearchProductsAsAdminInput {
  __type?: "SearchProductsAsAdminInput";
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
   * <p>The search filters. If no search filters are specified, the output includes all products
   *          to which the administrator has access.</p>
   */
  Filters?: { [key: string]: Array<string> };

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId?: string;

  /**
   * <p>Access level of the source of the product.</p>
   */
  ProductSource?: ProductSource | string;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted.</p>
   */
  SortBy?: ProductViewSortBy | string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace SearchProductsAsAdminInput {
  export function isa(o: any): o is SearchProductsAsAdminInput {
    return _smithy.isa(o, "SearchProductsAsAdminInput");
  }
}

export interface SearchProductsAsAdminOutput extends $MetadataBearer {
  __type?: "SearchProductsAsAdminOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the product views.</p>
   */
  ProductViewDetails?: Array<ProductViewDetail>;
}

export namespace SearchProductsAsAdminOutput {
  export function isa(o: any): o is SearchProductsAsAdminOutput {
    return _smithy.isa(o, "SearchProductsAsAdminOutput");
  }
}

export interface SearchProductsInput {
  __type?: "SearchProductsInput";
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
  Filters?: { [key: string]: Array<string> };

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted.</p>
   */
  SortBy?: ProductViewSortBy | string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace SearchProductsInput {
  export function isa(o: any): o is SearchProductsInput {
    return _smithy.isa(o, "SearchProductsInput");
  }
}

export interface SearchProductsOutput extends $MetadataBearer {
  __type?: "SearchProductsOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The product view aggregations.</p>
   */
  ProductViewAggregations?: {
    [key: string]: Array<ProductViewAggregationValue>;
  };

  /**
   * <p>Information about the product views.</p>
   */
  ProductViewSummaries?: Array<ProductViewSummary>;
}

export namespace SearchProductsOutput {
  export function isa(o: any): o is SearchProductsOutput {
    return _smithy.isa(o, "SearchProductsOutput");
  }
}

export interface SearchProvisionedProductsInput {
  __type?: "SearchProvisionedProductsInput";
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
   *          <code>tags</code>, <code>userArn</code>, and <code>userArnSession</code>.</p>
   *          <p>Example: <code>"SearchQuery":["status:AVAILABLE"]</code>
   *          </p>
   */
  Filters?: { [key: string]: Array<string> };

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted. The valid values are <code>arn</code>, <code>id</code>, <code>name</code>,
   *          and <code>lastRecordId</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace SearchProvisionedProductsInput {
  export function isa(o: any): o is SearchProvisionedProductsInput {
    return _smithy.isa(o, "SearchProvisionedProductsInput");
  }
}

export interface SearchProvisionedProductsOutput extends $MetadataBearer {
  __type?: "SearchProvisionedProductsOutput";
  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Information about the provisioned products.</p>
   */
  ProvisionedProducts?: Array<ProvisionedProductAttribute>;

  /**
   * <p>The number of provisioned products found.</p>
   */
  TotalResultsCount?: number;
}

export namespace SearchProvisionedProductsOutput {
  export function isa(o: any): o is SearchProvisionedProductsOutput {
    return _smithy.isa(o, "SearchProvisionedProductsOutput");
  }
}

/**
 * <p>A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
 */
export interface ServiceActionAssociation {
  __type?: "ServiceActionAssociation";
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
}

export namespace ServiceActionAssociation {
  export function isa(o: any): o is ServiceActionAssociation {
    return _smithy.isa(o, "ServiceActionAssociation");
  }
}

export enum ServiceActionAssociationErrorCode {
  DuplicateResourceException = "DUPLICATE_RESOURCE",
  InternalFailure = "INTERNAL_FAILURE",
  LimitExceededException = "LIMIT_EXCEEDED",
  ResourceNotFoundException = "RESOURCE_NOT_FOUND",
  ThrottlingException = "THROTTLING"
}

export enum ServiceActionDefinitionKey {
  AssumeRole = "AssumeRole",
  Name = "Name",
  Parameters = "Parameters",
  Version = "Version"
}

export enum ServiceActionDefinitionType {
  SsmAutomation = "SSM_AUTOMATION"
}

/**
 * <p>An object containing detailed information about the self-service action.</p>
 */
export interface ServiceActionDetail {
  __type?: "ServiceActionDetail";
  /**
   * <p>A map that defines the self-service action.</p>
   */
  Definition?: { [key: string]: string };

  /**
   * <p>Summary information about the self-service action.</p>
   */
  ServiceActionSummary?: ServiceActionSummary;
}

export namespace ServiceActionDetail {
  export function isa(o: any): o is ServiceActionDetail {
    return _smithy.isa(o, "ServiceActionDetail");
  }
}

/**
 * <p>Detailed information about the self-service action.</p>
 */
export interface ServiceActionSummary {
  __type?: "ServiceActionSummary";
  /**
   * <p>The self-service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   */
  DefinitionType?: ServiceActionDefinitionType | string;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The self-service action identifier.</p>
   */
  Id?: string;

  /**
   * <p>The self-service action name.</p>
   */
  Name?: string;
}

export namespace ServiceActionSummary {
  export function isa(o: any): o is ServiceActionSummary {
    return _smithy.isa(o, "ServiceActionSummary");
  }
}

/**
 * <p>Information about the portfolio share operation.</p>
 */
export interface ShareDetails {
  __type?: "ShareDetails";
  /**
   * <p>List of errors.</p>
   */
  ShareErrors?: Array<ShareError>;

  /**
   * <p>List of accounts for whom the operation succeeded.</p>
   */
  SuccessfulShares?: Array<string>;
}

export namespace ShareDetails {
  export function isa(o: any): o is ShareDetails {
    return _smithy.isa(o, "ShareDetails");
  }
}

/**
 * <p>Errors that occurred during the portfolio share operation.</p>
 */
export interface ShareError {
  __type?: "ShareError";
  /**
   * <p>List of accounts impacted by the error.</p>
   */
  Accounts?: Array<string>;

  /**
   * <p>Error type that happened when processing the operation.</p>
   */
  Error?: string;

  /**
   * <p>Information about the error.</p>
   */
  Message?: string;
}

export namespace ShareError {
  export function isa(o: any): o is ShareError {
    return _smithy.isa(o, "ShareError");
  }
}

export enum ShareStatus {
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED"
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING"
}

/**
 * <p>An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. </p>
 */
export interface StackInstance {
  __type?: "StackInstance";
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
  export function isa(o: any): o is StackInstance {
    return _smithy.isa(o, "StackInstance");
  }
}

export enum StackInstanceStatus {
  CURRENT = "CURRENT",
  INOPERABLE = "INOPERABLE",
  OUTDATED = "OUTDATED"
}

export type StackSetOperationType = "CREATE" | "DELETE" | "UPDATE";

export enum Status {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  FAILED = "FAILED"
}

/**
 * <p>Information about a tag. A tag is a key-value pair. Tags are propagated
 *          to the resources created when provisioning a product.</p>
 */
export interface Tag {
  __type?: "Tag";
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
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

/**
 * <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Please use the AWS console to perform the migration
 *          process before retrying the operation.</p>
 */
export interface TagOptionNotMigratedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TagOptionNotMigratedException";
  $fault: "client";
  Message?: string;
}

export namespace TagOptionNotMigratedException {
  export function isa(o: any): o is TagOptionNotMigratedException {
    return _smithy.isa(o, "TagOptionNotMigratedException");
  }
}

/**
 * <p>Summary information about a TagOption.</p>
 */
export interface TagOptionSummary {
  __type?: "TagOptionSummary";
  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Values?: Array<string>;
}

export namespace TagOptionSummary {
  export function isa(o: any): o is TagOptionSummary {
    return _smithy.isa(o, "TagOptionSummary");
  }
}

export interface TerminateProvisionedProductInput {
  __type?: "TerminateProvisionedProductInput";
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
   * <p>If set to true, AWS Service Catalog stops managing the specified provisioned product even
   *          if it cannot delete the underlying resources.</p>
   */
  IgnoreErrors?: boolean;

  /**
   * <p>The identifier of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The name of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>An idempotency token that uniquely identifies the termination request. This token is
   *          only valid during the termination process. After the provisioned product is terminated,
   *          subsequent requests to terminate the same provisioned product always return
   *          <b>ResourceNotFound</b>.</p>
   */
  TerminateToken?: string;
}

export namespace TerminateProvisionedProductInput {
  export function isa(o: any): o is TerminateProvisionedProductInput {
    return _smithy.isa(o, "TerminateProvisionedProductInput");
  }
}

export interface TerminateProvisionedProductOutput extends $MetadataBearer {
  __type?: "TerminateProvisionedProductOutput";
  /**
   * <p>Information about the result of this request.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace TerminateProvisionedProductOutput {
  export function isa(o: any): o is TerminateProvisionedProductOutput {
    return _smithy.isa(o, "TerminateProvisionedProductOutput");
  }
}

export interface UpdateConstraintInput {
  __type?: "UpdateConstraintInput";
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
   * <p>The updated description of the constraint.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the constraint.</p>
   */
  Id: string | undefined;

  /**
   * <p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p>
   *          <dl>
   *             <dt>LAUNCH</dt>
   *             <dd>
   *                <p>Specify the <code>RoleArn</code> property as follows:</p>
   *                <p>
   *                   <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code>
   *                </p>
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
  export function isa(o: any): o is UpdateConstraintInput {
    return _smithy.isa(o, "UpdateConstraintInput");
  }
}

export interface UpdateConstraintOutput extends $MetadataBearer {
  __type?: "UpdateConstraintOutput";
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
  export function isa(o: any): o is UpdateConstraintOutput {
    return _smithy.isa(o, "UpdateConstraintOutput");
  }
}

export interface UpdatePortfolioInput {
  __type?: "UpdatePortfolioInput";
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
   * <p>The tags to add.</p>
   */
  AddTags?: Array<Tag>;

  /**
   * <p>The updated description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The updated name of the portfolio provider.</p>
   */
  ProviderName?: string;

  /**
   * <p>The tags to remove.</p>
   */
  RemoveTags?: Array<string>;
}

export namespace UpdatePortfolioInput {
  export function isa(o: any): o is UpdatePortfolioInput {
    return _smithy.isa(o, "UpdatePortfolioInput");
  }
}

export interface UpdatePortfolioOutput extends $MetadataBearer {
  __type?: "UpdatePortfolioOutput";
  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: PortfolioDetail;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Array<Tag>;
}

export namespace UpdatePortfolioOutput {
  export function isa(o: any): o is UpdatePortfolioOutput {
    return _smithy.isa(o, "UpdatePortfolioOutput");
  }
}

export interface UpdateProductInput {
  __type?: "UpdateProductInput";
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
   * <p>The tags to add to the product.</p>
   */
  AddTags?: Array<Tag>;

  /**
   * <p>The updated description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The updated distributor of the product.</p>
   */
  Distributor?: string;

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
   * <p>The tags to remove from the product.</p>
   */
  RemoveTags?: Array<string>;

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
}

export namespace UpdateProductInput {
  export function isa(o: any): o is UpdateProductInput {
    return _smithy.isa(o, "UpdateProductInput");
  }
}

export interface UpdateProductOutput extends $MetadataBearer {
  __type?: "UpdateProductOutput";
  /**
   * <p>Information about the product view.</p>
   */
  ProductViewDetail?: ProductViewDetail;

  /**
   * <p>Information about the tags associated with the product.</p>
   */
  Tags?: Array<Tag>;
}

export namespace UpdateProductOutput {
  export function isa(o: any): o is UpdateProductOutput {
    return _smithy.isa(o, "UpdateProductOutput");
  }
}

export interface UpdateProvisionedProductInput {
  __type?: "UpdateProvisionedProductInput";
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
   * <p>The new path identifier. This value is optional if the product
   *          has a default path, and required if the product has more than one path.</p>
   */
  PathId?: string;

  /**
   * <p>The identifier of the product.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The name of the provisioned product. You cannot specify both
   *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
   */
  ProvisionedProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The new parameters.</p>
   */
  ProvisioningParameters?: Array<UpdateProvisioningParameter>;

  /**
   * <p>An object that contains information about the provisioning preferences for a stack set.</p>
   */
  ProvisioningPreferences?: UpdateProvisioningPreferences;

  /**
   * <p>One or more tags. Requires the product to have <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The idempotency token that uniquely identifies the provisioning update request.</p>
   */
  UpdateToken?: string;
}

export namespace UpdateProvisionedProductInput {
  export function isa(o: any): o is UpdateProvisionedProductInput {
    return _smithy.isa(o, "UpdateProvisionedProductInput");
  }
}

export interface UpdateProvisionedProductOutput extends $MetadataBearer {
  __type?: "UpdateProvisionedProductOutput";
  /**
   * <p>Information about the result of the request.</p>
   */
  RecordDetail?: RecordDetail;
}

export namespace UpdateProvisionedProductOutput {
  export function isa(o: any): o is UpdateProvisionedProductOutput {
    return _smithy.isa(o, "UpdateProvisionedProductOutput");
  }
}

export interface UpdateProvisionedProductPropertiesInput {
  __type?: "UpdateProvisionedProductPropertiesInput";
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
   * <p>The idempotency token that uniquely identifies the provisioning product update request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  ProvisionedProductId: string | undefined;

  /**
   * <p>A map that contains the provisioned product properties to be updated.</p>
   *          <p>The <code>OWNER</code> key only accepts user ARNs. The owner is the user that is allowed to
   *          see, update, terminate, and execute service actions in the provisioned product.</p>
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
}

export namespace UpdateProvisionedProductPropertiesInput {
  export function isa(o: any): o is UpdateProvisionedProductPropertiesInput {
    return _smithy.isa(o, "UpdateProvisionedProductPropertiesInput");
  }
}

export interface UpdateProvisionedProductPropertiesOutput
  extends $MetadataBearer {
  __type?: "UpdateProvisionedProductPropertiesOutput";
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
  export function isa(o: any): o is UpdateProvisionedProductPropertiesOutput {
    return _smithy.isa(o, "UpdateProvisionedProductPropertiesOutput");
  }
}

export interface UpdateProvisioningArtifactInput {
  __type?: "UpdateProvisioningArtifactInput";
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
   * <p>Indicates whether the product version is active.</p>
   */
  Active?: boolean;

  /**
   * <p>The updated description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   *          <p>The <code>DEFAULT</code> value indicates that the product version is active.</p>
   *          <p>The administrator can set the guidance to <code>DEPRECATED</code> to inform
   *           users that the product version is deprecated. Users are able to make updates to a provisioned product
   *           of a deprecated version but cannot launch new provisioned products using a deprecated version.</p>
   */
  Guidance?: ProvisioningArtifactGuidance | string;

  /**
   * <p>The updated name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId: string | undefined;
}

export namespace UpdateProvisioningArtifactInput {
  export function isa(o: any): o is UpdateProvisioningArtifactInput {
    return _smithy.isa(o, "UpdateProvisioningArtifactInput");
  }
}

export interface UpdateProvisioningArtifactOutput extends $MetadataBearer {
  __type?: "UpdateProvisioningArtifactOutput";
  /**
   * <p>The URL of the CloudFormation template in Amazon S3.</p>
   */
  Info?: { [key: string]: string };

  /**
   * <p>Information about the provisioning artifact.</p>
   */
  ProvisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * <p>The status of the current request.</p>
   */
  Status?: Status | string;
}

export namespace UpdateProvisioningArtifactOutput {
  export function isa(o: any): o is UpdateProvisioningArtifactOutput {
    return _smithy.isa(o, "UpdateProvisioningArtifactOutput");
  }
}

/**
 * <p>The parameter key-value pair used to update a provisioned product.</p>
 */
export interface UpdateProvisioningParameter {
  __type?: "UpdateProvisioningParameter";
  /**
   * <p>The parameter key.</p>
   */
  Key?: string;

  /**
   * <p>If set to true, <code>Value</code> is ignored and the previous parameter value is kept.</p>
   */
  UsePreviousValue?: boolean;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;
}

export namespace UpdateProvisioningParameter {
  export function isa(o: any): o is UpdateProvisioningParameter {
    return _smithy.isa(o, "UpdateProvisioningParameter");
  }
}

/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 */
export interface UpdateProvisioningPreferences {
  __type?: "UpdateProvisioningPreferences";
  /**
   * <p>One or more AWS accounts that will have access to the provisioned product.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
   */
  StackSetAccounts?: Array<string>;

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

  /**
   * <p>One or more AWS Regions where the provisioned product will be available.</p>
   *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
   *          <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
   *          <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
   */
  StackSetRegions?: Array<string>;
}

export namespace UpdateProvisioningPreferences {
  export function isa(o: any): o is UpdateProvisioningPreferences {
    return _smithy.isa(o, "UpdateProvisioningPreferences");
  }
}

export interface UpdateServiceActionInput {
  __type?: "UpdateServiceActionInput";
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
   * <p>A map that defines the self-service action.</p>
   */
  Definition?: { [key: string]: string };

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The self-service action identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The self-service action name.</p>
   */
  Name?: string;
}

export namespace UpdateServiceActionInput {
  export function isa(o: any): o is UpdateServiceActionInput {
    return _smithy.isa(o, "UpdateServiceActionInput");
  }
}

export interface UpdateServiceActionOutput extends $MetadataBearer {
  __type?: "UpdateServiceActionOutput";
  /**
   * <p>Detailed information about the self-service action.</p>
   */
  ServiceActionDetail?: ServiceActionDetail;
}

export namespace UpdateServiceActionOutput {
  export function isa(o: any): o is UpdateServiceActionOutput {
    return _smithy.isa(o, "UpdateServiceActionOutput");
  }
}

/**
 * <p>Additional information provided by the administrator.</p>
 */
export interface UsageInstruction {
  __type?: "UsageInstruction";
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
  export function isa(o: any): o is UsageInstruction {
    return _smithy.isa(o, "UsageInstruction");
  }
}
