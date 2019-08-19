import { _Organization } from "./_Organization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOrganizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Organization: {
      shape: _Organization
    }
  }
};
