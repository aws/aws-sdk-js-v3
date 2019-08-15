import { _ApplicationIdsList } from "./_ApplicationIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApplicationsInput: _Structure_ = {
  type: "structure",
  required: ["configurationIds"],
  members: {
    configurationIds: {
      shape: _ApplicationIdsList
    }
  }
};
