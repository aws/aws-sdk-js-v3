import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PropertyNameQuery: _Structure_ = {
  type: "structure",
  required: ["PropertyNameHint"],
  members: {
    PropertyNameHint: {
      shape: {
        type: "string"
      }
    }
  }
};
