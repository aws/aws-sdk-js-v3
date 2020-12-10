import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
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
  export const filterSensitiveLog = (obj: Address): any => ({
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
   *          DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to
   *          send messages to the DeadLetterQueue.</p>
   */
  DeadLetterQueueUrl?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDomainRequest {
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
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
   * <p>Any additional information relevant to the customer's profile.</p>
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
   * <p>The customer’s birth date.</p>
   */
  BirthDate?: string;

  /**
   * <p>The gender with which the customer identifies.</p>
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
   * <p>The customer’s business phone number.</p>
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer's email address, which has not been specified as a personal or business
   *          address.</p>
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
  Uri?: string;
}

export namespace DeleteIntegrationRequest {
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
  export const filterSensitiveLog = (obj: DeleteProfileObjectTypeResponse): any => ({
    ...obj,
  });
}

export interface GetDomainRequest {
  /**
   * <p>A unique name for the domain.</p>
   */
  DomainName: string | undefined;
}

export namespace GetDomainRequest {
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
  Uri?: string;
}

export namespace GetIntegrationRequest {
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
  export const filterSensitiveLog = (obj: GetIntegrationResponse): any => ({
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
  export const filterSensitiveLog = (obj: ObjectTypeField): any => ({
    ...obj,
  });
}

export enum StandardIdentifier {
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
   *          UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an
   *          object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a
   *          key a is marked as SECONDARY, it will be used to search for profiles after all other
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
  export const filterSensitiveLog = (obj: ListIntegrationsResponse): any => ({
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
}

export namespace ListProfileObjectsRequest {
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
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
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace PutIntegrationRequest {
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
   * <p>A searchable identifier of a customer profile. The predefined keys you can use to search
   *          include: _account, _profileId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId,
   *          _salesforceAccountId, _salesforceContactId, _zendeskUserId, _zendeskExternalId,
   *          _serviceNowSystemId.</p>
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   */
  Values: string[] | undefined;
}

export namespace SearchProfilesRequest {
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
   * <p>Any additional information relevant to the customer's profile.</p>
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
   * <p>The customer’s birth date.</p>
   */
  BirthDate?: string;

  /**
   * <p>The gender with which the customer identifies.</p>
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
   * <p>The customer's email address, which has not been specified as a personal or business
   *          address.</p>
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDomainRequest {
  /**
   * <p>The unique name for the domain.</p>
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace UpdateDomainRequest {
  export const filterSensitiveLog = (obj: UpdateDomainRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainResponse {
  /**
   * <p>The unique name for the domain.</p>
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
   * <p>Any additional information relevant to the customer's profile.</p>
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
   * <p>The customer’s birth date.</p>
   */
  BirthDate?: string;

  /**
   * <p>The gender with which the customer identifies.</p>
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
   * <p>The customer’s business phone number.</p>
   */
  BusinessPhoneNumber?: string;

  /**
   * <p>The customer's email address, which has not been specified as a personal or business
   *          address.</p>
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
  export const filterSensitiveLog = (obj: UpdateProfileResponse): any => ({
    ...obj,
  });
}
