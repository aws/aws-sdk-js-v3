import {
  AcceptDataGrant$,
  AcceptDataGrantCommand,
  AcceptDataGrantRequest$,
  AcceptDataGrantResponse$,
  AcceptanceStateFilterValue,
  AccessDeniedException,
  AccessDeniedException$,
  Action$,
  ApiGatewayApiAsset$,
  AssetDestinationEntry$,
  AssetDetails$,
  AssetEntry$,
  AssetSourceEntry$,
  AssetType,
  AutoExportRevisionDestinationEntry$,
  AutoExportRevisionToS3RequestDetails$,
  CancelJob$,
  CancelJobCommand,
  CancelJobRequest$,
  Code,
  ConflictException,
  ConflictException$,
  CreateDataGrant$,
  CreateDataGrantCommand,
  CreateDataGrantRequest$,
  CreateDataGrantResponse$,
  CreateDataSet$,
  CreateDataSetCommand,
  CreateDataSetRequest$,
  CreateDataSetResponse$,
  CreateEventAction$,
  CreateEventActionCommand,
  CreateEventActionRequest$,
  CreateEventActionResponse$,
  CreateJob$,
  CreateJobCommand,
  CreateJobRequest$,
  CreateJobResponse$,
  CreateRevision$,
  CreateRevisionCommand,
  CreateRevisionRequest$,
  CreateRevisionResponse$,
  CreateS3DataAccessFromS3BucketRequestDetails$,
  CreateS3DataAccessFromS3BucketResponseDetails$,
  DataExchange,
  DataExchangeClient,
  DataExchangeServiceException,
  DataGrantAcceptanceState,
  DataGrantSummaryEntry$,
  DataSetEntry$,
  DataUpdateRequestDetails$,
  DatabaseLFTagPolicy$,
  DatabaseLFTagPolicyAndPermissions$,
  DatabaseLFTagPolicyPermission,
  DeleteAsset$,
  DeleteAssetCommand,
  DeleteAssetRequest$,
  DeleteDataGrant$,
  DeleteDataGrantCommand,
  DeleteDataGrantRequest$,
  DeleteDataSet$,
  DeleteDataSetCommand,
  DeleteDataSetRequest$,
  DeleteEventAction$,
  DeleteEventActionCommand,
  DeleteEventActionRequest$,
  DeleteRevision$,
  DeleteRevisionCommand,
  DeleteRevisionRequest$,
  DeprecationRequestDetails$,
  Details$,
  Event$,
  EventActionEntry$,
  ExceptionCause,
  ExportAssetToSignedUrlRequestDetails$,
  ExportAssetToSignedUrlResponseDetails$,
  ExportAssetsToS3RequestDetails$,
  ExportAssetsToS3ResponseDetails$,
  ExportRevisionsToS3RequestDetails$,
  ExportRevisionsToS3ResponseDetails$,
  ExportServerSideEncryption$,
  GetAsset$,
  GetAssetCommand,
  GetAssetRequest$,
  GetAssetResponse$,
  GetDataGrant$,
  GetDataGrantCommand,
  GetDataGrantRequest$,
  GetDataGrantResponse$,
  GetDataSet$,
  GetDataSetCommand,
  GetDataSetRequest$,
  GetDataSetResponse$,
  GetEventAction$,
  GetEventActionCommand,
  GetEventActionRequest$,
  GetEventActionResponse$,
  GetJob$,
  GetJobCommand,
  GetJobRequest$,
  GetJobResponse$,
  GetReceivedDataGrant$,
  GetReceivedDataGrantCommand,
  GetReceivedDataGrantRequest$,
  GetReceivedDataGrantResponse$,
  GetRevision$,
  GetRevisionCommand,
  GetRevisionRequest$,
  GetRevisionResponse$,
  GrantDistributionScope,
  ImportAssetFromApiGatewayApiRequestDetails$,
  ImportAssetFromApiGatewayApiResponseDetails$,
  ImportAssetFromSignedUrlJobErrorDetails$,
  ImportAssetFromSignedUrlRequestDetails$,
  ImportAssetFromSignedUrlResponseDetails$,
  ImportAssetsFromLakeFormationTagPolicyRequestDetails$,
  ImportAssetsFromLakeFormationTagPolicyResponseDetails$,
  ImportAssetsFromRedshiftDataSharesRequestDetails$,
  ImportAssetsFromRedshiftDataSharesResponseDetails$,
  ImportAssetsFromS3RequestDetails$,
  ImportAssetsFromS3ResponseDetails$,
  InternalServerException,
  InternalServerException$,
  JobEntry$,
  JobError$,
  JobErrorLimitName,
  JobErrorResourceTypes,
  KmsKeyToGrant$,
  LFPermission,
  LFResourceDetails$,
  LFResourceType,
  LFTag$,
  LFTagPolicyDetails$,
  LakeFormationDataPermissionAsset$,
  LakeFormationDataPermissionDetails$,
  LakeFormationDataPermissionType,
  LakeFormationTagPolicyDetails$,
  LimitName,
  ListDataGrants$,
  ListDataGrantsCommand,
  ListDataGrantsRequest$,
  ListDataGrantsResponse$,
  ListDataSetRevisions$,
  ListDataSetRevisionsCommand,
  ListDataSetRevisionsRequest$,
  ListDataSetRevisionsResponse$,
  ListDataSets$,
  ListDataSetsCommand,
  ListDataSetsRequest$,
  ListDataSetsResponse$,
  ListEventActions$,
  ListEventActionsCommand,
  ListEventActionsRequest$,
  ListEventActionsResponse$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResponse$,
  ListReceivedDataGrants$,
  ListReceivedDataGrantsCommand,
  ListReceivedDataGrantsRequest$,
  ListReceivedDataGrantsResponse$,
  ListRevisionAssets$,
  ListRevisionAssetsCommand,
  ListRevisionAssetsRequest$,
  ListRevisionAssetsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotificationDetails$,
  NotificationType,
  Origin,
  OriginDetails$,
  ProtocolType,
  ReceivedDataGrantSummariesEntry$,
  RedshiftDataShareAsset$,
  RedshiftDataShareAssetSourceEntry$,
  RedshiftDataShareDetails$,
  RequestDetails$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ResponseDetails$,
  RevisionDestinationEntry$,
  RevisionEntry$,
  RevisionPublished$,
  RevokeRevision$,
  RevokeRevisionCommand,
  RevokeRevisionRequest$,
  RevokeRevisionResponse$,
  S3DataAccessAsset$,
  S3DataAccessAssetSourceEntry$,
  S3DataAccessDetails$,
  S3SnapshotAsset$,
  SchemaChangeDetails$,
  SchemaChangeRequestDetails$,
  SchemaChangeType,
  ScopeDetails$,
  SendApiAsset$,
  SendApiAssetCommand,
  SendApiAssetRequest$,
  SendApiAssetResponse$,
  SendDataSetNotification$,
  SendDataSetNotificationCommand,
  SendDataSetNotificationRequest$,
  SendDataSetNotificationResponse$,
  ServerSideEncryptionTypes,
  ServiceLimitExceededException,
  ServiceLimitExceededException$,
  StartJob$,
  StartJobCommand,
  StartJobRequest$,
  StartJobResponse$,
  State,
  TableLFTagPolicy$,
  TableLFTagPolicyAndPermissions$,
  TableTagPolicyLFPermission,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAsset$,
  UpdateAssetCommand,
  UpdateAssetRequest$,
  UpdateAssetResponse$,
  UpdateDataSet$,
  UpdateDataSetCommand,
  UpdateDataSetRequest$,
  UpdateDataSetResponse$,
  UpdateEventAction$,
  UpdateEventActionCommand,
  UpdateEventActionRequest$,
  UpdateEventActionResponse$,
  UpdateRevision$,
  UpdateRevisionCommand,
  UpdateRevisionRequest$,
  UpdateRevisionResponse$,
  ValidationException,
  ValidationException$,
  paginateListDataGrants,
  paginateListDataSetRevisions,
  paginateListDataSets,
  paginateListEventActions,
  paginateListJobs,
  paginateListReceivedDataGrants,
  paginateListRevisionAssets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DataExchangeClient === "function");
assert(typeof DataExchange === "function");
// commands
assert(typeof AcceptDataGrantCommand === "function");
assert(typeof AcceptDataGrant$ === "object");
assert(typeof CancelJobCommand === "function");
assert(typeof CancelJob$ === "object");
assert(typeof CreateDataGrantCommand === "function");
assert(typeof CreateDataGrant$ === "object");
assert(typeof CreateDataSetCommand === "function");
assert(typeof CreateDataSet$ === "object");
assert(typeof CreateEventActionCommand === "function");
assert(typeof CreateEventAction$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreateRevisionCommand === "function");
assert(typeof CreateRevision$ === "object");
assert(typeof DeleteAssetCommand === "function");
assert(typeof DeleteAsset$ === "object");
assert(typeof DeleteDataGrantCommand === "function");
assert(typeof DeleteDataGrant$ === "object");
assert(typeof DeleteDataSetCommand === "function");
assert(typeof DeleteDataSet$ === "object");
assert(typeof DeleteEventActionCommand === "function");
assert(typeof DeleteEventAction$ === "object");
assert(typeof DeleteRevisionCommand === "function");
assert(typeof DeleteRevision$ === "object");
assert(typeof GetAssetCommand === "function");
assert(typeof GetAsset$ === "object");
assert(typeof GetDataGrantCommand === "function");
assert(typeof GetDataGrant$ === "object");
assert(typeof GetDataSetCommand === "function");
assert(typeof GetDataSet$ === "object");
assert(typeof GetEventActionCommand === "function");
assert(typeof GetEventAction$ === "object");
assert(typeof GetJobCommand === "function");
assert(typeof GetJob$ === "object");
assert(typeof GetReceivedDataGrantCommand === "function");
assert(typeof GetReceivedDataGrant$ === "object");
assert(typeof GetRevisionCommand === "function");
assert(typeof GetRevision$ === "object");
assert(typeof ListDataGrantsCommand === "function");
assert(typeof ListDataGrants$ === "object");
assert(typeof ListDataSetRevisionsCommand === "function");
assert(typeof ListDataSetRevisions$ === "object");
assert(typeof ListDataSetsCommand === "function");
assert(typeof ListDataSets$ === "object");
assert(typeof ListEventActionsCommand === "function");
assert(typeof ListEventActions$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListReceivedDataGrantsCommand === "function");
assert(typeof ListReceivedDataGrants$ === "object");
assert(typeof ListRevisionAssetsCommand === "function");
assert(typeof ListRevisionAssets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RevokeRevisionCommand === "function");
assert(typeof RevokeRevision$ === "object");
assert(typeof SendApiAssetCommand === "function");
assert(typeof SendApiAsset$ === "object");
assert(typeof SendDataSetNotificationCommand === "function");
assert(typeof SendDataSetNotification$ === "object");
assert(typeof StartJobCommand === "function");
assert(typeof StartJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAssetCommand === "function");
assert(typeof UpdateAsset$ === "object");
assert(typeof UpdateDataSetCommand === "function");
assert(typeof UpdateDataSet$ === "object");
assert(typeof UpdateEventActionCommand === "function");
assert(typeof UpdateEventAction$ === "object");
assert(typeof UpdateRevisionCommand === "function");
assert(typeof UpdateRevision$ === "object");
// structural schemas
assert(typeof AcceptDataGrantRequest$ === "object");
assert(typeof AcceptDataGrantResponse$ === "object");
assert(typeof Action$ === "object");
assert(typeof ApiGatewayApiAsset$ === "object");
assert(typeof AssetDestinationEntry$ === "object");
assert(typeof AssetDetails$ === "object");
assert(typeof AssetEntry$ === "object");
assert(typeof AssetSourceEntry$ === "object");
assert(typeof AutoExportRevisionDestinationEntry$ === "object");
assert(typeof AutoExportRevisionToS3RequestDetails$ === "object");
assert(typeof CancelJobRequest$ === "object");
assert(typeof CreateDataGrantRequest$ === "object");
assert(typeof CreateDataGrantResponse$ === "object");
assert(typeof CreateDataSetRequest$ === "object");
assert(typeof CreateDataSetResponse$ === "object");
assert(typeof CreateEventActionRequest$ === "object");
assert(typeof CreateEventActionResponse$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResponse$ === "object");
assert(typeof CreateRevisionRequest$ === "object");
assert(typeof CreateRevisionResponse$ === "object");
assert(typeof CreateS3DataAccessFromS3BucketRequestDetails$ === "object");
assert(typeof CreateS3DataAccessFromS3BucketResponseDetails$ === "object");
assert(typeof DatabaseLFTagPolicy$ === "object");
assert(typeof DatabaseLFTagPolicyAndPermissions$ === "object");
assert(typeof DataGrantSummaryEntry$ === "object");
assert(typeof DataSetEntry$ === "object");
assert(typeof DataUpdateRequestDetails$ === "object");
assert(typeof DeleteAssetRequest$ === "object");
assert(typeof DeleteDataGrantRequest$ === "object");
assert(typeof DeleteDataSetRequest$ === "object");
assert(typeof DeleteEventActionRequest$ === "object");
assert(typeof DeleteRevisionRequest$ === "object");
assert(typeof DeprecationRequestDetails$ === "object");
assert(typeof Details$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventActionEntry$ === "object");
assert(typeof ExportAssetsToS3RequestDetails$ === "object");
assert(typeof ExportAssetsToS3ResponseDetails$ === "object");
assert(typeof ExportAssetToSignedUrlRequestDetails$ === "object");
assert(typeof ExportAssetToSignedUrlResponseDetails$ === "object");
assert(typeof ExportRevisionsToS3RequestDetails$ === "object");
assert(typeof ExportRevisionsToS3ResponseDetails$ === "object");
assert(typeof ExportServerSideEncryption$ === "object");
assert(typeof GetAssetRequest$ === "object");
assert(typeof GetAssetResponse$ === "object");
assert(typeof GetDataGrantRequest$ === "object");
assert(typeof GetDataGrantResponse$ === "object");
assert(typeof GetDataSetRequest$ === "object");
assert(typeof GetDataSetResponse$ === "object");
assert(typeof GetEventActionRequest$ === "object");
assert(typeof GetEventActionResponse$ === "object");
assert(typeof GetJobRequest$ === "object");
assert(typeof GetJobResponse$ === "object");
assert(typeof GetReceivedDataGrantRequest$ === "object");
assert(typeof GetReceivedDataGrantResponse$ === "object");
assert(typeof GetRevisionRequest$ === "object");
assert(typeof GetRevisionResponse$ === "object");
assert(typeof ImportAssetFromApiGatewayApiRequestDetails$ === "object");
assert(typeof ImportAssetFromApiGatewayApiResponseDetails$ === "object");
assert(typeof ImportAssetFromSignedUrlJobErrorDetails$ === "object");
assert(typeof ImportAssetFromSignedUrlRequestDetails$ === "object");
assert(typeof ImportAssetFromSignedUrlResponseDetails$ === "object");
assert(typeof ImportAssetsFromLakeFormationTagPolicyRequestDetails$ === "object");
assert(typeof ImportAssetsFromLakeFormationTagPolicyResponseDetails$ === "object");
assert(typeof ImportAssetsFromRedshiftDataSharesRequestDetails$ === "object");
assert(typeof ImportAssetsFromRedshiftDataSharesResponseDetails$ === "object");
assert(typeof ImportAssetsFromS3RequestDetails$ === "object");
assert(typeof ImportAssetsFromS3ResponseDetails$ === "object");
assert(typeof JobEntry$ === "object");
assert(typeof JobError$ === "object");
assert(typeof KmsKeyToGrant$ === "object");
assert(typeof LakeFormationDataPermissionAsset$ === "object");
assert(typeof LakeFormationDataPermissionDetails$ === "object");
assert(typeof LakeFormationTagPolicyDetails$ === "object");
assert(typeof LFResourceDetails$ === "object");
assert(typeof LFTag$ === "object");
assert(typeof LFTagPolicyDetails$ === "object");
assert(typeof ListDataGrantsRequest$ === "object");
assert(typeof ListDataGrantsResponse$ === "object");
assert(typeof ListDataSetRevisionsRequest$ === "object");
assert(typeof ListDataSetRevisionsResponse$ === "object");
assert(typeof ListDataSetsRequest$ === "object");
assert(typeof ListDataSetsResponse$ === "object");
assert(typeof ListEventActionsRequest$ === "object");
assert(typeof ListEventActionsResponse$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResponse$ === "object");
assert(typeof ListReceivedDataGrantsRequest$ === "object");
assert(typeof ListReceivedDataGrantsResponse$ === "object");
assert(typeof ListRevisionAssetsRequest$ === "object");
assert(typeof ListRevisionAssetsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NotificationDetails$ === "object");
assert(typeof OriginDetails$ === "object");
assert(typeof ReceivedDataGrantSummariesEntry$ === "object");
assert(typeof RedshiftDataShareAsset$ === "object");
assert(typeof RedshiftDataShareAssetSourceEntry$ === "object");
assert(typeof RedshiftDataShareDetails$ === "object");
assert(typeof RequestDetails$ === "object");
assert(typeof ResponseDetails$ === "object");
assert(typeof RevisionDestinationEntry$ === "object");
assert(typeof RevisionEntry$ === "object");
assert(typeof RevisionPublished$ === "object");
assert(typeof RevokeRevisionRequest$ === "object");
assert(typeof RevokeRevisionResponse$ === "object");
assert(typeof S3DataAccessAsset$ === "object");
assert(typeof S3DataAccessAssetSourceEntry$ === "object");
assert(typeof S3DataAccessDetails$ === "object");
assert(typeof S3SnapshotAsset$ === "object");
assert(typeof SchemaChangeDetails$ === "object");
assert(typeof SchemaChangeRequestDetails$ === "object");
assert(typeof ScopeDetails$ === "object");
assert(typeof SendApiAssetRequest$ === "object");
assert(typeof SendApiAssetResponse$ === "object");
assert(typeof SendDataSetNotificationRequest$ === "object");
assert(typeof SendDataSetNotificationResponse$ === "object");
assert(typeof StartJobRequest$ === "object");
assert(typeof StartJobResponse$ === "object");
assert(typeof TableLFTagPolicy$ === "object");
assert(typeof TableLFTagPolicyAndPermissions$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAssetRequest$ === "object");
assert(typeof UpdateAssetResponse$ === "object");
assert(typeof UpdateDataSetRequest$ === "object");
assert(typeof UpdateDataSetResponse$ === "object");
assert(typeof UpdateEventActionRequest$ === "object");
assert(typeof UpdateEventActionResponse$ === "object");
assert(typeof UpdateRevisionRequest$ === "object");
assert(typeof UpdateRevisionResponse$ === "object");
// enums
assert(typeof AcceptanceStateFilterValue === "object");
assert(typeof AssetType === "object");
assert(typeof Code === "object");
assert(typeof DatabaseLFTagPolicyPermission === "object");
assert(typeof DataGrantAcceptanceState === "object");
assert(typeof ExceptionCause === "object");
assert(typeof GrantDistributionScope === "object");
assert(typeof JobErrorLimitName === "object");
assert(typeof JobErrorResourceTypes === "object");
assert(typeof LakeFormationDataPermissionType === "object");
assert(typeof LFPermission === "object");
assert(typeof LFResourceType === "object");
assert(typeof LimitName === "object");
assert(typeof NotificationType === "object");
assert(typeof Origin === "object");
assert(typeof ProtocolType === "object");
assert(typeof ResourceType === "object");
assert(typeof SchemaChangeType === "object");
assert(typeof ServerSideEncryptionTypes === "object");
assert(typeof State === "object");
assert(typeof TableTagPolicyLFPermission === "object");
assert(typeof Type === "object");
// errors
assert(AccessDeniedException.prototype instanceof DataExchangeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DataExchangeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DataExchangeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DataExchangeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceLimitExceededException.prototype instanceof DataExchangeServiceException);
assert(typeof ServiceLimitExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DataExchangeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof DataExchangeServiceException);
assert(typeof ValidationException$ === "object");
assert(DataExchangeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDataGrants === "function");
assert(typeof paginateListDataSetRevisions === "function");
assert(typeof paginateListDataSets === "function");
assert(typeof paginateListEventActions === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListReceivedDataGrants === "function");
assert(typeof paginateListRevisionAssets === "function");
console.log(`DataExchange index test passed.`);
