import { _ListOfUsagePlanKey } from "./_ListOfUsagePlanKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsagePlanKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfUsagePlanKey,
      locationName: "item"
    }
  }
};
