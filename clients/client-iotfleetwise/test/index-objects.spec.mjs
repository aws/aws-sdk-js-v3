import {
  AccessDeniedException,
  AccessDeniedException$,
  Actuator$,
  AssociateVehicleFleet$,
  AssociateVehicleFleetCommand,
  AssociateVehicleFleetRequest$,
  AssociateVehicleFleetResponse$,
  Attribute$,
  BatchCreateVehicle$,
  BatchCreateVehicleCommand,
  BatchCreateVehicleRequest$,
  BatchCreateVehicleResponse$,
  BatchUpdateVehicle$,
  BatchUpdateVehicleCommand,
  BatchUpdateVehicleRequest$,
  BatchUpdateVehicleResponse$,
  Branch$,
  CampaignStatus,
  CampaignSummary$,
  CanDbcDefinition$,
  CanInterface$,
  CanSignal$,
  CloudWatchLogDeliveryOptions$,
  CollectionScheme$,
  Compression,
  ConditionBasedCollectionScheme$,
  ConditionBasedSignalFetchConfig$,
  ConflictException,
  ConflictException$,
  CreateCampaign$,
  CreateCampaignCommand,
  CreateCampaignRequest$,
  CreateCampaignResponse$,
  CreateDecoderManifest$,
  CreateDecoderManifestCommand,
  CreateDecoderManifestRequest$,
  CreateDecoderManifestResponse$,
  CreateFleet$,
  CreateFleetCommand,
  CreateFleetRequest$,
  CreateFleetResponse$,
  CreateModelManifest$,
  CreateModelManifestCommand,
  CreateModelManifestRequest$,
  CreateModelManifestResponse$,
  CreateSignalCatalog$,
  CreateSignalCatalogCommand,
  CreateSignalCatalogRequest$,
  CreateSignalCatalogResponse$,
  CreateStateTemplate$,
  CreateStateTemplateCommand,
  CreateStateTemplateRequest$,
  CreateStateTemplateResponse$,
  CreateVehicle$,
  CreateVehicleCommand,
  CreateVehicleError$,
  CreateVehicleRequest$,
  CreateVehicleRequestItem$,
  CreateVehicleResponse$,
  CreateVehicleResponseItem$,
  CustomDecodingInterface$,
  CustomDecodingSignal$,
  CustomProperty$,
  CustomStruct$,
  DataDestinationConfig$,
  DataFormat,
  DataPartition$,
  DataPartitionStorageOptions$,
  DataPartitionUploadOptions$,
  DecoderManifestSummary$,
  DecoderManifestValidationException,
  DecoderManifestValidationException$,
  DefaultForUnmappedSignalsType,
  DeleteCampaign$,
  DeleteCampaignCommand,
  DeleteCampaignRequest$,
  DeleteCampaignResponse$,
  DeleteDecoderManifest$,
  DeleteDecoderManifestCommand,
  DeleteDecoderManifestRequest$,
  DeleteDecoderManifestResponse$,
  DeleteFleet$,
  DeleteFleetCommand,
  DeleteFleetRequest$,
  DeleteFleetResponse$,
  DeleteModelManifest$,
  DeleteModelManifestCommand,
  DeleteModelManifestRequest$,
  DeleteModelManifestResponse$,
  DeleteSignalCatalog$,
  DeleteSignalCatalogCommand,
  DeleteSignalCatalogRequest$,
  DeleteSignalCatalogResponse$,
  DeleteStateTemplate$,
  DeleteStateTemplateCommand,
  DeleteStateTemplateRequest$,
  DeleteStateTemplateResponse$,
  DeleteVehicle$,
  DeleteVehicleCommand,
  DeleteVehicleRequest$,
  DeleteVehicleResponse$,
  DiagnosticsMode,
  DisassociateVehicleFleet$,
  DisassociateVehicleFleetCommand,
  DisassociateVehicleFleetRequest$,
  DisassociateVehicleFleetResponse$,
  EncryptionStatus,
  EncryptionType,
  FleetSummary$,
  FormattedVss$,
  GetCampaign$,
  GetCampaignCommand,
  GetCampaignRequest$,
  GetCampaignResponse$,
  GetDecoderManifest$,
  GetDecoderManifestCommand,
  GetDecoderManifestRequest$,
  GetDecoderManifestResponse$,
  GetEncryptionConfiguration$,
  GetEncryptionConfigurationCommand,
  GetEncryptionConfigurationRequest$,
  GetEncryptionConfigurationResponse$,
  GetFleet$,
  GetFleetCommand,
  GetFleetRequest$,
  GetFleetResponse$,
  GetLoggingOptions$,
  GetLoggingOptionsCommand,
  GetLoggingOptionsRequest$,
  GetLoggingOptionsResponse$,
  GetModelManifest$,
  GetModelManifestCommand,
  GetModelManifestRequest$,
  GetModelManifestResponse$,
  GetRegisterAccountStatus$,
  GetRegisterAccountStatusCommand,
  GetRegisterAccountStatusRequest$,
  GetRegisterAccountStatusResponse$,
  GetSignalCatalog$,
  GetSignalCatalogCommand,
  GetSignalCatalogRequest$,
  GetSignalCatalogResponse$,
  GetStateTemplate$,
  GetStateTemplateCommand,
  GetStateTemplateRequest$,
  GetStateTemplateResponse$,
  GetVehicle$,
  GetVehicleCommand,
  GetVehicleRequest$,
  GetVehicleResponse$,
  GetVehicleStatus$,
  GetVehicleStatusCommand,
  GetVehicleStatusRequest$,
  GetVehicleStatusResponse$,
  IamRegistrationResponse$,
  IamResources$,
  ImportDecoderManifest$,
  ImportDecoderManifestCommand,
  ImportDecoderManifestRequest$,
  ImportDecoderManifestResponse$,
  ImportSignalCatalog$,
  ImportSignalCatalogCommand,
  ImportSignalCatalogRequest$,
  ImportSignalCatalogResponse$,
  InternalServerException,
  InternalServerException$,
  InvalidNetworkInterface$,
  InvalidNodeException,
  InvalidNodeException$,
  InvalidSignal$,
  InvalidSignalDecoder$,
  InvalidSignalsException,
  InvalidSignalsException$,
  IoTFleetWise,
  IoTFleetWiseClient,
  IoTFleetWiseServiceException,
  LimitExceededException,
  LimitExceededException$,
  ListCampaigns$,
  ListCampaignsCommand,
  ListCampaignsRequest$,
  ListCampaignsResponse$,
  ListDecoderManifestNetworkInterfaces$,
  ListDecoderManifestNetworkInterfacesCommand,
  ListDecoderManifestNetworkInterfacesRequest$,
  ListDecoderManifestNetworkInterfacesResponse$,
  ListDecoderManifests$,
  ListDecoderManifestsCommand,
  ListDecoderManifestSignals$,
  ListDecoderManifestSignalsCommand,
  ListDecoderManifestSignalsRequest$,
  ListDecoderManifestSignalsResponse$,
  ListDecoderManifestsRequest$,
  ListDecoderManifestsResponse$,
  ListFleets$,
  ListFleetsCommand,
  ListFleetsForVehicle$,
  ListFleetsForVehicleCommand,
  ListFleetsForVehicleRequest$,
  ListFleetsForVehicleResponse$,
  ListFleetsRequest$,
  ListFleetsResponse$,
  ListModelManifestNodes$,
  ListModelManifestNodesCommand,
  ListModelManifestNodesRequest$,
  ListModelManifestNodesResponse$,
  ListModelManifests$,
  ListModelManifestsCommand,
  ListModelManifestsRequest$,
  ListModelManifestsResponse$,
  ListResponseScope,
  ListSignalCatalogNodes$,
  ListSignalCatalogNodesCommand,
  ListSignalCatalogNodesRequest$,
  ListSignalCatalogNodesResponse$,
  ListSignalCatalogs$,
  ListSignalCatalogsCommand,
  ListSignalCatalogsRequest$,
  ListSignalCatalogsResponse$,
  ListStateTemplates$,
  ListStateTemplatesCommand,
  ListStateTemplatesRequest$,
  ListStateTemplatesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVehicles$,
  ListVehiclesCommand,
  ListVehiclesInFleet$,
  ListVehiclesInFleetCommand,
  ListVehiclesInFleetRequest$,
  ListVehiclesInFleetResponse$,
  ListVehiclesRequest$,
  ListVehiclesResponse$,
  LogType,
  ManifestStatus,
  MessageSignal$,
  ModelManifestSummary$,
  MqttTopicConfig$,
  NetworkFileDefinition$,
  NetworkInterface$,
  NetworkInterfaceFailureReason,
  NetworkInterfaceType,
  Node$,
  NodeCounts$,
  NodeDataEncoding,
  NodeDataType,
  ObdInterface$,
  ObdSignal$,
  OnChangeStateTemplateUpdateStrategy$,
  paginateGetVehicleStatus,
  paginateListCampaigns,
  paginateListDecoderManifestNetworkInterfaces,
  paginateListDecoderManifests,
  paginateListDecoderManifestSignals,
  paginateListFleets,
  paginateListFleetsForVehicle,
  paginateListModelManifestNodes,
  paginateListModelManifests,
  paginateListSignalCatalogNodes,
  paginateListSignalCatalogs,
  paginateListStateTemplates,
  paginateListVehicles,
  paginateListVehiclesInFleet,
  PeriodicStateTemplateUpdateStrategy$,
  PrimitiveMessageDefinition$,
  PutEncryptionConfiguration$,
  PutEncryptionConfigurationCommand,
  PutEncryptionConfigurationRequest$,
  PutEncryptionConfigurationResponse$,
  PutLoggingOptions$,
  PutLoggingOptionsCommand,
  PutLoggingOptionsRequest$,
  PutLoggingOptionsResponse$,
  RegisterAccount$,
  RegisterAccountCommand,
  RegisterAccountRequest$,
  RegisterAccountResponse$,
  RegistrationStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ROS2PrimitiveMessageDefinition$,
  ROS2PrimitiveType,
  S3Config$,
  Sensor$,
  SignalCatalogSummary$,
  SignalDecoder$,
  SignalDecoderFailureReason,
  SignalDecoderType,
  SignalFetchConfig$,
  SignalFetchInformation$,
  SignalInformation$,
  SignalNodeType,
  SignalValueType,
  SpoolingMode,
  StateTemplateAssociation$,
  StateTemplateSummary$,
  StateTemplateUpdateStrategy$,
  StorageCompressionFormat,
  StorageMaximumSize$,
  StorageMaximumSizeUnit,
  StorageMinimumTimeToLive$,
  StorageMinimumTimeToLiveUnit,
  StructuredMessage$,
  StructuredMessageFieldNameAndDataTypePair$,
  StructuredMessageListDefinition$,
  StructuredMessageListType,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimeBasedCollectionScheme$,
  TimeBasedSignalFetchConfig$,
  TimePeriod$,
  TimestreamConfig$,
  TimestreamRegistrationResponse$,
  TimestreamResources$,
  TimeUnit,
  TriggerMode,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCampaign$,
  UpdateCampaignAction,
  UpdateCampaignCommand,
  UpdateCampaignRequest$,
  UpdateCampaignResponse$,
  UpdateDecoderManifest$,
  UpdateDecoderManifestCommand,
  UpdateDecoderManifestRequest$,
  UpdateDecoderManifestResponse$,
  UpdateFleet$,
  UpdateFleetCommand,
  UpdateFleetRequest$,
  UpdateFleetResponse$,
  UpdateMode,
  UpdateModelManifest$,
  UpdateModelManifestCommand,
  UpdateModelManifestRequest$,
  UpdateModelManifestResponse$,
  UpdateSignalCatalog$,
  UpdateSignalCatalogCommand,
  UpdateSignalCatalogRequest$,
  UpdateSignalCatalogResponse$,
  UpdateStateTemplate$,
  UpdateStateTemplateCommand,
  UpdateStateTemplateRequest$,
  UpdateStateTemplateResponse$,
  UpdateVehicle$,
  UpdateVehicleCommand,
  UpdateVehicleError$,
  UpdateVehicleRequest$,
  UpdateVehicleRequestItem$,
  UpdateVehicleResponse$,
  UpdateVehicleResponseItem$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VehicleAssociationBehavior,
  VehicleMiddleware$,
  VehicleMiddlewareProtocol,
  VehicleState,
  VehicleStatus$,
  VehicleSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTFleetWiseClient === "function");
assert(typeof IoTFleetWise === "function");
// commands
assert(typeof AssociateVehicleFleetCommand === "function");
assert(typeof AssociateVehicleFleet$ === "object");
assert(typeof BatchCreateVehicleCommand === "function");
assert(typeof BatchCreateVehicle$ === "object");
assert(typeof BatchUpdateVehicleCommand === "function");
assert(typeof BatchUpdateVehicle$ === "object");
assert(typeof CreateCampaignCommand === "function");
assert(typeof CreateCampaign$ === "object");
assert(typeof CreateDecoderManifestCommand === "function");
assert(typeof CreateDecoderManifest$ === "object");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFleet$ === "object");
assert(typeof CreateModelManifestCommand === "function");
assert(typeof CreateModelManifest$ === "object");
assert(typeof CreateSignalCatalogCommand === "function");
assert(typeof CreateSignalCatalog$ === "object");
assert(typeof CreateStateTemplateCommand === "function");
assert(typeof CreateStateTemplate$ === "object");
assert(typeof CreateVehicleCommand === "function");
assert(typeof CreateVehicle$ === "object");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteCampaign$ === "object");
assert(typeof DeleteDecoderManifestCommand === "function");
assert(typeof DeleteDecoderManifest$ === "object");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteFleet$ === "object");
assert(typeof DeleteModelManifestCommand === "function");
assert(typeof DeleteModelManifest$ === "object");
assert(typeof DeleteSignalCatalogCommand === "function");
assert(typeof DeleteSignalCatalog$ === "object");
assert(typeof DeleteStateTemplateCommand === "function");
assert(typeof DeleteStateTemplate$ === "object");
assert(typeof DeleteVehicleCommand === "function");
assert(typeof DeleteVehicle$ === "object");
assert(typeof DisassociateVehicleFleetCommand === "function");
assert(typeof DisassociateVehicleFleet$ === "object");
assert(typeof GetCampaignCommand === "function");
assert(typeof GetCampaign$ === "object");
assert(typeof GetDecoderManifestCommand === "function");
assert(typeof GetDecoderManifest$ === "object");
assert(typeof GetEncryptionConfigurationCommand === "function");
assert(typeof GetEncryptionConfiguration$ === "object");
assert(typeof GetFleetCommand === "function");
assert(typeof GetFleet$ === "object");
assert(typeof GetLoggingOptionsCommand === "function");
assert(typeof GetLoggingOptions$ === "object");
assert(typeof GetModelManifestCommand === "function");
assert(typeof GetModelManifest$ === "object");
assert(typeof GetRegisterAccountStatusCommand === "function");
assert(typeof GetRegisterAccountStatus$ === "object");
assert(typeof GetSignalCatalogCommand === "function");
assert(typeof GetSignalCatalog$ === "object");
assert(typeof GetStateTemplateCommand === "function");
assert(typeof GetStateTemplate$ === "object");
assert(typeof GetVehicleCommand === "function");
assert(typeof GetVehicle$ === "object");
assert(typeof GetVehicleStatusCommand === "function");
assert(typeof GetVehicleStatus$ === "object");
assert(typeof ImportDecoderManifestCommand === "function");
assert(typeof ImportDecoderManifest$ === "object");
assert(typeof ImportSignalCatalogCommand === "function");
assert(typeof ImportSignalCatalog$ === "object");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListCampaigns$ === "object");
assert(typeof ListDecoderManifestNetworkInterfacesCommand === "function");
assert(typeof ListDecoderManifestNetworkInterfaces$ === "object");
assert(typeof ListDecoderManifestsCommand === "function");
assert(typeof ListDecoderManifests$ === "object");
assert(typeof ListDecoderManifestSignalsCommand === "function");
assert(typeof ListDecoderManifestSignals$ === "object");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListFleets$ === "object");
assert(typeof ListFleetsForVehicleCommand === "function");
assert(typeof ListFleetsForVehicle$ === "object");
assert(typeof ListModelManifestNodesCommand === "function");
assert(typeof ListModelManifestNodes$ === "object");
assert(typeof ListModelManifestsCommand === "function");
assert(typeof ListModelManifests$ === "object");
assert(typeof ListSignalCatalogNodesCommand === "function");
assert(typeof ListSignalCatalogNodes$ === "object");
assert(typeof ListSignalCatalogsCommand === "function");
assert(typeof ListSignalCatalogs$ === "object");
assert(typeof ListStateTemplatesCommand === "function");
assert(typeof ListStateTemplates$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVehiclesCommand === "function");
assert(typeof ListVehicles$ === "object");
assert(typeof ListVehiclesInFleetCommand === "function");
assert(typeof ListVehiclesInFleet$ === "object");
assert(typeof PutEncryptionConfigurationCommand === "function");
assert(typeof PutEncryptionConfiguration$ === "object");
assert(typeof PutLoggingOptionsCommand === "function");
assert(typeof PutLoggingOptions$ === "object");
assert(typeof RegisterAccountCommand === "function");
assert(typeof RegisterAccount$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCampaignCommand === "function");
assert(typeof UpdateCampaign$ === "object");
assert(typeof UpdateDecoderManifestCommand === "function");
assert(typeof UpdateDecoderManifest$ === "object");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateFleet$ === "object");
assert(typeof UpdateModelManifestCommand === "function");
assert(typeof UpdateModelManifest$ === "object");
assert(typeof UpdateSignalCatalogCommand === "function");
assert(typeof UpdateSignalCatalog$ === "object");
assert(typeof UpdateStateTemplateCommand === "function");
assert(typeof UpdateStateTemplate$ === "object");
assert(typeof UpdateVehicleCommand === "function");
assert(typeof UpdateVehicle$ === "object");
// structural schemas
assert(typeof Actuator$ === "object");
assert(typeof AssociateVehicleFleetRequest$ === "object");
assert(typeof AssociateVehicleFleetResponse$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof BatchCreateVehicleRequest$ === "object");
assert(typeof BatchCreateVehicleResponse$ === "object");
assert(typeof BatchUpdateVehicleRequest$ === "object");
assert(typeof BatchUpdateVehicleResponse$ === "object");
assert(typeof Branch$ === "object");
assert(typeof CampaignSummary$ === "object");
assert(typeof CanDbcDefinition$ === "object");
assert(typeof CanInterface$ === "object");
assert(typeof CanSignal$ === "object");
assert(typeof CloudWatchLogDeliveryOptions$ === "object");
assert(typeof CollectionScheme$ === "object");
assert(typeof ConditionBasedCollectionScheme$ === "object");
assert(typeof ConditionBasedSignalFetchConfig$ === "object");
assert(typeof CreateCampaignRequest$ === "object");
assert(typeof CreateCampaignResponse$ === "object");
assert(typeof CreateDecoderManifestRequest$ === "object");
assert(typeof CreateDecoderManifestResponse$ === "object");
assert(typeof CreateFleetRequest$ === "object");
assert(typeof CreateFleetResponse$ === "object");
assert(typeof CreateModelManifestRequest$ === "object");
assert(typeof CreateModelManifestResponse$ === "object");
assert(typeof CreateSignalCatalogRequest$ === "object");
assert(typeof CreateSignalCatalogResponse$ === "object");
assert(typeof CreateStateTemplateRequest$ === "object");
assert(typeof CreateStateTemplateResponse$ === "object");
assert(typeof CreateVehicleError$ === "object");
assert(typeof CreateVehicleRequest$ === "object");
assert(typeof CreateVehicleRequestItem$ === "object");
assert(typeof CreateVehicleResponse$ === "object");
assert(typeof CreateVehicleResponseItem$ === "object");
assert(typeof CustomDecodingInterface$ === "object");
assert(typeof CustomDecodingSignal$ === "object");
assert(typeof CustomProperty$ === "object");
assert(typeof CustomStruct$ === "object");
assert(typeof DataDestinationConfig$ === "object");
assert(typeof DataPartition$ === "object");
assert(typeof DataPartitionStorageOptions$ === "object");
assert(typeof DataPartitionUploadOptions$ === "object");
assert(typeof DecoderManifestSummary$ === "object");
assert(typeof DeleteCampaignRequest$ === "object");
assert(typeof DeleteCampaignResponse$ === "object");
assert(typeof DeleteDecoderManifestRequest$ === "object");
assert(typeof DeleteDecoderManifestResponse$ === "object");
assert(typeof DeleteFleetRequest$ === "object");
assert(typeof DeleteFleetResponse$ === "object");
assert(typeof DeleteModelManifestRequest$ === "object");
assert(typeof DeleteModelManifestResponse$ === "object");
assert(typeof DeleteSignalCatalogRequest$ === "object");
assert(typeof DeleteSignalCatalogResponse$ === "object");
assert(typeof DeleteStateTemplateRequest$ === "object");
assert(typeof DeleteStateTemplateResponse$ === "object");
assert(typeof DeleteVehicleRequest$ === "object");
assert(typeof DeleteVehicleResponse$ === "object");
assert(typeof DisassociateVehicleFleetRequest$ === "object");
assert(typeof DisassociateVehicleFleetResponse$ === "object");
assert(typeof FleetSummary$ === "object");
assert(typeof FormattedVss$ === "object");
assert(typeof GetCampaignRequest$ === "object");
assert(typeof GetCampaignResponse$ === "object");
assert(typeof GetDecoderManifestRequest$ === "object");
assert(typeof GetDecoderManifestResponse$ === "object");
assert(typeof GetEncryptionConfigurationRequest$ === "object");
assert(typeof GetEncryptionConfigurationResponse$ === "object");
assert(typeof GetFleetRequest$ === "object");
assert(typeof GetFleetResponse$ === "object");
assert(typeof GetLoggingOptionsRequest$ === "object");
assert(typeof GetLoggingOptionsResponse$ === "object");
assert(typeof GetModelManifestRequest$ === "object");
assert(typeof GetModelManifestResponse$ === "object");
assert(typeof GetRegisterAccountStatusRequest$ === "object");
assert(typeof GetRegisterAccountStatusResponse$ === "object");
assert(typeof GetSignalCatalogRequest$ === "object");
assert(typeof GetSignalCatalogResponse$ === "object");
assert(typeof GetStateTemplateRequest$ === "object");
assert(typeof GetStateTemplateResponse$ === "object");
assert(typeof GetVehicleRequest$ === "object");
assert(typeof GetVehicleResponse$ === "object");
assert(typeof GetVehicleStatusRequest$ === "object");
assert(typeof GetVehicleStatusResponse$ === "object");
assert(typeof IamRegistrationResponse$ === "object");
assert(typeof IamResources$ === "object");
assert(typeof ImportDecoderManifestRequest$ === "object");
assert(typeof ImportDecoderManifestResponse$ === "object");
assert(typeof ImportSignalCatalogRequest$ === "object");
assert(typeof ImportSignalCatalogResponse$ === "object");
assert(typeof InvalidNetworkInterface$ === "object");
assert(typeof InvalidSignal$ === "object");
assert(typeof InvalidSignalDecoder$ === "object");
assert(typeof ListCampaignsRequest$ === "object");
assert(typeof ListCampaignsResponse$ === "object");
assert(typeof ListDecoderManifestNetworkInterfacesRequest$ === "object");
assert(typeof ListDecoderManifestNetworkInterfacesResponse$ === "object");
assert(typeof ListDecoderManifestSignalsRequest$ === "object");
assert(typeof ListDecoderManifestSignalsResponse$ === "object");
assert(typeof ListDecoderManifestsRequest$ === "object");
assert(typeof ListDecoderManifestsResponse$ === "object");
assert(typeof ListFleetsForVehicleRequest$ === "object");
assert(typeof ListFleetsForVehicleResponse$ === "object");
assert(typeof ListFleetsRequest$ === "object");
assert(typeof ListFleetsResponse$ === "object");
assert(typeof ListModelManifestNodesRequest$ === "object");
assert(typeof ListModelManifestNodesResponse$ === "object");
assert(typeof ListModelManifestsRequest$ === "object");
assert(typeof ListModelManifestsResponse$ === "object");
assert(typeof ListSignalCatalogNodesRequest$ === "object");
assert(typeof ListSignalCatalogNodesResponse$ === "object");
assert(typeof ListSignalCatalogsRequest$ === "object");
assert(typeof ListSignalCatalogsResponse$ === "object");
assert(typeof ListStateTemplatesRequest$ === "object");
assert(typeof ListStateTemplatesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVehiclesInFleetRequest$ === "object");
assert(typeof ListVehiclesInFleetResponse$ === "object");
assert(typeof ListVehiclesRequest$ === "object");
assert(typeof ListVehiclesResponse$ === "object");
assert(typeof MessageSignal$ === "object");
assert(typeof ModelManifestSummary$ === "object");
assert(typeof MqttTopicConfig$ === "object");
assert(typeof NetworkFileDefinition$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof Node$ === "object");
assert(typeof NodeCounts$ === "object");
assert(typeof ObdInterface$ === "object");
assert(typeof ObdSignal$ === "object");
assert(typeof OnChangeStateTemplateUpdateStrategy$ === "object");
assert(typeof PeriodicStateTemplateUpdateStrategy$ === "object");
assert(typeof PrimitiveMessageDefinition$ === "object");
assert(typeof PutEncryptionConfigurationRequest$ === "object");
assert(typeof PutEncryptionConfigurationResponse$ === "object");
assert(typeof PutLoggingOptionsRequest$ === "object");
assert(typeof PutLoggingOptionsResponse$ === "object");
assert(typeof RegisterAccountRequest$ === "object");
assert(typeof RegisterAccountResponse$ === "object");
assert(typeof ROS2PrimitiveMessageDefinition$ === "object");
assert(typeof S3Config$ === "object");
assert(typeof Sensor$ === "object");
assert(typeof SignalCatalogSummary$ === "object");
assert(typeof SignalDecoder$ === "object");
assert(typeof SignalFetchConfig$ === "object");
assert(typeof SignalFetchInformation$ === "object");
assert(typeof SignalInformation$ === "object");
assert(typeof StateTemplateAssociation$ === "object");
assert(typeof StateTemplateSummary$ === "object");
assert(typeof StateTemplateUpdateStrategy$ === "object");
assert(typeof StorageMaximumSize$ === "object");
assert(typeof StorageMinimumTimeToLive$ === "object");
assert(typeof StructuredMessage$ === "object");
assert(typeof StructuredMessageFieldNameAndDataTypePair$ === "object");
assert(typeof StructuredMessageListDefinition$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimeBasedCollectionScheme$ === "object");
assert(typeof TimeBasedSignalFetchConfig$ === "object");
assert(typeof TimePeriod$ === "object");
assert(typeof TimestreamConfig$ === "object");
assert(typeof TimestreamRegistrationResponse$ === "object");
assert(typeof TimestreamResources$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCampaignRequest$ === "object");
assert(typeof UpdateCampaignResponse$ === "object");
assert(typeof UpdateDecoderManifestRequest$ === "object");
assert(typeof UpdateDecoderManifestResponse$ === "object");
assert(typeof UpdateFleetRequest$ === "object");
assert(typeof UpdateFleetResponse$ === "object");
assert(typeof UpdateModelManifestRequest$ === "object");
assert(typeof UpdateModelManifestResponse$ === "object");
assert(typeof UpdateSignalCatalogRequest$ === "object");
assert(typeof UpdateSignalCatalogResponse$ === "object");
assert(typeof UpdateStateTemplateRequest$ === "object");
assert(typeof UpdateStateTemplateResponse$ === "object");
assert(typeof UpdateVehicleError$ === "object");
assert(typeof UpdateVehicleRequest$ === "object");
assert(typeof UpdateVehicleRequestItem$ === "object");
assert(typeof UpdateVehicleResponse$ === "object");
assert(typeof UpdateVehicleResponseItem$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VehicleMiddleware$ === "object");
assert(typeof VehicleStatus$ === "object");
assert(typeof VehicleSummary$ === "object");
// enums
assert(typeof CampaignStatus === "object");
assert(typeof Compression === "object");
assert(typeof DataFormat === "object");
assert(typeof DefaultForUnmappedSignalsType === "object");
assert(typeof DiagnosticsMode === "object");
assert(typeof EncryptionStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof ListResponseScope === "object");
assert(typeof LogType === "object");
assert(typeof ManifestStatus === "object");
assert(typeof NetworkInterfaceFailureReason === "object");
assert(typeof NetworkInterfaceType === "object");
assert(typeof NodeDataEncoding === "object");
assert(typeof NodeDataType === "object");
assert(typeof RegistrationStatus === "object");
assert(typeof ROS2PrimitiveType === "object");
assert(typeof SignalDecoderFailureReason === "object");
assert(typeof SignalDecoderType === "object");
assert(typeof SignalNodeType === "object");
assert(typeof SignalValueType === "object");
assert(typeof SpoolingMode === "object");
assert(typeof StorageCompressionFormat === "object");
assert(typeof StorageMaximumSizeUnit === "object");
assert(typeof StorageMinimumTimeToLiveUnit === "object");
assert(typeof StructuredMessageListType === "object");
assert(typeof TimeUnit === "object");
assert(typeof TriggerMode === "object");
assert(typeof UpdateCampaignAction === "object");
assert(typeof UpdateMode === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VehicleAssociationBehavior === "object");
assert(typeof VehicleMiddlewareProtocol === "object");
assert(typeof VehicleState === "object");
// errors
assert(AccessDeniedException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof ConflictException$ === "object");
assert(DecoderManifestValidationException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof DecoderManifestValidationException$ === "object");
assert(InternalServerException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidNodeException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof InvalidNodeException$ === "object");
assert(InvalidSignalsException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof InvalidSignalsException$ === "object");
assert(LimitExceededException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof IoTFleetWiseServiceException);
assert(typeof ValidationException$ === "object");
assert(IoTFleetWiseServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetVehicleStatus === "function");
assert(typeof paginateListCampaigns === "function");
assert(typeof paginateListDecoderManifestNetworkInterfaces === "function");
assert(typeof paginateListDecoderManifestSignals === "function");
assert(typeof paginateListDecoderManifests === "function");
assert(typeof paginateListFleets === "function");
assert(typeof paginateListFleetsForVehicle === "function");
assert(typeof paginateListModelManifestNodes === "function");
assert(typeof paginateListModelManifests === "function");
assert(typeof paginateListSignalCatalogNodes === "function");
assert(typeof paginateListSignalCatalogs === "function");
assert(typeof paginateListStateTemplates === "function");
assert(typeof paginateListVehicles === "function");
assert(typeof paginateListVehiclesInFleet === "function");
console.log(`IoTFleetWise index test passed.`);
