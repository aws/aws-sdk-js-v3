// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EndpointAccessType = {
  CUSTOMER_OWNED_IP: "CustomerOwnedIp",
  PRIVATE: "Private",
} as const;
/**
 * @public
 */
export type EndpointAccessType = (typeof EndpointAccessType)[keyof typeof EndpointAccessType];

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  AVAILABLE: "Available",
  CREATE_FAILED: "Create_Failed",
  DELETE_FAILED: "Delete_Failed",
  DELETING: "Deleting",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];
