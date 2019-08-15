import { _DirectoryServiceAuthentication } from "./_DirectoryServiceAuthentication";
import { _CertificateAuthentication } from "./_CertificateAuthentication";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClientVpnAuthentication: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    ActiveDirectory: {
      shape: _DirectoryServiceAuthentication,
      locationName: "activeDirectory"
    },
    MutualAuthentication: {
      shape: _CertificateAuthentication,
      locationName: "mutualAuthentication"
    }
  }
};
