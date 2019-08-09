import { _ServiceChange } from "./_ServiceChange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceInput: _Structure_ = {
  type: "structure",
  required: ["Id", "Service"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Service: {
      shape: _ServiceChange
    }
  }
};
