import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableImportFindingsForProductInput: _Structure_ = {
  type: "structure",
  required: ["ProductArn"],
  members: {
    ProductArn: {
      shape: {
        type: "string"
      }
    }
  }
};
