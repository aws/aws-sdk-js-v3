/**
 * <p>Describes an action and whether the action is enabled or disabled for users during their streaming sessions.</p>
 */
export interface _UserSetting {
  /**
   * <p>The action that is enabled or disabled.</p>
   */
  Action:
    | "CLIPBOARD_COPY_FROM_LOCAL_DEVICE"
    | "CLIPBOARD_COPY_TO_LOCAL_DEVICE"
    | "FILE_UPLOAD"
    | "FILE_DOWNLOAD"
    | "PRINTING_TO_LOCAL_DEVICE"
    | string;

  /**
   * <p>Indicates whether the action is enabled or disabled.</p>
   */
  Permission: "ENABLED" | "DISABLED" | string;
}

export type _UnmarshalledUserSetting = _UserSetting;
