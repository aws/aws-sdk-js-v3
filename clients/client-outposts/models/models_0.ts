import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
}

export interface CreateOutpostInput {
  /**
   * <p>The name of the Outpost.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Outpost description.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

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
   * <p>The tags to apply to the Outpost.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateOutpostInput {
  export const filterSensitiveLog = (obj: CreateOutpostInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Outpost.</p>
 */
export interface Outpost {
  /**
   * <p>The ID of the Outpost.</p>
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
   * <p>The Outpost description.</p>
   */
  Description?: string;

  /**
   * <p>The life cycle status.</p>
   */
  LifeCycleStatus?: string;

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
   * <p>The Outpost tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace Outpost {
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
  export const filterSensitiveLog = (obj: CreateOutpostOutput): any => ({
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
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteOutpostInput {
  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId: string | undefined;
}

export namespace DeleteOutpostInput {
  export const filterSensitiveLog = (obj: DeleteOutpostInput): any => ({
    ...obj,
  });
}

export interface DeleteOutpostOutput {}

export namespace DeleteOutpostOutput {
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
  export const filterSensitiveLog = (obj: DeleteSiteInput): any => ({
    ...obj,
  });
}

export interface DeleteSiteOutput {}

export namespace DeleteSiteOutput {
  export const filterSensitiveLog = (obj: DeleteSiteOutput): any => ({
    ...obj,
  });
}

export interface GetOutpostInput {
  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId: string | undefined;
}

export namespace GetOutpostInput {
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
  export const filterSensitiveLog = (obj: GetOutpostOutput): any => ({
    ...obj,
  });
}

export interface GetOutpostInstanceTypesInput {
  /**
   * <p>The ID of the Outpost.</p>
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
   * <p>The ID of the Outpost.</p>
   */
  OutpostId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;
}

export namespace GetOutpostInstanceTypesOutput {
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
}

export namespace ListOutpostsInput {
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
}

export namespace Site {
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
  export const filterSensitiveLog = (obj: ListSitesOutput): any => ({
    ...obj,
  });
}
