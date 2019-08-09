import { _Principals } from "./_Principals";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingPrincipalsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    principals: {
      shape: _Principals
    }
  }
};
