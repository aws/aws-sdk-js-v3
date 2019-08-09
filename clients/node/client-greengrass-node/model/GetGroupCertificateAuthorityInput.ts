import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGroupCertificateAuthorityInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityId", "GroupId"],
  members: {
    CertificateAuthorityId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "CertificateAuthorityId"
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
