import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEmailIdentityInput: _Structure_ = {
  type: "structure",
  required: ["EmailIdentity"],
  members: {
    EmailIdentity: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
