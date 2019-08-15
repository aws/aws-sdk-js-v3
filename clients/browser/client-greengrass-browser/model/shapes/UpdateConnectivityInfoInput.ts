import { ___listOfConnectivityInfo } from "./___listOfConnectivityInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConnectivityInfoInput: _Structure_ = {
  type: "structure",
  required: ["ThingName"],
  members: {
    ConnectivityInfo: {
      shape: ___listOfConnectivityInfo
    },
    ThingName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ThingName"
    }
  }
};
