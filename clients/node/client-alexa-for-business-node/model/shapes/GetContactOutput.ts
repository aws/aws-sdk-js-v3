import { _Contact } from "./_Contact";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContactOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Contact: {
      shape: _Contact
    }
  }
};
