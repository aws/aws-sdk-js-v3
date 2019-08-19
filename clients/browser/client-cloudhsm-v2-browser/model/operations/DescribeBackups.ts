import { DescribeBackupsInput } from "../shapes/DescribeBackupsInput";
import { DescribeBackupsOutput } from "../shapes/DescribeBackupsOutput";
import { CloudHsmInternalFailureException } from "../shapes/CloudHsmInternalFailureException";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmResourceNotFoundException } from "../shapes/CloudHsmResourceNotFoundException";
import { CloudHsmInvalidRequestException } from "../shapes/CloudHsmInvalidRequestException";
import { CloudHsmAccessDeniedException } from "../shapes/CloudHsmAccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBackups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBackups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBackupsInput
  },
  output: {
    shape: DescribeBackupsOutput
  },
  errors: [
    {
      shape: CloudHsmInternalFailureException
    },
    {
      shape: CloudHsmServiceException
    },
    {
      shape: CloudHsmResourceNotFoundException
    },
    {
      shape: CloudHsmInvalidRequestException
    },
    {
      shape: CloudHsmAccessDeniedException
    }
  ]
};
