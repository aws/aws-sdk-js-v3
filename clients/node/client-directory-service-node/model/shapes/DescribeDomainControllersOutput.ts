import { _DomainControllers } from "./_DomainControllers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDomainControllersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainControllers: {
      shape: _DomainControllers
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
