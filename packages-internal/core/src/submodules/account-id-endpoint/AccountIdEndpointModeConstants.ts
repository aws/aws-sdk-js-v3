/**
 * @public
 */
export type AccountIdEndpointMode = "disabled" | "preferred" | "required";

/**
 * @internal
 */
export const DEFAULT_ACCOUNT_ID_ENDPOINT_MODE = "preferred";

/**
 * @internal
 */
export const ACCOUNT_ID_ENDPOINT_MODE_VALUES: AccountIdEndpointMode[] = ["disabled", "preferred", "required"];

/**
 * @internal
 */
export function validateAccountIdEndpointMode(value: any): value is AccountIdEndpointMode {
  return ACCOUNT_ID_ENDPOINT_MODE_VALUES.includes(value);
}
