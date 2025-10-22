// smithy-typescript generated code
import { Reservation, SdiSourceMode, SdiSourceType } from "./models_1";

import { SdiSource } from "./models_2";

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
