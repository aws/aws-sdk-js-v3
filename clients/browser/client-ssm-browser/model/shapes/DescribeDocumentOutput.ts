import { _DocumentDescription } from "./_DocumentDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDocumentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Document: {
      shape: _DocumentDescription
    }
  }
};
