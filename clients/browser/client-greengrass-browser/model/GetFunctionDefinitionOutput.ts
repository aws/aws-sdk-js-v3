import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFunctionDefinitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    LastUpdatedTimestamp: {
      shape: {
        type: "string"
      }
    },
    LatestVersion: {
      shape: {
        type: "string"
      }
    },
    LatestVersionArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
