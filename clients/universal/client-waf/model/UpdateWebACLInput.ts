import { _WebACLUpdates } from "./_WebACLUpdates";
import { _WafAction } from "./_WafAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateWebACLInput: _Structure_ = {
  type: "structure",
  required: ["WebACLId", "ChangeToken"],
  members: {
    WebACLId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _WebACLUpdates
    },
    DefaultAction: {
      shape: _WafAction
    }
  }
};
