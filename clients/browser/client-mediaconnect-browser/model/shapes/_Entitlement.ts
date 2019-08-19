import { _Encryption } from "./_Encryption";
import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Entitlement: _Structure_ = {
  type: "structure",
  required: ["EntitlementArn", "Subscribers", "Name"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Encryption: {
      shape: _Encryption,
      locationName: "encryption"
    },
    EntitlementArn: {
      shape: {
        type: "string"
      },
      locationName: "entitlementArn"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Subscribers: {
      shape: ___listOf__string,
      locationName: "subscribers"
    }
  }
};
