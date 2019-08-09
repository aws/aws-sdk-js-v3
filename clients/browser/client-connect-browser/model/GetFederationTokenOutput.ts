import { _Credentials } from "./_Credentials";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFederationTokenOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Credentials: {
      shape: _Credentials
    }
  }
};
