import { _PatchGroupPatchBaselineMappingList } from "./_PatchGroupPatchBaselineMappingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePatchGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Mappings: {
      shape: _PatchGroupPatchBaselineMappingList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
