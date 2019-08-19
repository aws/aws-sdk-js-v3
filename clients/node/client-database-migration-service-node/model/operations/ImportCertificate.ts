import { ImportCertificateInput } from "../shapes/ImportCertificateInput";
import { ImportCertificateOutput } from "../shapes/ImportCertificateOutput";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { InvalidCertificateFault } from "../shapes/InvalidCertificateFault";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
