import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServerEngineAttributesInput: _Structure_ = {
  type: "structure",
  required: ["ServerName", "AttributeName"],
  members: {
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AttributeValue: {
      shape: {
        type: "string"
      }
    }
  }
};
