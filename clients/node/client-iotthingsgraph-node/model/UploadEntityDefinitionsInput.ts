import { _DefinitionDocument } from "./_DefinitionDocument";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadEntityDefinitionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    document: {
      shape: _DefinitionDocument
    },
    syncWithPublicNamespace: {
      shape: {
        type: "boolean"
      }
    },
    deprecateExistingEntities: {
      shape: {
        type: "boolean"
      }
    }
  }
};
