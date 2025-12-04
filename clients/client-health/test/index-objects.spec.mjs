import {
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeEntityAggregatesCommand,
  DescribeEntityAggregatesForOrganizationCommand,
  DescribeEventAggregatesCommand,
  DescribeEventDetailsCommand,
  DescribeEventDetailsForOrganizationCommand,
  DescribeEventTypesCommand,
  DescribeEventsCommand,
  DescribeEventsForOrganizationCommand,
  DescribeHealthServiceStatusForOrganizationCommand,
  DisableHealthServiceAccessForOrganizationCommand,
  EnableHealthServiceAccessForOrganizationCommand,
  EntityStatusCode,
  EventActionability,
  EventAggregateField,
  EventPersona,
  EventScopeCode,
  EventStatusCode,
  EventTypeActionability,
  EventTypeCategory,
  EventTypePersona,
  Health,
  HealthClient,
  HealthServiceException,
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
assert(typeof DescribeAffectedEntitiesCommand === "function");
assert(typeof DescribeAffectedEntitiesForOrganizationCommand === "function");
assert(typeof DescribeEntityAggregatesCommand === "function");
assert(typeof DescribeEntityAggregatesForOrganizationCommand === "function");
assert(typeof DescribeEventAggregatesCommand === "function");
assert(typeof DescribeEventDetailsCommand === "function");
assert(typeof DescribeEventDetailsForOrganizationCommand === "function");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEventsForOrganizationCommand === "function");
assert(typeof DescribeEventTypesCommand === "function");
assert(typeof DescribeHealthServiceStatusForOrganizationCommand === "function");
assert(typeof DisableHealthServiceAccessForOrganizationCommand === "function");
assert(typeof EnableHealthServiceAccessForOrganizationCommand === "function");
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
