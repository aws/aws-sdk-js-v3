import { _ResourceServerType } from "./_ResourceServerType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResourceServerOutput: _Structure_ = {
  type: "structure",
  required: ["ResourceServer"],
  members: {
    ResourceServer: {
      shape: _ResourceServerType
    }
  }
};
