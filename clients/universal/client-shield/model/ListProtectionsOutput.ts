import { _Protections } from "./_Protections";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProtectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Protections: {
      shape: _Protections
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
