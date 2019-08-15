import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MemberId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
