import {
  _DestinationSettings,
  _UnmarshalledDestinationSettings
} from "./_DestinationSettings";
import {
  _MsSmoothEncryptionSettings,
  _UnmarshalledMsSmoothEncryptionSettings
} from "./_MsSmoothEncryptionSettings";

/**
 * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
 */
export interface _MsSmoothGroupSettings {
  /**
   * COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.
   */
  AudioDeduplication?: "COMBINE_DUPLICATE_STREAMS" | "NONE" | string;

  /**
   * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
   */
  Destination?: string;

  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _DestinationSettings;

  /**
   * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
   */
  Encryption?: _MsSmoothEncryptionSettings;

  /**
   * Use Fragment length (FragmentLength) to specify the mp4 fragment sizes in seconds. Fragment length must be compatible with GOP size and frame rate.
   */
  FragmentLength?: number;

  /**
   * Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.
   */
  ManifestEncoding?: "UTF8" | "UTF16" | string;
}

export interface _UnmarshalledMsSmoothGroupSettings
  extends _MsSmoothGroupSettings {
  /**
   * Settings associated with the destination. Will vary based on the type of destination
   */
  DestinationSettings?: _UnmarshalledDestinationSettings;

  /**
   * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
   */
  Encryption?: _UnmarshalledMsSmoothEncryptionSettings;
}
