import { _SendDataPointList } from "./_SendDataPointList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSendStatisticsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SendDataPoints: {
      shape: _SendDataPointList
    }
  }
};
