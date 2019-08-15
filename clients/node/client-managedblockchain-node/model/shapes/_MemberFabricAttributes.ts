import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberFabricAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdminUsername: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CaEndpoint: {
      shape: {
        type: "string"
      }
    }
  }
};
