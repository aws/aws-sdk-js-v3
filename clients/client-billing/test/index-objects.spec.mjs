import {
  AccessDeniedException,
  AccessDeniedException$,
  ActiveTimeRange$,
  AssociateSourceViews$,
  AssociateSourceViewsCommand,
  AssociateSourceViewsRequest$,
  AssociateSourceViewsResponse$,
  Billing,
  BillingClient,
  BillingServiceException,
  BillingViewElement$,
  BillingViewHealthStatus$,
  BillingViewHealthStatusException,
  BillingViewHealthStatusException$,
  BillingViewListElement$,
  BillingViewStatus,
  BillingViewStatusReason,
  BillingViewType,
  ConflictException,
  ConflictException$,
  CreateBillingView$,
  CreateBillingViewCommand,
  CreateBillingViewRequest$,
  CreateBillingViewResponse$,
  DeleteBillingView$,
  DeleteBillingViewCommand,
  DeleteBillingViewRequest$,
  DeleteBillingViewResponse$,
  Dimension,
  DimensionValues$,
  DisassociateSourceViews$,
  DisassociateSourceViewsCommand,
  DisassociateSourceViewsRequest$,
  DisassociateSourceViewsResponse$,
  Expression$,
  GetBillingView$,
  GetBillingViewCommand,
  GetBillingViewRequest$,
  GetBillingViewResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  InternalServerException,
  InternalServerException$,
  ListBillingViews$,
  ListBillingViewsCommand,
  ListBillingViewsRequest$,
  ListBillingViewsResponse$,
  ListSourceViewsForBillingView$,
  ListSourceViewsForBillingViewCommand,
  ListSourceViewsForBillingViewRequest$,
  ListSourceViewsForBillingViewResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListBillingViews,
  paginateListSourceViewsForBillingView,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  SearchOption,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StringSearch$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagValues$,
  ThrottlingException,
  ThrottlingException$,
  TimeRange$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBillingView$,
  UpdateBillingViewCommand,
  UpdateBillingViewRequest$,
  UpdateBillingViewResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BillingClient === "function");
assert(typeof Billing === "function");
// commands
assert(typeof AssociateSourceViewsCommand === "function");
assert(typeof AssociateSourceViews$ === "object");
assert(typeof CreateBillingViewCommand === "function");
assert(typeof CreateBillingView$ === "object");
assert(typeof DeleteBillingViewCommand === "function");
assert(typeof DeleteBillingView$ === "object");
assert(typeof DisassociateSourceViewsCommand === "function");
assert(typeof DisassociateSourceViews$ === "object");
assert(typeof GetBillingViewCommand === "function");
assert(typeof GetBillingView$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListBillingViewsCommand === "function");
assert(typeof ListBillingViews$ === "object");
assert(typeof ListSourceViewsForBillingViewCommand === "function");
assert(typeof ListSourceViewsForBillingView$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBillingViewCommand === "function");
assert(typeof UpdateBillingView$ === "object");
// structural schemas
assert(typeof ActiveTimeRange$ === "object");
assert(typeof AssociateSourceViewsRequest$ === "object");
assert(typeof AssociateSourceViewsResponse$ === "object");
assert(typeof BillingViewElement$ === "object");
assert(typeof BillingViewHealthStatus$ === "object");
assert(typeof BillingViewListElement$ === "object");
assert(typeof CreateBillingViewRequest$ === "object");
assert(typeof CreateBillingViewResponse$ === "object");
assert(typeof DeleteBillingViewRequest$ === "object");
assert(typeof DeleteBillingViewResponse$ === "object");
assert(typeof DimensionValues$ === "object");
assert(typeof DisassociateSourceViewsRequest$ === "object");
assert(typeof DisassociateSourceViewsResponse$ === "object");
assert(typeof Expression$ === "object");
assert(typeof GetBillingViewRequest$ === "object");
assert(typeof GetBillingViewResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof ListBillingViewsRequest$ === "object");
assert(typeof ListBillingViewsResponse$ === "object");
assert(typeof ListSourceViewsForBillingViewRequest$ === "object");
assert(typeof ListSourceViewsForBillingViewResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof StringSearch$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagValues$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBillingViewRequest$ === "object");
assert(typeof UpdateBillingViewResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof BillingViewStatus === "object");
assert(typeof BillingViewStatusReason === "object");
assert(typeof BillingViewType === "object");
assert(typeof Dimension === "object");
assert(typeof SearchOption === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BillingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BillingViewHealthStatusException.prototype instanceof BillingServiceException);
assert(typeof BillingViewHealthStatusException$ === "object");
assert(ConflictException.prototype instanceof BillingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BillingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BillingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BillingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BillingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BillingServiceException);
assert(typeof ValidationException$ === "object");
assert(BillingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBillingViews === "function");
assert(typeof paginateListSourceViewsForBillingView === "function");
console.log(`Billing index test passed.`);
