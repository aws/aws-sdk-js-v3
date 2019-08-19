import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HttpHeader: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    headerName: {
      shape: {
        type: "string"
      }
    },
    headerValue: {
      shape: {
        type: "string"
      }
    }
  }
};
