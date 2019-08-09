import { _ServiceActionDefinitionMap } from "./_ServiceActionDefinitionMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceActionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "DefinitionType", "Definition", "IdempotencyToken"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DefinitionType: {
      shape: {
        type: "string"
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
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
