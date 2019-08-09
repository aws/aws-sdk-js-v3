import { _ResourceArns } from "./_ResourceArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourcesForWebACLOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceArns: {
      shape: _ResourceArns
    }
  }
};
