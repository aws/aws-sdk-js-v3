import { _ProvisionedProductProperties } from "./_ProvisionedProductProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProvisionedProductPropertiesInput: _Structure_ = {
  type: "structure",
  required: [
    "ProvisionedProductId",
    "ProvisionedProductProperties",
    "IdempotencyToken"
  ],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProvisionedProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionedProductProperties: {
      shape: _ProvisionedProductProperties
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
