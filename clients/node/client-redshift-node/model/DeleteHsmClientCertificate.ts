import { DeleteHsmClientCertificateInput } from "./DeleteHsmClientCertificateInput";
import { DeleteHsmClientCertificateOutput } from "./DeleteHsmClientCertificateOutput";
import { InvalidHsmClientCertificateStateFault } from "./InvalidHsmClientCertificateStateFault";
import { HsmClientCertificateNotFoundFault } from "./HsmClientCertificateNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
