// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoT1ClickProjectsServiceException as __BaseException } from "./IoT1ClickProjectsServiceException";

/**
 * @public
 */
export interface AssociateDeviceWithPlacementRequest {
  /**
   * @public
   * <p>The name of the project containing the placement in which to associate the device.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the placement in which to associate the device.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The ID of the physical device to be associated with the given placement in the project.
   *       Note that a mandatory 4 character prefix is required for all <code>deviceId</code>
   *       values.</p>
   */
  deviceId: string | undefined;

  /**
   * @public
   * <p>The device template name to associate with the device ID.</p>
   */
  deviceTemplateName: string | undefined;
}

/**
 * @public
 */
export interface AssociateDeviceWithPlacementResponse {}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreatePlacementRequest {
  /**
   * @public
   * <p>The name of the placement to be created.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The name of the project in which to create the placement.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>Optional user-defined key/value pairs providing contextual data (such as location or
   *       function) for the placement.</p>
   */
  attributes?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePlacementResponse {}

/**
 * @public
 * <p>An object representing a device for a placement template (see <a>PlacementTemplate</a>).</p>
 */
export interface DeviceTemplate {
  /**
   * @public
   * <p>The device type, which currently must be <code>"button"</code>.</p>
   */
  deviceType?: string;

  /**
   * @public
   * <p>An optional Lambda function to invoke instead of the default Lambda function provided by
   *       the placement template.</p>
   */
  callbackOverrides?: Record<string, string>;
}

/**
 * @public
 * <p>An object defining the template for a placement.</p>
 */
export interface PlacementTemplate {
  /**
   * @public
   * <p>The default attributes (key/value pairs) to be applied to all placements using this
   *       template.</p>
   */
  defaultAttributes?: Record<string, string>;

  /**
   * @public
   * <p>An object specifying the <a>DeviceTemplate</a> for all placements using this
   *         (<a>PlacementTemplate</a>) template.</p>
   */
  deviceTemplates?: Record<string, DeviceTemplate>;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * @public
   * <p>The name of the project to create.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>An optional description for the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The schema defining the placement to be created. A placement template defines placement
   *       default attributes and device templates. You cannot add or remove device templates after the
   *       project has been created. However, you can update <code>callbackOverrides</code> for the
   *       device templates using the <code>UpdateProject</code> API.</p>
   */
  placementTemplate?: PlacementTemplate;

  /**
   * @public
   * <p>Optional tags (metadata key/value pairs) to be associated with the project. For example,
   *         <code>\{ \{"key1": "value1", "key2": "value2"\} \}</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging
   *         Strategies</a>.</p>
   */
  tags?: Record<string, string>;
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
   * @public
   * <p>The name of the empty placement to delete.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The project containing the empty placement to delete.</p>
   */
  projectName: string | undefined;
}

/**
 * @public
 */
export interface DeletePlacementResponse {}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * @public
   * <p>The name of the empty project to delete.</p>
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
   * @public
   * <p>The name of the placement within a project.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The project containing the placement to be described.</p>
   */
  projectName: string | undefined;
}

/**
 * @public
 * <p>An object describing a project's placement.</p>
 */
export interface PlacementDescription {
  /**
   * @public
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the placement.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The user-defined attributes associated with the placement.</p>
   */
  attributes: Record<string, string> | undefined;

  /**
   * @public
   * <p>The date when the placement was initially created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   */
  updatedDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribePlacementResponse {
  /**
   * @public
   * <p>An object describing the placement.</p>
   */
  placement: PlacementDescription | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * @public
   * <p>The name of the project to be described.</p>
   */
  projectName: string | undefined;
}

/**
 * @public
 * <p>An object providing detailed information for a particular project associated with an AWS
 *       account and region.</p>
 */
export interface ProjectDescription {
  /**
   * @public
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the project for which to obtain information from.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | undefined;

  /**
   * @public
   * <p>An object describing the project's placement specifications.</p>
   */
  placementTemplate?: PlacementTemplate;

  /**
   * @public
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * @public
   * <p>An object describing the project.</p>
   */
  project: ProjectDescription | undefined;
}

/**
 * @public
 */
export interface DisassociateDeviceFromPlacementRequest {
  /**
   * @public
   * <p>The name of the project that contains the placement.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the placement that the device should be removed from.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The device ID that should be removed from the placement.</p>
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
   * @public
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the placement to get the devices from.</p>
   */
  placementName: string | undefined;
}

/**
 * @public
 */
export interface GetDevicesInPlacementResponse {
  /**
   * @public
   * <p>An object containing the devices (zero or more) within the placement.</p>
   */
  devices: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPlacementsRequest {
  /**
   * @public
   * <p>The project containing the placements to be listed.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object providing summary information for a particular placement.</p>
 */
export interface PlacementSummary {
  /**
   * @public
   * <p>The name of the project containing the placement.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the placement being summarized.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The date when the placement was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date when the placement was last updated, in UNIX epoch time format. If the placement
   *       was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the
   *       same.</p>
   */
  updatedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListPlacementsResponse {
  /**
   * @public
   * <p>An object listing the requested placements.</p>
   */
  placements: PlacementSummary[] | undefined;

  /**
   * @public
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per request. If not set, a default value of 100 is
   *       used.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>An object providing summary information for a particular project for an associated AWS
 *       account and region.</p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the project being summarized.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | undefined;

  /**
   * @public
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was
   *       not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | undefined;

  /**
   * @public
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * @public
   * <p>An object containing the list of projects.</p>
   */
  projects: ProjectSummary[] | undefined;

  /**
   * @public
   * <p>The token used to retrieve the next set of results - will be effectively empty if there
   *       are no further results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags (metadata key/value pairs) which you have assigned to the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resouce for which tag(s) should be added or modified.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
   *       resource.</p>
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
   * @public
   * <p>The ARN of the resource whose tag you want to remove.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of those tags which you want to remove.</p>
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
   * @public
   * <p>The name of the placement to update.</p>
   */
  placementName: string | undefined;

  /**
   * @public
   * <p>The name of the project containing the placement to be updated.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The user-defined object of attributes used to update the placement. The maximum number of
   *       key/value pairs is 50.</p>
   */
  attributes?: Record<string, string>;
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
   * @public
   * <p>The name of the project to be updated.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>An optional user-defined description for the project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An object defining the project update. Once a project has been created, you cannot add
   *       device template names to the project. However, for a given <code>placementTemplate</code>, you
   *       can update the associated <code>callbackOverrides</code> for the device definition using this
   *       API.</p>
   */
  placementTemplate?: PlacementTemplate;
}

/**
 * @public
 */
export interface UpdateProjectResponse {}
