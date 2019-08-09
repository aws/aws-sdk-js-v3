import { _SubnetIds } from "./_SubnetIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterInput: _Structure_ = {
  type: "structure",
  required: ["SubnetIds", "HsmType"],
  members: {
    SubnetIds: {
      shape: _SubnetIds
    },
    HsmType: {
      shape: {
        type: "string"
      }
    },
    SourceBackupId: {
      shape: {
        type: "string"
      }
    }
  }
};
