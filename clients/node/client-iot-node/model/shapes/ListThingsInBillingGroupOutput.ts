import { _ThingNameList } from "./_ThingNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingsInBillingGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    things: {
      shape: _ThingNameList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
