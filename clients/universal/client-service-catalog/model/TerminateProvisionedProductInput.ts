import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateProvisionedProductInput: _Structure_ = {
  type: "structure",
  required: ["TerminateToken"],
  members: {
    ProvisionedProductName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionedProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TerminateToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IgnoreErrors: {
      shape: {
        type: "boolean"
      }
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    }
  }
};
