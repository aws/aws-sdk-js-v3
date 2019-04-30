import { _BaiduChannelResponse } from "./_BaiduChannelResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBaiduChannelOutput: _Structure_ = {
  type: "structure",
  required: ["BaiduChannelResponse"],
  members: {
    BaiduChannelResponse: {
      shape: _BaiduChannelResponse
    }
  },
  payload: "BaiduChannelResponse"
};
