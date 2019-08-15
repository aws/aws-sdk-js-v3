import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IntArrayOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DefaultValue: {
      shape: {
        type: "integer"
      }
    },
    SourceFields: {
      shape: {
        type: "string"
      }
    },
    FacetEnabled: {
      shape: {
        type: "boolean"
      }
    },
    SearchEnabled: {
      shape: {
        type: "boolean"
      }
    },
    ReturnEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
