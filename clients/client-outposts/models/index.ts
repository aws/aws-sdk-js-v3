import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have permission to perform this operation.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

export interface CreateOutpostInput {
  __type?: "CreateOutpostInput";
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The Outpost description.</p>
   */
  Description?: string;

  /**
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export namespace CreateOutpostInput {
  export function isa(o: any): o is CreateOutpostInput {
    return __isa(o, "CreateOutpostInput");
  }
}

export interface CreateOutpostOutput {
  __type?: "CreateOutpostOutput";
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace CreateOutpostOutput {
  export function isa(o: any): o is CreateOutpostOutput {
    return __isa(o, "CreateOutpostOutput");
  }
}

export interface GetOutpostInput {
  __type?: "GetOutpostInput";
  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId: string | undefined;
}

export namespace GetOutpostInput {
  export function isa(o: any): o is GetOutpostInput {
    return __isa(o, "GetOutpostInput");
  }
}

export interface GetOutpostInstanceTypesInput {
  __type?: "GetOutpostInstanceTypesInput";
  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId: string | undefined;
}

export namespace GetOutpostInstanceTypesInput {
  export function isa(o: any): o is GetOutpostInstanceTypesInput {
    return __isa(o, "GetOutpostInstanceTypesInput");
  }
}

export interface GetOutpostInstanceTypesOutput {
  __type?: "GetOutpostInstanceTypesOutput";
  /**
   * <p>Information about the instance types.</p>
   */
  InstanceTypes?: Array<InstanceTypeItem>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId?: string;
}

export namespace GetOutpostInstanceTypesOutput {
  export function isa(o: any): o is GetOutpostInstanceTypesOutput {
    return __isa(o, "GetOutpostInstanceTypesOutput");
  }
}

export interface GetOutpostOutput {
  __type?: "GetOutpostOutput";
  /**
   * <p>Information about an Outpost.</p>
   */
  Outpost?: Outpost;
}

export namespace GetOutpostOutput {
  export function isa(o: any): o is GetOutpostOutput {
    return __isa(o, "GetOutpostOutput");
  }
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
  export function isa(o: any): o is InstanceTypeItem {
    return __isa(o, "InstanceTypeItem");
  }
}

/**
 * <p>An internal error has occurred.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListOutpostsInput {
  __type?: "ListOutpostsInput";
  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListOutpostsInput {
  export function isa(o: any): o is ListOutpostsInput {
    return __isa(o, "ListOutpostsInput");
  }
}

export interface ListOutpostsOutput {
  __type?: "ListOutpostsOutput";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the Outposts.</p>
   */
  Outposts?: Array<Outpost>;
}

export namespace ListOutpostsOutput {
  export function isa(o: any): o is ListOutpostsOutput {
    return __isa(o, "ListOutpostsOutput");
  }
}

export interface ListSitesInput {
  __type?: "ListSitesInput";
  /**
   * <p>The maximum page size.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListSitesInput {
  export function isa(o: any): o is ListSitesInput {
    return __isa(o, "ListSitesInput");
  }
}

export interface ListSitesOutput {
  __type?: "ListSitesOutput";
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the sites.</p>
   */
  Sites?: Array<Site>;
}

export namespace ListSitesOutput {
  export function isa(o: any): o is ListSitesOutput {
    return __isa(o, "ListSitesOutput");
  }
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
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>Information about an Outpost.</p>
 */
export interface Outpost {
  __type?: "Outpost";
  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The Outpost description.</p>
   */
  Description?: string;

  /**
   * <p>The life cycle status.</p>
   */
  LifeCycleStatus?: string;

  /**
   * <p>The name of the Outpost.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Outpost.</p>
   */
  OutpostId?: string;

  /**
   * <p>The AWS account ID of the Outpost owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

export namespace Outpost {
  export function isa(o: any): o is Outpost {
    return __isa(o, "Outpost");
  }
}

/**
 * <p>You have exceeded a service quota.</p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export function isa(o: any): o is ServiceQuotaExceededException {
    return __isa(o, "ServiceQuotaExceededException");
  }
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
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The name of the site.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

export namespace Site {
  export function isa(o: any): o is Site {
    return __isa(o, "Site");
  }
}

/**
 * <p>A parameter is not valid.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
