import { ListTagsForCertificateInput } from "../shapes/ListTagsForCertificateInput";
import { ListTagsForCertificateOutput } from "../shapes/ListTagsForCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForCertificateInput
  },
  output: {
    shape: ListTagsForCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    }
  ]
};
