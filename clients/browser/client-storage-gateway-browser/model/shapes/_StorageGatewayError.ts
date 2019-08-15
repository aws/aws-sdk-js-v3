import { _errorDetails } from "./_errorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorageGatewayError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    errorCode: {
      shape: {
        type: "string"
      }
    },
    errorDetails: {
      shape: _errorDetails
    }
  }
};
