import { _IPSetDescriptors } from "./_IPSetDescriptors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IPSet: _Structure_ = {
  type: "structure",
  required: ["IPSetId", "IPSetDescriptors"],
  members: {
    IPSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IPSetDescriptors: {
      shape: _IPSetDescriptors
    }
  }
};
