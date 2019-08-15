import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseBlueprint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    blueprintId: {
      shape: {
        type: "string"
      }
    },
    engine: {
      shape: {
        type: "string"
      }
    },
    engineVersion: {
      shape: {
        type: "string"
      }
    },
    engineDescription: {
      shape: {
        type: "string"
      }
    },
    engineVersionDescription: {
      shape: {
        type: "string"
      }
    },
    isEngineDefault: {
      shape: {
        type: "boolean"
      }
    }
  }
};
