import { _TraitList } from "./_TraitList";
import { _AttributeList } from "./_AttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Entity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    Score: {
      shape: {
        type: "float"
      }
    },
    Text: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Category: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Traits: {
      shape: _TraitList
    },
    Attributes: {
      shape: _AttributeList
    }
  }
};
