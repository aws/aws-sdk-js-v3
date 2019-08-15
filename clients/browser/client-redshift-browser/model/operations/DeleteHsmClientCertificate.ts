import { DeleteHsmClientCertificateInput } from "../shapes/DeleteHsmClientCertificateInput";
import { DeleteHsmClientCertificateOutput } from "../shapes/DeleteHsmClientCertificateOutput";
import { InvalidHsmClientCertificateStateFault } from "../shapes/InvalidHsmClientCertificateStateFault";
import { HsmClientCertificateNotFoundFault } from "../shapes/HsmClientCertificateNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteHsmClientCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteHsmClientCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteHsmClientCertificateInput
  },
  output: {
    shape: DeleteHsmClientCertificateOutput
  },
  errors: [
    {
      shape: InvalidHsmClientCertificateStateFault
    },
    {
      shape: HsmClientCertificateNotFoundFault
    }
  ]
};
