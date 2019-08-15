import { _StackInstances } from "./_StackInstances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackInstancesForProvisionedProductOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackInstances: {
      shape: _StackInstances
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
