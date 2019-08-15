import { ___listOfDeviceDescription } from "./___listOfDeviceDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Devices: {
      shape: ___listOfDeviceDescription,
      locationName: "devices"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
