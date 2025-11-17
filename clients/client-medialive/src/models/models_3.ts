// smithy-typescript generated code
import { NodeConnectionState, NodeInterfaceMapping, NodeRole, NodeState, SdiSourceMapping } from "./models_0";

import { RenewalSettings, Reservation, SdiSourceMode, SdiSourceType } from "./models_1";

import { SdiSource, UpdateNodeStateShape } from "./models_2";

/**
 * A request to update the state of a node.
 * @public
 */
export interface UpdateNodeStateRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the node.
   * @public
   */
  NodeId: string | undefined;

  /**
   * The state to apply to the Node. Set to ACTIVE (COMMISSIONED) to indicate that the Node is deployable. MediaLive Anywhere will consider this node it needs a Node to run a Channel on, or when it needs a Node to promote from a backup node to an active node. Set to DRAINING to isolate the Node so that MediaLive Anywhere won't use it.
   * @public
   */
  State?: UpdateNodeStateShape | undefined;
}

/**
 * Placeholder documentation for UpdateNodeStateResponse
 * @public
 */
export interface UpdateNodeStateResponse {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;

  /**
   * An array of SDI source mappings. Each mapping connects one logical SdiSource to the physical SDI card and port that the physical SDI source uses.
   * @public
   */
  SdiSourceMappings?: SdiSourceMapping[] | undefined;
}

/**
 * Request to update a reservation
 * @public
 */
export interface UpdateReservationRequest {
  /**
   * Name of the reservation
   * @public
   */
  Name?: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings | undefined;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId: string | undefined;
}

/**
 * Placeholder documentation for UpdateReservationResponse
 * @public
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   * @public
   */
  Reservation?: Reservation | undefined;
}

/**
 * A request to update the SdiSource.
 * @public
 */
export interface UpdateSdiSourceRequest {
  /**
   * Include this parameter only if you want to change the name of the SdiSource. Specify a name that is unique in the AWS account. We recommend you assign a name that describes the source, for example curling-cameraA. Names are case-sensitive.
   * @public
   */
  Mode?: SdiSourceMode | undefined;

  /**
   * Include this parameter only if you want to change the name of the SdiSource. Specify a name that is unique in the AWS account. We recommend you assign a name that describes the source, for example curling-cameraA. Names are case-sensitive.
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the SdiSource
   * @public
   */
  SdiSourceId: string | undefined;

  /**
   * Include this parameter only if you want to change the mode. Specify the type of the SDI source: SINGLE: The source is a single-link source. QUAD: The source is one part of a quad-link source.
   * @public
   */
  Type?: SdiSourceType | undefined;
}

/**
 * Placeholder documentation for UpdateSdiSourceResponse
 * @public
 */
export interface UpdateSdiSourceResponse {
  /**
   * Settings for the SDI source.
   * @public
   */
  SdiSource?: SdiSource | undefined;
}
