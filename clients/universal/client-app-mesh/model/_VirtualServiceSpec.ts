import { _VirtualServiceProvider } from "./_VirtualServiceProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualServiceSpec: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    provider: {
      shape: _VirtualServiceProvider
    }
  }
};
