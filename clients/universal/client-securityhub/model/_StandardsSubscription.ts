import { _StandardsInputParameterMap } from "./_StandardsInputParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StandardsSubscription: _Structure_ = {
  type: "structure",
  required: [
    "StandardsSubscriptionArn",
    "StandardsArn",
    "StandardsInput",
    "StandardsStatus"
  ],
  members: {
    StandardsSubscriptionArn: {
      shape: {
        type: "string"
      }
    },
    StandardsArn: {
      shape: {
        type: "string"
      }
    },
    StandardsInput: {
      shape: _StandardsInputParameterMap
    },
    StandardsStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
