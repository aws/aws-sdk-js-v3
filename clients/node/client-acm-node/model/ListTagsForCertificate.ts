import { ListTagsForCertificateInput } from "./ListTagsForCertificateInput";
import { ListTagsForCertificateOutput } from "./ListTagsForCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
