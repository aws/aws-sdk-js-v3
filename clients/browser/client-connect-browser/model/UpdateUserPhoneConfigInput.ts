import { _UserPhoneConfig } from "./_UserPhoneConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserPhoneConfigInput: _Structure_ = {
  type: "structure",
  required: ["PhoneConfig", "UserId", "InstanceId"],
  members: {
    PhoneConfig: {
      shape: _UserPhoneConfig
    },
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "UserId"
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    }
  }
};
