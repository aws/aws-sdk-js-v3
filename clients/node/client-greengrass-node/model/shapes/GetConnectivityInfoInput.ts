import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectivityInfoInput: _Structure_ = {
  type: "structure",
  required: ["ThingName"],
  members: {
    ThingName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ThingName"
    }
  }
};
