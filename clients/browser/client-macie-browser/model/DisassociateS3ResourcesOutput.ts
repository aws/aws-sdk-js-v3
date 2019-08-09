import { _FailedS3Resources } from "./_FailedS3Resources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateS3ResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    failedS3Resources: {
      shape: _FailedS3Resources
    }
  }
};
