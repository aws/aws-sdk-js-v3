import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCompilationJobOutput: _Structure_ = {
  type: "structure",
  required: ["CompilationJobArn"],
  members: {
    CompilationJobArn: {
      shape: {
        type: "string"
      }
    }
  }
};
