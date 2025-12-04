import {
  AmiProductSortBy,
  AmiProductVisibilityString,
  BatchDescribeEntitiesCommand,
  CancelChangeSetCommand,
  ChangeStatus,
  ContainerProductSortBy,
  ContainerProductVisibilityString,
  DataProductSortBy,
  DataProductVisibilityString,
  DeleteResourcePolicyCommand,
  DescribeChangeSetCommand,
  DescribeEntityCommand,
  FailureCode,
  GetResourcePolicyCommand,
  Intent,
  ListChangeSetsCommand,
  ListEntitiesCommand,
  ListTagsForResourceCommand,
  MachineLearningProductSortBy,
  MachineLearningProductVisibilityString,
  MarketplaceCatalog,
  MarketplaceCatalogClient,
  MarketplaceCatalogServiceException,
  OfferSetSortBy,
  OfferSetStateString,
  OfferSortBy,
  OfferStateString,
  OfferTargetingString,
  OwnershipType,
  PutResourcePolicyCommand,
  ResaleAuthorizationSortBy,
  ResaleAuthorizationStatusString,
  SaaSProductSortBy,
  SaaSProductVisibilityString,
  SortOrder,
  StartChangeSetCommand,
  TagResourceCommand,
  UntagResourceCommand,
  paginateListChangeSets,
  paginateListEntities,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceCatalogClient === "function");
assert(typeof MarketplaceCatalog === "function");
// commands
assert(typeof BatchDescribeEntitiesCommand === "function");
assert(typeof CancelChangeSetCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DescribeChangeSetCommand === "function");
assert(typeof DescribeEntityCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListChangeSetsCommand === "function");
assert(typeof ListEntitiesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof StartChangeSetCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AmiProductSortBy === "object");
assert(typeof AmiProductVisibilityString === "object");
assert(typeof ChangeStatus === "object");
assert(typeof ContainerProductSortBy === "object");
assert(typeof ContainerProductVisibilityString === "object");
assert(typeof DataProductSortBy === "object");
assert(typeof DataProductVisibilityString === "object");
assert(typeof FailureCode === "object");
assert(typeof Intent === "object");
assert(typeof MachineLearningProductSortBy === "object");
assert(typeof MachineLearningProductVisibilityString === "object");
assert(typeof OfferSetSortBy === "object");
assert(typeof OfferSetStateString === "object");
assert(typeof OfferSortBy === "object");
assert(typeof OfferStateString === "object");
assert(typeof OfferTargetingString === "object");
assert(typeof OwnershipType === "object");
assert(typeof ResaleAuthorizationSortBy === "object");
assert(typeof ResaleAuthorizationStatusString === "object");
assert(typeof SaaSProductSortBy === "object");
assert(typeof SaaSProductVisibilityString === "object");
assert(typeof SortOrder === "object");
// errors
assert(MarketplaceCatalogServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChangeSets === "function");
assert(typeof paginateListEntities === "function");
console.log(`MarketplaceCatalog index test passed.`);
