import { LocationClient } from "./LocationClient";
import {
  AssociateTrackerConsumerCommand,
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
} from "./commands/AssociateTrackerConsumerCommand";
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
  SearchPlaceIndexForTextCommand,
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
} from "./commands/SearchPlaceIndexForTextCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * Suite of geospatial services including Maps, Places, Tracking, and Geofencing
 */
export class Location extends LocationClient {
  /**
   * <p>Creates an association between a geofence collection and a tracker resource. This
   *             allows the tracker resource to communicate location data to the linked geofence
   *             collection.</p>
   *         <note>
   *             <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p>
   *         </note>
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
   * <p>Deletes a batch of geofences from a geofence collection.</p>
   *         <note>
   *             <p>This action deletes the resource permanently. You can't undo this action.</p>
   *         </note>
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
   *             collection. The evaluation determines if the device has entered or exited a geofenced
   *             area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.</p>
   *         <note>
   *             <p>The last geofence that a device was observed within, if any, is tracked for 30
   *                 days after the most recent device position update</p>
   *         </note>
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
   * <p>A batch request to retrieve all device positions.</p>
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
   * <p>A batch request for storing geofence geometries into a given geofence
   *             collection.</p>
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
   *             uses the data when reporting the last known device position and position history.</p>
   *          <note>
   *            <p>Only one position update is stored per sample time. Location data is sampled at a
   *                 fixed rate of one position per 30-second interval, and retained for one year before
   *                 it is deleted.</p>
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
   *         <note>
   *             <p>By using Maps, you agree that AWS may transmit your API queries to your selected
   *                 third party provider for processing, which may be outside the AWS region you are
   *                 currently using. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon
   *                 Location Service. </p>
   *         </note>
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
   * <p>Creates a Place index resource in your AWS account, which supports Places functions with
   *          geospatial data sourced from your chosen data provider.</p>
   *          <note>
   *             <p>By using Places, you agree that AWS may transmit your API queries to your selected
   *             third party provider for processing, which may be outside the AWS region you are
   *             currently using. </p>
   *             <p>Because of licensing limitations, you may not use HERE to store results for locations
   *             in Japan. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon
   *             Location Service.</p>
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
   *         <note>
   *             <p>This action deletes the resource permanently. You can't undo this action. If the
   *                 geofence collection is the target of a tracker resource, the devices will no longer
   *                 be monitored.</p>
   *         </note>
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
   *         <note>
   *             <p>This action deletes the resource permanently. You cannot undo this action. If the map is being
   *                 used in an application, the map may not render.</p>
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
   * <p>Deletes a Place index resource from your AWS account.</p>
   *          <note>
   *             <p>This action deletes the resource permanently. You cannot undo this action.</p>
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
   * <p>Deletes a tracker resource from your AWS account.</p>
   *          <note>
   *             <p>This action deletes the resource permanently. You can't undo this action. If the tracker resource is in use, you may encounter an error. Make sure that the target resource is not a dependency for your applications.</p>
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
   * <p>Retrieves the Place index resource details.</p>
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
   *         <note>
   *             <p>Once you unlink a tracker resource from a geofence collection, the tracker
   *                 positions will no longer be automatically evaluated against geofences.</p>
   *         </note>
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
   *             <p>Device positions are deleted after one year.</p>
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
   *            <p>Device positions are deleted after 1 year.</p>
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
   *         <p>The style descriptor contains speciﬁcations on how features render on a map. For
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
   *             render a map. They are addressed using a grid arrangement with an X coordinate, Y
   *             coordinate, and Z (zoom) level. </p>
   *         <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles
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
   * <p>Lists Place index resources in your AWS account.</p>
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
   * <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to search
   *          for Places or points of interest near a given position.</p>
   *          <note>
   *             <p>By using Places, you agree that AWS may transmit your API queries to your selected
   *             third party provider for processing, which may be outside the AWS region you are
   *             currently using. </p>
   *             <p>Because of licensing limitations, you may not use HERE to store results for locations
   *             in Japan. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon
   *             Location Service.</p>
   *          </note>
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
   * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to
   *          search for Places or points of interest. </p>
   *          <p>Includes the option to apply additional parameters to narrow your list of
   *          results.</p>
   *          <note>
   *             <p>You can search for places near a given position using <code>BiasPosition</code>, or
   *             filter results within a bounding box using <code>FilterBBox</code>. Providing both
   *             parameters simultaneously returns an error.</p>
   *          </note>
   *          <note>
   *             <p>By using Places, you agree that AWS may transmit your API queries to your selected
   *             third party provider for processing, which may be outside the AWS region you are
   *             currently using. </p>
   *             <p>Also, when using HERE as your data provider, you may not (a) use HERE Places for
   *             Asset Management, or (b) select the <code>Storage</code> option for the
   *                <code>IntendedUse</code> parameter when requesting Places in Japan. For more
   *             information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service
   *                Terms</a> for Amazon Location Service.</p>
   *          </note>
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
}
