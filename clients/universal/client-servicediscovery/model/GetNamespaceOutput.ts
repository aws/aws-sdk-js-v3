import { _Namespace } from "./_Namespace";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNamespaceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Namespace: {
      shape: _Namespace
    }
  }
};
