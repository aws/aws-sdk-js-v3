import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IntOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DefaultValue: {
      shape: {
        type: "integer"
      }
    },
    SourceField: {
      shape: {
        type: "string",
        min: 1
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
    },
    SortEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
