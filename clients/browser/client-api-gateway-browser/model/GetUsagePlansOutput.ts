import { _ListOfUsagePlan } from "./_ListOfUsagePlan";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsagePlansOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfUsagePlan,
      locationName: "item"
    }
  }
};
