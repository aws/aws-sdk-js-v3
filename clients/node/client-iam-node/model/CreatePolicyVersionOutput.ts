import { _PolicyVersion } from "./_PolicyVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePolicyVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyVersion: {
      shape: _PolicyVersion
    }
  }
};
