import { _ApplicationDescription } from "./_ApplicationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Application: {
      shape: _ApplicationDescription
    }
  }
};
