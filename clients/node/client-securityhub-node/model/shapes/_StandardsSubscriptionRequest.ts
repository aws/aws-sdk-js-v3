import { _StandardsInputParameterMap } from "./_StandardsInputParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StandardsSubscriptionRequest: _Structure_ = {
  type: "structure",
  required: ["StandardsArn"],
  members: {
    StandardsArn: {
      shape: {
        type: "string"
      }
    },
    StandardsInput: {
      shape: _StandardsInputParameterMap
    }
  }
};
