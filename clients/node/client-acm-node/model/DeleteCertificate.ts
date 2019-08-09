import { DeleteCertificateInput } from "./DeleteCertificateInput";
import { DeleteCertificateOutput } from "./DeleteCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
