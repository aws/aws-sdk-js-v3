import { ___listOfDevice } from "./___listOfDevice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceDefinitionVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Devices: {
      shape: ___listOfDevice
    }
  }
};
