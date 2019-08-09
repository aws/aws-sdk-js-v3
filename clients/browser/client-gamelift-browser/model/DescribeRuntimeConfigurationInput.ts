import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRuntimeConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["FleetId"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    }
  }
};
