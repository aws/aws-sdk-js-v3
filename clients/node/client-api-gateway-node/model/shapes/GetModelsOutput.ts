import { _ListOfModel } from "./_ListOfModel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetModelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfModel,
      locationName: "item"
    }
  }
};
