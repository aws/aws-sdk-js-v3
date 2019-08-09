import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpgradeAppliedSchemaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UpgradedSchemaArn: {
      shape: {
        type: "string"
      }
    },
    DirectoryArn: {
      shape: {
        type: "string"
      }
    }
  }
};
