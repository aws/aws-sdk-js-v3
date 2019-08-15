import { DescribeClustersInput } from "../shapes/DescribeClustersInput";
import { DescribeClustersOutput } from "../shapes/DescribeClustersOutput";
import { CloudHsmInternalFailureException } from "../shapes/CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInvalidRequestException } from "../shapes/CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "../shapes/CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClustersInput
  },
  output: {
    shape: DescribeClustersOutput
  },
  errors: [
    {
      shape: CloudHsmInternalFailureException
    },
    {
      shape: CloudHsmServiceException
    },
    {
      shape: CloudHsmInvalidRequestException
    },
    {
      shape: CloudHsmAccessDeniedException
    }
  ]
};
