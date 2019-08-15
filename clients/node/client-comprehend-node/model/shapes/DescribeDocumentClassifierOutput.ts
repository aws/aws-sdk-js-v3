import { _DocumentClassifierProperties } from "./_DocumentClassifierProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDocumentClassifierOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentClassifierProperties: {
      shape: _DocumentClassifierProperties
    }
  }
};
