import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvokeAsyncInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName", "InvokeArgs"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FunctionName"
    },
    InvokeArgs: {
      shape: {
        type: "blob",
        streaming: true
      }
    }
  },
  payload: "InvokeArgs"
};
