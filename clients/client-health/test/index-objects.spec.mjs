import {
  AccountEntityAggregate$,
  AffectedEntity$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
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
  DescribeEventTypes$,
  DescribeEventTypesCommand,
  DescribeEventTypesRequest$,
  DescribeEventTypesResponse$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsForOrganization$,
  DescribeEventsForOrganizationCommand,
  DescribeEventsForOrganizationRequest$,
  DescribeEventsForOrganizationResponse$,
  DescribeEventsRequest$,
  DescribeEventsResponse$,
  DescribeHealthServiceStatusForOrganization$,
  DescribeHealthServiceStatusForOrganizationCommand,
  DescribeHealthServiceStatusForOrganizationResponse$,
  DisableHealthServiceAccessForOrganization$,
  DisableHealthServiceAccessForOrganizationCommand,
  EnableHealthServiceAccessForOrganization$,
  EnableHealthServiceAccessForOrganizationCommand,
  EntityAccountFilter$,
  EntityAggregate$,
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
  OrganizationAffectedEntitiesErrorItem$,
  OrganizationEntityAggregate$,
  OrganizationEvent$,
  OrganizationEventDetails$,
  OrganizationEventDetailsErrorItem$,
  OrganizationEventFilter$,
  UnsupportedLocale,
  UnsupportedLocale$,
  paginateDescribeAffectedAccountsForOrganization,
  paginateDescribeAffectedEntities,
  paginateDescribeAffectedEntitiesForOrganization,
  paginateDescribeEventAggregates,
  paginateDescribeEventTypes,
  paginateDescribeEvents,
  paginateDescribeEventsForOrganization,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof HealthClient === "function");
assert(typeof Health === "function");
// commands
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
assert(typeof DisableHealthServiceAccessForOrganizationCommand === "function");
assert(typeof DisableHealthServiceAccessForOrganization$ === "object");
assert(typeof EnableHealthServiceAccessForOrganizationCommand === "function");
assert(typeof EnableHealthServiceAccessForOrganization$ === "object");
// structural schemas
assert(typeof AccountEntityAggregate$ === "object");
assert(typeof AffectedEntity$ === "object");
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
assert(typeof EntityAccountFilter$ === "object");
assert(typeof EntityAggregate$ === "object");
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
assert(typeof OrganizationAffectedEntitiesErrorItem$ === "object");
assert(typeof OrganizationEntityAggregate$ === "object");
assert(typeof OrganizationEvent$ === "object");
assert(typeof OrganizationEventDetails$ === "object");
assert(typeof OrganizationEventDetailsErrorItem$ === "object");
assert(typeof OrganizationEventFilter$ === "object");
// enums
assert(typeof EntityStatusCode === "object");
assert(typeof EventActionability === "object");
assert(typeof EventAggregateField === "object");
assert(typeof EventPersona === "object");
assert(typeof EventScopeCode === "object");
assert(typeof EventStatusCode === "object");
assert(typeof EventTypeActionability === "object");
assert(typeof EventTypeCategory === "object");
assert(typeof EventTypePersona === "object");
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
console.log(`Health index test passed.`);
