// smithy-typescript generated code
import {
  AccessType,
  BusinessValidationCode,
  ConnectionType,
  ConnectionTypeStatus,
  FieldValidationCode,
  IndustrySegment,
  InvitationStatus,
  ParticipantType,
  PrimarySolutionType,
  ProfileTaskStatus,
  ProfileValidationErrorReason,
  ProfileVisibility,
  VerificationStatus,
  VerificationType,
} from "./enums";

/**
 * @public
 */
export interface AcceptConnectionInvitationRequest {
  /**
   * <p>The catalog identifier where the connection invitation exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection invitation to accept.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Summary information about an AWS account.</p>
 * @public
 */
export interface AccountSummary {
  /**
   * <p>The name associated with the AWS account.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A summary view of a partner profile containing basic identifying information.</p>
 * @public
 */
export interface PartnerProfileSummary {
  /**
   * <p>The unique identifier of the partner profile.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The display name of the partner.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A summary view of a seller profile containing basic identifying information.</p>
 * @public
 */
export interface SellerProfileSummary {
  /**
   * <p>The unique identifier of the seller profile.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The display name of the seller.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Represents a participant in a partner connection, containing their profile and account information.</p>
 * @public
 */
export type Participant =
  | Participant.AccountMember
  | Participant.PartnerProfileMember
  | Participant.SellerProfileMember
  | Participant.$UnknownMember;

/**
 * @public
 */
export namespace Participant {
  /**
   * <p>The partner profile information for the participant.</p>
   * @public
   */
  export interface PartnerProfileMember {
    PartnerProfile: PartnerProfileSummary;
    SellerProfile?: never;
    Account?: never;
    $unknown?: never;
  }

  /**
   * <p>The seller profile information for the participant.</p>
   * @public
   */
  export interface SellerProfileMember {
    PartnerProfile?: never;
    SellerProfile: SellerProfileSummary;
    Account?: never;
    $unknown?: never;
  }

  /**
   * <p>The AWS account information for the participant.</p>
   * @public
   */
  export interface AccountMember {
    PartnerProfile?: never;
    SellerProfile?: never;
    Account: AccountSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PartnerProfile?: never;
    SellerProfile?: never;
    Account?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PartnerProfile: (value: PartnerProfileSummary) => T;
    SellerProfile: (value: SellerProfileSummary) => T;
    Account: (value: AccountSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Detailed information about a specific connection type within a connection.</p>
 * @public
 */
export interface ConnectionTypeDetail {
  /**
   * <p>The timestamp when this connection type was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The email address of the person who initiated this connection type.</p>
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * <p>The name of the person who initiated this connection type.</p>
   * @public
   */
  InviterName: string | undefined;

  /**
   * <p>The current status of this connection type.</p>
   * @public
   */
  Status: ConnectionTypeStatus | undefined;

  /**
   * <p>The timestamp when this connection type was cancelled, if applicable.</p>
   * @public
   */
  CanceledAt?: Date | undefined;

  /**
   * <p>The AWS account ID of the participant who cancelled this connection type.</p>
   * @public
   */
  CanceledBy?: string | undefined;

  /**
   * <p>Information about the other participant in this connection type.</p>
   * @public
   */
  OtherParticipant: Participant | undefined;
}

/**
 * <p>Base structure containing common connection properties.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The catalog identifier that the connection belongs to.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The AWS Resource Name (ARN) of the connection.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The AWS account ID of the other participant in the connection.</p>
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * <p>The timestamp when the connection was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The type of connection.</p>
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeDetail>> | undefined;
}

/**
 * @public
 */
export interface AcceptConnectionInvitationResponse {
  /**
   * <p>The details of the accepted connection between the two partners.</p>
   * @public
   */
  Connection: Connection | undefined;
}

/**
 * <p>Contains information about a business rule validation error that occurred during an operation.</p>
 * @public
 */
export interface BusinessValidationError {
  /**
   * <p>A description of the business validation error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>A code identifying the specific business validation error.</p>
   * @public
   */
  Code: BusinessValidationCode | undefined;
}

/**
 * <p>Contains information about a field-level validation error that occurred during an operation.</p>
 * @public
 */
export interface FieldValidationError {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the field validation error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>A code identifying the specific field validation error.</p>
   * @public
   */
  Code: FieldValidationCode | undefined;
}

/**
 * <p>Contains information about a validation error, which can be either a field-level or business rule validation error.</p>
 * @public
 */
export type ValidationError =
  | ValidationError.BusinessValidationErrorMember
  | ValidationError.FieldValidationErrorMember
  | ValidationError.$UnknownMember;

/**
 * @public
 */
export namespace ValidationError {
  /**
   * <p>Details about a field-level validation error, if applicable.</p>
   * @public
   */
  export interface FieldValidationErrorMember {
    FieldValidationError: FieldValidationError;
    BusinessValidationError?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a business rule validation error, if applicable.</p>
   * @public
   */
  export interface BusinessValidationErrorMember {
    FieldValidationError?: never;
    BusinessValidationError: BusinessValidationError;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    FieldValidationError?: never;
    BusinessValidationError?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    FieldValidationError: (value: FieldValidationError) => T;
    BusinessValidationError: (value: BusinessValidationError) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains contact information for the primary alliance lead responsible for partnership activities.</p>
 * @public
 */
export interface AllianceLeadContact {
  /**
   * <p>The first name of the alliance lead contact person.</p>
   * @public
   */
  FirstName: string | undefined;

  /**
   * <p>The last name of the alliance lead contact person.</p>
   * @public
   */
  LastName: string | undefined;

  /**
   * <p>The email address of the alliance lead contact person.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The business title or role of the alliance lead contact person.</p>
   * @public
   */
  BusinessTitle: string | undefined;
}

/**
 * @public
 */
export interface AssociateAwsTrainingCertificationEmailDomainRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The email address used to verify domain ownership for AWS training and certification association.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The verification code sent to the email address to confirm domain ownership.</p>
   * @public
   */
  EmailVerificationCode: string | undefined;
}

/**
 * @public
 */
export interface AssociateAwsTrainingCertificationEmailDomainResponse {}

/**
 * <p>Contains the business information required for verifying a company's legal status and registration details within AWS Partner Central.</p>
 * @public
 */
export interface BusinessVerificationDetails {
  /**
   * <p>The official legal name of the business as registered with the appropriate government authorities.</p>
   * @public
   */
  LegalName: string | undefined;

  /**
   * <p>The unique business registration identifier assigned by the government or regulatory authority, such as a company registration number or tax identification number.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The ISO 3166-1 alpha-2 country code where the business is legally registered and operates.</p>
   * @public
   */
  CountryCode: string | undefined;

  /**
   * <p>The specific legal jurisdiction or state where the business was incorporated or registered, providing additional location context beyond the country code.</p>
   * @public
   */
  JurisdictionOfIncorporation?: string | undefined;
}

/**
 * <p>Contains the response information and results from a business verification process, including any verification-specific data returned by the verification service.</p>
 * @public
 */
export interface BusinessVerificationResponse {
  /**
   * <p>The business verification details that were processed and verified, potentially including additional information discovered during the verification process.</p>
   * @public
   */
  BusinessVerificationDetails: BusinessVerificationDetails | undefined;
}

/**
 * @public
 */
export interface CancelConnectionRequest {
  /**
   * <p>The catalog identifier where the connection exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection to cancel.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The type of connection to cancel (e.g., reseller, distributor, technology partner).</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The reason for canceling the connection, providing context for the termination.</p>
   * @public
   */
  Reason: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelConnectionResponse {
  /**
   * <p>The catalog identifier where the connection was canceled.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the canceled connection.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the canceled connection.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The AWS account ID of the other participant in the canceled connection.</p>
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * <p>The timestamp when the connection was last updated (canceled).</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The list of connection types that were active before cancellation.</p>
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeDetail>> | undefined;
}

/**
 * @public
 */
export interface CancelConnectionInvitationRequest {
  /**
   * <p>The catalog identifier where the connection invitation exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection invitation to cancel.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelConnectionInvitationResponse {
  /**
   * <p>The catalog identifier where the connection invitation was canceled.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the canceled connection invitation.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the canceled connection invitation.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The identifier of the connection associated with the canceled invitation.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of connection that was being invited for.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The timestamp when the connection invitation was originally created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation was last updated (canceled).</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation would have expired if not canceled.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The identifier of the other participant who was invited to connect.</p>
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * <p>The type of participant (inviter or invitee) in the connection invitation.</p>
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * <p>The current status of the connection invitation (canceled).</p>
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * <p>The message that was included with the original connection invitation.</p>
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * <p>The email address of the person who sent the connection invitation.</p>
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * <p>The name of the person who sent the connection invitation.</p>
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface CancelProfileUpdateTaskRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The unique identifier of the profile update task to cancel.</p>
   * @public
   */
  TaskId: string | undefined;
}

/**
 * <p>Contains detailed information about an error that occurred during an operation.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>The locale or language code for the error message.</p>
   * @public
   */
  Locale: string | undefined;

  /**
   * <p>A human-readable description of the error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>A machine-readable code or reason for the error.</p>
   * @public
   */
  Reason: ProfileValidationErrorReason | undefined;
}

/**
 * <p>Contains localized content for a partner profile in a specific language or locale.</p>
 * @public
 */
export interface LocalizedContent {
  /**
   * <p>The localized display name for the partner.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The localized description of the partner's business and services.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The localized website URL for the partner.</p>
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * <p>The URL to the partner's logo image for this locale.</p>
   * @public
   */
  LogoUrl: string | undefined;

  /**
   * <p>The locale or language code for the localized content.</p>
   * @public
   */
  Locale: string | undefined;
}

/**
 * <p>Contains detailed information about a profile update task including the changes to be made.</p>
 * @public
 */
export interface TaskDetails {
  /**
   * <p>The updated display name for the partner profile.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The updated description for the partner profile.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The updated website URL for the partner profile.</p>
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * <p>The updated logo URL for the partner profile.</p>
   * @public
   */
  LogoUrl: string | undefined;

  /**
   * <p>The updated primary solution type for the partner profile.</p>
   * @public
   */
  PrimarySolutionType: PrimarySolutionType | undefined;

  /**
   * <p>The updated industry segments for the partner profile.</p>
   * @public
   */
  IndustrySegments: IndustrySegment[] | undefined;

  /**
   * <p>The updated translation source locale for the partner profile.</p>
   * @public
   */
  TranslationSourceLocale: string | undefined;

  /**
   * <p>The updated localized content for the partner profile.</p>
   * @public
   */
  LocalizedContents?: LocalizedContent[] | undefined;
}

/**
 * @public
 */
export interface CancelProfileUpdateTaskResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the canceled profile update task.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The unique identifier of the canceled profile update task.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>The details of the profile update task that was canceled.</p>
   * @public
   */
  TaskDetails: TaskDetails | undefined;

  /**
   * <p>The timestamp when the profile update task was started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The current status of the profile update task (canceled).</p>
   * @public
   */
  Status: ProfileTaskStatus | undefined;

  /**
   * <p>The timestamp when the profile update task was ended (canceled).</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>A list of error details if any errors occurred during the profile update task.</p>
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInvitationRequest {
  /**
   * <p>The catalog identifier where the connection invitation will be created.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The type of connection being requested (e.g., reseller, distributor, technology partner).</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The email address of the person to send the connection invitation to.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>A custom message to include with the connection invitation.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The name of the person sending the connection invitation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the organization or partner to invite for connection.</p>
   * @public
   */
  ReceiverIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInvitationResponse {
  /**
   * <p>The catalog identifier where the connection invitation was created.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the created connection invitation.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created connection invitation.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The identifier of the connection associated with this invitation.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of connection being requested in the invitation.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The timestamp when the connection invitation was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation will expire if not responded to.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The identifier of the organization or partner being invited.</p>
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * <p>The type of participant (inviter or invitee) in the connection invitation.</p>
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * <p>The current status of the connection invitation (pending, accepted, rejected, etc.).</p>
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * <p>The custom message included with the connection invitation.</p>
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * <p>The email address of the person who sent the connection invitation.</p>
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * <p>The name of the person who sent the connection invitation.</p>
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionInvitationRequest {
  /**
   * <p>The catalog identifier where the connection invitation exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection invitation to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionInvitationResponse {
  /**
   * <p>The catalog identifier where the connection invitation exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection invitation.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection invitation.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The identifier of the connection associated with this invitation.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of connection being requested in the invitation.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The timestamp when the connection invitation was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation will expire.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The identifier of the other participant in the connection invitation.</p>
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * <p>The type of participant (inviter or invitee) in the connection invitation.</p>
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * <p>The current status of the connection invitation.</p>
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * <p>The custom message included with the connection invitation.</p>
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * <p>The email address of the person who sent the connection invitation.</p>
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * <p>The name of the person who sent the connection invitation.</p>
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionInvitationsRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The token for retrieving the next page of results in paginated responses.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filter results by connection type (e.g., reseller, distributor, technology partner).</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>The maximum number of connection invitations to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter results by specific participant identifiers.</p>
   * @public
   */
  OtherParticipantIdentifiers?: string[] | undefined;

  /**
   * <p>Filter results by participant type (inviter or invitee).</p>
   * @public
   */
  ParticipantType?: ParticipantType | undefined;

  /**
   * <p>Filter results by invitation status (pending, accepted, rejected, canceled, expired).</p>
   * @public
   */
  Status?: InvitationStatus | undefined;
}

/**
 * <p>A summary view of a connection invitation containing key information without full details.</p>
 * @public
 */
export interface ConnectionInvitationSummary {
  /**
   * <p>The catalog identifier where the connection invitation exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection invitation.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection invitation.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The identifier of the connection associated with this invitation.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of connection being requested in the invitation.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The timestamp when the connection invitation was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation will expire.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The identifier of the other participant in the connection invitation.</p>
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * <p>The type of participant (inviter or invitee) in the connection invitation.</p>
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * <p>The current status of the connection invitation.</p>
   * @public
   */
  Status: InvitationStatus | undefined;
}

/**
 * @public
 */
export interface ListConnectionInvitationsResponse {
  /**
   * <p>A list of connection invitation summaries matching the specified criteria.</p>
   * @public
   */
  ConnectionInvitationSummaries: ConnectionInvitationSummary[] | undefined;

  /**
   * <p>The token for retrieving the next page of results if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectConnectionInvitationRequest {
  /**
   * <p>The catalog identifier where the connection invitation exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection invitation to reject.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The reason for rejecting the connection invitation.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface RejectConnectionInvitationResponse {
  /**
   * <p>The catalog identifier where the connection invitation was rejected.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the rejected connection invitation.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rejected connection invitation.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The identifier of the connection associated with the rejected invitation.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The type of connection that was being invited for.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The timestamp when the connection invitation was originally created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation was last updated (rejected).</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when the connection invitation would have expired.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The identifier of the other participant who sent the invitation.</p>
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * <p>The type of participant (inviter or invitee) in the connection invitation.</p>
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * <p>The current status of the connection invitation (rejected).</p>
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * <p>The message that was included with the original connection invitation.</p>
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * <p>The email address of the person who sent the connection invitation.</p>
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * <p>The name of the person who sent the connection invitation.</p>
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionPreferencesRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionPreferencesResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection preferences.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The access type setting for connections (e.g., open, restricted, invitation-only).</p>
   * @public
   */
  AccessType: AccessType | undefined;

  /**
   * <p>A list of participant IDs that are excluded from connection requests or interactions.</p>
   * @public
   */
  ExcludedParticipantIds?: string[] | undefined;

  /**
   * <p>The timestamp when the connection preferences were last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The revision number of the connection preferences for optimistic locking.</p>
   * @public
   */
  Revision: number | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionPreferencesRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The revision number of the connection preferences for optimistic locking.</p>
   * @public
   */
  Revision: number | undefined;

  /**
   * <p>The access type setting for connections (e.g., open, restricted, invitation-only).</p>
   * @public
   */
  AccessType: AccessType | undefined;

  /**
   * <p>The updated list of participant identifiers to exclude from connections.</p>
   * @public
   */
  ExcludedParticipantIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionPreferencesResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated connection preferences.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The updated access type setting for connections.</p>
   * @public
   */
  AccessType: AccessType | undefined;

  /**
   * <p>A list of participant IDs that are excluded from connection requests or interactions.</p>
   * @public
   */
  ExcludedParticipantIds?: string[] | undefined;

  /**
   * <p>The timestamp when the connection preferences were last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The updated revision number of the connection preferences.</p>
   * @public
   */
  Revision: number | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * <p>The catalog identifier where the connection exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p>The catalog identifier where the connection exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The AWS account ID of the other participant in the connection.</p>
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * <p>The timestamp when the connection was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The list of connection types active between the partners.</p>
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeDetail>> | undefined;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The token for retrieving the next page of results in paginated responses.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filter results by connection type (e.g., reseller, distributor, technology partner).</p>
   * @public
   */
  ConnectionType?: string | undefined;

  /**
   * <p>The maximum number of connections to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter results by specific participant identifiers.</p>
   * @public
   */
  OtherParticipantIdentifiers?: string[] | undefined;
}

/**
 * <p>Summary information about a specific connection type between partners.</p>
 * @public
 */
export interface ConnectionTypeSummary {
  /**
   * <p>The current status of this connection type (active, canceled, etc.).</p>
   * @public
   */
  Status: ConnectionTypeStatus | undefined;

  /**
   * <p>Information about the other participant in this connection type.</p>
   * @public
   */
  OtherParticipant: Participant | undefined;
}

/**
 * <p>A summary view of an active connection between partners containing key information.</p>
 * @public
 */
export interface ConnectionSummary {
  /**
   * <p>The catalog identifier where the connection exists.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the connection.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The AWS account ID of the other participant in the connection.</p>
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * <p>The timestamp when the connection was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>A map of connection types and their summary information for this connection.</p>
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeSummary>> | undefined;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * <p>A list of connection summaries matching the specified criteria.</p>
   * @public
   */
  ConnectionSummaries: ConnectionSummary[] | undefined;

  /**
   * <p>The token for retrieving the next page of results if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A key-value pair used to associate metadata with AWS Partner Central Account resources.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key name of the tag. Tag keys are case-sensitive.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value associated with the tag key. Tag values are case-sensitive.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerRequest {
  /**
   * <p>The catalog identifier where the partner account will be created.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The legal name of the organization becoming a partner.</p>
   * @public
   */
  LegalName: string | undefined;

  /**
   * <p>The primary type of solution or service the partner provides (e.g., consulting, software, managed services).</p>
   * @public
   */
  PrimarySolutionType: PrimarySolutionType | undefined;

  /**
   * <p>The primary contact person for alliance and partnership matters.</p>
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;

  /**
   * <p>The verification code sent to the alliance lead contact's email to confirm account creation.</p>
   * @public
   */
  EmailVerificationCode: string | undefined;

  /**
   * <p>A list of tags to associate with the partner account for organization and billing purposes.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Represents a verified domain associated with a partner account.</p>
 * @public
 */
export interface PartnerDomain {
  /**
   * <p>The domain name that has been verified for the partner account.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The timestamp when the domain was registered and verified for the partner account.</p>
   * @public
   */
  RegisteredAt: Date | undefined;
}

/**
 * <p>Contains comprehensive profile information for a partner including public-facing details.</p>
 * @public
 */
export interface PartnerProfile {
  /**
   * <p>The public display name for the partner organization.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>A description of the partner's business, services, and capabilities.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The partner's primary website URL.</p>
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * <p>The URL to the partner's logo image.</p>
   * @public
   */
  LogoUrl: string | undefined;

  /**
   * <p>The primary type of solution or service the partner provides.</p>
   * @public
   */
  PrimarySolutionType: PrimarySolutionType | undefined;

  /**
   * <p>The industry segments or verticals that the partner serves.</p>
   * @public
   */
  IndustrySegments: IndustrySegment[] | undefined;

  /**
   * <p>The source locale used for automatic translation of profile content.</p>
   * @public
   */
  TranslationSourceLocale: string | undefined;

  /**
   * <p>A list of localized content versions for different languages and regions.</p>
   * @public
   */
  LocalizedContents?: LocalizedContent[] | undefined;

  /**
   * <p>The unique identifier of the partner profile.</p>
   * @public
   */
  ProfileId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerResponse {
  /**
   * <p>The catalog identifier where the partner account was created.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created partner account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the created partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The legal name of the partner organization.</p>
   * @public
   */
  LegalName: string | undefined;

  /**
   * <p>The timestamp when the partner account was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The partner profile information including display name, description, and other public details.</p>
   * @public
   */
  Profile: PartnerProfile | undefined;

  /**
   * <p>The list of verified email domains associated with AWS training and certification credentials for the partner organization.</p>
   * @public
   */
  AwsTrainingCertificationEmailDomains?: PartnerDomain[] | undefined;

  /**
   * <p>The alliance lead contact information for the partner account.</p>
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;
}

/**
 * @public
 */
export interface DisassociateAwsTrainingCertificationEmailDomainRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The domain name to disassociate from AWS training and certification.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAwsTrainingCertificationEmailDomainResponse {}

/**
 * @public
 */
export interface GetAllianceLeadContactRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetAllianceLeadContactResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the partner account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The alliance lead contact information including name, email, and business title.</p>
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;
}

/**
 * @public
 */
export interface GetPartnerRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetPartnerResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the partner account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The legal name of the partner organization.</p>
   * @public
   */
  LegalName: string | undefined;

  /**
   * <p>The timestamp when the partner account was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The partner profile information including display name, description, and other public details.</p>
   * @public
   */
  Profile: PartnerProfile | undefined;

  /**
   * <p>The list of verified email domains associated with AWS training and certification credentials for the partner organization.</p>
   * @public
   */
  AwsTrainingCertificationEmailDomains?: PartnerDomain[] | undefined;
}

/**
 * @public
 */
export interface GetProfileUpdateTaskRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProfileUpdateTaskResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile update task.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The unique identifier of the profile update task.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>The details of the profile update task including what changes are being made.</p>
   * @public
   */
  TaskDetails: TaskDetails | undefined;

  /**
   * <p>The timestamp when the profile update task was started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The current status of the profile update task (in progress, completed, failed, etc.).</p>
   * @public
   */
  Status: ProfileTaskStatus | undefined;

  /**
   * <p>The timestamp when the profile update task was completed or failed.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>A list of error details if any errors occurred during the profile update task.</p>
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface GetProfileVisibilityRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProfileVisibilityResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the partner account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The visibility setting for the partner profile (public, private, restricted, etc.).</p>
   * @public
   */
  Visibility: ProfileVisibility | undefined;

  /**
   * <p>The unique identifier of the partner profile.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetVerificationRequest {
  /**
   * <p>The type of verification to retrieve information for. Valid values include business verification for company registration details and registrant verification for individual identity confirmation.</p>
   * @public
   */
  VerificationType: VerificationType | undefined;
}

/**
 * <p>Contains the response information from a registrant verification process, including any verification-specific data and next steps for the individual verification workflow.</p>
 * @public
 */
export interface RegistrantVerificationResponse {
  /**
   * <p>A secure URL where the registrant can complete additional verification steps, such as document upload or identity confirmation through a third-party verification service.</p>
   * @public
   */
  CompletionUrl: string | undefined;

  /**
   * <p>The timestamp when the completion URL expires and is no longer valid for accessing the verification workflow.</p>
   * @public
   */
  CompletionUrlExpiresAt: Date | undefined;
}

/**
 * <p>A union structure containing the response details specific to different types of verification processes, providing type-specific information and results.</p>
 * @public
 */
export type VerificationResponseDetails =
  | VerificationResponseDetails.BusinessVerificationResponseMember
  | VerificationResponseDetails.RegistrantVerificationResponseMember
  | VerificationResponseDetails.$UnknownMember;

/**
 * @public
 */
export namespace VerificationResponseDetails {
  /**
   * <p>The response details from a business verification process, including verification results and any additional business information discovered.</p>
   * @public
   */
  export interface BusinessVerificationResponseMember {
    BusinessVerificationResponse: BusinessVerificationResponse;
    RegistrantVerificationResponse?: never;
    $unknown?: never;
  }

  /**
   * <p>The response details from a registrant verification process, including verification results and any additional steps required for identity confirmation.</p>
   * @public
   */
  export interface RegistrantVerificationResponseMember {
    BusinessVerificationResponse?: never;
    RegistrantVerificationResponse: RegistrantVerificationResponse;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BusinessVerificationResponse?: never;
    RegistrantVerificationResponse?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    BusinessVerificationResponse: (value: BusinessVerificationResponse) => T;
    RegistrantVerificationResponse: (value: RegistrantVerificationResponse) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetVerificationResponse {
  /**
   * <p>The type of verification that was requested and processed.</p>
   * @public
   */
  VerificationType: VerificationType | undefined;

  /**
   * <p>The current status of the verification process. Possible values include pending, in-progress, completed, failed, or expired.</p>
   * @public
   */
  VerificationStatus: VerificationStatus | undefined;

  /**
   * <p>Additional information explaining the current verification status, particularly useful when the status indicates a failure or requires additional action.</p>
   * @public
   */
  VerificationStatusReason?: string | undefined;

  /**
   * <p>Detailed response information specific to the type of verification performed, including any verification-specific data or results.</p>
   * @public
   */
  VerificationResponseDetails: VerificationResponseDetails | undefined;

  /**
   * <p>The timestamp when the verification process was initiated.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The timestamp when the verification process was completed. This field is null if the verification is still in progress.</p>
   * @public
   */
  CompletedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnersRequest {
  /**
   * <p>The catalog identifier to list partners from.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The token for retrieving the next page of results in paginated responses.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary view of a partner account containing basic information for listing purposes.</p>
 * @public
 */
export interface PartnerSummary {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the partner account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The legal name of the partner organization.</p>
   * @public
   */
  LegalName: string | undefined;

  /**
   * <p>The timestamp when the partner account was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnersResponse {
  /**
   * <p>A list of partner summaries including basic information about each partner account.</p>
   * @public
   */
  PartnerSummaryList: PartnerSummary[] | undefined;

  /**
   * <p>The token for retrieving the next page of results if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the tags are associated with.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags associated with the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAllianceLeadContactRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The alliance lead contact information to set for the partner account.</p>
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;

  /**
   * <p>The verification code sent to the alliance lead contact's email to confirm the update.</p>
   * @public
   */
  EmailVerificationCode?: string | undefined;
}

/**
 * @public
 */
export interface PutAllianceLeadContactResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the partner account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The updated alliance lead contact information.</p>
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;
}

/**
 * @public
 */
export interface PutProfileVisibilityRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The visibility setting to apply to the partner profile.</p>
   * @public
   */
  Visibility: ProfileVisibility | undefined;
}

/**
 * @public
 */
export interface PutProfileVisibilityResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the partner account.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The updated visibility setting for the partner profile.</p>
   * @public
   */
  Visibility: ProfileVisibility | undefined;

  /**
   * <p>The unique identifier of the partner profile.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface StartProfileUpdateTaskRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The details of the profile updates to be performed.</p>
   * @public
   */
  TaskDetails: TaskDetails | undefined;
}

/**
 * @public
 */
export interface StartProfileUpdateTaskResponse {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the started profile update task.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the partner account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The unique identifier of the started profile update task.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>The details of the profile update task that was started.</p>
   * @public
   */
  TaskDetails: TaskDetails | undefined;

  /**
   * <p>The timestamp when the profile update task was started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The current status of the profile update task (in progress).</p>
   * @public
   */
  Status: ProfileTaskStatus | undefined;

  /**
   * <p>The timestamp when the profile update task ended (null for in-progress tasks).</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>A list of error details if any errors occurred during the profile update task.</p>
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface SendEmailVerificationCodeRequest {
  /**
   * <p>The catalog identifier for the partner account.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The email address to send the verification code to.</p>
   * @public
   */
  Email: string | undefined;
}

/**
 * @public
 */
export interface SendEmailVerificationCodeResponse {}

/**
 * <p>Contains the personal information required for verifying an individual's identity as part of the partner registration process in AWS Partner Central.</p>
 * @public
 */
export interface RegistrantVerificationDetails {}

/**
 * <p>A union structure containing the specific details required for different types of verification processes supported by AWS Partner Central.</p>
 * @public
 */
export type VerificationDetails =
  | VerificationDetails.BusinessVerificationDetailsMember
  | VerificationDetails.RegistrantVerificationDetailsMember
  | VerificationDetails.$UnknownMember;

/**
 * @public
 */
export namespace VerificationDetails {
  /**
   * <p>The business verification details to be used when starting a business verification process.</p>
   * @public
   */
  export interface BusinessVerificationDetailsMember {
    BusinessVerificationDetails: BusinessVerificationDetails;
    RegistrantVerificationDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The registrant verification details to be used when starting an individual identity verification process.</p>
   * @public
   */
  export interface RegistrantVerificationDetailsMember {
    BusinessVerificationDetails?: never;
    RegistrantVerificationDetails: RegistrantVerificationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BusinessVerificationDetails?: never;
    RegistrantVerificationDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    BusinessVerificationDetails: (value: BusinessVerificationDetails) => T;
    RegistrantVerificationDetails: (value: RegistrantVerificationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartVerificationRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This prevents duplicate verification processes from being started accidentally.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The specific details required for the verification process, including business information for business verification or personal information for registrant verification.</p>
   * @public
   */
  VerificationDetails?: VerificationDetails | undefined;
}

/**
 * @public
 */
export interface StartVerificationResponse {
  /**
   * <p>The type of verification that was started based on the provided verification details.</p>
   * @public
   */
  VerificationType: VerificationType | undefined;

  /**
   * <p>The initial status of the verification process after it has been started. Typically this will be pending or in-progress.</p>
   * @public
   */
  VerificationStatus: VerificationStatus | undefined;

  /**
   * <p>Additional information about the initial verification status, including any immediate feedback about the submitted verification details.</p>
   * @public
   */
  VerificationStatusReason?: string | undefined;

  /**
   * <p>Initial response details specific to the type of verification started, which may include next steps or additional requirements.</p>
   * @public
   */
  VerificationResponseDetails: VerificationResponseDetails | undefined;

  /**
   * <p>The timestamp when the verification process was successfully initiated.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The timestamp when the verification process was completed. This field is typically null for newly started verifications unless they complete immediately.</p>
   * @public
   */
  CompletedAt?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags to add or update for the specified resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
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
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the specified resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
