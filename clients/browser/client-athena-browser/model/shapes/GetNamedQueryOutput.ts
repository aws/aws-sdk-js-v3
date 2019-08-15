import { _NamedQuery } from "./_NamedQuery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNamedQueryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NamedQuery: {
      shape: _NamedQuery
    }
  }
};
