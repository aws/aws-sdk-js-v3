import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingGroupIndexingConfiguration: _Structure_ = {
  type: "structure",
  required: ["thingGroupIndexingMode"],
  members: {
    thingGroupIndexingMode: {
      shape: {
        type: "string"
      }
    }
  }
};
