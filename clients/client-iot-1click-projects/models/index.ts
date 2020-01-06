import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateDeviceWithPlacementRequest {
  __type?: "AssociateDeviceWithPlacementRequest";
  /**
   *
   *          <p>The ID of the physical device to be associated with the given placement in the project.
   *          Note that a mandatory 4 character prefix is required for all <code>deviceId</code>
   *          values.</p>
   *
   */
  deviceId: string | undefined;

  /**
   *
   *          <p>The device template name to associate with the device ID.</p>
   *
   */
  deviceTemplateName: string | undefined;

  /**
   *
   *          <p>The name of the placement in which to associate the device.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The name of the project containing the placement in which to associate the
   *          device.</p>
   *
   */
  projectName: string | undefined;
}

export namespace AssociateDeviceWithPlacementRequest {
  export function isa(o: any): o is AssociateDeviceWithPlacementRequest {
    return _smithy.isa(o, "AssociateDeviceWithPlacementRequest");
  }
}

export interface AssociateDeviceWithPlacementResponse extends $MetadataBearer {
  __type?: "AssociateDeviceWithPlacementResponse";
}

export namespace AssociateDeviceWithPlacementResponse {
  export function isa(o: any): o is AssociateDeviceWithPlacementResponse {
    return _smithy.isa(o, "AssociateDeviceWithPlacementResponse");
  }
}

export interface CreatePlacementRequest {
  __type?: "CreatePlacementRequest";
  /**
   *
   *          <p>Optional user-defined key/value pairs providing contextual data (such as location or
   *          function) for the placement.</p>
   *
   */
  attributes?: { [key: string]: string };

  /**
   *
   *          <p>The name of the placement to be created.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The name of the project in which to create the placement.</p>
   *
   */
  projectName: string | undefined;
}

export namespace CreatePlacementRequest {
  export function isa(o: any): o is CreatePlacementRequest {
    return _smithy.isa(o, "CreatePlacementRequest");
  }
}

export interface CreatePlacementResponse extends $MetadataBearer {
  __type?: "CreatePlacementResponse";
}

export namespace CreatePlacementResponse {
  export function isa(o: any): o is CreatePlacementResponse {
    return _smithy.isa(o, "CreatePlacementResponse");
  }
}

export interface CreateProjectRequest {
  __type?: "CreateProjectRequest";
  /**
   *
   *          <p>An optional description for the project.</p>
   *
   */
  description?: string;

  /**
   *
   *          <p>The schema defining the placement to be created. A placement template defines placement
   *          default attributes and device templates. You cannot add or remove device templates after
   *          the project has been created. However, you can update <code>callbackOverrides</code> for
   *          the device templates using the <code>UpdateProject</code> API.</p>
   *
   */
  placementTemplate?: PlacementTemplate;

  /**
   *
   *          <p>The name of the project to create.</p>
   *
   */
  projectName: string | undefined;
}

export namespace CreateProjectRequest {
  export function isa(o: any): o is CreateProjectRequest {
    return _smithy.isa(o, "CreateProjectRequest");
  }
}

export interface CreateProjectResponse extends $MetadataBearer {
  __type?: "CreateProjectResponse";
}

export namespace CreateProjectResponse {
  export function isa(o: any): o is CreateProjectResponse {
    return _smithy.isa(o, "CreateProjectResponse");
  }
}

export interface DeletePlacementRequest {
  __type?: "DeletePlacementRequest";
  /**
   *
   *          <p>The name of the empty placement to delete.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The project containing the empty placement to delete.</p>
   *
   */
  projectName: string | undefined;
}

export namespace DeletePlacementRequest {
  export function isa(o: any): o is DeletePlacementRequest {
    return _smithy.isa(o, "DeletePlacementRequest");
  }
}

export interface DeletePlacementResponse extends $MetadataBearer {
  __type?: "DeletePlacementResponse";
}

export namespace DeletePlacementResponse {
  export function isa(o: any): o is DeletePlacementResponse {
    return _smithy.isa(o, "DeletePlacementResponse");
  }
}

export interface DeleteProjectRequest {
  __type?: "DeleteProjectRequest";
  /**
   *
   *          <p>The name of the empty project to delete.</p>
   *
   */
  projectName: string | undefined;
}

export namespace DeleteProjectRequest {
  export function isa(o: any): o is DeleteProjectRequest {
    return _smithy.isa(o, "DeleteProjectRequest");
  }
}

export interface DeleteProjectResponse extends $MetadataBearer {
  __type?: "DeleteProjectResponse";
}

export namespace DeleteProjectResponse {
  export function isa(o: any): o is DeleteProjectResponse {
    return _smithy.isa(o, "DeleteProjectResponse");
  }
}

export interface DescribePlacementRequest {
  __type?: "DescribePlacementRequest";
  /**
   *
   *          <p>The name of the placement within a project.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The project containing the placement to be described.</p>
   *
   */
  projectName: string | undefined;
}

export namespace DescribePlacementRequest {
  export function isa(o: any): o is DescribePlacementRequest {
    return _smithy.isa(o, "DescribePlacementRequest");
  }
}

export interface DescribePlacementResponse extends $MetadataBearer {
  __type?: "DescribePlacementResponse";
  /**
   *
   *          <p>An object describing the placement.</p>
   *
   */
  placement: PlacementDescription | undefined;
}

export namespace DescribePlacementResponse {
  export function isa(o: any): o is DescribePlacementResponse {
    return _smithy.isa(o, "DescribePlacementResponse");
  }
}

export interface DescribeProjectRequest {
  __type?: "DescribeProjectRequest";
  /**
   *
   *          <p>The name of the project to be described.</p>
   *
   */
  projectName: string | undefined;
}

export namespace DescribeProjectRequest {
  export function isa(o: any): o is DescribeProjectRequest {
    return _smithy.isa(o, "DescribeProjectRequest");
  }
}

export interface DescribeProjectResponse extends $MetadataBearer {
  __type?: "DescribeProjectResponse";
  /**
   *
   *          <p>An object describing the project.</p>
   *
   */
  project: ProjectDescription | undefined;
}

export namespace DescribeProjectResponse {
  export function isa(o: any): o is DescribeProjectResponse {
    return _smithy.isa(o, "DescribeProjectResponse");
  }
}

/**
 *
 *          <p>An object representing a device for a placement template (see <a>PlacementTemplate</a>).</p>
 *
 */
export interface DeviceTemplate {
  __type?: "DeviceTemplate";
  /**
   *
   *          <p>An optional Lambda function to invoke instead of the default Lambda function provided by
   *          the placement template.</p>
   *
   */
  callbackOverrides?: { [key: string]: string };

  /**
   *
   *          <p>The device type, which currently must be <code>"button"</code>.</p>
   *
   */
  deviceType?: string;
}

export namespace DeviceTemplate {
  export function isa(o: any): o is DeviceTemplate {
    return _smithy.isa(o, "DeviceTemplate");
  }
}

export interface DisassociateDeviceFromPlacementRequest {
  __type?: "DisassociateDeviceFromPlacementRequest";
  /**
   *
   *          <p>The device ID that should be removed from the placement.</p>
   *
   */
  deviceTemplateName: string | undefined;

  /**
   *
   *          <p>The name of the placement that the device should be removed from.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The name of the project that contains the placement.</p>
   *
   */
  projectName: string | undefined;
}

export namespace DisassociateDeviceFromPlacementRequest {
  export function isa(o: any): o is DisassociateDeviceFromPlacementRequest {
    return _smithy.isa(o, "DisassociateDeviceFromPlacementRequest");
  }
}

export interface DisassociateDeviceFromPlacementResponse
  extends $MetadataBearer {
  __type?: "DisassociateDeviceFromPlacementResponse";
}

export namespace DisassociateDeviceFromPlacementResponse {
  export function isa(o: any): o is DisassociateDeviceFromPlacementResponse {
    return _smithy.isa(o, "DisassociateDeviceFromPlacementResponse");
  }
}

export interface GetDevicesInPlacementRequest {
  __type?: "GetDevicesInPlacementRequest";
  /**
   *
   *          <p>The name of the placement to get the devices from.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The name of the project containing the placement.</p>
   *
   */
  projectName: string | undefined;
}

export namespace GetDevicesInPlacementRequest {
  export function isa(o: any): o is GetDevicesInPlacementRequest {
    return _smithy.isa(o, "GetDevicesInPlacementRequest");
  }
}

export interface GetDevicesInPlacementResponse extends $MetadataBearer {
  __type?: "GetDevicesInPlacementResponse";
  /**
   *
   *          <p>An object containing the devices (zero or more) within the placement.</p>
   *
   */
  devices: { [key: string]: string } | undefined;
}

export namespace GetDevicesInPlacementResponse {
  export function isa(o: any): o is GetDevicesInPlacementResponse {
    return _smithy.isa(o, "GetDevicesInPlacementResponse");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface InternalFailureException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalFailureException";
  $fault: "server";
  code: string | undefined;
  message: string | undefined;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return _smithy.isa(o, "InternalFailureException");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface InvalidRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRequestException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

export interface ListPlacementsRequest {
  __type?: "ListPlacementsRequest";
  /**
   *
   *          <p>The maximum number of results to return per request. If not set, a default value of 100
   *          is used.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The token to retrieve the next set of results.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *          <p>The project containing the placements to be listed.</p>
   *
   */
  projectName: string | undefined;
}

export namespace ListPlacementsRequest {
  export function isa(o: any): o is ListPlacementsRequest {
    return _smithy.isa(o, "ListPlacementsRequest");
  }
}

export interface ListPlacementsResponse extends $MetadataBearer {
  __type?: "ListPlacementsResponse";
  /**
   *
   *          <p>The token used to retrieve the next set of results - will be effectively empty if there
   *          are no further results.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *          <p>An object listing the requested placements.</p>
   *
   */
  placements: Array<PlacementSummary> | undefined;
}

export namespace ListPlacementsResponse {
  export function isa(o: any): o is ListPlacementsResponse {
    return _smithy.isa(o, "ListPlacementsResponse");
  }
}

export interface ListProjectsRequest {
  __type?: "ListProjectsRequest";
  /**
   *
   *          <p>The maximum number of results to return per request. If not set, a default value of 100
   *          is used.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The token to retrieve the next set of results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListProjectsRequest {
  export function isa(o: any): o is ListProjectsRequest {
    return _smithy.isa(o, "ListProjectsRequest");
  }
}

export interface ListProjectsResponse extends $MetadataBearer {
  __type?: "ListProjectsResponse";
  /**
   *
   *          <p>The token used to retrieve the next set of results - will be effectively empty if there
   *          are no further results.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *          <p>An object containing the list of projects.</p>
   *
   */
  projects: Array<ProjectSummary> | undefined;
}

export namespace ListProjectsResponse {
  export function isa(o: any): o is ListProjectsResponse {
    return _smithy.isa(o, "ListProjectsResponse");
  }
}

/**
 *
 *          <p>An object describing a project's placement.</p>
 *
 */
export interface PlacementDescription {
  __type?: "PlacementDescription";
  /**
   *
   *          <p>The user-defined attributes associated with the placement.</p>
   *
   */
  attributes: { [key: string]: string } | undefined;

  /**
   *
   *          <p>The date when the placement was initially created, in UNIX epoch time format.</p>
   *
   */
  createdDate: Date | undefined;

  /**
   *
   *          <p>The name of the placement.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The name of the project containing the placement.</p>
   *
   */
  projectName: string | undefined;

  /**
   *
   *          <p>The date when the placement was last updated, in UNIX epoch time format. If the
   *          placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are
   *          the same.</p>
   *
   */
  updatedDate: Date | undefined;
}

export namespace PlacementDescription {
  export function isa(o: any): o is PlacementDescription {
    return _smithy.isa(o, "PlacementDescription");
  }
}

/**
 *
 *          <p>An object providing summary information for a particular placement.</p>
 *
 */
export interface PlacementSummary {
  __type?: "PlacementSummary";
  /**
   *
   *          <p>The date when the placement was originally created, in UNIX epoch time format.</p>
   *
   */
  createdDate: Date | undefined;

  /**
   *
   *          <p>The name of the placement being summarized.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The name of the project containing the placement.</p>
   *
   */
  projectName: string | undefined;

  /**
   *
   *          <p>The date when the placement was last updated, in UNIX epoch time format. If the
   *          placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are
   *          the same.</p>
   *
   */
  updatedDate: Date | undefined;
}

export namespace PlacementSummary {
  export function isa(o: any): o is PlacementSummary {
    return _smithy.isa(o, "PlacementSummary");
  }
}

/**
 *
 *          <p>An object defining the template for a placement.</p>
 *
 */
export interface PlacementTemplate {
  __type?: "PlacementTemplate";
  /**
   *
   *          <p>The default attributes (key/value pairs) to be applied to all placements using this
   *          template.</p>
   *
   */
  defaultAttributes?: { [key: string]: string };

  /**
   *
   *          <p>An object specifying the <a>DeviceTemplate</a> for all placements using this
   *             (<a>PlacementTemplate</a>) template.</p>
   *
   */
  deviceTemplates?: { [key: string]: DeviceTemplate };
}

export namespace PlacementTemplate {
  export function isa(o: any): o is PlacementTemplate {
    return _smithy.isa(o, "PlacementTemplate");
  }
}

/**
 *
 *          <p>An object providing detailed information for a particular project associated with an
 *          AWS account and region.</p>
 *
 */
export interface ProjectDescription {
  __type?: "ProjectDescription";
  /**
   *
   *          <p>The date when the project was originally created, in UNIX epoch time format.</p>
   *
   */
  createdDate: Date | undefined;

  /**
   *
   *          <p>The description of the project.</p>
   *
   */
  description?: string;

  /**
   *
   *          <p>An object describing the project's placement specifications.</p>
   *
   */
  placementTemplate?: PlacementTemplate;

  /**
   *
   *          <p>The name of the project for which to obtain information from.</p>
   *
   */
  projectName: string | undefined;

  /**
   *
   *          <p>The date when the project was last updated, in UNIX epoch time format. If the project
   *          was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *          same.</p>
   *
   */
  updatedDate: Date | undefined;
}

export namespace ProjectDescription {
  export function isa(o: any): o is ProjectDescription {
    return _smithy.isa(o, "ProjectDescription");
  }
}

/**
 *
 *          <p>An object providing summary information for a particular project for an associated AWS
 *          account and region.</p>
 *
 */
export interface ProjectSummary {
  __type?: "ProjectSummary";
  /**
   *
   *          <p>The date when the project was originally created, in UNIX epoch time format.</p>
   *
   */
  createdDate: Date | undefined;

  /**
   *
   *          <p>The name of the project being summarized.</p>
   *
   */
  projectName: string | undefined;

  /**
   *
   *          <p>The date when the project was last updated, in UNIX epoch time format. If the project
   *          was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *          same.</p>
   *
   */
  updatedDate: Date | undefined;
}

export namespace ProjectSummary {
  export function isa(o: any): o is ProjectSummary {
    return _smithy.isa(o, "ProjectSummary");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface ResourceConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceConflictException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace ResourceConflictException {
  export function isa(o: any): o is ResourceConflictException {
    return _smithy.isa(o, "ResourceConflictException");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface TooManyRequestsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TooManyRequestsException";
  $fault: "client";
  code: string | undefined;
  message: string | undefined;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}

export interface UpdatePlacementRequest {
  __type?: "UpdatePlacementRequest";
  /**
   *
   *          <p>The user-defined object of attributes used to update the placement. The maximum number
   *          of key/value pairs is 50.</p>
   *
   */
  attributes?: { [key: string]: string };

  /**
   *
   *          <p>The name of the placement to update.</p>
   *
   */
  placementName: string | undefined;

  /**
   *
   *          <p>The name of the project containing the placement to be updated.</p>
   *
   */
  projectName: string | undefined;
}

export namespace UpdatePlacementRequest {
  export function isa(o: any): o is UpdatePlacementRequest {
    return _smithy.isa(o, "UpdatePlacementRequest");
  }
}

export interface UpdatePlacementResponse extends $MetadataBearer {
  __type?: "UpdatePlacementResponse";
}

export namespace UpdatePlacementResponse {
  export function isa(o: any): o is UpdatePlacementResponse {
    return _smithy.isa(o, "UpdatePlacementResponse");
  }
}

export interface UpdateProjectRequest {
  __type?: "UpdateProjectRequest";
  /**
   *
   *          <p>An optional user-defined description for the project.</p>
   *
   */
  description?: string;

  /**
   *
   *          <p>An object defining the project update. Once a project has been created, you cannot add
   *          device template names to the project. However, for a given <code>placementTemplate</code>,
   *          you can update the associated <code>callbackOverrides</code> for the device definition
   *          using this API.</p>
   *
   */
  placementTemplate?: PlacementTemplate;

  /**
   *
   *          <p>The name of the project to be updated.</p>
   *
   */
  projectName: string | undefined;
}

export namespace UpdateProjectRequest {
  export function isa(o: any): o is UpdateProjectRequest {
    return _smithy.isa(o, "UpdateProjectRequest");
  }
}

export interface UpdateProjectResponse extends $MetadataBearer {
  __type?: "UpdateProjectResponse";
}

export namespace UpdateProjectResponse {
  export function isa(o: any): o is UpdateProjectResponse {
    return _smithy.isa(o, "UpdateProjectResponse");
  }
}
