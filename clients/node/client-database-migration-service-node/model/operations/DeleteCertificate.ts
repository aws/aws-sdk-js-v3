import { DeleteCertificateInput } from "../shapes/DeleteCertificateInput";
import { DeleteCertificateOutput } from "../shapes/DeleteCertificateOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
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
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};
