import { _ListOfRequestValidator } from "./_ListOfRequestValidator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRequestValidatorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfRequestValidator,
      locationName: "item"
    }
  }
};
