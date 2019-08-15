import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Dataset: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    datasetArn: {
      shape: {
        type: "string"
      }
    },
    datasetGroupArn: {
      shape: {
        type: "string"
      }
    },
    datasetType: {
      shape: {
        type: "string"
      }
    },
    schemaArn: {
      shape: {
        type: "string"
      }
    },
    status: {
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
