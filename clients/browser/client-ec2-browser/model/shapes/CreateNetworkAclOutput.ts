import { _NetworkAcl } from "./_NetworkAcl";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkAclOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkAcl: {
      shape: _NetworkAcl,
      locationName: "networkAcl"
    }
  }
};
