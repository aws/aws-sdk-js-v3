import { DescribeHsmInput } from "../shapes/DescribeHsmInput";
import { DescribeHsmOutput } from "../shapes/DescribeHsmOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeHsm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHsm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHsmInput
  },
  output: {
    shape: DescribeHsmOutput
  },
  errors: [
    {
      shape: CloudHsmServiceException
    },
    {
      shape: CloudHsmInternalException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
