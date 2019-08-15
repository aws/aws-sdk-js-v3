import { _EventTriggerDefinitionList } from "./_EventTriggerDefinitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LambdaArn: {
      shape: {
        type: "string"
      }
    },
    EventTriggers: {
      shape: _EventTriggerDefinitionList
    }
  }
};
