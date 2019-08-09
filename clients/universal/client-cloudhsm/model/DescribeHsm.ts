import { DescribeHsmInput } from "./DescribeHsmInput";
import { DescribeHsmOutput } from "./DescribeHsmOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
