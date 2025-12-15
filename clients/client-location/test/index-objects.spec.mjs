import {
  AccessDeniedException,
  AccessDeniedException$,
  AndroidApp$,
  ApiKeyFilter$,
  ApiKeyRestrictions$,
  AppleApp$,
  AssociateTrackerConsumer$,
  AssociateTrackerConsumerCommand,
  AssociateTrackerConsumerRequest$,
  AssociateTrackerConsumerResponse$,
  BatchDeleteDevicePositionHistory$,
  BatchDeleteDevicePositionHistoryCommand,
  BatchDeleteDevicePositionHistoryError$,
  BatchDeleteDevicePositionHistoryRequest$,
  BatchDeleteDevicePositionHistoryResponse$,
  BatchDeleteGeofence$,
  BatchDeleteGeofenceCommand,
  BatchDeleteGeofenceError$,
  BatchDeleteGeofenceRequest$,
  BatchDeleteGeofenceResponse$,
  BatchEvaluateGeofences$,
  BatchEvaluateGeofencesCommand,
  BatchEvaluateGeofencesError$,
  BatchEvaluateGeofencesRequest$,
  BatchEvaluateGeofencesResponse$,
  BatchGetDevicePosition$,
  BatchGetDevicePositionCommand,
  BatchGetDevicePositionError$,
  BatchGetDevicePositionRequest$,
  BatchGetDevicePositionResponse$,
  BatchItemError$,
  BatchPutGeofence$,
  BatchPutGeofenceCommand,
  BatchPutGeofenceError$,
  BatchPutGeofenceRequest$,
  BatchPutGeofenceRequestEntry$,
  BatchPutGeofenceResponse$,
  BatchPutGeofenceSuccess$,
  BatchUpdateDevicePosition$,
  BatchUpdateDevicePositionCommand,
  BatchUpdateDevicePositionError$,
  BatchUpdateDevicePositionRequest$,
  BatchUpdateDevicePositionResponse$,
  CalculateRoute$,
  CalculateRouteCarModeOptions$,
  CalculateRouteCommand,
  CalculateRouteMatrix$,
  CalculateRouteMatrixCommand,
  CalculateRouteMatrixRequest$,
  CalculateRouteMatrixResponse$,
  CalculateRouteMatrixSummary$,
  CalculateRouteRequest$,
  CalculateRouteResponse$,
  CalculateRouteSummary$,
  CalculateRouteTruckModeOptions$,
  CellSignals$,
  Circle$,
  ConflictException,
  ConflictException$,
  CreateGeofenceCollection$,
  CreateGeofenceCollectionCommand,
  CreateGeofenceCollectionRequest$,
  CreateGeofenceCollectionResponse$,
  CreateKey$,
  CreateKeyCommand,
  CreateKeyRequest$,
  CreateKeyResponse$,
  CreateMap$,
  CreateMapCommand,
  CreateMapRequest$,
  CreateMapResponse$,
  CreatePlaceIndex$,
  CreatePlaceIndexCommand,
  CreatePlaceIndexRequest$,
  CreatePlaceIndexResponse$,
  CreateRouteCalculator$,
  CreateRouteCalculatorCommand,
  CreateRouteCalculatorRequest$,
  CreateRouteCalculatorResponse$,
  CreateTracker$,
  CreateTrackerCommand,
  CreateTrackerRequest$,
  CreateTrackerResponse$,
  DataSourceConfiguration$,
  DeleteGeofenceCollection$,
  DeleteGeofenceCollectionCommand,
  DeleteGeofenceCollectionRequest$,
  DeleteGeofenceCollectionResponse$,
  DeleteKey$,
  DeleteKeyCommand,
  DeleteKeyRequest$,
  DeleteKeyResponse$,
  DeleteMap$,
  DeleteMapCommand,
  DeleteMapRequest$,
  DeleteMapResponse$,
  DeletePlaceIndex$,
  DeletePlaceIndexCommand,
  DeletePlaceIndexRequest$,
  DeletePlaceIndexResponse$,
  DeleteRouteCalculator$,
  DeleteRouteCalculatorCommand,
  DeleteRouteCalculatorRequest$,
  DeleteRouteCalculatorResponse$,
  DeleteTracker$,
  DeleteTrackerCommand,
  DeleteTrackerRequest$,
  DeleteTrackerResponse$,
  DescribeGeofenceCollection$,
  DescribeGeofenceCollectionCommand,
  DescribeGeofenceCollectionRequest$,
  DescribeGeofenceCollectionResponse$,
  DescribeKey$,
  DescribeKeyCommand,
  DescribeKeyRequest$,
  DescribeKeyResponse$,
  DescribeMap$,
  DescribeMapCommand,
  DescribeMapRequest$,
  DescribeMapResponse$,
  DescribePlaceIndex$,
  DescribePlaceIndexCommand,
  DescribePlaceIndexRequest$,
  DescribePlaceIndexResponse$,
  DescribeRouteCalculator$,
  DescribeRouteCalculatorCommand,
  DescribeRouteCalculatorRequest$,
  DescribeRouteCalculatorResponse$,
  DescribeTracker$,
  DescribeTrackerCommand,
  DescribeTrackerRequest$,
  DescribeTrackerResponse$,
  DevicePosition$,
  DevicePositionUpdate$,
  DeviceState$,
  DisassociateTrackerConsumer$,
  DisassociateTrackerConsumerCommand,
  DisassociateTrackerConsumerRequest$,
  DisassociateTrackerConsumerResponse$,
  ForecastGeofenceEvents$,
  ForecastGeofenceEventsCommand,
  ForecastGeofenceEventsDeviceState$,
  ForecastGeofenceEventsRequest$,
  ForecastGeofenceEventsResponse$,
  ForecastedEvent$,
  GeofenceGeometry$,
  GetDevicePosition$,
  GetDevicePositionCommand,
  GetDevicePositionHistory$,
  GetDevicePositionHistoryCommand,
  GetDevicePositionHistoryRequest$,
  GetDevicePositionHistoryResponse$,
  GetDevicePositionRequest$,
  GetDevicePositionResponse$,
  GetGeofence$,
  GetGeofenceCommand,
  GetGeofenceRequest$,
  GetGeofenceResponse$,
  GetMapGlyphs$,
  GetMapGlyphsCommand,
  GetMapGlyphsRequest$,
  GetMapGlyphsResponse$,
  GetMapSprites$,
  GetMapSpritesCommand,
  GetMapSpritesRequest$,
  GetMapSpritesResponse$,
  GetMapStyleDescriptor$,
  GetMapStyleDescriptorCommand,
  GetMapStyleDescriptorRequest$,
  GetMapStyleDescriptorResponse$,
  GetMapTile$,
  GetMapTileCommand,
  GetMapTileRequest$,
  GetMapTileResponse$,
  GetPlace$,
  GetPlaceCommand,
  GetPlaceRequest$,
  GetPlaceResponse$,
  InferredState$,
  InternalServerException,
  InternalServerException$,
  Leg$,
  LegGeometry$,
  ListDevicePositions$,
  ListDevicePositionsCommand,
  ListDevicePositionsRequest$,
  ListDevicePositionsResponse$,
  ListDevicePositionsResponseEntry$,
  ListGeofenceCollections$,
  ListGeofenceCollectionsCommand,
  ListGeofenceCollectionsRequest$,
  ListGeofenceCollectionsResponse$,
  ListGeofenceCollectionsResponseEntry$,
  ListGeofenceResponseEntry$,
  ListGeofences$,
  ListGeofencesCommand,
  ListGeofencesRequest$,
  ListGeofencesResponse$,
  ListKeys$,
  ListKeysCommand,
  ListKeysRequest$,
  ListKeysResponse$,
  ListKeysResponseEntry$,
  ListMaps$,
  ListMapsCommand,
  ListMapsRequest$,
  ListMapsResponse$,
  ListMapsResponseEntry$,
  ListPlaceIndexes$,
  ListPlaceIndexesCommand,
  ListPlaceIndexesRequest$,
  ListPlaceIndexesResponse$,
  ListPlaceIndexesResponseEntry$,
  ListRouteCalculators$,
  ListRouteCalculatorsCommand,
  ListRouteCalculatorsRequest$,
  ListRouteCalculatorsResponse$,
  ListRouteCalculatorsResponseEntry$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTrackerConsumers$,
  ListTrackerConsumersCommand,
  ListTrackerConsumersRequest$,
  ListTrackerConsumersResponse$,
  ListTrackers$,
  ListTrackersCommand,
  ListTrackersRequest$,
  ListTrackersResponse$,
  ListTrackersResponseEntry$,
  Location,
  LocationClient,
  LocationServiceException,
  LteCellDetails$,
  LteLocalId$,
  LteNetworkMeasurements$,
  MapConfiguration$,
  MapConfigurationUpdate$,
  Place$,
  PlaceGeometry$,
  PositionalAccuracy$,
  PutGeofence$,
  PutGeofenceCommand,
  PutGeofenceRequest$,
  PutGeofenceResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RouteMatrixEntry$,
  RouteMatrixEntryError$,
  SearchForPositionResult$,
  SearchForSuggestionsResult$,
  SearchForTextResult$,
  SearchPlaceIndexForPosition$,
  SearchPlaceIndexForPositionCommand,
  SearchPlaceIndexForPositionRequest$,
  SearchPlaceIndexForPositionResponse$,
  SearchPlaceIndexForPositionSummary$,
  SearchPlaceIndexForSuggestions$,
  SearchPlaceIndexForSuggestionsCommand,
  SearchPlaceIndexForSuggestionsRequest$,
  SearchPlaceIndexForSuggestionsResponse$,
  SearchPlaceIndexForSuggestionsSummary$,
  SearchPlaceIndexForText$,
  SearchPlaceIndexForTextCommand,
  SearchPlaceIndexForTextRequest$,
  SearchPlaceIndexForTextResponse$,
  SearchPlaceIndexForTextSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Step$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimeZone$,
  TrackingFilterGeometry$,
  TruckDimensions$,
  TruckWeight$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateGeofenceCollection$,
  UpdateGeofenceCollectionCommand,
  UpdateGeofenceCollectionRequest$,
  UpdateGeofenceCollectionResponse$,
  UpdateKey$,
  UpdateKeyCommand,
  UpdateKeyRequest$,
  UpdateKeyResponse$,
  UpdateMap$,
  UpdateMapCommand,
  UpdateMapRequest$,
  UpdateMapResponse$,
  UpdatePlaceIndex$,
  UpdatePlaceIndexCommand,
  UpdatePlaceIndexRequest$,
  UpdatePlaceIndexResponse$,
  UpdateRouteCalculator$,
  UpdateRouteCalculatorCommand,
  UpdateRouteCalculatorRequest$,
  UpdateRouteCalculatorResponse$,
  UpdateTracker$,
  UpdateTrackerCommand,
  UpdateTrackerRequest$,
  UpdateTrackerResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  VerifyDevicePosition$,
  VerifyDevicePositionCommand,
  VerifyDevicePositionRequest$,
  VerifyDevicePositionResponse$,
  WiFiAccessPoint$,
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
assert(typeof AssociateTrackerConsumer$ === "object");
assert(typeof BatchDeleteDevicePositionHistoryCommand === "function");
assert(typeof BatchDeleteDevicePositionHistory$ === "object");
assert(typeof BatchDeleteGeofenceCommand === "function");
assert(typeof BatchDeleteGeofence$ === "object");
assert(typeof BatchEvaluateGeofencesCommand === "function");
assert(typeof BatchEvaluateGeofences$ === "object");
assert(typeof BatchGetDevicePositionCommand === "function");
assert(typeof BatchGetDevicePosition$ === "object");
assert(typeof BatchPutGeofenceCommand === "function");
assert(typeof BatchPutGeofence$ === "object");
assert(typeof BatchUpdateDevicePositionCommand === "function");
assert(typeof BatchUpdateDevicePosition$ === "object");
assert(typeof CalculateRouteCommand === "function");
assert(typeof CalculateRoute$ === "object");
assert(typeof CalculateRouteMatrixCommand === "function");
assert(typeof CalculateRouteMatrix$ === "object");
assert(typeof CreateGeofenceCollectionCommand === "function");
assert(typeof CreateGeofenceCollection$ === "object");
assert(typeof CreateKeyCommand === "function");
assert(typeof CreateKey$ === "object");
assert(typeof CreateMapCommand === "function");
assert(typeof CreateMap$ === "object");
assert(typeof CreatePlaceIndexCommand === "function");
assert(typeof CreatePlaceIndex$ === "object");
assert(typeof CreateRouteCalculatorCommand === "function");
assert(typeof CreateRouteCalculator$ === "object");
assert(typeof CreateTrackerCommand === "function");
assert(typeof CreateTracker$ === "object");
assert(typeof DeleteGeofenceCollectionCommand === "function");
assert(typeof DeleteGeofenceCollection$ === "object");
assert(typeof DeleteKeyCommand === "function");
assert(typeof DeleteKey$ === "object");
assert(typeof DeleteMapCommand === "function");
assert(typeof DeleteMap$ === "object");
assert(typeof DeletePlaceIndexCommand === "function");
assert(typeof DeletePlaceIndex$ === "object");
assert(typeof DeleteRouteCalculatorCommand === "function");
assert(typeof DeleteRouteCalculator$ === "object");
assert(typeof DeleteTrackerCommand === "function");
assert(typeof DeleteTracker$ === "object");
assert(typeof DescribeGeofenceCollectionCommand === "function");
assert(typeof DescribeGeofenceCollection$ === "object");
assert(typeof DescribeKeyCommand === "function");
assert(typeof DescribeKey$ === "object");
assert(typeof DescribeMapCommand === "function");
assert(typeof DescribeMap$ === "object");
assert(typeof DescribePlaceIndexCommand === "function");
assert(typeof DescribePlaceIndex$ === "object");
assert(typeof DescribeRouteCalculatorCommand === "function");
assert(typeof DescribeRouteCalculator$ === "object");
assert(typeof DescribeTrackerCommand === "function");
assert(typeof DescribeTracker$ === "object");
assert(typeof DisassociateTrackerConsumerCommand === "function");
assert(typeof DisassociateTrackerConsumer$ === "object");
assert(typeof ForecastGeofenceEventsCommand === "function");
assert(typeof ForecastGeofenceEvents$ === "object");
assert(typeof GetDevicePositionCommand === "function");
assert(typeof GetDevicePosition$ === "object");
assert(typeof GetDevicePositionHistoryCommand === "function");
assert(typeof GetDevicePositionHistory$ === "object");
assert(typeof GetGeofenceCommand === "function");
assert(typeof GetGeofence$ === "object");
assert(typeof GetMapGlyphsCommand === "function");
assert(typeof GetMapGlyphs$ === "object");
assert(typeof GetMapSpritesCommand === "function");
assert(typeof GetMapSprites$ === "object");
assert(typeof GetMapStyleDescriptorCommand === "function");
assert(typeof GetMapStyleDescriptor$ === "object");
assert(typeof GetMapTileCommand === "function");
assert(typeof GetMapTile$ === "object");
assert(typeof GetPlaceCommand === "function");
assert(typeof GetPlace$ === "object");
assert(typeof ListDevicePositionsCommand === "function");
assert(typeof ListDevicePositions$ === "object");
assert(typeof ListGeofenceCollectionsCommand === "function");
assert(typeof ListGeofenceCollections$ === "object");
assert(typeof ListGeofencesCommand === "function");
assert(typeof ListGeofences$ === "object");
assert(typeof ListKeysCommand === "function");
assert(typeof ListKeys$ === "object");
assert(typeof ListMapsCommand === "function");
assert(typeof ListMaps$ === "object");
assert(typeof ListPlaceIndexesCommand === "function");
assert(typeof ListPlaceIndexes$ === "object");
assert(typeof ListRouteCalculatorsCommand === "function");
assert(typeof ListRouteCalculators$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTrackerConsumersCommand === "function");
assert(typeof ListTrackerConsumers$ === "object");
assert(typeof ListTrackersCommand === "function");
assert(typeof ListTrackers$ === "object");
assert(typeof PutGeofenceCommand === "function");
assert(typeof PutGeofence$ === "object");
assert(typeof SearchPlaceIndexForPositionCommand === "function");
assert(typeof SearchPlaceIndexForPosition$ === "object");
assert(typeof SearchPlaceIndexForSuggestionsCommand === "function");
assert(typeof SearchPlaceIndexForSuggestions$ === "object");
assert(typeof SearchPlaceIndexForTextCommand === "function");
assert(typeof SearchPlaceIndexForText$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateGeofenceCollectionCommand === "function");
assert(typeof UpdateGeofenceCollection$ === "object");
assert(typeof UpdateKeyCommand === "function");
assert(typeof UpdateKey$ === "object");
assert(typeof UpdateMapCommand === "function");
assert(typeof UpdateMap$ === "object");
assert(typeof UpdatePlaceIndexCommand === "function");
assert(typeof UpdatePlaceIndex$ === "object");
assert(typeof UpdateRouteCalculatorCommand === "function");
assert(typeof UpdateRouteCalculator$ === "object");
assert(typeof UpdateTrackerCommand === "function");
assert(typeof UpdateTracker$ === "object");
assert(typeof VerifyDevicePositionCommand === "function");
assert(typeof VerifyDevicePosition$ === "object");
// structural schemas
assert(typeof AndroidApp$ === "object");
assert(typeof ApiKeyFilter$ === "object");
assert(typeof ApiKeyRestrictions$ === "object");
assert(typeof AppleApp$ === "object");
assert(typeof AssociateTrackerConsumerRequest$ === "object");
assert(typeof AssociateTrackerConsumerResponse$ === "object");
assert(typeof BatchDeleteDevicePositionHistoryError$ === "object");
assert(typeof BatchDeleteDevicePositionHistoryRequest$ === "object");
assert(typeof BatchDeleteDevicePositionHistoryResponse$ === "object");
assert(typeof BatchDeleteGeofenceError$ === "object");
assert(typeof BatchDeleteGeofenceRequest$ === "object");
assert(typeof BatchDeleteGeofenceResponse$ === "object");
assert(typeof BatchEvaluateGeofencesError$ === "object");
assert(typeof BatchEvaluateGeofencesRequest$ === "object");
assert(typeof BatchEvaluateGeofencesResponse$ === "object");
assert(typeof BatchGetDevicePositionError$ === "object");
assert(typeof BatchGetDevicePositionRequest$ === "object");
assert(typeof BatchGetDevicePositionResponse$ === "object");
assert(typeof BatchItemError$ === "object");
assert(typeof BatchPutGeofenceError$ === "object");
assert(typeof BatchPutGeofenceRequest$ === "object");
assert(typeof BatchPutGeofenceRequestEntry$ === "object");
assert(typeof BatchPutGeofenceResponse$ === "object");
assert(typeof BatchPutGeofenceSuccess$ === "object");
assert(typeof BatchUpdateDevicePositionError$ === "object");
assert(typeof BatchUpdateDevicePositionRequest$ === "object");
assert(typeof BatchUpdateDevicePositionResponse$ === "object");
assert(typeof CalculateRouteCarModeOptions$ === "object");
assert(typeof CalculateRouteMatrixRequest$ === "object");
assert(typeof CalculateRouteMatrixResponse$ === "object");
assert(typeof CalculateRouteMatrixSummary$ === "object");
assert(typeof CalculateRouteRequest$ === "object");
assert(typeof CalculateRouteResponse$ === "object");
assert(typeof CalculateRouteSummary$ === "object");
assert(typeof CalculateRouteTruckModeOptions$ === "object");
assert(typeof CellSignals$ === "object");
assert(typeof Circle$ === "object");
assert(typeof CreateGeofenceCollectionRequest$ === "object");
assert(typeof CreateGeofenceCollectionResponse$ === "object");
assert(typeof CreateKeyRequest$ === "object");
assert(typeof CreateKeyResponse$ === "object");
assert(typeof CreateMapRequest$ === "object");
assert(typeof CreateMapResponse$ === "object");
assert(typeof CreatePlaceIndexRequest$ === "object");
assert(typeof CreatePlaceIndexResponse$ === "object");
assert(typeof CreateRouteCalculatorRequest$ === "object");
assert(typeof CreateRouteCalculatorResponse$ === "object");
assert(typeof CreateTrackerRequest$ === "object");
assert(typeof CreateTrackerResponse$ === "object");
assert(typeof DataSourceConfiguration$ === "object");
assert(typeof DeleteGeofenceCollectionRequest$ === "object");
assert(typeof DeleteGeofenceCollectionResponse$ === "object");
assert(typeof DeleteKeyRequest$ === "object");
assert(typeof DeleteKeyResponse$ === "object");
assert(typeof DeleteMapRequest$ === "object");
assert(typeof DeleteMapResponse$ === "object");
assert(typeof DeletePlaceIndexRequest$ === "object");
assert(typeof DeletePlaceIndexResponse$ === "object");
assert(typeof DeleteRouteCalculatorRequest$ === "object");
assert(typeof DeleteRouteCalculatorResponse$ === "object");
assert(typeof DeleteTrackerRequest$ === "object");
assert(typeof DeleteTrackerResponse$ === "object");
assert(typeof DescribeGeofenceCollectionRequest$ === "object");
assert(typeof DescribeGeofenceCollectionResponse$ === "object");
assert(typeof DescribeKeyRequest$ === "object");
assert(typeof DescribeKeyResponse$ === "object");
assert(typeof DescribeMapRequest$ === "object");
assert(typeof DescribeMapResponse$ === "object");
assert(typeof DescribePlaceIndexRequest$ === "object");
assert(typeof DescribePlaceIndexResponse$ === "object");
assert(typeof DescribeRouteCalculatorRequest$ === "object");
assert(typeof DescribeRouteCalculatorResponse$ === "object");
assert(typeof DescribeTrackerRequest$ === "object");
assert(typeof DescribeTrackerResponse$ === "object");
assert(typeof DevicePosition$ === "object");
assert(typeof DevicePositionUpdate$ === "object");
assert(typeof DeviceState$ === "object");
assert(typeof DisassociateTrackerConsumerRequest$ === "object");
assert(typeof DisassociateTrackerConsumerResponse$ === "object");
assert(typeof ForecastedEvent$ === "object");
assert(typeof ForecastGeofenceEventsDeviceState$ === "object");
assert(typeof ForecastGeofenceEventsRequest$ === "object");
assert(typeof ForecastGeofenceEventsResponse$ === "object");
assert(typeof GeofenceGeometry$ === "object");
assert(typeof GetDevicePositionHistoryRequest$ === "object");
assert(typeof GetDevicePositionHistoryResponse$ === "object");
assert(typeof GetDevicePositionRequest$ === "object");
assert(typeof GetDevicePositionResponse$ === "object");
assert(typeof GetGeofenceRequest$ === "object");
assert(typeof GetGeofenceResponse$ === "object");
assert(typeof GetMapGlyphsRequest$ === "object");
assert(typeof GetMapGlyphsResponse$ === "object");
assert(typeof GetMapSpritesRequest$ === "object");
assert(typeof GetMapSpritesResponse$ === "object");
assert(typeof GetMapStyleDescriptorRequest$ === "object");
assert(typeof GetMapStyleDescriptorResponse$ === "object");
assert(typeof GetMapTileRequest$ === "object");
assert(typeof GetMapTileResponse$ === "object");
assert(typeof GetPlaceRequest$ === "object");
assert(typeof GetPlaceResponse$ === "object");
assert(typeof InferredState$ === "object");
assert(typeof Leg$ === "object");
assert(typeof LegGeometry$ === "object");
assert(typeof ListDevicePositionsRequest$ === "object");
assert(typeof ListDevicePositionsResponse$ === "object");
assert(typeof ListDevicePositionsResponseEntry$ === "object");
assert(typeof ListGeofenceCollectionsRequest$ === "object");
assert(typeof ListGeofenceCollectionsResponse$ === "object");
assert(typeof ListGeofenceCollectionsResponseEntry$ === "object");
assert(typeof ListGeofenceResponseEntry$ === "object");
assert(typeof ListGeofencesRequest$ === "object");
assert(typeof ListGeofencesResponse$ === "object");
assert(typeof ListKeysRequest$ === "object");
assert(typeof ListKeysResponse$ === "object");
assert(typeof ListKeysResponseEntry$ === "object");
assert(typeof ListMapsRequest$ === "object");
assert(typeof ListMapsResponse$ === "object");
assert(typeof ListMapsResponseEntry$ === "object");
assert(typeof ListPlaceIndexesRequest$ === "object");
assert(typeof ListPlaceIndexesResponse$ === "object");
assert(typeof ListPlaceIndexesResponseEntry$ === "object");
assert(typeof ListRouteCalculatorsRequest$ === "object");
assert(typeof ListRouteCalculatorsResponse$ === "object");
assert(typeof ListRouteCalculatorsResponseEntry$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTrackerConsumersRequest$ === "object");
assert(typeof ListTrackerConsumersResponse$ === "object");
assert(typeof ListTrackersRequest$ === "object");
assert(typeof ListTrackersResponse$ === "object");
assert(typeof ListTrackersResponseEntry$ === "object");
assert(typeof LteCellDetails$ === "object");
assert(typeof LteLocalId$ === "object");
assert(typeof LteNetworkMeasurements$ === "object");
assert(typeof MapConfiguration$ === "object");
assert(typeof MapConfigurationUpdate$ === "object");
assert(typeof Place$ === "object");
assert(typeof PlaceGeometry$ === "object");
assert(typeof PositionalAccuracy$ === "object");
assert(typeof PutGeofenceRequest$ === "object");
assert(typeof PutGeofenceResponse$ === "object");
assert(typeof RouteMatrixEntry$ === "object");
assert(typeof RouteMatrixEntryError$ === "object");
assert(typeof SearchForPositionResult$ === "object");
assert(typeof SearchForSuggestionsResult$ === "object");
assert(typeof SearchForTextResult$ === "object");
assert(typeof SearchPlaceIndexForPositionRequest$ === "object");
assert(typeof SearchPlaceIndexForPositionResponse$ === "object");
assert(typeof SearchPlaceIndexForPositionSummary$ === "object");
assert(typeof SearchPlaceIndexForSuggestionsRequest$ === "object");
assert(typeof SearchPlaceIndexForSuggestionsResponse$ === "object");
assert(typeof SearchPlaceIndexForSuggestionsSummary$ === "object");
assert(typeof SearchPlaceIndexForTextRequest$ === "object");
assert(typeof SearchPlaceIndexForTextResponse$ === "object");
assert(typeof SearchPlaceIndexForTextSummary$ === "object");
assert(typeof Step$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimeZone$ === "object");
assert(typeof TrackingFilterGeometry$ === "object");
assert(typeof TruckDimensions$ === "object");
assert(typeof TruckWeight$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateGeofenceCollectionRequest$ === "object");
assert(typeof UpdateGeofenceCollectionResponse$ === "object");
assert(typeof UpdateKeyRequest$ === "object");
assert(typeof UpdateKeyResponse$ === "object");
assert(typeof UpdateMapRequest$ === "object");
assert(typeof UpdateMapResponse$ === "object");
assert(typeof UpdatePlaceIndexRequest$ === "object");
assert(typeof UpdatePlaceIndexResponse$ === "object");
assert(typeof UpdateRouteCalculatorRequest$ === "object");
assert(typeof UpdateRouteCalculatorResponse$ === "object");
assert(typeof UpdateTrackerRequest$ === "object");
assert(typeof UpdateTrackerResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VerifyDevicePositionRequest$ === "object");
assert(typeof VerifyDevicePositionResponse$ === "object");
assert(typeof WiFiAccessPoint$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof LocationServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof LocationServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof LocationServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LocationServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof LocationServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof LocationServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof LocationServiceException);
assert(typeof ValidationException$ === "object");
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
