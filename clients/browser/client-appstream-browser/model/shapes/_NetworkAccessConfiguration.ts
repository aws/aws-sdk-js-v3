import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkAccessConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EniPrivateIpAddress: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EniId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
