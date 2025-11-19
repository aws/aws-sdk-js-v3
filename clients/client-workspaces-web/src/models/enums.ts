// smithy-typescript generated code
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
