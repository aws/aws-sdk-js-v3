// smithy-typescript generated code
import {
  MaintenanceScheduleType,
  RouterOutputRoutedState,
  RouterOutputState,
  RouterOutputTier,
  RoutingScope,
} from "./enums";
import type {
  MaintenanceConfiguration,
  MaintenanceSchedule,
  RouterNetworkInterface,
  RouterNetworkInterfaceConfiguration,
  RouterOutput,
  RouterOutputConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface UpdateRouterNetworkInterfaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router network interface that you want to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The updated name for the router network interface.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated configuration settings for the router network interface. Changing the type of the configuration is not supported.</p>
   * @public
   */
  Configuration?: RouterNetworkInterfaceConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterNetworkInterfaceResponse {
  /**
   * <p>The updated router network interface.</p>
   * @public
   */
  RouterNetworkInterface: RouterNetworkInterface | undefined;
}

/**
 * @public
 */
export interface RestartRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to restart.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface RestartRouterOutputResponse {
  /**
   * <p>The ARN of the router output that was restarted.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router output that was restarted.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router output after the restart operation.</p>
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface StartRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to start.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StartRouterOutputResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that was started.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router output that was started.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router output after being started.</p>
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * <p>The type of maintenance schedule associated with the router output.</p>
   * @public
   */
  MaintenanceScheduleType: MaintenanceScheduleType | undefined;

  /**
   * <p>The details of the maintenance schedule for the router output.</p>
   * @public
   */
  MaintenanceSchedule: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface StopRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to stop.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopRouterOutputResponse {
  /**
   * <p>The ARN of the router output that was stopped.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the router output that was stopped.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the router output after being stopped.</p>
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface TakeRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to associate with a router input.</p>
   * @public
   */
  RouterOutputArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to associate with a router output.</p>
   * @public
   */
  RouterInputArn?: string | undefined;
}

/**
 * @public
 */
export interface TakeRouterInputResponse {
  /**
   * <p>The state of the association between the router input and output.</p>
   * @public
   */
  RoutedState: RouterOutputRoutedState | undefined;

  /**
   * <p>The ARN of the associated router output.</p>
   * @public
   */
  RouterOutputArn: string | undefined;

  /**
   * <p>The name of the associated router output.</p>
   * @public
   */
  RouterOutputName: string | undefined;

  /**
   * <p>The ARN of the associated router input.</p>
   * @public
   */
  RouterInputArn?: string | undefined;

  /**
   * <p>The name of the associated router input.</p>
   * @public
   */
  RouterInputName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The updated name for the router output.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated configuration settings for the router output. Changing the type of the configuration is not supported.</p>
   * @public
   */
  Configuration?: RouterOutputConfiguration | undefined;

  /**
   * <p>The updated maximum bitrate for the router output.</p>
   * @public
   */
  MaximumBitrate?: number | undefined;

  /**
   * <p>Specifies whether the router output can take inputs that are in different Regions. REGIONAL (default) - can only take inputs from same Region. GLOBAL - can take inputs from any Region.</p>
   * @public
   */
  RoutingScope?: RoutingScope | undefined;

  /**
   * <p>The updated tier level for the router output.</p>
   * @public
   */
  Tier?: RouterOutputTier | undefined;

  /**
   * <p>The updated maintenance configuration settings for the router output, including any changes to preferred maintenance windows and schedules.</p>
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRouterOutputResponse {
  /**
   * <p>The updated router output.</p>
   * @public
   */
  RouterOutput: RouterOutput | undefined;
}

/**
 * @public
 */
export interface TagGlobalResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the global resource to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A map of tag keys and values to add to the global resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the MediaConnect resource to which to add tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagGlobalResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the global resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the global resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource that you want to untag. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}
