import { CreateGroupCertificateAuthorityInput } from "../shapes/CreateGroupCertificateAuthorityInput";
import { CreateGroupCertificateAuthorityOutput } from "../shapes/CreateGroupCertificateAuthorityOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
