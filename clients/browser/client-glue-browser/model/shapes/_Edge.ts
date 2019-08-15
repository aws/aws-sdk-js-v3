import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Edge: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DestinationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
