import { CreateCertificateAuthorityInput } from "./CreateCertificateAuthorityInput";
import { CreateCertificateAuthorityOutput } from "./CreateCertificateAuthorityOutput";
import { InvalidArgsException } from "./InvalidArgsException";
import { InvalidPolicyException } from "./InvalidPolicyException";
import { InvalidTagException } from "./InvalidTagException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
