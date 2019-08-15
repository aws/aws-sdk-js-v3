import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupId: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
