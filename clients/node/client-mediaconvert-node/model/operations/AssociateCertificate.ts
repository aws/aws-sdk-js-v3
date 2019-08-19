import { AssociateCertificateInput } from "../shapes/AssociateCertificateInput";
import { AssociateCertificateOutput } from "../shapes/AssociateCertificateOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateCertificate",
  http: {
    method: "POST",
    requestUri: "/2017-08-29/certificates"
  },
  input: {
    shape: AssociateCertificateInput
  },
  output: {
    shape: AssociateCertificateOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
