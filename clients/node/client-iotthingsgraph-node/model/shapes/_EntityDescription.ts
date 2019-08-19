import { _DefinitionDocument } from "./_DefinitionDocument";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    definition: {
      shape: _DefinitionDocument
    }
  }
};
