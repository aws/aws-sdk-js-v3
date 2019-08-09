import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNetworkInput: _Structure_ = {
  type: "structure",
  required: ["NetworkId"],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "networkId"
    }
  }
};
