import { DescribeHapgInput } from "../shapes/DescribeHapgInput";
import { DescribeHapgOutput } from "../shapes/DescribeHapgOutput";
import { CloudHsmServiceException } from "../shapes/CloudHsmServiceException";
import { CloudHsmInternalException } from "../shapes/CloudHsmInternalException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeHapg: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHapg",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHapgInput
  },
  output: {
    shape: DescribeHapgOutput
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
