import { Structure as _Structure_ } from "@aws-sdk/types";

export const ForgetSmartHomeAppliancesInput: _Structure_ = {
  type: "structure",
  required: ["RoomArn"],
  members: {
    RoomArn: {
      shape: {
        type: "string"
      }
    }
  }
};
