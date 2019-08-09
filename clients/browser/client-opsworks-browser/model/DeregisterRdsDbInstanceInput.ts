import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterRdsDbInstanceInput: _Structure_ = {
  type: "structure",
  required: ["RdsDbInstanceArn"],
  members: {
    RdsDbInstanceArn: {
      shape: {
        type: "string"
      }
    }
  }
};
