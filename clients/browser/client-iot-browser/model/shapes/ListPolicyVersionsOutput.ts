import { _PolicyVersions } from "./_PolicyVersions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPolicyVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policyVersions: {
      shape: _PolicyVersions
    }
  }
};
