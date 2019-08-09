import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["GroupId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
    }
  }
};
