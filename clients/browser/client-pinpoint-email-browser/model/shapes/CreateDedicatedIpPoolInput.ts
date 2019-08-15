import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDedicatedIpPoolInput: _Structure_ = {
  type: "structure",
  required: ["PoolName"],
  members: {
    PoolName: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
