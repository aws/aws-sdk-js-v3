import { _SpotInstanceRequestIdList } from "./_SpotInstanceRequestIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelSpotInstanceRequestsInput: _Structure_ = {
  type: "structure",
  required: ["SpotInstanceRequestIds"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    SpotInstanceRequestIds: {
      shape: _SpotInstanceRequestIdList,
      locationName: "SpotInstanceRequestId"
    }
  }
};
