import {
  AssociateSourceViewsCommand,
  Billing,
  BillingClient,
  BillingServiceException,
  BillingViewStatus,
  BillingViewStatusReason,
  BillingViewType,
  CreateBillingViewCommand,
  DeleteBillingViewCommand,
  Dimension,
  DisassociateSourceViewsCommand,
  GetBillingViewCommand,
  GetResourcePolicyCommand,
  ListBillingViewsCommand,
  ListSourceViewsForBillingViewCommand,
  ListTagsForResourceCommand,
  SearchOption,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBillingViewCommand,
  paginateListBillingViews,
  paginateListSourceViewsForBillingView,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BillingClient === "function")
assert(typeof Billing === "function")
// commands
assert(typeof AssociateSourceViewsCommand === "function")
assert(typeof CreateBillingViewCommand === "function")
assert(typeof DeleteBillingViewCommand === "function")
assert(typeof DisassociateSourceViewsCommand === "function")
assert(typeof GetBillingViewCommand === "function")
assert(typeof GetResourcePolicyCommand === "function")
assert(typeof ListBillingViewsCommand === "function")
assert(typeof ListSourceViewsForBillingViewCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateBillingViewCommand === "function")
// enums
assert(typeof BillingViewStatus === "object");
assert(typeof BillingViewStatusReason === "object");
assert(typeof BillingViewType === "object");
assert(typeof Dimension === "object");
assert(typeof SearchOption === "object");
// errors
assert(BillingServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListBillingViews === "function")
assert(typeof paginateListSourceViewsForBillingView === "function")
console.log(`Billing index test passed.`);
