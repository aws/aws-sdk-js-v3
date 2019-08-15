import { _UpdateEncryption } from "./_UpdateEncryption";
import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowEntitlementInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn", "EntitlementArn"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Encryption: {
      shape: _UpdateEncryption,
      locationName: "encryption"
    },
    EntitlementArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "entitlementArn"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "flowArn"
    },
    Subscribers: {
      shape: ___listOf__string,
      locationName: "subscribers"
    }
  }
};
