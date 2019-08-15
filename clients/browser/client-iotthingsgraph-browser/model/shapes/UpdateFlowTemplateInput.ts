import { _DefinitionDocument } from "./_DefinitionDocument";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowTemplateInput: _Structure_ = {
  type: "structure",
  required: ["id", "definition"],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    definition: {
      shape: _DefinitionDocument
    },
    compatibleNamespaceVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
