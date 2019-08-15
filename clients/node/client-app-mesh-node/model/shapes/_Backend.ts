import { _VirtualServiceBackend } from "./_VirtualServiceBackend";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Backend: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualService: {
      shape: _VirtualServiceBackend
    }
  }
};
