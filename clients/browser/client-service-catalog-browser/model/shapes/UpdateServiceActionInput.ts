import { _ServiceActionDefinitionMap } from "./_ServiceActionDefinitionMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceActionInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Definition: {
      shape: _ServiceActionDefinitionMap
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    }
  }
};
