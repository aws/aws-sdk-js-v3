import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have permission to perform this operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

export interface CreateOutpostInput {
  __type?: "CreateOutpostInput";
  /**
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * <p>The Availability Zone.</p>
   *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The Outpost description.</p>
   */
  Description?: string;
}

export namespace CreateOutpostInput {
  export const filterSensitiveLog = (obj: CreateOutpostInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateOutpostInput => __isa(o, "CreateOutpostInput");
}

export interface CreateOutpostOutput {
  __type?: "CreateOutpostOutput";
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace CreateOutpostOutput {
  export const filterSensitiveLog = (obj: CreateOutpostOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateOutpostOutput => __isa(o, "CreateOutpostOutput");
}

export interface DeleteOutpostInput {
  __type?: "DeleteOutpostInput";
  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId: string | undefined;
}

export namespace DeleteOutpostInput {
  export const filterSensitiveLog = (obj: DeleteOutpostInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteOutpostInput => __isa(o, "DeleteOutpostInput");
}

export interface DeleteOutpostOutput {
  __type?: "DeleteOutpostOutput";
}

export namespace DeleteOutpostOutput {
  export const filterSensitiveLog = (obj: DeleteOutpostOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteOutpostOutput => __isa(o, "DeleteOutpostOutput");
}

export interface DeleteSiteInput {
  __type?: "DeleteSiteInput";
  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export namespace DeleteSiteInput {
  export const filterSensitiveLog = (obj: DeleteSiteInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSiteInput => __isa(o, "DeleteSiteInput");
}

export interface DeleteSiteOutput {
  __type?: "DeleteSiteOutput";
}

export namespace DeleteSiteOutput {
  export const filterSensitiveLog = (obj: DeleteSiteOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSiteOutput => __isa(o, "DeleteSiteOutput");
}

export interface GetOutpostInput {
  __type?: "GetOutpostInput";
  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId: string | undefined;
}

export namespace GetOutpostInput {
  export const filterSensitiveLog = (obj: GetOutpostInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOutpostInput => __isa(o, "GetOutpostInput");
}

export interface GetOutpostInstanceTypesInput {
  __type?: "GetOutpostInstanceTypesInput";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId: string | undefined;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

export namespace GetOutpostInstanceTypesInput {
  export const filterSensitiveLog = (obj: GetOutpostInstanceTypesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOutpostInstanceTypesInput => __isa(o, "GetOutpostInstanceTypesInput");
}

export interface GetOutpostInstanceTypesOutput {
  __type?: "GetOutpostInstanceTypesOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId?: string;

  /**
   * <p>Information about the instance types.</p>
   */
  InstanceTypes?: InstanceTypeItem[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetOutpostInstanceTypesOutput {
  export const filterSensitiveLog = (obj: GetOutpostInstanceTypesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOutpostInstanceTypesOutput => __isa(o, "GetOutpostInstanceTypesOutput");
}

export interface GetOutpostOutput {
  __type?: "GetOutpostOutput";
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace GetOutpostOutput {
  export const filterSensitiveLog = (obj: GetOutpostOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetOutpostOutput => __isa(o, "GetOutpostOutput");
}

/**
 * <p>Information about an instance type.</p>
 */
export interface InstanceTypeItem {
  __type?: "InstanceTypeItem";
  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;
}

export namespace InstanceTypeItem {
  export const filterSensitiveLog = (obj: InstanceTypeItem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceTypeItem => __isa(o, "InstanceTypeItem");
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
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

export interface ListOutpostsInput {
  __type?: "ListOutpostsInput";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;
}

export namespace ListOutpostsInput {
  export const filterSensitiveLog = (obj: ListOutpostsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListOutpostsInput => __isa(o, "ListOutpostsInput");
}

export interface ListOutpostsOutput {
  __type?: "ListOutpostsOutput";
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
  export const filterSensitiveLog = (obj: ListOutpostsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListOutpostsOutput => __isa(o, "ListOutpostsOutput");
}

export interface ListSitesInput {
  __type?: "ListSitesInput";
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
  export const filterSensitiveLog = (obj: ListSitesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSitesInput => __isa(o, "ListSitesInput");
}

export interface ListSitesOutput {
  __type?: "ListSitesOutput";
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
  export const filterSensitiveLog = (obj: ListSitesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSitesOutput => __isa(o, "ListSitesOutput");
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

/**
 * <p>Information about an Outpost.</p>
 */
export interface Outpost {
  __type?: "Outpost";
  /**
   * <p>The ID of the Availability Zone.</p>
   *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The Availability Zone.</p>
   *          <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The life cycle status.</p>
   */
  LifeCycleStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId?: string;

  /**
   * <p>The AWS account ID of the Outpost owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Outpost description.</p>
   */
  Description?: string;
}

export namespace Outpost {
  export const filterSensitiveLog = (obj: Outpost): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Outpost => __isa(o, "Outpost");
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
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceQuotaExceededException => __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>Information about a site.</p>
 */
export interface Site {
  __type?: "Site";
  /**
   * <p>The ID of the AWS account.</p>
   */
  AccountId?: string;

  /**
   * <p>The name of the site.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;
}

export namespace Site {
  export const filterSensitiveLog = (obj: Site): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Site => __isa(o, "Site");
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
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
