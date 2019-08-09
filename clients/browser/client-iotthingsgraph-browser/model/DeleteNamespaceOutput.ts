import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNamespaceOutput: _Structure_ = {
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
    }
  }
};
