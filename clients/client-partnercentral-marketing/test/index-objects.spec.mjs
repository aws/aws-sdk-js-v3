import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  ActivationIssue$,
  AssetLanguage,
  AssetLinkFieldType$,
  AttemptStatus,
  BatchCreateCampaignAsset$,
  BatchCreateCampaignAssetCommand,
  BatchCreateCampaignAssetEntry$,
  BatchCreateCampaignAssetError$,
  BatchCreateCampaignAssetRequest$,
  BatchCreateCampaignAssetResponse$,
  BatchCreateCampaignAssetResult$,
  Campaign$,
  CampaignAsset$,
  CampaignAssetActivationOutcome$,
  CampaignAssetActivationStatus,
  CampaignAssetActivationTaskStatus,
  CampaignAssetCategory,
  CampaignAssetExportFailureCode,
  CampaignAssetExportFailureReason$,
  CampaignAssetExportTaskStatus,
  CampaignAssetFieldValue$,
  CampaignAssetImageSource$,
  CampaignAssetLayout$,
  CampaignAssetLayoutOption$,
  CampaignAssetState,
  CampaignAssetStateReason,
  CampaignAssetSummary$,
  CampaignAssetTemplate$,
  CampaignAssetTemplateField$,
  CampaignAssetTemplateType,
  CampaignSetting,
  CampaignSort$,
  CampaignSortName,
  CampaignState,
  CampaignSummary$,
  CampaignTemplate$,
  CampaignTemplateCollection,
  CampaignTemplateSummary$,
  Catalog,
  CompanySize,
  ConflictException,
  ConflictException$,
  CreateCampaign$,
  CreateCampaignCommand,
  CreateCampaignRequest$,
  CreateCampaignResponse$,
  CreateSocialConnectionAuthorizationUrl$,
  CreateSocialConnectionAuthorizationUrlCommand,
  CreateSocialConnectionAuthorizationUrlRequest$,
  CreateSocialConnectionAuthorizationUrlResponse$,
  CustomerSegment,
  DeactivateCampaignAsset$,
  DeactivateCampaignAssetCommand,
  DeactivateCampaignAssetRequest$,
  DeactivateCampaignAssetResponse$,
  DeleteCampaign$,
  DeleteCampaignAsset$,
  DeleteCampaignAssetCommand,
  DeleteCampaignAssetRequest$,
  DeleteCampaignCommand,
  DeleteCampaignRequest$,
  DeleteSocialConnection$,
  DeleteSocialConnectionCommand,
  DeleteSocialConnectionRequest$,
  DeliveryStatus,
  EmailTargetDetail$,
  FieldType$,
  FieldValueInput$,
  FileFormat,
  FileRef$,
  GetCampaign$,
  GetCampaignAsset$,
  GetCampaignAssetActivationTask$,
  GetCampaignAssetActivationTaskCommand,
  GetCampaignAssetActivationTaskRequest$,
  GetCampaignAssetActivationTaskResponse$,
  GetCampaignAssetCommand,
  GetCampaignAssetExportTask$,
  GetCampaignAssetExportTaskCommand,
  GetCampaignAssetExportTaskRequest$,
  GetCampaignAssetExportTaskResponse$,
  GetCampaignAssetRequest$,
  GetCampaignAssetResponse$,
  GetCampaignCommand,
  GetCampaignRequest$,
  GetCampaignResponse$,
  GetCampaignTemplate$,
  GetCampaignTemplateCommand,
  GetCampaignTemplateRequest$,
  GetCampaignTemplateResponse$,
  ImageFieldType$,
  ImageFormat,
  Industry,
  InternalServerException,
  InternalServerException$,
  LayoutFormat,
  LayoutPageType,
  LayoutPreview$,
  ListCampaignAssets$,
  ListCampaignAssetsCommand,
  ListCampaignAssetsRequest$,
  ListCampaignAssetsResponse$,
  ListCampaigns$,
  ListCampaignsCommand,
  ListCampaignsRequest$,
  ListCampaignsResponse$,
  ListSocialConnections$,
  ListSocialConnectionsCommand,
  ListSocialConnectionsRequest$,
  ListSocialConnectionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MonetaryValue$,
  paginateListCampaignAssets,
  paginateListCampaigns,
  paginateListSocialConnections,
  paginateSearchCampaignTemplates,
  PartnerBadgeDetail$,
  PartnerCentralMarketing,
  PartnerCentralMarketingClient,
  PartnerCentralMarketingServiceException,
  PartnerProfileBranding$,
  PartnerProfileField,
  Platform,
  ReferenceMaterial$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RichTextFieldType$,
  ScanStatus,
  SearchCampaignTemplates$,
  SearchCampaignTemplatesCommand,
  SearchCampaignTemplatesRequest$,
  SearchCampaignTemplatesResponse$,
  SendMode,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SocialConnectionStatus,
  SocialConnectionSummary$,
  SortOrder,
  StartCampaignAssetActivationTask$,
  StartCampaignAssetActivationTaskCommand,
  StartCampaignAssetActivationTaskRequest$,
  StartCampaignAssetActivationTaskResponse$,
  StartCampaignAssetExportTask$,
  StartCampaignAssetExportTaskCommand,
  StartCampaignAssetExportTaskRequest$,
  StartCampaignAssetExportTaskResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetAudience$,
  TemplateFieldSection,
  TemplateFieldValue$,
  TextFieldType$,
  Theme,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCampaign$,
  UpdateCampaignAsset$,
  UpdateCampaignAssetCommand,
  UpdateCampaignAssetRequest$,
  UpdateCampaignAssetResponse$,
  UpdateCampaignCommand,
  UpdateCampaignRequest$,
  UpdateCampaignResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionFieldCode,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralMarketingClient === "function");
assert(typeof PartnerCentralMarketing === "function");
// commands
assert(typeof BatchCreateCampaignAssetCommand === "function");
assert(typeof BatchCreateCampaignAsset$ === "object");
assert(typeof CreateCampaignCommand === "function");
assert(typeof CreateCampaign$ === "object");
assert(typeof CreateSocialConnectionAuthorizationUrlCommand === "function");
assert(typeof CreateSocialConnectionAuthorizationUrl$ === "object");
assert(typeof DeactivateCampaignAssetCommand === "function");
assert(typeof DeactivateCampaignAsset$ === "object");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteCampaign$ === "object");
assert(typeof DeleteCampaignAssetCommand === "function");
assert(typeof DeleteCampaignAsset$ === "object");
assert(typeof DeleteSocialConnectionCommand === "function");
assert(typeof DeleteSocialConnection$ === "object");
assert(typeof GetCampaignCommand === "function");
assert(typeof GetCampaign$ === "object");
assert(typeof GetCampaignAssetCommand === "function");
assert(typeof GetCampaignAsset$ === "object");
assert(typeof GetCampaignAssetActivationTaskCommand === "function");
assert(typeof GetCampaignAssetActivationTask$ === "object");
assert(typeof GetCampaignAssetExportTaskCommand === "function");
assert(typeof GetCampaignAssetExportTask$ === "object");
assert(typeof GetCampaignTemplateCommand === "function");
assert(typeof GetCampaignTemplate$ === "object");
assert(typeof ListCampaignAssetsCommand === "function");
assert(typeof ListCampaignAssets$ === "object");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListCampaigns$ === "object");
assert(typeof ListSocialConnectionsCommand === "function");
assert(typeof ListSocialConnections$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SearchCampaignTemplatesCommand === "function");
assert(typeof SearchCampaignTemplates$ === "object");
assert(typeof StartCampaignAssetActivationTaskCommand === "function");
assert(typeof StartCampaignAssetActivationTask$ === "object");
assert(typeof StartCampaignAssetExportTaskCommand === "function");
assert(typeof StartCampaignAssetExportTask$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCampaignCommand === "function");
assert(typeof UpdateCampaign$ === "object");
assert(typeof UpdateCampaignAssetCommand === "function");
assert(typeof UpdateCampaignAsset$ === "object");
// structural schemas
assert(typeof ActivationIssue$ === "object");
assert(typeof AssetLinkFieldType$ === "object");
assert(typeof BatchCreateCampaignAssetEntry$ === "object");
assert(typeof BatchCreateCampaignAssetError$ === "object");
assert(typeof BatchCreateCampaignAssetRequest$ === "object");
assert(typeof BatchCreateCampaignAssetResponse$ === "object");
assert(typeof BatchCreateCampaignAssetResult$ === "object");
assert(typeof Campaign$ === "object");
assert(typeof CampaignAsset$ === "object");
assert(typeof CampaignAssetActivationOutcome$ === "object");
assert(typeof CampaignAssetExportFailureReason$ === "object");
assert(typeof CampaignAssetFieldValue$ === "object");
assert(typeof CampaignAssetImageSource$ === "object");
assert(typeof CampaignAssetLayout$ === "object");
assert(typeof CampaignAssetLayoutOption$ === "object");
assert(typeof CampaignAssetSummary$ === "object");
assert(typeof CampaignAssetTemplate$ === "object");
assert(typeof CampaignAssetTemplateField$ === "object");
assert(typeof CampaignSort$ === "object");
assert(typeof CampaignSummary$ === "object");
assert(typeof CampaignTemplate$ === "object");
assert(typeof CampaignTemplateSummary$ === "object");
assert(typeof CreateCampaignRequest$ === "object");
assert(typeof CreateCampaignResponse$ === "object");
assert(typeof CreateSocialConnectionAuthorizationUrlRequest$ === "object");
assert(typeof CreateSocialConnectionAuthorizationUrlResponse$ === "object");
assert(typeof DeactivateCampaignAssetRequest$ === "object");
assert(typeof DeactivateCampaignAssetResponse$ === "object");
assert(typeof DeleteCampaignAssetRequest$ === "object");
assert(typeof DeleteCampaignRequest$ === "object");
assert(typeof DeleteSocialConnectionRequest$ === "object");
assert(typeof EmailTargetDetail$ === "object");
assert(typeof FieldType$ === "object");
assert(typeof FieldValueInput$ === "object");
assert(typeof FileRef$ === "object");
assert(typeof GetCampaignAssetActivationTaskRequest$ === "object");
assert(typeof GetCampaignAssetActivationTaskResponse$ === "object");
assert(typeof GetCampaignAssetExportTaskRequest$ === "object");
assert(typeof GetCampaignAssetExportTaskResponse$ === "object");
assert(typeof GetCampaignAssetRequest$ === "object");
assert(typeof GetCampaignAssetResponse$ === "object");
assert(typeof GetCampaignRequest$ === "object");
assert(typeof GetCampaignResponse$ === "object");
assert(typeof GetCampaignTemplateRequest$ === "object");
assert(typeof GetCampaignTemplateResponse$ === "object");
assert(typeof ImageFieldType$ === "object");
assert(typeof LayoutPreview$ === "object");
assert(typeof ListCampaignAssetsRequest$ === "object");
assert(typeof ListCampaignAssetsResponse$ === "object");
assert(typeof ListCampaignsRequest$ === "object");
assert(typeof ListCampaignsResponse$ === "object");
assert(typeof ListSocialConnectionsRequest$ === "object");
assert(typeof ListSocialConnectionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MonetaryValue$ === "object");
assert(typeof PartnerBadgeDetail$ === "object");
assert(typeof PartnerProfileBranding$ === "object");
assert(typeof ReferenceMaterial$ === "object");
assert(typeof RichTextFieldType$ === "object");
assert(typeof SearchCampaignTemplatesRequest$ === "object");
assert(typeof SearchCampaignTemplatesResponse$ === "object");
assert(typeof SocialConnectionSummary$ === "object");
assert(typeof StartCampaignAssetActivationTaskRequest$ === "object");
assert(typeof StartCampaignAssetActivationTaskResponse$ === "object");
assert(typeof StartCampaignAssetExportTaskRequest$ === "object");
assert(typeof StartCampaignAssetExportTaskResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetAudience$ === "object");
assert(typeof TemplateFieldValue$ === "object");
assert(typeof TextFieldType$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCampaignAssetRequest$ === "object");
assert(typeof UpdateCampaignAssetResponse$ === "object");
assert(typeof UpdateCampaignRequest$ === "object");
assert(typeof UpdateCampaignResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof AssetLanguage === "object");
assert(typeof AttemptStatus === "object");
assert(typeof CampaignAssetActivationStatus === "object");
assert(typeof CampaignAssetActivationTaskStatus === "object");
assert(typeof CampaignAssetCategory === "object");
assert(typeof CampaignAssetExportFailureCode === "object");
assert(typeof CampaignAssetExportTaskStatus === "object");
assert(typeof CampaignAssetState === "object");
assert(typeof CampaignAssetStateReason === "object");
assert(typeof CampaignAssetTemplateType === "object");
assert(typeof CampaignSetting === "object");
assert(typeof CampaignSortName === "object");
assert(typeof CampaignState === "object");
assert(typeof CampaignTemplateCollection === "object");
assert(typeof Catalog === "object");
assert(typeof CompanySize === "object");
assert(typeof CustomerSegment === "object");
assert(typeof DeliveryStatus === "object");
assert(typeof FileFormat === "object");
assert(typeof ImageFormat === "object");
assert(typeof Industry === "object");
assert(typeof LayoutFormat === "object");
assert(typeof LayoutPageType === "object");
assert(typeof PartnerProfileField === "object");
assert(typeof Platform === "object");
assert(typeof ScanStatus === "object");
assert(typeof SendMode === "object");
assert(typeof SocialConnectionStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof TemplateFieldSection === "object");
assert(typeof Theme === "object");
assert(typeof ValidationExceptionFieldCode === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PartnerCentralMarketingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PartnerCentralMarketingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PartnerCentralMarketingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PartnerCentralMarketingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralMarketingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PartnerCentralMarketingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PartnerCentralMarketingServiceException);
assert(typeof ValidationException$ === "object");
assert(PartnerCentralMarketingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCampaignAssets === "function");
assert(typeof paginateListCampaigns === "function");
assert(typeof paginateListSocialConnections === "function");
assert(typeof paginateSearchCampaignTemplates === "function");
console.log(`PartnerCentralMarketing index test passed.`);
