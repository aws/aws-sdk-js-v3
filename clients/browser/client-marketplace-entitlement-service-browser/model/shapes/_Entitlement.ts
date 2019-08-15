import { _EntitlementValue } from "./_EntitlementValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Entitlement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Dimension: {
      shape: {
        type: "string"
      }
    },
    CustomerIdentifier: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: _EntitlementValue
    },
    ExpirationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
