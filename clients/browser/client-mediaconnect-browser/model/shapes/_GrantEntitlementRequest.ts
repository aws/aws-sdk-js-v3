import { _Encryption } from "./_Encryption";
import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GrantEntitlementRequest: _Structure_ = {
  type: "structure",
  required: ["Subscribers"],
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
