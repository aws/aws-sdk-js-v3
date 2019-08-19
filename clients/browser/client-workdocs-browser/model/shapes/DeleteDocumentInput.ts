import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDocumentInput: _Structure_ = {
  type: "structure",
  required: ["DocumentId"],
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
    DocumentId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "DocumentId"
    }
  }
};
