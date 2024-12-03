// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SocialMessagingServiceException as __BaseException } from "./SocialMessagingServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedByMetaException extends __BaseException {
  readonly name: "AccessDeniedByMetaException" = "AccessDeniedByMetaException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedByMetaException, __BaseException>) {
    super({
      name: "AccessDeniedByMetaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedByMetaException.prototype);
  }
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The tag for a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The registration details for a linked phone number.</p>
 * @public
 */
export interface WabaPhoneNumberSetupFinalization {
  /**
   * <p>The unique identifier of the originating phone number associated with the media. Phone
   *          number identifiers are formatted as
   *          <code>phone-number-id-01234567890123456789012345678901</code>. Use
   *          <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccountPhoneNumber.html">GetLinkedWhatsAppBusinessAccount</a> to find a phone number's
   *          id.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The PIN to use for two-step verification. To reset your PIN follow the directions in
   *          <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/reference/two-step-verification/#updating-pin">Updating PIN</a> in the <i>WhatsApp Business Platform Cloud API
   *                Reference</i>.</p>
   * @public
   */
  twoFactorPin: string | undefined;

  /**
   * <p>The two letter ISO region for the location of where Meta will store data.</p>
   *          <p class="title">
   *             <b>Asia–Pacific (APAC)</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Australia <b>AU</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Indonesia <b>ID</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>India <b>IN</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Japan <b>JP</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Singapore <b>SG</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>South Korea <b>KR</b>
   *                </p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Europe</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Germany <b>DE</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Switzerland <b>CH</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>United Kingdom <b>GB</b>
   *                </p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Latin America (LATAM)</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Brazil <b>BR</b>
   *                </p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Middle East and Africa (MEA)</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Bahrain <b>BH</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>South Africa <b>ZA</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>United Arab Emirates <b>AE</b>
   *                </p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>North America (NORAM)</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Canada <b>CA</b>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  dataLocalizationRegion?: string | undefined;

  /**
   * <p>An array of key and value pair tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Contains information on the event destination.</p>
 * @public
 */
export interface WhatsAppBusinessAccountEventDestination {
  /**
   * <p>The ARN of the event destination.</p>
   * @public
   */
  eventDestinationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management role
   *          that is able to import phone numbers and write events.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p>The registration details for a linked WhatsApp Business Account.</p>
 * @public
 */
export interface WabaSetupFinalization {
  /**
   * <p>The ID of the linked WhatsApp Business Account, formatted as <code>waba-01234567890123456789012345678901</code>.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The event destinations for the linked WhatsApp Business Account.</p>
   * @public
   */
  eventDestinations?: WhatsAppBusinessAccountEventDestination[] | undefined;

  /**
   * <p>An array of key and value pair tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>The details of linking a WhatsApp Business Account to your Amazon Web Services account.</p>
 * @public
 */
export interface WhatsAppSetupFinalization {
  /**
   * <p>An Amazon Web Services access token generated by <code>WhatsAppSignupCallback</code> and used by <code>WhatsAppSetupFinalization</code>.</p>
   * @public
   */
  associateInProgressToken: string | undefined;

  /**
   * <p>An array of WabaPhoneNumberSetupFinalization objects containing the details of each phone number associated with the WhatsApp Business Account.</p>
   * @public
   */
  phoneNumbers: WabaPhoneNumberSetupFinalization[] | undefined;

  /**
   * <p>Used to add a new phone number to an existing WhatsApp Business Account. This field can't be used when the <code>waba</code> field is present.</p>
   * @public
   */
  phoneNumberParent?: string | undefined;

  /**
   * <p>Used to create a new WhatsApp Business Account and add a phone number. This field can't be used when the <code>phoneNumberParent</code> field is present.</p>
   * @public
   */
  waba?: WabaSetupFinalization | undefined;
}

/**
 * <p>Contains the <code>accessToken</code> provided by Meta during signup.</p>
 * @public
 */
export interface WhatsAppSignupCallback {
  /**
   * <p>The access token for your WhatsApp Business Account. The <code>accessToken</code> value is provided by Meta.</p>
   * @public
   */
  accessToken: string | undefined;
}

/**
 * @public
 */
export interface AssociateWhatsAppBusinessAccountInput {
  /**
   * <p>Contains the callback access token.</p>
   * @public
   */
  signupCallback?: WhatsAppSignupCallback | undefined;

  /**
   * <p>A JSON object that contains the phone numbers and WhatsApp Business Account to link to your account.</p>
   * @public
   */
  setupFinalization?: WhatsAppSetupFinalization | undefined;
}

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  COMPLETE: "COMPLETE",
  INCOMPLETE: "INCOMPLETE",
} as const;

/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * <p>The details of your WhatsApp phone number.</p>
 * @public
 */
export interface WhatsAppPhoneNumberDetail {
  /**
   * <p>The ARN of the WhatsApp phone number.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The phone number for sending WhatsApp.</p>
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * <p>The phone number ID. Phone number identifiers are formatted as <code>phone-number-id-01234567890123456789012345678901</code>. </p>
   * @public
   */
  phoneNumberId: string | undefined;

  /**
   * <p>The phone number ID from Meta.</p>
   * @public
   */
  metaPhoneNumberId: string | undefined;

  /**
   * <p>The display name for this phone number.</p>
   * @public
   */
  displayPhoneNumberName: string | undefined;

  /**
   * <p>The phone number that appears in the recipients display.</p>
   * @public
   */
  displayPhoneNumber: string | undefined;

  /**
   * <p>The quality rating of the phone number.</p>
   * @public
   */
  qualityRating: string | undefined;
}

/**
 * <p>Contains your WhatsApp registration status and details of any unregistered WhatsApp
 *          phone number.</p>
 * @public
 */
export interface LinkedWhatsAppBusinessAccountIdMetaData {
  /**
   * <p>The name of your account.</p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p>The registration status of the linked WhatsApp Business Account.</p>
   * @public
   */
  registrationStatus?: RegistrationStatus | undefined;

  /**
   * <p>The details for unregistered WhatsApp phone numbers.</p>
   * @public
   */
  unregisteredWhatsAppPhoneNumbers?: WhatsAppPhoneNumberDetail[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the WhatsApp Business Account ID.</p>
   * @public
   */
  wabaId?: string | undefined;
}

/**
 * <p>Contains the results of WhatsAppSignupCallback.</p>
 * @public
 */
export interface WhatsAppSignupCallbackResult {
  /**
   * <p>An Amazon Web Services access token generated by <code>WhatsAppSignupCallback</code> and used by <code>WhatsAppSetupFinalization</code>.</p>
   * @public
   */
  associateInProgressToken?: string | undefined;

  /**
   * <p>A LinkedWhatsAppBusinessAccountIdMetaData object map containing the details of any WhatsAppBusiness accounts that have incomplete setup.</p>
   * @public
   */
  linkedAccountsWithIncompleteSetup?: Record<string, LinkedWhatsAppBusinessAccountIdMetaData> | undefined;
}

/**
 * @public
 */
export interface AssociateWhatsAppBusinessAccountOutput {
  /**
   * <p>Contains your WhatsApp registration status.</p>
   * @public
   */
  signupCallbackResult?: WhatsAppSignupCallbackResult | undefined;

  /**
   * <p>The status code for the response.</p>
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * <p>Thrown when performing an action because a dependency would be broken.</p>
 * @public
 */
export class DependencyException extends __BaseException {
  readonly name: "DependencyException" = "DependencyException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyException, __BaseException>) {
    super({
      name: "DependencyException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyException.prototype);
  }
}

/**
 * <p>One or more parameters provided to the action are not valid.</p>
 * @public
 */
export class InvalidParametersException extends __BaseException {
  readonly name: "InvalidParametersException" = "InvalidParametersException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParametersException, __BaseException>) {
    super({
      name: "InvalidParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParametersException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottledRequestException extends __BaseException {
  readonly name: "ThrottledRequestException" = "ThrottledRequestException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledRequestException, __BaseException>) {
    super({
      name: "ThrottledRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledRequestException.prototype);
  }
}

/**
 * <p>The request contains an invalid parameter value. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteWhatsAppMessageMediaInput {
  /**
   * <p>The unique identifier of the media file to delete. Use the <code>mediaId</code> returned from <a href="https://console.aws.amazon.com/social-messaging/latest/APIReference/API_PostWhatsAppMessageMedia.html">PostWhatsAppMessageMedia</a>.</p>
   * @public
   */
  mediaId: string | undefined;

  /**
   * <p>The unique identifier of the originating phone number associated with the media. Phone
   *          number identifiers are formatted as
   *             <code>phone-number-id-01234567890123456789012345678901</code>. Use
   *          <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccountPhoneNumber.html">GetLinkedWhatsAppBusinessAccount</a> to find a phone number's
   *          id.</p>
   * @public
   */
  originationPhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatsAppMessageMediaOutput {
  /**
   * <p>Success indicator for deleting the media file.</p>
   * @public
   */
  success?: boolean | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
  }
}

/**
 * <p>The resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DisassociateWhatsAppBusinessAccountInput {
  /**
   * <p>The unique identifier of your WhatsApp Business Account. WABA identifiers are formatted as
   *          <code>waba-01234567890123456789012345678901</code>. Use
   *          <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_ListLinkedWhatsAppBusinessAccounts.html">ListLinkedWhatsAppBusinessAccounts</a> to list all WABAs and their details.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWhatsAppBusinessAccountOutput {}

/**
 * @public
 */
export interface GetLinkedWhatsAppBusinessAccountInput {
  /**
   * <p>The unique identifier, from Amazon Web Services, of the linked WhatsApp Business
   *          Account. WABA identifiers are formatted as
   *          <code>waba-01234567890123456789012345678901</code>. Use
   *          <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_ListLinkedWhatsAppBusinessAccounts.html">ListLinkedWhatsAppBusinessAccounts</a> to list all WABAs and their details.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>The details of a linked phone number.</p>
 * @public
 */
export interface WhatsAppPhoneNumberSummary {
  /**
   * <p>The full Amazon Resource Name (ARN) for the phone number.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The phone number associated with the Linked WhatsApp Business Account.</p>
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * <p>The phone number ID. Phone number identifiers are formatted as <code>phone-number-id-01234567890123456789012345678901</code>. </p>
   * @public
   */
  phoneNumberId: string | undefined;

  /**
   * <p>The phone number ID from Meta.</p>
   * @public
   */
  metaPhoneNumberId: string | undefined;

  /**
   * <p>The display name for this phone number.</p>
   * @public
   */
  displayPhoneNumberName: string | undefined;

  /**
   * <p>The phone number that appears in the recipients display.</p>
   * @public
   */
  displayPhoneNumber: string | undefined;

  /**
   * <p>The quality rating of the phone number. This is from Meta.</p>
   * @public
   */
  qualityRating: string | undefined;
}

/**
 * <p>The details of your linked WhatsApp Business Account.</p>
 * @public
 */
export interface LinkedWhatsAppBusinessAccount {
  /**
   * <p>The ARN of the linked WhatsApp Business Account.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the linked WhatsApp Business Account, formatted as <code>waba-01234567890123456789012345678901</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The WhatsApp Business Account ID from meta.</p>
   * @public
   */
  wabaId: string | undefined;

  /**
   * <p>The registration status of the linked WhatsApp Business Account.</p>
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * <p>The date the WhatsApp Business Account was linked.</p>
   * @public
   */
  linkDate: Date | undefined;

  /**
   * <p>The name of the linked WhatsApp Business Account.</p>
   * @public
   */
  wabaName: string | undefined;

  /**
   * <p>The event destinations for the linked WhatsApp Business Account.</p>
   * @public
   */
  eventDestinations: WhatsAppBusinessAccountEventDestination[] | undefined;

  /**
   * <p>The phone numbers associated with the Linked WhatsApp Business Account.</p>
   * @public
   */
  phoneNumbers: WhatsAppPhoneNumberSummary[] | undefined;
}

/**
 * @public
 */
export interface GetLinkedWhatsAppBusinessAccountOutput {
  /**
   * <p>The details of the linked WhatsApp Business Account.</p>
   * @public
   */
  account?: LinkedWhatsAppBusinessAccount | undefined;
}

/**
 * @public
 */
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberInput {
  /**
   * <p>The unique identifier of the phone number. Phone number
   *          identifiers are formatted as <code>phone-number-id-01234567890123456789012345678901</code>.
   *          Use <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccountPhoneNumber.html">GetLinkedWhatsAppBusinessAccount</a> to find a phone number's
   *          id.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberOutput {
  /**
   * <p>The details of your WhatsApp phone number.</p>
   * @public
   */
  phoneNumber?: WhatsAppPhoneNumberDetail | undefined;

  /**
   * <p>The WABA identifier linked to the phone number, formatted as
   *          <code>waba-01234567890123456789012345678901</code>.</p>
   * @public
   */
  linkedWhatsAppBusinessAccountId?: string | undefined;
}

/**
 * <p>Contains information for the S3 bucket that contains media files.</p>
 * @public
 */
export interface S3File {
  /**
   * <p>The bucket name.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The object key of the media file.</p>
   * @public
   */
  key: string | undefined;
}

/**
 * <p>You can use presigned URLs to grant time-limited access to objects in Amazon S3 without updating your bucket policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html">Working with presigned URLs</a> in the <i>Amazon S3
 *          User Guide</i>.</p>
 * @public
 */
export interface S3PresignedUrl {
  /**
   * <p>The presign url to the object.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>A map of headers and their values. You must specify the <code>Content-Type</code> header when using <code>PostWhatsAppMessageMedia</code>. For a list of common headers, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonRequestHeaders.html">Common Request Headers</a> in the <i>Amazon S3
   *          API Reference</i>
   *          </p>
   * @public
   */
  headers: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetWhatsAppMessageMediaInput {
  /**
   * <p>The unique identifier for the media file.</p>
   * @public
   */
  mediaId: string | undefined;

  /**
   * <p>The unique identifier of the originating phone number for the WhatsApp message media.
   *          The phone number identifiers are formatted as
   *             <code>phone-number-id-01234567890123456789012345678901</code>. Use
   *          <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccountPhoneNumber.html">GetLinkedWhatsAppBusinessAccount</a> to find a phone number's
   *          id.</p>
   * @public
   */
  originationPhoneNumberId: string | undefined;

  /**
   * <p>Set to <code>True</code> to get only the metadata for the file.</p>
   * @public
   */
  metadataOnly?: boolean | undefined;

  /**
   * <p>The presign url of the media file.</p>
   * @public
   */
  destinationS3PresignedUrl?: S3PresignedUrl | undefined;

  /**
   * <p>The <code>bucketName</code> and <code>key</code> of the S3 media file.</p>
   * @public
   */
  destinationS3File?: S3File | undefined;
}

/**
 * @public
 */
export interface GetWhatsAppMessageMediaOutput {
  /**
   * <p>The MIME type of the media.</p>
   * @public
   */
  mimeType?: string | undefined;

  /**
   * <p>The file size of the media, in KB.</p>
   * @public
   */
  fileSize?: number | undefined;
}

/**
 * @public
 */
export interface ListLinkedWhatsAppBusinessAccountsInput {
  /**
   * <p>The next token for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a linked WhatsApp Business Account.</p>
 * @public
 */
export interface LinkedWhatsAppBusinessAccountSummary {
  /**
   * <p>The ARN of the linked WhatsApp Business Account.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the linked WhatsApp Business Account, formatted as <code>waba-01234567890123456789012345678901</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The WhatsApp Business Account ID provided by Meta.</p>
   * @public
   */
  wabaId: string | undefined;

  /**
   * <p>The registration status of the linked WhatsApp Business Account.</p>
   * @public
   */
  registrationStatus: RegistrationStatus | undefined;

  /**
   * <p>The date the WhatsApp Business Account was linked.</p>
   * @public
   */
  linkDate: Date | undefined;

  /**
   * <p>The name of the linked WhatsApp Business Account.</p>
   * @public
   */
  wabaName: string | undefined;

  /**
   * <p>The event destinations for the linked WhatsApp Business Account.</p>
   * @public
   */
  eventDestinations: WhatsAppBusinessAccountEventDestination[] | undefined;
}

/**
 * @public
 */
export interface ListLinkedWhatsAppBusinessAccountsOutput {
  /**
   * <p>A list of WhatsApp Business Accounts linked to your Amazon Web Services account.</p>
   * @public
   */
  linkedAccounts?: LinkedWhatsAppBusinessAccountSummary[] | undefined;

  /**
   * <p>The next token for pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutWhatsAppBusinessAccountEventDestinationsInput {
  /**
   * <p>The unique identifier of your WhatsApp Business Account. WABA identifiers are formatted as
   *          <code>waba-01234567890123456789012345678901</code>. Use
   *          <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_ListLinkedWhatsAppBusinessAccounts.html">ListLinkedWhatsAppBusinessAccounts</a> to list all WABAs and their details.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An array of <code>WhatsAppBusinessAccountEventDestination</code> event destinations.</p>
   * @public
   */
  eventDestinations: WhatsAppBusinessAccountEventDestination[] | undefined;
}

/**
 * @public
 */
export interface PutWhatsAppBusinessAccountEventDestinationsOutput {}

/**
 * @public
 */
export interface PostWhatsAppMessageMediaInput {
  /**
   * <p>The ID of the phone number to associate with the WhatsApp media file. The phone number
   *          identifiers are formatted as <code>phone-number-id-01234567890123456789012345678901</code>.
   *          Use <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccountPhoneNumber.html">GetLinkedWhatsAppBusinessAccount</a>  to find a phone number's
   *          id.</p>
   * @public
   */
  originationPhoneNumberId: string | undefined;

  /**
   * <p>The source presign url of the media file.</p>
   * @public
   */
  sourceS3PresignedUrl?: S3PresignedUrl | undefined;

  /**
   * <p>The source S3 url for the media file.</p>
   * @public
   */
  sourceS3File?: S3File | undefined;
}

/**
 * @public
 */
export interface PostWhatsAppMessageMediaOutput {
  /**
   * <p>The unique identifier of the posted WhatsApp message.</p>
   * @public
   */
  mediaId?: string | undefined;
}

/**
 * @public
 */
export interface SendWhatsAppMessageInput {
  /**
   * <p>The ID of the phone number used to send the WhatsApp message. If you are sending a media
   *          file only the <code>originationPhoneNumberId</code> used to upload the file can be used.
   *          Phone number identifiers are formatted as
   *             <code>phone-number-id-01234567890123456789012345678901</code>. Use
   *          <a href="https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_GetLinkedWhatsAppBusinessAccountPhoneNumber.html">GetLinkedWhatsAppBusinessAccount</a> to find a phone number's
   *          id.</p>
   * @public
   */
  originationPhoneNumberId: string | undefined;

  /**
   * <p>The message to send through WhatsApp. The length is in KB. The message field passes through a WhatsApp
   *          Message object, see <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages">Messages</a> in the <i>WhatsApp Business Platform Cloud API
   *                Reference</i>.</p>
   * @public
   */
  message: Uint8Array | undefined;

  /**
   * <p>The API version for the request formatted as <code>v\{VersionNumber\}</code>. For a list of supported API versions and Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html">
   *                <i>Amazon Web Services End User Messaging Social API</i> Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  metaApiVersion: string | undefined;
}

/**
 * @public
 */
export interface SendWhatsAppMessageOutput {
  /**
   * <p>The unique identifier of the message.</p>
   * @public
   */
  messageId?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to retrieve the tags from.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The status code of the response.</p>
   * @public
   */
  statusCode?: number | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {
  /**
   * <p>The status code of the tag resource operation.</p>
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
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
export interface UntagResourceOutput {
  /**
   * <p>The status code of the untag resource operation.</p>
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * @internal
 */
export const WabaPhoneNumberSetupFinalizationFilterSensitiveLog = (obj: WabaPhoneNumberSetupFinalization): any => ({
  ...obj,
  ...(obj.twoFactorPin && { twoFactorPin: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WhatsAppSetupFinalizationFilterSensitiveLog = (obj: WhatsAppSetupFinalization): any => ({
  ...obj,
  ...(obj.associateInProgressToken && { associateInProgressToken: SENSITIVE_STRING }),
  ...(obj.phoneNumbers && {
    phoneNumbers: obj.phoneNumbers.map((item) => WabaPhoneNumberSetupFinalizationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssociateWhatsAppBusinessAccountInputFilterSensitiveLog = (
  obj: AssociateWhatsAppBusinessAccountInput
): any => ({
  ...obj,
  ...(obj.setupFinalization && {
    setupFinalization: WhatsAppSetupFinalizationFilterSensitiveLog(obj.setupFinalization),
  }),
});

/**
 * @internal
 */
export const WhatsAppSignupCallbackResultFilterSensitiveLog = (obj: WhatsAppSignupCallbackResult): any => ({
  ...obj,
  ...(obj.associateInProgressToken && { associateInProgressToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociateWhatsAppBusinessAccountOutputFilterSensitiveLog = (
  obj: AssociateWhatsAppBusinessAccountOutput
): any => ({
  ...obj,
  ...(obj.signupCallbackResult && {
    signupCallbackResult: WhatsAppSignupCallbackResultFilterSensitiveLog(obj.signupCallbackResult),
  }),
});

/**
 * @internal
 */
export const S3FileFilterSensitiveLog = (obj: S3File): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3PresignedUrlFilterSensitiveLog = (obj: S3PresignedUrl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWhatsAppMessageMediaInputFilterSensitiveLog = (obj: GetWhatsAppMessageMediaInput): any => ({
  ...obj,
  ...(obj.destinationS3PresignedUrl && { destinationS3PresignedUrl: SENSITIVE_STRING }),
  ...(obj.destinationS3File && { destinationS3File: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostWhatsAppMessageMediaInputFilterSensitiveLog = (obj: PostWhatsAppMessageMediaInput): any => ({
  ...obj,
  ...(obj.sourceS3PresignedUrl && { sourceS3PresignedUrl: SENSITIVE_STRING }),
  ...(obj.sourceS3File && { sourceS3File: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendWhatsAppMessageInputFilterSensitiveLog = (obj: SendWhatsAppMessageInput): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
});
