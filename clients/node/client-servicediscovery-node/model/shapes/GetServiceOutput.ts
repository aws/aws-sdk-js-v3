import { _Service } from "./_Service";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServiceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Service: {
      shape: _Service
    }
  }
};
