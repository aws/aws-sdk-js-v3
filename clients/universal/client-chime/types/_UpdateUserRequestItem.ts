/**
 * <p>The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.</p>
 */
export interface _UpdateUserRequestItem {
  /**
   * <p>The user ID.</p>
   */
  UserId: string;

  /**
   * <p>The user license type.</p>
   */
  LicenseType?: "Basic" | "Plus" | "Pro" | "ProTrial" | string;
}

export type _UnmarshalledUpdateUserRequestItem = _UpdateUserRequestItem;
