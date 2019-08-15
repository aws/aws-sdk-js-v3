import { _DirectoryServiceAuthenticationRequest } from "./_DirectoryServiceAuthenticationRequest";
import { _CertificateAuthenticationRequest } from "./_CertificateAuthenticationRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClientVpnAuthenticationRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    ActiveDirectory: {
      shape: _DirectoryServiceAuthenticationRequest
    },
    MutualAuthentication: {
      shape: _CertificateAuthenticationRequest
    }
  }
};
