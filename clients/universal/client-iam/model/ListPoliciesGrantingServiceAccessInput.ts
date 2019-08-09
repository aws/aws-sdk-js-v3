import { _serviceNamespaceListType } from "./_serviceNamespaceListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesGrantingServiceAccessInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "ServiceNamespaces"],
  members: {
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ServiceNamespaces: {
      shape: _serviceNamespaceListType
    }
  }
};
