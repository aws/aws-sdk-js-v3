import { _ListOfResource } from "./_ListOfResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfResource,
      locationName: "item"
    }
  }
};
