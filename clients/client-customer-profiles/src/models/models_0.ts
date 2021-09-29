import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AddProfileKeyRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>A searchable identifier of a customer profile.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace AddProfileKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddProfileKeyRequest): any => ({
    ...obj,
  });
}

export interface AddProfileKeyResponse {
  /**
   * <p>A searchable identifier of a customer profile.</p>
   */
  KeyName?: string;

  /**
   * <p>A list of key values.</p>
   */
  Values?: string[];
}

export namespace AddProfileKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddProfileKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input you provided is invalid.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource does not exist, or access was denied.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You exceeded the maximum number of requests.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>A generic address associated with the customer that is not mailing, shipping, or
 *          billing.</p>
 */
export interface Address {
  /**
   * <p>The first line of a customer address.</p>
   */
  Address1?: string;

  /**
   * <p>The second line of a customer address.</p>
   */
  Address2?: string;

  /**
   * <p>The third line of a customer address.</p>
   */
  Address3?: string;

  /**
   * <p>The fourth line of a customer address.</p>
   */
  Address4?: string;

  /**
   * <p>The city in which a customer lives.</p>
   */
  City?: string;

  /**
   * <p>The county in which a customer lives.</p>
   */
  County?: string;

  /**
   * <p>The state in which a customer lives.</p>
   */
  State?: string;

  /**
   * <p>The province in which a customer lives.</p>
   */
  Province?: string;

  /**
   * <p>The country in which a customer lives.</p>
   */
  Country?: string;

  /**
   * <p>The postal code of a customer address.</p>
   */
  PostalCode?: string;
}

export namespace Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Address): any => ({
    ...obj,
  });
}

export enum MarketoConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  GREATER_THAN = "GREATER_THAN",
  LESS_THAN = "LESS_THAN",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum S3ConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum SalesforceConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum ServiceNowConnectorOperator {
  ADDITION = "ADDITION",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  DIVISION = "DIVISION",
  EQUAL_TO = "EQUAL_TO",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NOT_EQUAL_TO = "NOT_EQUAL_TO",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

export enum ZendeskConnectorOperator {
  ADDITION = "ADDITION",
  DIVISION = "DIVISION",
  GREATER_THAN = "GREATER_THAN",
  MASK_ALL = "MASK_ALL",
  MASK_FIRST_N = "MASK_FIRST_N",
  MASK_LAST_N = "MASK_LAST_N",
  MULTIPLICATION = "MULTIPLICATION",
  NO_OP = "NO_OP",
  PROJECTION = "PROJECTION",
  SUBTRACTION = "SUBTRACTION",
  VALIDATE_NON_NEGATIVE = "VALIDATE_NON_NEGATIVE",
  VALIDATE_NON_NULL = "VALIDATE_NON_NULL",
  VALIDATE_NON_ZERO = "VALIDATE_NON_ZERO",
  VALIDATE_NUMERIC = "VALIDATE_NUMERIC",
}

/**
 * <p>The operation to be performed on the provided source fields.</p>
 */
export interface ConnectorOperator {
  /**
   * <p>The operation to be performed on the provided Marketo source fields.</p>
   */
  Marketo?: MarketoConnectorOperator | string;

  /**
   * <p>The operation to be performed on the provided Amazon S3 source fields.</p>
   */
  S3?: S3ConnectorOperator | string;

  /**
   * <p>The operation to be performed on the provided Salesforce source fields.</p>
   */
  Salesforce?: SalesforceConnectorOperator | string;

  /**
   * <p>The operation to be performed on the provided ServiceNow source fields.</p>
   */
  ServiceNow?: ServiceNowConnectorOperator | string;

  /**
   * <p>The operation to be performed on the provided Zendesk source fields.</p>
   */
  Zendesk?: ZendeskConnectorOperator | string;
}

export namespace ConnectorOperator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The flag that enables the matching process of duplicate profiles.</p>
 */
export interface MatchingRequest {
  /**
   * <p>The flag that enables the matching process of duplicate profiles.</p>
   */
  Enabled: boolean | undefined;
}

export namespace MatchingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchingRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   */
  DefaultExpirationDays: number | undefined;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications. You must set up a policy on the
   *          DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send
   *          messages to the DeadLetterQueue.</p>
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   * After that batch process completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results.  </p>
   */
  Matching?: MatchingRequest;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The flag that enables the matching process of duplicate profiles.</p>
 */
export interface MatchingResponse {
  /**
   * <p>The flag that enables the matching process of duplicate profiles.</p>
   */
  Enabled?: boolean;
}

export namespace MatchingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchingResponse): any => ({
    ...obj,
  });
}

export interface CreateDomainResponse {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   */
  DefaultExpirationDays: number | undefined;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   * After that batch process completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results.  </p>
   */
  Matching?: MatchingResponse;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainResponse): any => ({
    ...obj,
  });
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  UNSPECIFIED = "UNSPECIFIED",
}

export enum PartyType {
  BUSINESS = "BUSINESS",
  INDIVIDUAL = "INDIVIDUAL",
  OTHER = "OTHER",
}

export interface CreateProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A unique account number that you have given to the customer.</p>
   */
  AccountNumber?: string;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   */
  AdditionalInformation?: string;

  /**
   * <p>The type of profile used to describe the customer.</p>
   */
  PartyType?: PartyType | string;

  /**
   * <p>The name of the customer’s business.</p>
   */
  BusinessName?: string;

  /**
   * <p>The customer’s first name.</p>
   */
  FirstName?: string;

  /**
   * <p>The customer’s middle name.</p>
   */
  MiddleName?: string;

  /**
   * <p>The customer’s last name.</p>
   */
  LastName?: string;

  /**
   * <p>The customer’s birth date. </p>
   */
  BirthDate?: string;

  /**
   * <p>The gender with which the customer identifies. </p>
   */
  Gender?: Gender | string;

  /**
   * <p>The customer’s phone number, which has not been specified as a mobile, home, or business
   *          number. </p>
   */
  PhoneNumber?: string;

  /**
   * <p>The customer’s mobile phone number.</p>
   */
  MobilePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   */
  HomePhoneNumber?: string;

  /**
   * <p>The customer’s business phone number.</p>
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   */
  EmailAddress?: string;

  /**
   * <p>The customer’s personal email address.</p>
   */
  PersonalEmailAddress?: string;

  /**
   * <p>The customer’s business email address.</p>
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   */
  Address?: Address;

  /**
   * <p>The customer’s shipping address.</p>
   */
  ShippingAddress?: Address;

  /**
   * <p>The customer’s mailing address.</p>
   */
  MailingAddress?: Address;

  /**
   * <p>The customer’s billing address.</p>
   */
  BillingAddress?: Address;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace CreateProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProfileRequest): any => ({
    ...obj,
  });
}

export interface CreateProfileResponse {
  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;
}

export namespace CreateProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   */
  Message: string | undefined;
}

export namespace DeleteDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainResponse): any => ({
    ...obj,
  });
}

export interface DeleteIntegrationRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   */
  Uri: string | undefined;
}

export namespace DeleteIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntegrationRequest): any => ({
    ...obj,
  });
}

export interface DeleteIntegrationResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   */
  Message: string | undefined;
}

export namespace DeleteIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntegrationResponse): any => ({
    ...obj,
  });
}

export interface DeleteProfileRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteProfileResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   */
  Message?: string;
}

export namespace DeleteProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteProfileKeyRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>A searchable identifier of a customer profile.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteProfileKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteProfileKeyResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   */
  Message?: string;
}

export namespace DeleteProfileKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileKeyResponse): any => ({
    ...obj,
  });
}

export interface DeleteProfileObjectRequest {
  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>The unique identifier of the profile object generated by the service.</p>
   */
  ProfileObjectUniqueKey: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteProfileObjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileObjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteProfileObjectResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   */
  Message?: string;
}

export namespace DeleteProfileObjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileObjectResponse): any => ({
    ...obj,
  });
}

export interface DeleteProfileObjectTypeRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;
}

export namespace DeleteProfileObjectTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileObjectTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteProfileObjectTypeResponse {
  /**
   * <p>A message that indicates the delete request is done.</p>
   */
  Message: string | undefined;
}

export namespace DeleteProfileObjectTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProfileObjectTypeResponse): any => ({
    ...obj,
  });
}

export interface GetDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace GetDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Usage-specific statistics about the domain.</p>
 */
export interface DomainStats {
  /**
   * <p>The total number of profiles currently in the domain.</p>
   */
  ProfileCount?: number;

  /**
   * <p>The number of profiles that you are currently paying for in the domain. If you have more
   *          than 100 objects associated with a single profile, that profile counts as two profiles. If
   *          you have more than 200 objects, that profile counts as three, and so on.</p>
   */
  MeteringProfileCount?: number;

  /**
   * <p>The total number of objects in domain.</p>
   */
  ObjectCount?: number;

  /**
   * <p>The total size, in bytes, of all objects in the domain.</p>
   */
  TotalSize?: number;
}

export namespace DomainStats {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainStats): any => ({
    ...obj,
  });
}

export interface GetDomainResponse {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   */
  DefaultExpirationDays?: number;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>Usage-specific statistics about the domain.</p>
   */
  Stats?: DomainStats;

  /**
   * <p>The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   * After that batch process completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results.  </p>
   */
  Matching?: MatchingResponse;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainResponse): any => ({
    ...obj,
  });
}

export interface GetIntegrationRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   */
  Uri: string | undefined;
}

export namespace GetIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationRequest): any => ({
    ...obj,
  });
}

export interface GetIntegrationResponse {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIntegrationResponse): any => ({
    ...obj,
  });
}

export interface GetMatchesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace GetMatchesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMatchesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Match group object.</p>
 */
export interface MatchItem {
  /**
   * <p>The unique identifiers for this group of profiles that match.</p>
   */
  MatchId?: string;

  /**
   * <p>A list of identifiers for profiles that match.</p>
   */
  ProfileIds?: string[];
}

export namespace MatchItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchItem): any => ({
    ...obj,
  });
}

export interface GetMatchesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The timestamp this version of Match Result generated.</p>
   */
  MatchGenerationDate?: Date;

  /**
   * <p>The number of potential matches found.</p>
   */
  PotentialMatches?: number;

  /**
   * <p>The list of matched profiles for this instance.</p>
   */
  Matches?: MatchItem[];
}

export namespace GetMatchesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMatchesResponse): any => ({
    ...obj,
  });
}

export interface GetProfileObjectTypeRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;
}

export namespace GetProfileObjectTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProfileObjectTypeRequest): any => ({
    ...obj,
  });
}

export enum FieldContentType {
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  NAME = "NAME",
  NUMBER = "NUMBER",
  PHONE_NUMBER = "PHONE_NUMBER",
  STRING = "STRING",
}

/**
 * <p>Represents a field in a ProfileObjectType.</p>
 */
export interface ObjectTypeField {
  /**
   * <p>A field of a ProfileObject. For example: _source.FirstName, where “_source” is a
   *          ProfileObjectType of a Zendesk user and “FirstName” is a field in that ObjectType.</p>
   */
  Source?: string;

  /**
   * <p>The location of the data in the standard ProfileObject model. For example:
   *          _profile.Address.PostalCode.</p>
   */
  Target?: string;

  /**
   * <p>The content type of the field. Used for determining equality when searching.</p>
   */
  ContentType?: FieldContentType | string;
}

export namespace ObjectTypeField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectTypeField): any => ({
    ...obj,
  });
}

export enum StandardIdentifier {
  ASSET = "ASSET",
  CASE = "CASE",
  LOOKUP_ONLY = "LOOKUP_ONLY",
  NEW_ONLY = "NEW_ONLY",
  PROFILE = "PROFILE",
  SECONDARY = "SECONDARY",
  UNIQUE = "UNIQUE",
}

/**
 * <p>An object that defines the Key element of a ProfileObject. A Key is a special element
 *          that can be used to search for a customer profile.</p>
 */
export interface ObjectTypeKey {
  /**
   * <p>The types of keys that a ProfileObject can have. Each ProfileObject can have only 1
   *          UNIQUE key but multiple PROFILE keys. PROFILE, ASSET or CASE means that this key can be used to tie an
   *          object to a PROFILE, ASSET or CASE respectively. UNIQUE means that it can be used to uniquely identify an object.
   *          If a key a is marked as SECONDARY, it will be used to search for profiles after all other
   *          PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is
   *          not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the
   *          profile does not already exist before the object is ingested, otherwise it is only used for
   *          matching objects to profiles.</p>
   */
  StandardIdentifiers?: (StandardIdentifier | string)[];

  /**
   * <p>The reference for the key name of the fields map.</p>
   */
  FieldNames?: string[];
}

export namespace ObjectTypeKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectTypeKey): any => ({
    ...obj,
  });
}

export interface GetProfileObjectTypeResponse {
  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The description of the profile object type.</p>
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The number of days until the data in the object expires.</p>
   */
  ExpirationDays?: number;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   */
  EncryptionKey?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>A map of the name and ObjectType field.</p>
   */
  Fields?: { [key: string]: ObjectTypeField };

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   */
  Keys?: { [key: string]: ObjectTypeKey[] };

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetProfileObjectTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProfileObjectTypeResponse): any => ({
    ...obj,
  });
}

export interface GetProfileObjectTypeTemplateRequest {
  /**
   * <p>A unique identifier for the object template.</p>
   */
  TemplateId: string | undefined;
}

export namespace GetProfileObjectTypeTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProfileObjectTypeTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetProfileObjectTypeTemplateResponse {
  /**
   * <p>A unique identifier for the object template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The name of the source of the object template.</p>
   */
  SourceName?: string;

  /**
   * <p>The source of the object template.</p>
   */
  SourceObject?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>A map of the name and ObjectType field.</p>
   */
  Fields?: { [key: string]: ObjectTypeField };

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   */
  Keys?: { [key: string]: ObjectTypeKey[] };
}

export namespace GetProfileObjectTypeTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProfileObjectTypeTemplateResponse): any => ({
    ...obj,
  });
}

export interface ListAccountIntegrationsRequest {
  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The pagination token from the previous ListAccountIntegrations API call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  MaxResults?: number;
}

export namespace ListAccountIntegrationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountIntegrationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An integration in list of integrations.</p>
 */
export interface ListIntegrationItem {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListIntegrationItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIntegrationItem): any => ({
    ...obj,
  });
}

export interface ListAccountIntegrationsResponse {
  /**
   * <p>The list of ListAccountIntegration instances.</p>
   */
  Items?: ListIntegrationItem[];

  /**
   * <p>The pagination token from the previous ListAccountIntegrations API call.</p>
   */
  NextToken?: string;
}

export namespace ListAccountIntegrationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountIntegrationsResponse): any => ({
    ...obj,
  });
}

export interface ListDomainsRequest {
  /**
   * <p>The pagination token from the previous ListDomain API call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  MaxResults?: number;
}

export namespace ListDomainsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object in a list that represents a domain.</p>
 */
export interface ListDomainItem {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListDomainItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainItem): any => ({
    ...obj,
  });
}

export interface ListDomainsResponse {
  /**
   * <p>The list of ListDomains instances.</p>
   */
  Items?: ListDomainItem[];

  /**
   * <p>The pagination token from the previous ListDomains API call.</p>
   */
  NextToken?: string;
}

export namespace ListDomainsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj,
  });
}

export interface ListIntegrationsRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The pagination token from the previous ListIntegrations API call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  MaxResults?: number;
}

export namespace ListIntegrationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIntegrationsRequest): any => ({
    ...obj,
  });
}

export interface ListIntegrationsResponse {
  /**
   * <p>The list of ListIntegrations instances.</p>
   */
  Items?: ListIntegrationItem[];

  /**
   * <p>The pagination token from the previous ListIntegrations API call.</p>
   */
  NextToken?: string;
}

export namespace ListIntegrationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIntegrationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The filter applied to ListProfileObjects response to include profile objects with the specified index values.
 *          This filter is only supported for ObjectTypeName _asset and _case.</p>
 */
export interface ObjectFilter {
  /**
   * <p>A searchable identifier of a standard profile object. The predefined keys you can use to search for _asset include: _assetId, _assetName, _serialNumber.
   *          The predefined keys you can use to search for _case include: _caseId.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   */
  Values: string[] | undefined;
}

export namespace ObjectFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectFilter): any => ({
    ...obj,
  });
}

export interface ListProfileObjectsRequest {
  /**
   * <p>The pagination token from the previous call to ListProfileObjects.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>Applies a filter to the response to include profile objects with the specified index values.
   *          This filter is only supported for ObjectTypeName _asset and _case.</p>
   */
  ObjectFilter?: ObjectFilter;
}

export namespace ListProfileObjectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A ProfileObject in a list of ProfileObjects.</p>
 */
export interface ListProfileObjectsItem {
  /**
   * <p>Specifies the kind of object being added to a profile, such as
   *          "Salesforce-Account."</p>
   */
  ObjectTypeName?: string;

  /**
   * <p>The unique identifier of the ProfileObject generated by the service.</p>
   */
  ProfileObjectUniqueKey?: string;

  /**
   * <p>A JSON representation of a ProfileObject that belongs to a profile.</p>
   */
  Object?: string;
}

export namespace ListProfileObjectsItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectsItem): any => ({
    ...obj,
  });
}

export interface ListProfileObjectsResponse {
  /**
   * <p>The list of ListProfileObject instances.</p>
   */
  Items?: ListProfileObjectsItem[];

  /**
   * <p>The pagination token from the previous call to ListProfileObjects.</p>
   */
  NextToken?: string;
}

export namespace ListProfileObjectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectsResponse): any => ({
    ...obj,
  });
}

export interface ListProfileObjectTypesRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  MaxResults?: number;
}

export namespace ListProfileObjectTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A ProfileObjectType instance.</p>
 */
export interface ListProfileObjectTypeItem {
  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   */
  Description: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListProfileObjectTypeItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectTypeItem): any => ({
    ...obj,
  });
}

export interface ListProfileObjectTypesResponse {
  /**
   * <p>The list of ListProfileObjectTypes instances.</p>
   */
  Items?: ListProfileObjectTypeItem[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

export namespace ListProfileObjectTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectTypesResponse): any => ({
    ...obj,
  });
}

export interface ListProfileObjectTypeTemplatesRequest {
  /**
   * <p>The pagination token from the previous ListObjectTypeTemplates API call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  MaxResults?: number;
}

export namespace ListProfileObjectTypeTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectTypeTemplatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.</p>
 */
export interface ListProfileObjectTypeTemplateItem {
  /**
   * <p>A unique identifier for the object template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The name of the source of the object template.</p>
   */
  SourceName?: string;

  /**
   * <p>The source of the object template.</p>
   */
  SourceObject?: string;
}

export namespace ListProfileObjectTypeTemplateItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectTypeTemplateItem): any => ({
    ...obj,
  });
}

export interface ListProfileObjectTypeTemplatesResponse {
  /**
   * <p>The list of ListProfileObjectType template instances.</p>
   */
  Items?: ListProfileObjectTypeTemplateItem[];

  /**
   * <p>The pagination token from the previous ListObjectTypeTemplates API call. </p>
   */
  NextToken?: string;
}

export namespace ListProfileObjectTypeTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProfileObjectTypeTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource for which you want to view tags.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A duplicate customer profile that is to be merged into a main profile. </p>
 */
export interface FieldSourceProfileIds {
  /**
   * <p>A unique identifier for the account number field to be merged. </p>
   */
  AccountNumber?: string;

  /**
   * <p>A unique identifier for the additional information field to be merged.</p>
   */
  AdditionalInformation?: string;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   */
  PartyType?: string;

  /**
   * <p>A unique identifier for the business name field to be merged.</p>
   */
  BusinessName?: string;

  /**
   * <p>A unique identifier for the first name field to be merged.</p>
   */
  FirstName?: string;

  /**
   * <p>A unique identifier for the middle name field to be merged.</p>
   */
  MiddleName?: string;

  /**
   * <p>A unique identifier for the last name field to be merged.</p>
   */
  LastName?: string;

  /**
   * <p>A unique identifier for the birthdate field to be merged.</p>
   */
  BirthDate?: string;

  /**
   * <p>A unique identifier for the gender field to be merged.</p>
   */
  Gender?: string;

  /**
   * <p>A unique identifier for the phone number field to be merged.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>A unique identifier for the mobile phone number field to be merged.</p>
   */
  MobilePhoneNumber?: string;

  /**
   * <p>A unique identifier for the home phone number field to be merged.</p>
   */
  HomePhoneNumber?: string;

  /**
   * <p>A unique identifier for the business phone number field to be merged.</p>
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>A unique identifier for the email address field to be merged.</p>
   */
  EmailAddress?: string;

  /**
   * <p>A unique identifier for the personal email address field to be merged.</p>
   */
  PersonalEmailAddress?: string;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A unique identifier for the party type field to be merged.</p>
   */
  Address?: string;

  /**
   * <p>A unique identifier for the shipping address field to be merged.</p>
   */
  ShippingAddress?: string;

  /**
   * <p>A unique identifier for the mailing address field to be merged.</p>
   */
  MailingAddress?: string;

  /**
   * <p>A unique identifier for the billing type field to be merged.</p>
   */
  BillingAddress?: string;

  /**
   * <p>A unique identifier for the attributes field to be merged.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace FieldSourceProfileIds {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FieldSourceProfileIds): any => ({
    ...obj,
  });
}

export interface MergeProfilesRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The identifier of the profile to be taken.</p>
   */
  MainProfileId: string | undefined;

  /**
   * <p>The identifier of the profile to be merged into MainProfileId.</p>
   */
  ProfileIdsToBeMerged: string[] | undefined;

  /**
   * <p>The identifiers of the fields in the profile that has the information you want to apply
   *          to the merge. For example, say you want to merge EmailAddress from Profile1 into
   *          MainProfile. This would be the identifier of the EmailAddress field in Profile1. </p>
   */
  FieldSourceProfileIds?: FieldSourceProfileIds;
}

export namespace MergeProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeProfilesRequest): any => ({
    ...obj,
  });
}

export interface MergeProfilesResponse {
  /**
   * <p>A message that indicates the merge request is complete.</p>
   */
  Message?: string;
}

export namespace MergeProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeProfilesResponse): any => ({
    ...obj,
  });
}

export enum SourceConnectorType {
  MARKETO = "Marketo",
  S3 = "S3",
  SALESFORCE = "Salesforce",
  SERVICENOW = "Servicenow",
  ZENDESK = "Zendesk",
}

/**
 * <p>Specifies the configuration used when importing incremental records from the
 *          source.</p>
 */
export interface IncrementalPullConfig {
  /**
   * <p>A field that specifies the date time or timestamp field as the criteria to use when
   *          importing incremental records from the source.</p>
   */
  DatetimeTypeFieldName?: string;
}

export namespace IncrementalPullConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncrementalPullConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The properties that are applied when Marketo is being used as a source.</p>
 */
export interface MarketoSourceProperties {
  /**
   * <p>The object specified in the Marketo flow source.</p>
   */
  Object: string | undefined;
}

export namespace MarketoSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MarketoSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The properties that are applied when Amazon S3 is being used as the flow source.</p>
 */
export interface S3SourceProperties {
  /**
   * <p>The Amazon S3 bucket name where the source files are stored.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>The object key for the Amazon S3 bucket in which the source files are stored.</p>
   */
  BucketPrefix?: string;
}

export namespace S3SourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3SourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The properties that are applied when Salesforce is being used as a source.</p>
 */
export interface SalesforceSourceProperties {
  /**
   * <p>The object specified in the Salesforce flow source.</p>
   */
  Object: string | undefined;

  /**
   * <p>The flag that enables dynamic fetching of new (recently added) fields in the Salesforce
   *          objects while running a flow.</p>
   */
  EnableDynamicFieldUpdate?: boolean;

  /**
   * <p>Indicates whether Amazon AppFlow includes deleted files in the flow run.</p>
   */
  IncludeDeletedRecords?: boolean;
}

export namespace SalesforceSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SalesforceSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The properties that are applied when ServiceNow is being used as a source.</p>
 */
export interface ServiceNowSourceProperties {
  /**
   * <p>The object specified in the ServiceNow flow source.</p>
   */
  Object: string | undefined;
}

export namespace ServiceNowSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceNowSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The properties that are applied when using Zendesk as a flow source.</p>
 */
export interface ZendeskSourceProperties {
  /**
   * <p>The object specified in the Zendesk flow source.</p>
   */
  Object: string | undefined;
}

export namespace ZendeskSourceProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZendeskSourceProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the information that is required to query a particular Amazon AppFlow connector.
 *          Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.</p>
 */
export interface SourceConnectorProperties {
  /**
   * <p>The properties that are applied when Marketo is being used as a source.</p>
   */
  Marketo?: MarketoSourceProperties;

  /**
   * <p>The properties that are applied when Amazon S3 is being used as the flow source.</p>
   */
  S3?: S3SourceProperties;

  /**
   * <p>The properties that are applied when Salesforce is being used as a source.</p>
   */
  Salesforce?: SalesforceSourceProperties;

  /**
   * <p>The properties that are applied when ServiceNow is being used as a source.</p>
   */
  ServiceNow?: ServiceNowSourceProperties;

  /**
   * <p>The properties that are applied when using Zendesk as a flow source.</p>
   */
  Zendesk?: ZendeskSourceProperties;
}

export namespace SourceConnectorProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceConnectorProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the configuration of the source connector used in the
 *          flow.</p>
 */
export interface SourceFlowConfig {
  /**
   * <p>The name of the AppFlow connector profile. This name must be unique for each connector
   *          profile in the AWS account.</p>
   */
  ConnectorProfileName?: string;

  /**
   * <p>The type of connector, such as Salesforce, Marketo, and so on.</p>
   */
  ConnectorType: SourceConnectorType | string | undefined;

  /**
   * <p>Defines the configuration for a scheduled incremental data pull. If a valid
   *          configuration is provided, the fields specified in the configuration are used when querying
   *          for the incremental data pull.</p>
   */
  IncrementalPullConfig?: IncrementalPullConfig;

  /**
   * <p>Specifies the information that is required to query a particular source
   *          connector.</p>
   */
  SourceConnectorProperties: SourceConnectorProperties | undefined;
}

export namespace SourceFlowConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceFlowConfig): any => ({
    ...obj,
  });
}

export enum OperatorPropertiesKeys {
  CONCAT_FORMAT = "CONCAT_FORMAT",
  DATA_TYPE = "DATA_TYPE",
  DESTINATION_DATA_TYPE = "DESTINATION_DATA_TYPE",
  LOWER_BOUND = "LOWER_BOUND",
  MASK_LENGTH = "MASK_LENGTH",
  MASK_VALUE = "MASK_VALUE",
  MATH_OPERATION_FIELDS_ORDER = "MATH_OPERATION_FIELDS_ORDER",
  SOURCE_DATA_TYPE = "SOURCE_DATA_TYPE",
  SUBFIELD_CATEGORY_MAP = "SUBFIELD_CATEGORY_MAP",
  TRUNCATE_LENGTH = "TRUNCATE_LENGTH",
  UPPER_BOUND = "UPPER_BOUND",
  VALIDATION_ACTION = "VALIDATION_ACTION",
  VALUE = "VALUE",
  VALUES = "VALUES",
}

export enum TaskType {
  ARITHMETIC = "Arithmetic",
  FILTER = "Filter",
  MAP = "Map",
  MASK = "Mask",
  MERGE = "Merge",
  TRUNCATE = "Truncate",
  VALIDATE = "Validate",
}

/**
 * <p>A class for modeling different type of tasks. Task implementation varies based on the
 *          TaskType.</p>
 */
export interface Task {
  /**
   * <p>The operation to be performed on the provided source fields.</p>
   */
  ConnectorOperator?: ConnectorOperator;

  /**
   * <p>A field in a destination connector, or a field value against which Amazon AppFlow validates a
   *          source field.</p>
   */
  DestinationField?: string;

  /**
   * <p>The source fields to which a particular task is applied.</p>
   */
  SourceFields: string[] | undefined;

  /**
   * <p>A map used to store task-related information. The service looks for particular
   *          information based on the TaskType.</p>
   */
  TaskProperties?: { [key: string]: string };

  /**
   * <p>Specifies the particular task implementation that Amazon AppFlow performs.</p>
   */
  TaskType: TaskType | string | undefined;
}

export namespace Task {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Task): any => ({
    ...obj,
  });
}

export enum DataPullMode {
  COMPLETE = "Complete",
  INCREMENTAL = "Incremental",
}

/**
 * <p>Specifies the configuration details of a scheduled-trigger flow that you define.
 *          Currently, these settings only apply to the scheduled-trigger type.</p>
 */
export interface ScheduledTriggerProperties {
  /**
   * <p>The scheduling expression that determines the rate at which the schedule will run, for
   *          example rate (5 minutes).</p>
   */
  ScheduleExpression: string | undefined;

  /**
   * <p>Specifies whether a scheduled flow has an incremental data transfer or a complete data
   *          transfer for each flow run.</p>
   */
  DataPullMode?: DataPullMode | string;

  /**
   * <p>Specifies the scheduled start time for a scheduled-trigger flow.</p>
   */
  ScheduleStartTime?: Date;

  /**
   * <p>Specifies the scheduled end time for a scheduled-trigger flow.</p>
   */
  ScheduleEndTime?: Date;

  /**
   * <p>Specifies the time zone used when referring to the date and time of a
   *          scheduled-triggered flow, such as America/New_York.</p>
   */
  Timezone?: string;

  /**
   * <p>Specifies the optional offset that is added to the time interval for a
   *          schedule-triggered flow.</p>
   */
  ScheduleOffset?: number;

  /**
   * <p>Specifies the date range for the records to import from the connector in the first flow
   *          run.</p>
   */
  FirstExecutionFrom?: Date;
}

export namespace ScheduledTriggerProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledTriggerProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration details that control the trigger for a flow. Currently,
 *          these settings only apply to the Scheduled trigger type.</p>
 */
export interface TriggerProperties {
  /**
   * <p>Specifies the configuration details of a schedule-triggered flow that you define.</p>
   */
  Scheduled?: ScheduledTriggerProperties;
}

export namespace TriggerProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerProperties): any => ({
    ...obj,
  });
}

export enum TriggerType {
  EVENT = "Event",
  ONDEMAND = "OnDemand",
  SCHEDULED = "Scheduled",
}

/**
 * <p>The trigger settings that determine how and when Amazon AppFlow runs the specified
 *          flow.</p>
 */
export interface TriggerConfig {
  /**
   * <p>Specifies the type of flow trigger. It can be OnDemand, Scheduled, or Event.</p>
   */
  TriggerType: TriggerType | string | undefined;

  /**
   * <p>Specifies the configuration details of a schedule-triggered flow that you define.
   *          Currently, these settings only apply to the Scheduled trigger type.</p>
   */
  TriggerProperties?: TriggerProperties;
}

export namespace TriggerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The configurations that control how Customer Profiles retrieves data from the source,
 *          Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of
 *          customers.</p>
 */
export interface FlowDefinition {
  /**
   * <p>A description of the flow you want to create.</p>
   */
  Description?: string;

  /**
   * <p>The specified name of the flow. Use underscores (_) or hyphens (-) only. Spaces are not
   *          allowed.</p>
   */
  FlowName: string | undefined;

  /**
   * <p>The Amazon Resource Name of the AWS Key Management Service (KMS) key you provide for encryption.</p>
   */
  KmsArn: string | undefined;

  /**
   * <p>The configuration that controls how Customer Profiles retrieves data from the
   *          source.</p>
   */
  SourceFlowConfig: SourceFlowConfig | undefined;

  /**
   * <p>A list of tasks that Customer Profiles performs while transferring the data in the flow
   *          run.</p>
   */
  Tasks: Task[] | undefined;

  /**
   * <p>The trigger settings that determine how and when the flow runs.</p>
   */
  TriggerConfig: TriggerConfig | undefined;
}

export namespace FlowDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FlowDefinition): any => ({
    ...obj,
  });
}

export interface PutIntegrationRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   */
  Uri?: string;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The configuration that controls how Customer Profiles retrieves data from the
   *          source.</p>
   */
  FlowDefinition?: FlowDefinition;
}

export namespace PutIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutIntegrationRequest): any => ({
    ...obj,
  });
}

export interface PutIntegrationResponse {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace PutIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutIntegrationResponse): any => ({
    ...obj,
  });
}

export interface PutProfileObjectRequest {
  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>A string that is serialized from a JSON object.</p>
   */
  Object: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace PutProfileObjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProfileObjectRequest): any => ({
    ...obj,
  });
}

export interface PutProfileObjectResponse {
  /**
   * <p>The unique identifier of the profile object generated by the service.</p>
   */
  ProfileObjectUniqueKey?: string;
}

export namespace PutProfileObjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProfileObjectResponse): any => ({
    ...obj,
  });
}

export interface PutProfileObjectTypeRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The number of days until the data in the object expires.</p>
   */
  ExpirationDays?: number;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   */
  EncryptionKey?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>A map of the name and ObjectType field.</p>
   */
  Fields?: { [key: string]: ObjectTypeField };

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   */
  Keys?: { [key: string]: ObjectTypeKey[] };

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace PutProfileObjectTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProfileObjectTypeRequest): any => ({
    ...obj,
  });
}

export interface PutProfileObjectTypeResponse {
  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The number of days until the data in the object expires.</p>
   */
  ExpirationDays?: number;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   */
  EncryptionKey?: string;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   */
  AllowProfileCreation?: boolean;

  /**
   * <p>A map of the name and ObjectType field.</p>
   */
  Fields?: { [key: string]: ObjectTypeField };

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   */
  Keys?: { [key: string]: ObjectTypeKey[] };

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace PutProfileObjectTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProfileObjectTypeResponse): any => ({
    ...obj,
  });
}

export interface SearchProfilesRequest {
  /**
   * <p>The pagination token from the previous SearchProfiles API call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId,
   *          _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId,
   *          _salesforceContactId, _zendeskUserId, _zendeskExternalId, _serviceNowSystemId.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   */
  Values: string[] | undefined;
}

export namespace SearchProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The standard profile of a customer.</p>
 */
export interface Profile {
  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId?: string;

  /**
   * <p>A unique account number that you have given to the customer.</p>
   */
  AccountNumber?: string;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   */
  AdditionalInformation?: string;

  /**
   * <p>The type of profile used to describe the customer.</p>
   */
  PartyType?: PartyType | string;

  /**
   * <p>The name of the customer’s business.</p>
   */
  BusinessName?: string;

  /**
   * <p>The customer’s first name.</p>
   */
  FirstName?: string;

  /**
   * <p>The customer’s middle name.</p>
   */
  MiddleName?: string;

  /**
   * <p>The customer’s last name.</p>
   */
  LastName?: string;

  /**
   * <p>The customer’s birth date. </p>
   */
  BirthDate?: string;

  /**
   * <p>The gender with which the customer identifies. </p>
   */
  Gender?: Gender | string;

  /**
   * <p>The customer's phone number, which has not been specified as a mobile, home, or business
   *          number.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The customer’s mobile phone number.</p>
   */
  MobilePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   */
  HomePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   */
  EmailAddress?: string;

  /**
   * <p>The customer’s personal email address.</p>
   */
  PersonalEmailAddress?: string;

  /**
   * <p>The customer’s business email address.</p>
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   */
  Address?: Address;

  /**
   * <p>The customer’s shipping address.</p>
   */
  ShippingAddress?: Address;

  /**
   * <p>The customer’s mailing address.</p>
   */
  MailingAddress?: Address;

  /**
   * <p>The customer’s billing address.</p>
   */
  BillingAddress?: Address;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace Profile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Profile): any => ({
    ...obj,
  });
}

export interface SearchProfilesResponse {
  /**
   * <p>The list of SearchProfiles instances.</p>
   */
  Items?: Profile[];

  /**
   * <p>The pagination token from the previous SearchProfiles API call.</p>
   */
  NextToken?: string;
}

export namespace SearchProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchProfilesResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource that you're adding tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource from which you are removing tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   */
  DefaultExpirationDays?: number;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage. If specified as an empty string, it will clear any
   *          existing value.</p>
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications. If specified as an empty string, it will
   *          clear any existing value. You must set up a policy on the DeadLetterQueue for the
   *          SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the
   *          DeadLetterQueue.</p>
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   * After that batch process completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results.  </p>
   */
  Matching?: MatchingRequest;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainResponse {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   */
  DefaultExpirationDays?: number;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   */
  DefaultEncryptionKey?: string;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   * After that batch process completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results.  </p>
   */
  Matching?: MatchingResponse;

  /**
   * <p>The timestamp of when the domain was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates associated with the address properties of a customer profile.</p>
 */
export interface UpdateAddress {
  /**
   * <p>The first line of a customer address.</p>
   */
  Address1?: string;

  /**
   * <p>The second line of a customer address.</p>
   */
  Address2?: string;

  /**
   * <p>The third line of a customer address.</p>
   */
  Address3?: string;

  /**
   * <p>The fourth line of a customer address.</p>
   */
  Address4?: string;

  /**
   * <p>The city in which a customer lives.</p>
   */
  City?: string;

  /**
   * <p>The county in which a customer lives.</p>
   */
  County?: string;

  /**
   * <p>The state in which a customer lives.</p>
   */
  State?: string;

  /**
   * <p>The province in which a customer lives.</p>
   */
  Province?: string;

  /**
   * <p>The country in which a customer lives.</p>
   */
  Country?: string;

  /**
   * <p>The postal code of a customer address.</p>
   */
  PostalCode?: string;
}

export namespace UpdateAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAddress): any => ({
    ...obj,
  });
}

export interface UpdateProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   */
  AdditionalInformation?: string;

  /**
   * <p>A unique account number that you have given to the customer.</p>
   */
  AccountNumber?: string;

  /**
   * <p>The type of profile used to describe the customer.</p>
   */
  PartyType?: PartyType | string;

  /**
   * <p>The name of the customer’s business.</p>
   */
  BusinessName?: string;

  /**
   * <p>The customer’s first name.</p>
   */
  FirstName?: string;

  /**
   * <p>The customer’s middle name.</p>
   */
  MiddleName?: string;

  /**
   * <p>The customer’s last name.</p>
   */
  LastName?: string;

  /**
   * <p>The customer’s birth date. </p>
   */
  BirthDate?: string;

  /**
   * <p>The gender with which the customer identifies. </p>
   */
  Gender?: Gender | string;

  /**
   * <p>The customer’s phone number, which has not been specified as a mobile, home, or business
   *          number. </p>
   */
  PhoneNumber?: string;

  /**
   * <p>The customer’s mobile phone number.</p>
   */
  MobilePhoneNumber?: string;

  /**
   * <p>The customer’s home phone number.</p>
   */
  HomePhoneNumber?: string;

  /**
   * <p>The customer’s business phone number.</p>
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   */
  EmailAddress?: string;

  /**
   * <p>The customer’s personal email address.</p>
   */
  PersonalEmailAddress?: string;

  /**
   * <p>The customer’s business email address.</p>
   */
  BusinessEmailAddress?: string;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   */
  Address?: UpdateAddress;

  /**
   * <p>The customer’s shipping address.</p>
   */
  ShippingAddress?: UpdateAddress;

  /**
   * <p>The customer’s mailing address.</p>
   */
  MailingAddress?: UpdateAddress;

  /**
   * <p>The customer’s billing address.</p>
   */
  BillingAddress?: UpdateAddress;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace UpdateProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateProfileResponse {
  /**
   * <p>The unique identifier of a customer profile.</p>
   */
  ProfileId: string | undefined;
}

export namespace UpdateProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProfileResponse): any => ({
    ...obj,
  });
}
