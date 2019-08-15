import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serviceArns: {
      shape: _StringList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
