import { _ListOfBasePathMapping } from "./_ListOfBasePathMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBasePathMappingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfBasePathMapping,
      locationName: "item"
    }
  }
};
