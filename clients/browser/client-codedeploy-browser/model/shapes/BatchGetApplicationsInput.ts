import { _ApplicationsList } from "./_ApplicationsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetApplicationsInput: _Structure_ = {
  type: "structure",
  required: ["applicationNames"],
  members: {
    applicationNames: {
      shape: _ApplicationsList
    }
  }
};
