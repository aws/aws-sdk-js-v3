import {
  DescribeServicesCommand,
  FilterType,
  GetAttributeValuesCommand,
  GetPriceListFileUrlCommand,
  GetProductsCommand,
  ListPriceListsCommand,
  Pricing,
  PricingClient,
  PricingServiceException,
  paginateDescribeServices,
  paginateGetAttributeValues,
  paginateGetProducts,
  paginateListPriceLists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PricingClient === "function")
assert(typeof Pricing === "function")
// commands
assert(typeof DescribeServicesCommand === "function")
assert(typeof GetAttributeValuesCommand === "function")
assert(typeof GetPriceListFileUrlCommand === "function")
assert(typeof GetProductsCommand === "function")
assert(typeof ListPriceListsCommand === "function")
// enums
assert(typeof FilterType === "object");
// errors
assert(PricingServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeServices === "function")
assert(typeof paginateGetAttributeValues === "function")
assert(typeof paginateGetProducts === "function")
assert(typeof paginateListPriceLists === "function")
console.log(`Pricing index test passed.`);
