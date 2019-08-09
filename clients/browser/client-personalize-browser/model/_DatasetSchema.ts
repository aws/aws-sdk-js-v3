import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetSchema: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    schemaArn: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    },
    creationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
