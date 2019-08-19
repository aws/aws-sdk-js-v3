import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReportedOs: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Family: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};
