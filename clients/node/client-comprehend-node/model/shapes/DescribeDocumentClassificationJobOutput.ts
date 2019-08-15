import { _DocumentClassificationJobProperties } from "./_DocumentClassificationJobProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDocumentClassificationJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentClassificationJobProperties: {
      shape: _DocumentClassificationJobProperties
    }
  }
};
