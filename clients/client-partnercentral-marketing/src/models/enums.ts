// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  /**
   * The caller's AWS account holds no active AWS Partner benefit for the request's catalog. Register as an AWS
   * Partner, or contact AWS Partner Central Support.
   */
  INCOMPATIBLE_BENEFIT_AWS_PARTNER_STATE: "INCOMPATIBLE_BENEFIT_AWS_PARTNER_STATE",
} as const;
/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * @enum
 */
export const CampaignSetting = {
  /**
   * `Campaign$EmailTarget`, the recipient list. No field shows it; every email asset needs it.
   */
  EMAIL_TARGET: "EMAIL_TARGET",
  /**
   * `Campaign$EndOn`, the last day of the run window. Every asset needs it.
   */
  END_ON: "END_ON",
  /**
   * `Campaign$PartnerAddress`.
   */
  PARTNER_ADDRESS: "PARTNER_ADDRESS",
  /**
   * `Campaign$PartnerBadge`. A field showing it falls back to the Standalone AWS Partner badge, its
   * `DefaultValue`, while it is unset, so it is never missing; content moderation can reject it.
   */
  PARTNER_BADGE: "PARTNER_BADGE",
  /**
   * `Campaign$PrivacyPolicyUrl`.
   */
  PRIVACY_POLICY_URL: "PRIVACY_POLICY_URL",
  /**
   * `Campaign$SenderEmail`.
   */
  SENDER_EMAIL: "SENDER_EMAIL",
} as const;
/**
 * @public
 */
export type CampaignSetting = (typeof CampaignSetting)[keyof typeof CampaignSetting];

/**
 * @public
 * @enum
 */
export const CampaignAssetStateReason = {
  /**
   * This email or social post is live, so it is neither edited nor re-activated
   * in place. Deactivate it first; the next activation sends everything
   * current.
   */
  ASSET_ALREADY_ACTIVE: "ASSET_ALREADY_ACTIVE",
  /**
   * The asset's content has nothing for the delivery platform to publish — no
   * field the partner filled. Fill its fields.
   */
  ASSET_CONTENT_MISSING: "ASSET_CONTENT_MISSING",
  /**
   * The asset cannot be built from what it pinned at creation. Recreate it
   * from its template.
   */
  ASSET_NOT_ACTIVATABLE: "ASSET_NOT_ACTIVATABLE",
  /**
   * No such asset in this campaign.
   */
  ASSET_NOT_FOUND: "ASSET_NOT_FOUND",
  /**
   * This kind of asset produces nothing at activation — it is downloaded
   * rather than published. Not retryable and not fixable: it is a property of
   * the asset's type.
   */
  ASSET_NOT_STARTABLE: "ASSET_NOT_STARTABLE",
  /**
   * An activation for this asset is already under way, or its outcome is not
   * yet known. Retry once the outcome is visible.
   */
  ASSET_START_IN_PROGRESS: "ASSET_START_IN_PROGRESS",
  /**
   * Recipients must opt in before they can be sent to.
   */
  CONTACT_OPT_IN_REQUIRED: "CONTACT_OPT_IN_REQUIRED",
  /**
   * Content moderation refused the asset's text as unsafe to publish. The asset's `ActivationIssues` name
   * the field to edit, or no field when the text was refused as a whole; Start refuses the asset until it is
   * edited.
   */
  CONTENT_REJECTED: "CONTENT_REJECTED",
  /**
   * The asset was accepted for delivery but was not delivered. Retry.
   */
  DELIVERY_FAILED: "DELIVERY_FAILED",
  /**
   * The campaign has no `EndOn`, the last day of its run window. Every asset needs it. Set `EndOn` with
   * UpdateCampaign. Reported on GetCampaign's `ActivationIssues`.
   */
  END_ON_MISSING: "END_ON_MISSING",
  /**
   * The campaign has engagement groups, and this is an email, but this stage
   * can't resolve engagement groups to recipients yet. StartCampaignAssetActivationTask
   * refuses rather than send to `EmailTarget` alone. Reported on GetCampaign's
   * `ActivationIssues`. It clears when the stage can resolve groups, with no change to
   * the campaign.
   */
  ENGAGEMENT_GROUPS_UNAVAILABLE: "ENGAGEMENT_GROUPS_UNAVAILABLE",
  /**
   * The activation failed inside the service or the delivery platform. Nothing
   * in the asset needs to change. Try again later.
   *
   * Covers every delivery-platform outcome that is not a refusal the partner
   * can act on: an error, no answer, or a social post accepted without an id.
   * "Try again later", not "retry": for a social post, a create that did land
   * leaves no handle, so trying again can publish it a second time.
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * No sending capacity remains.
   */
  MAILING_CREDITS_EXHAUSTED: "MAILING_CREDITS_EXHAUSTED",
  /**
   * The partner's mailing credits are fewer than this activation needs: one per recipient for every
   * email asset in the task. Every email in the task is refused together; other assets are unaffected.
   * Add credits or activate fewer emails, then retry. Passing this check does not guarantee the send —
   * credits are debited when the mailing sends, and other campaigns draw on the same balance.
   */
  MAILING_CREDITS_INSUFFICIENT: "MAILING_CREDITS_INSUFFICIENT",
  /**
   * The campaign has no postal address, and this is an email that shows it (commercial email must carry
   * the sender's address). Set `PartnerAddress` with UpdateCampaign. Reported on GetCampaign's
   * `ActivationIssues`.
   */
  PARTNER_ADDRESS_MISSING: "PARTNER_ADDRESS_MISSING",
  /**
   * Content moderation refused an image the partner uploaded, or the image is in a format moderation cannot
   * read. The asset's `ActivationIssues` name the field; upload a different image. Start refuses the asset until
   * the field is edited. For the campaign's badge, GetCampaign's `ActivationIssues` name `CampaignSetting`
   * `PARTNER_BADGE` and the assets that show it: set a different `PartnerBadge` with UpdateCampaign.
   */
  PARTNER_IMAGE_REJECTED: "PARTNER_IMAGE_REJECTED",
  /**
   * The partner is not set up for campaign delivery yet.
   */
  PARTNER_NOT_PROVISIONED: "PARTNER_NOT_PROVISIONED",
  /**
   * A value from your Partner Central profile, or one derived from it, does not fit a document
   * of this campaign: it is too long for the document's box, or uses characters the document
   * cannot show in the campaign's language. Shorten it in Partner Central, or, when the issue's
   * `PartnerProfileField` is `PARTNER_DETAILS` or `COPYRIGHT_AND_DETAILS`, shorten the campaign's
   * `PartnerAddress` with UpdateCampaign. Named by the issue's
   * `PartnerProfileField` on GetCampaign's `ActivationIssues`, which lists only the document
   * assets it does not fit; StartCampaignAssetActivationTask refuses those assets and starts
   * the others.
   */
  PARTNER_PROFILE_FIELD_DOES_NOT_FIT: "PARTNER_PROFILE_FIELD_DOES_NOT_FIT",
  /**
   * The partner's AWS Partner Central profile lacks a value every asset needs —
   * the display name, the website, or a logo Partner Central Marketing can use (a PNG or
   * JPEG image). Named by the issue's `PartnerProfileField`; set it in Partner
   * Central. Reported on GetCampaign's `ActivationIssues`, against every asset:
   * StartCampaignAssetActivationTask refuses the whole request until it is set.
   */
  PARTNER_PROFILE_FIELD_MISSING: "PARTNER_PROFILE_FIELD_MISSING",
  /**
   * This asset embeds output from another asset in the campaign that is not
   * live yet. Start that asset first. See prerequisiteAssetIds.
   */
  PREREQUISITE_ASSET_NOT_ACTIVE: "PREREQUISITE_ASSET_NOT_ACTIVE",
  /**
   * The campaign has no privacy policy URL, and this asset's footer links it. Set `PrivacyPolicyUrl` with
   * UpdateCampaign. Reported on GetCampaign's `ActivationIssues`.
   */
  PRIVACY_POLICY_URL_MISSING: "PRIVACY_POLICY_URL_MISSING",
  /**
   * The campaign's audience exceeds the per-send recipient limit.
   */
  RECIPIENT_LIMIT_EXCEEDED: "RECIPIENT_LIMIT_EXCEEDED",
  /**
   * The campaign's audience resolved to no recipients.
   */
  RECIPIENT_LIST_EMPTY: "RECIPIENT_LIST_EMPTY",
  /**
   * The campaign has no recipient list, and this is an email. Set
   * `EmailTarget` with UpdateCampaign. Reported on GetCampaign's
   * `ActivationIssues`.
   */
  RECIPIENT_LIST_MISSING: "RECIPIENT_LIST_MISSING",
  /**
   * A field the template marks `Required` has no value of the partner's own.
   * Fix first: fill it with UpdateCampaignAsset. The asset's
   * `ActivationIssues` names each field.
   */
  REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING",
  /**
   * The sender email address was rejected. Use a different sender.
   */
  SENDER_EMAIL_INVALID: "SENDER_EMAIL_INVALID",
  /**
   * The campaign has no sender address, and this is an email. Set
   * `SenderEmail` with UpdateCampaign, on the domain of the partner's alliance
   * lead email. Reported on GetCampaign's `ActivationIssues`.
   */
  SENDER_EMAIL_MISSING: "SENDER_EMAIL_MISSING",
  /**
   * The delivery platform refused to verify the campaign's sender address for your account, so the email was
   * not scheduled: from 2026-11-15 the platform sends only from a verified address. Set a different
   * `SenderEmail` with UpdateCampaign, an address on the domain of your alliance lead's email in AWS Partner
   * Central, then activate the email again.
   */
  SENDER_NOT_APPROVED: "SENDER_NOT_APPROVED",
  /**
   * This email or social post has no send mode: choose `SendMode` with UpdateCampaignAsset, `ON_ACTIVATION`
   * or `SCHEDULED` with a time. Reported on the asset's `ActivationIssues`, with no `FieldId`.
   */
  SEND_MODE_MISSING: "SEND_MODE_MISSING",
  /**
   * The stored send time is less than an hour away, too soon to arm. Set one at
   * least an hour out with UpdateCampaignAsset.
   */
  SEND_WINDOW_TOO_SOON: "SEND_WINDOW_TOO_SOON",
  /**
   * The connected social account is no longer authorized. Reconnect it.
   */
  SOCIAL_CONNECTION_EXPIRED: "SOCIAL_CONNECTION_EXPIRED",
  /**
   * The post has no connected account on its platform: none is connected, or the one the campaign chose
   * (`Campaign$SocialConnections`) no longer is. Connect one, or choose another.
   */
  SOCIAL_CONNECTION_MISSING: "SOCIAL_CONNECTION_MISSING",
  /**
   * You hold two or more connections on the post's platform and the campaign chose none. Choose one with
   * UpdateCampaign's `SocialConnections`. Reported by the activation, not by GetCampaign: the choice is
   * checked against your connections only when the post is created.
   */
  SOCIAL_CONNECTION_NOT_CHOSEN: "SOCIAL_CONNECTION_NOT_CHOSEN",
  /**
   * The Facebook connection has no Page selected, and Facebook posts go to a
   * Page. Reconnect Facebook and select a Page.
   */
  SOCIAL_CONNECTION_PAGE_REQUIRED: "SOCIAL_CONNECTION_PAGE_REQUIRED",
  /**
   * The template the asset came from changed underneath it, so its pinned
   * layout no longer matches the delivery platform's. Recreate the asset.
   */
  TEMPLATE_CHANGED: "TEMPLATE_CHANGED",
  /**
   * The asset carries a URL, and your AWS Partner Central primary path has not reached the Confirmed
   * stage. Remove the URL to publish this asset, or advance your primary path. The asset's
   * `ActivationIssues` name the field; a link Partner Central Marketing writes to another asset in the campaign
   * is unaffected.
   */
  URL_NOT_ALLOWED: "URL_NOT_ALLOWED",
} as const;
/**
 * @public
 */
export type CampaignAssetStateReason = (typeof CampaignAssetStateReason)[keyof typeof CampaignAssetStateReason];

/**
 * @public
 * @enum
 */
export const PartnerProfileField = {
  /**
   * Derived: `COPYRIGHT_LINE` and `PARTNER_DETAILS`, space-separated, for a document that carries both in one
   * field.
   */
  COPYRIGHT_AND_DETAILS: "COPYRIGHT_AND_DETAILS",
  /**
   * Derived: `© {year} {DisplayName}. All rights reserved.`, the phrase in the campaign's language. The year is
   * the campaign's first activation, the year of first publication.
   */
  COPYRIGHT_LINE: "COPYRIGHT_LINE",
  /**
   * Derived: `© {year}. All rights reserved.`, the phrase in the campaign's language, with no partner name. The
   * year is the campaign's first activation, as in `COPYRIGHT_LINE`. Always present: it needs no profile value.
   */
  COPYRIGHT_YEAR_LINE: "COPYRIGHT_YEAR_LINE",
  /**
   * `PartnerProfileBranding$DisplayName`.
   */
  DISPLAY_NAME: "DISPLAY_NAME",
  /**
   * `PartnerProfileBranding$LogoUrl`.
   */
  LOGO: "LOGO",
  /**
   * Derived: `{DisplayName} | {PartnerAddress}`, the partner's name and the campaign's postal address. Absent
   * until the campaign has an address.
   */
  PARTNER_DETAILS: "PARTNER_DETAILS",
  /**
   * Derived: the host of `PartnerProfileBranding$WebsiteUrl`, lower-case, with one leading `www.` removed
   * (`https://www.example.com/x` gives `example.com`). The visible text of a link to the website.
   */
  WEBSITE_DOMAIN: "WEBSITE_DOMAIN",
  /**
   * `PartnerProfileBranding$WebsiteUrl`.
   */
  WEBSITE_URL: "WEBSITE_URL",
} as const;
/**
 * @public
 */
export type PartnerProfileField = (typeof PartnerProfileField)[keyof typeof PartnerProfileField];

/**
 * @public
 * @enum
 */
export const AssetLanguage = {
  AR: "ar",
  DE: "de",
  EN: "en",
  ES: "es",
  ES_419: "es-419",
  FR: "fr",
  ID: "id",
  IT: "it",
  JA: "ja",
  KO: "ko",
  PT_BR: "pt-BR",
  TR: "tr",
  ZH_HANS: "zh-Hans",
  ZH_HANT: "zh-Hant",
} as const;
/**
 * @public
 */
export type AssetLanguage = (typeof AssetLanguage)[keyof typeof AssetLanguage];

/**
 * @public
 * @enum
 */
export const CampaignAssetCategory = {
  /**
   * A display banner ad.
   */
  BANNER_AD: "BANNER_AD",
  /**
   * A downloadable print document.
   */
  DOCUMENT: "DOCUMENT",
  /**
   * An email.
   */
  EMAIL: "EMAIL",
  /**
   * A hosted landing page.
   */
  LANDING_PAGE: "LANDING_PAGE",
  /**
   * A post on a social platform.
   */
  SOCIAL_POST: "SOCIAL_POST",
} as const;
/**
 * @public
 */
export type CampaignAssetCategory = (typeof CampaignAssetCategory)[keyof typeof CampaignAssetCategory];

/**
 * @public
 * @enum
 */
export const AttemptStatus = {
  /**
   * The attempt did not succeed. A state reason says why, and whether retrying as-is is enough.
   */
  FAILED: "FAILED",
  /**
   * The attempt is still running, or its outcome is not yet known. Nothing to act on; wait.
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * The attempt completed and did what it set out to do.
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type AttemptStatus = (typeof AttemptStatus)[keyof typeof AttemptStatus];

/**
 * @public
 * @enum
 */
export const Catalog = {
  /**
   * AWS production catalog.
   */
  AWS: "AWS",
  /**
   * Sandbox testing catalog, spelled as IAM's `partnercentral:Catalog` key, every ARN and the Partner Central
   * Selling and Account APIs spell it (F-36).
   */
  Sandbox: "Sandbox",
} as const;
/**
 * @public
 */
export type Catalog = (typeof Catalog)[keyof typeof Catalog];

/**
 * @public
 * @enum
 */
export const LayoutFormat = {
  /**
   * An HTML layout skeleton.
   */
  HTML: "HTML",
  /**
   * A raster image.
   */
  IMAGE: "IMAGE",
  /**
   * A PDF layout skeleton.
   */
  PDF: "PDF",
} as const;
/**
 * @public
 */
export type LayoutFormat = (typeof LayoutFormat)[keyof typeof LayoutFormat];

/**
 * @public
 * @enum
 */
export const LayoutPageType = {
  /**
   * The page shown after the form is submitted.
   */
  CONFIRMATION: "CONFIRMATION",
  /**
   * The page carrying the lead form.
   */
  FORM: "FORM",
} as const;
/**
 * @public
 */
export type LayoutPageType = (typeof LayoutPageType)[keyof typeof LayoutPageType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionFieldCode = {
  /**
   * The image a `CampaignAssetImage` names cannot be copied: no image field holding an image was found at that
   * source among your assets. The message says which part did not resolve.
   */
  COPY_SOURCE_INVALID: "COPY_SOURCE_INVALID",
  /**
   * A rich-text value carries a tag outside the field's `AllowedTags`.
   */
  DISALLOWED_HTML_TAG: "DISALLOWED_HTML_TAG",
  /**
   * A campaign's recipient list has no header row naming the email column. Name it `Email`, `E-mail`,
   * `Email Address` or `E-mail Address`; case, spaces and punctuation do not matter.
   */
  EMAIL_COLUMN_MISSING: "EMAIL_COLUMN_MISSING",
  /**
   * The field shows a value of the partner's AWS Partner Central profile, named by the field's
   * `PartnerProfileField`, so an asset cannot override it. Change it in Partner Central instead.
   */
  FIELD_FROM_PARTNER_PROFILE: "FIELD_FROM_PARTNER_PROFILE",
  /**
   * The field shows a campaign setting, named by the field's `CampaignSetting`, so its value comes from the
   * campaign and an asset cannot override it. Change it with `UpdateCampaign` instead.
   */
  FIELD_SET_ON_CAMPAIGN: "FIELD_SET_ON_CAMPAIGN",
  /**
   * A staged-file reference — an image field's value, `EmailTarget`, or any other member taking a staged
   * upload — is not usable: not an `s3://` URI, malformed, missing its `VersionId`, naming a bucket that is not
   * the Partner Central file staging bucket, or naming no file at that key and version. For an image field, also a
   * URL that is not a suggested image Build with AI returned, including a URL a read returned.
   */
  FILE_REFERENCE_INVALID: "FILE_REFERENCE_INVALID",
  /**
   * The staged path is under a different AWS account id than the caller's. Its own code rather than
   * `FILE_REFERENCE_INVALID` because the fix differs: the reference is well formed, it just is not yours.
   */
  FILE_REFERENCE_NOT_OWNED: "FILE_REFERENCE_NOT_OWNED",
  /**
   * A non-image file is larger than the service accepts — today only a campaign's recipient list.
   */
  FILE_TOO_LARGE: "FILE_TOO_LARGE",
  /**
   * The image's shape is too far from the slot's recommended size to fill it. A document image slot that
   * declares `RecommendedWidthPixels` and `RecommendedHeightPixels` is filled and clipped, so a much taller or
   * wider image would lose most of its content. Supply an image close to the size the message names.
   */
  IMAGE_ASPECT_RATIO_MISMATCH: "IMAGE_ASPECT_RATIO_MISMATCH",
  /**
   * The file is an image, but not one this field's `AllowedFormats` permits.
   */
  IMAGE_FORMAT_NOT_ALLOWED: "IMAGE_FORMAT_NOT_ALLOWED",
  /**
   * The file's extension is not an image format this service accepts.
   */
  IMAGE_FORMAT_NOT_SUPPORTED: "IMAGE_FORMAT_NOT_SUPPORTED",
  /**
   * The file is larger than this field's `MaxSizeBytes`.
   */
  IMAGE_TOO_LARGE: "IMAGE_TOO_LARGE",
  /**
   * The value is not one this member accepts: a `Layout` naming none of the asset's layout options, an
   * `AssetLink` value naming no asset of the field's category on this campaign, or a `SendMode` and
   * `ScheduledSendAt` that disagree (the entry names the member to change).
   */
  INVALID_VALUE: "INVALID_VALUE",
  /**
   * The member does not apply to this asset's category — today `SendMode` or `ScheduledSendAt` on an asset that has no send.
   */
  NOT_SUPPORTED_FOR_CATEGORY: "NOT_SUPPORTED_FOR_CATEGORY",
  /**
   * A badge needs the partner's primary AWS Partner path to be at stage Validated or Differentiated. Below that,
   * a campaign shows no badge at all, so `PartnerBadge` is refused and nothing is uploaded.
   */
  PARTNER_BADGE_NOT_ELIGIBLE: "PARTNER_BADGE_NOT_ELIGIBLE",
  /**
   * The value does not match the field's `Pattern`.
   */
  PATTERN_MISMATCH: "PATTERN_MISMATCH",
  /**
   * A campaign's recipient list holds no valid email address — an empty file, a header with no rows, or rows that
   * all fail the address format check.
   */
  RECIPIENT_LIST_EMPTY: "RECIPIENT_LIST_EMPTY",
  /**
   * A campaign's recipient list is not UTF-8 text — a UTF-16 file, for instance. Save it as UTF-8 CSV.
   */
  RECIPIENT_LIST_NOT_UTF8: "RECIPIENT_LIST_NOT_UTF8",
  /**
   * A campaign's recipient list carries more than 10,000 distinct addresses.
   */
  RECIPIENT_LIST_TOO_LARGE: "RECIPIENT_LIST_TOO_LARGE",
  /**
   * The content scan declined the file. The field keeps the value it already had; supply a different file.
   */
  SCAN_REJECTED: "SCAN_REJECTED",
  /**
   * The sender's domain has no CNAME record `dkim._domainkey.` + the domain → `dkim._domainkey.md02.com` (or
   * `dkim.md02.com`), or its DNS could not be checked. Without it the delivery platform rewrites the From address.
   * A shared mail provider's domain can't carry it. May appear with `SENDER_DOMAIN_DMARC_MISSING`, as two entries
   * naming `SenderEmail`.
   */
  SENDER_DOMAIN_DKIM_MISSING: "SENDER_DOMAIN_DKIM_MISSING",
  /**
   * The sender's domain has no DMARC record, a single TXT record at `_dmarc.` + the domain starting `v=DMARC1`
   * with a `p` tag of `none`, `quarantine` or `reject` (the minimum is `v=DMARC1; p=none;`), or its DNS could not
   * be checked. Without it the delivery platform rewrites the From address. A shared mail provider's domain can't
   * carry it. May appear with `SENDER_DOMAIN_DKIM_MISSING`, as two entries naming `SenderEmail`.
   */
  SENDER_DOMAIN_DMARC_MISSING: "SENDER_DOMAIN_DMARC_MISSING",
  /**
   * A campaign's `SenderEmail` is not on the domain of the partner's alliance lead email in AWS Partner Central.
   * The domain must match exactly, ignoring case; a subdomain does not.
   */
  SENDER_DOMAIN_NOT_ALLIANCE_LEAD: "SENDER_DOMAIN_NOT_ALLIANCE_LEAD",
  /**
   * No field of this name exists in the asset's pinned schema. Also returned for a field the service fills
   * itself, such as an email's fixed link to its landing page: such a field is never listed.
   */
  UNKNOWN_FIELD: "UNKNOWN_FIELD",
  /**
   * The value is longer than the field's `MaxLength`.
   */
  VALUE_TOO_LONG: "VALUE_TOO_LONG",
  /**
   * The value is shorter than the field's `MinLength`.
   */
  VALUE_TOO_SHORT: "VALUE_TOO_SHORT",
  /**
   * The value's kind does not match the field's kind — text supplied for an image field, or an
   * `ImageReference` or `CampaignAssetImage` supplied for a text field.
   */
  WRONG_VALUE_TYPE: "WRONG_VALUE_TYPE",
} as const;
/**
 * @public
 */
export type ValidationExceptionFieldCode =
  (typeof ValidationExceptionFieldCode)[keyof typeof ValidationExceptionFieldCode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  /**
   * The campaign lacks a setting an asset in the request needs, so nothing was started. Carries no `FieldList`:
   * what is missing is a campaign setting, set with `UpdateCampaign`, not a member of this request. Assets that
   * need no missing setting are not affected: a request naming only those proceeds. `GetCampaign`'s
   * `ActivationIssues` names each missing setting and the assets it blocks.
   */
  CAMPAIGN_INCOMPLETE: "CAMPAIGN_INCOMPLETE",
  /**
   * The request could not be interpreted at all, so no field can be named.
   */
  CANNOT_PARSE: "CANNOT_PARSE",
  /**
   * One or more fields failed their own constraints; `FieldList` names them.
   */
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  /**
   * The request is invalid for a reason that is not attributable to a single field.
   */
  OTHER: "OTHER",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const CompanySize = {
  /**
   * ENTERPRISE value.
   */
  ENTERPRISE: "ENTERPRISE",
  /**
   * GLOBAL_ENTERPRISE value.
   */
  GLOBAL_ENTERPRISE: "GLOBAL_ENTERPRISE",
  /**
   * MID_MARKET value.
   */
  MID_MARKET: "MID_MARKET",
  /**
   * SMALL_BUSINESS value.
   */
  SMALL_BUSINESS: "SMALL_BUSINESS",
  /**
   * STARTUP value.
   */
  STARTUP: "STARTUP",
} as const;
/**
 * @public
 */
export type CompanySize = (typeof CompanySize)[keyof typeof CompanySize];

/**
 * @public
 * @enum
 */
export const Industry = {
  /**
   * AUTOMOTIVE value.
   */
  AUTOMOTIVE: "AUTOMOTIVE",
  /**
   * EDUCATION value.
   */
  EDUCATION: "EDUCATION",
  /**
   * ENERGY value.
   */
  ENERGY: "ENERGY",
  /**
   * FINANCIAL_SERVICES value.
   */
  FINANCIAL_SERVICES: "FINANCIAL_SERVICES",
  /**
   * GOVERNMENT value.
   */
  GOVERNMENT: "GOVERNMENT",
  /**
   * HEALTHCARE value.
   */
  HEALTHCARE: "HEALTHCARE",
  /**
   * INSURANCE value.
   */
  INSURANCE: "INSURANCE",
  /**
   * MANUFACTURING value.
   */
  MANUFACTURING: "MANUFACTURING",
  /**
   * MEDIA_ENTERTAINMENT value.
   */
  MEDIA_ENTERTAINMENT: "MEDIA_ENTERTAINMENT",
  /**
   * OTHER value.
   */
  OTHER: "OTHER",
  /**
   * RETAIL value.
   */
  RETAIL: "RETAIL",
  /**
   * TELECOMMUNICATIONS value.
   */
  TELECOMMUNICATIONS: "TELECOMMUNICATIONS",
} as const;
/**
 * @public
 */
export type Industry = (typeof Industry)[keyof typeof Industry];

/**
 * @public
 * @enum
 */
export const CampaignAssetState = {
  /**
   * Live: **the delivery platform holds the asset**, whether or not delivery
   * has since happened. A landing page is serving; a send or post is armed, or
   * has already gone out. Stays ACTIVE throughout a *re*-publication, because
   * the previously published content is still live while the new content is
   * handed over — and stays ACTIVE after delivery, because activation means the
   * platform is armed or serving and never meant anything had been delivered.
   * Delivery is reported separately by `DeliveryStatus`.
   */
  ACTIVE: "ACTIVE",
  /**
   * Not live. Either never started, or started and since stopped — StartedAt
   * tells them apart. Also the position throughout an *initial* publication,
   * because nothing is live until the delivery platform holds the object.
   */
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type CampaignAssetState = (typeof CampaignAssetState)[keyof typeof CampaignAssetState];

/**
 * @public
 * @enum
 */
export const ScanStatus = {
  /**
   * The scan passed. Only now is a URL issued for the file.
   */
  CLEAN: "CLEAN",
  /**
   * The scan has not returned a verdict yet.
   */
  PENDING: "PENDING",
  /**
   * The scan declined the file, or never returned a verdict before the deadline.
   */
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus];

/**
 * @public
 * @enum
 */
export const Platform = {
  /**
   * Facebook.
   */
  FACEBOOK: "FACEBOOK",
  /**
   * LinkedIn.
   */
  LINKEDIN: "LINKEDIN",
  /**
   * X (formerly Twitter).
   */
  X: "X",
} as const;
/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * @enum
 */
export const CampaignState = {
  /**
   * At least one asset is live and the campaign is not completed.
   */
  ACTIVE: "ACTIVE",
  /**
   * The UTC date is after `EndOn`, whatever its assets' states.
   */
  COMPLETED: "COMPLETED",
  /**
   * No asset is live and the campaign is not completed.
   */
  DRAFT: "DRAFT",
} as const;
/**
 * @public
 */
export type CampaignState = (typeof CampaignState)[keyof typeof CampaignState];

/**
 * @public
 * @enum
 */
export const DeliveryStatus = {
  /**
   * Delivered. The email was sent, or the social post was published.
   */
  DELIVERED: "DELIVERED",
  /**
   * The platform attempted delivery and failed. A state reason says why.
   */
  FAILED: "FAILED",
  /**
   * Accepted for delivery, not yet delivered.
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

/**
 * @public
 * @enum
 */
export const TemplateFieldSection = {
  /**
   * BODY value.
   */
  BODY: "BODY",
  /**
   * FOOTER value.
   */
  FOOTER: "FOOTER",
  /**
   * HEADER value.
   */
  HEADER: "HEADER",
} as const;
/**
 * @public
 */
export type TemplateFieldSection = (typeof TemplateFieldSection)[keyof typeof TemplateFieldSection];

/**
 * @public
 * @enum
 */
export const ImageFormat = {
  /**
   * JPEG value.
   */
  JPEG: "JPEG",
  /**
   * PNG value.
   */
  PNG: "PNG",
} as const;
/**
 * @public
 */
export type ImageFormat = (typeof ImageFormat)[keyof typeof ImageFormat];

/**
 * @public
 * @enum
 */
export const FileFormat = {
  /**
   * DOCX value.
   */
  DOCX: "DOCX",
  /**
   * HTML value — a service-rendered email body or hosted page.
   */
  HTML: "HTML",
  /**
   * IMAGE value — a raster image (banner ad, social graphic).
   */
  IMAGE: "IMAGE",
  /**
   * PDF format.
   */
  PDF: "PDF",
  /**
   * PPTX value.
   */
  PPTX: "PPTX",
} as const;
/**
 * @public
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

/**
 * @public
 * @enum
 */
export const SendMode = {
  /**
   * The asset sends (a social post publishes) when its activation runs.
   */
  ON_ACTIVATION: "ON_ACTIVATION",
  /**
   * The asset sends at its `ScheduledSendAt`.
   */
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type SendMode = (typeof SendMode)[keyof typeof SendMode];

/**
 * @public
 * @enum
 */
export const CampaignAssetActivationStatus = {
  /**
   * The activation did not succeed. `Reason` says why, and whether retrying
   * as-is is enough.
   */
  FAILED: "FAILED",
  /**
   * The activation is under way, **or** has been accepted and not started yet,
   * **or** its outcome is not yet known. Nothing to act on — poll again.
   *
   * All three, deliberately. The value is written when the task is created,
   * before anything has begun, so a narrower reading would be untrue. An asset
   * waiting on a prerequisite is not distinguished from one mid-hand-over: the
   * caller's action is identical, and with dependency levels and bounded
   * concurrency the distinction would conflate "blocked by a prerequisite" with
   * "waiting for a slot" with "the run has not reached it".
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * The delivery platform holds the asset.
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CampaignAssetActivationStatus =
  (typeof CampaignAssetActivationStatus)[keyof typeof CampaignAssetActivationStatus];

/**
 * @public
 * @enum
 */
export const CampaignAssetActivationTaskStatus = {
  /**
   * No asset activated, or the run could not proceed at all.
   */
  FAILED: "FAILED",
  /**
   * At least one asset has not reached a terminal status.
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * Some assets activated and some did not — read `Assets` to see which.
   *
   * This value is what makes the aggregate a summary rather than a verdict:
   * it reports the mixed outcome *and* points at the per-asset detail on the
   * same resource, instead of collapsing a nine-of-ten launch into a flat
   * failure. Partner Central's task statuses have no equivalent, because
   * neither of its tasks fans out over independent children; this one does, so
   * the value is a considered extension rather than a divergence.
   */
  PARTIAL_FAILURE: "PARTIAL_FAILURE",
  /**
   * Every asset in the task activated.
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CampaignAssetActivationTaskStatus =
  (typeof CampaignAssetActivationTaskStatus)[keyof typeof CampaignAssetActivationTaskStatus];

/**
 * @public
 * @enum
 */
export const CampaignAssetExportFailureCode = {
  /**
   * The task exceeded its time budget before completing.
   */
  EXPORT_TIMEOUT: "EXPORT_TIMEOUT",
  /**
   * The resolvable content exceeded the maximum export size.
   */
  EXPORT_TOO_LARGE: "EXPORT_TOO_LARGE",
  /**
   * The task could not record its outcome because of an internal error.
   * Start a new export.
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * The archive could not be assembled or uploaded.
   */
  PACKAGING_ERROR: "PACKAGING_ERROR",
  /**
   * A source object referenced by an asset could not be read.
   */
  SOURCE_OBJECT_MISSING: "SOURCE_OBJECT_MISSING",
} as const;
/**
 * @public
 */
export type CampaignAssetExportFailureCode =
  (typeof CampaignAssetExportFailureCode)[keyof typeof CampaignAssetExportFailureCode];

/**
 * @public
 * @enum
 */
export const CampaignAssetExportTaskStatus = {
  /**
   * The task finished successfully. The archive is available via a presigned
   * download from GetCampaignAssetExportTask.
   */
  COMPLETED: "COMPLETED",
  /**
   * The task did not finish successfully. See FailureReason.
   */
  FAILED: "FAILED",
  /**
   * The task is running: assets are being resolved and packaged. No download
   * is available yet.
   */
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CampaignAssetExportTaskStatus =
  (typeof CampaignAssetExportTaskStatus)[keyof typeof CampaignAssetExportTaskStatus];

/**
 * @public
 * @enum
 */
export const CampaignSortName = {
  /**
   * When the campaign was created.
   */
  CREATED_AT: "CREATED_AT",
  /**
   * Case-insensitive.
   */
  NAME: "NAME",
  /**
   * The campaign's `StartOn`. A campaign with none sorts last in either direction.
   */
  START_ON: "START_ON",
  /**
   * In lifecycle order: `DRAFT`, `ACTIVE`, `COMPLETED`.
   */
  STATE: "STATE",
} as const;
/**
 * @public
 */
export type CampaignSortName = (typeof CampaignSortName)[keyof typeof CampaignSortName];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const CampaignAssetTemplateType = {
  /**
   * A display banner ad.
   */
  BANNER_AD: "BANNER_AD",
  /**
   * A downloadable print document.
   */
  DOCUMENT: "DOCUMENT",
  /**
   * An email.
   */
  EMAIL: "EMAIL",
  /**
   * A hosted landing page.
   */
  LANDING_PAGE: "LANDING_PAGE",
  /**
   * A post on a social platform.
   */
  SOCIAL_POST: "SOCIAL_POST",
} as const;
/**
 * @public
 */
export type CampaignAssetTemplateType = (typeof CampaignAssetTemplateType)[keyof typeof CampaignAssetTemplateType];

/**
 * @public
 * @enum
 */
export const CampaignTemplateCollection = {
  /**
   * Build with AI: listed only behind the console's Build with AI entry.
   */
  BUILD_WITH_AI: "BUILD_WITH_AI",
  /**
   * The general template gallery.
   */
  GENERAL: "GENERAL",
} as const;
/**
 * @public
 */
export type CampaignTemplateCollection = (typeof CampaignTemplateCollection)[keyof typeof CampaignTemplateCollection];

/**
 * @public
 * @enum
 */
export const CustomerSegment = {
  /**
   * Enterprise customers.
   */
  ENTERPRISE: "ENTERPRISE",
  /**
   * Independent software vendors.
   */
  ISV: "ISV",
  /**
   * Public sector customers.
   */
  PUBLIC_SECTOR: "PUBLIC_SECTOR",
  /**
   * Small and medium-sized businesses.
   */
  SMB: "SMB",
} as const;
/**
 * @public
 */
export type CustomerSegment = (typeof CustomerSegment)[keyof typeof CustomerSegment];

/**
 * @public
 * @enum
 */
export const Theme = {
  /**
   * Artificial intelligence, including generative and agentic AI.
   */
  AI: "AI",
  /**
   * AWS Marketplace.
   */
  AWS_MARKETPLACE: "AWS_MARKETPLACE",
  /**
   * AWS Training and Certification.
   */
  AWS_TRAINING_CERTIFICATION: "AWS_TRAINING_CERTIFICATION",
  /**
   * Amazon Connect.
   */
  CONNECT: "CONNECT",
  /**
   * Data and analytics.
   */
  DATA_ANALYTICS: "DATA_ANALYTICS",
  /**
   * Events, such as webinars and solution days.
   */
  EVENTS: "EVENTS",
  /**
   * Migration and modernization.
   */
  MIGRATION_MODERNIZATION: "MIGRATION_MODERNIZATION",
  /**
   * Security.
   */
  SECURITY: "SECURITY",
} as const;
/**
 * @public
 */
export type Theme = (typeof Theme)[keyof typeof Theme];

/**
 * @public
 * @enum
 */
export const SocialConnectionStatus = {
  /**
   * The connection is usable for publishing.
   */
  AUTHORIZED: "AUTHORIZED",
  /**
   * The authorization no longer works and the partner must re-authorize.
   * Covers both a lapsed token and access withdrawn on the platform side;
   * remediation is identical in either case: re-authorize the same account,
   * which keeps this connection and its id.
   */
  EXPIRED: "EXPIRED",
  /**
   * A Facebook connection with no Page selected. Facebook posts go to a Page,
   * so nothing can be posted through it. Reconnect Facebook and select a Page.
   */
  PAGE_REQUIRED: "PAGE_REQUIRED",
} as const;
/**
 * @public
 */
export type SocialConnectionStatus = (typeof SocialConnectionStatus)[keyof typeof SocialConnectionStatus];
