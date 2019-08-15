import { Structure as _Structure_ } from "@aws-sdk/types";

export const ClientException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clusterName: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ClientException"
};
