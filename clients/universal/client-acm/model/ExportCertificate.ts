import { ExportCertificateInput } from "./ExportCertificateInput";
import { ExportCertificateOutput } from "./ExportCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RequestInProgressException } from "./RequestInProgressException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ExportCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExportCertificateInput
  },
  output: {
    shape: ExportCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: RequestInProgressException
    },
    {
      shape: InvalidArnException
    }
  ]
};
