import {
  AccessDeniedException,
  AssociateVehicleFleetCommand,
  BatchCreateVehicleCommand,
  BatchUpdateVehicleCommand,
  CampaignStatus,
  Compression,
  ConflictException,
  CreateCampaignCommand,
  CreateDecoderManifestCommand,
  CreateFleetCommand,
  CreateModelManifestCommand,
  CreateSignalCatalogCommand,
  CreateStateTemplateCommand,
  CreateVehicleCommand,
  DataFormat,
  DecoderManifestValidationException,
  DefaultForUnmappedSignalsType,
  DeleteCampaignCommand,
  DeleteDecoderManifestCommand,
  DeleteFleetCommand,
  DeleteModelManifestCommand,
  DeleteSignalCatalogCommand,
  DeleteStateTemplateCommand,
  DeleteVehicleCommand,
  DiagnosticsMode,
  DisassociateVehicleFleetCommand,
  EncryptionStatus,
  EncryptionType,
  GetCampaignCommand,
  GetDecoderManifestCommand,
  GetEncryptionConfigurationCommand,
  GetFleetCommand,
  GetLoggingOptionsCommand,
  GetModelManifestCommand,
  GetRegisterAccountStatusCommand,
  GetSignalCatalogCommand,
  GetStateTemplateCommand,
  GetVehicleCommand,
  GetVehicleStatusCommand,
  ImportDecoderManifestCommand,
  ImportSignalCatalogCommand,
  InternalServerException,
  InvalidNodeException,
  InvalidSignalsException,
  IoTFleetWise,
  IoTFleetWiseClient,
  IoTFleetWiseServiceException,
  LimitExceededException,
  ListCampaignsCommand,
  ListDecoderManifestNetworkInterfacesCommand,
  ListDecoderManifestSignalsCommand,
  ListDecoderManifestsCommand,
  ListFleetsCommand,
  ListFleetsForVehicleCommand,
  ListModelManifestNodesCommand,
  ListModelManifestsCommand,
  ListResponseScope,
  ListSignalCatalogNodesCommand,
  ListSignalCatalogsCommand,
  ListStateTemplatesCommand,
  ListTagsForResourceCommand,
  ListVehiclesCommand,
  ListVehiclesInFleetCommand,
  LogType,
  ManifestStatus,
  NetworkInterfaceFailureReason,
  NetworkInterfaceType,
  NodeDataEncoding,
  NodeDataType,
  PutEncryptionConfigurationCommand,
  PutLoggingOptionsCommand,
  ROS2PrimitiveType,
  RegisterAccountCommand,
  RegistrationStatus,
  ResourceNotFoundException,
  SignalDecoderFailureReason,
  SignalDecoderType,
  SignalNodeType,
  SignalValueType,
  SpoolingMode,
  StorageCompressionFormat,
  StorageMaximumSizeUnit,
  StorageMinimumTimeToLiveUnit,
  StructuredMessageListType,
  TagResourceCommand,
  ThrottlingException,
  TimeUnit,
  TriggerMode,
  UntagResourceCommand,
  UpdateCampaignAction,
  UpdateCampaignCommand,
  UpdateDecoderManifestCommand,
  UpdateFleetCommand,
  UpdateMode,
  UpdateModelManifestCommand,
  UpdateSignalCatalogCommand,
  UpdateStateTemplateCommand,
  UpdateVehicleCommand,
  ValidationException,
  ValidationExceptionReason,
  VehicleAssociationBehavior,
  VehicleMiddlewareProtocol,
  VehicleState,
  paginateGetVehicleStatus,
  paginateListCampaigns,
  paginateListDecoderManifestNetworkInterfaces,
  paginateListDecoderManifestSignals,
  paginateListDecoderManifests,
  paginateListFleets,
  paginateListFleetsForVehicle,
  paginateListModelManifestNodes,
  paginateListModelManifests,
  paginateListSignalCatalogNodes,
  paginateListSignalCatalogs,
  paginateListStateTemplates,
  paginateListVehicles,
  paginateListVehiclesInFleet,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTFleetWiseClient === "function");
assert(typeof IoTFleetWise === "function");
// commands
assert(typeof AssociateVehicleFleetCommand === "function");
assert(typeof BatchCreateVehicleCommand === "function");
assert(typeof BatchUpdateVehicleCommand === "function");
assert(typeof CreateCampaignCommand === "function");
assert(typeof CreateDecoderManifestCommand === "function");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateModelManifestCommand === "function");
assert(typeof CreateSignalCatalogCommand === "function");
assert(typeof CreateStateTemplateCommand === "function");
assert(typeof CreateVehicleCommand === "function");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteDecoderManifestCommand === "function");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteModelManifestCommand === "function");
assert(typeof DeleteSignalCatalogCommand === "function");
assert(typeof DeleteStateTemplateCommand === "function");
assert(typeof DeleteVehicleCommand === "function");
assert(typeof DisassociateVehicleFleetCommand === "function");
assert(typeof GetCampaignCommand === "function");
assert(typeof GetDecoderManifestCommand === "function");
assert(typeof GetEncryptionConfigurationCommand === "function");
assert(typeof GetFleetCommand === "function");
assert(typeof GetLoggingOptionsCommand === "function");
assert(typeof GetModelManifestCommand === "function");
assert(typeof GetRegisterAccountStatusCommand === "function");
assert(typeof GetSignalCatalogCommand === "function");
assert(typeof GetStateTemplateCommand === "function");
assert(typeof GetVehicleCommand === "function");
assert(typeof GetVehicleStatusCommand === "function");
assert(typeof ImportDecoderManifestCommand === "function");
assert(typeof ImportSignalCatalogCommand === "function");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListDecoderManifestNetworkInterfacesCommand === "function");
assert(typeof ListDecoderManifestsCommand === "function");
assert(typeof ListDecoderManifestSignalsCommand === "function");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListFleetsForVehicleCommand === "function");
assert(typeof ListModelManifestNodesCommand === "function");
assert(typeof ListModelManifestsCommand === "function");
assert(typeof ListSignalCatalogNodesCommand === "function");
assert(typeof ListSignalCatalogsCommand === "function");
assert(typeof ListStateTemplatesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVehiclesCommand === "function");
assert(typeof ListVehiclesInFleetCommand === "function");
assert(typeof PutEncryptionConfigurationCommand === "function");
assert(typeof PutLoggingOptionsCommand === "function");
assert(typeof RegisterAccountCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCampaignCommand === "function");
assert(typeof UpdateDecoderManifestCommand === "function");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateModelManifestCommand === "function");
assert(typeof UpdateSignalCatalogCommand === "function");
assert(typeof UpdateStateTemplateCommand === "function");
assert(typeof UpdateVehicleCommand === "function");
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
assert(ConflictException.prototype instanceof IoTFleetWiseServiceException);
assert(DecoderManifestValidationException.prototype instanceof IoTFleetWiseServiceException);
assert(InternalServerException.prototype instanceof IoTFleetWiseServiceException);
assert(InvalidNodeException.prototype instanceof IoTFleetWiseServiceException);
assert(InvalidSignalsException.prototype instanceof IoTFleetWiseServiceException);
assert(LimitExceededException.prototype instanceof IoTFleetWiseServiceException);
assert(ResourceNotFoundException.prototype instanceof IoTFleetWiseServiceException);
assert(ThrottlingException.prototype instanceof IoTFleetWiseServiceException);
assert(ValidationException.prototype instanceof IoTFleetWiseServiceException);
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
