import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDedicatedIpInput: _Structure_ = {
  type: "structure",
  required: ["Ip"],
  members: {
    Ip: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "IP"
    }
  }
};
