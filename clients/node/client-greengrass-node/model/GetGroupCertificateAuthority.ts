import { GetGroupCertificateAuthorityInput } from "./GetGroupCertificateAuthorityInput";
import { GetGroupCertificateAuthorityOutput } from "./GetGroupCertificateAuthorityOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroupCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroupCertificateAuthority",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}"
  },
  input: {
    shape: GetGroupCertificateAuthorityInput
  },
  output: {
    shape: GetGroupCertificateAuthorityOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
