import { DeleteCertificateInput } from "../shapes/DeleteCertificateInput";
import { DeleteCertificateOutput } from "../shapes/DeleteCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCertificateInput
  },
  output: {
    shape: DeleteCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArnException
    }
  ]
};
