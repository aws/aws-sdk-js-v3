import { _DbGroupList } from "./_DbGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetClusterCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["DbUser", "ClusterIdentifier"],
  members: {
    DbUser: {
      shape: {
        type: "string"
      }
    },
    DbName: {
      shape: {
        type: "string"
      }
    },
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DurationSeconds: {
      shape: {
        type: "integer"
      }
    },
    AutoCreate: {
      shape: {
        type: "boolean"
      }
    },
    DbGroups: {
      shape: _DbGroupList
    }
  }
};
