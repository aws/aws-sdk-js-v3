import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContactAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _Attributes
    }
  }
};
