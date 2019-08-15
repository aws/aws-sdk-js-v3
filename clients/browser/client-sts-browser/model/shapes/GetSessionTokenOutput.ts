import { _Credentials } from "./_Credentials";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSessionTokenOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Credentials: {
      shape: _Credentials
    }
  }
};
