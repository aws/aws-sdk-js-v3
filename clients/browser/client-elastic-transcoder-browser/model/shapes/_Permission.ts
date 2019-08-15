import { _AccessControls } from "./_AccessControls";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Permission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GranteeType: {
      shape: {
        type: "string"
      }
    },
    Grantee: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Access: {
      shape: _AccessControls
    }
  }
};
