// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CalculateIsolinesCommand,
  CalculateIsolinesCommandInput,
  CalculateIsolinesCommandOutput,
} from "./commands/CalculateIsolinesCommand";
import {
  CalculateRouteMatrixCommand,
  CalculateRouteMatrixCommandInput,
  CalculateRouteMatrixCommandOutput,
} from "./commands/CalculateRouteMatrixCommand";
import {
  CalculateRoutesCommand,
  CalculateRoutesCommandInput,
  CalculateRoutesCommandOutput,
} from "./commands/CalculateRoutesCommand";
import {
  OptimizeWaypointsCommand,
  OptimizeWaypointsCommandInput,
  OptimizeWaypointsCommandOutput,
} from "./commands/OptimizeWaypointsCommand";
import { SnapToRoadsCommand, SnapToRoadsCommandInput, SnapToRoadsCommandOutput } from "./commands/SnapToRoadsCommand";
import { GeoRoutesClient } from "./GeoRoutesClient";

const commands = {
  CalculateIsolinesCommand,
  CalculateRouteMatrixCommand,
  CalculateRoutesCommand,
  OptimizeWaypointsCommand,
  SnapToRoadsCommand,
};

export interface GeoRoutes {
  /**
   * @see {@link CalculateIsolinesCommand}
   */
  calculateIsolines(
    args: CalculateIsolinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CalculateIsolinesCommandOutput>;
  calculateIsolines(
    args: CalculateIsolinesCommandInput,
    cb: (err: any, data?: CalculateIsolinesCommandOutput) => void
  ): void;
  calculateIsolines(
    args: CalculateIsolinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CalculateIsolinesCommandOutput) => void
  ): void;

  /**
   * @see {@link CalculateRouteMatrixCommand}
   */
  calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CalculateRouteMatrixCommandOutput>;
  calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    cb: (err: any, data?: CalculateRouteMatrixCommandOutput) => void
  ): void;
  calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CalculateRouteMatrixCommandOutput) => void
  ): void;

  /**
   * @see {@link CalculateRoutesCommand}
   */
  calculateRoutes(
    args: CalculateRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CalculateRoutesCommandOutput>;
  calculateRoutes(args: CalculateRoutesCommandInput, cb: (err: any, data?: CalculateRoutesCommandOutput) => void): void;
  calculateRoutes(
    args: CalculateRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CalculateRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link OptimizeWaypointsCommand}
   */
  optimizeWaypoints(
    args: OptimizeWaypointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OptimizeWaypointsCommandOutput>;
  optimizeWaypoints(
    args: OptimizeWaypointsCommandInput,
    cb: (err: any, data?: OptimizeWaypointsCommandOutput) => void
  ): void;
  optimizeWaypoints(
    args: OptimizeWaypointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OptimizeWaypointsCommandOutput) => void
  ): void;

  /**
   * @see {@link SnapToRoadsCommand}
   */
  snapToRoads(args: SnapToRoadsCommandInput, options?: __HttpHandlerOptions): Promise<SnapToRoadsCommandOutput>;
  snapToRoads(args: SnapToRoadsCommandInput, cb: (err: any, data?: SnapToRoadsCommandOutput) => void): void;
  snapToRoads(
    args: SnapToRoadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SnapToRoadsCommandOutput) => void
  ): void;
}

/**
 * <p>With the Amazon Location Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information.</p> <p>Calculate optimal travel routes and estimate travel times using up-to-date road network and traffic data. Key features include:</p> <ul> <li> <p>Point-to-point routing with estimated travel time, distance, and turn-by-turn directions</p> </li> <li> <p>Multi-point route optimization to minimize travel time or distance</p> </li> <li> <p>Route matrices for efficient multi-destination planning</p> </li> <li> <p>Isoline calculations to determine reachable areas within specified time or distance thresholds</p> </li> <li> <p>Map-matching to align GPS traces with the road network</p> </li> </ul>
 * @public
 */
export class GeoRoutes extends GeoRoutesClient implements GeoRoutes {}
createAggregatedClient(commands, GeoRoutes);
