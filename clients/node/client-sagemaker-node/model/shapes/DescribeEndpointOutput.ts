import { _ProductionVariantSummaryList } from "./_ProductionVariantSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointOutput: _Structure_ = {
  type: "structure",
  required: [
    "EndpointName",
    "EndpointArn",
    "EndpointConfigName",
    "EndpointStatus",
    "CreationTime",
    "LastModifiedTime"
  ],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    },
    EndpointArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    EndpointConfigName: {
      shape: {
        type: "string"
      }
    },
    ProductionVariants: {
      shape: _ProductionVariantSummaryList
    },
    EndpointStatus: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
