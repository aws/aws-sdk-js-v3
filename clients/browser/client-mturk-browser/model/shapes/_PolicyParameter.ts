import { _StringList } from "./_StringList";
import { _ParameterMapEntryList } from "./_ParameterMapEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _StringList
    },
    MapEntries: {
      shape: _ParameterMapEntryList
    }
  }
};
