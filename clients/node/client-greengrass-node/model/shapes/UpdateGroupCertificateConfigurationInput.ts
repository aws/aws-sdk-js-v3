import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGroupCertificateConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["GroupId"],
  members: {
    CertificateExpiryInMilliseconds: {
      shape: {
        type: "string"
      }
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
