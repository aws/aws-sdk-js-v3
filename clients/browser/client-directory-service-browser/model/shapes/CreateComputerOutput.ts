import { _Computer } from "./_Computer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateComputerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Computer: {
      shape: _Computer
    }
  }
};
