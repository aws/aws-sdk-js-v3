import { _ThingAttributeList } from "./_ThingAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    things: {
      shape: _ThingAttributeList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
