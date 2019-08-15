import { _CmafGroupSettings } from "./_CmafGroupSettings";
import { _DashIsoGroupSettings } from "./_DashIsoGroupSettings";
import { _FileGroupSettings } from "./_FileGroupSettings";
import { _HlsGroupSettings } from "./_HlsGroupSettings";
import { _MsSmoothGroupSettings } from "./_MsSmoothGroupSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CmafGroupSettings: {
      shape: _CmafGroupSettings,
      locationName: "cmafGroupSettings"
    },
    DashIsoGroupSettings: {
      shape: _DashIsoGroupSettings,
      locationName: "dashIsoGroupSettings"
    },
    FileGroupSettings: {
      shape: _FileGroupSettings,
      locationName: "fileGroupSettings"
    },
    HlsGroupSettings: {
      shape: _HlsGroupSettings,
      locationName: "hlsGroupSettings"
    },
    MsSmoothGroupSettings: {
      shape: _MsSmoothGroupSettings,
      locationName: "msSmoothGroupSettings"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
