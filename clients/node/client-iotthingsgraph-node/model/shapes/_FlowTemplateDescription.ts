import { _FlowTemplateSummary } from "./_FlowTemplateSummary";
import { _DefinitionDocument } from "./_DefinitionDocument";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlowTemplateDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: _FlowTemplateSummary
    },
    definition: {
      shape: _DefinitionDocument
    },
    validatedNamespaceVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
