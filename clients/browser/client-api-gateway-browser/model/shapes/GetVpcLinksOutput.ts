import { _ListOfVpcLink } from "./_ListOfVpcLink";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetVpcLinksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfVpcLink,
      locationName: "item"
    }
  }
};
