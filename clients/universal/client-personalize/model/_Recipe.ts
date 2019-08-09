import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Recipe: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    recipeArn: {
      shape: {
        type: "string"
      }
    },
    algorithmArn: {
      shape: {
        type: "string"
      }
    },
    featureTransformationArn: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    creationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    recipeType: {
      shape: {
        type: "string"
      }
    },
    lastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
