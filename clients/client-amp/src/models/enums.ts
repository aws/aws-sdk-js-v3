// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AlertManagerDefinitionStatusCode = {
  /**
   * Definition has been created/updated. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Definition is being created. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Definition creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Definition is being deleting. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Definition update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Definition is being updated. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AlertManagerDefinitionStatusCode =
  (typeof AlertManagerDefinitionStatusCode)[keyof typeof AlertManagerDefinitionStatusCode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ScraperStatusCode = {
  /**
   * Scraper has been created and is usable.
   */
  ACTIVE: "ACTIVE",
  /**
   * Scraper is being created. Deletion is disallowed until status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Scraper creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Scraper is being deleted. Deletions are allowed only when status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Scraper deletion failed.
   */
  DELETION_FAILED: "DELETION_FAILED",
  /**
   * Scraper update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Scraper is being updated. Deletion is disallowed until status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ScraperStatusCode = (typeof ScraperStatusCode)[keyof typeof ScraperStatusCode];

/**
 * @public
 * @enum
 */
export const ScraperComponentType = {
  /**
   * Scraper collector component
   */
  COLLECTOR: "COLLECTOR",
  /**
   * Scraper exporter component
   */
  EXPORTER: "EXPORTER",
  /**
   * Scraper service discoverer component
   */
  SERVICE_DISCOVERY: "SERVICE_DISCOVERY",
} as const;
/**
 * @public
 */
export type ScraperComponentType = (typeof ScraperComponentType)[keyof typeof ScraperComponentType];

/**
 * @public
 * @enum
 */
export const ScraperLoggingConfigurationStatusCode = {
  /**
   * Scraper logging configuration is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Scraper logging configuration is being created.
   */
  CREATING: "CREATING",
  /**
   * Scraper logging configuration creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Scraper logging configuration is being deleted.
   */
  DELETING: "DELETING",
  /**
   * Scraper logging configuration update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Scraper logging configuration is being updated.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ScraperLoggingConfigurationStatusCode =
  (typeof ScraperLoggingConfigurationStatusCode)[keyof typeof ScraperLoggingConfigurationStatusCode];

/**
 * @public
 * @enum
 */
export const AnomalyDetectorStatusCode = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AnomalyDetectorStatusCode = (typeof AnomalyDetectorStatusCode)[keyof typeof AnomalyDetectorStatusCode];

/**
 * @public
 * @enum
 */
export const WorkspaceStatusCode = {
  /**
   * Workspace has been created and is usable.
   */
  ACTIVE: "ACTIVE",
  /**
   * Workspace is being created. Deletion is disallowed until status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Workspace creation failed. Refer to WorkspaceStatus.failureReason for more details.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Workspace is being deleted. Deletions are allowed only when status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Workspace is being updated. Updates are allowed only when status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type WorkspaceStatusCode = (typeof WorkspaceStatusCode)[keyof typeof WorkspaceStatusCode];

/**
 * @public
 * @enum
 */
export const LoggingConfigurationStatusCode = {
  /**
   * Logging configuration has been created/updated. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Logging configuration is being created. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Logging configuration creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Logging configuration is being deleting. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Logging configuration update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Logging configuration is being updated. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type LoggingConfigurationStatusCode =
  (typeof LoggingConfigurationStatusCode)[keyof typeof LoggingConfigurationStatusCode];

/**
 * @public
 * @enum
 */
export const QueryLoggingConfigurationStatusCode = {
  /**
   * Query logging configuration is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Query logging configuration is being created.
   */
  CREATING: "CREATING",
  /**
   * Query logging configuration creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Query logging configuration is being deleted.
   */
  DELETING: "DELETING",
  /**
   * Query logging configuration update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Query logging configuration is being updated.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type QueryLoggingConfigurationStatusCode =
  (typeof QueryLoggingConfigurationStatusCode)[keyof typeof QueryLoggingConfigurationStatusCode];

/**
 * @public
 * @enum
 */
export const RuleGroupsNamespaceStatusCode = {
  /**
   * Namespace has been created/updated. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Namespace is being created. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Namespace creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Namespace is being deleting. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Namespace update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Namespace is being updated. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RuleGroupsNamespaceStatusCode =
  (typeof RuleGroupsNamespaceStatusCode)[keyof typeof RuleGroupsNamespaceStatusCode];

/**
 * @public
 * @enum
 */
export const WorkspaceConfigurationStatusCode = {
  /**
   * Workspace configuration has been updated. Update is disallowed until workspace configuration is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Workspace configuration update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Workspace configuration is being updated. Update is disallowed until workspace configuration is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type WorkspaceConfigurationStatusCode =
  (typeof WorkspaceConfigurationStatusCode)[keyof typeof WorkspaceConfigurationStatusCode];

/**
 * @public
 * @enum
 */
export const WorkspacePolicyStatusCode = {
  /**
   * Resource-based Policy has been created/updated. Update/Deletion is disallowed until Resource-based Policy is ACTIVE and Workspace is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Resource-based Policy is being created. Update/Deletion is disallowed until Resource-based Policy is ACTIVE and Workspace is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Resource-based Policy is being deleting. Update/Deletion is disallowed until Resource-based Policy is ACTIVE and Workspace is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Resource-based Policy is being updated. Update/Deletion is disallowed until Resource-based Policy is ACTIVE and Workspace is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type WorkspacePolicyStatusCode = (typeof WorkspacePolicyStatusCode)[keyof typeof WorkspacePolicyStatusCode];
