import { _ApplicationVersionDescription } from "./_ApplicationVersionDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationVersion: {
      shape: _ApplicationVersionDescription
    }
  }
};
