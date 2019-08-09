import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopTrainingDocumentClassifierInput: _Structure_ = {
  type: "structure",
  required: ["DocumentClassifierArn"],
  members: {
    DocumentClassifierArn: {
      shape: {
        type: "string"
      }
    }
  }
};
