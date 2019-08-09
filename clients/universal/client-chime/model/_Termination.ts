import { _CallingRegionList } from "./_CallingRegionList";
import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Termination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CpsLimit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    DefaultPhoneNumber: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    CallingRegions: {
      shape: _CallingRegionList
    },
    CidrAllowedList: {
      shape: _StringList
    },
    Disabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
