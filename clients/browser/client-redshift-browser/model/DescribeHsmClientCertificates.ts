import { DescribeHsmClientCertificatesInput } from "./DescribeHsmClientCertificatesInput";
import { DescribeHsmClientCertificatesOutput } from "./DescribeHsmClientCertificatesOutput";
import { HsmClientCertificateNotFoundFault } from "./HsmClientCertificateNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeHsmClientCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHsmClientCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHsmClientCertificatesInput
  },
  output: {
    shape: DescribeHsmClientCertificatesOutput,
    resultWrapper: "DescribeHsmClientCertificatesResult"
  },
  errors: [
    {
      shape: HsmClientCertificateNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
