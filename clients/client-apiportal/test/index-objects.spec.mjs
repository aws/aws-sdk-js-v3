import {
  AccessDeniedException,
  AccessDeniedException$,
  ACMManaged$,
  ApiId$,
  ApiInventoryFilters$,
  ApiInventoryItem$,
  ApiInventoryItemDetail$,
  ApiPageDisplayContent$,
  ApiPageDisplayContentResponse$,
  APIPortal,
  APIPortalClient,
  APIPortalServiceException,
  ApiSelectionConfiguration$,
  ApiSelectionMode,
  ApiSignature$,
  AssociateManagedApis$,
  AssociateManagedApisCommand,
  AssociateManagedApisRequest$,
  AssociateManagedApisResponse$,
  Authorization$,
  AuthorizationConfig$,
  BadRequestException,
  BadRequestException$,
  Classification,
  CognitoConfig$,
  Confidence,
  ConflictException,
  ConflictException$,
  CreateManagedApi$,
  CreateManagedApiCommand,
  CreateManagedApiRequest$,
  CreateManagedApiResponse$,
  CreatePortal$,
  CreatePortalCommand,
  CreatePortalPreview$,
  CreatePortalPreviewCommand,
  CreatePortalPreviewRequest$,
  CreatePortalRequest$,
  CreatePortalResponse$,
  CreateProduct$,
  CreateProductApiPage$,
  CreateProductApiPageCommand,
  CreateProductApiPageRequest$,
  CreateProductApiPageResponse$,
  CreateProductCommand,
  CreateProductPage$,
  CreateProductPageCommand,
  CreateProductPageRequest$,
  CreateProductPageResponse$,
  CreateProductRequest$,
  CreateProductResponse$,
  CustomColors$,
  DeleteDiscoveryConfiguration$,
  DeleteDiscoveryConfigurationCommand,
  DeleteDiscoveryConfigurationRequest$,
  DeleteManagedApi$,
  DeleteManagedApiCommand,
  DeleteManagedApiRequest$,
  DeleteManagedApiResponse$,
  DeleteOrganizationDiscoveryConfiguration$,
  DeleteOrganizationDiscoveryConfigurationCommand,
  DeleteOrganizationDiscoveryConfigurationRequest$,
  DeletePortal$,
  DeletePortalCommand,
  DeletePortalRequest$,
  DeleteProduct$,
  DeleteProductApiPage$,
  DeleteProductApiPageCommand,
  DeleteProductApiPageRequest$,
  DeleteProductCommand,
  DeleteProductPage$,
  DeleteProductPageCommand,
  DeleteProductPageRequest$,
  DeleteProductRequest$,
  DeleteProductSharingPolicy$,
  DeleteProductSharingPolicyCommand,
  DeleteProductSharingPolicyRequest$,
  DesiredPublishStatus,
  DisassociateManagedApis$,
  DisassociateManagedApisCommand,
  DisassociateManagedApisRequest$,
  DisassociateManagedApisResponse$,
  DiscoveryConfigurationData$,
  DiscoveryConfigurationStatus,
  DiscoveryExclusionFilters$,
  DiscoveryFailureReason,
  DiscoveryFeature,
  DiscoveryInclusionFilters$,
  DiscoverySource,
  DiscoveryStatus$,
  DiscoveryStatusValue,
  DisplayContent$,
  DisplayContentOverrides$,
  DisplayOrder$,
  EndpointConfigurationRequest$,
  EndpointConfigurationResponse$,
  EventStatus,
  EventType,
  FailedItemErrorCode,
  FailedManagedApiItem$,
  FindingReason,
  FineGrainedAccessControl,
  GetApiInventoryItem$,
  GetApiInventoryItemCommand,
  GetApiInventoryItemRequest$,
  GetApiInventoryItemResponse$,
  GetDiscoveryConfiguration$,
  GetDiscoveryConfigurationCommand,
  GetDiscoveryConfigurationRequest$,
  GetDiscoveryConfigurationResponse$,
  GetManagedApi$,
  GetManagedApiCommand,
  GetManagedApiRequest$,
  GetManagedApiResponse$,
  GetOrganizationDiscoveryConfiguration$,
  GetOrganizationDiscoveryConfigurationCommand,
  GetOrganizationDiscoveryConfigurationRequest$,
  GetOrganizationDiscoveryConfigurationResponse$,
  GetPortal$,
  GetPortalCommand,
  GetPortalRequest$,
  GetPortalResponse$,
  GetProduct$,
  GetProductApiPage$,
  GetProductApiPageCommand,
  GetProductApiPageRequest$,
  GetProductApiPageResponse$,
  GetProductCommand,
  GetProductPage$,
  GetProductPageCommand,
  GetProductPageRequest$,
  GetProductPageResponse$,
  GetProductRequest$,
  GetProductResponse$,
  GetProductSharingPolicy$,
  GetProductSharingPolicyCommand,
  GetProductSharingPolicyRequest$,
  GetProductSharingPolicyResponse$,
  HttpMethod,
  IdentifierParts$,
  InternalServerException,
  InternalServerException$,
  LimitExceededException,
  LimitExceededException$,
  ListApiInventoryItems$,
  ListApiInventoryItemsCommand,
  ListApiInventoryItemsRequest$,
  ListApiInventoryItemsResponse$,
  ListDiscoveryStatuses$,
  ListDiscoveryStatusesCommand,
  ListDiscoveryStatusesRequest$,
  ListDiscoveryStatusesResponse$,
  ListManagedApiEvents$,
  ListManagedApiEventsCommand,
  ListManagedApiEventsRequest$,
  ListManagedApiEventsResponse$,
  ListManagedApis$,
  ListManagedApisCommand,
  ListManagedApisRequest$,
  ListManagedApisResponse$,
  ListPortals$,
  ListPortalsCommand,
  ListPortalsRequest$,
  ListPortalsResponse$,
  ListProductApiPages$,
  ListProductApiPagesCommand,
  ListProductApiPagesRequest$,
  ListProductApiPagesResponse$,
  ListProductPages$,
  ListProductPagesCommand,
  ListProductPagesRequest$,
  ListProductPagesResponse$,
  ListProducts$,
  ListProductsCommand,
  ListProductsRequest$,
  ListProductsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManagedApiEventSummary$,
  ManagedApiFinding$,
  ManagedApiSummary$,
  ManagedBy,
  None$,
  OrganizationDiscoveryConfigurationData$,
  OrganizationDiscoveryFilters$,
  paginateListApiInventoryItems,
  paginateListDiscoveryStatuses,
  paginateListManagedApiEvents,
  paginateListManagedApis,
  paginateListPortals,
  paginateListProductApiPages,
  paginateListProductPages,
  paginateListProducts,
  PortalContent$,
  PortalStatusException$,
  PortalStatusExceptionType,
  PortalSummary$,
  PortalTheme$,
  PostureStatus,
  Preview$,
  PreviewStatus,
  ProductApiPageStatusException$,
  ProductApiPageStatusExceptionType,
  ProductApiPageSummaryNoBody$,
  ProductFailureReason,
  ProductPageSummaryNoBody$,
  ProductStatus,
  ProductSummary$,
  PublishStatus,
  PutDiscoveryConfiguration$,
  PutDiscoveryConfigurationCommand,
  PutDiscoveryConfigurationRequest$,
  PutDiscoveryConfigurationResponse$,
  PutOrganizationDiscoveryConfiguration$,
  PutOrganizationDiscoveryConfigurationCommand,
  PutOrganizationDiscoveryConfigurationRequest$,
  PutOrganizationDiscoveryConfigurationResponse$,
  PutProductSharingPolicy$,
  PutProductSharingPolicyCommand,
  PutProductSharingPolicyRequest$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceOwner,
  RuleFilter$,
  RuleFilterKey,
  Section$,
  StartDiscovery$,
  StartDiscoveryCommand,
  StartDiscoveryRequest$,
  Status,
  StopDiscovery$,
  StopDiscoveryCommand,
  StopDiscoveryRequest$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TryItState,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdatePortal$,
  UpdatePortalCommand,
  UpdatePortalPublishStatus$,
  UpdatePortalPublishStatusCommand,
  UpdatePortalPublishStatusRequest$,
  UpdatePortalRequest$,
  UpdatePortalResponse$,
  UpdateProduct$,
  UpdateProductApiPage$,
  UpdateProductApiPageCommand,
  UpdateProductApiPageRequest$,
  UpdateProductApiPageResponse$,
  UpdateProductCommand,
  UpdateProductPage$,
  UpdateProductPageCommand,
  UpdateProductPageRequest$,
  UpdateProductPageResponse$,
  UpdateProductRequest$,
  UpdateProductResponse$,
  Visibility,
  WafApiSecurityEventDetail$,
  WafStatus,
  Workload,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof APIPortalClient === "function");
assert(typeof APIPortal === "function");
// commands
assert(typeof AssociateManagedApisCommand === "function");
assert(typeof AssociateManagedApis$ === "object");
assert(typeof CreateManagedApiCommand === "function");
assert(typeof CreateManagedApi$ === "object");
assert(typeof CreatePortalCommand === "function");
assert(typeof CreatePortal$ === "object");
assert(typeof CreatePortalPreviewCommand === "function");
assert(typeof CreatePortalPreview$ === "object");
assert(typeof CreateProductCommand === "function");
assert(typeof CreateProduct$ === "object");
assert(typeof CreateProductApiPageCommand === "function");
assert(typeof CreateProductApiPage$ === "object");
assert(typeof CreateProductPageCommand === "function");
assert(typeof CreateProductPage$ === "object");
assert(typeof DeleteDiscoveryConfigurationCommand === "function");
assert(typeof DeleteDiscoveryConfiguration$ === "object");
assert(typeof DeleteManagedApiCommand === "function");
assert(typeof DeleteManagedApi$ === "object");
assert(typeof DeleteOrganizationDiscoveryConfigurationCommand === "function");
assert(typeof DeleteOrganizationDiscoveryConfiguration$ === "object");
assert(typeof DeletePortalCommand === "function");
assert(typeof DeletePortal$ === "object");
assert(typeof DeleteProductCommand === "function");
assert(typeof DeleteProduct$ === "object");
assert(typeof DeleteProductApiPageCommand === "function");
assert(typeof DeleteProductApiPage$ === "object");
assert(typeof DeleteProductPageCommand === "function");
assert(typeof DeleteProductPage$ === "object");
assert(typeof DeleteProductSharingPolicyCommand === "function");
assert(typeof DeleteProductSharingPolicy$ === "object");
assert(typeof DisassociateManagedApisCommand === "function");
assert(typeof DisassociateManagedApis$ === "object");
assert(typeof GetApiInventoryItemCommand === "function");
assert(typeof GetApiInventoryItem$ === "object");
assert(typeof GetDiscoveryConfigurationCommand === "function");
assert(typeof GetDiscoveryConfiguration$ === "object");
assert(typeof GetManagedApiCommand === "function");
assert(typeof GetManagedApi$ === "object");
assert(typeof GetOrganizationDiscoveryConfigurationCommand === "function");
assert(typeof GetOrganizationDiscoveryConfiguration$ === "object");
assert(typeof GetPortalCommand === "function");
assert(typeof GetPortal$ === "object");
assert(typeof GetProductCommand === "function");
assert(typeof GetProduct$ === "object");
assert(typeof GetProductApiPageCommand === "function");
assert(typeof GetProductApiPage$ === "object");
assert(typeof GetProductPageCommand === "function");
assert(typeof GetProductPage$ === "object");
assert(typeof GetProductSharingPolicyCommand === "function");
assert(typeof GetProductSharingPolicy$ === "object");
assert(typeof ListApiInventoryItemsCommand === "function");
assert(typeof ListApiInventoryItems$ === "object");
assert(typeof ListDiscoveryStatusesCommand === "function");
assert(typeof ListDiscoveryStatuses$ === "object");
assert(typeof ListManagedApiEventsCommand === "function");
assert(typeof ListManagedApiEvents$ === "object");
assert(typeof ListManagedApisCommand === "function");
assert(typeof ListManagedApis$ === "object");
assert(typeof ListPortalsCommand === "function");
assert(typeof ListPortals$ === "object");
assert(typeof ListProductApiPagesCommand === "function");
assert(typeof ListProductApiPages$ === "object");
assert(typeof ListProductPagesCommand === "function");
assert(typeof ListProductPages$ === "object");
assert(typeof ListProductsCommand === "function");
assert(typeof ListProducts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutDiscoveryConfigurationCommand === "function");
assert(typeof PutDiscoveryConfiguration$ === "object");
assert(typeof PutOrganizationDiscoveryConfigurationCommand === "function");
assert(typeof PutOrganizationDiscoveryConfiguration$ === "object");
assert(typeof PutProductSharingPolicyCommand === "function");
assert(typeof PutProductSharingPolicy$ === "object");
assert(typeof StartDiscoveryCommand === "function");
assert(typeof StartDiscovery$ === "object");
assert(typeof StopDiscoveryCommand === "function");
assert(typeof StopDiscovery$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePortalCommand === "function");
assert(typeof UpdatePortal$ === "object");
assert(typeof UpdatePortalPublishStatusCommand === "function");
assert(typeof UpdatePortalPublishStatus$ === "object");
assert(typeof UpdateProductCommand === "function");
assert(typeof UpdateProduct$ === "object");
assert(typeof UpdateProductApiPageCommand === "function");
assert(typeof UpdateProductApiPage$ === "object");
assert(typeof UpdateProductPageCommand === "function");
assert(typeof UpdateProductPage$ === "object");
// structural schemas
assert(typeof ACMManaged$ === "object");
assert(typeof ApiId$ === "object");
assert(typeof ApiInventoryFilters$ === "object");
assert(typeof ApiInventoryItem$ === "object");
assert(typeof ApiInventoryItemDetail$ === "object");
assert(typeof ApiPageDisplayContent$ === "object");
assert(typeof ApiPageDisplayContentResponse$ === "object");
assert(typeof ApiSelectionConfiguration$ === "object");
assert(typeof ApiSignature$ === "object");
assert(typeof AssociateManagedApisRequest$ === "object");
assert(typeof AssociateManagedApisResponse$ === "object");
assert(typeof Authorization$ === "object");
assert(typeof AuthorizationConfig$ === "object");
assert(typeof CognitoConfig$ === "object");
assert(typeof CreateManagedApiRequest$ === "object");
assert(typeof CreateManagedApiResponse$ === "object");
assert(typeof CreatePortalPreviewRequest$ === "object");
assert(typeof CreatePortalRequest$ === "object");
assert(typeof CreatePortalResponse$ === "object");
assert(typeof CreateProductApiPageRequest$ === "object");
assert(typeof CreateProductApiPageResponse$ === "object");
assert(typeof CreateProductPageRequest$ === "object");
assert(typeof CreateProductPageResponse$ === "object");
assert(typeof CreateProductRequest$ === "object");
assert(typeof CreateProductResponse$ === "object");
assert(typeof CustomColors$ === "object");
assert(typeof DeleteDiscoveryConfigurationRequest$ === "object");
assert(typeof DeleteManagedApiRequest$ === "object");
assert(typeof DeleteManagedApiResponse$ === "object");
assert(typeof DeleteOrganizationDiscoveryConfigurationRequest$ === "object");
assert(typeof DeletePortalRequest$ === "object");
assert(typeof DeleteProductApiPageRequest$ === "object");
assert(typeof DeleteProductPageRequest$ === "object");
assert(typeof DeleteProductRequest$ === "object");
assert(typeof DeleteProductSharingPolicyRequest$ === "object");
assert(typeof DisassociateManagedApisRequest$ === "object");
assert(typeof DisassociateManagedApisResponse$ === "object");
assert(typeof DiscoveryConfigurationData$ === "object");
assert(typeof DiscoveryExclusionFilters$ === "object");
assert(typeof DiscoveryInclusionFilters$ === "object");
assert(typeof DiscoveryStatus$ === "object");
assert(typeof DisplayContent$ === "object");
assert(typeof DisplayContentOverrides$ === "object");
assert(typeof DisplayOrder$ === "object");
assert(typeof EndpointConfigurationRequest$ === "object");
assert(typeof EndpointConfigurationResponse$ === "object");
assert(typeof FailedManagedApiItem$ === "object");
assert(typeof GetApiInventoryItemRequest$ === "object");
assert(typeof GetApiInventoryItemResponse$ === "object");
assert(typeof GetDiscoveryConfigurationRequest$ === "object");
assert(typeof GetDiscoveryConfigurationResponse$ === "object");
assert(typeof GetManagedApiRequest$ === "object");
assert(typeof GetManagedApiResponse$ === "object");
assert(typeof GetOrganizationDiscoveryConfigurationRequest$ === "object");
assert(typeof GetOrganizationDiscoveryConfigurationResponse$ === "object");
assert(typeof GetPortalRequest$ === "object");
assert(typeof GetPortalResponse$ === "object");
assert(typeof GetProductApiPageRequest$ === "object");
assert(typeof GetProductApiPageResponse$ === "object");
assert(typeof GetProductPageRequest$ === "object");
assert(typeof GetProductPageResponse$ === "object");
assert(typeof GetProductRequest$ === "object");
assert(typeof GetProductResponse$ === "object");
assert(typeof GetProductSharingPolicyRequest$ === "object");
assert(typeof GetProductSharingPolicyResponse$ === "object");
assert(typeof IdentifierParts$ === "object");
assert(typeof ListApiInventoryItemsRequest$ === "object");
assert(typeof ListApiInventoryItemsResponse$ === "object");
assert(typeof ListDiscoveryStatusesRequest$ === "object");
assert(typeof ListDiscoveryStatusesResponse$ === "object");
assert(typeof ListManagedApiEventsRequest$ === "object");
assert(typeof ListManagedApiEventsResponse$ === "object");
assert(typeof ListManagedApisRequest$ === "object");
assert(typeof ListManagedApisResponse$ === "object");
assert(typeof ListPortalsRequest$ === "object");
assert(typeof ListPortalsResponse$ === "object");
assert(typeof ListProductApiPagesRequest$ === "object");
assert(typeof ListProductApiPagesResponse$ === "object");
assert(typeof ListProductPagesRequest$ === "object");
assert(typeof ListProductPagesResponse$ === "object");
assert(typeof ListProductsRequest$ === "object");
assert(typeof ListProductsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedApiEventSummary$ === "object");
assert(typeof ManagedApiFinding$ === "object");
assert(typeof ManagedApiSummary$ === "object");
assert(typeof None$ === "object");
assert(typeof OrganizationDiscoveryConfigurationData$ === "object");
assert(typeof OrganizationDiscoveryFilters$ === "object");
assert(typeof PortalContent$ === "object");
assert(typeof PortalStatusException$ === "object");
assert(typeof PortalSummary$ === "object");
assert(typeof PortalTheme$ === "object");
assert(typeof Preview$ === "object");
assert(typeof ProductApiPageStatusException$ === "object");
assert(typeof ProductApiPageSummaryNoBody$ === "object");
assert(typeof ProductPageSummaryNoBody$ === "object");
assert(typeof ProductSummary$ === "object");
assert(typeof PutDiscoveryConfigurationRequest$ === "object");
assert(typeof PutDiscoveryConfigurationResponse$ === "object");
assert(typeof PutOrganizationDiscoveryConfigurationRequest$ === "object");
assert(typeof PutOrganizationDiscoveryConfigurationResponse$ === "object");
assert(typeof PutProductSharingPolicyRequest$ === "object");
assert(typeof RuleFilter$ === "object");
assert(typeof Section$ === "object");
assert(typeof StartDiscoveryRequest$ === "object");
assert(typeof StopDiscoveryRequest$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdatePortalPublishStatusRequest$ === "object");
assert(typeof UpdatePortalRequest$ === "object");
assert(typeof UpdatePortalResponse$ === "object");
assert(typeof UpdateProductApiPageRequest$ === "object");
assert(typeof UpdateProductApiPageResponse$ === "object");
assert(typeof UpdateProductPageRequest$ === "object");
assert(typeof UpdateProductPageResponse$ === "object");
assert(typeof UpdateProductRequest$ === "object");
assert(typeof UpdateProductResponse$ === "object");
assert(typeof WafApiSecurityEventDetail$ === "object");
// enums
assert(typeof ApiSelectionMode === "object");
assert(typeof Classification === "object");
assert(typeof Confidence === "object");
assert(typeof DesiredPublishStatus === "object");
assert(typeof DiscoveryConfigurationStatus === "object");
assert(typeof DiscoveryFailureReason === "object");
assert(typeof DiscoveryFeature === "object");
assert(typeof DiscoverySource === "object");
assert(typeof DiscoveryStatusValue === "object");
assert(typeof EventStatus === "object");
assert(typeof EventType === "object");
assert(typeof FailedItemErrorCode === "object");
assert(typeof FindingReason === "object");
assert(typeof FineGrainedAccessControl === "object");
assert(typeof HttpMethod === "object");
assert(typeof ManagedBy === "object");
assert(typeof PortalStatusExceptionType === "object");
assert(typeof PostureStatus === "object");
assert(typeof PreviewStatus === "object");
assert(typeof ProductApiPageStatusExceptionType === "object");
assert(typeof ProductFailureReason === "object");
assert(typeof ProductStatus === "object");
assert(typeof PublishStatus === "object");
assert(typeof ResourceOwner === "object");
assert(typeof RuleFilterKey === "object");
assert(typeof Status === "object");
assert(typeof TryItState === "object");
assert(typeof Visibility === "object");
assert(typeof WafStatus === "object");
assert(typeof Workload === "object");
// errors
assert(AccessDeniedException.prototype instanceof APIPortalServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof APIPortalServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof APIPortalServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof APIPortalServiceException);
assert(typeof InternalServerException$ === "object");
assert(LimitExceededException.prototype instanceof APIPortalServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof APIPortalServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(APIPortalServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApiInventoryItems === "function");
assert(typeof paginateListDiscoveryStatuses === "function");
assert(typeof paginateListManagedApiEvents === "function");
assert(typeof paginateListManagedApis === "function");
assert(typeof paginateListPortals === "function");
assert(typeof paginateListProductApiPages === "function");
assert(typeof paginateListProductPages === "function");
assert(typeof paginateListProducts === "function");
console.log(`APIPortal index test passed.`);
