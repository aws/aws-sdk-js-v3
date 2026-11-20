// smithy-typescript generated code
import type {
  AccountScope,
  AssociationType,
  ChannelContractStatus,
  ChannelContractType,
  Coverage,
  HandshakeStatus,
  HandshakeType,
  ListProgramManagementAccountsSortName,
  ListRelationshipsSortName,
  ManagedServicesAttestationTypeSortName,
  ManagedServicesSupportedService,
  ParticipantType,
  Program,
  ProgramManagementAccountStatus,
  ProgramManagementAccountType,
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
   * <p>The catalog identifier for the handshake request.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the channel handshake to accept.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>Contains details about an accepted channel handshake.</p>
 * @public
 */
export interface AcceptChannelHandshakeDetail {
  /**
   * <p>The unique identifier of the accepted handshake.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the accepted handshake.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The current status of the accepted handshake.</p>
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface AcceptChannelHandshakeResponse {
  /**
   * <p>Details of the accepted channel handshake.</p>
   * @public
   */
  channelHandshakeDetail?: AcceptChannelHandshakeDetail | undefined;
}

/**
 * <p>Information about a field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The validation error code for the field.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>A descriptive message about the validation error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The postal address of a legal entity.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The city or locality.</p>
   * @public
   */
  city: string | undefined;

  /**
   * <p>The state, province, or prefecture.</p>
   * @public
   */
  stateOrRegion: string | undefined;

  /**
   * <p>The postal code.</p>
   * @public
   */
  postalCode: string | undefined;

  /**
   * <p>The two-letter ISO 3166-1 country code.</p>
   * @public
   */
  countryCode: string | undefined;

  /**
   * <p>The first line of the street address.</p>
   * @public
   */
  addressLine: string | undefined;

  /**
   * <p>The second line of the street address.</p>
   * @public
   */
  addressLine2?: string | undefined;
}

/**
 * @public
 */
export interface CancelChannelContractRequest {
  /**
   * <p>The catalog identifier for the channel contract.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the channel contract to cancel.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The reason for canceling the channel contract. Later requests don't change or remove it.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains details about a canceled channel contract.</p>
 * @public
 */
export interface CancelChannelContractDetail {
  /**
   * <p>The unique identifier of the canceled channel contract.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the canceled channel contract.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The current status of the canceled channel contract.</p>
   * @public
   */
  status?: ChannelContractStatus | undefined;

  /**
   * <p>The reason the channel contract was canceled, if one was provided.</p>
   * @public
   */
  cancellationReason?: string | undefined;
}

/**
 * @public
 */
export interface CancelChannelContractResponse {
  /**
   * <p>Details of the canceled channel contract.</p>
   * @public
   */
  channelContractDetail?: CancelChannelContractDetail | undefined;
}

/**
 * @public
 */
export interface CancelChannelHandshakeRequest {
  /**
   * <p>The catalog identifier for the handshake request.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the channel handshake to cancel.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>Contains details about a canceled channel handshake.</p>
 * @public
 */
export interface CancelChannelHandshakeDetail {
  /**
   * <p>The unique identifier of the canceled handshake.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the canceled handshake.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The current status of the canceled handshake.</p>
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface CancelChannelHandshakeResponse {
  /**
   * <p>Details of the canceled channel handshake.</p>
   * @public
   */
  channelHandshakeDetail?: CancelChannelHandshakeDetail | undefined;
}

/**
 * <p>Details specific to managed services attestation channel contracts. Applies only to managed services attestation channel contracts.</p>
 * @public
 */
export interface ManagedServicesAttestationDetails {
  /**
   * <p>The legal name of the end customer's legal entity.</p>
   * @public
   */
  legalEntityName: string | undefined;

  /**
   * <p>The identifier of the relationship covered by the attestation.</p>
   * @public
   */
  relationshipIdentifier: string | undefined;

  /**
   * <p>The identifier of the program management account.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>The AWS account IDs of the end customer's member accounts covered by the managed services.</p>
   * @public
   */
  memberAccountIds?: string[] | undefined;

  /**
   * <p>The end date of the managed services attestation.</p>
   * @public
   */
  endDate: Date | undefined;

  /**
   * <p>The managed services that the partner provides to the end customer.</p>
   * @public
   */
  supportedServices: ManagedServicesSupportedService[] | undefined;

  /**
   * <p>The name of the person who signs the attestation for the end customer.</p>
   * @public
   */
  signatoryName: string | undefined;

  /**
   * <p>The email address of the signatory.</p>
   * @public
   */
  signatoryEmail: string | undefined;

  /**
   * <p>The address of the end customer's legal entity, if available.</p>
   * @public
   */
  legalEntityAddress?: Address | undefined;
}

/**
 * <p>Contains detailed information about different types of channel contracts.</p>
 * @public
 */
export type ChannelContractDetails =
  | ChannelContractDetails.ManagedServicesAttestationDetailsMember
  | ChannelContractDetails.$UnknownMember;

/**
 * @public
 */
export namespace ChannelContractDetails {
  /**
   * <p>Details specific to managed services attestation channel contracts. Applies only to managed services attestation channel contracts.</p>
   * @public
   */
  export interface ManagedServicesAttestationDetailsMember {
    managedServicesAttestationDetails: ManagedServicesAttestationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managedServicesAttestationDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managedServicesAttestationDetails: (value: ManagedServicesAttestationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Detailed information about a channel contract.</p>
 * @public
 */
export interface ChannelContractDetail {
  /**
   * <p>The unique identifier of the channel contract.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the channel contract.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The catalog identifier associated with the channel contract.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The type of the channel contract.</p>
   * @public
   */
  contractType: ChannelContractType | undefined;

  /**
   * <p>The current status of the channel contract.</p>
   * @public
   */
  status: ChannelContractStatus | undefined;

  /**
   * <p>The timestamp when the channel contract was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the channel contract was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp when the channel contract was accepted, if applicable.</p>
   * @public
   */
  respondedAt?: Date | undefined;

  /**
   * <p>The reason the channel contract was canceled, if one was provided.</p>
   * @public
   */
  cancellationReason?: string | undefined;

  /**
   * <p>Type-specific details of the channel contract.</p>
   * @public
   */
  details: ChannelContractDetails | undefined;
}

/**
 * <p>Payload for managed services attestation channel contract requests. Applies only to managed services attestation channel contracts.</p>
 * @public
 */
export interface ManagedServicesAttestationPayload {
  /**
   * <p>The legal name of the end customer's legal entity.</p>
   * @public
   */
  legalEntityName: string | undefined;

  /**
   * <p>The identifier of the managed services relationship to cover with the attestation.</p>
   * @public
   */
  relationshipIdentifier: string | undefined;

  /**
   * <p>The identifier of the program management account for the relationship.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>The AWS account IDs of the end customer's member accounts to cover, not allowed when the account scope is the entire organization.</p>
   * @public
   */
  memberAccountIds?: string[] | undefined;

  /**
   * <p>The end date of the attestation, which must be after the start date of the relationship.</p>
   * @public
   */
  endDate: Date | undefined;

  /**
   * <p>The managed services that the partner provides to the end customer.</p>
   * @public
   */
  supportedServices: ManagedServicesSupportedService[] | undefined;

  /**
   * <p>The address of the end customer's legal entity.</p>
   * @public
   */
  legalEntityAddress: Address | undefined;

  /**
   * <p>The name of the person who signs the attestation for the end customer.</p>
   * @public
   */
  signatoryName: string | undefined;

  /**
   * <p>The email address to which the attestation is sent for signature.</p>
   * @public
   */
  signatoryEmail: string | undefined;
}

/**
 * <p>Contains the payload data for different types of channel contracts.</p>
 * @public
 */
export type ChannelContractPayload =
  | ChannelContractPayload.ManagedServicesAttestationPayloadMember
  | ChannelContractPayload.$UnknownMember;

/**
 * @public
 */
export namespace ChannelContractPayload {
  /**
   * <p>Payload for creating a managed services attestation channel contract. Applies only to managed services attestation channel contracts.</p>
   * @public
   */
  export interface ManagedServicesAttestationPayloadMember {
    managedServicesAttestationPayload: ManagedServicesAttestationPayload;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managedServicesAttestationPayload?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managedServicesAttestationPayload: (value: ManagedServicesAttestationPayload) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A key-value pair that can be associated with a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelContractRequest {
  /**
   * <p>The type of channel contract to create (for example, managed services attestation).</p>
   * @public
   */
  contractType: ChannelContractType | undefined;

  /**
   * <p>The catalog identifier for the channel contract.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The payload containing specific details for the contract type.</p>
   * @public
   */
  payload: ChannelContractPayload | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Key-value pairs to associate with the channel contract.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Contains details about a newly created channel contract.</p>
 * @public
 */
export interface CreateChannelContractDetail {
  /**
   * <p>The unique identifier of the created channel contract.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created channel contract.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelContractResponse {
  /**
   * <p>Details of the created channel contract.</p>
   * @public
   */
  channelContractDetail?: CreateChannelContractDetail | undefined;
}

/**
 * @public
 */
export interface GetChannelContractRequest {
  /**
   * <p>The catalog identifier for the channel contract.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the channel contract to retrieve.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetChannelContractResponse {
  /**
   * <p>Details of the requested channel contract.</p>
   * @public
   */
  channelContractDetail?: ChannelContractDetail | undefined;
}

/**
 * <p>Filters specific to managed services attestation channel contracts. Applies only to managed services attestation channel contracts.</p>
 * @public
 */
export interface ManagedServicesAttestationTypeFilters {
  /**
   * <p>Filter by relationship identifiers.</p>
   * @public
   */
  relationshipIdentifiers?: string[] | undefined;

  /**
   * <p>Filter by legal entity names.</p>
   * @public
   */
  legalEntityNames?: string[] | undefined;
}

/**
 * <p>Type-specific filters for listing channel contracts.</p>
 * @public
 */
export type ListChannelContractsTypeFilters =
  | ListChannelContractsTypeFilters.ManagedServicesAttestationTypeFiltersMember
  | ListChannelContractsTypeFilters.$UnknownMember;

/**
 * @public
 */
export namespace ListChannelContractsTypeFilters {
  /**
   * <p>Filters specific to managed services attestation channel contracts. Applies only to managed services attestation channel contracts.</p>
   * @public
   */
  export interface ManagedServicesAttestationTypeFiltersMember {
    managedServicesAttestationTypeFilters: ManagedServicesAttestationTypeFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managedServicesAttestationTypeFilters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managedServicesAttestationTypeFilters: (value: ManagedServicesAttestationTypeFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Sorting options specific to managed services attestation channel contracts. Applies only to managed services attestation channel contracts.</p>
 * @public
 */
export interface ManagedServicesAttestationTypeSort {
  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The field to sort by.</p>
   * @public
   */
  sortBy: ManagedServicesAttestationTypeSortName | undefined;
}

/**
 * <p>Type-specific sorting options for listing channel contracts.</p>
 * @public
 */
export type ListChannelContractsTypeSort =
  | ListChannelContractsTypeSort.ManagedServicesAttestationTypeSortMember
  | ListChannelContractsTypeSort.$UnknownMember;

/**
 * @public
 */
export namespace ListChannelContractsTypeSort {
  /**
   * <p>Sorting options specific to managed services attestation channel contracts. Applies only to managed services attestation channel contracts.</p>
   * @public
   */
  export interface ManagedServicesAttestationTypeSortMember {
    managedServicesAttestationTypeSort: ManagedServicesAttestationTypeSort;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managedServicesAttestationTypeSort?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managedServicesAttestationTypeSort: (value: ManagedServicesAttestationTypeSort) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListChannelContractsRequest {
  /**
   * <p>The catalog identifier to filter channel contracts.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>Filter results by contract type.</p>
   * @public
   */
  contractType: ChannelContractType | undefined;

  /**
   * <p>Filter results by channel contract status.</p>
   * @public
   */
  statuses?: ChannelContractStatus[] | undefined;

  /**
   * <p>Type-specific filters for channel contracts.</p>
   * @public
   */
  contractTypeFilters?: ListChannelContractsTypeFilters | undefined;

  /**
   * <p>Type-specific sorting options for channel contracts.</p>
   * @public
   */
  contractTypeSort?: ListChannelContractsTypeSort | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a managed services attestation channel contract. Applies only to managed services attestation channel contracts.</p>
 * @public
 */
export interface ManagedServicesAttestationSummaryDetails {
  /**
   * <p>The legal name of the end customer's legal entity.</p>
   * @public
   */
  legalEntityName: string | undefined;

  /**
   * <p>The identifier of the relationship covered by the attestation.</p>
   * @public
   */
  relationshipIdentifier: string | undefined;

  /**
   * <p>The identifier of the program management account.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>The AWS account IDs of the end customer's member accounts covered by the managed services.</p>
   * @public
   */
  memberAccountIds?: string[] | undefined;

  /**
   * <p>The end date of the managed services attestation.</p>
   * @public
   */
  endDate: Date | undefined;

  /**
   * <p>The managed services that the partner provides to the end customer.</p>
   * @public
   */
  supportedServices: ManagedServicesSupportedService[] | undefined;
}

/**
 * <p>Contains summary information about different types of channel contracts.</p>
 * @public
 */
export type ChannelContractSummaryDetails =
  | ChannelContractSummaryDetails.ManagedServicesAttestationDetailsMember
  | ChannelContractSummaryDetails.$UnknownMember;

/**
 * @public
 */
export namespace ChannelContractSummaryDetails {
  /**
   * <p>Summary details specific to managed services attestation channel contracts. Applies only to managed services attestation channel contracts.</p>
   * @public
   */
  export interface ManagedServicesAttestationDetailsMember {
    managedServicesAttestationDetails: ManagedServicesAttestationSummaryDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managedServicesAttestationDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managedServicesAttestationDetails: (value: ManagedServicesAttestationSummaryDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Summary information about a channel contract.</p>
 * @public
 */
export interface ChannelContractSummary {
  /**
   * <p>The unique identifier of the channel contract.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the channel contract.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The catalog identifier associated with the channel contract.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The type of the channel contract.</p>
   * @public
   */
  contractType: ChannelContractType | undefined;

  /**
   * <p>The current status of the channel contract.</p>
   * @public
   */
  status: ChannelContractStatus | undefined;

  /**
   * <p>The timestamp when the channel contract was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the channel contract was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp when the channel contract was accepted, if applicable.</p>
   * @public
   */
  respondedAt?: Date | undefined;

  /**
   * <p>Type-specific summary details of the channel contract.</p>
   * @public
   */
  details: ChannelContractSummaryDetails | undefined;
}

/**
 * @public
 */
export interface ListChannelContractsResponse {
  /**
   * <p>List of channel contracts matching the criteria.</p>
   * @public
   */
  items: ChannelContractSummary[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Payload for revoke service period handshake requests.</p>
 * @public
 */
export interface RevokeServicePeriodPayload {
  /**
   * <p>The identifier of the program management account.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>A note explaining the reason for revoking the service period.</p>
   * @public
   */
  note?: string | undefined;
}

/**
 * <p>Payload for start service period handshake requests.</p>
 * @public
 */
export interface StartServicePeriodPayload {
  /**
   * <p>The identifier of the program management account.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>A note providing additional information about the service period.</p>
   * @public
   */
  note?: string | undefined;

  /**
   * <p>The type of service period being started.</p>
   * @public
   */
  servicePeriodType: ServicePeriodType | undefined;

  /**
   * <p>The minimum number of days notice required for changes.</p>
   * @public
   */
  minimumNoticeDays?: string | undefined;

  /**
   * <p>The end date of the service period.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * <p>Contains the payload data for different types of channel handshakes.</p>
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
   * <p>Payload for starting a service period handshake.</p>
   * @public
   */
  export interface StartServicePeriodPayloadMember {
    startServicePeriodPayload: StartServicePeriodPayload;
    revokeServicePeriodPayload?: never;
    $unknown?: never;
  }

  /**
   * <p>Payload for revoking a service period handshake.</p>
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
 * @public
 */
export interface CreateChannelHandshakeRequest {
  /**
   * <p>The type of handshake to create (e.g., start service period, revoke service period).</p>
   * @public
   */
  handshakeType: HandshakeType | undefined;

  /**
   * <p>The catalog identifier for the handshake request.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The identifier of the resource associated with this handshake.</p>
   * @public
   */
  associatedResourceIdentifier: string | undefined;

  /**
   * <p>The payload containing specific details for the handshake type.</p>
   * @public
   */
  payload?: ChannelHandshakePayload | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Key-value pairs to associate with the channel handshake.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Contains details about a newly created channel handshake.</p>
 * @public
 */
export interface CreateChannelHandshakeDetail {
  /**
   * <p>The unique identifier of the created handshake.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created handshake.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelHandshakeResponse {
  /**
   * <p>Details of the created channel handshake.</p>
   * @public
   */
  channelHandshakeDetail?: CreateChannelHandshakeDetail | undefined;
}

/**
 * <p>Type-specific filters for program management accounts.</p>
 * @public
 */
export interface ProgramManagementAccountTypeFilters {
  /**
   * <p>Filter by program types.</p>
   * @public
   */
  programs?: Program[] | undefined;
}

/**
 * <p>Filters specific to revoke service period handshakes.</p>
 * @public
 */
export interface RevokeServicePeriodTypeFilters {
  /**
   * <p>Filter by service period types.</p>
   * @public
   */
  servicePeriodTypes?: ServicePeriodType[] | undefined;
}

/**
 * <p>Filters specific to start service period handshakes.</p>
 * @public
 */
export interface StartServicePeriodTypeFilters {
  /**
   * <p>Filter by service period types.</p>
   * @public
   */
  servicePeriodTypes?: ServicePeriodType[] | undefined;
}

/**
 * <p>Type-specific filters for listing channel handshakes.</p>
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
   * <p>Filters specific to start service period handshakes.</p>
   * @public
   */
  export interface StartServicePeriodTypeFiltersMember {
    startServicePeriodTypeFilters: StartServicePeriodTypeFilters;
    revokeServicePeriodTypeFilters?: never;
    programManagementAccountTypeFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters specific to revoke service period handshakes.</p>
   * @public
   */
  export interface RevokeServicePeriodTypeFiltersMember {
    startServicePeriodTypeFilters?: never;
    revokeServicePeriodTypeFilters: RevokeServicePeriodTypeFilters;
    programManagementAccountTypeFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>Filters specific to program management account handshakes.</p>
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
 * <p>Type-specific sorting options for program management accounts.</p>
 * @public
 */
export interface ProgramManagementAccountTypeSort {
  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The field to sort by.</p>
   * @public
   */
  sortBy: ProgramManagementAccountTypeSortName | undefined;
}

/**
 * <p>Sorting options specific to revoke service period handshakes.</p>
 * @public
 */
export interface RevokeServicePeriodTypeSort {
  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The field to sort by.</p>
   * @public
   */
  sortBy: RevokeServicePeriodTypeSortName | undefined;
}

/**
 * <p>Sorting options specific to start service period handshakes.</p>
 * @public
 */
export interface StartServicePeriodTypeSort {
  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The field to sort by.</p>
   * @public
   */
  sortBy: StartServicePeriodTypeSortName | undefined;
}

/**
 * <p>Type-specific sorting options for listing channel handshakes.</p>
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
   * <p>Sorting options specific to start service period handshakes.</p>
   * @public
   */
  export interface StartServicePeriodTypeSortMember {
    startServicePeriodTypeSort: StartServicePeriodTypeSort;
    revokeServicePeriodTypeSort?: never;
    programManagementAccountTypeSort?: never;
    $unknown?: never;
  }

  /**
   * <p>Sorting options specific to revoke service period handshakes.</p>
   * @public
   */
  export interface RevokeServicePeriodTypeSortMember {
    startServicePeriodTypeSort?: never;
    revokeServicePeriodTypeSort: RevokeServicePeriodTypeSort;
    programManagementAccountTypeSort?: never;
    $unknown?: never;
  }

  /**
   * <p>Sorting options specific to program management account handshakes.</p>
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
   * <p>Filter results by handshake type.</p>
   * @public
   */
  handshakeType: HandshakeType | undefined;

  /**
   * <p>The catalog identifier to filter handshakes.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>Filter by participant type (sender or receiver).</p>
   * @public
   */
  participantType: ParticipantType | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filter results by handshake status.</p>
   * @public
   */
  statuses?: HandshakeStatus[] | undefined;

  /**
   * <p>Filter by associated resource identifiers.</p>
   * @public
   */
  associatedResourceIdentifiers?: string[] | undefined;

  /**
   * <p>Type-specific filters for handshakes.</p>
   * @public
   */
  handshakeTypeFilters?: ListChannelHandshakesTypeFilters | undefined;

  /**
   * <p>Type-specific sorting options for handshakes.</p>
   * @public
   */
  handshakeTypeSort?: ListChannelHandshakesTypeSort | undefined;

  /**
   * <p>Token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details specific to program management account handshakes.</p>
 * @public
 */
export interface ProgramManagementAccountHandshakeDetail {
  /**
   * <p>The program associated with the handshake.</p>
   * @public
   */
  program?: Program | undefined;
}

/**
 * <p>Details specific to revoke service period handshakes.</p>
 * @public
 */
export interface RevokeServicePeriodHandshakeDetail {
  /**
   * <p>A note explaining the reason for revoking the service period.</p>
   * @public
   */
  note?: string | undefined;

  /**
   * <p>The type of service period being revoked.</p>
   * @public
   */
  servicePeriodType?: ServicePeriodType | undefined;

  /**
   * <p>The minimum number of days notice required for revocation.</p>
   * @public
   */
  minimumNoticeDays?: string | undefined;

  /**
   * <p>The start date of the service period being revoked.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The end date of the service period being revoked.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * <p>Details specific to start service period handshakes.</p>
 * @public
 */
export interface StartServicePeriodHandshakeDetail {
  /**
   * <p>A note providing additional information about the service period.</p>
   * @public
   */
  note?: string | undefined;

  /**
   * <p>The type of service period being started.</p>
   * @public
   */
  servicePeriodType?: ServicePeriodType | undefined;

  /**
   * <p>The minimum number of days notice required for changes.</p>
   * @public
   */
  minimumNoticeDays?: string | undefined;

  /**
   * <p>The start date of the service period.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The end date of the service period.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * <p>Contains detailed information about different types of handshakes.</p>
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
   * <p>Details for a start service period handshake.</p>
   * @public
   */
  export interface StartServicePeriodHandshakeDetailMember {
    startServicePeriodHandshakeDetail: StartServicePeriodHandshakeDetail;
    revokeServicePeriodHandshakeDetail?: never;
    programManagementAccountHandshakeDetail?: never;
    $unknown?: never;
  }

  /**
   * <p>Details for a revoke service period handshake.</p>
   * @public
   */
  export interface RevokeServicePeriodHandshakeDetailMember {
    startServicePeriodHandshakeDetail?: never;
    revokeServicePeriodHandshakeDetail: RevokeServicePeriodHandshakeDetail;
    programManagementAccountHandshakeDetail?: never;
    $unknown?: never;
  }

  /**
   * <p>Details for a program management account handshake.</p>
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
 * <p>Summary information about a channel handshake.</p>
 * @public
 */
export interface ChannelHandshakeSummary {
  /**
   * <p>The unique identifier of the handshake.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the handshake.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The catalog identifier associated with the handshake.</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The type of the handshake.</p>
   * @public
   */
  handshakeType?: HandshakeType | undefined;

  /**
   * <p>The AWS account ID of the handshake owner.</p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p>The AWS account ID of the handshake sender.</p>
   * @public
   */
  senderAccountId?: string | undefined;

  /**
   * <p>The display name of the handshake sender.</p>
   * @public
   */
  senderDisplayName?: string | undefined;

  /**
   * <p>The AWS account ID of the handshake receiver.</p>
   * @public
   */
  receiverAccountId?: string | undefined;

  /**
   * <p>The identifier of the resource associated with the handshake.</p>
   * @public
   */
  associatedResourceId?: string | undefined;

  /**
   * <p>Detailed information about the handshake.</p>
   * @public
   */
  detail?: HandshakeDetail | undefined;

  /**
   * <p>The timestamp when the handshake was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the handshake was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The current status of the handshake.</p>
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface ListChannelHandshakesResponse {
  /**
   * <p>List of channel handshakes matching the criteria.</p>
   * @public
   */
  items?: ChannelHandshakeSummary[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectChannelHandshakeRequest {
  /**
   * <p>The catalog identifier for the handshake request.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the channel handshake to reject.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>Contains details about a rejected channel handshake.</p>
 * @public
 */
export interface RejectChannelHandshakeDetail {
  /**
   * <p>The unique identifier of the rejected handshake.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rejected handshake.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The current status of the rejected handshake.</p>
   * @public
   */
  status?: HandshakeStatus | undefined;
}

/**
 * @public
 */
export interface RejectChannelHandshakeResponse {
  /**
   * <p>Details of the rejected channel handshake.</p>
   * @public
   */
  channelHandshakeDetail?: RejectChannelHandshakeDetail | undefined;
}

/**
 * @public
 */
export interface CreateProgramManagementAccountRequest {
  /**
   * <p>The catalog identifier for the program management account.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The program type for the management account.</p>
   * @public
   */
  program: Program | undefined;

  /**
   * <p>A human-readable name for the program management account.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The AWS account ID to associate with the program management account.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Key-value pairs to associate with the program management account.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The type of the program management account (for example, resale billing transfer, managed services), required for the managed services provider program.</p>
   * @public
   */
  type?: ProgramManagementAccountType | undefined;
}

/**
 * <p>Contains details about a newly created program management account.</p>
 * @public
 */
export interface CreateProgramManagementAccountDetail {
  /**
   * <p>The unique identifier of the created program management account.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created program management account.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateProgramManagementAccountResponse {
  /**
   * <p>Details of the created program management account.</p>
   * @public
   */
  programManagementAccountDetail?: CreateProgramManagementAccountDetail | undefined;
}

/**
 * <p>Configuration for partner-led support plans.</p>
 * @public
 */
export interface PartnerLedSupport {
  /**
   * <p>The coverage level for partner-led support.</p>
   * @public
   */
  coverage: Coverage | undefined;

  /**
   * <p>The provider of the partner-led support.</p>
   * @public
   */
  provider?: Provider | undefined;

  /**
   * <p>The location of the Technical Account Manager (TAM).</p>
   * @public
   */
  tamLocation: string | undefined;
}

/**
 * <p>Configuration for resold enterprise support plans.</p>
 * @public
 */
export interface ResoldEnterprise {
  /**
   * <p>The coverage level for resold enterprise support.</p>
   * @public
   */
  coverage: Coverage | undefined;

  /**
   * <p>The location of the Technical Account Manager (TAM).</p>
   * @public
   */
  tamLocation: string | undefined;

  /**
   * <p>The AWS account ID to charge for the support plan.</p>
   * @public
   */
  chargeAccountId?: string | undefined;
}

/**
 * <p>Configuration for resold unified operations support plans.</p>
 * @public
 */
export interface ResoldUnifiedOperations {
  /**
   * <p>The coverage level for resold unified operations support.</p>
   * @public
   */
  coverage: Coverage | undefined;

  /**
   * <p>The location of the Technical Account Manager (TAM).</p>
   * @public
   */
  tamLocation: string | undefined;

  /**
   * <p>The AWS account ID to charge for the support plan.</p>
   * @public
   */
  chargeAccountId?: string | undefined;
}

/**
 * <p>Configuration for different types of support plans.</p>
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
   * <p>Configuration for resold enterprise support plans.</p>
   * @public
   */
  export interface ResoldEnterpriseMember {
    resoldEnterprise: ResoldEnterprise;
    partnerLedSupport?: never;
    resoldUnifiedOperations?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for partner-led support plans.</p>
   * @public
   */
  export interface PartnerLedSupportMember {
    resoldEnterprise?: never;
    partnerLedSupport: PartnerLedSupport;
    resoldUnifiedOperations?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for resold unified operations support plans.</p>
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
   * <p>The catalog identifier for the relationship.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The type of association for the relationship (e.g., reseller, distributor).</p>
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * <p>The identifier of the program management account for this relationship.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>The AWS account ID to associate in this relationship.</p>
   * @public
   */
  associatedAccountId?: string | undefined;

  /**
   * <p>A human-readable name for the relationship.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The resale account model for the relationship. Applies only to billing transfer relationships.</p>
   * @public
   */
  resaleAccountModel?: ResaleAccountModel | undefined;

  /**
   * <p>The business sector for the relationship.</p>
   * @public
   */
  sector: Sector | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Key-value pairs to associate with the relationship.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The support plan requested for this relationship. Applies only to billing transfer relationships.</p>
   * @public
   */
  requestedSupportPlan?: SupportPlan | undefined;

  /**
   * <p>The account scope for a managed services relationship (for example, entire organization, specific member accounts). Applies only to managed services relationships.</p>
   * @public
   */
  accountScope?: AccountScope | undefined;

  /**
   * <p>The start date of the managed services relationship. Applies only to managed services relationships.</p>
   * @public
   */
  startDate?: Date | undefined;
}

/**
 * <p>Contains details about a newly created relationship.</p>
 * @public
 */
export interface CreateRelationshipDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the created relationship.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier of the created relationship.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface CreateRelationshipResponse {
  /**
   * <p>Details of the created relationship.</p>
   * @public
   */
  relationshipDetail?: CreateRelationshipDetail | undefined;
}

/**
 * @public
 */
export interface DeleteProgramManagementAccountRequest {
  /**
   * <p>The catalog identifier for the program management account.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the program management account to delete.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
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
   * <p>The catalog identifier for the relationship.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the relationship to delete.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The identifier of the program management account associated with the relationship.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
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
   * <p>The catalog identifier for the relationship.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The identifier of the program management account associated with the relationship.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the relationship to retrieve.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>Detailed information about a partner relationship.</p>
 * @public
 */
export interface RelationshipDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the relationship.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier of the relationship.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The current revision number of the relationship.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The catalog identifier associated with the relationship.</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The type of association for the relationship.</p>
   * @public
   */
  associationType?: AssociationType | undefined;

  /**
   * <p>The identifier of the program management account.</p>
   * @public
   */
  programManagementAccountId?: string | undefined;

  /**
   * <p>The AWS account ID associated in this relationship.</p>
   * @public
   */
  associatedAccountId?: string | undefined;

  /**
   * <p>The display name of the relationship.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The resale account model for the relationship. Applies only to billing transfer relationships.</p>
   * @public
   */
  resaleAccountModel?: ResaleAccountModel | undefined;

  /**
   * <p>The business sector for the relationship.</p>
   * @public
   */
  sector?: Sector | undefined;

  /**
   * <p>The account scope of the managed services relationship. Applies only to managed services relationships.</p>
   * @public
   */
  accountScope?: AccountScope | undefined;

  /**
   * <p>The identifier of the channel contract currently in effect for the relationship. Applies only to managed services relationships.</p>
   * @public
   */
  channelContractId?: string | undefined;

  /**
   * <p>The timestamp when the relationship was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the relationship was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The start date of the relationship.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The end date of the relationship.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetRelationshipResponse {
  /**
   * <p>Details of the requested relationship.</p>
   * @public
   */
  relationshipDetail?: RelationshipDetail | undefined;
}

/**
 * <p>Base sorting configuration for program management accounts.</p>
 * @public
 */
export interface ListProgramManagementAccountsSortBase {
  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The field to sort by.</p>
   * @public
   */
  sortBy: ListProgramManagementAccountsSortName | undefined;
}

/**
 * @public
 */
export interface ListProgramManagementAccountsRequest {
  /**
   * <p>The catalog identifier to filter accounts.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filter by display names.</p>
   * @public
   */
  displayNames?: string[] | undefined;

  /**
   * <p>Filter by program types.</p>
   * @public
   */
  programs?: Program[] | undefined;

  /**
   * <p>Filter by AWS account IDs.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>Filter by program management account statuses.</p>
   * @public
   */
  statuses?: ProgramManagementAccountStatus[] | undefined;

  /**
   * <p>Sorting options for the results.</p>
   * @public
   */
  sort?: ListProgramManagementAccountsSortBase | undefined;

  /**
   * <p>Token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter by program management account type.</p>
   * @public
   */
  type?: ProgramManagementAccountType | undefined;
}

/**
 * <p>Summary information about a program management account.</p>
 * @public
 */
export interface ProgramManagementAccountSummary {
  /**
   * <p>The unique identifier of the program management account.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The current revision number of the program management account.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The catalog identifier associated with the account.</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The program type for the management account.</p>
   * @public
   */
  program?: Program | undefined;

  /**
   * <p>The display name of the program management account.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The AWS account ID associated with the program management account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the program management account.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The timestamp when the account was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the account was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The start date of the program management account.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The current status of the program management account.</p>
   * @public
   */
  status?: ProgramManagementAccountStatus | undefined;

  /**
   * <p>The type of the program management account.</p>
   * @public
   */
  type?: ProgramManagementAccountType | undefined;
}

/**
 * @public
 */
export interface ListProgramManagementAccountsResponse {
  /**
   * <p>List of program management accounts matching the criteria.</p>
   * @public
   */
  items?: ProgramManagementAccountSummary[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Base sorting configuration for relationships.</p>
 * @public
 */
export interface ListRelationshipsSortBase {
  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder: SortOrder | undefined;

  /**
   * <p>The field to sort by.</p>
   * @public
   */
  sortBy: ListRelationshipsSortName | undefined;
}

/**
 * @public
 */
export interface ListRelationshipsRequest {
  /**
   * <p>The catalog identifier to filter relationships.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filter by associated AWS account IDs.</p>
   * @public
   */
  associatedAccountIds?: string[] | undefined;

  /**
   * <p>Filter by association types.</p>
   * @public
   */
  associationTypes?: AssociationType[] | undefined;

  /**
   * <p>Filter by display names.</p>
   * @public
   */
  displayNames?: string[] | undefined;

  /**
   * <p>Filter by program management account identifiers.</p>
   * @public
   */
  programManagementAccountIdentifiers?: string[] | undefined;

  /**
   * <p>Sorting options for the results.</p>
   * @public
   */
  sort?: ListRelationshipsSortBase | undefined;

  /**
   * <p>Token for retrieving the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a partner relationship.</p>
 * @public
 */
export interface RelationshipSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the relationship.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier of the relationship.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The current revision number of the relationship.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The catalog identifier associated with the relationship.</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The type of association for the relationship.</p>
   * @public
   */
  associationType?: AssociationType | undefined;

  /**
   * <p>The identifier of the program management account.</p>
   * @public
   */
  programManagementAccountId?: string | undefined;

  /**
   * <p>The AWS account ID associated in this relationship.</p>
   * @public
   */
  associatedAccountId?: string | undefined;

  /**
   * <p>The display name of the relationship.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The business sector for the relationship.</p>
   * @public
   */
  sector?: Sector | undefined;

  /**
   * <p>The timestamp when the relationship was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the relationship was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The start date of the relationship.</p>
   * @public
   */
  startDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListRelationshipsResponse {
  /**
   * <p>List of relationships matching the criteria.</p>
   * @public
   */
  items?: RelationshipSummary[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Key-value pairs associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateProgramManagementAccountRequest {
  /**
   * <p>The catalog identifier for the program management account.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the program management account to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The current revision number of the program management account.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The new display name for the program management account.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * <p>Contains details about an updated program management account.</p>
 * @public
 */
export interface UpdateProgramManagementAccountDetail {
  /**
   * <p>The unique identifier of the updated program management account.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated program management account.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The new revision number of the program management account.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The updated display name of the program management account.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProgramManagementAccountResponse {
  /**
   * <p>Details of the updated program management account.</p>
   * @public
   */
  programManagementAccountDetail?: UpdateProgramManagementAccountDetail | undefined;
}

/**
 * @public
 */
export interface UpdateRelationshipRequest {
  /**
   * <p>The catalog identifier for the relationship.</p>
   * @public
   */
  catalog: string | undefined;

  /**
   * <p>The unique identifier of the relationship to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The identifier of the program management account associated with the relationship.</p>
   * @public
   */
  programManagementAccountIdentifier: string | undefined;

  /**
   * <p>The current revision number of the relationship.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The new display name for the relationship.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The updated support plan for the relationship. Applies only to billing transfer relationships.</p>
   * @public
   */
  requestedSupportPlan?: SupportPlan | undefined;
}

/**
 * <p>Contains details about an updated relationship.</p>
 * @public
 */
export interface UpdateRelationshipDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated relationship.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier of the updated relationship.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The new revision number of the relationship.</p>
   * @public
   */
  revision?: string | undefined;

  /**
   * <p>The updated display name of the relationship.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRelationshipResponse {
  /**
   * <p>Details of the updated relationship.</p>
   * @public
   */
  relationshipDetail?: UpdateRelationshipDetail | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Key-value pairs to associate with the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
