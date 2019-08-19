import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNamedQueryInput: _Structure_ = {
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
