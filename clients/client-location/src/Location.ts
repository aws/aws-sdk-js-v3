// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { CreateKeyCommand, CreateKeyCommandInput, CreateKeyCommandOutput } from "./commands/CreateKeyCommand";
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
import { DeleteKeyCommand, DeleteKeyCommandInput, DeleteKeyCommandOutput } from "./commands/DeleteKeyCommand";
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
import { DescribeKeyCommand, DescribeKeyCommandInput, DescribeKeyCommandOutput } from "./commands/DescribeKeyCommand";
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
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "./commands/ListKeysCommand";
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
import { UpdateKeyCommand, UpdateKeyCommandInput, UpdateKeyCommandOutput } from "./commands/UpdateKeyCommand";
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
import { LocationClient, LocationClientConfig } from "./LocationClient";

const commands = {
  AssociateTrackerConsumerCommand,
  BatchDeleteDevicePositionHistoryCommand,
  BatchDeleteGeofenceCommand,
  BatchEvaluateGeofencesCommand,
  BatchGetDevicePositionCommand,
  BatchPutGeofenceCommand,
  BatchUpdateDevicePositionCommand,
  CalculateRouteCommand,
  CalculateRouteMatrixCommand,
  CreateGeofenceCollectionCommand,
  CreateKeyCommand,
  CreateMapCommand,
  CreatePlaceIndexCommand,
  CreateRouteCalculatorCommand,
  CreateTrackerCommand,
  DeleteGeofenceCollectionCommand,
  DeleteKeyCommand,
  DeleteMapCommand,
  DeletePlaceIndexCommand,
  DeleteRouteCalculatorCommand,
  DeleteTrackerCommand,
  DescribeGeofenceCollectionCommand,
  DescribeKeyCommand,
  DescribeMapCommand,
  DescribePlaceIndexCommand,
  DescribeRouteCalculatorCommand,
  DescribeTrackerCommand,
  DisassociateTrackerConsumerCommand,
  GetDevicePositionCommand,
  GetDevicePositionHistoryCommand,
  GetGeofenceCommand,
  GetMapGlyphsCommand,
  GetMapSpritesCommand,
  GetMapStyleDescriptorCommand,
  GetMapTileCommand,
  GetPlaceCommand,
  ListDevicePositionsCommand,
  ListGeofenceCollectionsCommand,
  ListGeofencesCommand,
  ListKeysCommand,
  ListMapsCommand,
  ListPlaceIndexesCommand,
  ListRouteCalculatorsCommand,
  ListTagsForResourceCommand,
  ListTrackerConsumersCommand,
  ListTrackersCommand,
  PutGeofenceCommand,
  SearchPlaceIndexForPositionCommand,
  SearchPlaceIndexForSuggestionsCommand,
  SearchPlaceIndexForTextCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGeofenceCollectionCommand,
  UpdateKeyCommand,
  UpdateMapCommand,
  UpdatePlaceIndexCommand,
  UpdateRouteCalculatorCommand,
  UpdateTrackerCommand,
};

export interface Location {
  /**
   * @see {@link AssociateTrackerConsumerCommand}
   */
  associateTrackerConsumer(
    args: AssociateTrackerConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrackerConsumerCommandOutput>;
  associateTrackerConsumer(
    args: AssociateTrackerConsumerCommandInput,
    cb: (err: any, data?: AssociateTrackerConsumerCommandOutput) => void
  ): void;
  associateTrackerConsumer(
    args: AssociateTrackerConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrackerConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteDevicePositionHistoryCommand}
   */
  batchDeleteDevicePositionHistory(
    args: BatchDeleteDevicePositionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDevicePositionHistoryCommandOutput>;
  batchDeleteDevicePositionHistory(
    args: BatchDeleteDevicePositionHistoryCommandInput,
    cb: (err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void
  ): void;
  batchDeleteDevicePositionHistory(
    args: BatchDeleteDevicePositionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDevicePositionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteGeofenceCommand}
   */
  batchDeleteGeofence(
    args: BatchDeleteGeofenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteGeofenceCommandOutput>;
  batchDeleteGeofence(
    args: BatchDeleteGeofenceCommandInput,
    cb: (err: any, data?: BatchDeleteGeofenceCommandOutput) => void
  ): void;
  batchDeleteGeofence(
    args: BatchDeleteGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteGeofenceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchEvaluateGeofencesCommand}
   */
  batchEvaluateGeofences(
    args: BatchEvaluateGeofencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEvaluateGeofencesCommandOutput>;
  batchEvaluateGeofences(
    args: BatchEvaluateGeofencesCommandInput,
    cb: (err: any, data?: BatchEvaluateGeofencesCommandOutput) => void
  ): void;
  batchEvaluateGeofences(
    args: BatchEvaluateGeofencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEvaluateGeofencesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDevicePositionCommand}
   */
  batchGetDevicePosition(
    args: BatchGetDevicePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDevicePositionCommandOutput>;
  batchGetDevicePosition(
    args: BatchGetDevicePositionCommandInput,
    cb: (err: any, data?: BatchGetDevicePositionCommandOutput) => void
  ): void;
  batchGetDevicePosition(
    args: BatchGetDevicePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDevicePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutGeofenceCommand}
   */
  batchPutGeofence(
    args: BatchPutGeofenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutGeofenceCommandOutput>;
  batchPutGeofence(
    args: BatchPutGeofenceCommandInput,
    cb: (err: any, data?: BatchPutGeofenceCommandOutput) => void
  ): void;
  batchPutGeofence(
    args: BatchPutGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutGeofenceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateDevicePositionCommand}
   */
  batchUpdateDevicePosition(
    args: BatchUpdateDevicePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateDevicePositionCommandOutput>;
  batchUpdateDevicePosition(
    args: BatchUpdateDevicePositionCommandInput,
    cb: (err: any, data?: BatchUpdateDevicePositionCommandOutput) => void
  ): void;
  batchUpdateDevicePosition(
    args: BatchUpdateDevicePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateDevicePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link CalculateRouteCommand}
   */
  calculateRoute(
    args: CalculateRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CalculateRouteCommandOutput>;
  calculateRoute(args: CalculateRouteCommandInput, cb: (err: any, data?: CalculateRouteCommandOutput) => void): void;
  calculateRoute(
    args: CalculateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CalculateRouteCommandOutput) => void
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
   * @see {@link CreateGeofenceCollectionCommand}
   */
  createGeofenceCollection(
    args: CreateGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGeofenceCollectionCommandOutput>;
  createGeofenceCollection(
    args: CreateGeofenceCollectionCommandInput,
    cb: (err: any, data?: CreateGeofenceCollectionCommandOutput) => void
  ): void;
  createGeofenceCollection(
    args: CreateGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGeofenceCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyCommand}
   */
  createKey(args: CreateKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeyCommandOutput>;
  createKey(args: CreateKeyCommandInput, cb: (err: any, data?: CreateKeyCommandOutput) => void): void;
  createKey(
    args: CreateKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMapCommand}
   */
  createMap(args: CreateMapCommandInput, options?: __HttpHandlerOptions): Promise<CreateMapCommandOutput>;
  createMap(args: CreateMapCommandInput, cb: (err: any, data?: CreateMapCommandOutput) => void): void;
  createMap(
    args: CreateMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMapCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlaceIndexCommand}
   */
  createPlaceIndex(
    args: CreatePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlaceIndexCommandOutput>;
  createPlaceIndex(
    args: CreatePlaceIndexCommandInput,
    cb: (err: any, data?: CreatePlaceIndexCommandOutput) => void
  ): void;
  createPlaceIndex(
    args: CreatePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlaceIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteCalculatorCommand}
   */
  createRouteCalculator(
    args: CreateRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteCalculatorCommandOutput>;
  createRouteCalculator(
    args: CreateRouteCalculatorCommandInput,
    cb: (err: any, data?: CreateRouteCalculatorCommandOutput) => void
  ): void;
  createRouteCalculator(
    args: CreateRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCalculatorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrackerCommand}
   */
  createTracker(args: CreateTrackerCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrackerCommandOutput>;
  createTracker(args: CreateTrackerCommandInput, cb: (err: any, data?: CreateTrackerCommandOutput) => void): void;
  createTracker(
    args: CreateTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrackerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGeofenceCollectionCommand}
   */
  deleteGeofenceCollection(
    args: DeleteGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGeofenceCollectionCommandOutput>;
  deleteGeofenceCollection(
    args: DeleteGeofenceCollectionCommandInput,
    cb: (err: any, data?: DeleteGeofenceCollectionCommandOutput) => void
  ): void;
  deleteGeofenceCollection(
    args: DeleteGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGeofenceCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyCommand}
   */
  deleteKey(args: DeleteKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKeyCommandOutput>;
  deleteKey(args: DeleteKeyCommandInput, cb: (err: any, data?: DeleteKeyCommandOutput) => void): void;
  deleteKey(
    args: DeleteKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMapCommand}
   */
  deleteMap(args: DeleteMapCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMapCommandOutput>;
  deleteMap(args: DeleteMapCommandInput, cb: (err: any, data?: DeleteMapCommandOutput) => void): void;
  deleteMap(
    args: DeleteMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMapCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlaceIndexCommand}
   */
  deletePlaceIndex(
    args: DeletePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlaceIndexCommandOutput>;
  deletePlaceIndex(
    args: DeletePlaceIndexCommandInput,
    cb: (err: any, data?: DeletePlaceIndexCommandOutput) => void
  ): void;
  deletePlaceIndex(
    args: DeletePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlaceIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteCalculatorCommand}
   */
  deleteRouteCalculator(
    args: DeleteRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteCalculatorCommandOutput>;
  deleteRouteCalculator(
    args: DeleteRouteCalculatorCommandInput,
    cb: (err: any, data?: DeleteRouteCalculatorCommandOutput) => void
  ): void;
  deleteRouteCalculator(
    args: DeleteRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCalculatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrackerCommand}
   */
  deleteTracker(args: DeleteTrackerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrackerCommandOutput>;
  deleteTracker(args: DeleteTrackerCommandInput, cb: (err: any, data?: DeleteTrackerCommandOutput) => void): void;
  deleteTracker(
    args: DeleteTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrackerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGeofenceCollectionCommand}
   */
  describeGeofenceCollection(
    args: DescribeGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGeofenceCollectionCommandOutput>;
  describeGeofenceCollection(
    args: DescribeGeofenceCollectionCommandInput,
    cb: (err: any, data?: DescribeGeofenceCollectionCommandOutput) => void
  ): void;
  describeGeofenceCollection(
    args: DescribeGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGeofenceCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyCommand}
   */
  describeKey(args: DescribeKeyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeKeyCommandOutput>;
  describeKey(args: DescribeKeyCommandInput, cb: (err: any, data?: DescribeKeyCommandOutput) => void): void;
  describeKey(
    args: DescribeKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMapCommand}
   */
  describeMap(args: DescribeMapCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMapCommandOutput>;
  describeMap(args: DescribeMapCommandInput, cb: (err: any, data?: DescribeMapCommandOutput) => void): void;
  describeMap(
    args: DescribeMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMapCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePlaceIndexCommand}
   */
  describePlaceIndex(
    args: DescribePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlaceIndexCommandOutput>;
  describePlaceIndex(
    args: DescribePlaceIndexCommandInput,
    cb: (err: any, data?: DescribePlaceIndexCommandOutput) => void
  ): void;
  describePlaceIndex(
    args: DescribePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlaceIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRouteCalculatorCommand}
   */
  describeRouteCalculator(
    args: DescribeRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteCalculatorCommandOutput>;
  describeRouteCalculator(
    args: DescribeRouteCalculatorCommandInput,
    cb: (err: any, data?: DescribeRouteCalculatorCommandOutput) => void
  ): void;
  describeRouteCalculator(
    args: DescribeRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteCalculatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrackerCommand}
   */
  describeTracker(
    args: DescribeTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrackerCommandOutput>;
  describeTracker(args: DescribeTrackerCommandInput, cb: (err: any, data?: DescribeTrackerCommandOutput) => void): void;
  describeTracker(
    args: DescribeTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrackerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTrackerConsumerCommand}
   */
  disassociateTrackerConsumer(
    args: DisassociateTrackerConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrackerConsumerCommandOutput>;
  disassociateTrackerConsumer(
    args: DisassociateTrackerConsumerCommandInput,
    cb: (err: any, data?: DisassociateTrackerConsumerCommandOutput) => void
  ): void;
  disassociateTrackerConsumer(
    args: DisassociateTrackerConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrackerConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevicePositionCommand}
   */
  getDevicePosition(
    args: GetDevicePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePositionCommandOutput>;
  getDevicePosition(
    args: GetDevicePositionCommandInput,
    cb: (err: any, data?: GetDevicePositionCommandOutput) => void
  ): void;
  getDevicePosition(
    args: GetDevicePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevicePositionHistoryCommand}
   */
  getDevicePositionHistory(
    args: GetDevicePositionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePositionHistoryCommandOutput>;
  getDevicePositionHistory(
    args: GetDevicePositionHistoryCommandInput,
    cb: (err: any, data?: GetDevicePositionHistoryCommandOutput) => void
  ): void;
  getDevicePositionHistory(
    args: GetDevicePositionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePositionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGeofenceCommand}
   */
  getGeofence(args: GetGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<GetGeofenceCommandOutput>;
  getGeofence(args: GetGeofenceCommandInput, cb: (err: any, data?: GetGeofenceCommandOutput) => void): void;
  getGeofence(
    args: GetGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeofenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMapGlyphsCommand}
   */
  getMapGlyphs(args: GetMapGlyphsCommandInput, options?: __HttpHandlerOptions): Promise<GetMapGlyphsCommandOutput>;
  getMapGlyphs(args: GetMapGlyphsCommandInput, cb: (err: any, data?: GetMapGlyphsCommandOutput) => void): void;
  getMapGlyphs(
    args: GetMapGlyphsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapGlyphsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMapSpritesCommand}
   */
  getMapSprites(args: GetMapSpritesCommandInput, options?: __HttpHandlerOptions): Promise<GetMapSpritesCommandOutput>;
  getMapSprites(args: GetMapSpritesCommandInput, cb: (err: any, data?: GetMapSpritesCommandOutput) => void): void;
  getMapSprites(
    args: GetMapSpritesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapSpritesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMapStyleDescriptorCommand}
   */
  getMapStyleDescriptor(
    args: GetMapStyleDescriptorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMapStyleDescriptorCommandOutput>;
  getMapStyleDescriptor(
    args: GetMapStyleDescriptorCommandInput,
    cb: (err: any, data?: GetMapStyleDescriptorCommandOutput) => void
  ): void;
  getMapStyleDescriptor(
    args: GetMapStyleDescriptorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapStyleDescriptorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMapTileCommand}
   */
  getMapTile(args: GetMapTileCommandInput, options?: __HttpHandlerOptions): Promise<GetMapTileCommandOutput>;
  getMapTile(args: GetMapTileCommandInput, cb: (err: any, data?: GetMapTileCommandOutput) => void): void;
  getMapTile(
    args: GetMapTileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMapTileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlaceCommand}
   */
  getPlace(args: GetPlaceCommandInput, options?: __HttpHandlerOptions): Promise<GetPlaceCommandOutput>;
  getPlace(args: GetPlaceCommandInput, cb: (err: any, data?: GetPlaceCommandOutput) => void): void;
  getPlace(
    args: GetPlaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicePositionsCommand}
   */
  listDevicePositions(
    args: ListDevicePositionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicePositionsCommandOutput>;
  listDevicePositions(
    args: ListDevicePositionsCommandInput,
    cb: (err: any, data?: ListDevicePositionsCommandOutput) => void
  ): void;
  listDevicePositions(
    args: ListDevicePositionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicePositionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGeofenceCollectionsCommand}
   */
  listGeofenceCollections(
    args: ListGeofenceCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeofenceCollectionsCommandOutput>;
  listGeofenceCollections(
    args: ListGeofenceCollectionsCommandInput,
    cb: (err: any, data?: ListGeofenceCollectionsCommandOutput) => void
  ): void;
  listGeofenceCollections(
    args: ListGeofenceCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeofenceCollectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGeofencesCommand}
   */
  listGeofences(args: ListGeofencesCommandInput, options?: __HttpHandlerOptions): Promise<ListGeofencesCommandOutput>;
  listGeofences(args: ListGeofencesCommandInput, cb: (err: any, data?: ListGeofencesCommandOutput) => void): void;
  listGeofences(
    args: ListGeofencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeofencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeysCommand}
   */
  listKeys(args: ListKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListKeysCommandOutput>;
  listKeys(args: ListKeysCommandInput, cb: (err: any, data?: ListKeysCommandOutput) => void): void;
  listKeys(
    args: ListKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMapsCommand}
   */
  listMaps(args: ListMapsCommandInput, options?: __HttpHandlerOptions): Promise<ListMapsCommandOutput>;
  listMaps(args: ListMapsCommandInput, cb: (err: any, data?: ListMapsCommandOutput) => void): void;
  listMaps(
    args: ListMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMapsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlaceIndexesCommand}
   */
  listPlaceIndexes(
    args: ListPlaceIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlaceIndexesCommandOutput>;
  listPlaceIndexes(
    args: ListPlaceIndexesCommandInput,
    cb: (err: any, data?: ListPlaceIndexesCommandOutput) => void
  ): void;
  listPlaceIndexes(
    args: ListPlaceIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlaceIndexesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRouteCalculatorsCommand}
   */
  listRouteCalculators(
    args: ListRouteCalculatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRouteCalculatorsCommandOutput>;
  listRouteCalculators(
    args: ListRouteCalculatorsCommandInput,
    cb: (err: any, data?: ListRouteCalculatorsCommandOutput) => void
  ): void;
  listRouteCalculators(
    args: ListRouteCalculatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRouteCalculatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrackerConsumersCommand}
   */
  listTrackerConsumers(
    args: ListTrackerConsumersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrackerConsumersCommandOutput>;
  listTrackerConsumers(
    args: ListTrackerConsumersCommandInput,
    cb: (err: any, data?: ListTrackerConsumersCommandOutput) => void
  ): void;
  listTrackerConsumers(
    args: ListTrackerConsumersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrackerConsumersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrackersCommand}
   */
  listTrackers(args: ListTrackersCommandInput, options?: __HttpHandlerOptions): Promise<ListTrackersCommandOutput>;
  listTrackers(args: ListTrackersCommandInput, cb: (err: any, data?: ListTrackersCommandOutput) => void): void;
  listTrackers(
    args: ListTrackersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrackersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutGeofenceCommand}
   */
  putGeofence(args: PutGeofenceCommandInput, options?: __HttpHandlerOptions): Promise<PutGeofenceCommandOutput>;
  putGeofence(args: PutGeofenceCommandInput, cb: (err: any, data?: PutGeofenceCommandOutput) => void): void;
  putGeofence(
    args: PutGeofenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGeofenceCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPlaceIndexForPositionCommand}
   */
  searchPlaceIndexForPosition(
    args: SearchPlaceIndexForPositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPlaceIndexForPositionCommandOutput>;
  searchPlaceIndexForPosition(
    args: SearchPlaceIndexForPositionCommandInput,
    cb: (err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void
  ): void;
  searchPlaceIndexForPosition(
    args: SearchPlaceIndexForPositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPlaceIndexForPositionCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPlaceIndexForSuggestionsCommand}
   */
  searchPlaceIndexForSuggestions(
    args: SearchPlaceIndexForSuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPlaceIndexForSuggestionsCommandOutput>;
  searchPlaceIndexForSuggestions(
    args: SearchPlaceIndexForSuggestionsCommandInput,
    cb: (err: any, data?: SearchPlaceIndexForSuggestionsCommandOutput) => void
  ): void;
  searchPlaceIndexForSuggestions(
    args: SearchPlaceIndexForSuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPlaceIndexForSuggestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPlaceIndexForTextCommand}
   */
  searchPlaceIndexForText(
    args: SearchPlaceIndexForTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchPlaceIndexForTextCommandOutput>;
  searchPlaceIndexForText(
    args: SearchPlaceIndexForTextCommandInput,
    cb: (err: any, data?: SearchPlaceIndexForTextCommandOutput) => void
  ): void;
  searchPlaceIndexForText(
    args: SearchPlaceIndexForTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchPlaceIndexForTextCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGeofenceCollectionCommand}
   */
  updateGeofenceCollection(
    args: UpdateGeofenceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGeofenceCollectionCommandOutput>;
  updateGeofenceCollection(
    args: UpdateGeofenceCollectionCommandInput,
    cb: (err: any, data?: UpdateGeofenceCollectionCommandOutput) => void
  ): void;
  updateGeofenceCollection(
    args: UpdateGeofenceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGeofenceCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyCommand}
   */
  updateKey(args: UpdateKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateKeyCommandOutput>;
  updateKey(args: UpdateKeyCommandInput, cb: (err: any, data?: UpdateKeyCommandOutput) => void): void;
  updateKey(
    args: UpdateKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMapCommand}
   */
  updateMap(args: UpdateMapCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMapCommandOutput>;
  updateMap(args: UpdateMapCommandInput, cb: (err: any, data?: UpdateMapCommandOutput) => void): void;
  updateMap(
    args: UpdateMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMapCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePlaceIndexCommand}
   */
  updatePlaceIndex(
    args: UpdatePlaceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePlaceIndexCommandOutput>;
  updatePlaceIndex(
    args: UpdatePlaceIndexCommandInput,
    cb: (err: any, data?: UpdatePlaceIndexCommandOutput) => void
  ): void;
  updatePlaceIndex(
    args: UpdatePlaceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlaceIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRouteCalculatorCommand}
   */
  updateRouteCalculator(
    args: UpdateRouteCalculatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouteCalculatorCommandOutput>;
  updateRouteCalculator(
    args: UpdateRouteCalculatorCommandInput,
    cb: (err: any, data?: UpdateRouteCalculatorCommandOutput) => void
  ): void;
  updateRouteCalculator(
    args: UpdateRouteCalculatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCalculatorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrackerCommand}
   */
  updateTracker(args: UpdateTrackerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrackerCommandOutput>;
  updateTracker(args: UpdateTrackerCommandInput, cb: (err: any, data?: UpdateTrackerCommandOutput) => void): void;
  updateTracker(
    args: UpdateTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrackerCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"</p>
 */
export class Location extends LocationClient implements Location {}
createAggregatedClient(commands, Location);
