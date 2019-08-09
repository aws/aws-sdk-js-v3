import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackInstancesForProvisionedProductInput: _Structure_ = {
  type: "structure",
  required: ["ProvisionedProductId"],
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
    PageToken: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
