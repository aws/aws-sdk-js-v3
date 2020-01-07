"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var EntityStatusCode;
(function (EntityStatusCode) {
    EntityStatusCode["IMPAIRED"] = "IMPAIRED";
    EntityStatusCode["UNIMPAIRED"] = "UNIMPAIRED";
    EntityStatusCode["UNKNOWN"] = "UNKNOWN";
})(EntityStatusCode = exports.EntityStatusCode || (exports.EntityStatusCode = {}));
var EventAggregateField;
(function (EventAggregateField) {
    EventAggregateField["EventTypeCategory"] = "eventTypeCategory";
})(EventAggregateField = exports.EventAggregateField || (exports.EventAggregateField = {}));
var EventStatusCode;
(function (EventStatusCode) {
    EventStatusCode["CLOSED"] = "closed";
    EventStatusCode["OPEN"] = "open";
    EventStatusCode["UPCOMING"] = "upcoming";
})(EventStatusCode = exports.EventStatusCode || (exports.EventStatusCode = {}));
var EventTypeCategory;
(function (EventTypeCategory) {
    EventTypeCategory["ACCOUNT_NOTIFICATION"] = "accountNotification";
    EventTypeCategory["INVESTIGATION"] = "investigation";
    EventTypeCategory["ISSUE"] = "issue";
    EventTypeCategory["SCHEDULED_CHANGE"] = "scheduledChange";
})(EventTypeCategory = exports.EventTypeCategory || (exports.EventTypeCategory = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var InvalidPaginationToken;
(function (InvalidPaginationToken) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPaginationToken");
    }
    InvalidPaginationToken.isa = isa;
})(InvalidPaginationToken = exports.InvalidPaginationToken || (exports.InvalidPaginationToken = {}));
var UnsupportedLocale;
(function (UnsupportedLocale) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedLocale");
    }
    UnsupportedLocale.isa = isa;
})(UnsupportedLocale = exports.UnsupportedLocale || (exports.UnsupportedLocale = {}));
var DescribeAffectedAccountsForOrganizationRequest;
(function (DescribeAffectedAccountsForOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAffectedAccountsForOrganizationRequest");
    }
    DescribeAffectedAccountsForOrganizationRequest.isa = isa;
})(DescribeAffectedAccountsForOrganizationRequest = exports.DescribeAffectedAccountsForOrganizationRequest || (exports.DescribeAffectedAccountsForOrganizationRequest = {}));
var DescribeAffectedAccountsForOrganizationResponse;
(function (DescribeAffectedAccountsForOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAffectedAccountsForOrganizationResponse");
    }
    DescribeAffectedAccountsForOrganizationResponse.isa = isa;
})(DescribeAffectedAccountsForOrganizationResponse = exports.DescribeAffectedAccountsForOrganizationResponse || (exports.DescribeAffectedAccountsForOrganizationResponse = {}));
var DescribeAffectedEntitiesForOrganizationRequest;
(function (DescribeAffectedEntitiesForOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAffectedEntitiesForOrganizationRequest");
    }
    DescribeAffectedEntitiesForOrganizationRequest.isa = isa;
})(DescribeAffectedEntitiesForOrganizationRequest = exports.DescribeAffectedEntitiesForOrganizationRequest || (exports.DescribeAffectedEntitiesForOrganizationRequest = {}));
var DescribeAffectedEntitiesForOrganizationResponse;
(function (DescribeAffectedEntitiesForOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAffectedEntitiesForOrganizationResponse");
    }
    DescribeAffectedEntitiesForOrganizationResponse.isa = isa;
})(DescribeAffectedEntitiesForOrganizationResponse = exports.DescribeAffectedEntitiesForOrganizationResponse || (exports.DescribeAffectedEntitiesForOrganizationResponse = {}));
var DescribeAffectedEntitiesRequest;
(function (DescribeAffectedEntitiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAffectedEntitiesRequest");
    }
    DescribeAffectedEntitiesRequest.isa = isa;
})(DescribeAffectedEntitiesRequest = exports.DescribeAffectedEntitiesRequest || (exports.DescribeAffectedEntitiesRequest = {}));
var DescribeAffectedEntitiesResponse;
(function (DescribeAffectedEntitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAffectedEntitiesResponse");
    }
    DescribeAffectedEntitiesResponse.isa = isa;
})(DescribeAffectedEntitiesResponse = exports.DescribeAffectedEntitiesResponse || (exports.DescribeAffectedEntitiesResponse = {}));
var DescribeEntityAggregatesRequest;
(function (DescribeEntityAggregatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEntityAggregatesRequest");
    }
    DescribeEntityAggregatesRequest.isa = isa;
})(DescribeEntityAggregatesRequest = exports.DescribeEntityAggregatesRequest || (exports.DescribeEntityAggregatesRequest = {}));
var DescribeEntityAggregatesResponse;
(function (DescribeEntityAggregatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEntityAggregatesResponse");
    }
    DescribeEntityAggregatesResponse.isa = isa;
})(DescribeEntityAggregatesResponse = exports.DescribeEntityAggregatesResponse || (exports.DescribeEntityAggregatesResponse = {}));
var DescribeEventAggregatesRequest;
(function (DescribeEventAggregatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventAggregatesRequest");
    }
    DescribeEventAggregatesRequest.isa = isa;
})(DescribeEventAggregatesRequest = exports.DescribeEventAggregatesRequest || (exports.DescribeEventAggregatesRequest = {}));
var DescribeEventAggregatesResponse;
(function (DescribeEventAggregatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventAggregatesResponse");
    }
    DescribeEventAggregatesResponse.isa = isa;
})(DescribeEventAggregatesResponse = exports.DescribeEventAggregatesResponse || (exports.DescribeEventAggregatesResponse = {}));
var DescribeEventDetailsForOrganizationRequest;
(function (DescribeEventDetailsForOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventDetailsForOrganizationRequest");
    }
    DescribeEventDetailsForOrganizationRequest.isa = isa;
})(DescribeEventDetailsForOrganizationRequest = exports.DescribeEventDetailsForOrganizationRequest || (exports.DescribeEventDetailsForOrganizationRequest = {}));
var DescribeEventDetailsForOrganizationResponse;
(function (DescribeEventDetailsForOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventDetailsForOrganizationResponse");
    }
    DescribeEventDetailsForOrganizationResponse.isa = isa;
})(DescribeEventDetailsForOrganizationResponse = exports.DescribeEventDetailsForOrganizationResponse || (exports.DescribeEventDetailsForOrganizationResponse = {}));
var DescribeEventDetailsRequest;
(function (DescribeEventDetailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventDetailsRequest");
    }
    DescribeEventDetailsRequest.isa = isa;
})(DescribeEventDetailsRequest = exports.DescribeEventDetailsRequest || (exports.DescribeEventDetailsRequest = {}));
var DescribeEventDetailsResponse;
(function (DescribeEventDetailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventDetailsResponse");
    }
    DescribeEventDetailsResponse.isa = isa;
})(DescribeEventDetailsResponse = exports.DescribeEventDetailsResponse || (exports.DescribeEventDetailsResponse = {}));
var DescribeEventTypesRequest;
(function (DescribeEventTypesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventTypesRequest");
    }
    DescribeEventTypesRequest.isa = isa;
})(DescribeEventTypesRequest = exports.DescribeEventTypesRequest || (exports.DescribeEventTypesRequest = {}));
var DescribeEventTypesResponse;
(function (DescribeEventTypesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventTypesResponse");
    }
    DescribeEventTypesResponse.isa = isa;
})(DescribeEventTypesResponse = exports.DescribeEventTypesResponse || (exports.DescribeEventTypesResponse = {}));
var DescribeEventsForOrganizationRequest;
(function (DescribeEventsForOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventsForOrganizationRequest");
    }
    DescribeEventsForOrganizationRequest.isa = isa;
})(DescribeEventsForOrganizationRequest = exports.DescribeEventsForOrganizationRequest || (exports.DescribeEventsForOrganizationRequest = {}));
var DescribeEventsForOrganizationResponse;
(function (DescribeEventsForOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventsForOrganizationResponse");
    }
    DescribeEventsForOrganizationResponse.isa = isa;
})(DescribeEventsForOrganizationResponse = exports.DescribeEventsForOrganizationResponse || (exports.DescribeEventsForOrganizationResponse = {}));
var DescribeEventsRequest;
(function (DescribeEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventsRequest");
    }
    DescribeEventsRequest.isa = isa;
})(DescribeEventsRequest = exports.DescribeEventsRequest || (exports.DescribeEventsRequest = {}));
var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventsResponse");
    }
    DescribeEventsResponse.isa = isa;
})(DescribeEventsResponse = exports.DescribeEventsResponse || (exports.DescribeEventsResponse = {}));
var DescribeHealthServiceStatusForOrganizationResponse;
(function (DescribeHealthServiceStatusForOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHealthServiceStatusForOrganizationResponse");
    }
    DescribeHealthServiceStatusForOrganizationResponse.isa = isa;
})(DescribeHealthServiceStatusForOrganizationResponse = exports.DescribeHealthServiceStatusForOrganizationResponse || (exports.DescribeHealthServiceStatusForOrganizationResponse = {}));
var AffectedEntity;
(function (AffectedEntity) {
    function isa(o) {
        return smithy_client_1.isa(o, "AffectedEntity");
    }
    AffectedEntity.isa = isa;
})(AffectedEntity = exports.AffectedEntity || (exports.AffectedEntity = {}));
var DateTimeRange;
(function (DateTimeRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "DateTimeRange");
    }
    DateTimeRange.isa = isa;
})(DateTimeRange = exports.DateTimeRange || (exports.DateTimeRange = {}));
var EntityAggregate;
(function (EntityAggregate) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityAggregate");
    }
    EntityAggregate.isa = isa;
})(EntityAggregate = exports.EntityAggregate || (exports.EntityAggregate = {}));
var EntityFilter;
(function (EntityFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityFilter");
    }
    EntityFilter.isa = isa;
})(EntityFilter = exports.EntityFilter || (exports.EntityFilter = {}));
var Event;
(function (Event) {
    function isa(o) {
        return smithy_client_1.isa(o, "Event");
    }
    Event.isa = isa;
})(Event = exports.Event || (exports.Event = {}));
var EventAccountFilter;
(function (EventAccountFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventAccountFilter");
    }
    EventAccountFilter.isa = isa;
})(EventAccountFilter = exports.EventAccountFilter || (exports.EventAccountFilter = {}));
var EventAggregate;
(function (EventAggregate) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventAggregate");
    }
    EventAggregate.isa = isa;
})(EventAggregate = exports.EventAggregate || (exports.EventAggregate = {}));
var EventDescription;
(function (EventDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventDescription");
    }
    EventDescription.isa = isa;
})(EventDescription = exports.EventDescription || (exports.EventDescription = {}));
var EventDetails;
(function (EventDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventDetails");
    }
    EventDetails.isa = isa;
})(EventDetails = exports.EventDetails || (exports.EventDetails = {}));
var EventDetailsErrorItem;
(function (EventDetailsErrorItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventDetailsErrorItem");
    }
    EventDetailsErrorItem.isa = isa;
})(EventDetailsErrorItem = exports.EventDetailsErrorItem || (exports.EventDetailsErrorItem = {}));
var EventFilter;
(function (EventFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventFilter");
    }
    EventFilter.isa = isa;
})(EventFilter = exports.EventFilter || (exports.EventFilter = {}));
var EventType;
(function (EventType) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventType");
    }
    EventType.isa = isa;
})(EventType = exports.EventType || (exports.EventType = {}));
var EventTypeFilter;
(function (EventTypeFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventTypeFilter");
    }
    EventTypeFilter.isa = isa;
})(EventTypeFilter = exports.EventTypeFilter || (exports.EventTypeFilter = {}));
var OrganizationAffectedEntitiesErrorItem;
(function (OrganizationAffectedEntitiesErrorItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationAffectedEntitiesErrorItem");
    }
    OrganizationAffectedEntitiesErrorItem.isa = isa;
})(OrganizationAffectedEntitiesErrorItem = exports.OrganizationAffectedEntitiesErrorItem || (exports.OrganizationAffectedEntitiesErrorItem = {}));
var OrganizationEvent;
(function (OrganizationEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationEvent");
    }
    OrganizationEvent.isa = isa;
})(OrganizationEvent = exports.OrganizationEvent || (exports.OrganizationEvent = {}));
var OrganizationEventDetails;
(function (OrganizationEventDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationEventDetails");
    }
    OrganizationEventDetails.isa = isa;
})(OrganizationEventDetails = exports.OrganizationEventDetails || (exports.OrganizationEventDetails = {}));
var OrganizationEventDetailsErrorItem;
(function (OrganizationEventDetailsErrorItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationEventDetailsErrorItem");
    }
    OrganizationEventDetailsErrorItem.isa = isa;
})(OrganizationEventDetailsErrorItem = exports.OrganizationEventDetailsErrorItem || (exports.OrganizationEventDetailsErrorItem = {}));
var OrganizationEventFilter;
(function (OrganizationEventFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationEventFilter");
    }
    OrganizationEventFilter.isa = isa;
})(OrganizationEventFilter = exports.OrganizationEventFilter || (exports.OrganizationEventFilter = {}));
//# sourceMappingURL=index.js.map