import {
  _CmafGroupSettings,
  _UnmarshalledCmafGroupSettings
} from "./_CmafGroupSettings";
import {
  _DashIsoGroupSettings,
  _UnmarshalledDashIsoGroupSettings
} from "./_DashIsoGroupSettings";
import {
  _FileGroupSettings,
  _UnmarshalledFileGroupSettings
} from "./_FileGroupSettings";
import {
  _HlsGroupSettings,
  _UnmarshalledHlsGroupSettings
} from "./_HlsGroupSettings";
import {
  _MsSmoothGroupSettings,
  _UnmarshalledMsSmoothGroupSettings
} from "./_MsSmoothGroupSettings";

/**
 * Output Group settings, including type
 */
export interface _OutputGroupSettings {
  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
   */
  CmafGroupSettings?: _CmafGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
   */
  DashIsoGroupSettings?: _DashIsoGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
   */
  FileGroupSettings?: _FileGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
   */
  HlsGroupSettings?: _HlsGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
   */
  MsSmoothGroupSettings?: _MsSmoothGroupSettings;

  /**
   * Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)
   */
  Type?:
    | "HLS_GROUP_SETTINGS"
    | "DASH_ISO_GROUP_SETTINGS"
    | "FILE_GROUP_SETTINGS"
    | "MS_SMOOTH_GROUP_SETTINGS"
    | "CMAF_GROUP_SETTINGS"
    | string;
}

export interface _UnmarshalledOutputGroupSettings extends _OutputGroupSettings {
  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
   */
  CmafGroupSettings?: _UnmarshalledCmafGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
   */
  DashIsoGroupSettings?: _UnmarshalledDashIsoGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
   */
  FileGroupSettings?: _UnmarshalledFileGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
   */
  HlsGroupSettings?: _UnmarshalledHlsGroupSettings;

  /**
   * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
   */
  MsSmoothGroupSettings?: _UnmarshalledMsSmoothGroupSettings;
}
