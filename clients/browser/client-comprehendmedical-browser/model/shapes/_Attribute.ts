import { _TraitList } from "./_TraitList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Attribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Score: {
      shape: {
        type: "float"
      }
    },
    RelationshipScore: {
      shape: {
        type: "float"
      }
    },
    Id: {
      shape: {
        type: "integer"
      }
    },
    BeginOffset: {
      shape: {
        type: "integer"
      }
    },
    EndOffset: {
      shape: {
        type: "integer"
      }
    },
    Text: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Traits: {
      shape: _TraitList
    }
  }
};
