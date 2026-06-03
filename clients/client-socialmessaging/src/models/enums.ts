// smithy-typescript generated code
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
 * @public
 * @enum
 */
export const MetaFlowCategory = {
  APPOINTMENT_BOOKING: "APPOINTMENT_BOOKING",
  CONTACT_US: "CONTACT_US",
  CUSTOMER_SUPPORT: "CUSTOMER_SUPPORT",
  LEAD_GENERATION: "LEAD_GENERATION",
  OTHER: "OTHER",
  SHOPPING: "SHOPPING",
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
  SURVEY: "SURVEY",
} as const;
/**
 * @public
 */
export type MetaFlowCategory = (typeof MetaFlowCategory)[keyof typeof MetaFlowCategory];
