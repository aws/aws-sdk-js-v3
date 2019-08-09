import { ___listOfListedEntitlement } from "./___listOfListedEntitlement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEntitlementsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entitlements: {
      shape: ___listOfListedEntitlement,
      locationName: "entitlements"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
