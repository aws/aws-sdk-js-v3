import { _ApplicationArnList } from "./_ApplicationArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PushSync: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationArns: {
      shape: _ApplicationArnList
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
