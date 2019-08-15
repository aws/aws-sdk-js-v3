import { ListGroupCertificateAuthoritiesInput } from "../shapes/ListGroupCertificateAuthoritiesInput";
import { ListGroupCertificateAuthoritiesOutput } from "../shapes/ListGroupCertificateAuthoritiesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGroupCertificateAuthorities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupCertificateAuthorities",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups/{GroupId}/certificateauthorities"
  },
  input: {
    shape: ListGroupCertificateAuthoritiesInput
  },
  output: {
    shape: ListGroupCertificateAuthoritiesOutput
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
