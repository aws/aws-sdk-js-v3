import { ExportCertificateInput } from "../shapes/ExportCertificateInput";
import { ExportCertificateOutput } from "../shapes/ExportCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RequestInProgressException } from "../shapes/RequestInProgressException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
