import { ImportCertificateInput } from "./ImportCertificateInput";
import { ImportCertificateOutput } from "./ImportCertificateOutput";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { InvalidCertificateFault } from "./InvalidCertificateFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportCertificateInput
  },
  output: {
    shape: ImportCertificateOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: InvalidCertificateFault
    },
    {
      shape: ResourceQuotaExceededFault
    }
  ]
};
