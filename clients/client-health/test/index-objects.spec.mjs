import {
  AccountEntity$,
  AccountEntityAggregate$,
  AccountTag$,
  AccountTagType,
  AffectedAccountFilter$,
  AffectedEntity$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConfigureTags$,
  ConfigureTagsCommand,
  ConfigureTagsForOrganization$,
  ConfigureTagsForOrganizationCommand,
  ConfigureTagsForOrganizationRequest$,
  ConfigureTagsForOrganizationResponse$,
  ConfigureTagsRequest$,
  ConfigureTagsResponse$,
  DateTimeRange$,
  DescribeAffectedAccountsForOrganization$,
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedAccountsForOrganizationRequest$,
  DescribeAffectedAccountsForOrganizationResponse$,
  DescribeAffectedEntities$,
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesForOrganization$,
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeAffectedEntitiesForOrganizationRequest$,
  DescribeAffectedEntitiesForOrganizationResponse$,
  DescribeAffectedEntitiesRequest$,
  DescribeAffectedEntitiesResponse$,
  DescribeEntityAggregates$,
  DescribeEntityAggregatesCommand,
  DescribeEntityAggregatesForOrganization$,
  DescribeEntityAggregatesForOrganizationCommand,
  DescribeEntityAggregatesForOrganizationRequest$,
  DescribeEntityAggregatesForOrganizationResponse$,
  DescribeEntityAggregatesRequest$,
  DescribeEntityAggregatesResponse$,
  DescribeEventAggregates$,
  DescribeEventAggregatesCommand,
  DescribeEventAggregatesRequest$,
  DescribeEventAggregatesResponse$,
  DescribeEventDetails$,
  DescribeEventDetailsCommand,
  DescribeEventDetailsForOrganization$,
  DescribeEventDetailsForOrganizationCommand,
  DescribeEventDetailsForOrganizationRequest$,
  DescribeEventDetailsForOrganizationResponse$,
  DescribeEventDetailsRequest$,
  DescribeEventDetailsResponse$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsForOrganization$,
  DescribeEventsForOrganizationCommand,
  DescribeEventsForOrganizationRequest$,
  DescribeEventsForOrganizationResponse$,
  DescribeEventsRequest$,
  DescribeEventsResponse$,
  DescribeEventTypes$,
  DescribeEventTypesCommand,
  DescribeEventTypesRequest$,
  DescribeEventTypesResponse$,
  DescribeHealthServiceStatusForOrganization$,
  DescribeHealthServiceStatusForOrganizationCommand,
  DescribeHealthServiceStatusForOrganizationResponse$,
  DescribeServiceLifecycle$,
  DescribeServiceLifecycleCommand,
  DescribeServiceLifecycleRequest$,
  DescribeServiceLifecycleResponse$,
  DescribeTagKeys$,
  DescribeTagKeysCommand,
  DescribeTagKeysForOrganization$,
  DescribeTagKeysForOrganizationCommand,
  DescribeTagKeysForOrganizationResponse$,
  DescribeTagKeysResponse$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsForOrganization$,
  DescribeTagsForOrganizationCommand,
  DescribeTagsForOrganizationFilter$,
  DescribeTagsForOrganizationRequest$,
  DescribeTagsForOrganizationResponse$,
  DescribeTagsOnboardingStatus$,
  DescribeTagsOnboardingStatusCommand,
  DescribeTagsOnboardingStatusForOrganization$,
  DescribeTagsOnboardingStatusForOrganizationCommand,
  DescribeTagsOnboardingStatusForOrganizationResponse$,
  DescribeTagsOnboardingStatusResponse$,
  DescribeTagsRequest$,
  DescribeTagsResponse$,
  DisableHealthServiceAccessForOrganization$,
  DisableHealthServiceAccessForOrganizationCommand,
  DisableTags$,
  DisableTagsCommand,
  DisableTagsForOrganization$,
  DisableTagsForOrganizationCommand,
  EnableHealthServiceAccessForOrganization$,
  EnableHealthServiceAccessForOrganizationCommand,
  EnableTags$,
  EnableTagsCommand,
  EnableTagsForOrganization$,
  EnableTagsForOrganizationCommand,
  EntityAccountFilter$,
  EntityAggregate$,
  EntityAggregateFilter$,
  EntityFilter$,
  EntityStatusCode,
  Event$,
  EventAccountFilter$,
  EventActionability,
  EventAggregate$,
  EventAggregateField,
  EventDescription$,
  EventDetails$,
  EventDetailsErrorItem$,
  EventFilter$,
  EventPersona,
  EventScopeCode,
  EventStatusCode,
  EventType$,
  EventTypeActionability,
  EventTypeCategory,
  EventTypeFilter$,
  EventTypePersona,
  Health,
  HealthClient,
  HealthServiceException,
  InvalidPaginationToken,
  InvalidPaginationToken$,
  LifecycleEvent$,
  OrganizationAffectedEntitiesErrorItem$,
  OrganizationEntityAggregate$,
  OrganizationEntityAggregateFilter$,
  OrganizationEvent$,
  OrganizationEventDetails$,
  OrganizationEventDetailsErrorItem$,
  OrganizationEventFilter$,
  OrganizationTag$,
  OrganizationTagKey$,
  OrganizationTagType,
  paginateDescribeAffectedAccountsForOrganization,
  paginateDescribeAffectedEntities,
  paginateDescribeAffectedEntitiesForOrganization,
  paginateDescribeEventAggregates,
  paginateDescribeEvents,
  paginateDescribeEventsForOrganization,
  paginateDescribeEventTypes,
  paginateDescribeServiceLifecycle,
  paginateDescribeTags,
  paginateDescribeTagsForOrganization,
  ResourceTagKey$,
  ServiceLifecycle$,
  ServiceLifecycleFilter$,
  TagKeyForOrganization$,
  TagKeyStatus,
  TagsOnboardingStatus,
  TagsOnboardingStatusForOrganization,
  UnsupportedLocale,
  UnsupportedLocale$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof HealthClient === "function");
assert(typeof Health === "function");
// commands
assert(typeof ConfigureTagsCommand === "function");
assert(typeof ConfigureTags$ === "object");
assert(typeof ConfigureTagsForOrganizationCommand === "function");
assert(typeof ConfigureTagsForOrganization$ === "object");
assert(typeof DescribeAffectedAccountsForOrganizationCommand === "function");
assert(typeof DescribeAffectedAccountsForOrganization$ === "object");
assert(typeof DescribeAffectedEntitiesCommand === "function");
assert(typeof DescribeAffectedEntities$ === "object");
assert(typeof DescribeAffectedEntitiesForOrganizationCommand === "function");
assert(typeof DescribeAffectedEntitiesForOrganization$ === "object");
assert(typeof DescribeEntityAggregatesCommand === "function");
assert(typeof DescribeEntityAggregates$ === "object");
assert(typeof DescribeEntityAggregatesForOrganizationCommand === "function");
assert(typeof DescribeEntityAggregatesForOrganization$ === "object");
assert(typeof DescribeEventAggregatesCommand === "function");
assert(typeof DescribeEventAggregates$ === "object");
assert(typeof DescribeEventDetailsCommand === "function");
assert(typeof DescribeEventDetails$ === "object");
assert(typeof DescribeEventDetailsForOrganizationCommand === "function");
assert(typeof DescribeEventDetailsForOrganization$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeEventsForOrganizationCommand === "function");
assert(typeof DescribeEventsForOrganization$ === "object");
assert(typeof DescribeEventTypesCommand === "function");
assert(typeof DescribeEventTypes$ === "object");
assert(typeof DescribeHealthServiceStatusForOrganizationCommand === "function");
assert(typeof DescribeHealthServiceStatusForOrganization$ === "object");
assert(typeof DescribeServiceLifecycleCommand === "function");
assert(typeof DescribeServiceLifecycle$ === "object");
assert(typeof DescribeTagKeysCommand === "function");
assert(typeof DescribeTagKeys$ === "object");
assert(typeof DescribeTagKeysForOrganizationCommand === "function");
assert(typeof DescribeTagKeysForOrganization$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DescribeTagsForOrganizationCommand === "function");
assert(typeof DescribeTagsForOrganization$ === "object");
assert(typeof DescribeTagsOnboardingStatusCommand === "function");
assert(typeof DescribeTagsOnboardingStatus$ === "object");
assert(typeof DescribeTagsOnboardingStatusForOrganizationCommand === "function");
assert(typeof DescribeTagsOnboardingStatusForOrganization$ === "object");
assert(typeof DisableHealthServiceAccessForOrganizationCommand === "function");
assert(typeof DisableHealthServiceAccessForOrganization$ === "object");
assert(typeof DisableTagsCommand === "function");
assert(typeof DisableTags$ === "object");
assert(typeof DisableTagsForOrganizationCommand === "function");
assert(typeof DisableTagsForOrganization$ === "object");
assert(typeof EnableHealthServiceAccessForOrganizationCommand === "function");
assert(typeof EnableHealthServiceAccessForOrganization$ === "object");
assert(typeof EnableTagsCommand === "function");
assert(typeof EnableTags$ === "object");
assert(typeof EnableTagsForOrganizationCommand === "function");
assert(typeof EnableTagsForOrganization$ === "object");
// structural schemas
assert(typeof AccountEntity$ === "object");
assert(typeof AccountEntityAggregate$ === "object");
assert(typeof AccountTag$ === "object");
assert(typeof AffectedAccountFilter$ === "object");
assert(typeof AffectedEntity$ === "object");
assert(typeof ConfigureTagsForOrganizationRequest$ === "object");
assert(typeof ConfigureTagsForOrganizationResponse$ === "object");
assert(typeof ConfigureTagsRequest$ === "object");
assert(typeof ConfigureTagsResponse$ === "object");
assert(typeof DateTimeRange$ === "object");
assert(typeof DescribeAffectedAccountsForOrganizationRequest$ === "object");
assert(typeof DescribeAffectedAccountsForOrganizationResponse$ === "object");
assert(typeof DescribeAffectedEntitiesForOrganizationRequest$ === "object");
assert(typeof DescribeAffectedEntitiesForOrganizationResponse$ === "object");
assert(typeof DescribeAffectedEntitiesRequest$ === "object");
assert(typeof DescribeAffectedEntitiesResponse$ === "object");
assert(typeof DescribeEntityAggregatesForOrganizationRequest$ === "object");
assert(typeof DescribeEntityAggregatesForOrganizationResponse$ === "object");
assert(typeof DescribeEntityAggregatesRequest$ === "object");
assert(typeof DescribeEntityAggregatesResponse$ === "object");
assert(typeof DescribeEventAggregatesRequest$ === "object");
assert(typeof DescribeEventAggregatesResponse$ === "object");
assert(typeof DescribeEventDetailsForOrganizationRequest$ === "object");
assert(typeof DescribeEventDetailsForOrganizationResponse$ === "object");
assert(typeof DescribeEventDetailsRequest$ === "object");
assert(typeof DescribeEventDetailsResponse$ === "object");
assert(typeof DescribeEventsForOrganizationRequest$ === "object");
assert(typeof DescribeEventsForOrganizationResponse$ === "object");
assert(typeof DescribeEventsRequest$ === "object");
assert(typeof DescribeEventsResponse$ === "object");
assert(typeof DescribeEventTypesRequest$ === "object");
assert(typeof DescribeEventTypesResponse$ === "object");
assert(typeof DescribeHealthServiceStatusForOrganizationResponse$ === "object");
assert(typeof DescribeServiceLifecycleRequest$ === "object");
assert(typeof DescribeServiceLifecycleResponse$ === "object");
assert(typeof DescribeTagKeysForOrganizationResponse$ === "object");
assert(typeof DescribeTagKeysResponse$ === "object");
assert(typeof DescribeTagsForOrganizationFilter$ === "object");
assert(typeof DescribeTagsForOrganizationRequest$ === "object");
assert(typeof DescribeTagsForOrganizationResponse$ === "object");
assert(typeof DescribeTagsOnboardingStatusForOrganizationResponse$ === "object");
assert(typeof DescribeTagsOnboardingStatusResponse$ === "object");
assert(typeof DescribeTagsRequest$ === "object");
assert(typeof DescribeTagsResponse$ === "object");
assert(typeof EntityAccountFilter$ === "object");
assert(typeof EntityAggregate$ === "object");
assert(typeof EntityAggregateFilter$ === "object");
assert(typeof EntityFilter$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventAccountFilter$ === "object");
assert(typeof EventAggregate$ === "object");
assert(typeof EventDescription$ === "object");
assert(typeof EventDetails$ === "object");
assert(typeof EventDetailsErrorItem$ === "object");
assert(typeof EventFilter$ === "object");
assert(typeof EventType$ === "object");
assert(typeof EventTypeFilter$ === "object");
assert(typeof LifecycleEvent$ === "object");
assert(typeof OrganizationAffectedEntitiesErrorItem$ === "object");
assert(typeof OrganizationEntityAggregate$ === "object");
assert(typeof OrganizationEntityAggregateFilter$ === "object");
assert(typeof OrganizationEvent$ === "object");
assert(typeof OrganizationEventDetails$ === "object");
assert(typeof OrganizationEventDetailsErrorItem$ === "object");
assert(typeof OrganizationEventFilter$ === "object");
assert(typeof OrganizationTag$ === "object");
assert(typeof OrganizationTagKey$ === "object");
assert(typeof ResourceTagKey$ === "object");
assert(typeof ServiceLifecycle$ === "object");
assert(typeof ServiceLifecycleFilter$ === "object");
assert(typeof TagKeyForOrganization$ === "object");
// enums
assert(typeof AccountTagType === "object");
assert(typeof EntityStatusCode === "object");
assert(typeof EventActionability === "object");
assert(typeof EventAggregateField === "object");
assert(typeof EventPersona === "object");
assert(typeof EventScopeCode === "object");
assert(typeof EventStatusCode === "object");
assert(typeof EventTypeActionability === "object");
assert(typeof EventTypeCategory === "object");
assert(typeof EventTypePersona === "object");
assert(typeof OrganizationTagType === "object");
assert(typeof TagKeyStatus === "object");
assert(typeof TagsOnboardingStatus === "object");
assert(typeof TagsOnboardingStatusForOrganization === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof HealthServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(InvalidPaginationToken.prototype instanceof HealthServiceException);
assert(typeof InvalidPaginationToken$ === "object");
assert(UnsupportedLocale.prototype instanceof HealthServiceException);
assert(typeof UnsupportedLocale$ === "object");
assert(HealthServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeAffectedAccountsForOrganization === "function");
assert(typeof paginateDescribeAffectedEntities === "function");
assert(typeof paginateDescribeAffectedEntitiesForOrganization === "function");
assert(typeof paginateDescribeEventAggregates === "function");
assert(typeof paginateDescribeEventTypes === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeEventsForOrganization === "function");
assert(typeof paginateDescribeServiceLifecycle === "function");
assert(typeof paginateDescribeTags === "function");
assert(typeof paginateDescribeTagsForOrganization === "function");
console.log(`Health index test passed.`);
