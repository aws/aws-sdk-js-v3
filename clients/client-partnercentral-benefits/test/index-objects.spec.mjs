import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDetails$,
  AmendBenefitApplication$,
  AmendBenefitApplicationCommand,
  AmendBenefitApplicationInput$,
  AmendBenefitApplicationOutput$,
  Amendment$,
  AssociateBenefitApplicationResource$,
  AssociateBenefitApplicationResourceCommand,
  AssociateBenefitApplicationResourceInput$,
  AssociateBenefitApplicationResourceOutput$,
  AssociatedResource$,
  BenefitAllocationStatus,
  BenefitAllocationSummary$,
  BenefitApplicationStatus,
  BenefitApplicationSummary$,
  BenefitStatus,
  BenefitSummary$,
  CancelBenefitApplication$,
  CancelBenefitApplicationCommand,
  CancelBenefitApplicationInput$,
  CancelBenefitApplicationOutput$,
  ConflictException,
  ConflictException$,
  ConsumableDetails$,
  Contact$,
  CreateBenefitApplication$,
  CreateBenefitApplicationCommand,
  CreateBenefitApplicationInput$,
  CreateBenefitApplicationOutput$,
  CreditCode$,
  CreditDetails$,
  CurrencyCode,
  DisassociateBenefitApplicationResource$,
  DisassociateBenefitApplicationResourceCommand,
  DisassociateBenefitApplicationResourceInput$,
  DisassociateBenefitApplicationResourceOutput$,
  DisbursementDetails$,
  FileDetail$,
  FileInput$,
  FileType,
  FulfillmentDetails$,
  FulfillmentType,
  GetBenefit$,
  GetBenefitAllocation$,
  GetBenefitAllocationCommand,
  GetBenefitAllocationInput$,
  GetBenefitAllocationOutput$,
  GetBenefitApplication$,
  GetBenefitApplicationCommand,
  GetBenefitApplicationInput$,
  GetBenefitApplicationOutput$,
  GetBenefitCommand,
  GetBenefitInput$,
  GetBenefitOutput$,
  InternalServerException,
  InternalServerException$,
  IssuanceDetail$,
  ListBenefitAllocations$,
  ListBenefitAllocationsCommand,
  ListBenefitAllocationsInput$,
  ListBenefitAllocationsOutput$,
  ListBenefitApplications$,
  ListBenefitApplicationsCommand,
  ListBenefitApplicationsInput$,
  ListBenefitApplicationsOutput$,
  ListBenefits$,
  ListBenefitsCommand,
  ListBenefitsInput$,
  ListBenefitsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MonetaryValue$,
  paginateListBenefitAllocations,
  paginateListBenefitApplications,
  paginateListBenefits,
  PartnerCentralBenefits,
  PartnerCentralBenefitsClient,
  PartnerCentralBenefitsServiceException,
  RecallBenefitApplication$,
  RecallBenefitApplicationCommand,
  RecallBenefitApplicationInput$,
  RecallBenefitApplicationOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SubmitBenefitApplication$,
  SubmitBenefitApplicationCommand,
  SubmitBenefitApplicationInput$,
  SubmitBenefitApplicationOutput$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBenefitApplication$,
  UpdateBenefitApplicationCommand,
  UpdateBenefitApplicationInput$,
  UpdateBenefitApplicationOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionErrorCode,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralBenefitsClient === "function");
assert(typeof PartnerCentralBenefits === "function");
// commands
assert(typeof AmendBenefitApplicationCommand === "function");
assert(typeof AmendBenefitApplication$ === "object");
assert(typeof AssociateBenefitApplicationResourceCommand === "function");
assert(typeof AssociateBenefitApplicationResource$ === "object");
assert(typeof CancelBenefitApplicationCommand === "function");
assert(typeof CancelBenefitApplication$ === "object");
assert(typeof CreateBenefitApplicationCommand === "function");
assert(typeof CreateBenefitApplication$ === "object");
assert(typeof DisassociateBenefitApplicationResourceCommand === "function");
assert(typeof DisassociateBenefitApplicationResource$ === "object");
assert(typeof GetBenefitCommand === "function");
assert(typeof GetBenefit$ === "object");
assert(typeof GetBenefitAllocationCommand === "function");
assert(typeof GetBenefitAllocation$ === "object");
assert(typeof GetBenefitApplicationCommand === "function");
assert(typeof GetBenefitApplication$ === "object");
assert(typeof ListBenefitAllocationsCommand === "function");
assert(typeof ListBenefitAllocations$ === "object");
assert(typeof ListBenefitApplicationsCommand === "function");
assert(typeof ListBenefitApplications$ === "object");
assert(typeof ListBenefitsCommand === "function");
assert(typeof ListBenefits$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RecallBenefitApplicationCommand === "function");
assert(typeof RecallBenefitApplication$ === "object");
assert(typeof SubmitBenefitApplicationCommand === "function");
assert(typeof SubmitBenefitApplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBenefitApplicationCommand === "function");
assert(typeof UpdateBenefitApplication$ === "object");
// structural schemas
assert(typeof AccessDetails$ === "object");
assert(typeof AmendBenefitApplicationInput$ === "object");
assert(typeof AmendBenefitApplicationOutput$ === "object");
assert(typeof Amendment$ === "object");
assert(typeof AssociateBenefitApplicationResourceInput$ === "object");
assert(typeof AssociateBenefitApplicationResourceOutput$ === "object");
assert(typeof AssociatedResource$ === "object");
assert(typeof BenefitAllocationSummary$ === "object");
assert(typeof BenefitApplicationSummary$ === "object");
assert(typeof BenefitSummary$ === "object");
assert(typeof CancelBenefitApplicationInput$ === "object");
assert(typeof CancelBenefitApplicationOutput$ === "object");
assert(typeof ConsumableDetails$ === "object");
assert(typeof Contact$ === "object");
assert(typeof CreateBenefitApplicationInput$ === "object");
assert(typeof CreateBenefitApplicationOutput$ === "object");
assert(typeof CreditCode$ === "object");
assert(typeof CreditDetails$ === "object");
assert(typeof DisassociateBenefitApplicationResourceInput$ === "object");
assert(typeof DisassociateBenefitApplicationResourceOutput$ === "object");
assert(typeof DisbursementDetails$ === "object");
assert(typeof FileDetail$ === "object");
assert(typeof FileInput$ === "object");
assert(typeof FulfillmentDetails$ === "object");
assert(typeof GetBenefitAllocationInput$ === "object");
assert(typeof GetBenefitAllocationOutput$ === "object");
assert(typeof GetBenefitApplicationInput$ === "object");
assert(typeof GetBenefitApplicationOutput$ === "object");
assert(typeof GetBenefitInput$ === "object");
assert(typeof GetBenefitOutput$ === "object");
assert(typeof IssuanceDetail$ === "object");
assert(typeof ListBenefitAllocationsInput$ === "object");
assert(typeof ListBenefitAllocationsOutput$ === "object");
assert(typeof ListBenefitApplicationsInput$ === "object");
assert(typeof ListBenefitApplicationsOutput$ === "object");
assert(typeof ListBenefitsInput$ === "object");
assert(typeof ListBenefitsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MonetaryValue$ === "object");
assert(typeof RecallBenefitApplicationInput$ === "object");
assert(typeof RecallBenefitApplicationOutput$ === "object");
assert(typeof SubmitBenefitApplicationInput$ === "object");
assert(typeof SubmitBenefitApplicationOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBenefitApplicationInput$ === "object");
assert(typeof UpdateBenefitApplicationOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof BenefitAllocationStatus === "object");
assert(typeof BenefitApplicationStatus === "object");
assert(typeof BenefitStatus === "object");
assert(typeof CurrencyCode === "object");
assert(typeof FileType === "object");
assert(typeof FulfillmentType === "object");
assert(typeof ResourceType === "object");
assert(typeof ValidationExceptionErrorCode === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PartnerCentralBenefitsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PartnerCentralBenefitsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PartnerCentralBenefitsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PartnerCentralBenefitsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralBenefitsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PartnerCentralBenefitsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PartnerCentralBenefitsServiceException);
assert(typeof ValidationException$ === "object");
assert(PartnerCentralBenefitsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBenefitAllocations === "function");
assert(typeof paginateListBenefitApplications === "function");
assert(typeof paginateListBenefits === "function");
console.log(`PartnerCentralBenefits index test passed.`);
