import { _NetworkInterface } from "./_NetworkInterface";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkInterfaceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterface: {
      shape: _NetworkInterface,
      locationName: "networkInterface"
    }
  }
};
