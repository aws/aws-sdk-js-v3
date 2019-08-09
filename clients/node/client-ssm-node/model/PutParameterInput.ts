import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutParameterInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Value", "Type"],
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
    Value: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    KeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Overwrite: {
      shape: {
        type: "boolean"
      }
    },
    AllowedPattern: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    Tier: {
      shape: {
        type: "string"
      }
    },
    Policies: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
