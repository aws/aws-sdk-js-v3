import { _HlsAkamaiSettings } from "./_HlsAkamaiSettings";
import { _HlsBasicPutSettings } from "./_HlsBasicPutSettings";
import { _HlsMediaStoreSettings } from "./_HlsMediaStoreSettings";
import { _HlsWebdavSettings } from "./_HlsWebdavSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsCdnSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HlsAkamaiSettings: {
      shape: _HlsAkamaiSettings,
      locationName: "hlsAkamaiSettings"
    },
    HlsBasicPutSettings: {
      shape: _HlsBasicPutSettings,
      locationName: "hlsBasicPutSettings"
    },
    HlsMediaStoreSettings: {
      shape: _HlsMediaStoreSettings,
      locationName: "hlsMediaStoreSettings"
    },
    HlsWebdavSettings: {
      shape: _HlsWebdavSettings,
      locationName: "hlsWebdavSettings"
    }
  }
};
