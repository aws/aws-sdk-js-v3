import { _BuildIds } from "./_BuildIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetBuildsInput: _Structure_ = {
  type: "structure",
  required: ["ids"],
  members: {
    ids: {
      shape: _BuildIds
    }
  }
};
