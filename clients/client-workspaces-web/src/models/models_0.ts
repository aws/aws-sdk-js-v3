// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkSpacesWebServiceException as __BaseException } from "./WorkSpacesWebServiceException";

/**
 * <p>Access is denied.</p>
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
 * @public
 */
export interface AssociateBrowserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateBrowserSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * <p>There is a conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>There is an internal server error.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Hypothetical identifier of the resource affected.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>Hypothetical type of the resource affected.</p>
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>There is a throttling error.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The originating service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The originating quota.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Information about a field passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message describing why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>There is a validation error.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reason the request failed validation</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The field that caused the error.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface AssociateDataProtectionSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the data protection settings.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDataProtectionSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the data protection settings resource.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpAccessSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the IP access settings.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpAccessSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the IP access settings resource.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateNetworkSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateNetworkSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateSessionLoggerRequest {
  /**
   * <p>The ARN of the portal to associate to the session logger ARN.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the session logger to associate to the portal ARN.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateSessionLoggerResponse {
  /**
   * <p>The ARN of the portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the session logger.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrustStoreRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrustStoreResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserAccessLoggingSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserSettingsResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  IAM_IDENTITY_CENTER: "IAM_Identity_Center",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * <p>The tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Category = {
  CHAT: "Chat",
  CRIMINAL_ACTIVITY: "CriminalActivity",
  CULTS: "Cults",
  DOWNLOAD_SITES: "DownloadSites",
  GAMBLING: "Gambling",
  GAMES: "Games",
  GENERATIVE_AI: "GenerativeAI",
  HACKING: "Hacking",
  HATE_AND_INTOLERANCE: "HateAndIntolerance",
  ILLEGAL_DRUG: "IllegalDrug",
  ILLEGAL_SOFTWARE: "IllegalSoftware",
  IMAGE_SHARING: "ImageSharing",
  INSTANT_MESSAGING: "InstantMessaging",
  NUDITY: "Nudity",
  PARKED_DOMAINS: "ParkedDomains",
  PEER_TO_PEER: "PeerToPeer",
  PORNOGRAPHY: "Pornography",
  PROFESSIONAL_NETWORK: "ProfessionalNetwork",
  SCHOOL_CHEATING: "SchoolCheating",
  SELF_HARM: "SelfHarm",
  SEX_EDUCATION: "SexEducation",
  SOCIAL_NETWORKING: "SocialNetworking",
  STREAMING_MEDIA_AND_DOWNLOADS: "StreamingMediaAndDownloads",
  TASTELESS: "Tasteless",
  VIOLENCE: "Violence",
  WEAPONS: "Weapons",
  WEB_BASED_EMAIL: "WebBasedEmail",
} as const;

/**
 * @public
 */
export type Category = (typeof Category)[keyof typeof Category];

/**
 * <p>The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.</p>
 * @public
 */
export interface WebContentFilteringPolicy {
  /**
   * <p>Categories of websites that are blocked on the end user’s browsers.</p>
   * @public
   */
  blockedCategories?: Category[] | undefined;

  /**
   * <p>URLs and domains that are always accessible to end users.</p>
   * @public
   */
  allowedUrls?: string[] | undefined;

  /**
   * <p>URLs and domains that end users cannot access.</p>
   * @public
   */
  blockedUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateBrowserSettingsRequest {
  /**
   * <p>The tags to add to the browser settings resource. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The custom managed key of the browser settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>Additional encryption context of the browser settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>A JSON string containing Chrome Enterprise policies that will be applied to all
   *          streaming sessions.</p>
   * @public
   */
  browserPolicy?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request.</p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *       </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.</p>
   * @public
   */
  webContentFilteringPolicy?: WebContentFilteringPolicy | undefined;
}

/**
 * @public
 */
export interface CreateBrowserSettingsResponse {
  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * <p>The service quota has been exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p> Type of the resource affected.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The originating service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The originating quota.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 */
export interface DeleteBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserSettingsResponse {}

/**
 * @public
 */
export interface GetBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * <p>The browser settings resource that can be associated with a web portal. Once associated
 *          with a web portal, browser settings control how the browser will behave once a user starts
 *          a streaming session for the web portal. </p>
 * @public
 */
export interface BrowserSettings {
  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this browser settings is associated with.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>A JSON string containing Chrome Enterprise policies that will be applied to all
   *          streaming sessions.</p>
   * @public
   */
  browserPolicy?: string | undefined;

  /**
   * <p>The customer managed key used to encrypt sensitive information in the browser
   *          settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the browser settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.</p>
   * @public
   */
  webContentFilteringPolicy?: WebContentFilteringPolicy | undefined;
}

/**
 * @public
 */
export interface GetBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   * @public
   */
  browserSettings?: BrowserSettings | undefined;
}

/**
 * @public
 */
export interface ListBrowserSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary for browser settings.</p>
 * @public
 */
export interface BrowserSettingsSummary {
  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface ListBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   * @public
   */
  browserSettings?: BrowserSettingsSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrowserSettingsRequest {
  /**
   * <p>The ARN of the browser settings.</p>
   * @public
   */
  browserSettingsArn: string | undefined;

  /**
   * <p>A JSON string containing Chrome Enterprise policies that will be applied to all
   *          streaming sessions. </p>
   * @public
   */
  browserPolicy?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.</p>
   * @public
   */
  webContentFilteringPolicy?: WebContentFilteringPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateBrowserSettingsResponse {
  /**
   * <p>The browser settings.</p>
   * @public
   */
  browserSettings: BrowserSettings | undefined;
}

/**
 * <p>The pattern configuration for redacting custom data types in session.</p>
 * @public
 */
export interface CustomPattern {
  /**
   * <p>The pattern name for the custom pattern.</p>
   * @public
   */
  patternName: string | undefined;

  /**
   * <p>The pattern regex for the customer pattern. The format must follow JavaScript regex format. The pattern must be enclosed between slashes, and can have flags behind the second slash. For example: “/ab+c/gi”.</p>
   * @public
   */
  patternRegex: string | undefined;

  /**
   * <p>The pattern description for the customer pattern.</p>
   * @public
   */
  patternDescription?: string | undefined;

  /**
   * <p>The keyword regex for the customer pattern. After there is a match to the pattern regex, the keyword regex is used to search within the proximity of the match. If there is a keyword match, then the match is confirmed. If no keyword regex is provided, the pattern regex match will automatically be confirmed. The format must follow JavaScript regex format. The pattern must be enclosed between slashes, and can have flags behind the second slash. For example, “/ab+c/gi”</p>
   * @public
   */
  keywordRegex?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RedactionPlaceHolderType = {
  CUSTOM_TEXT: "CustomText",
} as const;

/**
 * @public
 */
export type RedactionPlaceHolderType = (typeof RedactionPlaceHolderType)[keyof typeof RedactionPlaceHolderType];

/**
 * <p>The redaction placeholder that will replace the redacted text in session.</p>
 * @public
 */
export interface RedactionPlaceHolder {
  /**
   * <p>The redaction placeholder type that will replace the redacted text in session.</p>
   * @public
   */
  redactionPlaceHolderType: RedactionPlaceHolderType | undefined;

  /**
   * <p>The redaction placeholder text that will replace the redacted text in session for the custom text redaction placeholder type.</p>
   * @public
   */
  redactionPlaceHolderText?: string | undefined;
}

/**
 * <p>The set of patterns that determine the data types redacted in session.</p>
 * @public
 */
export interface InlineRedactionPattern {
  /**
   * <p>The built-in pattern from the list of preconfigured patterns. Either a customPattern or builtInPatternId is required.</p>
   * @public
   */
  builtInPatternId?: string | undefined;

  /**
   * <p>&gt;The configuration for a custom pattern. Either a customPattern or builtInPatternId is required.</p>
   * @public
   */
  customPattern?: CustomPattern | undefined;

  /**
   * <p>The redaction placeholder that will replace the redacted text in session for the inline redaction pattern.</p>
   * @public
   */
  redactionPlaceHolder: RedactionPlaceHolder | undefined;

  /**
   * <p>The enforced URL configuration for the inline redaction pattern. This will override the global enforced URL configuration.</p>
   * @public
   */
  enforcedUrls?: string[] | undefined;

  /**
   * <p>The exempt URL configuration for the inline redaction pattern. This will override the global exempt URL configuration for the inline redaction pattern.</p>
   * @public
   */
  exemptUrls?: string[] | undefined;

  /**
   * <p>The confidence level for inline redaction pattern. This indicates the certainty of data
   *          type matches in the redaction process. Confidence level 3 means high confidence, and
   *          requires a formatted text pattern match in order for content to be redacted. Confidence
   *          level 2 means medium confidence, and redaction considers both formatted and unformatted
   *          text, and adds keyword associate to the logic. Confidence level 1 means low confidence, and
   *          redaction is enforced for both formatted pattern + unformatted pattern without keyword.
   *          This overrides the global confidence level.</p>
   * @public
   */
  confidenceLevel?: number | undefined;
}

/**
 * <p>The configuration for in-session inline redaction.</p>
 * @public
 */
export interface InlineRedactionConfiguration {
  /**
   * <p>The inline redaction patterns to be enabled for the inline redaction configuration.</p>
   * @public
   */
  inlineRedactionPatterns: InlineRedactionPattern[] | undefined;

  /**
   * <p>The global enforced URL configuration for the inline redaction configuration. This is applied to patterns that do not have a pattern-level enforced URL list.</p>
   * @public
   */
  globalEnforcedUrls?: string[] | undefined;

  /**
   * <p>The global exempt URL configuration for the inline redaction configuration. This is applied to patterns that do not have a pattern-level exempt URL list.</p>
   * @public
   */
  globalExemptUrls?: string[] | undefined;

  /**
   * <p>The global confidence level for the inline redaction configuration. This indicates the
   *          certainty of data type matches in the redaction process. Confidence level 3 means high
   *          confidence, and requires a formatted text pattern match in order for content to be
   *          redacted. Confidence level 2 means medium confidence, and redaction considers both
   *          formatted and unformatted text, and adds keyword associate to the logic. Confidence level 1
   *          means low confidence, and redaction is enforced for both formatted pattern + unformatted
   *          pattern without keyword. This is applied to patterns that do not have a pattern-level
   *          confidence level. Defaults to confidence level 2.</p>
   * @public
   */
  globalConfidenceLevel?: number | undefined;
}

/**
 * @public
 */
export interface CreateDataProtectionSettingsRequest {
  /**
   * <p>The display name of the data protection settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the data protection settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags to add to the data protection settings resource. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The custom managed key of the data protection settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>Additional encryption context of the data protection settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The inline redaction configuration of the data protection settings that will be applied to all sessions.</p>
   * @public
   */
  inlineRedactionConfiguration?: InlineRedactionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProtectionSettingsResponse {
  /**
   * <p>The ARN of the data protection settings resource.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataProtectionSettingsRequest {
  /**
   * <p>The ARN of the data protection settings.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataProtectionSettingsResponse {}

/**
 * @public
 */
export interface GetDataProtectionSettingsRequest {
  /**
   * <p>The ARN of the data protection settings.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * <p>The data protection settings resource that can be associated with a web portal.</p>
 * @public
 */
export interface DataProtectionSettings {
  /**
   * <p>The ARN of the data protection settings resource.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;

  /**
   * <p>The inline redaction configuration for the data protection settings.</p>
   * @public
   */
  inlineRedactionConfiguration?: InlineRedactionConfiguration | undefined;

  /**
   * <p>A list of web portal ARNs that this data protection settings resource is associated
   *          with.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>The display name of the data protection settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the data protection settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The creation date timestamp of the data protection settings.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The customer managed key used to encrypt sensitive information in the data protection
   *          settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the data protection settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionSettingsResponse {
  /**
   * <p>The data protection settings.</p>
   * @public
   */
  dataProtectionSettings?: DataProtectionSettings | undefined;
}

/**
 * @public
 */
export interface ListDataProtectionSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the data protection settings.</p>
 * @public
 */
export interface DataProtectionSettingsSummary {
  /**
   * <p>The ARN of the data protection settings.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;

  /**
   * <p>The display name of the data protection settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the data protection settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The creation date timestamp of the data protection settings.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataProtectionSettingsResponse {
  /**
   * <p>The data protection settings.</p>
   * @public
   */
  dataProtectionSettings?: DataProtectionSettingsSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataProtectionSettingsRequest {
  /**
   * <p>The ARN of the data protection settings.</p>
   * @public
   */
  dataProtectionSettingsArn: string | undefined;

  /**
   * <p>The inline redaction configuration of the data protection settings that will be applied to all sessions.</p>
   * @public
   */
  inlineRedactionConfiguration?: InlineRedactionConfiguration | undefined;

  /**
   * <p>The display name of the data protection settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the data protection settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataProtectionSettingsResponse {
  /**
   * <p>The data protection settings.</p>
   * @public
   */
  dataProtectionSettings: DataProtectionSettings | undefined;
}

/**
 * @public
 */
export interface ExpireSessionRequest {
  /**
   * <p>The ID of the web portal for the session.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The ID of the session to expire.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ExpireSessionResponse {}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The ID of the web portal for the session.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The ID of the session.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  ACTIVE: "Active",
  TERMINATED: "Terminated",
} as const;

/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * <p>Information about a secure browser session.</p>
 * @public
 */
export interface Session {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn?: string | undefined;

  /**
   * <p>The ID of the session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The username of the session.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The IP address of the client.</p>
   * @public
   */
  clientIpAddresses?: string[] | undefined;

  /**
   * <p>The status of the session.</p>
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * <p>The start time of the session.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of the session.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The sessions in a list.</p>
   * @public
   */
  session?: Session | undefined;
}

/**
 * @public
 * @enum
 */
export const IdentityProviderType = {
  Facebook: "Facebook",
  Google: "Google",
  LoginWithAmazon: "LoginWithAmazon",
  OIDC: "OIDC",
  SAML: "SAML",
  SignInWithApple: "SignInWithApple",
} as const;

/**
 * @public
 */
export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

/**
 * @public
 */
export interface CreateIdentityProviderRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The identity provider name.</p>
   * @public
   */
  identityProviderName: string | undefined;

  /**
   * <p>The identity provider type.</p>
   * @public
   */
  identityProviderType: IdentityProviderType | undefined;

  /**
   * <p>The identity provider details. The following list describes the provider detail keys for
   *          each identity provider type. </p>
   *          <ul>
   *             <li>
   *                <p>For Google and Login with Amazon:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Facebook:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>api_version</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Sign in with Apple:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>team_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>key_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>private_key</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For OIDC providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_request_method</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>oidc_issuer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>token_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>jwks_uri</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For SAML providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MetadataFile</code> OR <code>MetadataURL</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPSignout</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPInit</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RequestSigningAlgorithm</code> (string) <i>optional</i>
   *                      - Only accepts <code>rsa-sha256</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>EncryptedResponses</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  identityProviderDetails: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request.</p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to add to the identity provider resource. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIdentityProviderResponse {
  /**
   * <p>The ARN of the identity provider.</p>
   * @public
   */
  identityProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   * @public
   */
  identityProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderResponse {}

/**
 * @public
 */
export interface GetIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   * @public
   */
  identityProviderArn: string | undefined;
}

/**
 * <p>The identity provider.</p>
 * @public
 */
export interface IdentityProvider {
  /**
   * <p>The ARN of the identity provider.</p>
   * @public
   */
  identityProviderArn: string | undefined;

  /**
   * <p>The identity provider name.</p>
   * @public
   */
  identityProviderName?: string | undefined;

  /**
   * <p>The identity provider type.</p>
   * @public
   */
  identityProviderType?: IdentityProviderType | undefined;

  /**
   * <p>The identity provider details. The following list describes the provider detail keys for
   *          each identity provider type. </p>
   *          <ul>
   *             <li>
   *                <p>For Google and Login with Amazon:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Facebook:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>api_version</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Sign in with Apple:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>team_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>key_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>private_key</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For OIDC providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_request_method</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>oidc_issuer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_url</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>token_url</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_url</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>jwks_uri</code>
   *                         <i>if not available from discovery URL specified by oidc_issuer
   *                         key</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For SAML providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MetadataFile</code> OR <code>MetadataURL</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPSignout</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPInit</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RequestSigningAlgorithm</code> (string) <i>optional</i>
   *                      - Only accepts <code>rsa-sha256</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>EncryptedResponses</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  identityProviderDetails?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   * @public
   */
  identityProvider?: IdentityProvider | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * <p>The summary of the identity provider.</p>
 * @public
 */
export interface IdentityProviderSummary {
  /**
   * <p>The ARN of the identity provider.</p>
   * @public
   */
  identityProviderArn: string | undefined;

  /**
   * <p>The identity provider name.</p>
   * @public
   */
  identityProviderName?: string | undefined;

  /**
   * <p>The identity provider type.</p>
   * @public
   */
  identityProviderType?: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The identity providers.</p>
   * @public
   */
  identityProviders?: IdentityProviderSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderRequest {
  /**
   * <p>The ARN of the identity provider.</p>
   * @public
   */
  identityProviderArn: string | undefined;

  /**
   * <p>The name of the identity provider.</p>
   * @public
   */
  identityProviderName?: string | undefined;

  /**
   * <p>The type of the identity provider.</p>
   * @public
   */
  identityProviderType?: IdentityProviderType | undefined;

  /**
   * <p>The details of the identity provider. The following list describes the provider detail
   *          keys for each identity provider type. </p>
   *          <ul>
   *             <li>
   *                <p>For Google and Login with Amazon:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Facebook:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>api_version</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Sign in with Apple:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>team_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>key_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>private_key</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For OIDC providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>client_id</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>client_secret</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_request_method</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>oidc_issuer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_scopes</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>authorize_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>token_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>attributes_url</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>jwks_uri</code>
   *                         <i>if not available from discovery URL specified by
   *                            <code>oidc_issuer</code> key</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For SAML providers:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MetadataFile</code> OR <code>MetadataURL</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPSignout</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IDPInit</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RequestSigningAlgorithm</code> (string) <i>optional</i>
   *                      - Only accepts <code>rsa-sha256</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>EncryptedResponses</code> (boolean) <i>optional</i>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  identityProviderDetails?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderResponse {
  /**
   * <p>The identity provider.</p>
   * @public
   */
  identityProvider: IdentityProvider | undefined;
}

/**
 * <p>The IP rules of the IP access settings.</p>
 * @public
 */
export interface IpRule {
  /**
   * <p>The IP range of the IP rule.</p>
   * @public
   */
  ipRange: string | undefined;

  /**
   * <p>The description of the IP rule.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpAccessSettingsRequest {
  /**
   * <p>The display name of the IP access settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the IP access settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags to add to the IP access settings resource. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The custom managed key of the IP access settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>Additional encryption context of the IP access settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The IP rules of the IP access settings.</p>
   * @public
   */
  ipRules: IpRule[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpAccessSettingsResponse {
  /**
   * <p>The ARN of the IP access settings resource.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpAccessSettingsRequest {
  /**
   * <p>The ARN of the IP access settings.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpAccessSettingsResponse {}

/**
 * @public
 */
export interface GetIpAccessSettingsRequest {
  /**
   * <p>The ARN of the IP access settings.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * <p>The IP access settings resource that can be associated with a web portal. </p>
 * @public
 */
export interface IpAccessSettings {
  /**
   * <p>The ARN of the IP access settings resource.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this IP access settings resource is associated
   *          with.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>The IP rules of the IP access settings.</p>
   * @public
   */
  ipRules?: IpRule[] | undefined;

  /**
   * <p> The display name of the IP access settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the IP access settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The creation date timestamp of the IP access settings.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The customer managed key used to encrypt sensitive information in the IP access
   *          settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the IP access settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIpAccessSettingsResponse {
  /**
   * <p>The IP access settings.</p>
   * @public
   */
  ipAccessSettings?: IpAccessSettings | undefined;
}

/**
 * @public
 */
export interface ListIpAccessSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of IP access settings.</p>
 * @public
 */
export interface IpAccessSettingsSummary {
  /**
   * <p>The ARN of IP access settings.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * <p>The display name of the IP access settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the IP access settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The creation date timestamp of the IP access settings.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListIpAccessSettingsResponse {
  /**
   * <p>The IP access settings.</p>
   * @public
   */
  ipAccessSettings?: IpAccessSettingsSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIpAccessSettingsRequest {
  /**
   * <p>The ARN of the IP access settings.</p>
   * @public
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * <p>The display name of the IP access settings.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the IP access settings.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated IP rules of the IP access settings.</p>
   * @public
   */
  ipRules?: IpRule[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIpAccessSettingsResponse {
  /**
   * <p>The IP access settings.</p>
   * @public
   */
  ipAccessSettings: IpAccessSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionSortBy = {
  START_TIME_ASCENDING: "StartTimeAscending",
  START_TIME_DESCENDING: "StartTimeDescending",
} as const;

/**
 * @public
 */
export type SessionSortBy = (typeof SessionSortBy)[keyof typeof SessionSortBy];

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The ID of the web portal for the sessions.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The username of the session.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The ID of the session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The method in which the returned sessions should be sorted.</p>
   * @public
   */
  sortBy?: SessionSortBy | undefined;

  /**
   * <p>The status of the session.</p>
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a secure browser session.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn?: string | undefined;

  /**
   * <p>The ID of the session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The username of the session.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The status of the session.</p>
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * <p>The start time of the session.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of the session.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>The sessions in a list.</p>
   * @public
   */
  sessions: SessionSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags of the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateNetworkSettingsRequest {
  /**
   * <p>The VPC that streaming instances will connect to.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The subnets in which network interfaces are created to connect streaming instances to
   *          your VPC. At least two of these subnets must be in different availability zones.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>One or more security groups used to control access from streaming instances to your
   *          VPC.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The tags to add to the network settings resource. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkSettingsResponse {
  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkSettingsResponse {}

/**
 * @public
 */
export interface GetNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * <p>A network settings resource that can be associated with a web portal. Once associated
 *          with a web portal, network settings define how streaming instances will connect with your
 *          specified VPC. </p>
 * @public
 */
export interface NetworkSettings {
  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this network settings is associated with.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>The VPC that streaming instances will connect to.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The subnets in which network interfaces are created to connect streaming instances to
   *          your VPC. At least two of these subnets must be in different availability zones.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>One or more security groups used to control access from streaming instances to your VPC.
   *       </p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   * @public
   */
  networkSettings?: NetworkSettings | undefined;
}

/**
 * @public
 */
export interface ListNetworkSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of network settings.</p>
 * @public
 */
export interface NetworkSettingsSummary {
  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;

  /**
   * <p>The VPC ID of the network settings.</p>
   * @public
   */
  vpcId?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   * @public
   */
  networkSettings?: NetworkSettingsSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsRequest {
  /**
   * <p>The ARN of the network settings.</p>
   * @public
   */
  networkSettingsArn: string | undefined;

  /**
   * <p>The VPC that streaming instances will connect to.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The subnets in which network interfaces are created to connect streaming instances to
   *          your VPC. At least two of these subnets must be in different availability zones.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>One or more security groups used to control access from streaming instances to your
   *          VPC.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsResponse {
  /**
   * <p>The network settings.</p>
   * @public
   */
  networkSettings: NetworkSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const BrowserType = {
  CHROME: "Chrome",
} as const;

/**
 * @public
 */
export type BrowserType = (typeof BrowserType)[keyof typeof BrowserType];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  STANDARD_LARGE: "standard.large",
  STANDARD_REGULAR: "standard.regular",
  STANDARD_XLARGE: "standard.xlarge",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 */
export interface CreatePortalRequest {
  /**
   * <p>The name of the web portal. This is not visible to users who log into the web
   *          portal.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The tags to add to the web portal. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The customer managed key of the web portal.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the portal.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM Identity Center</code> web portals are authenticated through IAM Identity Center. Identity sources
   *          (including external identity provider integration), plus user and group access to your web
   *          portal, can be configured in the IAM Identity Center.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The type and resources of the underlying instance.</p>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum number of concurrent sessions for the portal.</p>
   * @public
   */
  maxConcurrentSessions?: number | undefined;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The endpoint URL of the web portal that users access in order to start streaming
   *          sessions.</p>
   * @public
   */
  portalEndpoint: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalResponse {}

/**
 * @public
 */
export interface DisassociateBrowserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBrowserSettingsResponse {}

/**
 * @public
 */
export interface DisassociateDataProtectionSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDataProtectionSettingsResponse {}

/**
 * @public
 */
export interface DisassociateIpAccessSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIpAccessSettingsResponse {}

/**
 * @public
 */
export interface DisassociateNetworkSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateNetworkSettingsResponse {}

/**
 * @public
 */
export interface DisassociateSessionLoggerRequest {
  /**
   * <p>The ARN of the portal to disassociate from the a session logger.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSessionLoggerResponse {}

/**
 * @public
 */
export interface DisassociateTrustStoreRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrustStoreResponse {}

/**
 * @public
 */
export interface DisassociateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserAccessLoggingSettingsResponse {}

/**
 * @public
 */
export interface DisassociateUserSettingsRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserSettingsResponse {}

/**
 * @public
 */
export interface GetPortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PortalStatus = {
  ACTIVE: "Active",
  INCOMPLETE: "Incomplete",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type PortalStatus = (typeof PortalStatus)[keyof typeof PortalStatus];

/**
 * @public
 * @enum
 */
export const RendererType = {
  APPSTREAM: "AppStream",
} as const;

/**
 * @public
 */
export type RendererType = (typeof RendererType)[keyof typeof RendererType];

/**
 * <p>The web portal.</p>
 * @public
 */
export interface Portal {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The renderer that is used in streaming sessions.</p>
   * @public
   */
  rendererType?: RendererType | undefined;

  /**
   * <p>The browser that users see when using a streaming session.</p>
   * @public
   */
  browserType?: BrowserType | undefined;

  /**
   * <p>The status of the web portal.</p>
   * @public
   */
  portalStatus?: PortalStatus | undefined;

  /**
   * <p>The endpoint URL of the web portal that users access in order to start streaming
   *          sessions.</p>
   * @public
   */
  portalEndpoint?: string | undefined;

  /**
   * <p>The name of the web portal.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The creation date of the web portal.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The ARN of the browser settings that is associated with this web portal.</p>
   * @public
   */
  browserSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the data protection settings.</p>
   * @public
   */
  dataProtectionSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the user settings that is associated with the web portal.</p>
   * @public
   */
  userSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the network settings that is associated with the web portal.</p>
   * @public
   */
  networkSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the session logger that is assocaited with the portal.</p>
   * @public
   */
  sessionLoggerArn?: string | undefined;

  /**
   * <p>The ARN of the trust store that is associated with the web portal.</p>
   * @public
   */
  trustStoreArn?: string | undefined;

  /**
   * <p>A message that explains why the web portal is in its current status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The ARN of the user access logging settings that is associated with the web
   *          portal.</p>
   * @public
   */
  userAccessLoggingSettingsArn?: string | undefined;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM Identity Center</code> web portals are authenticated through IAM Identity Center. Identity sources
   *          (including external identity provider integration), plus user and group access to your web
   *          portal, can be configured in the IAM Identity Center.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The ARN of the IP access settings.</p>
   * @public
   */
  ipAccessSettingsArn?: string | undefined;

  /**
   * <p>The customer managed key used to encrypt sensitive information in the portal.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the portal.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The type and resources of the underlying instance.</p>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum number of concurrent sessions for the portal.</p>
   * @public
   */
  maxConcurrentSessions?: number | undefined;
}

/**
 * @public
 */
export interface GetPortalResponse {
  /**
   * <p>The web portal.</p>
   * @public
   */
  portal?: Portal | undefined;
}

/**
 * @public
 */
export interface GetPortalServiceProviderMetadataRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface GetPortalServiceProviderMetadataResponse {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The service provider SAML metadata.</p>
   * @public
   */
  serviceProviderSamlMetadata?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.
   *       </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the portal.</p>
 * @public
 */
export interface PortalSummary {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The renderer that is used in streaming sessions.</p>
   * @public
   */
  rendererType?: RendererType | undefined;

  /**
   * <p>The browser type of the web portal.</p>
   * @public
   */
  browserType?: BrowserType | undefined;

  /**
   * <p>The status of the web portal.</p>
   * @public
   */
  portalStatus?: PortalStatus | undefined;

  /**
   * <p>The endpoint URL of the web portal that users access in order to start streaming
   *          sessions.</p>
   * @public
   */
  portalEndpoint?: string | undefined;

  /**
   * <p>The name of the web portal.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The creation date of the web portal.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The ARN of the browser settings that is associated with the web portal.</p>
   * @public
   */
  browserSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the data protection settings.</p>
   * @public
   */
  dataProtectionSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the user settings that is associated with the web portal.</p>
   * @public
   */
  userSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the network settings that is associated with the web portal.</p>
   * @public
   */
  networkSettingsArn?: string | undefined;

  /**
   * <p>The ARN of the session logger that is assocaited with the portal.</p>
   * @public
   */
  sessionLoggerArn?: string | undefined;

  /**
   * <p>The ARN of the trust that is associated with this web portal.</p>
   * @public
   */
  trustStoreArn?: string | undefined;

  /**
   * <p>The ARN of the user access logging settings that is associated with the web
   *          portal.</p>
   * @public
   */
  userAccessLoggingSettingsArn?: string | undefined;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM Identity Center</code> web portals are authenticated through IAM Identity Center. Identity sources
   *          (including external identity provider integration), plus user and group access to your web
   *          portal, can be configured in the IAM Identity Center.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The ARN of the IP access settings.</p>
   * @public
   */
  ipAccessSettingsArn?: string | undefined;

  /**
   * <p>The type and resources of the underlying instance.</p>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum number of concurrent sessions for the portal.</p>
   * @public
   */
  maxConcurrentSessions?: number | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * <p>The portals in the list.</p>
   * @public
   */
  portals?: PortalSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.
   *       </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * <p>The ARN of the web portal.</p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The name of the web portal. This is not visible to users who log into the web
   *          portal.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The type of authentication integration points used when signing into the web portal.
   *          Defaults to <code>Standard</code>.</p>
   *          <p>
   *             <code>Standard</code> web portals are authenticated directly through your identity
   *          provider. You need to call <code>CreateIdentityProvider</code> to integrate your identity
   *          provider with your web portal. User and group access to your web portal is controlled
   *          through your identity provider.</p>
   *          <p>
   *             <code>IAM Identity Center</code> web portals are authenticated through IAM Identity Center. Identity sources
   *          (including external identity provider integration), plus user and group access to your web
   *          portal, can be configured in the IAM Identity Center.</p>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>The type and resources of the underlying instance.</p>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The maximum number of concurrent sessions for the portal.</p>
   * @public
   */
  maxConcurrentSessions?: number | undefined;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * <p>The web portal.</p>
   * @public
   */
  portal?: Portal | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * @public
 * @enum
 */
export const Event = {
  CONTENT_COPY_FROM_WEBSITE: "ContentCopyFromWebsite",
  CONTENT_PASTE_TO_WEBSITE: "ContentPasteToWebsite",
  CONTENT_TRANSFER_FROM_LOCAL_TO_REMOTE_CLIPBOARD: "ContentTransferFromLocalToRemoteClipboard",
  FILE_DOWNLOAD_FROM_SECURE_BROWSER_TO_REMOTE_DISK: "FileDownloadFromSecureBrowserToRemoteDisk",
  FILE_TRANSFER_FROM_LOCAL_TO_REMOTE_DISK: "FileTransferFromLocalToRemoteDisk",
  FILE_TRANSFER_FROM_REMOTE_TO_LOCAL_DISK: "FileTransferFromRemoteToLocalDisk",
  FILE_UPLOAD_FROM_REMOTE_DISK_TO_SECURE_BROWSER: "FileUploadFromRemoteDiskToSecureBrowser",
  PRINT_JOB_SUBMIT: "PrintJobSubmit",
  SESSION_CONNECT: "SessionConnect",
  SESSION_DISCONNECT: "SessionDisconnect",
  SESSION_END: "SessionEnd",
  SESSION_START: "SessionStart",
  TAB_CLOSE: "TabClose",
  TAB_OPEN: "TabOpen",
  URL_BLOCK_BY_CONTENT_FILTER: "UrlBlockByContentFilter",
  URL_LOAD: "UrlLoad",
  WEBSITE_INTERACT: "WebsiteInteract",
} as const;

/**
 * @public
 */
export type Event = (typeof Event)[keyof typeof Event];

/**
 * <p>The filter that specifies the events to monitor.</p>
 * @public
 */
export type EventFilter = EventFilter.AllMember | EventFilter.IncludeMember | EventFilter.$UnknownMember;

/**
 * @public
 */
export namespace EventFilter {
  /**
   * <p>The filter that monitors all of the available events, including any new events emitted in the future.</p>
   * @public
   */
  export interface AllMember {
    all: Unit;
    include?: never;
    $unknown?: never;
  }

  /**
   * <p>The filter that monitors only the listed set of events. New events are not auto-monitored.</p>
   * @public
   */
  export interface IncludeMember {
    all?: never;
    include: Event[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    all?: never;
    include?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    all: (value: Unit) => T;
    include: (value: Event[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 * @enum
 */
export const FolderStructure = {
  FLAT: "Flat",
  NESTED_BY_DATE: "NestedByDate",
} as const;

/**
 * @public
 */
export type FolderStructure = (typeof FolderStructure)[keyof typeof FolderStructure];

/**
 * @public
 * @enum
 */
export const LogFileFormat = {
  JSON: "Json",
  JSON_LINES: "JSONLines",
} as const;

/**
 * @public
 */
export type LogFileFormat = (typeof LogFileFormat)[keyof typeof LogFileFormat];

/**
 * <p>The S3 log configuration.</p>
 * @public
 */
export interface S3LogConfiguration {
  /**
   * <p>The S3 bucket name where logs are delivered.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The S3 path prefix that determines where log files are stored.</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>The expected bucket owner of the target S3 bucket. The caller must have permissions to write to the target bucket.</p>
   * @public
   */
  bucketOwner?: string | undefined;

  /**
   * <p>The format of the LogFile that is written to S3.</p>
   * @public
   */
  logFileFormat: LogFileFormat | undefined;

  /**
   * <p>The folder structure that defines the organizational structure for log files in S3.</p>
   * @public
   */
  folderStructure: FolderStructure | undefined;
}

/**
 * <p>The configuration of the log.</p>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>The configuration for delivering the logs to S3.</p>
   * @public
   */
  s3?: S3LogConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSessionLoggerRequest {
  /**
   * <p>The filter that specifies the events to monitor.</p>
   * @public
   */
  eventFilter: EventFilter | undefined;

  /**
   * <p>The configuration that specifies where logs are delivered.</p>
   * @public
   */
  logConfiguration: LogConfiguration | undefined;

  /**
   * <p>The human-readable display name for the session logger resource.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The custom managed key of the session logger.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the session logger.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The tags to add to the session logger.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. If you do not specify a client token, one is automatically generated by the AWS SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionLoggerResponse {
  /**
   * <p>The ARN of the session logger.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionLoggerRequest {
  /**
   * <p>The ARN of the session logger.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionLoggerResponse {}

/**
 * @public
 */
export interface GetSessionLoggerRequest {
  /**
   * <p>The ARN of the session logger.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * <p>The session logger resource.</p>
 * @public
 */
export interface SessionLogger {
  /**
   * <p>The ARN of the session logger resource.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;

  /**
   * <p>The filter that specifies which events to monitor.</p>
   * @public
   */
  eventFilter?: EventFilter | undefined;

  /**
   * <p>The configuration that specifies where logs are fowarded.</p>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The custom managed key of the session logger.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the session logger.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The associated portal ARN.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>The human-readable display name.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The date the session logger resource was created.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionLoggerResponse {
  /**
   * <p>The session logger details.</p>
   * @public
   */
  sessionLogger?: SessionLogger | undefined;
}

/**
 * @public
 */
export interface ListSessionLoggersRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the session logger resource.</p>
 * @public
 */
export interface SessionLoggerSummary {
  /**
   * <p>The ARN of the session logger resource.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;

  /**
   * <p>The configuration that specifies where the logs are fowarded.</p>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The human-readable display name.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The date the session logger resource was created.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionLoggersResponse {
  /**
   * <p>The list of session loggers, including summaries of their details.</p>
   * @public
   */
  sessionLoggers?: SessionLoggerSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionLoggerRequest {
  /**
   * <p>The ARN of the session logger to update.</p>
   * @public
   */
  sessionLoggerArn: string | undefined;

  /**
   * <p>The updated eventFilter.</p>
   * @public
   */
  eventFilter?: EventFilter | undefined;

  /**
   * <p>The updated logConfiguration.</p>
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * <p>The updated display name.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionLoggerResponse {
  /**
   * <p>The updated details of the session logger.</p>
   * @public
   */
  sessionLogger: SessionLogger | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags of the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>There are too many tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Name of the resource affected.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>The summary of the certificate.</p>
 * @public
 */
export interface CertificateSummary {
  /**
   * <p>A hexadecimal identifier for the certificate.</p>
   * @public
   */
  thumbprint?: string | undefined;

  /**
   * <p>The entity the certificate belongs to.</p>
   * @public
   */
  subject?: string | undefined;

  /**
   * <p>The entity that issued the certificate.</p>
   * @public
   */
  issuer?: string | undefined;

  /**
   * <p>The certificate is not valid before this date.</p>
   * @public
   */
  notValidBefore?: Date | undefined;

  /**
   * <p>The certificate is not valid after this date.</p>
   * @public
   */
  notValidAfter?: Date | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreRequest {
  /**
   * <p>A list of CA certificates to be added to the trust store.</p>
   * @public
   */
  certificateList: Uint8Array[] | undefined;

  /**
   * <p>The tags to add to the trust store. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustStoreResponse {}

/**
 * @public
 */
export interface GetTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * <p>A trust store that can be associated with a web portal. A trust store contains
 *          certificate authority (CA) certificates. Once associated with a web portal, the browser in
 *          a streaming session will recognize certificates that have been issued using any of the CAs
 *          in the trust store. If your organization has internal websites that use certificates issued
 *          by private CAs, you should add the private CA certificate to the trust store. </p>
 * @public
 */
export interface TrustStore {
  /**
   * <p>A list of web portal ARNs that this trust store is associated with.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreResponse {
  /**
   * <p>The trust store.</p>
   * @public
   */
  trustStore?: TrustStore | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreCertificateRequest {
  /**
   * <p>The ARN of the trust store certificate.</p>
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * <p>The thumbprint of the trust store certificate.</p>
   * @public
   */
  thumbprint: string | undefined;
}

/**
 * <p>The certificate.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>A hexadecimal identifier for the certificate.</p>
   * @public
   */
  thumbprint?: string | undefined;

  /**
   * <p>The entity the certificate belongs to.</p>
   * @public
   */
  subject?: string | undefined;

  /**
   * <p>The entity that issued the certificate.</p>
   * @public
   */
  issuer?: string | undefined;

  /**
   * <p>The certificate is not valid before this date.</p>
   * @public
   */
  notValidBefore?: Date | undefined;

  /**
   * <p>The certificate is not valid after this date.</p>
   * @public
   */
  notValidAfter?: Date | undefined;

  /**
   * <p>The body of the certificate.</p>
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreCertificateResponse {
  /**
   * <p>The ARN of the trust store certificate.</p>
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * <p>The certificate of the trust store certificate.</p>
   * @public
   */
  certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface ListTrustStoreCertificatesRequest {
  /**
   * <p>The ARN of the trust store</p>
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTrustStoreCertificatesResponse {
  /**
   * <p>The certificate list.</p>
   * @public
   */
  certificateList?: CertificateSummary[] | undefined;

  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.&gt;</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the trust store.</p>
 * @public
 */
export interface TrustStoreSummary {
  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresResponse {
  /**
   * <p>The trust stores.</p>
   * @public
   */
  trustStores?: TrustStoreSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreRequest {
  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * <p>A list of CA certificates to add to the trust store.</p>
   * @public
   */
  certificatesToAdd?: Uint8Array[] | undefined;

  /**
   * <p>A list of CA certificates to delete from a trust store.</p>
   * @public
   */
  certificatesToDelete?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreResponse {
  /**
   * <p>The ARN of the trust store.</p>
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface CreateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the Kinesis stream.</p>
   * @public
   */
  kinesisStreamArn: string | undefined;

  /**
   * <p>The tags to add to the user settings resource. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserAccessLoggingSettingsResponse {
  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserAccessLoggingSettingsResponse {}

/**
 * @public
 */
export interface GetUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * <p>A user access logging settings resource that can be associated with a web portal.</p>
 * @public
 */
export interface UserAccessLoggingSettings {
  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this user access logging settings is associated
   *          with.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>The ARN of the Kinesis stream.</p>
   * @public
   */
  kinesisStreamArn?: string | undefined;
}

/**
 * @public
 */
export interface GetUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettings?: UserAccessLoggingSettings | undefined;
}

/**
 * @public
 */
export interface ListUserAccessLoggingSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of user access logging settings.</p>
 * @public
 */
export interface UserAccessLoggingSettingsSummary {
  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * <p>The ARN of the Kinesis stream.</p>
   * @public
   */
  kinesisStreamArn?: string | undefined;
}

/**
 * @public
 */
export interface ListUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettings?: UserAccessLoggingSettingsSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserAccessLoggingSettingsRequest {
  /**
   * <p>The ARN of the user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * <p>The ARN of the Kinesis stream.</p>
   * @public
   */
  kinesisStreamArn?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserAccessLoggingSettingsResponse {
  /**
   * <p>The user access logging settings.</p>
   * @public
   */
  userAccessLoggingSettings: UserAccessLoggingSettings | undefined;
}

/**
 * <p>Specifies a single cookie or set of cookies in an end user's browser.</p>
 * @public
 */
export interface CookieSpecification {
  /**
   * <p>The domain of the cookie.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The name of the cookie.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The path of the cookie.</p>
   * @public
   */
  path?: string | undefined;
}

/**
 * <p>The configuration that specifies which cookies should be synchronized from the end
 *          user's local browser to the remote browser.</p>
 * @public
 */
export interface CookieSynchronizationConfiguration {
  /**
   * <p>The list of cookie specifications that are allowed to be synchronized to the remote
   *          browser.</p>
   * @public
   */
  allowlist: CookieSpecification[] | undefined;

  /**
   * <p>The list of cookie specifications that are blocked from being synchronized to the remote
   *          browser.</p>
   * @public
   */
  blocklist?: CookieSpecification[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EnabledType = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type EnabledType = (typeof EnabledType)[keyof typeof EnabledType];

/**
 * @public
 * @enum
 */
export const ToolbarItem = {
  DUAL_MONITOR: "DualMonitor",
  FULL_SCREEN: "FullScreen",
  MICROPHONE: "Microphone",
  WEBCAM: "Webcam",
  WINDOWS: "Windows",
} as const;

/**
 * @public
 */
export type ToolbarItem = (typeof ToolbarItem)[keyof typeof ToolbarItem];

/**
 * @public
 * @enum
 */
export const MaxDisplayResolution = {
  RESOLUTION_1080P: "size1920X1080",
  RESOLUTION_1440P: "size2560X1440",
  RESOLUTION_1440P_ULTRA_WIDE: "size3440X1440",
  RESOLUTION_600P: "size800X600",
  RESOLUTION_720P: "size1280X720",
  RESOLUTION_768P: "size1024X768",
  RESOLUTION_DCI_4K: "size4096X2160",
  RESOLUTION_UHD_4K: "size3840X2160",
} as const;

/**
 * @public
 */
export type MaxDisplayResolution = (typeof MaxDisplayResolution)[keyof typeof MaxDisplayResolution];

/**
 * @public
 * @enum
 */
export const ToolbarType = {
  DOCKED: "Docked",
  FLOATING: "Floating",
} as const;

/**
 * @public
 */
export type ToolbarType = (typeof ToolbarType)[keyof typeof ToolbarType];

/**
 * @public
 * @enum
 */
export const VisualMode = {
  DARK: "Dark",
  LIGHT: "Light",
} as const;

/**
 * @public
 */
export type VisualMode = (typeof VisualMode)[keyof typeof VisualMode];

/**
 * <p>The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.</p>
 * @public
 */
export interface ToolbarConfiguration {
  /**
   * <p>The type of toolbar displayed during the session.</p>
   * @public
   */
  toolbarType?: ToolbarType | undefined;

  /**
   * <p>The visual mode of the toolbar.</p>
   * @public
   */
  visualMode?: VisualMode | undefined;

  /**
   * <p>The list of toolbar items to be hidden.</p>
   * @public
   */
  hiddenToolbarItems?: ToolbarItem[] | undefined;

  /**
   * <p>The maximum display resolution that is allowed for the session.</p>
   * @public
   */
  maxDisplayResolution?: MaxDisplayResolution | undefined;
}

/**
 * @public
 */
export interface CreateUserSettingsRequest {
  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   * @public
   */
  copyAllowed: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   * @public
   */
  pasteAllowed: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   * @public
   */
  downloadAllowed: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   * @public
   */
  uploadAllowed: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   * @public
   */
  printAllowed: EnabledType | undefined;

  /**
   * <p>The tags to add to the user settings resource. A tag is a key-value pair.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The amount of time that a streaming session remains active after users
   *          disconnect.</p>
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from
   *          their streaming session and the disconnect timeout interval begins.</p>
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token returns the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration that specifies which cookies should be synchronized from the end
   *          user's local browser to the remote browser.</p>
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * <p>The customer managed key used to encrypt sensitive information in the user
   *          settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the user settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether the user can use deep links that open automatically when connecting to
   *          a session.</p>
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * <p>The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.</p>
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateUserSettingsResponse {
  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserSettingsResponse {}

/**
 * @public
 */
export interface GetUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * <p>A user settings resource that can be associated with a web portal. Once associated with
 *          a web portal, user settings control how users can transfer data between a streaming session
 *          and the their local devices. </p>
 * @public
 */
export interface UserSettings {
  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;

  /**
   * <p>A list of web portal ARNs that this user settings is associated with.</p>
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   * @public
   */
  copyAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   * @public
   */
  pasteAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   * @public
   */
  downloadAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   * @public
   */
  uploadAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   * @public
   */
  printAllowed?: EnabledType | undefined;

  /**
   * <p>The amount of time that a streaming session remains active after users
   *          disconnect.</p>
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from
   *          their streaming session and the disconnect timeout interval begins.</p>
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>The configuration that specifies which cookies should be synchronized from the end
   *          user's local browser to the remote browser.</p>
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * <p>The customer managed key used to encrypt sensitive information in the user
   *          settings.</p>
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * <p>The additional encryption context of the user settings.</p>
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether the user can use deep links that open automatically when connecting to
   *          a session.</p>
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * <p>The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.</p>
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;
}

/**
 * @public
 */
export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   * @public
   */
  userSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface ListUserSettingsRequest {
  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.
   *       </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of user settings.</p>
 * @public
 */
export interface UserSettingsSummary {
  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;

  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   * @public
   */
  copyAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   * @public
   */
  pasteAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   * @public
   */
  downloadAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   * @public
   */
  uploadAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   * @public
   */
  printAllowed?: EnabledType | undefined;

  /**
   * <p>The amount of time that a streaming session remains active after users
   *          disconnect.</p>
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from
   *          their streaming session and the disconnect timeout interval begins.</p>
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>The configuration that specifies which cookies should be synchronized from the end
   *          user's local browser to the remote browser.</p>
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * <p>Specifies whether the user can use deep links that open automatically when connecting to
   *          a session.</p>
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * <p>The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.</p>
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;
}

/**
 * @public
 */
export interface ListUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   * @public
   */
  userSettings?: UserSettingsSummary[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this operation.
   *       </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserSettingsRequest {
  /**
   * <p>The ARN of the user settings.</p>
   * @public
   */
  userSettingsArn: string | undefined;

  /**
   * <p>Specifies whether the user can copy text from the streaming session to the local
   *          device.</p>
   * @public
   */
  copyAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can paste text from the local device to the streaming
   *          session.</p>
   * @public
   */
  pasteAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can download files from the streaming session to the local
   *          device.</p>
   * @public
   */
  downloadAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can upload files from the local device to the streaming
   *          session.</p>
   * @public
   */
  uploadAllowed?: EnabledType | undefined;

  /**
   * <p>Specifies whether the user can print to the local device.</p>
   * @public
   */
  printAllowed?: EnabledType | undefined;

  /**
   * <p>The amount of time that a streaming session remains active after users
   *          disconnect.</p>
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from
   *          their streaming session and the disconnect timeout interval begins.</p>
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, subsequent retries with the same
   *          client token return the result from the original successful request. </p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration that specifies which cookies should be synchronized from the end
   *          user's local browser to the remote browser.</p>
   *          <p>If the allowlist and blocklist are empty, the configuration becomes null.</p>
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * <p>Specifies whether the user can use deep links that open automatically when connecting to
   *          a session.</p>
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * <p>The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.</p>
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   * @public
   */
  userSettings: UserSettings | undefined;
}
