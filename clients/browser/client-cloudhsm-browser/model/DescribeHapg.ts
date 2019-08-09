import { DescribeHapgInput } from "./DescribeHapgInput";
import { DescribeHapgOutput } from "./DescribeHapgOutput";
import { CloudHsmServiceException } from "./CloudHsmServiceException";
import { CloudHsmInternalException } from "./CloudHsmInternalException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
