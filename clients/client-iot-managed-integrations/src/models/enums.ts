// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AbortCriteriaAction = {
  CANCEL: "CANCEL",
} as const;
/**
 * @public
 */
export type AbortCriteriaAction = (typeof AbortCriteriaAction)[keyof typeof AbortCriteriaAction];

/**
 * @public
 * @enum
 */
export const AbortCriteriaFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type AbortCriteriaFailureType = (typeof AbortCriteriaFailureType)[keyof typeof AbortCriteriaFailureType];

/**
 * @public
 * @enum
 */
export const AssociationState = {
  ASSOCIATION_DELETING: "ASSOCIATION_DELETING",
  ASSOCIATION_FAILED: "ASSOCIATION_FAILED",
  ASSOCIATION_IN_PROGRESS: "ASSOCIATION_IN_PROGRESS",
  ASSOCIATION_SUCCEEDED: "ASSOCIATION_SUCCEEDED",
  REFRESH_TOKEN_EXPIRED: "REFRESH_TOKEN_EXPIRED",
} as const;
/**
 * @public
 */
export type AssociationState = (typeof AssociationState)[keyof typeof AssociationState];

/**
 * @public
 * @enum
 */
export const TokenEndpointAuthenticationScheme = {
  HTTP_BASIC: "HTTP_BASIC",
  REQUEST_BODY_CREDENTIALS: "REQUEST_BODY_CREDENTIALS",
} as const;
/**
 * @public
 */
export type TokenEndpointAuthenticationScheme =
  (typeof TokenEndpointAuthenticationScheme)[keyof typeof TokenEndpointAuthenticationScheme];

/**
 * @public
 * @enum
 */
export const AuthMaterialType = {
  CUSTOM_PROTOCOL_QR_BAR_CODE: "CUSTOM_PROTOCOL_QR_BAR_CODE",
  DISCOVERED_DEVICE: "DISCOVERED_DEVICE",
  WIFI_SETUP_QR_BAR_CODE: "WIFI_SETUP_QR_BAR_CODE",
  ZIGBEE_QR_BAR_CODE: "ZIGBEE_QR_BAR_CODE",
  ZWAVE_QR_BAR_CODE: "ZWAVE_QR_BAR_CODE",
} as const;
/**
 * @public
 */
export type AuthMaterialType = (typeof AuthMaterialType)[keyof typeof AuthMaterialType];

/**
 * @public
 * @enum
 */
export const AuthType = {
  OAUTH: "OAUTH",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const SchemaVersionFormat = {
  AWS: "AWS",
  CONNECTOR: "CONNECTOR",
  ZCL: "ZCL",
} as const;
/**
 * @public
 */
export type SchemaVersionFormat = (typeof SchemaVersionFormat)[keyof typeof SchemaVersionFormat];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  LAMBDA: "LAMBDA",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const CloudConnectorType = {
  LISTED: "LISTED",
  UNLISTED: "UNLISTED",
} as const;
/**
 * @public
 */
export type CloudConnectorType = (typeof CloudConnectorType)[keyof typeof CloudConnectorType];

/**
 * @public
 * @enum
 */
export const ConfigurationState = {
  ENABLED: "ENABLED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

/**
 * @public
 * @enum
 */
export const ConnectorEventOperation = {
  DEVICE_COMMAND_REQUEST: "DEVICE_COMMAND_REQUEST",
  DEVICE_COMMAND_RESPONSE: "DEVICE_COMMAND_RESPONSE",
  DEVICE_DISCOVERY: "DEVICE_DISCOVERY",
  DEVICE_EVENT: "DEVICE_EVENT",
} as const;
/**
 * @public
 */
export type ConnectorEventOperation = (typeof ConnectorEventOperation)[keyof typeof ConnectorEventOperation];

/**
 * @public
 * @enum
 */
export const DeliveryDestinationType = {
  KINESIS: "KINESIS",
} as const;
/**
 * @public
 */
export type DeliveryDestinationType = (typeof DeliveryDestinationType)[keyof typeof DeliveryDestinationType];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const Role = {
  CONTROLLER: "CONTROLLER",
  DEVICE: "DEVICE",
} as const;
/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 * @enum
 */
export const EventType = {
  ACCOUNT_ASSOCIATION: "ACCOUNT_ASSOCIATION",
  CONNECTOR_ASSOCIATION: "CONNECTOR_ASSOCIATION",
  CONNECTOR_ERROR_REPORT: "CONNECTOR_ERROR_REPORT",
  DEVICE_COMMAND: "DEVICE_COMMAND",
  DEVICE_COMMAND_REQUEST: "DEVICE_COMMAND_REQUEST",
  DEVICE_DISCOVERY_STATUS: "DEVICE_DISCOVERY_STATUS",
  DEVICE_EVENT: "DEVICE_EVENT",
  DEVICE_LIFE_CYCLE: "DEVICE_LIFE_CYCLE",
  DEVICE_OTA: "DEVICE_OTA",
  DEVICE_STATE: "DEVICE_STATE",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const OtaMechanism = {
  PUSH: "PUSH",
} as const;
/**
 * @public
 */
export type OtaMechanism = (typeof OtaMechanism)[keyof typeof OtaMechanism];

/**
 * @public
 * @enum
 */
export const SchedulingConfigEndBehavior = {
  CANCEL: "CANCEL",
  FORCE_CANCEL: "FORCE_CANCEL",
  STOP_ROLLOUT: "STOP_ROLLOUT",
} as const;
/**
 * @public
 */
export type SchedulingConfigEndBehavior =
  (typeof SchedulingConfigEndBehavior)[keyof typeof SchedulingConfigEndBehavior];

/**
 * @public
 * @enum
 */
export const RetryCriteriaFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type RetryCriteriaFailureType = (typeof RetryCriteriaFailureType)[keyof typeof RetryCriteriaFailureType];

/**
 * @public
 * @enum
 */
export const OtaType = {
  CONTINUOUS: "CONTINUOUS",
  ONE_TIME: "ONE_TIME",
} as const;
/**
 * @public
 */
export type OtaType = (typeof OtaType)[keyof typeof OtaType];

/**
 * @public
 * @enum
 */
export const OtaProtocol = {
  HTTP: "HTTP",
} as const;
/**
 * @public
 */
export type OtaProtocol = (typeof OtaProtocol)[keyof typeof OtaProtocol];

/**
 * @public
 * @enum
 */
export const ProvisioningType = {
  FLEET_PROVISIONING: "FLEET_PROVISIONING",
  JITR: "JITR",
} as const;
/**
 * @public
 */
export type ProvisioningType = (typeof ProvisioningType)[keyof typeof ProvisioningType];

/**
 * @public
 * @enum
 */
export const DiscoveryType = {
  CLOUD: "CLOUD",
  CUSTOM: "CUSTOM",
  ZIGBEE: "ZIGBEE",
  ZWAVE: "ZWAVE",
} as const;
/**
 * @public
 */
export type DiscoveryType = (typeof DiscoveryType)[keyof typeof DiscoveryType];

/**
 * @public
 * @enum
 */
export const DeviceDiscoveryStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type DeviceDiscoveryStatus = (typeof DeviceDiscoveryStatus)[keyof typeof DeviceDiscoveryStatus];

/**
 * @public
 * @enum
 */
export const DiscoveryModification = {
  DISCOVERED: "DISCOVERED",
  NO_CHANGE: "NO_CHANGE",
  UPDATED: "UPDATED",
} as const;
/**
 * @public
 */
export type DiscoveryModification = (typeof DiscoveryModification)[keyof typeof DiscoveryModification];

/**
 * @public
 * @enum
 */
export const DiscoveryAuthMaterialType = {
  ZWAVE_INSTALL_CODE: "ZWAVE_INSTALL_CODE",
} as const;
/**
 * @public
 */
export type DiscoveryAuthMaterialType = (typeof DiscoveryAuthMaterialType)[keyof typeof DiscoveryAuthMaterialType];

/**
 * @public
 * @enum
 */
export const DisconnectReasonValue = {
  AUTH_ERROR: "AUTH_ERROR",
  CLIENT_ERROR: "CLIENT_ERROR",
  CLIENT_INITIATED_DISCONNECT: "CLIENT_INITIATED_DISCONNECT",
  CONNECTION_LOST: "CONNECTION_LOST",
  CUSTOMAUTH_TTL_EXPIRATION: "CUSTOMAUTH_TTL_EXPIRATION",
  DUPLICATE_CLIENTID: "DUPLICATE_CLIENTID",
  FORBIDDEN_ACCESS: "FORBIDDEN_ACCESS",
  MQTT_KEEP_ALIVE_TIMEOUT: "MQTT_KEEP_ALIVE_TIMEOUT",
  NONE: "NONE",
  SERVER_ERROR: "SERVER_ERROR",
  SERVER_INITIATED_DISCONNECT: "SERVER_INITIATED_DISCONNECT",
  THROTTLED: "THROTTLED",
  UNKNOWN: "UNKNOWN",
  WEBSOCKET_TTL_EXPIRATION: "WEBSOCKET_TTL_EXPIRATION",
} as const;
/**
 * @public
 */
export type DisconnectReasonValue = (typeof DisconnectReasonValue)[keyof typeof DisconnectReasonValue];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  CUSTOMER_KEY_ENCRYPTION: "CUSTOMER_KEY_ENCRYPTION",
  MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION: "MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const HubNetworkMode = {
  NETWORK_WIDE_EXCLUSION: "NETWORK_WIDE_EXCLUSION",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type HubNetworkMode = (typeof HubNetworkMode)[keyof typeof HubNetworkMode];

/**
 * @public
 * @enum
 */
export const ProvisioningStatus = {
  ACTIVATED: "ACTIVATED",
  DELETED: "DELETED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETION_FAILED: "DELETION_FAILED",
  DISCOVERED: "DISCOVERED",
  ISOLATED: "ISOLATED",
  PRE_ASSOCIATED: "PRE_ASSOCIATED",
  UNASSOCIATED: "UNASSOCIATED",
} as const;
/**
 * @public
 */
export type ProvisioningStatus = (typeof ProvisioningStatus)[keyof typeof ProvisioningStatus];

/**
 * @public
 * @enum
 */
export const OtaStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type OtaStatus = (typeof OtaStatus)[keyof typeof OtaStatus];

/**
 * @public
 * @enum
 */
export const SchemaVersionType = {
  CAPABILITY: "capability",
  DEFINITION: "definition",
} as const;
/**
 * @public
 */
export type SchemaVersionType = (typeof SchemaVersionType)[keyof typeof SchemaVersionType];

/**
 * @public
 * @enum
 */
export const SchemaVersionVisibility = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type SchemaVersionVisibility = (typeof SchemaVersionVisibility)[keyof typeof SchemaVersionVisibility];

/**
 * @public
 * @enum
 */
export const OtaTaskExecutionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  REMOVED: "REMOVED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type OtaTaskExecutionStatus = (typeof OtaTaskExecutionStatus)[keyof typeof OtaTaskExecutionStatus];
