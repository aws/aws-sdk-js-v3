import { _CustomMetadataMap } from "./_CustomMetadataMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomMetadataInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "CustomMetadata"],
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
      locationName: "versionid"
    },
    CustomMetadata: {
      shape: _CustomMetadataMap
    }
  }
};
