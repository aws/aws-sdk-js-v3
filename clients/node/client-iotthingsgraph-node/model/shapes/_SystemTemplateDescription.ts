import { _SystemTemplateSummary } from "./_SystemTemplateSummary";
import { _DefinitionDocument } from "./_DefinitionDocument";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SystemTemplateDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: _SystemTemplateSummary
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
