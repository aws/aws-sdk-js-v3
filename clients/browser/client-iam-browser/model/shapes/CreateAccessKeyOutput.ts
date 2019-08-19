import { _AccessKey } from "./_AccessKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAccessKeyOutput: _Structure_ = {
  type: "structure",
  required: ["AccessKey"],
  members: {
    AccessKey: {
      shape: _AccessKey
    }
  }
};
