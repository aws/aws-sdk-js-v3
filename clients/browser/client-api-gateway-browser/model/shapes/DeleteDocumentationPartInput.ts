import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDocumentationPartInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "documentationPartId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    documentationPartId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "part_id"
    }
  }
};
