import { GetServerCertificateInput } from "../shapes/GetServerCertificateInput";
import { GetServerCertificateOutput } from "../shapes/GetServerCertificateOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetServerCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServerCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServerCertificateInput
  },
  output: {
    shape: GetServerCertificateOutput,
    resultWrapper: "GetServerCertificateResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
