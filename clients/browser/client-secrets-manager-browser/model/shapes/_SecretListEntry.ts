import { _RotationRulesType } from "./_RotationRulesType";
import { _TagListType } from "./_TagListType";
import { _SecretVersionsToStagesMapType } from "./_SecretVersionsToStagesMapType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecretListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    RotationEnabled: {
      shape: {
        type: "boolean"
      }
    },
    RotationLambdaARN: {
      shape: {
        type: "string"
      }
    },
    RotationRules: {
      shape: _RotationRulesType
    },
    LastRotatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastChangedDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastAccessedDate: {
      shape: {
        type: "timestamp"
      }
    },
    DeletedDate: {
      shape: {
        type: "timestamp"
      }
    },
    Tags: {
      shape: _TagListType
    },
    SecretVersionsToStages: {
      shape: _SecretVersionsToStagesMapType
    },
    OwningService: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
