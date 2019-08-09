import { AssociateCertificateInput } from "./AssociateCertificateInput";
import { AssociateCertificateOutput } from "./AssociateCertificateOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
