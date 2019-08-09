import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProvisioningParametersInput: _Structure_ = {
  type: "structure",
  required: ["ProductId", "ProvisioningArtifactId"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisioningArtifactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PathId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
