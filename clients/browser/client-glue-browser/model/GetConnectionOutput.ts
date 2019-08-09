import { _Connection } from "./_Connection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConnectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Connection: {
      shape: _Connection
    }
  }
};
