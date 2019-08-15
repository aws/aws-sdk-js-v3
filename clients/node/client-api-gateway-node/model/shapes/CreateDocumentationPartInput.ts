import { _DocumentationPartLocation } from "./_DocumentationPartLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDocumentationPartInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "location", "properties"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    location: {
      shape: _DocumentationPartLocation
    },
    properties: {
      shape: {
        type: "string"
      }
    }
  }
};
