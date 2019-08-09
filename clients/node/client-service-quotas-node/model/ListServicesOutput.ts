import { _ServiceInfoListDefinition } from "./_ServiceInfoListDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Services: {
      shape: _ServiceInfoListDefinition
    }
  }
};
