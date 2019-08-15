import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryArgProfile: _Structure_ = {
  type: "structure",
  required: ["QueryArg", "ProfileId"],
  members: {
    QueryArg: {
      shape: {
        type: "string"
      }
    },
    ProfileId: {
      shape: {
        type: "string"
      }
    }
  }
};
