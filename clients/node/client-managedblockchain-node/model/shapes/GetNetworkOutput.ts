import { _Network } from "./_Network";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNetworkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Network: {
      shape: _Network
    }
  }
};
