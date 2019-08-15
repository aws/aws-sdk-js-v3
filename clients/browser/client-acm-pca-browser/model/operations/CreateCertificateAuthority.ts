import { CreateCertificateAuthorityInput } from "../shapes/CreateCertificateAuthorityInput";
import { CreateCertificateAuthorityOutput } from "../shapes/CreateCertificateAuthorityOutput";
import { InvalidArgsException } from "../shapes/InvalidArgsException";
import { InvalidPolicyException } from "../shapes/InvalidPolicyException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCertificateAuthorityInput
  },
  output: {
    shape: CreateCertificateAuthorityOutput
  },
  errors: [
    {
      shape: InvalidArgsException
    },
    {
      shape: InvalidPolicyException
    },
    {
      shape: InvalidTagException
    },
    {
      shape: LimitExceededException
    }
  ]
};
