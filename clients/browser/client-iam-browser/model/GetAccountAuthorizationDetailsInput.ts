import { _entityListType } from "./_entityListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccountAuthorizationDetailsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _entityListType
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
