import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGameSessionLogUrlOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PreSignedUrl: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
