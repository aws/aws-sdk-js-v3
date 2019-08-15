import { _MappingList } from "./_MappingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMappingOutput: _Structure_ = {
  type: "structure",
  required: ["Mapping"],
  members: {
    Mapping: {
      shape: _MappingList
    }
  }
};
