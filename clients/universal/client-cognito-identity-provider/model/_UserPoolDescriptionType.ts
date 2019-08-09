import { _LambdaConfigType } from "./_LambdaConfigType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPoolDescriptionType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LambdaConfig: {
      shape: _LambdaConfigType
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
