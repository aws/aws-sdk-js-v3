import { _Destination } from "./_Destination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDestinationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    destination: {
      shape: _Destination
    }
  }
};
