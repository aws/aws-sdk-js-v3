import { _ListOfAuthorizer } from "./_ListOfAuthorizer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAuthorizersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfAuthorizer,
      locationName: "item"
    }
  }
};
