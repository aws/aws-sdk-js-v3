import { _ListOfRestApi } from "./_ListOfRestApi";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRestApisOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfRestApi,
      locationName: "item"
    }
  }
};
