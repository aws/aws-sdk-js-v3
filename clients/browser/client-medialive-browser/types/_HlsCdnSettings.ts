import {
  _HlsAkamaiSettings,
  _UnmarshalledHlsAkamaiSettings
} from "./_HlsAkamaiSettings";
import {
  _HlsBasicPutSettings,
  _UnmarshalledHlsBasicPutSettings
} from "./_HlsBasicPutSettings";
import {
  _HlsMediaStoreSettings,
  _UnmarshalledHlsMediaStoreSettings
} from "./_HlsMediaStoreSettings";
import {
  _HlsWebdavSettings,
  _UnmarshalledHlsWebdavSettings
} from "./_HlsWebdavSettings";

/**
 * Hls Cdn Settings
 */
export interface _HlsCdnSettings {
  /**
   * Hls Akamai Settings
   */
  HlsAkamaiSettings?: _HlsAkamaiSettings;

  /**
   * Hls Basic Put Settings
   */
  HlsBasicPutSettings?: _HlsBasicPutSettings;

  /**
   * Hls Media Store Settings
   */
  HlsMediaStoreSettings?: _HlsMediaStoreSettings;

  /**
   * Hls Webdav Settings
   */
  HlsWebdavSettings?: _HlsWebdavSettings;
}

export interface _UnmarshalledHlsCdnSettings extends _HlsCdnSettings {
  /**
   * Hls Akamai Settings
   */
  HlsAkamaiSettings?: _UnmarshalledHlsAkamaiSettings;

  /**
   * Hls Basic Put Settings
   */
  HlsBasicPutSettings?: _UnmarshalledHlsBasicPutSettings;

  /**
   * Hls Media Store Settings
   */
  HlsMediaStoreSettings?: _UnmarshalledHlsMediaStoreSettings;

  /**
   * Hls Webdav Settings
   */
  HlsWebdavSettings?: _UnmarshalledHlsWebdavSettings;
}
