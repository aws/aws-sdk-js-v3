import { TagCertificateAuthorityInput } from "./TagCertificateAuthorityInput";
import { TagCertificateAuthorityOutput } from "./TagCertificateAuthorityOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidTagException } from "./InvalidTagException";
import { TooManyTagsException } from "./TooManyTagsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
