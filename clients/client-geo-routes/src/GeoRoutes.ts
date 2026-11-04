// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type CalculateIsolinesCommandInput,
  type CalculateIsolinesCommandOutput,
  CalculateIsolinesCommand,
} from "./commands/CalculateIsolinesCommand";
import {
  type CalculateRouteMatrixCommandInput,
  type CalculateRouteMatrixCommandOutput,
  CalculateRouteMatrixCommand,
} from "./commands/CalculateRouteMatrixCommand";
import {
  type CalculateRoutesCommandInput,
  type CalculateRoutesCommandOutput,
  CalculateRoutesCommand,
} from "./commands/CalculateRoutesCommand";
import {
  type OptimizeWaypointsCommandInput,
  type OptimizeWaypointsCommandOutput,
  OptimizeWaypointsCommand,
} from "./commands/OptimizeWaypointsCommand";
import {
  type SnapToRoadsCommandInput,
  type SnapToRoadsCommandOutput,
  SnapToRoadsCommand,
} from "./commands/SnapToRoadsCommand";
import { GeoRoutesClient } from "./GeoRoutesClient";

const commands = {
  CalculateIsolinesCommand,
  CalculateRouteMatrixCommand,
  CalculateRoutesCommand,
  OptimizeWaypointsCommand,
  SnapToRoadsCommand,
};

/**
 * @public
 */
export interface GeoRoutesRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface GeoRoutes {
  /**
   * @see {@link CalculateIsolinesCommand}
   */
  calculateIsolines(
    args: CalculateIsolinesCommandInput,
    options?: GeoRoutesRequestOptions
  ): Promise<CalculateIsolinesCommandOutput>;
  calculateIsolines(
    args: CalculateIsolinesCommandInput,
    cb: (err: any, data?: CalculateIsolinesCommandOutput) => void
  ): void;
  calculateIsolines(
    args: CalculateIsolinesCommandInput,
    options: GeoRoutesRequestOptions,
    cb: (err: any, data?: CalculateIsolinesCommandOutput) => void
  ): void;

  /**
   * @see {@link CalculateRouteMatrixCommand}
   */
  calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    options?: GeoRoutesRequestOptions
  ): Promise<CalculateRouteMatrixCommandOutput>;
  calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    cb: (err: any, data?: CalculateRouteMatrixCommandOutput) => void
  ): void;
  calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    options: GeoRoutesRequestOptions,
    cb: (err: any, data?: CalculateRouteMatrixCommandOutput) => void
  ): void;

  /**
   * @see {@link CalculateRoutesCommand}
   */
  calculateRoutes(
    args: CalculateRoutesCommandInput,
    options?: GeoRoutesRequestOptions
  ): Promise<CalculateRoutesCommandOutput>;
  calculateRoutes(
    args: CalculateRoutesCommandInput,
    cb: (err: any, data?: CalculateRoutesCommandOutput) => void
  ): void;
  calculateRoutes(
    args: CalculateRoutesCommandInput,
    options: GeoRoutesRequestOptions,
    cb: (err: any, data?: CalculateRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link OptimizeWaypointsCommand}
   */
  optimizeWaypoints(
    args: OptimizeWaypointsCommandInput,
    options?: GeoRoutesRequestOptions
  ): Promise<OptimizeWaypointsCommandOutput>;
  optimizeWaypoints(
    args: OptimizeWaypointsCommandInput,
    cb: (err: any, data?: OptimizeWaypointsCommandOutput) => void
  ): void;
  optimizeWaypoints(
    args: OptimizeWaypointsCommandInput,
    options: GeoRoutesRequestOptions,
    cb: (err: any, data?: OptimizeWaypointsCommandOutput) => void
  ): void;

  /**
   * @see {@link SnapToRoadsCommand}
   */
  snapToRoads(
    args: SnapToRoadsCommandInput,
    options?: GeoRoutesRequestOptions
  ): Promise<SnapToRoadsCommandOutput>;
  snapToRoads(
    args: SnapToRoadsCommandInput,
    cb: (err: any, data?: SnapToRoadsCommandOutput) => void
  ): void;
  snapToRoads(
    args: SnapToRoadsCommandInput,
    options: GeoRoutesRequestOptions,
    cb: (err: any, data?: SnapToRoadsCommandOutput) => void
  ): void;
}

/**
 * With the Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information. Key features include:
 *
 * - Point-to-point routing with estimated travel time, distance, and turn-by-turn directions. See [CalculateRoutes](https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRoutes.html).
 * - Multi-point route optimization to minimize travel time or distance. See [OptimizeWaypoints](https://docs.aws.amazon.com/location/latest/APIReference/API_OptimizeWaypoints.html).
 * - Route matrices for efficient multi-destination planning. See [CalculateRouteMatrix](https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateRouteMatrix.html).
 * - Isoline calculations to determine reachable areas within specified time or distance thresholds. See [CalculateIsolines](https://docs.aws.amazon.com/location/latest/APIReference/API_CalculateIsolines.html).
 * - Map-matching to align GPS traces with the road network. See [SnapToRoads](https://docs.aws.amazon.com/location/latest/APIReference/API_SnapToRoads.html).
 *
 * @public
 */
export class GeoRoutes extends GeoRoutesClient implements GeoRoutes {}
createAggregatedClient(commands, GeoRoutes);
