import {
  AccessDeniedException,
  AccessDeniedException$,
  AttributeValue$,
  DescribeServices$,
  DescribeServicesCommand,
  DescribeServicesRequest$,
  DescribeServicesResponse$,
  ExpiredNextTokenException,
  ExpiredNextTokenException$,
  Filter$,
  FilterType,
  GetAttributeValues$,
  GetAttributeValuesCommand,
  GetAttributeValuesRequest$,
  GetAttributeValuesResponse$,
  GetPriceListFileUrl$,
  GetPriceListFileUrlCommand,
  GetPriceListFileUrlRequest$,
  GetPriceListFileUrlResponse$,
  GetProducts$,
  GetProductsCommand,
  GetProductsRequest$,
  GetProductsResponse$,
  InternalErrorException,
  InternalErrorException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  ListPriceLists$,
  ListPriceListsCommand,
  ListPriceListsRequest$,
  ListPriceListsResponse$,
  NotFoundException,
  NotFoundException$,
  PriceList$,
  Pricing,
  PricingClient,
  PricingServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Service$,
  ThrottlingException,
  ThrottlingException$,
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
assert(typeof DescribeServices$ === "object");
assert(typeof GetAttributeValuesCommand === "function");
assert(typeof GetAttributeValues$ === "object");
assert(typeof GetPriceListFileUrlCommand === "function");
assert(typeof GetPriceListFileUrl$ === "object");
assert(typeof GetProductsCommand === "function");
assert(typeof GetProducts$ === "object");
assert(typeof ListPriceListsCommand === "function");
assert(typeof ListPriceLists$ === "object");
// structural schemas
assert(typeof AttributeValue$ === "object");
assert(typeof DescribeServicesRequest$ === "object");
assert(typeof DescribeServicesResponse$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetAttributeValuesRequest$ === "object");
assert(typeof GetAttributeValuesResponse$ === "object");
assert(typeof GetPriceListFileUrlRequest$ === "object");
assert(typeof GetPriceListFileUrlResponse$ === "object");
assert(typeof GetProductsRequest$ === "object");
assert(typeof GetProductsResponse$ === "object");
assert(typeof ListPriceListsRequest$ === "object");
assert(typeof ListPriceListsResponse$ === "object");
assert(typeof PriceList$ === "object");
assert(typeof Service$ === "object");
// enums
assert(typeof FilterType === "object");
// errors
assert(AccessDeniedException.prototype instanceof PricingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ExpiredNextTokenException.prototype instanceof PricingServiceException);
assert(typeof ExpiredNextTokenException$ === "object");
assert(InternalErrorException.prototype instanceof PricingServiceException);
assert(typeof InternalErrorException$ === "object");
assert(InvalidNextTokenException.prototype instanceof PricingServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof PricingServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(NotFoundException.prototype instanceof PricingServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PricingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof PricingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(PricingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeServices === "function");
assert(typeof paginateGetAttributeValues === "function");
assert(typeof paginateGetProducts === "function");
assert(typeof paginateListPriceLists === "function");
console.log(`Pricing index test passed.`);
