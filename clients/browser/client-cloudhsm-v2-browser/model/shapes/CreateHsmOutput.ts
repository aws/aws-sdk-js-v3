import { _Hsm } from "./_Hsm";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHsmOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Hsm: {
      shape: _Hsm
    }
  }
};
