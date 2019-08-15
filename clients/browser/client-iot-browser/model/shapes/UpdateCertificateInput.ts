import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCertificateInput: _Structure_ = {
  type: "structure",
  required: ["certificateId", "newStatus"],
  members: {
    certificateId: {
      shape: {
        type: "string",
        min: 64
      },
      location: "uri",
      locationName: "certificateId"
    },
    newStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "newStatus"
    }
  }
};
