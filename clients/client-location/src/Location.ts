// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateTrackerConsumerCommand,
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
} from "./commands/AssociateTrackerConsumerCommand";
import {
  BatchDeleteDevicePositionHistoryCommand,
  BatchDeleteDevicePositionHistoryCommandInput,
  BatchDeleteDevicePositionHistoryCommandOutput,
} from "./commands/BatchDeleteDevicePositionHistoryCommand";
import {
  BatchDeleteGeofenceCommand,
  BatchDeleteGeofenceCommandInput,
  BatchDeleteGeofenceCommandOutput,
} from "./commands/BatchDeleteGeofenceCommand";
import {
  BatchEvaluateGeofencesCommand,
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
} from "./commands/BatchEvaluateGeofencesCommand";
import {
  BatchGetDevicePositionCommand,
  BatchGetDevicePositionCommandInput,
  BatchGetDevicePositionCommandOutput,
} from "./commands/BatchGetDevicePositionCommand";
import {
  BatchPutGeofenceCommand,
  BatchPutGeofenceCommandInput,
  BatchPutGeofenceCommandOutput,
} from "./commands/BatchPutGeofenceCommand";
import {
  BatchUpdateDevicePositionCommand,
  BatchUpdateDevicePositionCommandInput,
  BatchUpdateDevicePositionCommandOutput,
} from "./commands/BatchUpdateDevicePositionCommand";
import {
  CalculateRouteCommand,
  CalculateRouteCommandInput,
  CalculateRouteCommandOutput,
} from "./commands/CalculateRouteCommand";
import {
  CalculateRouteMatrixCommand,
  CalculateRouteMatrixCommandInput,
  CalculateRouteMatrixCommandOutput,
} from "./commands/CalculateRouteMatrixCommand";
import {
  CreateGeofenceCollectionCommand,
  CreateGeofenceCollectionCommandInput,
  CreateGeofenceCollectionCommandOutput,
} from "./commands/CreateGeofenceCollectionCommand";
import { CreateMapCommand, CreateMapCommandInput, CreateMapCommandOutput } from "./commands/CreateMapCommand";
import {
  CreatePlaceIndexCommand,
  CreatePlaceIndexCommandInput,
  CreatePlaceIndexCommandOutput,
} from "./commands/CreatePlaceIndexCommand";
import {
  CreateRouteCalculatorCommand,
  CreateRouteCalculatorCommandInput,
  CreateRouteCalculatorCommandOutput,
} from "./commands/CreateRouteCalculatorCommand";
import {
  CreateTrackerCommand,
  CreateTrackerCommandInput,
  CreateTrackerCommandOutput,
} from "./commands/CreateTrackerCommand";
import {
  DeleteGeofenceCollectionCommand,
  DeleteGeofenceCollectionCommandInput,
  DeleteGeofenceCollectionCommandOutput,
} from "./commands/DeleteGeofenceCollectionCommand";
import { DeleteMapCommand, DeleteMapCommandInput, DeleteMapCommandOutput } from "./commands/DeleteMapCommand";
import {
  DeletePlaceIndexCommand,
  DeletePlaceIndexCommandInput,
  DeletePlaceIndexCommandOutput,
} from "./commands/DeletePlaceIndexCommand";
import {
  DeleteRouteCalculatorCommand,
  DeleteRouteCalculatorCommandInput,
  DeleteRouteCalculatorCommandOutput,
} from "./commands/DeleteRouteCalculatorCommand";
import {
  DeleteTrackerCommand,
  DeleteTrackerCommandInput,
  DeleteTrackerCommandOutput,
} from "./commands/DeleteTrackerCommand";
import {
  DescribeGeofenceCollectionCommand,
  DescribeGeofenceCollectionCommandInput,
  DescribeGeofenceCollectionCommandOutput,
} from "./commands/DescribeGeofenceCollectionCommand";
import { DescribeMapCommand, DescribeMapCommandInput, DescribeMapCommandOutput } from "./commands/DescribeMapCommand";
import {
  DescribePlaceIndexCommand,
  DescribePlaceIndexCommandInput,
  DescribePlaceIndexCommandOutput,
} from "./commands/DescribePlaceIndexCommand";
import {
  DescribeRouteCalculatorCommand,
  DescribeRouteCalculatorCommandInput,
  DescribeRouteCalculatorCommandOutput,
} from "./commands/DescribeRouteCalculatorCommand";
import {
  DescribeTrackerCommand,
  DescribeTrackerCommandInput,
  DescribeTrackerCommandOutput,
} from "./commands/DescribeTrackerCommand";
import {
  DisassociateTrackerConsumerCommand,
  DisassociateTrackerConsumerCommandInput,
  DisassociateTrackerConsumerCommandOutput,
} from "./commands/DisassociateTrackerConsumerCommand";
import {
  GetDevicePositionCommand,
  GetDevicePositionCommandInput,
  GetDevicePositionCommandOutput,
} from "./commands/GetDevicePositionCommand";
import {
  GetDevicePositionHistoryCommand,
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
} from "./commands/GetDevicePositionHistoryCommand";
import { GetGeofenceCommand, GetGeofenceCommandInput, GetGeofenceCommandOutput } from "./commands/GetGeofenceCommand";
import {
  GetMapGlyphsCommand,
  GetMapGlyphsCommandInput,
  GetMapGlyphsCommandOutput,
} from "./commands/GetMapGlyphsCommand";
import {
  GetMapSpritesCommand,
  GetMapSpritesCommandInput,
  GetMapSpritesCommandOutput,
} from "./commands/GetMapSpritesCommand";
import {
  GetMapStyleDescriptorCommand,
  GetMapStyleDescriptorCommandInput,
  GetMapStyleDescriptorCommandOutput,
} from "./commands/GetMapStyleDescriptorCommand";
import { GetMapTileCommand, GetMapTileCommandInput, GetMapTileCommandOutput } from "./commands/GetMapTileCommand";
import { GetPlaceCommand, GetPlaceCommandInput, GetPlaceCommandOutput } from "./commands/GetPlaceCommand";
import {
  ListDevicePositionsCommand,
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
} from "./commands/ListDevicePositionsCommand";
import {
  ListGeofenceCollectionsCommand,
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "./commands/ListGeofenceCollectionsCommand";
import {
  ListGeofencesCommand,
  ListGeofencesCommandInput,
  ListGeofencesCommandOutput,
} from "./commands/ListGeofencesCommand";
import { ListMapsCommand, ListMapsCommandInput, ListMapsCommandOutput } from "./commands/ListMapsCommand";
import {
  ListPlaceIndexesCommand,
  ListPlaceIndexesCommandInput,
  ListPlaceIndexesCommandOutput,
} from "./commands/ListPlaceIndexesCommand";
import {
  ListRouteCalculatorsCommand,
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
} from "./commands/ListRouteCalculatorsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrackerConsumersCommand,
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
} from "./commands/ListTrackerConsumersCommand";
import {
  ListTrackersCommand,
  ListTrackersCommandInput,
  ListTrackersCommandOutput,
} from "./commands/ListTrackersCommand";
import { PutGeofenceCommand, PutGeofenceCommandInput, PutGeofenceCommandOutput } from "./commands/PutGeofenceCommand";
import {
  SearchPlaceIndexForPositionCommand,
  SearchPlaceIndexForPositionCommandInput,
  SearchPlaceIndexForPositionCommandOutput,
} from "./commands/SearchPlaceIndexForPositionCommand";
import {
  SearchPlaceIndexForSuggestionsCommand,
  SearchPlaceIndexForSuggestionsCommandInput,
  SearchPlaceIndexForSuggestionsCommandOutput,
} from "./commands/SearchPlaceIndexForSuggestionsCommand";
import {
  SearchPlaceIndexForTextCommand,
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
} from "./commands/SearchPlaceIndexForTextCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateGeofenceCollectionCommand,
  UpdateGeofenceCollectionCommandInput,
  UpdateGeofenceCollectionCommandOutput,
} from "./commands/UpdateGeofenceCollectionCommand";
import { UpdateMapCommand, UpdateMapCommandInput, UpdateMapCommandOutput } from "./commands/UpdateMapCommand";
import {
  UpdatePlaceIndexCommand,
  UpdatePlaceIndexCommandInput,
  UpdatePlaceIndexCommandOutput,
} from "./commands/UpdatePlaceIndexCommand";
import {
  UpdateRouteCalculatorCommand,
  UpdateRouteCalculatorCommandInput,
  UpdateRouteCalculatorCommandOutput,
} from "./commands/UpdateRouteCalculatorCommand";
import {
  UpdateTrackerCommand,
  UpdateTrackerCommandInput,
  UpdateTrackerCommandOutput,
} from "./commands/UpdateTrackerCommand";
import { LocationClient } from "./LocationClient";

/**
 * <p>"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"</p>
 */
export class Location extends LocationClient {
  /**
   * <p>Creates an association between a geofence collection and a tracker resource. This
   *             allows the tracker resource to communicate location data to the linked geofence
   *             collection. </p>
   *          <p>You can associate up to five geofence collections to each tracker resource.</p>
   *          <note>
   *             <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p>
   *          </note>
   */
  public associateTrackerConsumer(
    args: AssociateTrackerConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrackerConsumerCommandOutput>;
  public associateTrackerConsumer(
    args: AssociateTrackerConsumerCommandInput,
    cb: (err: any, data?: AssociateTrackerConsumerCommandOutput) => void
  ): void;
  public associateTrackerConsumer(
    args: AssociateTrackerConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrackerConsumerCommandOutput) => void
  ): void;
  public associateTrackerConsumer(
    args: AssociateTrackerConsumerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateTrackerConsumerCommandOutput) => void),
    cb?: (err: any, data?: AssociateTrackerConsumerCommandOutput) => void
  ): Promise<AssociateTrackerConsumerCommandOutput> | void {
    const command = new AssociateTrackerConsumerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the position history of one or more devices from a tracker resource.</p>
   */
  public batchDeleteDevicePositionHistory(
    args: BatchDeleteDevicePositionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDevicePositionHistoryCommandOutput>;
  public batchDeleteDevicePositionHistory(
    args: BatchDeleteDevicePositionHistoryCommandInput,
    cb: (err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void
  ): void;
  public batchDeleteDevicePositionHistory(
    args: BatchDeleteDevicePositionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void
  ): void;
  public batchDeleteDevicePositionHistory(
    args: BatchDeleteDevicePositionHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void
  ): Promise<BatchDeleteDevicePositionHistoryCommandOutput> | void {
    const command = new BatchDeleteDevicePositionHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a batch of geofences from a geofence collection.</p>
   *          <note>
   *             <p>This operation deletes the resource permanently.</p>
   *          </note>
   */
  public batchDeleteGeofence(
    args: BatchDeleteGeofenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteGeofenceCommandOutput>;
  public batchDeleteGeofence(
    args: BatchDeleteGeofenceCommandInput,
    cb: (err: any, data?: BatchDeleteGeofenceCommandOutput) => void
  ): void;
  public batchDeleteGeofence(
    args: BatchDeleteGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteGeofenceCommandOutput) => void
  ): void;
  public batchDeleteGeofence(
    args: BatchDeleteGeofenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteGeofenceCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteGeofenceCommandOutput) => void
  ): Promise<BatchDeleteGeofenceCommandOutput> | void {
    const command = new BatchDeleteGeofenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Evaluates device positions against the geofence geometries from a given geofence
   *             collection.</p>
   *          <p>This operation always returns an empty response because geofences are asynchronously
   *             evaluated. The evaluation determines if the device has entered or exited a geofenced
   *             area, and then publishes one of the following events to Amazon EventBridge:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENTER</code> if Amazon Location determines that the tracked device has entered
   *                     a geofenced area.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXIT</code> if Amazon Location determines that the tracked device has exited a
   *                     geofenced area.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The last geofence that a device was observed within is tracked for 30 days after
   *                 the most recent device position update.</p>
   *          </note>
   *          <note>
   *             <p>Geofence evaluation uses the given device position. It does not account for the
   *                 optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p>
   *          </note>
   *          <note>
   *             <p>The <code>DeviceID</code> is used as a string to represent the device. You do not
   *                 need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p>
   *          </note>
   */
  public batchEvaluateGeofences(
    args: BatchEvaluateGeofencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEvaluateGeofencesCommandOutput>;
  public batchEvaluateGeofences(
    args: BatchEvaluateGeofencesCommandInput,
    cb: (err: any, data?: BatchEvaluateGeofencesCommandOutput) => void
  ): void;
  public batchEvaluateGeofences(
    args: BatchEvaluateGeofencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEvaluateGeofencesCommandOutput) => void
  ): void;
  public batchEvaluateGeofences(
    args: BatchEvaluateGeofencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchEvaluateGeofencesCommandOutput) => void),
    cb?: (err: any, data?: BatchEvaluateGeofencesCommandOutput) => void
  ): Promise<BatchEvaluateGeofencesCommandOutput> | void {
    const command = new BatchEvaluateGeofencesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the latest device positions for requested devices.</p>
   */
  public batchGetDevicePosition(
    args: BatchGetDevicePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDevicePositionCommandOutput>;
  public batchGetDevicePosition(
    args: BatchGetDevicePositionCommandInput,
    cb: (err: any, data?: BatchGetDevicePositionCommandOutput) => void
  ): void;
  public batchGetDevicePosition(
    args: BatchGetDevicePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDevicePositionCommandOutput) => void
  ): void;
  public batchGetDevicePosition(
    args: BatchGetDevicePositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDevicePositionCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDevicePositionCommandOutput) => void
  ): Promise<BatchGetDevicePositionCommandOutput> | void {
    const command = new BatchGetDevicePositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A batch request for storing geofence geometries into a given geofence collection, or
   *             updates the geometry of an existing geofence if a geofence ID is included in the request.</p>
   */
  public batchPutGeofence(
    args: BatchPutGeofenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutGeofenceCommandOutput>;
  public batchPutGeofence(
    args: BatchPutGeofenceCommandInput,
    cb: (err: any, data?: BatchPutGeofenceCommandOutput) => void
  ): void;
  public batchPutGeofence(
    args: BatchPutGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutGeofenceCommandOutput) => void
  ): void;
  public batchPutGeofence(
    args: BatchPutGeofenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutGeofenceCommandOutput) => void),
    cb?: (err: any, data?: BatchPutGeofenceCommandOutput) => void
  ): Promise<BatchPutGeofenceCommandOutput> | void {
    const command = new BatchPutGeofenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location
   *            uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30
   *            days.</p>
   *          <note>
   *             <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker.
   *                When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections,
   *                and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than
   *                every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p>
   *             <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence
   *                 collections only if the device has moved more than 30 m (98.4 ft).</p>
   *             <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering,
   *                 location data is stored and evaluated against linked geofence collections only if the
   *                 device has moved more than the measured accuracy. For example, if two consecutive
   *                 updates from a device have a horizontal accuracy of 5 m and 10 m, the second update
   *                 is neither stored or evaluated if the device has moved less than 15 m. If
   *                 <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location
   *                 uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on
   *                 a <code>DevicePositionUpdate</code>.</p>
   *          </note>
   */
  public batchUpdateDevicePosition(
    args: BatchUpdateDevicePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateDevicePositionCommandOutput>;
  public batchUpdateDevicePosition(
    args: BatchUpdateDevicePositionCommandInput,
    cb: (err: any, data?: BatchUpdateDevicePositionCommandOutput) => void
  ): void;
  public batchUpdateDevicePosition(
    args: BatchUpdateDevicePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateDevicePositionCommandOutput) => void
  ): void;
  public batchUpdateDevicePosition(
    args: BatchUpdateDevicePositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateDevicePositionCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateDevicePositionCommandOutput) => void
  ): Promise<BatchUpdateDevicePositionCommandOutput> | void {
    const command = new BatchUpdateDevicePositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters:
   *                 <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that
   *             you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a
   *                 route calculator resource</a>.</p>
   *          <p>By default, a request that doesn't specify a departure time uses the best time of day
   *             to travel with the best traffic conditions when calculating the route.</p>
   *          <p>Additional options include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a
   *                         departure time</a> using either <code>DepartureTime</code> or
   *                         <code>DepartNow</code>. This calculates a route based on predictive traffic
   *                     data at the given time. </p>
   *                <note>
   *                   <p>You can't specify both <code>DepartureTime</code> and
   *                             <code>DepartNow</code> in a single request. Specifying both parameters
   *                         returns a validation error.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel
   *                         mode</a> using TravelMode sets the transportation mode used to calculate
   *                     the routes. This also lets you specify additional route preferences in
   *                         <code>CarModeOptions</code> if traveling by <code>Car</code>, or
   *                         <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p>
   *                <note>
   *                   <p>If you specify <code>walking</code> for the travel mode and your data
   *                     provider is Esri, the start and destination must be within 40km.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  public calculateRoute(
    args: CalculateRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CalculateRouteCommandOutput>;
  public calculateRoute(
    args: CalculateRouteCommandInput,
    cb: (err: any, data?: CalculateRouteCommandOutput) => void
  ): void;
  public calculateRoute(
    args: CalculateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CalculateRouteCommandOutput) => void
  ): void;
  public calculateRoute(
    args: CalculateRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CalculateRouteCommandOutput) => void),
    cb?: (err: any, data?: CalculateRouteCommandOutput) => void
  ): Promise<CalculateRouteCommandOutput> | void {
    const command = new CalculateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route
   *                 matrix</a> given the following required parameters:
   *                 <code>DeparturePositions</code> and <code>DestinationPositions</code>.
   *                 <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and
   *             travel distance from each departure position to each destination position in the
   *             request. For example, given departure positions A and B, and destination positions X and
   *             Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to
   *             X, A to Y, B to X, and B to Y (in that order). The number of results returned (and
   *             routes calculated) will be the number of <code>DeparturePositions</code> times the
   *             number of <code>DestinationPositions</code>.</p>
   *          <note>
   *             <p>Your account is charged for each route calculated, not the number of
   *                 requests.</p>
   *          </note>
   *          <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a
   *                 route calculator resource</a>.</p>
   *          <p>By default, a request that doesn't specify a departure time uses the best time of day
   *             to travel with the best traffic conditions when calculating routes.</p>
   *          <p>Additional options include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a
   *                         departure time</a> using either <code>DepartureTime</code> or
   *                         <code>DepartNow</code>. This calculates routes based on predictive traffic
   *                     data at the given time. </p>
   *                <note>
   *                   <p>You can't specify both <code>DepartureTime</code> and
   *                             <code>DepartNow</code> in a single request. Specifying both parameters
   *                         returns a validation error.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel
   *                         mode</a> using TravelMode sets the transportation mode used to calculate
   *                     the routes. This also lets you specify additional route preferences in
   *                         <code>CarModeOptions</code> if traveling by <code>Car</code>, or
   *                         <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p>
   *             </li>
   *          </ul>
   */
  public calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CalculateRouteMatrixCommandOutput>;
  public calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    cb: (err: any, data?: CalculateRouteMatrixCommandOutput) => void
  ): void;
  public calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CalculateRouteMatrixCommandOutput) => void
  ): void;
  public calculateRouteMatrix(
    args: CalculateRouteMatrixCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CalculateRouteMatrixCommandOutput) => void),
    cb?: (err: any, data?: CalculateRouteMatrixCommandOutput) => void
  ): Promise<CalculateRouteMatrixCommandOutput> | void {
    const command = new CalculateRouteMatrixCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a geofence collection, which manages and stores geofences.</p>
   */
  public createGeofenceCollection(
    args: CreateGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGeofenceCollectionCommandOutput>;
  public createGeofenceCollection(
    args: CreateGeofenceCollectionCommandInput,
    cb: (err: any, data?: CreateGeofenceCollectionCommandOutput) => void
  ): void;
  public createGeofenceCollection(
    args: CreateGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGeofenceCollectionCommandOutput) => void
  ): void;
  public createGeofenceCollection(
    args: CreateGeofenceCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGeofenceCollectionCommandOutput) => void),
    cb?: (err: any, data?: CreateGeofenceCollectionCommandOutput) => void
  ): Promise<CreateGeofenceCollectionCommandOutput> | void {
    const command = new CreateGeofenceCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a map resource in your AWS account, which provides map tiles of different
   *             styles sourced from global location data providers.</p>
   *          <note>
   *             <p>If your application is tracking or routing assets you use in your business, such
   *                 as delivery vehicles or employees, you must not use Esri as your geolocation
   *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">AWS
   *                     service terms</a> for more details.</p>
   *          </note>
   */
  public createMap(args: CreateMapCommandInput, options?: __HttpHandlerOptions): Promise<CreateMapCommandOutput>;
  public createMap(args: CreateMapCommandInput, cb: (err: any, data?: CreateMapCommandOutput) => void): void;
  public createMap(
    args: CreateMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMapCommandOutput) => void
  ): void;
  public createMap(
    args: CreateMapCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMapCommandOutput) => void),
    cb?: (err: any, data?: CreateMapCommandOutput) => void
  ): Promise<CreateMapCommandOutput> | void {
    const command = new CreateMapCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a place index resource in your AWS account. Use a place index resource to
   *             geocode addresses and other text queries by using the
   *                 <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by
   *             using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions
   *             by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p>
   *          <note>
   *             <p>If your application is tracking or routing assets you use in your business, such
   *                 as delivery vehicles or employees, you must not use Esri as your geolocation
   *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">AWS
   *                     service terms</a> for more details.</p>
   *          </note>
   */
  public createPlaceIndex(
    args: CreatePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlaceIndexCommandOutput>;
  public createPlaceIndex(
    args: CreatePlaceIndexCommandInput,
    cb: (err: any, data?: CreatePlaceIndexCommandOutput) => void
  ): void;
  public createPlaceIndex(
    args: CreatePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlaceIndexCommandOutput) => void
  ): void;
  public createPlaceIndex(
    args: CreatePlaceIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlaceIndexCommandOutput) => void),
    cb?: (err: any, data?: CreatePlaceIndexCommandOutput) => void
  ): Promise<CreatePlaceIndexCommandOutput> | void {
    const command = new CreatePlaceIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a route calculator resource in your AWS account.</p>
   *          <p>You can send requests to a route calculator resource to estimate travel time,
   *             distance, and get directions. A route calculator sources traffic and road network data
   *             from your chosen data provider.</p>
   *          <note>
   *             <p>If your application is tracking or routing assets you use in your business, such
   *                 as delivery vehicles or employees, you must not use Esri as your geolocation
   *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">AWS
   *                     service terms</a> for more details.</p>
   *          </note>
   */
  public createRouteCalculator(
    args: CreateRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteCalculatorCommandOutput>;
  public createRouteCalculator(
    args: CreateRouteCalculatorCommandInput,
    cb: (err: any, data?: CreateRouteCalculatorCommandOutput) => void
  ): void;
  public createRouteCalculator(
    args: CreateRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCalculatorCommandOutput) => void
  ): void;
  public createRouteCalculator(
    args: CreateRouteCalculatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRouteCalculatorCommandOutput) => void),
    cb?: (err: any, data?: CreateRouteCalculatorCommandOutput) => void
  ): Promise<CreateRouteCalculatorCommandOutput> | void {
    const command = new CreateRouteCalculatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a tracker resource in your AWS account, which lets you retrieve current and
   *             historical location of devices.</p>
   */
  public createTracker(
    args: CreateTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrackerCommandOutput>;
  public createTracker(
    args: CreateTrackerCommandInput,
    cb: (err: any, data?: CreateTrackerCommandOutput) => void
  ): void;
  public createTracker(
    args: CreateTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrackerCommandOutput) => void
  ): void;
  public createTracker(
    args: CreateTrackerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrackerCommandOutput) => void),
    cb?: (err: any, data?: CreateTrackerCommandOutput) => void
  ): Promise<CreateTrackerCommandOutput> | void {
    const command = new CreateTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a geofence collection from your AWS account.</p>
   *          <note>
   *             <p>This operation deletes the resource permanently. If the geofence collection is the
   *                 target of a tracker resource, the devices will no longer be monitored.</p>
   *          </note>
   */
  public deleteGeofenceCollection(
    args: DeleteGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGeofenceCollectionCommandOutput>;
  public deleteGeofenceCollection(
    args: DeleteGeofenceCollectionCommandInput,
    cb: (err: any, data?: DeleteGeofenceCollectionCommandOutput) => void
  ): void;
  public deleteGeofenceCollection(
    args: DeleteGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGeofenceCollectionCommandOutput) => void
  ): void;
  public deleteGeofenceCollection(
    args: DeleteGeofenceCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGeofenceCollectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteGeofenceCollectionCommandOutput) => void
  ): Promise<DeleteGeofenceCollectionCommandOutput> | void {
    const command = new DeleteGeofenceCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a map resource from your AWS account.</p>
   *          <note>
   *             <p>This operation deletes the resource permanently. If the map is being used in an application,
   *                 the map may not render.</p>
   *          </note>
   */
  public deleteMap(args: DeleteMapCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMapCommandOutput>;
  public deleteMap(args: DeleteMapCommandInput, cb: (err: any, data?: DeleteMapCommandOutput) => void): void;
  public deleteMap(
    args: DeleteMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMapCommandOutput) => void
  ): void;
  public deleteMap(
    args: DeleteMapCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMapCommandOutput) => void),
    cb?: (err: any, data?: DeleteMapCommandOutput) => void
  ): Promise<DeleteMapCommandOutput> | void {
    const command = new DeleteMapCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a place index resource from your AWS account.</p>
   *          <note>
   *             <p>This operation deletes the resource permanently.</p>
   *          </note>
   */
  public deletePlaceIndex(
    args: DeletePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlaceIndexCommandOutput>;
  public deletePlaceIndex(
    args: DeletePlaceIndexCommandInput,
    cb: (err: any, data?: DeletePlaceIndexCommandOutput) => void
  ): void;
  public deletePlaceIndex(
    args: DeletePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlaceIndexCommandOutput) => void
  ): void;
  public deletePlaceIndex(
    args: DeletePlaceIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePlaceIndexCommandOutput) => void),
    cb?: (err: any, data?: DeletePlaceIndexCommandOutput) => void
  ): Promise<DeletePlaceIndexCommandOutput> | void {
    const command = new DeletePlaceIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a route calculator resource from your AWS account.</p>
   *          <note>
   *             <p>This operation deletes the resource permanently.</p>
   *          </note>
   */
  public deleteRouteCalculator(
    args: DeleteRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteCalculatorCommandOutput>;
  public deleteRouteCalculator(
    args: DeleteRouteCalculatorCommandInput,
    cb: (err: any, data?: DeleteRouteCalculatorCommandOutput) => void
  ): void;
  public deleteRouteCalculator(
    args: DeleteRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCalculatorCommandOutput) => void
  ): void;
  public deleteRouteCalculator(
    args: DeleteRouteCalculatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteCalculatorCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteCalculatorCommandOutput) => void
  ): Promise<DeleteRouteCalculatorCommandOutput> | void {
    const command = new DeleteRouteCalculatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a tracker resource from your AWS account.</p>
   *          <note>
   *             <p>This operation deletes the resource permanently. If the tracker resource is in use, you may
   *                 encounter an error. Make sure that the target resource isn't a dependency for your
   *                 applications.</p>
   *          </note>
   */
  public deleteTracker(
    args: DeleteTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrackerCommandOutput>;
  public deleteTracker(
    args: DeleteTrackerCommandInput,
    cb: (err: any, data?: DeleteTrackerCommandOutput) => void
  ): void;
  public deleteTracker(
    args: DeleteTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrackerCommandOutput) => void
  ): void;
  public deleteTracker(
    args: DeleteTrackerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrackerCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrackerCommandOutput) => void
  ): Promise<DeleteTrackerCommandOutput> | void {
    const command = new DeleteTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the geofence collection details.</p>
   */
  public describeGeofenceCollection(
    args: DescribeGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGeofenceCollectionCommandOutput>;
  public describeGeofenceCollection(
    args: DescribeGeofenceCollectionCommandInput,
    cb: (err: any, data?: DescribeGeofenceCollectionCommandOutput) => void
  ): void;
  public describeGeofenceCollection(
    args: DescribeGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGeofenceCollectionCommandOutput) => void
  ): void;
  public describeGeofenceCollection(
    args: DescribeGeofenceCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGeofenceCollectionCommandOutput) => void),
    cb?: (err: any, data?: DescribeGeofenceCollectionCommandOutput) => void
  ): Promise<DescribeGeofenceCollectionCommandOutput> | void {
    const command = new DescribeGeofenceCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the map resource details.</p>
   */
  public describeMap(args: DescribeMapCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMapCommandOutput>;
  public describeMap(args: DescribeMapCommandInput, cb: (err: any, data?: DescribeMapCommandOutput) => void): void;
  public describeMap(
    args: DescribeMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMapCommandOutput) => void
  ): void;
  public describeMap(
    args: DescribeMapCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMapCommandOutput) => void),
    cb?: (err: any, data?: DescribeMapCommandOutput) => void
  ): Promise<DescribeMapCommandOutput> | void {
    const command = new DescribeMapCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the place index resource details.</p>
   */
  public describePlaceIndex(
    args: DescribePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlaceIndexCommandOutput>;
  public describePlaceIndex(
    args: DescribePlaceIndexCommandInput,
    cb: (err: any, data?: DescribePlaceIndexCommandOutput) => void
  ): void;
  public describePlaceIndex(
    args: DescribePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlaceIndexCommandOutput) => void
  ): void;
  public describePlaceIndex(
    args: DescribePlaceIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePlaceIndexCommandOutput) => void),
    cb?: (err: any, data?: DescribePlaceIndexCommandOutput) => void
  ): Promise<DescribePlaceIndexCommandOutput> | void {
    const command = new DescribePlaceIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the route calculator resource details.</p>
   */
  public describeRouteCalculator(
    args: DescribeRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteCalculatorCommandOutput>;
  public describeRouteCalculator(
    args: DescribeRouteCalculatorCommandInput,
    cb: (err: any, data?: DescribeRouteCalculatorCommandOutput) => void
  ): void;
  public describeRouteCalculator(
    args: DescribeRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteCalculatorCommandOutput) => void
  ): void;
  public describeRouteCalculator(
    args: DescribeRouteCalculatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRouteCalculatorCommandOutput) => void),
    cb?: (err: any, data?: DescribeRouteCalculatorCommandOutput) => void
  ): Promise<DescribeRouteCalculatorCommandOutput> | void {
    const command = new DescribeRouteCalculatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the tracker resource details.</p>
   */
  public describeTracker(
    args: DescribeTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrackerCommandOutput>;
  public describeTracker(
    args: DescribeTrackerCommandInput,
    cb: (err: any, data?: DescribeTrackerCommandOutput) => void
  ): void;
  public describeTracker(
    args: DescribeTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrackerCommandOutput) => void
  ): void;
  public describeTracker(
    args: DescribeTrackerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrackerCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrackerCommandOutput) => void
  ): Promise<DescribeTrackerCommandOutput> | void {
    const command = new DescribeTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the association between a tracker resource and a geofence collection.</p>
   *          <note>
   *             <p>Once you unlink a tracker resource from a geofence collection, the tracker
   *                 positions will no longer be automatically evaluated against geofences.</p>
   *          </note>
   */
  public disassociateTrackerConsumer(
    args: DisassociateTrackerConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrackerConsumerCommandOutput>;
  public disassociateTrackerConsumer(
    args: DisassociateTrackerConsumerCommandInput,
    cb: (err: any, data?: DisassociateTrackerConsumerCommandOutput) => void
  ): void;
  public disassociateTrackerConsumer(
    args: DisassociateTrackerConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrackerConsumerCommandOutput) => void
  ): void;
  public disassociateTrackerConsumer(
    args: DisassociateTrackerConsumerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateTrackerConsumerCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTrackerConsumerCommandOutput) => void
  ): Promise<DisassociateTrackerConsumerCommandOutput> | void {
    const command = new DisassociateTrackerConsumerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a device's most recent position according to its sample time.</p>
   *          <note>
   *             <p>Device positions are deleted after 30 days.</p>
   *          </note>
   */
  public getDevicePosition(
    args: GetDevicePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePositionCommandOutput>;
  public getDevicePosition(
    args: GetDevicePositionCommandInput,
    cb: (err: any, data?: GetDevicePositionCommandOutput) => void
  ): void;
  public getDevicePosition(
    args: GetDevicePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePositionCommandOutput) => void
  ): void;
  public getDevicePosition(
    args: GetDevicePositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevicePositionCommandOutput) => void),
    cb?: (err: any, data?: GetDevicePositionCommandOutput) => void
  ): Promise<GetDevicePositionCommandOutput> | void {
    const command = new GetDevicePositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the device position history from a tracker resource within a specified range
   *             of time.</p>
   *          <note>
   *             <p>Device positions are deleted after 30 days.</p>
   *          </note>
   */
  public getDevicePositionHistory(
    args: GetDevicePositionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePositionHistoryCommandOutput>;
  public getDevicePositionHistory(
    args: GetDevicePositionHistoryCommandInput,
    cb: (err: any, data?: GetDevicePositionHistoryCommandOutput) => void
  ): void;
  public getDevicePositionHistory(
    args: GetDevicePositionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePositionHistoryCommandOutput) => void
  ): void;
  public getDevicePositionHistory(
    args: GetDevicePositionHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevicePositionHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetDevicePositionHistoryCommandOutput) => void
  ): Promise<GetDevicePositionHistoryCommandOutput> | void {
    const command = new GetDevicePositionHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the geofence details from a geofence collection.</p>
   */
  public getGeofence(args: GetGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<GetGeofenceCommandOutput>;
  public getGeofence(args: GetGeofenceCommandInput, cb: (err: any, data?: GetGeofenceCommandOutput) => void): void;
  public getGeofence(
    args: GetGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeofenceCommandOutput) => void
  ): void;
  public getGeofence(
    args: GetGeofenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGeofenceCommandOutput) => void),
    cb?: (err: any, data?: GetGeofenceCommandOutput) => void
  ): Promise<GetGeofenceCommandOutput> | void {
    const command = new GetGeofenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves glyphs used to display labels on a map.</p>
   */
  public getMapGlyphs(
    args: GetMapGlyphsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMapGlyphsCommandOutput>;
  public getMapGlyphs(args: GetMapGlyphsCommandInput, cb: (err: any, data?: GetMapGlyphsCommandOutput) => void): void;
  public getMapGlyphs(
    args: GetMapGlyphsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapGlyphsCommandOutput) => void
  ): void;
  public getMapGlyphs(
    args: GetMapGlyphsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMapGlyphsCommandOutput) => void),
    cb?: (err: any, data?: GetMapGlyphsCommandOutput) => void
  ): Promise<GetMapGlyphsCommandOutput> | void {
    const command = new GetMapGlyphsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG
   *             image paired with a JSON document describing the offsets of individual icons that will
   *             be displayed on a rendered map.</p>
   */
  public getMapSprites(
    args: GetMapSpritesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMapSpritesCommandOutput>;
  public getMapSprites(
    args: GetMapSpritesCommandInput,
    cb: (err: any, data?: GetMapSpritesCommandOutput) => void
  ): void;
  public getMapSprites(
    args: GetMapSpritesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapSpritesCommandOutput) => void
  ): void;
  public getMapSprites(
    args: GetMapSpritesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMapSpritesCommandOutput) => void),
    cb?: (err: any, data?: GetMapSpritesCommandOutput) => void
  ): Promise<GetMapSpritesCommandOutput> | void {
    const command = new GetMapSpritesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the map style descriptor from a map resource. </p>
   *          <p>The style descriptor contains speciﬁcations on how features render on a map. For
   *             example, what data to display, what order to display the data in, and the style for the
   *             data. Style descriptors follow the Mapbox Style Specification.</p>
   */
  public getMapStyleDescriptor(
    args: GetMapStyleDescriptorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMapStyleDescriptorCommandOutput>;
  public getMapStyleDescriptor(
    args: GetMapStyleDescriptorCommandInput,
    cb: (err: any, data?: GetMapStyleDescriptorCommandOutput) => void
  ): void;
  public getMapStyleDescriptor(
    args: GetMapStyleDescriptorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapStyleDescriptorCommandOutput) => void
  ): void;
  public getMapStyleDescriptor(
    args: GetMapStyleDescriptorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMapStyleDescriptorCommandOutput) => void),
    cb?: (err: any, data?: GetMapStyleDescriptorCommandOutput) => void
  ): Promise<GetMapStyleDescriptorCommandOutput> | void {
    const command = new GetMapStyleDescriptorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to
   *             render a map. they're addressed using a grid arrangement with an X coordinate, Y
   *             coordinate, and Z (zoom) level. </p>
   *          <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles
   *             both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0)
   *             will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
   */
  public getMapTile(args: GetMapTileCommandInput, options?: __HttpHandlerOptions): Promise<GetMapTileCommandOutput>;
  public getMapTile(args: GetMapTileCommandInput, cb: (err: any, data?: GetMapTileCommandOutput) => void): void;
  public getMapTile(
    args: GetMapTileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapTileCommandOutput) => void
  ): void;
  public getMapTile(
    args: GetMapTileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMapTileCommandOutput) => void),
    cb?: (err: any, data?: GetMapTileCommandOutput) => void
  ): Promise<GetMapTileCommandOutput> | void {
    const command = new GetMapTileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search
   *             operations.</p>
   *          <note>
   *             <p>A PlaceId is valid only if all of the following are the same in the original
   *                 search request and the call to <code>GetPlace</code>.</p>
   *             <ul>
   *                <li>
   *                   <p>Customer AWS account</p>
   *                </li>
   *                <li>
   *                   <p>AWS Region</p>
   *                </li>
   *                <li>
   *                   <p>Data provider specified in the place index resource</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public getPlace(args: GetPlaceCommandInput, options?: __HttpHandlerOptions): Promise<GetPlaceCommandOutput>;
  public getPlace(args: GetPlaceCommandInput, cb: (err: any, data?: GetPlaceCommandOutput) => void): void;
  public getPlace(
    args: GetPlaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlaceCommandOutput) => void
  ): void;
  public getPlace(
    args: GetPlaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPlaceCommandOutput) => void),
    cb?: (err: any, data?: GetPlaceCommandOutput) => void
  ): Promise<GetPlaceCommandOutput> | void {
    const command = new GetPlaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A batch request to retrieve all device positions.</p>
   */
  public listDevicePositions(
    args: ListDevicePositionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicePositionsCommandOutput>;
  public listDevicePositions(
    args: ListDevicePositionsCommandInput,
    cb: (err: any, data?: ListDevicePositionsCommandOutput) => void
  ): void;
  public listDevicePositions(
    args: ListDevicePositionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicePositionsCommandOutput) => void
  ): void;
  public listDevicePositions(
    args: ListDevicePositionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicePositionsCommandOutput) => void),
    cb?: (err: any, data?: ListDevicePositionsCommandOutput) => void
  ): Promise<ListDevicePositionsCommandOutput> | void {
    const command = new ListDevicePositionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists geofence collections in your AWS account.</p>
   */
  public listGeofenceCollections(
    args: ListGeofenceCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeofenceCollectionsCommandOutput>;
  public listGeofenceCollections(
    args: ListGeofenceCollectionsCommandInput,
    cb: (err: any, data?: ListGeofenceCollectionsCommandOutput) => void
  ): void;
  public listGeofenceCollections(
    args: ListGeofenceCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeofenceCollectionsCommandOutput) => void
  ): void;
  public listGeofenceCollections(
    args: ListGeofenceCollectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGeofenceCollectionsCommandOutput) => void),
    cb?: (err: any, data?: ListGeofenceCollectionsCommandOutput) => void
  ): Promise<ListGeofenceCollectionsCommandOutput> | void {
    const command = new ListGeofenceCollectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists geofences stored in a given geofence collection.</p>
   */
  public listGeofences(
    args: ListGeofencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeofencesCommandOutput>;
  public listGeofences(
    args: ListGeofencesCommandInput,
    cb: (err: any, data?: ListGeofencesCommandOutput) => void
  ): void;
  public listGeofences(
    args: ListGeofencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeofencesCommandOutput) => void
  ): void;
  public listGeofences(
    args: ListGeofencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGeofencesCommandOutput) => void),
    cb?: (err: any, data?: ListGeofencesCommandOutput) => void
  ): Promise<ListGeofencesCommandOutput> | void {
    const command = new ListGeofencesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists map resources in your AWS account.</p>
   */
  public listMaps(args: ListMapsCommandInput, options?: __HttpHandlerOptions): Promise<ListMapsCommandOutput>;
  public listMaps(args: ListMapsCommandInput, cb: (err: any, data?: ListMapsCommandOutput) => void): void;
  public listMaps(
    args: ListMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMapsCommandOutput) => void
  ): void;
  public listMaps(
    args: ListMapsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMapsCommandOutput) => void),
    cb?: (err: any, data?: ListMapsCommandOutput) => void
  ): Promise<ListMapsCommandOutput> | void {
    const command = new ListMapsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists place index resources in your AWS account.</p>
   */
  public listPlaceIndexes(
    args: ListPlaceIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlaceIndexesCommandOutput>;
  public listPlaceIndexes(
    args: ListPlaceIndexesCommandInput,
    cb: (err: any, data?: ListPlaceIndexesCommandOutput) => void
  ): void;
  public listPlaceIndexes(
    args: ListPlaceIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlaceIndexesCommandOutput) => void
  ): void;
  public listPlaceIndexes(
    args: ListPlaceIndexesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPlaceIndexesCommandOutput) => void),
    cb?: (err: any, data?: ListPlaceIndexesCommandOutput) => void
  ): Promise<ListPlaceIndexesCommandOutput> | void {
    const command = new ListPlaceIndexesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists route calculator resources in your AWS account.</p>
   */
  public listRouteCalculators(
    args: ListRouteCalculatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRouteCalculatorsCommandOutput>;
  public listRouteCalculators(
    args: ListRouteCalculatorsCommandInput,
    cb: (err: any, data?: ListRouteCalculatorsCommandOutput) => void
  ): void;
  public listRouteCalculators(
    args: ListRouteCalculatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRouteCalculatorsCommandOutput) => void
  ): void;
  public listRouteCalculators(
    args: ListRouteCalculatorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRouteCalculatorsCommandOutput) => void),
    cb?: (err: any, data?: ListRouteCalculatorsCommandOutput) => void
  ): Promise<ListRouteCalculatorsCommandOutput> | void {
    const command = new ListRouteCalculatorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of tags that are applied to the specified Amazon Location resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists geofence collections currently associated to the given tracker resource.</p>
   */
  public listTrackerConsumers(
    args: ListTrackerConsumersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrackerConsumersCommandOutput>;
  public listTrackerConsumers(
    args: ListTrackerConsumersCommandInput,
    cb: (err: any, data?: ListTrackerConsumersCommandOutput) => void
  ): void;
  public listTrackerConsumers(
    args: ListTrackerConsumersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrackerConsumersCommandOutput) => void
  ): void;
  public listTrackerConsumers(
    args: ListTrackerConsumersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrackerConsumersCommandOutput) => void),
    cb?: (err: any, data?: ListTrackerConsumersCommandOutput) => void
  ): Promise<ListTrackerConsumersCommandOutput> | void {
    const command = new ListTrackerConsumersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists tracker resources in your AWS account.</p>
   */
  public listTrackers(
    args: ListTrackersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrackersCommandOutput>;
  public listTrackers(args: ListTrackersCommandInput, cb: (err: any, data?: ListTrackersCommandOutput) => void): void;
  public listTrackers(
    args: ListTrackersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrackersCommandOutput) => void
  ): void;
  public listTrackers(
    args: ListTrackersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrackersCommandOutput) => void),
    cb?: (err: any, data?: ListTrackersCommandOutput) => void
  ): Promise<ListTrackersCommandOutput> | void {
    const command = new ListTrackersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stores a geofence geometry in a given geofence collection, or updates the geometry of
   *             an existing geofence if a geofence ID is included in the request. </p>
   */
  public putGeofence(args: PutGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<PutGeofenceCommandOutput>;
  public putGeofence(args: PutGeofenceCommandInput, cb: (err: any, data?: PutGeofenceCommandOutput) => void): void;
  public putGeofence(
    args: PutGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGeofenceCommandOutput) => void
  ): void;
  public putGeofence(
    args: PutGeofenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutGeofenceCommandOutput) => void),
    cb?: (err: any, data?: PutGeofenceCommandOutput) => void
  ): Promise<PutGeofenceCommandOutput> | void {
    const command = new PutGeofenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to
   *             search for Places or points of interest near a given position.</p>
   */
  public searchPlaceIndexForPosition(
    args: SearchPlaceIndexForPositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPlaceIndexForPositionCommandOutput>;
  public searchPlaceIndexForPosition(
    args: SearchPlaceIndexForPositionCommandInput,
    cb: (err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void
  ): void;
  public searchPlaceIndexForPosition(
    args: SearchPlaceIndexForPositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void
  ): void;
  public searchPlaceIndexForPosition(
    args: SearchPlaceIndexForPositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void),
    cb?: (err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void
  ): Promise<SearchPlaceIndexForPositionCommandOutput> | void {
    const command = new SearchPlaceIndexForPositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates suggestions for addresses and points of interest based on partial or
   *             misspelled free-form text. This operation is also known as autocomplete, autosuggest, or
   *             fuzzy matching.</p>
   *          <p>Optional parameters let you narrow your search results by bounding box or country, or
   *             bias your search toward a specific position on the globe.</p>
   *          <note>
   *             <p>You can search for suggested place names near a specified position by using
   *                     <code>BiasPosition</code>, or filter results within a bounding box by using
   *                     <code>FilterBBox</code>. These parameters are mutually exclusive; using both
   *                     <code>BiasPosition</code> and <code>FilterBBox</code> in the same command
   *                 returns an error.</p>
   *          </note>
   */
  public searchPlaceIndexForSuggestions(
    args: SearchPlaceIndexForSuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPlaceIndexForSuggestionsCommandOutput>;
  public searchPlaceIndexForSuggestions(
    args: SearchPlaceIndexForSuggestionsCommandInput,
    cb: (err: any, data?: SearchPlaceIndexForSuggestionsCommandOutput) => void
  ): void;
  public searchPlaceIndexForSuggestions(
    args: SearchPlaceIndexForSuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPlaceIndexForSuggestionsCommandOutput) => void
  ): void;
  public searchPlaceIndexForSuggestions(
    args: SearchPlaceIndexForSuggestionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchPlaceIndexForSuggestionsCommandOutput) => void),
    cb?: (err: any, data?: SearchPlaceIndexForSuggestionsCommandOutput) => void
  ): Promise<SearchPlaceIndexForSuggestionsCommandOutput> | void {
    const command = new SearchPlaceIndexForSuggestionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to
   *             search for Places or points of interest. </p>
   *          <p>Optional parameters let you narrow your search results by bounding box or country, or
   *             bias your search toward a specific position on the globe.</p>
   *          <note>
   *             <p>You can search for places near a given position using <code>BiasPosition</code>,
   *                 or filter results within a bounding box using <code>FilterBBox</code>. Providing
   *                 both parameters simultaneously returns an error.</p>
   *          </note>
   *          <p>Search results are returned in order of highest to lowest relevance.</p>
   */
  public searchPlaceIndexForText(
    args: SearchPlaceIndexForTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPlaceIndexForTextCommandOutput>;
  public searchPlaceIndexForText(
    args: SearchPlaceIndexForTextCommandInput,
    cb: (err: any, data?: SearchPlaceIndexForTextCommandOutput) => void
  ): void;
  public searchPlaceIndexForText(
    args: SearchPlaceIndexForTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPlaceIndexForTextCommandOutput) => void
  ): void;
  public searchPlaceIndexForText(
    args: SearchPlaceIndexForTextCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchPlaceIndexForTextCommandOutput) => void),
    cb?: (err: any, data?: SearchPlaceIndexForTextCommandOutput) => void
  ): Promise<SearchPlaceIndexForTextCommandOutput> | void {
    const command = new SearchPlaceIndexForTextCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns one or more tags (key-value pairs) to the specified Amazon
   *             Location Service resource.</p>
   *          <p>Tags can help you organize and categorize your resources.
   *             You can also use them to scope user permissions, by granting a user
   *             permission to access or change only resources with certain tag values.</p>
   *          <p>You can use the <code>TagResource</code> operation with an Amazon Location Service
   *             resource that already has tags. If you specify a new tag key for the resource, this tag
   *             is appended to the tags already associated with the resource. If you specify a tag key
   *             that's already associated with the resource, the new tag value that you specify replaces
   *             the previous value for that tag. </p>
   *          <p>You can associate up to 50 tags with a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from the specified Amazon Location resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified properties of a given geofence collection.</p>
   */
  public updateGeofenceCollection(
    args: UpdateGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGeofenceCollectionCommandOutput>;
  public updateGeofenceCollection(
    args: UpdateGeofenceCollectionCommandInput,
    cb: (err: any, data?: UpdateGeofenceCollectionCommandOutput) => void
  ): void;
  public updateGeofenceCollection(
    args: UpdateGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGeofenceCollectionCommandOutput) => void
  ): void;
  public updateGeofenceCollection(
    args: UpdateGeofenceCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGeofenceCollectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateGeofenceCollectionCommandOutput) => void
  ): Promise<UpdateGeofenceCollectionCommandOutput> | void {
    const command = new UpdateGeofenceCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified properties of a given map resource.</p>
   */
  public updateMap(args: UpdateMapCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMapCommandOutput>;
  public updateMap(args: UpdateMapCommandInput, cb: (err: any, data?: UpdateMapCommandOutput) => void): void;
  public updateMap(
    args: UpdateMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMapCommandOutput) => void
  ): void;
  public updateMap(
    args: UpdateMapCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMapCommandOutput) => void),
    cb?: (err: any, data?: UpdateMapCommandOutput) => void
  ): Promise<UpdateMapCommandOutput> | void {
    const command = new UpdateMapCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified properties of a given place index resource.</p>
   */
  public updatePlaceIndex(
    args: UpdatePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePlaceIndexCommandOutput>;
  public updatePlaceIndex(
    args: UpdatePlaceIndexCommandInput,
    cb: (err: any, data?: UpdatePlaceIndexCommandOutput) => void
  ): void;
  public updatePlaceIndex(
    args: UpdatePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlaceIndexCommandOutput) => void
  ): void;
  public updatePlaceIndex(
    args: UpdatePlaceIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePlaceIndexCommandOutput) => void),
    cb?: (err: any, data?: UpdatePlaceIndexCommandOutput) => void
  ): Promise<UpdatePlaceIndexCommandOutput> | void {
    const command = new UpdatePlaceIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified properties for a given route calculator resource.</p>
   */
  public updateRouteCalculator(
    args: UpdateRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouteCalculatorCommandOutput>;
  public updateRouteCalculator(
    args: UpdateRouteCalculatorCommandInput,
    cb: (err: any, data?: UpdateRouteCalculatorCommandOutput) => void
  ): void;
  public updateRouteCalculator(
    args: UpdateRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCalculatorCommandOutput) => void
  ): void;
  public updateRouteCalculator(
    args: UpdateRouteCalculatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRouteCalculatorCommandOutput) => void),
    cb?: (err: any, data?: UpdateRouteCalculatorCommandOutput) => void
  ): Promise<UpdateRouteCalculatorCommandOutput> | void {
    const command = new UpdateRouteCalculatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified properties of a given tracker resource.</p>
   */
  public updateTracker(
    args: UpdateTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrackerCommandOutput>;
  public updateTracker(
    args: UpdateTrackerCommandInput,
    cb: (err: any, data?: UpdateTrackerCommandOutput) => void
  ): void;
  public updateTracker(
    args: UpdateTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrackerCommandOutput) => void
  ): void;
  public updateTracker(
    args: UpdateTrackerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTrackerCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrackerCommandOutput) => void
  ): Promise<UpdateTrackerCommandOutput> | void {
    const command = new UpdateTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
