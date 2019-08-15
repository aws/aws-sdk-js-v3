import { _QueryArgProfileConfig } from "./_QueryArgProfileConfig";
import { _ContentTypeProfileConfig } from "./_ContentTypeProfileConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldLevelEncryptionConfig: _Structure_ = {
  type: "structure",
  required: ["CallerReference"],
  members: {
    CallerReference: {
      shape: {
        type: "string"
      }
    },
    Comment: {
      shape: {
        type: "string"
      }
    },
    QueryArgProfileConfig: {
      shape: _QueryArgProfileConfig
    },
    ContentTypeProfileConfig: {
      shape: _ContentTypeProfileConfig
    }
  }
};
