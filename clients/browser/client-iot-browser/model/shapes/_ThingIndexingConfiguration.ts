import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingIndexingConfiguration: _Structure_ = {
  type: "structure",
  required: ["thingIndexingMode"],
  members: {
    thingIndexingMode: {
      shape: {
        type: "string"
      }
    },
    thingConnectivityIndexingMode: {
      shape: {
        type: "string"
      }
    }
  }
};
