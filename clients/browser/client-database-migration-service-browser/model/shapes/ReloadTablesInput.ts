import { _TableListToReload } from "./_TableListToReload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReloadTablesInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationTaskArn", "TablesToReload"],
  members: {
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    },
    TablesToReload: {
      shape: _TableListToReload
    },
    ReloadOption: {
      shape: {
        type: "string"
      }
    }
  }
};
