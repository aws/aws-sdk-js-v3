// smithy-typescript generated code
import type {
  ApiSelectionMode,
  Classification,
  Confidence,
  DesiredPublishStatus,
  DiscoveryConfigurationStatus,
  DiscoveryFailureReason,
  DiscoveryFeature,
  DiscoverySource,
  DiscoveryStatusValue,
  EventStatus,
  EventType,
  FailedItemErrorCode,
  FindingReason,
  FineGrainedAccessControl,
  HttpMethod,
  ManagedBy,
  PortalStatusExceptionType,
  PostureStatus,
  PreviewStatus,
  ProductApiPageStatusExceptionType,
  ProductFailureReason,
  ProductStatus,
  PublishStatus,
  ResourceOwner,
  RuleFilterKey,
  Status,
  TryItState,
  Visibility,
  WafStatus,
  Workload,
} from "./enums";

/**
 * A custom domain for the portal and the ACM certificate that covers it.
 * @public
 */
export interface ACMManaged {
  /**
   * The custom domain name for the portal.
   * @public
   */
  domainName: string | undefined;

  /**
   * The ARN of the ACM certificate for the domain. The certificate must be in us-east-1, issued, not private, and must cover the domain name.
   * @public
   */
  certificateArn: string | undefined;
}

/**
 * The parts that together identify an API.
 * @public
 */
export interface IdentifierParts {
  /**
   * The request path of the API.
   * @public
   */
  path: string | undefined;

  /**
   * The HTTP method of the API.
   * @public
   */
  method: string | undefined;

  /**
   * The ARN of the resource that serves the API.
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Identifies the API an API page documents.
 * @public
 */
export interface ApiId {
  /**
   * The resource, method, and path that identify the API.
   * @public
   */
  identifierParts?: IdentifierParts | undefined;
}

/**
 * Filters for listing API inventory items. All supplied filters must match.
 * @public
 */
export interface ApiInventoryFilters {
  /**
   * The AWS service that is the SOURCE of discovered APIs — i.e. the front-door service type whose
   * resources discovery crawls to find APIs. New source services may be added over time, so clients
   * MUST treat any unrecognized value gracefully.
   * @public
   */
  discoverySource?: DiscoverySource | undefined;

  /**
   * Return only APIs served by this resource.
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * An API found by discovery.
 * @public
 */
export interface ApiInventoryItem {
  /**
   * The HTTP method of the API.
   * @public
   */
  method: HttpMethod | undefined;

  /**
   * A discovered API's front-door hostname (e.g. an ALB, CloudFront, or API Gateway DNS name),
   * bounded by the DNS name limit (RFC 1035). Usually literal, but may contain placeholders:
   *   <*>  - stands for one dot-separated part of the hostname. When 10 or more hosts differ only
   *          in that part, they fold into one, e.g. a.example.com, b.example.com, ... become
   *          "<*>.example.com". Deeper levels fold the same way ("<*>.<*>.example.com").
   *          The registrable domain never folds.
   *   <ip> - an IP-literal host.
   * @public
   */
  host: string | undefined;

  /**
   * The port the API listens on, from 0 to 65535.
   * @public
   */
  port: number | undefined;

  /**
   * The request path of the API.
   * @public
   */
  path: string | undefined;

  /**
   * The AWS account ID that owns the API.
   * @public
   */
  accountId: string | undefined;

  /**
   * The ARN of the resource that serves the API, such as an API Gateway stage or a load balancer.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The AWS Region the API was discovered in.
   * @public
   */
  region: string | undefined;

  /**
   * The AWS service that is the SOURCE of discovered APIs — i.e. the front-door service type whose
   * resources discovery crawls to find APIs. New source services may be added over time, so clients
   * MUST treat any unrecognized value gracefully.
   * @public
   */
  discoverySource: DiscoverySource | undefined;

  /**
   * When discovery first observed the API.
   * @public
   */
  firstSeen?: Date | undefined;

  /**
   * When discovery most recently observed the API.
   * @public
   */
  lastSeen?: Date | undefined;

  /**
   * Whether a discovered API is reachable publicly or only from within a private network.
   * @public
   */
  visibility?: Visibility | undefined;

  /**
   * Whether a WAF web ACL is attached to the API's front-door service.
   * @public
   */
  wafStatus?: WafStatus | undefined;

  /**
   * Whether any account has created a ManagedApi for a discovered API, and for a managed API whether it
   * is unused or no longer in the caller's organization.
   *   SHADOW           - no account has created a ManagedApi for this item.
   *   MANAGED          - some account in the caller's organization has created a ManagedApi for this item.
   *   MANAGED_ZOMBIE   - managed and unused: no traffic for at least the account's no-traffic window. The
   *                      API is still reachable, so this clears once traffic resumes.
   *   MANAGED_ORPHANED - managed, but the account hosting the API has left the caller's organization or
   *                      been closed. The item is a last-known snapshot: it is no longer rediscovered, and
   *                      its findings are not authorized for the caller. An organizational unit move is
   *                      not a trigger.
   *
   * MANAGED_ZOMBIE and MANAGED_ORPHANED add detail to a MANAGED item, so neither is returned for an item
   * the caller does not manage, and MANAGED_ORPHANED takes priority over MANAGED_ZOMBIE. Both are derived
   * per request rather than stored, so neither expires on its own.
   * @public
   */
  classification?: Classification | undefined;

  /**
   * Who manages a MANAGED item, relative to the caller. Absent when the item is SHADOW.
   *   SELF         - the caller account has created the ManagedApi.
   *   ORGANIZATION - some other account in the caller's organization has, but the caller has not.
   * @public
   */
  managedBy?: ManagedBy | undefined;

  /**
   * AI protocols seen in this API's traffic, each listed at most once. Absent when none has been
   * reported, which includes an account that has not enabled AI discovery.
   * @public
   */
  workloads?: Workload[] | undefined;
}

/**
 * The full details of an API found by discovery.
 * @public
 */
export interface ApiInventoryItemDetail {
  /**
   * The HTTP method of the API.
   * @public
   */
  method: HttpMethod | undefined;

  /**
   * A discovered API's front-door hostname (e.g. an ALB, CloudFront, or API Gateway DNS name),
   * bounded by the DNS name limit (RFC 1035). Usually literal, but may contain placeholders:
   *   <*>  - stands for one dot-separated part of the hostname. When 10 or more hosts differ only
   *          in that part, they fold into one, e.g. a.example.com, b.example.com, ... become
   *          "<*>.example.com". Deeper levels fold the same way ("<*>.<*>.example.com").
   *          The registrable domain never folds.
   *   <ip> - an IP-literal host.
   * @public
   */
  host: string | undefined;

  /**
   * The port the API listens on, from 0 to 65535.
   * @public
   */
  port: number | undefined;

  /**
   * The request path of the API.
   * @public
   */
  path: string | undefined;

  /**
   * The AWS account ID that owns the API.
   * @public
   */
  accountId: string | undefined;

  /**
   * The ARN of the resource that serves the API, such as an API Gateway stage or a load balancer.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The AWS Region the API was discovered in.
   * @public
   */
  region: string | undefined;

  /**
   * The AWS service that is the SOURCE of discovered APIs — i.e. the front-door service type whose
   * resources discovery crawls to find APIs. New source services may be added over time, so clients
   * MUST treat any unrecognized value gracefully.
   * @public
   */
  discoverySource: DiscoverySource | undefined;

  /**
   * Whether a discovered API is reachable publicly or only from within a private network.
   * @public
   */
  visibility?: Visibility | undefined;

  /**
   * Whether a WAF web ACL is attached to the API's front-door service.
   * @public
   */
  wafStatus?: WafStatus | undefined;

  /**
   * Whether any account has created a ManagedApi for a discovered API, and for a managed API whether it
   * is unused or no longer in the caller's organization.
   *   SHADOW           - no account has created a ManagedApi for this item.
   *   MANAGED          - some account in the caller's organization has created a ManagedApi for this item.
   *   MANAGED_ZOMBIE   - managed and unused: no traffic for at least the account's no-traffic window. The
   *                      API is still reachable, so this clears once traffic resumes.
   *   MANAGED_ORPHANED - managed, but the account hosting the API has left the caller's organization or
   *                      been closed. The item is a last-known snapshot: it is no longer rediscovered, and
   *                      its findings are not authorized for the caller. An organizational unit move is
   *                      not a trigger.
   *
   * MANAGED_ZOMBIE and MANAGED_ORPHANED add detail to a MANAGED item, so neither is returned for an item
   * the caller does not manage, and MANAGED_ORPHANED takes priority over MANAGED_ZOMBIE. Both are derived
   * per request rather than stored, so neither expires on its own.
   * @public
   */
  classification?: Classification | undefined;

  /**
   * Who manages a MANAGED item, relative to the caller. Absent when the item is SHADOW.
   *   SELF         - the caller account has created the ManagedApi.
   *   ORGANIZATION - some other account in the caller's organization has, but the caller has not.
   * @public
   */
  managedBy?: ManagedBy | undefined;

  /**
   * AI protocols seen in this API's traffic, each listed at most once. Absent when none has been
   * reported, which includes an account that has not enabled AI discovery.
   * @public
   */
  workloads?: Workload[] | undefined;

  /**
   * The identifier of the Managed API created from this API. Absent if there is none.
   * @public
   */
  managedApiId?: string | undefined;
}

/**
 * An empty value, used in a union to choose the option that has no settings.
 * @public
 */
export interface None {}

/**
 * Content that replaces the defaults generated for an API page.
 * @public
 */
export interface DisplayContentOverrides {
  /**
   * The operation name shown as the page title, from 1 to 255 characters.
   * @public
   */
  operationName?: string | undefined;

  /**
   * The invoke URL shown on the page and used for Try-It and the portal's allowed-domain list:
   * http(s)://host[:port][/path], with no whitespace, quotes or angle brackets. On this request member
   * only, as ApiEndpoint is also returned in responses.
   * @public
   */
  apiUrl?: string | undefined;

  /**
   * The Markdown body of the page, from 1 to 32,768 characters.
   * @public
   */
  body?: string | undefined;
}

/**
 * Exactly one of the members is set: `none` to use default display content, or `overrides` to
 * customize it. Modeled as a union so the "exactly one" choice is enforced by type.
 * @public
 */
export type ApiPageDisplayContent =
  | ApiPageDisplayContent.NoneMember
  | ApiPageDisplayContent.OverridesMember
  | ApiPageDisplayContent.$UnknownMember;

/**
 * @public
 */
export namespace ApiPageDisplayContent {
  /**
   * Use the content generated from the Managed API.
   * @public
   */
  export interface NoneMember {
    none: None;
    overrides?: never;
    $unknown?: never;
  }

  /**
   * Replace the generated content with your own.
   * @public
   */
  export interface OverridesMember {
    none?: never;
    overrides: DisplayContentOverrides;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    none?: never;
    overrides?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    none: (value: None) => T;
    overrides: (value: DisplayContentOverrides) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The content shown on an API page.
 * @public
 */
export interface ApiPageDisplayContentResponse {
  /**
   * The operation name shown as the page title.
   * @public
   */
  operationName?: string | undefined;

  /**
   * The invoke URL shown on the page and used by Try-It.
   * @public
   */
  apiUrl: string | undefined;

  /**
   * The Markdown body of the page. Absent while the page is `IN_PROGRESS`.
   * @public
   */
  body?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDiscoveryConfigurationRequest {}

/**
 * @public
 */
export interface GetDiscoveryConfigurationRequest {}

/**
 * An account-level discovery configuration.
 * @public
 */
export interface DiscoveryConfigurationData {
  /**
   * The ARN of the discovery configuration.
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the discovery configuration.
   * @public
   */
  status?: DiscoveryConfigurationStatus | undefined;

  /**
   * The sources APIs are discovered from.
   * @public
   */
  discoverySources?: DiscoverySource[] | undefined;

  /**
   * The ARNs of resources left out of discovery.
   * @public
   */
  excludedResources?: string[] | undefined;

  /**
   * Optional capabilities enabled for this configuration. Absent when none are.
   * @public
   */
  features?: DiscoveryFeature[] | undefined;

  /**
   * When the resource was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDiscoveryConfigurationResponse {
  /**
   * The discovery configuration for the account.
   * @public
   */
  discoveryConfiguration: DiscoveryConfigurationData | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDiscoveryConfigurationRequest {
  /**
   * The sources to discover APIs from. Omitting it removes all sources, which stops discovery for this configuration.
   * @public
   */
  discoverySources?: DiscoverySource[] | undefined;

  /**
   * The ARNs of resources to leave out of discovery, up to 50.
   * @public
   */
  excludedResources?: string[] | undefined;

  /**
   * Optional capabilities to enable. Omitting it disables all of them, as with the other fields.
   * @public
   */
  features?: DiscoveryFeature[] | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDiscoveryConfigurationResponse {
  /**
   * The discovery configuration for the account.
   * @public
   */
  discoveryConfiguration: DiscoveryConfigurationData | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetApiInventoryItemRequest {
  /**
   * The HTTP method of the API.
   * @public
   */
  method: HttpMethod | undefined;

  /**
   * A discovered API's front-door hostname (e.g. an ALB, CloudFront, or API Gateway DNS name),
   * bounded by the DNS name limit (RFC 1035). Usually literal, but may contain placeholders:
   *   <*>  - stands for one dot-separated part of the hostname. When 10 or more hosts differ only
   *          in that part, they fold into one, e.g. a.example.com, b.example.com, ... become
   *          "<*>.example.com". Deeper levels fold the same way ("<*>.<*>.example.com").
   *          The registrable domain never folds.
   *   <ip> - an IP-literal host.
   * @public
   */
  host: string | undefined;

  /**
   * The port the API listens on, from 0 to 65535.
   * @public
   */
  port: number | undefined;

  /**
   * The request path of the API.
   * @public
   */
  path: string | undefined;

  /**
   * The ARN of the resource that serves the API, such as an API Gateway stage or a load balancer.
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetApiInventoryItemResponse {
  /**
   * The details of the API inventory item.
   * @public
   */
  item: ApiInventoryItemDetail | undefined;
}

/**
 * @public
 */
export interface ListApiInventoryItemsRequest {
  /**
   * Filters that limit the results. Omit it to list every discovered API.
   * @public
   */
  filters?: ApiInventoryFilters | undefined;

  /**
   * The maximum number of results to return in one page, from 1 to 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApiInventoryItemsResponse {
  /**
   * The discovered APIs in this page of results.
   * @public
   */
  items: ApiInventoryItem[] | undefined;

  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveryStatusesRequest {
  /**
   * The AWS service that is the SOURCE of discovered APIs — i.e. the front-door service type whose
   * resources discovery crawls to find APIs. New source services may be added over time, so clients
   * MUST treat any unrecognized value gracefully.
   * @public
   */
  discoverySource?: DiscoverySource | undefined;

  /**
   * The maximum number of results to return in one page, from 1 to 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The state of API discovery for one discovery source.
 * @public
 */
export interface DiscoveryStatus {
  /**
   * The AWS account ID the status applies to.
   * @public
   */
  accountId?: string | undefined;

  /**
   * The AWS service that is the SOURCE of discovered APIs — i.e. the front-door service type whose
   * resources discovery crawls to find APIs. New source services may be added over time, so clients
   * MUST treat any unrecognized value gracefully.
   * @public
   */
  discoverySource: DiscoverySource | undefined;

  /**
   * The current state of discovery for this source.
   * @public
   */
  status: DiscoveryStatusValue | undefined;

  /**
   * Typed reason for failure, present only when `status` is `FAILED`
   * @public
   */
  failureReason?: DiscoveryFailureReason | undefined;
}

/**
 * @public
 */
export interface ListDiscoveryStatusesResponse {
  /**
   * The discovery status for each account and discovery source.
   * @public
   */
  items: DiscoveryStatus[] | undefined;

  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The attributes that identify an API.
 * @public
 */
export interface ApiSignature {
  /**
   * The ARN of the resource that serves the API.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The HTTP method of the API.
   * @public
   */
  method: HttpMethod | undefined;

  /**
   * The host name the API is served on.
   * @public
   */
  hostname: string | undefined;

  /**
   * The port the API listens on, from 0 to 65535.
   * @public
   */
  port: number | undefined;

  /**
   * The request path of the API.
   * @public
   */
  path: string | undefined;
}

/**
 * @public
 */
export interface CreateManagedApiRequest {
  /**
   * The resource, method, host, port, and path that identify the API.
   * @public
   */
  apiSignature: ApiSignature | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateManagedApiResponse {
  /**
   * The identifier of the Managed API.
   * @public
   */
  managedApiId: string | undefined;

  /**
   * The ARN of the Managed API.
   * @public
   */
  managedApiArn: string | undefined;

  /**
   * The attributes that identify the API.
   * @public
   */
  apiSignature: ApiSignature | undefined;

  /**
   * When the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteManagedApiRequest {
  /**
   * The identifier of the Managed API.
   * @public
   */
  managedApiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedApiResponse {}

/**
 * @public
 */
export interface GetManagedApiRequest {
  /**
   * The identifier of the Managed API.
   * @public
   */
  managedApiId: string | undefined;
}

/**
 * Security posture finding attached to this API. Shape mirrors the inventory's
 * Finding sub-document.
 * @public
 */
export interface ManagedApiFinding {
  /**
   * The identifier of the posture check that produced the finding.
   * @public
   */
  postureId?: string | undefined;

  /**
   * Values are spelled exactly as the inventory document stores them, so the same string means the
   * same thing at both layers and no second translation sits between the index and the wire.
   * @public
   */
  postureStatus?: PostureStatus | undefined;

  /**
   * Why a posture is not satisfied, or why no verdict was reached. Present only when `postureStatus`
   * is `FALSE` or `INSUFFICIENT_DATA`. New reasons may be added over time, so clients MUST treat any
   * unrecognized value as `UNKNOWN` and fall back to generic handling.
   * @public
   */
  reason?: FindingReason | undefined;

  /**
   * When the finding was last updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetManagedApiResponse {
  /**
   * The identifier of the Managed API.
   * @public
   */
  managedApiId: string | undefined;

  /**
   * The ARN of the Managed API.
   * @public
   */
  managedApiArn: string | undefined;

  /**
   * The attributes that identify the API.
   * @public
   */
  apiSignature: ApiSignature | undefined;

  /**
   * When the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The security posture findings for the API, up to 100.
   * @public
   */
  findings?: ManagedApiFinding[] | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListManagedApiEventsRequest {
  /**
   * The identifier of the Managed API.
   * @public
   */
  managedApiId: string | undefined;

  /**
   * Inclusive lower bound on each event's start time; only events that started at or after this time are returned.
   * Optional; defaults to 30 days before the current time.
   * @public
   */
  startedAfter?: Date | undefined;

  /**
   * Exclusive upper bound on each event's start time; only events that started before this time are returned.
   * Optional; defaults to the current time.
   * @public
   */
  startedBefore?: Date | undefined;

  /**
   * The maximum number of results to return in one page, from 1 to 20.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Detail specific to a WAF API-security event.
 * @public
 */
export interface WafApiSecurityEventDetail {
  /**
   * Detection label (attack type + confidence tier).
   * @public
   */
  label?: string | undefined;

  /**
   * OWASP class — the primary display value (e.g. "API2:2023").
   * @public
   */
  category?: string | undefined;

  /**
   * Confidence tier of the detection.
   * @public
   */
  confidence?: Confidence | undefined;

  /**
   * WebACL that produced the event.
   * @public
   */
  webAclArn?: string | undefined;
}

/**
 * Summary of a single security event attributed to a managed API. This is the list view; full
 * per-event detail will come from GetManagedApiEvent in future.
 * @public
 */
export interface ManagedApiEventSummary {
  /**
   * Event identifier; row identity and input to GetManagedApiEvent.
   * @public
   */
  eventId: string | undefined;

  /**
   * Always WAF_API_SECURITY today.
   * @public
   */
  eventType?: EventType | undefined;

  /**
   * Lifecycle status of a security event.
   * @public
   */
  status?: EventStatus | undefined;

  /**
   * Detail specific to a WAF API-security event; populated when eventType is WAF_API_SECURITY.
   * @public
   */
  wafApiSecurityEventDetail?: WafApiSecurityEventDetail | undefined;

  /**
   * When the event was first observed.
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * When the event completed; absent while it is still in progress.
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * When the event was last updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedApiEventsResponse {
  /**
   * A page of security events for a managed API. Page size is bounded by the operation's maxResults;
   * callers retrieve all events by following nextToken.
   * @public
   */
  items: ManagedApiEventSummary[] | undefined;

  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedApisRequest {
  /**
   * The maximum number of results to return in one page, from 1 to 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional filter: when supplied, only Managed APIs associated with this product are returned.
   * @public
   */
  productId?: string | undefined;
}

/**
 * A summary of a Managed API.
 * @public
 */
export interface ManagedApiSummary {
  /**
   * The identifier of the Managed API.
   * @public
   */
  managedApiId: string | undefined;

  /**
   * The ARN of the Managed API.
   * @public
   */
  managedApiArn: string | undefined;

  /**
   * The attributes that identify the API.
   * @public
   */
  apiSignature: ApiSignature | undefined;

  /**
   * When the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedApisResponse {
  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Managed APIs in this page of results.
   * @public
   */
  items: ManagedApiSummary[] | undefined;
}

/**
 * @public
 */
export interface DeleteOrganizationDiscoveryConfigurationRequest {}

/**
 * @public
 */
export interface GetOrganizationDiscoveryConfigurationRequest {}

/**
 * Exclusion filters for organization-scoped discovery.
 * Resources matching any of these filters are excluded from discovery.
 * @public
 */
export interface DiscoveryExclusionFilters {
  /**
   * List of organizational unit IDs to exclude from discovery.
   * @public
   */
  organizationalUnitIds?: string[] | undefined;

  /**
   * List of AWS account IDs to exclude from discovery.
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * List of resource ARNs to exclude. Only ELB and CloudFront resource ARNs are supported.
   * @public
   */
  resourceArns?: string[] | undefined;
}

/**
 * Inclusion filters for organization-scoped discovery.
 * Only Resources matching any of these filters are included in discovery.
 * @public
 */
export interface DiscoveryInclusionFilters {
  /**
   * List of organizational unit IDs to include in discovery.
   * @public
   */
  organizationalUnitIds?: string[] | undefined;

  /**
   * List of AWS account IDs to include in discovery.
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * Limits organization-scoped discovery. Set exactly one member: `inclusionFilters` to discover only the matching targets, or `exclusionFilters` to discover everything except them.
 * @public
 */
export type OrganizationDiscoveryFilters =
  | OrganizationDiscoveryFilters.ExclusionFiltersMember
  | OrganizationDiscoveryFilters.InclusionFiltersMember
  | OrganizationDiscoveryFilters.$UnknownMember;

/**
 * @public
 */
export namespace OrganizationDiscoveryFilters {
  /**
   * Exclusion filters for organization-scoped discovery.
   * Resources matching any of these filters are excluded from discovery.
   * @public
   */
  export interface ExclusionFiltersMember {
    exclusionFilters: DiscoveryExclusionFilters;
    inclusionFilters?: never;
    $unknown?: never;
  }

  /**
   * Inclusion filters for organization-scoped discovery.
   * Only Resources matching any of these filters are included in discovery.
   * @public
   */
  export interface InclusionFiltersMember {
    exclusionFilters?: never;
    inclusionFilters: DiscoveryInclusionFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    exclusionFilters?: never;
    inclusionFilters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    exclusionFilters: (value: DiscoveryExclusionFilters) => T;
    inclusionFilters: (value: DiscoveryInclusionFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An organization-level discovery configuration.
 * @public
 */
export interface OrganizationDiscoveryConfigurationData {
  /**
   * The ARN of the organization discovery configuration.
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the discovery configuration.
   * @public
   */
  status?: DiscoveryConfigurationStatus | undefined;

  /**
   * The sources APIs are discovered from.
   * @public
   */
  discoverySources?: DiscoverySource[] | undefined;

  /**
   * Exclusion filters for organization-scoped discovery.
   * @deprecated. Remove this once client (Console) moves to discoveryFilters
   * @public
   */
  exclusionFilters?: DiscoveryExclusionFilters | undefined;

  /**
   * The accounts or organizational units included in or excluded from discovery.
   * @public
   */
  discoveryFilters?: OrganizationDiscoveryFilters | undefined;

  /**
   * Optional capabilities enabled for this configuration. Absent when none are.
   * @public
   */
  features?: DiscoveryFeature[] | undefined;

  /**
   * When the resource was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetOrganizationDiscoveryConfigurationResponse {
  /**
   * The discovery configuration for the organization.
   * @public
   */
  discoveryConfiguration: OrganizationDiscoveryConfigurationData | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutOrganizationDiscoveryConfigurationRequest {
  /**
   * The sources to discover APIs from. Omitting it removes all sources, which stops discovery for this configuration.
   * @public
   */
  discoverySources?: DiscoverySource[] | undefined;

  /**
   * Exclusion filters for organization-scoped discovery.
   * @deprecated. Remove this once client (Console) moves to discoveryFilters
   * @public
   */
  exclusionFilters?: DiscoveryExclusionFilters | undefined;

  /**
   * The accounts or organizational units to include in or exclude from discovery.
   * @public
   */
  discoveryFilters?: OrganizationDiscoveryFilters | undefined;

  /**
   * Optional capabilities to enable. Omitting it disables all of them, as with the other fields.
   * @public
   */
  features?: DiscoveryFeature[] | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutOrganizationDiscoveryConfigurationResponse {
  /**
   * The discovery configuration for the organization.
   * @public
   */
  discoveryConfiguration: OrganizationDiscoveryConfigurationData | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The Amazon Cognito resources readers use to sign in to a portal.
 * @public
 */
export interface CognitoConfig {
  /**
   * The ARN of the Cognito user pool.
   * @public
   */
  userPoolArn: string | undefined;

  /**
   * The ID of the user pool app client the portal uses.
   * @public
   */
  appClientId: string | undefined;

  /**
   * The domain of the user pool's hosted sign-in pages.
   * @public
   */
  userPoolDomain: string | undefined;

  /**
   * The ID of the Cognito identity pool. Required only for fine-grained access control.
   * @public
   */
  identityPoolId?: string | undefined;
}

/**
 * Exactly one of the members is set: `none` for no authorization, or `cognitoConfig` for Cognito.
 * Modeled as a union so the "exactly one" choice is enforced by type.
 * @public
 */
export type AuthorizationConfig =
  | AuthorizationConfig.CognitoConfigMember
  | AuthorizationConfig.NoneMember
  | AuthorizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizationConfig {
  /**
   * The portal is public and readers do not sign in.
   * @public
   */
  export interface NoneMember {
    none: None;
    cognitoConfig?: never;
    $unknown?: never;
  }

  /**
   * Readers sign in through an Amazon Cognito user pool.
   * @public
   */
  export interface CognitoConfigMember {
    none?: never;
    cognitoConfig: CognitoConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    none?: never;
    cognitoConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    none: (value: None) => T;
    cognitoConfig: (value: CognitoConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * How readers sign in to a portal.
 * @public
 */
export interface Authorization {
  /**
   * Exactly one of the members is set: `none` for no authorization, or `cognitoConfig` for Cognito.
   * Modeled as a union so the "exactly one" choice is enforced by type.
   * @public
   */
  authorizationConfig: AuthorizationConfig | undefined;

  /**
   * Whether access to individual products in the portal is controlled per reader.
   * @public
   */
  fineGrainedAccessControl: FineGrainedAccessControl | undefined;
}

/**
 * Exactly one of the members is set: `none` for no custom domain, or `acmManaged` to bring a
 * domain + ACM certificate. Modeled as a union so the "exactly one" choice is enforced by type.
 * @public
 */
export type EndpointConfigurationRequest =
  | EndpointConfigurationRequest.AcmManagedMember
  | EndpointConfigurationRequest.NoneMember
  | EndpointConfigurationRequest.$UnknownMember;

/**
 * @public
 */
export namespace EndpointConfigurationRequest {
  /**
   * Serve the portal only on its default domain.
   * @public
   */
  export interface NoneMember {
    none: None;
    acmManaged?: never;
    $unknown?: never;
  }

  /**
   * Serve the portal on your own domain, using a certificate from AWS Certificate Manager.
   * @public
   */
  export interface AcmManagedMember {
    none?: never;
    acmManaged: ACMManaged;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    none?: never;
    acmManaged?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    none: (value: None) => T;
    acmManaged: (value: ACMManaged) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The colors of a portal. Each value is a color string of up to 16 characters.
 * @public
 */
export interface CustomColors {
  /**
   * The page background color.
   * @public
   */
  backgroundColor: string | undefined;

  /**
   * The navigation pane color.
   * @public
   */
  navigationColor: string | undefined;

  /**
   * The header color.
   * @public
   */
  headerColor: string | undefined;

  /**
   * The text color.
   * @public
   */
  textColor: string | undefined;

  /**
   * The color of links, buttons, and other highlighted elements.
   * @public
   */
  accentColor: string | undefined;

  /**
   * The color of error and validation messages.
   * @public
   */
  errorValidationColor: string | undefined;
}

/**
 * The visual theme of a portal.
 * @public
 */
export interface PortalTheme {
  /**
   * The colors used in the portal.
   * @public
   */
  customColors: CustomColors | undefined;

  /**
   * When the portal logo was last uploaded. Absent if the portal has no logo.
   * @public
   */
  logoUploadedAt?: Date | undefined;
}

/**
 * The display settings of a portal.
 * @public
 */
export interface PortalContent {
  /**
   * The name shown in the portal, from 3 to 255 characters.
   * @public
   */
  displayName: string | undefined;

  /**
   * A description of the portal, up to 1024 characters.
   * @public
   */
  description?: string | undefined;

  /**
   * The colors and logo of the portal.
   * @public
   */
  theme: PortalTheme | undefined;
}

/**
 * @public
 */
export interface CreatePortalRequest {
  /**
   * The portal's display name, description, and theme.
   * @public
   */
  portalContent: PortalContent | undefined;

  /**
   * Exactly one of the members is set: `none` for no custom domain, or `acmManaged` to bring a
   * domain + ACM certificate. Modeled as a union so the "exactly one" choice is enforced by type.
   * @public
   */
  endpointConfiguration: EndpointConfigurationRequest | undefined;

  /**
   * How readers sign in to the portal, and whether fine-grained access control is on.
   * @public
   */
  authorization: Authorization | undefined;

  /**
   * The ARNs of the products the portal includes, up to 200.
   * @public
   */
  includedProductArns?: string[] | undefined;

  /**
   * The S3 location of the portal logo, in the form `s3://bucket/key`.
   * @public
   */
  logoUri?: string | undefined;

  /**
   * The name of the CloudWatch RUM app monitor that collects reader telemetry for the portal.
   * @public
   */
  rumAppMonitorName?: string | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The domains a portal is served on.
 * @public
 */
export interface EndpointConfigurationResponse {
  /**
   * The custom domain name of the portal. Absent if the portal has no custom domain.
   * @public
   */
  domainName?: string | undefined;

  /**
   * The ARN of the ACM certificate for the custom domain. Absent if the portal has no custom domain.
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The ID of the hosted zone for the portal's distribution. Use it to create an alias record for a custom domain.
   * @public
   */
  portalDomainHostedZoneId: string | undefined;

  /**
   * The default domain name assigned to the portal.
   * @public
   */
  portalDefaultDomainName: string | undefined;
}

/**
 * Failure detail attached to a Portal's publish/preview status: a typed reason plus an optional
 * human-readable message.
 * @public
 */
export interface PortalStatusException {
  /**
   * Treat any unrecognized value as INTERNAL_FAILURE.
   * @public
   */
  exception?: PortalStatusExceptionType | undefined;

  /**
   * A description of the failure.
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;

  /**
   * The ARN of the portal.
   * @public
   */
  portalArn: string | undefined;

  /**
   * The domain configuration of the portal.
   * @public
   */
  endpointConfiguration: EndpointConfigurationResponse | undefined;

  /**
   * How readers sign in to the portal, and whether fine-grained access control is on.
   * @public
   */
  authorization: Authorization | undefined;

  /**
   * The portal's display name, description, and theme.
   * @public
   */
  portalContent: PortalContent | undefined;

  /**
   * The ARNs of the products the portal includes.
   * @public
   */
  includedProductArns: string[] | undefined;

  /**
   * The publish status of the portal. Absent if the portal has never been published.
   * @public
   */
  publishStatus?: PublishStatus | undefined;

  /**
   * Failure detail attached to a Portal's publish/preview status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: PortalStatusException | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * When the portal was last published.
   * @public
   */
  publishedAt?: Date | undefined;

  /**
   * The description supplied with the most recent publish request.
   * @public
   */
  publishDescription?: string | undefined;

  /**
   * The name of the CloudWatch RUM app monitor that collects reader telemetry for the portal.
   * @public
   */
  rumAppMonitorName?: string | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePortalPreviewRequest {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;
}

/**
 * @public
 */
export interface GetPortalRequest {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;
}

/**
 * A preview of a portal.
 * @public
 */
export interface Preview {
  /**
   * The status of the preview.
   * @public
   */
  previewStatus: PreviewStatus | undefined;

  /**
   * Failure detail attached to a Portal's publish/preview status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: PortalStatusException | undefined;

  /**
   * The URL to view the preview. Present when `previewStatus` is `PREVIEW_READY`.
   * @public
   */
  previewUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetPortalResponse {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;

  /**
   * The ARN of the portal.
   * @public
   */
  portalArn: string | undefined;

  /**
   * The domain configuration of the portal.
   * @public
   */
  endpointConfiguration: EndpointConfigurationResponse | undefined;

  /**
   * How readers sign in to the portal, and whether fine-grained access control is on.
   * @public
   */
  authorization: Authorization | undefined;

  /**
   * The portal's display name, description, and theme.
   * @public
   */
  portalContent: PortalContent | undefined;

  /**
   * The ARNs of the products the portal includes.
   * @public
   */
  includedProductArns: string[] | undefined;

  /**
   * The publish status of the portal. Absent if the portal has never been published.
   * @public
   */
  publishStatus?: PublishStatus | undefined;

  /**
   * Failure detail attached to a Portal's publish/preview status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: PortalStatusException | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * When the portal was last published.
   * @public
   */
  publishedAt?: Date | undefined;

  /**
   * The description supplied with the most recent publish request.
   * @public
   */
  publishDescription?: string | undefined;

  /**
   * The name of the CloudWatch RUM app monitor that collects reader telemetry for the portal.
   * @public
   */
  rumAppMonitorName?: string | undefined;

  /**
   * The most recent preview of the portal. Absent if no preview has been created.
   * @public
   */
  preview?: Preview | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * The maximum number of results to return in one page, from 1 to 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a portal.
 * @public
 */
export interface PortalSummary {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;

  /**
   * The ARN of the portal.
   * @public
   */
  portalArn: string | undefined;

  /**
   * The domain configuration of the portal.
   * @public
   */
  endpointConfiguration: EndpointConfigurationResponse | undefined;

  /**
   * How readers sign in to the portal, and whether fine-grained access control is on.
   * @public
   */
  authorization: Authorization | undefined;

  /**
   * The portal's display name, description, and theme.
   * @public
   */
  portalContent: PortalContent | undefined;

  /**
   * The ARNs of the products the portal includes.
   * @public
   */
  includedProductArns: string[] | undefined;

  /**
   * The publish status of the portal. Absent if the portal has never been published.
   * @public
   */
  publishStatus?: PublishStatus | undefined;

  /**
   * Failure detail attached to a Portal's publish/preview status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: PortalStatusException | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * When the portal was last published.
   * @public
   */
  publishedAt?: Date | undefined;

  /**
   * The description supplied with the most recent publish request.
   * @public
   */
  publishDescription?: string | undefined;

  /**
   * The name of the CloudWatch RUM app monitor that collects reader telemetry for the portal.
   * @public
   */
  rumAppMonitorName?: string | undefined;

  /**
   * The most recent preview of the portal. Absent if no preview has been created.
   * @public
   */
  preview?: Preview | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * The portals in this page of results.
   * @public
   */
  items?: PortalSummary[] | undefined;

  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;

  /**
   * The new display name, description, and theme. Omit it to keep the current values.
   * @public
   */
  portalContent?: PortalContent | undefined;

  /**
   * Exactly one of the members is set: `none` for no custom domain, or `acmManaged` to bring a
   * domain + ACM certificate. Modeled as a union so the "exactly one" choice is enforced by type.
   * @public
   */
  endpointConfiguration?: EndpointConfigurationRequest | undefined;

  /**
   * The new authorization settings. Omit it to keep the current settings.
   * @public
   */
  authorization?: Authorization | undefined;

  /**
   * The new CloudWatch RUM app monitor name. Omit it to keep the current value.
   * @public
   */
  rumAppMonitorName?: string | undefined;

  /**
   * The new list of product ARNs, up to 200. It replaces the current list. Omit it to keep the current list.
   * @public
   */
  includedProductArns?: string[] | undefined;

  /**
   * The new S3 location of the portal logo, in the form `s3://bucket/key`. An empty string removes the logo. Omit it to keep the current logo.
   * @public
   */
  logoUri?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;

  /**
   * The ARN of the portal.
   * @public
   */
  portalArn: string | undefined;

  /**
   * The domain configuration of the portal.
   * @public
   */
  endpointConfiguration: EndpointConfigurationResponse | undefined;

  /**
   * How readers sign in to the portal, and whether fine-grained access control is on.
   * @public
   */
  authorization: Authorization | undefined;

  /**
   * The portal's display name, description, and theme.
   * @public
   */
  portalContent: PortalContent | undefined;

  /**
   * The ARNs of the products the portal includes.
   * @public
   */
  includedProductArns: string[] | undefined;

  /**
   * The publish status of the portal. Absent if the portal has never been published.
   * @public
   */
  publishStatus?: PublishStatus | undefined;

  /**
   * Failure detail attached to a Portal's publish/preview status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: PortalStatusException | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * When the portal was last published.
   * @public
   */
  publishedAt?: Date | undefined;

  /**
   * The description supplied with the most recent publish request.
   * @public
   */
  publishDescription?: string | undefined;

  /**
   * The name of the CloudWatch RUM app monitor that collects reader telemetry for the portal.
   * @public
   */
  rumAppMonitorName?: string | undefined;

  /**
   * The most recent preview of the portal. Absent if no preview has been created.
   * @public
   */
  preview?: Preview | undefined;
}

/**
 * @public
 */
export interface UpdatePortalPublishStatusRequest {
  /**
   * The identifier of the portal.
   * @public
   */
  portalId: string | undefined;

  /**
   * The terminal publish state a caller can request for a portal via UpdatePortalPublishStatus.
   * Only the two client-requestable targets are modeled here; the transient and failed states in
   * PublishStatus are set by the service and are not valid caller input.
   * @public
   */
  status: DesiredPublishStatus | undefined;

  /**
   * A description of this publish request, up to 1024 characters.
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateManagedApisRequest {
  /**
   * The identifier of the product to associate the Managed APIs with.
   * @public
   */
  productId: string | undefined;

  /**
   * Bounded list of Managed API IDs, used as the request payload for batch associate/disassociate.
   * @public
   */
  managedApiIds: string[] | undefined;
}

/**
 * One entry per Managed API ID that could not be processed in a batch call. Ids that succeed
 * are omitted from the response — callers infer success by absence.
 * @public
 */
export interface FailedManagedApiItem {
  /**
   * The identifier of the Managed API that could not be processed.
   * @public
   */
  managedApiId: string | undefined;

  /**
   * Machine-readable reason a Managed API ID couldn't be processed in a batch call. Clients
   * should key retry logic off this enum rather than parsing errorMessage.
   * @public
   */
  errorCode: FailedItemErrorCode | undefined;

  /**
   * A description of the failure.
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface AssociateManagedApisResponse {
  /**
   * The Managed APIs that could not be processed. IDs not listed here succeeded.
   * @public
   */
  failedItems: FailedManagedApiItem[] | undefined;
}

/**
 * Values are compared to the attribute as literals: exact and case-sensitive, no wildcards.
 * @public
 */
export interface RuleFilter {
  /**
   * The Managed API attribute a RuleFilter compares against.
   *   RESOURCE_ARN - apiSignature.resourceArn
   *   HOST         - apiSignature.hostname
   *   METHOD       - apiSignature.method, so values must be HttpMethod names
   *   PATH         - apiSignature.path
   *   PORT         - apiSignature.port, compared as its decimal string, so values must be 0-65535
   *                  with no leading zeros
   *   ACCOUNT      - the account hosting the API, which for an ORGANIZATION-scoped Managed API is the
   *                  member account rather than the account that created it
   * @public
   */
  key: RuleFilterKey | undefined;

  /**
   * The values to match. The filter matches when the attribute equals any of them.
   * @public
   */
  values: string[] | undefined;
}

/**
 * How Managed APIs are selected for a product. With `CUSTOM`, you associate APIs yourself. With `RULE_BASED`, the APIs that match `ruleFilters` are selected.
 * @public
 */
export interface ApiSelectionConfiguration {
  /**
   * How a product's member Managed APIs are chosen.
   *   CUSTOM     - the customer associates and disassociates Managed APIs explicitly.
   *   RULE_BASED - membership is derived from ruleFilters: every Managed API in the account that
   *                matches is associated, and nothing else is. BatchAssociateManagedApi and
   *                BatchDisassociateManagedApi are rejected for these products.
   *
   * Fixed at create time. UpdateProduct cannot change the mode of an existing product.
   * @public
   */
  apiSelectionMode: ApiSelectionMode | undefined;

  /**
   * Required for RULE_BASED, rejected for CUSTOM. Filters are combined with AND, the values
   * within one filter with OR, and evaluated only over the account's Managed APIs. Replaced as a
   * whole on update, not merged.
   * @public
   */
  ruleFilters?: RuleFilter[] | undefined;
}

/**
 * @public
 */
export interface CreateProductRequest {
  /**
   * The name of the product, from 1 to 255 characters.
   * @public
   */
  displayName: string | undefined;

  /**
   * A description of the product, up to 1024 characters.
   * @public
   */
  description?: string | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * How Managed APIs are selected for the product. The selection mode can't be changed after the product is created.
   * @public
   */
  apiSelectionConfiguration?: ApiSelectionConfiguration | undefined;
}

/**
 * A named group of API pages in the portal navigation.
 * @public
 */
export interface Section {
  /**
   * Shown in the portal navigation. Same bound as page titles and operation names, and no control
   * characters (the service rejects a blank name).
   * @public
   */
  sectionName?: string | undefined;

  /**
   * API pages in one section. No service-side limit exists today; this bound caps request size.
   * @public
   */
  productApiPageArns?: string[] | undefined;
}

/**
 * The order of a product's content in the portal navigation.
 * @public
 */
export interface DisplayOrder {
  /**
   * The ARN of the product page shown as the product overview.
   * @public
   */
  overviewPageArn?: string | undefined;

  /**
   * A product has at most DocHubLimits.DEFAULT_PAGES_PER_PRODUCT_LIMIT (40) pages, enforced by LimitsHelper.
   * @public
   */
  productPageArns?: string[] | undefined;

  /**
   * Sections in a product's navigation. No service-side limit exists today; this bound caps request size.
   * @public
   */
  contents?: Section[] | undefined;
}

/**
 * @public
 */
export interface CreateProductResponse {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The ARN of the product.
   * @public
   */
  productArn: string | undefined;

  /**
   * The name of the product, from 1 to 255 characters.
   * @public
   */
  displayName: string | undefined;

  /**
   * The order of the product's pages and API page sections in the portal navigation.
   * @public
   */
  displayOrder?: DisplayOrder | undefined;

  /**
   * A description of the product, up to 1024 characters.
   * @public
   */
  description?: string | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * How Managed APIs are selected for the product.
   * @public
   */
  apiSelectionConfiguration?: ApiSelectionConfiguration | undefined;

  /**
   * Whether the product's member APIs match its apiSelectionConfiguration.
   *   ACTIVE      - membership matches. The only status a CUSTOM product reports.
   *   IN_PROGRESS - ruleFilters changed and membership is still being evaluated.
   *   FAILED      - evaluation could not finish and membership is incomplete; failureReason says why.
   * @public
   */
  status?: ProductStatus | undefined;

  /**
   * Reason a product's rules could not be fully applied, present only when `status` is `FAILED`. New
   * reasons may be added over time, so clients MUST treat any unrecognized value as `UNKNOWN` and fall
   * back to generic handling.
   * @public
   */
  failureReason?: ProductFailureReason | undefined;
}

/**
 * @public
 */
export interface DeleteProductRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateManagedApisRequest {
  /**
   * The identifier of the product to disassociate the Managed APIs from.
   * @public
   */
  productId: string | undefined;

  /**
   * Bounded list of Managed API IDs, used as the request payload for batch associate/disassociate.
   * @public
   */
  managedApiIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateManagedApisResponse {
  /**
   * The Managed APIs that could not be processed. IDs not listed here succeeded.
   * @public
   */
  failedItems: FailedManagedApiItem[] | undefined;
}

/**
 * @public
 */
export interface GetProductRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The AWS account ID that owns the product. Supply it to read a product shared with you by another account. Omit it for products in your own account.
   * @public
   */
  resourceOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetProductResponse {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The ARN of the product.
   * @public
   */
  productArn: string | undefined;

  /**
   * The name of the product, from 1 to 255 characters.
   * @public
   */
  displayName: string | undefined;

  /**
   * The order of the product's pages and API page sections in the portal navigation.
   * @public
   */
  displayOrder: DisplayOrder | undefined;

  /**
   * A description of the product, up to 1024 characters.
   * @public
   */
  description: string | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * How Managed APIs are selected for the product.
   * @public
   */
  apiSelectionConfiguration?: ApiSelectionConfiguration | undefined;

  /**
   * Whether the product's member APIs match its apiSelectionConfiguration.
   *   ACTIVE      - membership matches. The only status a CUSTOM product reports.
   *   IN_PROGRESS - ruleFilters changed and membership is still being evaluated.
   *   FAILED      - evaluation could not finish and membership is incomplete; failureReason says why.
   * @public
   */
  status?: ProductStatus | undefined;

  /**
   * Reason a product's rules could not be fully applied, present only when `status` is `FAILED`. New
   * reasons may be added over time, so clients MUST treat any unrecognized value as `UNKNOWN` and fall
   * back to generic handling.
   * @public
   */
  failureReason?: ProductFailureReason | undefined;
}

/**
 * @public
 */
export interface ListProductsRequest {
  /**
   * The maximum number of results to return in one page, from 1 to 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Whose products to return: `SELF` for your own, `OTHER_ACCOUNTS` for products shared with you, or `ALL`. Defaults to `ALL`, or to `SELF` when `managedApiId` is supplied.
   * @public
   */
  resourceOwner?: ResourceOwner | undefined;

  /**
   * Optional filter: when supplied, only Products this Managed API is associated with are returned.
   * @public
   */
  managedApiId?: string | undefined;
}

/**
 * A summary of a product.
 * @public
 */
export interface ProductSummary {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The ARN of the product.
   * @public
   */
  productArn: string | undefined;

  /**
   * The name of the product, from 1 to 255 characters.
   * @public
   */
  displayName: string | undefined;

  /**
   * A description of the product, up to 1024 characters.
   * @public
   */
  description: string | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * How Managed APIs are selected for the product.
   * @public
   */
  apiSelectionConfiguration?: ApiSelectionConfiguration | undefined;

  /**
   * Whether the product's member APIs match its apiSelectionConfiguration.
   *   ACTIVE      - membership matches. The only status a CUSTOM product reports.
   *   IN_PROGRESS - ruleFilters changed and membership is still being evaluated.
   *   FAILED      - evaluation could not finish and membership is incomplete; failureReason says why.
   * @public
   */
  status?: ProductStatus | undefined;

  /**
   * Reason a product's rules could not be fully applied, present only when `status` is `FAILED`. New
   * reasons may be added over time, so clients MUST treat any unrecognized value as `UNKNOWN` and fall
   * back to generic handling.
   * @public
   */
  failureReason?: ProductFailureReason | undefined;
}

/**
 * @public
 */
export interface ListProductsResponse {
  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The products in this page of results.
   * @public
   */
  items?: ProductSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateProductApiPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The Managed API this page documents. It must already be associated with the product, and the page's
   * API identifier is taken from the Managed API rather than supplied by the caller.
   * @public
   */
  managedApiId: string | undefined;

  /**
   * Exactly one of the members is set: `none` to use default display content, or `overrides` to
   * customize it. Modeled as a union so the "exactly one" choice is enforced by type.
   * @public
   */
  displayContent?: ApiPageDisplayContent | undefined;

  /**
   * Whether readers can call the API from the page with Try-It. Defaults to `DISABLED`. To enable it, the page's API URL must use HTTPS on a domain that supports Try-It.
   * @public
   */
  tryItState?: TryItState | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Failure detail attached to a ProductApiPage's status: a typed reason plus an optional
 * human-readable message.
 * @public
 */
export interface ProductApiPageStatusException {
  /**
   * treat any unrecognized value as INTERNAL_FAILURE.
   * @public
   */
  exception?: ProductApiPageStatusExceptionType | undefined;

  /**
   * A description of the failure.
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreateProductApiPageResponse {
  /**
   * The identifier of the API page.
   * @public
   */
  productApiPageId: string | undefined;

  /**
   * The ARN of the API page.
   * @public
   */
  productApiPageArn: string | undefined;

  /**
   * The API the page documents.
   * @public
   */
  apiId: ApiId | undefined;

  /**
   * The content shown on the page.
   * @public
   */
  displayContent: ApiPageDisplayContentResponse | undefined;

  /**
   * Whether Try-It is enabled on the page.
   * @public
   */
  tryItState: TryItState | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the page content: `IN_PROGRESS` while it is generated, then `AVAILABLE` or `FAILED`.
   * @public
   */
  status: Status | undefined;

  /**
   * Failure detail attached to a ProductApiPage's status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: ProductApiPageStatusException | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteProductApiPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The identifier of the API page.
   * @public
   */
  productApiPageId: string | undefined;
}

/**
 * @public
 */
export interface GetProductApiPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The identifier of the API page.
   * @public
   */
  productApiPageId: string | undefined;

  /**
   * The AWS account ID that owns the product. Supply it to read a product shared with you by another account. Omit it for products in your own account.
   * @public
   */
  resourceOwnerAccountId?: string | undefined;

  /**
   * Set to `true` to also return the page body in `rawDisplayContent`.
   * @public
   */
  includeRawDisplayContent?: boolean | undefined;
}

/**
 * @public
 */
export interface GetProductApiPageResponse {
  /**
   * The identifier of the API page.
   * @public
   */
  productApiPageId: string | undefined;

  /**
   * The ARN of the API page.
   * @public
   */
  productApiPageArn: string | undefined;

  /**
   * The API the page documents.
   * @public
   */
  apiId: ApiId | undefined;

  /**
   * The content shown on the page.
   * @public
   */
  displayContent: ApiPageDisplayContentResponse | undefined;

  /**
   * Whether Try-It is enabled on the page.
   * @public
   */
  tryItState: TryItState | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the page content: `IN_PROGRESS` while it is generated, then `AVAILABLE` or `FAILED`.
   * @public
   */
  status: Status | undefined;

  /**
   * The Markdown body of the page. Returned only when `includeRawDisplayContent` is `true`.
   * @public
   */
  rawDisplayContent?: string | undefined;

  /**
   * Failure detail attached to a ProductApiPage's status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: ProductApiPageStatusException | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListProductApiPagesRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in one page, from 1 to 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The AWS account ID that owns the product. Supply it to read a product shared with you by another account. Omit it for products in your own account.
   * @public
   */
  resourceOwnerAccountId?: string | undefined;
}

/**
 * A summary of an API page, without its body.
 * @public
 */
export interface ProductApiPageSummaryNoBody {
  /**
   * The identifier of the API page.
   * @public
   */
  productApiPageId: string | undefined;

  /**
   * The ARN of the API page.
   * @public
   */
  productApiPageArn: string | undefined;

  /**
   * The API the page documents.
   * @public
   */
  apiId: ApiId | undefined;

  /**
   * The operation name shown as the page title.
   * @public
   */
  operationName?: string | undefined;

  /**
   * The invoke URL shown on the page and used by Try-It.
   * @public
   */
  apiUrl: string | undefined;

  /**
   * Whether Try-It is enabled on the page.
   * @public
   */
  tryItState: TryItState | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the page content: `IN_PROGRESS` while it is generated, then `AVAILABLE` or `FAILED`.
   * @public
   */
  status: Status | undefined;

  /**
   * Failure detail attached to a ProductApiPage's status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: ProductApiPageStatusException | undefined;
}

/**
 * @public
 */
export interface ListProductApiPagesResponse {
  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The API pages in this page of results.
   * @public
   */
  items: ProductApiPageSummaryNoBody[] | undefined;
}

/**
 * @public
 */
export interface UpdateProductApiPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The identifier of the API page.
   * @public
   */
  productApiPageId: string | undefined;

  /**
   * Exactly one of the members is set: `none` to use default display content, or `overrides` to
   * customize it. Modeled as a union so the "exactly one" choice is enforced by type.
   * @public
   */
  displayContent?: ApiPageDisplayContent | undefined;

  /**
   * The new Try-It setting. Omit it to keep the current setting. To enable it, the page's API URL must use HTTPS on a domain that supports Try-It.
   * @public
   */
  tryItState?: TryItState | undefined;
}

/**
 * @public
 */
export interface UpdateProductApiPageResponse {
  /**
   * The identifier of the API page.
   * @public
   */
  productApiPageId: string | undefined;

  /**
   * The ARN of the API page.
   * @public
   */
  productApiPageArn: string | undefined;

  /**
   * The API the page documents.
   * @public
   */
  apiId: ApiId | undefined;

  /**
   * The content shown on the page.
   * @public
   */
  displayContent: ApiPageDisplayContentResponse | undefined;

  /**
   * Whether Try-It is enabled on the page.
   * @public
   */
  tryItState: TryItState | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the page content: `IN_PROGRESS` while it is generated, then `AVAILABLE` or `FAILED`.
   * @public
   */
  status: Status | undefined;

  /**
   * Failure detail attached to a ProductApiPage's status: a typed reason plus an optional
   * human-readable message.
   * @public
   */
  statusException?: ProductApiPageStatusException | undefined;
}

/**
 * The content of a product page.
 * @public
 */
export interface DisplayContent {
  /**
   * The page title, from 1 to 255 characters.
   * @public
   */
  title: string | undefined;

  /**
   * The Markdown body of the page, from 1 to 32,768 characters.
   * @public
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface CreateProductPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The title and body of the page.
   * @public
   */
  displayContent: DisplayContent | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProductPageResponse {
  /**
   * The identifier of the product page.
   * @public
   */
  productPageId: string | undefined;

  /**
   * The ARN of the product page.
   * @public
   */
  productPageArn: string | undefined;

  /**
   * The title and body of the page.
   * @public
   */
  displayContent?: DisplayContent | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteProductPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The identifier of the product page.
   * @public
   */
  productPageId: string | undefined;
}

/**
 * @public
 */
export interface GetProductPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The identifier of the product page.
   * @public
   */
  productPageId: string | undefined;

  /**
   * The AWS account ID that owns the product. Supply it to read a product shared with you by another account. Omit it for products in your own account.
   * @public
   */
  resourceOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetProductPageResponse {
  /**
   * The identifier of the product page.
   * @public
   */
  productPageId: string | undefined;

  /**
   * The ARN of the product page.
   * @public
   */
  productPageArn: string | undefined;

  /**
   * The title and body of the page.
   * @public
   */
  displayContent: DisplayContent | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListProductPagesRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The pagination token returned by a previous call. Omit it to get the first page.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in one page, from 1 to 100.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The AWS account ID that owns the product. Supply it to read a product shared with you by another account. Omit it for products in your own account.
   * @public
   */
  resourceOwnerAccountId?: string | undefined;
}

/**
 * A summary of a product page, without its body.
 * @public
 */
export interface ProductPageSummaryNoBody {
  /**
   * The identifier of the product page.
   * @public
   */
  productPageId: string | undefined;

  /**
   * The ARN of the product page.
   * @public
   */
  productPageArn: string | undefined;

  /**
   * The page title.
   * @public
   */
  pageTitle: string | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListProductPagesResponse {
  /**
   * The token to pass in the next request to get the next page. Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The product pages in this page of results.
   * @public
   */
  items: ProductPageSummaryNoBody[] | undefined;
}

/**
 * @public
 */
export interface UpdateProductPageRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The identifier of the product page.
   * @public
   */
  productPageId: string | undefined;

  /**
   * The new title and body of the page. Omit it to keep the current content.
   * @public
   */
  displayContent?: DisplayContent | undefined;
}

/**
 * @public
 */
export interface UpdateProductPageResponse {
  /**
   * The identifier of the product page.
   * @public
   */
  productPageId: string | undefined;

  /**
   * The ARN of the product page.
   * @public
   */
  productPageArn: string | undefined;

  /**
   * The title and body of the page.
   * @public
   */
  displayContent?: DisplayContent | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteProductSharingPolicyRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;
}

/**
 * @public
 */
export interface GetProductSharingPolicyRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;
}

/**
 * @public
 */
export interface GetProductSharingPolicyResponse {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The sharing policy as a JSON resource policy document.
   * @public
   */
  policyDocument: string | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutProductSharingPolicyRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The sharing policy as a JSON resource policy document.
   * @public
   */
  policyDocument: string | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateProductRequest {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The new name of the product. Omit it to keep the current name.
   * @public
   */
  displayName?: string | undefined;

  /**
   * The new description of the product. Omit it to keep the current description.
   * @public
   */
  description?: string | undefined;

  /**
   * The new page order. Omit it to keep the current order.
   * @public
   */
  displayOrder?: DisplayOrder | undefined;

  /**
   * The new API selection settings. The selection mode must match the mode the product was created with. Omit it to keep the current settings.
   * @public
   */
  apiSelectionConfiguration?: ApiSelectionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateProductResponse {
  /**
   * The identifier of the product.
   * @public
   */
  productId: string | undefined;

  /**
   * The ARN of the product.
   * @public
   */
  productArn: string | undefined;

  /**
   * The name of the product, from 1 to 255 characters.
   * @public
   */
  displayName: string | undefined;

  /**
   * The order of the product's pages and API page sections in the portal navigation.
   * @public
   */
  displayOrder?: DisplayOrder | undefined;

  /**
   * A description of the product, up to 1024 characters.
   * @public
   */
  description?: string | undefined;

  /**
   * When the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * How Managed APIs are selected for the product.
   * @public
   */
  apiSelectionConfiguration?: ApiSelectionConfiguration | undefined;

  /**
   * Whether the product's member APIs match its apiSelectionConfiguration.
   *   ACTIVE      - membership matches. The only status a CUSTOM product reports.
   *   IN_PROGRESS - ruleFilters changed and membership is still being evaluated.
   *   FAILED      - evaluation could not finish and membership is incomplete; failureReason says why.
   * @public
   */
  status?: ProductStatus | undefined;

  /**
   * Reason a product's rules could not be fully applied, present only when `status` is `FAILED`. New
   * reasons may be added over time, so clients MUST treat any unrecognized value as `UNKNOWN` and fall
   * back to generic handling.
   * @public
   */
  failureReason?: ProductFailureReason | undefined;
}

/**
 * @public
 */
export interface StartDiscoveryRequest {
  /**
   * Identifier of the discovery configuration to start. Required. Today this is the configuration
   * ARN, which carries the owner account id so a delegated admin or org admin can start an
   * org-scoped configuration that lives in a different account.
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDiscoveryRequest {
  /**
   * Identifier of the discovery configuration to stop. Required. Today this is the configuration
   * ARN, which carries the owner account id so a delegated admin or org admin can stop an
   * org-scoped configuration that lives in a different account.
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Up to 50 tags per request, matching API Gateway's limit of 50 tags per resource.
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove, up to 50.
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
