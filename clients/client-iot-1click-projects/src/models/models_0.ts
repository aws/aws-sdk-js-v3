// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoT1ClickProjectsServiceException as __BaseException } from "./IoT1ClickProjectsServiceException";

/**
 * @public
 */
export interface AssociateDeviceWithPlacementRequest {
  /**
   * <p>The name of the project containing the placement in which to associate the device.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement in which to associate the device.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The ID of the physical device to be associated with the given placement in the project.
   *       Note that a mandatory 4 character prefix is required for all <code>deviceId</code>
   *       values.</p>
   * @public
   */
  deviceId: string | undefined;

  /**
   * <p>The device template name to associate with the device ID.</p>
   * @public
   */
  deviceTemplateName: string | undefined;
}

/**
 * @public
 */
export interface AssociateDeviceWithPlacementResponse {}

/**
 * <p></p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreatePlacementRequest {
  /**
   * <p>The name of the placement to be created.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project in which to create the placement.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>Optional user-defined key/value pairs providing contextual data (such as location or
   *       function) for the placement.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePlacementResponse {}

/**
 * <p>An object representing a device for a placement template (see <a>PlacementTemplate</a>).</p>
 * @public
 */
export interface DeviceTemplate {
  /**
   * <p>The device type, which currently must be <code>"button"</code>.</p>
   * @public
   */
  deviceType?: string | undefined;

  /**
   * <p>An optional Lambda function to invoke instead of the default Lambda function provided by
   *       the placement template.</p>
   * @public
   */
  callbackOverrides?: Record<string, string> | undefined;
}

/**
 * <p>An object defining the template for a placement.</p>
 * @public
 */
export interface PlacementTemplate {
  /**
   * <p>The default attributes (key/value pairs) to be applied to all placements using this
   *       template.</p>
   * @public
   */
  defaultAttributes?: Record<string, string> | undefined;

  /**
   * <p>An object specifying the <a>DeviceTemplate</a> for all placements using this
   *         (<a>PlacementTemplate</a>) template.</p>
   * @public
   */
  deviceTemplates?: Record<string, DeviceTemplate> | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The name of the project to create.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>An optional description for the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The schema defining the placement to be created. A placement template defines placement
   *       default attributes and device templates. You cannot add or remove device templates after the
   *       project has been created. However, you can update <code>callbackOverrides</code> for the
   *       device templates using the <code>UpdateProject</code> API.</p>
   * @public
   */
  placementTemplate?: PlacementTemplate | undefined;

  /**
   * <p>Optional tags (metadata key/value pairs) to be associated with the project. For example,
   *         <code>\{ \{"key1": "value1", "key2": "value2"\} \}</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging
   *         Strategies</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {}

/**
 * @public
 */
export interface DeletePlacementRequest {
  /**
   * <p>The name of the empty placement to delete.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The project containing the empty placement to delete.</p>
   * @public
   */
  projectName: string | undefined;
}

/**
 * @public
 */
export interface DeletePlacementResponse {}

/**
 * <p></p>
 * @public
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

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The name of the empty project to delete.</p>
   * @public
   */
  projectName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {}

/**
 * @public
 */
export interface DescribePlacementRequest {
  /**
   * <p>The name of the placement within a project.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The project containing the placement to be described.</p>
   * @public
   */
  projectName: string | undefined;
}

/**
 * <p>An object describing a project's placement.</p>
 * @public
 */
export interface PlacementDescription {
  /**
   * <p>The name of the project containing the placement.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The user-defined attributes associated with the placement.</p>
   * @public
   */
  attributes: Record<string, string> | undefined;

  /**
   * <p>The date when the placement was initially created, in UNIX epoch time format.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   * @public
   */
  updatedDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribePlacementResponse {
  /**
   * <p>An object describing the placement.</p>
   * @public
   */
  placement: PlacementDescription | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * <p>The name of the project to be described.</p>
   * @public
   */
  projectName: string | undefined;
}

/**
 * <p>An object providing detailed information for a particular project associated with an AWS
 *       account and region.</p>
 * @public
 */
export interface ProjectDescription {
  /**
   * <p>The ARN of the project.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the project for which to obtain information from.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   * @public
   */
  updatedDate: Date | undefined;

  /**
   * <p>An object describing the project's placement specifications.</p>
   * @public
   */
  placementTemplate?: PlacementTemplate | undefined;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * <p>An object describing the project.</p>
   * @public
   */
  project: ProjectDescription | undefined;
}

/**
 * @public
 */
export interface DisassociateDeviceFromPlacementRequest {
  /**
   * <p>The name of the project that contains the placement.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement that the device should be removed from.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The device ID that should be removed from the placement.</p>
   * @public
   */
  deviceTemplateName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDeviceFromPlacementResponse {}

/**
 * @public
 */
export interface GetDevicesInPlacementRequest {
  /**
   * <p>The name of the project containing the placement.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement to get the devices from.</p>
   * @public
   */
  placementName: string | undefined;
}

/**
 * @public
 */
export interface GetDevicesInPlacementResponse {
  /**
   * <p>An object containing the devices (zero or more) within the placement.</p>
   * @public
   */
  devices: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPlacementsRequest {
  /**
   * <p>The project containing the placements to be listed.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object providing summary information for a particular placement.</p>
 * @public
 */
export interface PlacementSummary {
  /**
   * <p>The name of the project containing the placement.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the placement being summarized.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The date when the placement was originally created, in UNIX epoch time format.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   * @public
   */
  updatedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListPlacementsResponse {
  /**
   * <p>An object listing the requested placements.</p>
   * @public
   */
  placements: PlacementSummary[] | undefined;

  /**
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object providing summary information for a particular project for an associated AWS
 *       account and region.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The ARN of the project.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the project being summarized.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   * @public
   */
  createdDate: Date | undefined;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   * @public
   */
  updatedDate: Date | undefined;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * <p>An object containing the list of projects.</p>
   * @public
   */
  projects: ProjectSummary[] | undefined;

  /**
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags (metadata key/value pairs) which you have assigned to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resouce for which tag(s) should be added or modified.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
   *       resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource whose tag you want to remove.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of those tags which you want to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdatePlacementRequest {
  /**
   * <p>The name of the placement to update.</p>
   * @public
   */
  placementName: string | undefined;

  /**
   * <p>The name of the project containing the placement to be updated.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The user-defined object of attributes used to update the placement. The maximum number of
   *       key/value pairs is 50.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdatePlacementResponse {}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>The name of the project to be updated.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>An optional user-defined description for the project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object defining the project update. Once a project has been created, you cannot add
   *       device template names to the project. However, for a given <code>placementTemplate</code>, you
   *       can update the associated <code>callbackOverrides</code> for the device definition using this
   *       API.</p>
   * @public
   */
  placementTemplate?: PlacementTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {}
