import { ___listOfDevice } from "./___listOfDevice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeviceDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["DeviceDefinitionId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    DeviceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DeviceDefinitionId"
    },
    Devices: {
      shape: ___listOfDevice
    }
  }
};
