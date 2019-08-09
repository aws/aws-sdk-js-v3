import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPlanOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PythonScript: {
      shape: {
        type: "string"
      }
    },
    ScalaCode: {
      shape: {
        type: "string"
      }
    }
  }
};
