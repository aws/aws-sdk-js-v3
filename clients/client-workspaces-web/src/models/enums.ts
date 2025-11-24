// smithy-typescript generated code
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
