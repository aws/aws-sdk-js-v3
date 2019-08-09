import { CreateGroupCertificateAuthorityInput } from "./CreateGroupCertificateAuthorityInput";
import { CreateGroupCertificateAuthorityOutput } from "./CreateGroupCertificateAuthorityOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateGroupCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroupCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/greengrass/groups/{GroupId}/certificateauthorities"
  },
  input: {
    shape: CreateGroupCertificateAuthorityInput
  },
  output: {
    shape: CreateGroupCertificateAuthorityOutput
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
