import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEgressOnlyInternetGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReturnCode: {
      shape: {
        type: "boolean"
      },
      locationName: "returnCode"
    }
  }
};
