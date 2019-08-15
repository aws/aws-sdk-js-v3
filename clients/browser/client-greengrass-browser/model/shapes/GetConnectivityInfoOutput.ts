import { ___listOfConnectivityInfo } from "./___listOfConnectivityInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectivityInfoOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectivityInfo: {
      shape: ___listOfConnectivityInfo
    },
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    }
  }
};
