import { DescribeCertificatesInput } from "../shapes/DescribeCertificatesInput";
import { DescribeCertificatesOutput } from "../shapes/DescribeCertificatesOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCertificatesInput
  },
  output: {
    shape: DescribeCertificatesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
