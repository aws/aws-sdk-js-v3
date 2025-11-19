// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ControlBehavior = {
  DETECTIVE: "DETECTIVE",
  PREVENTIVE: "PREVENTIVE",
  PROACTIVE: "PROACTIVE",
} as const;
/**
 * @public
 */
export type ControlBehavior = (typeof ControlBehavior)[keyof typeof ControlBehavior];

/**
 * @public
 * @enum
 */
export const ControlScope = {
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type ControlScope = (typeof ControlScope)[keyof typeof ControlScope];

/**
 * @public
 * @enum
 */
export const ControlSeverity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type ControlSeverity = (typeof ControlSeverity)[keyof typeof ControlSeverity];

/**
 * @public
 * @enum
 */
export const MappingType = {
  COMMON_CONTROL: "COMMON_CONTROL",
  FRAMEWORK: "FRAMEWORK",
  RELATED_CONTROL: "RELATED_CONTROL",
} as const;
/**
 * @public
 */
export type MappingType = (typeof MappingType)[keyof typeof MappingType];

/**
 * @public
 * @enum
 */
export const ControlRelationType = {
  ALTERNATIVE: "ALTERNATIVE",
  COMPLEMENTARY: "COMPLEMENTARY",
  MUTUALLY_EXCLUSIVE: "MUTUALLY_EXCLUSIVE",
} as const;
/**
 * @public
 */
export type ControlRelationType = (typeof ControlRelationType)[keyof typeof ControlRelationType];
