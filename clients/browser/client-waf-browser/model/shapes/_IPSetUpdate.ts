import { _IPSetDescriptor } from "./_IPSetDescriptor";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IPSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "IPSetDescriptor"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    IPSetDescriptor: {
      shape: _IPSetDescriptor
    }
  }
};
