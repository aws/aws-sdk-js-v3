import { _ListString } from "./_ListString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSMSAttributesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attributes: {
      shape: _ListString
    }
  }
};
