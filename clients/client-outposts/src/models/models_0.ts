import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have permission to perform this operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum ResourceType {
  OUTPOST = "OUTPOST",
}

/**
 * <p>Updating or deleting this resource can cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The ID of the resource causing the conflict.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource causing the conflict.</p>
   */
  ResourceType?: ResourceType | string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a line item request.</p>
 */
export interface LineItemRequest {
  /**
   * <p>The ID of the catalog item.</p>
   */
  CatalogItemId?: string;

  /**
   * <p>The quantity of a line item request.</p>
   */
  Quantity?: number;
}

export namespace LineItemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineItemRequest): any => ({
    ...obj,
  });
}

export enum PaymentOption {
  ALL_UPFRONT = "ALL_UPFRONT",
  NO_UPFRONT = "NO_UPFRONT",
  PARTIAL_UPFRONT = "PARTIAL_UPFRONT",
}

export enum PaymentTerm {
  THREE_YEARS = "THREE_YEARS",
}

export interface CreateOrderInput {
  /**
   * <p>
   *       The ID or the Amazon Resource Name (ARN) of the Outpost.
   *     </p>
   */
  OutpostIdentifier: string | undefined;

  /**
   * <p>The line items that make up the order.</p>
   */
  LineItems: LineItemRequest[] | undefined;

  /**
   * <p>The payment option for the order.</p>
   */
  PaymentOption: PaymentOption | string | undefined;

  /**
   * <p>The payment terms for the order.</p>
   */
  PaymentTerm?: PaymentTerm | string;
}

export namespace CreateOrderInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOrderInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a line item.</p>
 */
export interface LineItem {
  /**
   * <p>
   *       The ID of the catalog item.
   *     </p>
   */
  CatalogItemId?: string;

  /**
   * <p>The ID of the line item.</p>
   */
  LineItemId?: string;

  /**
   * <p>The quantity of the line item.</p>
   */
  Quantity?: number;

  /**
   * <p>The status of the line item.</p>
   */
  Status?: string;
}

export namespace LineItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LineItem): any => ({
    ...obj,
  });
}

export enum OrderStatus {
  CANCELLED = "CANCELLED",
  FULFILLED = "FULFILLED",
  INSTALLING = "INSTALLING",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  RECEIVED = "RECEIVED",
}

/**
 * <p>Information about an order.</p>
 */
export interface Order {
  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * <p>The ID of the order.</p>
   */
  OrderId?: string;

  /**
   * <p>The status of the order</p>
   */
  Status?: OrderStatus | string;

  /**
   * <p>The line items for the order</p>
   */
  LineItems?: LineItem[];

  /**
   * <p>The payment option for the order.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The submission date for the order.</p>
   */
  OrderSubmissionDate?: Date;

  /**
   * <p>The fulfillment date of the order.</p>
   */
  OrderFulfilledDate?: Date;
}

export namespace Order {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Order): any => ({
    ...obj,
  });
}

export interface CreateOrderOutput {
  /**
   * <p>Information about this order.</p>
   */
  Order?: Order;
}

export namespace CreateOrderOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOrderOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An internal error has occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified request is not valid.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded a service quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A parameter is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface CreateOutpostInput {
  /**
   * <p>The name of the Outpost.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The tags to apply to the Outpost.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateOutpostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOutpostInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Outpost.</p>
 */
export interface Outpost {
  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * <p>The AWS account ID of the Outpost owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * <p>The description of the Outpost.</p>
   */
  Description?: string;

  /**
   * <p>The life cycle status.</p>
   */
  LifeCycleStatus?: string;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The Outpost tags.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;
}

export namespace Outpost {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Outpost): any => ({
    ...obj,
  });
}

export interface CreateOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace CreateOutpostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOutpostOutput): any => ({
    ...obj,
  });
}

export interface DeleteOutpostInput {
  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;
}

export namespace DeleteOutpostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutpostInput): any => ({
    ...obj,
  });
}

export interface DeleteOutpostOutput {}

export namespace DeleteOutpostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutpostOutput): any => ({
    ...obj,
  });
}

export interface DeleteSiteInput {
  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export namespace DeleteSiteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteInput): any => ({
    ...obj,
  });
}

export interface DeleteSiteOutput {}

export namespace DeleteSiteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSiteOutput): any => ({
    ...obj,
  });
}

export interface GetOutpostInput {
  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;
}

export namespace GetOutpostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostInput): any => ({
    ...obj,
  });
}

export interface GetOutpostOutput {
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace GetOutpostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostOutput): any => ({
    ...obj,
  });
}

export interface GetOutpostInstanceTypesInput {
  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

export namespace GetOutpostInstanceTypesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostInstanceTypesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an instance type.</p>
 */
export interface InstanceTypeItem {
  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;
}

export namespace InstanceTypeItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceTypeItem): any => ({
    ...obj,
  });
}

export interface GetOutpostInstanceTypesOutput {
  /**
   * <p>Information about the instance types.</p>
   */
  InstanceTypes?: InstanceTypeItem[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>
   *       The ID of the Outpost.
   *     </p>
   */
  OutpostId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;
}

export namespace GetOutpostInstanceTypesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOutpostInstanceTypesOutput): any => ({
    ...obj,
  });
}

export interface ListOutpostsInput {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       A filter for the lifecycle status of the Outpost.
   *     </p>
   *          <p> Filter values are case sensitive. If you specify multiple values for a filter, the values
   *       are joined with an <code>OR</code>, and the request returns all results that match any of the
   *       specified values. </p>
   */
  LifeCycleStatusFilter?: string[];

  /**
   * <p> A filter for the Availibility Zone (<code>us-east-1a</code>) of the Outpost. </p>
   *
   *          <p> Filter values are case sensitive. If you specify multiple values for a filter, the values
   *       are joined with an <code>OR</code>, and the request returns all results that match any of the
   *       specified values. </p>
   */
  AvailabilityZoneFilter?: string[];

  /**
   * <p>
   *       A filter for the AZ IDs (<code>use1-az1</code>) of the Outpost.
   *     </p>
   *
   *          <p> Filter values are case sensitive. If you specify multiple values for a filter, the values
   *       are joined with an <code>OR</code>, and the request returns all results that match any of the
   *       specified values. </p>
   */
  AvailabilityZoneIdFilter?: string[];
}

export namespace ListOutpostsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOutpostsInput): any => ({
    ...obj,
  });
}

export interface ListOutpostsOutput {
  /**
   * <p>Information about the Outposts.</p>
   */
  Outposts?: Outpost[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListOutpostsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOutpostsOutput): any => ({
    ...obj,
  });
}

export interface ListSitesInput {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

export namespace ListSitesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSitesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a site.</p>
 */
export interface Site {
  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The ID of the AWS account.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the site.</p>
   */
  Name?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The site tags.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;
}

export namespace Site {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Site): any => ({
    ...obj,
  });
}

export interface ListSitesOutput {
  /**
   * <p>Information about the sites.</p>
   */
  Sites?: Site[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListSitesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSitesOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The resource tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
