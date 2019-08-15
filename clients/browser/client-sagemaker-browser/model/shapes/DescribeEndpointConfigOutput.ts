import { _ProductionVariantList } from "./_ProductionVariantList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointConfigOutput: _Structure_ = {
  type: "structure",
  required: [
    "EndpointConfigName",
    "EndpointConfigArn",
    "ProductionVariants",
    "CreationTime"
  ],
  members: {
    EndpointConfigName: {
      shape: {
        type: "string"
      }
    },
    EndpointConfigArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ProductionVariants: {
      shape: _ProductionVariantList
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
