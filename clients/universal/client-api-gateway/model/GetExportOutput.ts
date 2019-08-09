import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    contentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    contentDisposition: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Disposition"
    },
    body: {
      shape: {
        type: "blob"
      }
    }
  },
  payload: "body"
};
