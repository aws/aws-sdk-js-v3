import { _CustomMetadataKeyList } from "./_CustomMetadataKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCustomMetadataInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
  members: {
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "ResourceId"
    },
    VersionId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "versionId"
    },
    Keys: {
      shape: _CustomMetadataKeyList,
      location: "querystring",
      locationName: "keys"
    },
    DeleteAll: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "deleteAll"
    }
  }
};
