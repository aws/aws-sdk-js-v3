import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Region: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Endpoint: {
      shape: {
        type: "string"
      },
      locationName: "regionEndpoint"
    },
    RegionName: {
      shape: {
        type: "string"
      },
      locationName: "regionName"
    },
    OptInStatus: {
      shape: {
        type: "string"
      },
      locationName: "optInStatus"
    }
  }
};
