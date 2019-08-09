import { ImportCertificateInput } from "./ImportCertificateInput";
import { ImportCertificateOutput } from "./ImportCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
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
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
