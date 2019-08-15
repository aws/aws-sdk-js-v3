import { _AcceleratorAttributes } from "./_AcceleratorAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAcceleratorAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceleratorAttributes: {
      shape: _AcceleratorAttributes
    }
  }
};
