// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IoT1ClickProjectsServiceException as __BaseException } from "./IoT1ClickProjectsServiceException";

export interface AssociateDeviceWithPlacementRequest {
  /**
   * <p>The name of the project containing the placement in which to associate the device.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement in which to associate the device.</p>
   */
  placementName: string | undefined;

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
}

export interface AssociateDeviceWithPlacementResponse {}

/**
 * <p></p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.code = opts.code;
  }
}

/**
 * <p></p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.code = opts.code;
  }
}

/**
 * <p></p>
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.code = opts.code;
  }
}

/**
 * <p></p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code: string | undefined;
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
    this.code = opts.code;
  }
}

export interface CreatePlacementRequest {
  /**
   * <p>The name of the placement to be created.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project in which to create the placement.</p>
   */
  projectName: string | undefined;

  /**
   * <p>Optional user-defined key/value pairs providing contextual data (such as location or
   *       function) for the placement.</p>
   */
  attributes?: Record<string, string>;
}

export interface CreatePlacementResponse {}

/**
 * <p>An object representing a device for a placement template (see <a>PlacementTemplate</a>).</p>
 */
export interface DeviceTemplate {
  /**
   * <p>The device type, which currently must be <code>"button"</code>.</p>
   */
  deviceType?: string;

  /**
   * <p>An optional Lambda function to invoke instead of the default Lambda function provided by
   *       the placement template.</p>
   */
  callbackOverrides?: Record<string, string>;
}

/**
 * <p>An object defining the template for a placement.</p>
 */
export interface PlacementTemplate {
  /**
   * <p>The default attributes (key/value pairs) to be applied to all placements using this
   *       template.</p>
   */
  defaultAttributes?: Record<string, string>;

  /**
   * <p>An object specifying the <a>DeviceTemplate</a> for all placements using this
   *         (<a>PlacementTemplate</a>) template.</p>
   */
  deviceTemplates?: Record<string, DeviceTemplate>;
}

export interface CreateProjectRequest {
  /**
   * <p>The name of the project to create.</p>
   */
  projectName: string | undefined;

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
   * <p>Optional tags (metadata key/value pairs) to be associated with the project. For example,
   *         <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging
   *         Strategies</a>.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateProjectResponse {}

export interface DeletePlacementRequest {
  /**
   * <p>The name of the empty placement to delete.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The project containing the empty placement to delete.</p>
   */
  projectName: string | undefined;
}

export interface DeletePlacementResponse {}

/**
 * <p></p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.code = opts.code;
  }
}

export interface DeleteProjectRequest {
  /**
   * <p>The name of the empty project to delete.</p>
   */
  projectName: string | undefined;
}

export interface DeleteProjectResponse {}

export interface DescribePlacementRequest {
  /**
   * <p>The name of the placement within a project.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The project containing the placement to be described.</p>
   */
  projectName: string | undefined;
}

/**
 * <p>An object describing a project's placement.</p>
 */
export interface PlacementDescription {
  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The user-defined attributes associated with the placement.</p>
   */
  attributes: Record<string, string> | undefined;

  /**
   * <p>The date when the placement was initially created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   */
  updatedDate: Date | undefined;
}

export interface DescribePlacementResponse {
  /**
   * <p>An object describing the placement.</p>
   */
  placement: PlacementDescription | undefined;
}

export interface DescribeProjectRequest {
  /**
   * <p>The name of the project to be described.</p>
   */
  projectName: string | undefined;
}

/**
 * <p>An object providing detailed information for a particular project associated with an AWS
 *       account and region.</p>
 */
export interface ProjectDescription {
  /**
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * <p>The name of the project for which to obtain information from.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | undefined;

  /**
   * <p>An object describing the project's placement specifications.</p>
   */
  placementTemplate?: PlacementTemplate;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeProjectResponse {
  /**
   * <p>An object describing the project.</p>
   */
  project: ProjectDescription | undefined;
}

export interface DisassociateDeviceFromPlacementRequest {
  /**
   * <p>The name of the project that contains the placement.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement that the device should be removed from.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The device ID that should be removed from the placement.</p>
   */
  deviceTemplateName: string | undefined;
}

export interface DisassociateDeviceFromPlacementResponse {}

export interface GetDevicesInPlacementRequest {
  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement to get the devices from.</p>
   */
  placementName: string | undefined;
}

export interface GetDevicesInPlacementResponse {
  /**
   * <p>An object containing the devices (zero or more) within the placement.</p>
   */
  devices: Record<string, string> | undefined;
}

export interface ListPlacementsRequest {
  /**
   * <p>The project containing the placements to be listed.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   */
  maxResults?: number;
}

/**
 * <p>An object providing summary information for a particular placement.</p>
 */
export interface PlacementSummary {
  /**
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement being summarized.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The date when the placement was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   */
  updatedDate: Date | undefined;
}

export interface ListPlacementsResponse {
  /**
   * <p>An object listing the requested placements.</p>
   */
  placements: PlacementSummary[] | undefined;

  /**
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   */
  nextToken?: string;
}

export interface ListProjectsRequest {
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   */
  maxResults?: number;
}

/**
 * <p>An object providing summary information for a particular project for an associated AWS
 *       account and region.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * <p>The name of the project being summarized.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | undefined;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: Record<string, string>;
}

export interface ListProjectsResponse {
  /**
   * <p>An object containing the list of projects.</p>
   */
  projects: ProjectSummary[] | undefined;

  /**
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags (metadata key/value pairs) which you have assigned to the resource.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resouce for which tag(s) should be added or modified.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
   *       resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource whose tag you want to remove.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of those tags which you want to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdatePlacementRequest {
  /**
   * <p>The name of the placement to update.</p>
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project containing the placement to be updated.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The user-defined object of attributes used to update the placement. The maximum number of
   *       key/value pairs is 50.</p>
   */
  attributes?: Record<string, string>;
}

export interface UpdatePlacementResponse {}

export interface UpdateProjectRequest {
  /**
   * <p>The name of the project to be updated.</p>
   */
  projectName: string | undefined;

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
}

export interface UpdateProjectResponse {}

/**
 * @internal
 */
export const AssociateDeviceWithPlacementRequestFilterSensitiveLog = (
  obj: AssociateDeviceWithPlacementRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDeviceWithPlacementResponseFilterSensitiveLog = (
  obj: AssociateDeviceWithPlacementResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlacementRequestFilterSensitiveLog = (obj: CreatePlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlacementResponseFilterSensitiveLog = (obj: CreatePlacementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceTemplateFilterSensitiveLog = (obj: DeviceTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementTemplateFilterSensitiveLog = (obj: PlacementTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectResponseFilterSensitiveLog = (obj: CreateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlacementRequestFilterSensitiveLog = (obj: DeletePlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlacementResponseFilterSensitiveLog = (obj: DeletePlacementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResponseFilterSensitiveLog = (obj: DeleteProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePlacementRequestFilterSensitiveLog = (obj: DescribePlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementDescriptionFilterSensitiveLog = (obj: PlacementDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePlacementResponseFilterSensitiveLog = (obj: DescribePlacementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectRequestFilterSensitiveLog = (obj: DescribeProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectDescriptionFilterSensitiveLog = (obj: ProjectDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectResponseFilterSensitiveLog = (obj: DescribeProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDeviceFromPlacementRequestFilterSensitiveLog = (
  obj: DisassociateDeviceFromPlacementRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDeviceFromPlacementResponseFilterSensitiveLog = (
  obj: DisassociateDeviceFromPlacementResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDevicesInPlacementRequestFilterSensitiveLog = (obj: GetDevicesInPlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDevicesInPlacementResponseFilterSensitiveLog = (obj: GetDevicesInPlacementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlacementsRequestFilterSensitiveLog = (obj: ListPlacementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementSummaryFilterSensitiveLog = (obj: PlacementSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlacementsResponseFilterSensitiveLog = (obj: ListPlacementsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsRequestFilterSensitiveLog = (obj: ListProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsResponseFilterSensitiveLog = (obj: ListProjectsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePlacementRequestFilterSensitiveLog = (obj: UpdatePlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePlacementResponseFilterSensitiveLog = (obj: UpdatePlacementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectResponseFilterSensitiveLog = (obj: UpdateProjectResponse): any => ({
  ...obj,
});
