import { _Subnet } from "./_Subnet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDefaultSubnetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Subnet: {
      shape: _Subnet,
      locationName: "subnet"
    }
  }
};
