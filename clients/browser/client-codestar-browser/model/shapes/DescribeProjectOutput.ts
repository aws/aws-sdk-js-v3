import { _ProjectStatus } from "./_ProjectStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    id: {
      shape: {
        type: "string",
        min: 2
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    createdTimeStamp: {
      shape: {
        type: "timestamp"
      }
    },
    stackId: {
      shape: {
        type: "string"
      }
    },
    projectTemplateId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: _ProjectStatus
    }
  }
};
