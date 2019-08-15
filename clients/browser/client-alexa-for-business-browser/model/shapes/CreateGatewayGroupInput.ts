import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGatewayGroupInput: _Structure_ = {
  type: "structure",
  required: ["Name", "ClientRequestToken"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    }
  }
};
