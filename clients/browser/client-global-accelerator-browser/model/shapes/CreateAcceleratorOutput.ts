import { _Accelerator } from "./_Accelerator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAcceleratorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Accelerator: {
      shape: _Accelerator
    }
  }
};
