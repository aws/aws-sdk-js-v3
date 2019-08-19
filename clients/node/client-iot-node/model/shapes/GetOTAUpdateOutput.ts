import { _OTAUpdateInfo } from "./_OTAUpdateInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOTAUpdateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    otaUpdateInfo: {
      shape: _OTAUpdateInfo
    }
  }
};
