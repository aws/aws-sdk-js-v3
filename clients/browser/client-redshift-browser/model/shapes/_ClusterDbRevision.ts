import { _RevisionTargetsList } from "./_RevisionTargetsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterDbRevision: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    CurrentDatabaseRevision: {
      shape: {
        type: "string"
      }
    },
    DatabaseRevisionReleaseDate: {
      shape: {
        type: "timestamp"
      }
    },
    RevisionTargets: {
      shape: _RevisionTargetsList
    }
  }
};
