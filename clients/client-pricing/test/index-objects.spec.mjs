import {
  AccessDeniedException,
  DescribeServicesCommand,
  ExpiredNextTokenException,
  FilterType,
  GetAttributeValuesCommand,
  GetPriceListFileUrlCommand,
  GetProductsCommand,
  InternalErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  ListPriceListsCommand,
  NotFoundException,
  Pricing,
  PricingClient,
  PricingServiceException,
  ResourceNotFoundException,
  ThrottlingException,
  paginateDescribeServices,
  paginateGetAttributeValues,
  paginateGetProducts,
  paginateListPriceLists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PricingClient === "function");
assert(typeof Pricing === "function");
// commands
assert(typeof DescribeServicesCommand === "function");
assert(typeof GetAttributeValuesCommand === "function");
assert(typeof GetPriceListFileUrlCommand === "function");
assert(typeof GetProductsCommand === "function");
assert(typeof ListPriceListsCommand === "function");
// enums
assert(typeof FilterType === "object");
// errors
assert(AccessDeniedException.prototype instanceof PricingServiceException);
assert(ExpiredNextTokenException.prototype instanceof PricingServiceException);
assert(InternalErrorException.prototype instanceof PricingServiceException);
assert(InvalidNextTokenException.prototype instanceof PricingServiceException);
assert(InvalidParameterException.prototype instanceof PricingServiceException);
assert(NotFoundException.prototype instanceof PricingServiceException);
assert(ResourceNotFoundException.prototype instanceof PricingServiceException);
assert(ThrottlingException.prototype instanceof PricingServiceException);
assert(PricingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeServices === "function");
assert(typeof paginateGetAttributeValues === "function");
assert(typeof paginateGetProducts === "function");
assert(typeof paginateListPriceLists === "function");
console.log(`Pricing index test passed.`);
