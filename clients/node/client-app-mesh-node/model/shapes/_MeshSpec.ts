import { _EgressFilter } from "./_EgressFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MeshSpec: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    egressFilter: {
      shape: _EgressFilter
    }
  }
};
