import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateNumberOfDomainControllersInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "DesiredNumber"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    DesiredNumber: {
      shape: {
        type: "integer",
        min: 2
      }
    }
  }
};
