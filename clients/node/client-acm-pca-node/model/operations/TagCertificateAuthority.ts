import { TagCertificateAuthorityInput } from "../shapes/TagCertificateAuthorityInput";
import { TagCertificateAuthorityOutput } from "../shapes/TagCertificateAuthorityOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagCertificateAuthorityInput
  },
  output: {
    shape: TagCertificateAuthorityOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidTagException
    },
    {
      shape: TooManyTagsException
    }
  ]
};
