import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvokeInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FunctionName"
    },
    InvocationType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amz-Invocation-Type"
    },
    LogType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amz-Log-Type"
    },
    ClientContext: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amz-Client-Context"
    },
    Payload: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    Qualifier: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "Qualifier"
    }
  },
  payload: "Payload"
};
