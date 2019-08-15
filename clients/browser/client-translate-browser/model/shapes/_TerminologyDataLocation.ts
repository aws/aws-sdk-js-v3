import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TerminologyDataLocation: _Structure_ = {
  type: "structure",
  required: ["RepositoryType", "Location"],
  members: {
    RepositoryType: {
      shape: {
        type: "string"
      }
    },
    Location: {
      shape: {
        type: "string"
      }
    }
  }
};
