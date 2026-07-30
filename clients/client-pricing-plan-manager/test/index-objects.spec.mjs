import {
  AccessDeniedException,
  AccessDeniedException$,
  ApprovalMode,
  ApprovePaidSubscription$,
  ApprovePaidSubscriptionCommand,
  ApprovePaidSubscriptionInput$,
  ApprovePaidSubscriptionOutput$,
  AssociateResourcesToSubscription$,
  AssociateResourcesToSubscriptionCommand,
  AssociateResourcesToSubscriptionInput$,
  AssociateResourcesToSubscriptionOutput$,
  CancelSubscription$,
  CancelSubscriptionChange$,
  CancelSubscriptionChangeCommand,
  CancelSubscriptionChangeInput$,
  CancelSubscriptionChangeOutput$,
  CancelSubscriptionCommand,
  CancelSubscriptionInput$,
  CancelSubscriptionOutput$,
  ConflictException,
  ConflictException$,
  CreateSubscription$,
  CreateSubscriptionCommand,
  CreateSubscriptionInput$,
  CreateSubscriptionOutput$,
  DisassociateResourcesFromSubscription$,
  DisassociateResourcesFromSubscriptionCommand,
  DisassociateResourcesFromSubscriptionInput$,
  DisassociateResourcesFromSubscriptionOutput$,
  GetSubscription$,
  GetSubscriptionCommand,
  GetSubscriptionInput$,
  GetSubscriptionOutput$,
  InternalServerException,
  InternalServerException$,
  ListSubscriptions$,
  ListSubscriptionsCommand,
  ListSubscriptionsInput$,
  ListSubscriptionsOutput$,
  paginateListSubscriptions,
  PricingPlanManager,
  PricingPlanManagerClient,
  PricingPlanManagerServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScheduledChange$,
  ScheduledChangeType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Status,
  Subscription$,
  SubscriptionSummary$,
  ThrottlingException,
  ThrottlingException$,
  UpdateSubscription$,
  UpdateSubscriptionCommand,
  UpdateSubscriptionInput$,
  UpdateSubscriptionOutput$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PricingPlanManagerClient === "function");
assert(typeof PricingPlanManager === "function");
// commands
assert(typeof ApprovePaidSubscriptionCommand === "function");
assert(typeof ApprovePaidSubscription$ === "object");
assert(typeof AssociateResourcesToSubscriptionCommand === "function");
assert(typeof AssociateResourcesToSubscription$ === "object");
assert(typeof CancelSubscriptionCommand === "function");
assert(typeof CancelSubscription$ === "object");
assert(typeof CancelSubscriptionChangeCommand === "function");
assert(typeof CancelSubscriptionChange$ === "object");
assert(typeof CreateSubscriptionCommand === "function");
assert(typeof CreateSubscription$ === "object");
assert(typeof DisassociateResourcesFromSubscriptionCommand === "function");
assert(typeof DisassociateResourcesFromSubscription$ === "object");
assert(typeof GetSubscriptionCommand === "function");
assert(typeof GetSubscription$ === "object");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptions$ === "object");
assert(typeof UpdateSubscriptionCommand === "function");
assert(typeof UpdateSubscription$ === "object");
// structural schemas
assert(typeof ApprovePaidSubscriptionInput$ === "object");
assert(typeof ApprovePaidSubscriptionOutput$ === "object");
assert(typeof AssociateResourcesToSubscriptionInput$ === "object");
assert(typeof AssociateResourcesToSubscriptionOutput$ === "object");
assert(typeof CancelSubscriptionChangeInput$ === "object");
assert(typeof CancelSubscriptionChangeOutput$ === "object");
assert(typeof CancelSubscriptionInput$ === "object");
assert(typeof CancelSubscriptionOutput$ === "object");
assert(typeof CreateSubscriptionInput$ === "object");
assert(typeof CreateSubscriptionOutput$ === "object");
assert(typeof DisassociateResourcesFromSubscriptionInput$ === "object");
assert(typeof DisassociateResourcesFromSubscriptionOutput$ === "object");
assert(typeof GetSubscriptionInput$ === "object");
assert(typeof GetSubscriptionOutput$ === "object");
assert(typeof ListSubscriptionsInput$ === "object");
assert(typeof ListSubscriptionsOutput$ === "object");
assert(typeof ScheduledChange$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof SubscriptionSummary$ === "object");
assert(typeof UpdateSubscriptionInput$ === "object");
assert(typeof UpdateSubscriptionOutput$ === "object");
// enums
assert(typeof ApprovalMode === "object");
assert(typeof ScheduledChangeType === "object");
assert(typeof Status === "object");
// errors
assert(AccessDeniedException.prototype instanceof PricingPlanManagerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PricingPlanManagerServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PricingPlanManagerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PricingPlanManagerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PricingPlanManagerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PricingPlanManagerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PricingPlanManagerServiceException);
assert(typeof ValidationException$ === "object");
assert(PricingPlanManagerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSubscriptions === "function");
console.log(`PricingPlanManager index test passed.`);
