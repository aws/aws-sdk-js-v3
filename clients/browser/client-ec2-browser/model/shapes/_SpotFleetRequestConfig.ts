import { _SpotFleetRequestConfigData } from "./_SpotFleetRequestConfigData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotFleetRequestConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActivityStatus: {
      shape: {
        type: "string"
      },
      locationName: "activityStatus"
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
    },
    SpotFleetRequestConfig: {
      shape: _SpotFleetRequestConfigData,
      locationName: "spotFleetRequestConfig"
    },
    SpotFleetRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestId"
    },
    SpotFleetRequestState: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestState"
    }
  }
};
