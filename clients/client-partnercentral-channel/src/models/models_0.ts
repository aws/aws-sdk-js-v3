// smithy-typescript generated code
import type {
  AssociationType,
  Coverage,
  HandshakeStatus,
  HandshakeType,
  ListProgramManagementAccountsSortName,
  ListRelationshipsSortName,
  ParticipantType,
  Program,
  ProgramManagementAccountStatus,
  ProgramManagementAccountTypeSortName,
  Provider,
  ResaleAccountModel,
  RevokeServicePeriodTypeSortName,
  Sector,
  ServicePeriodType,
  SortOrder,
  StartServicePeriodTypeSortName,
} from "./enums";

/**
 * @public
 */
export interface AcceptChannelHandshakeRequest {
  /**
   * The catalog identifier for the handshake request.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The unique identifier of the channel handshake to accept.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * Contains details about an accepted channel handshake.
 *
 * @public
 */
export interface AcceptChannelHandshakeDetail {
  /**
   * The unique identifier of the accepted handshake.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the accepted handshake.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The current status of the accepted handshake.
   *
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface AcceptChannelHandshakeResponse {
  /**
   * Details of the accepted channel handshake.
   *
   * @public
   */
  channelHandshakeDetail?: AcceptChannelHandshakeDetail | undefined;
}

/**
 * Information about a field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The validation error code for the field.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A descriptive message about the validation error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CancelChannelHandshakeRequest {
  /**
   * The catalog identifier for the handshake request.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The unique identifier of the channel handshake to cancel.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * Contains details about a canceled channel handshake.
 *
 * @public
 */
export interface CancelChannelHandshakeDetail {
  /**
   * The unique identifier of the canceled handshake.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the canceled handshake.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The current status of the canceled handshake.
   *
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface CancelChannelHandshakeResponse {
  /**
   * Details of the canceled channel handshake.
   *
   * @public
   */
  channelHandshakeDetail?: CancelChannelHandshakeDetail | undefined;
}

/**
 * Payload for revoke service period handshake requests.
 *
 * @public
 */
export interface RevokeServicePeriodPayload {
  /**
   * The identifier of the program management account.
   *
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * A note explaining the reason for revoking the service period.
   *
   * @public
   */
  note?: string | undefined;
}

/**
 * Payload for start service period handshake requests.
 *
 * @public
 */
export interface StartServicePeriodPayload {
  /**
   * The identifier of the program management account.
   *
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * A note providing additional information about the service period.
   *
   * @public
   */
  note?: string | undefined;

  /**
   * The type of service period being started.
   *
   * @public
   */
  servicePeriodType: ServicePeriodType | undefined;

  /**
   * The minimum number of days notice required for changes.
   *
   * @public
   */
  minimumNoticeDays?: string | undefined;

  /**
   * The end date of the service period.
   *
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * Contains the payload data for different types of channel handshakes.
 *
 * @public
 */
export type ChannelHandshakePayload =
  | ChannelHandshakePayload.RevokeServicePeriodPayloadMember
  | ChannelHandshakePayload.StartServicePeriodPayloadMember
  | ChannelHandshakePayload.$UnknownMember;

/**
 * @public
 */
export namespace ChannelHandshakePayload {
  /**
   * Payload for starting a service period handshake.
   *
   * @public
   */
  export interface StartServicePeriodPayloadMember {
    startServicePeriodPayload: StartServicePeriodPayload;
    revokeServicePeriodPayload?: never;
    $unknown?: never;
  }

  /**
   * Payload for revoking a service period handshake.
   *
   * @public
   */
  export interface RevokeServicePeriodPayloadMember {
    startServicePeriodPayload?: never;
    revokeServicePeriodPayload: RevokeServicePeriodPayload;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    startServicePeriodPayload?: never;
    revokeServicePeriodPayload?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    startServicePeriodPayload: (value: StartServicePeriodPayload) => T;
    revokeServicePeriodPayload: (value: RevokeServicePeriodPayload) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A key-value pair that can be associated with a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelHandshakeRequest {
  /**
   * The type of handshake to create (e.g., start service period, revoke service period).
   *
   * @public
   */
  handshakeType: HandshakeType | undefined;

  /**
   * The catalog identifier for the handshake request.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The identifier of the resource associated with this handshake.
   *
   * @public
   */
  associatedResourceIdentifier: string | undefined;

  /**
   * The payload containing specific details for the handshake type.
   *
   * @public
   */
  payload?: ChannelHandshakePayload | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Key-value pairs to associate with the channel handshake.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains details about a newly created channel handshake.
 *
 * @public
 */
export interface CreateChannelHandshakeDetail {
  /**
   * The unique identifier of the created handshake.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created handshake.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelHandshakeResponse {
  /**
   * Details of the created channel handshake.
   *
   * @public
   */
  channelHandshakeDetail?: CreateChannelHandshakeDetail | undefined;
}

/**
 * Type-specific filters for program management accounts.
 *
 * @public
 */
export interface ProgramManagementAccountTypeFilters {
  /**
   * Filter by program types.
   *
   * @public
   */
  programs?: Program[] | undefined;
}

/**
 * Filters specific to revoke service period handshakes.
 *
 * @public
 */
export interface RevokeServicePeriodTypeFilters {
  /**
   * Filter by service period types.
   *
   * @public
   */
  servicePeriodTypes?: ServicePeriodType[] | undefined;
}

/**
 * Filters specific to start service period handshakes.
 *
 * @public
 */
export interface StartServicePeriodTypeFilters {
  /**
   * Filter by service period types.
   *
   * @public
   */
  servicePeriodTypes?: ServicePeriodType[] | undefined;
}

/**
 * Type-specific filters for listing channel handshakes.
 *
 * @public
 */
export type ListChannelHandshakesTypeFilters =
  | ListChannelHandshakesTypeFilters.ProgramManagementAccountTypeFiltersMember
  | ListChannelHandshakesTypeFilters.RevokeServicePeriodTypeFiltersMember
  | ListChannelHandshakesTypeFilters.StartServicePeriodTypeFiltersMember
  | ListChannelHandshakesTypeFilters.$UnknownMember;

/**
 * @public
 */
export namespace ListChannelHandshakesTypeFilters {
  /**
   * Filters specific to start service period handshakes.
   *
   * @public
   */
  export interface StartServicePeriodTypeFiltersMember {
    startServicePeriodTypeFilters: StartServicePeriodTypeFilters;
    revokeServicePeriodTypeFilters?: never;
    programManagementAccountTypeFilters?: never;
    $unknown?: never;
  }

  /**
   * Filters specific to revoke service period handshakes.
   *
   * @public
   */
  export interface RevokeServicePeriodTypeFiltersMember {
    startServicePeriodTypeFilters?: never;
    revokeServicePeriodTypeFilters: RevokeServicePeriodTypeFilters;
    programManagementAccountTypeFilters?: never;
    $unknown?: never;
  }

  /**
   * Filters specific to program management account handshakes.
   *
   * @public
   */
  export interface ProgramManagementAccountTypeFiltersMember {
    startServicePeriodTypeFilters?: never;
    revokeServicePeriodTypeFilters?: never;
    programManagementAccountTypeFilters: ProgramManagementAccountTypeFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    startServicePeriodTypeFilters?: never;
    revokeServicePeriodTypeFilters?: never;
    programManagementAccountTypeFilters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    startServicePeriodTypeFilters: (value: StartServicePeriodTypeFilters) => T;
    revokeServicePeriodTypeFilters: (value: RevokeServicePeriodTypeFilters) => T;
    programManagementAccountTypeFilters: (value: ProgramManagementAccountTypeFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Type-specific sorting options for program management accounts.
 *
 * @public
 */
export interface ProgramManagementAccountTypeSort {
  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The field to sort by.
   *
   * @public
   */
  sortBy: ProgramManagementAccountTypeSortName | undefined;
}

/**
 * Sorting options specific to revoke service period handshakes.
 *
 * @public
 */
export interface RevokeServicePeriodTypeSort {
  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The field to sort by.
   *
   * @public
   */
  sortBy: RevokeServicePeriodTypeSortName | undefined;
}

/**
 * Sorting options specific to start service period handshakes.
 *
 * @public
 */
export interface StartServicePeriodTypeSort {
  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The field to sort by.
   *
   * @public
   */
  sortBy: StartServicePeriodTypeSortName | undefined;
}

/**
 * Type-specific sorting options for listing channel handshakes.
 *
 * @public
 */
export type ListChannelHandshakesTypeSort =
  | ListChannelHandshakesTypeSort.ProgramManagementAccountTypeSortMember
  | ListChannelHandshakesTypeSort.RevokeServicePeriodTypeSortMember
  | ListChannelHandshakesTypeSort.StartServicePeriodTypeSortMember
  | ListChannelHandshakesTypeSort.$UnknownMember;

/**
 * @public
 */
export namespace ListChannelHandshakesTypeSort {
  /**
   * Sorting options specific to start service period handshakes.
   *
   * @public
   */
  export interface StartServicePeriodTypeSortMember {
    startServicePeriodTypeSort: StartServicePeriodTypeSort;
    revokeServicePeriodTypeSort?: never;
    programManagementAccountTypeSort?: never;
    $unknown?: never;
  }

  /**
   * Sorting options specific to revoke service period handshakes.
   *
   * @public
   */
  export interface RevokeServicePeriodTypeSortMember {
    startServicePeriodTypeSort?: never;
    revokeServicePeriodTypeSort: RevokeServicePeriodTypeSort;
    programManagementAccountTypeSort?: never;
    $unknown?: never;
  }

  /**
   * Sorting options specific to program management account handshakes.
   *
   * @public
   */
  export interface ProgramManagementAccountTypeSortMember {
    startServicePeriodTypeSort?: never;
    revokeServicePeriodTypeSort?: never;
    programManagementAccountTypeSort: ProgramManagementAccountTypeSort;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    startServicePeriodTypeSort?: never;
    revokeServicePeriodTypeSort?: never;
    programManagementAccountTypeSort?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    startServicePeriodTypeSort: (value: StartServicePeriodTypeSort) => T;
    revokeServicePeriodTypeSort: (value: RevokeServicePeriodTypeSort) => T;
    programManagementAccountTypeSort: (value: ProgramManagementAccountTypeSort) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListChannelHandshakesRequest {
  /**
   * Filter results by handshake type.
   *
   * @public
   */
  handshakeType: HandshakeType | undefined;

  /**
   * The catalog identifier to filter handshakes.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * Filter by participant type (sender or receiver).
   *
   * @public
   */
  participantType: ParticipantType | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filter results by handshake status.
   *
   * @public
   */
  statuses?: HandshakeStatus[] | undefined;

  /**
   * Filter by associated resource identifiers.
   *
   * @public
   */
  associatedResourceIdentifiers?: string[] | undefined;

  /**
   * Type-specific filters for handshakes.
   *
   * @public
   */
  handshakeTypeFilters?: ListChannelHandshakesTypeFilters | undefined;

  /**
   * Type-specific sorting options for handshakes.
   *
   * @public
   */
  handshakeTypeSort?: ListChannelHandshakesTypeSort | undefined;

  /**
   * Token for retrieving the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details specific to program management account handshakes.
 *
 * @public
 */
export interface ProgramManagementAccountHandshakeDetail {
  /**
   * The program associated with the handshake.
   *
   * @public
   */
  program?: Program | undefined;
}

/**
 * Details specific to revoke service period handshakes.
 *
 * @public
 */
export interface RevokeServicePeriodHandshakeDetail {
  /**
   * A note explaining the reason for revoking the service period.
   *
   * @public
   */
  note?: string | undefined;

  /**
   * The type of service period being revoked.
   *
   * @public
   */
  servicePeriodType?: ServicePeriodType | undefined;

  /**
   * The minimum number of days notice required for revocation.
   *
   * @public
   */
  minimumNoticeDays?: string | undefined;

  /**
   * The start date of the service period being revoked.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The end date of the service period being revoked.
   *
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * Details specific to start service period handshakes.
 *
 * @public
 */
export interface StartServicePeriodHandshakeDetail {
  /**
   * A note providing additional information about the service period.
   *
   * @public
   */
  note?: string | undefined;

  /**
   * The type of service period being started.
   *
   * @public
   */
  servicePeriodType?: ServicePeriodType | undefined;

  /**
   * The minimum number of days notice required for changes.
   *
   * @public
   */
  minimumNoticeDays?: string | undefined;

  /**
   * The start date of the service period.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The end date of the service period.
   *
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * Contains detailed information about different types of handshakes.
 *
 * @public
 */
export type HandshakeDetail =
  | HandshakeDetail.ProgramManagementAccountHandshakeDetailMember
  | HandshakeDetail.RevokeServicePeriodHandshakeDetailMember
  | HandshakeDetail.StartServicePeriodHandshakeDetailMember
  | HandshakeDetail.$UnknownMember;

/**
 * @public
 */
export namespace HandshakeDetail {
  /**
   * Details for a start service period handshake.
   *
   * @public
   */
  export interface StartServicePeriodHandshakeDetailMember {
    startServicePeriodHandshakeDetail: StartServicePeriodHandshakeDetail;
    revokeServicePeriodHandshakeDetail?: never;
    programManagementAccountHandshakeDetail?: never;
    $unknown?: never;
  }

  /**
   * Details for a revoke service period handshake.
   *
   * @public
   */
  export interface RevokeServicePeriodHandshakeDetailMember {
    startServicePeriodHandshakeDetail?: never;
    revokeServicePeriodHandshakeDetail: RevokeServicePeriodHandshakeDetail;
    programManagementAccountHandshakeDetail?: never;
    $unknown?: never;
  }

  /**
   * Details for a program management account handshake.
   *
   * @public
   */
  export interface ProgramManagementAccountHandshakeDetailMember {
    startServicePeriodHandshakeDetail?: never;
    revokeServicePeriodHandshakeDetail?: never;
    programManagementAccountHandshakeDetail: ProgramManagementAccountHandshakeDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    startServicePeriodHandshakeDetail?: never;
    revokeServicePeriodHandshakeDetail?: never;
    programManagementAccountHandshakeDetail?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    startServicePeriodHandshakeDetail: (value: StartServicePeriodHandshakeDetail) => T;
    revokeServicePeriodHandshakeDetail: (value: RevokeServicePeriodHandshakeDetail) => T;
    programManagementAccountHandshakeDetail: (value: ProgramManagementAccountHandshakeDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Summary information about a channel handshake.
 *
 * @public
 */
export interface ChannelHandshakeSummary {
  /**
   * The unique identifier of the handshake.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the handshake.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The catalog identifier associated with the handshake.
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The type of the handshake.
   *
   * @public
   */
  handshakeType?: HandshakeType | undefined;

  /**
   * The AWS account ID of the handshake owner.
   *
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * The AWS account ID of the handshake sender.
   *
   * @public
   */
  senderAccountId?: string | undefined;

  /**
   * The display name of the handshake sender.
   *
   * @public
   */
  senderDisplayName?: string | undefined;

  /**
   * The AWS account ID of the handshake receiver.
   *
   * @public
   */
  receiverAccountId?: string | undefined;

  /**
   * The identifier of the resource associated with the handshake.
   *
   * @public
   */
  associatedResourceId?: string | undefined;

  /**
   * Detailed information about the handshake.
   *
   * @public
   */
  detail?: HandshakeDetail | undefined;

  /**
   * The timestamp when the handshake was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the handshake was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The current status of the handshake.
   *
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface ListChannelHandshakesResponse {
  /**
   * List of channel handshakes matching the criteria.
   *
   * @public
   */
  items?: ChannelHandshakeSummary[] | undefined;

  /**
   * Token for retrieving the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectChannelHandshakeRequest {
  /**
   * The catalog identifier for the handshake request.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The unique identifier of the channel handshake to reject.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * Contains details about a rejected channel handshake.
 *
 * @public
 */
export interface RejectChannelHandshakeDetail {
  /**
   * The unique identifier of the rejected handshake.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rejected handshake.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The current status of the rejected handshake.
   *
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface RejectChannelHandshakeResponse {
  /**
   * Details of the rejected channel handshake.
   *
   * @public
   */
  channelHandshakeDetail?: RejectChannelHandshakeDetail | undefined;
}

/**
 * @public
 */
export interface CreateProgramManagementAccountRequest {
  /**
   * The catalog identifier for the program management account.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The program type for the management account.
   *
   * @public
   */
  program: Program | undefined;

  /**
   * A human-readable name for the program management account.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The AWS account ID to associate with the program management account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Key-value pairs to associate with the program management account.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains details about a newly created program management account.
 *
 * @public
 */
export interface CreateProgramManagementAccountDetail {
  /**
   * The unique identifier of the created program management account.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created program management account.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateProgramManagementAccountResponse {
  /**
   * Details of the created program management account.
   *
   * @public
   */
  programManagementAccountDetail?: CreateProgramManagementAccountDetail | undefined;
}

/**
 * Configuration for partner-led support plans.
 *
 * @public
 */
export interface PartnerLedSupport {
  /**
   * The coverage level for partner-led support.
   *
   * @public
   */
  coverage: Coverage | undefined;

  /**
   * The provider of the partner-led support.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * The location of the Technical Account Manager (TAM).
   *
   * @public
   */
  tamLocation: string | undefined;
}

/**
 * Configuration for resold enterprise support plans.
 *
 * @public
 */
export interface ResoldEnterprise {
  /**
   * The coverage level for resold enterprise support.
   *
   * @public
   */
  coverage: Coverage | undefined;

  /**
   * The location of the Technical Account Manager (TAM).
   *
   * @public
   */
  tamLocation: string | undefined;

  /**
   * The AWS account ID to charge for the support plan.
   *
   * @public
   */
  chargeAccountId?: string | undefined;
}

/**
 * Configuration for resold unified operations support plans.
 *
 * @public
 */
export interface ResoldUnifiedOperations {
  /**
   * The coverage level for resold unified operations support.
   *
   * @public
   */
  coverage: Coverage | undefined;

  /**
   * The location of the Technical Account Manager (TAM).
   *
   * @public
   */
  tamLocation: string | undefined;

  /**
   * The AWS account ID to charge for the support plan.
   *
   * @public
   */
  chargeAccountId?: string | undefined;
}

/**
 * Configuration for different types of support plans.
 *
 * @public
 */
export type SupportPlan =
  | SupportPlan.PartnerLedSupportMember
  | SupportPlan.ResoldEnterpriseMember
  | SupportPlan.ResoldUnifiedOperationsMember
  | SupportPlan.$UnknownMember;

/**
 * @public
 */
export namespace SupportPlan {
  /**
   * Configuration for resold enterprise support plans.
   *
   * @public
   */
  export interface ResoldEnterpriseMember {
    resoldEnterprise: ResoldEnterprise;
    partnerLedSupport?: never;
    resoldUnifiedOperations?: never;
    $unknown?: never;
  }

  /**
   * Configuration for partner-led support plans.
   *
   * @public
   */
  export interface PartnerLedSupportMember {
    resoldEnterprise?: never;
    partnerLedSupport: PartnerLedSupport;
    resoldUnifiedOperations?: never;
    $unknown?: never;
  }

  /**
   * Configuration for resold unified operations support plans.
   *
   * @public
   */
  export interface ResoldUnifiedOperationsMember {
    resoldEnterprise?: never;
    partnerLedSupport?: never;
    resoldUnifiedOperations: ResoldUnifiedOperations;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resoldEnterprise?: never;
    partnerLedSupport?: never;
    resoldUnifiedOperations?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resoldEnterprise: (value: ResoldEnterprise) => T;
    partnerLedSupport: (value: PartnerLedSupport) => T;
    resoldUnifiedOperations: (value: ResoldUnifiedOperations) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateRelationshipRequest {
  /**
   * The catalog identifier for the relationship.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The type of association for the relationship (e.g., reseller, distributor).
   *
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * The identifier of the program management account for this relationship.
   *
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * The AWS account ID to associate in this relationship.
   *
   * @public
   */
  associatedAccountId: string | undefined;

  /**
   * A human-readable name for the relationship.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The resale account model for the relationship.
   *
   * @public
   */
  resaleAccountModel?: ResaleAccountModel | undefined;

  /**
   * The business sector for the relationship.
   *
   * @public
   */
  sector: Sector | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Key-value pairs to associate with the relationship.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The support plan requested for this relationship.
   *
   * @public
   */
  requestedSupportPlan?: SupportPlan | undefined;
}

/**
 * Contains details about a newly created relationship.
 *
 * @public
 */
export interface CreateRelationshipDetail {
  /**
   * The Amazon Resource Name (ARN) of the created relationship.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the created relationship.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateRelationshipResponse {
  /**
   * Details of the created relationship.
   *
   * @public
   */
  relationshipDetail?: CreateRelationshipDetail | undefined;
}

/**
 * @public
 */
export interface DeleteProgramManagementAccountRequest {
  /**
   * The catalog identifier for the program management account.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The unique identifier of the program management account to delete.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProgramManagementAccountResponse {}

/**
 * @public
 */
export interface DeleteRelationshipRequest {
  /**
   * The catalog identifier for the relationship.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The unique identifier of the relationship to delete.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The identifier of the program management account associated with the relationship.
   *
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRelationshipResponse {}

/**
 * @public
 */
export interface GetRelationshipRequest {
  /**
   * The catalog identifier for the relationship.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The identifier of the program management account associated with the relationship.
   *
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * The unique identifier of the relationship to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * Detailed information about a partner relationship.
 *
 * @public
 */
export interface RelationshipDetail {
  /**
   * The Amazon Resource Name (ARN) of the relationship.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the relationship.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The current revision number of the relationship.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The catalog identifier associated with the relationship.
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The type of association for the relationship.
   *
   * @public
   */
  associationType?: AssociationType | undefined;

  /**
   * The identifier of the program management account.
   *
   * @public
   */
  programManagementAccountId?: string | undefined;

  /**
   * The AWS account ID associated in this relationship.
   *
   * @public
   */
  associatedAccountId?: string | undefined;

  /**
   * The display name of the relationship.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The resale account model for the relationship.
   *
   * @public
   */
  resaleAccountModel?: ResaleAccountModel | undefined;

  /**
   * The business sector for the relationship.
   *
   * @public
   */
  sector?: Sector | undefined;

  /**
   * The timestamp when the relationship was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the relationship was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The start date of the relationship.
   *
   * @public
   */
  startDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetRelationshipResponse {
  /**
   * Details of the requested relationship.
   *
   * @public
   */
  relationshipDetail?: RelationshipDetail | undefined;
}

/**
 * Base sorting configuration for program management accounts.
 *
 * @public
 */
export interface ListProgramManagementAccountsSortBase {
  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The field to sort by.
   *
   * @public
   */
  sortBy: ListProgramManagementAccountsSortName | undefined;
}

/**
 * @public
 */
export interface ListProgramManagementAccountsRequest {
  /**
   * The catalog identifier to filter accounts.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filter by display names.
   *
   * @public
   */
  displayNames?: string[] | undefined;

  /**
   * Filter by program types.
   *
   * @public
   */
  programs?: Program[] | undefined;

  /**
   * Filter by AWS account IDs.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * Filter by program management account statuses.
   *
   * @public
   */
  statuses?: ProgramManagementAccountStatus[] | undefined;

  /**
   * Sorting options for the results.
   *
   * @public
   */
  sort?: ListProgramManagementAccountsSortBase | undefined;

  /**
   * Token for retrieving the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a program management account.
 *
 * @public
 */
export interface ProgramManagementAccountSummary {
  /**
   * The unique identifier of the program management account.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The current revision number of the program management account.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The catalog identifier associated with the account.
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The program type for the management account.
   *
   * @public
   */
  program?: Program | undefined;

  /**
   * The display name of the program management account.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The AWS account ID associated with the program management account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the program management account.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The timestamp when the account was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the account was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The start date of the program management account.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The current status of the program management account.
   *
   * @public
   */
  status?: ProgramManagementAccountStatus | undefined;
}

/**
 * @public
 */
export interface ListProgramManagementAccountsResponse {
  /**
   * List of program management accounts matching the criteria.
   *
   * @public
   */
  items?: ProgramManagementAccountSummary[] | undefined;

  /**
   * Token for retrieving the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Base sorting configuration for relationships.
 *
 * @public
 */
export interface ListRelationshipsSortBase {
  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * The field to sort by.
   *
   * @public
   */
  sortBy: ListRelationshipsSortName | undefined;
}

/**
 * @public
 */
export interface ListRelationshipsRequest {
  /**
   * The catalog identifier to filter relationships.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filter by associated AWS account IDs.
   *
   * @public
   */
  associatedAccountIds?: string[] | undefined;

  /**
   * Filter by association types.
   *
   * @public
   */
  associationTypes?: AssociationType[] | undefined;

  /**
   * Filter by display names.
   *
   * @public
   */
  displayNames?: string[] | undefined;

  /**
   * Filter by program management account identifiers.
   *
   * @public
   */
  programManagementAccountIdentifiers?: string[] | undefined;

  /**
   * Sorting options for the results.
   *
   * @public
   */
  sort?: ListRelationshipsSortBase | undefined;

  /**
   * Token for retrieving the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a partner relationship.
 *
 * @public
 */
export interface RelationshipSummary {
  /**
   * The Amazon Resource Name (ARN) of the relationship.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the relationship.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The current revision number of the relationship.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The catalog identifier associated with the relationship.
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The type of association for the relationship.
   *
   * @public
   */
  associationType?: AssociationType | undefined;

  /**
   * The identifier of the program management account.
   *
   * @public
   */
  programManagementAccountId?: string | undefined;

  /**
   * The AWS account ID associated in this relationship.
   *
   * @public
   */
  associatedAccountId?: string | undefined;

  /**
   * The display name of the relationship.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The business sector for the relationship.
   *
   * @public
   */
  sector?: Sector | undefined;

  /**
   * The timestamp when the relationship was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the relationship was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The start date of the relationship.
   *
   * @public
   */
  startDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListRelationshipsResponse {
  /**
   * List of relationships matching the criteria.
   *
   * @public
   */
  items?: RelationshipSummary[] | undefined;

  /**
   * Token for retrieving the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Key-value pairs associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateProgramManagementAccountRequest {
  /**
   * The catalog identifier for the program management account.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The unique identifier of the program management account to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The current revision number of the program management account.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The new display name for the program management account.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * Contains details about an updated program management account.
 *
 * @public
 */
export interface UpdateProgramManagementAccountDetail {
  /**
   * The unique identifier of the updated program management account.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated program management account.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The new revision number of the program management account.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The updated display name of the program management account.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProgramManagementAccountResponse {
  /**
   * Details of the updated program management account.
   *
   * @public
   */
  programManagementAccountDetail?: UpdateProgramManagementAccountDetail | undefined;
}

/**
 * @public
 */
export interface UpdateRelationshipRequest {
  /**
   * The catalog identifier for the relationship.
   *
   * @public
   */
  catalog: string | undefined;

  /**
   * The unique identifier of the relationship to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The identifier of the program management account associated with the relationship.
   *
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * The current revision number of the relationship.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The new display name for the relationship.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The updated support plan for the relationship.
   *
   * @public
   */
  requestedSupportPlan?: SupportPlan | undefined;
}

/**
 * Contains details about an updated relationship.
 *
 * @public
 */
export interface UpdateRelationshipDetail {
  /**
   * The Amazon Resource Name (ARN) of the updated relationship.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the updated relationship.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The new revision number of the relationship.
   *
   * @public
   */
  revision?: string | undefined;

  /**
   * The updated display name of the relationship.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRelationshipResponse {
  /**
   * Details of the updated relationship.
   *
   * @public
   */
  relationshipDetail?: UpdateRelationshipDetail | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Key-value pairs to associate with the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
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
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
