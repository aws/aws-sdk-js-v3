import { _FleetAttributes } from "./_FleetAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetAttributes: {
      shape: _FleetAttributes
    }
  }
};
