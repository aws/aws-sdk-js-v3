import { _NamespaceSummariesList } from "./_NamespaceSummariesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNamespacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Namespaces: {
      shape: _NamespaceSummariesList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
