import { RemoveTagsFromCertificateInput } from "../shapes/RemoveTagsFromCertificateInput";
import { RemoveTagsFromCertificateOutput } from "../shapes/RemoveTagsFromCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTagsFromCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsFromCertificateInput
  },
  output: {
    shape: RemoveTagsFromCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidTagException
    }
  ]
};
