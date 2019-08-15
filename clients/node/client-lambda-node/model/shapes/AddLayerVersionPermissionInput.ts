import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddLayerVersionPermissionInput: _Structure_ = {
  type: "structure",
  required: [
    "LayerName",
    "VersionNumber",
    "StatementId",
    "Action",
    "Principal"
  ],
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
      }
    },
    Action: {
      shape: {
        type: "string"
      }
    },
    Principal: {
      shape: {
        type: "string"
      }
    },
    OrganizationId: {
      shape: {
        type: "string"
      }
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
