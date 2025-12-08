import {
  AccessDeniedException,
  AssociateSourceViewsCommand,
  Billing,
  BillingClient,
  BillingServiceException,
  BillingViewHealthStatusException,
  BillingViewStatus,
  BillingViewStatusReason,
  BillingViewType,
  ConflictException,
  CreateBillingViewCommand,
  DeleteBillingViewCommand,
  Dimension,
  DisassociateSourceViewsCommand,
  GetBillingViewCommand,
  GetResourcePolicyCommand,
  InternalServerException,
  ListBillingViewsCommand,
  ListSourceViewsForBillingViewCommand,
  ListTagsForResourceCommand,
  ResourceNotFoundException,
  SearchOption,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateBillingViewCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListBillingViews,
  paginateListSourceViewsForBillingView,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BillingClient === "function");
assert(typeof Billing === "function");
// commands
assert(typeof AssociateSourceViewsCommand === "function");
assert(typeof CreateBillingViewCommand === "function");
assert(typeof DeleteBillingViewCommand === "function");
assert(typeof DisassociateSourceViewsCommand === "function");
assert(typeof GetBillingViewCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListBillingViewsCommand === "function");
assert(typeof ListSourceViewsForBillingViewCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBillingViewCommand === "function");
// enums
assert(typeof BillingViewStatus === "object");
assert(typeof BillingViewStatusReason === "object");
assert(typeof BillingViewType === "object");
assert(typeof Dimension === "object");
assert(typeof SearchOption === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BillingServiceException);
assert(BillingViewHealthStatusException.prototype instanceof BillingServiceException);
assert(ConflictException.prototype instanceof BillingServiceException);
assert(InternalServerException.prototype instanceof BillingServiceException);
assert(ResourceNotFoundException.prototype instanceof BillingServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BillingServiceException);
assert(ThrottlingException.prototype instanceof BillingServiceException);
assert(ValidationException.prototype instanceof BillingServiceException);
assert(BillingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBillingViews === "function");
assert(typeof paginateListSourceViewsForBillingView === "function");
console.log(`Billing index test passed.`);
