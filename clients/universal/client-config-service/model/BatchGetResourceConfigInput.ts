import { _ResourceKeys } from "./_ResourceKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetResourceConfigInput: _Structure_ = {
  type: "structure",
  required: ["resourceKeys"],
  members: {
    resourceKeys: {
      shape: _ResourceKeys
    }
  }
};
