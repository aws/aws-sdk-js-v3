import { DescribeClustersInput } from "./DescribeClustersInput";
import { DescribeClustersOutput } from "./DescribeClustersOutput";
import { CloudHsmInternalFailureException } from "./CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInvalidRequestException } from "./CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "./CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
