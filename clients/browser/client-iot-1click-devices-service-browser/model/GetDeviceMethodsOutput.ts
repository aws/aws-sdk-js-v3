import { ___listOfDeviceMethod } from "./___listOfDeviceMethod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeviceMethodsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceMethods: {
      shape: ___listOfDeviceMethod,
      locationName: "deviceMethods"
    }
  }
};
