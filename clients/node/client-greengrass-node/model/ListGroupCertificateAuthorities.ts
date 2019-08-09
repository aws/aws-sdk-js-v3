import { ListGroupCertificateAuthoritiesInput } from "./ListGroupCertificateAuthoritiesInput";
import { ListGroupCertificateAuthoritiesOutput } from "./ListGroupCertificateAuthoritiesOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
