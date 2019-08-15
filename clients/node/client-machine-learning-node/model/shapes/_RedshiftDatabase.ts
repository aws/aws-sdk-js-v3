import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RedshiftDatabase: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "ClusterIdentifier"],
  members: {
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClusterIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
