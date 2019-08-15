import { _DefinitionDocument } from "./_DefinitionDocument";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFlowTemplateInput: _Structure_ = {
  type: "structure",
  required: ["definition"],
  members: {
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
