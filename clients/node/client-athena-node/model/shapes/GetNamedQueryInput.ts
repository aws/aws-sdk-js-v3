import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNamedQueryInput: _Structure_ = {
  type: "structure",
  required: ["NamedQueryId"],
  members: {
    NamedQueryId: {
      shape: {
        type: "string"
      }
    }
  }
};
