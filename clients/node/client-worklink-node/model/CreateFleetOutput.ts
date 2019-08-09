import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
