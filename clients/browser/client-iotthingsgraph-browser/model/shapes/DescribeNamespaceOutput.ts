import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNamespaceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    namespaceArn: {
      shape: {
        type: "string"
      }
    },
    namespaceName: {
      shape: {
        type: "string"
      }
    },
    trackingNamespaceName: {
      shape: {
        type: "string"
      }
    },
    trackingNamespaceVersion: {
      shape: {
        type: "integer"
      }
    },
    namespaceVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
