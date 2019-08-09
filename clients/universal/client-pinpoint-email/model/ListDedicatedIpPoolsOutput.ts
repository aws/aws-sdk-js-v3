import { _ListOfDedicatedIpPools } from "./_ListOfDedicatedIpPools";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDedicatedIpPoolsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DedicatedIpPools: {
      shape: _ListOfDedicatedIpPools
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
