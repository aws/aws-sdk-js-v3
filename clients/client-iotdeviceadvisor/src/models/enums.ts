// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AuthenticationMethod = {
  SignatureVersion4: "SignatureVersion4",
  X509ClientCertificate: "X509ClientCertificate",
} as const;
/**
 * @public
 */
export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

/**
 * @public
 * @enum
 */
export const Protocol = {
  MqttV3_1_1: "MqttV3_1_1",
  MqttV3_1_1_OverWebSocket: "MqttV3_1_1_OverWebSocket",
  MqttV5: "MqttV5",
  MqttV5_OverWebSocket: "MqttV5_OverWebSocket",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const SuiteRunStatus = {
  CANCELED: "CANCELED",
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
  PASS_WITH_WARNINGS: "PASS_WITH_WARNINGS",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type SuiteRunStatus = (typeof SuiteRunStatus)[keyof typeof SuiteRunStatus];

/**
 * @public
 * @enum
 */
export const Status = {
  CANCELED: "CANCELED",
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
  PASS_WITH_WARNINGS: "PASS_WITH_WARNINGS",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const TestCaseScenarioStatus = {
  CANCELED: "CANCELED",
  ERROR: "ERROR",
  FAIL: "FAIL",
  PASS: "PASS",
  PASS_WITH_WARNINGS: "PASS_WITH_WARNINGS",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type TestCaseScenarioStatus = (typeof TestCaseScenarioStatus)[keyof typeof TestCaseScenarioStatus];

/**
 * @public
 * @enum
 */
export const TestCaseScenarioType = {
  Advanced: "Advanced",
  Basic: "Basic",
} as const;
/**
 * @public
 */
export type TestCaseScenarioType = (typeof TestCaseScenarioType)[keyof typeof TestCaseScenarioType];
