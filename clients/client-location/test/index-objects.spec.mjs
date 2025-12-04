import {
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
  ForecastGeofenceEventsCommand,
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
  Location,
  LocationClient,
  LocationServiceException,
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
  VerifyDevicePositionCommand,
  paginateForecastGeofenceEvents,
  paginateGetDevicePositionHistory,
  paginateListDevicePositions,
  paginateListGeofenceCollections,
  paginateListGeofences,
  paginateListKeys,
  paginateListMaps,
  paginateListPlaceIndexes,
  paginateListRouteCalculators,
  paginateListTrackerConsumers,
  paginateListTrackers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LocationClient === "function");
assert(typeof Location === "function");
// commands
assert(typeof AssociateTrackerConsumerCommand === "function");
assert(typeof BatchDeleteDevicePositionHistoryCommand === "function");
assert(typeof BatchDeleteGeofenceCommand === "function");
assert(typeof BatchEvaluateGeofencesCommand === "function");
assert(typeof BatchGetDevicePositionCommand === "function");
assert(typeof BatchPutGeofenceCommand === "function");
assert(typeof BatchUpdateDevicePositionCommand === "function");
assert(typeof CalculateRouteCommand === "function");
assert(typeof CalculateRouteMatrixCommand === "function");
assert(typeof CreateGeofenceCollectionCommand === "function");
assert(typeof CreateKeyCommand === "function");
assert(typeof CreateMapCommand === "function");
assert(typeof CreatePlaceIndexCommand === "function");
assert(typeof CreateRouteCalculatorCommand === "function");
assert(typeof CreateTrackerCommand === "function");
assert(typeof DeleteGeofenceCollectionCommand === "function");
assert(typeof DeleteKeyCommand === "function");
assert(typeof DeleteMapCommand === "function");
assert(typeof DeletePlaceIndexCommand === "function");
assert(typeof DeleteRouteCalculatorCommand === "function");
assert(typeof DeleteTrackerCommand === "function");
assert(typeof DescribeGeofenceCollectionCommand === "function");
assert(typeof DescribeKeyCommand === "function");
assert(typeof DescribeMapCommand === "function");
assert(typeof DescribePlaceIndexCommand === "function");
assert(typeof DescribeRouteCalculatorCommand === "function");
assert(typeof DescribeTrackerCommand === "function");
assert(typeof DisassociateTrackerConsumerCommand === "function");
assert(typeof ForecastGeofenceEventsCommand === "function");
assert(typeof GetDevicePositionCommand === "function");
assert(typeof GetDevicePositionHistoryCommand === "function");
assert(typeof GetGeofenceCommand === "function");
assert(typeof GetMapGlyphsCommand === "function");
assert(typeof GetMapSpritesCommand === "function");
assert(typeof GetMapStyleDescriptorCommand === "function");
assert(typeof GetMapTileCommand === "function");
assert(typeof GetPlaceCommand === "function");
assert(typeof ListDevicePositionsCommand === "function");
assert(typeof ListGeofenceCollectionsCommand === "function");
assert(typeof ListGeofencesCommand === "function");
assert(typeof ListKeysCommand === "function");
assert(typeof ListMapsCommand === "function");
assert(typeof ListPlaceIndexesCommand === "function");
assert(typeof ListRouteCalculatorsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTrackerConsumersCommand === "function");
assert(typeof ListTrackersCommand === "function");
assert(typeof PutGeofenceCommand === "function");
assert(typeof SearchPlaceIndexForPositionCommand === "function");
assert(typeof SearchPlaceIndexForSuggestionsCommand === "function");
assert(typeof SearchPlaceIndexForTextCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateGeofenceCollectionCommand === "function");
assert(typeof UpdateKeyCommand === "function");
assert(typeof UpdateMapCommand === "function");
assert(typeof UpdatePlaceIndexCommand === "function");
assert(typeof UpdateRouteCalculatorCommand === "function");
assert(typeof UpdateTrackerCommand === "function");
assert(typeof VerifyDevicePositionCommand === "function");
// errors
assert(LocationServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateForecastGeofenceEvents === "function");
assert(typeof paginateGetDevicePositionHistory === "function");
assert(typeof paginateListDevicePositions === "function");
assert(typeof paginateListGeofenceCollections === "function");
assert(typeof paginateListGeofences === "function");
assert(typeof paginateListKeys === "function");
assert(typeof paginateListMaps === "function");
assert(typeof paginateListPlaceIndexes === "function");
assert(typeof paginateListRouteCalculators === "function");
assert(typeof paginateListTrackerConsumers === "function");
assert(typeof paginateListTrackers === "function");
console.log(`Location index test passed.`);
