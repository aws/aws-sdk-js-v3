import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProvisioningArtifactInput: _Structure_ = {
  type: "structure",
  required: ["ProvisioningArtifactId", "ProductId"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProvisioningArtifactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Verbose: {
      shape: {
        type: "boolean"
      }
    }
  }
};
