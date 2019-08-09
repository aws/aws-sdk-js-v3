import { DescribeCertificateInput } from "./DescribeCertificateInput";
import { DescribeCertificateOutput } from "./DescribeCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCertificateInput
  },
  output: {
    shape: DescribeCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    }
  ]
};
