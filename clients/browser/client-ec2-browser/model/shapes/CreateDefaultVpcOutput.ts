import { _Vpc } from "./_Vpc";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDefaultVpcOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Vpc: {
      shape: _Vpc,
      locationName: "vpc"
    }
  }
};
