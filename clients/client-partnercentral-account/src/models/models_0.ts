// smithy-typescript generated code
import type {
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
  QualificationsAssociationStatus,
  QualificationsAssociationTaskStatus,
  QualificationsDisassociationTaskStatus,
  VerificationStatus,
  VerificationType,
} from "./enums";

/**
 * @public
 */
export interface AcceptConnectionInvitationRequest {
  /**
   * The catalog identifier where the connection invitation exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection invitation to accept.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Summary information about an AWS account.
 *
 * @public
 */
export interface AccountSummary {
  /**
   * The name associated with the AWS account.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A summary view of a partner profile containing basic identifying information.
 *
 * @public
 */
export interface PartnerProfileSummary {
  /**
   * The unique identifier of the partner profile.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The display name of the partner.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A summary view of a seller profile containing basic identifying information.
 *
 * @public
 */
export interface SellerProfileSummary {
  /**
   * The unique identifier of the seller profile.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The display name of the seller.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Represents a participant in a partner connection, containing their profile and account information.
 *
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
   * The partner profile information for the participant.
   *
   * @public
   */
  export interface PartnerProfileMember {
    PartnerProfile: PartnerProfileSummary;
    SellerProfile?: never;
    Account?: never;
    $unknown?: never;
  }

  /**
   * The seller profile information for the participant.
   *
   * @public
   */
  export interface SellerProfileMember {
    PartnerProfile?: never;
    SellerProfile: SellerProfileSummary;
    Account?: never;
    $unknown?: never;
  }

  /**
   * The AWS account information for the participant.
   *
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
 * Detailed information about a specific connection type within a connection.
 *
 * @public
 */
export interface ConnectionTypeDetail {
  /**
   * The timestamp when this connection type was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The email address of the person who initiated this connection type.
   *
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * The name of the person who initiated this connection type.
   *
   * @public
   */
  InviterName: string | undefined;

  /**
   * The current status of this connection type.
   *
   * @public
   */
  Status: ConnectionTypeStatus | undefined;

  /**
   * The timestamp when this connection type was cancelled, if applicable.
   *
   * @public
   */
  CanceledAt?: Date | undefined;

  /**
   * The AWS account ID of the participant who cancelled this connection type.
   *
   * @public
   */
  CanceledBy?: string | undefined;

  /**
   * Information about the other participant in this connection type.
   *
   * @public
   */
  OtherParticipant: Participant | undefined;
}

/**
 * Base structure containing common connection properties.
 *
 * @public
 */
export interface Connection {
  /**
   * The catalog identifier that the connection belongs to.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The AWS Resource Name (ARN) of the connection.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The AWS account ID of the other participant in the connection.
   *
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * The timestamp when the connection was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The type of connection.
   *
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeDetail>> | undefined;
}

/**
 * @public
 */
export interface AcceptConnectionInvitationResponse {
  /**
   * The details of the accepted connection between the two partners.
   *
   * @public
   */
  Connection: Connection | undefined;
}

/**
 * Contains information about a business rule validation error that occurred during an operation.
 *
 * @public
 */
export interface BusinessValidationError {
  /**
   * A description of the business validation error.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * A code identifying the specific business validation error.
   *
   * @public
   */
  Code: BusinessValidationCode | undefined;
}

/**
 * Contains information about a field-level validation error that occurred during an operation.
 *
 * @public
 */
export interface FieldValidationError {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the field validation error.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * A code identifying the specific field validation error.
   *
   * @public
   */
  Code: FieldValidationCode | undefined;
}

/**
 * Contains information about a validation error, which can be either a field-level or business rule validation error.
 *
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
   * Details about a field-level validation error, if applicable.
   *
   * @public
   */
  export interface FieldValidationErrorMember {
    FieldValidationError: FieldValidationError;
    BusinessValidationError?: never;
    $unknown?: never;
  }

  /**
   * Details about a business rule validation error, if applicable.
   *
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
 * Contains contact information for the primary alliance lead responsible for partnership activities.
 *
 * @public
 */
export interface AllianceLeadContact {
  /**
   * The first name of the alliance lead contact person.
   *
   * @public
   */
  FirstName: string | undefined;

  /**
   * The last name of the alliance lead contact person.
   *
   * @public
   */
  LastName: string | undefined;

  /**
   * The email address of the alliance lead contact person.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The business title or role of the alliance lead contact person.
   *
   * @public
   */
  BusinessTitle: string | undefined;
}

/**
 * @public
 */
export interface AssociateAwsTrainingCertificationEmailDomainRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The email address used to verify domain ownership for AWS training and certification association.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The verification code sent to the email address to confirm domain ownership.
   *
   * @public
   */
  EmailVerificationCode: string | undefined;
}

/**
 * @public
 */
export interface AssociateAwsTrainingCertificationEmailDomainResponse {}

/**
 * Identifies a partner in a qualifications association group. Contains the partner's profile identifier and AWS account identifier. In requests, provide at least one of `ProfileId` or `AccountId`. In responses, both fields are populated.
 *
 * @public
 */
export interface QualificationsAssociationPartner {
  /**
   * The unique identifier for the partner profile, in the format `pprofile-*`. Required in requests if `AccountId` is not provided.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The 12-digit AWS account ID linked to the partner profile. Required in requests if `ProfileId` is not provided.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Contains the business information required for verifying a company's legal status and registration details within AWS Partner Central.
 *
 * @public
 */
export interface BusinessVerificationDetails {
  /**
   * The official legal name of the business as registered with the appropriate government authorities.
   *
   * @public
   */
  LegalName: string | undefined;

  /**
   * The unique business registration identifier assigned by the government or regulatory authority, such as a company registration number or tax identification number.
   *
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * The ISO 3166-1 alpha-2 country code where the business is legally registered and operates.
   *
   * @public
   */
  CountryCode: string | undefined;

  /**
   * The specific legal jurisdiction or state where the business was incorporated or registered, providing additional location context beyond the country code.
   *
   * @public
   */
  JurisdictionOfIncorporation?: string | undefined;
}

/**
 * Contains the response information and results from a business verification process, including any verification-specific data returned by the verification service.
 *
 * @public
 */
export interface BusinessVerificationResponse {
  /**
   * The business verification details that were processed and verified, potentially including additional information discovered during the verification process.
   *
   * @public
   */
  BusinessVerificationDetails: BusinessVerificationDetails | undefined;

  /**
   * A secure URL where the registrant can complete additional verification steps, such as document upload or identity confirmation through a third-party verification service.
   *
   * @public
   */
  CompletionUrl?: string | undefined;

  /**
   * The timestamp when the completion URL expires and is no longer valid for accessing the verification workflow.
   *
   * @public
   */
  CompletionUrlExpiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface CancelConnectionRequest {
  /**
   * The catalog identifier where the connection exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection to cancel.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The type of connection to cancel (e.g., reseller, distributor, technology partner).
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The reason for canceling the connection, providing context for the termination.
   *
   * @public
   */
  Reason: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelConnectionResponse {
  /**
   * The catalog identifier where the connection was canceled.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the canceled connection.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the canceled connection.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The AWS account ID of the other participant in the canceled connection.
   *
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * The timestamp when the connection was last updated (canceled).
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The list of connection types that were active before cancellation.
   *
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeDetail>> | undefined;
}

/**
 * @public
 */
export interface CancelConnectionInvitationRequest {
  /**
   * The catalog identifier where the connection invitation exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection invitation to cancel.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelConnectionInvitationResponse {
  /**
   * The catalog identifier where the connection invitation was canceled.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the canceled connection invitation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the canceled connection invitation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the connection associated with the canceled invitation.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of connection that was being invited for.
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The timestamp when the connection invitation was originally created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation was last updated (canceled).
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation would have expired if not canceled.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The identifier of the other participant who was invited to connect.
   *
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * The type of participant (inviter or invitee) in the connection invitation.
   *
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * The current status of the connection invitation (canceled).
   *
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * The message that was included with the original connection invitation.
   *
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * The email address of the person who sent the connection invitation.
   *
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * The name of the person who sent the connection invitation.
   *
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface CancelProfileUpdateTaskRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The unique identifier of the profile update task to cancel.
   *
   * @public
   */
  TaskId: string | undefined;
}

/**
 * Contains detailed information about an error that occurred during an operation.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The locale or language code for the error message.
   *
   * @public
   */
  Locale: string | undefined;

  /**
   * A human-readable description of the error.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * A machine-readable code or reason for the error.
   *
   * @public
   */
  Reason: ProfileValidationErrorReason | undefined;
}

/**
 * Contains the partner's headquarters location using International Organization for Standardization (ISO) 3166 country and subdivision codes.
 *
 * @public
 */
export interface Headquarters {
  /**
   * The ISO 3166-1 alpha-2 country code of the partner's headquarters. For example, `US`, `BR`, or `DE`.
   *
   * @public
   */
  CountryCode: string | undefined;

  /**
   * The subdivision portion of the ISO 3166-2 code for the partner's headquarters (for example, `SP` from `BR-SP`, `NSW` from `AU-NSW`, or `13` from `JP-13`).
   *
   * @public
   */
  SubdivisionCode: string | undefined;
}

/**
 * Contains localized content for a partner profile in a specific language or locale.
 *
 * @public
 */
export interface LocalizedContent {
  /**
   * The localized display name for the partner.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The localized description of the partner's business and services.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The localized website URL for the partner.
   *
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * The URL to the partner's logo image for this locale.
   *
   * @public
   */
  LogoUrl: string | undefined;

  /**
   * The locale or language code for the localized content.
   *
   * @public
   */
  Locale: string | undefined;
}

/**
 * Contains detailed information about a profile update task including the changes to be made.
 *
 * @public
 */
export interface TaskDetails {
  /**
   * The updated display name for the partner profile.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The updated description for the partner profile.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The updated website URL for the partner profile.
   *
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * The updated logo URL for the partner profile.
   *
   * @public
   */
  LogoUrl: string | undefined;

  /**
   * The updated primary solution type for the partner profile.
   *
   * @public
   */
  PrimarySolutionType: PrimarySolutionType | undefined;

  /**
   * The updated industry segments for the partner profile.
   *
   * @public
   */
  IndustrySegments: IndustrySegment[] | undefined;

  /**
   * The updated translation source locale for the partner profile.
   *
   * @public
   */
  TranslationSourceLocale: string | undefined;

  /**
   * The updated localized content for the partner profile.
   *
   * @public
   */
  LocalizedContents?: LocalizedContent[] | undefined;

  /**
   * The ISO 3166 country and subdivision codes for the partner's headquarters location. If you omit this field, the service retains the existing headquarters value.
   *
   * @public
   */
  Headquarters?: Headquarters | undefined;
}

/**
 * @public
 */
export interface CancelProfileUpdateTaskResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the canceled profile update task.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the canceled profile update task.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The details of the profile update task that was canceled.
   *
   * @public
   */
  TaskDetails: TaskDetails | undefined;

  /**
   * The timestamp when the profile update task was started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The current status of the profile update task (canceled).
   *
   * @public
   */
  Status: ProfileTaskStatus | undefined;

  /**
   * The timestamp when the profile update task was ended (canceled).
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * A list of error details if any errors occurred during the profile update task.
   *
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInvitationRequest {
  /**
   * The catalog identifier where the connection invitation will be created.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The type of connection being requested (e.g., reseller, distributor, technology partner).
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The email address of the person to send the connection invitation to.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * A custom message to include with the connection invitation.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The name of the person sending the connection invitation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier of the organization or partner to invite for connection.
   *
   * @public
   */
  ReceiverIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionInvitationResponse {
  /**
   * The catalog identifier where the connection invitation was created.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the created connection invitation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created connection invitation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the connection associated with this invitation.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of connection being requested in the invitation.
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The timestamp when the connection invitation was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation will expire if not responded to.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The identifier of the organization or partner being invited.
   *
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * The type of participant (inviter or invitee) in the connection invitation.
   *
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * The current status of the connection invitation (pending, accepted, rejected, etc.).
   *
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * The custom message included with the connection invitation.
   *
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * The email address of the person who sent the connection invitation.
   *
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * The name of the person who sent the connection invitation.
   *
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionInvitationRequest {
  /**
   * The catalog identifier where the connection invitation exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection invitation to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionInvitationResponse {
  /**
   * The catalog identifier where the connection invitation exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection invitation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection invitation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the connection associated with this invitation.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of connection being requested in the invitation.
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The timestamp when the connection invitation was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation will expire.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The identifier of the other participant in the connection invitation.
   *
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * The type of participant (inviter or invitee) in the connection invitation.
   *
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * The current status of the connection invitation.
   *
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * The custom message included with the connection invitation.
   *
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * The email address of the person who sent the connection invitation.
   *
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * The name of the person who sent the connection invitation.
   *
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionInvitationsRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The token for retrieving the next page of results in paginated responses.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filter results by connection type (e.g., reseller, distributor, technology partner).
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * The maximum number of connection invitations to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter results by specific participant identifiers.
   *
   * @public
   */
  OtherParticipantIdentifiers?: string[] | undefined;

  /**
   * Filter results by participant type (inviter or invitee).
   *
   * @public
   */
  ParticipantType?: ParticipantType | undefined;

  /**
   * Filter results by invitation status (pending, accepted, rejected, canceled, expired).
   *
   * @public
   */
  Status?: InvitationStatus | undefined;
}

/**
 * A summary view of a connection invitation containing key information without full details.
 *
 * @public
 */
export interface ConnectionInvitationSummary {
  /**
   * The catalog identifier where the connection invitation exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection invitation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection invitation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the connection associated with this invitation.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of connection being requested in the invitation.
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The timestamp when the connection invitation was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation will expire.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The identifier of the other participant in the connection invitation.
   *
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * The type of participant (inviter or invitee) in the connection invitation.
   *
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * The current status of the connection invitation.
   *
   * @public
   */
  Status: InvitationStatus | undefined;
}

/**
 * @public
 */
export interface ListConnectionInvitationsResponse {
  /**
   * A list of connection invitation summaries matching the specified criteria.
   *
   * @public
   */
  ConnectionInvitationSummaries: ConnectionInvitationSummary[] | undefined;

  /**
   * The token for retrieving the next page of results if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectConnectionInvitationRequest {
  /**
   * The catalog identifier where the connection invitation exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection invitation to reject.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The reason for rejecting the connection invitation.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface RejectConnectionInvitationResponse {
  /**
   * The catalog identifier where the connection invitation was rejected.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the rejected connection invitation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rejected connection invitation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The identifier of the connection associated with the rejected invitation.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of connection that was being invited for.
   *
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * The timestamp when the connection invitation was originally created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation was last updated (rejected).
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the connection invitation would have expired.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The identifier of the other participant who sent the invitation.
   *
   * @public
   */
  OtherParticipantIdentifier: string | undefined;

  /**
   * The type of participant (inviter or invitee) in the connection invitation.
   *
   * @public
   */
  ParticipantType: ParticipantType | undefined;

  /**
   * The current status of the connection invitation (rejected).
   *
   * @public
   */
  Status: InvitationStatus | undefined;

  /**
   * The message that was included with the original connection invitation.
   *
   * @public
   */
  InvitationMessage: string | undefined;

  /**
   * The email address of the person who sent the connection invitation.
   *
   * @public
   */
  InviterEmail: string | undefined;

  /**
   * The name of the person who sent the connection invitation.
   *
   * @public
   */
  InviterName: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionPreferencesRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionPreferencesResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection preferences.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The access type setting for connections (e.g., open, restricted, invitation-only).
   *
   * @public
   */
  AccessType: AccessType | undefined;

  /**
   * A list of participant IDs that are excluded from connection requests or interactions.
   *
   * @public
   */
  ExcludedParticipantIds?: string[] | undefined;

  /**
   * The timestamp when the connection preferences were last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The revision number of the connection preferences for optimistic locking.
   *
   * @public
   */
  Revision: number | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionPreferencesRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The revision number of the connection preferences for optimistic locking.
   *
   * @public
   */
  Revision: number | undefined;

  /**
   * The access type setting for connections (e.g., open, restricted, invitation-only).
   *
   * @public
   */
  AccessType: AccessType | undefined;

  /**
   * The updated list of participant identifiers to exclude from connections.
   *
   * @public
   */
  ExcludedParticipantIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionPreferencesResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated connection preferences.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The updated access type setting for connections.
   *
   * @public
   */
  AccessType: AccessType | undefined;

  /**
   * A list of participant IDs that are excluded from connection requests or interactions.
   *
   * @public
   */
  ExcludedParticipantIds?: string[] | undefined;

  /**
   * The timestamp when the connection preferences were last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The updated revision number of the connection preferences.
   *
   * @public
   */
  Revision: number | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * The catalog identifier where the connection exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * The catalog identifier where the connection exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The AWS account ID of the other participant in the connection.
   *
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * The timestamp when the connection was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The list of connection types active between the partners.
   *
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeDetail>> | undefined;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The token for retrieving the next page of results in paginated responses.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filter results by connection type (e.g., reseller, distributor, technology partner).
   *
   * @public
   */
  ConnectionType?: string | undefined;

  /**
   * The maximum number of connections to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter results by specific participant identifiers.
   *
   * @public
   */
  OtherParticipantIdentifiers?: string[] | undefined;
}

/**
 * Summary information about a specific connection type between partners.
 *
 * @public
 */
export interface ConnectionTypeSummary {
  /**
   * The current status of this connection type (active, canceled, etc.).
   *
   * @public
   */
  Status: ConnectionTypeStatus | undefined;

  /**
   * Information about the other participant in this connection type.
   *
   * @public
   */
  OtherParticipant: Participant | undefined;
}

/**
 * A summary view of an active connection between partners containing key information.
 *
 * @public
 */
export interface ConnectionSummary {
  /**
   * The catalog identifier where the connection exists.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the connection.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The AWS account ID of the other participant in the connection.
   *
   * @public
   */
  OtherParticipantAccountId: string | undefined;

  /**
   * The timestamp when the connection was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * A map of connection types and their summary information for this connection.
   *
   * @public
   */
  ConnectionTypes: Partial<Record<ConnectionType, ConnectionTypeSummary>> | undefined;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * A list of connection summaries matching the specified criteria.
   *
   * @public
   */
  ConnectionSummaries: ConnectionSummary[] | undefined;

  /**
   * The token for retrieving the next page of results if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A key-value pair used to associate metadata with AWS Partner Central Account resources.
 *
 * @public
 */
export interface Tag {
  /**
   * The key name of the tag. Tag keys are case-sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value associated with the tag key. Tag values are case-sensitive.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerRequest {
  /**
   * The catalog identifier where the partner account will be created.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The legal name of the organization becoming a partner.
   *
   * @public
   */
  LegalName: string | undefined;

  /**
   * The primary type of solution or service the partner provides (e.g., consulting, software, managed services).
   *
   * @public
   */
  PrimarySolutionType: PrimarySolutionType | undefined;

  /**
   * The primary contact person for alliance and partnership matters.
   *
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;

  /**
   * The verification code sent to the alliance lead contact's email to confirm account creation.
   *
   * @public
   */
  EmailVerificationCode: string | undefined;

  /**
   * A list of tags to associate with the partner account for organization and billing purposes.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents a verified domain associated with a partner account.
 *
 * @public
 */
export interface PartnerDomain {
  /**
   * The domain name that has been verified for the partner account.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The timestamp when the domain was registered and verified for the partner account.
   *
   * @public
   */
  RegisteredAt: Date | undefined;
}

/**
 * Contains comprehensive profile information for a partner including public-facing details.
 *
 * @public
 */
export interface PartnerProfile {
  /**
   * The public display name for the partner organization.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * A description of the partner's business, services, and capabilities.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The partner's primary website URL.
   *
   * @public
   */
  WebsiteUrl: string | undefined;

  /**
   * The URL to the partner's logo image.
   *
   * @public
   */
  LogoUrl: string | undefined;

  /**
   * The primary type of solution or service the partner provides.
   *
   * @public
   */
  PrimarySolutionType: PrimarySolutionType | undefined;

  /**
   * The industry segments or verticals that the partner serves.
   *
   * @public
   */
  IndustrySegments: IndustrySegment[] | undefined;

  /**
   * The source locale used for automatic translation of profile content.
   *
   * @public
   */
  TranslationSourceLocale: string | undefined;

  /**
   * A list of localized content versions for different languages and regions.
   *
   * @public
   */
  LocalizedContents?: LocalizedContent[] | undefined;

  /**
   * The ISO 3166 country and subdivision codes for the partner's headquarters location. If no headquarters location is set, this field is not included in the response.
   *
   * @public
   */
  Headquarters?: Headquarters | undefined;

  /**
   * The unique identifier of the partner profile.
   *
   * @public
   */
  ProfileId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerResponse {
  /**
   * The catalog identifier where the partner account was created.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created partner account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the created partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The legal name of the partner organization.
   *
   * @public
   */
  LegalName: string | undefined;

  /**
   * The timestamp when the partner account was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The partner profile information including display name, description, and other public details.
   *
   * @public
   */
  Profile: PartnerProfile | undefined;

  /**
   * The list of verified email domains associated with AWS training and certification credentials for the partner organization.
   *
   * @public
   */
  AwsTrainingCertificationEmailDomains?: PartnerDomain[] | undefined;

  /**
   * The alliance lead contact information for the partner account.
   *
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;
}

/**
 * @public
 */
export interface DisassociateAwsTrainingCertificationEmailDomainRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The domain name to disassociate from AWS training and certification.
   *
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
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetAllianceLeadContactResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the partner account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The alliance lead contact information including name, email, and business title.
   *
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;
}

/**
 * @public
 */
export interface GetPartnerRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetPartnerResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the partner account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The legal name of the partner organization.
   *
   * @public
   */
  LegalName: string | undefined;

  /**
   * The timestamp when the partner account was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The partner profile information including display name, description, and other public details.
   *
   * @public
   */
  Profile: PartnerProfile | undefined;

  /**
   * The list of verified email domains associated with AWS training and certification credentials for the partner organization.
   *
   * @public
   */
  AwsTrainingCertificationEmailDomains?: PartnerDomain[] | undefined;
}

/**
 * @public
 */
export interface GetProfileUpdateTaskRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProfileUpdateTaskResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile update task.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the profile update task.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The details of the profile update task including what changes are being made.
   *
   * @public
   */
  TaskDetails: TaskDetails | undefined;

  /**
   * The timestamp when the profile update task was started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The current status of the profile update task (in progress, completed, failed, etc.).
   *
   * @public
   */
  Status: ProfileTaskStatus | undefined;

  /**
   * The timestamp when the profile update task was completed or failed.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * A list of error details if any errors occurred during the profile update task.
   *
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface GetProfileVisibilityRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProfileVisibilityResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the partner account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The visibility setting for the partner profile (public, private, restricted, etc.).
   *
   * @public
   */
  Visibility: ProfileVisibility | undefined;

  /**
   * The unique identifier of the partner profile.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetQualificationsAssociationDetailsRequest {
  /**
   * The catalog in which to look up the qualifications association. Valid values: `AWS`, `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Your partner identifier. You can provide either a partner ID (for example, `partner-abc123`) or a partner ARN. You must own this identifier.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetQualificationsAssociationDetailsResponse {
  /**
   * The catalog identifier echoed from the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies your partner resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Your unique partner identifier in the AWS Partner Network.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current qualifications association status. Valid values: `ASSOCIATED` (the partner is associated with a primary), `NOT_ASSOCIATED` (the partner has no active association).
   *
   * @public
   */
  Status: QualificationsAssociationStatus | undefined;

  /**
   * The primary partner's profile and account identifiers. This field is null when the status is `NOT_ASSOCIATED`.
   *
   * @public
   */
  PrimaryPartner?: QualificationsAssociationPartner | undefined;

  /**
   * The list of all partner profile and account identifiers currently associated under the primary partner. This field is null when the status is `NOT_ASSOCIATED`.
   *
   * @public
   */
  AssociatedPartners?: QualificationsAssociationPartner[] | undefined;

  /**
   * The timestamp when the qualifications association was last updated, in ISO 8601 format. This field is null when the status is `NOT_ASSOCIATED`.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetQualificationsAssociationTaskRequest {
  /**
   * The catalog in which to look up the qualifications association task. Valid values: `AWS`, `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Your partner identifier. You can provide either a partner ID (for example, `partner-abc123`) or a partner ARN. You must own this identifier.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetQualificationsAssociationTaskResponse {
  /**
   * The catalog identifier echoed from the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies your partner resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Your unique partner identifier in the AWS Partner Network.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the qualifications association task, in the format `pqatask-[a-z2-7]\{13\}`.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The current status of the qualifications association task. Valid values: `IN_PROGRESS`, `SUCCEEDED`.
   *
   * @public
   */
  Status: QualificationsAssociationTaskStatus | undefined;

  /**
   * The primary partner's profile and account identifiers that the task is associating qualifications with.
   *
   * @public
   */
  PrimaryPartner: QualificationsAssociationPartner | undefined;

  /**
   * The timestamp when the qualifications association task started, in ISO 8601 format.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The timestamp when the qualifications association task ended, in ISO 8601 format. This field is present only when the status is `SUCCEEDED`.
   *
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetQualificationsDisassociationTaskRequest {
  /**
   * The catalog in which to look up the qualifications disassociation task. Valid values: `AWS`, `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Your partner identifier. You can provide either a partner ID (for example, `partner-abc123`) or a partner ARN. You must own this identifier.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetQualificationsDisassociationTaskResponse {
  /**
   * The catalog identifier echoed from the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies your partner resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Your unique partner identifier in the AWS Partner Network.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the qualifications disassociation task, in the format `pqdtask-[a-z2-7]\{13\}`.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The current status of the qualifications disassociation task. Valid values: `IN_PROGRESS`, `SUCCEEDED`.
   *
   * @public
   */
  Status: QualificationsDisassociationTaskStatus | undefined;

  /**
   * The primary partner's profile and account identifiers that the task is disassociating qualifications from.
   *
   * @public
   */
  AssociatedPartner: QualificationsAssociationPartner | undefined;

  /**
   * The timestamp when the qualifications disassociation task started, in ISO 8601 format.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The timestamp when the qualifications disassociation task ended, in ISO 8601 format. This field is present only when the status is `SUCCEEDED`.
   *
   * @public
   */
  EndedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetVerificationRequest {
  /**
   * The type of verification to retrieve information for. Valid values include business verification for company registration details and registrant verification for individual identity confirmation.
   *
   * @public
   */
  VerificationType: VerificationType | undefined;
}

/**
 * Contains the response information from a registrant verification process, including any verification-specific data and next steps for the individual verification workflow.
 *
 * @public
 */
export interface RegistrantVerificationResponse {
  /**
   * A secure URL where the registrant can complete additional verification steps, such as document upload or identity confirmation through a third-party verification service.
   *
   * @public
   */
  CompletionUrl: string | undefined;

  /**
   * The timestamp when the completion URL expires and is no longer valid for accessing the verification workflow.
   *
   * @public
   */
  CompletionUrlExpiresAt: Date | undefined;
}

/**
 * A union structure containing the response details specific to different types of verification processes, providing type-specific information and results.
 *
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
   * The response details from a business verification process, including verification results and any additional business information discovered.
   *
   * @public
   */
  export interface BusinessVerificationResponseMember {
    BusinessVerificationResponse: BusinessVerificationResponse;
    RegistrantVerificationResponse?: never;
    $unknown?: never;
  }

  /**
   * The response details from a registrant verification process, including verification results and any additional steps required for identity confirmation.
   *
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
   * The type of verification that was requested and processed.
   *
   * @public
   */
  VerificationType: VerificationType | undefined;

  /**
   * The current status of the verification process. Possible values include pending, in-progress, completed, failed, or expired.
   *
   * @public
   */
  VerificationStatus: VerificationStatus | undefined;

  /**
   * Additional information explaining the current verification status, particularly useful when the status indicates a failure or requires additional action.
   *
   * @public
   */
  VerificationStatusReason?: string | undefined;

  /**
   * Detailed response information specific to the type of verification performed, including any verification-specific data or results.
   *
   * @public
   */
  VerificationResponseDetails: VerificationResponseDetails | undefined;

  /**
   * The timestamp when the verification process was initiated.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The timestamp when the verification process was completed. This field is null if the verification is still in progress.
   *
   * @public
   */
  CompletedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnersRequest {
  /**
   * The catalog identifier to list partners from.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The token for retrieving the next page of results in paginated responses.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary view of a partner account containing basic information for listing purposes.
 *
 * @public
 */
export interface PartnerSummary {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the partner account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The legal name of the partner organization.
   *
   * @public
   */
  LegalName: string | undefined;

  /**
   * The timestamp when the partner account was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnersResponse {
  /**
   * A list of partner summaries including basic information about each partner account.
   *
   * @public
   */
  PartnerSummaryList: PartnerSummary[] | undefined;

  /**
   * The token for retrieving the next page of results if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
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
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource that the tags are associated with.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tags associated with the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAllianceLeadContactRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The alliance lead contact information to set for the partner account.
   *
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;

  /**
   * The verification code sent to the alliance lead contact's email to confirm the update.
   *
   * @public
   */
  EmailVerificationCode?: string | undefined;
}

/**
 * @public
 */
export interface PutAllianceLeadContactResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the partner account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The updated alliance lead contact information.
   *
   * @public
   */
  AllianceLeadContact: AllianceLeadContact | undefined;
}

/**
 * @public
 */
export interface PutProfileVisibilityRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The visibility setting to apply to the partner profile.
   *
   * @public
   */
  Visibility: ProfileVisibility | undefined;
}

/**
 * @public
 */
export interface PutProfileVisibilityResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the partner account.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The updated visibility setting for the partner profile.
   *
   * @public
   */
  Visibility: ProfileVisibility | undefined;

  /**
   * The unique identifier of the partner profile.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface StartProfileUpdateTaskRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The details of the profile updates to be performed.
   *
   * @public
   */
  TaskDetails: TaskDetails | undefined;
}

/**
 * @public
 */
export interface StartProfileUpdateTaskResponse {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the started profile update task.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the partner account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the started profile update task.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The details of the profile update task that was started.
   *
   * @public
   */
  TaskDetails: TaskDetails | undefined;

  /**
   * The timestamp when the profile update task was started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The current status of the profile update task (in progress).
   *
   * @public
   */
  Status: ProfileTaskStatus | undefined;

  /**
   * The timestamp when the profile update task ended (null for in-progress tasks).
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * A list of error details if any errors occurred during the profile update task.
   *
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface StartQualificationsAssociationTaskRequest {
  /**
   * The catalog in which to perform the qualifications association. Valid values: `AWS`, `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Your partner identifier. You can provide either a partner ID (for example, `partner-abc123`) or a partner ARN. You must own this identifier.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The primary (acquiring) partner's profile and account identifier to associate qualifications with. You must provide at least one of `ProfileId` or `AccountId`. You cannot specify yourself as the primary partner.
   *
   * @public
   */
  PrimaryPartner: QualificationsAssociationPartner | undefined;
}

/**
 * @public
 */
export interface StartQualificationsAssociationTaskResponse {
  /**
   * The catalog identifier echoed from the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies your partner resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Your unique partner identifier in the AWS Partner Network.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the started qualifications association task, in the format `pqatask-[a-z2-7]\{13\}`.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The current status of the qualifications association task. The initial value is `IN_PROGRESS`.
   *
   * @public
   */
  Status: QualificationsAssociationTaskStatus | undefined;

  /**
   * The resolved primary partner's profile and account identifiers, including both `ProfileId` and `AccountId`.
   *
   * @public
   */
  PrimaryPartner: QualificationsAssociationPartner | undefined;

  /**
   * The timestamp when the qualifications association task started, in ISO 8601 format.
   *
   * @public
   */
  StartedAt: Date | undefined;
}

/**
 * @public
 */
export interface StartQualificationsDisassociationTaskRequest {
  /**
   * The catalog in which to perform the qualifications disassociation. Valid values: `AWS`, `Sandbox`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Your partner identifier. You can provide either a partner ID (for example, `partner-abc123`) or a partner ARN. You must own this identifier.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The primary partner's profile and account identifier that you are currently associated with and will disassociate from. You must provide at least one of `ProfileId` or `AccountId`. The specified partner must match your current primary association.
   *
   * @public
   */
  AssociatedPartner: QualificationsAssociationPartner | undefined;
}

/**
 * @public
 */
export interface StartQualificationsDisassociationTaskResponse {
  /**
   * The catalog identifier echoed from the request.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies your partner resource.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Your unique partner identifier in the AWS Partner Network.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the started qualifications disassociation task, in the format `pqdtask-[a-z2-7]\{13\}`.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * The current status of the qualifications disassociation task. The initial value is `IN_PROGRESS`.
   *
   * @public
   */
  Status: QualificationsDisassociationTaskStatus | undefined;

  /**
   * The resolved primary partner's profile and account identifiers that the task is disassociating qualifications from.
   *
   * @public
   */
  AssociatedPartner: QualificationsAssociationPartner | undefined;

  /**
   * The timestamp when the qualifications disassociation task started, in ISO 8601 format.
   *
   * @public
   */
  StartedAt: Date | undefined;
}

/**
 * @public
 */
export interface SendEmailVerificationCodeRequest {
  /**
   * The catalog identifier for the partner account.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The email address to send the verification code to.
   *
   * @public
   */
  Email: string | undefined;
}

/**
 * @public
 */
export interface SendEmailVerificationCodeResponse {}

/**
 * Contains the personal information required for verifying an individual's identity as part of the partner registration process in AWS Partner Central.
 *
 * @public
 */
export interface RegistrantVerificationDetails {}

/**
 * A union structure containing the specific details required for different types of verification processes supported by AWS Partner Central.
 *
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
   * The business verification details to be used when starting a business verification process.
   *
   * @public
   */
  export interface BusinessVerificationDetailsMember {
    BusinessVerificationDetails: BusinessVerificationDetails;
    RegistrantVerificationDetails?: never;
    $unknown?: never;
  }

  /**
   * The registrant verification details to be used when starting an individual identity verification process.
   *
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
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This prevents duplicate verification processes from being started accidentally.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The specific details required for the verification process, including business information for business verification or personal information for registrant verification.
   *
   * @public
   */
  VerificationDetails?: VerificationDetails | undefined;
}

/**
 * @public
 */
export interface StartVerificationResponse {
  /**
   * The type of verification that was started based on the provided verification details.
   *
   * @public
   */
  VerificationType: VerificationType | undefined;

  /**
   * The initial status of the verification process after it has been started. Typically this will be pending or in-progress.
   *
   * @public
   */
  VerificationStatus: VerificationStatus | undefined;

  /**
   * Additional information about the initial verification status, including any immediate feedback about the submitted verification details.
   *
   * @public
   */
  VerificationStatusReason?: string | undefined;

  /**
   * Initial response details specific to the type of verification started, which may include next steps or additional requirements.
   *
   * @public
   */
  VerificationResponseDetails: VerificationResponseDetails | undefined;

  /**
   * The timestamp when the verification process was successfully initiated.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The timestamp when the verification process was completed. This field is typically null for newly started verifications unless they complete immediately.
   *
   * @public
   */
  CompletedAt?: Date | undefined;
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
  ResourceArn: string | undefined;

  /**
   * A list of tags to add or update for the specified resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys to remove from the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
