import { _DomainControllerIds } from "./_DomainControllerIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDomainControllersInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    DomainControllerIds: {
      shape: _DomainControllerIds
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
