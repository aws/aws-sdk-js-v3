import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateDeviceWithPlacementRequest {
  __type?: "AssociateDeviceWithPlacementRequest";
  /**
   * <p>The ID of the physical device to be associated with the given placement in the project.
   *       Note that a mandatory 4 character prefix is required for all <code>deviceId</code>
   *       values.</p>
   */
  deviceId: string | undefined;

  /**
   * <p>The device template name to associate with the device ID.</p>
   */
  deviceTemplateName: string | undefined;

  /**
   * <p>The name of the placement in which to associate the device.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project containing the placement in which to associate the device.</p>
   */
  projectName: string | undefined;
}

export namespace AssociateDeviceWithPlacementRequest {
  export function isa(o: any): o is AssociateDeviceWithPlacementRequest {
    return __isa(o, "AssociateDeviceWithPlacementRequest");
  }
}

export interface AssociateDeviceWithPlacementResponse {
  __type?: "AssociateDeviceWithPlacementResponse";
}

export namespace AssociateDeviceWithPlacementResponse {
  export function isa(o: any): o is AssociateDeviceWithPlacementResponse {
    return __isa(o, "AssociateDeviceWithPlacementResponse");
  }
}

export interface CreatePlacementRequest {
  __type?: "CreatePlacementRequest";
  /**
   * <p>Optional user-defined key/value pairs providing contextual data (such as location or
   *       function) for the placement.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The name of the placement to be created.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project in which to create the placement.</p>
   */
  projectName: string | undefined;
}

export namespace CreatePlacementRequest {
  export function isa(o: any): o is CreatePlacementRequest {
    return __isa(o, "CreatePlacementRequest");
  }
}

export interface CreatePlacementResponse {
  __type?: "CreatePlacementResponse";
}

export namespace CreatePlacementResponse {
  export function isa(o: any): o is CreatePlacementResponse {
    return __isa(o, "CreatePlacementResponse");
  }
}

export interface CreateProjectRequest {
  __type?: "CreateProjectRequest";
  /**
   * <p>An optional description for the project.</p>
   */
  description?: string;

  /**
   * <p>The schema defining the placement to be created. A placement template defines placement
   *       default attributes and device templates. You cannot add or remove device templates after the
   *       project has been created. However, you can update <code>callbackOverrides</code> for the
   *       device templates using the <code>UpdateProject</code> API.</p>
   */
  placementTemplate?: PlacementTemplate;

  /**
   * <p>The name of the project to create.</p>
   */
  projectName: string | undefined;

  /**
   * <p>Optional tags (metadata key/value pairs) to be associated with the project. For example,
   *         <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging
   *         Strategies</a>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateProjectRequest {
  export function isa(o: any): o is CreateProjectRequest {
    return __isa(o, "CreateProjectRequest");
  }
}

export interface CreateProjectResponse {
  __type?: "CreateProjectResponse";
}

export namespace CreateProjectResponse {
  export function isa(o: any): o is CreateProjectResponse {
    return __isa(o, "CreateProjectResponse");
  }
}

export interface DeletePlacementRequest {
  __type?: "DeletePlacementRequest";
  /**
   * <p>The name of the empty placement to delete.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The project containing the empty placement to delete.</p>
   */
  projectName: string | undefined;
}

export namespace DeletePlacementRequest {
  export function isa(o: any): o is DeletePlacementRequest {
    return __isa(o, "DeletePlacementRequest");
  }
}

export interface DeletePlacementResponse {
  __type?: "DeletePlacementResponse";
}

export namespace DeletePlacementResponse {
  export function isa(o: any): o is DeletePlacementResponse {
    return __isa(o, "DeletePlacementResponse");
  }
}

export interface DeleteProjectRequest {
  __type?: "DeleteProjectRequest";
  /**
   * <p>The name of the empty project to delete.</p>
   */
  projectName: string | undefined;
}

export namespace DeleteProjectRequest {
  export function isa(o: any): o is DeleteProjectRequest {
    return __isa(o, "DeleteProjectRequest");
  }
}

export interface DeleteProjectResponse {
  __type?: "DeleteProjectResponse";
}

export namespace DeleteProjectResponse {
  export function isa(o: any): o is DeleteProjectResponse {
    return __isa(o, "DeleteProjectResponse");
  }
}

export interface DescribePlacementRequest {
  __type?: "DescribePlacementRequest";
  /**
   * <p>The name of the placement within a project.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The project containing the placement to be described.</p>
   */
  projectName: string | undefined;
}

export namespace DescribePlacementRequest {
  export function isa(o: any): o is DescribePlacementRequest {
    return __isa(o, "DescribePlacementRequest");
  }
}

export interface DescribePlacementResponse {
  __type?: "DescribePlacementResponse";
  /**
   * <p>An object describing the placement.</p>
   */
  placement: PlacementDescription | undefined;
}

export namespace DescribePlacementResponse {
  export function isa(o: any): o is DescribePlacementResponse {
    return __isa(o, "DescribePlacementResponse");
  }
}

export interface DescribeProjectRequest {
  __type?: "DescribeProjectRequest";
  /**
   * <p>The name of the project to be described.</p>
   */
  projectName: string | undefined;
}

export namespace DescribeProjectRequest {
  export function isa(o: any): o is DescribeProjectRequest {
    return __isa(o, "DescribeProjectRequest");
  }
}

export interface DescribeProjectResponse {
  __type?: "DescribeProjectResponse";
  /**
   * <p>An object describing the project.</p>
   */
  project: ProjectDescription | undefined;
}

export namespace DescribeProjectResponse {
  export function isa(o: any): o is DescribeProjectResponse {
    return __isa(o, "DescribeProjectResponse");
  }
}

/**
 * <p>An object representing a device for a placement template (see <a>PlacementTemplate</a>).</p>
 */
export interface DeviceTemplate {
  __type?: "DeviceTemplate";
  /**
   * <p>An optional Lambda function to invoke instead of the default Lambda function provided by
   *       the placement template.</p>
   */
  callbackOverrides?: { [key: string]: string };

  /**
   * <p>The device type, which currently must be <code>"button"</code>.</p>
   */
  deviceType?: string;
}

export namespace DeviceTemplate {
  export function isa(o: any): o is DeviceTemplate {
    return __isa(o, "DeviceTemplate");
  }
}

export interface DisassociateDeviceFromPlacementRequest {
  __type?: "DisassociateDeviceFromPlacementRequest";
  /**
   * <p>The device ID that should be removed from the placement.</p>
   */
  deviceTemplateName: string | undefined;

  /**
   * <p>The name of the placement that the device should be removed from.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project that contains the placement.</p>
   */
  projectName: string | undefined;
}

export namespace DisassociateDeviceFromPlacementRequest {
  export function isa(o: any): o is DisassociateDeviceFromPlacementRequest {
    return __isa(o, "DisassociateDeviceFromPlacementRequest");
  }
}

export interface DisassociateDeviceFromPlacementResponse {
  __type?: "DisassociateDeviceFromPlacementResponse";
}

export namespace DisassociateDeviceFromPlacementResponse {
  export function isa(o: any): o is DisassociateDeviceFromPlacementResponse {
    return __isa(o, "DisassociateDeviceFromPlacementResponse");
  }
}

export interface GetDevicesInPlacementRequest {
  __type?: "GetDevicesInPlacementRequest";
  /**
   * <p>The name of the placement to get the devices from.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;
}

export namespace GetDevicesInPlacementRequest {
  export function isa(o: any): o is GetDevicesInPlacementRequest {
    return __isa(o, "GetDevicesInPlacementRequest");
  }
}

export interface GetDevicesInPlacementResponse {
  __type?: "GetDevicesInPlacementResponse";
  /**
   * <p>An object containing the devices (zero or more) within the placement.</p>
   */
  devices: { [key: string]: string } | undefined;
}

export namespace GetDevicesInPlacementResponse {
  export function isa(o: any): o is GetDevicesInPlacementResponse {
    return __isa(o, "GetDevicesInPlacementResponse");
  }
}

/**
 * <p></p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  code: string | undefined;
  message: string | undefined;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return __isa(o, "InternalFailureException");
  }
}

/**
 * <p></p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

export interface ListPlacementsRequest {
  __type?: "ListPlacementsRequest";
  /**
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The project containing the placements to be listed.</p>
   */
  projectName: string | undefined;
}

export namespace ListPlacementsRequest {
  export function isa(o: any): o is ListPlacementsRequest {
    return __isa(o, "ListPlacementsRequest");
  }
}

export interface ListPlacementsResponse {
  __type?: "ListPlacementsResponse";
  /**
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   */
  nextToken?: string;

  /**
   * <p>An object listing the requested placements.</p>
   */
  placements: Array<PlacementSummary> | undefined;
}

export namespace ListPlacementsResponse {
  export function isa(o: any): o is ListPlacementsResponse {
    return __isa(o, "ListPlacementsResponse");
  }
}

export interface ListProjectsRequest {
  __type?: "ListProjectsRequest";
  /**
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProjectsRequest {
  export function isa(o: any): o is ListProjectsRequest {
    return __isa(o, "ListProjectsRequest");
  }
}

export interface ListProjectsResponse {
  __type?: "ListProjectsResponse";
  /**
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   */
  nextToken?: string;

  /**
   * <p>An object containing the list of projects.</p>
   */
  projects: Array<ProjectSummary> | undefined;
}

export namespace ListProjectsResponse {
  export function isa(o: any): o is ListProjectsResponse {
    return __isa(o, "ListProjectsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags (metadata key/value pairs) which you have assigned to the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>An object describing a project's placement.</p>
 */
export interface PlacementDescription {
  __type?: "PlacementDescription";
  /**
   * <p>The user-defined attributes associated with the placement.</p>
   */
  attributes: { [key: string]: string } | undefined;

  /**
   * <p>The date when the placement was initially created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The name of the placement.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   */
  updatedDate: Date | undefined;
}

export namespace PlacementDescription {
  export function isa(o: any): o is PlacementDescription {
    return __isa(o, "PlacementDescription");
  }
}

/**
 * <p>An object providing summary information for a particular placement.</p>
 */
export interface PlacementSummary {
  __type?: "PlacementSummary";
  /**
   * <p>The date when the placement was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The name of the placement being summarized.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   */
  updatedDate: Date | undefined;
}

export namespace PlacementSummary {
  export function isa(o: any): o is PlacementSummary {
    return __isa(o, "PlacementSummary");
  }
}

/**
 * <p>An object defining the template for a placement.</p>
 */
export interface PlacementTemplate {
  __type?: "PlacementTemplate";
  /**
   * <p>The default attributes (key/value pairs) to be applied to all placements using this
   *       template.</p>
   */
  defaultAttributes?: { [key: string]: string };

  /**
   * <p>An object specifying the <a>DeviceTemplate</a> for all placements using this
   *         (<a>PlacementTemplate</a>) template.</p>
   */
  deviceTemplates?: { [key: string]: DeviceTemplate };
}

export namespace PlacementTemplate {
  export function isa(o: any): o is PlacementTemplate {
    return __isa(o, "PlacementTemplate");
  }
}

/**
 * <p>An object providing detailed information for a particular project associated with an AWS
 *       account and region.</p>
 */
export interface ProjectDescription {
  __type?: "ProjectDescription";
  /**
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * <p>An object describing the project's placement specifications.</p>
   */
  placementTemplate?: PlacementTemplate;

  /**
   * <p>The name of the project for which to obtain information from.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | undefined;
}

export namespace ProjectDescription {
  export function isa(o: any): o is ProjectDescription {
    return __isa(o, "ProjectDescription");
  }
}

/**
 * <p>An object providing summary information for a particular project for an associated AWS
 *       account and region.</p>
 */
export interface ProjectSummary {
  __type?: "ProjectSummary";
  /**
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The name of the project being summarized.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | undefined;
}

export namespace ProjectSummary {
  export function isa(o: any): o is ProjectSummary {
    return __isa(o, "ProjectSummary");
  }
}

/**
 * <p></p>
 */
export interface ResourceConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace ResourceConflictException {
  export function isa(o: any): o is ResourceConflictException {
    return __isa(o, "ResourceConflictException");
  }
}

/**
 * <p></p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the resouce for which tag(s) should be added or modified.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
   *       resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p></p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the resource whose tag you want to remove.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of those tags which you want to remove.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdatePlacementRequest {
  __type?: "UpdatePlacementRequest";
  /**
   * <p>The user-defined object of attributes used to update the placement. The maximum number of
   *       key/value pairs is 50.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The name of the placement to update.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project containing the placement to be updated.</p>
   */
  projectName: string | undefined;
}

export namespace UpdatePlacementRequest {
  export function isa(o: any): o is UpdatePlacementRequest {
    return __isa(o, "UpdatePlacementRequest");
  }
}

export interface UpdatePlacementResponse {
  __type?: "UpdatePlacementResponse";
}

export namespace UpdatePlacementResponse {
  export function isa(o: any): o is UpdatePlacementResponse {
    return __isa(o, "UpdatePlacementResponse");
  }
}

export interface UpdateProjectRequest {
  __type?: "UpdateProjectRequest";
  /**
   * <p>An optional user-defined description for the project.</p>
   */
  description?: string;

  /**
   * <p>An object defining the project update. Once a project has been created, you cannot add
   *       device template names to the project. However, for a given <code>placementTemplate</code>, you
   *       can update the associated <code>callbackOverrides</code> for the device definition using this
   *       API.</p>
   */
  placementTemplate?: PlacementTemplate;

  /**
   * <p>The name of the project to be updated.</p>
   */
  projectName: string | undefined;
}

export namespace UpdateProjectRequest {
  export function isa(o: any): o is UpdateProjectRequest {
    return __isa(o, "UpdateProjectRequest");
  }
}

export interface UpdateProjectResponse {
  __type?: "UpdateProjectResponse";
}

export namespace UpdateProjectResponse {
  export function isa(o: any): o is UpdateProjectResponse {
    return __isa(o, "UpdateProjectResponse");
  }
}
