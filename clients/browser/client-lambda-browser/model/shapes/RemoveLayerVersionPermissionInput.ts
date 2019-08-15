import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveLayerVersionPermissionInput: _Structure_ = {
  type: "structure",
  required: ["LayerName", "VersionNumber", "StatementId"],
  members: {
    LayerName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "LayerName"
    },
    VersionNumber: {
      shape: {
        type: "integer"
      },
      location: "uri",
      locationName: "VersionNumber"
    },
    StatementId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "StatementId"
    },
    RevisionId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "RevisionId"
    }
  }
};
