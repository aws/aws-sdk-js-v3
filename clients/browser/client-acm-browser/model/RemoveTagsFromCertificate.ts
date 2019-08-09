import { RemoveTagsFromCertificateInput } from "./RemoveTagsFromCertificateInput";
import { RemoveTagsFromCertificateOutput } from "./RemoveTagsFromCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidTagException } from "./InvalidTagException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
