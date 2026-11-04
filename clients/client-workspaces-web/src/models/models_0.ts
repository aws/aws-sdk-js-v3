// smithy-typescript generated code
import type {
  _InstanceType,
  AuthenticationType,
  BrowserType,
  Category,
  ColorTheme,
  EnabledType,
  Event,
  FolderStructure,
  IdentityProviderType,
  Locale,
  LogFileFormat,
  MaxDisplayResolution,
  MimeType,
  PortalStatus,
  RedactionPlaceHolderType,
  RendererType,
  SessionSortBy,
  SessionStatus,
  ToolbarItem,
  ToolbarType,
  VisualMode,
} from "./enums";

/**
 * @public
 */
export interface AssociateBrowserSettingsRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the browser settings.
   *
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateBrowserSettingsResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the browser settings.
   *
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * Information about a field passed inside a request that resulted in an exception.
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
   * The message describing why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AssociateDataProtectionSettingsRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the data protection settings.
   *
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDataProtectionSettingsResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the data protection settings resource.
   *
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpAccessSettingsRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the IP access settings.
   *
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpAccessSettingsResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the IP access settings resource.
   *
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateNetworkSettingsRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the network settings.
   *
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateNetworkSettingsResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the network settings.
   *
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateSessionLoggerRequest {
  /**
   * The ARN of the portal to associate to the session logger ARN.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the session logger to associate to the portal ARN.
   *
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateSessionLoggerResponse {
  /**
   * The ARN of the portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the session logger.
   *
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrustStoreRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrustStoreResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserAccessLoggingSettingsRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserAccessLoggingSettingsResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserSettingsRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the user settings.
   *
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserSettingsResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The ARN of the user settings.
   *
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * The tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.
 *
 * @public
 */
export interface WebContentFilteringPolicy {
  /**
   * Categories of websites that are blocked on the end user’s browsers.
   *
   * @public
   */
  blockedCategories?: Category[] | undefined;

  /**
   * URLs and domains that are always accessible to end users.
   *
   * @public
   */
  allowedUrls?: string[] | undefined;

  /**
   * URLs and domains that end users cannot access.
   *
   * @public
   */
  blockedUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateBrowserSettingsRequest {
  /**
   * The tags to add to the browser settings resource. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The custom managed key of the browser settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * Additional encryption context of the browser settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
   *
   * @public
   */
  browserPolicy?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.
   *
   * @public
   */
  webContentFilteringPolicy?: WebContentFilteringPolicy | undefined;
}

/**
 * @public
 */
export interface CreateBrowserSettingsResponse {
  /**
   * The ARN of the browser settings.
   *
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserSettingsRequest {
  /**
   * The ARN of the browser settings.
   *
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
   * The ARN of the browser settings.
   *
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * The browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.
 *
 * @public
 */
export interface BrowserSettings {
  /**
   * The ARN of the browser settings.
   *
   * @public
   */
  browserSettingsArn: string | undefined;

  /**
   * A list of web portal ARNs that this browser settings is associated with.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
   *
   * @public
   */
  browserPolicy?: string | undefined;

  /**
   * The customer managed key used to encrypt sensitive information in the browser settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the browser settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.
   *
   * @public
   */
  webContentFilteringPolicy?: WebContentFilteringPolicy | undefined;
}

/**
 * @public
 */
export interface GetBrowserSettingsResponse {
  /**
   * The browser settings.
   *
   * @public
   */
  browserSettings?: BrowserSettings | undefined;
}

/**
 * @public
 */
export interface ListBrowserSettingsRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary for browser settings.
 *
 * @public
 */
export interface BrowserSettingsSummary {
  /**
   * The ARN of the browser settings.
   *
   * @public
   */
  browserSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface ListBrowserSettingsResponse {
  /**
   * The browser settings.
   *
   * @public
   */
  browserSettings?: BrowserSettingsSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrowserSettingsRequest {
  /**
   * The ARN of the browser settings.
   *
   * @public
   */
  browserSettingsArn: string | undefined;

  /**
   * A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
   *
   * @public
   */
  browserPolicy?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.
   *
   * @public
   */
  webContentFilteringPolicy?: WebContentFilteringPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateBrowserSettingsResponse {
  /**
   * The browser settings.
   *
   * @public
   */
  browserSettings: BrowserSettings | undefined;
}

/**
 * The pattern configuration for redacting custom data types in session.
 *
 * @public
 */
export interface CustomPattern {
  /**
   * The pattern name for the custom pattern.
   *
   * @public
   */
  patternName: string | undefined;

  /**
   * The pattern regex for the customer pattern. The format must follow JavaScript regex format. The pattern must be enclosed between slashes, and can have flags behind the second slash. For example: “/ab+c/gi”.
   *
   * @public
   */
  patternRegex: string | undefined;

  /**
   * The pattern description for the customer pattern.
   *
   * @public
   */
  patternDescription?: string | undefined;

  /**
   * The keyword regex for the customer pattern. After there is a match to the pattern regex, the keyword regex is used to search within the proximity of the match. If there is a keyword match, then the match is confirmed. If no keyword regex is provided, the pattern regex match will automatically be confirmed. The format must follow JavaScript regex format. The pattern must be enclosed between slashes, and can have flags behind the second slash. For example, “/ab+c/gi”
   *
   * @public
   */
  keywordRegex?: string | undefined;
}

/**
 * The redaction placeholder that will replace the redacted text in session.
 *
 * @public
 */
export interface RedactionPlaceHolder {
  /**
   * The redaction placeholder type that will replace the redacted text in session.
   *
   * @public
   */
  redactionPlaceHolderType: RedactionPlaceHolderType | undefined;

  /**
   * The redaction placeholder text that will replace the redacted text in session for the custom text redaction placeholder type.
   *
   * @public
   */
  redactionPlaceHolderText?: string | undefined;
}

/**
 * The set of patterns that determine the data types redacted in session.
 *
 * @public
 */
export interface InlineRedactionPattern {
  /**
   * The built-in pattern from the list of preconfigured patterns. Either a customPattern or builtInPatternId is required.
   *
   * @public
   */
  builtInPatternId?: string | undefined;

  /**
   * &gt;The configuration for a custom pattern. Either a customPattern or builtInPatternId is required.
   *
   * @public
   */
  customPattern?: CustomPattern | undefined;

  /**
   * The redaction placeholder that will replace the redacted text in session for the inline redaction pattern.
   *
   * @public
   */
  redactionPlaceHolder: RedactionPlaceHolder | undefined;

  /**
   * The enforced URL configuration for the inline redaction pattern. This will override the global enforced URL configuration.
   *
   * @public
   */
  enforcedUrls?: string[] | undefined;

  /**
   * The exempt URL configuration for the inline redaction pattern. This will override the global exempt URL configuration for the inline redaction pattern.
   *
   * @public
   */
  exemptUrls?: string[] | undefined;

  /**
   * The confidence level for inline redaction pattern. This indicates the certainty of data type matches in the redaction process. Confidence level 3 means high confidence, and requires a formatted text pattern match in order for content to be redacted. Confidence level 2 means medium confidence, and redaction considers both formatted and unformatted text, and adds keyword associate to the logic. Confidence level 1 means low confidence, and redaction is enforced for both formatted pattern + unformatted pattern without keyword. This overrides the global confidence level.
   *
   * @public
   */
  confidenceLevel?: number | undefined;
}

/**
 * The configuration for in-session inline redaction.
 *
 * @public
 */
export interface InlineRedactionConfiguration {
  /**
   * The inline redaction patterns to be enabled for the inline redaction configuration.
   *
   * @public
   */
  inlineRedactionPatterns: InlineRedactionPattern[] | undefined;

  /**
   * The global enforced URL configuration for the inline redaction configuration. This is applied to patterns that do not have a pattern-level enforced URL list.
   *
   * @public
   */
  globalEnforcedUrls?: string[] | undefined;

  /**
   * The global exempt URL configuration for the inline redaction configuration. This is applied to patterns that do not have a pattern-level exempt URL list.
   *
   * @public
   */
  globalExemptUrls?: string[] | undefined;

  /**
   * The global confidence level for the inline redaction configuration. This indicates the certainty of data type matches in the redaction process. Confidence level 3 means high confidence, and requires a formatted text pattern match in order for content to be redacted. Confidence level 2 means medium confidence, and redaction considers both formatted and unformatted text, and adds keyword associate to the logic. Confidence level 1 means low confidence, and redaction is enforced for both formatted pattern + unformatted pattern without keyword. This is applied to patterns that do not have a pattern-level confidence level. Defaults to confidence level 2.
   *
   * @public
   */
  globalConfidenceLevel?: number | undefined;
}

/**
 * @public
 */
export interface CreateDataProtectionSettingsRequest {
  /**
   * The display name of the data protection settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the data protection settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags to add to the data protection settings resource. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The custom managed key of the data protection settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * Additional encryption context of the data protection settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The inline redaction configuration of the data protection settings that will be applied to all sessions.
   *
   * @public
   */
  inlineRedactionConfiguration?: InlineRedactionConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataProtectionSettingsResponse {
  /**
   * The ARN of the data protection settings resource.
   *
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataProtectionSettingsRequest {
  /**
   * The ARN of the data protection settings.
   *
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
   * The ARN of the data protection settings.
   *
   * @public
   */
  dataProtectionSettingsArn: string | undefined;
}

/**
 * The data protection settings resource that can be associated with a web portal.
 *
 * @public
 */
export interface DataProtectionSettings {
  /**
   * The ARN of the data protection settings resource.
   *
   * @public
   */
  dataProtectionSettingsArn: string | undefined;

  /**
   * The inline redaction configuration for the data protection settings.
   *
   * @public
   */
  inlineRedactionConfiguration?: InlineRedactionConfiguration | undefined;

  /**
   * A list of web portal ARNs that this data protection settings resource is associated with.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * The display name of the data protection settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the data protection settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The creation date timestamp of the data protection settings.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The customer managed key used to encrypt sensitive information in the data protection settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the data protection settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionSettingsResponse {
  /**
   * The data protection settings.
   *
   * @public
   */
  dataProtectionSettings?: DataProtectionSettings | undefined;
}

/**
 * @public
 */
export interface ListDataProtectionSettingsRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the data protection settings.
 *
 * @public
 */
export interface DataProtectionSettingsSummary {
  /**
   * The ARN of the data protection settings.
   *
   * @public
   */
  dataProtectionSettingsArn: string | undefined;

  /**
   * The display name of the data protection settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the data protection settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The creation date timestamp of the data protection settings.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataProtectionSettingsResponse {
  /**
   * The data protection settings.
   *
   * @public
   */
  dataProtectionSettings?: DataProtectionSettingsSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataProtectionSettingsRequest {
  /**
   * The ARN of the data protection settings.
   *
   * @public
   */
  dataProtectionSettingsArn: string | undefined;

  /**
   * The inline redaction configuration of the data protection settings that will be applied to all sessions.
   *
   * @public
   */
  inlineRedactionConfiguration?: InlineRedactionConfiguration | undefined;

  /**
   * The display name of the data protection settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the data protection settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataProtectionSettingsResponse {
  /**
   * The data protection settings.
   *
   * @public
   */
  dataProtectionSettings: DataProtectionSettings | undefined;
}

/**
 * @public
 */
export interface ExpireSessionRequest {
  /**
   * The ID of the web portal for the session.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * The ID of the session to expire.
   *
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
   * The ID of the web portal for the session.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * Information about a secure browser session.
 *
 * @public
 */
export interface Session {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn?: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The username of the session.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The IP address of the client.
   *
   * @public
   */
  clientIpAddresses?: string[] | undefined;

  /**
   * The status of the session.
   *
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * The start time of the session.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the session.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The sessions in a list.
   *
   * @public
   */
  session?: Session | undefined;
}

/**
 * @public
 */
export interface CreateIdentityProviderRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The identity provider name.
   *
   * @public
   */
  identityProviderName: string | undefined;

  /**
   * The identity provider type.
   *
   * @public
   */
  identityProviderType: IdentityProviderType | undefined;

  /**
   * The identity provider details. The following list describes the provider detail keys for each identity provider type.
   *
   * - For Google and Login with Amazon:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `authorize_scopes`
   * - For Facebook:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `authorize_scopes`
   *   - `api_version`
   * - For Sign in with Apple:
   *
   *   - `client_id`
   *   - `team_id`
   *   - `key_id`
   *   - `private_key`
   *   - `authorize_scopes`
   * - For OIDC providers:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `attributes_request_method`
   *   - `oidc_issuer`
   *   - `authorize_scopes`
   *   - `authorize_url` *if not available from discovery URL specified by `oidc_issuer` key*
   *   - `token_url` *if not available from discovery URL specified by `oidc_issuer` key*
   *   - `attributes_url` *if not available from discovery URL specified by `oidc_issuer` key*
   *   - `jwks_uri` *if not available from discovery URL specified by `oidc_issuer` key*
   * - For SAML providers:
   *
   *   - `MetadataFile` OR `MetadataURL`
   *   - `IDPSignout` (boolean) *optional*
   *   - `IDPInit` (boolean) *optional*
   *   - `RequestSigningAlgorithm` (string) *optional* - Only accepts `rsa-sha256`
   *   - `EncryptedResponses` (boolean) *optional*
   *
   * @public
   */
  identityProviderDetails: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to add to the identity provider resource. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIdentityProviderResponse {
  /**
   * The ARN of the identity provider.
   *
   * @public
   */
  identityProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderRequest {
  /**
   * The ARN of the identity provider.
   *
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
   * The ARN of the identity provider.
   *
   * @public
   */
  identityProviderArn: string | undefined;
}

/**
 * The identity provider.
 *
 * @public
 */
export interface IdentityProvider {
  /**
   * The ARN of the identity provider.
   *
   * @public
   */
  identityProviderArn: string | undefined;

  /**
   * The identity provider name.
   *
   * @public
   */
  identityProviderName?: string | undefined;

  /**
   * The identity provider type.
   *
   * @public
   */
  identityProviderType?: IdentityProviderType | undefined;

  /**
   * The identity provider details. The following list describes the provider detail keys for each identity provider type.
   *
   * - For Google and Login with Amazon:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `authorize_scopes`
   * - For Facebook:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `authorize_scopes`
   *   - `api_version`
   * - For Sign in with Apple:
   *
   *   - `client_id`
   *   - `team_id`
   *   - `key_id`
   *   - `private_key`
   *   - `authorize_scopes`
   * - For OIDC providers:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `attributes_request_method`
   *   - `oidc_issuer`
   *   - `authorize_scopes`
   *   - `authorize_url` *if not available from discovery URL specified by oidc_issuer key*
   *   - `token_url` *if not available from discovery URL specified by oidc_issuer key*
   *   - `attributes_url` *if not available from discovery URL specified by oidc_issuer key*
   *   - `jwks_uri` *if not available from discovery URL specified by oidc_issuer key*
   * - For SAML providers:
   *
   *   - `MetadataFile` OR `MetadataURL`
   *   - `IDPSignout` (boolean) *optional*
   *   - `IDPInit` (boolean) *optional*
   *   - `RequestSigningAlgorithm` (string) *optional* - Only accepts `rsa-sha256`
   *   - `EncryptedResponses` (boolean) *optional*
   *
   * @public
   */
  identityProviderDetails?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderResponse {
  /**
   * The identity provider.
   *
   * @public
   */
  identityProvider?: IdentityProvider | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;
}

/**
 * The summary of the identity provider.
 *
 * @public
 */
export interface IdentityProviderSummary {
  /**
   * The ARN of the identity provider.
   *
   * @public
   */
  identityProviderArn: string | undefined;

  /**
   * The identity provider name.
   *
   * @public
   */
  identityProviderName?: string | undefined;

  /**
   * The identity provider type.
   *
   * @public
   */
  identityProviderType?: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The identity providers.
   *
   * @public
   */
  identityProviders?: IdentityProviderSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderRequest {
  /**
   * The ARN of the identity provider.
   *
   * @public
   */
  identityProviderArn: string | undefined;

  /**
   * The name of the identity provider.
   *
   * @public
   */
  identityProviderName?: string | undefined;

  /**
   * The type of the identity provider.
   *
   * @public
   */
  identityProviderType?: IdentityProviderType | undefined;

  /**
   * The details of the identity provider. The following list describes the provider detail keys for each identity provider type.
   *
   * - For Google and Login with Amazon:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `authorize_scopes`
   * - For Facebook:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `authorize_scopes`
   *   - `api_version`
   * - For Sign in with Apple:
   *
   *   - `client_id`
   *   - `team_id`
   *   - `key_id`
   *   - `private_key`
   *   - `authorize_scopes`
   * - For OIDC providers:
   *
   *   - `client_id`
   *   - `client_secret`
   *   - `attributes_request_method`
   *   - `oidc_issuer`
   *   - `authorize_scopes`
   *   - `authorize_url` *if not available from discovery URL specified by `oidc_issuer` key*
   *   - `token_url` *if not available from discovery URL specified by `oidc_issuer` key*
   *   - `attributes_url` *if not available from discovery URL specified by `oidc_issuer` key*
   *   - `jwks_uri` *if not available from discovery URL specified by `oidc_issuer` key*
   * - For SAML providers:
   *
   *   - `MetadataFile` OR `MetadataURL`
   *   - `IDPSignout` (boolean) *optional*
   *   - `IDPInit` (boolean) *optional*
   *   - `RequestSigningAlgorithm` (string) *optional* - Only accepts `rsa-sha256`
   *   - `EncryptedResponses` (boolean) *optional*
   *
   * @public
   */
  identityProviderDetails?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderResponse {
  /**
   * The identity provider.
   *
   * @public
   */
  identityProvider: IdentityProvider | undefined;
}

/**
 * The IP rules of the IP access settings.
 *
 * @public
 */
export interface IpRule {
  /**
   * The IP range of the IP rule.
   *
   * @public
   */
  ipRange: string | undefined;

  /**
   * The description of the IP rule.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpAccessSettingsRequest {
  /**
   * The display name of the IP access settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the IP access settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags to add to the IP access settings resource. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The custom managed key of the IP access settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * Additional encryption context of the IP access settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The IP rules of the IP access settings.
   *
   * @public
   */
  ipRules: IpRule[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpAccessSettingsResponse {
  /**
   * The ARN of the IP access settings resource.
   *
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpAccessSettingsRequest {
  /**
   * The ARN of the IP access settings.
   *
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
   * The ARN of the IP access settings.
   *
   * @public
   */
  ipAccessSettingsArn: string | undefined;
}

/**
 * The IP access settings resource that can be associated with a web portal.
 *
 * @public
 */
export interface IpAccessSettings {
  /**
   * The ARN of the IP access settings resource.
   *
   * @public
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * A list of web portal ARNs that this IP access settings resource is associated with.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * The IP rules of the IP access settings.
   *
   * @public
   */
  ipRules?: IpRule[] | undefined;

  /**
   * The display name of the IP access settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the IP access settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The creation date timestamp of the IP access settings.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The customer managed key used to encrypt sensitive information in the IP access settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the IP access settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIpAccessSettingsResponse {
  /**
   * The IP access settings.
   *
   * @public
   */
  ipAccessSettings?: IpAccessSettings | undefined;
}

/**
 * @public
 */
export interface ListIpAccessSettingsRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of IP access settings.
 *
 * @public
 */
export interface IpAccessSettingsSummary {
  /**
   * The ARN of IP access settings.
   *
   * @public
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * The display name of the IP access settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the IP access settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The creation date timestamp of the IP access settings.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListIpAccessSettingsResponse {
  /**
   * The IP access settings.
   *
   * @public
   */
  ipAccessSettings?: IpAccessSettingsSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIpAccessSettingsRequest {
  /**
   * The ARN of the IP access settings.
   *
   * @public
   */
  ipAccessSettingsArn: string | undefined;

  /**
   * The display name of the IP access settings.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the IP access settings.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated IP rules of the IP access settings.
   *
   * @public
   */
  ipRules?: IpRule[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIpAccessSettingsResponse {
  /**
   * The IP access settings.
   *
   * @public
   */
  ipAccessSettings: IpAccessSettings | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * The ID of the web portal for the sessions.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * The username of the session.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The method in which the returned sessions should be sorted.
   *
   * @public
   */
  sortBy?: SessionSortBy | undefined;

  /**
   * The status of the session.
   *
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a secure browser session.
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn?: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The username of the session.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The status of the session.
   *
   * @public
   */
  status?: SessionStatus | undefined;

  /**
   * The start time of the session.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the session.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * The sessions in a list.
   *
   * @public
   */
  sessions: SessionSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
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
   * The ARN of the resource.
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
   * The tags of the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateNetworkSettingsRequest {
  /**
   * The VPC that streaming instances will connect to.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * One or more security groups used to control access from streaming instances to your VPC.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * The tags to add to the network settings resource. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkSettingsResponse {
  /**
   * The ARN of the network settings.
   *
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkSettingsRequest {
  /**
   * The ARN of the network settings.
   *
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
   * The ARN of the network settings.
   *
   * @public
   */
  networkSettingsArn: string | undefined;
}

/**
 * A network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
 *
 * @public
 */
export interface NetworkSettings {
  /**
   * The ARN of the network settings.
   *
   * @public
   */
  networkSettingsArn: string | undefined;

  /**
   * A list of web portal ARNs that this network settings is associated with.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * The VPC that streaming instances will connect to.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * One or more security groups used to control access from streaming instances to your VPC.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetNetworkSettingsResponse {
  /**
   * The network settings.
   *
   * @public
   */
  networkSettings?: NetworkSettings | undefined;
}

/**
 * @public
 */
export interface ListNetworkSettingsRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of network settings.
 *
 * @public
 */
export interface NetworkSettingsSummary {
  /**
   * The ARN of the network settings.
   *
   * @public
   */
  networkSettingsArn: string | undefined;

  /**
   * The VPC ID of the network settings.
   *
   * @public
   */
  vpcId?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkSettingsResponse {
  /**
   * The network settings.
   *
   * @public
   */
  networkSettings?: NetworkSettingsSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsRequest {
  /**
   * The ARN of the network settings.
   *
   * @public
   */
  networkSettingsArn: string | undefined;

  /**
   * The VPC that streaming instances will connect to.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * One or more security groups used to control access from streaming instances to your VPC.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsResponse {
  /**
   * The network settings.
   *
   * @public
   */
  networkSettings: NetworkSettings | undefined;
}

/**
 * @public
 */
export interface CreatePortalRequest {
  /**
   * The name of the web portal. This is not visible to users who log into the web portal.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The tags to add to the web portal. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The customer managed key of the web portal.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the portal.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The type of authentication integration points used when signing into the web portal. Defaults to `Standard`.
   *
   * `Standard` web portals are authenticated directly through your identity provider. You need to call `CreateIdentityProvider` to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.
   *
   * `IAM Identity Center` web portals are authenticated through IAM Identity Center. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The type and resources of the underlying instance.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The maximum number of concurrent sessions for the portal.
   *
   * @public
   */
  maxConcurrentSessions?: number | undefined;

  /**
   * The custom domain of the web portal that users access in order to start streaming sessions.
   *
   * @public
   */
  portalCustomDomain?: string | undefined;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The endpoint URL of the web portal that users access in order to start streaming sessions.
   *
   * @public
   */
  portalEndpoint: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * The ARN of the web portal.
   *
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
   * The ARN of the web portal.
   *
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
   * The ARN of the web portal.
   *
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
   * The ARN of the web portal.
   *
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
   * The ARN of the web portal.
   *
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
   * The ARN of the portal to disassociate from the a session logger.
   *
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
   * The ARN of the web portal.
   *
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
   * The ARN of the web portal.
   *
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
   * The ARN of the web portal.
   *
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
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;
}

/**
 * The web portal.
 *
 * @public
 */
export interface Portal {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The renderer that is used in streaming sessions.
   *
   * @public
   */
  rendererType?: RendererType | undefined;

  /**
   * The browser that users see when using a streaming session.
   *
   * @public
   */
  browserType?: BrowserType | undefined;

  /**
   * The status of the web portal.
   *
   * @public
   */
  portalStatus?: PortalStatus | undefined;

  /**
   * The endpoint URL of the web portal that users access in order to start streaming sessions.
   *
   * @public
   */
  portalEndpoint?: string | undefined;

  /**
   * The name of the web portal.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The creation date of the web portal.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The ARN of the browser settings that is associated with this web portal.
   *
   * @public
   */
  browserSettingsArn?: string | undefined;

  /**
   * The ARN of the data protection settings.
   *
   * @public
   */
  dataProtectionSettingsArn?: string | undefined;

  /**
   * The ARN of the user settings that is associated with the web portal.
   *
   * @public
   */
  userSettingsArn?: string | undefined;

  /**
   * The ARN of the network settings that is associated with the web portal.
   *
   * @public
   */
  networkSettingsArn?: string | undefined;

  /**
   * The ARN of the session logger that is assocaited with the portal.
   *
   * @public
   */
  sessionLoggerArn?: string | undefined;

  /**
   * The ARN of the trust store that is associated with the web portal.
   *
   * @public
   */
  trustStoreArn?: string | undefined;

  /**
   * A message that explains why the web portal is in its current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The ARN of the user access logging settings that is associated with the web portal.
   *
   * @public
   */
  userAccessLoggingSettingsArn?: string | undefined;

  /**
   * The type of authentication integration points used when signing into the web portal. Defaults to `Standard`.
   *
   * `Standard` web portals are authenticated directly through your identity provider. You need to call `CreateIdentityProvider` to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.
   *
   * `IAM Identity Center` web portals are authenticated through IAM Identity Center. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The ARN of the IP access settings.
   *
   * @public
   */
  ipAccessSettingsArn?: string | undefined;

  /**
   * The customer managed key used to encrypt sensitive information in the portal.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the portal.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The type and resources of the underlying instance.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The maximum number of concurrent sessions for the portal.
   *
   * @public
   */
  maxConcurrentSessions?: number | undefined;

  /**
   * The custom domain of the web portal that users access in order to start streaming sessions.
   *
   * @public
   */
  portalCustomDomain?: string | undefined;
}

/**
 * @public
 */
export interface GetPortalResponse {
  /**
   * The web portal.
   *
   * @public
   */
  portal?: Portal | undefined;
}

/**
 * @public
 */
export interface GetPortalServiceProviderMetadataRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;
}

/**
 * @public
 */
export interface GetPortalServiceProviderMetadataResponse {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The service provider SAML metadata.
   *
   * @public
   */
  serviceProviderSamlMetadata?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the portal.
 *
 * @public
 */
export interface PortalSummary {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The renderer that is used in streaming sessions.
   *
   * @public
   */
  rendererType?: RendererType | undefined;

  /**
   * The browser type of the web portal.
   *
   * @public
   */
  browserType?: BrowserType | undefined;

  /**
   * The status of the web portal.
   *
   * @public
   */
  portalStatus?: PortalStatus | undefined;

  /**
   * The endpoint URL of the web portal that users access in order to start streaming sessions.
   *
   * @public
   */
  portalEndpoint?: string | undefined;

  /**
   * The name of the web portal.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The creation date of the web portal.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The ARN of the browser settings that is associated with the web portal.
   *
   * @public
   */
  browserSettingsArn?: string | undefined;

  /**
   * The ARN of the data protection settings.
   *
   * @public
   */
  dataProtectionSettingsArn?: string | undefined;

  /**
   * The ARN of the user settings that is associated with the web portal.
   *
   * @public
   */
  userSettingsArn?: string | undefined;

  /**
   * The ARN of the network settings that is associated with the web portal.
   *
   * @public
   */
  networkSettingsArn?: string | undefined;

  /**
   * The ARN of the session logger that is assocaited with the portal.
   *
   * @public
   */
  sessionLoggerArn?: string | undefined;

  /**
   * The ARN of the trust that is associated with this web portal.
   *
   * @public
   */
  trustStoreArn?: string | undefined;

  /**
   * The ARN of the user access logging settings that is associated with the web portal.
   *
   * @public
   */
  userAccessLoggingSettingsArn?: string | undefined;

  /**
   * The type of authentication integration points used when signing into the web portal. Defaults to `Standard`.
   *
   * `Standard` web portals are authenticated directly through your identity provider. You need to call `CreateIdentityProvider` to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.
   *
   * `IAM Identity Center` web portals are authenticated through IAM Identity Center. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The ARN of the IP access settings.
   *
   * @public
   */
  ipAccessSettingsArn?: string | undefined;

  /**
   * The type and resources of the underlying instance.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The maximum number of concurrent sessions for the portal.
   *
   * @public
   */
  maxConcurrentSessions?: number | undefined;

  /**
   * The custom domain of the web portal that users access in order to start streaming sessions.
   *
   * @public
   */
  portalCustomDomain?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * The portals in the list.
   *
   * @public
   */
  portals?: PortalSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * The ARN of the web portal.
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The name of the web portal. This is not visible to users who log into the web portal.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The type of authentication integration points used when signing into the web portal. Defaults to `Standard`.
   *
   * `Standard` web portals are authenticated directly through your identity provider. You need to call `CreateIdentityProvider` to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider.
   *
   * `IAM Identity Center` web portals are authenticated through IAM Identity Center. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center.
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * The type and resources of the underlying instance.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The maximum number of concurrent sessions for the portal.
   *
   * @public
   */
  maxConcurrentSessions?: number | undefined;

  /**
   * The custom domain of the web portal that users access in order to start streaming sessions.
   *
   * @public
   */
  portalCustomDomain?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * The web portal.
   *
   * @public
   */
  portal?: Portal | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * The filter that specifies the events to monitor.
 *
 * @public
 */
export type EventFilter =
  | EventFilter.AllMember
  | EventFilter.IncludeMember
  | EventFilter.$UnknownMember;

/**
 * @public
 */
export namespace EventFilter {
  /**
   * The filter that monitors all of the available events, including any new events emitted in the future.
   *
   * @public
   */
  export interface AllMember {
    all: Unit;
    include?: never;
    $unknown?: never;
  }

  /**
   * The filter that monitors only the listed set of events. New events are not auto-monitored.
   *
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
 * The S3 log configuration.
 *
 * @public
 */
export interface S3LogConfiguration {
  /**
   * The S3 bucket name where logs are delivered.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The S3 path prefix that determines where log files are stored.
   *
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * The expected bucket owner of the target S3 bucket. The caller must have permissions to write to the target bucket.
   *
   * @public
   */
  bucketOwner?: string | undefined;

  /**
   * The format of the LogFile that is written to S3.
   *
   * @public
   */
  logFileFormat: LogFileFormat | undefined;

  /**
   * The folder structure that defines the organizational structure for log files in S3.
   *
   * @public
   */
  folderStructure: FolderStructure | undefined;
}

/**
 * The configuration of the log.
 *
 * @public
 */
export interface LogConfiguration {
  /**
   * The configuration for delivering the logs to S3.
   *
   * @public
   */
  s3?: S3LogConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSessionLoggerRequest {
  /**
   * The filter that specifies the events to monitor.
   *
   * @public
   */
  eventFilter: EventFilter | undefined;

  /**
   * The configuration that specifies where logs are delivered.
   *
   * @public
   */
  logConfiguration: LogConfiguration | undefined;

  /**
   * The human-readable display name for the session logger resource.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The custom managed key of the session logger.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the session logger.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The tags to add to the session logger.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request. If you do not specify a client token, one is automatically generated by the AWS SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionLoggerResponse {
  /**
   * The ARN of the session logger.
   *
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionLoggerRequest {
  /**
   * The ARN of the session logger.
   *
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
   * The ARN of the session logger.
   *
   * @public
   */
  sessionLoggerArn: string | undefined;
}

/**
 * The session logger resource.
 *
 * @public
 */
export interface SessionLogger {
  /**
   * The ARN of the session logger resource.
   *
   * @public
   */
  sessionLoggerArn: string | undefined;

  /**
   * The filter that specifies which events to monitor.
   *
   * @public
   */
  eventFilter?: EventFilter | undefined;

  /**
   * The configuration that specifies where logs are fowarded.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The custom managed key of the session logger.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the session logger.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The associated portal ARN.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * The human-readable display name.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The date the session logger resource was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionLoggerResponse {
  /**
   * The session logger details.
   *
   * @public
   */
  sessionLogger?: SessionLogger | undefined;
}

/**
 * @public
 */
export interface ListSessionLoggersRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the session logger resource.
 *
 * @public
 */
export interface SessionLoggerSummary {
  /**
   * The ARN of the session logger resource.
   *
   * @public
   */
  sessionLoggerArn: string | undefined;

  /**
   * The configuration that specifies where the logs are fowarded.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The human-readable display name.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The date the session logger resource was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionLoggersResponse {
  /**
   * The list of session loggers, including summaries of their details.
   *
   * @public
   */
  sessionLoggers?: SessionLoggerSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionLoggerRequest {
  /**
   * The ARN of the session logger to update.
   *
   * @public
   */
  sessionLoggerArn: string | undefined;

  /**
   * The updated eventFilter.
   *
   * @public
   */
  eventFilter?: EventFilter | undefined;

  /**
   * The updated logConfiguration.
   *
   * @public
   */
  logConfiguration?: LogConfiguration | undefined;

  /**
   * The updated display name.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionLoggerResponse {
  /**
   * The updated details of the session logger.
   *
   * @public
   */
  sessionLogger: SessionLogger | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags of the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * The summary of the certificate.
 *
 * @public
 */
export interface CertificateSummary {
  /**
   * A hexadecimal identifier for the certificate.
   *
   * @public
   */
  thumbprint?: string | undefined;

  /**
   * The entity the certificate belongs to.
   *
   * @public
   */
  subject?: string | undefined;

  /**
   * The entity that issued the certificate.
   *
   * @public
   */
  issuer?: string | undefined;

  /**
   * The certificate is not valid before this date.
   *
   * @public
   */
  notValidBefore?: Date | undefined;

  /**
   * The certificate is not valid after this date.
   *
   * @public
   */
  notValidAfter?: Date | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreRequest {
  /**
   * A list of CA certificates to be added to the trust store.
   *
   * @public
   */
  certificateList: Uint8Array[] | undefined;

  /**
   * The tags to add to the trust store. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreResponse {
  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustStoreRequest {
  /**
   * The ARN of the trust store.
   *
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
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * A trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.
 *
 * @public
 */
export interface TrustStore {
  /**
   * A list of web portal ARNs that this trust store is associated with.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreResponse {
  /**
   * The trust store.
   *
   * @public
   */
  trustStore?: TrustStore | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreCertificateRequest {
  /**
   * The ARN of the trust store certificate.
   *
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * The thumbprint of the trust store certificate.
   *
   * @public
   */
  thumbprint: string | undefined;
}

/**
 * The certificate.
 *
 * @public
 */
export interface Certificate {
  /**
   * A hexadecimal identifier for the certificate.
   *
   * @public
   */
  thumbprint?: string | undefined;

  /**
   * The entity the certificate belongs to.
   *
   * @public
   */
  subject?: string | undefined;

  /**
   * The entity that issued the certificate.
   *
   * @public
   */
  issuer?: string | undefined;

  /**
   * The certificate is not valid before this date.
   *
   * @public
   */
  notValidBefore?: Date | undefined;

  /**
   * The certificate is not valid after this date.
   *
   * @public
   */
  notValidAfter?: Date | undefined;

  /**
   * The body of the certificate.
   *
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreCertificateResponse {
  /**
   * The ARN of the trust store certificate.
   *
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * The certificate of the trust store certificate.
   *
   * @public
   */
  certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface ListTrustStoreCertificatesRequest {
  /**
   * The ARN of the trust store
   *
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTrustStoreCertificatesResponse {
  /**
   * The certificate list.
   *
   * @public
   */
  certificateList?: CertificateSummary[] | undefined;

  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.&gt;
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the trust store.
 *
 * @public
 */
export interface TrustStoreSummary {
  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresResponse {
  /**
   * The trust stores.
   *
   * @public
   */
  trustStores?: TrustStoreSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreRequest {
  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;

  /**
   * A list of CA certificates to add to the trust store.
   *
   * @public
   */
  certificatesToAdd?: Uint8Array[] | undefined;

  /**
   * A list of CA certificates to delete from a trust store.
   *
   * @public
   */
  certificatesToDelete?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreResponse {
  /**
   * The ARN of the trust store.
   *
   * @public
   */
  trustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
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
   * The ARN of the Kinesis stream.
   *
   * @public
   */
  kinesisStreamArn: string | undefined;

  /**
   * The tags to add to the user settings resource. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserAccessLoggingSettingsResponse {
  /**
   * The ARN of the user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserAccessLoggingSettingsRequest {
  /**
   * The ARN of the user access logging settings.
   *
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
   * The ARN of the user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;
}

/**
 * A user access logging settings resource that can be associated with a web portal.
 *
 * @public
 */
export interface UserAccessLoggingSettings {
  /**
   * The ARN of the user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * A list of web portal ARNs that this user access logging settings is associated with.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * The ARN of the Kinesis stream.
   *
   * @public
   */
  kinesisStreamArn?: string | undefined;
}

/**
 * @public
 */
export interface GetUserAccessLoggingSettingsResponse {
  /**
   * The user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettings?: UserAccessLoggingSettings | undefined;
}

/**
 * @public
 */
export interface ListUserAccessLoggingSettingsRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of user access logging settings.
 *
 * @public
 */
export interface UserAccessLoggingSettingsSummary {
  /**
   * The ARN of the user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * The ARN of the Kinesis stream.
   *
   * @public
   */
  kinesisStreamArn?: string | undefined;
}

/**
 * @public
 */
export interface ListUserAccessLoggingSettingsResponse {
  /**
   * The user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettings?: UserAccessLoggingSettingsSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserAccessLoggingSettingsRequest {
  /**
   * The ARN of the user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettingsArn: string | undefined;

  /**
   * The ARN of the Kinesis stream.
   *
   * @public
   */
  kinesisStreamArn?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserAccessLoggingSettingsResponse {
  /**
   * The user access logging settings.
   *
   * @public
   */
  userAccessLoggingSettings: UserAccessLoggingSettings | undefined;
}

/**
 * Metadata information about an uploaded image file.
 *
 * @public
 */
export interface ImageMetadata {
  /**
   * The MIME type of the image.
   *
   * @public
   */
  mimeType: MimeType | undefined;

  /**
   * The file extension of the image.
   *
   * @public
   */
  fileExtension: string | undefined;

  /**
   * The timestamp when the image was last uploaded.
   *
   * @public
   */
  lastUploadTimestamp: Date | undefined;
}

/**
 * Localized text strings for a specific language that customize the web portal.
 *
 * @public
 */
export interface LocalizedBrandingStrings {
  /**
   * The text displayed in the browser tab title.
   *
   * @public
   */
  browserTabTitle: string | undefined;

  /**
   * The welcome text displayed on the sign-in page.
   *
   * @public
   */
  welcomeText: string | undefined;

  /**
   * The title text for the login section. This field is optional and defaults to "Sign In".
   *
   * @public
   */
  loginTitle?: string | undefined;

  /**
   * The description text for the login section. This field is optional and defaults to "Sign in to your session".
   *
   * @public
   */
  loginDescription?: string | undefined;

  /**
   * The text displayed on the login button. This field is optional and defaults to "Sign In".
   *
   * @public
   */
  loginButtonText?: string | undefined;

  /**
   * A contact link URL. The URL must start with `https://` or `mailto:`. If not provided, the contact button will be hidden from the web portal screen.
   *
   * @public
   */
  contactLink?: string | undefined;

  /**
   * The text displayed on the contact button. This field is optional and defaults to "Contact us".
   *
   * @public
   */
  contactButtonText?: string | undefined;

  /**
   * The text displayed during session loading. This field is optional and defaults to "Loading your session".
   *
   * @public
   */
  loadingText?: string | undefined;
}

/**
 * The branding configuration output including custom images metadata, localized strings, color theme, and terms of service.
 *
 * @public
 */
export interface BrandingConfiguration {
  /**
   * Metadata for the logo image file, including the MIME type, file extension, and upload timestamp.
   *
   * @public
   */
  logo: ImageMetadata | undefined;

  /**
   * Metadata for the wallpaper image file, including the MIME type, file extension, and upload timestamp.
   *
   * @public
   */
  wallpaper?: ImageMetadata | undefined;

  /**
   * Metadata for the favicon image file, including the MIME type, file extension, and upload timestamp.
   *
   * @public
   */
  favicon: ImageMetadata | undefined;

  /**
   * A map of localized text strings for different languages, allowing the portal to display content in the user's preferred language.
   *
   * @public
   */
  localizedStrings: Partial<Record<Locale, LocalizedBrandingStrings>> | undefined;

  /**
   * The color theme for components on the web portal.
   *
   * @public
   */
  colorTheme: ColorTheme | undefined;

  /**
   * The terms of service text in Markdown format that users must accept before accessing the portal.
   *
   * @public
   */
  termsOfService?: string | undefined;
}

/**
 * Specifies a single cookie or set of cookies in an end user's browser.
 *
 * @public
 */
export interface CookieSpecification {
  /**
   * The domain of the cookie.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The name of the cookie.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The path of the cookie.
   *
   * @public
   */
  path?: string | undefined;
}

/**
 * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
 *
 * @public
 */
export interface CookieSynchronizationConfiguration {
  /**
   * The list of cookie specifications that are allowed to be synchronized to the remote browser.
   *
   * @public
   */
  allowlist: CookieSpecification[] | undefined;

  /**
   * The list of cookie specifications that are blocked from being synchronized to the remote browser.
   *
   * @public
   */
  blocklist?: CookieSpecification[] | undefined;
}

/**
 * The input for an icon image (logo or favicon). Provide either a binary image file or an S3 URI pointing to the image file. Maximum 100 KB in JPEG, PNG, or ICO format.
 *
 * @public
 */
export type IconImageInput =
  | IconImageInput.BlobMember
  | IconImageInput.S3UriMember
  | IconImageInput.$UnknownMember;

/**
 * @public
 */
export namespace IconImageInput {
  /**
   * The image provided as a binary image file.
   *
   * @public
   */
  export interface BlobMember {
    blob: Uint8Array;
    s3Uri?: never;
    $unknown?: never;
  }

  /**
   * The S3 URI pointing to the image file. The URI must use the format `s3://bucket-name/key-name`. You must have read access to the S3 object.
   *
   * @public
   */
  export interface S3UriMember {
    blob?: never;
    s3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    blob?: never;
    s3Uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    blob: (value: Uint8Array) => T;
    s3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The input for a wallpaper image. Provide the image as either a binary image file or an S3 URI. Maximum 5 MB in JPEG or PNG format.
 *
 * @public
 */
export type WallpaperImageInput =
  | WallpaperImageInput.BlobMember
  | WallpaperImageInput.S3UriMember
  | WallpaperImageInput.$UnknownMember;

/**
 * @public
 */
export namespace WallpaperImageInput {
  /**
   * The image provided as a binary image file.
   *
   * @public
   */
  export interface BlobMember {
    blob: Uint8Array;
    s3Uri?: never;
    $unknown?: never;
  }

  /**
   * The S3 URI pointing to the image file. The URI must use the format `s3://bucket-name/key-name`. You must have read access to the S3 object.
   *
   * @public
   */
  export interface S3UriMember {
    blob?: never;
    s3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    blob?: never;
    s3Uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    blob: (value: Uint8Array) => T;
    s3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The input configuration for creating branding settings.
 *
 * @public
 */
export interface BrandingConfigurationCreateInput {
  /**
   * The logo image for the portal. Provide either a binary image file or an S3 URI pointing to the image file. Maximum 100 KB in JPEG, PNG, or ICO format.
   *
   * @public
   */
  logo: IconImageInput | undefined;

  /**
   * The wallpaper image for the portal. Provide either a binary image file or an S3 URI pointing to the image file. Maximum 5 MB in JPEG or PNG format. If not provided, a default wallpaper will be used as the background image.
   *
   * @public
   */
  wallpaper?: WallpaperImageInput | undefined;

  /**
   * The favicon image for the portal. Provide either a binary image file or an S3 URI pointing to the image file. Maximum 100 KB in JPEG, PNG, or ICO format.
   *
   * @public
   */
  favicon: IconImageInput | undefined;

  /**
   * A map of localized text strings for different supported languages. Each locale must provide the required fields `browserTabTitle` and `welcomeText`.
   *
   * @public
   */
  localizedStrings: Partial<Record<Locale, LocalizedBrandingStrings>> | undefined;

  /**
   * The color theme for components on the web portal. Choose `Light` if you upload a dark wallpaper, or `Dark` for a light wallpaper.
   *
   * @public
   */
  colorTheme: ColorTheme | undefined;

  /**
   * The terms of service text in Markdown format. Users will be presented with the terms of service after successfully signing in.
   *
   * @public
   */
  termsOfService?: string | undefined;
}

/**
 * The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.
 *
 * @public
 */
export interface ToolbarConfiguration {
  /**
   * The type of toolbar displayed during the session.
   *
   * @public
   */
  toolbarType?: ToolbarType | undefined;

  /**
   * The visual mode of the toolbar.
   *
   * @public
   */
  visualMode?: VisualMode | undefined;

  /**
   * The list of toolbar items to be hidden.
   *
   * @public
   */
  hiddenToolbarItems?: ToolbarItem[] | undefined;

  /**
   * The maximum display resolution that is allowed for the session.
   *
   * @public
   */
  maxDisplayResolution?: MaxDisplayResolution | undefined;
}

/**
 * @public
 */
export interface CreateUserSettingsRequest {
  /**
   * Specifies whether the user can copy text from the streaming session to the local device.
   *
   * @public
   */
  copyAllowed: EnabledType | undefined;

  /**
   * Specifies whether the user can paste text from the local device to the streaming session.
   *
   * @public
   */
  pasteAllowed: EnabledType | undefined;

  /**
   * Specifies whether the user can download files from the streaming session to the local device.
   *
   * @public
   */
  downloadAllowed: EnabledType | undefined;

  /**
   * Specifies whether the user can upload files from the local device to the streaming session.
   *
   * @public
   */
  uploadAllowed: EnabledType | undefined;

  /**
   * Specifies whether the user can print to the local device.
   *
   * @public
   */
  printAllowed: EnabledType | undefined;

  /**
   * The tags to add to the user settings resource. A tag is a key-value pair.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The amount of time that a streaming session remains active after users disconnect.
   *
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
   *
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
   *
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * The customer managed key used to encrypt sensitive information in the user settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the user settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * Specifies whether the user can use deep links that open automatically when connecting to a session.
   *
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.
   *
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;

  /**
   * The branding configuration input that customizes the appearance of the web portal for end users. This includes a custom logo, favicon, localized strings, color theme, and optionally a wallpaper and terms of service.
   *
   * @public
   */
  brandingConfigurationInput?: BrandingConfigurationCreateInput | undefined;

  /**
   * Specifies whether the user can use WebAuthn redirection for passwordless login to websites within the streaming session.
   *
   * @public
   */
  webAuthnAllowed?: EnabledType | undefined;
}

/**
 * @public
 */
export interface CreateUserSettingsResponse {
  /**
   * The ARN of the user settings.
   *
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserSettingsRequest {
  /**
   * The ARN of the user settings.
   *
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
   * The ARN of the user settings.
   *
   * @public
   */
  userSettingsArn: string | undefined;
}

/**
 * A user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.
 *
 * @public
 */
export interface UserSettings {
  /**
   * The ARN of the user settings.
   *
   * @public
   */
  userSettingsArn: string | undefined;

  /**
   * A list of web portal ARNs that this user settings is associated with.
   *
   * @public
   */
  associatedPortalArns?: string[] | undefined;

  /**
   * Specifies whether the user can copy text from the streaming session to the local device.
   *
   * @public
   */
  copyAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can paste text from the local device to the streaming session.
   *
   * @public
   */
  pasteAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can download files from the streaming session to the local device.
   *
   * @public
   */
  downloadAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can upload files from the local device to the streaming session.
   *
   * @public
   */
  uploadAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can print to the local device.
   *
   * @public
   */
  printAllowed?: EnabledType | undefined;

  /**
   * The amount of time that a streaming session remains active after users disconnect.
   *
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
   *
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
   *
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * The customer managed key used to encrypt sensitive information in the user settings.
   *
   * @public
   */
  customerManagedKey?: string | undefined;

  /**
   * The additional encryption context of the user settings.
   *
   * @public
   */
  additionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * Specifies whether the user can use deep links that open automatically when connecting to a session.
   *
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.
   *
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;

  /**
   * The branding configuration output that customizes the appearance of the web portal for end users.
   *
   * @public
   */
  brandingConfiguration?: BrandingConfiguration | undefined;

  /**
   * Specifies whether the user can use WebAuthn redirection for passwordless login to websites within the streaming session.
   *
   * @public
   */
  webAuthnAllowed?: EnabledType | undefined;
}

/**
 * @public
 */
export interface GetUserSettingsResponse {
  /**
   * The user settings.
   *
   * @public
   */
  userSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface ListUserSettingsRequest {
  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of user settings.
 *
 * @public
 */
export interface UserSettingsSummary {
  /**
   * The ARN of the user settings.
   *
   * @public
   */
  userSettingsArn: string | undefined;

  /**
   * Specifies whether the user can copy text from the streaming session to the local device.
   *
   * @public
   */
  copyAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can paste text from the local device to the streaming session.
   *
   * @public
   */
  pasteAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can download files from the streaming session to the local device.
   *
   * @public
   */
  downloadAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can upload files from the local device to the streaming session.
   *
   * @public
   */
  uploadAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can print to the local device.
   *
   * @public
   */
  printAllowed?: EnabledType | undefined;

  /**
   * The amount of time that a streaming session remains active after users disconnect.
   *
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
   *
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
   *
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * Specifies whether the user can use deep links that open automatically when connecting to a session.
   *
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.
   *
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;

  /**
   * The branding configuration output that customizes the appearance of the web portal for end users.
   *
   * @public
   */
  brandingConfiguration?: BrandingConfiguration | undefined;

  /**
   * Specifies whether the user can use WebAuthn redirection for passwordless login to websites within the streaming session.
   *
   * @public
   */
  webAuthnAllowed?: EnabledType | undefined;
}

/**
 * @public
 */
export interface ListUserSettingsResponse {
  /**
   * The user settings.
   *
   * @public
   */
  userSettings?: UserSettingsSummary[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input configuration for updating branding settings. All fields are optional when updating existing branding.
 *
 * @public
 */
export interface BrandingConfigurationUpdateInput {
  /**
   * The logo image for the portal. Provide either a binary image file or an S3 URI pointing to the image file. Maximum 100 KB in JPEG, PNG, or ICO format.
   *
   * @public
   */
  logo?: IconImageInput | undefined;

  /**
   * The wallpaper image for the portal. Provide either a binary image file or an S3 URI pointing to the image file. Maximum 5 MB in JPEG or PNG format.
   *
   * @public
   */
  wallpaper?: WallpaperImageInput | undefined;

  /**
   * The favicon image for the portal. Provide either a binary image file or an S3 URI pointing to the image file. Maximum 100 KB in JPEG, PNG, or ICO format.
   *
   * @public
   */
  favicon?: IconImageInput | undefined;

  /**
   * A map of localized text strings for different supported languages. Each locale must provide the required fields `browserTabTitle` and `welcomeText`.
   *
   * @public
   */
  localizedStrings?: Partial<Record<Locale, LocalizedBrandingStrings>> | undefined;

  /**
   * The color theme for components on the web portal. Choose `Light` if you upload a dark wallpaper, or `Dark` for a light wallpaper.
   *
   * @public
   */
  colorTheme?: ColorTheme | undefined;

  /**
   * The terms of service text in Markdown format. To remove existing terms of service, provide an empty string.
   *
   * @public
   */
  termsOfService?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserSettingsRequest {
  /**
   * The ARN of the user settings.
   *
   * @public
   */
  userSettingsArn: string | undefined;

  /**
   * Specifies whether the user can copy text from the streaming session to the local device.
   *
   * @public
   */
  copyAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can paste text from the local device to the streaming session.
   *
   * @public
   */
  pasteAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can download files from the streaming session to the local device.
   *
   * @public
   */
  downloadAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can upload files from the local device to the streaming session.
   *
   * @public
   */
  uploadAllowed?: EnabledType | undefined;

  /**
   * Specifies whether the user can print to the local device.
   *
   * @public
   */
  printAllowed?: EnabledType | undefined;

  /**
   * The amount of time that a streaming session remains active after users disconnect.
   *
   * @public
   */
  disconnectTimeoutInMinutes?: number | undefined;

  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.
   *
   * @public
   */
  idleDisconnectTimeoutInMinutes?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token return the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
   *
   * If the allowlist and blocklist are empty, the configuration becomes null.
   *
   * @public
   */
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration | undefined;

  /**
   * Specifies whether the user can use deep links that open automatically when connecting to a session.
   *
   * @public
   */
  deepLinkAllowed?: EnabledType | undefined;

  /**
   * The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.
   *
   * @public
   */
  toolbarConfiguration?: ToolbarConfiguration | undefined;

  /**
   * The branding configuration that customizes the appearance of the web portal for end users. When updating user settings without an existing branding configuration, all fields (logo, favicon, localized strings, and color theme) are required except for wallpaper and terms of service. When updating user settings with an existing branding configuration, all fields are optional.
   *
   * @public
   */
  brandingConfigurationInput?: BrandingConfigurationUpdateInput | undefined;

  /**
   * Specifies whether the user can use WebAuthn redirection for passwordless login to websites within the streaming session.
   *
   * @public
   */
  webAuthnAllowed?: EnabledType | undefined;
}

/**
 * @public
 */
export interface UpdateUserSettingsResponse {
  /**
   * The user settings.
   *
   * @public
   */
  userSettings: UserSettings | undefined;
}
