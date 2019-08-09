import { _EntitlementList } from "./_EntitlementList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEntitlementsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entitlements: {
      shape: _EntitlementList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
