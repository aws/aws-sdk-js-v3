/**
 * Use these settings to set up encryption with a static key provider.
 */
export interface _StaticKeyProvider {
  /**
   * Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.
   */
  KeyFormat?: string;

  /**
   * Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value (StaticKeyValue).
   */
  StaticKeyValue?: string;

  /**
   * Relates to DRM implementation. The location of the license server used for protecting content.
   */
  Url?: string;
}

export type _UnmarshalledStaticKeyProvider = _StaticKeyProvider;
