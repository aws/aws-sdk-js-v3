import {
  AmendBenefitApplicationCommand,
  AssociateBenefitApplicationResourceCommand,
  BenefitAllocationStatus,
  BenefitApplicationStatus,
  BenefitStatus,
  CancelBenefitApplicationCommand,
  CreateBenefitApplicationCommand,
  CurrencyCode,
  DisassociateBenefitApplicationResourceCommand,
  FileType,
  FulfillmentType,
  GetBenefitAllocationCommand,
  GetBenefitApplicationCommand,
  GetBenefitCommand,
  ListBenefitAllocationsCommand,
  ListBenefitApplicationsCommand,
  ListBenefitsCommand,
  ListTagsForResourceCommand,
  PartnerCentralBenefits,
  PartnerCentralBenefitsClient,
  PartnerCentralBenefitsServiceException,
  RecallBenefitApplicationCommand,
  ResourceType,
  SubmitBenefitApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBenefitApplicationCommand,
  paginateListBenefitAllocations,
  paginateListBenefitApplications,
  paginateListBenefits,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralBenefitsClient === "function")
assert(typeof PartnerCentralBenefits === "function")
// commands
assert(typeof AmendBenefitApplicationCommand === "function")
assert(typeof AssociateBenefitApplicationResourceCommand === "function")
assert(typeof CancelBenefitApplicationCommand === "function")
assert(typeof CreateBenefitApplicationCommand === "function")
assert(typeof DisassociateBenefitApplicationResourceCommand === "function")
assert(typeof GetBenefitCommand === "function")
assert(typeof GetBenefitAllocationCommand === "function")
assert(typeof GetBenefitApplicationCommand === "function")
assert(typeof ListBenefitAllocationsCommand === "function")
assert(typeof ListBenefitApplicationsCommand === "function")
assert(typeof ListBenefitsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RecallBenefitApplicationCommand === "function")
assert(typeof SubmitBenefitApplicationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateBenefitApplicationCommand === "function")
// enums
assert(typeof BenefitAllocationStatus === "object");
assert(typeof BenefitApplicationStatus === "object");
assert(typeof BenefitStatus === "object");
assert(typeof CurrencyCode === "object");
assert(typeof FileType === "object");
assert(typeof FulfillmentType === "object");
assert(typeof ResourceType === "object");
// errors
assert(PartnerCentralBenefitsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListBenefitAllocations === "function")
assert(typeof paginateListBenefitApplications === "function")
assert(typeof paginateListBenefits === "function")
console.log(`PartnerCentralBenefits index test passed.`);
