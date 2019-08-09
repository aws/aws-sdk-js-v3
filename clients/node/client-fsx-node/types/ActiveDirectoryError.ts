import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An Active Directory error.</p>
 */
export interface ActiveDirectoryError
  extends __ServiceException__<_ActiveDirectoryErrorDetails> {
  name: "ActiveDirectoryError";
}

export interface _ActiveDirectoryErrorDetails {
  /**
   * <p>The directory ID of the directory that an error pertains to.</p>
   */
  ActiveDirectoryId: string;

  /**
   * <p>The type of Active Directory error.</p>
   */
  Type?:
    | "DOMAIN_NOT_FOUND"
    | "INCOMPATIBLE_DOMAIN_MODE"
    | "WRONG_VPC"
    | "INVALID_DOMAIN_STAGE"
    | string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
