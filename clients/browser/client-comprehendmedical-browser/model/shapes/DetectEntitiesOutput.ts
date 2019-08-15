import { _EntityList } from "./_EntityList";
import { _UnmappedAttributeList } from "./_UnmappedAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectEntitiesOutput: _Structure_ = {
  type: "structure",
  required: ["Entities"],
  members: {
    Entities: {
      shape: _EntityList
    },
    UnmappedAttributes: {
      shape: _UnmappedAttributeList
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
